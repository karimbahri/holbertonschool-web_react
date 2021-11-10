import React from "react";
import Login from "./Login";
import Enzyme from "enzyme";

Enzyme.configure({adapter: new adapter()});


it('checks Login rendering', () => {
    expect(Enzyme.shallow(<Login />)).to.have.lengthOf(1);
});

it('checks input rendering', () => {
    expect(Enzyme.shallow(<Login />).find('input')).to.have.lengthOf(2);
})

it('checks label rendering', () => {
    expect(Enzyme.shallow(<Login />).find('label')).to.have.lengthOf(2);
})
