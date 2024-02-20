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
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  const handlePrevClick = () => {
    if (currentSlide === initialSlide) return;
    swiperRef.current?.slidePrev();
  };

  const handleNextClick = () => {
    if (currentSlide === Object.keys(images).length - 1) return;
    swiperRef.current?.slideNext();
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
        <ModalCloseButton
          _active={{
            transform: "scale(1.1)",
            transition: "transform 0.2s ease-in-out, background 0.1s ease-out",
          }}
        />
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
                    onRealIndexChange={(el) => setCurrentSlide(el.activeIndex)}
                    initialSlide={initialSlide}
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
                        {image.type?.includes("image") ? (
                          <Image
                            src={image.path}
                            height={"80svh"}
                            maxH={{ base: "auto", sm: "50rem" }}
                            maxW={{ base: "100svw", sm: "80svw" }}
                            display={"block"}
                            objectFit={"contain"}
                          />
                        ) : image.type?.includes("video") ? (
                          <video
                            style={{
                              height: "auto",
                              maxHeight: "20rem",
                              objectFit: "cover",
                              borderRadius: "18px",
                            }}
                            muted
                            controls
                            type={image.type}
                          >
                            <source src={image.path} />
                          </video>
                        ) : (
                          ""
                        )}
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
                    isDisabled={currentSlide === Object.keys(images).length - 1}
                  >
                    <Continue />
                  </Button>
                </HStack>
              }
            </>
          ) : (
            <>
              {images[0].type.includes("image") ? (
                <Image
                  src={images[0].path}
                  key={images[0].id}
                  height={"80svh"}
                  maxH={{ base: "auto", sm: "50rem" }}
                  maxW={{ base: "100svw", sm: "80svw" }}
                  objectFit={"contain"}
                />
              ) : images[0].type.includes("video") ? (
                <video
                  style={{
                    height: "auto",
                    maxHeight: "20rem",
                    objectFit: "cover",
                    borderRadius: "18px",
                  }}
                  muted
                  controls
                  type={images[0].type}
                >
                  <source src={images[0].path} />
                </video>
              ) : (
                ""
              )}
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
  initialSlide: PropTypes.number,
};

export default FeedPostSliderModal;
