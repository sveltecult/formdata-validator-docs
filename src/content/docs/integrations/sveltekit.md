---
title: Sveltekit Integration
---

Here's a fully working example on how we can integrate on Sveltekit. For this example, we will use [Form actions](https://kit.svelte.dev/docs/form-actions) and use the `enhance` directive.

In your `login/+page.svelte` file, you can implement the following example code. We've removed all classes for simplicity:

```svelte
<script>
	import { enhance } from '$app/forms';

	export let form;
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1>
	Login to your account
</h1>

{#if form?.status === 400}
	<div>
		Oops! Please review and correct the highlighted fields before resubmitting.
	</div>
{/if}

{#if form?.status === 401}
	<div>
		Oops! Please check your email and password and try again.
	</div>
{/if}

{#if form?.status === 500}
	<div>
		Oops! Something went wrong on our end. Please try again later or contact support for assistance.
	</div>
{/if}

<form method="post" use:enhance>
	<div>
		<label for="email">Email address</label>
		<input
			id="email"
			type="email"
			name="email"
			placeholder="Email address"
		/>
		{#if form?.errors?.email}
			<div>
				{form.errors?.email}
			</div>
		{/if}
	</div>

	<div>
		<label for="password">Password</label>
        <input
            id="password"
            name="password"
            placeholder="Password"
        />
		{#if form?.errors?.password}
			<div>
				{form?.errors?.password}
			</div>
		{/if}
	</div>

	<div>
		<button>Login</button>
	</div>
</form>
```

Then in your `login/+page.server.js`

```typescript
import { Rule, Validation } from '@sveltecult/formdata-validator';
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		let intent;

		const formData = await request.formData();

		const validation = new Validation(formData, {
			email: Rule.string().required().email(),
			password: Rule.string().required().minLength(8)
		});

		const errors = await validation.errors();

		if (errors.any() === true) {
			return fail(400, {
				status: 400,
				errors: {
					email: errors.first('email'),
					password: errors.first('password')
				}
			});
		}

		// do all Prisma or your ORM of choice operations here

		if (intent === '/') {
			throw redirect(303, '/');
		}
	}
};
```
That's it! In this implementation, the `intent` variable stores the path for redirecting users. This is useful in scenarios like a user is found or  correct credentials are entered, or in implementing an OTP functionality [because we can't just throw a `redirect()` inside try-catch blocks](https://github.com/sveltejs/kit/issues/8689).

Additionally, we immediately notify the user of form validation failures by highlighting the fields, ensuring a smoother user experience. Neat!