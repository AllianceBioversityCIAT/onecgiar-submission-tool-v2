import { Column, Entity, OneToMany } from 'typeorm';
import { EntityCenter } from '../../../../domain/entities/entity-centers/entities/entity-center.entity';

@Entity('clarisa_cgiar_entities')
export class ClarisaCgiarEntity {
  @Column({
    type: 'varchar',
    length: 15,
    name: 'code',
    primary: true,
  })
  code: string;

  @Column({
    type: 'text',
    name: 'name',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'text',
    name: 'acronym',
    nullable: true,
  })
  acronym: string;

  //--- relations
  s;
  @OneToMany(
    () => EntityCenter,
    (entity_center) => entity_center.clarisa_entity_obj,
  )
  entity_center_array: EntityCenter[];
}
