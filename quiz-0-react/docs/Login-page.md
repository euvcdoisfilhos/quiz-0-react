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

---

## ❓ Clarifying Questions for You
1.  **Auth Provider**: Do you plan to build a custom backend (JWT), or use a service like **Clerk**, **Supabase**, or **Firebase**? (Clerk is the current industry favourite for rapid React development).
2.  **Mascot**: Should we include a character (like the AI robot mentioned in the landing page) that reacts to the user's typing (e.g., covers eyes when typing password)?
3.  **Data**: Do we need to collect additional info during signup (e.g., "Are you a Teacher or a Student?") or keep it minimal with just Email/Password?
