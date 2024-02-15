import {
  Button,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Continue } from "../../assets/logos";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

const FeedPostSliderModal = ({
  isOpen,
  onClose,
  useSwiper,
  images,
  initialSlide,
}) => {
  const swiperRef = useRef(null);
  const INITIAL_SLIDE = initialSlide;
  const [currentSlide, setCurrentSlide] = useState(INITIAL_SLIDE);

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
    setCurrentSlide((prev) => prev - 1);
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
    setCurrentSlide((prev) => prev + 1);
  };

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="scale"
      size={"xlg"}
      variant={"image"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {useSwiper ? (
            <>
              {
                <HStack position={"relative"}>
                  {/* Button Left */}
                  <Button
                    className="back"
                    display={{
                      base: "none",
                      sm: "flex",
                    }}
                    position={"absolute"}
                    left={0}
                    onClick={handlePrevClick}
                    variant={"image"}
                    size={"lg"}
                    isDisabled={currentSlide === 0}
                  >
                    <Continue />
                  </Button>

                  {/* images from 2, Swiper */}
                  <Swiper
                    slidesPerView={"auto"}
                    initialSlide={INITIAL_SLIDE}
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    navigation={true}
                    scrollbar={{ draggable: true }}
                    height={"full"}
                  >
                    {images.map((image) => (
                      <SwiperSlide
                        key={image.id}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={image.path}
                          height={"80%"}
                          maxH={"50rem"}
                          maxW={"80vw"}
                          display={"block"}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Button Right */}
                  <Button
                    className="forwward"
                    display={{ base: "none", sm: "flex" }}
                    position={"absolute"}
                    right={0}
                    onClick={handleNextClick}
                    variant={"image"}
                    size={"lg"}
                    transform={"rotate(180deg)"}
                    isDisabled={currentSlide === images.length}
                  >
                    <Continue />
                  </Button>
                </HStack>
              }
            </>
          ) : (
            <>
              {images.map((image) => (
                <Image
                  src={image.path}
                  key={image.id}
                  height={"80vh"}
                  maxH={"50rem"}
                  maxW={"80vw"}
                />
              ))}
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

FeedPostSliderModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  useSwiper: PropTypes.bool.isRequired,
  images: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  initialSlide: PropTypes.string,
};

export default FeedPostSliderModal;
