import { createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const user = { name: "Shafiq", course: "BCA" };

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
export default UserProvider;
