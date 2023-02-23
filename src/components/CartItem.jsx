import { Box, Flex, Image, Text } from '@chakra-ui/react'

const CardItem = ({ imageUrl, title, description }) => {
  return (
    <Box
      borderRadius="20px"
      border="0.5px"
      borderColor="#223368"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      p={{ base: 0, sm: 6, xl: 14 }}
      overflow="hidden"
    >
      <Flex gap={["20px","50px"]} flexDir={{ base: 'column', md: 'row' }}>
        <Box w={{ base: '100%', md: '40%' }}>
          <Image objectFit="cover" w="100%" h={["140px","auto"]} src={`./images/${imageUrl}`} alt={title} />
        </Box>
        <Box flex={1} px={[2, 4]} pb={[2, 4]}>
          <Text
            textAlign="center"
            sx={{
              fontSize: { base: 20, xl: 30 },
              color: '#223368',
              fontWeight: 900
            }}
          >
            {title}
          </Text>
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            sx={{
              fontSize: [14, 14, 14, 20],
              lineHeight: { base: 'auto', xl: '36px' },
            }}
          >
            {description}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default CardItem
