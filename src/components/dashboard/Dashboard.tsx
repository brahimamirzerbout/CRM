import React from 'react';
import { useApp } from '../../lib/context';
import { db } from '../../lib/db';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Award, 
  Clock, 
  AlertCircle,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { formatCurrency, formatNumber, cn } from '../../lib/utils';
import { motion } from 'motion/react';

const StatCard = ({ label, value, subValue, icon: Icon, color }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-slate-900/50 border border-white/5 p-6 rounded-[2rem] relative overflow-hidden"
  >
    <div className={cn("absolute top-0 right-0 p-6 opacity-10", `text-${color}-500`)}>
      <Icon size={48} />
    </div>
    <div className="relative z-10">
      <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">{label}</p>
      <h3 className="text-3xl font-serif text-white">{value}</h3>
      <p className="text-[10px] text-slate-500 mt-2 flex items-center gap-1">
        <Icon size={12} className={`text-${color}-500/50`} />
        {subValue}
      </p>
    </div>
  </motion.div>
);

export const Dashboard = () => {
  const { workspace } = useApp();
  
  if (!workspace) return null;

  const totalValue = db.deals.reduce((sum, d) => sum + d.amount, 0);
  const weightedValue = db.deals.reduce((sum, d) => sum + (d.amount * d.probability / 100), 0);
  
  const stats = [
    { label: 'Pipeline Value', value: formatCurrency(totalValue), subValue: 'Total potential revenue', icon: TrendingUp, color: 'cyan' },
    { label: 'Weighted Forecast', value: formatCurrency(weightedValue), subValue: 'Probability adjusted', icon: Target, color: 'violet' },
    { label: 'Network Power', value: formatNumber(db.contacts.length), subValue: 'Active relationships', icon: Users, color: 'emerald' },
    { label: 'Won Deals', value: '14', subValue: 'Last 30 days', icon: Award, color: 'amber' }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-serif text-white tracking-tight italic">Operational Intelligence</h2>
          <p className="text-sm text-slate-500 mt-1 uppercase tracking-[0.2em] font-mono">Status: SS_TIER • Optimal Resonance</p>
        </div>
        <div className="flex gap-4">
          <button className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-300 hover:bg-white/10 transition-all flex items-center gap-2">
            <Clock size={16} className="text-violet-400" />
            Project Archive
          </button>
          <button className="px-5 py-2.5 bg-violet-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-violet-500/20 hover:bg-violet-500 transition-all flex items-center gap-2">
            <Sparkles size={16} fill="white" />
            AI Insights
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {/* Activity Feed */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-lg font-serif text-white flex items-center gap-2">
            <TrendingUp size={20} className="text-cyan-500" />
            Recent Trajectory
          </h3>
          <div className="space-y-3">
            {db.activities.map((activity) => (
              <div key={activity.id} className="bg-slate-900/40 border border-white/5 p-5 rounded-2xl flex items-start gap-4 hover:bg-white/5 transition-all">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                  {activity.type === 'call' ? <Users size={18} className="text-cyan-400" /> : <Clock size={18} className="text-violet-400" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white truncate">{activity.body}</p>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter shrink-0 ml-4">2h ago</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Source: Deal Matrix • Intent: {activity.sentiment || 'neutral'}</p>
                </div>
                <ChevronRight size={16} className="text-white/10 self-center" />
              </div>
            ))}
          </div>
        </div>

        {/* Needs Attention */}
        <div className="space-y-6">
          <h3 className="text-lg font-serif text-white flex items-center gap-2">
            <AlertCircle size={20} className="text-rose-500" />
            Stability Alerts
          </h3>
          <div className="bg-slate-900/60 border border-rose-500/20 p-6 rounded-[2rem] space-y-6">
             {db.tasks.filter(t => t.priority === 'high').map(task => (
               <div key={task.id} className="space-y-2">
                 <div className="flex items-center justify-between">
                   <span className="px-2 py-0.5 bg-rose-500/20 text-rose-400 text-[10px] font-bold rounded uppercase tracking-widest border border-rose-500/20">Critical</span>
                   <span className="text-[10px] font-mono text-slate-500 uppercase">{task.dueDate}</span>
                 </div>
                 <p className="text-sm text-slate-300 font-medium">{task.body}</p>
                 <div className="flex items-center gap-2 mt-4 text-[10px] font-mono uppercase tracking-widest text-violet-400">
                    <Sparkles size={12} fill="currentColor" />
                    Nova Suggestion: Immediate Action
                 </div>
               </div>
             ))}
             
             <div className="pt-4 border-t border-white/5">
                <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-all">
                  Run Full System Audit
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
