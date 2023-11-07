// style
import "./controlPanel.css";
// !redux
import { addUpperCaseLetters,addLowerCaseLetters,addNumbers,addSymbols,removeUpperCaseLetters,removeLowerCaseLetters,removeNumbers,removeSymbols } from "../CheckLines/checkLinesSlicer";
// components
import {PasswordLength_section,CheckLines,PasswordStrength_section,GeneratePassword_section} from "../../components"

export default function ControlPanel() {
  // 
  let arrOfCheckLines = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];
  let reduxCheckedF=[addUpperCaseLetters(),addLowerCaseLetters(),addNumbers(),addSymbols()]
  let reduxNotCheckedF=[removeUpperCaseLetters(),removeLowerCaseLetters(),removeNumbers(),removeSymbols()]
  return (
    <div className="bg-componentsColor  w-[100%] px-[2rem] md:h-[31vw] md:px-[2vw] h-[32rem] flex flex-col justify-evenly">
      <PasswordLength_section/>
      <div className="h-[10rem] md:h-[10vw] flex flex-col justify-between">
        {arrOfCheckLines.map((e, i) => {
          return <CheckLines key={i} line={e} Id={`check-${i}`} checkedF={reduxCheckedF[i]} notCheckedF={reduxNotCheckedF[i]}/>;
        })}
      </div>
      {/*  */}
      <PasswordStrength_section/>     
      {/*  */}
      <GeneratePassword_section/>
      
    </div>
  );
}


