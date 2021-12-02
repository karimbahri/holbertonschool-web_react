/* eslint-disable */
import { is, Map } from "./node_modules/immutable/dist/immutable";

const areMapsEqual = (map1, map2) => {
    return is(Map(map1), Map(map2));
}
export default areMapsEqual;
