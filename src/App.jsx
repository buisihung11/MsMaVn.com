import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container, Image } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="xl">
      <Image src='./images/hero_image.png' alt='Dan Abramov' />
      Msmavn
    </Container>
  )
}

export default App
