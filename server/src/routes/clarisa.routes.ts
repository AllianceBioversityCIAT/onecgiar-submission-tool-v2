import { Routes } from '@nestjs/core';
import { ClarisaModule } from '../tools/clarisa/clarisa.module';
import { ClarisaActionAreasModule } from '../tools/clarisa/clarisa-action-areas/clarisa-action-areas.module';
import { ClarisaCgiarEntityTypesModule } from '../tools/clarisa/clarisa-cgiar-entity-types/clarisa-cgiar-entity-types.module';
import { ClarisaCgiarSubEntityTypesModule } from '../tools/clarisa/clarisa-cgiar-sub-entity-types/clarisa-cgiar-sub-entity-types.module';
import { ClarisaCountriesModule } from '../tools/clarisa/clarisa-countries/clarisa-countries.module';
import { ClarisaRegionsModule } from '../tools/clarisa/clarisa-regions/clarisa-regions.module';
import { ClarisaCgiarEntitiesModule } from '../tools/clarisa/clarisa-cgiar-entities/clarisa-cgiar-entities.module';

const children: Routes = [
  {
    path: 'clarisa-action-areas',
    module: ClarisaActionAreasModule,
  },
  {
    path: 'clarisa-cgiar-entity-types',
    module: ClarisaCgiarEntityTypesModule,
  },
  {
    path: 'clarisa-cgiar-sub-entity-types',
    module: ClarisaCgiarSubEntityTypesModule,
  },
  {
    path: 'clarisa-countries',
    module: ClarisaCountriesModule,
  },
  {
    path: 'clarisa-regions',
    module: ClarisaRegionsModule,
  },
  {
    path: 'clarisa-cgiar-entities',
    module: ClarisaCgiarEntitiesModule,
  },
];

export const ClarisaRoustes: Routes = [
  {
    path: 'clarisa',
    module: ClarisaModule,
    children: children,
  },
];
