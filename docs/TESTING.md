````markdown
# Testing Guide

> 🧪 **Comprehensive testing strategy** for the Playwright TypeScript Test Automation Template, including test classification, execution, and CI/CD integration.

## 🏷️ Test Classification & Tagging System

All tests use Playwright's tagging system to enable efficient execution based on different scenarios and CI requirements.

### **Test Tags Overview**

| **Tag**         | **Purpose**                          | **Execution Time** | **CI Schedule**   | **Coverage**       |
| --------------- | ------------------------------------ | ------------------ | ----------------- | ------------------ |
| **@sanity**     | Critical functionality validation    | ~5-15 minutes      | Every 2 hours     | Core features only |
| **@regression** | Comprehensive application validation | ~30-60 minutes     | Daily at 2 AM UTC | Full feature set   |

### **@sanity Tests** - Critical Path Validation

**Purpose**: Fast feedback on core functionality

- ⏱️ **Execution Time**: 5-15 minutes maximum (timeout: 60 min)
- 🎯 **Coverage Focus**: Essential user journeys
- 📅 **CI Schedule**: Every 2 hours with quota-aware uploads
- 🚨 **Failure Impact**: Immediate attention required
- 💾 **Artifacts**: 3-day retention with smart upload fallback

**Current @sanity Coverage**:

- Main page core functionality validation
- Content verification and display
- Critical navigation paths

**Example @sanity Test**:

```typescript
test('should validate main page content @sanity', async ({mainPage}) => {
  await mainPage.navigateToPage()
  await mainPage.validateMainContent()
})
```

### **@regression Tests** - Comprehensive Validation

**Purpose**: Thorough application validation

- ⏱️ **Execution Time**: 30-60 minutes (timeout: 120 min)
- 🎯 **Coverage Focus**: All features and edge cases
- 📅 **CI Schedule**: Nightly at 2 AM UTC with quota-aware uploads
- 🔍 **Failure Impact**: Investigation during business hours
- 💾 **Artifacts**: 7-day retention with smart upload fallback

**Current @regression Coverage**:

- **Navigation Tests**: Menu navigation and content verification
- **Content Pages**: Form validation, dynamic content loading
- **Interactive Features**: Read More functionality, dynamic content loading

## 🚀 Test Execution Commands

### **Core Testing Commands**

```bash
# 🎯 Primary Test Execution
npm test                       # Run all tests (full suite)
npm run test:sanity           # Critical functionality only (⚡ fast)
npm run test:regression       # Comprehensive validation
npm run test:chrome           # Single browser (Chromium only)

# 🔍 Development & Debugging
npm run test:debug            # Interactive debugging mode
npm run test:headed           # Visual execution (see browser)
npm run codegen              # Auto-generate test code
npm run report               # Open interactive HTML report

# 📊 Targeted Test Execution
npm run test:sanity:chrome    # Fast sanity tests in Chrome only
npm run test:regression:chrome # Regression tests in Chrome only
```

### **Test Execution Strategy**

| **Command**               | **Use Case**                      | **Duration** | **Best For**         |
| ------------------------- | --------------------------------- | ------------ | -------------------- |
| `npm test`                | Full validation before deployment | 30-45 min    | Release preparation  |
| `npm run test:sanity`     | Quick feedback during development | 5-10 min     | Active development   |
| `npm run test:regression` | Comprehensive feature validation  | 30-45 min    | Feature completion   |
| `npm run test:debug`      | Investigation and troubleshooting | Variable     | Debugging failures   |
| `npm run test:headed`     | Understanding test flow           | Variable     | Learning/development |

### **Advanced Execution Options**

#### **Browser-Specific Testing**

```bash
# Single browser execution (faster for development)
npm run test:chrome           # Chromium only
npm run test:firefox          # Firefox only
npm run test:safari           # Safari only (macOS)

# Tag + Browser combination
npm run test:sanity:chrome    # Sanity tests in Chrome only
```

#### **Environment-Specific Testing**

```bash
# Different environments (if configured)
BASE_URL=https://staging.example.com npm test
BASE_URL=https://dev.example.com npm run test:sanity
```

#### **Custom Test Filtering**

```bash
# Run specific test files
npx playwright test src/tests/main-content/
npx playwright test src/tests/navigation/

# Run tests with custom grep pattern
npx playwright test --grep "critical functionality"
npx playwright test --grep "@sanity"
```

## 🎯 Test Organization by Functionality

### **Directory Structure & Coverage**

```
src/tests/
├── 📂 main-content/          # @sanity tests
│   ├── main-page-validate-content.spec.ts
│   └── main-functionality.spec.ts
├── 📂 navigation/            # @regression tests
│   ├── main-navigation.spec.ts
│   └── navigation-menus.spec.ts
└── 📂 content-pages/         # @regression tests
    ├── form-validation.spec.ts
    └── dynamic-content.spec.ts
```

### **Test Coverage Matrix**

