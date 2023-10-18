// ! redux
import { useSelector } from "react-redux";

export default function PasswordStrength_section() {
  let strength = useSelector((state: any) => state.passwordArray.strength);

  let bars: any = [];
  for (let i = 0; i < strength; i++) {
    bars.push(i);
  }
  //
  let bars2: any = [1, 2, 3, 4];
  for (let i = 0; i < strength; i++) {
    bars2.pop();
  }
  //
  let strengthType = ["nothing", "weak", "medium", "strong", "hard"];

  return (
    <>
      <div className="h-[4.5rem] w-[100%] bg-screen px-[2rem] flex justify-between items-center">
        <p className="text-labelsColor text-[1.3rem] font-bold">STRENGTH</p>
        <div className="flex items-center justify-between w-[11.5rem]">
          <p className="uppercase text-[1.4rem]">{strengthType[strength]}</p>
          <div className="flex justify-between w-[5.1rem]">
            {bars.map((i) => {
              return (
                <div key={i} className="bg-bars h-[2.3rem] w-[0.8rem]"></div>
              );
            })}
            {bars2.map((i) => {
              return (
                <div
                  key={i}
                  className="bars border-[2px] border-white h-[2.3rem] w-[0.8rem] "
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
