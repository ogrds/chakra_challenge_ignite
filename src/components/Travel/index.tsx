import { Grid, Image, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import db from "../../../db.json";
import { TravelContent } from "./TravelContent";

export function Travel() {
  const width = useBreakpointValue({ base: "50%", md: "" });

  return (
    <Flex
      as="main"
      my={["50", "100"]}
      px={["16px", "140"]}
      justify="space-between"
      align="center"
      flexWrap="wrap"
    >
      {db.travel.map((info, i) => {
        if (db.travel.length === i + 1 && db.travel.length % 2 !== 0) {
          return (
            <TravelContent
              key={i + 1}
              src={info.img}
              text={info.text}
              width="100%"
            />
          );
        } else {
          return (
            <TravelContent
              key={i + 1}
              src={info.img}
              text={info.text}
              width={width}
            />
          );
        }
      })}
    </Flex>
  );
}
