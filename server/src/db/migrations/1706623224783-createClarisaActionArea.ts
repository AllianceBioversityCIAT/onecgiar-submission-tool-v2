import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClarisaActionArea1706623224783 implements MigrationInterface {
    name = 'CreateClarisaActionArea1706623224783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`clarisa_action_areas\` (\`id\` bigint NOT NULL, \`name\` text NOT NULL, \`description\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`clarisa_action_areas\``);
    }

}
