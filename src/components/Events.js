import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Events() {
  return (
    <Wrap>
    <Fade bottom>
        <ItemText>
            <h1>Events</h1>
            <p>The latest events to come</p>
        </ItemText>
    </Fade>
    </Wrap>
  )
}

export default Events

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url('/images/ganyu.jpg');
    backgroubd-repeat:no-repeat;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: left;
    margin-left: 7vh;

    h1{
        color:#0076f6;
        font-size:60px;
        text-shadow: 0 0 15px rgb(0 105 246 / 68%), 0 0 15px rgb(0 105 246 / 68%);

    }

    p {
        color: #adedff;
        font-size: 30px;
        text-shadow: 0 0 10px rgb(0 105 246 / 68%), 0 0 10px rgb(0 105 246 / 68%);
    }

`