| **Category**      | **Files**                 | **Tag**       | **Coverage**              | **Execution Time** |
| ----------------- | ------------------------- | ------------- | ------------------------- | ------------------ |
| **Main Content**  | `main-content/*.spec.ts`  | `@sanity`     | Homepage, core content    | ~3-5 min           |
| **Navigation**    | `navigation/*.spec.ts`    | `@regression` | Navigation menus, routing | ~10-15 min         |
| **Content Pages** | `content-pages/*.spec.ts` | `@regression` | Forms, dynamic content    | ~15-25 min         |

### **Detailed Test Breakdown**

#### **@sanity Tests (Main Content)**

- **main-page-validate-content.spec.ts**: Core page content validation
- **main-functionality.spec.ts**: Essential functionality

#### **@regression Tests (Navigation)**

- **Main Navigation**: Menu functionality and routing
- **Secondary Navigation**: Footer and auxiliary navigation

#### **@regression Tests (Content Pages)**

- **Form Validation**: Input validation and submission
- **Dynamic Content**: Content loading and interaction

## 🤖 CI/CD Integration & Automation

### **Automated Testing Schedule**

| **Workflow**               | **Trigger**       | **Frequency**     | **Tests Executed**   | **Purpose**                       |
| -------------------------- | ----------------- | ----------------- | -------------------- | --------------------------------- |
| **🚨 Sanity Tests**        | Schedule + Manual | Every 2 hours     | `@sanity` only       | Critical functionality monitoring |
| **🌙 Regression Tests**    | Schedule + Manual | Daily at 2 AM UTC | Full test suite      | Comprehensive validation          |
| **⚡ Code Quality**        | Push/PR           | On every commit   | Code validation only | Quality gate enforcement          |
| **🧹 Cleanup Artifacts**   | Schedule + Manual | Daily at 2 AM UTC | Storage management   | Prevent quota issues              |
| **📊 Deploy Reports**      | Auto + Manual     | After tests       | Report deployment    | GitHub Pages hosting              |
| **📱 Slack Notifications** | Auto + Manual     | After deployment  | Team notifications   | Status updates                    |

### **CI/CD Pipeline Features**

#### **🔧 Quality Gates**

- ✅ **Automated Code Quality**: ESLint + Prettier + TypeScript validation
- ✅ **Zero Warnings Policy**: Builds fail on any linting warnings
- ✅ **Pre-commit Hooks**: Local quality checks before commits

#### **🧪 Advanced Test Execution**

- 🔄 **Cross-browser Testing**: Chrome, Firefox, Safari (parallel execution)
- 📱 **Multiple Environments**: Support for staging, production, development
- 🎯 **Selective Testing**: Tag-based filtering (`@sanity` vs `@regression`)
- 📸 **Rich Artifacts**: Screenshots, videos, HTML reports, trace files
- 🛡️ **Quota-Aware Uploads**: Smart handling of GitHub storage limits
- 🔄 **Automatic Fallbacks**: Continue execution if artifact upload fails

#### **⚡ Performance & Reliability Features**

- 🚀 **Parallel Execution**: Tests run concurrently across browsers
- 🎯 **Smart Scheduling**: Frequent sanity tests, comprehensive nightly runs
- 🔄 **Automatic Retries**: CI retries flaky tests automatically
- 📊 **Intelligent Reporting**: Historical reports with beautiful navigation
- 🧹 **Storage Management**: Automatic artifact cleanup prevents quota issues
- 📈 **Report Organization**: Latest + historical reports with timestamps

### **Manual Test Triggers**

All CI workflows support manual execution with customizable parameters:

#### **Test Execution Options**

```yaml
# Sanity Tests Manual Trigger
workflow_dispatch:
  inputs:
    reason:
      description: 'Reason for running tests manually'
      required: false
      default: 'Manual sanity test run'

# Regression Tests Manual Trigger
workflow_dispatch:
  inputs:
    reason:
      description: 'Reason for running tests manually'
      required: false
      default: 'Manual regression test run'

# Cleanup Artifacts Manual Trigger
workflow_dispatch:
  inputs:
    days_to_keep:
      description: 'Number of days to keep artifacts'
      required: true
      default: '3'
      type: choice
      options: ['1', '2', '3', '7']
    dry_run:
      description: 'Dry run - only show what would be deleted'
      required: true
      default: 'false'
      type: choice
      options: ['true', 'false']

# Deploy Reports Manual Trigger
workflow_dispatch:
  inputs:
    source_workflow:
      description: 'Source workflow to deploy reports from'
      required: true
      default: 'sanity-tests'
      type: choice
      options: ['sanity-tests', 'nightly-regression-tests']

# Slack Notifications Manual Trigger
workflow_dispatch:
  inputs:
    status:
      description: 'Test notification status'
      required: true
      default: 'success'
      type: choice
      options: ['success', 'failure']
```

### **Enhanced Monitoring & Alerts**

#### **Intelligent Failure Handling**

