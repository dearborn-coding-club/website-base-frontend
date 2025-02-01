import { useEffect, useState } from "react"
import "../css/Pagination.css"
import useDebounce from "../hooks/useDebounce"

interface PaginationProp {
    currentPage: number
    entryPerPage: number
    totalPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    setEntryPerPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<{paginationProp: PaginationProp}> = (prop) => {

    const {
        currentPage,
        entryPerPage,
        totalPage, 
        setCurrentPage,
        setEntryPerPage
    } = prop.paginationProp

    const offset = 5;    

    const [localEntry, setLocalEntry] = useState(entryPerPage)

    const debounceValue = useDebounce(localEntry, 1000);

    const onClickPrevious = () => {
        if(currentPage<=1) {
            return
        } 
        setCurrentPage(prev => prev-1)
    }

    const onClickNext = () => {
        if(currentPage>=totalPage) {
            return
        } 
        setCurrentPage(prev => prev+1)
    }
    

    useEffect(() => {
        if(Number.isNaN(localEntry)) {
            setLocalEntry(entryPerPage)
            return
        }
        if(localEntry < 1) {
            setLocalEntry(entryPerPage)
            return
        }
        setEntryPerPage(localEntry)
    }, [debounceValue]);

    return (
        <div className="Pagination">
            <div onClick={onClickPrevious}>&laquo;</div>
            {
                Array.from({length: currentPage - Math.max(currentPage-offset, 1)})
                .map((_,i) => <div key={`brefore${i}`} onClick={() => setCurrentPage(currentPage-(i+1))}>{currentPage-(i+1)}</div>)
                .reverse()
            }
            <div className="active">{currentPage}</div>
            {
                Array.from({length: Math.min(currentPage+offset, totalPage) - currentPage})
                .map((_,i) => <div key={`after${i}`} onClick={() => setCurrentPage(currentPage+i+1)}>{currentPage+i+1}</div>)
            }
            <div onClick={onClickNext}>&raquo;</div>
            <input 
                className="entry-per-page" 
                type="number" min={1} 
                onChange={(event) => setLocalEntry(Number.parseInt(event.target.value))} 
                value={localEntry}
            >    
            </input>
        </div>
    )
}

export default Pagination