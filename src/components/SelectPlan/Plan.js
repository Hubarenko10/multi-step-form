import { useEffect, useState } from 'react';
import {
  BtnBox,
  ButtonBox,
  CurrentNum,
  Info,
  Input,
  Item,
  ItemBox,
  Label,
  List,
  Monthly,
  NextBtn,
  Num,
  PlanBox,
  PlanText,
  PlanTitle,
  PrevBtn,
  Price,
  PriceIcon,
  Step,
  SubsBox,
  SubsIconAdvanced,
  SubsIconArcade,
  SubsIconBoxAdvanced,
  SubsIconBoxArcade,
  SubsIconBoxPro,
  SubsIconPro,
  SubsLabel,
  SubsText,
  Switch,
  Yearly,
} from './PlanStyled';

export const Plan = ({ onNext, onPrevious }) => {
  const price = {
    arcade: '9/mo',
    advanced: '12/mo',
    pro: '15/mo',
  };
  const [selectedSubscription, setSelectedSubscription] = useState(
    localStorage.getItem('subscription') || 'standard'
  );
  const [isYearly, setIsYearly] = useState(
    JSON.parse(localStorage.getItem('isYearly')) || false
  );
  const [changePrice, setChangePrice] = useState(price);

  const handlePriceChange = () => {
    
    setChangePrice(prevPrices => {
      const newPrices = {
        arcade: prevPrices.arcade === '9/mo' ? '90/yr' : '9/mo',
        advanced: prevPrices.advanced === '12/mo' ? '120/yr' : '12/mo',
        pro: prevPrices.pro === '15/mo' ? '150/yr' : '15/mo',
      };
      localStorage.setItem('prices', JSON.stringify(newPrices));

      return newPrices;
    });
    setIsYearly((prevIsYearly) => !prevIsYearly);
    localStorage.setItem('isYearly', JSON.stringify(!isYearly));
  };

  const handleLabelClick = subscription => {
    setSelectedSubscription(subscription);
    localStorage.setItem('subscription', subscription);
    localStorage.setItem('prices', JSON.stringify(changePrice));
  };

  useEffect(() => {
    const storedSubscription = localStorage.getItem('subscription');
    if (storedSubscription) {
      setSelectedSubscription(storedSubscription);
    }
    const storedPrices = localStorage.getItem('prices');
    if (storedPrices) {
      setChangePrice(JSON.parse(storedPrices));
    }
  }, []);

  useEffect(() => {
    if (isYearly) {
      setChangePrice((prevPrices) => ({
        ...prevPrices,
        pro: '150/yr',
      }));
    }
    localStorage.setItem('isYearly', JSON.stringify(isYearly));
  }, [isYearly]);

  return (
    <PlanBox>
      <List>
        <Item>
          <Num>1</Num>
          <ItemBox>
            <Step>Step 1</Step>
            <Info>Your Info</Info>
          </ItemBox>
        </Item>
        <Item>
          <CurrentNum>2</CurrentNum>
          <ItemBox>
            <Step>Step 2</Step>
            <Info>Select Plan</Info>
          </ItemBox>
        </Item>
        <Item>
          <Num>3</Num>
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
        <PlanTitle>Select your plan</PlanTitle>
        <PlanText>You have the option of monthly or yearly billing.</PlanText>
        <SubsBox>
          <SubsLabel
            isSelected={selectedSubscription === 'arcade'}
            onClick={() => handleLabelClick('arcade')}
          >
            <SubsIconBoxArcade>
              <SubsIconArcade />
            </SubsIconBoxArcade>
            <SubsText>Arcade</SubsText>
            <Price>
              <PriceIcon />
              {changePrice.arcade}
            </Price>
          </SubsLabel>
          <SubsLabel
            isSelected={selectedSubscription === 'Advanced'}
            onClick={() => handleLabelClick('Advanced')}
          >
            <SubsIconBoxAdvanced>
              <SubsIconAdvanced />
            </SubsIconBoxAdvanced>
            <SubsText>Advanced</SubsText>
            <Price>
              <PriceIcon />
              {changePrice.advanced}
            </Price>
          </SubsLabel>
          <SubsLabel
            isSelected={selectedSubscription === 'Pro'}
            onClick={() => handleLabelClick('Pro')}
          >
            <SubsIconBoxPro>
              <SubsIconPro />
            </SubsIconBoxPro>
            <SubsText>Pro</SubsText>
            <Price>
              <PriceIcon />
              {changePrice.pro}
            </Price>
          </SubsLabel>
        </SubsBox>
        <ButtonBox isChecked={isYearly}>
        <Monthly isChecked={!isYearly}>Monthly</Monthly>
        <Label>
          <Input
            isYearly={isYearly}
            type="checkbox"
            onChange={handlePriceChange}
            checked={isYearly}
          />
          <Switch isChecked={isYearly} />
        </Label>
        <Yearly isChecked={isYearly}>Yearly</Yearly>
      </ButtonBox>
      <BtnBox>
        <PrevBtn onClick={onPrevious}>Go Back</PrevBtn>
        <NextBtn onClick={onNext}>Next Step</NextBtn>
      </BtnBox>
      </div>
    </PlanBox>
  );
};
