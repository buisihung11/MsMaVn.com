import { Heading, Image, Box, Text, HStack, Link } from '@chakra-ui/react'
import { ReactComponent as CalendarSvg } from '../assets/icons/calendar.svg'

const NewsCard = ({ thumbnailUrl, date, title, description, url }) => (
  <Link href={url} target="_blank">
    <Box overflow="hidden">
      <Image
        h={{ base: '200px', md: '280px' }}
        w="100%"
        objectFit="cover"
        borderRadius="20px"
        src={`./images/${thumbnailUrl}`}
      />
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
        <HStack justifyContent="flex-end" ml="auto" py={[2, 4]} spacing={4}>
          <CalendarSvg />
          <Text sx={{ fontSize: { base: '16px', md: '24px' }, color: '#223368' }}>{date}</Text>
        </HStack>
        <Heading
          sx={{
            fontWeight: 900,
            fontSize: { base: '16px', md: '24px' },
          }}
          pb={[2, 4]}
        >
          {title}
        </Heading>
        <Text fontSize={{ base: '16px', md: '20px' }}>{description}</Text>
      </Box>
    </Box>
  </Link>
)

export default NewsCard
