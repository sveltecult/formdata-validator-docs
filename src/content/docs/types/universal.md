---
title: Universal Rules
---

The Universal (aka `Base.ts`) rules serves as a collection of rules that are sensible for all types. While the rules are available universally, it's essential to use the appropriate types (`Rule.array()`, `Rule.date()`, etc) when applying our available rules. This is just a base class, and the six specific types inherit their core functionalities.

## Available Rules

The following are available rules to use to validate all data types:

### `bail()`

Sometimes you may wish to stop running validation rules on an attribute after the first validation failure. To do so, assign the `bail()` rule to the attribute:

```typescript
const validation = new Validation(formData, {
    date: Rule.date().bail().required().after(new Date("2023-11-21")),
});
```

In this example, if the `required()` rule on the `date` attribute fails, the `after()` rule will not be checked. Rules will be validated in the order they are assigned.

---

### `custom(fn: Fn)`

Please see the [Custom Validation](/guides/custom) guide for more detailed example.

---

### `prohibited(message?: string)`

The field under validation must be missing or empty. A field is "empty" if it meets one of the following criteria:

- The value is `null`.
- The value is an empty string.
- The value is an empty array.
- The value is an uploaded file with an empty path.

You can pass the following options to the `prohibited()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `prohibited()` rule. Defaults to `The :attribute field is prohibited`.

---

### `prohibitedWhen(fn: FnWhen, message?: string)`

The field under validation must be missing or empty when condition returns `true`. A field is "empty" if it meets one of the following criteria:

- The value is `null`.
- The value is an empty string.
- The value is an empty array.
- The value is an uploaded file with an empty path.

You can pass the following options to the `prohibitedWhen()` rule.

#### `fn` (required)

**type:** `FnWhen` or `(attribute: string, value: any, formData?: FormData) => Promise<boolean>`

**description:** Function to determine the condition for `prohibitedWhen()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `prohibitedWhen()` rule. Defaults to `The :attribute field is prohibited`.

---

### `required(message?: string)`

The field under validation must be present in the input data and not empty. A field is "empty" if it meets one of the following criteria:

- The value is `null`.
- The value is an empty string.
- The value is an empty array.
- The value is an uploaded file with no path.

You can pass the following options to the `required()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `required()` rule. Defaults to `The :attribute field is required`.

---

### `requiredWhen(fn: FnWhen, message?: string)`

The field under `.requiredWhen()` must be present in the input data and not empty when condition returns `true`. A field is "empty" if it meets one of the following criteria:

- The value is `null`.
- The value is an empty string.
- The value is an empty array.
- The value is an uploaded file with no path.

You can pass the following options to the `requiredWhen()` rule. Defaults to `The :attribute field is required`.

#### `fn` (required)

**type:** `FnWhen` or `(attribute: string, value: any, formData?: FormData) => Promise<boolean>`

**description:** Function to determine the condition for `requiredWhen()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `requiredWhen()` rule. Defaults to `The :attribute field is required`.