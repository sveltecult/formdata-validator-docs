---
title: Introduction
---

This library offers painless FormData validation. With expressive syntax that supports multiple input types such as boolean, string, number, file, and date. Additionally, array validation through the use of `[]` and `.*` notations. For instance, to validate uploaded images, you can utilize `images[]` in the rule sets. To loop through the images and apply validation rules individually, utilize `images.*`.

It also offers a versatile `.custom(attribute: string, value: any, formData: FormData)` validation method. This allows users to perform custom validation according to their specific requirements.

## Installation

To install, use your preferred package manager:

```bash
npm install @sveltecult/formdata-validator
```

## Basic Usage

Once installed, integrating it into your project is simple. Below is a basic example to help you get started:


```typescript
import { Rule, Validation } from '@sveltecult/formdata-validator';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const validation = new Validation(formData, {
			email: Rule.string().required().email(),
			password: Rule.string().required().minLenght(8)
		});

		const errors = await validation.errors();

		if (errors.any() === true) {
			console.log(errors.all());
		}
	}
};
```

Here we use Svelte's [Form actions](https://kit.svelte.dev/docs/form-actions) but theoretically, if you're using a different framework and it supports SSR and FormData, this should work too.

## Next Steps

Congratulations on successfully installing and executing basic validation! Explore the documentation further to delve into more advanced validation techniques, available rules, custom error messages, and integration with different frameworks or libraries.