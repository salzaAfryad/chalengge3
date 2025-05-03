'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="w-full px-4 py-8 md:py-12 flex flex-col items-center bg-pink-100 text-purple-900 dark:bg-purple-950 dark:text-purple-100">
      {/* Container konten */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8">
        {/* Foto */}
        <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden border-4 border-purple-400 shadow-lg">
          <Image
            src="/profil.jpeg"
            alt="Foto Salza Afryad Rahman"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Biodata */}
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700 dark:text-pink-300">
            Salza Afryad Rahman
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-purple-800 dark:text-pink-200">
            Hai! Saya adalah seorang mahasiswa semester 4 prodi sistem informasi,
            fakultas komputer, Ma'soem University.
          </p>
          <p className="text-base sm:text-lg text-purple-600 dark:text-pink-400">
            📍 Bandung, Indonesia
          </p>
        </div>
      </div>

      {/* Tombol Kembali ke Beranda */}
      <div className="w-full mt-10 flex justify-center">
        <Link href="/" passHref>
          <span className="inline-block px-6 py-2 text-sm sm:text-base bg-purple-700 text-white rounded-md shadow-md hover:bg-pink-400 hover:text-purple-900 dark:bg-pink-500 dark:hover:bg-pink-600 transition duration-300">
            ← Kembali ke Beranda
          </span>
        </Link>
      </div>
    </section>
  );
}
