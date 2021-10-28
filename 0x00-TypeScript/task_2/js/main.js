var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
var createEmployee = function (salary) {
    return (typeof salary === 'number' && salary < 500) ? new Teacher() : new Director();
};
var isDirector = function (employee) {
    return employee instanceof Director;
};
var executeWork = function (employee) {
    return (employee instanceof Director) ? employee.workDirectorTasks() : (employee instanceof Teacher) ? employee.workTeacherTasks() : undefined;
};
var teachClass = function (todayClass) {
    return (todayClass === 'Math') ? 'Teaching Math' : (todayClass === 'History') ? 'Teaching History' : undefined;
};
