import { Button, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const NavBarList = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={!isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />} bg="transparent" fontWeight="normal" onClick={() => onToggle()}
          _hover={{ bg: "transparent" }}
        >
          About Me
        </MenuButton>
        <MenuList bg="#D1CEC9" borderStyle="none" boxShadow="none">
          <MenuItem color="white" bg="black" padding="20px">Certifications</MenuItem>
        </MenuList>
      </Menu>
      <Text padding="10px">Location</Text>
      <Text padding="10px">My Works</Text>
      <Text padding="10px">Contact Me</Text>
    </>
  );
};

export default NavBarList;
