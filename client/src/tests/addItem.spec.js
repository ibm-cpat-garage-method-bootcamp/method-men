import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./../App";


describe("foo", () => {
    test('canary verifies test tools', () => {
        expect(false).toEqual(false);
    })

    test('Check presence of itemname' , () => {
        const { getByText } = render(<App />);
        const itemname = getByText('Item Name');
        expect(itemname).toBeInTheDocument();
    })
    test('Check presence of amount' , () => {
        const { getByText } = render(<App />);
        const amount = getByText('amount');
        expect(amount).toBeInTheDocument();
    })
    test('Check presence of aisle' , () => {
        const { getByText } = render(<App />);
        const aisle = getByText('aisle');
        expect(aisle).toBeInTheDocument();
    })
});    