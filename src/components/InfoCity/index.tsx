import { Heading, Box, Text, Avatar, Flex } from "@chakra-ui/react";
import { RiFlag2Fill } from "react-icons/ri";

interface InfoCityProps {
  image: string;
  city: string;
  country: string;
  flag: string;
}

export function InfoCity({ image, city, country, flag }: InfoCityProps) {
  return (
    <Flex
      direction="column"
      border="1px"
      borderRadius="4"
      borderColor="highlight.100"
    >
      <Box
        bg="tomato"
        w="100%"
        h="180"
        p={4}
        color="white"
        backgroundImage={`url('${image}')`}
        backgroundSize="cover"
        backgroundPosition="center center"
      />
      <Flex w="100%" p={4} align="center" justify="space-between">
        <Box>
          <Heading fontSize="lg" fontFamily="Barlow">
            {city}
          </Heading>
          <Text fontSize="xs" fontFamily="Barlow" color="light.info">
            {country}
          </Text>
        </Box>
        <Avatar icon={<RiFlag2Fill fontSize="1.5rem" />} size="sm" src={flag} />
      </Flex>
    </Flex>
  );
}
