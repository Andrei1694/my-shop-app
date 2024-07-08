export default function Input() {
  return (
    <div className="flex flex-col w-max">
      <label className="mb-[7px] leading-4 font-extrabold text-small">
        Ceva
      </label>
      <input
        type="text"
        className="h-[48px] border border-1 border-gray40 rounded-mini outline-none py-[14px] pl-4 text-gray80 text-base leading-5 font-normal"
      />
    </div>
  );
}
