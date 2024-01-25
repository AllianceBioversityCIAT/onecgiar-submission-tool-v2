import { MigrationInterface, QueryRunner } from "typeorm";

export class SetupBasicEntities1706125028910 implements MigrationInterface {
    name = 'SetupBasicEntities1706125028910'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`clarisa_cgiar_entity_type\` (\`code\` bigint NOT NULL, \`name\` text NULL, PRIMARY KEY (\`code\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`entities_level_3\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`entities_level_3_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NULL, \`description\` text NULL, \`official_code\` text NULL, \`entity_level_2_id\` bigint NOT NULL, PRIMARY KEY (\`entities_level_3_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`entities_level_2\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`entities_level_2_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NULL, \`description\` text NULL, \`official_code\` text NULL, \`entity_id\` bigint NOT NULL, PRIMARY KEY (\`entities_level_2_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`entities\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`entities_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NULL, \`description\` text NULL, \`official_code\` text NULL, \`phase_id\` text NULL, \`entity_type_id\` bigint NOT NULL, PRIMARY KEY (\`entities_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`entities_level_3\` ADD CONSTRAINT \`FK_0bd0c5183760556257c1c411a71\` FOREIGN KEY (\`entity_level_2_id\`) REFERENCES \`entities_level_2\`(\`entities_level_2_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entities_level_2\` ADD CONSTRAINT \`FK_2716161f2f68b7b9ffef7e5430e\` FOREIGN KEY (\`entity_id\`) REFERENCES \`entities\`(\`entities_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD CONSTRAINT \`FK_b11ac1594a2aa1eca98ed33f092\` FOREIGN KEY (\`entity_type_id\`) REFERENCES \`clarisa_cgiar_entity_type\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`entities\` DROP FOREIGN KEY \`FK_b11ac1594a2aa1eca98ed33f092\``);
        await queryRunner.query(`ALTER TABLE \`entities_level_2\` DROP FOREIGN KEY \`FK_2716161f2f68b7b9ffef7e5430e\``);
        await queryRunner.query(`ALTER TABLE \`entities_level_3\` DROP FOREIGN KEY \`FK_0bd0c5183760556257c1c411a71\``);
        await queryRunner.query(`DROP TABLE \`entities\``);
        await queryRunner.query(`DROP TABLE \`entities_level_2\``);
        await queryRunner.query(`DROP TABLE \`entities_level_3\``);
        await queryRunner.query(`DROP TABLE \`clarisa_cgiar_entity_type\``);
    }

}
