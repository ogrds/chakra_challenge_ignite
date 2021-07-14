import Link from "next/link";

import { Box, Flex, Heading, Image, Text, theme, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri";
import db from "../../../db.json";

export function Header() {
  const router = useRouter();

  return (
    <Box as="header" width="100%">
      <Flex
        as="section"
        h="100"
        align="center"
        justifyContent={router.asPath === "/" ? "center" : "space-between"}
        px={["16px", "140"]}
      >
        {router.asPath !== "/" && (
          <Link href="/" passHref>
            <a>
              <Icon as={RiArrowLeftSLine} w={6} h={6} />
            </a>
          </Link>
        )}
        <Image m="auto" src="/logo.svg" maxW="500" w="10rem" alt="Logo" />
      </Flex>
    </Box>
  );
}
