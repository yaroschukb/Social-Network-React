import React from 'react';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'react-bootstrap';
import style from './ProfileInfo.module.css'
import { url } from '../../../utils/validators/validators';


const Input = Textarea('input');
const Text = Textarea('textarea');

const ProfileDataReduxForm = ({handleSubmit, profile, error}) => {
	return (<Form onSubmit={handleSubmit}>
        <div><Button type="submit">Save</Button></div>
        {error && <div className={style.error}>{error}</div> }
        <Form.Group controlId="formFullname">
            <Form.Label><b>Full Name:</b> </Form.Label>  
            <Field name="fullName" component={Input} type="text" />
        </Form.Group>
		<Form.Group controlId="formContacts">
            <Form.Label><b>Contacts:</b> </Form.Label>  
            <div>{Object.keys(profile.contacts).map(key=>{
                    return <div key={key} className={style.contacts}>
                    <b>{key}: <Field name={"contacts."+key} component={Input} type="text"
                                    validate = {url} /></b>
                </div>}
      			)
      		}				
      		</div>
        </Form.Group>
		<Form.Group controlId="formVacantionStatus">
            <Form.Label><b>Looking Vacantion Status:</b> </Form.Label>  
            <Field name="lookingForAJob" component={Input} type="checkbox" />
        </Form.Group>
		<Form.Group controlId="formProfessionalSkills">
            <Form.Label><b>My professional skills:</b> </Form.Label>  
            <Field name="lookingForAJobDescription" component={Text} type="text" />
        </Form.Group>
	</Form> 
	)
}

const ProfileDataForm = reduxForm({form:'edit-profile'})(ProfileDataReduxForm)

export default ProfileDataForm