import App from '../components/App.js';
import handleVideoSearch from '../actions/search.js';
import { connect } from 'react-redux';

var mapDispatchToProps = (dispatch) => {
  return {
    searchYouTube: (query) => dispatch(handleVideoSearch(query))
  };
};

export default connect(null, mapDispatchToProps)(App);