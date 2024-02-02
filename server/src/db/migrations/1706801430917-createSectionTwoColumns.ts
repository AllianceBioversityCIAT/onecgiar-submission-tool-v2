import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSectionTwoColumns1706801430917 implements MigrationInterface {
    name = 'CreateSectionTwoColumns1706801430917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`measurable_three_year_html\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`measurable_three_year\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`p25_initiative_model_html\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`p25_initiative_model\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`comparative_advantage_html\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`comparative_advantage\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`prior_evaluations_impact_assessments_html\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`prior_evaluations_impact_assessments\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`priority_setting_html\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`priority_setting\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`participatory_desing_process_html\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`participatory_desing_process\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`partnerships_html\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`partnerships\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \` portfolio_linkages_html\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`portfolio_linkages\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`portfolio_linkages\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \` portfolio_linkages_html\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`partnerships\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`partnerships_html\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`participatory_desing_process\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`participatory_desing_process_html\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`priority_setting\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`priority_setting_html\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`prior_evaluations_impact_assessments\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`prior_evaluations_impact_assessments_html\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`comparative_advantage\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`comparative_advantage_html\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`p25_initiative_model\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`p25_initiative_model_html\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`measurable_three_year\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`measurable_three_year_html\``);
    }

}
