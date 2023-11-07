// style
import "./controlPanel.css";
// !redux
import { addUpperCaseLetters,addLowerCaseLetters,addNumbers,addSymbols,removeUpperCaseLetters,removeLowerCaseLetters,removeNumbers,removeSymbols } from "../CheckLines/checkLinesSlicer";
// components
import {PasswordLength_section,CheckLines,PasswordStrength_section,GeneratePassword_section} from "../../components"

export default function ControlPanel() {
  // 
  let arrOfCheckLines = [
    {
      label: "Include Uppercase Letters",
      checkedF: addUpperCaseLetters(),
      noteCheckedF: removeUpperCaseLetters()
    },
    {
      label: "Include Lowercase Letters",
      checkedF: addLowerCaseLetters(),
      noteCheckedF: removeLowerCaseLetters()
    },
    {
      label: "Include Numbers",
      checkedF: addNumbers(),
      noteCheckedF: removeNumbers()
    },
    {
      label: "Include Symbols",
      checkedF: addSymbols(),
      noteCheckedF: removeSymbols()
    }
  ];
  
  return (
    <div className="ControlPanel">
      <PasswordLength_section/>
      <div className="ControlPanel-checkLines">
        {arrOfCheckLines.map((e, i) => {
          return <CheckLines
          key={i}
          line={e.label}
          Id={`check-${i}`}
          checkedF={e.checkedF}
          notCheckedF={e.noteCheckedF}
        />;
          })}
      </div>
      {/*  */}
      <PasswordStrength_section/>     
      {/*  */}
      <GeneratePassword_section/>
      
    </div>
  );
}


