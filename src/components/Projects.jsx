import { Box, VStack, Text, Progress, HStack, Icon, Divider, Flex, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import { SiJavascript, SiReact, SiPython, SiFastapi, SiTensorflow, SiMongodb, SiFirebase } from "react-icons/si";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Project Data with Completion Level
const projects = [
  {
    title: "AI Video Generator",
    description: "An AI-powered tool that integrates real-time NLP processing, automatic video editing, and content moderation.",
    progress: 90,
    technologies: ["React", "Flask", "FastAPI", "AWS"],
  },
  {
    title: "Live Poll Learning System",
    description: "An interactive student engagement platform with real-time quiz polls and collaborative tools.",
    progress: 85,
    technologies: ["React", "Firebase", "NodeJS"],
  },
  {
    title: "AI Chatbot with LLM",
    description: "A conversational chatbot utilizing advanced Large Language Models for real-time interactive conversations.",
    progress: 80,
    technologies: ["Python", "FastAPI", "OpenAI API"],
  },
];

// Skills Data
const skills = [
  { name: "JavaScript", icon: SiJavascript, level: 95 },
  { name: "ReactJS", icon: SiReact, level: 90 },
  { name: "Python", icon: SiPython, level: 85 },
  { name: "FastAPI", icon: SiFastapi, level: 80 },
  { name: "TensorFlow", icon: SiTensorflow, level: 75 },
  { name: "MongoDB", icon: SiMongodb, level: 70 },
  { name: "Firebase", icon: SiFirebase, level: 80 },
];

const Projects = () => {
  return (
    <Box id="projects" bg="linear-gradient(135deg, #05010f, #12021a)" color="white" minH="100vh" py={{ base: 10, md: 16 }} px={{ base: 6, md: 12 }}>
      <VStack spacing={12} align="center" maxW="1100px" mx="auto">
        {/* Section Title */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="pink.400">
            🚀 Featured Projects
          </Text>
        </motion.div>

        {/* Interactive Project Cards - Mobile Optimized */}
        <Stack spacing={8} width="100%">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Flex
                direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
                align="center"
                gap={6}
                bg="rgba(255, 255, 255, 0.05)"
                borderRadius="15px"
                border="1px solid rgba(255, 255, 255, 0.2)"
                backdropFilter="blur(8px)"
                p={6}
                boxShadow="0px 0px 20px rgba(255, 0, 127, 0.3)"
                _hover={{ boxShadow: "0px 0px 30px rgba(255, 0, 127, 0.6)", transform: "scale(1.02)" }}
              >
                <VStack align={{ base: "center", md: "start" }} spacing={4} flex="1">
                  <HStack justify="space-between" width="100%">
                    <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color="cyan.300">
                      {project.title}
                    </Text>
                    <Icon as={FaRocket} boxSize={6} color="yellow.400" />
                  </HStack>

                  <Text fontSize={{ base: "sm", md: "md" }} color="gray.300" textAlign={{ base: "center", md: "left" }}>
                    {project.description}
                  </Text>

                  <Text fontSize="sm" fontWeight="bold" color="purple.400">
                    Progress: {project.progress}%
                  </Text>
                  <Progress value={project.progress} size="lg" colorScheme="pink" width="100%" />

                  <HStack mt={3} wrap="wrap">
                    {project.technologies.map((tech, idx) => (
                      <Text key={idx} fontSize="sm" fontWeight="bold" color="purple.500" bg="purple.700" px={2} py={1} borderRadius="md">
                        {tech}
                      </Text>
                    ))}
                  </HStack>
                </VStack>
              </Flex>
            </motion.div>
          ))}
        </Stack>

        <Divider borderColor="gray.600" />

        {/* Technical Skills Section */}
        <VStack spacing={8} align="center" width="100%">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="blue.300">
              🔥 Technical Skills
            </Text>
          </motion.div>

          <Flex wrap="wrap" justify="center" gap={6}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <VStack p={4} bg="gray.900" boxShadow="0px 0px 15px rgba(138, 43, 226, 0.5)" borderRadius="10px" textAlign="center">
                  <Icon as={skill.icon} boxSize={10} color="pink.400" />
                  <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
                    {skill.name}
                  </Text>
                  <Progress value={skill.level} size="lg" colorScheme="pink" width="100%" />
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
