import React from 'react';
import ss from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem.js';
import Message from './Message/Message.js';
import NewMessageContainer from './NewMessage/NewMessageContainer';



const Dialogs =(props)=> {
	
		let dialogsElement = props.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />);
		let messageElement = props.messages.map (m => <Message message={m.message} key={m.id} id={m.id} />);
	
		
		return (
    			<div className={ss.dialogs}>
					<div className={ss.content_block}>
						<div className={ss.dialogs_items}>
							{dialogsElement}
						</div>
			
						<div className={ss.dialogs_message}>
							{messageElement}	 
						</div>
					</div>
					<div className={ss.dialogs_newMessage}>
							<NewMessageContainer />
					</div>
				</div>);
		};


export default Dialogs; 