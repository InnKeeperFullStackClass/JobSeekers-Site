import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "../styles/chatroomspage.css"; // Replace with your WhatsApp styles

const ChatRoomsPage = () => {
  const [chatRooms, setChatRooms] = useState([
    { id: 1, name: "Chat Room 1" },
    { id: 2, name: "Chat Room 2" },
    { id: 3, name: "Chat Room 3" },
  ]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Connect to the socket server
    const newSocket = io("http://localhost:3000"); // Replace with your server URL
    setSocket(newSocket);

    return () => {
      // Disconnect from the socket server when the component unmounts
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Subscribe to the selected room's messages
    if (socket && selectedRoom) {
      socket.emit("joinRoom", selectedRoom.id);

      // Receive new messages
      socket.on("message", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }

    return () => {
      // Leave the room and remove message listener when the room changes
      if (socket && selectedRoom) {
        socket.emit("leaveRoom", selectedRoom.id);
        socket.off("message");
      }
    };
  }, [socket, selectedRoom]);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setMessages([]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    const newMessage = {
      sender: "user", // Assume the sender is the user
      text: inputText,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]); // Add the new message locally

    const message = {
      roomId: selectedRoom.id,
      text: inputText,
    };

    socket.emit("sendMessage", message);

    setInputText("");
  };

  return (
    <div className="chat-page">
      <div className="sidebar">
        <h1>Chat Rooms</h1>
        <ul>
          {chatRooms.map((room) => (
            <li
              key={room.id}
              onClick={() => handleRoomClick(room)}
              className={selectedRoom?.id === room.id ? "selected" : ""}
            >
              {room.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedRoom && (
        <div className="chat-container">
          <div className="chat-header">
            <h2>{selectedRoom.name}</h2>
          </div>
          <div className="messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.sender === "user" ? "user-message" : "contact-message"
                }
              >
                {message.text}
              </div>
            ))}
          </div>
          <form className="message-input" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatRoomsPage;
