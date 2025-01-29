import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Jimmy Zheng. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/j1mmyzz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jimmyzz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/j1mmy_zz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
