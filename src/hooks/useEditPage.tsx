import { useEffect, useRef, useState } from "react"
import { LoadingState } from "../components/FormCircleLoading"
import useFakeApi from "./useFakeApi"
import { useLoadingProvider } from "../providers/LoadingProvider"

const useEditPage = () => { 

    const {startLoading, stopLoading} = useLoadingProvider()

    const {
        getProfileData,
        usernameAvailable, 
        emailAvailable, 
        phoneAvailable, 
        leetcodeAvailable
    } = useFakeApi()

    const [usernameError, setUsernameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [leetcodeError, setLeetcodeError] = useState("")

    const [usernameLoading, setUsernameLoading] = useState<LoadingState>("")
    const [passwordLoading, setPasswordLoading] = useState<LoadingState>("")
    const [emailLoading, setEmailLoading] = useState<LoadingState>("")
    const [phoneLoading, setPhoneLoading] = useState<LoadingState>("")
    const [leetcodeLoading, setLeetcodeLoading] = useState<LoadingState>("")

    const formRef = useRef<HTMLFormElement>(null)

    const usernameTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement >) => {
        if(usernameTimeout.current) {
            clearTimeout(usernameTimeout.current)
        }
        setUsernameLoading("loading")
        setUsernameError("") 
        usernameTimeout.current = setTimeout(() => {
            if(!/^[\w]+$/.test(e.target.value)) {
                setUsernameLoading("fail")
                setUsernameError("Requirement: Alphanumeric with no space or special character.")
                return 
            }

            usernameAvailable(e.target.value)
            .then(result => {
                if(result) {
                    setUsernameLoading("success")
                    setUsernameError("") 
                    return
                }
                setUsernameLoading("fail")
                setUsernameError("Username not available!") 
            })
            .catch(() => {
                setUsernameLoading("fail")
                setUsernameError("Unexpected error!") 
            })
        }, 1000)
    }

    const passwordTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement >) => {
        if(passwordTimeout.current) {
            clearTimeout(passwordTimeout.current)
        }
        setPasswordLoading("loading")
        setPasswordError("")
        passwordTimeout.current = setTimeout(() => {
            if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(e.target.value)) {
                setPasswordLoading("fail")
                setPasswordError("Requirement: Minimum eight characters, at least one uppercase letter, one lowercase letter and one number.")
                return 
            }
            setPasswordLoading("success")
            setPasswordError("")
        }, 1000)
    }

    const emailTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement >) => {
        if(emailTimeout.current) {
            clearTimeout(emailTimeout.current)
        }
        setEmailLoading("loading")
        setEmailError("")
        emailTimeout.current = setTimeout(() => {
            const isValid = e.target.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if(!isValid) {
                setEmailLoading("fail")
                setEmailError("Please enter a valid email address!")
                return
            }
            
            emailAvailable(e.target.value)
            .then(result => {
                if(result) {
                    setEmailLoading("success")
                    setEmailError("")
                    return
                }
                setEmailLoading("fail")
                setEmailError("This email is already in use!")
            })
            .catch(() => {
                setEmailLoading("fail")
                setEmailError("Unexpected error!")
            })
        }, 1000)
    }

    const phoneTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const onChangePhone = (e: React.ChangeEvent<HTMLInputElement >) => {
        if(phoneTimeout.current) {
            clearTimeout(phoneTimeout.current)
        }
        setPhoneLoading("loading")
        setPhoneError("")
        phoneTimeout.current = setTimeout(() => {
            if(!/^[0-9]{10}$/.test(e.target.value)) {
                setPhoneLoading("fail")
                setPhoneError("Please enter a valid phone number")
                return
            }

            phoneAvailable(e.target.value)
            .then(result => {
                if(result) {
                    setPhoneLoading("success")
                    setPhoneError("")
                    return
                }
                setPhoneLoading("fail")
                setPhoneError("This phone number already in use!")
            })
            .catch(() => {
                setPhoneLoading("fail")
                setPhoneError("Unexpected error!")
            })
        }, 1000)
    }

    const leetcodeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const onChangeLeetcode = (e: React.ChangeEvent<HTMLInputElement >) => {
        if(leetcodeTimeout.current) {
            clearTimeout(leetcodeTimeout.current)
        }
        setLeetcodeLoading("loading")
        setLeetcodeError("")
        leetcodeTimeout.current = setTimeout(() => {
            leetcodeAvailable(e.target.value)
            .then(result => {
                if(result) {
                    setLeetcodeLoading("success")
                    setLeetcodeError("")
                    return
                }
                setLeetcodeLoading("fail")
                setLeetcodeError("This leetcode username doesn't exist")
            })
            .catch(() => {
                setLeetcodeLoading("fail")
                setLeetcodeError("Unexpected error!")
            })
        }, 1000)
    }

    const onSubmitSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("WOW")
    }

    useEffect(() => {
        startLoading()
        getProfileData()
        .then(data => {
            if(!formRef.current){
                return
            }
            (formRef.current.elements.namedItem('username') as HTMLInputElement).value = data.username;
            (formRef.current.elements.namedItem('password') as HTMLInputElement).value = data.password;
            (formRef.current.elements.namedItem('email') as HTMLInputElement).value = data.email;
            (formRef.current.elements.namedItem('role') as HTMLInputElement).value = data.role;
            (formRef.current.elements.namedItem('phone') as HTMLInputElement).value = data.phone;
            (formRef.current.elements.namedItem('leetcode') as HTMLInputElement).value = data.leetcode;
            (formRef.current.elements.namedItem('street') as HTMLInputElement).value = data.street;
            (formRef.current.elements.namedItem('city') as HTMLInputElement).value = data.city;
            (formRef.current.elements.namedItem('state') as HTMLInputElement).value = data.state;
            (formRef.current.elements.namedItem('zipcode') as HTMLInputElement).value = data.zipcode;
            (formRef.current.elements.namedItem('about-me') as HTMLInputElement).value = data.aboutMe
            stopLoading()
        })
    }, [])

    return {
        formRef,
        usernameError,
        passwordError,
        emailError,
        phoneError,
        leetcodeError,
        usernameLoading,
        passwordLoading,
        emailLoading,
        phoneLoading,
        leetcodeLoading,
        onChangeUsername,
        onChangePassword,
        onChangeEmail,
        onChangePhone,
        onChangeLeetcode,
        onSubmitSave
    }

}

export default useEditPage