import React from 'react';

import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic
} from 'react-chat-engine-advanced';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

export function App() {
    return (
      <PrettyChatWindow
        projectId="1108744e-98a4-4ed4-aa77-3e7b6e036ef3"
        username="deveshi"
        secret="pass1234"
        style={{ height: '100vh' }}
      />
    );
  }

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '1108744e-98a4-4ed4-aa77-3e7b6e036ef3',
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100vh' }} />
    </div>
  );
};




export default ChatsPage;
