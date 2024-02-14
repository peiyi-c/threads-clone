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
import PropTypes from "prop-types";

const FeedPostSlider = ({ images, setImages, isEdit }) => {
  const INITIAL_SLIDE = 1;
  const [currentSlide, setCurrentSlide] = useState(INITIAL_SLIDE);
  const imageBorderColor = useColorModeValue("#0000001a", "#ffffff0d");
  const swiperRef = useRef(null);
  const useSwiper = images?.length >= 2;

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
              display={{ base: "none", md: "flex" }}
              position={"absolute"}
              left={-100}
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

            {/* images from 2, Swipter */}
            <Swiper
              slidesPerView={"auto"}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={6}
              navigation={true}
              scrollbar={{ draggable: true }}
            >
              {images.map((image) => (
                <SwiperSlide
                  key={image.id}
                  position={"relative"}
                  style={{
                    width: "auto",
                  }}
                >
                  <Image
                    src={image.path}
                    display={"block"}
                    maxH={"25rem"}
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
              display={{ base: "none", md: "flex" }}
              position={"absolute"}
              right={-20}
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
        <HStack justifyContent={"center"}>
          {images.map((image) => (
            <Box key={image.id} position={"relative"}>
              <Image
                src={image.path}
                objectFit={"cover"}
                maxH={"25rem"}
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

FeedPostSlider.propTypes = {
  images: PropTypes.array,
  setImages: PropTypes.func,
  isEdit: PropTypes.bool,
};

export default FeedPostSlider;
