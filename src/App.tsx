import React from 'react';
import { AppProvider, useApp } from './lib/context';
import { AppLayout } from './components/layout/AppLayout';
import { Dashboard } from './components/dashboard/Dashboard';
import { motion, AnimatePresence } from 'motion/react';

function AppContent() {
  const { activeView, isLoading } = useApp();

  if (isLoading) {
    return (
      <div className="h-screen w-screen bg-slate-950 flex flex-col items-center justify-center space-y-6">
        <div className="w-16 h-16 border-4 border-violet-600/20 border-t-violet-600 rounded-full animate-spin" />
        <p className="text-xs font-mono text-slate-500 uppercase tracking-[0.3em] ml-1">Initializing BAZ OS...</p>
      </div>
    );
  }

  return (
    <AppLayout>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="h-full"
        >
          {activeView === 'dashboard' && <Dashboard />}
          {activeView !== 'dashboard' && (
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <h2 className="text-2xl font-serif text-white uppercase tracking-[0.2em] opacity-20 italic">
                {activeView} Protocol
              </h2>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                Resource currently in hibernation. Initiate uplink to manifest.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </AppLayout>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
