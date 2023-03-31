const DarkConcrete = () => (
  <div className="bg-white py-[20px] font-bold">
    <div className="h-[800px] w-full items-center rounded-[15px] bg-[url('../../../public/BG.jpg')] bg-cover bg-no-repeat md:h-[654px] lg:rounded-[33px]">
      <div className="grid h-full grid-cols-1 gap-2 md:grid-cols-2">
        <div className="flex flex-col px-[10px] pt-[133px] md:pl-[60px] md:pt-[111px]">
          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="mb-[18px] rounded-[7px] bg-[#E71575] px-4 py-1 font-medium leading-[24px] text-[white]"
            >
              LIVE
            </button>
          </div>
          <h3 className="mb-[12px] text-center text-[24px] font-bold leading-[36px] text-[white] md:mb-[17px] md:text-left md:text-[35px] md:leading-[45px] lg:mb-[42px] lg:text-[42px] lg:leading-[60px]">
            Explore the world from the comfort of your couch!
          </h3>
          <div className="flex justify-center md:justify-start">
            <p className="mb-[24px] max-w-[253px] text-center text-[14px] font-normal leading-[21px] text-[white] md:mb-[25px] md:max-w-[453px] md:text-left md:text-[18px] md:leading-[28px]  lg:mb-[42px] lg:text-[22px]">
              Pick an online activity and take your family and friends with you!
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="md:text-[16px]font-medium rounded-[7px] bg-gradient-to-r from-[#E71575] to-[#6F01F0] px-[27px] py-[13px] text-[14px] leading-[21px] text-[white] duration-300 hover:bg-[#a96ad8]  md:px-[58px]"
            >
              sea all online experiences
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="w-full sm:w-[80%] md:w-full xl:w-auto">
            {/* <div className="max-h-[350px] w-full md:max-h-full bg-[url"></div> */}
            <img
              src="/livepreview.png"
              alt="clock"
              className="max-h-[350px] w-full md:max-h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default DarkConcrete;
