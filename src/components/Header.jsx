import React ,{useState}from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import roopesh_logo from '/roopesh_logo.jpeg'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 shadow-md z-50 text-slate-50">
  <nav className="container mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <div>
        <img src={roopesh_logo} alt="Roopesh Rajan Logo" className="h-10" />
      </div>

      {/* Title */}
      <div className="text-2xl font-bold text-gray-800">Roopesh Rajan</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#about" className="text-white hover:text-gray-900 transition duration-300">About</a>
        <a href="#skills" className="text-white hover:text-gray-900 transition duration-300">Skills</a>
        <a href="#projects" className="text-white hover:text-gray-900 transition duration-300">Projects</a>
        <a href="#contact" className="text-white hover:text-gray-900 transition duration-300">Contact</a>
      </div>

      {/* Social Links */}
      <div className="hidden md:flex items-center space-x-4">
        <a href="https://github.com/Roopesh-Rajan" className="text-gray-600 hover:text-gray-900 transition duration-300">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/roopesh-rajan-666528328/" className="text-gray-600 hover:text-gray-900 transition duration-300">
          <Linkedin size={20} />
        </a>
        <a href="mailto:roopeshrajanofficial@gmail.com" className="text-gray-600 hover:text-gray-900 transition duration-300">
          <Mail size={20} />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden mt-4">
        <div className="flex flex-col space-y-4">
          <a href="#about" className="text-gray-200 hover:text-gray-900 transition duration-300">About</a>
          <a href="#skills" className="text-gray-200 hover:text-gray-900 transition duration-300">Skills</a>
          <a href="#projects" className="text-gray-200 hover:text-gray-900 transition duration-300">Projects</a>
          <a href="#contact" className="text-gray-200 hover:text-gray-900 transition duration-300">Contact</a>
        </div>
      </div>
    )}
  </nav>
</header>

  );
};

export default Header;