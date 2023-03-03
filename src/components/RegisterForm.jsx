import { FormLabel, Input, VStack, Box, Select, Button, Text } from '@chakra-ui/react'
import styled from 'styled-components'

const StyledLabel = styled(FormLabel)`
  color: white;
  font-weight: 500;
  font-size: 30px;
`

const StyledInput = styled(Input)`
  width: 100%;
  background: white !important;
  /* height: 75px !important; */
  font-size: 36px !important;
  border-radius: 20px;
`

const FormContainer = styled(Box)`
  width: 100%;
`

const RegisterForm = () => {
  return (
    <Box textAlign="center">
      <Button
        as="a"
        href="https://forms.gle/xhq3QAu2TsGvo1jp9"
        target="_blank"
        sx={{
          background: 'linear-gradient(180deg, #223368 15.38%, #264299 183.72%)',
          border: '4px solid #FFFFFF',
          borderRadius: '20px',
          filter: 'drop-shadow(0px 0px 20px rgba(180, 232, 255, 0.5))',
          mx: 'auto',
          maxW: '100%',
          px: [4, 8],
          py: [4, 6, 8],
        }}
        mt={12}
      >
        <Text
          sx={{
            fontWeight: 700,
            fontSize: { base: '16px', sm: '20px', xl: '30px' },
            wordBreak: 'keep-all',
            textAlign: 'center',
            color: '#FFFFFF',
            display: 'block',
            width: '100%',
          }}
        >
          NHẤN VÀO ĐÂY ĐỂ ĐĂNG KÝ
        </Text>
      </Button>
    </Box>
  )
}

export default RegisterForm
