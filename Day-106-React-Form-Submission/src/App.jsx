import { useState } from "react";
import "./App.css";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: "CSE"
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData(previousData => ({
            ...previousData,
            [name]: value
        }));

        setIsSubmitted(false);
    }

    function handleSubmit(event) {
        event.preventDefault();

        setIsSubmitted(true);

        console.log("Submitted student:", formData);
    }

    return (
        <main className="registration">
            <h1>Student Registration</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="student-name">Full Name</label>

                    <input
                        id="student-name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="student-email">Email</label>

                    <input
                        id="student-email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="student-department">
                        Department
                    </label>

                    <select
                        id="student-department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                    >
                        <option value="CSE">CSE</option>
                        <option value="EEE">EEE</option>
                        <option value="BBA">BBA</option>
                    </select>
                </div>

                <button type="submit">Register Student</button>
            </form>

            {isSubmitted && (
                <section className="success-message">
                    <h2>Registration Submitted!</h2>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Department: {formData.department}</p>
                </section>
            )}
        </main>
    );
}

export default App;