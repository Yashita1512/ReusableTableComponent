export const TableHeading = ({heading} : {heading: string}): JSX.Element => {
    return (
        <>
            <h2 className="p-8 text-xl text-center">{heading}</h2>
        </>
    )
}