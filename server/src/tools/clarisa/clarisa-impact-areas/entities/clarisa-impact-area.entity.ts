import { Column, Entity } from 'typeorm';

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
}
