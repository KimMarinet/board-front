import React from "react";
import styled from "styled-components";
import MessageBox from "@/app/_global/components/MessageBox";

import { Input } from "@/app/_global/components/Forms";
import { SubmitButton } from "@/app/_global/components/Buttons";

const StyledForm = styled.form`

`

const LoginForm = ({errors, action, pending, form, onChange}) => {
    return (
        <StyledForm action={action} autoComplete="off">
            <input type="hidden" name="redirectUrl" value={form.redirectUrl ?? ''} />
            <Input type="text" name="email" placeholder="이메일" value={form.email} onChange={onChange}/>
            <MessageBox color="danger" message={errors?.email} />
            <Input type="password" name="password" placeholder="비밀번호" value={form.password} onChange={onChange} />
            <MessageBox color="danger" message={errors?.password} />

            <SubmitButton type="submit" disabled={pending}>가입하기</SubmitButton>
        </StyledForm>
    )
}

export default React.memo(LoginForm)