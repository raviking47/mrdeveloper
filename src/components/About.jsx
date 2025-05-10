import { Box, Text, VStack, Highlight, Flex, Icon, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaRegLightbulb, FaUniversity, FaAward, FaCogs, FaRocket } from "react-icons/fa";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.7, ease: "easeOut" }
  })
};

const AboutSection = ({ icon, title, children, index }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={sectionVariants}
    custom={index}
  >
    <Flex
      align="center"
      mb={3}
      bg="rgba(255, 255, 255, 0.05)"
      p={4}
      borderRadius="lg"
      boxShadow="0 4px 20px rgba(0, 230, 103, 0.2)"
      backdropFilter="blur(12px)"
      border="1px solid rgba(0, 205, 187, 0.3)"
    >
      <Icon as={icon} color="#00cdbb" boxSize={6} mr={3} />
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="bold"
        bgGradient="linear(to-r, #00e667, #0087e6)"
        bgClip="text"
      >
        {title}
      </Text>
    </Flex>
    <Box pl={4} borderLeft="2px solid" borderColor="#0087e6" mb={6}>
      {children}
    </Box>
  </motion.div>
);

const About = () => {
  return (
    <Box
      id="about"
      minH="100vh"
      px={{ base: 5, md: 12 }}
      py={{ base: 12, md: 16 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="linear-gradient(135deg, #021a2b, #0a3d40)"
      position="relative"
      overflow="hidden"
    >
      {/* Background Decorative Elements */}
      <Box
        position="absolute"
        bottom="5%"
        left="10%"
        width="300px"
        height="300px"
        borderRadius="full"
        bg="rgba(0, 230, 103, 0.1)"
        filter="blur(70px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        top="15%"
        right="5%"
        width="250px"
        height="250px"
        borderRadius="full"
        bg="rgba(0, 135, 230, 0.1)"
        filter="blur(50px)"
        zIndex={0}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        style={{ width: "100%", maxWidth: "1000px", margin: "0 auto", zIndex: 1 }}
      >
        <VStack spacing={8} maxW="1000px" align={{ base: "center", md: "start" }} mx="auto">
          {/* Title with decorative elements */}
          <Flex align="center" justify="center" width="100%" mb={6}>
            <Divider flex="1" borderColor="#0087e6" />
            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              color="white"
              mx={4}
              bgGradient="linear(to-r, #00e667, #0087e6)"
              bgClip="text"
              letterSpacing="tight"
              textAlign="center"
              textShadow="0 0 10px rgba(0, 230, 103, 0.5)"
            >
              About Me
            </Text>
            <Divider flex="1" borderColor="#0087e6" />
          </Flex>

          {/* Introduction */}
          <AboutSection icon={FaRegLightbulb} title="Who I Am" index={1}>
            <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800" lineHeight="tall">
              I’m Ravi Tomer, a passionate{" "}
              <Highlight query="Full Stack Developer" styles={{ color: "#00e667", fontWeight: "bold", bg: "transparent" }}>
                Full Stack Developer
              </Highlight>{" "}
              with 1.5 years of experience at{" "}
              <Highlight query="Indevz and ANDC Elite" styles={{ color: "#00cdbb", fontWeight: "bold", bg: "transparent" }}>
                Indevz and ANDC Elite
              </Highlight>
              . I specialize in building scalable, AI-powered web applications using modern technologies.
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800" lineHeight="tall" mt={4}>
              Based in New Delhi, India, I’m a tech enthusiast who loves exploring the intersection of{" "}
              <Highlight query="AI, cloud computing, and web development" styles={{ color: "#0087e6", fontWeight: "bold", bg: "transparent" }}>
                AI, cloud computing, and web development
              </Highlight>
              . When I’m not coding, you can find me sharing tech insights on Instagram or experimenting with new frameworks.
            </Text>
          </AboutSection>

          {/* Education */}
          <AboutSection icon={FaUniversity} title="Education" index={2}>
            <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800" lineHeight="tall">
              I hold a{" "}
              <Highlight query="B.Sc. in Physical Science and Computer Science" styles={{ color: "#00e667", fontWeight: "bold", bg: "transparent" }}>
                B.Sc. in Physical Science and Computer Science
              </Highlight>{" "}
              from{" "}
              <Highlight query="Delhi University" styles={{ color: "#0087e6", fontWeight: "bold", bg: "transparent" }}>
                Delhi University
              </Highlight>
              , where I developed a strong foundation in programming, algorithms, and data structures, sparking my interest in full-stack development and AI.
            </Text>
          </AboutSection>

          {/* Key Projects */}
          <AboutSection icon={FaRocket} title="Key Projects" index={3}>
            <Box
              p={4}
              bg="rgba(255, 255, 255, 0.05)"
              borderRadius="md"
              mt={2}
              borderLeft="3px solid"
              borderColor="#00e667"
              _hover={{ bg: "rgba(255, 255, 255, 0.08)", transform: "translateX(5px)" }}
              transition="all 0.3s ease"
            >
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight="semibold" color="#00cdbb">
                AI-Powered Chat Application
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.700" mt={1}>
                Developed a real-time chat app using React, Node.js, and AWS, integrating LLMs for intelligent responses, boosting user engagement by 20%.
              </Text>
            </Box>
            <Box
              p={4}
              bg="rgba(255, 255, 255, 0.05)"
              borderRadius="md"
              mt={3}
              borderLeft="3px solid"
              borderColor="#00e667"
              _hover={{ bg: "rgba(255, 255, 255, 0.08)", transform: "translateX(5px)" }}
              transition="all 0.3s ease"
            >
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight="semibold" color="#00cdbb">
                E-Learning Platform
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.700" mt={1}>
                Built an interactive platform with React, FastAPI, and Firebase, enabling real-time collaboration and personalized learning experiences.
              </Text>
            </Box>
          </AboutSection>

          {/* Technical Skills */}
          <AboutSection icon={FaCogs} title="Technical Skills" index={4}>
            <Flex wrap="wrap" mt={2} gap={3}>
              {[
                "JavaScript", "TypeScript", "React.js", "Next.js", "Chakra UI",
                "Python", "Flask", "FastAPI", "Node.js", "Express.js",
                "AWS", "Docker", "CI/CD", "Git", "GitHub",
                "PostgreSQL", "MongoDB", "Firebase", "MySQL",
                "TensorFlow", "LangChain", "LLMs"
              ].map((skill, i) => (
                <Box
                  key={i}
                  bg="rgba(255, 255, 255, 0.07)"
                  px={3}
                  py={2}
                  borderRadius="md"
                  color={i % 2 === 0 ? "#00e667" : "#0087e6"}
                  fontWeight="medium"
                  fontSize="sm"
                  transition="all 0.2s"
                  _hover={{ bg: "rgba(255, 255, 255, 0.12)", transform: "translateY(-2px)" }}
                >
                  {skill}
                </Box>
              ))}
            </Flex>
          </AboutSection>

          {/* Certifications */}
          <AboutSection icon={FaAward} title="Certifications" index={5}>
            <Box p={4} bg="rgba(255, 255, 255, 0.05)" borderRadius="md" mt={2} display="flex" flexDirection="column" gap={3}>
              <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800">
                📜{" "}
                <Highlight query="AWS Certified Developer – Associate" styles={{ color: "#00e667", fontWeight: "bold", bg: "transparent" }}>
                  AWS Certified Developer – Associate
                </Highlight>{" "}
                – Expertise in cloud architecture and deployment.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800">
                📜{" "}
                <Highlight query="Full Stack Web Development" styles={{ color: "#0087e6", fontWeight: "bold", bg: "transparent" }}>
                  Full Stack Web Development
                </Highlight>{" "}
                – Advanced skills in React, Node.js, and databases.
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.800">
                📜{" "}
                <Highlight query="AI and Machine Learning Basics" styles={{ color: "#00e667", fontWeight: "bold", bg: "transparent" }}>
                  AI and Machine Learning Basics
                </Highlight>{" "}
                – Foundations in TensorFlow and LLMs.
              </Text>
            </Box>
          </AboutSection>

          {/* Final Statement */}
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="white"
            textAlign="center"
            mt={6}
            p={4}
            borderRadius="lg"
            bg="rgba(255, 255, 255, 0.07)"
            boxShadow="0 4px 20px rgba(0, 230, 103, 0.2)"
            fontStyle="italic"
            width="100%"
          >
            I’m driven by{" "}
            <Highlight query="innovation, collaboration, and impact" styles={{ color: "#00cdbb", fontWeight: "bold", bg: "transparent" }}>
              innovation, collaboration, and impact
            </Highlight>
            . My goal is to build solutions that empower users and push the boundaries of technology.
          </Text>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default About;