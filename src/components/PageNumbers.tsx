import { TableAndPageProps } from "../types"

export const PageNumbers: React.FC<TableAndPageProps> = ({pageNumberVar, setPageNumberFunction, data_arr}) => {
    if (!data_arr || !setPageNumberFunction || !pageNumberVar) return null;

    return <>
      <div className="flex justify-center my-6 gap-5">
            {pageNumberVar > 1 && <button onClick={()=>setPageNumberFunction(pageNumberVar - 1)}>◀</button>}
            {[...Array(Math.ceil(data_arr.length/10))].map((_,i)=>
                  <button key={i} onClick={()=>setPageNumberFunction(i+1)}>{i+1}</button>
            )}
            {pageNumberVar < Math.ceil(data_arr.length/10) &&<button onClick={()=>setPageNumberFunction(pageNumberVar + 1)}>▶</button>}
        </div>
    </>
}