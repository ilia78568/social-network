import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, Textarea } from '../../common/FormsControl/FormsControl'
import s from './ProfileInfo.module.css'


const ProfileDataForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit}>
         <button >save</button>
        <div>Fullname</div>
        <Field validate={[]} placeholder={'ful name'} name={'fullName'} component={Input}/>
        <div>
          <b>looking for a job</b> <Field name={'lookingForAJob'} component={Input} type={'checkbox'} />
        </div>
        <div>
        <b>My professional skills</b> <Field name={'lookingForAJobDescription'} component={Textarea} placeholder={'My professional skills'} />
        </div>
        <div>
          <b>About me</b> <Field name={'aboutMe'} component={Textarea} placeholder={'About me'} />
        </div>
        <div>
          <b>contacts </b> {Object.keys(props.profile.contacts).map(key =>{
            return <div className={s.contact} key={key}> 
              <b>{key} :</b> <Field validate={[]} placeholder={key} name={'contacts.' + key} component={Input}/>
            </div>
          })}
        </div>
      </form>
    )
  }

  const ProfileDataFormRedux = reduxForm({
    // a unique name for the form
    form: 'edit-profile'
  })(ProfileDataForm)

  export default ProfileDataFormRedux