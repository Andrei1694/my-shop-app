export default function Pill({
  className = "",
  children,
  textColor = "text-secondary-blue",
  bgColor = "bg-secondary-blue-20",
}) {
  return (
    <div
      className={`flex flex-col items-center justify-start ${textColor} ${className}`}
    >
      <div
        className={`rounded-81xl ${bgColor} overflow-hidden flex flex-col items-start justify-start py-1 px-2`}
      >
        <div className="leading-[12px] uppercase font-extrabold">
          {children}
        </div>
      </div>
    </div>
  );
}
