import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, HStack, Image } from "@chakra-ui/react";
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
      width="100%"
      position="fixed"
      boxShadow={showNavBar ? "lg" : "none"}
      backgroundColor={showNavBar ? "black" : backgroundColor}
      color={showNavBar ? "white" : colorText}
      transition={"background 0.2s ease-in-out, border-color 0.2s ease-in-out"}
      zIndex={100}
    >
      <HStack paddingX="30px" paddingY="12px" justifyContent="space-between">
        <LeftIcons color={colorIcon} />

        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Image
                src={displayBasedOnColor(logo, logoBlack)}
                alt="logo"
                width={{ md: "135px", lg: "150px" }}
                height={{ md: "45px", lg: "47px" }}
              />
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <SocialMediaList color={colorIcon} />
      </HStack>

      <HStack justifyContent="center" spacing={10} padding="10px" whiteSpace="nowrap">
        <NavBarList color={displayBasedOnColor("white", colorText)} />
      </HStack>
    </Box>
  );
};

export default NavBar;
