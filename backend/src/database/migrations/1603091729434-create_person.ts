import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPerson1603091729434 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {  //metodo que realiza as alterações que queremos no banco de dados(ex:criar tabela, criar um novo campo, deletar algum campo)
    await queryRunner.createTable( //criando tabela
      new Table({
        name: 'person',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true, // define que essa coluna não pode ser negativa
            isPrimary:true, //indica que essa coluna é minha PRIMARY KEY na minha tabela
            isGenerated:true, //coluna gerada automaticamente
            generationStrategy: 'increment', //cada registro novo, ele aumenta o id
          },
          {
            name: 'first_name',
            type: 'varchar',
          },
          {
            name: 'last_name',
            type: 'varchar',
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {  //metodo que desfaz o que foi feito no UP. 
    await queryRunner.dropTable('person');
  }

}
