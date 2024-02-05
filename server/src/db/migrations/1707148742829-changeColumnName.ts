import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeColumnName1707148742829 implements MigrationInterface {
    name = 'ChangeColumnName1707148742829'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`entity_centers\` DROP FOREIGN KEY \`FK_e04fb36574a317d7a8db7d5b495\``);
        await queryRunner.query(`ALTER TABLE \`entity_centers\` CHANGE \`clarisa_code\` \`clarisa_center_code\` varchar(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`entity_centers\` ADD CONSTRAINT \`FK_4312f29b163bda8c40b9d2007ba\` FOREIGN KEY (\`clarisa_center_code\`) REFERENCES \`clarisa_cgiar_entities\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`entity_centers\` DROP FOREIGN KEY \`FK_4312f29b163bda8c40b9d2007ba\``);
        await queryRunner.query(`ALTER TABLE \`entity_centers\` CHANGE \`clarisa_center_code\` \`clarisa_code\` varchar(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`entity_centers\` ADD CONSTRAINT \`FK_e04fb36574a317d7a8db7d5b495\` FOREIGN KEY (\`clarisa_code\`) REFERENCES \`clarisa_cgiar_entities\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
