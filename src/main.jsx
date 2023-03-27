// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DownloadPdfButton from './components/DownloadPdfButton';
import ToggleButton from './components/ToggleButton';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		<div id='button-container'>
			<ToggleButton />
			<DownloadPdfButton />
		</div>
	</React.StrictMode>,
)
