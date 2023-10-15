// components
import { CopyField } from "../../components";

export default function MyContainer() {
  return (
    <main className="text-white flex flex-col items-center">
      <h1 className="text-[2.1rem] font-medium text-labelsColor">
        Password Generator
      </h1>
      <CopyField />
    </main>
  );
}
