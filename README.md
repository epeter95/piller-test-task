# 📄 Form Manager Application

## 📌 Project Overview

This project is a simple Form Manager application built with Angular.

It allows users to:

- View a list of forms (open / closed)
- Fill out open forms using a stepper-based wizard
- Validate inputs dynamically based on configuration
- Review and submit the form

The main focus of the project is on clean architecture, dynamic form handling, and modern Angular features.

---

## 🛠 Tech Stack

- Angular (standalone components, signals)
- Angular Material
- RxJS
- TypeScript

---

## 🏗 Architecture

The application follows a **feature-based architecture**:

````
src/
  app/
    shared/ # global utilities (ui, interceptors, utils, services)
    features/
      forms/ # form domain logic
        components/
        configs/
        models/
        pages/
        layout/
        services/
        utils/
        config/
````

### Key decisions

- Dynamic form generation based on JSON configuration
- Feature-scoped logic (no unnecessary shared abstractions)
- Validator mapping per input type to prevent invalid configurations
- Clean separation between UI and business logic

---

## ✨ Features

- 📋 Form list with open / closed state
- 🧭 Stepper-based wizard (Angular Material)
- 🧩 Dynamic question rendering (text, number, checkbox, select)
- ✅ Validation based on configuration
- 🔍 Review step before submission
- 📱 Responsive layout (mobile-friendly)
- 🔗 Slug-based routing

---

## ✅ Validation Strategy

Validators are dynamically assigned based on the question type.

Invalid validator combinations are filtered out to ensure stability.  
For example:

- `min` / `max` are not applied to checkbox inputs
- Only supported validators are used per input type

This ensures the application remains robust even if the input configuration is inconsistent.

---

## 🧠 State Management

NgRx was intentionally not used.

Given the scope of the application, local state management with Angular signals and reactive forms is sufficient and avoids unnecessary complexity.

---

## 🧪 Testing

Basic unit tests are included for core logic:

- Dynamic form building
- Validator mapping

The focus is on testing business logic rather than UI components.

---

## Installation and CLI commands

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.2.

Recommended NodeJS version: v24.14.0

( check compatibilities at: https://angular.dev/reference/versions )

### Install Dependencies

To install the necessary dependencies:

```bash
npm i
```

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```
