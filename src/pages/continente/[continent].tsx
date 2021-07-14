// Next
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
// Chakra
import { Heading, Box, Text, Avatar, Flex, Grid } from "@chakra-ui/react";
// Components
import { Header } from "../../components/Header";
// DB
import db from "../../../db.json";

import { InfoCity } from "../../components/InfoCity";
import { Amount } from "../../components/InfoCity/Amount";
import { HeaderContinent } from "../../components/Header/HeaderContinent";

export default function Continents({ continent }) {
  return (
    <>
      <Head>
        <title>{continent.name} - World Trip</title>
      </Head>

      <Header />

      <HeaderContinent image={continent.image} name={continent.name} />

      <Grid
        px={["16px", "140"]}
        my={["30", "100"]}
        align="center"
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        color="light.text"
      >
        <Text textAlign="justify">{continent.description}</Text>
        <Flex
          as="section"
          ml={["0", "20"]}
          mt={["5", "0"]}
          direction="row"
          align="center"
          justify="space-between"
          lineHeight="5"
        >
          <Amount value={continent.amount_country} content="paises" />
          <Amount value={continent.amount_language} content="linguas" />
          <Amount value={continent.city_100} content="cidade +100" />
        </Flex>
      </Grid>

      <Box px={["16px", "140"]} mb="100">
        <Heading fontSize="2xl">Cidades + 100</Heading>

        <Grid
          gridTemplateColumns={["1fr", "repeat(4, 1fr)"]}
          gap="4"
          mt="4"
          px={["30", "0"]}
          color="light.text"
        >
          {continent.cities.map((city, i) => (
            <InfoCity
              key={i}
              image={city.image}
              city={city.name}
              country={city.country}
              flag={city.flag}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const continents = db.continente_data;

  const paths = continents.map((continent) => ({
    params: { continent: continent.link },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const continent = db.continente_data.filter(
    (continent) => continent.link === params.continent
  );

  return {
    props: { continent: continent[0] },
  };
};
