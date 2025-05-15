import ButtonOutline from "@/components/Button";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <section
      id="overview"
      className="md:min-h-screen py-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300 flex items-center justify-center"
    >
      <div className="container mx-auto px-6 md:px-20 flex flex-col lg:flex-row justify-around items-center gap-10">
        <div className="md:w-[70%] text-center lg:text-left">
          <h1 className="font-bold text-3xl md:text-4xl capitalize leading-tight mb-6 text-[#2d696b] dark:text-indigo-400">
            Hi, Nice to meet you. I’m{" "}
            <span className="font-extrabold">{`Meshack`}</span>.
          </h1>
          <p className="tracking-tight text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
            I build{" "}
            <span className="font-semibold text-[#2d696b] dark:text-indigo-400 text-4xl capitalize">
              front-ends
            </span>{" "}
            the way you’d arrange a good living room: clean, welcoming, and with
            just enough personality to feel lived in. I tidy up messy ideas,
            smooth out rough edges, and create interfaces that feel simple, even
            when they’re not. To me, great front-end isn’t just about pixels and
            code; it’s about helping people navigate effortlessly, like a
            well-written sentence, clear and intentional.{" "}
            <span className="italic text-xl text-[#eb7a45] dark:text-emerald-400 font-medium">
              Less noise, more meaning. Fewer clicks, more flow.
            </span>{" "}
            And just enough delight to make it all feel human.
          </p>

          <div className="mt-8 space-x-4 flex justify-center lg:justify-start">
            <Link to="/projects">
              <ButtonOutline
                text={
                  <>
                    Explore my projects
                    <MdArrowForward className="inline-block ml-2" />
                  </>
                }
                className="bg-black text-white hover:bg-gray-900 hover:text-white dark:bg-indigo-400 dark:text-white dark:border-indigo-400 dark:hover:bg-indigo-300 shadow-md"
              />
            </Link>
            <a href="#contact">
              <ButtonOutline
                text="Talk to Me"
                className="bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-50 hover:border-indigo-50 dark:bg-slate-700 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-slate-600 shadow-md"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
