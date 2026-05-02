import React from 'react';
import { useApp } from '../../lib/context';
import { 
  LayoutDashboard, 
  Trello, 
  CheckSquare, 
  Users, 
  Sparkles, 
  Settings as SettingsIcon,
  Building2
} from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'pipeline', label: 'Pipeline', icon: Trello },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'contacts', label: 'Contacts', icon: Users },
  { id: 'insights', label: 'AI Insights', icon: Sparkles },
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
] as const;

export const Sidebar = () => {
  const { activeView, setActiveView } = useApp();

  return (
    <aside className="w-64 bg-slate-900 border-r border-white/10 flex flex-col h-full">
      <div className="p-6 border-b border-white/5 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
          <Building2 size={18} className="text-white" />
        </div>
        <h2 className="text-xl font-serif text-white tracking-tighter italic">FlowCRM</h2>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveView(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                    isActive 
                      ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20 font-bold' 
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                  )}
                >
                  <Icon size={18} />
                  <span className="text-sm uppercase tracking-widest">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* Session Data (BAZ Factor) */}
      <div className="p-4 mt-auto">
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10 text-[10px] font-mono uppercase tracking-tighter">
          <p className="text-slate-500 mb-1">Session Quota</p>
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-violet-500" style={{ width: '82%' }} />
          </div>
          <p className="mt-2 text-violet-400">0.82 / 1.0 SS_TIER</p>
        </div>
      </div>
    </aside>
  );
};
