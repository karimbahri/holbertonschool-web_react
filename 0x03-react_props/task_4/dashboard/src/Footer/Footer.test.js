import React from "react";
import Footer from "./Footer";
import Enzyme from "enzyme";

Enzyme.configure({adapter: new adapter()});


it('checks Footer rendering', () => {
    expect(Enzyme.shallow(<Footer />)).to.have.lengthOf(1);
});

it('checks footer rendering with the text Copyright', () => {
    expect(Enzyme.shallow(<Footer />).text()).toBe('Copyright');
})
