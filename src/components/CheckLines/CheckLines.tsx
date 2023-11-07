// style
import "./checklines.css";
// hooks
import { useState } from "react";
// ! redux
import { useDispatch } from "react-redux";

export default function CheckLines({ Id, line, checkedF, notCheckedF }) {
  let dispatch = useDispatch();
  //
  let [check, setCheck] = useState(true);
  return (
    <>
      <div className="checkLine">
        <input
          type="checkbox"
          id={Id}
          // className="mr-[1.5rem] h-[1.3vw] w-[1.3vw] m-[10rem]"
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
