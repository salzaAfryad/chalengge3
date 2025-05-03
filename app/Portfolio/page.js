import Link from 'next/link';
import { FaBriefcase } from 'react-icons/fa';

const portfolios = [
  {
    id: '1',
    title: "Website Portfolio",
    description: "Saya membuat website portfolio menggunakan Next.js dan Tailwind CSS.",
  },
  {
    id: '2',
    title: "UI/UX Mendesain Project Kuliah",
    description: "Mendesain tampilan aplikasi dengan Figma dan CorelDraw untuk tugas kuliah.",
  },
  {
    id: '3',
    title: "Proyek Sistem Informasi",
    description: "Mengembangkan sistem informasi berbasis web untuk tugas kuliah.",
  }
];

export default function PortfolioPage() {
  return (
    <section className="w-full px-4 py-10 md:py-16 flex flex-col items-center bg-pink-100 text-purple-900 dark:bg-purple-950 dark:text-purple-100">
      <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 dark:text-pink-300 mb-8 text-center">
        Portfolio
      </h1>
      <div className="max-w-4xl w-full space-y-6">
        {portfolios.map((portfolio) => (
          <div
            key={portfolio.id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 bg-white dark:bg-purple-800 rounded-lg shadow-md transition hover:shadow-lg"
          >
            <div className="flex-shrink-0">
              <FaBriefcase className="text-pink-400 text-4xl" />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-bold text-purple-800 dark:text-pink-200">
                {portfolio.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {portfolio.description}
              </p>
              <Link
                href={`/portfolio/${portfolio.id}`}
                className="text-purple-700 dark:text-pink-400 font-medium hover:underline"
              >
                Lihat Detail →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
