export const trackByFn =
  (targetPropertyKey: string) =>
  (_: number, item: { [key: string]: unknown }): unknown =>
    item[targetPropertyKey];
