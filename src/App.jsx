import { Box, Center, Container, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './App.css'
import { LeftArrow, RightArrow } from './components/Arrow'
import BenefitsContainer from './components/BenefitsContainer'
import CardItem from './components/CartItem'
import CardRule from './components/CartRule'
import Footer from './components/Footer'
import MentorList from './components/MentorList'
import NewsList from './components/NewsList'
import RegisterForm from './components/RegisterForm'
import Navigation from './Navigation'

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

const benefits = [
  {
    title: 'Quyền lợi vô hình',
    benefits: [
      { url: 'benefit_1.png' },
      { url: 'benefit_2.png' },
      { url: 'benefit_3.png' },
      { url: 'benefit_4.png' },
      { url: 'benefit_5.png' },
      { url: 'benefit_6.png' },
    ],
  },
  {
    title: 'Quyền lợi hữu hình',
    benefits: [{ url: 'benefit_4.png' }, { url: 'benefit_5.png' }, { url: 'benefit_6.png' }],
  },
  {
    title: 'Quyền lợi thí sinh tại Việt Nam',
    benefits: [{ url: 'benefit_7.png' }, { url: 'benefit_8.png' }, { url: 'benefit_9.png' }],
  },
]

const rules = [
  {
    imageUrl: 'rule_1.png',
    title: 'THỂ LỆ CUỘC THI',
    description:
      'Ở mỗi chặng, các thí sinh buộc phải phát huy Tính cách, Ý tưởng và Giá trị. Trong trường hợp chưa quyết định được người thắng cuộc trong vòng Bán kết hoặc Chung kết, thí sinh nào có số phiếu bình chọn cao nhất trong thời gian ngắn nhất sẽ là người chiến thắng.',
  },
  {
    imageUrl: 'rule_1.png',
    title: 'THỂ LỆ CUỘC THI',
    description:
      'Ở mỗi chặng, các thí sinh buộc phải phát huy Tính cách, Ý tưởng và Giá trị. Trong trường hợp chưa quyết định được người thắng cuộc trong vòng Bán kết hoặc Chung kết, thí sinh nào có số phiếu bình chọn cao nhất trong thời gian ngắn nhất sẽ là người chiến thắng.',
  },
]

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
        id="introduction"
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
      {/* RULES */}
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
          {rules.map((rule) => (
            <CardRule key={rule.title} {...rule} />
          ))}
        </Slider>
      </Center>
      {/* REGISTER FORM */}
      <Center
      id="register"
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundOrigin: 'center',
          backgroundSize: 'cover',
        }}
        bg="url(images/register_background.png)"
        maxW="100%"
        py={24}
      >
        <Box w={{ base: '100%', sm: '80%', md: '70%' }}>
          <Text
            mb="12"
            textAlign="center"
            fontSize={{ base: '40px', md: '80px' }}
            color="white"
            fontWeight={700}
          >
            TRỞ THÀNH THÍ SINH NGAY
          </Text>
          <Flex gap="54px" justifyContent="space-between">
            <Box flex={1}>
              <RegisterForm />
            </Box>
            <Box textAlign="center">
              <Image w="380px" h="380px" src="./images/qr_register.png" />
              <Text mt={8} color="white" fontWeight={700} fontSize={{ base: '20px', md: '32px' }}>
                QUÉT MÃ QR ĐỂ <br /> ĐĂNG KÝ
              </Text>
            </Box>
          </Flex>
        </Box>
      </Center>
      {/* BENEFITS */}
      <Center flexDirection="column" py={32} maxW="100%">
        <Box w="100%" mb={24} textAlign="center" position="relative">
          {/* <Box w="80%" h="5px" position="absolute" top="50%" left="50%" bg="#223368" transform="translate(-50%, 50%)" /> */}
          <Box
            sx={{
              zIndex: 2,
              bg: 'white',
            }}
          >
            <Heading
              sx={{
                fontWeight: 900,
                fontSize: '80px',
                color: '#223368',
              }}
            >
              QUYỀN LỢI THÍ SINH
            </Heading>
          </Box>
        </Box>
        <VStack w="80%" spacing={24}>
          {benefits.map((benefit) => (
            <BenefitsContainer key={benefit.title} {...benefit} />
          ))}
        </VStack>
        <Box textAlign="center" mt={24}>
          <Text
            sx={{
              fontWeight: 900,
              fontSize: '42px',
              color: '#223368',
            }}
          >
            LƯU Ý: Thí sinh không thể tự bình chọn cho các video của bản thân sở hữu.
          </Text>
        </Box>
      </Center>
      {/* NEWS */}
      <Center id="news" bg="#F3F3F3" flexDirection="column" py={32} maxW="100%">
        <Box w="100%" mb={6} textAlign="center" position="relative">
          <Heading
            sx={{
              fontWeight: 900,
              fontSize: '80px',
              color: '#223368',
            }}
          >
            TIN TỨC
          </Heading>
        </Box>
        <Box w="80%">
          <NewsList />
        </Box>
      </Center>
      {/* MENTORS */}
      <Center flexDirection="column" py={32} maxW="100%">
        <Box w="100%" mb={6} textAlign="center" position="relative">
          <Heading
            sx={{
              fontWeight: 900,
              fontSize: '80px',
              color: '#223368',
            }}
          >
            MENTORS
          </Heading>
        </Box>
        <Box w="80%">
          <MentorList />
        </Box>
      </Center>
      {/* PARTNERS */}
      <Center id="partner" flexDirection="column" px={24} py={32} maxW="100%">
        <Box w="100%" mb={6} textAlign="center" position="relative">
          <Heading
            sx={{
              fontWeight: 900,
              fontSize: '80px',
              color: '#223368',
            }}
          >
            ĐỐI TÁC ĐỒNG HÀNH
          </Heading>
        </Box>
        <Box w="100%">
          <Image src="./images/partners.png" />
        </Box>
      </Center>
      {/* FOOTER */}
      <Footer />
    </Container>
  )
}

export default App
