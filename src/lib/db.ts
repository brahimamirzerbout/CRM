import { Company, Contact, Deal, Pipeline, Stage, User, Workspace, Membership, Activity, Task } from '../types';

export const db = {
  users: [
    { id: 'u1', name: 'Demo User', email: 'demo@ultimatecrm.com', role: 'owner' } as User
  ],
  workspaces: [
    { id: 'w1', name: 'My Workspace', ownerId: 'u1' } as Workspace
  ],
  memberships: [
    { userId: 'u1', workspaceId: 'w1', role: 'owner' } as Membership
  ],
  companies: [
    { id: 'c1', name: 'Acme Corp', domain: 'acme.com', industry: 'Software', size: '1000+', revenue: '$50M' },
    { id: 'c2', name: 'Globex', domain: 'globex.com', industry: 'Logistics', size: '500-1000', revenue: '$25M' },
    { id: 'c3', name: 'Soylent Inc', domain: 'soylent.com', industry: 'Food & Beverage', size: '100-500', revenue: '$10M' }
  ] as Company[],
  contacts: [
    { id: 'con1', companyId: 'c1', name: 'John Doe', email: 'john@acme.com', role: 'CTO', engagementScore: 85 },
    { id: 'con2', companyId: 'c1', name: 'Jane Smith', email: 'jane@acme.com', role: 'VP Engineering', engagementScore: 92 },
    { id: 'con3', companyId: 'c2', name: 'Bob Johnson', email: 'bob@globex.com', role: 'CEO', engagementScore: 64 }
  ] as Contact[],
  pipelines: [
    { id: 'p1', workspaceId: 'w1', name: 'Sales' }
  ] as Pipeline[],
  stages: [
    { id: 's1', pipelineId: 'p1', name: 'Lead', order: 1 },
    { id: 's2', pipelineId: 'p1', name: 'Discovery', order: 2 },
    { id: 's3', pipelineId: 'p1', name: 'Proposal', order: 3 },
    { id: 's4', pipelineId: 'p1', name: 'Negotiation', order: 4 },
    { id: 's5', pipelineId: 'p1', name: 'Closed', order: 5 }
  ] as Stage[],
  deals: [
    { id: 'd1', companyId: 'c1', pipelineId: 'p1', stageId: 's1', ownerId: 'u1', name: 'Enterprise License', amount: 50000, probability: 20, status: 'open', closeDate: '2026-06-01', health: 'good' },
    { id: 'd2', companyId: 'c2', pipelineId: 'p1', stageId: 's3', ownerId: 'u1', name: 'Global Logistics Contract', amount: 120000, probability: 60, status: 'open', closeDate: '2026-05-15', health: 'average' },
    { id: 'd3', companyId: 'c3', pipelineId: 'p1', stageId: 's4', ownerId: 'u1', name: 'Food Supply Deal', amount: 35000, probability: 80, status: 'open', closeDate: '2026-04-30', health: 'poor' }
  ] as Deal[],
  activities: [
    { id: 'a1', targetId: 'd1', type: 'call', body: 'Introductory call with CTO. Interested in scaling.', authorId: 'u1', createdAt: '2026-04-20T10:00:00Z', sentiment: 'positive' },
    { id: 'a2', targetId: 'con1', type: 'email', body: 'Sent follow-up deck.', authorId: 'u1', createdAt: '2026-04-21T14:30:00Z', sentiment: 'neutral' }
  ] as Activity[],
  tasks: [
    { id: 't1', dealId: 'd3', body: 'Send revised contract', priority: 'high', status: 'todo', dueDate: '2026-04-25', aiSuggested: true },
    { id: 't2', contactId: 'con2', body: 'Schedule follow-up', priority: 'medium', status: 'todo', dueDate: '2026-04-26' }
  ] as Task[]
};
