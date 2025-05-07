import React, { useState } from 'react';
import styles from './Chat.module.css';
import doctor from '../../assets/doctorlist.png';
import Navbar from '../Homepage/Navbar';
import Footer from '../Homepage/Footer';

function Chat() {
  const [message, setMessage] = useState('');

  // Sample data for contacts and messages
  const contacts = [
    { id: 1, name: 'Burhan Zaid', message: "Ok! Let's discuss it further in detail a...", time: '20m' },
    { id: 2, name: 'Sheeza Qamar', message: "I'm sure! Let's do it!", time: '5m' },
    { id: 3, name: 'Ahmad Ali', message: "Ok! Let's discuss it further in detail an..", time: '1h' },
    { id: 4, name: 'Burhan Zaid', message: "Ok! Let's discuss it further in detail a...", time: '20m' },
    { id: 5, name: 'Burhan Zaid', message: "Ok! Let's discuss it further in detail a...", time: '20m' },
    { id: 6, name: 'Burhan Zaid', message: "Ok! Let's discuss it further in detail a...", time: '20m' },
    { id: 7, name: 'Burhan Zaid', message: "Ok! Let's discuss it further in detail a...", time: '20m' },
  ];

  const messages = [
    { 
      id: 1, 
      sender: 'Burhan Zaid', 
      text: "Sometimes life feels like a playlist on shuffle—one moment it's all upbeat and perfect, and the next, you're stuck in some deep, emotional track you didn't see coming. But hey, that's the beauty of it, right?", 
      time: '11:12', 
      isSelf: false 
    },
    { 
      id: 2, 
      sender: 'Burhan Zaid', 
      text: "So here I am, floating through the madness", 
      time: '13:12', 
      isSelf: false 
    },
    { 
      id: 3, 
      sender: 'You', 
      text: "Have you any recent experience?", 
      time: '06:12', 
      isSelf: true 
    },
    { 
      id: 4, 
      sender: 'Burhan Zaid', 
      text: "Sometimes life feels like a playlist on shuffle—one moment it's all upbeat and perfect, and the next, you're stuck in some deep, emotional track you didn't see coming. But hey, that's the beauty of it, right?", 
      time: '13:12', 
      isSelf: false 
    },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, you would add the message to your messages array
      setMessage('');
    }
  };

  return (
    <div>
        <Navbar/>
    <div className={styles.chatContainer}>
      <div className={styles.sidebar}>
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className={styles.contactsList}>
          {contacts.map(contact => (
            <div key={contact.id} className={styles.contactItem}>
              <div className={styles.contactAvatar}>
                <img src={doctor || "/placeholder.svg"} alt={contact.name.split(' ')[0]} />
              </div>
              <div className={styles.contactInfo}>
                <div className={styles.contactName}>{contact.name}</div>
                <div className={styles.contactMessage}>{contact.message}</div>
              </div>
              <div className={styles.contactTime}>{contact.time}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.chatArea}>
        <div className={styles.chatHeader}>
          <div className={styles.chatTitle}>
            <h2>Burhan Zaid</h2>
            <div className={styles.onlineStatus}>Online</div>
          </div>
          <div className={styles.headerActions}>
            <span className={styles.searchIconHeader}>🔍</span>
            <span className={styles.menuIcon}>⋮</span>
          </div>
        </div>
        <div className={styles.messagesContainer}>
          {messages.map(msg => (
            <div key={msg.id} className={`${styles.messageWrapper} ${msg.isSelf ? styles.self : ''}`}>
              {!msg.isSelf && (
                <div className={styles.messageAvatar}>
                  <img src={doctor || "/placeholder.svg"} alt="Burhan" />
                </div>
              )}
              <div className={styles.messageBubbleContainer}>
                {!msg.isSelf && msg.id === 2 && (
                  <div className={styles.messageSender}>{msg.sender}</div>
                )}
                <div className={styles.messageBubble}>
                  <p>{msg.text}</p>
                  <div className={styles.messageTime}>{msg.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.messageInputContainer}>
          <input 
            type="text" 
            placeholder="Your message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.messageInput}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(e)}
          />
          <button 
            type="button" 
            className={styles.sendButton}
            onClick={handleSendMessage}
          >
            <span className={styles.sendIcon}>➤</span>
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Chat;