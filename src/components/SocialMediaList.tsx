import { HStack, Icon, Link } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { FaTiktok } from "react-icons/fa";
import useScrollPosition from "../hooks/useScrollPosition";

const SocialMediaList = () => {
  const scrollPosition = useScrollPosition();
  return (
    <HStack spacing={3} marginRight="30px">
      <Link href="https://www.instagram.com/image_lab_roberto_de_gennaro/" isExternal>
        <Icon as={BsInstagram} boxSize={4} color={scrollPosition > 0 ? "white" : "#000000"} />
      </Link>
      <Link href="https://www.facebook.com/profile.php?id=100093828756736" isExternal>
        <Icon as={ImFacebook2} boxSize={4} color={scrollPosition > 0 ? "white" : "#000000"} />
      </Link>
      <Link href="https://www.tiktok.com/@imagelab_rob_dg?_t=8dk3ihtnZMp" isExternal>
        <Icon as={FaTiktok} boxSize={4} color={scrollPosition > 0 ? "white" : "#000000"} />
      </Link>
    </HStack>
  );
};

export default SocialMediaList;
