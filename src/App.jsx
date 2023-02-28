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
import VideoContainer from './components/VideoContainer'
import Navigation from './Navigation'

const introductions = [
  {
    imageUrl: 'thumbnail_2.png',
    title: 'THÔNG TIN MsMA',
    description: (
      <Text>
        <strong>MsMA 2023</strong>, tên viết tắt của <strong>Ms Millionaireasia</strong>. Đây không
        phải là một cuộc thi sắc đẹp. Lấy cảm hứng từ triết lý Phụ nữ vì Phụ nữ, MsMA 2023 hướng đến
        mục đích biến phụ nữ trở thành hình mẫu lý tưởng của châu Á. Đây là cuộc thi dựa trên khả
        năng quảng bá khẩu hiệu: Phụ nữ vì Phụ nữ, Châu Á của người Châu Á
      </Text>
    ),
  },
  {
    imageUrl: 'thumbnail_2.png',
    title: 'THƯ NGÕ & KHỞI NGUỒN CUỘC THI',
    description: (
      <Text>
        MsMA 2023 là cuộc thi ra đời với mục đích: Tạo nên một sân chơi bổ ích nhằm tìm kiếm, tôn
        vinh vẻ đẹp tài năng, kiến thức của người phụ nữ, nhằm hướng đến mục đích biến phụ nữ trở
        thành hình mẫu lý tưởng của Châu Á.
        <br />
        <br />
        Bắt nguồn từ một thông điệp rất nhân văn để các quốc gia châu Á. Đồng thời cũng là một dịp
        tưởng nhớ người mẹ quá cố của ông Peter Tan
      </Text>
    ),
  },
  {
    imageUrl: 'thumbnail_1.jpg',
    title: 'ORAS HOLDING',
    description: (
      <Text>
        <strong>ORAS HOLDINGS</strong> là nhà đồng hành cùng các công ty trong và ngoài nước để phát
        triển kinh doanh, chuyển đổi số và truyền thông quảng cáo đa phương tiện. Phương châm của
        Oras Holdings là "Sự thành công của bạn là niềm tự hào của chúng tôi".
      </Text>
    ),
  },
]

