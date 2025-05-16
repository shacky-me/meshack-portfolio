import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import draftv1 from "../assets/images/draftv1.png";
import allbirds from "../assets/images/allbirdsclone.png";
import ecomm2 from "../assets/images/ecomm2.png";
import custommerch from "../assets/images/custommerch.png";
import ReactJobPortal from "../assets/images/ReactJobPortal.png";

const projectsData = [
  {
    id: "1",
    title: "Portfolio Website V1",
    description:
      "My first personal portfolio showcasing my skills and projects.",
    image: draftv1,
    liveUrl: "#",
    repoUrl: "#",
    technologies: ["React", "Tailwind CSS", "Vite"],
  },
  {
    id: "2",
    title: "AllBirds(Clone) E-commerce Store Concept",
    description:
      "A conceptual design and frontend development for an online store.",
    image: allbirds,
    liveUrl: "https://all-birds-clone-ecommerce.vercel.app/",
    repoUrl: "#",
    technologies: ["HTML", "Vanilla Css", "Vanilla JS"],
  },
  {
    id: "3",
    title: "Ecommerce Website",
    description: "A simple user-friendly ecommerce web app.",
    image: ecomm2,
    liveUrl: "https://ecommbyshack.vercel.app/",
    repoUrl: "https://github.com/shacky-me/EcommerceWebsite.git",
    technologies: ["Html", "Css", "JavaScript"],
  },
  {
    id: "4",
    title: "AI-Powered Website Builder Concept",
    description:
      "A modern website builder powered by AI, changing how companies create user interfaces together.",
    image:
      "https://modern-web-app-vanilla-js.vercel.app/src/assets/images/termimage.jpg",
    liveUrl: "https://modern-web-app-vanilla-js.vercel.app/",
    repoUrl: "https://github.com/shacky-me/modern-web-app-vanillaJS.git",
    technologies: ["Html", "Css", "JavaScript"],
  },
  {
    id: "5",
    title: "TailorShack Merch Design Website",
    description: "A custom merchandise web application.",
    image: custommerch,
    repoUrl:
      "https://github.com/shacky-me/TailorShack-Merch-Design-Website.git",
    technologies: ["Python", "Html", "Css", "JavaScript", "Firebase"],
  },
  {
    id: "6",
    title: "ReactJS Job Portal",
    description: "A job portal web application built with ReactJS.",
    image: ReactJobPortal,
    liveUrl: "https://react-js-job-portal-pied.vercel.app/",
    repoUrl: "https://github.com/shacky-me/ReactJs-Job-Portal.git",
    technologies: ["React", "Tailwind CSS", "Vite"],
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <motion.section
      className="min-h-screen px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto py-10">
        <motion.h1
          className="text-3xl font-semibold mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Projects
        </motion.h1>
        <motion.p
          className="text-gray-700 dark:text-gray-300 mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          A selection of projects I've worked on, showcasing my skills and
          passion for development.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex" // Enable flexbox for the card container
            >
              <Card className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden flex-1 flex-col">
                {project.image && (
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  {" "}
                  {/* Allow CardHeader and CardContent to take up available vertical space */}
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="py-4">
                    <ul className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full px-2 py-1"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <CardFooter className="flex justify-end gap-2">
                  {project.liveUrl && (
                    <Button asChild variant="outline">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Live Demo <FiExternalLink />
                      </a>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button asChild variant="secondary">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <FaGithub size={16} /> Repository
                      </a>
                    </Button>
                  )}
                  {/* whenever i have a dedicated project details page */}
                  {/* <Button asChild>
                    <Link to={`/projects/${project.id}`}>View Details</Link>
                  </Button> */}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
