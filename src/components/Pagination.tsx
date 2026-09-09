import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "../css/Pagination.css"
import useDebounce from "../hooks/useDebounce"

interface PaginationProp {
  currentPage: number
  entryPerPage: number
  totalPage: number
  offset: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  setEntryPerPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination: React.FC<{ paginationProp: PaginationProp }> = (prop) => {
  const {
    currentPage,
    entryPerPage,
    totalPage,
    offset,
    setCurrentPage,
    setEntryPerPage,
  } = prop.paginationProp

  const [localEntry, setLocalEntry] = useState(entryPerPage)
  const debounceValue = useDebounce(localEntry, 1000)

  const onClickPrevious = () => {
    if (currentPage <= 1) return
    setCurrentPage((prev) => prev - 1)
  }

  const onClickNext = () => {
    if (currentPage >= totalPage) return
    setCurrentPage((prev) => prev + 1)
  }

  useEffect(() => {
    if (Number.isNaN(localEntry) || localEntry < 1) {
      setLocalEntry(entryPerPage)
      return
    }
    setEntryPerPage(localEntry)
  }, [debounceValue])

  const before = Array.from({
    length: currentPage - Math.max(currentPage - offset, 1),
  })
    .map((_, i) => currentPage - (i + 1))
    .reverse()

  const after = Array.from({
    length: Math.min(currentPage + offset, totalPage) - currentPage,
  }).map((_, i) => currentPage + i + 1)

  return (
    <nav className="Pagination" aria-label="Pagination">
      <div className="pagination-pages">
        <button
          type="button"
          className="page-btn"
          onClick={onClickPrevious}
          disabled={currentPage <= 1}
          aria-label="Previous page"
        >
          <ChevronLeft size={18} />
        </button>
        {before.map((n) => (
          <button
            type="button"
            className="page-btn"
            key={`before${n}`}
            onClick={() => setCurrentPage(n)}
          >
            {n}
          </button>
        ))}
        <button type="button" className="page-btn active" aria-current="page">
          {currentPage}
        </button>
        {after.map((n) => (
          <button
            type="button"
            className="page-btn"
            key={`after${n}`}
            onClick={() => setCurrentPage(n)}
          >
            {n}
          </button>
        ))}
        <button
          type="button"
          className="page-btn"
          onClick={onClickNext}
          disabled={currentPage >= totalPage}
          aria-label="Next page"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <label className="pagination-per-page">
        <span>Per page</span>
        <input
          className="input"
          type="number"
          min={1}
          onChange={(event) => setLocalEntry(Number.parseInt(event.target.value))}
          value={Number.isNaN(localEntry) ? "" : localEntry}
        />
      </label>
    </nav>
  )
}

export default Pagination
