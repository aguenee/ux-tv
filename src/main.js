import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserHistory } from 'react-router-dom'

import App from './components/App';

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		<HashRouter>
	    	<App />
	  	</HashRouter>,
	  	document.getElementById('ux-tv-app')
	);
});