const benefits = [
  {
    title: 'Lợi ích vô hình',
    benefits: [
      {
        url: 'benefit_1.png',
        description:
          'Các thí sinh sẽ được cấp tư cách thành viên FoMo Bạc, từ đó họ có quyền truy cập vào nền tảng cho các hoạt động giao lưu online và offline.',
      },
      {
        url: 'benefit_2.png',
        description:
          'Tất cả những cô gái nào có niềm tin mạnh mẽ vào một lý tưởng hoặc đang muốn lan truyền một lý tưởng mới, sẽ có thể nói lên suy nghĩ và chia sẻ cảm xúc của mình trên khắp châu Á thông qua cuộc thi này.',
      },
      {
        url: 'benefit_3.png',
        description:
          'Thí sinh dự thi sẽ có thể trao quyền cho những người phụ nữ khác bằng cách tạo ra một phong trào hoặc cộng đồng, khai thác nền tảng và tiếp cận mạng lưới rộng khắp của Millionaireasia.',
      },
      {
        url: 'quangbahinhanh.png',
        description:
          'Thông qua cuộc thi, danh tiếng của thí sinh sẽ được quảng bá trên khắp châu Á',
      },
      {
        url: 'Tham gia các hội thảo.png',
        description:
          'Millionaireasia sẽ tổ chức những buổi hội thảo online và offline cho các thí sinh khắp châu Á tham dự. Họ sẽ được gặp gỡ, kết nối và học hỏi từ các chuyên gia trong các lĩnh vực khác nhau từ nhiều quốc gia khác nhau.',
      },
      {
        url: 'Kỹ năng cuộc sống.png',
        description:
          'Thí sinh dự thi có thể giới thiệu video của họ cho những nhân vật nổi trội, các nam nữ doanh nhân thành đạt thông qua nền tảng của Millionaireasia. Họ sẽ có được những kỹ năng quan trọng nhất trong cuộc sống: Nghệ thuật bán hàng',
      },
      {
        url: 'Miễn phí đào tạo.png',
        description:
          'Thông qua cuộc thi, danh tiếng của thí sinh sẽ được quảng bá trên khắp châu Á',
      },
      {
        url: 'Giao lưu và chia sẻ.png',
        description:
          'Millionaireasia sẽ tổ chức những buổi hội thảo online và offline cho các thí sinh khắp châu Á tham dự. Họ sẽ được gặp gỡ, kết nối và học hỏi từ các chuyên gia trong các lĩnh vực khác nhau từ nhiều quốc gia khác nhau.',
      },
      {
        url: 'Quyền lợi người giới thiệu.png',
        description:
          'Thí sinh dự thi có thể giới thiệu video của họ cho những nhân vật nổi trội, các nam nữ doanh nhân thành đạt thông qua nền tảng của Millionaireasia. Họ sẽ có được những kỹ năng quan trọng nhất trong cuộc sống: Nghệ thuật bán hàng',
      },
    ],
  },
  {
    title: 'Lợi ích hữu hình',
    benefits: [
      {
        url: 'benefit_4.png',
        description:
          'Youthlocked 100, một sản phẩm chống lão hóa (trị giá 500 đô la Singapore) giúp trẻ hóa và cải thiện nét thanh xuân ( Vòng Chung kết). Neuro Activator Soundwave (trị giá 350 đô la Singapore) để kích hoạt não bộ trong quá trình học hỏi và phát triển bản thân ( Vòng Bán Kết)',
      },
      {
        url: 'benefit_5.png',
        description: 'Cơ hội bốc thăm may mắn trúng giải thưởng trị giá 100.000 đô la Singapore',
      },
      {
        url: 'benefit_6.png',
        description:
          'Tiệc mừng hoành tráng tại Phuket với trải nghiệm chuyên cơ riêng  (Thí sinh chung kết có ít nhất 300 phiếu bình chọn.)',
      },
      {
        url: 'benefit_4.png',
        description:
          'Youthlocked 100, một sản phẩm chống lão hóa (trị giá 500 đô la Singapore) giúp trẻ hóa và cải thiện nét thanh xuân ( Vòng Chung kết). Neuro Activator Soundwave (trị giá 350 đô la Singapore) để kích hoạt não bộ trong quá trình học hỏi và phát triển bản thân ( Vòng Bán Kết)',
      },
      {
        url: 'benefit_5.png',
        description: 'Cơ hội bốc thăm may mắn trúng giải thưởng trị giá 100.000 đô la Singapore',
      },
      {
        url: 'benefit_6.png',
        description:
          'Tiệc mừng hoành tráng tại Phuket với trải nghiệm chuyên cơ riêng  (Thí sinh chung kết có ít nhất 300 phiếu bình chọn.)',
      },
    ],
  },
  {
    title: 'Quyền lợi thí sinh tại Việt Nam',
    benefits: [
      {
        url: 'benefit_7.png',
        description:
          'Hỗ trợ bộ ảnh profile chuyên nghiệp,quay video truyền cảm hứng lên đến 70% giá trị',
      },
      {
        url: 'benefit_8.png',
        description:
          'Xây dựng thương hiệu cá nhân, Cân bằng giữa công việc và cuộc sống hôn nhân, Khởi Nghiệp Thông Minh, Nâng cao thần thái và nhân hiệu, Nội lực khai mở tính nữ thiêng liêng',
      },
      {
        url: 'Voucher_1tr.png',
        description: 'Voucher chăm sóc các dịch vụ chăm sóc nail,spa,tóc tại Lys Spa',
      },
      {
        url: 'benefit_7.png',
        description:
          'Hỗ trợ bộ ảnh profile chuyên nghiệp,quay video truyền cảm hứng lên đến 70% giá trị',
      },
      {
        url: 'benefit_8.png',
        description:
          'Xây dựng thương hiệu cá nhân, Cân bằng giữa công việc và cuộc sống hôn nhân, Khởi Nghiệp Thông Minh, Nâng cao thần thái và nhân hiệu, Nội lực khai mở tính nữ thiêng liêng',
      },
      {
        url: 'Voucher_1tr.png',
        description: 'Voucher chăm sóc các dịch vụ chăm sóc nail,spa,tóc tại Lys Spa',
      },
    ],
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
    imageUrl: 'rule_2.png',
    title: 'CÁCH THỨC VÀ THỜI GIAN ĐĂNG KÝ',
    description:
      'Bạn sẽ cần xác minh danh tính trên nền tảng, gửi ảnh đại diện và một video Tính cách dài 1 phút để bắt đầu hành trình trao quyền cho phụ nữ.',
  },
  {
    imageUrl: 'rule_3.png',
    title: 'VÒNG TỨ KẾT',
    description:
      'Đây là giai đoạn quảng bá thương hiệu Tính cách của các thí sinh tới các FFF thông qua một video dài 1 phút. Thí sinh dự thi sẽ nhận được 20% hoa hồng từ việc nhận Những người bình chọn video Nhân Cách của thí sinh sẽ được tặng một token NFT Tính cách MsMA 2023 và tư cách thành viên FoMo Bạc.',
  },
  {
    imageUrl: 'rule_4.png',
    title: 'VÒNG BÁN KẾT',
    description:
      'Giai đoạn quảng bá Ý Tưởng của thí sinh và sự ủng hộ hoạt động TRAO QUYỀN CHO PHỤ NỮ thông qua một video dài 2 phút.',
  },
  {
    imageUrl: 'rule_5.png',
    title: 'VÒNG CHUNG KẾT',
    description:
      'Đây là giai đoạn để các thí sinh phổ biến Giá Trị và việc ủng hộ TRAO QUYỀN CHO PHỤ NỮ  thông qua một video dài ba phút. Điều kiện cho ngôi vị Quán quân, Á quân 1 và 2, các thí sinh (với tối thiểu 300 lượt bình chọn) phải lọt vào top 3 dựa trên số lượt bình chọn.',
  },
]

