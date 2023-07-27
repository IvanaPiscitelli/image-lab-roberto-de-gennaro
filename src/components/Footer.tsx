import { Box, Flex, Text, Image, Stack } from "@chakra-ui/react";
import logo from "../assets/logo-roberto.png";
import SocialMediaList from "./SocialMediaList";

const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py="6"
      height={{ base: "50vh", md: "40vh" }}
      marginTop={{ base: "1.5em", md: "5em" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        maxW={{ base: "xl", sm: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        align="flex-start"
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align="flex-start"
          justify="space-evenly"
          width="full"
          wrap="wrap"
        >
          <Image src={logo} alt="logo" />
          <Stack direction="column" mt={{ base: "5", md: "0" }}>
            <Text fontSize="18px" fontWeight={800}>
              FOLLOW US
            </Text>
            <SocialMediaList color="white" />
          </Stack>
          <Stack direction="column" mt={{ base: "5", md: "0" }}>
            <Text fontSize="18px" fontWeight={800}>
              PAGES
            </Text>
            <Text>About Me</Text>
            <Text>Certifications</Text>
            <Text>Location</Text>
            <Text>My Works</Text>
            <Text>Contact Me</Text>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
