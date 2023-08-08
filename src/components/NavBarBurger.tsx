import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import LeftIcons from "./LeftIcons";
import SocialMediaList from "./SocialMediaList";

import logo from "../assets/logo-roberto.png";
import { useNavigate } from "react-router-dom";

const NavBarBurger = () => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box bg="black" position="fixed" width="100%" zIndex={100}>
      <HStack justifyContent="space-between" marginX="10px">
        <LeftIcons color="white" />
        <Image src={logo} alt="logo" width="130px" height="46px" marginLeft={1} padding="5px" />

        <Menu strategy={"fixed"} gutter={-1}>
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
            marginRight="15px"
            colorScheme="transparent"
            onClick={() => onToggle()}
          />

          <MenuList bg="black" width="100vw" borderStyle="none">
            <Accordion allowMultiple bg="black">
              <AccordionItem color="white" borderStyle="none">
                <h2>
                  <AccordionButton color="white">
                    <Box as="span" flex="1" textAlign="left" onClick={() => navigate("/about-me")}>
                      About Me
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="white" fontSize="14px" onClick={() => navigate("/certification")}>
                  Certifications
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderStyle="none">
                <h2>
                  <AccordionButton color="white">
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      borderStyle="none"
                      fontSize="17px"
                      onClick={() => navigate("/location")}
                    >
                      Location
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem borderStyle="none">
                <h2>
                  <AccordionButton color="white">
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      borderStyle="none"
                      fontSize="17px"
                      onClick={() => navigate("/my-works")}
                    >
                      My Works
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem borderStyle="none">
                <h2>
                  <AccordionButton color="white">
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      borderStyle="none"
                      fontSize="17px"
                      onClick={() => navigate("/price-list")}
                    >
                      Price List
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem borderStyle="none">
                <h2>
                  <AccordionButton color="white">
                    <Box as="span" flex="1" textAlign="left" borderStyle="none" fontSize="17px">
                      <SocialMediaList color="white" />
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>
            </Accordion>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default NavBarBurger;
