export default function Button({ className, children, disabled , onClick}) {
  return (
    <button
    onClick={onClick}
      disabled={disabled}
      className={`text-center font-bold text-base leading-5 cursor-pointer  rounded-mini h-[48px] [border:none] text-gray80 transition duration-300 ease-in-out ${className} w-full
         ${
           disabled
             ? "bg-ui-gray-20 text-gray-60 cursor-not-allowed"
             : "bg-primary-yellow text-gray80   hover:bg-primary-yellow/70"
         }`}
    >
      {children}
    </button>
  );
}
