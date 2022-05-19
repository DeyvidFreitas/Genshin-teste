import React from 'react'
import styled from 'styled-components'

function Bosses() {
  return (
    <Wrap>
        <ItemText>
            <h1>Bosses</h1>
            <p>All the week bosses in teyvat</p>
        </ItemText>
        <DownArrow img src="/images/down-arrow.svg"/>
            
    
    </Wrap>
  )
}

export default Bosses

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/week-boss.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: left;
    margin-left: 7vh;

    h1{
        color: #e55404;
        font-size: 60px; ;
        letter-spacing: 2px;
        text-shadow:0 0 10px rgb(140, 62, 2/ 68%), 0 0 10px rgb(140, 62, 2/ 68%);
    }

    p{
        color:#e57c04;
        font-size: 30px;
        
    }

`
const DownArrow = styled.img`
    height: 60px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    background-position: center;
`