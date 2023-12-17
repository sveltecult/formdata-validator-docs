---
title: Boolean Validation
---

To begin validating booleans, boot it up using `Rule.boolean()`. This method is specifically crafted for boolean-specific validation scenarios. These rules enable developers to effectively validate and manipulate boolean inputs, such as checking for acceptance and declination. Please note that `Rule.boolean()` is optional by default and immediately stops validation when an error is encountered.

A valid boolean value is one of the following: `yes`, `no`, `on`, `off`, `1`, `0`, `true` and `false`.

## Basic Usage

```typescript
import { Rule, Validation } from '@sveltecult/formdata-validator';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const validation = new Validation(formData, {
        tos: Rule.boolean().required().accepted()
    });

    const errors = await validation.errors();

    if (errors.any() === true) {
      console.log(errors.all());
    }
  }
};
```

## Available Rules

The following are available rules to use to validate `.boolean()` type:

### `accepted(message?: string)`

The field under `.accepted()` must be "yes", "on", 1, or true. This is useful for validating "Terms of Service" acceptance or similar fields.

You can pass the following options to the `accepted()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `accepted()` rule. Defaults to `The :attribute field must be accepted`

---

### `acceptedWhen(fn: FnWhen, message?: string)`

The field under `.acceptedWhen()` must be "yes", "on", 1, or true when condition returns `true`. This is useful for validating "Terms of Service" acceptance or similar fields.

You can pass the following options to the `acceptedWhen()` rule.

#### `fn` (required)

**type:** `FnWhen` or `(attribute: string, value: any, formData?: FormData) => Promise<boolean>`

**description:** Function to determine the condition for `acceptedWhen()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `acceptedWhen()` rule. Defaults to `The :attribute field must be accepted`

---

### `custom(fn: Fn)`

Please see the [Custom Validation](/guides/custom) guide for more detailed example.

---

### `declined(message?: string)`

The field under `.declined()` must be "no", "off", 0, or false.

You can pass the following options to the `declined()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `declined()` rule. Defaults to `The :attribute field must be declined`

---

### `declinedWhen(fn: FnWhen, message?: string)`

The field under `.declinedWhen()` must be "no", "off", 0, or false when condition returns `true`.

You can pass the following options to the `declinedWhen()` rule.

#### `fn` (required)

**type:** `FnWhen` or `(attribute: string, value: any, formData?: FormData) => Promise<boolean>`

**description:** Function to determine the condition for `declinedWhen()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `declinedWhen()` rule. Defaults to `The :attribute field must be declined`

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