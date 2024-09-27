import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import { HiMiniGlobeAsiaAustralia } from "react-icons/hi2";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: BsNintendoSwitch,
    web: HiMiniGlobeAsiaAustralia,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
