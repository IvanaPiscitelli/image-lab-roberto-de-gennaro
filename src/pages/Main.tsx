import ParallaxBg1 from "../components/ParallaxBg1";
import TextBox from "../components/TextBox";
import ParallaxBg2 from "../components/ParallaxBg2";
import { useTranslation } from "react-i18next";
const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      <ParallaxBg1 />
      <TextBox headingChildren={t("titleAbout")} textChildren={t("subTitleAbout")} />
      <ParallaxBg2 />
    </>
  );
};

export default Main;
