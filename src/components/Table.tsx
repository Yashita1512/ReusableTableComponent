import { TableAndPageProps} from "../types"

export const Table: React.FC<TableAndPageProps> = ({heading_arr, data_arr, pageNumberVar, sortingFn}) => {
    return (          
    <div className="flex justify-center">
        <table>
            <thead>
                {(heading_arr && heading_arr.length!==0 && sortingFn)?
                <tr className="text-xl">
                    {heading_arr.map((heading_entry, index) => (
                        <th 
                            key={`${heading_entry.id}_${index}`} 
                            className= "border border-gray-300 py-2 px-6 bg-slate-400"
                        ><div className="flex items-center justify-center gap-3">
                            <div>{heading_entry.label}</div>  
                            <div className="flex-col">
                                <div className="text-xs hover:cursor-pointer" onClick={()=>sortingFn(index, "asc")}> ▲ </div>
                                <div className="text-xs hover:cursor-pointer" onClick={()=>sortingFn(index, "desc")}> ▼ </div> 
                            </div>
                        </div>    
                        </th>
                    ))}
                </tr> : <tr className="text-center">No data to display!</tr>}
            </thead>
            <tbody>
                {(data_arr && data_arr.length!==0 && pageNumberVar)? data_arr.slice(pageNumberVar*10 - 10,pageNumberVar*10).map((data_object, index) => (
                    <tr 
                        key={`${data_object.id}_${index}`} 
                        className={`${index % 2 !==0 && 'bg-slate-300'}`}
                    >{Object.values(data_object).slice(1).map((data_entry, index) =>{
                        return <td 
                                    key={`${data_object.id}_${index}`} 
                                    className="border border-gray-300 py-2 px-6"
                                >{data_entry}
                                </td>
                    })}
                    </tr>
                )) : <tr className="text-center">No data to display!</tr>}
            </tbody>
        </table>
    </div>
    )
}

