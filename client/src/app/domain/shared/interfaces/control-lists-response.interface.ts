export interface ActionAreaItem {
  id: number;
  name: string;
  description: string;
}

export interface InitiativeItem {
  entity_id: number;
  name: string;
  short_name: string;
  description: string;
  official_code: string;
  phase_id: string;
  entity_type_id: number;
  parent_entity_id?: any;
  entity_type_obj: Entitytypeobj;
}

interface Entitytypeobj {
  code: number;
  name: string;
}
