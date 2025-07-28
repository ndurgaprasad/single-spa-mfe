# Single-spa Microfrontend Example

This is a simple [single-spa](https://single-spa.js.org/) microfrontend (MFE) application demonstrating how to build and integrate multiple independently running applications using React and shared utility modules.

## Applications

### 1. **react-mfe**

A standalone React microfrontend application.

### 2. **shared-mfe**

A React-based shared utility module. This exposes shared components (like a styled MUI Button) and utilities that can be imported and used by other MFEs.

### 3. **root-mfe**

The single-spa root config application. This is responsible for layout, routing, and orchestrating all MFEs.

---

## Integration Overview

- **shared-mfe** exports reusable React components (such as `SharedButton`) and utilities.
- **react-mfe** imports and uses components from **shared-mfe** via the import map, enabling true code sharing.
- **root-mfe** defines the layout and routes for all MFEs using a single-spa layout definition.

---

## Getting Started

### 1. Clone the repository

```sh
git clone git@github.com:ndurgaprasad/single-spa-mfe.git
cd single-spa-mfe
```

### 2. Install dependencies and run each application

#### **react-mfe**

```sh
cd react-mfe
npm install
npm run start         # Runs on port 9001
npm run start:standalone   # Runs standalone on port 8080 for easy local verification
```

#### **shared-mfe**

```sh
cd ../shared-mfe
npm install
npm run start         # Runs on port 9002
npm run start:standalone   # Runs standalone on port 8080 for easy local verification
```

#### **root-mfe**

```sh
cd ../root-mfe
npm install
npm run start         # Runs on port 9000
```

---

## How Integration Works

- The **import map** (defined in `root-mfe`) maps each MFE to its respective URL.
- **shared-mfe** is not registered as an application in the layout; instead, its exports are imported directly in other MFEs.
- For example, in `react-mfe`, you can use:
  ```js
  import { SharedButton } from '@dev/shared-mfe';
  ```
- The **root-mfe** uses a layout HTML file to define which MFEs are mounted for each route.

---

## Example Usage

**Using a shared component in `react-mfe`:**

```js
import { SharedButton } from '@dev/shared-mfe';

function App() {
  return (
    <div>
      <h1>This is react-mfe</h1>
      <SharedButton>Click Me</SharedButton>
    </div>
  );
}
```

---

## Ports

- **root-mfe:** http://localhost:9000
- **react-mfe:** http://localhost:9001
- **shared-mfe:** http://localhost:9002

---
