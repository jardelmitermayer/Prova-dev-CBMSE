import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import PersonContact from './PersonContact';

@Entity('person')
export default class Person{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name:string;

    @OneToMany(() => PersonContact, personContact => personContact.person, {
        cascade:['insert','update']
    })
    @JoinColumn({ name:'person_id'})
    personContact: PersonContact[];
}