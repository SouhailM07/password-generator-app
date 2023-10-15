export default function CopyField() {
  return (
    <div className="flex w-[42rem] bg-componentsColor h-[5rem] items-center justify-between px-[2.4rem]">
      <div className="text-textColor text-[2rem] font-medium">wpoeiuwapops</div>
      <button>
        <CopyIcon />
      </button>
    </div>
  );
}

let CopyIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{ fill: " #a4ffaf" }}
        className="h-[30px] w-[30px]"
      >
        <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
      </svg>
    </>
  );
};
