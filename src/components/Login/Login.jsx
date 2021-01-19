import React from 'react';
import classes from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../Utils/FormsControls/FormsControls';
import { required } from '../Utils/Validators/Validators';
import { connect } from 'react-redux';
import { login } from './../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
  return (
    <form className={classes.loginform} onSubmit={props.handleSubmit}>
      <div>
        <Field className={classes.loginunput}
          placeholder={'Email'} name={'email'}
          validate={[required]}
          component={Input} />
      </div>
      <div>
        <Field className={classes.loginunput}
          placeholder={'Password'}
          validate={[required]}
          name={'password'}
          type={'password'}
          component={Input} />
      </div>
      <div className={classes.logincheck}>
        <Field type={'checkbox'}
          className={classes.loginreemember}
          name={'RememberMe'}
          component={Input} />
        <span className={classes.loginremember}>Remember me</span>
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
    props.login(formData.email, formData.password, formData.rememberMe)
  } //onSubmit all localdata from Form

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return (
    <div>
      <h2 className={classes.login}>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);

//первый логин возвращает колбэк и диспатчит в санккреатер

