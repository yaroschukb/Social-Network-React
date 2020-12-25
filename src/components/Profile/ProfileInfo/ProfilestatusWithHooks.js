import React, {useState,useEffect} from 'react';
import style from './Profilestatus.module.css';
import { Col, Row } from 'antd';


const ProfilestatusWithHooks = (props) => {
	
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	const activateEditMode = () => {	
		setEditMode(true)
	};

	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	};

	useEffect(() => {
		setStatus(props.status)
		}, [props.status]);

		return (<Row>
			{ !editMode &&
				<Col>
					<span onDoubleClick = {activateEditMode}>{props.status || "STATUS"}</span>
				</Col>}
			{ editMode &&
				<Col>
					<input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateEditMode}/>
				</Col>
			}
		</Row>
	)
};

export default ProfilestatusWithHooks;