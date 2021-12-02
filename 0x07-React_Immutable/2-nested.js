import getImmutableObject from './0-fromjs';
import { getIn } from './node_modules/immutable/dist/immutable';

const accessImmutableObject = (object, array) =>  getImmutableObject(object).getIn(array);
export default accessImmutableObject;
