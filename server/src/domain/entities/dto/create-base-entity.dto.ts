export class CreateBaseEntityDto {
  public name: string;
  public short_name: string;
  public initiative_detail_obj: { clarisa_primary_action_area_id: number };
  public official_code: string;
  public entity_type_id: number;
}
