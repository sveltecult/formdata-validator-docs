---
title: Date Validation
---

To begin validating dates, boot it up using `Rule.date()`. This method is specifically crafted for date-specific validation scenarios. Please note that `Rule.date()` is optional by default and immediately stops validation when an error is encountered.

A valid date value must follow the format `YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`.

## Basic Usage

```typescript
import { Rule, Validation } from '@sveltecult/formdata-validator';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const validation = new Validation(formData, {
			'birthday': Rule.date().required(),
		});

		const errors = await validation.errors();

		if (errors.any() === true) {
			console.log(errors.all());
		}
	}
};
```

## Available Rules

The following are available rules to use to validate `.date()` type:

### `after(date: Date | string, message?: string)`

The field under `after()` must be a value after a given date. The dates passed if string or value of another field will be converted to a valid `Date` instance.

You can pass the following options to the `after()` rule.

#### `date` (required)

**type:** `Date | string`

**description:** Date, string date, or another field representation of a date to compare against.

#### `message`

**type:** `string`

**description:** Optional custom error message for `after()` rule. Defaults to `The :attribute field must come after :$1`

---

### `afterOrEqual(date: Date | string, message?: string)`

The field under `afterOrEqual()` must be a value after or equal a given date. The dates passed if string or value of another field will be converted to a valid `Date` instance.

You can pass the following options to the `afterOrEqual()` rule. Defaults to `The :attribute field must come on or after :$1`

#### `date` (required)

**type:** `Date | string`

***description:** Date, string date, or another field representation of a date to compare against.

#### `message`

**type:** `string`

***description:** Optional custom error message for `afterOrEqual()` rule.

---

### `at(date: Date | string, message?: string)`

Please see the [`equal()`](#equaldate-date--string-message-string) rule for more details.

---

### `before(date: Date | string, message?: string)`

The field under `before()` must be a value before a given date. The dates passed if string or value of another field will be converted to a valid `Date` instance.

You can pass the following options to the `before()` rule.

#### `date` (required)

**type:** `Date | string`

**description:** Date, string date, or another field representation of a date to compare against.

#### `message`

**type:** `string`

**description:** Optional custom error message for `before()` rule. Defaults to `The :attribute field must come before :$1`

---

### `beforeOrEqual(date: Date | string, message?: string)`

The field under `beforeOrEqual()` must be a value before or equal a given date. The dates passed if string or value of another field will be converted to a valid `Date` instance.

You can pass the following options to the `beforeOrEqual()` rule.

#### `date` (required)

**type:** `Date | string`

**description:** Date, string date, or another field representation of a date to compare against.

#### `message`

**type:** `string`

**description:** Optional custom error message for `beforeOrEqual()` rule. Defaults to `The :attribute field must come on or before :$1`

---

### `between(min: Date | string, max: Date | string, message?: string)`

The field under `between()` must come after a minimum date but not later than a maximum date. The dates passed if string or value of another field will be converted to a valid `Date` instance.

You can pass the following options to the `between()` rule.

#### `min` (required)

**type:** `Date | string`

**description:** The minimum Date, string date, or another field representation of a date to compare against.

#### `max` (required)

**type:** `Date | string`

**description:** The maximum Date, string date, or another field representation of a date to compare against.

#### `message`

**type:** `string`

**description:** Optional custom error message for `between()` rule. Defaults to `The :attribute field must come after :$1 but not later than :$2`

---

### `custom(fn: Fn)`

Please see the [Custom Validation](/guides/custom) guide for more detailed example.

---

### `equal(date: Date | string, message?: string)`

The field under `equal()` must be a value equal a given date. The dates passed if string or value of another field will be converted to a valid `Date` instance.

You can pass the following options to the `equal()` rule.

#### `date` (required)

**type:** `Date | string`

**description:** Date, string date or another field representation of a date to compare against.

#### `message`

**type:** `string`

**description:** Optional custom error message for `equal()` rule. Defaults to `The :attribute field must be :$1`

---

### `matches(date: Date | string, message?: string)`

Please see the [`equal()`](#equaldate-date--string-message-string) rule for more details.

---

### `onOrAfter(date: Date | string, message?: string)`

Please see the [`afterOrEqual()`](#afterorequaldate-date--string-message-string) rule for more details.

---

### `onOrBefore(date: Date | string, message?: string)`

Please see the [`beforeOrEqual()`](#beforeorequaldate-date--string-message-string) rule for more details.

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

### `requiredWhen(fn: FnWhen, message?: string)`

Please see the [`requiredWhen()`](/types/universal#requiredwhenfn-fnwhen-message-string) rule for more details.

---

### `same(date: Date | string, message?: string)`

Please see the [`equal()`](#equaldate-date--string-message-string) rule for more details.