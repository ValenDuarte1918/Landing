"use client";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit = async (data: any) => {
    const publicKey = "1wuDzjzzPzthPPBpJ"; 

    try {
      const response = await emailjs.send(
        "service_ywwx9xl",
        "template_587tial",
        data,
        publicKey
      );
      console.log("Correo enviado con éxito:", response.status, response.text);
      setIsSuccess(true);
      setMessage("¡Mensaje enviado con éxito!");
      reset(); // Limpia el formulario solo si el envío fue exitoso
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setIsSuccess(false);
      setMessage("Hubo un error al enviar el mensaje.");
    }
  };

  return (
    <section className="py-16 bg-gradient-custom1">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-customBlue shadow-lg rounded-lg">
          <div className="flex flex-col items-center justify-center h-32 p-5 bg-indigo-500">
            <h3 className="text-xl text-white">¿Cómo podemos ayudar?</h3>
            <p className="text-white opacity-50">
              Te responderemos lo antes posible.
            </p>
          </div>
          <div className="p-6">
            {!isSubmitSuccessful && (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mb-4">
                  <label
                    htmlFor="full_name"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    placeholder="Tu nombre"
                    {...register("name", {
                      required: "Tu nombre es requerido",
                      maxLength: 80,
                    })}
                    className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring ${
                      errors.name
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                    }`}
                  />
                  {errors.name && (
                    <div className="mt-1 text-sm text-red-400 invalid-feedback">
                      {errors.name.message as string}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Tu correo electrónico es requerido",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Por favor ingresa un correo válido",
                      },
                    })}
                    placeholder="Tu correo electrónico"
                    className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring ${
                      errors.email
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                    }`}
                  />
                  {errors.email && (
                    <div className="mt-1 text-sm text-red-400 invalid-feedback">
                      {errors.email.message as string}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    {...register("message", {
                      required: "Tu mensaje es requerido",
                    })}
                    placeholder="Tu mensaje..."
                    className={`w-full px-3 py-2 text-gray-600 placeholder-gray-300 bg-white border border-gray-300 rounded-md h-28 focus:outline-none focus:ring ${
                      errors.message
                        ? "border-red-600 focus:border-red-600 ring-red-100"
                        : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                    }`}
                    required
                  ></textarea>
                  {errors.message && (
                    <div className="mt-1 text-sm text-red-400 invalid-feedback">
                      {errors.message.message as string}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-btn rounded-md focus:bg-indigo-600 focus:outline-none"
                  >
                    {isSubmitting ? (
                      <svg
                        className="w-5 h-5 mx-auto text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      "Enviar Mensaje"
                    )}
                  </button>
                </div>
              </form>
            )}

            {isSubmitSuccessful && isSuccess && (
              <div className="text-center">
                <h3 className="text-xl text-green-500">¡Mensaje enviado con éxito!</h3>
                <button
                  className="inline-flex items-center justify-center px-3 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none"
                  onClick={() => reset()}
                >
                  Volver
                </button>
              </div>
            )}

            {isSubmitSuccessful && !isSuccess && (
              <div className="text-center">
                <h3 className="text-xl text-red-400">Hubo un error al enviar el mensaje</h3>
                <button
                  className="inline-flex items-center justify-center px-3 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none"
                  onClick={() => reset()}
                >
                  Volver
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}