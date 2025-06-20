import { Children, createContext, useState } from "react";
// import { data } from "react-router-dom";
export const FormContext = createContext();
export const FormProvider = ({children}) =>{
    const[formData, setFormData] = useState([]);
    const[editIndex, setEditIndex] = useState(null);

    const addEntry = (data) =>{
        setFormData((prev) => [...prev, data]);
    };

    const updateEntry = (index, newData)=>{
        setFormData((prev) => prev.map((entry, i)=>(i===index ? newData: entry))
        );
        setEditIndex(null);
    };

    const deleteEntry = (indexToDelete)=>{
        const confirmDelete = window.confirm('Are you sure you want to delete?');
        if(confirmDelete){
            setFormData((prev)=>prev.filter((_,index)=>index!==indexToDelete));
        }
    };

    const clearData = ()=>{
        const confirmClear = window.confirm('Are you sure you want to clear all?');
        if(confirmClear){
            setFormData([]);
        }
    };
    return(
        <FormContext.Provider value={{formData, addEntry, deleteEntry, clearData, updateEntry, editIndex, setEditIndex}}>
            {children}
        </FormContext.Provider>
    );
};