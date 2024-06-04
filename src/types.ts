//// Define interface for table heading's row
export interface IHeading {
  id: string,
  label: string,
}

// Define interface for table data rows
export interface IData {
  id : string,
  [key: string]: string; //Index signature used here to allow for n number of data-entries as key-value pairs
}

// Define props interface for Page and Table components
export interface PageProps {
  heading: string,
  heading_arr: IHeading[] | null,
  data_arr : IData[] | null,
  pageNumberVar : number | null,
  setPageNumberFunction : (pageNumber : number) => void,
  sortingFn : (heading_index: number, order : 'asc' | 'desc') => void
}

//Customize the usage of Pageprops interface for multiple components
export type TableAndPageProps = Partial<PageProps>