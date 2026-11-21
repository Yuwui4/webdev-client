"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import usersJson from "../database/users.json";

export type User = (typeof usersJson)[number];

// empty user, also modified rest of script based on other stores stuff cause the given slide
// script has the edit and update and what not features
const emptyUser: User = {
  _id: "0",
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "STUDENT",
  loginId: "",
  section: "",
  lastActivity: "",
  totalActivity: "",
};

type AccountContextValue = {
  users: User[];
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  createUser: (user: User) => User;
  updateUser: (user: User) => void;
  deleteUser: (userId: string) => void;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>(usersJson);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const createUser = (user: User) => {
    const newUser = {
      ...emptyUser,
      ...user,
      _id: crypto.randomUUID(),
    };

    setUsers((currentUsers) => [...currentUsers, newUser]);
    return newUser;
  };

  const updateUser = (user: User) => {
    setUsers((currentUsers) =>
      currentUsers.map((u) => (u._id === user._id ? user : u))
    );
  };

  const deleteUser = (userId: string) => {
    setUsers((currentUsers) =>
      currentUsers.filter((user) => user._id !== userId)
    );
  };

  return (
    <AccountContext.Provider value={{ users, currentUser, setCurrentUser, createUser, updateUser, deleteUser }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) {
    throw new Error("useAccountContext must be used inside AccountProvider");
  }
  return value;
}

export { emptyUser };