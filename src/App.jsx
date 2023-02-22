import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box, Center, Container, Flex, Image, Text } from '@chakra-ui/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Navigation from './Navigation'
import { LeftArrow, RightArrow } from './components/Arrow'

const introductions = [
  {
    imageUrl: 'thumbnail_1.png',
    title: 'THÔNG TIN MsMA',
    description:
      'MsMA 2023, tên viết tắt của Ms Millionaireasia. Đây không phải là một cuộc thi sắc đẹp. Lấy cảm hứng từ triết lý Phụ nữ vì Phụ nữ, MsMA 2023 hướng đến mục đích biến phụ nữ trở thành hình mẫu lý tưởng của châu Á. Đây là cuộc thi dựa trên khả năng quảng bá khẩu hiệu: Phụ nữ vì Phụ nữ, Châu Á của người Châu Á',
  },
  {
    imageUrl: 'thumbnail_1.png',
    title: 'THÔNG TIN MsMA',
    description:
      'MsMA 2023, tên viết tắt của Ms Millionaireasia. Đây không phải là một cuộc thi sắc đẹp. Lấy cảm hứng từ triết lý Phụ nữ vì Phụ nữ, MsMA 2023 hướng đến mục đích biến phụ nữ trở thành hình mẫu lý tưởng của châu Á. Đây là cuộc thi dựa trên khả năng quảng bá khẩu hiệu: Phụ nữ vì Phụ nữ, Châu Á của người Châu Á',
  },
]

const CardItem = ({ imageUrl, title, description }) => {
  return (
    <Box
      borderRadius="20px"
      border="0.5px"
      borderColor="#223368"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      // w="50%"
      // minW="500px"
      p="50px"
    >
      <Flex gap="20px">
        <Box w="40%">
          <Image w="100" h="auto" src={`./images/${imageUrl}`} alt={title} />
        </Box>
        <Box flex={1}>
          <Text
            textAlign="center"
            style={{
              fontSize: '30px',
              color: '#223368',
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: '20px',
              lineHeight: '36px',
            }}
          >
            {description}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  }

  return (
    <Container minH="2000px" overflow="hidden" maxWidth="100vw" p={0}>
      <Image src="./images/hero_image.png" alt="Dan Abramov" />
      {/* NAV */}
      <Navigation />
      {/* INTRODUCTION */}
      <Center
        height="800px"
        sx={{
          '& .slick-slide': {
            p: '2rem',
          },
          '& .slick-slider': {
            width: '100%',
          },
        }}
        maxW="100%"
        overflow="hidden"
        px={{ base: 0, sm: 32, xl: 60 }}
      >
        <Slider {...settings}>
          {introductions.map((introd) => (
            <CardItem key={introd.title} {...introd} />
          ))}
        </Slider>
      </Center>
      {/* VIDEO */}
      <Center bg="#EDEDED" height="700px">
        <Text
          sx={{
            fontWeight: 700,
            fontSize: '80px',
            color: '#223368',
          }}
        >
          VIDEO TRUYỀN CẢM HỨNG
        </Text>
      </Center>
      {/* TIMELINE */}
      <Center p={{ base: 2, md: 20 }}>
        <Image src="./images/timeline.png" alt="Timeline" sx={{ borderRadius: '20px' }} />
      </Center>
    </Container>
  )
}

export default App
