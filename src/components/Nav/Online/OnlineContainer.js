import Online from './Online.js';
import {connect} from 'react-redux';

  let mapStateToProps = (store) => ({
    friends: store.sidebar.friends
  });
 
const OnlineContainer  = connect(mapStateToProps, null)(Online);

export default OnlineContainer;