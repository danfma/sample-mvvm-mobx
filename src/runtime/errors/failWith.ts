export function failWith(message: string): never {
  throw new Error(message);
}
