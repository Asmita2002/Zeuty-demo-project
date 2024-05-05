
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  deadline: Date;

  @Column({
    type: 'enum',
    enum: ['pending', 'completed'],
    default: 'pending'
  })
  status: 'pending' | 'completed';

  constructor() {
    // Initialize entity properties with a default value
    this.id = 0; 
    this.title = ''; 
    this.description = ''; 
    this.deadline = new Date(); 
    this.status = 'pending'; 
  }
}
