import styled from "styled-components";
import background from '../../images/background.svg';
import { BiDollar } from 'react-icons/bi'

export const AddOnsBox = styled.div`
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
export const AddOnsTitle = styled.h1`
color: #022959;
padding-top:40px;
margin-bottom:10px;
`
export const AddOnsText = styled.p`
color: #9699AA;
margin-bottom:35px;
`

export const Label = styled.label`
border:${(props) => (props.isChecked ? '1px solid #483EFF' : '1px solid #D6D9E6')};
height:81px;
padding-left:24px;
padding-right:24px;
display: flex;
align-items:center;
border-radius:8px;
justify-content:space-between;
cursor:pointer;
margin-bottom: 20px;

&:last-child {
    margin-bottom: 81px;
  }
`
export const Input = styled.input.attrs({ type: 'checkbox' })`

width: 20px;
height:20px;
margin-right:24px;
&:checked::before {
    content: '\u2714';
    display: flex;
    justify-content:center;
    width: 20px;
    height: 20px;
    color: #fff;
    background-color: #483EFF;
  }
`

export const ServicesBox = styled.div`
margin-right: 128px;
display: flex;
align-items:center;
`

export const ServicesTitle = styled.p`
font-size:16px;
font-weight:bold;
color: #022959;
margin-bottom:7px;
`

export const ServicesText = styled.p`
font-size:14px;
color:#9699AA;
`

export const CurrencyText = styled.p`
display:flex;
align-items:center;
color:#483EFF;
letter-spacing:-1px;

`

export const Currency = styled(BiDollar)`

`
