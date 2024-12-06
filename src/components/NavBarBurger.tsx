import { Box, HStack, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, ScaleFade } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import LeftIcons from "./LeftIcons";
import SocialMediaList from "./SocialMediaList";
import SwitchLang from "./SwitchLang";
import logo from "../assets/logo-roberto.png";

const NavBarBurger = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Box bg="black" position="fixed" w="100%" zIndex={100}>
      <HStack justifyContent="space-between" mx="10px">
        <LeftIcons color="white" />
        <Image src={logo} alt="logo" w="130px" h="46px" ml={1} p="5px" onClick={() => handleNavigate("/")} />
        <Menu strategy="fixed" gutter={-1} onOpen={() => setIsOpen(true)} onClose={() => setIsOpen(false)}>
          <MenuButton
            as={IconButton}
            aria-label="Toggle"
            icon={
              isOpen ? (
                <ScaleFade initialScale={0.9} in={isOpen}>
                  <CloseIcon style={{ fontSize: "18px" }} />
                </ScaleFade>
              ) : (
                <ScaleFade initialScale={0.9} in={!isOpen}>
                  <HamburgerIcon style={{ fontSize: "25px" }} />
                </ScaleFade>
              )
            }
            bg="black"
            color="white"
            mr="15px"
            colorScheme="transparent"
          />

          <MenuList bg="black" w="100vw" borderStyle="none">
            <MenuItem bg="black" color="white">
              <Box
                as="span"
                flex={1}
                textAlign="left"
                borderStyle="none"
                fontSize="17px"
                onClick={() => handleNavigate("/about-me")}
              >
                {t("aboutMe")}
              </Box>
            </MenuItem>

            <MenuItem bg="black" color="white">
              <Box
                as="span"
                flex={1}
                textAlign="left"
                borderStyle="none"
                fontSize="17px"
                onClick={() => handleNavigate("/location")}
              >
                {t("location")}
              </Box>
            </MenuItem>

            <MenuItem bg="black" color="white">
              <Box
                as="span"
                flex={1}
                textAlign="left"
                borderStyle="none"
                fontSize="17px"
                onClick={() => handleNavigate("/price-list")}
              >
                {t("priceList")}
              </Box>
            </MenuItem>

            <MenuItem bg="black" color="white">
              <HStack justifyContent="space-between" w="100%">
                <Box textAlign="left" borderStyle="none" fontSize="17px">
                  <SocialMediaList color="white" />
                </Box>
                <Box textAlign="left" borderStyle="none" fontSize="17px">
                  <SwitchLang />
                </Box>
              </HStack>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default NavBarBurger;
