import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClarisaCgiarEntityType } from '../../../tools/clarisa/clarisa-cgiar-entity-types/entities/clarisa-cgiar-entity-type.entity';
import { AuditableEntity } from '../../shared/global-dto/auditable.entity';
import { UserRoleEntity } from '../user-role-entities/entities/user-role-entity.entity';
import { EntityCenter } from '../entity-centers/entities/entity-center.entity';
import { EntityImpactArea } from '../entity-impact-areas/entities/entity-impact-area.entity';
import { EntityDiagramImage } from '../entity-diagram-images/entities/entity-diagram-image.entity';
import { InitiativeDetail } from '../initiative-details/entities/initiative-detail.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('entities')
export class Entities extends AuditableEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'entity_id',
  })
  entity_id: number;

  @ApiProperty()
  @Column({
    type: 'text',
    name: 'name',
    nullable: true,
  })
  name!: string;

  @ApiProperty()
  @Column({
    type: 'text',
    name: 'short_name',
    nullable: true,
  })
  short_name!: string;

  @ApiProperty()
  @Column({
    type: 'text',
    name: 'description',
    nullable: true,
  })
  description!: string;

  @ApiProperty()
  @Column({
    type: 'text',
    name: 'official_code',
    nullable: true,
  })
  official_code!: string;

  @ApiProperty()
  @Column({
    type: 'text',
    name: 'phase_id',
    nullable: true,
  })
  phase_id!: string;

  @ApiProperty()
  @Column({
    type: 'bigint',
    name: 'clarisa_cgiar_entity_type_id',
    nullable: false,
  })
  entity_type_id: number;

  @ApiProperty()
  @Column({
    type: 'bigint',
    name: 'parent_entity_id',
    nullable: true,
  })
  parent_entity_id!: number;

  //--- relations

  @ApiProperty({ type: () => Entities })
  @ManyToOne(() => Entities, (entity) => entity.child_entity_array)
  @JoinColumn({ name: 'parent_entity_id' })
  parent_entity_obj!: Entities;

  @ApiProperty({ type: () => Entities, isArray: true })
  @OneToMany(() => Entities, (entity) => entity.parent_entity_obj)
  child_entity_array!: Entities[];

  @ApiProperty({ type: () => InitiativeDetail })
  @OneToOne(
    () => InitiativeDetail,
    (initiativeDetail) => initiativeDetail.entity_obj,
  )
  initiative_detail_obj!: InitiativeDetail;

  @ApiProperty({ type: () => ClarisaCgiarEntityType })
  @ManyToOne(
    () => ClarisaCgiarEntityType,
    (entity_type) => entity_type.entities_array,
  )
  @JoinColumn({ name: 'clarisa_cgiar_entity_type_id' })
  entity_type_obj!: ClarisaCgiarEntityType;

  @ApiProperty({ type: () => UserRoleEntity })
  @OneToMany(
    () => UserRoleEntity,
    (UserRoleEntity) => UserRoleEntity.entity_obj,
  )
  user_role_entity_array!: UserRoleEntity[];

  @ApiProperty({ type: () => EntityCenter })
  @OneToMany(() => EntityCenter, (entity_center) => entity_center.entity_obj)
  entity_center_array!: EntityCenter[];

  @ApiProperty({ type: () => EntityImpactArea })
  @OneToMany(
    () => EntityImpactArea,
    (entity_impact_area) => entity_impact_area.entity_obj,
  )
  entity_impact_area_array!: EntityImpactArea[];

  @ApiProperty({ type: () => EntityDiagramImage })
  @OneToMany(
    () => EntityDiagramImage,
    (entity_diagram_image) => entity_diagram_image.entity_obj,
  )
  entity_diagram_image_array!: EntityDiagramImage[];
}
