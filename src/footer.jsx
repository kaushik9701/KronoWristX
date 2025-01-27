const Footer = () => {
    return (
      <footer className="w-full bg-black text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Contact Me</h2>
            <p>Email: <a href="mailto:bandikaushikreddy@gmail.com" className="text-blue-400 hover:underline">bandikaushikreddy@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/kaushik-reddy-bandi-1ba624257/" className="text-blue-400 hover:underline">www.linkedin.com/in/kaushik-bandi</a></p>
            <p>GitHub: <a href="https://github.com/kaushik9701" className="text-blue-400 hover:underline">https://github.com/kaushik9701</a></p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Tech Stack Used</h2>
            <ul className="space-y-2">
              <li>🔹 JavaScript,Typescript</li>
              <li>🔹 React, Zustand, Three.js, React Three Fiber</li>
              <li>🔹 Tailwind CSS, GSAP, Scroll Trigger </li>
              <li>🔹 Node.js, Express, MongoDB, PostgreSQL</li>
              <li>🔹 GitHub, Vercel </li>
              <li>🔹 Blender (3D Modeling) Vector Ink(SVG)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Credits</h2>
            <p>3D Model: <a href="https://sketchfab.com/" className="text-blue-400 hover:underline">Sketchfab</a> polyman Studio</p>
            <p>Images: <a href="https://www.apple.com/" className="text-blue-400 hover:underline">Apple's Website</a></p>
          </div>
        </div>
        <div className="mt-10 text-center border-t border-gray-700 pt-6">
          <p>© {new Date().getFullYear()} Kaushik Bandi. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  