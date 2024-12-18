import { HStack, Icon, Link } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { RiMapPin5Fill } from "react-icons/ri";

interface Props {
  color: string;
}

const LeftIcons = ({ color }: Props) => {
  return (
    <HStack>
      <Link
        href="https://www.google.com/maps/place/Via+Luigi+Pantusa,+11,+88900+Crotone+KR/@39.0795935,17.1270189,17z/data=!4m5!3m4!1s0x134048f303071861:0x1470df280c58ff60!8m2!3d39.0795935!4d17.1270189"
        isExternal
      >
        <Icon as={RiMapPin5Fill} boxSize="22px" color={color} mt="5px" />
      </Link>
      <Link href="https://wa.me/3292164908" isExternal>
        <Icon as={FaWhatsapp} boxSize="22px" color={color} mx="5px" mt="5px" />
      </Link>
    </HStack>
  );
};

export default LeftIcons;
