import { Box } from '@chakra-ui/react'
import Slider from 'react-slick'
import NewsCard from './NewsCard'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
}
const news = [
  {
    thumbnailUrl: 'news_1.png',
    date: '29/07/2023',
    title: 'Amet minim mollit non deserunt ullam est sit aliqua',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim veli',
  },
  {
    thumbnailUrl: 'news_2.png',
    date: '29/07/2023',
    title: 'Amet minim mollit non deserunt ullam est sit aliqua',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim veli',
  },
  {
    thumbnailUrl: 'news_3.png',
    date: '29/07/2023',
    title: 'Amet minim mollit non deserunt ullam est sit aliqua',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim veli',
  },
]

const NewsList = () => {
  return (
    <Box
      w="100%"
      sx={{
        '& .slick-slide': {
          p: '2rem',
        },
      }}
    >
      <Slider {...settings}>
        {news.map((newData) => (
          <NewsCard {...newData} />
        ))}
      </Slider>
    </Box>
  )
}

export default NewsList
