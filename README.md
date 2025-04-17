# Learn TypeScript 🚀

Welcome to the **Learn TypeScript** repository! This project is designed to help you get started with TypeScript from scratch — perfect for JavaScript developers looking to level up.

---

## 📘 What is TypeScript?

[TypeScript](https://www.typescriptlang.org/) is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

---

## 📂 Project Structure
```bash
├── test/
│   ├── basics.ts          # Basic syntax: types, variables, functions
│   ├── arrays.ts          # Working with arrays and tuples
│   ├── objects.ts         # Interfaces and object types
│   ├── classes.ts         # OOP: classes, inheritance, access modifiers
│   ├── generics.ts        # Generic functions and types
│   ├── utility-types.ts   # Partial, Pick, Readonly, etc.
├── tsconfig.json          # TypeScript compiler configuration
├── package.json           # Project dependencies
├── jest.config.js         # Jest configuration for TypeScript
└── README.md              # You’re here!
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/maniziva/learn-typescript.git
cd learn-typescript
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the TypeScript Compiler
```bash
npx tsc       # Compiles all .ts files in the src/ folder
```

### 4. Run TypeScript Directly (using ts-node)
```bash
npx ts-node src/basics.ts
```

---

## 🧪 Running Tests with Jest

This project uses [Jest](https://jestjs.io/) for testing. Jest is configured to work with TypeScript using `ts-jest`.

### 1. Run All Tests
```bash
npm test
```

### 2. Run a Specific Test File
```bash
npx jest test/basics.test.ts
```

### 3. Watch Mode
To re-run tests automatically when files change:
```bash
npx jest --watch
```

---