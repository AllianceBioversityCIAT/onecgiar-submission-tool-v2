import { MigrationInterface, QueryRunner } from 'typeorm';

export class RestructureSchemav21706717887581 implements MigrationInterface {
  name = 'RestructureSchemav21706717887581';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`entities\` DROP FOREIGN KEY \`FK_ef2f28a0cd5390217616784ae3a\``,
    );
    await queryRunner.query(
      `DROP INDEX \`FK_2716161f2f68b7b9ffef7e5430e\` ON \`entities_level_2\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`entities\` DROP COLUMN \`clarisa_primary_action_area_id\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`initiative_details\` ADD CONSTRAINT \`FK_e283f754a3713917cb3eda71579\` FOREIGN KEY (\`clarisa_primary_action_area_id\`) REFERENCES \`clarisa_action_areas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`initiative_details\` ADD CONSTRAINT \`FK_e283f754a3713917cb3eda71579\` FOREIGN KEY (\`clarisa_primary_action_area_id\`) REFERENCES \`clarisa_action_areas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`DROP TABLE \`entities_level_3\``);
    await queryRunner.query(`DROP TABLE \`entities_level_2\``);
    await queryRunner.query(`DROP TABLE \`clarisa_cgiar_sub_entity_type\``);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`initiative_details\` DROP FOREIGN KEY \`FK_e283f754a3713917cb3eda71579\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`entities\` ADD \`clarisa_primary_action_area_id\` bigint NULL`,
    );
    await queryRunner.query(
      `CREATE INDEX \`FK_2716161f2f68b7b9ffef7e5430e\` ON \`entities_level_2\` (\`entity_id\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`entities\` ADD CONSTRAINT \`FK_ef2f28a0cd5390217616784ae3a\` FOREIGN KEY (\`clarisa_primary_action_area_id\`) REFERENCES \`clarisa_action_areas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
