export class OverviewBody {
  short_name: string | null = null;
  entity_id: number | null = null;
  name: string | null = null;
  description: string | null = null;
  official_code: string | null = null;
  phase_id: string | null = null;
  entity_type_id: number | null = null;
  entity_center_array: Entitycenterarray[] = [];
  entity_impact_area_array: Entityimpactareaarray[] = [];
  entity_diagram_image_array: Entitydiagramimagearray[] = [];
  initiative_detail_obj: Initiativedetailobj | any = {};
}

interface Initiativedetailobj {
  entity_initiative_id: number;
  lead_name: string;
  lead_email: string;
  co_lead_name: string;
  co_lead_email: string;
  budget: string;
  clarisa_primary_action_area_id: number;
  executive_summary_html: string;
  executive_summary: string;
  challenge_statement_html: string;
  challenge_statement: string;
  measurable_three_year_html: string;
  measurable_three_year: string;
  p25_initiative_model_html: string;
  p25_initiative_model: string;
  comparative_advantage_html?: any;
  comparative_advantage?: any;
  prior_evaluations_impact_assessments_html: string;
  prior_evaluations_impact_assessments: string;
  priority_setting_html: string;
  priority_setting: string;
  participatory_desing_process_html: string;
  participatory_desing_process: string;
  partnerships_html: string;
  partnerships: string;
  portfolio_linkages_html: string;
  portfolio_linkages: string;
  clarisa_primary_action_area_obj: Clarisaprimaryactionareaobj;
}

interface Clarisaprimaryactionareaobj {
  id: number;
  name: string;
  description: string;
}

interface Entitydiagramimagearray {
  entity_diagram_image_id: number;
  entity_id: number;
  image_url: string;
}

interface Entityimpactareaarray {
  entity_impact_area_id: number;
  entity_id: number;
  clarisa_impact_area_id: number;
}

interface Entitycenterarray {
  entity_center_id: number;
  entity_id: number;
  clarisa_center_code: string;
}
