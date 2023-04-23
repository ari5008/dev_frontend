import { Box, Card, Flex, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { memo } from "react";
import { useIsSmallScreen } from "../../hooks/useIsSmallScreen";

const Home = memo(() => {

  const isSmallScreen = useIsSmallScreen();

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
    <>
      {isSmallScreen ? (
        <Box overflow="hidden" w="95%" margin="auto">
          <Slider hideArrows {...sliderSettings}>
            {carouselItems.map((carouselItem, index) => (
              <Box key={index} p={2} pt={5} >
                <Card
                  direction={{ base: 'column', md: 'row' }}
                  overflow='hidden'
                >
                  <Image
                    src={carouselItem.src}
                    alt={carouselItem.alt}
                    h="42vh"
                    w="42vh"
                    objectFit='cover'
                  />
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      ) : (
        <Flex>
          <Box w="30%" h="100vh" bg="gray.400">
            
          </Box>
          <Box w="70%" h="100vh">
            <Box w="70%" margin="auto" >
              <Slider {...sliderSettings} >
                {carouselItems.map((carouselItem, index) => (
                  <Box key={index} p={3}>
                    <Card
                      direction={{ base: 'column', sm: 'row' }}
                      overflow='hidden'
                    >
                      <Image
                        src={carouselItem.src}
                        alt={carouselItem.alt}
                        h="65vh"
                        w="65vh"
                        objectFit='cover'
                      />
                    </Card>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Box>
        </Flex>
      )}
    </>
  );
});

export default Home;