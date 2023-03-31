const TravelBag = () => (
  <div className="bg-white py-[20px] font-bold lg:p-[60px]">
    <div className="relative flex  h-[278px] w-full items-center rounded-[33px] bg-[url('../../../public/travel.jpg')] bg-cover bg-no-repeat md:h-[470px]">
      <div className="absolute m-[15px] rounded-[33px] border border-white pt-[20px] pl-[20px] text-white backdrop-blur-[80px] md:max-w-[744px]  md:pt-[46px] md:pl-[40px] lg:top-[39px] lg:left-[38px]">
        <h3 className="text-[24px] font-bold leading-[60px] lg:text-[38px]">
          How does it work
        </h3>
        <p className="pb-[49px] text-[14px] font-medium leading-[17px] lg:text-[25px] lg:leading-[42px]">
          Countrylocals.com is a project to find local experts for tourism. Here
          sellers can host their tourism products, classes, as well as sell gigs
          .Even celebrities and influencers can become local guides and sell
          their services.
        </p>
      </div>
    </div>
  </div>
);
export default TravelBag;
