import { Column, Entity, OneToMany } from 'typeorm';
import { EntityImpactArea } from '../../../../domain/entities/entity-impact-areas/entities/entity-impact-area.entity';

@Entity('clarisa_impact_areas')
export class ClarisaImpactArea {
  @Column({
    name: 'id',
    type: 'bigint',
    primary: true,
  })
  id: number;

  @Column({
    name: 'name',
    type: 'text',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'description',
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    name: 'financialCode',
    type: 'text',
    nullable: true,
  })
  financialCode: string;

  //--- relations

  @OneToMany(
    () => EntityImpactArea,
    (entity_impact_area) => entity_impact_area.clarisa_impact_area_obj,
  )
  entity_impact_area_array: EntityImpactArea[];
}
