---
title: Array Validation
---

To begin validating arrays, boot it up using `Rule.array()`. This method is specifically crafted for array-specific validation scenarios. These rules enable developers to effectively validate and manipulate array inputs, such as checking for count, limits, and other special rules like `requiredSome()`, `requiredSomeWhen()`, etc. Please note that `Rule.array()` is optional by default and immediately stops validation when an error is encountered.

## Basic Usage

```typescript
import { Rule, Validation } from '@sveltecult/formdata-validator';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const validation = new Validation(formData, {
			'images[]': Rule.array().requiredSome().max(3),
            'images.*': Rule.file().image()
		});

		const errors = await validation.errors();

		if (errors.any() === true) {
			console.log(errors.all());
		}
	}
};
```

## Available Rules

The following are available rules to use to validate `.array()` type:

### `between(min: number, max: number, message?: string)`

The field under `between()` must have be between two specified values. If the attribute is an array, it represents the number of elements in the array. If the attribute is a string, it represents the number of characters in the string.

You can pass the following options to the `between()` rule.

#### `min` (required)

**type:** `number`

**description:** Minimum value or number of elements or characters allowed.

#### `max` (required)

**type:** `number`

**description:** Maximum value or number of elements or characters allowed.

#### `message`

**type:** `string`

**description:** Optional custom error message for `between()` rule. Defaults to `The :attribute field must be between :$1 and :$2`.

---

---

### `custom(fn: Fn)`

Please see the [Custom Validation](/guides/custom) guide for more detailed example.

---

### `equal(number: number, message?: string)`

Please see the [`length()`](#lengthnumber-number-message-string) rule for more details.

---

### `gt(number: number, message?: string)`

Please see the [`min()`](#minnumber-number-message-string) rule for more details.

---

### `gte(number: number, message?: string)`

The field under `gte()` must have a minimum or an equal value. If the attribute is an array, it represents the minimum or equal number of elements in the array. If the attribute is a string, it represents the minimum or equal number of characters in the string.

You can pass the following options to the `gte()` rule.

#### `number` (required)

**type:** `number`

**description:** Minimum or equal value or number of elements or characters required.

#### `message`

**type:** `string`

**description:** Optional custom error message for `gte()` rule. Defaults to `The :attribute field must be greater than or equal :$1`.

---

### `lt(number: number, message?: string)`

Please see the [`max()`](#maxnumber-number-message-string) rule for more details.

---

### `lte(number: number, message?: string)`

The field under `lte()` must have a maximum or an equal value. If the attribute is an array, it represents the maximum or equal number of elements in the array. If the attribute is a string, it represents the maximum or equal number of characters in the string.

You can pass the following options to the `lte()` rule.

#### `number` (required)

**type:** `number`

**description:** Maximum or equal value or number of elements or characters required.

#### `message`

**type:** `string`

**description:** Optional custom error message for `lte()` rule. Defaults to `The :attribute field must be less than or equal :$1`.

---

### `length(number: number, message?: string)`

The field under `length()` must have an equal value. If the attribute is an array, it represents the equal number of elements in the array. If the attribute is a string, it represents the equal number of characters in the string.

You can pass the following options to the `length()` rule.

#### `number` (required)

**type:** `number`

**description:** Equal value or number of elements or characters required.

#### `message`

**type:** `string`

**description:** Optional custom error message for `length()` rule. Defaults to `The :attribute field must be equal to :$1`.

---

### `max(number: number, message?: string)`

The field under `max()` must have a maximum value. If the attribute is an array, it represents the maximum number of elements in the array. If the attribute is a string, it represents the maximum number of characters in the string.

You can pass the following options to the `max()` rule.

#### `number` (required)

**type:** `number`

**description:** Maximum value or number of elements or characters required.

#### `message`

**type:** `string`

**description:** Optional custom error message for `max()` rule. Defaults to `The :attribute field must be less than :$1`.

---

### `min(number: number, message?: string)`

The field under `min()` must have a minimum value. If the attribute is an array, it represents the minimum number of elements in the array. If the attribute is a string, it represents the minimum number of characters in the string.

You can pass the following options to the `min()` rule.

#### `number` (required)

**type:** `number`

**description:** Minimum value or number of elements or characters required.

#### `message`

**type:** `string`

**description:** Optional custom error message for `min()` rule. Defaults to `The :attribute field must be greater than :$1`.

---

### `prohibited(message?: string)`

Please see the [`prohibited()`](/types/universal#prohibitedmessage-string) rule for more details.

---

### `prohibitedWhen(fn: FnWhen, message?: string)`

Please see the [`prohibitedWhen()`](/types/universal#prohibitedwhenfn-fnwhen-message-string) rule for more details.

---

### `required(message?: string)`

Please see the [`required()`](/types/universal#requiredmessage-string) rule for more details.

---

### `requiredSome(message?: string)`

The field under `.requiredSome()` specifies that at least one element in the attribute array is required and an empty string or file is allowed.

You can pass the following options to the `requiredSome()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `requiredSome()` rule. Defaults to `The :attribute field is required`.

---

### `requiredSomeWhen(fn: FnWhen, message?: string)`

The field under `.requiredSomeWhen()` specifies that at least one element in the attribute array is required and an empty string or file is allowed when condition returns `true`.

You can pass the following options to the `requiredSomeWhen()` rule.

#### `fn` (required)

**type:** `FnWhen` or `(attribute: string, value: any, formData?: FormData) => Promise<boolean>`

**description:** Function to determine the condition for `requiredSomeWhen()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `requiredSomeWhen()` rule. Defaults to `The :attribute field is required`.

---

### `requiredWhen(fn: FnWhen, message?: string)`

Please see the [`requiredWhen()`](/types/universal#requiredwhenfn-fnwhen-message-string) rule for more details.

---