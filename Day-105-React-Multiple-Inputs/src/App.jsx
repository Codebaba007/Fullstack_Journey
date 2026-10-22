import { useState } from 'react'
import './App.css'

function App(){
  const [formData, setFromData] = useState({
      name: '',
      email: '',
      department: '',
      id: ''
    });
  
    function handleChange(event){
      const {name, value} = event.target;

      setFromData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));

    }
    return(
      <main className='registration'>
        <h1>
          Student Registration
        </h1>
        <form>
          <div className= "form-group">
            <label htmlfor="studetn-name">
              Full name</label>
            <input
            id="student-name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            onChange={handleChange}
            value={formData.name}/>
          </div>
          <div className= "form-group">
            <label htmlfor="student-email">
              Email</label>
            <input
            id="student-email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}/>
      
          </div>

          <div className= "form-group">
            <label htmlfor="student-id">
              Student ID</label>
            <input
            id="student-id"
            name="id"
            type="text"
            placeholder="Enter your student ID"
            value={formData.id}
            onChange={handleChange}/>
          </div>



          <div className= "form-group">
            <label htmlfor="student-department">
              Department</label>
            <select 
             id="student-department"
             name="department"
             onChange={handleChange}
             value={formData.department}>
            <option value="CSE">Computer Science and Engineering</option>
            <option value="ECE">Electronics and Communication Engineering</option>
            <option value="ME">Mechanical Engineering</option>

            </select>
          </div>
        </form>
        <section className='preview'>
          <h2>Live preview</h2>
          <p>Name: {formData.name || 'Not provided'}</p>
          <p>Email: {formData.email || 'Not provided'}</p>
          <p>Student ID: {formData.id || 'Not provided'}</p>
          <p>Department: {formData.department || 'Not provided'}</p>

        </section>
      </main>
    )

}
export default App