- 🔄 **Quota-Aware Processing**: Tests continue if GitHub storage quota is hit
- 📊 **Fallback Reporting**: Local report details shown if upload fails
- ⏰ **Quota Refresh Guidance**: Clear messaging about storage quota timing
- 🔧 **Actionable Alerts**: Direct links to logs and troubleshooting steps

#### **Advanced Notifications**

- 📧 **GitHub Notifications**: Automatic notifications on workflow failures
- 💬 **Slack Integration**: Team notifications with context-aware messaging
- � **Smart Linking**: Original test status linked with deployment results
- 🌍 **Timezone Support**: Israel timezone for regional teams
- �🔍 **Detailed Reports**: HTML reports with failure screenshots and traces
- 📊 **Trend Analysis**: Test execution trends and success rates

#### **Report Access & Organization**

| **Report Type**        | **URL Pattern**                                                                          | **Purpose**                       |
| ---------------------- | ---------------------------------------------------------------------------------------- | --------------------------------- |
| **Main Index**         | `https://netanelh2.github.io/Playwright-TypeScript-Init/`                                | Beautiful navigation              |
| **Latest Sanity**      | `https://netanelh2.github.io/Playwright-TypeScript-Init/latest/sanity-tests/`            | Always-current sanity reports     |
| **Latest Regression**  | `https://netanelh2.github.io/Playwright-TypeScript-Init/latest/regression-tests/`        | Always-current regression reports |
| **Historical Archive** | `https://netanelh2.github.io/Playwright-TypeScript-Init/reports/[workflow]/[timestamp]/` | Timestamped historical reports    |

#### **Storage & Artifact Management**

| **Artifact Type**      | **Retention Period** | **Contents**                      | **Management**        |
| ---------------------- | -------------------- | --------------------------------- | --------------------- |
| **Sanity Reports**     | 3 days               | HTML reports, screenshots, videos | Auto-cleanup + quotas |
| **Regression Reports** | 7 days               | HTML reports, screenshots, traces | Auto-cleanup + quotas |
| **Quality Results**    | 7 days               | Linting results, compilation logs | Standard retention    |
| **Historical Reports** | Indefinite           | Last 10 reports per workflow      | GitHub Pages storage  |

## 🛠️ Test Development & Maintenance

### **Adding New Tests**

#### **Classification Guidelines**

1. **@sanity**: Critical functionality that MUST work for basic system operation
   - Maximum 15-20 minutes total execution time
   - Core user journeys only
   - High-value, high-frequency functionality

2. **@regression**: Comprehensive validation for feature completeness
   - Can take longer execution time
   - Edge cases and error scenarios
   - Complete feature coverage

#### **Development Process**

```typescript
// 1. Classify appropriately
test.describe('Feature Tests', () => {
  test('should validate core functionality @sanity', async ({page}) => {
    // Critical path only
  })

  test('should handle edge cases @regression', async ({page}) => {
    // Comprehensive validation
  })
})

// 2. Use consistent patterns
test('should perform user action @sanity', async ({somePage}) => {
  await somePage.navigateToPage()
  await somePage.performCriticalAction()
  await somePage.validateExpectedOutcome()
})
```

### **Quality Standards**

#### **Test Structure**

- 📝 **Descriptive names** that reflect business value
- 🎯 **Single responsibility** per test
- 📊 **Proper assertions** with clear expected outcomes
- 🔄 **test.step()** for logical action grouping

#### **Performance Guidelines**

- ⚡ **Sanity tests**: Keep individual tests under 2-3 minutes
- 🔍 **Regression tests**: Focus on thoroughness over speed
- 🎯 **Targeted execution**: Use specific test files for focused testing
- 📈 **Monitor trends**: Track execution times and optimize slow tests

## 📊 Debugging & Troubleshooting

### **Development Tools**

#### **Interactive Debugging**

```bash
npm run test:debug          # Playwright Inspector
npm run test:headed         # Visual browser execution
npm run codegen            # Generate test code
```

#### **Execution Analysis**

```bash
npm run report              # HTML test report
npx playwright show-trace   # Detailed execution traces
npx playwright test --list  # List all tests by tag
```

### **Common Debugging Scenarios**

#### **Test Failures**

1. **Check Screenshots**: Available in test reports
2. **Review Traces**: Step-by-step execution details
3. **Run in Headed Mode**: Visual debugging
4. **Use Debug Mode**: Interactive investigation

#### **Performance Issues**

1. **Profile Test Duration**: Use built-in reporting
2. **Optimize Locators**: Review fallback strategies
3. **Reduce Scope**: Focus sanity tests on critical paths
4. **Parallel Execution**: Verify browser distribution

## 🔗 Related Documentation

- **Architecture Details**: [ARCHITECTURE.md](ARCHITECTURE.md)
- **Development Workflow**: [DEVELOPMENT.md](DEVELOPMENT.md)
- **CI/CD Configuration**: [../.github/WORKFLOWS.md](../.github/WORKFLOWS.md)
- **Troubleshooting Guide**: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

---

**🎯 Testing Philosophy**: Fast feedback through smart classification, comprehensive coverage through automated schedules, and reliable execution through quality engineering practices.
````
