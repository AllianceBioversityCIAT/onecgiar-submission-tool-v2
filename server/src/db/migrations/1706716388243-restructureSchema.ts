import { MigrationInterface, QueryRunner } from "typeorm";

export class RestructureSchema1706716388243 implements MigrationInterface {
    name = 'RestructureSchema1706716388243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`entities_level_2\` DROP FOREIGN KEY \`FK_2716161f2f68b7b9ffef7e5430e\``);
        await queryRunner.query(`CREATE TABLE \`initiative_details\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`entity_initiative_id\` bigint NOT NULL, \`lead_name\` text NULL, \`lead_email\` text NULL, \`co_lead_name\` text NULL, \`co_lead_email\` text NULL, \`budget\` decimal(12,2) NULL, \`clarisa_primary_action_area_id\` bigint NULL, \`executive_summary_html\` text NULL, \`executive_summary\` text NULL, PRIMARY KEY (\`entity_initiative_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`budget\``);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`co_lead_email\``);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`co_lead_name\``);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`executive_summary\``);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`executive_summary_html\``);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`lead_email\``);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`lead_name\``);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`parent_entity_id\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD CONSTRAINT \`FK_d854879eddfbfbae7d2e6af9146\` FOREIGN KEY (\`entity_initiative_id\`) REFERENCES \`entities\`(\`entity_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD CONSTRAINT \`FK_979c65077e9e874e2a515cd09ea\` FOREIGN KEY (\`parent_entity_id\`) REFERENCES \`entities\`(\`entity_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`entities\` DROP FOREIGN KEY \`FK_979c65077e9e874e2a515cd09ea\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP FOREIGN KEY \`FK_d854879eddfbfbae7d2e6af9146\``);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`parent_entity_id\``);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`lead_name\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`lead_email\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`executive_summary_html\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`executive_summary\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`co_lead_name\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`co_lead_email\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`budget\` decimal(12,2) NULL`);
        await queryRunner.query(`DROP TABLE \`initiative_details\``);
        await queryRunner.query(`ALTER TABLE \`entities_level_2\` ADD CONSTRAINT \`FK_2716161f2f68b7b9ffef7e5430e\` FOREIGN KEY (\`entity_id\`) REFERENCES \`entities\`(\`entity_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
