import React from 'react'
import styled from 'styled-components'

function Areas() {
  return (
    <Wrap>
        <ItemText>
            <h1>AREAS</h1>
            <p>All the areas in teyvat</p>
        </ItemText>
    <ButtonGroup>
        <LeftButton>
            Mondstadt
        </LeftButton>
        <CenterButton>
            Liyue
        </CenterButton>
        <RightButton>
            Inazuma
        </RightButton>
    </ButtonGroup>

    </Wrap>
  )
}

export default Areas

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url(/images/areas.jpg);
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    

`


const ItemText = styled.div`
    padding-top: 13vh;
    align-items: center;
    
    h1{
        font-size: 60px;
        color: #005ef6;

    }

    p{
        font-size: 30px;
        color: #adedff;
        text-shadow: 0 0 10px rgb(0 105 246/68%), 0 0 10px rgb(0 105 246/68%);
     }

`

const ButtonGroup = styled.div`
     display: flex;
     margin-bottom: 50px;
     @media (max-width: 768px){
         flex-direction: column;
     }

     

`
const LeftButton = styled.div`
     background-color: rgba(23,26,32,0.8);
     height: 60px;
     width: 270px;
     color: white;
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 5px;
     opacity: 1;
     text-transform: uppercase;
     font-size: 20px;
     cursor: pointer;
     margin: 8px;
`

const CenterButton = styled(LeftButton)`

`

const RightButton = styled(LeftButton)`

`