"use strict";
import Person from "../../src/practice_2/person.js";
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        return `I am a Student. I am at Class ${this.klass}.`;
    }
}
export default Student;
