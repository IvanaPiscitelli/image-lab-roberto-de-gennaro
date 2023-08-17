import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBarList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Text p="10px" onClick={() => navigate("/about-me")} cursor="pointer">
        {t("aboutMe")}
      </Text>
      <Text p="10px" onClick={() => navigate("/location")} cursor="pointer">
        {t("location")}
      </Text>
      <Text p="10px" onClick={() => navigate("/price-list")} cursor="pointer">
        {t("priceList")}
      </Text>
    </>
  );
};

export default NavBarList;
