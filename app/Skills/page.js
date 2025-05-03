"use client";

import { FaCode, FaPaintBrush, FaDatabase, FaFileAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SkillsPage() {

  const skills = [
    {
      id: 1,
      icon: <FaCode className="text-pink-400 text-4xl dark:text-pink-300" />,
      title: "Web Development",
      description:
        "Membangun website interaktif menggunakan Next.js, React, dan Tailwind CSS, menggunakan bantuan AI.",
    },
    {
      id: 2,
      icon: <FaPaintBrush className="text-pink-400 text-4xl dark:text-pink-300" />,
      title: "UI/UX Design",
      description:
        "Merancang tampilan website yang menarik dan user-friendly menggunakan Figma.",
    },
    {
      id: 3,
      icon: <FaDatabase className="text-pink-400 text-4xl dark:text-pink-300" />,
      title: "Database Management",
      description: "Mengelola database menggunakan Xampp.",
    },
    {
      id: 4,
      icon: <FaFileAlt className="text-pink-400 text-4xl dark:text-pink-300" />,
      title: "Microsoft Word & Excel",
      description: "Mampu membuat laporan terstruktur menggunakan Microsoft Office.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-pink-100 text-purple-900 dark:bg-pink-950 dark:text-purple-100">
      {/* Foto Profil */}
      <Image
        src="/profil.jpeg"
        alt="Foto Profil Salza Afryad Rahman"
        width={128}
        height={128}
        priority
        className="w-32 h-32 rounded-full border-4 border-purple-400 shadow-lg"
      />

      {/* Judul */}
      <h2 className="text-4xl font-bold mt-4 text-purple-700 dark:text-pink-300">Keahlian Saya</h2>
      <p className="mt-2 max-w-lg text-purple-800 dark:text-pink-200">
        Berikut adalah beberapa keterampilan yang saya kuasai. Klik untuk informasi lebih lanjut.
      </p>

      {/* Daftar Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-6 w-full max-w-6xl">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="bg-white text-purple-800 dark:bg-purple-900 dark:text-pink-200 shadow-md rounded-xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * skill.id }}
          >
            <div className="mb-4 flex justify-center">{skill.icon}</div>
            <h3 className="text-lg font-semibold">{skill.title}</h3>
            <p className="mt-2">{skill.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Tombol ke Beranda */}
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-pink-400 hover:text-purple-900 transition duration-300"
      >
        Kembali ke Beranda
      </Link>
    </section>
  );
}
