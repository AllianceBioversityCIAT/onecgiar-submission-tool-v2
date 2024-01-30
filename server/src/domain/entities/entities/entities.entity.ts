import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClarisaCgiarEntityType } from '../../../tools/clarisa/clarisa-cgiar-entity-types/entities/clarisa-cgiar-entity-type.entity';
import { EntityLevel2 } from '../entity-level-2/entities/entity-level-2.entity';
import { AuditableEntity } from '../../shared/global-dto/auditable.entity';
import { UserRoleEntity } from '../user-role-entities/entities/user-role-entity.entity';
import { EntityCenter } from '../entity-centers/entities/entity-center.entity';
import { EntityImpactArea } from '../entity-impact-areas/entities/entity-impact-area.entity';
import { ClarisaActionArea } from '../../../tools/clarisa/clarisa-action-areas/entities/clarisa-action-area.entity';
import { EntityDiagramImage } from '../entity-diagram-images/entities/entity-diagram-image.entity';

@Entity('entities')
export class Entities extends AuditableEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'entity_id',
  })
  entity_id: number;

  @Column({
    type: 'text',
    name: 'name',
    nullable: true,
  })
  name!: string;

  @Column({
    type: 'text',
    name: 'short_name',
    nullable: true,
  })
  short_name!: string;

  @Column({
    type: 'text',
    name: 'description',
    nullable: true,
  })
  description!: string;

  @Column({
    type: 'text',
    name: 'official_code',
    nullable: true,
  })
  official_code!: string;

  @Column({
    type: 'text',
    name: 'phase_id',
    nullable: true,
  })
  phase_id!: string;

  @Column({
    type: 'bigint',
    name: 'clarisa_cgiar_entity_type_id',
    nullable: false,
  })
  entity_type_id: number;

  @Column({
    name: 'lead_name',
    type: 'text',
    nullable: true,
  })
  lead_name!: string;

  @Column({
    name: 'lead_email',
    type: 'text',
    nullable: true,
  })
  lead_email!: string;

  @Column({
    name: 'co_lead_name',
    type: 'text',
    nullable: true,
  })
  co_lead_name!: string;

  @Column({
    name: 'co_lead_email',
    type: 'text',
    nullable: true,
  })
  co_lead_email!: string;

  @Column({
    name: 'budget',
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  budget!: number;

  @Column({
    name: 'clarisa_primary_action_area_id',
    type: 'bigint',
    nullable: true,
  })
  clarisa_primary_action_area_id!: number;

  @Column({
    name: 'executive_summary_html',
    type: 'text',
    nullable: true,
  })
  executive_summary_html!: string;

  @Column({
    name: 'executive_summary',
    type: 'text',
    nullable: true,
  })
  executive_summary!: string;

  //--- relations

  @ManyToOne(
    () => ClarisaCgiarEntityType,
    (entity_type) => entity_type.entities_array,
  )
  @JoinColumn({ name: 'clarisa_cgiar_entity_type_id' })
  entity_type_obj!: ClarisaCgiarEntityType;

  @ManyToOne(() => ClarisaActionArea, (action_area) => action_area.entity_array)
  @JoinColumn({ name: 'clarisa_primary_action_area_id' })
  clarisa_primary_action_area_obj!: ClarisaActionArea;

  @OneToMany(() => EntityLevel2, (entity_level_2) => entity_level_2.entity_obj)
  entity_level_2_array!: EntityLevel2[];

  @OneToMany(
    () => UserRoleEntity,
    (UserRoleEntity) => UserRoleEntity.entity_obj,
  )
  user_role_entity_array!: UserRoleEntity[];

  @OneToMany(() => EntityCenter, (entity_center) => entity_center.entity_obj)
  entity_center_array!: EntityCenter[];

  @OneToMany(
    () => EntityImpactArea,
    (entity_impact_area) => entity_impact_area.entity_obj,
  )
  entity_impact_area_array!: EntityImpactArea[];

  @OneToMany(
    () => EntityDiagramImage,
    (entity_diagram_image) => entity_diagram_image.entity_obj,
  )
  entity_diagram_image_array!: EntityDiagramImage[];
}
