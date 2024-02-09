export class JwtPayloadDto {
  user_id: number;
  first_name: string;
  last_name: string;
  iat?: number;
  exp?: number;
}
