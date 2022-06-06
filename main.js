export class User {
  constructor({ firstName, lastName }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class Student extends User {
  constructor({ firstName, lastName, admissionYear, courseName }) {
    super({ firstName, lastName });
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    const today = new Date();
    const currentYear = today.getFullYear();
    return currentYear - this.admissionYear;
  }
}

export default class Students {
  constructor(students) {
    this.students = students;
  }

  getInfo() {
    const sortedStudents = [...this.students];

    sortedStudents.sort(function (a, b) {
      if (a.course > b.course) {
        return 1;
      }
      if (a.course < b.course) {
        return -1;
      }
      return 0;
    });

    return sortedStudents.map(
      (item) => `${item.fullName} - ${item.courseName}, ${item.course} course`,
    );
  }
}
