import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSection6Columns1707852182025 implements MigrationInterface {
    name = 'CreateSection6Columns1707852182025'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`climate_change_focus_p25_html\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` ADD \`climate_change_focus_p25\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`climate_change_focus_p25\``);
        await queryRunner.query(`ALTER TABLE \`initiative_details\` DROP COLUMN \`climate_change_focus_p25_html\``);
    }

}
