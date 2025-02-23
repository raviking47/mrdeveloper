import { Box, Flex, Text, Image, VStack, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import image from "../assets/image.jpg"; // Update with your actual image path

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
};

const Home = () => {
  return (
    <Box
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 6 }}
      py={8}
      bg="linear-gradient(135deg, #05010f, #12021a)" // Deep Dark Purple Gradient
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        maxW="1100px"
        mx="auto"
        textAlign={{ base: "center", md: "left" }}
      >
        {/* Animated Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* <Image
            src={image}
            alt="Your Name"
            // borderRadius="full"
            boxSize={{ base: "280px", md: "700px" }} // Adjust size for mobile & desktop
            mx="auto"
            mb={{ base: 6, md: 0 }}
            filter="drop-shadow(0px 0px 20px rgba(138, 43, 226, 0.7))" // Purple Glow
            transition="transform 0.3s ease"
            _hover={{
              filter: "drop-shadow(0px 0px 30px rgba(255, 0, 127, 0.6))", // Dark Pink Glow
              transform: "scale(1.05)",
            }}
          /> */}
        </motion.div>

        {/* Text & Typing Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <VStack
            align={{ base: "center", md: "flex-start" }}
            spacing={5}
            ml={{ base: 0, md: 8 }}
          >
            <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="white">
              Ravi Tomer
            </Text>

            {/* Typing Animation */}
            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="medium" color="#ff007f">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "AI Solutions Architect",
                  2000,
                  "Cloud & DevOps Engineer",
                  2000,
                  "Tech Enthusiast & Innovator",
                  2000,
                ]}
                wrapper="span"
                repeat={Infinity}
              />
            </Text>

            {/* Short Intro */}
            <Text maxW="600px" fontSize="md" color="gray.300">
              I build intelligent, scalable, and efficient web applications by integrating **AI, full-stack development, and cloud technologies**.  
              My expertise includes **React, Next.js, Flask, Node.js, AWS, and LLM integrations** to drive digital transformation.
            </Text>

            {/* Skills Box with Glassmorphism */}
            <Box
              bg="rgba(255, 255, 255, 0.05)" // Glassmorphism Effect
              p={4}
              borderRadius="12px"
              border="1px solid rgba(255, 0, 127, 0.4)" // Dark Pink Border
              boxShadow="0px 0px 20px rgba(138, 43, 226, 0.5)" // Purple Glow
              backdropFilter="blur(10px)"
              w="100%"
              textAlign="center"
            >
              <Text fontSize="lg" fontWeight="semibold" color="white">
                🔥 Skills & Tech Stack:
              </Text>
              <Text fontSize="md" color="gray.300">
                React.js | Next.js | Chakra UI | Flask | FastAPI <br />
                AI & Machine Learning | Docker | AWS | CI/CD <br />
                SQL & NoSQL Databases | Firebase
              </Text>
            </Box>

            {/* Call-to-Action Button */}
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              {/* <Button
                bg="linear-gradient(90deg, #8a2be2, #ff007f)" // Purple to Dark Pink
                color="white"
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="bold"
                px={6}
                py={3}
                oncli
                borderRadius="8px"
                transition="all 0.3s ease-in-out"
                _hover={{
                  bg: "linear-gradient(90deg, #ff007f, #8a2be2)", // Reverse Gradient
                  boxShadow: "0px 0px 20px rgba(255, 0, 127, 0.6)", // Pink Glow
                  transform: "scale(1.05)",
                }}
              >
                Get in Touch
              </Button> */}
            </motion.div>
          </VStack>
        </motion.div>
      </Flex>
    </Box>
  );
};

export default Home;
