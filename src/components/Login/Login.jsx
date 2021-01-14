import React from 'react';
import classes from './Login.module.css';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form className={classes.loginform} onSubmit={props.handleSubmit}>
      <div>
        <Field className={classes.loginunput} placeholder={'Login'} name={'login'} component={'input'} />
      </div>
      <div>
        <Field className={classes.loginunput} placeholder={'Password'} name={'password'} component={'input'} />
      </div>
      <div>
        <Field className={classes.loginunput} type={'checkbox'} name={'RememberMe'} component={'input'} />Remember me
      </div>
      <div>
        <button className={classes.btn}>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login' //form name
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  } //onSubmit all localdata from Form

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}


export default Login;

