import React from "react";
import NotificationItem from "./NotificationItem";
import Enzyme from "enzyme";

Enzyme.configure({adapter: new adapter()});


it('checks Notification rendering', () => {
    expect(Enzyme.shallow(<NotificationItem />).exists()).toEqual(true);
});

it('checks props rendering', () => {
    expect(Enzyme.shallow(<NotificationItem type="default" value="test" />).toEqual({"value": "test", "type": "default"}));
});

it('checks li rendering', () => {
    expect(Enzyme.shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>).html()).toEqual("<li><u>test</u></li>");
});
