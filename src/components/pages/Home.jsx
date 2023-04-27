import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { memo } from "react";
import { ViewSlider } from "../molecules/ViewSlider";

const Home = memo(() => {

  return (
    <>
      <ViewSlider />
    </>
  );
});

export default Home;