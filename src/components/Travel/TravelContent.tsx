import {
  Image,
  Text,
  Flex,
  Icon,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

interface TravelContentProps {
  src: string;
  text: string;
  width: string;
}

export function TravelContent({ src, text, width }: TravelContentProps) {
  const isSmall = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      as="section"
      direction={["row", "column"]}
      align="center"
      w={isSmall ? width : ""}
    >
      {isSmall ? (
        <Box w="100%" textAlign="center" my="1">
          <Icon mr="1" color="highlight.100" as={RiCheckboxBlankCircleFill} />
          <Text as="span" fontWeight="600" mt="2" textColor="light.text">
            {text}
          </Text>
        </Box>
      ) : (
        <>
          <Image src={src} w="50" h="85" />
          <Text fontWeight="600" mt="2" textColor="light.text">
            {text}
          </Text>
        </>
      )}
    </Flex>
  );
}
