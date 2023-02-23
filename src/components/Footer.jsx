import { Container, Flex, Heading, Image, Link, VStack, Box, Text, HStack } from '@chakra-ui/react'

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

const socials = [
  {
    url: 'telegram.png',
    href: '/',
  },
  {
    url: 'facebook.png',
    href: '/',
  },
  {
    url: 'zalo.png',
    href: '/',
  },
  {
    url: 'tiktok.png',
    href: '/',
  },
]

const Footer = () => (
  <Box p={{ base: 4, md: 24, xl: 32 }} w="100%" bg="#223368">
    <Flex spacing={[2, 4]} flexDir={{ base: 'column', md: 'row' }} justifyContent="space-between">
      <VStack mb={4} alignItems="flex-start" spacing={6}>
        {navs.map((nav) => (
          <Link href={nav.link} key={nav.name}>
            <Heading
              sx={{ fontWeight: 900, fontSize: { base: '16px', md: '25px' }, color: '#fff' }}
            >
              {nav.name}
            </Heading>
          </Link>
        ))}
      </VStack>
      <VStack spacing={6}>
        <Heading fontSize={{ base: '24px', md: '30px' }} color="white">
          Kết nối với chúng tôi tại:
        </Heading>
        <HStack spacing={8}>
          {socials.map((soc) => (
            <Link key={soc.url} href={soc.href}>
              <Image
                w={{ base: '32px', md: '78px' }}
                h={{ base: '32px', md: '78px' }}
                src={`./images/socials/${soc.url}`}
                alt="social"
              />
            </Link>
          ))}
        </HStack>
        <Text fontSize="20px" color="white">
          Copyright © MsMA 2023 và Oras Holding
        </Text>
      </VStack>
      <Box mx={["auto", 0]} w="240px" h="240px">
        <Image src="./images/footer_logo.png" alt="Logo" />
      </Box>
    </Flex>
  </Box>
)

export default Footer
