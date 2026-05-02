export type ViewId = 'dashboard' | 'pipeline' | 'tasks' | 'contacts' | 'insights' | 'settings';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'owner' | 'member';
}

export interface Workspace {
  id: string;
  name: string;
  ownerId: string;
}

export interface Membership {
  userId: string;
  workspaceId: string;
  role: 'owner' | 'member';
}

export interface Company {
  id: string;
  name: string;
  domain: string;
  industry?: string;
  size?: string;
  revenue?: string;
  logo?: string;
}

export interface Contact {
  id: string;
  companyId: string;
  name: string;
  email: string;
  phone?: string;
  role?: string;
  avatar?: string;
  engagementScore: number;
}

export interface Pipeline {
  id: string;
  workspaceId: string;
  name: string;
}

export interface Stage {
  id: string;
  pipelineId: string;
  name: string;
  order: number;
}

export interface Deal {
  id: string;
  companyId: string;
  pipelineId: string;
  stageId: string;
  ownerId: string;
  name: string;
  amount: number;
  probability: number;
  status: 'open' | 'won' | 'lost';
  closeDate: string;
  health: 'good' | 'average' | 'poor';
}

export interface Activity {
  id: string;
  targetId: string; // Deal, Contact, or Company
  type: 'note' | 'call' | 'email' | 'meeting' | 'task';
  body: string;
  authorId: string;
  createdAt: string;
  sentiment?: 'positive' | 'neutral' | 'negative';
}

export interface Task {
  id: string;
  dealId?: string;
  contactId?: string;
  body: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'done';
  dueDate: string;
  aiSuggested?: boolean;
}
