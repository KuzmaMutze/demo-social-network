import React, { useEffect, useRef } from 'react';

type PropsType = {
  message: MessageType;
};
export type MessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
export const Message: React.FC<PropsType> = ({ message }) => {
  const refChat = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    refChat.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <div ref={refChat}>
      <img src={message.photo} /> <b>{message.userName}</b>
      <br />
      <div>{message.message}</div>
      <hr></hr>
    </div>
  );
};
