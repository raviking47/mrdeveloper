import { Box, Flex, Text, VStack, Button, Link, Image, HStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import image1  from "../assets/image1.jpg"
// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Home = () => {
  return (
    <Box
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 5, md: 8 }}
      py={10}
      bg="linear-gradient(135deg, #021a2b, #0a3d40)"
      position="relative"
      overflow="hidden"
    >
      {/* Background Decorative Elements */}
      <Box
        position="absolute"
        top="10%"
        left="5%"
        width="300px"
        height="300px"
        borderRadius="full"
        bg="rgba(0, 230, 103, 0.1)"
        filter="blur(80px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="15%"
        right="10%"
        width="250px"
        height="250px"
        borderRadius="full"
        bg="rgba(0, 135, 230, 0.1)"
        filter="blur(60px)"
        zIndex={0}
      />

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        maxW="1400px"
        mx="auto"
        textAlign={{ base: "center", md: "left" }}
        zIndex={1}
        gap={{ base: 8, md: 12 }}
      >
        {/* Profile Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
        >
          <Box
            position="relative"
            borderRadius="full"
            overflow="hidden"
            boxShadow="0 0 20px rgba(0, 230, 103, 0.5)"
            border="2px solid #00cdbb"
            w={{ base: "200px", md: "300px" }}
            h={{ base: "200px", md: "300px" }}
          >
            <Image
              src={image1}
              alt="Ravi Tomer Profile"
              objectFit="cover"
              w="100%"
              h="100%"
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              w="100%"
              h="100%"
              bg="rgba(0, 205, 187, 0.1)"
              opacity={0}
              transition="opacity 0.3s ease"
              _hover={{ opacity: 1 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontWeight="bold" fontSize="lg">
                Ravi Tomer
              </Text>
            </Box>
          </Box>
        </motion.div>

        {/* Text & Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          style={{ width: "100%" }}
        >
          <VStack
            align={{ base: "center", md: "flex-start" }}
            spacing={6}
            w="100%"
          >
            <Text
              fontSize={{ base: "4xl", md: "5xl" }}
              fontWeight="extrabold"
              color="white"
              letterSpacing="tight"
              bgGradient="linear(to-r, #00e667, #0087e6)"
              bgClip="text"
              textShadow="0 0 10px rgba(0, 230, 103, 0.5)"
            >
              Ravi Tomer
            </Text>

            {/* Typing Animation */}
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="#00cdbb"
              letterSpacing="wide"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "AI & Cloud Specialist",
                  2000,
                  "Tech Innovator",
                  2000,
                  "Code Enthusiast",
                  2000,
                ]}
                wrapper="span"
                repeat={Infinity}
                speed={50}
                cursor={true}
              />
            </Text>

            {/* Introduction */}
            <Text
              maxW="700px"
              fontSize={{ base: "md", md: "lg" }}
              color="whiteAlpha.800"
              lineHeight="tall"
            >
              I'm a Full Stack Developer with 1.5 years of experience at{" "}
              <Text as="span" color="#00e667" fontWeight="bold">
                Indevz and ANDC Elite
              </Text>
              , delivering scalable web applications. With a B.Sc. in Physical Science and Computer Science from{" "}
              <Text as="span" color="#0087e6" fontWeight="bold">
                Delhi University
              </Text>
              , I specialize in{" "}
              <Text as="span" color="#00cdbb" fontWeight="bold">
                React, Node.js, FastAPI, AWS, and AI integrations
              </Text>
              . My passion for technology drives me to create seamless user experiences and robust backend systems, solving complex challenges with innovative solutions.
            </Text>

            {/* Experience Highlights */}
            <Box
              bg="rgba(255, 255, 255, 0.05)"
              p={6}
              borderRadius="16px"
              border="1px solid rgba(0, 205, 187, 0.3)"
              boxShadow="0 8px 32px rgba(0, 230, 103, 0.3)"
              backdropFilter="blur(12px)"
              w="100%"
              textAlign={{ base: "center", md: "left" }}
              transition="all 0.3s ease"
              _hover={{
                boxShadow: "0 8px 38px rgba(0, 135, 230, 0.5)",
                transform: "translateY(-5px)",
              }}
            >
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color="white"
                mb={3}
                bgGradient="linear(to-r, #00e667, #0087e6)"
                bgClip="text"
              >
                💼 Professional Experience
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="whiteAlpha.800"
                lineHeight="relaxed"
              >
                At <strong>Indevz</strong>, I developed full-stack applications using React, Node.js, and AWS, enhancing performance by 25%. At <strong>ANDC Elite</strong>, I integrated AI-driven features with FastAPI and LLMs, improving user engagement. My work focuses on scalable architectures and intuitive UI/UX.
              </Text>
            </Box>

            {/* Skills Box */}
            <Box
              bg="rgba(255, 255, 255, 0.05)"
              p={6}
              borderRadius="16px"
              border="1px solid rgba(0, 205, 187, 0.3)"
              boxShadow="0 8px 32px rgba(0, 230, 103, 0.3)"
              backdropFilter="blur(12px)"
              w="100%"
              textAlign={{ base: "center", md: "left" }}
              transition="all 0.3s ease"
              _hover={{
                boxShadow: "0 8px 38px rgba(0, 135, 230, 0.5)",
                transform: "translateY(-5px)",
              }}
            >
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color="white"
                mb={3}
                bgGradient="linear(to-r, #00e667, #0087e6)"
                bgClip="text"
              >
                🚀 Technical Expertise
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="whiteAlpha.800"
                lineHeight="relaxed"
              >
                <strong>Front-End:</strong> React.js, Next.js, Chakra UI, JavaScript, HTML5, CSS3<br />
                <strong>Back-End:</strong> Node.js, FastAPI, Flask, Express.js<br />
                <strong>AI & ML:</strong> Large Language Models, TensorFlow, LangChain<br />
                <strong>Cloud & DevOps:</strong> AWS (EC2, S3, Lambda), Docker, CI/CD, Git<br />
                <strong>Databases:</strong> PostgreSQL, MongoDB, Firebase, MySQL<br />
                <strong>Tools:</strong> GitHub, VS Code, Postman, Jira
              </Text>
            </Box>

            {/* Education */}
            <Box
              bg="rgba(255, 255, 255, 0.05)"
              p={6}
              borderRadius="16px"
              border="1px solid rgba(0, 205, 187, 0.3)"
              boxShadow="0 8px 32px rgba(0, 230, 103, 0.3)"
              backdropFilter="blur(12px)"
              w="100%"
              textAlign={{ base: "center", md: "left" }}
              transition="all 0.3s ease"
              _hover={{
                boxShadow: "0 8px 38px rgba(0, 135, 230, 0.5)",
                transform: "translateY(-5px)",
              }}
            >
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color="white"
                mb={3}
                bgGradient="linear(to-r, #00e667, #0087e6)"
                bgClip="text"
              >
                🎓 Education
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="whiteAlpha.800"
                lineHeight="relaxed"
              >
                <strong>B.Sc. in Physical Science and Computer Science</strong><br />
                Delhi University, New Delhi<br />
                Graduated with a strong foundation in programming, algorithms, and data structures, fueling my passion for software development.
              </Text>
            </Box>

            {/* Social Links */}
            <HStack spacing={4} justify={{ base: "center", md: "flex-start" }}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://www.linkedin.com/in/rtomeredu47/" isExternal>
                  <Icon as={FaLinkedin} boxSize={8} color="#00cdbb" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://www.instagram.com/im_rtomer/" isExternal>
                  <Icon as={FaInstagram} boxSize={8} color="#00cdbb" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://github.com/rtomer" isExternal>
                  <Icon as={FaGithub} boxSize={8} color="#00cdbb" />
                </Link>
              </motion.div>
            </HStack>

            {/* Call-to-Action Buttons */}
            <Flex
              gap={5}
              mt={4}
              direction={{ base: "column", sm: "row" }}
              justify={{ base: "center", md: "flex-start" }}
              width={{ base: "100%", md: "auto" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ScrollLink to="projects" spy smooth offset={-80} duration={500}>
                  <Button
                    bg="linear-gradient(90deg, #00e667, #0087e6)"
                    color="white"
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="bold"
                    px={8}
                    py={6}
                    h="auto"
                    borderRadius="12px"
                    boxShadow="0px 4px 15px rgba(0, 230, 103, 0.4)"
                    _hover={{
                      bg: "linear-gradient(90deg, #0087e6, #00cdbb)",
                      boxShadow: "0px 6px 25px rgba(0, 135, 230, 0.6)",
                    }}
                    _active={{
                      bg: "linear-gradient(90deg, #00b352, #006bb3)",
                    }}
                  >
                    Explore Projects
                  </Button>
                </ScrollLink>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ScrollLink to="contact" spy smooth offset={-80} duration={500}>
                  <Button
                    variant="outline"
                    color="#00cdbb"
                    borderColor="#00cdbb"
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="bold"
                    px={8}
                    py={6}
                    h="auto"
                    borderRadius="12px"
                    borderWidth="2px"
                    _hover={{
                      bg: "rgba(0, 205, 187, 0.15)",
                      boxShadow: "0px 4px 20px rgba(0, 205, 187, 0.35)",
                    }}
                    _active={{
                      bg: "rgba(0, 205, 187, 0.25)",
                    }}
                  >
                    Connect with Me
                  </Button>
                </ScrollLink>
              </motion.div>
            </Flex>
          </VStack>
        </motion.div>
      </Flex>
    </Box>
  );
};

export default Home;