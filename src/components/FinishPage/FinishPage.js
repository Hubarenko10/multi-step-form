import { CurrentNum, Info, Item, ItemBox, List, Num, Step, Summary } from "components/Summary/SummaryStyled"
import FinishIcon from "../../images/FinishIcon.svg"
import { FinishBox, Img, Text, Title } from "./FinishPageStyled"


export const FinishPage = () => {

return(
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
      <FinishBox>
        <Img src={FinishIcon} alt="Finish"/>
        <Title>Thank you!</Title>
        <Text>Thanks for confirming your subscription! We hope you have<br/> fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</Text>
    </FinishBox>
    </Summary>
    </>

)

}