import { Box } from '@chakra-ui/react'
import Slider from 'react-slick'
import MentorCard from './MentorCard'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
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


const MentorList = ({mentors}) => (
  <Box
    w="100%"
    sx={{
      '& .slick-slide': {
        p: '1rem',
      },
    }}
  >
    <Slider {...settings}>
      {mentors.map((newData) => (
        <MentorCard {...newData} />
      ))}
    </Slider>
  </Box>
)

export default MentorList
