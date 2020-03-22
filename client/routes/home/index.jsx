import React from 'react';
import HomeActionButtons from './HomeActionButtons';
import DecoratedContainer from '#/components/decorated-container';
import chatImage from '#/assets/images/undraw_group_chat.svg';

function Home() {
  return (
    <DecoratedContainer>
      <div className="container mx-auto pt-40 pb-20">
        <div className="flex flex-col items-center mx-auto px-12">
          <main className="flex flex-col items-center">
            <header>
              <h1
                className="font-bold text-5xl"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                It&apos;s time to ditch Discord
              </h1>
            </header>
            <p className="text-gray-700 text-xl">
              Simple and organized communication all in one place
            </p>
            <nav className="mt-4 whitespace-no-wrap">
              <HomeActionButtons />
            </nav>
          </main>
          <img
            className="my-20"
            style={{ width: 600 }}
            alt="People looking at devices"
            src={chatImage}
          />
        </div>
      </div>
    </DecoratedContainer>
  );
}

export default Home;
