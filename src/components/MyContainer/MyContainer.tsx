// components
import { CopyField, ControlPanel } from "../../components";

export default function MyContainer() {
  return (
    <main className="text-white flex flex-col items-center justify-between h-[42rem] w-[90vw] sm:w-[37rem] ">
      <h1 className="text-[1.5rem] font-medium text-labelsColor">
        Password Generator
      </h1>
      <CopyField />
      <ControlPanel />
    </main>
  );
}
