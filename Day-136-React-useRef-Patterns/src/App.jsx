import {useState} from 'react';
import './App.css';
import ChatFeedCard from './components/ChatFeedCard';
import DebounceSearchCard from './components/DebounceSearchCard';

const initialMessages = [
  { id: 1, user: 'Alice', text: 'Hello, everyone!', timestamp: '2023-05-01 10:00' },
  { id: 2, user: 'Bob', text: 'Hi Alice!', timestamp: '2023-05-01 10:02' },
  { id: 3, user: 'Charlie', text: 'What is the plan for today?', timestamp: '2023-05-01 10:05' }
];
function App(){
  const [messages, setMessages] = useState(initialMessages);

  function addMessage(text) {
    if(!text.trim())return;
    const newMeg = {
      id: Date.now(),
      sender: 'You',
      text: text.trim(),
    };
    setMessages((prev)=> [...prev, newMeg]);
  }
  function resetMessages(){
    setMessages(initialMessages);
  }
  return (
    <div className="Container">
      <h1>Practical useRef Patterns</h1>
      <div className="card">
        <h2>
          App level Status
        </h2>
        <p>Total feed messages: <strong>{messages.length}</strong></p>
        <p>
          Latest Entry: {" "}
          <strong>
            {messages.length > 0 ? messages[messages.length - 1].text : 'No messages yet'}
          </strong>
        </p>
      </div>
      <ChatFeedCard
        messages={messages}
        addMessage={addMessage}
        resetMessages={resetMessages}
      />
      <DebounceSearchCard />

    </div>
  );
}
export default App;