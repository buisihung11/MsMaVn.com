import { Box, Center } from '@chakra-ui/react'
import { ReactComponent as LeftArrowSvg } from '../assets/icons/left_arrow.svg'
import { ReactComponent as RightArrowSvg } from '../assets/icons/right_arrow.svg'

const LeftArrow = ({ onClick }) => (
  <Center
    w={{ base: '64px' }}
    h={{ base: '64px' }}
    transformOrigin="center"
    onClick={onClick}
    sx={{
      borderRadius: '64px',
      cursor: 'pointer',
      background: '#FFFFFF',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.4), inset 0px 1px 1px #46309F',
      position: 'absolute',
      top: '50%',
      left: { base: '-60px', md: '-100px', xl: '-140px' },
      transform: {
        base: 'translate(0, -50%) scale(0.5)',
        xl: 'translate(0, -50%) ',
      },
    }}
  >
    <LeftArrowSvg />
  </Center>
)

const RightArrow = ({ onClick }) => (
  <Center
    onClick={onClick}
    w={{ base: '64px' }}
    h={{ base: '64px' }}
    transformOrigin="center"
    sx={{
      borderRadius: '64px',
      cursor: 'pointer',
      background: '#FFFFFF',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.4), inset 0px 1px 1px #46309F',
      position: 'absolute',
      top: '50%',
      right: { base: '-60px', md: '-100px', xl: '-140px' },
      transform: {
        base: 'translate(0, -50%) scale(0.5)',
        xl: 'translate(0, -50%) ',
      },
    }}
  >
    <RightArrowSvg />
  </Center>
)

export { LeftArrow, RightArrow }
