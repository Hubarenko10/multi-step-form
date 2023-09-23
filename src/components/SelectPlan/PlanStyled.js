import styled from 'styled-components';
import background from '../../images/background.svg';
import { MdGames } from 'react-icons/md';
import { IoLogoGameControllerA } from 'react-icons/io';
import { IoGameController } from 'react-icons/io5';
import { BiDollar } from 'react-icons/bi';

// MdGames IoGameController
// ul interface

export const PlanBox = styled.div`
  display: flex;
  justify-content: center;
  align-text: center;
  padding: 20px;
`;

export const List = styled.ul`
  width: 274px;
  height: 568px;
  background-image: url(${background});
  background-size: cover;
  background-position: 0 0, 100% 58px;
  background-repeat: no-repeat;
  padding-top: 40px;
  padding-left: 32px;
  margin-right:100px;
  li:not(:last-child) {
    margin-bottom: 32px;
  }
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const ItemBox = styled.div`
  display: block;
`;

export const CurrentNum = styled.p`
width: 33px;
height:33px;
border-radius:50px;
color:#022959;
background-color: #BEE2FD; 
display: flex;
justify-content:center;
align-items:center;
margin-right:16px; 
font-weight:bold;
`
export const Num = styled.p`
width: 33px;
height:33px;
border-radius:50px;
color:#fff;
background-color: transparent; 
border:1px solid #fff;
display: flex;
justify-content:center;
align-items:center;
margin-right:16px; 
font-weight:bold;
`

export const Step = styled.p`
text-transform:uppercase;
color: #ABBCFF;
font-size:12px;
margin-bottom:5px;
`
export const Info = styled.p`
text-transform:uppercase;
color: #fff;
font-size:14px;
font-weight:bold;
` 


export const PlanTitle = styled.h1`
color: #022959;
padding-top:40px;
margin-bottom:10px;
`
export const PlanText = styled.p`
color: #9699AA;
margin-bottom:35px;
`

export const SubsBox = styled.form`
position: relative;
display:flex;
gap:20px;
margin-bottom:32px;
`

export const SubsLabel = styled.label`
width: 138px;
height:160px;
border: 1px solid #D6D9E6;
border-radius:10px;
background-color: transparent;
color: #000; 
cursor: pointer;
border: ${(props) => (props.isSelected ? '1px solid #483EFF' : '1px solid #D6D9E6')};
`

export const SubsIconBoxArcade = styled.p`
width: 40px;
height: 40px;
background-color: #FFAF7E;
border-radius:50%;
display: flex;
justify-content:center;
align-items:center; 
margin-top: 20px;
margin-left: 16px;
margin-bottom:40px;
`

export const SubsIconArcade = styled(MdGames)`
width: 20px;
height: 20px;
fill:#fff;
`
// IoLogoGameControllerA

export const SubsIconBoxAdvanced = styled.p`
width: 40px;
height: 40px;
background-color: #F9818E;
border-radius:50%;
display: flex;
justify-content:center;
align-items:center; 
margin-top: 20px;
margin-left: 16px;
margin-bottom:40px;
`

export const SubsIconAdvanced = styled(IoLogoGameControllerA)`
width: 25px;
height: 25px;
fill:#fff;
`

// IoGameController
export const SubsIconBoxPro = styled.p`
width: 40px;
height: 40px;
background-color: #483EFF;
border-radius:50%;
display: flex;
justify-content:center;
align-items:center; 
margin-top: 20px;
margin-left: 16px;
margin-bottom:40px;
`

export const SubsIconPro = styled(IoGameController)`
width: 25px;
height: 25px;
fill:#fff;
`



export const SubsText = styled.p`
color: #022959;
font-size:16px;
font-weight:bold;
margin-bottom: 8px;
padding-left: 15px; 
`
export const Price = styled.p`
font-size:14px;
color:#9699AA;
display: flex;
align-items:center;
padding-left: 15px; 
`

export const PriceIcon = styled(BiDollar)`
fill:#9699AA
`

export const Switch = styled.div`
  position: relative;
  width: 40px;
  height: 15px;
  background: #022959;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: ${({ isYearly }) => (!isYearly ? "translate(3px, -50%)" : "translate(25px, -50%)")}; 
  }
`;
export const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background: #022959;

    &:before {
      transform: ${({ isYearly }) => (isYearly ? "translate(25px, -50%)" : "translate(3px, -50%)")};

    }
  }
`;
export const Label = styled.label`
display: flex;
align-items: center;
gap: 10px;
cursor: pointer;
`;

export const ButtonBox = styled.div`
display: flex;
align-items:center;
gap:24px;
justify-content:center;
margin-bottom:116px;
`

export const Monthly = styled.p`
font-size:14px;
color:#9699AA;
font-weight:bold;
color: ${({ isChecked }) => (isChecked ? '#022959' : '#9699AA')};
`
export const Yearly = styled.p`
font-size:14px;
color:#9699AA;
font-weight:bold;
color: ${({ isChecked }) => (isChecked ? '#022959' : '#9699AA')};
`


export const BtnBox = styled.div`
display: flex;
justify-content:space-between;
align-items:center;

`

export const PrevBtn = styled.button`
border:none;
color:#9699AA;
font-size:16px;
font-weight:bold;
background-color:transparent;
cursor:pointer;
transition:color 0.3s ease-in-out;
&:hover{
  color:#022959;
}
`
export const NextBtn = styled.button`
display: flex;
width: 123px;
height:48px;
justify-content:center;
align-items:center;
border-radius:10px;
color: #fff;
background-color:#022959;
cursor:pointer;
border:none;
transition: background-color 0.3s ease, color 0.3s ease;
&:hover{
  color:#000;
  background-color: rgba(2,41,89, 0.5)

}
`