import { Heading, Image, Box, Text, HStack } from '@chakra-ui/react'
import { ReactComponent as CalendarSvg } from '../assets/icons/calendar.svg'

const NewsCard = ({ thumbnailUrl, date, title, description }) => (
  <Box>
    <Image src={`./images/${thumbnailUrl}`} />
    <Box
      sx={{
        border: '0.7px solid #000000',
        borderRadius: '20px',
      }}
      pt={10}
      px={6}
      pb={6}
      mt={-8}
      zIndex={2}
    >
      <HStack justifyContent="flex-end" ml="auto" spacing={4}>
        <CalendarSvg />
        <Text sx={{ fontSize: '26px', color: '#223368' }}>{date}</Text>
      </HStack>
      <Heading
        sx={{
          fontWeight: 900,
          fontSize: '24px',
        }}
      >
        {title}
      </Heading>
      <Text fontSize="20px">{description}</Text>
    </Box>
  </Box>
)

export default NewsCard
