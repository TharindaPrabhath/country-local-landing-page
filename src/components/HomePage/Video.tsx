const Video = () => (
  <div className="font-bold lg:p-[60px]">
    <div className="flex justify-between">
      <div className="whitespace-pre text-[24px] lg:text-[38px]">
        Why
        <span className="purple_gradient_text_deep"> Country Locals</span>
      </div>
    </div>
    <p className="pb-[32px] font-medium  sm:text-[12px] md:text-[22px]">
      Enjoy a city like a local
    </p>
    <div className="video">
      <video
        className="relative w-full rounded-[16px] md:rounded-[30px]"
        src="https://embed-ssl.wistia.com/deliveries/262fd8e350169efeecfd5bfce33b7997f5a8fec0.bin"
        autoPlay
        controls
      >
        <track src="captions_en.vtt" kind="captions" label="english_captions" />
      </video>
    </div>
  </div>
);
export default Video;
