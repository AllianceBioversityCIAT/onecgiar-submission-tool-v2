import { MigrationInterface, QueryRunner } from "typeorm";

export class SetupBasicEntities1706204516167 implements MigrationInterface {
    name = 'SetupBasicEntities1706204516167'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`clarisa_cgiar_entity_type\` (\`code\` bigint NOT NULL, \`name\` text NULL, PRIMARY KEY (\`code\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`clarisa_cgiar_sub_entity_type\` (\`code\` bigint NOT NULL, \`name\` text NULL, PRIMARY KEY (\`code\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`entities_level_3\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`entity_level_3_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NULL, \`description\` text NULL, \`official_code\` text NULL, \`entity_level_2_id\` bigint NOT NULL, \`clarisa_cgiar_sub_entity_type_id\` bigint NOT NULL, PRIMARY KEY (\`entity_level_3_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`entities_level_2\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`entity_level_2_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NULL, \`description\` text NULL, \`official_code\` text NULL, \`entity_id\` bigint NOT NULL, \`clarisa_cgiar_sub_entity_type_id\` bigint NOT NULL, PRIMARY KEY (\`entity_level_2_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`entities\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`entity_id\` bigint NOT NULL AUTO_INCREMENT, \`name\` text NULL, \`description\` text NULL, \`official_code\` text NULL, \`phase_id\` text NULL, \`clarisa_cgiar_entity_type_id\` bigint NOT NULL, PRIMARY KEY (\`entity_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`entities_level_3\` ADD CONSTRAINT \`FK_9b1e96eaa554455e7aae0a0a8d1\` FOREIGN KEY (\`clarisa_cgiar_sub_entity_type_id\`) REFERENCES \`clarisa_cgiar_sub_entity_type\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entities_level_3\` ADD CONSTRAINT \`FK_0bd0c5183760556257c1c411a71\` FOREIGN KEY (\`entity_level_2_id\`) REFERENCES \`entities_level_2\`(\`entity_level_2_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entities_level_2\` ADD CONSTRAINT \`FK_95321ed7616cc740710ccc20870\` FOREIGN KEY (\`clarisa_cgiar_sub_entity_type_id\`) REFERENCES \`clarisa_cgiar_sub_entity_type\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entities_level_2\` ADD CONSTRAINT \`FK_2716161f2f68b7b9ffef7e5430e\` FOREIGN KEY (\`entity_id\`) REFERENCES \`entities\`(\`entity_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD CONSTRAINT \`FK_3703c3eaab2f97a471af2dd67fc\` FOREIGN KEY (\`clarisa_cgiar_entity_type_id\`) REFERENCES \`clarisa_cgiar_entity_type\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`entities\` DROP FOREIGN KEY \`FK_3703c3eaab2f97a471af2dd67fc\``);
        await queryRunner.query(`ALTER TABLE \`entities_level_2\` DROP FOREIGN KEY \`FK_2716161f2f68b7b9ffef7e5430e\``);
        await queryRunner.query(`ALTER TABLE \`entities_level_2\` DROP FOREIGN KEY \`FK_95321ed7616cc740710ccc20870\``);
        await queryRunner.query(`ALTER TABLE \`entities_level_3\` DROP FOREIGN KEY \`FK_0bd0c5183760556257c1c411a71\``);
        await queryRunner.query(`ALTER TABLE \`entities_level_3\` DROP FOREIGN KEY \`FK_9b1e96eaa554455e7aae0a0a8d1\``);
        await queryRunner.query(`DROP TABLE \`entities\``);
        await queryRunner.query(`DROP TABLE \`entities_level_2\``);
        await queryRunner.query(`DROP TABLE \`entities_level_3\``);
        await queryRunner.query(`DROP TABLE \`clarisa_cgiar_sub_entity_type\``);
        await queryRunner.query(`DROP TABLE \`clarisa_cgiar_entity_type\``);
    }

}
