import TextBox from "./TextBox";
import { useTranslation } from "react-i18next";

const ShowBestWorks = () => {
  const { t } = useTranslation();
  return <TextBox headingChildren={t("titleBestWorks")} />;
};

export default ShowBestWorks;