const mentors = [
  {
    imageUrl: 'peter_tan.png',
    name: 'PETER TAN',
    description: 'Giám đốc điều hành công ty Millionaireasia',
    detail:
      'Chủ Tịch Hội Đồng Quản Trị cộng đồng trên 40.000 triệu phú Châu Á. Lĩnh vực chính của PTO Holding là công nghệ, y tế, thẩm mỹ, đào tạo, đầu tư bất động sản và xuất nhập khẩu, ở Hàn Quốc, Trung Quốc, Hồng Kông',
  },
  {
    imageUrl: 'jera_tran.png',
    name: 'JERA TRAN',
    description: ' Phó chủ tịch phát triển kinh doanh toàn cầu AsianNet Media',
    detail:
      'Jera Trần là người sáng lập "Việt Nam Ơi Cố Lên". Jera thực hiện dự án xây trường học hỗ trợ vùng sâu vùng xa. Với vai trò là Đại sứ cho MSMA 2023 ,Jera ủng hộ vai trò và quyền lợi của phụ nữ, cùng Jera đồng hành trong quá trình " Trao Quyền Cho Phụ Nữ',
  },
  {
    imageUrl: 'cindy.png',
    name: 'CINDY',
    description: 'Kỹ sư Cindy Hà - Hà Mỹ Dung là người Việt Gốc Hoa',
    detail:
      'Sinh sống tại Sài Gòn với những Kinh nghiệm và học vị cao như kỹ công nghệ thông tin, chuyên gia đầu tư chứng khoán,.. và từng làm CEO nhiều công ty có tiếng như Quảng Cáo Creative,.. Năm 2022 được bầu chọn là Miss Business - Global Woman',
  },
]

