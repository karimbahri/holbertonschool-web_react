import React from "react";
import Header from "./Header";
import Enzyme from "enzyme";

Enzyme.configure({adapter: new adapter()});


it('checks header rendering', () => {
    expect(Enzyme.shallow(<Header />)).to.have.lengthOf(1);
});

it('checks image rendering', () => {
    expect(Enzyme.shallow(<Header />).find('img')).to.have.lengthOf(1);
})

it('checks h1 rendering', () => {
    expect(Enzyme.shallow(<Header />).find('h1')).to.have.lengthOf(1);
})
