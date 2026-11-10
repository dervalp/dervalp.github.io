---
title: "Omni Loop: Agents Ship, You Steer"
excerpt: "Why I built a delivery framework for coding agents, how the loop runs from idea to retro, and the three rules that keep people in charge."
author: "Pierre Derval"
publishDate: 2026-10-03
category: "AI Engineering"
tags: ["ai", "coding-agents", "omni-loop", "engineering", "product"]
draft: true
---

<!--
DRAFT, not published. Built from your LinkedIn post "I've been testing Omni Loop at Vertuoza" and the omni-loop.xyz site.
Lines marked [PIERRE] need a real detail from you. Delete this comment and set draft: false to publish.
-->

I have been testing Omni Loop at Vertuoza. It started from a simple question: how do we use what our product managers know, stay closer to customers, and shorten the loop from insight to build to feedback to value?

Coding agents changed one part of that loop. Writing code is no longer the slow step. Everything around it still is: deciding what to build, explaining it well enough, reviewing what came back, and learning from it.

Omni Loop is my attempt to work on those parts.

> **Agents ship. You steer.**

## 1. The problem with a fast agent

Give an agent a vague request and it will deliver something, quickly and with confidence. That is the difficulty.

Along the way it takes dozens of small decisions. Which field is required. What happens when the list is empty. Whether an existing rule still applies. A person would have asked. An agent that stops to ask every time is useless, and an agent that never asks leaves you with decisions nobody knows were made.

> *My take: the risk with coding agents is not bad code. It is invisible decisions. The code compiles, the tests pass, and the product has quietly moved somewhere nobody chose.*

Most of the work in Omni Loop goes into that one problem: let the agent keep moving, and make every decision it took visible afterwards.

## 2. The loop, one level at a time

A feature goes through six stages.

**Idea.** You talk an idea through with your agent. Nothing is written yet.

**PRD.** The idea becomes a brief and a before/after page: the problem, the stories, and what done means. A person approves it before any code exists.

**Inbox.** Approved and ready to build.

**Outbox.** Agents build in slices. A slice is one small piece of the feature, built test-first, with its own pull request. Decisions the agents took without asking wait in the outbox for your answer.

**Shipped.** A person reviews and merges the feature. Never an agent.

**Retro.** How the delivery went and what it taught.

There is a seventh step that matters more than the others. What you settled becomes the rules the next idea starts from. An answer you gave once in the outbox does not have to be given again.

> **[PIERRE] Add one real feature that went through the loop at Vertuoza: what the idea was, how many slices it took, and one outbox decision you overturned.**

## 3. Three rules that do not bend

The framework has many parts. Three rules hold it together.

**One folder in, one folder out.** Everything the loop needs lives in one folder in your repository: the briefs, the plans, the decisions. If you want to stop, you delete the folder and commit. There is nothing to migrate.

**Every decision is written down.** If an agent chose something a person would have been asked about, it is recorded and waits for an answer. You review decisions, not only diffs.

**A person always merges.** Agents open pull requests. They never merge into the main branch. The judgement about what goes to customers stays with the team.

It runs on the coding agent you already use, including Claude Code, Codex, Cursor and Gemini CLI.

## 4. Built for your customers, not for you

Agents build for your customers, and they do not know who those are unless you tell them.

So you define it once. The business: who you sell to, their size, their region, what you compete with. The products, one at a time. The personas: the people who use the product, with their attitudes, including the sceptical ones.

Every run reads it. A feature for a site foreman who distrusts software gets built differently from one for an office manager who asked for it.

This is where the knowledge of product managers enters the loop. It is the part I care about most. A product manager's understanding of the customer has usually lived in conversations and in their head. Here it becomes something every agent run starts from.

## 5. Why there is a game in it

We also experiment with gamification in how we pick up, ship and improve work. Nothing too serious.

Teams become fleets with a name, a colour and a mascot. A merged feature or fix scores points. So does rescuing work nobody holds, and so does closing what the game calls entropy: unanswered questions, stuck work and shipped bugs.

The point is not competition. Most of what makes delivery healthy is invisible. Answering an open question, or unblocking someone else's stuck pull request, is real work that no board rewards. The game makes it visible.

> **[PIERRE] Say how the team reacted to the game, and whether it changed behaviour, for example how fast outbox questions get answered.**

## What it is not

The goal is not to replace product or engineering. It is to help the two work more closely, move faster and reduce time to value.

An agent that builds the wrong thing quickly has saved nobody any time. The loop is there so that what gets built is what was decided, and so that what was decided is remembered.

It is still very much a work in progress, and it has been fun to test with the team.

---

*Omni Loop is free while in beta. The site and the documentation are at [omni-loop.xyz](https://www.omni-loop.xyz/).*
