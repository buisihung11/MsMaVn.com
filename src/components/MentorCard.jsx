import { Box, Heading, Text } from '@chakra-ui/react'

const MentorCard = ({ imageUrl, description, name, detail }) => (
  <Box
    sx={{
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
    cursor="pointer"
    h={['400px', '660px']}
    position="relative"
    bg={`url(./images/mentors/${imageUrl})`}
    borderRadius="20px"
    overflow="hidden"
    _hover={{
      '& .mentor__detail': {
        opacity: 1,
      },
      '& .mentor__name': {
        opacity: 0,
      },
      '& .mentor__overlay': {
        opacity: 0,
      },
    }}
  >
    <Box
      w="100%"
      h="100%"
      position="absolute"
      className="mentor__overlay"
      top={0}
      left={0}
      backgroundColor="rgba(0,0,0,0.5)"
      zIndex={1}
    />
    <Box
      className="mentor__detail"
      opacity={0}
      transition="all 300ms ease-in-out"
      pos="absolute"
      zIndex={2}
      bottom={0}
      left={0}
      w="100%"
      background="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 92.01%)"
    >
      <Text color="white" p={[2, 4, 6]}>
        {detail}
      </Text>
    </Box>
    <Box
      transition="all 300ms ease-in-out"
      className="mentor__name"
      transform="translate(-50%, 0)"
      textAlign="center"
      position="absolute"
      top="50%"
      left="50%"
      zIndex={2}
      w="100%"
      px={4}
    >
      <Text fontSize={{ base: '16px', xl: '24px' }} color="white">
        {description}
      </Text>
      <Heading fontSize={{ base: '24px', xl: '40px' }} color="white">
        {name}
      </Heading>
    </Box>
  </Box>
)

export default MentorCard
