import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "./context/FormContext";

function Table() {
    const{formData, deleteEntry, clearData, setEditIndex} = useContext(FormContext);


    const navigate = useNavigate();

    const handleEdit = (index) =>{
        setEditIndex(index);
        navigate('/Employee');
    };

    const addDetails = () =>{
        navigate("/Employee");
    };
    return(
        <>
            <div className="table-container">
                <h1>All Entries</h1>
                <table border="1" cellPadding={10}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Gender</th>
                            <th>Department</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.length === 0?(
                            <tr>
                                <td colSpan='7' style={{textAlign: 'center'}}>No data entered yet.</td>
                            </tr>
                        ):(
                            formData.map((entry, index)=>(
                                <tr key={index}>
                                    <td>{entry.fname}</td>
                                    <td>{entry.lname}</td>
                                    <td>{entry.email}</td>
                                    <td>{entry.phno}</td>
                                    <td>{entry.gender}</td>
                                    <td>{entry.dept}</td>
                                    <td>
                                        <button onClick={()=> handleEdit(index)}>Edit</button>
                                        <button onClick={()=> deleteEntry(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                
                <div className="button-container">
                    <button onClick={addDetails}>ADD</button>
                    <button onClick={clearData} disabled={formData === 0}>CLEAR TABLE</button>
                </div>
            </div>
        </>
    );
}

export default Table
