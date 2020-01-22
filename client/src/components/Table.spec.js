import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Table from './Table.jsx';

test('component exists (canary)', () => {
  const thing = render(<Table />);
  console.log(thing.getByTestId)
})