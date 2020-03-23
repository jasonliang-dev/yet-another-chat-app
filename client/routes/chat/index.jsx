import React from 'react';
import { useHistory } from 'react-router-dom';
import ChatContent from './chat-content/ChatContent';
import ChatChannelSidebar from './sidebar/ChatChannelSidebar';
import chatReducer, { ChatContext, init } from './reducer';
import { UserContext } from '#/Provider';
import useEffectOnce from '#/hooks/useEffectOnce';

function Chat() {
  const [{ state, performEffect }, dispatch] = React.useReducer(
    chatReducer,
    undefined,
    init,
  );
  const history = useHistory();
  const [user] = React.useContext(UserContext);

  // subscribe to socket emit events
  useEffectOnce(() => {
    const { socket } = state;

    // handle chat messages
    socket.on('chat message', chatMessage =>
      dispatch({ type: 'recieve-message', payload: { chatMessage } }),
    );

    // handle "user is typing"
    socket.on('start typing', username =>
      dispatch({ type: 'add-user-typing', payload: { username } }),
    );

    // remove "user is typing"
    socket.on('stop typing', username =>
      dispatch({ type: 'remove-user-typing', payload: { username } }),
    );

    return socket.close.bind(socket);
  });

  // go to login page if user is logged out
  useEffectOnce(() => {
    if (!user) {
      history.replace('/login');
    }
  }, [history, user]);

  // perform side effect after state update
  React.useEffect(() => {
    if (performEffect) {
      performEffect(dispatch);
    }
  }, [dispatch, performEffect]);

  const chatContextValue = React.useMemo(() => [state, dispatch], [state]);

  return (
    <ChatContext.Provider value={chatContextValue}>
      <div className="container mx-auto">
        <div className="flex">
          <ChatChannelSidebar channels={state.channels} />
          <div className="h-screen flex flex-grow">
            <ChatContent />
          </div>
        </div>
      </div>
    </ChatContext.Provider>
  );
}

export default Chat;
