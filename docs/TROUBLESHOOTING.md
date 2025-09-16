# Troubleshooting Guide

## Common Issues

### Import Errors

**Problem**: `Cannot resolve module '@/...'`
**Solution**:

- Ensure you're using `@/` alias for internal imports
- Check `tsconfig.json` has correct path mapping
- Restart TypeScript language server in VS Code

**Problem**: Circular dependency errors
**Solution**:

- Import specific modules instead of barrel exports
- Check import chains in affected files
- Use direct imports: `from '@/pages/specific/ModulePage'`

### Environment Issues

**Problem**: `Environment variable BASE_URL is not set`
**Solution**:

- Create `.env` file in project root
- Add required variables: `BASE_URL=your_url`
- Restart development server

**Problem**: Tests fail in CI but pass locally
**Solution**:

- Check environment variables in CI
- Verify browser installation: `npx playwright install`
- Review CI logs for missing dependencies

### Browser Issues

**Problem**: `Browser not found` errors
**Solution**:

```bash
npx playwright install          # Install all browsers
npx playwright install chromium # Install specific browser
```

**Problem**: Tests timeout or hang
**Solution**:

- Increase timeout in `playwright.config.ts`
- Check for infinite waits in page objects
- Use `test:debug` mode to investigate

### Locator Issues

**Problem**: Elements not found
**Solution**:

- Use Playwright inspector: `npm run test:debug`
- Check locator fallback strategies
- Verify element is visible and interactable
- Use `page.locator()` in debug console

**Problem**: Flaky element interactions
**Solution**:

- Add explicit waits before interactions
- Use `waitForSelector` or `waitForLoadState`
- Check for overlapping elements
- Implement retry logic for unstable elements

### Test Execution Issues

**Problem**: Tests fail randomly
**Solution**:

- Enable retries in `playwright.config.ts`
- Add proper waits and assertions
- Check test isolation and cleanup
- Review shared state between tests

**Problem**: Slow test execution
**Solution**:

- Run tests in parallel: `fullyParallel: true`
- Optimize page object methods
- Reduce unnecessary waits
- Use `test:chrome` for single browser testing

### Code Quality Issues

**Problem**: ESLint/Prettier conflicts
**Solution**:

```bash
npm run fix                     # Auto-fix formatting
npm run lint:check             # Check for remaining issues
```

**Problem**: TypeScript compilation errors
**Solution**:

- Check type definitions in `src/types/`
- Ensure all imports have proper types
- Run `npx tsc --noEmit` for detailed errors

### VS Code Integration

**Problem**: IntelliSense not working
**Solution**:

- Restart TypeScript language server: Cmd+Shift+P → "TypeScript: Restart TS Server"
- Check VS Code extensions are installed
- Verify workspace settings

**Problem**: Test runner integration issues
**Solution**:

- Install Playwright VS Code extension
- Check test configuration in VS Code settings
- Use integrated terminal for test execution

## Debugging Strategies

### Test Debugging

1. Use `test:debug` mode for step-by-step execution
2. Add `page.pause()` for manual inspection
3. Enable `trace: 'on'` for detailed execution logs
4. Use `console.log()` in page object methods

### Browser Debugging

1. Run tests in headed mode: `test:headed`
2. Use browser developer tools
3. Take screenshots: `await page.screenshot()`
4. Record videos for failed tests

### CI/CD Debugging

1. Check GitHub Actions logs
2. Download test artifacts
3. Review environment variable configuration
4. Test locally with CI environment variables

## Getting Help

### Resources

- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- Project issues: GitHub Issues tab

### Debug Commands

```bash
npm run test:debug              # Interactive debugging
npm run codegen                 # Generate test code
npm run report                  # View test results
npx playwright show-trace       # View trace files
```
