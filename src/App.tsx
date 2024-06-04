import { Page } from "./components/Page";
import { useLocation } from "react-router-dom";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import { NPATG_headings, NPATG_data, Customer_headings, Customer_data, Product_headings, Product_data  } from "./assets/data";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
};

const Content: React.FC = () => {
  const location= useLocation();

  return (
    <div className='h-screen flex flex-col justify-center'>
      <h1 className="p-5 text-3xl text-center">Data Table Samples</h1>  
      {location.pathname === "/ReusableTableComponent" && <p className="text-xl text-center">Click on one of the examples to see the corressponding tables</p>} 
      <nav className="flex justify-center gap-4 pt-8">
        <Link to="/ReusableTableComponent">Home |</Link>
        <Link to="/ReusableTableComponent/example1">Example 1 |</Link>
        <Link to="/ReusableTableComponent/example2">Example 2 |</Link>
        <Link to="/ReusableTableComponent/example3">Example 3</Link>       
      </nav>
      <Routes>
        <Route path="/ReusableTableComponent/example1" element={<Page heading={"NPATG-Game"} heading_arr={NPATG_headings} data_arr={NPATG_data} />} />
        <Route path="/ReusableTableComponent/example2" element={<Page heading={"Customer-Data"} heading_arr={Customer_headings} data_arr={Customer_data} />} />
        <Route path="/ReusableTableComponent/example3" element={<Page heading={"Product-Data"} heading_arr={Product_headings} data_arr={Product_data} />} />
      </Routes>
    </div>
  );
};

export default App;