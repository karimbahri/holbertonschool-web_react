/* eslint-disable */

import { List } from "./node_modules/immutable/dist/immutable"
import { Map } from "./node_modules/immutable/dist/immutable";

const concatElements = (page1, page2) => {
    return List(page1).concat(List(page2));
}

const mergeElements = (page1, page2) => {
    return Map(page1).merge(Map(page2));
}

export {mergeElements, concatElements};
