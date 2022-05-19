import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import News from './News'
import Bosses from './Bosses'
import Events from './Events'
import Areas from './Areas'

function Home() {
  return (
    <Container>
        <Section 
          title="Home"
          description='Welcome travelers here you gona find everything you need to understand the game' 
          backgroundImg="everyone.jpg" />

          <News />
          <Bosses />
          <Events />
          <Areas />
          

  

    </Container>
    
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`

