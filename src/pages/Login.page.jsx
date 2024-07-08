import Input from "../components/input.component";
import SocialButton from "../components/social-button.component";
import TopNav from "../components/topnav.component";

const HrComponent = () => {
  return (
    <div className=" w-[327px] h-5 text-center">
      <div className="absolute top-[0px] left-[155px] leading-[20px] font-extrabold">
        or
      </div>
      <div className="absolute top-[11.5px] left-[-0.5px] box-border w-[149px] h-px border-t-[1px] border-solid border-text-gray-40" />
      <div className="absolute top-[11.5px] left-[178.5px] box-border w-[149px] h-px border-t-[1px] border-solid border-text-gray-40" />
    </div>
  );
};

function Login() {
  return (
    <div className="w-full relative bg-text-white h-[812px] overflow-hidden text-left text-base text-ui-gray-80 font-text-label-12px-12">

        <TopNav
          leftIcon="/left-icon.svg"
          navigationTitle="Log in"
          showRightIcon={false}
          showSearchText={false}
          topNavPosition=""
          topNavTop="0px"
          topNavLeft="0px"
          className="mb-6"
        />
    
      <div className="container max-w-container mb-6">

     
          <img
      className={`w-[171px] block mx-auto max-w-full overflow-hidden h-10`}
      alt=""
      src='/primary1.svg'
    //   style={primaryIconStyle}
    />
      </div>
      <div className="container max-w-container">
      <div className="mb-4">
      <form>
        <div className="mb-4">
        <Input label="Email" />
        </div>
        <div className="mb-4">
        <Input label="Password" />
        </div>
        </form>
      </div>
      <h5 className="text-xs [text-decoration:underline] leading-[16px] font-extrabold mb-6">
        Forgot password
      </h5>
      </div>
      
      <div className="container max-w-container relative mb-6">
        <HrComponent />
      </div>
      <div className="container max-w-container">
      <div className="flex flex-col gap-4">
        <SocialButton type="apple" />
        <SocialButton type="facebook" />
        <SocialButton type="google" />
      </div>
      </div>
    </div>
  );
}

export default Login;
