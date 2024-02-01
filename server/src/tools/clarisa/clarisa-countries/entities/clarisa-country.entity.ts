import { Column, Entity } from 'typeorm';

@Entity('clarisa_countries')
export class ClarisaCountry {
  @Column({
    name: 'code',
    type: 'bigint',
    primary: true,
  })
  code: number;

  @Column({
    name: 'name',
    type: 'text',
    nullable: false,
  })
  name: string;

  @Column({
    name: 'isoAlpha2',
    type: 'text',
    nullable: false,
  })
  isoAlpha2: string;
}
