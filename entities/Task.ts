
export interface Task {
    id: number;
    title: string;
    description: string;
    deadline: Date;
    status: 'pending' | 'completed';
  }
  