import React from 'react';
import { useApp } from '../../lib/context';
import { Search, Bell, User as UserIcon, LogOut, ChevronDown } from 'lucide-react';

export const Header = () => {
  const { user, workspace } = useApp();

  return (
    <header className="h-16 border-b border-white/5 bg-slate-900 flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {workspace?.name || 'Loading Workspace...'}
          <ChevronDown size={14} className="text-slate-500" />
        </div>
        
        <div className="relative group w-96">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input 
            type="text" 
            placeholder="Global Search (Actions, Contacts, Deals...)" 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-slate-200 relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-slate-900" />
        </button>
        
        <div className="h-8 w-px bg-white/5 mx-2" />
        
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white">{user?.name || 'Operator'}</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest">{user?.role || 'User'}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center border border-white/10">
            <UserIcon size={20} className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};
