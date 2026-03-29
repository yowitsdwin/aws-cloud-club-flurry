# AWS Cloud Club - Flurry 🌩️🚀

Welcome to the official project repository for the **AWS Cloud Club Website Platform**, codename: **Flurry**.  
This project aims to build a modern, interactive, and scalable website that serves as the central hub for the AWS Cloud Club community—supporting membership management, officer applications, skill-building opportunities, events, resources, blogs, and gamified engagement.

---

## 📌 Project Overview

The **AWS Cloud Club - Flurry** platform is designed to be a one-stop community system where students and members can:

- Apply for membership
- Apply for officer positions
- Apply for skill-building programs
- Access learning resources
- Track progress and rankings via leaderboards
- Stay updated on upcoming events and announcements
- View certified members
- Read blogs and community updates
- Receive renewal/expiry notifications
- Share testimonials and feedback

This project follows an organized workflow using a **Kanban board** inside GitHub Projects.

---

## 🎯 Objectives

- Build a responsive, modern, and user-friendly website for AWS Cloud Club.
- Implement a structured system for applications and membership management.
- Provide a centralized hub for learning resources and community content.
- Increase engagement through gamification and leaderboards.
- Maintain scalability for future features and growth.

---

## 🧩 Core Functions

### ✅ Forms and Applications
- Membership Form
- Officer Application Form
- Skill Builder Application Form

### ✅ Hub and Systems
- Resource Hub
- Gamified Leaderboards
- Blog System

---

## 🌟 Key Features

### 📢 Community & Showcase
- Previous Event Highlights
- Upcoming Events Display
- Officers and Departments Showcase
- Testimonials Section

### ⏳ Engagement & Notifications
- Event Timer / Countdown
- Membership Renewal / Expiry Notice

### 🏅 Recognition
- List of Members who are Certified

---

## 🗂️ Project Modules

This system is divided into the following modules for better organization:

### 1. Membership System
Handles membership applications, approval flow, membership status, and expiry notices.

### 2. Officer Application System
Allows users to apply for officer roles and enables admins to review submissions.

### 3. Skill Builder Application System
Handles applications for skill-building opportunities (workshops, bootcamps, mentorships).

### 4. Events Module
Manages event announcements, highlights, and event countdown timers.

### 5. Resource Hub
Provides categorized learning materials such as:
- AWS Learning Resources
- Cloud Computing Fundamentals
- DevOps Guides
- Certification Reviewers
- Community Projects

### 6. Gamified Leaderboard System
Tracks points and ranks members based on participation and achievements.

### 7. Blog System
Allows publishing announcements, articles, tutorials, and club updates.

### 8. Officers & Departments Page
Displays the official officers, their roles, and department structure.

### 9. Testimonials System
Collects and displays community feedback and testimonials.

---

## 🧑‍💻 User Roles

### 👤 Guest / Visitor
- View homepage and public pages
- Browse blog posts and events
- View officers and highlights

### 🙋 Member
- Apply for membership renewal
- View resources
- Participate in leaderboard activities

### 🛡️ Admin / Officer
- Review and approve applications
- Manage events, resources, and blog posts
- Manage members list and certification status
- Manage leaderboard scoring

---

## 📌 Project Workflow (Kanban Board)

This project uses GitHub Projects in a Kanban-style workflow:

### Columns:
- **Backlog** → Tasks not started
- **Ready** → Approved tasks ready to be developed
- **In Progress** → Tasks currently being worked on
- **In Review** → Completed tasks awaiting review/testing
- *(Optional future)* **QA Testing**
- *(Optional future)* **Done / Released**

---

## 📅 Suggested Development Roadmap

### Phase 1: Planning & Documentation
- Requirements gathering
- Sitemap and user flow
- Database planning
- UI/UX wireframe drafting

### Phase 2: UI/UX Design
- Figma high-fidelity design
- Component system
- Responsive layout planning

### Phase 3: Development Setup
- Repo structure
- Frontend + backend initialization
- Database configuration
- Deployment pipeline setup

### Phase 4: Core Development
- Membership and applications system
- Officers page
- Events and countdown timer
- Blog system

### Phase 5: Advanced Features
- Resource hub
- Certified members listing
- Gamified leaderboard system

### Phase 6: QA Testing & Deployment
- Functional testing
- Security testing
- Bug fixing
- Deployment and release

---

## 📂 Repository Structure

```bash
aws-cloud-club-website/
│
├── docs/                       # documentation and planning files
│   ├── requirements/
│   ├── ui-ux/
│   ├── database/
│   ├── api/
│   ├── qa/
│   └── meeting-notes/
│
├── frontend/                   # frontend source code
│
├── backend/                    # backend source code
│
├── .github/                    # github automation and templates
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   └── pull_request_template.md
│
├── README.md                   # main project documentation
├── CONTRIBUTING.md             # contribution guide
└── LICENSE