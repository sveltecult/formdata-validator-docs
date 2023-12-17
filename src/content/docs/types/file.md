---
title: File Validation
---

The `Rule.file()` provides a set of validation rules tailored for file-specific scenarios. It offers functionalities to validate file inputs, including file types, sizes, extensions, and other file-related constraints.

To begin validating files, boot it up using `Rule.file()`. Please note that `Rule.file()` is optional by default and immediately stops validation when an error is encountered.

A valid file value must be an instance of `Blob` and contains a size.

**Important Note**

To determine the MIME type and extension of the uploaded file, the [file-type](https://www.npmjs.com/package/file-type) library was used under the hood. This library is for detecting binary-based file formats, not text-based formats like `.txt`, `.csv`, `.svg`, etc. So, keep in mind that these types will not be checked and possibly be invalidated.

## Basic Usage

```typescript
import { Rule, Validation } from '@sveltecult/formdata-validator';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const validation = new Validation(formData, {
			'avatar': Rule.file().required().image(),
		});

		const errors = await validation.errors();

		if (errors.any() === true) {
			console.log(errors.all());
		}
	}
};
```

## Available Rules

The following are available rules to use to validate `.file()` type:

### `custom(fn: Fn)`

Please see the [Custom Validation](/guides/custom) guide for more detailed example.

---

### `required(message?: string)`

Please see the [`required()`](/types/universal#requiredmessage-string) rule for more details.

---

### `requiredWhen(fn: FnWhen, message?: string)`

Please see the [`requiredWhen()`](/types/universal#requiredwhenfn-fnwhen-message-string) rule for more details.

---

### `prohibited(message?: string)`

Please see the [`prohibited()`](/types/universal#prohibitedmessage-string) rule for more details.

---

### `prohibitedWhen(fn: FnWhen, message?: string)`

Please see the [`prohibitedWhen()`](/types/universal#prohibitedwhenfn-fnwhen-message-string) rule for more details.

---

### `mimeTypes(mimes: string | string[], message: string)`

The file under validation must match one of the given MIME types:

```typescript
new Validation = new Validation(formData, {
    image: Rule.file().mimeTypes(["image/jpeg", "image/png"])
});
```

or

```typescript
new Validation = new Validation(formData, {
    image: Rule.file().mimeTypes("image/jpeg")
});
```

You can pass the following options to the `mimeTypes()` rule.

#### `mimes` (required)

**type:** `string | string[]`

**description:** Single or multiple allowed MIME types.

#### `message`

**type:** `string`

**description:** Optional custom error message for `mimeTypes()` rule.

---

### `mimeType(mimes: string | string[], message: string)`

Please see the [`mimeTypes()`](#mimetypesmimes-string--string-message-string) rule for more details.

---

### `extensions(extensions: string | string[], message: string)`

The file under validation must match one of the given file extensions:

```typescript
new Validation = new Validation(formData, {
    image: Rule.file().extensions(["jpeg", "png", "jpg"])
});
```
You can pass the following options to the `extensions()` rule.

#### `extensions` (required)

**type:** `string | string[]`

**description:** Single or multiple allowed file extensions.

#### `message`

**type:** `string`

**description:** Optional custom error message for `extensions()` rule.

---

### `extension(extensions: string | string[],message: string)`

Please see the [`extensions()`](#extensionsextensions-string--string-message-string) rule for more details.

---

### `image(message: string)`

---

The file under validation must be one of the following MIME types:

- `image/jpeg`
- `image/png`
- `image/bmp`
- `image/gif`
- `image/webp`

You can pass the following options to the `image()` rule.

#### `message`

**type:** `string`

**description:** Optional custom error message for `image()` rule.