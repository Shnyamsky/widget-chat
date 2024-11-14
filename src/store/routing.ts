import { atom } from 'nanostores'
// import { logger } from '@nanostores/logger'

type Screen = 'chat' | 'confirm' | 'question'

export const $screen = atom<Screen>('chat')

export const onRedirect = (screen: Screen) => {
	$screen.set(screen)
}

// TODO: add logger
// logger({ currentScreen: $currentScreen, screens: $screens })
