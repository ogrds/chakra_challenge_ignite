// Chakra
import { Heading, Flex } from "@chakra-ui/react";

interface HeaderContinentProps {
  image: string;
  name: string;
}

export const HeaderContinent = ({ image, name }: HeaderContinentProps) => {
  return (
    <Flex
      backgroundImage={`linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url('${image}')`}
      backgroundSize="cover"
      backgroundPosition="center center"
      align="center"
      justify={["center", "space-between"]}
      h={[250, 500]}
      px={["16px", "140"]}
    >
      <Heading
        fontSize={["3xl", "5xl"]}
        pb="100"
        lineHeight="10"
        color="gray.50"
        fontWeight="500"
        alignSelf="flex-end"
      >
        {name}
      </Heading>
    </Flex>
  );
};
