// src/app/faculty/faculty.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


interface FacultyMember {
  id: number;
  name: string;
  email: string;
  department: string;
}

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule, MatButtonModule, MatInputModule],
  templateUrl: './faculty.html',
  styleUrls: ['./faculty.css']
})
export class Faculty {
  displayedColumns = ['id', 'name', 'email', 'department', 'actions'];
  facultyList: FacultyMember[] = [
    { id: 1, name: 'Dr. John Doe', email: 'johndoe@example.com', department: 'Physics' },
    { id: 2, name: 'Prof. Jane Smith', email: 'janesmith@example.com', department: 'Mathematics' },
    { id: 3, name: 'Dr. Mark Lee', email: 'marklee@example.com', department: 'Chemistry' },
  ];

  showAddForm = false;
  newFaculty: Partial<FacultyMember> = {};

  filterText = '';

  get filteredFaculty(): FacultyMember[] {
    const filter = this.filterText.toLowerCase();
    return this.facultyList.filter(faculty =>
      faculty.name.toLowerCase().includes(filter) ||
      faculty.email.toLowerCase().includes(filter) ||
      faculty.department.toLowerCase().includes(filter)
    );
  }

  openAddForm() {
    this.showAddForm = true;
    this.newFaculty = {};
  }

  cancelAdd() {
    this.showAddForm = false;
  }

  saveFaculty() {
    if (!this.newFaculty.name || !this.newFaculty.email || !this.newFaculty.department) {
      alert('Please fill all fields!');
      return;
    }
    const newId = this.facultyList.length > 0 ? Math.max(...this.facultyList.map(f => f.id)) + 1 : 1;

    this.facultyList.push({
      id: newId,
      name: this.newFaculty.name,
      email: this.newFaculty.email,
      department: this.newFaculty.department
    });
    this.showAddForm = false;
  }

  deleteFaculty(id: number) {
    this.facultyList = this.facultyList.filter(f => f.id !== id);
  }
  exportToPDF() {
    const doc = new jsPDF();
    doc.text('Faculty List', 14, 16);
    
    const tableData = this.facultyList.map(faculty => [
      faculty.id.toString(),
      faculty.name,
      faculty.email,
      faculty.department
    ]);

    autoTable(doc, {
      head: [['ID', 'Name', 'Email', 'Department']],
      body: tableData,
      startY: 20
    });

    doc.save('faculty_list.pdf');
  }
}
