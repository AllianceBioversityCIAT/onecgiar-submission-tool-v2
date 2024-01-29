import { MigrationInterface, QueryRunner } from "typeorm";

export class AddShortName1706549762167 implements MigrationInterface {
    name = 'AddShortName1706549762167'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`entities_level_3\` ADD \`short_name\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`entities_level_2\` ADD \`short_name\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`entities\` ADD \`short_name\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`entities\` DROP COLUMN \`short_name\``);
        await queryRunner.query(`ALTER TABLE \`entities_level_2\` DROP COLUMN \`short_name\``);
        await queryRunner.query(`ALTER TABLE \`entities_level_3\` DROP COLUMN \`short_name\``);
    }

}
