import { ChangeBtn, CurrentNum, DataText, DataTitle, DisplayBox, DisplayDataBox, FinishBox, Icon, Info, Item, ItemBox, List, Num, PriceText, Step, Summary, SummaryText, SummaryTitle, TextType } from "./SummaryStyled"



export const SummaryComponent = ({onChange,onNext,onPrevious}) => {
    const subs = localStorage.getItem("subscription")
    const subscription = subs[0].toUpperCase() + subs.slice(1).toLowerCase()
    const type = localStorage.getItem("subscriptionType")
    const subscriptionType = type[0].toUpperCase() + type.slice(1).toLowerCase()
    const prices = JSON.parse(localStorage.getItem("prices"))
    const price = prices[subs]
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
    console.log(check)
    // console.log(foundNumbers)
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
        <TextType>{subscription}<span>({subscriptionType})</span></TextType>
        <ChangeBtn onClick={onChange}>Change</ChangeBtn>
        </div>
        <PriceText><Icon/>{price}</PriceText>
        </FinishBox>
    <DisplayBox>
    {Object.keys(displayData).map((number) => (
      displayData[number].titles.map((title, index) => (
        <DisplayDataBox key={`${number}-${index}`}>
          <DataTitle>{title}</DataTitle> 
          <DataText>+<Icon/>{number}/mo</DataText>  
        </DisplayDataBox>
      ))
    ))}
  </DisplayBox>
      <button onClick={onPrevious}>Go back</button>
      </div>
      </Summary> 
    </>
)
}