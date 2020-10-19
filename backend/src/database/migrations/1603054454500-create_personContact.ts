import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPersonContact1603054454500 implements MigrationInterface {

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
          }
        ],
      })
    );
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('contactType');
    }

}