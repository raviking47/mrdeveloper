import { Box, VStack, Text, HStack, Icon, Link, Flex, Button } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaEnvelope, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Updated contact details with additional social media
const contactDetails = [
  { icon: FaMapMarkerAlt, label: "Ghaziabad, Uttar Pradesh, India" },
  { icon: FaEnvelope, label: "ravitomerak4747@gmail.com", link: "mailto:ravitomerak4747@gmail.com" },
  { icon: FaLinkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/rtomeredu47/", color: "#0087e6" },
  { icon: FaGithub, label: "GitHub", link: "https://github.com/ravitomer", color: "#00cdbb" },
  { icon: FaInstagram, label: "@im_rtomer", link: "https://www.instagram.com/im_rtomer", color: "#00e667" },
  { icon: FaTwitter, label: "Twitter", link: "#", color: "#0087e6" },
];

const Contact = () => {
  return (
    <Box
      id="contact"
      minH="100vh"
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 12 }}
      bg="linear-gradient(135deg, #021a2b, #0a3d40)"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
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
        bg="rgba(0, 230, 103, 0.08)"
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
        bg="rgba(0, 135, 230, 0.08)"
        filter="blur(50px)"
        zIndex={0}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ width: "100%", zIndex: 1 }}
      >
        <VStack spacing={10} maxW="800px" w="100%" mx="auto">
          {/* Section Title with decoration */}
          <Flex direction="column" alignItems="center" width="100%" mb={6}>
            <Text
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              bgGradient="linear(to-r, #00e667, #0087e6)"
              bgClip="text"
              letterSpacing="tight"
              textShadow="0 0 10px rgba(0, 230, 103, 0.5)"
            >
              Get Connected
            </Text>
            <Box
              width="80px"
              height="4px"
              bgGradient="linear(to-r, #00e667, #0087e6)"
              borderRadius="full"
              mt={2}
            />
            <Text
              mt={4}
              fontSize={{ base: "md", md: "lg" }}
              color="whiteAlpha.800"
              textAlign="center"
              maxW="600px"
            >
              Let's collaborate on your next project or discuss opportunities in AI and web development.
            </Text>
          </Flex>

          {/* Contact Cards Grid */}
          <Flex
            width="100%"
            wrap="wrap"
            justify="center"
            gap={6}
          >
            {contactDetails.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Box
                  p={5}
                  borderRadius="xl"
                  bg="rgba(255, 255, 255, 0.08)"
                  backdropFilter="blur(10px)"
                  border="1px solid rgba(0, 205, 187, 0.3)"
                  boxShadow="0px 4px 20px rgba(0, 230, 103, 0.2)"
                  width={{ base: "100%", sm: "180px" }}
                  height="160px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  transition="all 0.3s ease"
                  _hover={{
                    boxShadow: "0px 10px 30px rgba(0, 135, 230, 0.4)",
                    transform: "translateY(-5px)",
                    bg: "rgba(255, 255, 255, 0.12)"
                  }}
                >
                  <Icon
                    as={item.icon}
                    boxSize={8}
                    color={item.color || "#00cdbb"}
                    mb={3}
                  />
                  {item.link ? (
                    <Link
                      href={item.link}
                      isExternal
                      fontSize="sm"
                      fontWeight="medium"
                      color="whiteAlpha.800"
                      textAlign="center"
                      _hover={{ color: "white", textDecoration: "none" }}
                      mt={2}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Text
                      fontSize="sm"
                      fontWeight="medium"
                      color="whiteAlpha.800"
                      textAlign="center"
                      mt={2}
                    >
                      {item.label}
                    </Text>
                  )}
                </Box>
              </motion.div>
            ))}
          </Flex>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              mt={6}
              fontWeight="bold"
              fontSize="md"
              bgGradient="linear(to-r, #00e667, #0087e6)"
              _hover={{
                bgGradient: "linear(to-r, #00cdbb, #0087e6)",
                transform: "translateY(-2px)",
                boxShadow: "0px 8px 20px rgba(0, 230, 103, 0.4)"
              }}
              _active={{
                bgGradient: "linear(to-r, #00e667, #00cdbb)",
                transform: "translateY(0px)"
              }}
              transition="all 0.3s ease"
              as={Link}
              href="mailto:ravitomerak4747@gmail.com"
              isExternal
            >
              Send Message
            </Button>
          </motion.div>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default Contact;