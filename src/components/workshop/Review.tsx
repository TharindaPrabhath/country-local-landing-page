/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/no-array-index-key: "off" */
import { useState } from 'react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useViewport from '../../hooks/useViewport';
import ReviewPopup from '../common/popups/ReviewPopup';
import ReviewCard from '../common/cards/ReviewCard';

import 'swiper/css';
import 'swiper/css/navigation';

import StarIcon from '../../../public/icons/star.svg';
import DoubleStarIcon from '../../../public/icons/double-star.svg';

const Review = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useViewport();
  const handlePopupOpen = () => {
    setIsOpen(true);
  };
  const handlePopupClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative pt-11">
      <div className="container">
        <div className="pb-6 md:pb-12">
          <h2 className="pb-8 text-center text-2xl font-bold leading-tight md:text-[36px]">
            What people loved about{' '}
            <span className="purple_gradient_text">the course</span>
          </h2>

          <h4 className="mb-5 hidden items-center text-2xl font-semibold lg:flex">
            Ratings
            <span className="svg_icon ml-2 block w-[26px] text-transparent">
              <DoubleStarIcon />
            </span>
          </h4>

          <h4 className="flex items-center text-lg font-semibold lg:hidden">
            <span className="svg_icon mr-2 block w-5 text-black">
              <StarIcon />
            </span>
            4.70 · 132 reviews
          </h4>
          <div className="hidden flex-wrap items-center gap-10 lg:flex xl:gap-20">
            <div className="relative flex w-full max-w-[400px] items-center justify-between lg:max-w-[332px]">
              <div>
                <div className="flex items-center text-2xl font-bold text-[#FFCE31] sm:text-[36px]">
                  4.9
                  <div className="svg_icon ml-2 w-5 sm:w-[27px]">
                    <StarIcon />
                  </div>
                </div>
                <p className="pt-2 text-[8px] text-[#737373] sm:pt-2 sm:text-xs">
                  10.3K Verified Buyers
                </p>
              </div>
              <div className="absolute top-0 left-[110px] h-full w-[2px] bg-[#DCDCDC] sm:left-[185px] lg:left-[145px]" />
              <div className="w-full max-w-[160px]">
                <div className="mb-1 flex w-full items-center text-xs font-bold text-[#737373]">
                  <span className="block w-[10px] shrink-0">5</span>
                  <div className="relative mx-1 h-1 w-[120px] overflow-hidden rounded-full bg-[#D9D9D9]">
                    <div className="absolute left-0 top-0 h-full w-full bg-[#FFCE31]" />
                  </div>
                  <span className="block w-[25px] shrink-0">433</span>
                </div>
                <div className="mb-1 flex w-full items-center text-xs font-bold text-[#737373]">
                  <span className="block w-[10px] shrink-0">4</span>
                  <div className="relative mx-1 h-1 w-[120px] overflow-hidden rounded-full bg-[#D9D9D9]">
                    <div className="absolute left-0 top-0 h-full w-[30%] bg-[#FFCE31]" />
                  </div>
                  <span className="block w-[25px] shrink-0">200</span>
                </div>
                <div className="mb-1 flex w-full items-center text-xs font-bold text-[#737373]">
                  <span className="block w-[10px] shrink-0">3</span>
                  <div className="relative mx-1 h-1 w-[120px] overflow-hidden rounded-full bg-[#D9D9D9]">
                    <div className="absolute left-0 top-0 h-full w-[20%] bg-[#FFCE31]" />
                  </div>
                  <span className="block w-[25px] shrink-0">50</span>
                </div>
                <div className="mb-1 flex w-full items-center text-xs font-bold text-[#737373]">
                  <span className="block w-[10px] shrink-0">2</span>
                  <div className="relative mx-1 h-1 w-[120px] overflow-hidden rounded-full bg-[#D9D9D9]">
                    <div className="absolute left-0 top-0 h-full bg-[#FFCE31]" />
                  </div>
                  <span className="block w-[25px] shrink-0">0</span>
                </div>
                <div className="flex w-full items-center text-xs font-bold text-[#737373]">
                  <span className="block w-[10px] shrink-0">1</span>
                  <div className="relative mx-1 h-1 w-[120px] overflow-hidden rounded-full bg-[#D9D9D9]">
                    <div className="absolute left-0 top-0 h-full bg-[#FFCE31]" />
                  </div>
                  <span className="block w-[25px] shrink-0">0</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap sm:gap-7">
              <div className="w-[280px]">
                <div className="mb-3">
                  <p className="text-xs font-bold text-[#737373]">
                    Quality of activity
                  </p>
                  <div className="flex items-center">
                    <div className="relative h-[6px] w-[154px] overflow-hidden rounded-full bg-[#D9D9D9]">
                      <div className="absolute left-0 top-0 h-full w-[90%] bg-[#E71575]" />
                    </div>
                    <p className="ml-2 text-[11px] font-bold text-[#737373]">
                      As Expected (90%)
                    </p>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-xs font-bold text-[#737373]">
                    Overall Impression
                  </p>
                  <div className="flex items-center">
                    <div className="relative h-[6px] w-[154px] overflow-hidden rounded-full bg-[#D9D9D9]">
                      <div className="absolute left-0 top-0 h-full w-[87%] bg-[#E71575]" />
                    </div>
                    <p className="ml-2 text-[11px] font-bold text-[#737373]">
                      As Expected (87%)
                    </p>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-xs font-bold text-[#737373]">
                    Value for money
                  </p>
                  <div className="flex items-center">
                    <div className="relative h-[6px] w-[154px] overflow-hidden rounded-full bg-[#D9D9D9]">
                      <div className="absolute left-0 top-0 h-full w-[50%] bg-[#E71575]" />
                    </div>
                    <p className="ml-2 text-[11px] font-bold text-[#737373]">
                      As Expected (50%)
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[280px]">
                <div className="mb-3">
                  <p className="text-xs font-bold text-[#737373]">
                    Seller communication
                  </p>
                  <div className="flex items-center">
                    <div className="relative h-[6px] w-[154px] overflow-hidden rounded-full bg-[#D9D9D9]">
                      <div className="absolute left-0 top-0 h-full w-full bg-[#E71575]" />
                    </div>
                    <p className="ml-2 text-[11px] font-bold text-[#737373]">
                      As Expected (100%)
                    </p>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-xs font-bold text-[#737373]">
                    Would Recommended
                  </p>
                  <div className="flex items-center">
                    <div className="relative h-[6px] w-[154px] overflow-hidden rounded-full bg-[#D9D9D9]">
                      <div className="absolute left-0 top-0 h-full w-[60%] bg-[#E71575]" />
                    </div>
                    <p className="ml-2 text-[11px] font-bold text-[#737373]">
                      As Expected (60%)
                    </p>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="text-xs font-bold text-[#737373]">
                    Service as described
                  </p>
                  <div className="flex items-center">
                    <div className="relative h-[6px] w-[154px] overflow-hidden rounded-full bg-[#D9D9D9]">
                      <div className="absolute left-0 top-0 h-full w-[70%] bg-[#E71575]" />
                    </div>
                    <p className="ml-2 text-[11px] font-bold text-[#737373]">
                      As Expected (70%)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {width < 1064 ? (
            <div className="review_slider relative -mr-4 -ml-3 md:-mr-3">
              <Swiper
                freeMode
                modules={[FreeMode]}
                navigation={{
                  prevEl: '.review_slider .swiper-button-prev',
                  nextEl: '.review_slider .swiper-button-next',
                }}
                slidesPerView="auto"
                spaceBetween={0}
              >
                {[1, 2, 3, 4].map((item, index) => (
                  <SwiperSlide key={index} className="!w-[90%] md:!w-[85%]">
                    <div className="m-3">
                      <ReviewCard item={item} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="flex flex-wrap justify-between gap-y-5 pt-12">
              {[1, 2].map((item, index) => (
                <ReviewCard key={index} item={item} />
              ))}
            </div>
          )}
          <div className="pt-4 text-center lg:pt-8">
            <button
              type="button"
              onClick={handlePopupOpen}
              className="purple_gradient_bg h-[44px] w-[160px] rounded-lg py-1 px-2 text-xs font-bold uppercase text-white transition-shadow hover:shadow-lg"
            >
              VIEW ALL
            </button>
            <ReviewPopup status={isOpen} onClose={handlePopupClose} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;
