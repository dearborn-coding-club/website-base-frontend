import React from "react"
import "../css/Toast.css"
import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react"
import { toastType, useToastProvider } from "../providers/ToastProvider"

const ICONS: Record<toastType, React.ReactNode> = {
  [toastType.SUCCESS]: <CheckCircle2 size={20} aria-hidden="true" />,
  [toastType.ERROR]: <XCircle size={20} aria-hidden="true" />,
  [toastType.INFO]: <Info size={20} aria-hidden="true" />,
  [toastType.WARNING]: <AlertTriangle size={20} aria-hidden="true" />,
}

const Toast: React.FC = () => {
  const { toastMessageList, closeToastMessage } = useToastProvider()

  return (
    <div className="Toast" aria-live="polite" aria-relevant="additions">
      {toastMessageList.map((e, i) => {
        if (!e.visible) return null
        return (
          <div key={i} className={`toast-tile ${e.toastType}`} role="status">
            <div className="icon">{ICONS[e.toastType]}</div>
            <div className="message">{e.message}</div>
            <button
              type="button"
              className="close"
              aria-label="Dismiss"
              onClick={() => closeToastMessage(i)}
            >
              <X size={16} />
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Toast
