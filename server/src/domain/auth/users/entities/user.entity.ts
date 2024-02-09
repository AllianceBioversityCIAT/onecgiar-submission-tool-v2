import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/global-dto/auditable.entity';
import { UserRoleEntity } from '../../../entities/user-role-entities/entities/user-role-entity.entity';
import { InitiativeDetail } from '../../../entities/initiative-details/entities/initiative-detail.entity';

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

  // relations

  @OneToMany(
    () => UserRoleEntity,
    (user_role_entity) => user_role_entity.user_obj,
  )
  user_role_entity_array: UserRoleEntity[];

  @OneToMany(
    () => InitiativeDetail,
    (initiative_detail) => initiative_detail.user_co_lead_obj,
  )
  co_lead_initiative_detail_array: InitiativeDetail[];

  @OneToMany(
    () => InitiativeDetail,
    (initiative_detail) => initiative_detail.user_lead_obj,
  )
  lead_initiative_detail_array: InitiativeDetail[];
}
