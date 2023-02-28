import { Box, Center, Heading, Image, Text } from '@chakra-ui/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { LeftArrow, RightArrow } from './Arrow'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 7 * 1000,
  prevArrow: <LeftArrow />,
  nextArrow: <RightArrow />,
  responsive: [
    {
      breakpoint: 1024,
      infinite: true,
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
        infinite: true,
      },
    },
  ],
  dots: true,
}

const BenefitsContainer = ({ title, benefits = [] }) => (
  <Box sx={{
    '& .slick-dots li button:before' : {
      fontSize: '12px',
      color: '#223368',
    }
  }} textAlign="center" maxW="100%" w="100%">
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
          h: '100%',
        },
      }}
      h="100%"
    >
      <Slider {...settings}>
        {benefits.map((benefit) => (
          <Box
            key={benefit.url}
            sx={{
              filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.5))',
            }}
            _active={{
              '& .benefit_description': {
                opacity: 1,
                display: 'flex',
              },
            }}
            _hover={{
              '& .benefit_description': {
                opacity: 1,
                display: 'flex',
              },
              '& .benefit_img': {
                display: 'none',
              },
            }}
            h={{ base: '200px', xl: '240px' }}
            zIndex={3}
          >
            <Center
              className="benefit_description"
              sx={{
                backgroundImage: 'url(./images/benefits/placeholder.png)',
                zIndex: 2,
                cursor: 'pointer',
                opacity: 1,
                transition: 'all 300ms ease-in-out',
                backgroundPosition: 'center',
                display: 'none',
              }}
              w="100%"
              h="100%"
              p={2}
              maxH="100%"
              overflowY="auto"
            >
              <Box>
                <Text color="white">{benefit.description}</Text>
              </Box>
            </Center>
            <Image
              className="benefit_img"
              w="100%"
              h="100%"
              src={`./images/benefits/${benefit.url}`}
              alt="benefit"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  </Box>
)

export default BenefitsContainer
