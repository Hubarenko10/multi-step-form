import { CurrentNum, Form, Info, Item, ItemBox, Label, List, Num, PhoneInput, Step, Text, Title, YourInfoBox} from "./YourInfoStyled"

export const YourInfo = ({onNext}) => {
    return(
        <>
        <YourInfoBox>
            <List>
                <Item>
                    <CurrentNum>1</CurrentNum>
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
                    
                        <Num>4</Num>
                        <ItemBox>
                        <Step>Step 4</Step>
                        <Info>Summary</Info>     
                    </ItemBox>
                </Item>
                
            </List>

            <div>
                <Title>Personal Info</Title>
                <Text>Please provide your name, email address, and phone number.</Text>
                <Form>
                    <Label>
                    Name
                    <input type="text" placeholder="e.g. Stephen King"/>
                    </Label>
                    <Label>
                    Email Address
                    <input type="email" placeholder="e.g. stephenking@lorem.com"/>
                    </Label>
                    <Label>
                    Phone Number
                    <PhoneInput type="number" inputMode="numeric" pattern="[0-9]*" />
                    </Label>
                </Form>
                <button onClick={onNext}>Next Step</button>
            </div>
        </YourInfoBox>
        </>
    )
}