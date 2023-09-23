import styled from "styled-components";
import background from '../../images/background.svg';
import { BiDollar } from 'react-icons/bi'


export const Summary = styled.div`
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
export const SummaryTitle = styled.h1`
color: #022959;
padding-top:40px;
margin-bottom:10px;
`
export const SummaryText = styled.p`
color: #9699AA;
margin-bottom:35px;
`
export const FinishBox = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
`

export const TextType = styled.p`
color: #022959;
font-size:16px;
font-weight:bold;
display: flex;
gap: 5px;
margin-bottom:10px;
`

export const ChangeBtn = styled.button`
border:none;
font-size:14px;
text-decoration: underline;
color:#9699AA;
background-color:transparent;
padding: 0;
cursor:pointer;
`

export const PriceText = styled.p`
display: flex;
align-items:center;
color:#022959;
font-weight:bold;
`

export const Icon = styled(BiDollar)`

`
export const DisplayBox = styled.div`
margin-top:40px;

&:not(:last-child){
    margin-bottom:48px;
}
`
export const DisplayDataBox = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
color:#022959;

margin-bottom:16px;
&:last-child{
    margin-bottom:48px;
}
`
export const DataTitle = styled.p`
color: #9699AA;
font-size:14px;

`
export const DataText = styled.p`
display:flex;
align-items:center;
font-weight:bold;
`