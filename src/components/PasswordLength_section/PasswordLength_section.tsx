// style
import "./passwordLengthSection.css";

// !redux
import { useDispatch } from "react-redux";
import { changeLength } from "./PASSWORD_LENGTH_SECTION_SLICER";
//
import { useState, useEffect, useRef } from "react";

export default function PasswordLength_section() {
  useEffect(() => {
    setRangeValue(rangeRef.current.value);
  }, []);
  let dispatch = useDispatch();

  let rangeRef: any = useRef();
  const [rangeValue, setRangeValue] = useState(10);

  const handleRangeChange = () => {
    dispatch(changeLength(rangeRef.current.value));
    setRangeValue(rangeRef.current.value);
  };
  return (
    <>
      <div id="PasswordLength">
        <p>Character Length</p>
        <span>{rangeValue}</span>
      </div>
      <div>
        <input
          className="w-[100%] h-[2rem]"
          type="range"
          style={{ backgroundSize: `${rangeValue * 5}% 100%` }}
          step={1}
          max={20}
          ref={rangeRef}
          value={rangeValue}
          onChange={() => {
            handleRangeChange();
          }}
        />
      </div>
    </>
  );
}
