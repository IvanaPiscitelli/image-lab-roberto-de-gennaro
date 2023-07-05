import { HStack, Icon, Link } from "@chakra-ui/react";

import { RiMapPin5Fill } from "react-icons/ri";

const IconMap = () => {
  return (
    <HStack marginLeft="30px">
      <Link
        href="https://www.google.com/maps/place/Via+Luigi+Pantusa,+11,+88900+Crotone+KR/@39.0795935,17.1270189,17z/data=!4m5!3m4!1s0x134048f303071861:0x1470df280c58ff60!8m2!3d39.0795935!4d17.1270189"
        isExternal
      >
        <Icon as={RiMapPin5Fill} boxSize={4} />
      </Link>
    </HStack>
  );
};

export default IconMap;
