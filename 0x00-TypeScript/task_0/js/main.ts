interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'dennis',
    lastName: 'ritchie',
    age: 21,
    location: 'NEW YORK'
}

const student2: Student = {
    firstName: 'richard',
    lastName: 'stallman',
    age: 33,
    location: 'NEW YORK'
}

const studentsList: Array<Student> = [student1, student2];

document.body.insertAdjacentHTML('afterbegin', `
    <table>
        <tbody>
            <tr>
                <td>${student1.firstName}</td>
                <td>${student1.location}</td>
            </tr>
            <tr>
                <td>${student2.firstName}</td>
                <td>${student2.location}</td>
            </tr>
        </tbody>
    </table>
`);