import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstBatchSectionOne1706648882359 implements MigrationInterface {
    name = 'FirstBatchSectionOne1706648882359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`entity_centers\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`entity_center_id\` bigint NOT NULL AUTO_INCREMENT, \`entity_id\` bigint NOT NULL, \`clarisa_code\` varchar(15) NOT NULL, PRIMARY KEY (\`entity_center_id\`, \`clarisa_code\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`entity_impact_areas\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`entity_impact_area_id\` bigint NOT NULL AUTO_INCREMENT, \`entity_id\` bigint NOT NULL, \`clarisa_impact_area_id\` bigint NOT NULL, PRIMARY KEY (\`entity_impact_area_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`entity_diagram_images\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`entity_diagram_image_id\` bigint NOT NULL AUTO_INCREMENT, \`entity_id\` bigint NOT NULL, \`image_url\` text NOT NULL, PRIMARY KEY (\`entity_diagram_image_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`lead_name\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`lead_email\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`co_lead_name\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`co_lead_email\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`budget\` decimal(12,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`clarisa_primary_action_area_id\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`executive_summary_html\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`executive_summary\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`entity_centers\` ADD CONSTRAINT \`FK_3e6c9af51180df490d5f903ae8c\` FOREIGN KEY (\`entity_id\`) REFERENCES \`entities\`(\`entity_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entity_centers\` ADD CONSTRAINT \`FK_e04fb36574a317d7a8db7d5b495\` FOREIGN KEY (\`clarisa_code\`) REFERENCES \`clarisa_cgiar_entities\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entity_impact_areas\` ADD CONSTRAINT \`FK_989ac068515ccba61b70d1ad51b\` FOREIGN KEY (\`entity_id\`) REFERENCES \`entities\`(\`entity_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entity_impact_areas\` ADD CONSTRAINT \`FK_625a4bf0a5ace676f0572ff850a\` FOREIGN KEY (\`clarisa_impact_area_id\`) REFERENCES \`clarisa_impact_areas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entity_diagram_images\` ADD CONSTRAINT \`FK_5b4781246d6552b6800ef144d7c\` FOREIGN KEY (\`entity_id\`) REFERENCES \`entities\`(\`entity_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD CONSTRAINT \`FK_ef2f28a0cd5390217616784ae3a\` FOREIGN KEY (\`clarisa_primary_action_area_id\`) REFERENCES \`clarisa_action_areas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`entities\` DROP FOREIGN KEY \`FK_ef2f28a0cd5390217616784ae3a\``);
        await queryRunner.query(`ALTER TABLE \`entity_diagram_images\` DROP FOREIGN KEY \`FK_5b4781246d6552b6800ef144d7c\``);
        await queryRunner.query(`ALTER TABLE \`entity_impact_areas\` DROP FOREIGN KEY \`FK_625a4bf0a5ace676f0572ff850a\``);
        await queryRunner.query(`ALTER TABLE \`entity_impact_areas\` DROP FOREIGN KEY \`FK_989ac068515ccba61b70d1ad51b\``);
        await queryRunner.query(`ALTER TABLE \`entity_centers\` DROP FOREIGN KEY \`FK_e04fb36574a317d7a8db7d5b495\``);
        await queryRunner.query(`ALTER TABLE \`entity_centers\` DROP FOREIGN KEY \`FK_3e6c9af51180df490d5f903ae8c\``);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`executive_summary\``);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`executive_summary_html\``);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`clarisa_primary_action_area_id\``);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`budget\``);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`co_lead_email\``);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`co_lead_name\``);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`lead_email\``);
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`lead_name\``);
        await queryRunner.query(`DROP TABLE \`entity_diagram_images\``);
        await queryRunner.query(`DROP TABLE \`entity_impact_areas\``);
        await queryRunner.query(`DROP TABLE \`entity_centers\``);
    }

}
