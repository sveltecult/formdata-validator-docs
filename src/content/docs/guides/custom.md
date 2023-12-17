---
title: Custom
---

Custom validation becomes crucial when standard validation classes don't cover specific requirements, such as database-related checks like "Unique" or "Exists." Our library intentionally omitted these rules due to the uniqueness of database access methods in different applications.

## Usage

All validation types within our library offer access to the `.custom()` validation rule. This rule accepts a single argument of type `Fn`, as defined below in TypeScript:

```typescript
export type Fn = (
  attribute: string,
  value: any,
  formData?: FormData
) => Promise<string | undefined>;
```

The `Fn` function requires two mandatory arguments: `attribute` and `value`, along with an optional `formData` parameter containing data from other fields.

Let's take an example of checking email uniqueness using a custom validation function:

```typescript
const formData = await request.formData();

const validation = new Validation(formData, {
  email: Rule.string().required().custom(async (attribute, value, formData) => {
    // Perform database calls or any custom validation logic here
    
    if (/* Logic to check email uniqueness */) {
      return "The email is already taken";
    }
  }),
  password: Rule.string().required()
});

const errors = await validation.errors();

if (errors.any() === true) {
  console.log(errors.all());
}
```

In this example:

- We utilize `.custom()` rule to create a custom validation for the email field.
- Inside the custom function, you can perform database queries or any specific validation checks required.
- If the validation fails (e.g., email is not unique), return an error message as a string. Otherwise, return undefined.
- The `formData` parameter is optional and contains the data of other fields, allowing you to perform contextual validation based on the entire form data.

Custom validation using `.custom()` empowers developers to implement specific validation logic tailored to their application's unique requirements. This flexibility allows for intricate checks, such as database-related validations, beyond the standard rules provided by the library.

Feel free to explore and leverage custom validation to suit your application's needs, ensuring data validation integrity and accuracy.