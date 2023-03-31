import { Fragment, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Popover } from '@headlessui/react';
import { PrimaryNav, StatesType } from '../../utilities/types';
import WhatPopover from './popovers/What';
import WherePopover from './popovers/Where';
import WhenPopover from './popovers/When';
import WhoPopover from './popovers/Who';

import CloseIcon from '../../../public/icons/xmark.svg';
import SearchIcon from '../../../public/icons/search.svg';

interface HiddenMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: { id: number; title: string; active: boolean }[];
  onNavChange: (id: number) => void;
  categoryMenu: PrimaryNav[];
  states: StatesType[];
  adults: number;
  child: number;
  infants: number;
  onIncrement: (type: string) => void;
  onDecrement: (type: string) => void;
  when: Date | null;
  onDateChange: (date: Date | null) => void;
}

const HiddenMobileMenu = ({
  isOpen,
  onClose,
  menuItems,
  onNavChange,
  categoryMenu,
  states,
  adults,
  child,
  infants,
  onIncrement,
  onDecrement,
  when,
  onDateChange,
}: HiddenMobileMenuProps) => {
  const whatRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    whatRef.current?.click();
  }, [isOpen]);

  return (
    <div
      className={`hidden_menu fixed left-0 top-0 z-50 h-full w-full origin-bottom transform bg-[#FBFBFB] transition duration-200 ease-in ${
        isOpen
          ? 'pointer-events-auto visible opacity-100'
          : 'pointer-events-none invisible translate-y-10 opacity-0'
      }`}
    >
      <div
        className="overflow-y-auto px-[15px] pb-24"
        style={{
          height: process.browser ? window.innerHeight : 'auto',
        }}
      >
        <div className="w-full">
          <div className="mt-[10px] w-[90%] overflow-auto py-1">
            <div className="flex w-[480px] items-center justify-center gap-[15px]">
              {menuItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => {
                    onNavChange(item.id);
                  }}
                  className={`focus-green after:duration-400 relative py-2 text-sm after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:transform after:bg-black after:transition-all hover:text-black hover:after:scale-100 ${
                    item.active
                      ? 'font-semibold text-black after:scale-100'
                      : 'text-[#4B4B4B] after:scale-0'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full border border-[#ddd] bg-white shadow-md"
          >
            <div className="svg_icon w-[10px]">
              <CloseIcon />
            </div>
          </button>
        </div>

        <Popover as={Fragment}>
          {({ open }) => (
            <div
              className={`mt-4 overflow-hidden rounded-2xl bg-white ${
                open ? 'shadow-pop' : 'shadow-small'
              }`}
            >
              <Popover.Button
                ref={whatRef}
                className="relative flex h-[56px] w-full items-center justify-between rounded-2xl px-6 py-2"
              >
                {open ? (
                  <p className="pt-3 text-[22px] font-bold">Select Category</p>
                ) : (
                  <>
                    <span className="block text-sm font-semibold text-[#444]">
                      What
                    </span>
                    <span className="block text-xs text-[#797979]">
                      Find Category Courses
                    </span>
                  </>
                )}
              </Popover.Button>
              <AnimatePresence>
                {open && (
                  <Popover.Panel
                    static
                    as={motion.div}
                    className="w-full origin-top-right bg-white px-6 pt-3 pb-6 shadow-lg lg:rounded-[30px] lg:border lg:border-[#DDDDDD]"
                  >
                    <WhatPopover categoryMenu={categoryMenu} />
                  </Popover.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Popover>

        <Popover as={Fragment}>
          {({ open }) => (
            <div
              className={`mt-4 overflow-hidden rounded-2xl bg-white ${
                open ? 'shadow-pop' : 'shadow-small'
              }`}
            >
              <Popover.Button className="relative flex h-[56px] w-full items-center justify-between rounded-2xl px-6 py-2">
                {open ? (
                  <p className="pt-3 text-[22px] font-bold">
                    Select Destination
                  </p>
                ) : (
                  <>
                    <span className="block text-sm font-semibold text-[#444]">
                      Where
                    </span>
                    <span className="block text-xs text-[#797979]">
                      Search Destinations
                    </span>
                  </>
                )}
              </Popover.Button>
              <AnimatePresence>
                {open && (
                  <Popover.Panel
                    static
                    as={motion.div}
                    className="w-full origin-top-right bg-white px-6 pb-6 pt-3 shadow-lg lg:rounded-[30px] lg:border lg:border-[#DDDDDD]"
                  >
                    <WherePopover stateItems={states} />
                  </Popover.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Popover>

        <Popover as={Fragment}>
          {({ open }) => (
            <div
              className={`mt-4 overflow-hidden rounded-2xl bg-white ${
                open ? 'shadow-pop' : 'shadow-small'
              }`}
            >
              <Popover.Button className="relative flex h-[56px] w-full items-center justify-between rounded-2xl px-6 py-2">
                {open ? (
                  <p className="pt-3 text-[22px] font-bold">
                    Check In Schedule
                  </p>
                ) : (
                  <>
                    <span className="block text-sm font-semibold text-[#444]">
                      Check In
                    </span>
                    <span className="block text-xs text-[#797979]">
                      Set your Schedule
                    </span>
                  </>
                )}
              </Popover.Button>
              <AnimatePresence>
                {open && (
                  <Popover.Panel
                    static
                    as={motion.div}
                    className="w-full origin-top-right bg-white px-6 pb-6 pt-3 shadow-lg lg:rounded-[30px] lg:border lg:border-[#DDDDDD]"
                  >
                    <WhenPopover when={when} onDateChange={onDateChange} />
                  </Popover.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Popover>

        <Popover as={Fragment}>
          {({ open }) => (
            <div
              className={`mt-4 overflow-hidden rounded-2xl bg-white ${
                open ? 'shadow-pop' : 'shadow-small'
              }`}
            >
              <Popover.Button className="relative flex h-[56px] w-full items-center justify-between rounded-2xl px-6 py-2">
                {open ? (
                  <p className="pt-3 text-[22px] font-bold">
                    Check Out Schedule
                  </p>
                ) : (
                  <>
                    <span className="block text-sm font-semibold text-[#444]">
                      Check Out
                    </span>
                    <span className="block text-xs text-[#797979]">
                      Set your Schedule
                    </span>
                  </>
                )}
              </Popover.Button>
              <AnimatePresence>
                {open && (
                  <Popover.Panel
                    static
                    as={motion.div}
                    className="w-full origin-top-right bg-white px-6 pb-6 pt-3 shadow-lg lg:rounded-[30px] lg:border lg:border-[#DDDDDD]"
                  >
                    <WhenPopover when={when} onDateChange={onDateChange} />
                  </Popover.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Popover>

        <Popover as={Fragment}>
          {({ open }) => (
            <div
              className={`mt-4 overflow-hidden rounded-2xl bg-white ${
                open ? 'shadow-pop' : 'shadow-small'
              }`}
            >
              <Popover.Button className="relative flex h-[56px] w-full items-center justify-between rounded-2xl px-6 py-2">
                {open ? (
                  <p className="pt-3 text-[22px] font-bold">
                    Select Student Age
                  </p>
                ) : (
                  <>
                    <span className="block text-sm font-semibold text-[#444]">
                      Who
                    </span>
                    <span className="block text-xs text-[#797979]">
                      Student Age
                    </span>
                  </>
                )}
              </Popover.Button>
              <AnimatePresence>
                {open && (
                  <Popover.Panel
                    static
                    as={motion.div}
                    className="w-full origin-top-right bg-white px-6 pb-6 pt-3 shadow-lg lg:rounded-[30px] lg:border lg:border-[#DDDDDD]"
                  >
                    <WhoPopover
                      adults={adults}
                      child={child}
                      infants={infants}
                      onIncrement={onIncrement}
                      onDecrement={onDecrement}
                    />
                  </Popover.Panel>
                )}
              </AnimatePresence>
            </div>
          )}
        </Popover>

        <div className="absolute bottom-3 left-0 w-full px-[15px] text-center">
          <button
            type="submit"
            className="focus-green blue_btn flex w-full justify-center rounded-[5px] px-3 py-4 text-center font-bold text-white transition-shadow duration-300 ease-in-out hover:shadow-lg"
          >
            <div className="svg_icon mr-2 flex w-6 shrink-0 items-center justify-center text-transparent">
              <SearchIcon />
            </div>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HiddenMobileMenu;
