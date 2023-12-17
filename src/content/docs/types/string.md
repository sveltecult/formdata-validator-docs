---
title: String Validation
---

To begin validating strings, boot it up using `Rule.string()`. This method is specifically crafted for string-specific validation scenarios. Please note that `Rule.string()` is optional by default and immediately stops validation when an error is encountered.

A valid string value must have a type of `"string"`.

## Basic Usage

```typescript
import { Rule, Validation } from '@sveltecult/formdata-validator';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const validation = new Validation(formData, {
			'email': Rule.string().required().email(),
		});

		const errors = await validation.errors();

		if (errors.any() === true) {
			console.log(errors.all());
		}
	}
};
```

## Available Rules

The following are available rules to use to validate `.string()` type:

### `accepted(message?: string)`

Please see the [`accepted()`](/types/boolean/#acceptedmessage-string) guide for more detailed example.

---

### `acceptedWhen(fn: FnWhen, message?: string)`

Please see the [`acceptedWhen()`](/types/boolean/#acceptedwhenfn-fnwhen-message-string) guide for more detailed example.

---

### `confirmed(message?: string)`

The field under validation must have a matching field of `{field}_confirmation` or `{field}Confirmation`. For example, if the field under validation is `password`, a matching `password_confirmation` or `passwordConfirmation` field must be present in the input.

You can pass the following options to the `confirmed()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `confirmed()` rule. Defaults to `The :attribute field must be confirmed`

---

### `custom(fn: Fn)`

Please see the [Custom Validation](/guides/custom) guide for more detailed example.

---

### `alpha(message?: string)`

The field under validation must be entirely Unicode alphabetic characters contained in `\p{L}` and `\p{M}`.

To restrict this validation rule to characters in the ASCII range (`a-z` and `A-Z`), you may add the [`.ascii()`](#asciimessage-string) validation rule:

```typescript
const validation = new Validation(formData, {
    name: Rule.string().alpha().ascii()
});
```

You can pass the following options to the `alpha()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `alpha()` rule. Defaults to `The :attribute field must only contain alpha characters`

---

### `alphaDash(message?: string)`

The field under validation must be entirely Unicode alpha-numeric characters contained in `\p{L}`, `\p{M}`, `\p{N}`, as well as ASCII dashes (`-`) and ASCII underscores (`_`).

To restrict this validation rule to characters in the ASCII range (`a-z` and `A-Z`), you may add the [`.ascii()`](#asciimessage-string) validation rule:

```typescript
const validation = new Validation(formData, {
    username: Rule.string().alphaDash().ascii()
});
```

You can pass the following options to the `alphaDash()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `alphaDash()` rule. Defaults to `The :attribute field must only contain alpha-numeric characters, dashes or underscores`

---

### `alphaNumeric(message?: string)`

The field under validation must be entirely Unicode alpha-numeric characters contained in `\p{L}`, `\p{M}`, `\p{N}`.

To restrict this validation rule to characters in the ASCII range (`a-z` and `A-Z`), you may add the [`.ascii()`](#asciimessage-string) validation rule:

```typescript
const validation = new Validation(formData, {
    username: Rule.string().alphaNumeric().ascii()
});
```

You can pass the following options to the `alphaNumeric()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `alphaNumeric()` rule. Defaults to `The :attribute field must only contain alpha-numeric characters`

---

### `alphaNum(message?: string)`

Please see the [`alphaNumeric()`](#alphanumericmessage-string) rule for more details.

---

### `ascii(message?: string)`

The field under validation must be entirely 7-bit ASCII characters.

You can pass the following options to the `ascii()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `ascii()` rule. Defaults to `The :attribute field must only contain ASCII characters`

---

### `declined(message?: string)`

Please see the [`declined()`](/types/boolean/#declinedmessage-string) rule for more details.

---

### `declinedWhen(fn: FnWhen, message?: string)`

Please see the [`declinedWhen()`](/types/boolean/#declinedwhenfn-fnwhen-message-string) rule for more details.

---

### `different(text: string, message?: string)`

The field under validation must not be equal to a specific text.

You can pass the following options to the `different()` rule.

#### `text` (required)

**type:** `string`

**description:** Text to compare the attribute value with.

#### `message`

**type:** `string`

**description:** Optional custom error message for `different()` rule. Defaults to `The :attribute field must be different from :$1`

---

### `email(message?: string)`

The field under validation must be formatted as a valid email address.

You can pass the following options to the `email()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `email()` rule. Defaults to `The :attribute field has an invalid format`

---

### `equal(text: string, message?: string)`

Please see the [`same()`](#sametext-string-message-string) rule for more details.

---

### `in(array: string[], message?: string)`

The field under validation must be included in the given list of values.

You can pass the following options to the `in()` rule.

#### `array` (required)

**type:** `string[]`

**description:** Array of string values the attribute value should be a part of.

#### `message`

**type:** `string`

**description:** Optional custom error message for `in()` rule. Defaults to `The :attribute field must be in :array`

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

### `lengthBetween(min: number, max: number, message?: string)`

The field under `lengthBetween()` must have be between two specified values. If the attribute is an array, it represents the number of elements in the array. If the attribute is a string, it represents the number of characters in the string.

You can pass the following options to the `lengthBetween()` rule.

#### `min` (required)

**type:** `number`

**description:** Minimum value or number of elements or characters allowed.

#### `max` (required)

**type:** `number`

**description:** Maximum value or number of elements or characters allowed.

#### `message`

**type:** `string`

**description:** Optional custom error message for `lengthBetween()` rule. Defaults to `The :attribute field must be between :$1 to :$2 characters`.

---

### `matches(field: string, message?: string)`

The field under validation must match the value of another field.

You can pass the following options to the `matches()` rule.

#### `field` (required)

**type:** `string`

**description:** Name of the other field to match against.

#### `message`

**type:** `string`

**description:** Optional custom error message for `matches()` rule. Defaults to `The :attribute field must match with the :$1 field`

---

### `maxLength(number: number, message?: string)`

The field under `maxLength()` must have a maximum number of characters.

You can pass the following options to the `maxLength()` rule.

#### `number` (required)

**type:** `number`

**description:** The maximum length allowed.

#### `message`

**type:** `string`

**description:** Optional custom error message for `maxLength()` rule. Defaults to `The :attribute field must be shorter than :$1 characters`

---

### `minLength(number: number, message?: string)`

The field under `minLength()` must have a minimum number of characters.

You can pass the following options to the `minLength()` rule.

#### `number` (required)

**type:** `number`

**description:** The minimumm length allowed.

#### `message`

**type:** `string`

**description:** Optional custom error message for `minLength()` rule. Defaults to `The :attribute field must be longer than :$1 characters`

---

### `mismatches(field: string, message?: string)`

The field under validation must not match the value of another field.

You can pass the following options to the `mismatches()` rule.

#### `field` (required)

**type:** `string`

**description:** Name of the other field to match against.

#### `message`

**type:** `string`

**description:** Optional custom error message for `mismatches()` rule. Defaults to `The :attribute field must not match with the :$1 field`

---

### `notEqual(text: string, message?: string)`

Please see the [`different()`](#differenttext-string-message-string) rule for more details.

---

### `notIn(array: string[], message?: string)`

The field under validation must not be included in the given list of values.

You can pass the following options to the `notIn()` rule.

#### `array` (required)

**type:** `string[]`

**description:** Array of string values the attribute value should not be a part of.

#### `message`

**type:** `string`

**description:** Optional custom error message for `notIn()` rule. Defaults to `The :attribute field must not be in :array`

---

### `notRegex(pattern: RegExp, message?: string)`

The field under validation must not match the given regular expression.

You can pass the following options to the `notRegex()` rule.

#### `pattern` (required)

**type:** `RegExp`

**description:** Regular expression pattern to avoid matching against the attribute value.

#### `message`

**type:** `string`

**description:** Optional custom error message for `notRegex()` rule. Defaults to `The :attribute field has an invalid format`


---

### `regex(pattern: RegExp, message?: string)`

The field under validation must match the given regular expression.

You can pass the following options to the `regex()` rule.

#### `pattern` (required)

**type:** `RegExp`

**description:** The regular expression pattern used for validation.

#### `message`

**type:** `string`

**description:** Optional custom error message for `regex()` rule. Defaults to `The :attribute field has an invalid format`

---

### `same(text: string, message?: string)`

The field under validation must be equal to a specific text.

You can pass the following options to the `same()` rule.

#### `text` (required)

**type:** `string`

**description:** Text to compare the attribute value with.

#### `message`

**type:** `string`

**description:** Optional custom error message for `same()` rule. Defaults to `The :attribute field must be equal to :$1`

---

### `username(message?: string)`

The field under validation must follow an opinionated username pattern. A field is valid if it meets the following criteria:

- The field contains only the characters within the character set `[a-zA-Z0-9._]` (letters, digits, underscore, or dot) and has a length between 3 and 20 characters.
- The field does not contain consecutive occurrences of either underscore `_` or dot `.`.

You can pass the following options to the `username()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `username()` rule. Defaults to `The :attribute field has an invalid format`

---
