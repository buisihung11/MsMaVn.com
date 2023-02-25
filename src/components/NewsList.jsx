import { Box } from '@chakra-ui/react'
import Slider from 'react-slick'
import NewsCard from './NewsCard'

const settings = {
  infinite: true,
  speed: 500,
  dots: true,
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
  ]
}
const news = [
  {
    thumbnailUrl: 'news_1.png',
    date: '09/02/2023',
    title: 'Nhan sắc Lý Nhã Kỳ thăng hạng, xuất hiện tươi tắn sau tin đồn chán showbiz',
    url: 'https://www.saigonchoice.com/nhan-sac-ly-nha-ky-thang-hang-xuat-hien-tuoi-tan-sau-tin-don-chan-showbiz/',
    description:
      'Chiều 9/2, diễn viên Lý Nhã Kỳ cùng hàng loạt sao Việt khoe sắc trên thảm đỏ sự kiện ra mắt cuộc thi Trao Quyền Dành Cho Phụ Nữ – MsMA 2023 tại TP.HCM. Người đẹp, doanh nhân Lý Nhã Kỳ thể hiện sự sang trọng và quyền lực khi bước xuống từ xe sang xe Rolls Royce 40 tỷ.',
  },
  {
    thumbnailUrl: 'news_2.jpeg',
    date: '09/02/2023',
    title: 'Á hậu “hot girl trứng rán” Trần Thanh Tâm nổi bật thảm đỏ “Trao Quyền Dành Cho Phụ Nữ”',
    url: 'http://doanhnhangiadinh.vn/a-hau-hot-girl-trung-ran-tran-thanh-tam-noi-bat-tham-do-trao-quyen-danh-cho-phu-nu',
    description:
      'Thảm đỏ sự kiện còn có sự góp mặt của nhiều sao Việt khác như diễn viên – doanh nhân Mai Thu Huyền, Á hậu Băng Châu, diễn viên Hồng Thanh, Á hậu “hotgirl trứng rán” Trần Thanh Tâm, người mẫu Andrea (An Tây), các Hoa hậu doanh nhân, Nữ hoàng sắc đẹp…',
  },
  {
    thumbnailUrl: 'news_1.png',
    date: '09/02/2023',
    title: 'Nhan sắc Lý Nhã Kỳ thăng hạng, xuất hiện tươi tắn sau tin đồn chán showbiz',
    url: 'https://baoquocte.vn/ly-nha-ky-thu-hut-anh-nhin-voi-gu-thoi-trang-boc-lua-216074.html?fbclid=IwAR2owMeGMfs9tyZTUHvizgUgNx3PH6FUodLq-',
    description:
      'Chiều 9/2, diễn viên Lý Nhã Kỳ cùng hàng loạt sao Việt khoe sắc trên thảm đỏ sự kiện ra mắt cuộc thi Trao Quyền Dành Cho Phụ Nữ – MsMA 2023 tại TP.HCM. Người đẹp, doanh nhân Lý Nhã Kỳ thể hiện sự sang trọng và quyền lực khi bước xuống từ xe sang xe Rolls Royce 40 tỷ.',
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
