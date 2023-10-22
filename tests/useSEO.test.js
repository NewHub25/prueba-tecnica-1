import { describe, test, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useSEO from "../src/hooks/useSEO";

describe("useSEO hook", function () {
  test("should change title and description", function () {
    act(() => {
      renderHook(() => useSEO({ title: "Hola mundo" }));
    });
    expect(document.title).toBe("Hola mundo");
  });
});
