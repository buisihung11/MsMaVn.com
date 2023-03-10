import { Box } from '@chakra-ui/react'
import Slider from 'react-slick'
import YouTube from 'react-youtube'
import { LeftArrow, RightArrow } from './Arrow'
import MentorCard from './MentorCard'

const settings = {
  infinite: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  prevArrow: <LeftArrow />,
  nextArrow: <RightArrow />,
  dots: true,
}

const videos = [
  {
    id: 'aNEzMz4Tr2c',
  },
  {
    id: '7ooW9CEtnbA',
  },
  {
    id: 'vzaIYdUDs-g',
  },
  {
    id: 'itbPRplH9JU',
  },
]

const opts = {
  height: '100%',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
}

const VideoContainer = () => (
  <Box
    w="80%"
    sx={{
      '& .slick-slide': {
        p: ['1rem', '2rem'],
      },
      '& .slick-slide > div >div >div': {
        height: '100%',
      },
      '& .slick-dots li button:before': {
        fontSize: '12px',
        color: '#223368',
      },
    }}
    py={{ base: 4, md: 8, xl: 12 }}
  >
    <Slider {...settings}>
      {videos.map((video) => (
        <Box h={{ base: '200px', md: '400px', xl: '650px' }} bg="white">
          <YouTube videoId={video.id} opts={opts} />
        </Box>
      ))}
    </Slider>
  </Box>
)

export default VideoContainer
