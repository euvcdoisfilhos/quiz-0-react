# Modern Neo-Brutalist Login/Signup Strategy

## 1. Design Philosophy: "Securely Playful"
The auth flow should maintain the brand consistency while instilling confidence. We will use the same **Neo-Brutalism** principles:
*   **Forms**: Inputs with `border-4 border-black` and `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`.
*   **Feedback**: High-contrast error messages (e.g., Bright Red boxes with black borders).
*   **Micro-interactions**: Framer Motion "shake" effect on failed login attempts.

## 2. Core Functional Requirements
To provide a professional experience, the following features are essential:
*   **Authentication Hub**: Toggle between "Login" and "Create Account" without page refreshes (smooth state transitions).
*   **Validation**: 
    - Real-time password strength indicator (Visual bar: Red -> Yellow -> Green).
    - Instant email format validation.
*   **Security Defaults**:
    - Password visibility toggle (Show/Hide eye icon).
    - "Forgot Password" link prominently displayed.
*   **Social Integration**: One-click registration using **Social Auth Buttons** (Google/Github) with bold, brand-colored borders.
*   **Compliance**: Simple "Terms & Conditions" checkbox with a custom brutalist checkmark UI.

## 3. Technical Implementation
*   **Forms**: Recommend `react-hook-form` for performance and validation.
*   **State Management**: Context API or Zustand to handle the `user` session state.
*   **Accessibility**:
    - Focus states must be highly visible (e.g., a bright yellow background highlight).
    - Labels must be explicitly linked to inputs for screen readers.

## 4. Layout Suggestions
*   **Split Screen**: 
    - *Left*: Large, playful illustration or a "Did you know?" educational fact card.
    - *Right*: The actual Auth form centered in a high-contrast container.
*   **Center Card**: For a simpler look, a single floating card with a massive "Welcome Back" heading.

## 5. Industry Best Practices for Auth Toggles

When implementing a toggle between Login and Sign Up, follow these industry standards to ensure a professional and accessible experience:

### What is "State" in React?

Think of **State** as the component's **memory**. 
*   **Plain Variables**: If you just use a normal variable (like `let mode = "login"`), React doesn't notice when it changes. The screen stays the same.
*   **State**: When you use React State (the `useState` hook), React "watches" that variable. The moment you change it, React automatically **re-renders** (re-draws) the component on the screen to reflect the new data.

In this project, we use state for:
1.  **Auth Mode**: Is it `login` or `signup`?
2.  **Password Visibility**: Is the password hidden or shown?

---

*   **Local State Management**:
    Since only the **Right Panel** (`AuthLayout`) changes when switching between Login and Signup, the state should live directly within that component. This keeps the logic encapsulated and prevents the parent (`AuthPageLayout`) from needing to manage form-specific details.
    
    ```mermaid
    graph TD
        Parent["AuthPageLayout (Main Structure)"]
        Parent --> ChildA["Left Panel (Static/Paulo Freire)"]
        Parent --> ChildB["AuthLayout (Holds State 'isLogin')"]
        ChildB -->|"isLogin: true"| LoginUI["Login Fields & Title"]
        ChildB -->|"isLogin: false"| SignupUI["Signup Fields & Title"]
    ```
*   **Accessibility (WAI-ARIA)**:
    - Use `role="tablist"` for the button container and `role="tab"` for each button.
    - Use `aria-selected="true/false"` to tell screen readers which mode is active.
    - Ensure sufficient color contrast between active and inactive buttons.
*   **State Persistence**: Consider using URL query parameters (e.g., `/auth?mode=signup`) so users can be linked directly to the registration form.
*   **Security & UX**:
    - **Clear Sensitive Fields**: When switching from Signup to Login, clear the password fields to prevent data leakage if a user is in a public place.
    - **Focus Management**: When the form changes, consider moving the focus to the first input of the new form (e.g., the "Name" field in Signup mode).
*   **Performance**: Use React's conditional rendering (`{isLogin ? <LoginForm /> : <SignupForm />}`) to keep the DOM lean, or wrap them in `AnimatePresence` from Framer Motion for smooth transitions.

---

## ❓ Clarifying Questions for You
1.  **Auth Provider**: Do you plan to build a custom backend (JWT), or use a service like **Clerk**, **Supabase**, or **Firebase**? (Clerk is the current industry favourite for rapid React development).
2.  **Mascot**: Should we include a character (like the AI robot mentioned in the landing page) that reacts to the user's typing (e.g., covers eyes when typing password)?
3.  **Data**: Do we need to collect additional info during signup (e.g., "Are you a Teacher or a Student?") or keep it minimal with just Email/Password?
