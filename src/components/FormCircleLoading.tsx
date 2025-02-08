import "../css/FormCircleLoading.css"

export type LoadingState = "" | "loading" | "fail" | "success"

const FormCircleLoading: React.FC<{result: LoadingState}> = (prop) => {
    const result = prop.result
    return (
        <div className="FormCircleLoading">
            <div className={`circle ${result}`}>
                {result == "success" ? "✓" : null}
                {result == "fail" ? "⨯" : null}
            </div>
        </div>
    )
}

export default FormCircleLoading