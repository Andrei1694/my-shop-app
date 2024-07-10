const map = {
    google: "/logo2.svg",
    facebook: '/logo1@2x.png',
    apple: '/logo@2x.png'
}

export default function SocialButton({type='apple'}) {
    console.log(type)
    console.log(map[type])
    return (
        <button className="cursor-pointer p-0 bg-[transparent] w-[327px] h-10 rounded-81xl border-[1px] border-solid border-ui-gray-80 relative flex items-center justify-center">
        <img className="absolute left-6" alt="" width={16} height={16} src={map[type]} />
        <h5 className="text-base leading-[20px] font-semibold font-text-label-12px-12 text-ui-gray-80">
          Continue with Google
        </h5>
      </button>
      )
}