/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  Button,
  Image,
  HStack,
  useColorModeValue,
  CloseButton,
  Box,
} from "@chakra-ui/react";
import { Continue } from "../../assets/logos";
import { useRef, useState } from "react";

const FeedPostSlider = ({ images, setImages, isEdit }) => {
  const INITIAL_SLIDE = 1;
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
    <>
      {useSwiper ? (
        <>
          <HStack position={"relative"}>
            {/* Button Left */}
            <Button
              position={"absolute"}
              left={-50}
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
              slidesPerView={2}
              navigation
              scrollbar={{ draggable: true }}
            >
              {images.map((image) => (
                <SwiperSlide
                  key={image.id}
                  position={"relative"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image
                    src={image.path}
                    display={"block"}
                    h={"16rem"}
                    w={"full"}
                    objectFit={"cover"}
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
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Button Right */}
            <Button
              // position={"absolute"}
              // right={-20}
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
        </>
      ) : (
        <HStack>
          {images.map((image) => (
            <Box key={image.id} position={"relative"}>
              <Image
                src={image.path}
                h={"16rem"}
                objectFit={"cover"}
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
            </Box>
          ))}
        </HStack>
      )}
    </>
  );
};

export default FeedPostSlider;
