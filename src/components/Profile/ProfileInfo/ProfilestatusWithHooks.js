import React, {useState,useEffect} from 'react';
import style from './Profilestatus.module.css';


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

		return (<div>
			{ !editMode &&
				<div>
					<span onDoubleClick = {activateEditMode}>{props.status || "STATUS"}</span>
				</div>}
			{ editMode &&
				<div className={style.style_input}>
					<input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateEditMode}/>
				</div>
			}
		</div>
	)
};

export default ProfilestatusWithHooks;