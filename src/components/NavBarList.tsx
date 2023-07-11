import { Button, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  color: boolean;
}

const NavBarList = ({ color }: Props) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={!isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          bg="transparent"
          fontWeight="normal"
          onClick={() => onToggle()}
          _hover={{ bg: "transparent" }}
          color={color ? "white" : "black"}
        >
          About Me
        </MenuButton>
        <MenuList bg="black" borderStyle="none" boxShadow="none" borderRadius="none">
          <MenuItem color="white" bg="black" padding="0 40px 10px 30px">
            Certifications
          </MenuItem>
        </MenuList>
      </Menu>
      <Text padding="10px">Location</Text>
      <Text padding="10px">My Works</Text>
      <Text padding="10px">Contact Me</Text>
    </>
  );
};

export default NavBarList;
