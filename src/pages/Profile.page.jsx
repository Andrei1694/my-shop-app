import doodle from "../assets/opendoodle@2x.png";
import Button from "../components/button.component";
import edit from '../assets/edit.png'

const SecondaryButtonDefault1 = ({ className = "" }) => {
  return (
    <div
      className={`shadow-[0px_5px_15px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start py-0 pr-[15px] pl-0 leading-[normal] tracking-[normal] text-left text-base text-ui-gray-80 font-headings-h6-12px-12 ${className}`}
    >
      <div className="w-40 flex flex-row items-start justify-start py-0 px-0 box-border">
        <div className="rounded-mini bg-ui-white overflow-hidden flex flex-row items-start justify-start py-3.5 px-6 gap-[7px] shrink-0">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 mr-[2px]"
              loading="lazy"
              alt=""
              src={edit}
            />
          </div>
          <b className="relative leading-[20px] inline-block min-w-[104px]">
            Edit my profile
          </b>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/outline-16px--chevronright.svg"
          />
        </div>
      </div>
    </div>
  );
};

const WishlistTellUs = ({ className = "" }) => {
  return (
    <section
      className={`shadow-[0px_16px_24px_rgba(0,_0,_0,_0.06),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)] rounded-3xs bg-ui-white w-[327px] h-[300px] text-center text-xl text-ui-gray-80 font-headings-h6-12px-12 ${className}`}
    >
      <div className="flex flex-col items-center">
        <img
          className="max-w-full overflow-hidden max-h-full mt-9 mb-3 mx-auto"
          width={93}
          height={71}
          alt=""
          src={doodle}
        />
        <b className="leading-[24px] inline-block w-[295px] mb-2">
          Tell us what interests you!
        </b>
        <p className="text-base leading-[24px] text-text-gray-60 inline-block w-[295px] mb-3">
          You don’t have any interests listed. Tell us what you love the most
          and we’ll recommend relevant products to you.
        </p>

        <Button className="max-w-[295px]">Add my interests</Button>
      </div>
    </section>
  );
};

function LoggedInProfile() {
  return (
    <div className="bg-white h-[1000px]">
      <div className="container max-w-container text-center mb-4">
        <div className="flex flex-col">
          <img
            src="/avatar-default@2x.png"
            alt="avatar"
            className="block mx-auto mb-3"
            width={80}
            height={80}
          />
          <h5 className="mb-2 font-bold text-xl leading-6 text-ui-gray-80">Stanciu Andrei</h5>
          <p className="text-ui-gray-60 text-base leading-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia.
          </p>
        </div>
      </div>
      <div className="container max-w-container">
        {/*  */}
        <div className="flex flex-col items-center justify-center mb-[26px]">
          <SecondaryButtonDefault1 className="w-[175px] h-12 rounded-[15px]" />
        </div>
      </div>
      <div className="container max-w-container">
        <div className="flex items-start justify-between font-extrabold text-xs mb-6">
          <h5 className="text-ui-gray-80 leading-3 uppercase">my Interests</h5>
          <h5 className="text-ui-gray-60 leading-4 underline underline-offset-2 uppercase">
            EDIT
          </h5>
        </div>
      </div>
      <div className="container max-w-container">
        <WishlistTellUs />
      </div>
    </div>
  );
}

function LoggedOut() {
  return (
    <>
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
                  src="/outline-16px--heart.svg"
                />
                <b className="relative leading-[20px]">Log in</b>
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/outline-16px--chevronright.svg"
                />
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
      </div>
    </>
  );
}

function Profile() {
  const isAuthentificated = true;
  const page = isAuthentificated ? <LoggedInProfile /> : <LoggedOut />;
  return page;
}

export default Profile;
