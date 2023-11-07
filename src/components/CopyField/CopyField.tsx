// hooks
import { useRef } from "react";
// !redux
import { useSelector } from "react-redux";
export default function CopyField() {
  let inputPassword: any = useRef("");
  let password = useSelector((state: any) => state.passwordArray.password);
  return (
    <div className="flex w-[100%]  bg-componentsColor h-[4.5rem] md:h-[4.5vw] items-center justify-between px-[2.4rem]">
      <input
        type="text"
        onChange={() => {}}
        ref={inputPassword}
        value={password.join("")}
        placeholder="PLACEHOLDER"
        className="text-textColor text-[1.7rem] md:text-[1.7vw] font-bold bg-transparent"
      />

      <button
        onClick={() => {
          navigator.clipboard.writeText(inputPassword.current.value);
          alert("Copied the text: " + inputPassword.current.value);
        }}
      >
        <CopyIcon />
      </button>
    </div>
  );
}

let CopyIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{ fill: " #a4ffaf" }}
        className="h-[30px] w-[30px] md:w-[2.2vw] md:h-[2.2vw]"
      >
        <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
      </svg>
    </>
  );
};
