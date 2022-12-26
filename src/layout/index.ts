export function getRows(rows: any[]) {
  return {
    stack: [...rows],
  };
}

export function getColumns(columns: any[], columnGap : number = 10) {
    return {
        columnGap: columnGap ?? 10,
        columns: [...columns],
      };
  }
