export default function CheckLines({ Id, line }) {
  return (
    <>
      <div className="my-[1rem] text-[1.4rem] font-medium">
        <input
          type="checkbox"
          id={Id}
          className="mr-[1.5rem] h-[1.3rem] w-[1.3rem]"
        />
        <label htmlFor={Id}>{line}</label>
      </div>
    </>
  );
}
