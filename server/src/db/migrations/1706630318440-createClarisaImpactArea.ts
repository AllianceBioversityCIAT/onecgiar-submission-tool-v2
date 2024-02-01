import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClarisaImpactArea1706630318440 implements MigrationInterface {
    name = 'CreateClarisaImpactArea1706630318440'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`clarisa_impact_areas\` (\`id\` bigint NOT NULL, \`name\` text NOT NULL, \`description\` text NULL, \`financialCode\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`clarisa_impact_areas\``);
    }

}
