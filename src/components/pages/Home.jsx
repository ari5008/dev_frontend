import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { memo } from "react";
import { Box } from "@chakra-ui/react";
import { ViewSlider } from "../molecules/slider/ViewSlider";

const Home = memo(() => {

  return (
    <>
      <Box pt="4rem">
        <ViewSlider />
      </Box>
    </>
  );
});

export default Home;