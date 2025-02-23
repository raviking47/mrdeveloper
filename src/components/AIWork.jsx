import { Box, VStack, Text, HStack, Icon, SimpleGrid, Badge } from "@chakra-ui/react";
import { FaBrain, FaRobot, FaMicrochip, FaLanguage, FaSearch } from "react-icons/fa";
import { SiTensorflow, SiOpencv, SiFastapi, SiLangchain, SiHuggingface } from "react-icons/si";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// AI Projects
const aiProjects = [
  {
    title: "🤖 AI-Powered Video Generator",
    description: "AI-driven system for video creation using NLP, real-time processing, and AI-driven filters.",
    technologies: ["LLM", "Flask", "FastAPI", "TensorFlow"],
  },
  {
    title: "💬 AI Chatbot with 🤗 Hugging Face",
    description: "Built an AI chatbot utilizing Hugging Face Transformers & Large Language Models.",
    technologies: ["OpenAI API", "LangChain", "FastAPI", "🤗 Hugging Face"],
  },
  {
    title: "🔍 AI-Powered Search System",
    description: "Semantic search engine using FAISS and vector embeddings.",
    technologies: ["FAISS", "Python", "Vector Databases"],
  },
];

// AI Skills (For Auto-Scrolling Slider)
const aiSkills = [
  { name: "Machine Learning", icon: FaBrain },
  { name: "Deep Learning", icon: FaMicrochip },
  { name: "Computer Vision", icon: SiOpencv },
  { name: "NLP", icon: FaLanguage },
  { name: "LLM Integration", icon: SiLangchain },
  { name: "AI Search Systems", icon: FaSearch },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "FastAPI & AI APIs", icon: SiFastapi },
  { name: "🤗 Hugging Face Models", icon: SiHuggingface },
];

const AIWork = () => {
  const sliderRef = useRef(null);

  // Auto-scroll effect for AI Skills slider
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1.5; // Adjust speed of auto-scroll
      }
    }, 20); // Adjust speed of movement

    return () => clearInterval(interval);
  }, []);

  return (
    <Box id="ai-work" bg="linear-gradient(135deg, #05010f, #12021a)" color="white" minH="100vh" py={{ base: 10, md: 16 }} px={{ base: 6, md: 12 }}>
      <VStack spacing={12} align="center" maxW="1100px" mx="auto">
        {/* Section Title */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="pink.400">
            🤖 AI Innovations & Research
          </Text>
        </motion.div>

        {/* AI Skills Section (Auto-Scrolling Slider) */}
        <VStack spacing={6} align="center" width="100%">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="blue.300">
              🧠 Key AI Skills
            </Text>
          </motion.div>

          <Box overflow="hidden" width="100%" position="relative" ref={sliderRef}>
            <motion.div
              style={{ display: "flex", gap: "16px", minWidth: "max-content", padding: "10px 0" }}
            >
              {aiSkills.concat(aiSkills).map((skill, index) => ( // Duplicate for infinite loop effect
                <motion.div key={index} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <VStack p={4} bg="gray.900" boxShadow="0px 0px 20px rgba(255, 0, 127, 0.3)" borderRadius="10px" textAlign="center" minW="160px">
                    <Icon as={skill.icon} boxSize={10} color="purple.400" />
                    <Text fontSize="lg" fontWeight="bold">
                      {skill.name}
                    </Text>
                  </VStack>
                </motion.div>
              ))}
            </motion.div>
          </Box>
        </VStack>

        {/* AI Projects Grid */}
        <VStack spacing={6} width="100%">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="teal.300">
              🚀 AI Projects
            </Text>
          </motion.div>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} width="100%">
            {aiProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Box
                  bg="rgba(255, 255, 255, 0.08)"
                  boxShadow="0px 0px 25px rgba(255, 0, 127, 0.4)"
                  borderRadius="12px"
                  p={6}
                  textAlign="left"
                  transition="0.3s"
                  _hover={{
                    boxShadow: "0px 0px 35px rgba(255, 0, 127, 0.6)",
                    transform: "scale(1.05)",
                  }}
                >
                  <Text fontSize="xl" fontWeight="bold" color="purple.300">
                    {project.title}
                  </Text>
                  <Text fontSize="md" color="gray.300" mt={2}>
                    {project.description}
                  </Text>
                  <HStack mt={3} wrap="wrap">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} fontSize="sm" fontWeight="bold" colorScheme="pink" px={2} py={1}>
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
