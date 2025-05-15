import { useState, type FormEvent } from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  const myEmail = "meshackkiprono12@gmail.com";
  // const subjectPrefix = "Inquiry from Portfolio"; // Currently not used
  // const bodyPrefix = // Currently not used
  //   "Hi Meshack,\n\nI visited your portfolio and would like to connect.";
  const [isDirectEmail, setIsDirectEmail] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState<
    "sending" | "success" | "error" | null
  >(null); // 'sending', 'success', 'error'

  const handleButtonClick = () => {
    setIsDirectEmail(true);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmissionStatus("sending");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setSubmissionStatus("error");
        const errorData = await response.json();
        console.error("Error sending message:", errorData);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmissionStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8 text-center transition-colors duration-300"
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
              <MdLocationOn className="h-6 w-6" />
              <p>Eldoret, Uasin Gishu County, Kenya</p>
            </div>
            <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
              <MdEmail className="h-6 w-6" />
              <p>meshackkiprono12@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
              <MdPhone className="h-6 w-6" />
              <p>+254 748 317 597</p>
            </div>
            <motion.p
              className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
            >
              Feel free to reach out with any questions, collaboration
              opportunities, or just to say hello.
              {isDirectEmail ? (
                <>
                  <br />
                  Click the button below to send me an email directly.
                </>
              ) : (
                <>
                  <br />
                  If you prefer a direct email, click the button below.
                </>
              )}
            </motion.p>
            <Button onClick={handleButtonClick} className="w-full">
              {isDirectEmail ? "Send Email" : "Contact Me Directly"}
            </Button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          >
            {!isDirectEmail ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="p-1 mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-800 dark:border-slate-700 dark:text-gray-200"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="p-1 mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-800 dark:border-slate-700 dark:text-gray-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="p-1 mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-800 dark:border-slate-700 dark:text-gray-200"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-slate-800 dark:border-slate-700 dark:text-gray-200"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={submissionStatus === "sending"}
                >
                  {submissionStatus === "sending"
                    ? "Sending..."
                    : "Send Message"}
                </Button>
                {submissionStatus === "success" && (
                  <p className="mt-2 text-green-500">
                    Message sent successfully!
                  </p>
                )}
                {submissionStatus === "error" && (
                  <p className="mt-2 text-red-500">
                    Error sending message. Please try again later.
                  </p>
                )}
              </form>
            ) : (
              <a
                href={`mailto:${myEmail}?subject=${encodeURIComponent(
                  "Inquiry from Portfolio"
                )}&body=${encodeURIComponent(
                  "Hi Meshack,\n\nI visited your portfolio and would like to connect."
                )}`}
                className="w-full"
              >
                <Button className="w-full">Send Email Now</Button>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
