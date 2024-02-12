import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateGenderResearchImpactp251707750004092 implements MigrationInterface {
    name = 'CreateGenderResearchImpactp251707750004092'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`gender_research_impact_p25_html\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`gender_research_impact_p25\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`gender_research_impact_p25\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`gender_research_impact_p25_html\``);
    }

}
