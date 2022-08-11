import { createContext, useState, useEffect } from "react";

export const ActiveUserContext = createContext();

export const ActiveUserProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState({
    profile_image: "",
    display_name: "",
    username: "",
    id: "",
    likes: [],
    retweets: [],
  });

  async function FetchUser(user_id) {
    try {
      await fetch("http://localhost:3001/user/" + user_id)
        .then((response) => {
          if (response.ok && response.status === 200) {
            return response.json();
          }
        })
        .then((data) => {
          setActiveUser(data);
        });
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    FetchUser(100000);
  }, []);

  return (
    <ActiveUserContext.Provider value={activeUser}>
      {children}
    </ActiveUserContext.Provider>
  );
};
