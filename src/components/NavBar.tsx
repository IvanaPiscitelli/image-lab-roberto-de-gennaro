import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, HStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import SocialMediaList from "./SocialMediaList";
import LeftIcons from "./LeftIcons";
import NavBarList from "./NavBarList";

import useScrollPosition from "../hooks/useScrollPosition";

import logo from "../assets/logo-roberto.png";
import logoBlack from "../assets/logo-roberto-black.png";

interface Props {
  backgroundColor: string;
  colorText: string;
}

const NavBar = ({ backgroundColor, colorText }: Props) => {
  const navigate = useNavigate();
  const scrollPosition = useScrollPosition();
  const showNavBar = scrollPosition > 0 ? true : false;
  const colorIcon = scrollPosition > 0 ? "white" : colorText;
  const displayBasedOnColor = (start: string, end: string): string => {
    if (colorText === "white") {
      return start;
    } else if (showNavBar) {
      return start;
    } else {
      return end;
    }
  };

  return (
    <Box
      w="100%"
      position="fixed"
      boxShadow={showNavBar ? "lg" : "none"}
      bgColor={showNavBar ? "black" : backgroundColor}
      color={showNavBar ? "white" : colorText}
      transition={"background 0.2s ease-in-out, border-color 0.2s ease-in-out"}
      zIndex={100}
    >
      <HStack px="30px" py="12px" justifyContent="space-between">
        <LeftIcons color={colorIcon} />

        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Image
                src={displayBasedOnColor(logo, logoBlack)}
                alt="logo"
                w={{ md: "135px", lg: "150px" }}
                h={{ md: "45px", lg: "47px" }}
                onClick={() => navigate("/")}
              />
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <SocialMediaList color={colorIcon} />
      </HStack>

      <HStack justifyContent="center" spacing={10} p="10px" whiteSpace="nowrap">
        <NavBarList />
      </HStack>
    </Box>
  );
};

export default NavBar;
