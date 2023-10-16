// style
import "./controlPanel.css";
// components
import {PasswordLength_section,CheckLines,PasswordStrength_section,GeneratePassword_section} from "../../components"
export default function ControlPanel() {
  let arrOfCheckLines = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];
  return (
    <div className="bg-componentsColor w-[100%] px-[2rem] h-[32rem] flex flex-col justify-evenly">
      <PasswordLength_section/>
      <div>
        {arrOfCheckLines.map((e, i) => {
          return <CheckLines key={i} line={e} Id={`check-${i}`} />;
        })}
      </div>
      {/*  */}
      <PasswordStrength_section/>     
      {/*  */}
      <GeneratePassword_section/>
      
    </div>
  );
}


