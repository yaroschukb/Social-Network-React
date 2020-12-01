import Online from './Online';
import {connect} from 'react-redux';


let mapStateToProps = (store) => ({
	friends: store.sidebar.friends
});
	
let mapDispathToProps = () => {
      return { }
    };

const OnlineContainer  = connect(mapStateToProps, mapDispathToProps)(Online);




export default OnlineContainer;