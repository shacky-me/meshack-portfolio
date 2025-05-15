import { MdArrowForward } from "react-icons/md";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import imageten from "@/assets/images/imageten.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "TypeScript",
    "JavaScript",
    "ReactJS",
    "ShadCnUi",
    "Radixui",
    "ChakraUi",
    "MaterialUI",
    "TailwindCss",
    "ContextAPI",
    "Restful Services",
    "Sass",
  ];
  const backendSkills = ["Python", "Dart", "Flutter"];
  const pmSkills = ["Trello", "Jira"];
  const tools = ["Git", "GitHub", "Docker", "Vercel", "Netlify"];

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
          {" "}
          {/* Changed items-center to items-start */}
          {/* Left Section (Text) */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8 transition-colors duration-300">
              This Is Me, More or Less:
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
              I’m a front-end developer with a soft spot for clean interfaces
              and quiet elegance. I work with the usual suspects: HTML5, CSS3,
              JavaScript, React, TailwindCSS, a bit of Python and a growing
              friendship with TypeScript. I like things that make sense in the
              browser and on the page.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
              When I’m not coding, you’ll probably find me writing poems,
              reflections, little lines that don't always need to go anywhere or
              make a lot of sense. I read often, think slowly, and try to bring
              the same intentional rhythm to both my code and my words.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 transition-colors duration-300">
              I believe good design feels; not just functions. And that the best
              interfaces, like the best writing, are the ones you don’t have to
              think twice about.
            </p>
            <Link to="/backstage">
              <button className="cursor-pointer bg-gray-800 text-white py-3 px-8 rounded-full hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300">
                Discover More
                <MdArrowForward className="inline-block ml-2" />
              </button>
            </Link>
          </div>
          {/* Right Section (Image) */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl">
              <img
                src={imageten}
                alt="profile"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 rounded-full border-2 border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300"></div>
            </div>
          </div>
        </div>

        {/* Skills Section (Below Image and Text) */}
        <div className="mt-12">
          {" "}
          {/* Added mt-12 for spacing */}
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300 text-center lg:text-left">
            My Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {" "}
            {/* Using grid for better layout */}
            <Card className="bg-white/80 dark:bg-slate-800/80 shadow-md backdrop-blur-sm">
              <CardHeader className="pb-2">
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Frontend Frameworks, Libraries & Preprocessor
                </h4>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-slate-800/80 shadow-md backdrop-blur-sm">
              <CardHeader className="pb-2">
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Backend & Mobile
                </h4>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-slate-800/80 shadow-md backdrop-blur-sm">
              <CardHeader className="pb-2">
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Project Management
                </h4>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {pmSkills.map((skill) => (
                  <Badge key={skill} variant="destructive">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-slate-800/80 shadow-md backdrop-blur-sm">
              <CardHeader className="pb-2">
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  Tools
                </h4>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
