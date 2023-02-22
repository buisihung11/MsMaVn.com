import { Box, Text, Image, Flex } from '@chakra-ui/react'

const navs = [
  {
    name: 'TRANG CHỦ',
    link: '#',
  },
  {
    name: 'THÔNG TIN CUỘC THI',
    link: '#introduction',
  },
  {
    name: 'TIN TỨC',
    link: '#news',
  },
  {
    name: 'ĐĂNG KÝ',
    link: '#register',
  },
  {
    name: 'ĐỐI TÁC',
    link: '#partner',
  },
]

const Navigation = () => (
  <Box bg="#EDEDED" maxW="100%" px={40} py={8}>
    <Flex alignItems="center" justifyContent="space-between">
      <Image
        style={{
          width: '120px',
          height: '70px',
        }}
        src="./images/logo.png"
        alt="Logo"
      />
      {navs.map((nav) => (
        <Box key={nav.name} as="a" href={nav.link} display="flex">
          <Text fontSize="20px" fontWeight="bold" color="#223368" textTransform="uppercase">
            {nav.name}
          </Text>
        </Box>
      ))}
    </Flex>
  </Box>
)

export default Navigation
