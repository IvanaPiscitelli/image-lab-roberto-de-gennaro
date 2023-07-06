import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const NavBarList = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<MdKeyboardArrowRight />}>
          About Me
        </MenuButton>
        <MenuList>
          <MenuItem>Certifications</MenuItem>
        </MenuList>
      </Menu>
      <Text>Location</Text>
      <Text>My Works</Text>
      <Text>Contact Me</Text>
    </>
  );
};

export default NavBarList;
