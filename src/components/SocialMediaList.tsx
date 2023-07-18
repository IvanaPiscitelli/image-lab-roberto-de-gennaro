import { HStack, Icon, Link } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";

interface Props {
  color: string;
}

const SocialMediaList = ({ color }: Props) => {
  return (
    <HStack spacing={1}>
      <Link href="https://www.instagram.com/image_lab_roberto_de_gennaro/" isExternal>
        <Icon as={BsInstagram} boxSize="20px" color={color} marginX="10px" marginTop="5px" />
      </Link>
      <Link href="https://www.facebook.com/profile.php?id=100093828756736" isExternal>
        <Icon as={ImFacebook2} boxSize="20px" color={color} marginX="10px" marginTop="5px" />
      </Link>
      <Link href="https://www.tiktok.com/@imagelab_rob_dg?_t=8dk3ihtnZMp" isExternal>
        <Icon as={FaTiktok} boxSize="20px" color={color} marginX="10px" marginTop="5px" />
      </Link>
    </HStack>
  );
};

export default SocialMediaList;
