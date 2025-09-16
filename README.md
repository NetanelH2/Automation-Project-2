# Playwright TypeScript Test Automation Template

> A modern, scalable test automation framework template using Playwright + TypeScript with Page Object Model pattern

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.49-green.svg)](https://playwright.dev/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](LICENSE)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install

# Run tests
npm test
```

## 🏗️ Architecture

- **Page Object Model (POM)** with TypeScript
- **Dependency Injection** via custom fixtures
- **Automatic Fallback Locators** for robust testing
- **Pre-commit Quality Gates** (ESLint + Prettier + TypeScript)

## 📁 Project Structure

```
src/
├── core/         # Base classes (BasePage, LocatorUtils)
├── pages/        # Page objects for your application
├── locators/     # Centralized element selectors
├── tests/        # Test specifications
├── fixtures/     # Custom Playwright fixtures
├── data/         # Test data and URLs
├── helpers/      # Utilities (environment, arrays)
└── types/        # TypeScript type definitions
```

## 🧪 Testing & CI/CD

### **Quick Testing**

```bash
npm test                  # All tests
npm run test:sanity       # Critical functionality only
npm run test:chrome       # Chrome only
npm run test:debug        # Debug mode
npm run test:headed       # Visual mode
npm run report            # View results
```

### **Automated Workflows**

- ** Report Deployment**: Automatic GitHub Pages hosting
- **🧹 Storage Management**: Automated artifact cleanup
- **📱 Team Notifications**: Optional Slack integration

### **Live Reports**

📊 **View Latest Reports**: https://netanelh2.github.io/Playwright-TypeScript-Init/

## 🔧 Development

```bash
npm run check             # Quality check (lint + format + tsc)
npm run fix               # Auto-fix issues
npm run codegen           # Generate test code
```

## 🌍 Environment Setup

Create `.env` file:

```bash
BASE_URL=your_test_environment_url
```

## 🤝 Contributing

1. **Quality First**: All commits go through automated quality checks
2. **Follow Patterns**: Use existing page object and locator patterns
3. **Test Categories**: Organize tests by functionality

### Code Style

- ESLint with zero warnings
- Prettier formatting
- Import alias: `@/` for internal imports

## 📖 Documentation

| **Document**                                            | **Purpose**                         | **For**                  |
| ------------------------------------------------------- | ----------------------------------- | ------------------------ |
| **[ARCHITECTURE.md](docs/ARCHITECTURE.md)**             | Technical design and patterns       | Developers, Tech Leads   |
| **[DEVELOPMENT.md](docs/DEVELOPMENT.md)**               | Setup and development workflow      | All Contributors         |
| **[TESTING.md](docs/TESTING.md)**                       | Test strategy and CI/CD integration | QA Engineers, DevOps     |
| **[WORKFLOWS.md](.github/WORKFLOWS.md)**                | GitHub Actions and automation       | DevOps, CI/CD Managers   |
| **[GITHUB_PAGES_SETUP.md](docs/GITHUB_PAGES_SETUP.md)** | Report hosting and deployment       | DevOps, Project Managers |
| **[TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)**       | Common issues and debugging         | All Users                |

### **📋 Quick Navigation**

- **🆕 New to Project**: Start with [DEVELOPMENT.md](docs/DEVELOPMENT.md)
- **🏗️ Understanding Code**: Read [ARCHITECTURE.md](docs/ARCHITECTURE.md)
- **🧪 Test Strategy**: Review [TESTING.md](docs/TESTING.md)
- **⚙️ CI/CD Setup**: Check [WORKFLOWS.md](.github/WORKFLOWS.md)
- **❓ Need Help**: See [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)

## 🔄 CI/CD & Automation

### **Advanced Pipeline Features**

- **🔧 Code Quality**: Automated ESLint + Prettier + TypeScript checks
- **🌐 Cross-browser Testing**: Chrome, Firefox, Safari with parallel execution
- **📊 Intelligent Reports**: GitHub Pages with historical organization
- **🛡️ Quota-Aware Uploads**: Smart artifact handling for GitHub storage limits
- **📱 Smart Notifications**: Context-aware Slack alerts with test status linking
- **🧹 Storage Management**: Automatic cleanup prevents quota issues

### **Manual Triggers**

All workflows support manual execution via GitHub Actions with customizable options:

- Test execution with custom reasons
- Artifact cleanup with configurable retention
- Report deployment from specific workflow runs
- Notification testing for team integration

### **Monitoring & Reliability**

- **📈 Beautiful Reports**: Styled HTML index with latest + historical views
- **🔄 Automatic Fallbacks**: Continue execution if storage quotas hit
- **⏰ Smart Scheduling**: Frequent sanity checks + comprehensive nightly runs
- **🔗 Direct Links**: Easy access to latest reports and historical archives

---

**Built with ❤️ by the Testing Team**
