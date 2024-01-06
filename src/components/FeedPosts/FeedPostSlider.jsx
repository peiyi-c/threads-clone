/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Button, Image, HStack, useColorModeValue } from "@chakra-ui/react";
import { Continue } from "../../assets/logos";
import { useRef, useState } from "react";

const FeedPostSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(2);
  const imageBorderColor = useColorModeValue("#0000001a", "#ffffff0d");
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (currentSlide === 2) return;
    swiperRef.current?.slidePrev();
    setCurrentSlide((prev) => prev - 1);
    console.log(currentSlide);
  };
  const handleNextClick = () => {
    if (currentSlide === images.length) return;
    swiperRef.current?.slideNext();
    setCurrentSlide((prev) => prev + 1);
    console.log(currentSlide);
  };
  return (
    <HStack ml={"-10px"}>
      <Button
        onClick={handlePrevClick}
        variant={"ghost"}
        size={"md"}
        ml={"-10px"}
        isDisabled={currentSlide === 2}
        _disabled={{
          opacity: 0,
          cursor: "default",
        }}
      >
        <Continue />
      </Button>
      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={12}
        slidesPerView={3}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.path}
              borderRadius={"18px"}
              border={`1.5px solid ${imageBorderColor}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        onClick={handleNextClick}
        variant={"ghost"}
        size={"md"}
        transform={"rotate(180deg)"}
        isDisabled={currentSlide === images.length}
        _disabled={{
          opacity: 0,
          cursor: "default",
        }}
      >
        <Continue />
      </Button>
    </HStack>
  );
};

export default FeedPostSlider;
