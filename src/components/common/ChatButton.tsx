/* eslint-disable react/require-default-props */
/* eslint react/jsx-one-expression-per-line: "off" */
/* eslint react/no-array-index-key: "off" */
import Image from 'next/image';
import useViewport from '../../hooks/useViewport';

import 'swiper/css';
import 'swiper/css/navigation';

import ProfileImage from '../../../public/Ellipse 3.jpg';

interface ChatButtonProps {
  onClick: (values: any) => void;
  isOnline?: boolean;
}

const ChatButton = ({ isOnline = false, onClick }: ChatButtonProps) => {
  const { width } = useViewport();

  return (
    <button
      type="button"
      className="fixed right-10 bottom-5 z-50"
      onClick={onClick}
    >
      {width > 768 && (
        <div className="purple_gradient_bg_light flex flex-row items-center justify-between px-3 py-3 md:rounded-xl md:shadow-xl">
          <div className="flex flex-row items-center gap-2">
            <Image
              className="rounded-full"
              src={ProfileImage}
              alt="person profile image"
              width={50}
              height={50}
            />
            <div>
              <h2 className="font-semibold text-white">
                Message rifqiarkaanul
              </h2>
              <p className="text-sm font-normal text-gray-200">
                Away Avg. response time:{' '}
                <span className="font-semibold">11 Hrs</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {width <= 768 && (
        <div className="flex flex-row items-center justify-between rounded-full bg-white px-4 py-2 md:rounded-xl md:shadow-xl">
          <div className="flex flex-row items-center gap-4">
            <div className="relative">
              <Image
                className="rounded-full"
                src={ProfileImage}
                alt="person profile image"
                width={50}
                height={50}
              />
              {isOnline && (
                <div className="absolute bottom-2 right-1 h-3 w-3 rounded-full bg-green-500" />
              )}
            </div>

            <h2 className="font-semibold">Chat</h2>
          </div>
        </div>
      )}
    </button>
  );
};
export default ChatButton;
