import { CalendarIcon } from "@radix-ui/react-icons";
import { FaBriefcase } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

const workExperience = [
  {
    title: "Undergraduate Intern",
    company: "Kenya Pipeline Company Limited",
    location: "Eldoret, Kenya",
    date: "Sept 2024 - Dec 2024",
    description: [
      "Provided frontline IT support including hardware troubleshooting, printer configuration,and network setup.",
      "Installed and configured enterprise-grade software (Microsoft Office Suite, SAP, Fortinet, Windows 11).",
      "Strengthened IT operations through proactive system checks, domain joining, and network administration.",
      "Assisted in integrating on-premise Active Directory with Azure AD to enhance secure resource management.",
      "Delivered operational readiness by upgrading hardware components (e.g., SSDs) for performance optimization.",
    ],
  },
  {
    title: "Software Engineering Trainee",
    company: "ALX, Africa",
    location: "Nairobi, Kenya",
    date: "Aug 2023 - Oct 2024",
    description: [
      "Completed intensive training in full-stack software engineering with a focus on front-end development.",
      "Built responsive user interfaces using HTML5, CSS3, JavaScript (ES6), React.js, and jQuery.",
      "Applied Linux fundamentals and shell scripting for automation tasks and used Git for version control.",
      "Collaborated on team projects using Trello and Agile methodologies to deliver client-ready applications.",
    ],
  },
  {
    title: "Student Intern",
    company: "Kenya Pipeline Company Ltd.",
    location: "Eldoret, Kenya",
    date: "May 2022 - July 2022",
    description: [
      "Assisted customers in selecting construction materials while managing inventory and restocking.",
      "Enhancing customer satisfaction through technical guidance and personalized recommendations.",
    ],
  },

  // Will Add more work experiences here
];

const Work = () => {
  return (
    <section
      id="work"
      className="min-h-screen py-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-12 text-center transition-colors duration-300">
          My Professional Timeline
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 -ml-2 h-full w-0.5 bg-gradient-to-b from-gray-300 to-gray-500 dark:from-slate-700 dark:to-slate-500"></div>{" "}
          {/* Modern timeline line */}
          <div className="space-y-16">
            {workExperience.map((experience, index) => (
              <div key={index} className="relative">
                <div
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  } gap-8`}
                >
                  {/* Icon and Date */}
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 dark:bg-indigo-400 text-white shadow-md ${
                      index % 2 === 0 ? "md:-left-16" : "md:-right-16"
                    }`}
                  >
                    <FaBriefcase className="h-6 w-6" />
                  </div>
                  <div
                    className={`text-gray-600 dark:text-gray-300 text-sm ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <CalendarIcon className="inline-block mr-1 h-4 w-4" />
                    <span>{experience.date}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={`bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 ${
                      index % 2 === 0
                        ? "md:text-left"
                        : "md:text-right md:ml-16"
                    } md:w-1/2`}
                  >
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {experience.company} - {experience.location}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      {experience.description}
                    </p>
                  </div>
                </div>
                {index < workExperience.length - 1 && (
                  <div className="mt-8">
                    <Separator className="bg-gray-300 dark:bg-gray-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
