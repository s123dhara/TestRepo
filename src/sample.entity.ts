// src/sample/sample.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Sample {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;
}
