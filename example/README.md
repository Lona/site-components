# Example

To run the example project, first run `yarn` and `yarn build` in the root directory. Then in this `example` directory:

```bash
yarn
yarn dev
```

### Local Development

Follow these instructions to test using the example project while developing the library.

In the project's root directory:

```bash
yarn link
```

Then in this `example` directory:

```bash
yarn link @lona/site-components
```

Lastly, in the root directory, make sure you have `yarn build:watch` running to recompile code changes.
