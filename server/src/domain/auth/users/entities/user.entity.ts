import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/global-dto/auditable.entity';

@Entity('users')
export class User extends AuditableEntity {
  @PrimaryGeneratedColumn({
    name: 'user_id',
    type: 'bigint',
  })
  user_id: number;

  @Column({
    name: 'first_name',
    type: 'text',
    nullable: false,
  })
  first_name: string;

  @Column({
    name: 'last_name',
    type: 'text',
    nullable: false,
  })
  last_name: string;

  @Column({
    name: 'email',
    type: 'text',
    nullable: false,
  })
  email: string;
}
