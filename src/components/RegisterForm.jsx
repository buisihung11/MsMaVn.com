import { FormLabel, Input, VStack, Box, Select, Button } from '@chakra-ui/react'
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
    <Box textAlign="right">
      <VStack spacing="20px" textAlign="left" alignItems="start">
        <FormContainer>
          <StyledLabel>HỌ VÀ TÊN</StyledLabel>
          <StyledInput h={{ base: '40px', xl: '72px' }} w="100%" />
        </FormContainer>
        <FormContainer>
          <StyledLabel>SỐ ĐIỆN THOẠI</StyledLabel>
          <StyledInput h={{ base: '40px', xl: '72px' }} w="100%" />
        </FormContainer>
        <FormContainer>
          <StyledLabel>KHU VỰC SINH SỐNG:</StyledLabel>
          <Select
            sx={{
              height: { base: '40px', xl: '72px' },
              fontSize: { base: 'auto', xl: '36px' },
            }}
            bg="white"
            placeholder="Chọn khu vực"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormContainer>
        <FormContainer>
          <StyledLabel>EMAIL</StyledLabel>
          <StyledInput h={{ base: '40px', xl: '72px' }} w="100%" type="email" />
        </FormContainer>
      </VStack>
      <Button
        sx={{
          background: 'linear-gradient(180deg, #223368 15.38%, #264299 183.72%)',
          border: '4px solid #FFFFFF',
          borderRadius: '20px',
          fontWeight: 700,
          fontSize: ['20px','36px'],
          color: '#FFFFFF',
          height: ['45px','90px'],
          width: ['230px','330px'],
          filter: 'drop-shadow(0px 0px 20px rgba(180, 232, 255, 0.5))',
          mx: 'auto',
          textAlign: 'center'
        }}
        mt={12}
      >
        XÁC NHẬN
      </Button>
    </Box>
  )
}

export default RegisterForm
