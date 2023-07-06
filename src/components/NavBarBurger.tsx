import { Box, HStack, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";

import { HiMenu } from "react-icons/hi";
import logomen from "../assets/logo_menspire.webp";
import IconMap from "./IconMap";
import SocialMediaList from "./SocialMediaList";

const NavBarBurger = () => {
  return (
    <Box bg="black" position="fixed" width="100%">
      <HStack justifyContent="space-between" marginX="30px">
        <IconMap color="white" />
        <Image src={logomen} alt="logo" fill="container" width="150px" height="38px" />

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HiMenu style={{ fontSize: "28px" }} />}
            bg="black"
            color="white"
          />
          <MenuList bg="black" width="100vw">
            <MenuItem bg="black">
              <Text color="white">About Me</Text>
            </MenuItem>
            <MenuItem bg="black">
              <Text color="white">Certifications</Text>
            </MenuItem>

            <MenuItem bg="black">
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
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default NavBarBurger;
