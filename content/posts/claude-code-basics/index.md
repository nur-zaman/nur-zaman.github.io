---
title: "Claude Code 2.0 Essentials Part 1: Getting Started with AI-Powered Development"
summary: "Start your journey with Claude Code 2.0. Learn about the new AI models and basic features"
categories: ["Post","Blog","Tutorial"]
tags: ["claude","ai","coding","development","automation","productivity","series"]
showSummary: true
date: 2025-11-12
draft: false
series: ["Claude Code 2.0 Essentials"]
series_order: 1
---

Two weeks ago, I watched Claude Code refactor my entire authentication system in 45 minutes. Not just the code, it updated tests, fixed edge cases, and even caught a security vulnerability I'd missed. Six months ago, this would have taken me three days.

If you're new to AI-assisted development, you're entering at the perfect time. Claude Code 2.0 just changed everything about what's possible.

This is Part 1 of a three-part series where I'll walk you through everything you need to know about Claude Code 2.0, from the basics to advanced workflows. In this post, we'll cover the fundamentals that will get you productive in your first week.

## What is Claude Code?

Before diving into what's new, let's establish the basics. Claude Code is Anthropic's official CLI (command-line interface) and IDE extension that brings Claude's AI capabilities directly into your development environment. Think of it as an AI pair programmer that can read your code, understand context, make changes, run tests, and even handle complex multi-step refactoring tasks.

Unlike simple code completion tools, Claude Code can:
- Understand entire codebases, not just the file you're editing
- Execute commands and run tests to verify its changes
- Work autonomously on complex tasks for extended periods
- Integrate with your existing development workflow

The [September 2025 release of Claude Code 2.0](https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously) 🔗 introduced game-changing improvements across three areas: smarter AI models, better productivity tools, and advanced customization options.

## The Foundation: Choosing the Right Model

Claude Code 2.0 ships with three powerful AI models. Understanding when to use each one is crucial for getting the best results while managing your workflow efficiently.

### What are these models?

In AI terms, a "model" is the underlying intelligence that powers the assistant. Different models make different tradeoffs between speed, cost, and capability. Think of it like choosing between a sports car, a family sedan, or a pickup truck, each excels at different tasks.

### Sonnet 4.5: Your Daily Driver

**Sonnet 4.5** is now the default model in Claude Code, and for good reason, it's arguably the best coding model in the world right now.

