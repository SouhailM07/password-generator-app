// hooks
import { useState, useRef } from "react";
// ! redux
import { useDispatch } from "react-redux";

export default function CheckLines({ Id, line, checkedF, notCheckedF }) {
  let dispatch = useDispatch();
  //
  let [check, setCheck] = useState(true);
  let checkRef: any = useRef("");
  return (
    <>
      <div className="my-[1rem] text-[1.2rem] font-bold">
        <input
          type="checkbox"
          id={Id}
          ref={checkRef}
          className="mr-[1.5rem] h-[1.3rem] w-[1.3rem]"
          onChange={() => {
            if (check) {
              dispatch(checkedF);
            } else if (!check) {
              dispatch(notCheckedF);
            }
            setCheck(!check);
          }}
        />
        <label htmlFor={Id}>{line}</label>
      </div>
    </>
  );
}
