import React from "react";

const Conversation = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index} className="border p-2 mb-2">
          <p>
            {message.sender}: {message.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Conversation;
