import { Column, Entity } from 'typeorm';

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
}
