import React from 'react';
import { Link } from 'react-router-dom';
import Button from '#/components/button';
import RocketIcon from '#/icons/RocketIcon';
import FolderIcon from '#/icons/FolderIcon';
import EmotionHappyIcon from '#/icons/EmotionHappyIcon';
import HomeActionButtons from './HomeActionButtons';
import chatImage from '#/assets/images/undraw_group_chat.svg';
import dottedImage from '#/assets/images/300.png';

const dottedBackground = {
  backgroundImage: `url(${dottedImage})`,
};

const features = [
  {
    title: 'Convenient',
    description:
      'We use real time communication technology to help you stay connected with others.',
    icon: EmotionHappyIcon,
  },
  {
    title: 'Stay Organized',
    description:
    'Conversations are divided into channels, which helps members stay on topic.',
    icon: FolderIcon,
  },
  {
    title: 'Friction-less',
    description:
      'No account confirmation required. Just sign up and start chatting!',
    icon: RocketIcon,
  },
];

function Home() {
  return (
    <div className="relative mb-24">
      <div className="absolute z-0 w-32 mt-64 h-64" style={dottedBackground} />
      <div
        className="absolute z-0 w-8 mt-16 h-screen right-0"
        style={dottedBackground}
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:pt-24">
          <div className="lg:w-1/2 mt-16 flex flex-col items-center lg:items-start">
            <small className="font-bold text-sm text-gray-700 uppercase tracking-wider font-display">
              Stay connected
            </small>
            <h1 className="font-extrabold text-5xl leading-tight font-display text-center lg:text-left">
              It&apos;s time to{' '}
              <span className="text-teal-700">ditch Discord</span>
            </h1>
            <p className="text-gray-700 text-xl mt-2 text-center lg:text-left">
              Simple and organized communication all in one place.
            </p>
            <nav className="mt-6 whitespace-no-wrap">
              <HomeActionButtons />
            </nav>
          </div>
          <div className="lg:w-1/2 mt-12">
            <img
              alt="People looking at devices"
              src={chatImage}
              className="px-8 md:px-24 lg:px-0"
            />
          </div>
        </div>
        <div className="grid row-end-auto md:grid-cols-3 gap-8 mt-32">
          {features.map(item => (
            <div key={item.title} className="flex items-start">
              <div className="bg-teal-600 text-teal-100 p-3 rounded">
                <item.icon className="fill-current w-6 h-6" />
              </div>
              <div className="ml-4">
                <h2 className="font-bold text-xl">{item.title}</h2>
                <p className="mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-teal-800 text-teal-100 py-16 mt-24 flex flex-col items-center shadow-xl">
        <h1 className="font-extrabold text-center text-4xl leading-tight font-display mb-6">
          Start a new way of communication
        </h1>
        <Link to="/register">
          <Button
            className="border-2 border-teal-200 hover:border-white hover:text-teal-800 hover:bg-white uppercase text-sm"
            overrideColors
            variant="big"
          >
            Sign up today
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
