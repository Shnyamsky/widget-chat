import { map } from 'nanostores'
import { logger } from '@nanostores/logger'

interface ComposerForm {
	input: string
}

export const $form = map<ComposerForm>({
	input: ''
})

export const onFormChange = (key: keyof ComposerForm) => (event: CustomEvent) => {
	$form.setKey(key, event.detail)
}

logger({ composerForm: $form })
