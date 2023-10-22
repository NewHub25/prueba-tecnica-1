import { describe, test, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useItems from "../src/hooks/useItems";

describe("useItems hook", function () {
  test("should add and remove items", function () {
    const { result } = renderHook(() => useItems());

    expect(result.current.items.length).toBe(0);

    act(() => {
      result.current.addItem("Ir a desayunar 🥞");
      result.current.addItem("Ir a comer 🍽️");
    });
    console.log(result.current.items);
    expect(result.current.items.length).toBe(2);

    act(() => {
      result.current.removeItem(result.current.items[1].id);
    });
    expect(result.current.items.length).toBe(1);
  });
});
