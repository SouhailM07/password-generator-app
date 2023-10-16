// components
import { CopyField, ControlPanel } from "../../components";

export default function MyContainer() {
  return (
    <main className="text-white flex flex-col items-center max-w-[36rem] m-auto">
      <h1 className="text-[1.8rem] font-medium text-labelsColor">
        Password Generator
      </h1>
      <CopyField />
      <ControlPanel />
    </main>
  );
}
