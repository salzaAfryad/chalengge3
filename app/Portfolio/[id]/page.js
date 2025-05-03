export async function generateStaticParams() {
    // Membuat params untuk setiap portfolio
    return ['1', '2', '3'].map((id) => ({ id }));
  }
  
  const portfolioDetails = {
    '1': {
      title: 'Website Portfolio',
      description: 'Saya membuat website portfolio menggunakan Next.js dan Tailwind CSS.',
      technologies: ['Next.js', 'Tailwind CSS'],
    },
    '2': {
      title: 'UI/UX Mendesain Project Kuliah',
      description: 'Mendesain tampilan aplikasi dengan Figma dan CorelDraw untuk tugas kuliah.',
      technologies: ['Figma', 'CorelDraw'],
    },
    '3': {
      title: 'Proyek Sistem Informasi',
      description: 'Mengembangkan sistem informasi berbasis web untuk tugas kuliah.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    },
  };
  
  export default function PortfolioDetail({ params }) {
    const detail = portfolioDetails[params.id];
  
    if (!detail) {
      return (
        <section className="w-full min-h-screen flex items-center justify-center bg-pink-100 text-purple-900 dark:bg-purple-950 dark:text-purple-100 px-4">
          <p className="text-xl font-semibold">Portfolio tidak ditemukan.</p>
        </section>
      );
    }
  
    const { title, description, technologies } = detail;
  
    return (
      <section className="w-full min-h-screen px-4 py-10 md:py-16 flex flex-col items-center bg-pink-100 text-purple-900 dark:bg-purple-950 dark:text-purple-100">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 dark:text-pink-300 mb-6 text-center">{title}</h1>
          <p className="text-lg sm:text-xl text-purple-800 dark:text-pink-200 mb-6 text-center">{description}</p>
  
          <div className="bg-white dark:bg-purple-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-pink-300 mb-4">Teknologi yang Digunakan:</h2>
            <ul className="list-disc pl-6 text-purple-800 dark:text-pink-200 space-y-2">
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
  
          <div className="mt-8 text-center">
            <a
              href="/portfolio"
              className="inline-block bg-purple-700 text-white dark:bg-pink-500 dark:hover:bg-pink-400 hover:bg-purple-600 px-6 py-2 rounded-full transition"
            >
              Kembali ke Portfolio
            </a>
          </div>
        </div>
      </section>
    );
  }
  