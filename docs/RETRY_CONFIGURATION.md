# Retry Configuration for CI

## Overview

The Playwright configuration has been updated to provide retry attempts specifically for regression and sanity tests when they fail in CI environments. This feature is designed to improve CI reliability by automatically retrying critical test suites that may fail due to transient issues.

**Primary CI Commands with Retries:**

- `npm run test:sanity` - 2 retries
- `npm run test:regression` - 2 retries

## Retry Behavior

### Local Development (Non-CI)

- **All tests**: 0 retries
- Tests fail immediately on first failure

### CI Environment

- **General tests**: 0 retries
- **Sanity tests** (`@sanity`): 2 retries
- **Regression tests** (`@regression`): 2 retries

## How It Works

The retry configuration automatically detects:

1. Whether the tests are running in a CI environment (`process.env.CI`)
2. Whether specific test tags are being used (`process.env.TEST_TAGS`)

### Test Commands

The following npm scripts will have retries in CI:

```bash
# Sanity tests with 2 retries in CI
npm run test:sanity

# Regression tests with 2 retries in CI
npm run test:regression
```

**Note**: Chrome-specific variants (`test:sanity:chrome`, `test:regression:chrome`) will also get retries since they use the same `TEST_TAGS`, but these are typically used for local debugging rather than CI.

### Example Scenarios

1. **Running sanity tests in CI**:

   ```bash
   CI=true TEST_TAGS='@sanity' playwright test
   ```

   → Tests will retry up to 2 times on failure

2. **Running regression tests in CI**:

   ```bash
   CI=true TEST_TAGS='@regression' playwright test
   ```

   → Tests will retry up to 2 times on failure

3. **Running all tests in CI**:
   ```bash
   CI=true playwright test
   ```
   → Tests will have 0 retries (fail immediately)

## Benefits

- **Targeted reliability**: Only critical test suites (sanity/regression) get retries
- **Improved stability**: Reduces false failures due to flaky tests or network issues
- **CI optimization**: Balances reliability with execution time
- **Zero impact on local development**: No retries when developing locally
- **Focused approach**: General tests fail fast, critical tests get retry protection

## Configuration Location

The retry logic is implemented in `playwright.config.ts` in the `retries` configuration option.
