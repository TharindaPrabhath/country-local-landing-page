/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint react/jsx-one-expression-per-line: "off" */
import { useContext, useState, useRef } from 'react';
import { Dialog, Menu } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import EmojiPicker from 'emoji-picker-react';
import { OverflowContext } from '../../../context/overflowContext';
import useViewport from '../../../hooks/useViewport';

import CloseCircleIcon from '../../../../public/icons/close-circle.svg';
import HappyEmojiIcon from '../../../../public/icons/happy-emoji.svg';
import AttachCircleIcon from '../../../../public/icons/attach-circle.svg';
import SendIcon from '../../../../public/icons/send.svg';
import ProfileImage from '../../../../public/other-service-profile.jpg';
import ThreeDotsIcon from '../../../../public/icons/three-dots.png';

const MessageBubble = ({ message }: { message: Message }) => (
  <div>
    {message.text && (
      <p className="w-fit  rounded-lg border-2 border-gray-200 p-3 first:rounded-tl-none first:rounded-bl-2xl last:rounded-tl-2xl last:rounded-bl-none">
        {message.text}
      </p>
    )}

    {message.image && (
      <Image
        src={message.image}
        alt="Message image"
        objectFit="contain"
        width={150}
        height={150}
      />
    )}
  </div>
);

interface ChatPopupTypes {
  onSend: () => void;
  onClose: (e: any) => void;
  open: boolean;
  isOnline: boolean;
}

interface Message {
  text: string;
  image?: any;
}

const ChatPopup = ({ onSend, onClose, open, isOnline }: ChatPopupTypes) => {
  const { width } = useViewport();
  const { setGlobalOverflow } = useContext<any>(OverflowContext);
  const fileBrowserRef = useRef<any>();
  const [message, setMessage] = useState<Message>({
    text: '',
  });
  const [messages, setMessages] = useState<Message[]>([
    { text: '👋 Hey can you help me with this...' },
    { text: 'Can you train me on..' },
  ]);
  const [showWarning, setShowWarning] = useState(false);
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  const isMobile = width < 720;

  const handleSendMessage = (message: Message) => {
    if (!message.text && !message.image) return;
    if (message.text.length < 40 && !isMobile) {
      setShowWarning(true);
      return;
    }
    setShowWarning(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    message.text && setMessages([...messages, { text: message.text }]);
    setMessage({ text: '' });
    onSend();
  };

  const getMessages = () => {
    const out = [];
    // eslint-disable-next-line for-direction, no-plusplus
    for (let i = messages.length - 1; i >= 0; i--) {
      out.push(messages[i]);
    }
    return out;
  };

  const handleFileChange = (e: any) => {
    const { files } = e.target;
    if (files.length === 0) return;
    const { type } = files[0];
    if (type.includes('image')) {
      setMessages([
        ...messages,
        { text: '', image: URL.createObjectURL(files[0]) },
      ]);
    }
  };

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
          className="h:screen fixed inset-0 z-50 md:flex md:items-center md:justify-center"
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
            className="h:screen fixed top-0 bottom-0 flex w-full flex-col justify-between bg-white md:w-11/12 md:rounded-t-xl md:rounded-b-none md:shadow-xl lg:relative lg:max-w-[540px]"
          >
            <div className="purple_gradient_bg_light flex flex-row items-center justify-between px-6 py-5 md:rounded-t-xl md:rounded-b-none md:shadow-xl">
              <div className="flex flex-row items-center gap-2">
                <div className="relative h-[52px] min-w-fit overflow-hidden rounded-full border-2 border-solid border-blue-500">
                  <Image
                    className="w-50 h-50 rounded-full"
                    src={ProfileImage}
                    alt="Person profile image"
                    width={50}
                    height={50}
                    // layout="fill"
                    objectFit="cover"
                  />
                </div>
                {isOnline && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500" />
                )}

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

              <div className="flex flex-row items-center gap-4">
                <Menu as="div" className="relative">
                  <Menu.Button className="flex h-[50px] w-[50px] items-center justify-center gap-3 rounded-full shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg focus-visible:rounded-full focus-visible:ring-offset-0">
                    <Image
                      className="rounded-full"
                      src={ThreeDotsIcon}
                      alt="Three dots for vertical menu"
                      width={20}
                      height={20}
                      objectFit="contain"
                    />
                  </Menu.Button>

                  <Menu.Items className="focus-green absolute top-14 w-[220px] rounded-lg bg-white py-2 shadow-spread">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`block rounded-md px-5 py-[9px] text-left text-sm text-[#515151] ${
                            active && 'bg-[#f0efef]'
                          }`}
                          href="/login"
                        >
                          Archive
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`block rounded-md px-5 py-[9px] text-left text-sm text-[#515151] ${
                            active && 'bg-[#f0efef]'
                          }`}
                          href="/sign-up"
                        >
                          Block user
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                <button
                  className="svg_icon inline-block w-[32px] text-white md:w-[44px]"
                  type="button"
                  onClick={onClose}
                >
                  <CloseCircleIcon />
                </button>
              </div>
            </div>

            {!isMobile && (
              <textarea
                className="w-full p-4 outline-none"
                rows={5}
                value={message.text}
                placeholder="Type Your Message Here"
                onChange={(e) => setMessage({ text: e.target.value })}
              />
            )}

            {/* <div className="h-full bg-white" /> */}
            <div className="bg-white">
              <div className="p-4">
                <ul className="mt-4 flex h-96 flex-col-reverse gap-2 overflow-auto py-4">
                  {getMessages().map((message) => (
                    <MessageBubble message={message} />
                  ))}
                </ul>
              </div>
              {isMobile || showWarning ? (
                <div className="flex flex-row items-center justify-between px-4 py-2 text-sm text-gray-500">
                  <p>Use at least 40 characters</p>
                  <p>{message.text.length}/2500</p>
                </div>
              ) : (
                <></>
              )}
              {isMobile && (
                <textarea
                  className="h-fit w-full resize-y break-all px-4 py-2 outline-none"
                  // rows={3}
                  value={message.text}
                  placeholder="Type Your Message Here"
                  onChange={(e) => setMessage({ text: e.target.value })}
                />
              )}
              <div className="flex flex-row items-center justify-between bg-gray-100 p-4 md:rounded-b-xl">
                <div className="relative flex flex-row items-center gap-4">
                  <button
                    type="button"
                    className="w-[24px]"
                    onClick={() => setOpenEmojiPicker(true)}
                  >
                    <HappyEmojiIcon />
                  </button>
                  {openEmojiPicker && (
                    <div className="absolute bottom-5 left-2">
                      <EmojiPicker
                        lazyLoadEmojis
                        onEmojiClick={(e) => {
                          setMessage({ text: message.text + e.emoji });
                          setOpenEmojiPicker(false);
                        }}
                      />
                    </div>
                  )}

                  <input
                    ref={fileBrowserRef}
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    className="w-[24px]"
                    onClick={() => {
                      fileBrowserRef.current.click();
                    }}
                  >
                    <AttachCircleIcon />
                  </button>
                </div>
                <button
                  className="purple_gradient_bg_light flex flex-row items-center gap-2 rounded py-2 px-4 text-white"
                  type="button"
                  onClick={() => {
                    handleSendMessage(message);
                  }}
                >
                  Send
                  <div className="w-[15px] md:w-[24px]">
                    <SendIcon />
                  </div>
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
export default ChatPopup;