const mentors2 = [
  {
    imageUrl: 'SharelHo.jpg',
    name: 'SHAREL HO',
    description: 'Mentors in Singapore',
    detail:
      'Sharel, giám đốc điều hành của DeFRED Jewellers, không ngừng đẩy ranh giới của sự sáng tạo, thiết kế và tay nghề thủ công của DeFRED lên tầm cao nhất của ngành. Và một khi cô ấy đạt được điều đó, cô ấy sẽ bắt đầu lại từ đầu vì cô ấy tin tưởng bằng cả trái tim rằng sự hoàn hảo có thể – và nên – được cải thiện. Đó là cách duy nhất để phát triển.',
  },
  {
    imageUrl: 'JaneTan.jpg',
    name: 'JANE TAN',
    description: 'Mentors in Singapore',
    detail:
      'Với 14 năm kinh nghiệm trong ngành bất động sản, Jane đã trở thành Phó Giám đốc Nhóm tại OrangeTee & Tie vào năm 2018, củng cố vị trí của cô là một trong những đại lý hoạt động hiệu quả nhất. Dù phải liên tục gắn bó với 3 đứa con nhưng Jane cũng bắt đầu mở chuỗi thẩm mỹ làm đẹp vào năm 2019. Trong vòng 6 tháng, cô đã giành được giải thưởng Top SME 100. Trong năm đó, cô đã giành được Giải thưởng Đẳng cấp Uy tín của Singapore.',
  },
  {
    imageUrl: 'JeanYip.jpg',
    name: 'JEAN YIP',
    description: 'Mentors in Singapore',
    detail:
      'Với khởi đầu là một nhà tạo mẫu tóc dưới quyền của Sylvia Kho, một nhà tạo mẫu tóc cô dâu đã thành danh vào những năm 1970, Jean đã mở tiệm làm tóc đầu tiên của mình tại Katong Plaza vào năm 1982. Cho đến tận ngày nay, Jean là người sáng lập công ty chăm sóc sức khỏe và sắc đẹp cùng tên - Tập đoàn Jean Yip - đã phát triển để trở thành một thương hiệu mang tính biểu tượng ở Singapore.',
  },
]

