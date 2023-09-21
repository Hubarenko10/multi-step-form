import styled from 'styled-components';
import background from '../../images/background.svg';

// ul interface
export const YourInfoBox = styled.div`
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
// Personal Info

export const Title = styled.h1`
color:#022959;
font-weight:bold;
padding-top: 56px; 
margin-bottom:10px;
`
export const Text = styled.p`
color:#9699AA;
font-size:16px;
margin-bottom:35px;

`

export const Form = styled.form`
display: block;
input{
    display:block;
}
`
export const Label = styled.label`
color: #022959;
font-size:14px;
` 


export const PhoneInput = styled.input`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
