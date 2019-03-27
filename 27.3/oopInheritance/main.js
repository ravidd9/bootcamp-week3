class Person {
    constructor(name, startYear) {
      this.name = name
      this.startYear = startYear
      this.courses = []
    }
    addCourse(course) {
      this.courses.push(course)
    }
  }
  
  class Student extends Person {
    constructor(name, startYear) {
      super(name, startYear)
      this.grades = []
    }
    receiveGrade(courseName, finalGrade) {
      this.grades.push({
        course: courseName,
        grade: finalGrade
      })
    }
    //method overriding!
    addCourse(course) {
      if (this.courses.indexOf(course) == -1) {
        super.addCourse(course)
      }
    }
  }
  
  class Teacher extends Person {
    constructor(name, startYear, salary) {
      super(name, startYear)
      this.salary = salary
      this.courses = {}
    }
    giveGrade(student, course, grade) {
      student.receiveGrade(course, grade)
    }
    //method overriding!
    addCourse(course) {
      if (this.courses[course]) {
        this.courses[course] ++
      }
      else{
        this.courses[course] = 1
      }
    }
  }
  
  class TeachingAssistant extends Teacher {
      constructor(name, startYear, salary) {
          super(name, startYear, salary)
      }
  }
  
  class Principal extends Person{
    constructor(name, startYear){
      super(name, startYear)
      this.teachers = []
      this.students = []
    }
    hireTeacher(teacher){
      this.teachers.push(teacher)
      console.log(this.name + " just hired " + teacher.name)
    }
    recruitStudent(student){
      this.students.push(student)
    }
    expelStudent(student){
      for(let index in this.students){
        if(this.students[index].name = student.name){
          this.students.splice(index, 1)
        }
      }
    }
    transferStudent(s1, p1){
      p1.recruitStudent(s1)
      this.expelStudent(s1)
    }
  }
  
  //spot check 1
  // const s1 = new Student("Ronda", 2017)
  // console.log(s1.name) //prints "Ronda"
  // s1.addCourse("Algebra II")
  // console.log(s1.courses) //prints ["Algebra II"]
  
  //spot check 2
  // const s1 = new Student("Ronda", 2017)
  // const t1 = new Teacher("Cassandra", 2002, 40000)
  // t1.giveGrade(s1, "Algebra II", 82)
  // const firstGrade = s1.grades[0]
  // console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
  // //above should print "Ronda received an 82 in Algebra II"
  
  //spot check 3
  // const t1 = new Teacher("Cassandra", 2002, 40000)
  // t1.addCourse("Algebra II")
  // t1.addCourse("Algebra II")
  // t1.addCourse("Trigonometry")
  // console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}
  
  //exercise
  const p1 = new Principal("Martin", 1991)
  const p2 = new Principal("Martha", 1990)
  
  const t1 = new Teacher("Cassandra", 2002, 40000)
  const t2 = new Teacher("Kevin", 2006, 30000)
  
  const s1 = new Student("Ronda", 2017)
  const s2 = new Student("Byron", 2016)
  
  //1 & 2
  p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
  console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra
  
  p1.hireTeacher(t2) //should print "Martin just hired Kevin"
  console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]
  
  //3 & 4
  p1.recruitStudent(s1)
  p1.recruitStudent(s2)
  console.log(p1.students) //should print Array(2) [Student, Student]
  
  //5
  p1.expelStudent(s1)
  console.log(p1.students) //should print Array(1) [Student] - the student should be Byron
  
  //6
  p1.transferStudent(s2, p2)
  console.log(p1.students) //should print Array(0) []
  console.log(p2.students) //should print Array(1) [Student] - the student should be Byron
  
  
  
  
  
  