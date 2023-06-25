import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

interface Student {
  name: string;
  chemistryMarks: number;
  biologyMarks: number;
  dob: string;
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <h2>Sorted Students:</h2>
    <ul>
      <li *ngFor="let student of sortedStudents">{{ student.name }}</li>
    </ul>
  `,
})
export class App {
  name = 'Aravinth Raja';

  students: Student[] = [
    {
      name: "John",
      chemistryMarks: 80,
      biologyMarks: 90,
      dob: "1998-05-10"
    },
    {
      name: "Emily",
      chemistryMarks: 85,
      biologyMarks: 95,
      dob: "1999-02-15"
    },
    {
      name: "Michael",
      chemistryMarks: 85,
      biologyMarks: 95,
      dob: "1997-12-25"
    },
    {
      name: "Sophia",
      chemistryMarks: 80,
      biologyMarks: 90,
      dob: "1998-05-10"
    }
  ];

  sortedStudents: Student[] = [];

  constructor() {}

  ngOnInit(): void {
    this.sortStudents();
  }

  sortStudents(): void {
    this.sortedStudents = this.students.sort((a, b) => {
    
      if (a.chemistryMarks + a.biologyMarks > b.chemistryMarks + b.biologyMarks) {
        return -1;
      }
      if (a.chemistryMarks + a.biologyMarks < b.chemistryMarks + b.biologyMarks) {
        return 1;
      }

     
      if (a.biologyMarks > b.biologyMarks) {
        return -1;
      }
      if (a.biologyMarks < b.biologyMarks) {
        return 1;
      }
      return 0; 
    });
  }
}

bootstrapApplication(App);
