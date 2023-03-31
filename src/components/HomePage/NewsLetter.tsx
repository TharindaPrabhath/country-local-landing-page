const NewsLetter = () => (
  <div className="footer font-bold">
    <div className=" relative flex  h-[630px] w-full items-center justify-center rounded-b-[50px] bg-[url('../../../public/image15.jpg')]  bg-cover bg-no-repeat md:h-[700px] ">
      <div className="absolute bottom-[30px] h-[312px] w-[320px] rounded-[40px] bg-[white] md:bottom-auto md:h-[515px] md:w-[528px] lg:right-[60px]">
        <h3 className="purple_gradient_text_deep pt-[36px] pb-[14px] text-center text-[13px] font-medium uppercase leading-[16px] tracking-[0.1em] md:pb-[24px] md:pt-[60px] md:text-[22px] md:leading-[27px]">
          Newsletter
        </h3>
        <div className="pb-[23px] text-center text-[14px] font-semibold capitalize leading-[18px] md:pb-[40px] md:text-[24px]  md:leading-[29px]">
          Follow the journey
        </div>
        <div className="w-full px-[24px] md:px-[40px]">
          <input
            className="text-[#808080]focus:border-gray-500 mb-[12px] block h-[41px] w-full appearance-none rounded-[10px] border border-gray-200 bg-[#F2F2F2] py-[12px] px-[18px] text-[12px] font-medium leading-[15px] text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none md:mb-[21px] md:h-[68px] md:rounded-[18px]  md:py-[22px] md:px-[30px]  md:text-[20px] md:leading-[24px] "
            id="grid-last-name"
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="flex gap-[25px] px-[24px] md:gap-[42px] md:px-[40px] ">
          <input
            className=" mb-[12px] block h-[41px] w-full appearance-none rounded-[10px] border border-gray-200 bg-[#F2F2F2] py-[12px] px-[18px] text-[12px] font-medium leading-[24px] text-gray-700 focus:border-gray-500  focus:bg-white focus:outline-none md:mb-[21px] md:h-[68px] md:rounded-[18px]  md:py-[22px] md:px-[30px]  md:text-[20px] md:leading-[24px]  "
            id="grid-last-name"
            type="text"
            placeholder="Country"
          />

          <button
            className="mb-[12px] flex h-[41px] w-full appearance-none items-center justify-center rounded-[10px] border-gray-200 bg-[black] py-[12px] px-[18px] text-[12px] font-medium leading-[24px] text-white duration-300  hover:bg-[#F2F2F2] hover:text-black  focus:border-gray-500  focus:bg-black   focus:outline-none md:mb-[21px]  md:h-[68px] md:rounded-[18px] md:py-[22px] md:px-[30px] md:text-[20px] md:leading-[24px]"
            id="grid-last-name"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <p className=" px-[24px] pb-[19px] text-[9px] font-normal capitalize leading-[17px] md:px-[40px]  md:pb-[33px] md:text-[16px] md:leading-[29px]">
          By submitting, you give Country Locals permission to store and process
          your personal information so we can provide you with the content
          you’ve requested. For more information, please see our
          <a className="text-[#E71575]"> Privacy Policy.</a>
        </p>
      </div>
    </div>
  </div>
);
export default NewsLetter;
