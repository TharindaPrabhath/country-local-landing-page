/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/require-default-props: "off" */
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DestinationTheme = () => (
  <div className="relative ">
    <div className="pt-[20px] lg:px-[60px]">
      <h3 className="text-[24px] font-bold text-black lg:text-[38px]">
        Choose Destination By
        <span className="purple_gradient_text_deep "> Theme</span>
      </h3>
      <div className="relative -mr-5 -ml-2 mt-3 md:-mr-3 md:-ml-3">
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          freeMode
          modules={[Navigation, FreeMode]}
          navigation={{
            prevEl: '.available_dates.swiper-button-prev',
            nextEl: '.available_dates.swiper-button-next',
          }}
          className="flex flex-wrap !pr-5 md:!pr-0"
        >
          {[
            ['Honeymoon', '16+ destinations', '/HoneymoonTheme.jpg'],
            ['Family', '16+ destinations', '/FamillyTheme.jpg'],
            ['Friends/Group', '16+ destinations', '/FriendsGroupTheme.jpg'],
            ['Solo', '16+ destinations', '/SoloTheme.jpg'],
            ['Adventure', '16+ destinations', '/AdventureTheme.jpg'],
            ['Nature', '16+ destinations', '/NatureTheme.jpg'],
            ['Village Tourism', '16+ destinations', '/VillageTheme.jpg'],
            ['Religious', '16+ destinations', '/ReligiousTheme.jpg'],
            ['wildlife', '16+ destinations', '/WildlifeTheme.jpg'],
            [
              'Water Activities',
              '16+ destinations',
              '/waterActivitiesTheme.jpg',
            ],
            ['Camping', '16+ destinations', '/campingTheme.jpg'],
          ].map(([title, subtitle, src]) => (
            <SwiperSlide className="!w-[202px] ">
              <div className="m-3 flex flex-col flex-nowrap items-stretch justify-between overflow-hidden rounded-[10px]">
                <div className="relative overflow-hidden after:duration-300 hover:after:scale-110">
                  <img
                    className=" cursor-pointer rounded-[20px] duration-300 hover:scale-105 "
                    src={src}
                    alt="review 1"
                  />
                </div>
                <div className=" flex flex-col items-start  justify-center p-5 pr-2 md:pr-5">
                  <h3 className="py-0 text-base font-semibold text-[#222]">
                    {title}
                  </h3>
                  <h4 className="mb-4 text-[12px] font-medium">{subtitle}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="available_dates swiper-button-prev !-left-1 !-mt-[14px]  !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
        <div className="available_dates swiper-button-next !-right-1 !-mt-[14px] !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
      </div>
    </div>
  </div>
);
export default DestinationTheme;
