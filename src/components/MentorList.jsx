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

const MentorList = () => (
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
