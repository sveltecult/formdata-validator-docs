---
title: Error Handling
---

When validating FormData, you can handle and check validation errors conveniently with the `Errors` class instance returned from the `validation.errors()` method.

Here's an overview of available functions provided by the `Errors` class:

## `errors.get('field')`

Retrieve validation errors for a specific field as an array.

```typescript
import { Rule, Validation } from '@sveltecult/formdata-validator';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const validation = new Validation(formData, {
            email: Rule.string().required().email()
		});

		const errors = await validation.errors();

		if (errors.any() === true) {
			console.log(errors.get('email')); // returns ["The email field is required", "The email field is invalid"]
		}
	}
};
```

## `errors.all()`

Retrieve all validation errors as an object.

```typescript
import { Rule, Validation } from '@sveltecult/formdata-validator';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const validation = new Validation(formData, {
            email: Rule.string().required().email()
		});

		const errors = await validation.errors();

		if (errors.any() === true) {
			console.log(errors.all());
		}
	}
};
```

## `errors.any()`

Check if there are any validation errors (returns true or false).

```typescript
import { Rule, Validation } from '@sveltecult/formdata-validator';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const validation = new Validation(formData, {
            email: Rule.string().required().email()
		});

		const errors = await validation.errors();

		if (errors.any() === true) {
            // do something
		}
	}
};
```

## `errors.has('field')`

Check if there are errors in a specific field (returns true or false).

```typescript
import { Rule, Validation } from '@sveltecult/formdata-validator';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const validation = new Validation(formData, {
            email: Rule.string().required().email()
		});

		const errors = await validation.errors();

		if (errors.has('email') === true) {
            // do something
		}
	}
};
```

## `errors.add('field', 'error message')`

This method is being used internally to add errors when rule validation failed.

## `errors.clear('field')`

Delete errors associated with a specific field.

## `errors.clear()`

Clear all validation errors.