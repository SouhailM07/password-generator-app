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
      <div className="flex justify-between items-center font-medium">
        <p className="text-textColor text-[1.2rem]">Character Length</p>
        <span className="text-neonGreen text-[1.8rem]">{rangeValue}</span>
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
