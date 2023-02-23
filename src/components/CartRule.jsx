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
        <Center flex={1}>
          <Box
            textAlign="center"
            pt={{ base: 0, sm: 8, xl: 0 }}
            pb={[4, 8]}
            px={{ base: 6, sm: 12, md: 6 }}
          >
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
              sx={{
                fontSize: [14, 14, 14, 20],
                lineHeight: { base: 'auto', xl: '36px' },
              }}
            >
              {description}
            </Text>
          </Box>
        </Center>
        <Box w={{ base: '100%', md: '40%' }}>
          <Image
            objectFit="cover"
            w="100%"
            h={['200px', '100%']}
            src={`./images/${imageUrl}`}
            alt={title}
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default CardRule
