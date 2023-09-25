import { useEffect, useState } from "react";
import { CurrentNum, Form, Info, Input, Item, ItemBox, Label, LabelText, List, NextBtn, Num, PhoneInput, Step, Text, Title, YourInfoBox} from "./YourInfoStyled"

export const YourInfo = ({onNext}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: ''
      });
    
      useEffect(() => {
        const savedFormData = JSON.parse(localStorage.getItem('formData'));
        if (savedFormData) setFormData(savedFormData);
      }, []);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleNextClick = () => {

      
          if (!formData.name.trim() || !formData.email.trim() || !formData.phoneNumber.trim()) {
            alert('Please fill in all required fields.');
            return;
          }
          if (!formData.email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
          }
        localStorage.setItem('formData', JSON.stringify(formData));
        onNext();
      };
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
                    <LabelText>
                        Name    
                    </LabelText>
                    <Input 
                    type="text"
                    name="name"
                    placeholder="e.g. Stephen King"
                    value={formData.name}
                    onChange={handleInputChange}
                         
                    />
                    
                    </Label>
                    <Label>
                    <LabelText>
                    Email Address
                    </LabelText>
                    <Input 
                    type="email" 
                    name="email"
                    placeholder="e.g. stephenking@lorem.com"
                    value={formData.email}
                    onChange={handleInputChange}
                     
                    />
                    </Label>
                    <Label>

                    <LabelText>Phone Number</LabelText>
                   
                    <PhoneInput
                     name="phoneNumber"
                     placeholder="e.g. +1 234 567 890" 
                     type="number"
                     pattern="[0-9]*" 
                     value={formData.phoneNumber}  
                     onChange={handleInputChange} 
                      
                     />
                    </Label>
                </Form>
                <NextBtn onClick={handleNextClick}>Next Step</NextBtn>
            </div>
        </YourInfoBox>
        </>
    )
}