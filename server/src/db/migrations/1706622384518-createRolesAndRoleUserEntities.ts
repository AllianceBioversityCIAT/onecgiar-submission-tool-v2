import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRolesAndRoleUserEntities1706622384518 implements MigrationInterface {
    name = 'CreateRolesAndRoleUserEntities1706622384518'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`roles\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`role_id\` bigint NOT NULL AUTO_INCREMENT, \`role_name\` text NOT NULL, \`role_description\` text NULL, \`priority\` int NOT NULL, PRIMARY KEY (\`role_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_role_entities\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`user_role_entity_id\` bigint NOT NULL AUTO_INCREMENT, \`user_id\` bigint NOT NULL, \`role_id\` bigint NOT NULL, \`entity_id\` bigint NULL, PRIMARY KEY (\`user_role_entity_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_role_entities\` ADD CONSTRAINT \`FK_2e35407e438694a482e04aaf4b8\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_role_entities\` ADD CONSTRAINT \`FK_381f23cbf93fa7ed9cb7740a7c5\` FOREIGN KEY (\`role_id\`) REFERENCES \`roles\`(\`role_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_role_entities\` ADD CONSTRAINT \`FK_248bb6948391abddfe1812f104c\` FOREIGN KEY (\`entity_id\`) REFERENCES \`entities\`(\`entity_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_role_entities\` DROP FOREIGN KEY \`FK_248bb6948391abddfe1812f104c\``);
        await queryRunner.query(`ALTER TABLE \`user_role_entities\` DROP FOREIGN KEY \`FK_381f23cbf93fa7ed9cb7740a7c5\``);
        await queryRunner.query(`ALTER TABLE \`user_role_entities\` DROP FOREIGN KEY \`FK_2e35407e438694a482e04aaf4b8\``);
        await queryRunner.query(`DROP TABLE \`user_role_entities\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
    }

}
