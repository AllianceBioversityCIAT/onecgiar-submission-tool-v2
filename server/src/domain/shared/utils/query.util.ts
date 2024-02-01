export class QueryUtil {
  static buildQueryWhere(
    params: Record<string, Record<string, any>>,
    customConditionals?: Record<string, string[]>,
  ) {
    let config: any = {
      where: '1 = 1 ',
      attr: {},
    };

    for (const [tableAlias, values] of Object.entries(customConditionals)) {
      config.where += values.reduce(
        (acc, value) => `${acc} AND ${tableAlias}.${value} `,
        '',
      );
    }

    for (const [tableAlias, tableParams] of Object.entries(params)) {
      for (const [key, value] of Object.entries(tableParams)) {
        if (
          value !== undefined &&
          (typeof value !== 'number' || !isNaN(value))
        ) {
          if (typeof value === 'string') {
            // Use LIKE for string values
            config.where += `AND ${tableAlias}.${key} LIKE :${tableAlias}_${key} `;
            config.attr[`${tableAlias}_${key}`] = `%${value}%`;
          } else {
            // Use = for non-string values
            config.where += `AND ${tableAlias}.${key} = :${tableAlias}_${key} `;
            config.attr[`${tableAlias}_${key}`] = value;
          }
        }
      }
    }

    return config;
  }
}
