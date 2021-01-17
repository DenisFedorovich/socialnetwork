import React from 'react';
import classes from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../Utils/FormsControls/FormsControls';
import { required } from '../Utils/Validators/Validators';

const LoginForm = (props) => {
  return (
    <form className={classes.loginform} onSubmit={props.handleSubmit}>
      <div>
        <Field className={classes.loginunput}
          placeholder={'Login'} name={'login'}
          validate={[required]}
          component={Input} />
      </div>
      <div>
        <Field className={classes.loginunput}
          placeholder={'Password'}
          validate={[required]}
          name={'password'} component={Input} />
      </div>
      <div>
        <Field className={classes.loginunput}
          type={'checkbox'} name={'RememberMe'}
          component={Input} />Remember me
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

