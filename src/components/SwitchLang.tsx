import { useTranslation } from "react-i18next";
import { Switch, FormControl, FormLabel } from "@chakra-ui/react";

const SwitchLang = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? "it" : "en");
  };

  return (
    <div>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="lang-toggle" mb="0">
          IT
        </FormLabel>
        <Switch id="lang-toggle" isChecked={isEnglish} onChange={toggleLanguage} />
        <FormLabel htmlFor="lang-toggle" mb="0" ml={2}>
          EN
        </FormLabel>
      </FormControl>
    </div>
  );
};

export default SwitchLang;
