import React, { useState, useEffect } from "react";
import io from "socket.io-client";

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

    const message = {
      roomId: selectedRoom.id,
      text: inputText,
      // You can also include user information like username, ID, etc.
    };

    socket.emit("sendMessage", message);

    setInputText("");
  };

  return (
    <div>
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
      {selectedRoom && (
        <div className="chat-container">
          <h2>{selectedRoom.name}</h2>
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index}>{message.text}</div>
            ))}
          </div>
          <form onSubmit={handleSendMessage}>
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
