import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse">
          Hi, I'm Imals Fao
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          A passionate learner exploring <span className="text-blue-400">TypeScript</span>, building cutting-edge web
          projects, and striving to create the most impactful user experiences.
        </p>
      </header>

      {/* Cards Section */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg group transform hover:scale-105 transition duration-500">
          <h2 className="text-2xl font-bold text-blue-400 group-hover:text-purple-400 mb-4">Why TypeScript?</h2>
          <p className="text-gray-300">
            TypeScript helps me write safer, scalable, and maintainable code by adding type safety and catching errors
            early during development.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg group transform hover:scale-105 transition duration-500">
          <h2 className="text-2xl font-bold text-blue-400 group-hover:text-purple-400 mb-4">Current Projects</h2>
          <p className="text-gray-300">
            I'm creating React applications with TypeScript and Tailwind CSS to enhance my front-end development skills.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg group transform hover:scale-105 transition duration-500">
          <h2 className="text-2xl font-bold text-blue-400 group-hover:text-purple-400 mb-4">Tailwind CSS Mastery</h2>
          <p className="text-gray-300">
            Leveraging the power of Tailwind CSS to design responsive, elegant, and highly customized user interfaces.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg group transform hover:scale-105 transition duration-500">
          <h2 className="text-2xl font-bold text-blue-400 group-hover:text-purple-400 mb-4">My Aspirations</h2>
          <p className="text-gray-300">
            I aim to become a full-stack developer, creating impactful web applications that solve real-world problems.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg group transform hover:scale-105 transition duration-500">
          <h2 className="text-2xl font-bold text-blue-400 group-hover:text-purple-400 mb-4">Learning Journey</h2>
          <p className="text-gray-300">
            Exploring new tools, libraries, and technologies like TypeScript and Next.js to stay ahead in the tech
            world.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <p className="text-gray-400">
          Crafted with ❤️ and powered by <span className="text-blue-400">TypeScript</span>. 🚀
        </p>
      </footer>
    </div>
  );
};

export default App;
