import { Column, Entity, OneToMany } from 'typeorm';
import { Entities } from '../../../../domain/entities/entities/entities.entity';
import { InitiativeDetail } from '../../../../domain/entities/initiative-details/entities/initiative-detail.entity';

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
    () => InitiativeDetail,
    (init) => init.clarisa_primary_action_area_obj,
  )
  initiative_array: Entities[];
}
