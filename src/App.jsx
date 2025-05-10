import { ChakraProvider, extendTheme, Box, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaArrowUp, FaMoon, FaSun } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import AIWork from "./components/AIWork";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

// Updated theme with green and blue palette
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Source Sans Pro', sans-serif",
  },
  colors: {
    emerald: {
      50: "#e6fff58",
      100: "#b3ffd7",
      200: "#80ffbb",
      300: "#4dff9f",
      400: "#1aff83",
      500: "#00e667", // Primary Emerald Green
      600: "#00b352",
      700: "#00803c",
      800: "#004d26",
      900: "#001a0f",
    },
    ocean: {
      50: "#e6f5ff",
      100: "#b3dfff",
      200: "#80c9ff",
      300: "#4db3ff",
      400: "#1a9dff",
      500: "#0087e6", // Ocean Blue
      600: "#006bb3",
      700: "#004f80",
      800: "#00334d",
      900: "#00171a",
    },
    teal: {
      50: "#e6fffc",
      100: "#b3f5ef",
      200: "#80ebe2",
      300: "#4de1d5",
      400: "#1ad7c8",
      500: "#00cdbb", // Accent Teal
      600: "#00a395",
      700: "#00786f",
      800: "#004e49",
      900: "#002422",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "linear-gradient(135deg, #021a2b 0%, #0a3d40 100%)" : "gray.100",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.900",
        scrollBehavior: "smooth",
        overflowX: "hidden",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "xl",
        fontWeight: "bold",
        backdropFilter: "blur(10px)",
        bg: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        _hover: {
          bg: "rgba(255, 255, 255, 0.2)",
          transform: "translateY(-2px)",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "extrabold",
        letterSpacing: "wide",
        textShadow: "0 0 10px rgba(0, 198, 187, 0.5)",
      },
    },
  },
});

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const { colorMode, toggleColorMode } = useColorMode();
  const toggleIcon = useColorModeValue(<FaMoon />, <FaSun />);

  // Scroll position and section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const sections = ["home", "about", "projects", "ai-work", "contact"];
    const detectActiveSection = () => {
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", detectActiveSection);

    setTimeout(() => setIsLoading(false), 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", detectActiveSection);
    };
  }, []);

  // Enhanced animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    out: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(135deg, #021a2b, #0a3d40)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 360],
                borderRadius: ["20%", "50%", "20%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: "100px",
                height: "100px",
                background: "linear-gradient(45deg, #0087e6, #00e667)",
                boxShadow: "0 0 20px #0087e6, 0 0 40px #00e667",
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
          >
            <Navbar activeSection={activeSection} />

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

            {/* Theme Toggle Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
            >
              <IconButton
                aria-label="Toggle theme"
                icon={toggleIcon}
                position="fixed"
                top="100px"
                right="40px"
                size="lg"
                fontSize="24px"
                borderRadius="full"
                bg="linear-gradient(45deg, #0087e6, #00e667)"
                border="2px solid rgba(255, 255, 255, 0.3)"
                backdropFilter="blur(8px)"
                _hover={{
                  bg: "linear-gradient(45deg, #00e667, #0087e6)",
                  transform: "translateY(-5px) scale(1.1)",
                  boxShadow: "0 0 20px rgba(0, 135, 230, 0.7), 0 0 30px rgba(0, 230, 103, 0.7)",
                }}
                onClick={toggleColorMode}
                boxShadow="0 0 15px rgba(0, 135, 230, 0.5)"
                zIndex={1000}
                className="theme-toggle"
              />
            </motion.div>

            {/* Back to Top Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: scrollPosition > 300 ? 1 : 0,
                scale: scrollPosition > 300 ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <IconButton
                aria-label="Back to top"
                icon={<FaArrowUp />}
                position="fixed"
                bottom="40px"
                right="40px"
                size="lg"
                fontSize="24px"
                borderRadius="full"
                bg="linear-gradient(45deg, #0087e6, #00e667)"
                border="2px solid rgba(255, 255, 255, 0.3)"
                backdropFilter="blur(8px)"
                _hover={{
                  bg: "linear-gradient(45deg, #00e667, #0087e6)",
                  transform: "translateY(-5px) scale(1.1)",
                  boxShadow: "0 0 20px rgba(0, 135, 230, 0.7), 0 0 30px rgba(0, 230, 103, 0.7)",
                }}
                onClick={() => scroll.scrollToTop({ duration: 800, smooth: "easeInOutQuad" })}
                boxShadow="0 0 15px rgba(0, 135, 230, 0.5)"
                zIndex={999}
                className="back-to-top"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ChakraProvider>
  );
}

// Enhanced Section Component with scroll reveal and glassmorphism
const Section = ({ id, children }) => {
  return (
    <motion.div
      id={id}
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box
        position="relative"
        scrollMarginTop="80px"
        bg="rgba(255, 255, 255, 0.05)"
        backdropFilter="blur(12px)"
        borderRadius="2xl"
        boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
        overflow="hidden"
        mx={{ base: 4, md: 8 }}
        my={10}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "2xl",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          pointerEvents: "none",
        }}
      >
        {children}
      </Box>
    </motion.div>
  );
};

export default App;