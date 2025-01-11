const registerOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = (e.currentTarget.elements.namedItem('username') as HTMLInputElement).value
    const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value
    const confirmPassword = (e.currentTarget.elements.namedItem('confirm-password') as HTMLInputElement).value
    let errorMessage = ""
    if(password !== confirmPassword) {
        alert("Passwords do not match!")
        return;
    }
    fetch("https://auth.dearborncodingclub.com" + "/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username: username, password: password})
    })
    .then(res => {
        if(res.status !== 200) {
            throw new Error();
        }
        return res.json()
    })
    .then(res => {
        if (res.status !== 200) {
            throw new Error();
        }
        alert("Successfully registered!")
    })
    .catch((e) => {
        errorMessage = e.message
        alert("Username already exists!")
    })

    return {errorMessage}
}

export {registerOnSubmit}