import "../css/FormCircleLoading.css"

export type loadingState = "" | "loading" | "fail" | "success"

const FormCircleLoading: React.FC<{result: loadingState}> = (prop) => {
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