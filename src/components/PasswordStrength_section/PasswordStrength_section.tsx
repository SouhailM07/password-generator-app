// style
import "./passwordStrength_section.css";
// ! redux
import { useSelector } from "react-redux";

export default function PasswordStrength_section() {
  let strength = useSelector((state: any) => state.passwordArray.strength);

  let bars: number[] = [];
  for (let i = 0; i < strength; i++) {
    bars.push(i);
  }
  //
  let bars2: number[] = [1, 2, 3, 4];
  for (let i = 0; i < strength; i++) {
    bars2.pop();
  }
  //
  let strengthType = ["nothing", "weak", "medium", "strong", "hard"];

  return (
    <>
      <div id="PasswordStrength">
        <p>STRENGTH</p>
        <div>
          <p id="strength-type">{strengthType[strength]}</p>
          <div id="bars-container">
            {bars.map((i) => {
              return <div key={i} className="bars1"></div>;
            })}
            {bars2.map((i) => {
              return <div key={i} className="bars2 "></div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
