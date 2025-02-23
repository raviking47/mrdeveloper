import { ChakraProvider, extendTheme, Box, IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import AIWork from "./components/AIWork";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css"; // Importing the external CSS file

// Theme Customization (Minimal, to avoid conflicts with CSS)
const theme = extendTheme({
  styles: {
    global: {
      body: {
        scrollBehavior: "smooth",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box as="main" className="app-container">
        <Section id="home">
          <Home />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="ai-work">
          <AIWork />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </Box>

      {/* Back to Top Button */}
      <IconButton
        aria-label="Back to top"
        icon={<FaArrowUp />}
        position="fixed"
        bottom="20px"
        right="20px"
        className="back-to-top"
        onClick={() => scroll.scrollToTop()}
      />
    </ChakraProvider>
  );
}

// Reusable Section Component
const Section = ({ id, children }) => (
  <Box id={id} className="section">
    {children}
  </Box>
);

export default App;
