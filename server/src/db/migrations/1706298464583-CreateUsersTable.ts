import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1706298464583 implements MigrationInterface {
    name = 'CreateUsersTable1706298464583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`created_by\` bigint NULL, \`updated_at\` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`updated_by\` bigint NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, \`user_id\` bigint NOT NULL AUTO_INCREMENT, \`first_name\` text NOT NULL, \`last_name\` text NOT NULL, \`email\` text NOT NULL, PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
