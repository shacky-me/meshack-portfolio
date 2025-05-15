import Navbar from "./components/Navbar";
import About from "./pages/About";
import Overview from "./pages/Overview";
import { ThemeProvider } from "@/components/theme-provider";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Overview />
      <About />
      <Work />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
