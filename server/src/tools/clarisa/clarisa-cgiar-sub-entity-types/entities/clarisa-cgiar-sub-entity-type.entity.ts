import { Column, Entity, OneToMany } from 'typeorm';
import { EntityLevel2 } from '../../../../domain/entities/entity-level-2/entities/entity-level-2.entity';
import { EntityLevel3 } from '../../../../domain/entities/entity-level-3/entities/entity-level-3.entity';

@Entity('clarisa_cgiar_sub_entity_type')
export class ClarisaCgiarSubEntityType {
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

  @OneToMany(
    () => EntityLevel2,
    (entities_level_2) => entities_level_2.sub_entity_type_obj,
  )
  entities_level_2_array!: EntityLevel2[];

  @OneToMany(
    () => EntityLevel3,
    (entities_level_3) => entities_level_3.sub_entity_type_obj,
  )
  entities_level_3_array!: EntityLevel3[];
}
