/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  Button,
  Image,
  HStack,
  useColorModeValue,
  Flex,
  CloseButton,
} from "@chakra-ui/react";
import { Continue } from "../../assets/logos";
import { useRef, useState } from "react";

const FeedPostSlider = ({ images, setImages, isEdit }) => {
  const INITIAL_SLIDE = 2;
  const [currentSlide, setCurrentSlide] = useState(INITIAL_SLIDE);
  const imageBorderColor = useColorModeValue("#0000001a", "#ffffff0d");
  const swiperRef = useRef(null);
  const useSwiper = images?.length >= 3;

  const handlePrevClick = () => {
    if (currentSlide === INITIAL_SLIDE) return;
    swiperRef.current?.slidePrev();
    setCurrentSlide((prev) => prev - 1);
  };

  const handleNextClick = () => {
    if (currentSlide === images.length) return;
    swiperRef.current?.slideNext();
    setCurrentSlide((prev) => prev + 1);
  };

  const deleteImage = (imageId) => {
    setImages(images.filter((image) => image.id !== imageId));
  };

  return (
    <HStack ml={"-10px"}>
      {useSwiper ? (
        <>
          {/* Button Left */}
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

          {/* images from 3, Swipter */}
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={12}
            slidesPerView={3}
            navigation
            scrollbar={{ draggable: true }}
            //  onSwiper={(swiper) => console.log(swiper)}
            //  onSlideChange={() => console.log("slide change")}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <Flex
                  key={image.id}
                  w={"full"}
                  position={"relative"}
                  justifyContent={"center"}
                >
                  <Image
                    h={"full"}
                    src={image.path}
                    borderRadius={"18px"}
                    border={`1.5px solid ${imageBorderColor}`}
                  />
                  {isEdit && (
                    <CloseButton
                      size={"sm"}
                      position={"absolute"}
                      top={2}
                      right={2}
                      color="whiteAlpha.900"
                      bg={"#00000066"}
                      borderRadius={"100%"}
                      onClick={() => deleteImage(image.id)}
                    />
                  )}
                </Flex>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Button Right */}
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
        </>
      ) : (
        <>
          {images.map((image) => (
            <Flex
              key={image.id}
              w={"full"}
              position={"relative"}
              justifyContent={"center"}
            >
              <Image
                src={image.path}
                h={"full"}
                w={"full"}
                borderRadius={"18px"}
                border={`1.5px solid ${imageBorderColor}`}
              />

              {isEdit && (
                <CloseButton
                  size={"sm"}
                  position={"absolute"}
                  top={2}
                  right={2}
                  color="whiteAlpha.900"
                  bg={"#00000066"}
                  borderRadius={"100%"}
                  onClick={() => deleteImage(image.id)}
                />
              )}
            </Flex>
          ))}
        </>
      )}
    </HStack>
  );
};

export default FeedPostSlider;
