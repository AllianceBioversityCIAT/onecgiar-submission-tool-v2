import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStatusTable1707342781971 implements MigrationInterface {
    name = 'CreateStatusTable1707342781971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`status\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`status_id\` bigint NOT NULL AUTO_INCREMENT, \`status_name\` text NOT NULL, \`status_description\` text NULL, PRIMARY KEY (\`status_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`status_id\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD CONSTRAINT \`FK_de22f787cca228089d118e8f622\` FOREIGN KEY (\`status_id\`) REFERENCES \`status\`(\`status_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP FOREIGN KEY \`FK_de22f787cca228089d118e8f622\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`status_id\``);
        await queryRunner.query(`DROP TABLE \`status\``);
    }

}
