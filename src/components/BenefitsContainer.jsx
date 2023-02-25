import { Box, Center, Heading, Image, Text } from '@chakra-ui/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 7 * 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  dots: true,
}

const BenefitsContainer = ({ title, benefits = [] }) => (
  <Box textAlign="center" maxW="100%" w="100%">
    <Heading
      sx={{
        fontWeight: 900,
        fontSize: { base: '24px', xl: '42px' },
        color: '#223368',
      }}
      mb={{ base: 4, xl: 12 }}
    >
      {title}
    </Heading>
    <Box
      maxW="100%"
      sx={{
        '& .slick-slide': {
          p: { base: '1rem', xl: '2rem' },
        },
      }}
      overflow="hidden"
    >
      <Slider {...settings}>
        {benefits.map((benefit) => (
          <Box
            key={benefit.url}
            sx={{
              filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.5))',
              overflow: 'hidden',
            }}
            _hover={{
              '& .benefit_description' : {
                opacity: 1,
              }
            }}
          >
            <Center
              className="benefit_description"
              sx={{
                backgroundImage: 'url(./images/benefits/placeholder.png)',
                zIndex: 2,
                cursor: 'pointer',
                opacity: 1,
                transition: 'all 300ms ease-in-out',
                backgroundPosition: 'center'
              }}
              w="100%"
              h="100%"
              position="absolute"
              top="0"
              left="0"
              p={2}
            >
              <Box>
                <Text color="white">{benefit.description}</Text>
              </Box>
            </Center>
            <Image src={`./images/benefits/${benefit.url}`} alt="benefit" />
          </Box>
        ))}
      </Slider>
    </Box>
  </Box>
)

export default BenefitsContainer
