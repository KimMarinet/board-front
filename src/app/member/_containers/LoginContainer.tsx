'use client'

import React, { useActionState, useState, useCallback, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import LoginFrom from "../_components/LoginFrom"

import { processLogin } from "../_services/actions"

type FromType = {
    email: string
    password: string
    redirectUrl?: string
}

const LoginContainer = () => {
    const [errors, action, pending] = useActionState<any, any>(processLogin, {})
    const [form, setForm] = useState<FromType>({
        email: '',
        password: '',
    })

    const searchParams = useSearchParams();
    useEffect(() => {
        const redirectUrl = searchParams.get('redirectUrl')?.toString()
        setForm(prev => ({...prev, redirectUrl}))

    },[searchParams])

    const onChange = useCallback((e) => {
        setForm((prev) => ({...prev, [e.target.name]: e.target.value}))
    }, [])

    return (<LoginFrom errors={errors} action={action} pending={pending} form={form} onChange={onChange}/>)
}

export default React.memo(LoginContainer)
