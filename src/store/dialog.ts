import { map } from 'nanostores'
import { logger } from '@nanostores/logger'

interface DialogForm {
	question: string
}

export const $form = map<DialogForm>({
	question: ''
})

export const onFormChange = (key: keyof DialogForm) => (event: CustomEvent) => {
	$form.setKey(key, event.detail)
}

logger({ dialogForm: $form })
