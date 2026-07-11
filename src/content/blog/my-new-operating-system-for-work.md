---
title: "My New Operating System for Work"
description: "I already knew what mattered in my life. The problem was everything was fragmented. Here's how I pulled it all into one place and made it talk to each other."
pubDate: "May 19 2026"
heroImage: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=630&fit=crop"
---

**A five-part series on building a personal operating system:**

1. **My New Operating System for Work** (this post)
2. [My Operating System, One Month Later](/blog/my-operating-system-one-month-later)
3. [The Real Test of a System Is Handing It to Someone Else](/blog/the-real-test-of-a-system-is-handing-it-to-someone-else)
4. [The System Is Not Its Tools](/blog/the-system-is-not-its-tools)
5. [The System Was Lying to Me](/blog/the-system-was-lying-to-me)

The system is live and still changing: see the [Founder OS overview](/founder-os) and its [changelog](/founder-os/changelog).

---

Last year I spent real time figuring out exactly which areas of my life I should be focusing on. Not a vague exercise. I came out of it with specific targets I wanted to hit in each area. That work was deliberate and it was worth it.

The consequence of having that clarity is that I run several projects simultaneously. That is not accidental. It is what hitting those targets actually requires.

However, I struggled with a very fragmented online workspace. My to-dos lived in [SimpleNote](https://simplenote.com). Documents were scattered across Google Docs. My computer had a folder per project, a notes app turned graveyard, files that made sense when I created them and nothing three weeks later. None of it talked to each other.

Today that changed. Everything is now in one place: plain markdown files, inside a single folder structure on my machine, organized by the life areas I had already identified. One top-level folder per area. Every project nests inside the relevant one. And an AI agent that can navigate all of it on my behalf.

That is the [working operating system](/founder-os). Here is how it is built.

## Obsidian as the operating system

The organizing layer lives in an [Obsidian](https://obsidian.md) vault. I subscribed to Obsidian Sync today (for the first time), so the vault now stays in sync across my Mac and phone instantly.

Inside the vault is a command center folder split into two layers:

**Context/: the reference layer.** Static documents that rarely change. A master context document that orients Claude Code at the start of every session. A per-project context file for each of my projects, Agency, SSAI, EduMyna, and so on. Each one has the same four sections: current status, recent decisions, what is in flight, open questions. These files stay clean and current. They are the distilled picture of where each project stands right now.

**Daily/: the operational layer.** Three files, three jobs:

- **To-do list.** What needs to get done, organised by life area.
- **Daily working doc.** Where the work actually happens. Freeform scratch pad: drafts, rough thinking, emails written, decisions made. Everything lands here. Text is cheap. Nothing gets lost.
- **Done tracker.** What got done, with a date header for every day. I decide when something is done. Claude Code logs it.

The split matters. The reference layer stays clean because the operational layer absorbs all the mess. And the per-project context files mean I never lose track of where any individual project stands, even when I am switching between six of them in a single session.

## The Claude Code layer

This is the part that changed how I actually work day to day.

Claude Code is Anthropic's AI agent that runs directly in the terminal. I gave it access to the entire folder. Because the context document is thorough, Claude Code can navigate between completely different projects in the same session, without me opening a new terminal or starting a fresh instance. One session, full context, fast switching.

I interact with it entirely by voice. I dictate what I need: draft this email, update the to-do list, move this to done, restructure these folders, write a blog post. Claude Code handles the execution. I stay in the thinking layer.

This is the part that surprised me most. It is not just faster. The nature of the work changes. You stop managing files and start making decisions.

The system is also largely self-maintaining. When I open a session, a hook fires automatically. Claude Code reads the context and to-do list and presents the day's agenda before I say a word. When I close a session, another hook fires. It updates the relevant project context files and commits everything to GitHub. The OS backs itself up. I do not have to think about it.

## The accountability layer

Tracking what you do is not the same as knowing whether you are making progress. I knew this from experience. You can stay busy and go nowhere.

So the system has a metrics layer built in. Each project has a small set of numbers that matter: leads contacted, revenue, calls booked, whatever the actual needle is. These sit alongside the to-dos and the done tracker. When I log completed work, I am also updating the number.

This creates something I did not have before: a weekly review with real data, not just feelings.

Every fortnight I run a structured review. The format is simple: what moved, what did not, what is the honest assessment. But because the done tracker has a full log of the week and the metrics are there, the review is grounded. I cannot tell myself it was a good week if the numbers say otherwise. I cannot dismiss a week as bad if the log shows real output.

The part that surprised me: I gave Claude Code the role of running this review with me. It reads the done tracker, checks the metrics, and then asks me the uncomfortable questions. Did this actually move the needle or just fill the week? Is this bet still real or are you dragging it along? Same questions a good manager would ask. Except I do not have a manager, and most founders do not.

There is also a higher-level strategic review, less frequent and bigger picture, where the question is not "did I do the work" but "is the work even the right work." That one is harder. The system makes it possible because the data is there when you need it.

The result: less self-deception. Which is, honestly, one of the most useful things a system can give you.

## What this changes

The system is not magic. Work still has to get done.

But when the structure reflects what actually matters, and when an AI agent can navigate that structure on your behalf through nothing more than your voice, the overhead drops. Less time managing, more time deciding.

Start with the question: what are the five or six areas of your life that genuinely matter? Make those your folders. Build from there.

*(Want help figuring out what those areas are for you? Happy to think through it together.)*

This is V1, shipped today. I am continuously iterating on this system and will be writing more as it evolves.
