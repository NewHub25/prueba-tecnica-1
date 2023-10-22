import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import userEvent from "@testing-library/user-event";

describe("<App />", () => {
  // test("should work", () => {
  //   const { getByText } = render(<App />);

  //   expect(getByText(/React/)).toBeDefined();
  // });

  test("should add a new item and remove it", async () => {
    const user = userEvent.setup();

    render(<App />);

    //Buscar el input
    const input = screen.getByRole("textbox");

    //Buscar el form
    const form = screen.getByRole("form");

    //Buscar el botón
    const button = form.querySelector("button");
    expect(button).toBeInstanceOf(HTMLButtonElement);

    const randomText = crypto.randomUUID();
    await user.type(input, randomText);
    await userEvent.click(button!);

    //Asegurar que el usuario haya agregado el item
    const list = screen.getByRole("list");
    expect(list.childNodes.length).toBe(1);

    // Asegurar que el usuario pueda borrar un item
    const titleItem = screen.getByText(randomText);
    const item = titleItem.closest("li");
    if (!item) return;
    const removeButton = item.querySelector("button");
    expect(removeButton).not.toBeNull();
    await user.click(removeButton!);
    screen.debug();
    screen.getByText(/NO TIENES ELEMENTOS EN LA LISTA/i);
  });
});
