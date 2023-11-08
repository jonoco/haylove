'use client';

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconLetterA,
  IconSend,
} from '@tabler/icons-react';
import classes from './page.module.css';
import Image from 'next/image';
import { profiles, Profile, getNextProfile } from '@/data/profiles';
import { useEffect, useRef, useState } from 'react';

interface Message {
  sender: string;
  message: string;
}

const replyTimeout = {
  min: 1000,
  max: 3000,
};

export default function Page({ params }: { params: { slug: string } }) {
  const profileIndex = Number(params.slug);
  const [profile, setProfile] = useState<Profile>(profiles[profileIndex]);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [waiting, setWaiting] = useState<boolean>(false);
  const chatboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function addMessage(text: string, sender: string) {
    const newMessage = { sender, message: text };

    setMessages((currentMessages) => [...currentMessages, newMessage]);
  }

  function sendMessage(text: string, sender: string) {
    addMessage(text, sender);
    setMessage('');
    if (sender === 'sent') {
      setWaiting(true);
      setTimeout(
        generateReply,
        Math.random() * (replyTimeout.max - replyTimeout.min) + replyTimeout.min
      );
    }
  }

  function generateReply() {
    const replies = [
      'neigh',
      'huff',
      'clop clop',
      '*aggressive snorting*',
      '*whinny*',
    ];

    const reply = replies[Math.floor(Math.random() * replies.length)];
    setWaiting(false);
    addMessage(reply, 'got');
  }

  function scrollToBottom() {
    chatboxRef.current?.scrollTo({
      top: chatboxRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }

  return !profile ? (
    <></>
  ) : (
    <div className={classes.chat}>
      <div className={classes.container}>
        <div className={classes.header}>
          <a href={`/profile/${profileIndex}`}>
            <div className={classes.image}>
              <Image
                src={`/images/${profile.image}`}
                alt="profile image"
                height={50}
                width={50}
              />
            </div>
            <span className={classes.name}>{profile.name}</span>
          </a>
        </div>
        <div className={classes.chatbox} ref={chatboxRef}>
          {messages.map((message, index) => (
            <Message message={message} key={index} />
          ))}
          {waiting && <WaitingMark />}
        </div>
        <form
          id="form"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(message, 'sent');
          }}
        >
          <input
            type="text"
            id="input"
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            placeholder="Send a message"
          />
          <button type="submit" id="button">
            <IconSend />
          </button>
        </form>
      </div>
    </div>
  );
}

function Message({ message }: { message: Message }) {
  return (
    <div
      className={`${classes.message} ${
        message.sender === 'sent' ? classes.sent : classes.got
      }`}
    >
      {message.message}
    </div>
  );
}

function WaitingMark() {
  return (
    <div className={classes.waiting}>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
      <div className={classes.dot}></div>
    </div>
  );
}
