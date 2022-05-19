import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function News() {
  return (
        <Wrap>
        <Fade bottom>
            <ItemText>
                <h1>News</h1>
                <p>The breaking news in teyvat</p>
            </ItemText>   
        </Fade>  



            <DownArrow src='/images/down-arrow.svg' />
        </Wrap>
  )
}

export default News

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('/images/kokusen-mona.jpg');
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

`

const ItemText = styled.div`
padding-top: 20vh;
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
const DownArrow = styled.img`
height: 60px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
background-position: center;

`
