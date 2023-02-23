import { Box, Heading, Image } from '@chakra-ui/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const settings = {
  infinite: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
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
      mb={{base: 4, xl: 12}}
    >
      {title}
    </Heading>
    <Box
      maxW="100%"
      sx={{
        '& .slick-slide': {
          p: '2rem',
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
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <Image src={`./images/benefits/${benefit.url}`} alt="benefit" />
          </Box>
        ))}
      </Slider>
    </Box>
  </Box>
)

export default BenefitsContainer
