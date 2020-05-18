export function extend<T, U>(first: T, second: U): T & U {
  const res = {} as T & U;
  for (const key in first) {
    if (first.hasOwnProperty(key)) {
      (res as any)[key] = first[key];
    }
  }
  for (const key in second) {
    if (second.hasOwnProperty(key)) {
      (res as any)[key] = second[key];
    }
  }
  return res;
}
