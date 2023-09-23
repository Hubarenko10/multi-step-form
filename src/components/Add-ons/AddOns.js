import { BtnBox, PrevBtn } from 'components/SelectPlan/PlanStyled';
import {
  AddOnsBox,
  AddOnsText,
  AddOnsTitle,
  Currency,
  CurrencyText,
  CurrentNum,
  Info,
  Input,
  Item,
  ItemBox,
  Label,
  List,
  Num,
  ServicesBox,
  ServicesText,
  ServicesTitle,
  Step,
} from './AddOnsStyled';
import { NextBtn } from 'components/YourInfo/YourInfoStyled';
import { useEffect, useState } from 'react';

export const AddOns = ({ onNext, onPrevious }) => {
    const [checkboxes, setCheckboxes] = useState([
        { title: 'Online service', text: 'Access to multiplayer games', checked: false,number: 1 },
        { title: 'Larger storage', text: 'Extra 1TB of cloud save', checked: false,number: 2 },
        { title: 'Customizable profile', text: 'Custom theme on your profile', checked: false,number: 2 },
      ]);
      useEffect(() => {
        const savedState = JSON.parse(localStorage.getItem('checkboxesState'));
        if (savedState) {
          setCheckboxes(savedState);
        }
      }, []);
      const handleCheckboxChange = (index) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
        setCheckboxes(updatedCheckboxes);
        localStorage.setItem('checkboxesState', JSON.stringify(updatedCheckboxes));
      };
  return (
    <>
      <AddOnsBox>
        <List>
          <Item>
            <Num>1</Num>
            <ItemBox>
              <Step>Step 1</Step>
              <Info>Your Info</Info>
            </ItemBox>
          </Item>
          <Item>
            <Num>2</Num>
            <ItemBox>
              <Step>Step 2</Step>
              <Info>Select Plan</Info>
            </ItemBox>
          </Item>
          <Item>
            <CurrentNum>3</CurrentNum>
            <ItemBox>
              <Step>Step 3</Step>
              <Info>Add-ons</Info>
            </ItemBox>
          </Item>
          <Item>
            <Num>4</Num>
            <ItemBox>
              <Step>Step 4</Step>
              <Info>Summary</Info>
            </ItemBox>
          </Item>
        </List>
        <div>
          <AddOnsTitle>Pick add-ons</AddOnsTitle>
          <AddOnsText>Add-ons help enhance your gaming experience.</AddOnsText>
          <div>
          {checkboxes.map((checkbox, index) => (
        <Label key={index} isChecked={checkbox.checked} onClick={() => handleCheckboxChange(index)}>
          <ServicesBox>
            <Input type="checkbox" checked={checkbox.checked} readOnly />
            <div>
              <ServicesTitle>{checkbox.title}</ServicesTitle>
              <ServicesText>{checkbox.text}</ServicesText>
            </div>
          </ServicesBox>
          <CurrencyText>+<Currency/>{checkbox.number}/mo</CurrencyText>
        </Label>
      ))}
          </div>
        <BtnBox>
        <PrevBtn onClick={onPrevious}>Go Back</PrevBtn>
        <NextBtn onClick={onNext}>Next Step</NextBtn>
      </BtnBox>
        </div>
      </AddOnsBox>
    </>
  );
};
