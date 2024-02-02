import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateChallengeStatmentColumn1706802915130 implements MigrationInterface {
    name = 'CreateChallengeStatmentColumn1706802915130'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`challenge_statement_html\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`challenge_statement\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`challenge_statement\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`challenge_statement_html\``);
    }

}
