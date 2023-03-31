/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/require-default-props: "off" */
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PopularDestination = () => (
  <div className="relative pb-3 lg:pb-14">
    <div className="lg:px-[60px]">
      <h3 className=" text-[24px] font-bold text-black lg:text-[38px]">
        Popular <span className="purple_gradient_text_deep ">Destination</span>
      </h3>

      <div className="relative -mr-5 -ml-2 mt-3 md:-mr-3 md:-ml-3">
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          freeMode
          modules={[Navigation, FreeMode]}
          navigation={{
            prevEl: '.available_Pop.swiper-button-prev',
            nextEl: '.available_Pop.swiper-button-next',
          }}
          className="flex flex-wrap !pr-5 md:!pr-0"
        >
          {[
            ['/PoppularDestination.jpg'],
            ['/PoppularDestination.jpg'],
            ['/PoppularDestination.jpg'],
            ['/PoppularDestination.jpg'],
            ['/PoppularDestination.jpg'],
            ['/PoppularDestination.jpg'],
            ['/PoppularDestination.jpg'],
          ].map(([src]) => (
            <SwiperSlide className="!h-[277px] !w-[425px] rounded-[20px]">
              <div className="relative m-3 flex !h-[277px]  flex-col flex-nowrap items-stretch justify-between overflow-hidden  rounded-[20px]">
                <div className=" overflow-hidden after:duration-300 hover:after:scale-110">
                  <img
                    className=" cursor-pointer rounded-[20px] duration-300 hover:scale-105 "
                    src={src}
                    alt="review 1"
                  />
                  <div className="absolute bottom-[15px] left-0 h-[277px] w-full rounded-[20px] bg-black opacity-25" />
                </div>

                <div className="letter absolute bottom-[50%] right-[45%] flex   w-full translate-y-1/2 translate-x-1/2">
                  <h3 className="w-[200px] py-0 text-start text-[28px] text-base font-semibold leading-[28px]  text-[#fff] lg:text-[28px]">
                    Enjoy Our Lisbon
                  </h3>
                </div>
                <div className="absolute bottom-[55%] right-[50%] flex   w-full translate-y-1/2 translate-x-1/2 flex-col items-start  justify-center gap-4 p-5 pr-2 md:pr-5 ">
                  <div className=" flex pt-[18px]">
                    <div className="image absolute bottom-[-100%] left-[5%] translate-y-1/2 translate-x-1/2  pr-3">
                      <img
                        className="  h-[44px] w-[44px] rounded-full"
                        src="/Ellipse 3.jpg"
                        alt="Ellipse"
                      />
                    </div>
                    <div className="image absolute bottom-[-100%] left-[0%] translate-y-1/2 translate-x-1/2 pr-3">
                      <img
                        className="  h-[44px] w-[44px] rounded-full"
                        src="/Ellipse 2.jpg"
                        alt="Ellipse"
                      />
                    </div>
                    <h3 className=" absolute bottom-[-100%] left-[10%] w-[150px]  translate-y-1/2 translate-x-1/2 py-0 text-left text-[12px]  font-semibold  text-[#fff] lg:text-[12px]">
                      3+ tours and activities
                      <br />
                      Connect with 4+ locals
                    </h3>
                    <div className="absolute bottom-[-100%] right-[20%] translate-y-1/2 translate-x-1/2 rounded-[50px]  border-2 py-[5px] px-[20px] text-[#fff] duration-300 hover:bg-[#E71575]">
                      Explore
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="available_Pop swiper-button-prev !-left-1 !-mt-[14px]  !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
        <div className="available_Pop swiper-button-next !-right-1 !-mt-[14px] !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
      </div>
    </div>
  </div>
);
export default PopularDestination;
