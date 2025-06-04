import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('exercises')
export class Exercise {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  muscleGroup: string;

  @Column({ nullable: true })
  repetitions: number;

  @Column({ nullable: true })
  sets: number;

  @Column({ nullable: true })
  durationInMinutes: number;

  @CreateDateColumn()
  createdAt: Date;
}