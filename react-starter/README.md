# React Smart Website Starter

This project is a React-based web application starter template designed for building smart websites with a focus on AI chat functionalities and dynamic content assembly.


# React Starter Template

## Purpose

This directory is a reusable React project template.

It is used as the foundation for generating new websites.

---

## Important Rule

This folder is READ-ONLY.

The agent must NOT modify files inside this directory.

**Do NOT:**

- add business-specific pages
- change components for a specific customer
- overwrite configuration files
- generate final websites here

---

## How To Use

When creating a new website:

1. Copy this template.
2. Create a new project folder in the user's workspace.
3. Generate customized website code in the new project.

**Example:**

Template:

```
react-starter/
```

Copy to:

```
user-workspace/my-new-website/
```

Then modify:

```
my-new-website/src/
```

**NOT:**

```
react-starter/src/
```

---

## Design Philosophy

This starter contains:

- React architecture
- TypeScript setup
- TailwindCSS configuration
- Animation libraries
- Shared components

It provides the foundation, not the final product.




## Project Structure

The project contains the following files and directories:

- **package.json**: Configuration file for npm, listing project dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file specifying compilation options and files to include.
- **vite.config.ts**: Vite configuration file defining build and development server settings.
- **tailwind.config.ts**: Tailwind CSS configuration file for custom themes and styles.
- **README.md**: Documentation and instructions for the project.

### Source Directory (`src`)

- **assets/**: Contains default placeholder images and global icons.
- **components/**: 
  - **animation/**: Declarative animation wrapper components (e.g., FadeIn, ScrollReveal, Floating).
  - **base/**: Atomic UI components (e.g., Button, Card, Badge, Modal, SectionTitle).
  - **AIChat/**: Components for the AI chat foundation (e.g., ChatButton, ChatWindow, Message, Input, API).
- **config/**:
  - **themes.ts**: Token dictionary for four major industry theme designs.
  - **i18n.ts**: Internationalization configuration (Chinese, English, Japanese).
- **layouts/**:
  - **MarketingLayout.tsx**: Common layout for standard marketing pages (Header + Main + Footer).
- **sections/**: Core AI dynamic assembly blocks (e.g., Hero, Features, Workflow, Pricing, FAQ).
- **services/**:
  - **chat.ts**: Communication layer for customer service API interfaces.
- **utils/**:
  - **cn.ts**: Tailwind style merging utility.
  - **seo.ts**: Management of TDK and OpenGraph metadata.
- **App.tsx**: Entry point for dynamic schema rendering.
- **main.tsx**: Mounting point for the application.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd react-smart-website-starter
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.