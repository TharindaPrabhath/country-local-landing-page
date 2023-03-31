import Image from 'next/image';
import { PrimaryNav } from '../../../utilities/types';
import ChevronIcon from '../../../../public/icons/chevron-right.svg';

interface WhatPopoverType {
  categoryMenu: PrimaryNav[];
}

const WhatPopover = ({ categoryMenu }: WhatPopoverType) => (
  <div>
    <div className="flex items-center justify-between pb-2">
      <h3 className="text-sm font-bold text-[#4B4B4B] md:text-base">
        Categories
      </h3>
      <span className="text-xs font-bold text-[#4B4B4B]">View All Courses</span>
    </div>
    <nav>
      <ul className="relative">
        {
          /* eslint operator-linebreak: "off" */
          categoryMenu &&
            categoryMenu.map((item) => (
              <li key={item.id} className="group w-1/3">
                <div
                  className={`flex cursor-pointer  items-center  border-r border-r-[#F1F1F1] py-1 sm:py-2 sm:pr-5 ${
                    item.active ? 'text-[#E71575]' : 'text-[#A8ABC1]'
                  } group-hover:text-[#E71575]`}
                >
                  <span className="svg_icon hidden w-5 sm:inline-block">
                    <item.icon />
                  </span>
                  <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold sm:ml-2 md:mx-3">
                    {item.title}
                  </p>
                  <i className="svg_icon hidden w-4 self-end justify-self-end sm:inline-block">
                    <ChevronIcon />
                  </i>
                </div>
                <ul
                  className={`absolute left-1/3 top-0 flex h-full w-2/3 flex-wrap content-start overflow-auto bg-white pl-1 sm:pl-6 md:pr-0 ${
                    item.active ? 'opacity-1 visible' : 'invisible opacity-0'
                  } group-hover:visible group-hover:opacity-100`}
                >
                  {item.submenuItems.map((subitem) => (
                    <li
                      key={`${subitem.title}_${subitem.id}`}
                      className="h-max w-full p-1 sm:w-1/2"
                    >
                      <button
                        type="button"
                        className="flex w-full justify-start rounded-[10px] border border-[#E8E8E8] text-left transition-shadow duration-200 ease-out hover:shadow-md"
                      >
                        <div className="flex shrink-0 items-center overflow-hidden rounded-lg p-[5px]">
                          <Image
                            src={subitem.imgUrl}
                            width={46}
                            height={46}
                            layout="fixed"
                            alt={subitem.title}
                          />
                        </div>
                        <div />
                        <div className="flex flex-grow flex-col self-stretch overflow-hidden px-1 py-[5px]">
                          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold leading-4 text-[#4B4B4B]">
                            {subitem.title}
                          </p>
                          <div className="mt-auto text-xs text-[#A8ABC1]">
                            {subitem.totalGraduates}
                            <span className="ml-[2px]">Graduates</span>
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))
        }
      </ul>
    </nav>
  </div>
);
export default WhatPopover;
