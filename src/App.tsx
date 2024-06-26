//react APIs
import { Link } from "react-router-dom";
import {Route, BrowserRouter, Routes} from "react-router-dom";
//react components
import { Page } from "./components/Page";
//data from in-memory arrays
import { NPATG_headings, NPATG_data, Customer_headings, Customer_data, Product_headings, Product_data } from "./assets/data";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
};

const Content: React.FC = () => {

  return (
    <div className='h-screen flex flex-col justify-center'>
      <h1 className="p-5 text-3xl text-center">Data Table Samples</h1>  
      {/* Navigation Links */}
      <nav className="flex justify-center gap-4 p-8">
        <Link to="/ReusableTableComponent">Home |</Link>
        <Link to="/ReusableTableComponent/example1">Example 1 |</Link>
        <Link to="/ReusableTableComponent/example2">Example 2 |</Link>
        <Link to="/ReusableTableComponent/example3">Example 3</Link>       
      </nav>
      {/* React frontend routing */}
      <Routes>
        <Route path="/ReusableTableComponent" element={<p className="text-xl text-center">Click on one of the examples to see the corressponding tables</p>}/>
        <Route path="/ReusableTableComponent/example1" element={<Page heading={"NPATG-Game"} heading_arr={NPATG_headings} data_arr={NPATG_data} />} />
        <Route path="/ReusableTableComponent/example2" element={<Page heading={"Customer-Data"} heading_arr={Customer_headings} data_arr={Customer_data} />} />
        <Route path="/ReusableTableComponent/example3" element={<Page heading={"Product-Data"} heading_arr={Product_headings} data_arr={Product_data} />} />
      </Routes>
    </div>
  );
};

export default App;