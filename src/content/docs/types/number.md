---
title: Number Validation
---

The `Rule.number()` have rules designed explicitly for numeric inputs. These rules do validation of number formats, ranges, decimals, and numeric-specific conditions to ensure accurate numerical data handling.

To begin validating numbers, boot it up using `Rule.number()`. Please note that `Rule.number()` is optional by default and immediately stops validation when an error is encountered.

A valid number value must be a number or not `isNaN()`.

## Basic Usage

```typescript
import { Rule, Validation } from '@sveltecult/formdata-validator';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const validation = new Validation(formData, {
			'number': Rule.number().required().min(85),
		});

		const errors = await validation.errors();

		if (errors.any() === true) {
			console.log(errors.all());
		}
	}
};
```

## Available Rules

The following are available rules to use to validate `.number()` type:

### `between(min: number, max: number, message?: string)`

---


### `custom(fn: Fn)`

Please see the [Custom Validation](/guides/custom) guide for more detailed example.

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

### `notRegex(pattern: RegExp, message?: string)`

Please see the [`notRegex()`](/types/string/#notregexpattern-regexp-message-string) rule for more details.

---

### `prohibited(message?: string)`

Please see the [`prohibited()`](/types/universal#prohibitedmessage-string) rule for more details.

---

### `prohibitedWhen(fn: FnWhen, message?: string)`

Please see the [`prohibitedWhen()`](/types/universal#prohibitedwhenfn-fnwhen-message-string) rule for more details.

---

### `regex(pattern: RegExp, message?: string)`

Please see the [`regex()`](/types/string/#regexpattern-regexp-message-string) rule for more details.

---

### `required(message?: string)`

Please see the [`required()`](/types/universal#requiredmessage-string) rule for more details.

---

### `requiredWhen(fn: FnWhen, message?: string)`

Please see the [`requiredWhen()`](/types/universal#requiredwhenfn-fnwhen-message-string) rule for more details.

---