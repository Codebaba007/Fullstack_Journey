import "./App.css";

function DashboardHeader({ title, subtitle}){
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

function StudentCard({ name ,id ,department ,cgpa, status}){
  return (
    <article>
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Department: {department}</p>
      <p>CGPA: {cgpa}</p>
      <p>Status: {status}</p>
    </article>
  );
}

function App(){
  return (
    <div className="dashboard">
      <DashboardHeader
        title="Student Dashboard"
        subtitle="Manage your student information"
      />
      <StudentCard
        name = "Mehedi"
        id = "12345"
        department = "Computer Science"
        cgpa = "3.8"
        status = "Active"
      />
      <StudentCard
                name="Rahim"
                id={102}
                department="EEE"
                cgpa={3.60}
                status="Active"
      />

      <StudentCard
                name="Karim"
                id={103}
                department="BBA"
                cgpa={3.40}
                status="Inactive"
      />

    </div>
  )
}

export default App;