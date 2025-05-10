import {
  Box,
  Flex,
  Text,
  IconButton,
  VStack,
  HStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Navigation Links
const navLinks = [
  { name: "Home", tab: "home" },
  { name: "About", tab: "about" },
  { name: "Projects", tab: "projects" },
  { name: "AI Work", tab: "ai-work" },
  { name: "Contact", tab: "contact" },
];

const Navbar = ({ activeSection }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Box
        position="fixed"
        top="0"
        width="100%"
        zIndex="1000"
        px={{ base: 4, md: 8 }}
        py={4}
        backdropFilter="blur(12px)"
        bg="rgba(2, 26, 43, 0.9)" // Matches App's dark gradient background
        borderBottom="1px solid rgba(255, 255, 255, 0.2)"
        boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
      >
        <Flex justify="space-between" align="center">
          {/* Animated Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="extrabold"
              bg="linear-gradient(90deg, #00e667, #0087e6)" // Matches App's gradient
              bgClip="text"
              textShadow="0 0 10px rgba(0, 230, 103, 0.5)" // Matches App's glow
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "AI Innovator",
                  2000,
                  "Tech Visionary",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </Text>
          </motion.div>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <motion.div
                key={link.tab}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ScrollLink
                  to={link.tab}
                  spy
                  smooth
                  offset={-80}
                  duration={500}
                  className="nav-link"
                >
                  <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    color={activeSection === link.tab ? "#00cdbb" : "whiteAlpha.900"} // Matches App's teal accent
                    _hover={{
                      bg: "linear-gradient(90deg, #00e667, #0087e6)", // Matches App's gradient
                      bgClip: "text",
                      textShadow: "0 0 10px rgba(0, 230, 103, 0.5)", // Matches App's glow
                    }}
                    transition="all 0.3s ease"
                  >
                    {link.name}
                  </Text>
                </ScrollLink>
              </motion.div>
            ))}
          </HStack>

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Toggle Menu"
            icon={<FaBars />}
            color="whiteAlpha.900"
            bg="rgba(255, 255, 255, 0.1)" // Matches App's glassmorphism
            border="1px solid rgba(255, 255, 255, 0.2)"
            borderRadius="full"
            _hover={{
              bg: "linear-gradient(45deg, #00e667, #0087e6)", // Matches App's gradient
              color: "white",
              boxShadow: "0 0 15px rgba(0, 230, 103, 0.5)", // Matches App's glow
            }}
            onClick={onOpen}
          />
        </Flex>

        {/* Mobile Navigation Drawer */}
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay bg="rgba(2, 26, 43, 0.8)" backdropFilter="blur(4px)" />
          <DrawerContent
            bg="linear-gradient(135deg, rgba(2, 26, 43, 0.9), rgba(10, 61, 64, 0.9))" // Matches App's gradient background
            backdropFilter="blur(12px)"
            borderLeft="1px solid rgba(255, 255, 255, 0.2)"
            boxShadow="0 8px 32px rgba(0, 0, 0, 0.4)"
            p={4}
          >
            <DrawerBody>
              <Flex justify="flex-end">
                <IconButton
                  icon={<FaTimes />}
                  color="whiteAlpha.900"
                  bg="rgba(255, 255, 255, 0.1)" // Matches App's glassmorphism
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  borderRadius="full"
                  _hover={{
                    bg: "linear-gradient(45deg, #00e667, #0087e6)", // Matches App's gradient
                    color: "white",
                    boxShadow: "0 0 15px rgba(0, 230, 103, 0.5)", // Matches App's glow
                  }}
                  onClick={onClose}
                />
              </Flex>
              <VStack spacing={8} mt={12} align="center">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.tab}
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ScrollLink
                      to={link.tab}
                      spy
                      smooth
                      offset={-80}
                      duration={500}
                      onClick={onClose}
                      className="nav-link"
                    >
                      <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        color={activeSection === link.tab ? "#00cdbb" : "whiteAlpha.900"} // Matches App's teal accent
                        _hover={{
                          bg: "linear-gradient(90deg, #00e667, #0087e6)", // Matches App's gradient
                          bgClip: "text",
                          textShadow: "0 0 10px rgba(0, 230, 103, 0.5)", // Matches App's glow
                        }}
                        transition="all 0.3s ease"
                      >
                        {link.name}
                      </Text>
                    </ScrollLink>
                  </motion.div>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </motion.div>
  );
};

export default Navbar;