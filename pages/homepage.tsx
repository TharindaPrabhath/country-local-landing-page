import { useState } from 'react';

import Camping from '../src/components/HomePage/Camping';
import Consumised from '../src/components/HomePage/Consumised';
import DarkConcrete from '../src/components/HomePage/DarkConcrete';
import DestinationTheme from '../src/components/HomePage/DestinationTheme';
import EastExperiences from '../src/components/HomePage/EastExperiences';
import ExploreWithLocal from '../src/components/HomePage/ExploreWithLocal';
import Hero from '../src/components/HomePage/Hero';
import NewsLetter from '../src/components/HomePage/NewsLetter';
import PopularDestination from '../src/components/HomePage/PopularDestination';
import PopularExperience from '../src/components/HomePage/PopularExperience';
import TravelBag from '../src/components/HomePage/TravelBag';
import Video from '../src/components/HomePage/Video';
import Voluntour from '../src/components/HomePage/Voluntour';
import CookieConsent from '../src/components/common/popovers/CookieConsent';
import CookieSettings from '../src/components/common/popovers/CookieSettings';
import ChatPopup from '../src/components/common/popups/ChatPopup';
import ChatButton from '../src/components/common/ChatButton';

const HomePage = () => {
  const [openChatPopup, setOpenChatPopup] = useState(true);
  const [openCookieConsent, setOpenCookieConsent] = useState(true);
  const [openCookieSettings, setOpenCookieSettings] = useState(false);

  return (
    <div>
      <Hero />
      <div className="container">
        <ChatButton
          isOnline
          onClick={() => {
            setOpenChatPopup(true);
          }}
        />
        <ChatPopup
          open={openChatPopup}
          isOnline
          onSend={() => {}}
          onClose={() => {
            setOpenChatPopup(false);
          }}
        />
        <CookieConsent
          open={openCookieConsent}
          onSubmit={() => {
            setOpenCookieConsent(false);
            setOpenCookieSettings(true);
          }}
          onClose={() => {
            setOpenCookieConsent(false);
            setOpenCookieSettings(true);
          }}
        />
        <CookieSettings
          open={openCookieSettings}
          onAcceptAll={() => setOpenCookieSettings(false)}
          onSave={() => setOpenCookieSettings(true)}
        />
        <DestinationTheme />
        <EastExperiences />
        <PopularDestination />
        <PopularExperience />
        <ExploreWithLocal />
        <Camping />
        <Video />
        <DarkConcrete />
        <Voluntour />
        <Consumised />
        <TravelBag />
      </div>
      <NewsLetter />
    </div>
  );
};
export default HomePage;
