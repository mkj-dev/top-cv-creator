import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ToggleButton from './components/ToggleButton';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		<ToggleButton />
	</React.StrictMode>,
)
