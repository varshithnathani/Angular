import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

interface Student {
  id: number;
  name: string;
  email: string;
  course: string;
}

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule, MatButtonModule, MatInputModule],
  templateUrl: './students.html',
  styleUrls: ['./students.css']
})
export class Students {
  students: Student[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', course: 'Physics' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', course: 'Mathematics' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', course: 'Chemistry' }
  ];

  filterText: string = '';
  showAddForm: boolean = false;
  newStudent: Partial<Student> = {};

  get filteredStudents(): Student[] {
    const filter = this.filterText.toLowerCase();
    return this.students.filter(student =>
      student.name.toLowerCase().includes(filter) ||
      student.email.toLowerCase().includes(filter) ||
      student.course.toLowerCase().includes(filter)
    );
  }

  openAddForm() {
    this.showAddForm = true;
    this.newStudent = {};
  }

  cancelAdd() {
    this.showAddForm = false;
  }

  saveStudent() {
    if (!this.newStudent.name || !this.newStudent.email || !this.newStudent.course) {
      alert('Please fill all fields!');
      return;
    }
    const newId = this.students.length > 0 ? Math.max(...this.students.map(s => s.id)) + 1 : 1;

    this.students.push({
      id: newId,
      name: this.newStudent.name,
      email: this.newStudent.email,
      course: this.newStudent.course
    });
    this.showAddForm = false;
  }

  deleteStudent(id: number) {
    this.students = this.students.filter(s => s.id !== id);
  }
exportToPDF() {
  const doc = new jsPDF();

  const columns = ['ID', 'Name', 'Email', 'Course'];
  const rows = this.filteredStudents.map(s => [s.id, s.name, s.email, s.course]);

  autoTable(doc, {
    head: [columns],
    body: rows,
    startY: 30,
  });

  doc.save('students-list.pdf');
}

}
