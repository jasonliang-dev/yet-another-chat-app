import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { ChatContext } from '../reducer';
import { UserContext } from '#/Provider';

function SidebarChannelButton({ channel }) {
  const [state, dispatch] = React.useContext(ChatContext);
  const [user] = React.useContext(UserContext);

  const changeChannel = React.useCallback(
    () => dispatch({ type: 'change-channel', payload: { channel, user } }),
    [dispatch, user, channel],
  );

  return (
    <button
      className={`block w-full text-left p-1 pl-4 rounded-lg truncate font-bold ${
        state.currentChannel && state.currentChannel._id === channel._id
          ? 'text-teal-700 hover:text-teal-900 bg-teal-100'
          : 'hover:text-gray-900 hover:bg-gray-200'
      }`}
      type="button"
      onClick={state.fetchingChannel ? R.always() : changeChannel}
    >
      {channel.name}
    </button>
  );
}

SidebarChannelButton.propTypes = {
  channel: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default React.memo(SidebarChannelButton);
