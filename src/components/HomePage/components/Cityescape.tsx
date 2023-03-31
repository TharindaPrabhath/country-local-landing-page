import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Cityescape = () => (
  <Swiper
    slidesPerView="auto"
    spaceBetween={0}
    freeMode
    modules={[FreeMode]}
    className="flex flex-wrap !pr-5 md:!pr-0"
  >
    {[
      ['Florence, Italy'],
      ['Florence, Italy'],
      ['Florence, Italy'],
      ['Florence, Italy'],
      ['Florence, Italy'],
      ['Florence, Italy'],
      ['Florence, Italy'],
    ].map(([title]) => (
      <SwiperSlide className="!w-[300px]">
        <div className="m-3 flex flex-col flex-nowrap items-stretch justify-between overflow-hidden rounded-[10px] ">
          <div className="relative overflow-hidden after:duration-300 hover:after:scale-110">
            <img
              className="  h-[181px] w-[300px] cursor-pointer rounded-2xl duration-300 hover:scale-105 "
              src="/Rectangle 14.jpg"
              alt="Rectangle"
            />
          </div>
          <div className="flex pt-[18px]">
            <div className="image pr-3 ">
              <img
                className="  h-[44px] w-[44px] rounded-full"
                src="/Ellipse 2.jpg"
                alt="Ellipse"
              />
            </div>
            <div className="letter">
              <div className="first flex">
                <div className="img pr-1">
                  <img
                    className="  h-[9px] w-[9px] rounded-full "
                    src="/image6.jpg"
                    alt="image6"
                  />
                </div>
                <div className="test text-[8px] text-[#808080]">{title}</div>
              </div>
              <div className="star flex">
                <div className="star">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-[#E71575]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-[#E71575]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-[#E71575]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-[#E71575]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-[#E71575]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div className="number pl-[7px] text-[12px] font-normal text-[#808080]">
                  (284)
                </div>
              </div>
              <div className="text-[10px]  text-[#222222]">
                Enjoy Florence with
                <span className="text-[#E71575]"> Olacorno </span>
              </div>
            </div>
          </div>
          <div className="down">
            <div className="first pt-3 text-sm font-bold text-[#222222]">
              City Escape: Tuscany Day Trip
            </div>
            <div className="full flex items-center pt-[11px]">
              <div className="first whitespace-pre  pr-[7px] text-[10px] font-bold">
                From $2,420/
                <span className="font-medium">person</span>
              </div>
              <div className="pr-[7px]">
                <img src="/clock.png" alt="clock" />
              </div>
              <div className=" whitespace-pre text-[8px] font-bold">
                7 hours • Day Trip
              </div>
              <div className="second" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);
export default Cityescape;
