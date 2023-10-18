// components
import { CopyField, ControlPanel } from "../../components";

export default function MyContainer() {
  return (
    <main className="text-white flex flex-col items-center w-[36rem] ">
      <h1 className="text-[1.5rem] font-medium text-labelsColor">
        Password Generator
      </h1>
      <CopyField />
      <ControlPanel />
    </main>
  );
}
