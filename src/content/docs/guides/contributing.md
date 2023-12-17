---
title: Contributing
---

We welcome developers to contribute rules to our library! Contributing a new rule is straightforward and involves a few simple steps.

## Getting Started

To begin, clone the repository and navigate to `/src/core/rules/`. Here, you can create a new class for your rule. Creating a rule class is an effortless process. Utilize the following boilerplate as a starting point:

```typescript
// src/core/rules/Example.ts

import type { ValidationRules } from "@src/types";
import ValidationFailed from "@src/core/ValidationFailed";
import Base from "./Base";

export default class Example extends Base implements ValidationRules {
  protected message: string;

  constructor(
    message: string = "Error validating the :attribute field "
  ) {
    super();

    this.message = message;
  }

  async validate(
    attribute: string,
    value: any,
    formData: FormData
  ): Promise<string | undefined> {
    const onFailure = new ValidationFailed({
      ":attribute": attribute,
    });

    if(true) {
      return onFailure.message(this.message);
    }
  }
}
```

By extending the `Base` class, the `type` property and `setType` function become automatically available. In case of any issues, simply return a string as an error message. Additionally, you can leverage the `ValidationFailed` class to automatically replace placeholders like `:attribute` with the correct attribute name.

## Registering the Validation Class

Once your validation class is ready, you'll need to register it within the available validation types located in `/src/core/validation_types`. For instance, suppose you've created the `Example` class for string validation. To make it available for string validation, add a function to `src/core/validation_types/StringValidation.ts` as follows:

```typescript
example(message?: string): this {
    const rule = new Example(message).setType("string");

    this.callstacks.push(rule.validate.bind(rule));

    return this;
}
```

## Registering Rules to Multiple Validation Types

When creating a new validation rule, you have the flexibility to register it with multiple validation types where it makes logical sense. However, it's essential to consider the compatibility of the rule with different data types.

### Specific Validation Types

For rules that are tailored to specific data types (e.g., string, number, date), ensure you register them appropriately. Avoid registering a rule for data types where it doesn't apply. For example, "after" or "before" rules are applicable for `DateValidation` but not for strings or numbers, as comparing strings or numbers to dates isn't feasible.

To illustrate, if your rule is specifically designed for a `DateValidation`, register it within the corresponding validation type file (e.g., DateValidation.ts). This ensures that it's available and relevant for that specific data type.

### Universal Rules

Some rules might be universally applicable across multiple data types or all types. In such cases, you can conveniently register them within the `/src/core/validation_types/Base.ts` file. These rules, such as a `Required` class, are valid for all types and will consequently be accessible for all data types.

## Contributing Guidelines

To maintain consistency and logical validation practices, we encourage contributors to consider the compatibility of their rules with different data types before registering them across multiple validation types. Ensure that the rules registered are meaningful and applicable within the designated types to avoid any incongruities in validation.

Feel free to experiment and test your rule's compatibility with various data types before submitting a pull request. Your contributions are greatly appreciated and will help enhance the versatility and usefulness of our validation library!