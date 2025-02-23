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
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Navigation Links
const navLinks = [
  { name: "Home", tab: "home" },
  { name: "About", tab: "about" },
  { name: "Projects", tab: "projects" },
  { name: "AI Work", tab: "ai-work" },
  { name: "Contact", tab: "contact" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <Box
        position="fixed"
        top="0"
        width="100%"
        zIndex="1000"
        px={{ base: 4, md: 6 }}
        py={3}
        backdropFilter="blur(10px)"
        bg="#F8E1A1" // Warm Light Gold - Complementary to Dark Sections
        color="black"
        boxShadow="0px 4px 12px rgba(0, 0, 0, 0.3)"
      >
        <Flex justify="space-between" align="center">
          {/* Animated Logo */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color="black">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Innovating with AI",
                  2000,
                  "Transforming Ideas",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </Text>
          </motion.div>

          {/* Desktop Navigation */}
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <motion.div key={link.tab} whileHover={{ scale: 1.1 }}>
                <ScrollLink to={link.tab} spy smooth offset={-70} duration={500}>
                  <Text
                    color="black"
                    fontSize="lg"
                    fontWeight="medium"
                    _hover={{ color: "#E07A5F", cursor: "pointer" }} // Warm Orange Hover
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
            color="black"
            variant="ghost"
            onClick={onOpen}
          />
        </Flex>

        {/* Mobile Navigation Drawer */}
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent
            bg="linear-gradient(135deg, #F8E1A1, #E07A5F)" // Gradient with Warm Gold & Orange
            p={4}
            boxShadow="0px 0px 15px rgba(255, 165, 0, 0.4)"
          >
            <DrawerBody>
              <Flex justify="flex-end">
                <IconButton icon={<FaTimes />} color="black" variant="ghost" onClick={onClose} />
              </Flex>
              <VStack spacing={6} mt={10} align="center">
                {navLinks.map((link) => (
                  <motion.div key={link.tab} whileHover={{ scale: 1.1 }}>
                    <ScrollLink to={link.tab} spy smooth offset={-70} duration={500} onClick={onClose}>
                      <Text
                        color="black"
                        fontSize="xl"
                        fontWeight="bold"
                        _hover={{ color: "#E07A5F", cursor: "pointer" }} // Warm Orange Hover
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
