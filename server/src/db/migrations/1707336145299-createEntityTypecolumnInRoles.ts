import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEntityTypecolumnInRoles1707336145299 implements MigrationInterface {
    name = 'CreateEntityTypecolumnInRoles1707336145299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`roles\` ADD \`clarisa_entity_type_id\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`roles\` ADD CONSTRAINT \`FK_7546fa6b71eaa819cfd806f743e\` FOREIGN KEY (\`clarisa_entity_type_id\`) REFERENCES \`clarisa_cgiar_entity_type\`(\`code\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`roles\` DROP FOREIGN KEY \`FK_7546fa6b71eaa819cfd806f743e\``);
        await queryRunner.query(`ALTER TABLE \`roles\` DROP COLUMN \`clarisa_entity_type_id\``);
    }

}
