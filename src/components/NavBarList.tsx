import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NavBarList = () => {
  const navigate = useNavigate();

  return (
    <>
      <Text p="10px" onClick={() => navigate("/about-me")} cursor="pointer">
        About Me
      </Text>
      <Text p="10px" onClick={() => navigate("/certifications")} cursor="pointer">
        Certifications
      </Text>
      <Text p="10px" onClick={() => navigate("/location")} cursor="pointer">
        Location
      </Text>
      <Text p="10px" onClick={() => navigate("/my-works")} cursor="pointer">
        My Works
      </Text>
      <Text p="10px" onClick={() => navigate("/price-list")} cursor="pointer">
        Price List
      </Text>
    </>
  );
};

export default NavBarList;
