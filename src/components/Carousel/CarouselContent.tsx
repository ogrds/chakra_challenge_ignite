import Link from "next/link";
// Chakra
import { Heading, Flex, Text } from "@chakra-ui/react";

interface CarouselContentProps {
  image: string;
  heading: string;
  description: string;
  link: string;
}

export function CarouselContent({
  image,
  heading,
  description,
  link,
}: CarouselContentProps) {
  return (
    <Flex
      backgroundImage={`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${image}')`}
      backgroundSize="cover"
      bgPos="center center"
      w="100%"
      p={4}
      h={["250", "500"]}
      color="white"
      align="center"
      justify="center"
      direction="column"
    >
      <Link href={link} passHref>
        <Heading as="a" fontSize={["xl", "2xl"]} mb={["2", "4"]} fontWeight="700">
          {heading}
        </Heading>
      </Link>
      <Text fontSize={["sm", "lg"]}>{description}</Text>
    </Flex>
  );
}
