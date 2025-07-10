# 🎓 Angular College Dashboard

This is a simple and elegant Angular-based dashboard for managing **Students** and **Faculty** in a small college setup. Built as a learning project, it showcases core Angular concepts along with Angular Material for a polished and responsive UI.

---

## 🚀 Features

- 🔐 Login page (basic routing)
- 📋 Dashboard layout with:
  - Sidebar navigation
  - Header and footer
- 👨‍🎓 Students Management:
  - Add new student
  - Search/filter students
  - Export student list to PDF
- 👨‍🏫 Faculty Management:
  - Add new faculty
  - Search/filter faculty
  - Export faculty list to PDF
- 📂 Organized routing with child routes
- 🎨 Clean UI using Angular Material components

---

## 🛠️ Technologies Used

- [Angular 17+](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [jsPDF](https://github.com/parallax/jsPDF) & [jsPDF-AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable)
- TypeScript, HTML, SCSS/CSS

---

## 📦 Installation & Setup


```bash
# Clone the repository
git clone https://github.com/varshithnathani/Angular.git
cd Angular/project1

# Install dependencies
npm install

# Run the development server
ng serve

```

## 📁 Project Strecture 

project1/
│
├── src/
│   ├── app/
│   │   ├── dashboard/       # Main layout with sidenav + router-outlet
│   │   ├── students/        # Student module and logic
│   │   ├── faculty/         # Faculty module and logic
│   │   ├── login/           # Login component (basic)
│   │   └── app.routes.ts    # Application routes
│   └── index.html
│
├── angular.json
├── package.json
└── README.md




🧑‍💻 Author
Varshith Nathani
GitHub: @varshithnathani
