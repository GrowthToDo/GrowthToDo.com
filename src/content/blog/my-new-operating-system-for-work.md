---
title: "My New Operating System for Work"
description: "I already knew what mattered in my life. The problem was everything was fragmented. Here's how I pulled it all into one place and made it talk to each other."
pubDate: "May 19 2026"
heroImage: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=630&fit=crop"
---

I run several projects simultaneously. I already knew what areas of my life actually mattered. That clarity was not the problem.

The problem was fragmentation. My to-dos lived in SimpleNote. Documents were scattered across Google Docs. My computer had a folder per project, a notes app turned graveyard, files that made sense when I created them and nothing three weeks later. None of it talked to each other.

Today that changed. Everything is now in one place: plain markdown files, inside a single folder structure on my machine, organized by the life areas I had already identified. One top-level folder per area. Every project nests inside the relevant one. And an AI agent that can navigate all of it on my behalf.

That is the working operating system. Here is how it is built.

## Obsidian as the operating system

The organizing layer lives in an Obsidian vault. I subscribed to Obsidian Sync today (for the first time), so the vault now stays in sync across my Mac and phone instantly.

Inside the vault is a command center folder with a few files I open almost every day:

**A context document.** This is the most important piece. It orients me at the start of any session, but more importantly, it orients Claude Code. Every project, every collaborator, every current bet, every file path is documented here. Claude Code reads this at the start of each session and is immediately up to speed. No re-explaining from scratch.

**A to-do list.** Organized by life area, not by project.

**A daily done tracker.** Completed work gets logged here with the date. At the end of every Claude Code session, a prompt fires automatically asking whether anything needs updating. Nothing slips through.

**A daily working doc.** A date-stamped scratch pad. Any output from a session (drafts, rough thinking, emails written) lands here. Text is cheap to store. Nothing gets lost.

## The Claude Code layer

This is the part that changed how I actually work day to day.

Claude Code is Anthropic's AI agent that runs directly in the terminal. I gave it access to the entire folder. Because the context document is thorough, Claude Code can navigate between completely different projects in the same session, without me opening a new terminal or starting a fresh instance. One session, full context, fast switching.

I interact with it entirely by voice. I dictate what I need: draft this email, update the to-do list, move this to done, restructure these folders, write a blog post. Claude Code handles the execution. I stay in the thinking layer.

This is the part that surprised me most. It is not just faster. The nature of the work changes. You stop managing files and start making decisions.

## One structural rule that helped

Inside each project area, I created a folder called "repos" for anything that is a git repository. Non-code content (notes, outreach materials, documents) sits alongside it at the same level. One glance tells you what is code and what is not.

Small thing. Removes constant low-level friction.

## What this changes

The system is not magic. Work still has to get done.

But when the structure reflects what actually matters, and when an AI agent can navigate that structure on your behalf through nothing more than your voice, the overhead drops. Less time managing, more time deciding.

Start with the question: what are the five or six areas of your life that genuinely matter? Make those your folders. Build from there.

*(Want help figuring out what those areas are for you? Happy to think through it together.)*
