/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/require-default-props: "off" */
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EastExperiences = () => (
  <div className="relative pb-5 md:pb-14">
    <div className="lg:px-[60px]">
      <h3 className=" text-[24px] font-bold text-black lg:text-[38px]">
        Get Inspired By{' '}
        <span className="purple_gradient_text_deep ">
          Best North East Experiences
        </span>
      </h3>

      <div className="relative -mr-5 -ml-2 mt-3 md:-mr-3 md:-ml-3">
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          freeMode
          modules={[Navigation, FreeMode]}
          navigation={{
            prevEl: '.available_ex.swiper-button-prev',
            nextEl: '.available_ex.swiper-button-next',
          }}
          className="flex flex-wrap !pr-5 md:!pr-0"
        >
          {[
            ['Foodies', '/Foodiesex.jpg'],
            ['Families', '/Familiesex.jpg'],
            ['History Buffs', '/Historyex.jpg'],
            ['Foodies', '/Foodiesex.jpg'],
            ['Families', '/Familiesex.jpg'],
            ['History Buffs', '/Historyex.jpg'],
            ['Foodies', '/Foodiesex.jpg'],
            ['Families', '/Familiesex.jpg'],
            ['History Buffs', '/Historyex.jpg'],
            ['Foodies', '/Foodiesex.jpg'],
            ['Families', '/Familiesex.jpg'],
            ['History Buffs', '/Historyex.jpg'],
          ].map(([title, src]) => (
            <SwiperSlide className="!w-[202px]">
              <div className="relative m-3 flex flex-col flex-nowrap items-stretch justify-between overflow-hidden rounded-[10px] ">
                <div className=" relative overflow-hidden rounded-[20px] after:duration-300 hover:after:scale-110 ">
                  <img
                    src={src}
                    alt="review 1"
                    className="cursor-pointer duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 h-full w-full bg-black opacity-25" />
                </div>
                <h3 className="absolute bottom-[75%] right-[50%] w-full translate-x-1/2 translate-y-1/2 p-2 py-0 text-center text-[12px] font-semibold  text-[#fff]  lg:text-[10px]">
                  Sorrento for
                </h3>
                <div className="absolute bottom-[60%] right-[50%] flex   w-full translate-y-1/2 translate-x-1/2 flex-col items-start  justify-center gap-4 p-5 pr-2 md:pr-5 ">
                  <h3 className="Kostania w-full py-0 text-center text-[28px] text-base font-semibold leading-[28px]  text-[#fff] lg:text-[28px]">
                    {title}
                  </h3>
                </div>
                <h3 className="absolute bottom-[40%] right-[50%] w-full translate-x-1/2 translate-y-1/2 p-2 py-0 text-center text-[12px] font-semibold  text-[#fff]  lg:text-[10px]">
                  Home Dinners • Local Delicacies • Food Markets
                </h3>
                <div className="absolute bottom-[20%] right-[50%] translate-x-1/2 translate-y-1/2  rounded-[50px] border-2  py-[5px]  px-[20px] text-[#fff] duration-300 hover:bg-[#E71575] ">
                  Explore
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="available_ex swiper-button-prev !-left-1 !-mt-[14px]  !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
        <div className="available_ex swiper-button-next !-right-1 !-mt-[14px] !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
      </div>
    </div>
  </div>
);
export default EastExperiences;
