import React from 'react'
import styled from 'styled-components'
import MessageBox from '@/app/_global/components/MessageBox';

import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { Input } from '@/app/_global/components/Forms'
import { SubmitButton } from '@/app/_global/components/Buttons';

const StyledForm = styled.form`
  
`

const JoinForm = ({ errors, action, pending, onChange, onToggle, form }) => {
  
  return (
    <StyledForm action={action} autoComplete="off">
      
      <input type='hidden' name='termsAgree' value={form.termsAgree}></input>

      <Input type='text' name='email' placeholder='이메일' value={form.email} onChange={onChange}/>
      <MessageBox color='danger' message={errors?.email} />
      <Input type='password' name='password' placeholder='비밀번호' value={form.password} onChange={onChange} />
      <MessageBox color='danger'>{errors?.password}</MessageBox>
      <Input type='password' name='confirmPassword' placeholder='비밀번호 확인' value={form.confirmPassword} onChange={onChange}/>
      <MessageBox color='danger'>{errors?.confirmPassword}</MessageBox>
      <Input type='text' name='name' placeholder='이름' value={form.name} onChange={onChange}/>
      <MessageBox color='danger'>{errors?.name}</MessageBox>
      <Input type='text' name='mobile' placeholder='연락처' value={form.mobile} onChange={onChange}/>
      <MessageBox color='danger'>{errors?.mobile}</MessageBox>

      <h3>약관에 동의하십니까?</h3>
      <div className='terms-agree' onClick={onToggle}>
        {form.termsAgree ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} 회원가입 약관에 동의합니다.
      </div>
      <MessageBox color='danger'>{errors?.termsAgree}</MessageBox>
      <div>약관 보러가기...</div>

      <SubmitButton type="submit" disabled={pending}>가입하기</SubmitButton>
      <MessageBox color='danger' message={errors?.global} />
    </StyledForm>
  )
}

export default React.memo(JoinForm)
