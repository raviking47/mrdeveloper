import { Box, Text, VStack, Highlight } from "@chakra-ui/react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const About = () => {
  return (
    <Box
      id="about"
      minH="100vh"
      px={{ base: 4, md: 12 }}
      py={{ base: 10, md: 16 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="linear-gradient(135deg, #05010f, #12021a)" // Dark Purple Gradient
    >
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <VStack spacing={6} maxW="800px" textAlign={{ base: "center", md: "left" }} mx="auto">
          {/* Title */}
          <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="pink.300">
            About Me
          </Text>

          {/* Introduction */}
          <Text fontSize={{ base: "md", md: "lg" }} color="white">
            I am a{" "}
            <Highlight query="Full Stack Developer" styles={{ color: "pink.400", fontWeight: "bold", bg: "transparent" }}>
              Full Stack Developer
            </Highlight>{" "}
            and{" "}
            <Highlight query="AI Solutions Architect" styles={{ color: "purple.400", fontWeight: "bold", bg: "transparent" }}>
              AI Solutions Architect
            </Highlight>
            , blending **cutting-edge technologies** to create intelligent and scalable solutions. 
            My expertise lies in **AI-powered web applications, cloud deployment, and system optimization**.
          </Text>

          {/* Technical Stack */}
          <Text fontSize={{ base: "md", md: "lg" }} color="white">
            I specialize in{" "}
            <Highlight query="React, Flask, and FastAPI" styles={{ color: "purple.400", fontWeight: "bold", bg: "transparent" }}>
              React, Flask, and FastAPI
            </Highlight>
            , enabling me to develop **high-performance and user-centric platforms**.
          </Text>

          {/* Education */}
          <Text fontSize={{ base: "md", md: "lg" }} color="white">
            I hold a **Bachelor's degree in Computer Science** from{" "}
            <Highlight query="University of Delhi" styles={{ color: "pink.400", fontWeight: "bold", bg: "transparent" }}>
              University of Delhi
            </Highlight>
            , where I gained expertise in **AI-powered systems, cloud computing, and full-stack development**.
          </Text>

          {/* Key Projects */}
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold" color="pink.300">
            Key Projects:
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="white">
            🔹{" "}
            <Highlight query="AI Video Generator" styles={{ color: "purple.400", fontWeight: "bold", bg: "transparent" }}>
              AI Video Generator
            </Highlight>
            : Integrating **real-time subtitle merging, NLP-powered content generation, and dynamic video rendering**.
            <br />
            🔹{" "}
            <Highlight query="Live Interactive Learning System" styles={{ color: "pink.400", fontWeight: "bold", bg: "transparent" }}>
              Live Interactive Learning System
            </Highlight>
            : Built with **React and Firebase** to enhance real-time student engagement and collaboration.
          </Text>

          {/* Technical Skills */}
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold" color="pink.300">
            Technical Skills:
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="white">
            🔹 JavaScript, TypeScript, React.js, Next.js, Chakra UI <br />
            🔹 Python, Flask, FastAPI, TensorFlow, OpenAI GPT-4 <br />
            🔹 Docker, Kubernetes, AWS, Firebase, CI/CD Pipelines <br />
            🔹 PostgreSQL, MongoDB, Redis, Firestore <br />
          </Text>

          {/* Certifications */}
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold" color="pink.300">
            Certifications:
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} color="white">
            📜{" "}
            <Highlight query="AI Model Development" styles={{ color: "purple.400", fontWeight: "bold", bg: "transparent" }}>
              AI Model Development
            </Highlight>{" "}
            – Advanced ML & Deep Learning Techniques <br />
            📜{" "}
            <Highlight query="Prompt Engineering" styles={{ color: "pink.400", fontWeight: "bold", bg: "transparent" }}>
              Prompt Engineering
            </Highlight>{" "}
            – OpenAI & LLM Fine-Tuning <br />
            📜{" "}
            <Highlight query="Cloud Computing (AWS & GCP)" styles={{ color: "purple.400", fontWeight: "bold", bg: "transparent" }}>
              Cloud Computing (AWS & GCP)
            </Highlight>{" "}
            – Cloud Architecture & DevOps <br />
          </Text>

          {/* Final Statement */}
          <Text fontSize={{ base: "md", md: "lg" }} color="white">
            I am passionate about{" "}
            <Highlight query="Collaboration, Problem-Solving, and Innovation" styles={{ color: "pink.400", fontWeight: "bold", bg: "transparent" }}>
              Collaboration, Problem-Solving, and Innovation
            </Highlight>
            . Whether leading AI initiatives or optimizing backend performance, I aim to deliver **high-impact solutions**.
          </Text>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default About;
