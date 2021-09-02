import React from 'react';
import Counter from '../Counter';
import {render,fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"

test("header renders with correct text",()=>{
    //const component = render(<Counter/>);
    const {getByTestId}=render(<Counter/>);
    const headerEl = getByTestId('header');
    //const headerEl = component.getByTestId('header');
    console.log("HeaderElement",headerEl.textContent);
    expect(headerEl.textContent).toBe("Counter Component");
})

test("counter initiall starts with zero",()=>{
    const {getByTestId} = render(<Counter/>);
    const counter = getByTestId('counter');
    expect(counter.textContent).toBe("0");
})
test("Input contains initial Value of 1",()=>{
    const {getByTestId} = render(<Counter/>);
    const inputEl = getByTestId('input');
    expect(inputEl.value).toBe("1");
})
test("Add button renders with +",()=>{
    const {getByTestId} = render(<Counter/>);
    const addBtn = getByTestId('add-btn');
    expect(addBtn.textContent).toBe("+");
})
test("Add button renders with -",()=>{
    const {getByTestId} = render(<Counter/>);
    const subBtn = getByTestId('sub-bn');
    expect(subBtn.textContent).toBe("-");
})
test("Input value change correctly",()=>{
    const {getByTestId} = render(<Counter/>);
    const inputEl = getByTestId('input');
    expect(inputEl.value).toBe("1");
    fireEvent.change(inputEl,{
        target:{
            value:"5"
        }
    })
    expect(inputEl.value).toBe("5");
})
test("expects after - btn click value to be -1",()=>{
    const {getByTestId} = render(<Counter/>);
    const subBtn = getByTestId('sub-bn');
    const counter = getByTestId('counter');
    fireEvent.click(subBtn);
    expect(counter.textContent).toBe("-1");
})
test("expects after + btn click value to be 1",()=>{
    const {getByTestId} = render(<Counter/>);
    const addBtn = getByTestId('add-btn');
    const counter = getByTestId('counter');
    fireEvent.click(addBtn);
    expect(counter.textContent).toBe("1");
})