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

    for (let i = 0; i < sortedStudents.length; i++) {
      // i - номер прохода
      for (let j = sortedStudents.length - 1; j > i; j--) {
        // внутренний цикл прохода
        if (sortedStudents[j - 1].course > sortedStudents[j].course) {
          const tmp = sortedStudents[j - 1];
          sortedStudents[j - 1] = sortedStudents[j];
          sortedStudents[j] = tmp;
        }
      }
    }

    const result = [];
    sortedStudents.forEach((item) => {
      const str = `${item.fullName} - ${item.courseName}, ${item.course} course`;
      result.push(str);
    });

    return result;
  }
}
