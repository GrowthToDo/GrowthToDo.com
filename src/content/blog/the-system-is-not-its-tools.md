---
title: "The System Is Not Its Tools"
description: "For months I described my operating system by naming the apps it runs on. That was the wrong description. The system is four layers, and the tool sitting in each one is just my current pick."
pubDate: "Jul 2 2026"
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=630&fit=crop"
---

**A four-part series on building a personal operating system:**

1. [My New Operating System for Work](/blog/my-new-operating-system-for-work)
2. [My Operating System, One Month Later](/blog/my-operating-system-one-month-later)
3. [The Real Test of a System Is Handing It to Someone Else](/blog/the-real-test-of-a-system-is-handing-it-to-someone-else)
4. **The System Is Not Its Tools** (this post)

The system is live and still changing: see the [Founder OS overview](/founder-os) and its [changelog](/founder-os/changelog).

---

Every time I described this system to someone, I reached for the same three words: Obsidian, Claude Code, the terminal. That was the honest answer to "what do you use." It was also the wrong answer to "what is it."

[Part three](/blog/the-real-test-of-a-system-is-handing-it-to-someone-else) got me halfway to seeing why. Setting the system up for someone else taught me that the folders were never the valuable part. The skeleton copies in minutes; the fitting is the whole job. What I had not yet noticed is that the same thing is true one level down. The tools are not the valuable part either. Obsidian, Claude Code, and the terminal are three answers I happen to hold right now, to three questions the system will keep asking long after those particular answers change.

So here is the better description. The system is four layers. Each layer does one job. The tool I name under it is my current pick, and every one of them is replaceable without touching the shape.

## Memory

This is the layer everything else exists to serve: a single surface that both I and the model can read from and write to. Not my notes that the agent occasionally reads. Not the agent's output that I occasionally review. One shared record where a fact I write and a fact the model writes sit side by side and mean the same thing tomorrow.

Memory has two tiers, and the distinction matters more than any tool choice.

**Long-term memory** is the context that compounds. Who the people are, what each project is, the durable facts, the relationship graph. It changes slowly and it is the reason the system gets more useful the longer it runs. When I open a session, this is what orients the model. When I close one, this is what the model has quietly kept current.

**Working memory** is the RAM. Today's agenda, the replies I owe, the draft I am halfway through, the thing I decided an hour ago. It churns constantly, gets processed each day, and empties into the dated log so it never silts up. It is where I actually operate; long-term memory is what I operate against.

My current pick for this layer is Obsidian, a vault of plain markdown on disk. But Obsidian is not the memory. It is a reader and editor I point at the memory. The memory is the text. If I woke up tomorrow and Obsidian had vanished, the files would still be there and any other markdown editor would open them. That is the test of whether a tool is really the layer or just your current window onto it: take the tool away and see if the layer survives. This one does.

## The model

The reasoning and writing engine. The thing that reads both tiers of memory, works out what matters, drafts what I need, and writes the result back. It does the thinking-adjacent labor so I can stay in the deciding.

My current pick is Claude Code. For months I called this "the Claude Code layer," as if the system were built on Claude specifically. It is not. It is built on the idea of a capable model with access to the memory, running where I work. Which model earns that access is a judgment I want to keep making, not a decision I want to bake in. Models improve at different rates and are better at different things. The architecture is deliberately indifferent to which one is plugged in this month. Today Claude Code is the best fit for how I work. The day something fits better, it takes the slot, and nothing else in the system has to move.

## The interface

Where I actually talk to the model. The surface the conversation happens on.

My current pick is the terminal. No app, no dashboard, no tab to keep open, no window to manage. For me that is a feature, not a limitation: the absence of a UI is what keeps the system from becoming another place to fiddle. But the interface is genuinely separable from the model. The same model can be reached through a chat window, an editor plugin, a phone. I keep it in the terminal because that is where I already live and it adds zero surface to maintain. Someone else running this exact architecture could reach the same model through something entirely different and lose nothing structural.

## Dictation

The layer that turns speech into text the model can act on. This is the one I left out of every description for months, which is strange, because it is the layer that changes the feel of the whole thing more than any other.

The first three posts kept saying "by voice" as if it were a property of the model. It is not. It is its own layer, and without it the sentence is a lie. My current pick is [Voicenotes](https://voicenotes.com). I speak; it transcribes; the text lands where the model reads it. What that buys is not just speed. It moves the work off the keyboard and into the same register as thinking out loud, which is where the actual decisions happen. I can pace, think in half-formed sentences, and let the model do the tidying. Take dictation away and the system still runs, but it stops being the thing I reach for without friction. That is exactly why it deserves to be named as a layer instead of hidden inside "the agent."

## Why draw the lines this way

The point of naming four layers instead of three tools is not tidiness. It is that a layered description tells you what is safe to change and what is not.

Confuse the tool with the layer and every tool decision feels like a bet on the whole system. Should I really build my life on Obsidian? On Claude? That question paralyzes, because it is the wrong question. The right one is smaller: is this still the best tool for its layer? And because the layers are clean, the answer to that question is local. Swap the model and the memory does not notice. Swap the memory tool and the model does not care, it reads text either way. Swap dictation and everything downstream is unchanged, because all it ever produced was text.

This is the same lesson as [part three](/blog/the-real-test-of-a-system-is-handing-it-to-someone-else), pushed one level deeper. There I learned the system is not a template, it is a fitting to a person. Here I learned it is not a stack either, it is an architecture with four sockets. The person changes what goes in the memory. The times change what goes in the sockets. Neither touches the shape.

A system you describe by its tools is hostage to those tools. A system you describe by its layers outlives every one of them.
