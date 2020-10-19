import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import PersonContact from './PersonContact';

@Entity('contactType')
export default class ContactType{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @OneToMany(() => PersonContact, personContact => personContact.contactType, {
        cascade:['insert','update']
    })
    @JoinColumn({ name:'contactType_id'})
    personContact: PersonContact[];
}