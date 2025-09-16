# Development Guide

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm or yarn
- VS Code (recommended)

### Setup

```bash
git clone <repository-url>
cd Playwright-TypeScript-Init
npm install
npx playwright install
```

### Environment Configuration

Create `.env` file:

```bash
BASE_URL=your_test_environment_url
```

## Development Workflow

### 1. Code Quality First

```bash
npm run check    # Lint + format + TypeScript check
npm run fix      # Auto-fix issues
```

### 2. Development Commands

```bash
npm run test:debug    # Debug failing tests
npm run test:headed   # Visual test execution
npm run codegen       # Generate test code
npm run report        # View test results
```

## Naming Conventions

### Page Objects

- File: `SomePage.ts`
- Class: `export class SomePage extends BasePage`
- Always extend `BasePage`

### Locators

- File: `Some_Page.ts`
- Constant: `SOME_PAGE_LOCATORS`
- Use `UPPER_SNAKE_CASE` with `_LOCATORS` suffix

### Test Files

- File: `some-feature.spec.ts`
- Always end with `.spec.ts`

## Development Patterns

### Creating a New Page Object

1. **Create locator file**: `src/locators/New_Page.ts`

```typescript
export const NEW_PAGE_LOCATORS = {
  submitButton: {role: 'button', name: 'Submit'},
  formSection: {
    usernameField: {role: 'textbox', name: 'Username'},
  },
} as const
```

2. **Create page class**: `src/pages/NewPage.ts`

```typescript
import {BasePage} from '@/core'
import {NEW_PAGE_LOCATORS} from '@/locators'

export class NewPage extends BasePage {
  async performAction(): Promise<void> {
    await test.step('Perform action', async () => {
      const {submitButton} = NEW_PAGE_LOCATORS
      await this.clickOnElement(submitButton)
    })
  }
}
```

3. **Add to fixtures**: `src/fixtures/testSetup.ts`

```typescript
const test = base.extend<PageFixtures>({
  newPage: async ({page}, use) => await use(new NewPage(page)),
})
```

4. **Create test**: `src/tests/new-feature.spec.ts`

```typescript
test.describe('New Feature Tests', () => {
  test('should perform action', async ({newPage}) => {
    await newPage.performAction()
  })
})
```

## Best Practices

### Test Organization

- Group related tests in describe blocks
- Use descriptive test names
- One assertion per test when possible

### Page Object Methods

- Use `test.step()` for logical grouping
- Return Promise<void> for async methods
- Include validation in navigation methods

### Error Handling

- Throw descriptive errors with context
- Use try-catch for expected failures
- Validate preconditions

### Environment Variables

- Access only via `envUtils.ts`
- Validate required variables on startup
- Use TypeScript types for configuration
