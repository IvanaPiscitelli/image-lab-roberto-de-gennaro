import { useEffect } from "react";
import { Box, Flex, Text, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-roberto.png";
import SocialMediaList from "./SocialMediaList";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box as="footer" role="contentinfo" py={6} h={{ base: "45vh", md: "30vh" }} mt={{ md: "5em" }} color="white">
      <Flex
        direction={{ base: "column", md: "row" }}
        maxW={{ base: "xl", sm: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        align="flex-start"
      >
        <Flex direction={{ base: "column", md: "row" }} align="flex-start" justify="space-evenly" w="full" wrap="wrap">
          <Image src={logo} alt="logo" mb="1em" />
          <Stack direction="column" mt={{ base: "5px", md: "0" }}>
            <Text fontSize="18px" fontWeight={800}>
              {t("followUs")}
            </Text>
            <SocialMediaList color="white" />
          </Stack>
          <Stack direction="column" mt={{ base: "5px", md: "0" }}>
            <Text fontSize="18px" fontWeight={800}>
              {t("pages")}
            </Text>
            <Link to="/about-me"> {t("aboutMe")}</Link>
            <Link to="/location"> {t("location")}</Link>
            <Link to="/price-list"> {t("priceList")}</Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
