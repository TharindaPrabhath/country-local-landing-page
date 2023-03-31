/* eslint react/jsx-one-expression-per-line: "off" */
import { useContext } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

import CookieIcon from '../../../../public/icons/cookie.svg';

interface CookieConsentTypes {
  onSubmit: () => void;
  onClose: () => void;
  open: boolean;
}

const CookieConsent = ({ onSubmit, onClose, open }: CookieConsentTypes) => {
  const { width } = useViewport();
  const { setGlobalOverflow } = useContext(OverflowContext);

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
          onClose={onClose}
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
            className="fixed bottom-0 z-10 w-full md:w-11/12 lg:relative lg:max-w-[780px]"
          >
            <div className="relative overflow-hidden rounded bg-teal-500 px-6 py-10 md:rounded-lg md:shadow-xl">
              <div className="mx-auto flex w-fit flex-row items-center gap-2">
                <div className="svg_icon w-6 text-black">
                  <CookieIcon />
                </div>
                <h4 className="text-center text-lg font-semibold text-black">
                  HOW MENTOR OCEAN USES COOKIES
                </h4>
              </div>
              <div
                className="custom_scrollbar mt-4 overflow-y-auto px-6 pb-6 pt-5 md:max-h-[90vh]"
                style={{
                  height:
                    width < 1064 && typeof window !== 'undefined'
                      ? window.innerHeight - 70
                      : 'auto',
                }}
              >
                <p className="text-center font-normal text-zinc-800">
                  We use cookies that help us provide you with the best possible
                  shoping experience with us. For example, they allow us to
                  connect to social networks, display personalised content, as
                  well as analyse and improve the operation of our website
                </p>
              </div>
              <div className="mx-auto mt-4 flex w-fit flex-row items-center gap-2">
                <button
                  type="button"
                  className="relative z-[1] flex h-[46px] w-auto items-center rounded-full bg-black px-5 lg:h-[56px] lg:px-10"
                  onClick={onSubmit}
                >
                  <span className="block w-full text-sm font-semibold text-white lg:text-base">
                    Accept All
                  </span>
                </button>
                <button
                  type="button"
                  className="relative z-[1] flex h-[46px] w-auto items-center rounded-full bg-white px-5 lg:h-[56px] lg:px-10"
                  onClick={onClose}
                >
                  <span className="block w-full text-sm font-semibold text-black lg:text-base">
                    Let me Choose
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
export default CookieConsent;
