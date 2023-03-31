import { StatesType } from '../../../utilities/types';
import ChevronIcon from '../../../../public/icons/chevron-right.svg';
import MapIcon from '../../../../public/icons/map-pin.svg';

interface WherePopoverType {
  stateItems: StatesType[];
}

const WherePopover = ({ stateItems }: WherePopoverType) => (
  <div>
    <div className="flex pb-2">
      <h3 className="w-1/3 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold leading-tight text-[#4B4B4B] md:text-base">
        Search by State
      </h3>
      <h3 className="pl-2 text-sm font-bold text-[#4B4B4B] sm:pl-6 md:text-base">
        Search by City
      </h3>
    </div>
    <nav>
      <ul className="relative">
        {
          /* eslint operator-linebreak: "off" */
          stateItems &&
            stateItems.map((item) => (
              <li key={item.id} className="group w-1/3">
                <div
                  className={`flex cursor-pointer  items-center  border-r border-r-[#F1F1F1] py-1 sm:py-2 sm:pr-5 ${
                    item.active ? 'text-[#E71575]' : 'text-[#A8ABC1]'
                  } group-hover:text-[#E71575]`}
                >
                  <span className="svg_icon hidden w-5 sm:inline-block">
                    <MapIcon />
                  </span>
                  <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold sm:ml-2 md:mx-3">
                    {item.title}
                  </p>
                  <i className="svg_icon hidden w-4 self-end justify-self-end sm:inline-block">
                    <ChevronIcon />
                  </i>
                </div>
                <div
                  className={`absolute left-1/3 top-0 flex h-full w-2/3 flex-wrap content-start gap-1 bg-white pt-1 pl-2 sm:gap-2 sm:pt-2 sm:pl-6 ${
                    item.active ? 'opacity-1 visible' : 'invisible opacity-0'
                  } group-hover:visible group-hover:opacity-100`}
                >
                  {item.cities.map((val) => (
                    <button
                      key={val}
                      type="button"
                      className="h-7 rounded border border-[#E71575] px-3 text-center text-xs font-semibold text-[#E71575] transition duration-200 ease-out hover:bg-[#E71575] hover:text-white md:h-[32px] md:rounded-md md:px-4"
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </li>
            ))
        }
      </ul>
    </nav>
  </div>
);
export default WherePopover;
