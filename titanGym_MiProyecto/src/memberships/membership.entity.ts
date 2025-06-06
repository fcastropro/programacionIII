import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('memberships')
export class Membership {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  durationInDays: number;

  @Column({ nullable: true })
  description: string;
}