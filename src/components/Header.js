import React, { useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {
    const [BurgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    return (
    <Container>
      <a >
      <img src="/images/logo.png" alt="" />

      </a>

        <Menu>
          {cars && cars.map((car, index)=>(
              <a key={index} href="./Home.js">{car}</a>
          ))}
        
          <a href="./News.js">News</a>
          
          <a href="./Bosses.js">Bosses</a>
          
          <a href="./Events.js">Events</a>
          
          <a href="./Areas.js">Areas</a>
          
        </Menu>
        <CustomMenu onClick={()=>setBurgerStatus(true)} />
        <BurgerNav show={BurgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={()=>setBurgerStatus(false)} />
          </CloseWrapper>
          <li><a href="#">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Characters</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">HoYolab</a></li>
          <li><a href="#">TOP-UP</a></li>
          <li><a href="#">REDEEM CODE</a></li>
          </BurgerNav>
    </Container>
    
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  

  img{
    height: 110px;
    width: 220px;
    
  }
  

`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  

  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
    color: #fff
  }

  @media(max-width: 768px){
    display: none;
  }
`
const CustomMenu = styled(MenuIcon)`
    display: flex;
    align-items: right;
    margin-left: 1110px;
    cursor: pointer;
    margin-bottom: 50px;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)' };
  transition: transform 0.2s ease-in;
  

    li{
      padding: 15px 0;
      border-bottom: 1px solid rgba(0,0,0, .2);

      a{
        font-weight: 600;
      }
    }
    
  `

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`