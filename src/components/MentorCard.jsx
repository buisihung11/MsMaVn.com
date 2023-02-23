import { Box, Heading, Text } from '@chakra-ui/react'

const MentorCard = ({ imageUrl, description, name }) => (
  <Box
    sx={{
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
    h="660px"
    position="relative"
    bg={`url(./images/mentors/${imageUrl})`}
    borderRadius="20px"
    overflow="hidden"
  >
    <Box
      w="100%"
      h="100%"
      position="absolute"
      top={0}
      left={0}
      backgroundColor="rgba(0,0,0,0.5)"
      zIndex={1}
    />
    <Box
      transform="translate(-50%, 0)"
      textAlign="center"
      position="absolute"
      top="50%"
      left="50%"
      zIndex={2}
      w="100%"
      px={4}
    >
      <Text fontSize="24px" color="white">{description}</Text>
      <Heading fontSize="40px" color="white">{name}</Heading>
    </Box>
  </Box>
)

export default MentorCard
