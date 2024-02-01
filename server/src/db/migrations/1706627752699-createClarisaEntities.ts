import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClarisaEntities1706627752699 implements MigrationInterface {
    name = 'CreateClarisaEntities1706627752699'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`clarisa_regions\` (\`um49Code\` bigint NOT NULL, \`name\` text NOT NULL, PRIMARY KEY (\`um49Code\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`clarisa_countries\` (\`code\` bigint NOT NULL, \`name\` text NOT NULL, \`isoAlpha2\` text NOT NULL, PRIMARY KEY (\`code\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`clarisa_cgiar_entities\` (\`code\` varchar(15) NOT NULL, \`name\` text NOT NULL, \`acronym\` text NULL, PRIMARY KEY (\`code\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`clarisa_cgiar_entities\``);
        await queryRunner.query(`DROP TABLE \`clarisa_countries\``);
        await queryRunner.query(`DROP TABLE \`clarisa_regions\``);
    }

}
