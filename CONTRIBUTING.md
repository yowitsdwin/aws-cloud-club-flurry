# Contributing Guide — AWS Cloud Club Website (Flurry)

Thank you for your interest in contributing to **AWS Cloud Club - Flurry**! This repository is built and maintained by the AWS Cloud Club community to provide a modern, interactive platform for members, officers, and aspiring cloud learners.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Ways to Contribute](#ways-to-contribute)
- [Project Workflow](#project-workflow)
- [Development Process](#development-process)
- [Branching Strategy](#branching-strategy)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Issue Management](#issue-management)
- [Pull Request Process](#pull-request-process)
- [Code Style & Standards](#code-style--standards)
- [Testing Requirements](#testing-requirements)
- [Documentation Standards](#documentation-standards)
- [Security Rules](#security-rules)
- [Performance Guidelines](#performance-guidelines)
- [Deployment Notes](#deployment-notes)
- [Communication Guidelines](#communication-guidelines)
- [Code of Conduct](#code-of-conduct)

---

## Project Overview

**AWS Cloud Club - Flurry** is a web platform designed to support:

- Membership applications and renewals
- Officer and Skill Builder applications
- Resource hub and learning materials
- Blog and community announcements
- Event highlights, upcoming events, and countdown timers
- Gamified leaderboards
- Certified members listing
- Testimonials and engagement features

---

## Ways to Contribute

**Development** — Frontend UI components, backend API endpoints, database schema improvements, admin tools, authentication and role-based access features.

**UI/UX** — Figma wireframes and prototypes, UI redesign suggestions, mobile responsiveness improvements, accessibility enhancements.

**QA** — Bug testing and reporting, regression testing, performance and usability testing.

**Documentation** — Updating README and docs, writing setup instructions, API documentation, and testing guides.

---

## Project Workflow

This project uses a **Kanban board** through GitHub Projects.

| Column | Meaning |
|---|---|
| Backlog | Not yet started |
| Ready | Approved and ready for development |
| In Progress | Currently being worked on |
| In Review | Completed, awaiting review/testing |
| Done | Merged and completed |

> **Golden Rule:** If it is not on GitHub Issues / Project Board, it does not exist.

---

## Development Process

### 1. Choose an Issue

Check the **Issues** tab and the **GitHub Project Board** before starting any work. If the task does not exist, create a new Issue using the correct template.

### 2. Assign Yourself

Assign the Issue to yourself, or notify the PM if you are unable to.

### 3. Create a Branch

Always branch from `dev`:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/<feature-name>
```

### 4. Work Locally

Make your changes and test them properly.

### 5. Commit Changes

Write clean, descriptive commit messages (see [Commit Message Guidelines](#commit-message-guidelines)).

### 6. Push Your Branch

```bash
git push origin feature/<feature-name>
```

### 7. Open a Pull Request

Open a PR targeting the `dev` branch (see [Pull Request Process](#pull-request-process)).

---

## Branching Strategy

### Main Branches

| Branch | Purpose |
|---|---|
| `main` | Production-ready, stable code |
| `dev` | Development integration branch |

### Working Branch Formats

| Type | Format | Examples |
|---|---|---|
| Feature | `feature/<short-feature-name>` | `feature/membership-form-ui`, `feature/blog-post-editor` |
| Bug Fix | `fix/<bug-name>` | `fix/navbar-overflow-mobile`, `fix/leaderboard-points-bug` |
| Documentation | `docs/<topic>` | `docs/api-endpoints`, `docs/setup-guide` |
| Hotfix | `hotfix/<hotfix-name>` | `hotfix/login-crash` |

---

## Commit Message Guidelines

### Format

```
<action>: <short description>
```

### Good Examples

```
add: membership form validation
fix: blog layout on mobile
update: README installation guide
remove: unused components
refactor: optimize leaderboard logic
```

### Bad Examples

```
update
fix bug
final
changes made
```

---

## Issue Management

All work must be connected to a GitHub Issue. Each Issue must include:

- Clear title and description
- Acceptance criteria checklist
- Module selection
- Priority level
- Appropriate labels

### Labels

**Type:** `type: feature` · `type: bug` · `type: task` · `type: documentation`

**Area:** `area: frontend` · `area: backend` · `area: ui/ux` · `area: database` · `area: qa` · `area: devops`

**Priority:** `priority: critical` · `priority: high` · `priority: medium` · `priority: low`

---

## Pull Request Process

### Rules

- PRs must be reviewed before merging
- Never merge directly into `main`
- Every PR must link to an Issue
- UI-related PRs must include screenshots

### Title Format

```
[FEATURE] <feature-name>
[BUGFIX] <bug-name>
[DOCS] <documentation-change>
[WORKFLOW] <workflow-update>
[REFACTOR] <refactor-name>
```

Example: `[FEATURE] Add Resource Hub Categories`

### Description Requirements

Each PR must include:

- Summary of what was added or changed
- Issue reference (e.g. `Closes #12`)
- Screenshots for UI changes
- Testing evidence if applicable

### PR Checklist

Before requesting review, confirm all of the following:

- [ ] Linked to a GitHub Issue
- [ ] Code compiles and runs successfully
- [ ] No errors in console logs
- [ ] Feature is tested manually
- [ ] Responsive design verified (mobile + desktop)
- [ ] No sensitive information committed
- [ ] Documentation updated if needed

### Review Outcomes

| Status | Meaning |
|---|---|
| Approved | Ready to merge |
| Changes Requested | Updates needed before merge |
| Rejected | Incorrect direction or major issues |

Only the Project Manager or Lead Developer may merge into `dev` or `main`.

---

## Code Style & Standards

### General

- Keep functions small and readable
- Avoid repeated code — reuse components and utilities
- Use meaningful variable and function names
- Use consistent indentation and formatting
- Do not commit commented-out unused code

### Frontend

- Ensure mobile responsiveness
- Use reusable UI components
- Follow the Figma design system when available
- Avoid inline styling unless necessary

### Backend

- Validate all incoming inputs
- Return structured responses (success/error format)
- Use proper HTTP status codes
- Handle edge cases (empty values, missing params)
- Restrict endpoints with role-based access

### Database

- Use consistent naming conventions for tables and collections
- Avoid storing redundant data
- Document schema updates in `/docs/database`
- Use indexes where needed for performance

---

## Testing Requirements

All contributors must test changes before submitting PRs.

### Required

- Form validation testing
- Mobile responsiveness check
- No console errors
- API endpoints tested (Postman / Thunder Client)
- CRUD operations verified

### Recommended

- Test with multiple browsers (Chrome + Firefox)
- Test on different screen sizes
- Test slow network behavior (optional)

---

## Documentation Standards

- Update the README if setup steps change
- Update `/docs` for any API or database changes
- Comment complex logic, but avoid excessive comments
- Use proper Markdown formatting throughout

---

## Security Rules

This project handles user data. Security is non-negotiable.

### Never Commit

- API keys
- AWS secret keys
- Database passwords
- `.env` files
- Private admin credentials

### Use Instead

- `.env.example` for reference
- GitHub Secrets for deployment keys
- Environment variables in the hosting provider settings

### Form Security

All forms must implement:

- Input sanitization
- Proper validation
- Spam protection where possible
- Server-side verification

---

## Performance Guidelines

- Optimize images before committing
- Remove unused scripts
- Use proper pagination for lists
- Apply caching strategies where appropriate

---

## Deployment Notes

Only authorized maintainers may deploy.

- Code must be merged into `main` before deploying
- Tag the deployment as a Release
- Confirm all environment variables are configured correctly
- Test the deployment after each release

---

## Communication Guidelines

### When Working on a Task

- Comment on the Issue when you start
- Update the Issue if you are blocked
- Notify the PM if your changes affect other modules

### If You Are Blocked

- Do not stay stuck silently
- Ask for help in the Issue comments or team chat

---

## Code of Conduct

All contributors are expected to:

- Treat each other with respect
- Accept feedback professionally
- Keep discussions productive and on-topic
- Avoid personal attacks or harmful behavior

Misconduct will be addressed by project maintainers.

---

## Final Notes

This project is built not only to deliver a great product, but also to train members in real-world teamwork, GitHub collaboration, and professional software engineering practices.

Thank you for helping build the AWS Cloud Club Website. Let's build something meaningful together.