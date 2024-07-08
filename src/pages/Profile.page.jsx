// import Menu from "../components/Menu";
// import DefaultNav from "../components/DefaultNav";

function Profile() {
    return (
        <div className="w-full relative bg-text-white h-[812px] overflow-hidden text-left text-base text-ui-gray-80 font-text-label-12px-12">
            <b className="absolute top-[64px] left-[24px] text-xl leading-[24px] inline-block w-[327px]">
                Profile
            </b>
            <div className="absolute top-[104px] left-[24px] leading-[24px] inline-block w-[327px]">
                Log in to start and explore your personalized shopping experience.
            </div>
            <div className="absolute right-[24px] bottom-[596px] w-[327px] h-12 text-center">
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-12">
                    <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-mini bg-primary-yellow overflow-hidden flex flex-col items-center justify-start py-3.5 px-6 box-border">
                        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
                            <img
                                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/outline-16px--heart.svg" />
                            <b className="relative leading-[20px]">Log in</b>
                            <img
                                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/outline-16px--chevronright.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-[240px] left-[24px] flex flex-row items-center justify-start gap-[8px]">
                <div className="relative leading-[24px]">New to Habitual?</div>
                <div className="relative [text-decoration:underline] leading-[20px] font-extrabold">
                    Sign up
                </div>
            </div>
            {/* <Menu />
            <DefaultNav /> */}
        </div>
    );
}
  
  export default Profile;
  