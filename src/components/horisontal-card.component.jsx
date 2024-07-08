import Pill from "./pill.component";

export default function HorisontalCard({ discountMessage }) {
  return (
    <div className="flex w-[295px] items-center">
      <div className="flex-shrink-0 flex items-center justify-center w-[88px] h-[88px] rounded-[5px] shadow-[0px_10px_20px_rgba(0,_0,_0,_0.04),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)]">
        <img
          className="max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/music-042@2x.png"
          width={"60px"}
          height={"60px"}
        />
      </div>
      <div className="flex flex-col justify-center items-start ml-[16px] flex-grow">
        <div className="text-nowrap text-base leading-[24px] inline-block">
          "Awaken, My Love!"
        </div>
        <div className="flex flex-row items-center justify-between w-full text-ui-gray-80">
          <div className="flex items-center gap-[8px]">
            <div className="leading-[12px] font-extrabold opacity-[0.9]">
              $19.99
            </div>
            <b className="relative [text-decoration:line-through] leading-[12px] text-text-gray-40 opacity-[0.9]">
              $39.99
            </b>
          </div>
          {discountMessage && <Pill>{discountMessage}</Pill>}
        </div>
      </div>
    </div>
  );
}
