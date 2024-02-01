import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/global-dto/auditable.entity';
import { Entities } from '../../entities/entities.entity';

@Entity('entity_diagram_images')
export class EntityDiagramImage extends AuditableEntity {
  @PrimaryGeneratedColumn({
    name: 'entity_diagram_image_id',
    type: 'bigint',
  })
  entity_diagram_image_id: number;

  @Column({
    name: 'entity_id',
    type: 'bigint',
    nullable: false,
  })
  entity_id: number;

  @Column({
    name: 'image_url',
    type: 'text',
    nullable: false,
  })
  image_url: string;

  // --- relations
  @ManyToOne(() => Entities, (entity) => entity.entity_diagram_image_array)
  @JoinColumn({ name: 'entity_id' })
  entity_obj: Entities;
}
