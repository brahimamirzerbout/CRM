import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ViewId, User, Workspace } from '../types';
import { db } from './db';

interface AppContextType {
  user: User | null;
  workspace: Workspace | null;
  activeView: ViewId;
  setActiveView: (view: ViewId) => void;
  isLoading: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [activeView, setActiveView] = useState<ViewId>('dashboard');
  const [user, setUser] = useState<User | null>(null);
  const [workspace, setWorkspace] = useState<Workspace | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const init = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setUser(db.users[0]);
      setWorkspace(db.workspaces[0]);
      setIsLoading(false);
    };
    init();
  }, []);

  return (
    <AppContext.Provider value={{ 
      user, 
      workspace, 
      activeView, 
      setActiveView,
      isLoading 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
