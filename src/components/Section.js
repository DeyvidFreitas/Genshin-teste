import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title, description, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        </Fade>
    <Buttons>
    <Fade bottom>
        <ButtonGroup>
            <LeftButton>
                <img src="https://webstatic.hoyoverse.com/upload/event/2021/04/27/caf1de876b2d79715604463df4187b2f_4939885485338929477.png" alt="" />
            </LeftButton>
            <RightButton>
                <img src="https://webstatic.hoyoverse.com/upload/event/2020/12/14/a27edf5aa048e9509f0850856ad3f403_396608336029707725.png" alt="" />
            </RightButton>
            <RightButton>
                <img src="https://webstatic.hoyoverse.com/upload/event/2020/12/14/6ff53bc5d797e9efc2ac7b2b602c267a_8295237617862628623.png" alt="" />
            </RightButton>
            <RightButton>
                <img src="https://webstatic.hoyoverse.com/upload/event/2020/12/14/396b8eb0d0d2f27aadb476e0b62d0926_8878641138830187947.png" alt="" />
            </RightButton>
        </ButtonGroup>
        </Fade>
        <DownArrow src='/images/down-arrow.svg' />
        
        
    </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/everyone.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props =>`url("/images/${props.bgImage}")`}
    

`

const ItemText = styled.div`
    padding-top: 10vh;
    text-align: center;
    
    h1{
        color: #fff;
        font-size: 40px;
        letter-spacing: 5px;
        text-shadow: 0 0 10px rgb(114 71 21 / 68%), 0 0 10px rgb(114 71 21 / 68%);
    }

    p{
        color: #fff;
        font-size: 27px;
        text-shadow: 0 0 10px rgb(114 71 21 / 68%), 0 0 10px rgb(114 71 21 / 68%);
    }

    
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media(max-width: 768px){
        flex-direction: column;
    }

`

const LeftButton = styled.div`
    width: 200px;
    height: 55px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
    cursor: pointer;
    margin: 8px;

    img{
        width: 250px;
    }


`

const RightButton = styled(LeftButton)`
    img{
        width: 250px;
    }
`

const DownArrow = styled.img`
   
    height: 60px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    background-position: center;
    

`

const Buttons = styled.div`

`
const LogoImg = styled.img`
    width: 200px;
    height: 200px;
    background-position: center;
`