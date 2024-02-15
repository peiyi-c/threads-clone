import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  Button,
  Image,
  HStack,
  CloseButton,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { Continue } from "../../assets/logos";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import useColors from "../../hooks/useColors";
import FeedPostSliderModal from "./FeedPostSliderModal";

const FeedPostSlider = ({ images, setImages, isEdit }) => {
  const INITIAL_SLIDE = 1;
  const [currentSlide, setCurrentSlide] = useState(INITIAL_SLIDE);
  const [clickedImage, setClickedImage] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const swiperRef = useRef(null);
  const useSwiper = images?.length >= 2;
  const { imageBorder } = useColors();

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

  const handleImageOpen = (e) => {
    setClickedImage(Number(e.target.dataset.image));
    onOpen();
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
              isDisabled={currentSlide === 1}
              _disabled={{
                opacity: 0,
              }}
            >
              <Continue />
            </Button>

            {/* images from 2, Swiper */}
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
              {images.map((image, idx) => (
                <SwiperSlide
                  key={image.id}
                  position={"relative"}
                  style={{
                    width: "auto",
                  }}
                >
                  <Image
                    data-image={idx}
                    onClick={handleImageOpen}
                    src={image.path}
                    display={"block"}
                    maxH={"25rem"}
                    borderRadius={"18px"}
                    border={`1.5px solid ${imageBorder}`}
                  />
                  {isEdit && (
                    <CloseButton
                      size={"sm"}
                      position={"absolute"}
                      top={2}
                      right={2}
                      color="whiteAlpha.900"
                      bg={"#00000066"}
                      borderRadius={"50%"}
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
                onClick={onOpen}
                src={image.path}
                objectFit={"cover"}
                maxH={"25rem"}
                borderRadius={"18px"}
                border={`1.5px solid ${imageBorder}`}
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
      {isOpen && (
        <FeedPostSliderModal
          isOpen={isOpen}
          onClose={onClose}
          useSwiper={useSwiper}
          images={images}
          initialSlide={clickedImage}
        />
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
