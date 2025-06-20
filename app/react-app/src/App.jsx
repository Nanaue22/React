import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employee from "./Employee";
import Table from "./Table";
import { FormProvider } from "./context/FormContext";
function App() {
  return(
    <FormProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Table/>}/>
            <Route path="/Employee" element={<Employee/>}/>
          </Routes>
      </Router>
    </FormProvider>
  );
}

export default App
