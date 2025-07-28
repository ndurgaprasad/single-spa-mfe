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

## Integration Overview

- **shared-mfe** exports reusable React components (such as `SharedButton`) and utilities.
- **react-mfe** imports and uses components from **shared-mfe** via the import map, enabling true code sharing.
- **root-mfe** defines the layout and routes for all MFEs using a single-spa layout definition.

---

## Integrate react-mfe in root-mfe

- The `root-mfe` (root-config) uses a layout definition (typically `microfrontend-layout.html`) to specify which microfrontends are mounted for each route.
- In the layout file, `react-mfe` is registered as an application using the `<application name="@dev/react-mfe"></application>` tag.
- The import map in `root-mfe` maps `@dev/react-mfe` to its deployed URL (e.g., `http://localhost:9001/react-mfe.js`).
- When you navigate to the corresponding route, single-spa loads and mounts `react-mfe` automatically.

**Example layout snippet in `root-mfe/src/microfrontend-layout.html`:**

```html
<single-spa-router>
  <main>
    <route default>
      <application name="@dev/react-mfe"></application>
    </route>
  </main>
</single-spa-router>
```

**Example import map snippet in `root-mfe` (e.g., in `index.html`):**

```json
{
  "imports": {
    "@dev/react-mfe": "http://localhost:9001/react-mfe.js",
    "@dev/shared-mfe": "http://localhost:9002/shared-mfe.js"
  }
}
```

This setup allows `root-mfe` to orchestrate and display `react-mfe` as part of the overall microfrontend architecture.

---

## Integrate shared-mfe with react-mfe

- `shared-mfe` is not registered as an application in the layout; instead, its exports are imported directly in other MFEs.
- For example, in `react-mfe`, you can use:
  ```js
  import { SharedButton } from '@dev/shared-mfe';
  ```
- Make sure the import map in `root-mfe` includes `@dev/shared-mfe` pointing to its build URL.
- This enables true code sharing and reusability across MFEs.

**Example usage in `react-mfe`:**

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
