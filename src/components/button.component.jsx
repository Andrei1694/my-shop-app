export default function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`text-center font-bold text-base leading-5 cursor-pointer w-max rounded-mini h-[48px] [border:none] text-gray80 transition duration-300 ease-in-out
         ${
           disabled
             ? "bg-gray20 text-gray40 cursor-not-allowed"
             : "bg-primary-yellow text-gray80   hover:bg-primary-yellow/70"
         }`}
    >
      {children}
    </button>
  );
}