function App() {
  const settings = {
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    dots: true,
  }

  return (
    <Container minH="2000px" overflow="hidden" maxWidth="100vw" p={0}>
      <Image h={{ base: '140px', md: 'auto' }} src="./images/hero_image.gif" alt="Dan Abramov" />
      {/* NAV */}
      <Navigation />
      {/* INTRODUCTION */}
      <Center
        id="introduction"
        height={{ base: 'auto', xl: '800px' }}
        sx={{
          '& .slick-slide': {
            px: ['2rem', '4rem'],
          },
          '& .slick-slider': {
            width: '100%',
          },
          '& .slick-dots li button:before': {
            fontSize: '12px',
            color: '#223368',
          },
        }}
        maxW="100%"
        overflow="hidden"
        px={{ base: 0, sm: 32, xl: 64 }}
        py={[8, 8, 12, 12]}
      >
        <Slider {...settings}>
          {introductions.map((introd) => (
            <CardItem key={introd.title} {...introd} />
          ))}
        </Slider>
      </Center>
      {/* VIDEO */}
      <Center textAlign="center" bg="#EDEDED" p={[4, 8]} height={{ base: 'auto', xl: '700px' }}>
        <VideoContainer />
      </Center>
      {/* TIMELINE */}
      <Center p={{ base: 4, md: 20 }}>
        <Image src="./images/timeline.png" alt="Timeline" sx={{ borderRadius: '20px' }} />
      </Center>
      {/* RULES */}
      <Center
        height={{ base: 'auto', xl: '800px' }}
        sx={{
          '& .slick-slide': {
            p: '2rem',
          },
          '& .slick-slider': {
            width: '100%',
          },
          '& .slick-dots li button:before': {
            fontSize: '12px',
            color: '#223368',
          },
        }}
        maxW={['100%']}
        overflow="hidden"
        px={{ base: 4, sm: 32, xl: 60 }}
        w={['100%']}
        mx="auto"
        py={[4, 8]}
        pb={{ base: 8, md: 20, xl: 24 }}
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
            fontSize={{ base: '24px', sm: '32px', xl: '54px' }}
            color="white"
            fontWeight={700}
          >
            TRỞ THÀNH THÍ SINH NGAY
          </Text>
          <Flex
            flexDir={{ base: 'column-reverse', xl: 'row' }}
            gap={{ base: '24px', xl: '54px' }}
            justifyContent="space-between"
            px={{ base: 4, md: 4 }}
          >
            <Box flex={1}>
              <RegisterForm />
            </Box>
            <Box textAlign="center">
              <Image
                mx="auto"
                w={{ base: '240px', sm: '380px' }}
                h={{ base: '240px', md: '380px' }}
                src="./images/qr_register.png"
              />
              <Text mt={8} color="white" fontWeight={700} fontSize={{ base: '20px', md: '26px' }}>
                QUÉT MÃ QR ĐỂ <br /> ĐĂNG KÝ
              </Text>
            </Box>
          </Flex>
        </Box>
      </Center>
      {/* BENEFITS */}
      <Center flexDirection="column" py={32} maxW="100%">
        <Box w="100%" mb={{ base: 12, xl: 24 }} textAlign="center" position="relative">
          <Box
            sx={{
              zIndex: 2,
              bg: 'white',
            }}
          >
            <Heading
              sx={{
                fontWeight: 900,
                fontSize: { base: '30px', xl: '42px' },
                color: '#223368',
              }}
            >
              QUYỀN LỢI THÍ SINH
            </Heading>
          </Box>
        </Box>
        <VStack w={{ base: '82%', xl: '80%' }} spacing={[12, 12, 24]}>
          {benefits.map((benefit) => (
            <BenefitsContainer key={benefit.title} {...benefit} />
          ))}
        </VStack>
        <Box textAlign="center" px={[4, 8]} mt={24}>
          <Text
            sx={{
              fontWeight: 900,
              fontSize: { base: '20px', xl: '30px' },
              color: '#223368',
            }}
          >
            LƯU Ý: Thí sinh không thể tự bình chọn cho các video của bản thân sở hữu.
          </Text>
        </Box>
      </Center>
      {/* NEWS */}
      <Center id="news" bg="#F3F3F3" flexDirection="column" py={[16, 32]} maxW="100%">
        <Box w="100%" mb={6} textAlign="center" position="relative">
          <Heading
            sx={{
              fontWeight: 900,
              fontSize: { base: '30px', xl: '42px' },
              color: '#223368',
            }}
          >
            TIN TỨC
          </Heading>
        </Box>
        <Box w={{ base: '95%', xl: '80%' }}>
          <NewsList />
        </Box>
      </Center>
      {/* MENTORS */}
      <Center flexDirection="column" py={[16, 32]} maxW="100%">
        <Box w="100%" mb={6} textAlign="center" position="relative">
          <Heading
            sx={{
              fontWeight: 900,
              fontSize: { base: '30px', xl: '42px' },
              color: '#223368',
            }}
          >
            MENTORS
          </Heading>
        </Box>
        <Box w={{ base: '95%', xl: '90%' }}>
          <MentorList mentors={mentors} />
        </Box>
        <Box mt={[12]} w="100%" mb={6} textAlign="center" position="relative">
          <Heading
            sx={{
              fontWeight: 900,
              fontSize: { base: '30px', xl: '42px' },
              color: '#223368',
            }}
          >
            MENTORS TỪ SINGAPORE
          </Heading>
        </Box>
        <Box w={{ base: '95%', xl: '90%' }}>
          <MentorList mentors={mentors2} />
        </Box>
      </Center>
      {/* PARTNERS */}
      <Center id="partner" flexDirection="column" px={[4, 8, 24]} py={[8, 32]} maxW="100%">
        <Box w="100%" mb={6} textAlign="center" position="relative">
          <Heading
            sx={{
              fontWeight: 900,
              fontSize: { base: '30px', xl: '42px' },
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
