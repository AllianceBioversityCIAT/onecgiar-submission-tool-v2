import { Column, Entity } from 'typeorm';

@Entity('clarisa_regions')
export class ClarisaRegion {
  @Column({
    type: 'bigint',
    name: 'um49Code',
    primary: true,
  })
  um49Code: number;

  @Column({
    type: 'text',
    name: 'name',
    nullable: false,
  })
  name: string;
}
