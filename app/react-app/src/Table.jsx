import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
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

    const [sortConfig, setSortConfig] = useState({key:'', direction:''});

    const sortedData = [...formData].sort((a, b)=>{
        const {key, direction} = sortConfig;
        if(!key) return 0;

        const valA = a[key].toString().toLowerCase();
        const valB = b[key].toString().toLowerCase();
        if(valA<valB) return direction === 'asc'?-1:1;
        if(valA>valB) return direction === 'asc'?1:-1;
        return 0;
    });

    const handleSortChange = (key, direction)=>{
        setSortConfig({key, direction});
    };

    return(
        <>
            <div className="table-container">
                <h1>All Entries</h1>
                <table border="1" cellPadding={10}>
                    <thead>
                        <tr>
                            <th>First Name
                                <select onChange={(e)=>handleSortChange('fname', e.target.value)}>
                                    <option value="">Sort</option>
                                    <option value="asc">A-Z</option>
                                    <option value="dsc">Z-A</option>
                                </select>
                            </th>
                            <th>Last Name
                                <select onChange={(e)=>handleSortChange('lname', e.target.value)}>
                                    <option value="">Sort</option>
                                    <option value="asc">A-Z</option>
                                    <option value="dsc">Z-A</option>
                                </select>
                            </th>
                            <th>Email
                                <select onChange={(e)=>handleSortChange('email', e.target.value)}>
                                    <option value="">Sort</option>
                                    <option value="asc">A-Z</option>
                                    <option value="dsc">Z-A</option>
                                </select>
                            </th>
                            <th>Phone number
                                <select onChange={(e)=>handleSortChange('phno', e.target.value)}>
                                    <option value="">Sort</option>
                                    <option value="asc">A-Z</option>
                                    <option value="dsc">Z-A</option>
                                </select>
                            </th>
                            <th>Gender
                                <select onChange={(e)=>handleSortChange('gender', e.target.value)}>
                                    <option value="">Sort</option>
                                    <option value="asc">A-Z</option>
                                    <option value="dsc">Z-A</option>
                                </select>
                            </th>
                            <th>Department
                                <select onChange={(e)=>handleSortChange('dept', e.target.value)}>
                                    <option value="">Sort</option>
                                    <option value="asc">A-Z</option>
                                    <option value="dsc">Z-A</option>
                                </select>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.length === 0?(
                            <tr>
                                <td colSpan='7' style={{textAlign: 'center'}}>No data entered yet.</td>
                            </tr>
                        ):(
                            sortedData.map((entry, index)=>(
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
