export default function Input({label = 'No Label'}) {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-[7px] leading-4 font-extrabold text-small">
        {label}
      </label>
      <input
        type="text"
        className="border-[1px] border-1 h-12 border-solid border-text-gray-40 border-gray-40 rounded-mini outline-none py-[14px] pl-4 text-gray-80 text-base leading-6 font-normal"
      />
    </div>
  );
}
