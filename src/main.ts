import App from './App.svelte'

import './app.pcss'

const chatWidget = new App({
	target: document.getElementById('chat-widget-root')!
})

export default chatWidget
