import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Collapse,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  useDisclosure,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'

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

const DesktopNav = () => (
  <HStack spacing={{ base: 6, sm: 4, md: 6, xl: 24 }}>
    {navs.map((nav) => (
      <Box key={nav.name} as="a" href={nav.link} display="flex">
        <Text
          fontSize={{ base: '14px', xl: '22px' }}
          fontWeight={900}
          color="#223368"
          textTransform="uppercase"
        >
          {nav.name}
        </Text>
      </Box>
    ))}
  </HStack>
)

const MobileNav = () => (
  <VStack py={4} alignItems="flex-start" spacing={2}>
    {navs.map((nav) => (
      <Link
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        key={nav.name}
        href={nav.link}
        w="100%"
        p={2}
      >
        <Text
          fontSize={{ base: '14px', xl: '20px' }}
          fontWeight="bold"
          color="#223368"
          textTransform="uppercase"
        >
          {nav.name}
        </Text>
      </Link>
    ))}
  </VStack>
)

const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box bg="#EDEDED" maxW="100%" px={{ base: '4', sm: 6, md: 16, xl: 30 }} py={[2, 8]}>
      <Flex
        flexDir={{ base: 'row-reverse', md: 'row' }}
        alignItems="center"
        justifyContent={{ base: 'space-between', md: 'flex-start' }}
        gap={12}
      >
        <Image
          w={{ base: '54px', xl: '120px' }}
          h={{ base: '40px', xl: '70px' }}
          src="./images/logo.png"
          alt="Logo"
          mr={4}
        />
        <Box display={{ base: 'none', md: 'block' }}>
          <DesktopNav />
        </Box>

        <Box mr={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Box>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

export default Navigation
