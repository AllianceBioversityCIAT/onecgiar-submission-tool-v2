import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/global-dto/auditable.entity';
import { InitiativeDetail } from '../../initiative-details/entities/initiative-detail.entity';

@Entity('status')
export class Status extends AuditableEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'status_id',
  })
  status_id: number;

  @Column({
    type: 'text',
    name: 'status_name',
    nullable: false,
  })
  status_name: string;

  @Column({
    type: 'text',
    name: 'status_description',
    nullable: true,
  })
  status_description: string;

  //--- relations

  @OneToMany(
    () => InitiativeDetail,
    (initiative_detail) => initiative_detail.status_obj,
  )
  initiative_detail_array!: InitiativeDetail[];
}
