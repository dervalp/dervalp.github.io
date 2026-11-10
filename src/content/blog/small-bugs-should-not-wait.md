---
title: "Small Bugs Should Not Wait for a Free Afternoon"
excerpt: "How we connected production logs to a coding agent that reproduces a bug, fixes it and opens a pull request, while engineers keep the merge."
author: "Pierre Derval"
publishDate: 2026-11-10
category: "AI Engineering"
tags: ["ai", "coding-agents", "engineering", "production", "enterprise"]
draft: true
---

<!--
DRAFT, not published. Expanded from the LinkedIn post that starts "Might not be as impressive as flying cars".
Lines marked [PIERRE] need a real detail from you. Delete this comment and set draft: false to publish.
-->

It might not be as impressive as flying cars. It is useful every day.

Every product has a class of bug that never gets fixed quickly. It is too small to interrupt a sprint and too real to ignore. It sits in a backlog until someone has a free afternoon, and free afternoons are rare.

At Vertuoza we built a pipeline that takes those bugs from a production log to a pull request without waiting for that afternoon.

> **The value is not that an AI fixes bugs. It is that small bugs stop waiting.**

## 1. How the pipeline works

There are five steps, and only one of them is new.

**Every hour, an internal tool reads the production logs and groups the errors.** Grouping matters. A thousand occurrences of one error is one problem, and the agent should see it as one.

**An agent running on our own server picks up the grouped errors.** It runs inside our infrastructure, next to the code.

**The agent writes a test that reproduces the bug, fixes it, and opens a pull request in the right repository.** The test comes first. A fix without a failing test is a guess.

**An engineer reviews and merges, as with any other pull request.** The same rules, the same checks, the same people.

**After the release, the tool checks that the error is actually gone.** If it still appears in the logs, the fix did not work, and we know.

> **[PIERRE] Add the numbers you are comfortable sharing: how many pull requests the pipeline has opened, what share were merged, and the typical time from first error to merged fix.**

## 2. The agent never merges

This is the rule that makes the rest acceptable. The agent never merges anything. That stays with us.

It is tempting to see review as the slow part and automate it away. I think that reads the situation backwards. Review is where a person decides whether this change should exist. Everything before it is preparation, and preparation is what the agent is good at.

> *My take: an agent that opens a pull request with a reproducing test has done the part engineers least want to do. Finding the cause and proving it is tedious. Deciding whether to ship the fix is judgement, and I want a person there.*

It also keeps the pipeline inside the process we already trust. There is no second path to production with different rules. An agent pull request is a pull request.

## 3. When an error is not a bug

The first question people ask is the right one: how does the agent know that an error is a bug and not intended behaviour?

A payment refused by a business rule produces an error. It is also the system working correctly. An agent that "fixes" it has removed a control.

Three things protect against that.

**The reproducing test makes the intent visible.** The reviewer reads a test that says "this input should not fail". If that statement is wrong, it is obvious in one line, before reading any of the fix.

**The reviewer knows the domain.** This is the reason the merge stays human. The agent proposes, and someone who knows why the rule exists decides.

**The scope is small bugs.** The kind with an obvious cause once someone looks: an unhandled case, a missing check. The pipeline is not there to reinterpret business rules.

> **[PIERRE] Say how you handle this in practice: are some error types or parts of the code excluded from the pipeline? Have you rejected a pull request for this reason? One real example would make this section.**

## 4. What it needs to work

The agent is the visible part. The conditions around it are what make it work, and they are ordinary engineering.

- **Logs that carry enough context** to reproduce a problem. If an error cannot be reproduced from what was logged, no one can fix it quickly, human or agent.
- **A test suite the agent can run.** The reproducing test only means something if the rest of the suite still passes.
- **A codebase an agent can find its way in.** Clear structure, written-down domain rules, predictable conventions.
- **A review habit that is already healthy.** If pull requests are approved without reading, adding an agent makes that worse.

None of this was built for the agent. Teams that already have it can connect the pieces in a short time. Teams that do not will discover that the pipeline is the easy part.

## Verification closes the loop

The step I would keep if I had to drop all the others is the last one: checking after the release that the error has stopped.

Most bug workflows end at "merged". The ticket is closed and nobody looks again. Here the same tool that found the error confirms it is gone, which turns a fix from a belief into a fact.

That is the part worth copying, with or without an agent.

---

> **[PIERRE] Closing line. If this pipeline is part of Omni Loop, say so and link to omni-loop.xyz. If it is a separate internal tool, end on an invitation to compare notes instead.**
