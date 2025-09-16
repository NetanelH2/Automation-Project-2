# Architecture Guide

## Three-Layer Architecture

### 1. Core Layer

- `BasePage` - Base class for all page objects
- `LocatorUtils` - Automatic fallback locator strategies
- Foundation classes providing reusable methods

### 2. Page Layer

- Specific page objects implementing business actions
- Organized by functionality: main-content, navigation, content-pages
- Each page extends `BasePage`

### 3. Test Layer

- Test specs using injected page objects via custom fixtures
- Organized to match page structure

## Key Design Principles

### Dependency Injection

All page objects automatically injected via custom fixtures in `src/fixtures/testSetup.ts`:

```typescript
const test = base.extend<PageFixtures>({
  mainPage: async ({page}, use) => await use(new MainPage(page)),
  topMenuMainPage: async ({page}, use) => await use(new TopMenuMainPage(page)),
})
```

### Centralized Locators

- All locators in separate files under `src/locators/`
- Prevents coupling between page objects and selectors
- Supports both string and role-based locators

### Automatic Fallback Strategy

Locator resolution order:

1. CSS/XPath selectors
2. getByLabel
3. getByText
4. getByRole

## Import Strategy

- Use `@/` alias for all internal imports
- Avoid circular dependencies by importing specific modules
- Barrel exports in index.ts files for external consumption
