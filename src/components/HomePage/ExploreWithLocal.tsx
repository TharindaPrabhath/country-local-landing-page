/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/require-default-props: "off" */
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ExploreWithLocal = () => (
  <div className="relative ">
    <div className="pt-[20px] lg:px-[60px]">
      <h3 className="text-[24px] font-bold text-black lg:text-[38px]">
        Explore
        <span className="purple_gradient_text_deep "> Withlocals</span>
      </h3>
      <p className="pb-[10px] font-medium  sm:text-[12px] lg:text-[22px]">
        All of our tours and activities are: • Private • Personalized • With the
        local of your choice
      </p>
      <div className="relative -mr-5 -ml-2 mt-3 md:-mr-3 md:-ml-3">
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          freeMode
          modules={[Navigation, FreeMode]}
          navigation={{
            prevEl: '.available_Explore.swiper-button-prev',
            nextEl: '.available_Explore.swiper-button-next',
          }}
          className="flex flex-wrap !pr-5 md:!pr-0"
        >
          {[
            ['Food Tours', '/FoodTours.jpg'],
            ['Walking Tour', '/WalkingTour.jpg'],
            ['Day Trips', '/DayTour.jpg'],
            ['Family Friendly', '/FamilyTour.jpg'],
            ['Bike Tour', '/BikeTour.jpg'],
            ['Night Tours', '/NightTour.jpg'],
            ['Day Trips', '/DayTour.jpg'],
            ['Family Friendly', '/FamilyTour.jpg'],
            ['Bike Tour', '/BikeTour.jpg'],
            ['Night Tours', '/NightTour.jpg'],
          ].map(([title, src]) => (
            <SwiperSlide className="!w-[202px] ">
              <div className="m-3 flex flex-col flex-nowrap items-stretch justify-between overflow-hidden rounded-[10px] shadow">
                <div className="relative overflow-hidden after:duration-300 hover:after:scale-110">
                  <img
                    src={src}
                    alt="review 1"
                    className="cursor-pointer duration-300 hover:scale-105"
                  />
                  <div className=" flex flex-col items-start  justify-center p-5 pr-2 md:pr-5">
                    <h3 className="py-0 text-base font-semibold text-[#222]">
                      {title}
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="available_Explore swiper-button-prev !-left-1 !-mt-[14px]  !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
        <div className="available_Explore swiper-button-next !-right-1 !-mt-[14px] !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
      </div>
    </div>
  </div>
);
export default ExploreWithLocal;
