import { atom, map } from 'nanostores'
// import { logger } from '@nanostores/logger'
import * as screens from '$screens/index'

import type { ComponentType } from 'svelte'

type Screen = 'chat' | 'confirm' | 'question'

export const $currentScreen = atom<Screen>('question')

export const $screens = map<Record<Screen, ComponentType>>({
	chat: screens.ChatScreen,
	confirm: screens.ConfirmScreen,
	question: screens.QuestionScreen
})

export const onRedirect = (screen: Screen) => {
	$currentScreen.set(screen)
}

// TODO: add logger
// logger({ currentScreen: $currentScreen, screens: $screens })
