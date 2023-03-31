import { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';

const Hero = () => (
  <div>
    <div className="relative">
      <Swiper
        spaceBetween={0}
        effect="fade"
        navigation={{
          prevEl: '.available_Hero.swiper-button-prev',
          nextEl: '.available_Hero.swiper-button-next',
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="object-position:left min-h-[740px] w-[full] object-cover lg:h-screen lg:w-screen"
            src="/tribehero.png"
            alt="list-page-slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-position:left min-h-[740px] w-[full] object-cover lg:h-screen lg:w-screen"
            src="/plan-fullsize-4.jpg"
            alt="plan-fullsize-4"
          />
        </SwiperSlide>
      </Swiper>

      <div className="relative">
        <div className="absolute bottom-20 z-50 flex w-full flex-col p-8 ">
          <h1 className=" font-bold text-[#fff] sm:text-left md:text-[36px] md:leading-snug lg:text-center lg:text-[64px]">
            Support Local communities
          </h1>
          <p className=" font-normal text-[#fff] sm:text-left md:pb-6 md:text-[20px] md:leading-snug lg:text-center lg:text-[32px]">
            you get better experiences, they get a better life
          </p>
          <div className="w-full2 absolute bottom-[0%] right-[50%] translate-x-1/2 translate-y-1/2 rounded-[50px] border bg-white p-3 text-[#E71575]">
            <svg
              width="20"
              height="49"
              viewBox="0 0 20 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.11612 47.8839C9.60427 48.372 10.3957 48.372 10.8839 47.8839L18.8388 39.9289C19.327 39.4408 19.327 38.6493 18.8388 38.1612C18.3507 37.673 17.5592 37.673 17.0711 38.1612L10 45.2322L2.92893 38.1612C2.44078 37.673 1.64932 37.673 1.16117 38.1612C0.673011 38.6493 0.673012 39.4408 1.16117 39.9289L9.11612 47.8839ZM11.25 2C11.25 1.30964 10.6904 0.75 10 0.75C9.30964 0.75 8.75 1.30964 8.75 2L11.25 2ZM11.25 47L11.25 2L8.75 2L8.75 47L11.25 47Z"
                fill="#E71575"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="available_Hero swiper-button-prev !-left-1 !-mt-[14px]  !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
    <div className="available_Hero swiper-button-next !-right-1 !-mt-[14px] !hidden !h-[34px] !w-[34px] rounded-full border border-[#ddd] bg-white !text-[#000] shadow-lg after:!text-xs md:!flex" />
    <div className="min-h-[440px] rounded-b-[1rem]  bg-gradient-to-r from-fuchsia-500 to-violet-500 p-8 shadow-lg shadow-fuchsia-500/50 md:rounded-b-[3rem] xl:rounded-b-[5rem]">
      <h1 className="max-w-[670px] font-bold text-[#fff] sm:text-left md:pb-6 md:text-[20px] md:leading-snug lg:text-[38px]">
        With Country Locals experiences are always
      </h1>
      <div className="flex flex-wrap items-center justify-center backdrop-blur-[80px]">
        <div className="m-3 flex flex-col flex-nowrap justify-center gap-2 overflow-hidden rounded-[22px] border border-white bg-transparent lg:flex-row">
          <div className="flex">
            <div className="relative flex  min-w-[45%]  overflow-hidden rounded-[22px] after:duration-300 hover:after:scale-110">
              <img
                src="/firsthero.jpg"
                alt="review 1"
                className="min-w-[100%] cursor-pointer object-cover duration-300 hover:scale-105 sm:max-w-[128px]"
              />
            </div>
            <div className="flex max-w-[450px] flex-col justify-center gap-2 self-center p-5 pb-2 pr-2  md:min-h-[250px] md:pr-5">
              <h3 className="text-[14px] font-bold leading-tight text-[#fff]  md:text-[22px]">
                1 | Alaways private & personal
              </h3>
              <h4 className="text-[12px] font-thin leading-snug text-[#fff] md:text-[18px]">
                No strangers,just you. Fully costomize your trip to your needs
              </h4>
            </div>
          </div>
          <div className="flex flex-row-reverse lg:flex-row">
            <div className="relative flex  min-w-[45%]  overflow-hidden rounded-[22px] after:duration-300 hover:after:scale-110">
              <img
                src="/secondhero.jpg"
                alt="review 1"
                className="min-w-[100%] cursor-pointer object-cover duration-300 hover:scale-105 sm:max-w-[128px]"
              />
            </div>
            <div className="flex max-w-[450px] flex-col justify-center gap-2 self-center p-5 pb-2 pr-2 md:min-h-[250px] md:pr-5">
              <h3 className="text-[14px] font-bold leading-tight text-[#fff] md:text-[22px]">
                2 | A Guided by local exprtts
              </h3>
              <h4 className="text-[12px] font-thin leading-snug text-[#fff] md:text-[18px]">
                From historical facts to the most up-to-date health regulations.
              </h4>
            </div>
          </div>
          <div className="flex ">
            <div className="relative flex  min-w-[45%]  overflow-hidden rounded-[22px] after:duration-300 hover:after:scale-110">
              <img
                src="/thirdhero.jpg"
                alt="review 1"
                className="min-w-[100%] cursor-pointer object-cover duration-300 hover:scale-105 sm:max-w-[128px]"
              />
            </div>
            <div className="flex max-w-[450px] flex-col justify-center gap-2 self-center p-5 pb-2 pr-2 md:min-h-[250px] md:pr-5">
              <h3 className="text-[14px] font-bold leading-tight text-[#fff] md:text-[22px]">
                3 | Without crowds
              </h3>
              <h4 className="text-[12px] font-thin leading-snug text-[#fff] md:text-[18px]">
                Experiences designed to take away from the crowds towards
                authentic local spots.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Hero;
