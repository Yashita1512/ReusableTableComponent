//react APIs
import { useState, useEffect} from "react";
//Types
import { TableAndPageProps } from "../types";
import { IData } from "../types";
//React Components
import { TableHeading } from "./TableHeading";
import { Table } from "./Table"
import { PageNumbers } from "./PageNumbers";


export const Page = ({heading, heading_arr, data_arr} : TableAndPageProps ): JSX.Element => {
    //State variables for React to hook into and dynamically render the components
    const [data, setData] = useState(data_arr);
    const [headings, setHeadings] = useState(heading_arr)
    const [pageNumber, setPageNumber] = useState(1);
    
    //handles setting the arrays to the right input arrays as and when either the example heading changes or the page numbers are changed for the same example.
    useEffect (() => {
        setData(data_arr || []);
        setHeadings(heading_arr || []);
    }, [heading, pageNumber]);

    //Resets the page number to 1 so that whenever new example is clicked upon the 1st page of a new table renders by default. 
    useEffect (() => {
       setPageNumber(1)
    }, [heading]);

    //sorting algorithm and setting data variable to the sorted data thereafter
    function sortRow(heading_index: number, order : 'asc' | 'desc'){
        const dataToSort: IData[] = data ?? [] 
        const key: string = (Object.keys(dataToSort[0]))[heading_index + 1];
        const sortedData = [...dataToSort].sort((a, b)=>{
            if(a[key] < b[key])return order == 'asc' ? -1 : 1;
            if(a[key] > b[key])return order == 'asc' ? 1 : -1;
            return 0;
        })
        setData(sortedData)
    }

    return <>
        {heading && <TableHeading heading={heading}/>}
        <Table heading_arr={headings} data_arr={data} pageNumberVar={pageNumber} sortingFn={sortRow}/>
        <PageNumbers pageNumberVar={pageNumber} setPageNumberFunction={setPageNumber} data_arr={data}/>
    </>
}