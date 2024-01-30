import { Column, Entity, OneToMany } from 'typeorm';
import { Entities } from '../../../../domain/entities/entities/entities.entity';

@Entity('clarisa_action_areas')
export class ClarisaActionArea {
  @Column({
    type: 'bigint',
    name: 'id',
    primary: true,
  })
  id: number;

  @Column({
    type: 'text',
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'text',
    name: 'description',
    nullable: true,
  })
  description: string;

  //--- relations

  @OneToMany(
    () => Entities,
    (entities) => entities.clarisa_primary_action_area_obj,
  )
  entity_array: Entities[];
}
