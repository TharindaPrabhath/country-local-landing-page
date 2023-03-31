/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint react/jsx-one-expression-per-line: "off" */
import { useContext, useState } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

interface CookieSettingsTypes {
  onAcceptAll: () => void;
  onSave: (options: CookieSettingsOptions) => void;
  open: boolean;
}

interface CookieSettingsOptions {
  marketing: boolean;
  preferences: boolean;
}

const CookieSettings = ({ onAcceptAll, onSave, open }: CookieSettingsTypes) => {
  const { width } = useViewport();
  const { setGlobalOverflow } = useContext(OverflowContext);
  const [options, setOptions] = useState<CookieSettingsOptions>({
    marketing: true,
    preferences: true,
  });

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          static
          as={motion.div}
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            },
            exit: { opacity: 0 },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          open={open}
          onClose={() => {}}
          className="fixed inset-0 z-50 md:flex md:items-center md:justify-center"
        >
          <Dialog.Overlay
            onClick={() => {
              if (width < 768) {
                setGlobalOverflow(false);
              }
            }}
            className="absolute top-0 left-0 h-full w-full bg-black opacity-40"
          />

          <Dialog.Panel
            as={motion.div}
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                },
              },
              exit: {
                opacity: 0,
                y: 100,
                transition: {
                  duration: 0.3,
                },
              },
            }}
            className="fixed bottom-0 z-10 w-full md:w-11/12 lg:relative lg:max-w-[540px]"
          >
            <div className="relative flex flex-col gap-8 overflow-hidden rounded bg-white px-6 py-10 md:rounded-lg md:shadow-xl">
              <div className=" items-left flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-black">
                  Cookie settings
                </h4>
                <p className="text-gray-600">
                  We use cookies, some of them are essential, others are
                  optional.{' '}
                  <span className="text-teal-500">
                    <Link href="/">
                      <a>Learn more</a>
                    </Link>
                  </span>
                </p>
                <div className="flex h-4 items-center justify-center border-b border-b-[#E8E8E8]" />
              </div>

              <div className=" items-left flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <h4 className="text-lg font-semibold text-black">
                    Strictly Necessary
                  </h4>

                  <label className="switch ml-auto">
                    <input type="checkbox" disabled />
                    <span className="slider round" />
                  </label>
                </div>

                <p className="text-gray-600">
                  These cookies are necessary for the website and can’t be
                  deactivated.
                </p>
              </div>

              <div className=" items-left flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <h4 className="text-lg font-semibold text-black">
                    Marketing & Analytics
                  </h4>

                  <label className="switch ml-auto">
                    <input
                      type="checkbox"
                      checked={options.marketing}
                      onChange={(e) => {
                        setOptions({ ...options, marketing: e.target.checked });
                      }}
                    />
                    <span className="slider round" />
                  </label>
                </div>

                <p className="text-gray-600">
                  These cookies can be set by our advertising partnes through
                  our websites.
                </p>
              </div>

              <div className=" items-left flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <h4 className="text-lg font-semibold text-black">
                    Preferences
                  </h4>

                  <label className="switch ml-auto">
                    <input
                      type="checkbox"
                      checked={options.preferences}
                      onChange={(e) => {
                        setOptions({
                          ...options,
                          preferences: e.target.checked,
                        });
                      }}
                    />
                    <span className="slider round" />
                  </label>
                </div>

                <p className="text-gray-600">
                  To individualize your content, we use tools that personalize
                  your web experience.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  className="relative z-[1] flex h-[46px] w-auto items-center rounded bg-teal-500 px-5 hover:bg-teal-400 lg:h-[56px] lg:px-10"
                  onClick={() => onAcceptAll()}
                >
                  <span className="block w-full text-sm font-semibold text-white lg:text-base">
                    Accept all cookies
                  </span>
                </button>
                <button
                  type="button"
                  className="relative z-[1] flex h-[46px] w-auto items-center rounded bg-gray-300 px-5 hover:bg-gray-200 lg:h-[56px] lg:px-10"
                  onClick={() => onSave(options)}
                >
                  <span className="block w-full text-sm font-semibold text-gray-600 lg:text-base">
                    Save settings
                  </span>
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
export default CookieSettings;
