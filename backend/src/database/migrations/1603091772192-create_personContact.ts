import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPersonContact1603091772192 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'personContact',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary:true, //indica que essa coluna é minha PRIMARY KEY na minha tabela
            isGenerated:true, //coluna gerada automaticamente
            generationStrategy: 'increment', //cada registro novo, ele aumenta o id
          },
          {
            name: 'contact',
            type: 'varchar',
          },
          {
            name:'person_id',
            type: 'integer',
          },
          {
            name:'contactType_id',
            type: 'integer',
          },
        ],
        foreignKeys:[
          {
            name:'ContactPerson',
            columnNames: ['person_id'],
            referencedTableName: 'person',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          {
            name:'ContactTypePerson',
            columnNames: ['contactType_id'],
            referencedTableName: 'contactType',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
        ]
      })
    );
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('personContact');
    }

}
