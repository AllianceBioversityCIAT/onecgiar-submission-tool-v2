export class ClarisaCgiarEntityTypesEnum {
  public static readonly CRP = new ClarisaCgiarEntityTypesEnum('crp', 1);
  public static readonly Platform = new ClarisaCgiarEntityTypesEnum(
    'platform',
    3,
  );
  public static readonly Center = new ClarisaCgiarEntityTypesEnum('center', 4);
  public static readonly Initiatives = new ClarisaCgiarEntityTypesEnum(
    'initiatives',
    6,
  );
  public static readonly OneCGIARPlatform = new ClarisaCgiarEntityTypesEnum(
    'onecgiar-platform',
    9,
  );
  public static readonly OneCGIARScienceGroupProject =
    new ClarisaCgiarEntityTypesEnum('onecgiar-science-group-project', 10);

  private constructor(
    public readonly name: string,
    public readonly value: number,
  ) {}

  public static getFromName(
    name: string,
  ): ClarisaCgiarEntityTypesEnum | undefined {
    return (Object.values(this) as ClarisaCgiarEntityTypesEnum[]).find(
      (n) => n.name === name,
    );
  }

  public static getFromValue(
    value: number,
  ): ClarisaCgiarEntityTypesEnum | undefined {
    return (Object.values(this) as ClarisaCgiarEntityTypesEnum[]).find(
      (n) => n.value === value,
    );
  }

  public static getArray(): string[] {
    return (Object.values(this) as ClarisaCgiarEntityTypesEnum[]).map(
      (n) => n.name,
    );
  }
}
