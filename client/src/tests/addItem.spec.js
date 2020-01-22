import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";


describe("foo", () => {
    test('canary verifies test tools', () => {
        expect(false).toEqual(false);
    })

    test('Check presence of username' , () => {
        const { getByText } = render(<App />);
        const linkElement = getByText('username');
        expect(linkElement).toBeInTheDocument();
    })
});    