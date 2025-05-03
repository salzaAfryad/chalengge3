import './globals.css'; // ✅ Sudah betul
import Navbar from '../components/Navbar'; // Mengimpor Navbar
import { Inter } from 'next/font/google'; // Mengimpor font Inter dari Google

const inter = Inter({ subsets: ['latin'] }); // Menggunakan font Inter untuk seluruh halaman

export const metadata = {
  title: 'My CV Website', // Judul halaman yang muncul di tab browser
  description: 'Salza Ananda Portfolio', // Deskripsi halaman yang muncul di tab browser
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags untuk SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-black dark:text-white`}>
        <Navbar />
        {children} {/* Konten halaman yang sedang ditampilkan */}
      </body>
    </html>
  );
}
