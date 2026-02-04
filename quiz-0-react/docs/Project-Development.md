# Project Scoping & Architecture Questions

To develop a responsible and scalable educational quiz platform, we need to address the following key areas. These questions are designed to align with industry standards for security, scalability, and UX.

## 1. Responsible AI Integration
*   **Verification & Human-in-the-Loop**: AI can hallucinate. How do we ensure accuracy?
    *   *Suggestion*: Mandatory "Draft Mode" where the teacher reviews/edits the AI-generated quiz before publishing.
*   **Safety & Moderation**: How do we prevent the generation of harmful or biased content?
    *   *Standard*: Implement OpenAI/LLM moderation endpoints and custom keyword filters.
*   **Prompt Engineering**: How complex should the teacher's input be? (e.g., "Generate a quiz on Photosynthesis for 5th graders")
*   **Cost & Quota**: AI creates variable costs. Do we need per-user rate limiting or a credit system?

## 2. Technical Architecture & Scalability
*   **Database Strategy**:
    *   *Option A (Relational/SQL)*: PostgreSQL. Best for data integrity (relationships between Teachers, Students, Classes, Grades).
    *   *Option B (Document/NoSQL)*: MongoDB. Good for storing the *Quiz Content* itself since question structures can vary.
    *   *Recommendation*: Hybrid or just Postgres (JSON key support is good enough for quizzes).
*   **Backend Structure**:
    *   Node.js is chosen. Should we use a framework like **NestJS** (opinionated, scalable architecture favored by enterprise) or standard **Express.js** (flexible, faster to start)?
*   **Frontend Performance**:
    *   Next.js (Server Side Rendering) is excellent for SEO and performance, or pure React (Vite)? Next.js is effective for scalability.

## 3. Data Privacy & Security (EdTech Critical)
*   **Compliance**: If students are minors, we must adhere to COPPA/GDPR.
    *   *Implication*: Minimize PII storage. Can students take quizzes anonymously or with pseudonymized IDs?
*   **Authentication**: Secure auth is non-negotiable.
    *   *Tools*: Clerk, Auth0, or Supabase Auth? (Clerk is very popular in modern modern React/Next.js stacks).

## 4. User Experience (UX) & Design
*   **Accessibility**: Educational tools should hit WCAG AA standards.
    *   *Tech*: Radix UI or Headless UI for accessible primitives behind Tailwind?
*   **Responsiveness**: Teachers might use desktops; students might use tablets/phones.

## 5. Development Workflow (Industry Standard)
*   **CI/CD**: GitHub Actions to run tests on every commit?
*   **Testing**: Jest/Vitest for unit tests, Playwright for E2E testing?
