import { memo } from "react";
import Slider from "react-slick"
import { Box } from "@chakra-ui/react";
import { HomeSliderCard } from '../card/HomeSliderCard';

export const ViewSlider = memo(() => {

  const sliderSettings = {
    autoplay: true, // スライドを自動再生
    autoplaySpeed: 4500,
    infinite: true, // コンテンツループ
    arrows: true, // 「前」「次」のスライドを操作する矢印を非表示
    cssEase: "linear",
    speed: 1000, // スライドアニメーションのスピード
    variableWidth: true,
    dots: true,
  };

  const carouselItems = [
    { src: "https://source.unsplash.com/SAS0lq2QGLs", alt: "text1" },
    { src: "https://source.unsplash.com/tJZr5F72eFQ", alt: "text2" },
    { src: "https://source.unsplash.com/8Hd1IVrDpEc", alt: "text3" },
  ];

  return (
    <Box w="95%" margin="auto" minHeight="100vh" >
      <Slider {...sliderSettings} >
        {carouselItems.map((carouselItem, index) => (
          <Box
            key={index}
            pr={5}
          >
            <HomeSliderCard carouselItem={carouselItem} />
          </Box>
        ))}
      </Slider>
    </Box>
  )
});