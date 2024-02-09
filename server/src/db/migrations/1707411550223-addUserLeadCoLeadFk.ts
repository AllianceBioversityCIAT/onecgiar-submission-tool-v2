import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserLeadCoLeadFk1707411550223 implements MigrationInterface {
    name = 'AddUserLeadCoLeadFk1707411550223'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`lead_name\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`lead_email\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`co_lead_name\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`co_lead_email\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`user_lead_id\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`user_co_lead_id\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD CONSTRAINT \`FK_081f1b7c80546a9ce8816042316\` FOREIGN KEY (\`user_co_lead_id\`) REFERENCES \`users\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD CONSTRAINT \`FK_36ac98d794b2a616ee47f3de064\` FOREIGN KEY (\`user_lead_id\`) REFERENCES \`users\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP FOREIGN KEY \`FK_36ac98d794b2a616ee47f3de064\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP FOREIGN KEY \`FK_081f1b7c80546a9ce8816042316\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`user_co_lead_id\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`user_lead_id\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`co_lead_email\` text CHARACTER SET "utf8mb4" COLLATE "utf8mb4_0900_ai_ci" NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`co_lead_name\` text CHARACTER SET "utf8mb4" COLLATE "utf8mb4_0900_ai_ci" NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`lead_email\` text CHARACTER SET "utf8mb4" COLLATE "utf8mb4_0900_ai_ci" NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`lead_name\` text CHARACTER SET "utf8mb4" COLLATE "utf8mb4_0900_ai_ci" NULL`);
    }

}
