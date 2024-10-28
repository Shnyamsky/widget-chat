import App from './App.svelte'

import './app.pcss'

const wavixChatWidget = new App({
	target: document.getElementById('chat-widget-root')!
})

export default wavixChatWidget
