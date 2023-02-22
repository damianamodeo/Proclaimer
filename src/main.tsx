import Start from './app/Start';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { registerSW } from 'virtual:pwa-register';

if ('serviceWorker' in navigator) {
	// && !/localhost/.test(window.location)) {
	registerSW();
}
 if (!localStorage.getItem("userID")) {
  localStorage.setItem("userID", String(Date.now()))
 }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Start></Start>
	</React.StrictMode>
);
