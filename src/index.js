import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import config from 'config/env';

// change condition to work with local db
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? config.prod.api : config.dev.api;
axios.get('/');

ReactDOM.render(<App />, document.getElementById('root'));
