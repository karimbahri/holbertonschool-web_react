var student1 = {
    firstName: 'dennis',
    lastName: 'ritchie',
    age: 21,
    location: 'NEW YORK'
};
var student2 = {
    firstName: 'richard',
    lastName: 'stallman',
    age: 33,
    location: 'NEW YORK'
};
var studentsList = [student1, student2];
document.body.insertAdjacentHTML('afterbegin', "\n    <table>\n        <tbody>\n            <tr>\n                <td>" + student1.firstName + "</td>\n                <td>" + student1.lastName + "</td>\n            </tr>\n            <tr>\n            <td>" + student2.firstName + "</td>\n            <td>" + student2.location + "</td>\n            </tr>\n        </tbody>\n    </table>\n");
