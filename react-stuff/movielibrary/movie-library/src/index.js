import React from 'react';
import ReactDOM from 'react-dom';
import MovieLibrary from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MovieLibrary />, document.getElementById('root'));
registerServiceWorker();
