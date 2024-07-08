// import PrimaryIcon from "../components/PrimaryIcon";
// import Label from "../components/Label";

import PrimaryIcon from "../components/primary-icon.component";
import TopNav from "../components/topnav.component";

function Login() {
  return (
    <div className="w-full relative bg-text-white h-[812px] overflow-hidden text-left text-base text-ui-gray-80 font-text-label-12px-12">
      <div className="absolute top-[0px] left-[0px] w-[375px] h-[104px]">
        <TopNav
          leftIcon="/left-icon.svg"
          navigationTitle="Log in"
          showRightIcon={false}
          showSearchText={false}
          topNavPosition="absolute"
          topNavTop="0px"
          topNavLeft="0px"
        />
      </div>
      <PrimaryIcon
        primaryIconPrimary="/primary1.svg"
        primaryIconWidth="171px"
        primaryIconOverflow="unset"
        primaryIconHeight="40px"
        primaryIconPosition="absolute"
        primaryIconTop="128px"
        primaryIconLeft="102px"
      />
      <div className="absolute top-[280px] left-[24px] w-[327px] h-[72px] text-ui-gray-60">
        {
          <div
            className={`w-60 h-4 text-right text-xs text-ui-gray-100 font-headings-h4-20px-24`}
          >
            <div className="absolute top-[0px] right-[0px] flex flex-row items-center justify-start gap-[4px]">
              <b className="relative leading-[16px]">Description</b>
              <img className="w-4 relative h-4" alt="" src="/toggle-icon.svg" />
            </div>

            <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[4px] text-left">
              <div className="relative leading-[16px] font-extrabold">
                {"Password"}
              </div>

              <div className="relative leading-[16px]">(optional)</div>
            </div>
          </div>
        }

        <div className="absolute w-full top-[24px] right-[0px] left-[0px] h-12">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-text-white box-border border-[1px] border-solid border-text-gray-40">
            <div className="absolute w-[calc(100%_-_52px)] top-[14px] right-[36px] left-[16px] h-5 overflow-hidden hidden">
              <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[4px]">
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/outline-24px--search.svg"
                />
                <div className="w-[170px] relative leading-[24px] hidden">
                  youremail@address.com
                </div>
              </div>
            </div>
            <img
              className="absolute top-[14px] right-[8px] w-5 h-5 hidden"
              alt=""
              src="/right-icon1.svg"
            />
          </div>
        </div>
        <div className="absolute w-full top-[80px] right-[0px] left-[0px] h-4 hidden text-xs text-text-gray-100">
          <b className="absolute w-[calc(100%_-_19px)] top-[0px] left-[19px] leading-[16px] inline-block">
            Message Text
          </b>
          <img
            className="absolute top-[0px] left-[0px] w-4 h-4"
            alt=""
            src="/message-icon.svg"
          />
        </div>
      </div>
      <div className="absolute top-[192px] left-[24px] w-[327px] h-[72px] text-xs text-text-gray-100">
        {/* <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-4 text-right">
          <div className="absolute top-[0px] right-[0px] hidden flex-row items-center justify-start gap-[4px]">
            <b className="relative leading-[16px]">Description</b>
            <img className="w-4 relative h-4" alt="" src="/toggle-icon.svg" />
          </div>
          <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[4px] text-left">
            <input
              className="[border:none] [outline:none] font-extrabold font-text-label-12px-12 text-xs bg-[transparent] relative leading-[16px] text-ui-gray-80 text-left"
              value="Email"
              placeholder="Email"
              type="text"
            />
            <div className="w-[50px] relative leading-[16px] hidden">
              (optional)
            </div>
          </div>
        </div> */}
        <div className="absolute w-full top-[24px] right-[0px] left-[0px] h-12 text-base text-ui-gray-60">
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini bg-text-white box-border border-[1px] border-solid border-text-gray-40">
            <div className="absolute w-[calc(100%_-_52px)] top-[14px] right-[36px] left-[16px] h-5 overflow-hidden hidden">
              <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[4px]">
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/outline-24px--search.svg"
                />
                <div className="w-[170px] relative leading-[24px] hidden">
                  youremail@address.com
                </div>
              </div>
            </div>
            <img
              className="absolute top-[14px] right-[8px] w-5 h-5 hidden"
              alt=""
              src="/right-icon1.svg"
            />
          </div>
        </div>
        <div className="absolute w-full top-[80px] right-[0px] left-[0px] h-4 hidden">
          <b className="absolute w-[calc(100%_-_19px)] top-[0px] left-[19px] leading-[16px] inline-block">
            Message Text
          </b>
          <img
            className="absolute top-[0px] left-[0px] w-4 h-4"
            alt=""
            src="/message-icon.svg"
          />
        </div>
      </div>
      <div className="absolute top-[432px] left-[24px] text-xs [text-decoration:underline] leading-[16px] font-extrabold">
        Forgot password
      </div>
      <div className="absolute top-[692px] left-[24px] flex flex-row items-center justify-start gap-[8px]">
        <div className="relative leading-[24px]">New to Habitual?</div>
        <div className="relative [text-decoration:underline] leading-[20px] font-extrabold">
          Sign up
        </div>
      </div>
      <div className="absolute top-[472px] left-[24px] w-[327px] h-5 text-center">
        <div className="absolute top-[0px] left-[155px] leading-[20px] font-extrabold">
          or
        </div>
        <div className="absolute top-[11.5px] left-[-0.5px] box-border w-[149px] h-px border-t-[1px] border-solid border-text-gray-40" />
        <div className="absolute top-[11.5px] left-[178.5px] box-border w-[149px] h-px border-t-[1px] border-solid border-text-gray-40" />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[516px] left-[24px] w-[327px] h-10">
        <div className="absolute top-[0px] left-[0px] w-[327px] h-10">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-81xl box-border overflow-hidden flex flex-col items-center justify-start py-2.5 px-6 border-[1px] border-solid border-ui-gray-80">
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/outline-16px--heart.svg"
              />
              <div className="relative text-base leading-[20px] font-semibold font-text-label-12px-12 text-ui-gray-80 text-center">
                Continue with Apple
              </div>
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/outline-16px--chevronright.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute top-[11px] left-[24px] w-[15.7px] h-[17px] object-cover"
          alt=""
          src="/logo@2x.png"
        />
      </button>
      <div className="absolute top-[583px] left-[24px] w-[327px] h-10 text-center">
        <div className="absolute top-[0px] left-[0px] w-[327px] h-10">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-81xl box-border overflow-hidden flex flex-col items-center justify-start py-2.5 px-6 border-[1px] border-solid border-ui-gray-80">
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/outline-16px--heart.svg"
              />
              <div className="relative leading-[20px] font-semibold">
                Continue with Facebook
              </div>
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/outline-16px--chevronright.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute top-[12px] left-[24px] w-4 h-4 object-cover"
          alt=""
          src="/logo1@2x.png"
        />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[628px] left-[24px] w-[327px] h-10">
        <div className="absolute top-[0px] left-[0px] w-[327px] h-10">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-81xl box-border overflow-hidden flex flex-col items-center justify-start py-2.5 px-6 border-[1px] border-solid border-ui-gray-80">
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/outline-16px--heart.svg"
              />
              <div className="relative text-base leading-[20px] font-semibold font-text-label-12px-12 text-ui-gray-80 text-center">
                Continue with Google
              </div>
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/outline-16px--chevronright.svg"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute h-[33.5%] w-[4.1%] top-[33.25%] right-[88.26%] bottom-[33.25%] left-[7.65%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/logo2.svg"
        />
      </button>
      <div className="absolute right-[24px] bottom-[396px] w-[327px] h-12 text-center text-ui-gray-60">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-12">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-mini bg-ui-gray-20 overflow-hidden flex flex-col items-center justify-start py-3.5 px-6 box-border">
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/outline-16px--heart1.svg"
              />
              <b className="relative leading-[20px]">Log in</b>
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/outline-16px--chevronright1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
