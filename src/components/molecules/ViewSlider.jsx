import { memo } from "react";
import Slider from "react-slick"
import { TemplateScreenCard } from "./card/TemplateScreenCard";
import { SamllScreenCard } from "./card/SmallScreenCard";
import { Box } from "@chakra-ui/react";

export const ViewSlider = memo(({isSmallScreen}) => {

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

  if (isSmallScreen) {
    sliderSettings.arrows = false; // smallScreenの場合は矢印を非表示にする
  }

  const carouselItems = [
    { src: "https://source.unsplash.com/SAS0lq2QGLs", alt: "text1" },
    { src: "https://source.unsplash.com/tJZr5F72eFQ", alt: "text2" },
    { src: "https://source.unsplash.com/8Hd1IVrDpEc", alt: "text3" },
  ];

  return (
    <Slider {...sliderSettings} >
      {carouselItems.map((carouselItem, index) => (
        isSmallScreen ?
          (
            <Box key={index} pr={3} pt={5} >
              <SamllScreenCard carouselItem={carouselItem} />
            </Box>
          ) : (
            <Box key={index} p={3} >
              <TemplateScreenCard carouselItem={carouselItem} />
            </Box>
          )
      ))}
    </Slider>
  )
});