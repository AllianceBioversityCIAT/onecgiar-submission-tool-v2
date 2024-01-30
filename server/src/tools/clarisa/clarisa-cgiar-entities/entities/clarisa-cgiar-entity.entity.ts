import { Column, Entity } from 'typeorm';

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
}
