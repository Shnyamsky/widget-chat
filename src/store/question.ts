import { map } from 'nanostores'
import { logger } from '@nanostores/logger'

interface QuestionForm {
	email: string
	question: string
}

export const $form = map<QuestionForm>({
	email: '',
	question: ''
})

export const onFormChange = (key: keyof QuestionForm) => (event: CustomEvent) => {
	$form.setKey(key, event.detail)
}

logger({ questionForm: $form })
