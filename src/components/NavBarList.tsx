import { Button, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import PriceList from "./PriceList";

interface Props {
  color: string;
}

const NavBarList = ({ color }: Props) => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const onClickButton = (path: string) => {
    onToggle();
    navigate(path);
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={!isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          bg="transparent"
          fontWeight="normal"
          onClick={() => onClickButton("/about-me")}
          _hover={{ bg: "transparent" }}
          color={color}
        >
          About Me
        </MenuButton>
        <MenuList bg="black" borderStyle="none" boxShadow="none" borderRadius="none">
          <MenuItem color="white" bg="black" padding="0 40px 10px 30px" onClick={() => navigate("/certifications")}>
            Certifications
          </MenuItem>
        </MenuList>
      </Menu>
      <Text padding="10px" onClick={() => navigate("/location")}>
        Location
      </Text>
      <Text padding="10px" onClick={() => navigate("/my-works")}>
        My Works
      </Text>
      <Text padding="10px" onClick={() => navigate("/price-list")}>
        Price List
      </Text>
    </>
  );
};

export default NavBarList;
