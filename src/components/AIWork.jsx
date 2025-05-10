import { Box, VStack, Text, HStack, Icon, SimpleGrid, Badge, Flex, Heading } from "@chakra-ui/react";
import { FaBrain, FaRobot, FaMicrochip, FaLanguage, FaSearch, FaCode } from "react-icons/fa";
import { SiTensorflow, SiOpencv, SiFastapi, SiLangchain, SiHuggingface } from "react-icons/si";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: custom => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.7, ease: "easeOut" }
  })
};

// AI Projects with enhanced data
const aiProjects = [
  {
    title: "🤖 AI-Powered Chatbot",
    description: "A conversational AI system leveraging LLMs for personalized, context-aware interactions, deployed on AWS with real-time response capabilities.",
    technologies: ["LangChain", "AWS", "FastAPI", "Hugging Face"],
    color: "#00e667",
    icon: FaRobot
  },
  {
    title: "🔍 Semantic Search Engine",
    description: "A semantic search system using vector embeddings and FAISS for context-based results, integrated with a React frontend for seamless user experience.",
    technologies: ["FAISS", "Python", "React", "NLP"],
    color: "#0087e6",
    icon: FaSearch
  },
  {
    title: "👁️ Object Detection System",
    description: "A computer vision solution for real-time object detection and classification, utilizing deep learning models and optimized for edge devices.",
    technologies: ["OpenCV", "TensorFlow", "Python", "Docker"],
    color: "#00cdbb",
    icon: SiOpencv
  },
  {
    title: "💬 NLP-Powered Sentiment Analyzer",
    description: "An AI-driven tool for sentiment analysis of social media data, using NLP and LLMs to provide actionable insights for businesses.",
    technologies: ["Hugging Face", "Python", "FastAPI", "MongoDB"],
    color: "#00e667",
    icon: SiLangchain
  }
];

