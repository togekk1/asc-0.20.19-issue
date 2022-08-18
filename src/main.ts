import { _string, test } from "./wasm/release.js";

_string.value = "test";
test("test");
