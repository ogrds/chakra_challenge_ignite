// Next
import Head from "next/head";
// Chakra
import {
  Divider,
  Heading,
  Box,
  Text,
  Flex,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
// Components
import { Header } from "../components/Header";
import { Travel } from "../components/Travel";
// DB
import db from "../../db.json";
// Carousel
import { Carousel } from "../components/Carousel";
import { CarouselContent } from "../components/Carousel/CarouselContent";

export default function Home() {
  const isSmall = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Head>
        <title>{db.home.title}</title>
      </Head>

      <Header />

      <Flex
        backgroundImage="url('/bg_home.png')"
        backgroundSize="cover"
        align="center"
        justify="space-between"
        h={[250, 335]}
        px={["16px", "140"]}
      >
        <Box color="gray.50" maxW={["500", "100%"]}>
          <Heading
            lineHeight="10"
            size="lg"
            fontWeight="500"
            dangerouslySetInnerHTML={{ __html: db.header.heading }}
          />
          <Text fontSize={["sm", "-moz-initial"]} mt={[3, 0]}>
            {db.header.text}
          </Text>
        </Box>
        {!isSmall && (
          <Box>
            <Image src="/airplane.svg" alt="Airplane" mt="100" />
          </Box>
        )}
      </Flex>

      <Travel />

      <Divider border="2px" borderColor="light.text" w="90px" m="0 auto" />

      <Heading
        size="lg"
        fontWeight="500"
        color="light.text"
        mt={["30", "50"]}
        textAlign="center"
        dangerouslySetInnerHTML={{ __html: db.home["call-to-action"] }}
      />

      <Box my={["30", "50"]} px={[0, "140"]}>
        <Carousel>
          {db.continentes.map((continente, i) => (
            <CarouselContent
              key={i}
              image={continente.image}
              heading={continente.name}
              description={continente.description}
              link={`/continente/${continente.link}`}
            />
          ))}
        </Carousel>
      </Box>
    </>
  );
}
