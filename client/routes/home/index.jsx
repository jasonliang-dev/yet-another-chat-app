import React from 'react';
import HomeActionButtons from './HomeActionButtons';
import DecoratedContainer from '#/components/decorated-container';
import chatImage from '#/assets/images/undraw_group_chat.svg';

function Home() {
  return (
    <DecoratedContainer>
      <div className="grid md:grid-cols-2">
        <div>
          <h1
            className="font-bold text-5xl"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            It&apos;s time to ditch Discord
          </h1>
          <p className="text-gray-700 text-xl">
            Simple and organized communication all in one place
          </p>
          <nav className="mt-4 whitespace-no-wrap">
            <HomeActionButtons />
          </nav>
        </div>
        <div>
          <img alt="People looking at devices" src={chatImage} />
        </div>
      </div>
    </DecoratedContainer>
  );
}

export default Home;
