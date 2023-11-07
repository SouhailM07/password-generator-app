// components
import { CopyField, ControlPanel } from "../../components";

export default function MyContainer() {
  return (
    <main className="text-white flex flex-col items-center justify-between  h-[42rem] md:h-[42vw] w-[37rem] md:w-[36vw]">
      <h1 className="text-[1.5rem] md:text-[1.5vw] font-medium text-labelsColor">
        Password Generator
      </h1>
      <CopyField />
      <ControlPanel />
    </main>
  );
}
