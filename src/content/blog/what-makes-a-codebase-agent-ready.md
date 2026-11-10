---
title: "Before Building Another MCP, Make Your Codebase Agent-Ready"
excerpt: "Eight dimensions that decide whether a coding agent becomes effective in your codebase, and why the limiting factor is almost never the model."
author: "Pierre Derval"
publishDate: 2026-06-25
category: "AI Engineering"
tags: ["ai", "coding-agents", "engineering", "knowledge", "enterprise"]
cta: "ai-readiness"
draft: false
---

I have spent several months on one question: what makes a codebase agent-ready?

Most teams ask a different one. They ask whether an agent can write code. It can. That question was settled a while ago.

The useful question is whether an agent can become effective in your codebase. That is the same question you ask about a new engineer, and the answer depends far more on the codebase than on the person.

> **Before you build another MCP server, check whether an agent could understand what it would be connecting to.**

## 1. The eight dimensions

I reviewed several codebases against eight dimensions. Each one is a question you can answer honestly in a few minutes.

**Architecture clarity.** Can an agent understand how the system is organised? Clear boundaries, a predictable layout, and one way of doing each thing. If a new engineer needs a guided tour, so does the agent.

**Discoverability.** Can it quickly find what it needs? Naming, structure and entry points matter. An agent that spends half its context searching has little left for the work.

**Domain knowledge.** Can it understand the business domain it operates in? What a quote is, when an invoice can be changed, why this field exists. Code shows what the system does. It rarely shows why.

**Taskability.** Can work be split into clear, independent tasks? An agent does well with a task that has a boundary and a definition of done. It does badly with "improve the billing module".

**Verification.** Can changes be validated automatically? Tests, types, linters, a build that fails loudly. Without them, every agent change needs a human to confirm it by reading.

**Safety.** Can mistakes be contained? Branch protection, review, environments, feature flags. The goal is that a wrong change is cheap.

**Knowledge persistence.** Does knowledge survive people, sessions and time? An agent starts each session with nothing. Whatever it learned yesterday is gone unless it was written down where the next session will find it.

**AI workflow.** Are agents integrated into the engineering process? Or are they a side tool each developer uses in their own way, with no shared conventions?

## 2. The limiting factor is knowledge

Across the reviews, the same pattern kept appearing. The limiting factor was rarely the model. It was rarely the tooling either.

It was knowledge.

Agents can already find files, write code and run tests. Understanding the business behind the code is a separate problem, and it is the one a new engineer faces in their first months.

> *My take: we keep investing in giving agents more tools, when what they lack is context. A new connector does not help an agent that does not know why the system behaves the way it does.*

The weakest areas were consistently the same four:

- Knowledge that exists only in people's heads
- Implicit rules
- Undocumented decisions
- Missing business context

None of these is an AI problem. They are the problems that made onboarding slow before agents existed. Agents make them visible, because an agent cannot ask a colleague at the coffee machine.

## 3. Why the order matters

There is a reason I put this before building more integrations.

A tool gives an agent reach. It can now query the database, read the tickets, call the API. Reach without understanding produces confident work in the wrong direction, and it produces it quickly.

Knowledge compounds differently. A decision written down once is read by every agent session and every new hire after it. A domain rule made explicit stops being rediscovered by trial and error.

So the order I recommend is:

1. Score the codebase on the eight dimensions.
2. Fix the weakest one or two. In most cases that means writing down domain knowledge and decisions.
3. Make verification automatic, so the agent can check its own work.
4. Then add tools and integrations.

## 4. How to run the audit

I built a Claude skill that audits these eight dimensions and proposes a remediation plan for the weakest areas.

You do not need the skill to start. Take one real task from last sprint and ask three questions:

- Could someone with no history in the company have completed it from what is written in the repository?
- If they got it wrong, what would have caught it before production?
- Where did the person who did it get the knowledge they needed?

The third answer is usually a name. That name is your documentation backlog.

## It was the same lesson in data

I have seen this before. In data platforms, teams bought tools hoping the tool would fix the data. It never did. The value was in the quality, structure and accessibility of the data itself.

Agents are the same. The value is not in the tool. It is in the quality, structure and accessibility of knowledge.

A codebase that is easy for an agent to work in is also easy for a person to join. That is the real return on this work, and it holds whichever model you use next year.

---

*Which dimension would you add? I am still refining the list, and the ones I have missed are probably the ones your team struggles with most.*
