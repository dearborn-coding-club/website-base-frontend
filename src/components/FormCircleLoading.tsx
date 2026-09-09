import "../css/FormCircleLoading.css"
import { Check, X } from "lucide-react"

export type LoadingState = "" | "loading" | "fail" | "success"

const LABELS: Record<LoadingState, string> = {
  "": "",
  loading: "Checking",
  success: "Looks good",
  fail: "Needs attention",
}

const FormCircleLoading: React.FC<{ result: LoadingState }> = (prop) => {
  const result = prop.result
  return (
    <div className="FormCircleLoading" role="status" aria-live="polite">
      <div className={`circle ${result}`} title={LABELS[result]}>
        {result === "success" && <Check size={14} strokeWidth={3} />}
        {result === "fail" && <X size={14} strokeWidth={3} />}
      </div>
      <span className="sr-only">{LABELS[result]}</span>
    </div>
  )
}

export default FormCircleLoading
