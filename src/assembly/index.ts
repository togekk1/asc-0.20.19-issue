export let _string: string | null;

export function test(string_arg: string): void {
  assert(string_arg, "string_arg is null");
  assert(_string, "_string is null");
}
