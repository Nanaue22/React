import { useState, useContext, useEffect } from "react";
import { FormContext } from "./context/FormContext";
import { useNavigate } from "react-router-dom";

function Details(){
    const{formData, addEntry, updateEntry, editIndex, setEditIndex} = useContext(FormContext);
    const[input, setInput] = useState({fname:'', lname:'', email:'', phno:'', gender:'', dept:'' });
    const navigate = useNavigate();

    useEffect(()=>{
        if(editIndex!==null){
            setInput(formData[editIndex]);
        }
    }, [editIndex, formData]);

    const handleChange = (e) =>{
        setInput({...input, [e.target.name]: e.target.value});
    };

    const handleCancel = (e)=> {
        setEditIndex(null);
        navigate('/');
    };
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(editIndex !== null){
            updateEntry(editIndex, input);
        } else {
            addEntry(input);
        }
        setEditIndex(null);
        navigate('/');
    };

    return(
        <form onSubmit={handleSubmit}>
            <section>
                <fieldset className="container">
                    <div className="form-group">
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" name="fname" value={input.fname} onChange={handleChange} size={30} required/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" name="lname" value={input.lname} onChange={handleChange} size={30} required/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={input.email} onChange={handleChange} size={30} required/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="phno">Phone number:</label>
                    <input type="tel" name="phno" value={input.phno} onChange={handleChange} pattern="[0-9]{10}" required/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <label>
                        <input type="radio" name="gender" value="Male" checked={input.gender==='Male'} onChange={handleChange} required/>Male
                    </label>
                    <label>
                    <input type="radio" name="gender" value="Female" checked={input.gender === 'Female'} onChange={handleChange} required/>Female
                    </label>
                    <label>
                    <input type="radio" name="gender" value="Other" checked={input.gender === 'Other'} onChange={handleChange} required/>Other
                    </label>
                    </div>

                    <div className="form-group">
                    <label htmlFor="dept">Department:</label>
                    <select name="dept" value={input.dept} onChange={handleChange} required>
                        <option value="">--Select--</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Design">Design</option>
                    </select>
                    </div>

                    
                    <div className="button-container-3">
                        <button type="submit" className="hover-sbt">Submit</button>
                        <button type="button" onClick={handleCancel} className="hover-cncl">Cancel</button>
                    </div>
                </fieldset>
            </section>
        </form>
    );
}

export default Details