import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn({ type: 'int4'})
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false})
    name: string;

    @Column({ type: 'int8', nullable: false})
    password: string;

    @Column({ type: 'int8', nullable: false})
    email: string;

    @Column({ type: 'int8', nullable: false})
    sexo: string;

    @Column({ type: 'int8', default: true})
    active: boolean;
    
}