import { useEffect, useState } from "react";
import { CurrentNum, Form, Info, Input, Item, ItemBox, Label, LabelText, List, NextBtn, Num, PhoneInput, Step, Text, Title, YourInfoBox} from "./YourInfoStyled"

export const YourInfo = ({onNext}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: ""
  });
  const [validationErrors, setValidationErrors] = useState({
    name: false,
    email: false,
    phoneNumber: false
  });

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    if (savedFormData) setFormData(savedFormData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

   
    const isFieldEmpty = value.trim() === '';
    // setValidationErrors({
    //   ...validationErrors,
    //   [name]: value.trim() === ""
    // });

   
    if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      setValidationErrors({
        ...validationErrors,
        [name]: !emailRegex.test(value)
      });
    }

    if (name === 'phoneNumber') {
      const phoneRegex = /^\d{10}$/; 
      setValidationErrors({
        ...validationErrors,
        [name]: isFieldEmpty || !phoneRegex.test(value)
      });
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNextClick = () => {
    const hasEmptyFields = Object.values(formData).some((val) => val.trim() === "");
    const hasValidationErrors = Object.values(validationErrors).some((val) => val);

    if (hasEmptyFields || hasValidationErrors) {
      alert("Please fill in all required fields with valid data.");
      return;
    }

    localStorage.setItem("formData", JSON.stringify(formData));
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
              <LabelText>Name</LabelText>
              <Input
                type="text"
                name="name"
                placeholder="e.g. Stephen King"
                value={formData.name}
                onChange={handleInputChange}
                style={{ borderColor: validationErrors.name ? "red" : "" }}
              />
            </Label>
            <Label>
              <LabelText>Email Address</LabelText>
              <Input
                type="email"
                name="email"
                placeholder="e.g. stephenking@lorem.com"
                value={formData.email}
                onChange={handleInputChange}
                style={{ borderColor: validationErrors.email ? "red" : "" }}
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
                style={{ borderColor: validationErrors.phoneNumber ? "red" : "" }}
              />
            </Label>
          </Form>
          <NextBtn onClick={handleNextClick}>Next Step</NextBtn>
        </div>
        </YourInfoBox>
        </>
    )
}