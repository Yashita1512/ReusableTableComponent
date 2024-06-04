export interface IHeading {
  id: string,
  label: string,
}

export interface IData {
  id : string,
  [key: string]: string;
}

export interface PageProps {
  heading: string,
  heading_arr: IHeading[] | null,
  data_arr : IData[] | null,
  pageNumberVar : number | null,
  setPageNumberFunction : (pageNumber : number) => void,
  sortingFn : (heading_index: number, order : 'asc' | 'desc') => void
}

export type TableAndPageProps = Partial<PageProps>