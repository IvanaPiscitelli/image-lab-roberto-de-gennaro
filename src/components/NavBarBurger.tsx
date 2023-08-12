import {
  Box,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

import LeftIcons from "./LeftIcons";
import SocialMediaList from "./SocialMediaList";

import logo from "../assets/logo-roberto.png";

const NavBarBurger = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <Box bg="black" position="fixed" w="100%" zIndex={100}>
      <HStack justifyContent="space-between" mx="10px">
        <LeftIcons color="white" />
        <Image src={logo} alt="logo" w="130px" h="46px" ml={1} p="5px" onClick={() => handleNavigate("/")} />
        <Menu strategy="fixed" gutter={-1} onClose={onClose}>
          <MenuButton
            as={IconButton}
            aria-label="Toggle"
            icon={
              !isOpen ? (
                <ScaleFade initialScale={0.9} in={!isOpen}>
                  <HamburgerIcon style={{ fontSize: "25px" }} />
                </ScaleFade>
              ) : (
                <ScaleFade initialScale={0.9} in={isOpen}>
                  <CloseIcon style={{ fontSize: "18px" }} />
                </ScaleFade>
              )
            }
            bg="black"
            color="white"
            mr="15px"
            colorScheme="transparent"
            onClick={() => onToggle()}
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
                About Me
              </Box>
            </MenuItem>

            <MenuItem bg="black" color="white">
              <Box
                as="span"
                flex={1}
                textAlign="left"
                borderStyle="none"
                fontSize="17px"
                onClick={() => handleNavigate("/certifications")}
              >
                Certifications
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
                Location
              </Box>
            </MenuItem>

            <MenuItem bg="black" color="white">
              <Box
                as="span"
                flex={1}
                textAlign="left"
                borderStyle="none"
                fontSize="17px"
                onClick={() => handleNavigate("/my-works")}
              >
                My Works
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
                Price List
              </Box>
            </MenuItem>

            <MenuItem bg="black" color="white">
              <Box as="span" flex={1} textAlign="left" borderStyle="none" fontSize="17px">
                <SocialMediaList color="white" />
              </Box>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default NavBarBurger;
