import React from "react";
import App from "./App";
import Enzyme from "enzyme";

Enzyme.configure({adapter: new adapter()});


it('checks Header rendering', () => {
    expect(Enzyme.shallow(<App />).find('Header')).to.have.lengthOf(1);
})

it('checks Notifications rendering', () => {
    expect(Enzyme.shallow(<App />).find('Notifications')).to.have.lengthOf(1);
})

it('checks Login rendering', () => {
    expect(Enzyme.shallow(<App />).find('Login')).to.have.lengthOf(1);
})

it('checks Footer rendering', () => {
    expect(Enzyme.shallow(<App />).find('Footer')).to.have.lengthOf(1);
})
