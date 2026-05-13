import { createContext, useState, useEffect } from "react";

export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  // Add new interaction to timeline
  const addInteraction = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      type: type, // Call, Text, Video
      title: `${type} with ${friendName}`,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };
    setTimeline([newEntry, ...timeline]);
  };

  return (
    <FriendContext.Provider value={{ timeline, addInteraction }}>
      {children}
    </FriendContext.Provider>
  );
};