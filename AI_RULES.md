# AI Rules for Postpipe Next Migration

This document outlines the core technologies used in the Postpipe Next Migration project and provides guidelines for their usage.

## Tech Stack Description:

*   **Next.js**: The primary React framework for building full-stack web applications, enabling server-side rendering, static site generation, and API routes.
*   **React**: The foundational JavaScript library for building interactive user interfaces.
*   **TypeScript**: A superset of JavaScript that adds static typing, significantly enhancing code quality, readability, and maintainability.
*   **Tailwind CSS**: A utility-first CSS framework used exclusively for rapidly styling components directly in markup, ensuring consistency and efficiency.
*   **Shadcn UI**: A collection of re-usable and accessible UI components built on Radix UI and styled with Tailwind CSS, providing a consistent and customizable design system.
*   **Genkit AI**: An open-source framework for building AI-powered applications, integrated with Google GenAI for advanced AI functionalities.
*   **Firebase**: A comprehensive platform for developing mobile and web applications, currently used for app hosting and potentially other backend services.
*   **React Hook Form & Zod**: Utilized together for efficient form management, validation, and schema definition, ensuring robust data handling.
*   **Next-themes**: A library for managing light and dark mode themes across the application, providing a seamless user experience.
*   **Lucide React**: A library providing a comprehensive set of customizable SVG icons for various UI elements.

## Library Usage Rules:

*   **Framework**: All application routing, data fetching, and overall project structure must adhere to **Next.js** conventions.
*   **UI Components**: Always prioritize **Shadcn UI** components for common UI elements (e.g., buttons, cards, forms, dialogs, etc.). If a specific component is not available, create a new component following Shadcn UI's styling principles (Tailwind CSS, Radix UI foundation).
*   **Styling**: Use **Tailwind CSS** exclusively for all styling. Avoid inline styles or custom CSS files unless absolutely necessary for global styles defined in `globals.css`.
*   **State Management**: For local component state, use React's `useState` and `useReducer` hooks. For global state, consider the React Context API if a simple solution is required.
*   **Forms & Validation**: Use **React Hook Form** for all form handling and **Zod** for schema-based validation to ensure data integrity.
*   **Icons**: Use **Lucide React** for all icons throughout the application.
*   **Theming**: Use **Next-themes** for managing light and dark modes, ensuring a consistent theme experience.
*   **AI Integration**: All AI-related functionalities and integrations should be built using **Genkit AI**.
*   **Backend/Hosting**: Leverage **Firebase** for application hosting and any required backend services.
*   **Utilities**: Use `clsx` and `tailwind-merge` via the `src/lib/utils.ts` utility for combining Tailwind classes effectively.