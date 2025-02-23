import { Box, VStack, Text, HStack, Icon, Link, Flex } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

// Contact & Social Media Info Combined
const contactDetails = [
  { icon: FaMapMarkerAlt, label: "Ghaziabad ,Uttar Pradesh, India" },
  { icon: FaEnvelope, label: "ravitomerak4747@gmail.com", link: "mailto:ravitomerak4747@gmail.com" },
  { icon: FaInstagram, label: "@im_rtomer", link: "https://www.instagram.com/im_rtomer", color: "#E1306C" },
  { icon: FaLinkedin, label: "linkedin.com/in/ravitomerreactnodewebdeveloper", link: "https://www.linkedin.com/in/ravitomerreactnodewebdeveloper/", color: "#0A66C2" },
];

const Contact = () => {
  return (
    <Box
      id="contact"
      minH="100vh"
      py={{ base: 10, md: 16 }}
      px={{ base: 6, md: 12 }}
      bg="linear-gradient(135deg, #05010f, #12021a)"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <VStack spacing={6} maxW="600px" w="100%" mx="auto">
          {/* Title */}
          <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" color="pink.400">
            📩 Get in Touch
          </Text>

          {/* Unified Contact Card */}
          <Box
            p={6}
            borderRadius="15px"
            bg="rgba(255, 255, 255, 0.1)"
            boxShadow="0px 0px 15px rgba(255, 0, 255, 0.3)"
            backdropFilter="blur(12px)"
            transition="0.3s"
            _hover={{ boxShadow: "0px 0px 25px rgba(255, 0, 255, 0.6)", transform: "scale(1.05)" }}
            width="100%"
          >
            <VStack spacing={5} width="100%">
              {contactDetails.map((item, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <HStack
                    spacing={4}
                    width="100%"
                    p={3}
                    borderRadius="10px"
                    bg="rgba(255, 255, 255, 0.05)"
                    boxShadow="0px 0px 12px rgba(0, 255, 255, 0.2)"
                    justify="center"
                    _hover={{ boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.5)" }}
                  >
                    <Icon as={item.icon} boxSize={10} color={item.color || "cyan.400"} />
                    {item.link ? (
                      <Link href={item.link} isExternal fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color="gray.300" _hover={{ color: "cyan.300" }}>
                        {item.label}
                      </Link>
                    ) : (
                      <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color="gray.300">{item.label}</Text>
                    )}
                  </HStack>
                </motion.div>
              ))}
            </VStack>
          </Box>
        </VStack>
      </motion.div>
    </Box>
  );
};

export default Contact;
