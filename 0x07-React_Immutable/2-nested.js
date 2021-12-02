import getImmutableObject from './0-fromjs';

const accessImmutableObject = (object, array) =>  getImmutableObject(object).getIn(array);
export default accessImmutableObject;
