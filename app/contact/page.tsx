'use client';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = {
      fullName: (form.elements.namedItem('fullName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('Mensaje enviado con éxito ');
        form.reset();
      } else {
        setStatus('Error al enviar el mensaje');
      }
    } catch {
      setStatus('Error al enviar el mensaje ');
    }
  };

  return (
    <div className="max-w-md mx-auto py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Contáctame</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-lg">
        <input name="fullName" placeholder="Nombre completo" className="border p-3 rounded-lg w-full" required />
        <input name="email" type="email" placeholder="Correo electrónico" className="border p-3 rounded-lg w-full" required />
        <textarea name="message" placeholder="Mensaje" rows={5} className="border p-3 rounded-lg w-full" required />
        <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold hover:opacity-90 transition">
          Enviar mensaje
        </button>
        {status && <p className="mt-2 text-center text-gray-700">{status}</p>}
      </form>
    </div>
  );
}
