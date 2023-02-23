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
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
  dots: true,
}

const mentors = [
  {
    imageUrl: 'peter_tan.png',
    name: 'PETER TAN',
    description: 'Giám đốc điều hành công ty Millionaireasia',
  },
  {
    imageUrl: 'jera_tran.png',
    name: 'JERA TRAN',
    description: ' Phó chủ tịch phát triển kinh doanh toàn cầu AsianNet Media',
  },
  {
    imageUrl: 'cindy.png',
    name: 'CINDY',
    description: 'Kỹ sư Cindy Hà - Hà Mỹ Dung là người Việt Gốc Hoa',
  },
]

const MentorList = () => (
  <Box
    w="100%"
    sx={{
      '& .slick-slide': {
        p: '2rem',
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
