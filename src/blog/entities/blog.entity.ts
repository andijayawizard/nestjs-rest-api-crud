import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('blog')
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  summary: string;
  @Column()
  description: string;
  @Column({ type: 'timestamp' })
  created_at: Date;
  @Column({ type: 'timestamp' })
  updated_at: Date;
}
