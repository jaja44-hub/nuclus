# Nuclus Development: Frontend Status & Fullstack Priorities

**Last Updated:** August 28, 2025

This document serves as the central communication hub between the Frontend (GitHub Copilot) and Backend (Gemini) developers. It tracks frontend progress and outlines prioritized tasks for the entire stack.

---

## 1. Frontend Development Status

### 1.1. Technology Stack

The frontend is built with a modern, robust stack designed for performance and scalability:

- **Framework:** Next.js 14+
- **UI Library:** React 18+
- **Styling:** Tailwind CSS
- **Upcoming:** Shadcn/ui will be integrated for a comprehensive, accessible component library.

### 1.2. Completed Work

The foundational UI structure is in place:

- **Primary Layout (`src/components/PrimaryLayout.tsx`):** A consistent site-wide layout has been established, featuring a persistent sidebar for navigation.
- **Sidebar Navigation (`src/components/Sidebar.tsx`):** Core navigation links are set up using Next.js's optimized `<Link>` component.
- **Dark Theme (`src/app/globals.css`):** A default dark theme has been implemented to provide a modern aesthetic.
- **Landing Page (`src/app/landing/page.tsx`):** A dedicated, visually appealing landing page serves as the application's entry point.
- **Component Showcase ("Palace View" - `src/app/palace/page.tsx`):** A crucial development tool has been created to render and visually inspect all UI components from `src/components/`. This ensures component health and accelerates development.
- **Development Environment:** The Codespaces `devcontainer.json` has been stabilized and configured with necessary tools (Node.js, Docker, GitHub CLI) and extensions (Prettier, ESLint) for a consistent and efficient workflow.

---

## 2. Fullstack Task Prioritization for Backend Development

As the Fullstack Orchestrator, the following backend tasks have been prioritized to support upcoming frontend features. Gemini, as the Backend Developer, should address these in order.

### **Priority 0: Core Authentication**

- **Goal:** Implement a secure and complete user authentication system.
- **Tasks:**
  1.  **Setup Firebase Auth:** Configure and initialize the Firebase Authentication SDK for the project.
  2.  **Create Auth API Endpoints:** Build Next.js API routes (or Firebase Functions) for:
      - User Sign-Up (Email/Password, Google OAuth)
      - User Sign-In
      - User Sign-Out
      - Session Management/Verification

### **Priority 1: User Profile Management**

- **Goal:** Allow users to have persistent profiles and data.
- **Tasks:**
  1.  **Design Firestore Schema:** Define and implement the Firestore collection/document structure for user profiles (e.g., `users/{userId}`). The schema should include fields for display name, email, photo URL, and any other relevant user settings.
  2.  **Create Profile API Endpoints:** Develop APIs to:
      - Create a user profile document upon sign-up.
      - Read a user's profile data.
      - Update a user's profile data.

### **Priority 2: "Project" Data Model & CRUD**

- **Goal:** Implement the core data model for "Nuclear Builder Projects" as specified in `nuclear_builder_spec_v1.yaml`.
- **Tasks:**
  1.  **Implement Firestore Schema:** Create the necessary Firestore collections for storing project data, configurations, and associated metadata.
  2.  **Develop Project CRUD APIs:** Build the backend logic and endpoints for Creating, Reading, Updating, and Deleting user projects.

### **Priority 3: Secure AI Model Integration**

- **Goal:** Create a secure backend service to manage interactions with the Gemini API.
- **Tasks:**
  1.  **Develop a Proxy Service:** Create a backend endpoint (e.g., a Firebase Function) that securely handles API requests to the Gemini API. This service should manage API keys and prevent them from being exposed on the client-side.
  2.  **Implement Request/Response Handling:** Build the logic to process requests from the frontend, forward them to the Gemini API, and return the responses.
