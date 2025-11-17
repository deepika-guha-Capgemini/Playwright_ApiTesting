## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
- Copy `.env` file and update the values as needed
- Set your `BASE_URL` and `API_KEY`

## Running Tests

Run all tests:
```bash
npm test
```

Run tests with UI mode:
```bash
npm run test:ui
```

Run tests in headed mode:
```bash
npm run test:headed
```

View HTML report:
```bash
npm run report
```

## Project Structure

```
├── tests/
│   ├── helpers/
│   │   └── api-helper.ts    # API helper utilities
│   └── example.spec.ts      # Example API tests
├── .env                     # Environment variables
├── package.json            # Project dependencies and scripts
├── playwright.config.ts    # Playwright configuration
└── tsconfig.json          # TypeScript configuration
```

## Writing Tests

Check `tests/example.spec.ts` for example test cases. The framework provides helper methods for common API operations in `tests/helpers/api-helper.ts`.

## commands used post installing Node, nvm ,git, playwright and githu copilot extentions
node intstall 18.0.0
nvm intstall 18.0.0
noe -v
nvm -v
npm init@playwrigt latest

## chose tyscript, tests folder and all browser dependencies 