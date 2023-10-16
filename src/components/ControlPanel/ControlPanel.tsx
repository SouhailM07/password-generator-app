// style
import "./controlPanel.css";

export default function ControlPanel() {
  let arrOfCheckLines = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];
  return (
    <div className="bg-componentsColor w-[100%] px-[2rem] h-[32rem] flex flex-col justify-evenly">
      <div className="flex justify-between items-center font-medium">
        <p className="text-textColor text-[1.3rem]">Character Length</p>
        <span className="text-neonGreen text-[2rem]">10</span>
      </div>
      <div>
        <input type="range" name="" id="" className="w-[100%]" />
      </div>
      <div>
        {arrOfCheckLines.map((e, i) => {
          return <CheckLine key={i} line={e} Id={`check-${i}`} />;
        })}
      </div>
      {/*  */}
      <div className="py-[1.2rem] w-[100%] bg-screen px-[2rem]">
        <p className="text-labelsColor text-[1.2rem] font-medium">STRENGTH</p>
        <div>
          <p></p>
          <div></div>
        </div>
      </div>
      {/*  */}
      <button className="justify-center my-[0.6rem] flex w-[100%] py-[1.2rem] bg-neonGreen text-screen text-[1.2rem] font-medium">
        <p className="flex justify-between w-[8.5rem]">
          <span>GENERATE</span>
          <LeftArrow />
        </p>
      </button>
    </div>
  );
}

let CheckLine = ({ line, Id }) => {
  return (
    <div className="my-[1rem] text-[1.4rem] font-medium">
      <input type="checkbox"
        id={Id}
        className="mr-[1.5rem] h-[1.3rem] w-[1.3rem]"
      />
      <label htmlFor={Id}>{line}</label>
    </div>
  );
};

let LeftArrow = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{ fill: "rgba(0, 0, 0, 1)" }}
        className="h-[25px] w-[25px]"
      >
        <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
      </svg>
    </>
  );
};
