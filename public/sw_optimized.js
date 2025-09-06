const CACHE_NAME = 'arenados-blasting-v2';
const STATIC_CACHE_NAME = 'arenados-blasting-static-v2';
const DYNAMIC_CACHE_NAME = 'arenados-blasting-dynamic-v2';

// Detectar entorno de desarrollo para logging condicional
const isDevelopment = self.location.hostname === 'localhost' || self.location.hostname === '127.0.0.1';
const log = (...args) => {
  if (!isDevelopment || args[0].includes('Error')) {
    console.log(...args);
  }
};

// Recursos críticos para cache
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/icon-page.svg',
  '/img/logo2.webp',
  '/img/hero3.webp',
  '/img/logo-redes.png'
];

// Recursos que se pueden cachear dinámicamente
const DYNAMIC_ASSETS_PATTERNS = [
  /\/_next\/static\//,
  /\/img\//,
  /\/_next\/image/
];

// Install event
self.addEventListener('install', (event) => {
  log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        log('Service Worker: Static assets cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Install failed', error);
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - estrategia de cache optimizada
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo cachear requests del mismo origen
  if (url.origin !== location.origin) {
    return;
  }

  // Estrategia para recursos estáticos
  if (STATIC_ASSETS.some(asset => url.pathname === asset)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE_NAME));
    return;
  }

  // Estrategia para imágenes
  if (request.destination === 'image' || url.pathname.startsWith('/img/')) {
    event.respondWith(cacheFirst(request, DYNAMIC_CACHE_NAME));
    return;
  }

  // Estrategia para páginas HTML
  if (request.mode === 'navigate' || 
      (request.method === 'GET' && request.headers.get('accept')?.includes('text/html'))) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE_NAME));
    return;
  }

  // Para otros recursos (CSS, JS, fonts)
  if (request.destination === 'style' || 
      request.destination === 'script' || 
      request.destination === 'font' ||
      DYNAMIC_ASSETS_PATTERNS.some(pattern => pattern.test(url.pathname))) {
    event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE_NAME));
    return;
  }
});

// Estrategia Cache First - para recursos estáticos
async function cacheFirst(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      // Solo log en producción para cache hits importantes
      if (!isDevelopment) {
        log('Service Worker: Serving from cache', request.url);
      }
      return cachedResponse;
    }
    
    log('Service Worker: Fetching and caching', request.url);
    const networkResponse = await fetch(request);
    
    if (networkResponse && networkResponse.status === 200) {
      const responseToCache = networkResponse.clone();
      await cache.put(request, responseToCache);
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Cache first failed', error);
    return new Response('Network error', { status: 503 });
  }
}

// Estrategia Network First - para páginas HTML
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(cacheName);
      const responseToCache = networkResponse.clone();
      await cache.put(request, responseToCache);
    }
    
    return networkResponse;
  } catch (error) {
    log('Service Worker: Network failed, trying cache', request.url);
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    return new Response('Offline - Page not available', { status: 503 });
  }
}

// Estrategia Stale While Revalidate - para recursos actualizables
async function staleWhileRevalidate(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    // Fetch en segundo plano para actualizar cache
    const fetchPromise = fetch(request).then((networkResponse) => {
      if (networkResponse && networkResponse.status === 200) {
        const responseToCache = networkResponse.clone();
        cache.put(request, responseToCache);
      }
      return networkResponse;
    }).catch(() => {
      // Si falla la red, no hacer nada
    });
    
    // Retornar cache inmediatamente si existe, sino esperar red
    if (cachedResponse) {
      if (!isDevelopment) {
        log('Service Worker: Serving stale content', request.url);
      }
      // Ejecutar fetch en background sin esperar
      fetchPromise;
      return cachedResponse;
    }
    
    // Si no hay cache, esperar la red
    return await fetchPromise;
  } catch (error) {
    console.error('Service Worker: Stale while revalidate failed', error);
    return new Response('Network error', { status: 503 });
  }
}

// Background sync para acciones offline
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    log('Service Worker: Background sync triggered');
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Implementar sincronización en background si es necesario
  log('Service Worker: Performing background sync');
}

// Push notifications (preparado para futuro)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    log('Service Worker: Push notification received', data);
    
    const options = {
      body: data.body,
      icon: '/img/logo2.webp',
      badge: '/icon-page.svg',
      vibrate: [100, 50, 100],
      data: {
        url: data.url
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Manejo de clicks en notificaciones
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.notification.data.url) {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
});
