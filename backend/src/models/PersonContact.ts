import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';

import Person from './Person';
import ContactType from './ContactType';

@Entity('personContact')
export default class PersonContact{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    contact: string;

    @ManyToOne(() => Person, person => person.personContact)
    @JoinColumn({ name:'person_id'})
    person:Person;

    
    @ManyToOne(() => ContactType, contactType => contactType.personContact)
    @JoinColumn({ name: 'contactType_id'})
    contactType: ContactType;   
    
}