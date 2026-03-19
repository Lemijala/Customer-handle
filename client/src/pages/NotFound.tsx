const NotFound = () => (
  <div className="min-h-screen bg-background-dark flex flex-col items-center justify-center text-white px-4 text-center">
    <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">404</div>
    <h1 className="text-2xl font-bold mb-2">Page not found</h1>
    <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
    <a
      href="/"
      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold py-3 px-6 rounded-xl hover:scale-105 transition-transform duration-300"
    >
      <span className="material-symbols-outlined text-[18px]">home</span>
      Back to Home
    </a>
  </div>
);

export default NotFound;
