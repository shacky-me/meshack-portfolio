import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Link } from 'react-router-dom';

// Dummy project data - to be replaced with actual projects
const projectsData = [
  {
    id: "1",
    title: "Portfolio Website V1",
    description:
      "My first personal portfolio showcasing my skills and projects.",
    image: "/images/project1.png", // Replace with actual image path
    liveUrl: "#",
    repoUrl: "#",
    technologies: ["React", "Tailwind CSS", "Vite"],
  },
  {
    id: "2",
    title: "E-commerce Store Concept",
    description:
      "A conceptual design and frontend development for an online store.",
    image: "/images/project2.png", // Replace with actual image path
    liveUrl: "#",
    repoUrl: "#",
    technologies: ["Next.js", "TypeScript", "Shadcn UI"],
  },
  {
    id: "3",
    title: "Mobile Task Management App",
    description: "A user-friendly mobile app for managing daily tasks.",
    image: "/images/project3.png", // Replace with actual image path
    liveUrl: "#",
    repoUrl: "#",
    technologies: ["React Native", "Expo"],
  },
  {
    id: "4",
    title: "Data Visualization Dashboard",
    description:
      "A dashboard to visualize key data insights from a sample dataset.",
    image: "/images/project4.png", // Replace with actual image path
    liveUrl: "#",
    repoUrl: "#",
    technologies: ["React", "Chart.js"],
  },
  // ... more projects
];

const Projects = () => {
  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold mb-6">Projects</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          A selection of projects I've worked on, showcasing my skills and
          passion for development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
            >
              {project.image && (
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
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
              <CardFooter className="flex justify-end gap-2">
                {project.liveUrl && (
                  <Button asChild variant="outline">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button asChild variant="secondary">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repository
                    </a>
                  </Button>
                )}
                {/* whenever i have a dedicated project details page */}
                {/* <Button asChild>
                <Link to={`/projects/${project.id}`}>View Details</Link>
              </Button> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
