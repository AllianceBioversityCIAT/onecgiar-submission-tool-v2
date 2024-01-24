import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AuditableEntity {
  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    nullable: false,
  })
  created_at: Date;

  @Column({
    type: 'bigint',
    name: 'created_by',
    nullable: true,
  })
  created_by: number;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    nullable: true,
  })
  updated_at: Date;

  @Column({
    type: 'bigint',
    name: 'updated_by',
    nullable: true,
  })
  updated_by: number;

  @Column({
    name: 'is_active',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  is_active: boolean;
}