The benchmarks back this up: Sonnet 4.5 scored [**77.2% on SWE-bench Verified**](https://www.infoq.com/news/2025/10/claude-sonnet-4-5/) 🔗, the highest score any model has ever achieved on this real-world software engineering benchmark. For context, that beats GPT-5 (72.8%), Gemini 2.5 Pro, and even Claude's own premium Opus 4.1 model (74.5%).

But here's what matters more than benchmarks: [Anthropic claims Sonnet 4.5 can maintain focus on complex, multi-step tasks for over 30 hours](https://www.anthropic.com/news/claude-sonnet-4-5) 🔗. In practice, this means you can give it ambitious tasks like "refactor this module to use dependency injection" or "add comprehensive error handling throughout the API layer," and it will systematically work through the changes without losing context.

**When to use Sonnet 4.5:**
- Complex refactoring tasks
- Multi-file changes requiring careful coordination
- Architecture decisions and design work
- Tasks requiring deep codebase understanding

This is your go-to model for daily development work.

### Haiku 4.5: The Speed Demon

**Haiku 4.5** is the efficiency champion. It [delivers approximately 90% of Sonnet 4.5's coding performance while running more than twice as fast](https://caylent.com/blog/claude-haiku-4-5-deep-dive-cost-capabilities-and-the-multi-agent-opportunity) 🔗.

Here's the surprising part: Haiku 4.5 achieved **73.3% on SWE-bench Verified**, just 4 percentage points behind Sonnet 4.5. That's remarkable performance for a model focused on speed.

**When to use Haiku 4.5:**
- Quick bug fixes
- Simple feature additions
- Code formatting and cleanup
- Repetitive refactoring tasks
- When you're iterating rapidly

**Pro tip**: When using Plan mode (which we'll cover in Part 2), Claude Code automatically uses Sonnet 4.5 for planning and Haiku 4.5 for execution. This "Sonnet Plan" approach gives you the reasoning power of Sonnet with the speed of Haiku, potentially the optimal configuration for most development work.

### Opus 4.1: The Premium Choice

**Opus 4.1** remains the most capable model for the most demanding tasks. While it didn't top the coding benchmarks, it excelled where it matters most for professional work: real-world job tasks.

In OpenAI's own [GDPval evaluation](https://www.techradar.com/ai-platforms-assistants/claude/) 🔗, which measures AI performance on economically valuable tasks across 44 occupations, Claude Opus 4.1 achieved a **47.6% win rate**, significantly ahead of GPT-5's 38.8%. The study had industry experts blindly compare AI outputs to human work across fields like healthcare, finance, and government.

**When to use Opus 4.1:**
- Critical production code requiring highest quality
- Complex architectural decisions
- Tasks requiring nuanced judgment
- High-stakes refactoring where mistakes are costly

### Real Scenario: Choosing the Right Model

Let's say you're working on a web application and need to:
1. Add a new user profile feature
2. Fix a production bug in the payment flow
3. Refactor the database layer to support multiple tenants

Here's how I'd approach it:

- **Bug fix** (urgent): **Haiku 4.5** - Fast turnaround for the fix, run tests, deploy
- **New feature** (medium complexity): **Sonnet 4.5** - Needs careful design and integration
- **Refactoring** (high risk): **Opus 4.1 or Sonnet 4.5** - This affects the entire system and needs the highest quality reasoning

### Model Access by Plan

Your Claude subscription determines which models you can access:

- **Pro Plan ($20/month)**: Sonnet 4.5 and Haiku 4.5
- **Max Plans ($100-$200/month)**: All three models including Opus 4.1

For most developers starting with Claude Code, the Pro plan with access to Sonnet and Haiku provides excellent value.

## Checkpoints and Rewind: Your Safety Net

This was the most requested feature from Claude Code 1.0 users, and it's a game-changer for how you work with AI.

### The Problem Checkpoints Solve

Ever had Claude Code go down the wrong path? Maybe it misunderstood your requirements, made breaking changes, or spiraled into increasingly complex "fixes" that made things worse. Before checkpoints, you'd need to manually undo changes or restore from Git.

Now, Claude Code automatically creates checkpoints before each significant change, capturing both your code state and conversation context. If something goes wrong, you can instantly rewind to any previous point.

### Why Conversation Context Matters

Here's the subtle but crucial insight: Sometimes the problem isn't the code changes, it's that the conversation got confused. Maybe Claude misunderstood your requirements, or you inadvertently led it down the wrong path with feedback.

Checkpoints let you rewind the conversation itself, effectively giving you a fresh start while preserving your code state. This "context rewind" feature is what makes checkpoints truly powerful.

### How to Use Rewind

When you need to go back, simply type:

```
/rewind
```

Claude Code displays all available checkpoints with descriptions of what changed at each point. You can then choose to restore:

- **Code only** - Revert file changes but keep the conversation
- **Context only** - Reset the conversation but keep current code
- **Both** - Complete rollback to that checkpoint

### Tutorial: Your First Rewind

Let's walk through a realistic scenario:

**Starting point**: You ask Claude to refactor a component

**You:**
```
Refactor the UserProfile component to use React hooks
```

**Claude Code:**
```
[Makes changes to UserProfile, but also starts modifying
 UserSettings and ProfileCard components]
```

**You:**
```
Wait, stop. You're changing too many files. Let me rewind.

/rewind
```

**Claude Code shows:**
```
Available checkpoints:

[3] 2025-01-12 14:32 - Modified UserProfile, UserSettings, ProfileCard
[2] 2025-01-12 14:28 - Modified UserProfile
[1] 2025-01-12 14:25 - Starting point

What would you like to restore?
```

**You:**
```
Restore checkpoint 2 - both code and context
```

**Claude Code:**
```
✓ Restored checkpoint 2
✓ Reverted 2 files
✓ Reset conversation context

Ready to continue. What would you like to do?
```

**You:**
```
Refactor only the UserProfile component, don't touch other files
```

### Important Limitations

1. **One-way street**: Once you rewind, you can only go backwards. You can't jump forward to a later checkpoint you've already passed.

2. **Complements Git**: Checkpoints are for session-level recovery, not version control. Always use Git for your primary version control.

### When NOT to Use Checkpoints

Checkpoints are great for quick recovery during active development, but use Git when you need:
- Permanent version history
- Collaboration with team members
- Branch management
- Remote backups

Think of checkpoints as "undo" and Git as your actual version control system.

**Pro tip**: If you notice Claude starting to spiral or misunderstand your intent, rewind early. The longer you let it continue down the wrong path, the more context pollution accumulates.

## Your Enhanced Terminal Interface

Claude Code 2.0's terminal interface got a complete visual overhaul. While this might seem cosmetic, these UI improvements significantly impact daily usability.

### Why UI Matters

You're going to spend hours in Claude Code. A clean, informative interface reduces cognitive load and helps you focus on what matters: writing great code.

### Key Visual Improvements

**1. Thinking Animations**

When you use keywords like "think" or "plan," Claude Code displays animated indicators showing it's reasoning through the problem. This visual feedback helps you understand when Claude is doing deep analysis versus quick execution.

Try it:
```
Think carefully about the best way to structure this API
```

**2. Progress Indicators**

Long-running tasks now show clear progress with:
- Percentage completion for multi-step operations
- Current step descriptions ("Analyzing dependencies...")
- Time elapsed/estimated

**3. Enhanced Status Bar**

The status bar now provides at-a-glance context:
- Current working directory
- Active Git branch
- Model being used
- Context usage percentage

### Customizing Your Status Bar

You can configure exactly what information appears in your status bar:

```
/statusline
```

This opens the configuration menu where you can toggle:
- Working directory display
- Git status and branch
- Model selection
- Token/context usage
- Background task indicators

**My personal setup**: I keep my status bar showing:
- Current folder (essential when working across multiple projects)
- Git branch (prevents accidental commits to main)
- Context usage (alerts me when I'm approaching limits)

This heads-up display saves me from context surprises and wrong-branch commits.



## What's Next

You now have the foundation to work productively with Claude Code 2.0. You understand the three models, when to use each one, and how checkpoints give you the confidence to experiment fearlessly.

In **Part 2 of this series**, we'll level up your workflow by exploring:
- **The Explore subagent** - Rapidly understand unfamiliar codebases
- **Skills** - Pre-built knowledge modules that extend Claude's capabilities
- **Advanced context management** - Stay in control of long coding sessions
- **VS Code integration** - Bring Claude directly into your IDE
- **Interactive questioning** - Let Claude ask clarifying questions before executing

These intermediate features will transform Claude Code from a helpful assistant into an indispensable part of your development process.

