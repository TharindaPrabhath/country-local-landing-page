import Cityescape from './components/Cityescape';

const Voluntour = () => (
  <div className="py-[20px] font-bold lg:p-[60px]">
    <div className="flex items-center justify-between">
      <div className="whitespace-pre text-[24px] lg:text-[38px]">Voluntour</div>
      <div>
        <a className="hidden cursor-pointer text-[24px] text-[#E71575] duration-300 hover:text-[#a96ad8] lg:block">
          All things to do
        </a>
      </div>
    </div>
    <p className="pb-[32px] font-medium sm:text-[12px] lg:text-[22px]">
      Let’s making your trip full of meaningful stories
    </p>
    <Cityescape />
    <a className="sea cursor-pointer pt-[15px] text-[16px] font-bold text-[#E71575] duration-300 hover:text-[#a96ad8] lg:hidden">
      See all
    </a>
  </div>
);
export default Voluntour;
