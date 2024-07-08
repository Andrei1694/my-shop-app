export default function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`text-center font-bold text-base leading-5 cursor-pointer w-full rounded-mini h-[48px] [border:none] text-gray80 transition duration-300 ease-in-out
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
