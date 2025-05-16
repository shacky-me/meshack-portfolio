import { Link } from "react-router"; // Ensure you have this for navigation
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // More relevant social icons for a portfolio

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-slate-900 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* First Column: Your Name and a Brief Intro */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Kigen Meshack
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Frontend web developer dedicated to building high-performance,
              responsive, and user-friendly web applications.
            </p>
          </div>

          {/* Second Column: Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Explore
            </h4>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li>
                <a
                  href="#overview"
                  className="hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                >
                  About Me
                </a>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column: Connect */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/shacky-me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/kigen-meshack-7b0356209"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/_shacky/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://twitter.com/shackyme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
              >
                <FaTwitter size={20} />
              </a>
              {/* You can add more social links here */}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
              Email:{" "}
              <a
                href="mailto:meshackkiprono12@gmail.com"
                className="hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
              >
                meshackkiprono12@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section: Copyright and Portfolio Specifics */}
        <div className="border-t border-gray-200 dark:border-slate-800 py-4 mt-8 text-center text-sm text-gray-500 dark:text-gray-500">
          <p>&copy; {currentYear} Kigen Meshack. All rights reserved.</p>
          <p className="mt-1">Designed & Developed by Kigen Meshack.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