// AI Skills (For Auto-Scrolling Slider)
const aiSkills = [
  { name: "Machine Learning", icon: FaBrain, color: "#00e667" },
  { name: "Deep Learning", icon: FaMicrochip, color: "#0087e6" },
  { name: "Computer Vision", icon: SiOpencv, color: "#00cdbb" },
  { name: "NLP", icon: FaLanguage, color: "#00e667" },
  { name: "LLM Integration", icon: SiLangchain, color: "#0087e6" },
  { name: "AI Search Systems", icon: FaSearch, color: "#00cdbb" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#00e667" },
  { name: "FastAPI & AI APIs", icon: SiFastapi, color: "#0087e6" },
  { name: "Hugging Face Models", icon: SiHuggingface, color: "#00cdbb" },
  { name: "Model Deployment", icon: FaCode, color: "#00e667" }
];

const AIWork = () => {
  const sliderRef = useRef(null);

  // Auto-scroll effect for AI Skills slider with reset
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += 2; // Adjusted speed for smoother scrolling
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="ai-work"
      bg="linear-gradient(135deg, #021a2b, #0a3d40)"
      color="white"
      minH="100vh"
      py={{ base: 12, md: 16 }}
      px={{ base: 5, md: 10 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background Decorative Elements */}
      <Box
        position="absolute"
        top="10%"
        right="10%"
        width="350px"
        height="350px"
        borderRadius="full"
        bg="rgba(0, 230, 103, 0.08)"
        filter="blur(100px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="5%"
        left="15%"
        width="300px"
        height="300px"
        borderRadius="full"
        bg="rgba(0, 135, 230, 0.08)"
        filter="blur(80px)"
        zIndex={0}
      />

      <VStack spacing={14} align="center" maxW="1200px" mx="auto" position="relative" zIndex={1}>
        {/* Section Title with Fancier Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box textAlign="center">
            <Text
              as="span"
              display="inline-block"
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="medium"
              color="#00cdbb"
              mb={2}
              letterSpacing="wider"
            >
              INNOVATION
            </Text>
            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              bgGradient="linear(to-r, #00e667, #0087e6)"
              bgClip="text"
              letterSpacing="tight"
              mb={3}
              textShadow="0 0 10px rgba(0, 230, 103, 0.5)"
            >
              🤖 AI Innovations & Research
            </Heading>
            <Box
              h="3px"
              w="60px"
              bgGradient="linear(to-r, #00e667, #0087e6)"
              mx="auto"
              mt={2}
            />
          </Box>
        </motion.div>

        {/* Enhanced AI Skills Section (Auto-Scrolling Slider) */}
        <VStack spacing={8} align="center" width="100%">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              bgGradient="linear(to-r, #00e667, #0087e6)"
              bgClip="text"
              letterSpacing="tight"
            >
              🧠 Key AI Skills
            </Text>
          </motion.div>

          <Box
            overflow="hidden"
            width="100%"
            position="relative"
            ref={sliderRef}
            px={4}
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
            }}
          >
            <Flex
              gap={4}
              minW="max-content"
              padding="10px 0"
            >
              {aiSkills.concat(aiSkills).map((skill, index) => (
                <Box
                  key={index}
                  as={motion.div}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <VStack
                    p={5}
                    bg="rgba(255, 255, 255, 0.06)"
                    borderRadius="16px"
                    textAlign="center"
                    minW="180px"
                    h="150px"
                    justify="center"
                    boxShadow={`0 8px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 205, 187, 0.3)`}
                    position="relative"
                    overflow="hidden"
                    transition="all 0.3s ease"
                    _hover={{
                      bg: "rgba(255, 255, 255, 0.09)",
                      boxShadow: `0 12px 26px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(0, 205, 187, 0.5)`,
                    }}
                  >
                    {/* Decorative gradient background */}
                    <Box
                      position="absolute"
                      top="-20px"
                      right="-20px"
                      width="100px"
                      height="100px"
                      borderRadius="full"
                      bg="rgba(0, 205, 187, 0.2)"
                      filter="blur(25px)"
                      zIndex={0}
                    />
                    
                    <Icon
                      as={skill.icon}
                      boxSize={12}
                      color={skill.color}
                      zIndex={1}
                      mb={2}
                    />
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      zIndex={1}
                      color="white"
                    >
                      {skill.name}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </Flex>
          </Box>
        </VStack>

        {/* Enhanced AI Projects Grid */}
        <VStack spacing={8} width="100%">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              bgGradient="linear(to-r, #00e667, #0087e6)"
              bgClip="text"
              letterSpacing="tight"
            >
              🚀 AI Projects
            </Text>
          </motion.div>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} width="100%">
            {aiProjects.map((project, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={projectVariants}
                custom={index}
              >
                <Box
                  bg="rgba(255, 255, 255, 0.07)"
                  boxShadow={`0 8px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 205, 187, 0.3)`}
                  borderRadius="16px"
                  p={6}
                  textAlign="left"
                  transition="all 0.3s ease"
                  position="relative"
                  overflow="hidden"
                  _hover={{
                    boxShadow: `0 12px 35px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(0, 135, 230, 0.5)`,
                    transform: "translateY(-5px)",
                  }}
                >
                  {/* Decorative gradient corner */}
                  <Box
                    position="absolute"
                    top="-30px"
                    right="-30px"
                    width="150px"
                    height="150px"
                    borderRadius="full"
                    bg="rgba(0, 205, 187, 0.2)"
                    filter="blur(40px)"
                    zIndex={0}
                  />
                  
                  {/* Project Icon */}
                  <Flex align="center" mb={3}>
                    <Box
                      p={2}
                      borderRadius="full"
                      bg="rgba(0, 205, 187, 0.2)"
                      mr={3}
                    >
                      <Icon as={project.icon} color={project.color} boxSize={6} />
                    </Box>
                    <Text
                      fontSize="xl"
                      fontWeight="bold"
                      color={project.color}
                    >
                      {project.title}
                    </Text>
                  </Flex>
                  
                  <Text fontSize="md" color="whiteAlpha.800" mt={2} lineHeight="tall">
                    {project.description}
                  </Text>
                  
                  <HStack mt={4} flexWrap="wrap" spacing={2}>
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        fontSize="xs"
                        fontWeight="bold"
                        bg="rgba(0, 205, 187, 0.2)"
                        color="white"
                        px={3}
                        py={1}
                        borderRadius="full"
                        mt={1}
                        _hover={{ bg: "rgba(0, 205, 187, 0.4)" }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </HStack>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
    </Box>
  );
};

export default AIWork;