// ! redux
import { useDispatch, useSelector } from "react-redux";
import { generatePassword } from "../CheckLines/checkLinesSlicer";
export default function GeneratePassword_section() {
  let dispatch = useDispatch();
  let passwordLength = useSelector(
    (state: any) => state.passwordLength.passwordLength
  );
  return (
    <>
      <button className="justify-center my-[0.6rem] flex w-[100%] py-[1.2rem] bg-neonGreen text-screen text-[1.2rem] font-medium">
        <p
          onClick={() => {
            dispatch(generatePassword(passwordLength));
          }}
          className="flex justify-between w-[8.5rem]"
        >
          <span>GENERATE</span>
          <LeftArrow />
        </p>
      </button>
    </>
  );
}

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
