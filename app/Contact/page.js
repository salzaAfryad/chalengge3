"use client";

import { FaEnvelope, FaWhatsapp, FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  const contacts = [
    {
      id: 1,
      icon: <FaEnvelope className="text-pink-400 text-4xl dark:text-pink-300" />,
      title: "Email",
      value: "salzaafryad9@gmail.com",
      href: "mailto:salzaafryad9@gmail.com",
    },
    {
      id: 2,
      icon: <FaWhatsapp className="text-pink-400 text-4xl dark:text-pink-300" />,
      title: "WhatsApp",
      value: "0812-2054-1743",
      href: "https://wa.me/6281220541743",
    },
    {
      id: 3,
      icon: <FaLocationArrow className="text-pink-400 text-4xl dark:text-pink-300" />,
      title: "Lokasi",
      value: "Solokanjeruk, Jawa Barat",
      href: "#", // opsional
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-pink-100 text-purple-900 dark:bg-pink-950 dark:text-purple-100">
      {/* Judul */}
      <h2 className="text-4xl font-bold mt-4 text-purple-700 dark:text-pink-300">Hubungi Saya</h2>
      <p className="mt-2 max-w-lg text-purple-800 dark:text-pink-200">
        Silakan hubungi saya melalui informasi kontak di bawah ini.
      </p>

      {/* Daftar Kontak */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full max-w-5xl">
        {contacts.map((item) => (
          <motion.a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-800 dark:bg-purple-900 dark:text-pink-200 shadow-md rounded-xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * item.id }}
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2">{item.value}</p>
          </motion.a>
        ))}
      </div>

      {/* Tombol ke Beranda */}
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-pink-400 hover:text-purple-900 transition duration-300"
      >
        ← Kembali ke Beranda
      </Link>
    </section>
  );
}
