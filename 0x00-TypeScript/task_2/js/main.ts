interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}
class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}


class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

const createEmployee = (salary: number | string): Teacher | Director => {
    return (typeof salary === 'number' && salary < 500) ? new Teacher(): new Director();
}

const isDirector = (employee: DirectorInterface | TeacherInterface): boolean => {
    return employee instanceof Director;
}

const executeWork = (employee: DirectorInterface | TeacherInterface): string => {
    return (employee instanceof Director) ? employee.workDirectorTasks() : (employee instanceof Teacher) ? employee.workTeacherTasks(): undefined;
}

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects) => {
    return (todayClass === 'Math') ? 'Teaching Math': (todayClass === 'History') ? 'Teaching History': undefined;
}
