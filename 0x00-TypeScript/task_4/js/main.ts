import * from './subjects/Subject';
import * from './subjects/Cpp'
import * from './subjects/Java'
import * from './subjects/React'
import * from './subjects/Teacher'

export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
    firstName: 'Albert',
    lastName: 'Einstein',
    experienceTeachingC: 10
}

cpp.setTeacher(cTeacher);
console.log('C++');
console.log(cpp.getRequirements() + '\n' + cpp.getAvailableTeacher());

java.setTeacher(cTeacher);
console.log('Java\n' + java.getRequirements() + '\n' + java.getAvailableTeacher());

react.setTeacher(cTeacher);
console.log('React\n' + react.getRequirements() + '\n' + react.getAvailableTeacher());
