import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInnovationPortfolioColumns1707516483341 implements MigrationInterface {
    name = 'CreateInnovationPortfolioColumns1707516483341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`vision_management_approach_html\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`vision_management_approach\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`scaling_readiness_implementation_html\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`scaling_readiness_implementation\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`scaling_readiness_implementation\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`scaling_readiness_implementation_html\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`vision_management_approach\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`vision_management_approach_html\``);
    }

}
