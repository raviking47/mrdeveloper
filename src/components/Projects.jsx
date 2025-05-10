import { Box, VStack, Text, Progress, HStack, Icon, Divider, Flex, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import { SiJavascript, SiReact, SiPython, SiFastapi, SiTensorflow, SiMongodb, SiFirebase, SiNodedotjs, SiAmazonwebservices } from "react-icons/si";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Project Data with Completion Level
const projects = [
  {
    title: "AI-Powered Chat Application",
    description: "A real-time chat app integrating Large Language Models for intelligent responses, built with React, Node.js, and AWS. Improved user engagement by 20% through seamless AI-driven interactions.",
    progress: 92,
    technologies: ["React", "Node.js", "AWS", "LangChain"],
  },
  {
    title: "E-Learning Platform",
    description: "An interactive platform for real-time collaboration and personalized learning, developed using React, FastAPI, and Firebase. Enhanced student engagement with live polls and quizzes.",
    progress: 88,
    technologies: ["React", "FastAPI", "Firebase"],
  },
  {
    title: "Portfolio Website Optimization",
    description: "Revamped a personal portfolio with Chakra UI, Framer Motion, and React Scroll, achieving a 30% increase in user engagement through enhanced UI/UX and smooth animations.",
    progress: 95,
    technologies: ["React", "Chakra UI", "Framer Motion"],
  },
];

// Skills Data
const skills = [
  { name: "JavaScript", icon: SiJavascript, level: 90 },
  { name: "React", icon: SiReact, level: 92 },
  { name: "Python", icon: SiPython, level: 85 },
  { name: "FastAPI", icon: SiFastapi, level: 88 },
  { name: "Node.js", icon: SiNodedotjs, level: 87 },
  { name: "TensorFlow", icon: SiTensorflow, level: 80 },
  { name: "MongoDB", icon: SiMongodb, level: 82 },
  { name: "Firebase", icon: SiFirebase, level: 85 },
  { name: "AWS", icon: SiAmazonwebservices, level: 83 },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      bg="linear-gradient(135deg, #021a2b, #0a3d40)"
      color="white"
      minH="100vh"
      py={{ base: 10, md: 16 }}
      px={{ base: 6, md: 12 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background Decorative Elements */}
      <Box
        position="absolute"
        top="5%"
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
        bottom="10%"
        right="5%"
        width="250px"
        height="250px"
        borderRadius="full"
        bg="rgba(0, 135, 230, 0.1)"
        filter="blur(50px)"
        zIndex={0}
      />

      <VStack spacing={12} align="center" maxW="1200px" mx="auto" zIndex={1}>
        {/* Section Title */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Text
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            bgGradient="linear(to-r, #00e667, #0087e6)"
            bgClip="text"
            textShadow="0 0 10px rgba(0, 230, 103, 0.5)"
          >
            🚀 Featured Projects
          </Text>
        </motion.div>

        {/* Interactive Project Cards */}
        <Stack spacing={8} width="100%">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Flex
                direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
                align="center"
                gap={6}
                bg="rgba(255, 255, 255, 0.05)"
                borderRadius="15px"
                border="1px solid rgba(0, 205, 187, 0.3)"
                backdropFilter="blur(12px)"
                p={6}
                boxShadow="0px 0px 20px rgba(0, 230, 103, 0.3)"
                _hover={{
                  boxShadow: "0px 0px 30px rgba(0, 135, 230, 0.5)",
                  transform: "translateY(-5px)",
                }}
                transition="all 0.3s ease"
              >
                <VStack align={{ base: "center", md: "start" }} spacing={4} flex="1">
                  <HStack justify="space-between" width="100%">
                    <Text
                      fontSize={{ base: "lg", md: "xl" }}
                      fontWeight="bold"
                      bgGradient="linear(to-r, #00e667, #0087e6)"
                      bgClip="text"
                    >
                      {project.title}
                    </Text>
                    <Icon as={FaRocket} boxSize={6} color="#00cdbb" />
                  </HStack>

                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="whiteAlpha.800"
                    textAlign={{ base: "center", md: "left" }}
                  >
                    {project.description}
                  </Text>

                  <Text fontSize="sm" fontWeight="bold" color="#00cdbb">
                    Progress: {project.progress}%
                  </Text>
                  <Progress
                    value={project.progress}
                    size="lg"
                    colorScheme="teal"
                    width="100%"
                    borderRadius="md"
                    bg="rgba(255, 255, 255, 0.1)"
                  />

                  <HStack mt={3} wrap="wrap" spacing={3}>
                    {project.technologies.map((tech, idx) => (
                      <Text
                        key={idx}
                        fontSize="sm"
                        fontWeight="bold"
                        color="white"
                        bg="rgba(0, 205, 187, 0.2)"
                        px={2}
                        py={1}
                        borderRadius="md"
                        _hover={{ bg: "rgba(0, 205, 187, 0.4)" }}
                      >
                        {tech}
                      </Text>
                    ))}
                  </HStack>
                </VStack>
              </Flex>
            </motion.div>
          ))}
        </Stack>

        <Divider borderColor="rgba(255, 255, 255, 0.2)" />

        {/* Technical Skills Section */}
        <VStack spacing={8} align="center" width="100%">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              bgGradient="linear(to-r, #00e667, #0087e6)"
              bgClip="text"
              textShadow="0 0 10px rgba(0, 230, 103, 0.5)"
            >
              🔥 Technical Skills
            </Text>
          </motion.div>

          <Flex wrap="wrap" justify="center" gap={6}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <VStack
                  p={4}
                  bg="rgba(255, 255, 255, 0.05)"
                  boxShadow="0px 0px 15px rgba(0, 230, 103, 0.3)"
                  borderRadius="10px"
                  border="1px solid rgba(0, 205, 187, 0.3)"
                  backdropFilter="blur(12px)"
                  textAlign="center"
                  transition="all 0.3s ease"
                  _hover={{
                    boxShadow: "0px 0px 25px rgba(0, 135, 230, 0.5)",
                    transform: "translateY(-5px)",
                  }}
                >
                  <Icon as={skill.icon} boxSize={10} color="#00cdbb" />
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color="white">
                    {skill.name}
                  </Text>
                  <Progress
                    value={skill.level}
                    size="lg"
                    colorScheme="teal"
                    width="150px"
                    borderRadius="md"
                    bg="rgba(255, 255, 255, 0.1)"
                  />
                  <Text fontSize="sm" color="#00e667">
                    {skill.level}%
                  </Text>
                </VStack>
              </motion.div>
            ))}
          </Flex>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Projects;