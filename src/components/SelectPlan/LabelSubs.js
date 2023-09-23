import { SubsLabel } from "./PlanStyled";


export const LabelSubs = ({ children, isSelected, onClick }) => {
    return (
      <>
      <SubsLabel isSelected={isSelected} onClick={onClick}>
      {children}
    </SubsLabel>
      </>
    );
  };