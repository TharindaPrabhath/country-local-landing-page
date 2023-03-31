/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/require-default-props: "off" */
import { Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PopularExperience = () => (
  <div className="relative pb-3 lg:pb-14">
    <div className="lg:px-[60px]">
      <h3 className="py-[10px] text-[24px] font-bold text-black lg:text-[38px]">
        Popular <span className="purple_gradient_text_deep ">Experiences</span>
      </h3>

      <div className="relative -mr-5 -ml-2 mt-3 md:-mr-3 md:-ml-3">
        <Swiper
          slidesPerView="auto"
          spaceBetween={0}
          freeMode
          modules={[Navigation, FreeMode]}
          navigation={{
            prevEl: '.available_PopEx.swiper-button-prev',
            nextEl: '.available_PopEx.swiper-button-next',
          }}
          className="flex  flex-wrap !pr-5 md:!pr-0"
        >
          {[
            ['/PoppularExperiences.jpg'],
            ['/PoppularExperiences.jpg'],
            ['/PoppularExperiences.jpg'],
            ['/PoppularExperiences.jpg'],
            ['/PoppularExperiences.jpg'],
            ['/PoppularExperiences.jpg'],
            ['/PoppularExperiences.jpg'],
          ].map(([src]) => (
            <SwiperSlide className="  !h-[277px] !w-[425px] rounded-[20px]">
              <div className="relative ml-3 flex !h-[277px] flex-col flex-nowrap items-stretch justify-between overflow-hidden rounded-[20px] shadow">
                <div>
                  <img className=" rounded-[20px] " src={src} alt="review 1" />
                  <div className="absolute bottom-[7px] left-0 h-[277px] w-full rounded-[20px] bg-black opacity-25" />
                </div>
                <div className="absolute left-[25px] top-[20px] flex flex-col items-start">
                  <div className="test text-[8px] font-bold text-[#fff]">
                    FLORENCE
                  </div>
                  <div className="flex items-center ">
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3 text-[#fff]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3 text-[#fff]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3 text-[#fff]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3 text-[#fff]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3 text-[#fff]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div className="number pl-[7px] text-[12px] font-bold text-[#fff]">
                      (284)
                    </div>
                  </div>
                </div>
                <div className="letter absolute bottom-[50%]  right-[45%] flex   w-full translate-y-1/2 translate-x-1/2">
                  <h3 className="w-[250px] py-0 text-start text-[28px] text-base font-semibold leading-[28px]  text-[#fff] lg:text-[28px]">
                    The 10 Tastings of Florence
                  </h3>
                </div>
                <div className="absolute bottom-[55%] right-[50%] flex   w-full translate-y-1/2 translate-x-1/2 flex-col items-start  justify-center gap-4 p-5 pr-2 md:pr-5 ">
                  <div className=" flex pt-[18px]">
                    <div className="image absolute bottom-[-100%] left-[5%] translate-y-1/2 translate-x-1/2  pr-3">
                      <img
                        className="  h-[44px] w-[44px] rounded-full"
                        src="/Ellipse 2.jpg"
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
                      {' '}
                      Choose one of our 9 local guides
                    </h3>
                    <div className="absolute bottom-[-100%] right-[20%] w-[100px]  translate-y-1/2 translate-x-1/2  rounded-[50px] border-2 bg-gray-500/25 py-[5px]  px-[20px] text-[#fff] duration-300 hover:bg-[#E71575]">
                      Explore
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="available_PopEx swiper-button-prev !-left-1 !-mt-[14px]  !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
        <div className="available_PopEx swiper-button-next !-right-1 !-mt-[14px] !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
      </div>
    </div>
  </div>
);
export default PopularExperience;
