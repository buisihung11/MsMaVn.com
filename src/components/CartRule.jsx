import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'

const CardRule = ({ imageUrl, title, description }) => {
  return (
    <Box
      borderRadius="20px"
      border="0.5px"
      borderColor="#223368"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      overflow="hidden"
      // minW="500px"
    >
      <Flex gap="20px" flexDir={{ base: 'column-reverse', md: 'row' }}>
        <Center flex={1} py={2}>
          <Box
            textAlign="center"
            pt={{ base: 0, sm: 8, md: 4, xl: 6 }}
            pb={[4, 8]}
            px={{ base: 6, sm: 12, md: 6 }}
          >
            <Text
              textAlign="center"
              sx={{
                fontSize: { base: 24, xl: 30 },
                color: '#223368',
                fontWeight: 900
              }}
            >
              {title}
            </Text>
            <Text
              sx={{
                fontSize: [14, 14, 16, 20],
                lineHeight: { base: 'auto', xl: '36px' },
              }}
            >
              {description}
            </Text>
          </Box>
        </Center>
        <Box w={{ base: '100%', md: '45%' }}>
          <Image
            objectFit="cover"
            w="100%"
            h={['140px', '100%']}
            src={`./images/${imageUrl}`}
            alt={title}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default CardRule
