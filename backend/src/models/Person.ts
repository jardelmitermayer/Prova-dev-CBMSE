import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('person')
export default class Person{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name:string;
}