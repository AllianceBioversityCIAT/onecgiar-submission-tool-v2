import { Column, Entity, OneToMany } from 'typeorm';
import { Entities } from '../../../../domain/entities/entities/entities.entity';
import { Role } from '../../../../domain/auth/roles/entities/role.entity';

@Entity('clarisa_cgiar_entity_type')
export class ClarisaCgiarEntityType {
  @Column({
    type: 'bigint',
    name: 'code',
    primary: true,
  })
  code: number;

  @Column({
    type: 'text',
    name: 'name',
    nullable: true,
  })
  name!: string;

  //--- relations

  @OneToMany(() => Entities, (entities) => entities.entity_type_obj)
  entities_array!: Entities[];

  @OneToMany(() => Role, (role) => role.clarisa_cgiar_entity_type_obj)
  role_array!: Role[];
}
