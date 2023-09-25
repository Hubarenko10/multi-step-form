import { BtnBox, PrevBtn } from "components/SelectPlan/PlanStyled";
import { ChangeBtn, CurrentNum, DataText, DataTitle, DisplayBox, DisplayDataBox, FinishBox, Icon, Info, Item, ItemBox, List, Num, PriceText, Step, Summary, SummaryText, SummaryTitle, TextType, TotalIcon, TotalItem, TotalText } from "./SummaryStyled"
import { NextBtn } from "components/YourInfo/YourInfoStyled";



export const SummaryComponent = ({onChange,onNext,onPrevious}) => {
    const subs = localStorage.getItem("subscription")
    
    const subscription = subs.toLowerCase()
    console.log(subs)
    const type = JSON.parse(localStorage.getItem('isYearly'));
    const prices = JSON.parse(localStorage.getItem("prices"))
   
    const price = prices[subscription]
   
    const check = JSON.parse(localStorage.getItem("checkboxesState"))
    const displayData = check.reduce((acc, checkbox) => {
        const { title, number, checked } = checkbox;
        if (checked) {
          if (!acc[number]) {
            acc[number] = { titles: [] };
          }
          acc[number].titles.push(title);
        }
        return acc;
      }, {});
      const calculateTotalPrice = () => {
        let totalPrice = 0;
    
        // Пройдемся по выбранным элементам и прибавим к общей сумме соответствующие цены
        Object.keys(displayData).forEach((number) => {
          const titlesCount = displayData[number].titles.length;
          const itemPrice = type ? number * 10 : number;
          totalPrice += titlesCount * itemPrice;
        });
    
        return totalPrice;
      };
      const totalPrice = Number(price.match(/\d+(\.\d+)?/g));
      
      const totalAmount = calculateTotalPrice()+totalPrice;

      const ConfirmClick = () => {
        localStorage.clear();
        onNext()
      }
    return (
    <>
    <Summary>
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
          <Num>3</Num>
          <ItemBox>
            <Step>Step 3</Step>
            <Info>Add-ons</Info>
          </ItemBox>
        </Item>
        <Item>
          <CurrentNum>4</CurrentNum>
          <ItemBox>
            <Step>Step 4</Step>
            <Info>Summary</Info>
          </ItemBox>
        </Item>
      </List>
      <div>
        <SummaryTitle>Finishing up</SummaryTitle>
        <SummaryText>Double-check everything looks OK before confirming.</SummaryText>
        <FinishBox>
        <div>
        <TextType>{subs}{type === false ? <span>(Monthly)</span>:<span>(Yearly)</span>}</TextType>  
<ChangeBtn onClick={onChange}>Change</ChangeBtn>
        </div>
        <PriceText><Icon/>{price}</PriceText>
        </FinishBox>
    <DisplayBox>
    {Object.keys(displayData).map((number) => (
      displayData[number].titles.map((title, index) => (
        <DisplayDataBox key={`${number}-${index}`}>
          <DataTitle>{title}</DataTitle> 
          {type === false ? 
          <DataText>+<Icon/>{number}/mo</DataText> 
          : 
          <DataText>+<Icon/>{number*10}/yr</DataText>} 
        </DisplayDataBox>
      ))
    ))}
  </DisplayBox>
    {type === false ? 
    <TotalText>Total (per month)<TotalItem><TotalIcon/>{totalAmount}/mo</TotalItem></TotalText> 
    : 
    <TotalText>Total (per year)<TotalItem>{totalAmount}/yr</TotalItem></TotalText>}
    <BtnBox>
        <PrevBtn onClick={onPrevious}>Go Back</PrevBtn>
        <NextBtn onClick={ConfirmClick}>Confirm</NextBtn>
      </BtnBox>
      </div>
      </Summary> 
    </>
)
}