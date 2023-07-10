import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";

import { HiMenu } from "react-icons/hi";
import logo from "../assets/logo-roberto.png";
import IconMap from "./IconMap";
import SocialMediaList from "./SocialMediaList";

const NavBarBurger = () => {
  return (
    <Box bg="black" position="fixed" width="100%">
      <HStack justifyContent="space-between" marginX="10px">
        <IconMap color="white" />
        <Image src={logo} alt="logo" width="130px" height="46px" marginLeft={1} padding="5px" />

        <Menu gutter={-1} strategy={"fixed"}>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HiMenu style={{ fontSize: "28px" }} />}
            bg="black"
            color="white"
            marginRight="15px"
          />

          <MenuList bg="black" width="100vw" borderStyle="none" borderRadius={0}>
            <Accordion allowMultiple bg="black">
              <AccordionItem color="white" borderStyle="none">
                <h2>
                  <AccordionButton color="white">
                    <Box as="span" flex="1" textAlign="left">
                      About Me
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="white" fontSize="14px">
                  Certifications
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderStyle="none">
                <h2>
                  <AccordionButton color="white">
                    <Box as="span" flex="1" textAlign="left" borderStyle="none" fontSize="17px">
                      Location
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem borderStyle="none">
                <h2>
                  <AccordionButton color="white">
                    <Box as="span" flex="1" textAlign="left" borderStyle="none" fontSize="17px">
                      My Works
                    </Box>
                  </AccordionButton>
                </h2>
              </AccordionItem>

              <AccordionItem borderStyle="none">
                <h2>
                  <AccordionButton color="white">
                    <Box as="span" flex="1" textAlign="left" borderStyle="none" fontSize="17px">
                      Contact Me
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
            {/* <MenuItem bg="black">
              <Text color="white">Location</Text>
            </MenuItem>
            <MenuItem bg="black">
              <Text color="white">My Works</Text>
            </MenuItem>
            <MenuItem bg="black">
              <Text color="white">Contact Me</Text>
            </MenuItem>
            <MenuItem bg="black">
              <SocialMediaList color="white" />
            </MenuItem> */}
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default NavBarBurger;
