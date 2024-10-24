import './app.pcss'
import App from './App.svelte'

const wavixChatWidget = new App({
	target: document.getElementById('wavix-chat-widget-root')!
})

export default wavixChatWidget
