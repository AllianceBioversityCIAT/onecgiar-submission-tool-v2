import { Routes } from '@nestjs/core';
import { ClarisaModule } from '../tools/clarisa/clarisa.module';
import { ClarisaActionAreasModule } from '../tools/clarisa/clarisa-action-areas/clarisa-action-areas.module';
import { ClarisaCgiarEntityTypesModule } from '../tools/clarisa/clarisa-cgiar-entity-types/clarisa-cgiar-entity-types.module';
import { ClarisaCountriesModule } from '../tools/clarisa/clarisa-countries/clarisa-countries.module';
import { ClarisaRegionsModule } from '../tools/clarisa/clarisa-regions/clarisa-regions.module';
import { ClarisaCgiarEntitiesModule } from '../tools/clarisa/clarisa-cgiar-entities/clarisa-cgiar-entities.module';
import { ClarisaImpactAreasModule } from '../tools/clarisa/clarisa-impact-areas/clarisa-impact-areas.module';

const children: Routes = [
  {
    path: 'action-areas',
    module: ClarisaActionAreasModule,
  },
  {
    path: 'cgiar-entity-types',
    module: ClarisaCgiarEntityTypesModule,
  },
  {
    path: 'countries',
    module: ClarisaCountriesModule,
  },
  {
    path: 'regions',
    module: ClarisaRegionsModule,
  },
  {
    path: 'cgiar-entities',
    module: ClarisaCgiarEntitiesModule,
  },
  {
    path: 'impact-areas',
    module: ClarisaImpactAreasModule,
  },
];

export const ClarisaRoustes: Routes = [
  {
    path: 'clarisa',
    module: ClarisaModule,
    children: children,
  },
];
