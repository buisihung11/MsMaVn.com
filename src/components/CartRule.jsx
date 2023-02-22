import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'

const CardRule = ({ imageUrl, title, description }) => {
  return (
    <Box
      borderRadius="20px"
      border="0.5px"
      borderColor="#223368"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      overflow="hidden"
      // w="50%"
      // minW="500px"
    >
      <Flex gap="20px">
        <Center flex={1}>
          <Box textAlign="center" px={{base: 4, md: 12}}>
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
              style={{
                fontSize: '20px',
                lineHeight: '36px',
              }}
            >
              {description}
            </Text>
          </Box>
        </Center>
        <Box w="40%">
          <Image w="100" h="auto" src={`./images/${imageUrl}`} alt={title} />
        </Box>
      </Flex>
    </Box>
  )
}

export default CardRule
