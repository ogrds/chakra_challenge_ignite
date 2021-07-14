// Carousel
import { Box, Icon } from "@chakra-ui/react";
import { ReactChild, ReactElement, ReactNode } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { Props } from "react-responsive-carousel/lib/ts/components/Carousel";

interface CarouselProps {
  children?: ReactChild[];
}

export function Carousel({ children }: CarouselProps) {
  return (
    <ReactCarousel
      showThumbs={false}
      statusFormatter={() => ""}
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <Icon
            as={RiArrowLeftSLine}
            position="absolute"
            zIndex="2"
            top="calc(50% - 15px)"
            w={10}
            h={10}
            cursor="pointer"
            color="highlight.100"
            onClick={onClickHandler}
          />
        )
      }
      renderArrowNext={(onClickHandlerNext, hasNext) =>
        hasNext && (
          <Icon
            as={RiArrowRightSLine}
            position="absolute"
            zIndex="2"
            top="calc(50% - 15px)"
            right="0"
            w={10}
            h={10}
            cursor="pointer"
            color="highlight.100"
            onClick={onClickHandlerNext}
          />
        )
      }
    >
      {children}
    </ReactCarousel>
  );
}
