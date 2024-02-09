import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertStatus1707343361857 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO status (status_name) VALUES ('Editing'),( 'Submitted')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM status`);
  }
}
