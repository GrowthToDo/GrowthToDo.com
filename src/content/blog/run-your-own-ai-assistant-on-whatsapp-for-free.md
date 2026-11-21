---
title: "How to Run Your Own AI Assistant on WhatsApp for Free"
description: "A step-by-step guide to putting an AI assistant on WhatsApp that works on your own files, answers only you, and costs close to nothing. About 60 lines of code."
pubDate: "Nov 21 2026"
heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=630&fit=crop"
hidden: true
---

**A seven-part series on building a personal operating system:**

1. [My New Operating System for Work](/blog/my-new-operating-system-for-work)
2. [My Operating System, One Month Later](/blog/my-operating-system-one-month-later)
3. [The Real Test of a System Is Handing It to Someone Else](/blog/the-real-test-of-a-system-is-handing-it-to-someone-else)
4. [The System Is Not Its Tools](/blog/the-system-is-not-its-tools)
5. [An Audit of My Follow-Up Pipeline Found 55% Was Overdue](/blog/an-audit-of-my-follow-up-pipeline-found-55-was-overdue)
6. [My Operating System Now Closes the Day Without Me](/blog/my-operating-system-now-closes-the-day-without-me)
7. **How to Run Your Own AI Assistant on WhatsApp for Free** (this post)

The system is live and still changing: see the [FounderOS overview](/founder-os) and its [changelog](/founder-os/changelog). This post stands on its own, so you can read it without the others.

---

I message my assistant from WhatsApp. I type "what's on my list today" and the list comes back. I forward three photos and it asks what they are about, then files them where I tell it to. It works on my own files, on a computer at home that never switches off. Only my number can talk to it.

Most people do not know this is possible, and it is cheaper than they expect. Here is the whole setup, in the order I did it.

## What you need

- A computer that stays on. An old laptop is fine. I use a small Ubuntu machine, but a Mac that never sleeps works too.
- [Claude Code](https://claude.com/claude-code), installed and logged in on that computer. This is the part that does the thinking.
- A free Meta developer account. This is how you get a WhatsApp number to talk to.
- A free [Tailscale](https://tailscale.com) account. This gives your computer a public web address without opening anything on your router.
- A folder of files you want the assistant to work on. Notes, to-do lists, anything.

## What it costs

The computer is yours. Tailscale's free plan covers this. Meta gives you a test WhatsApp number at no charge, and the replies the bot sends inside the 24 hours after you message it are free as well.

The thinking runs on your own Claude login. Check Anthropic's current usage terms for automated use of a subscription. If you would rather pay per use, Claude Code also works with an API key, and the cost is small for a one-person assistant.

## How it fits together

Four pieces, one direction:

1. You send a WhatsApp message.
2. WhatsApp passes it to a small web address on your computer.
3. A short script on your computer hands your message to Claude, which works inside your folder.
4. The script sends Claude's answer back to your WhatsApp.

The script is the only thing you write, and it is short.

## Step 1: Get Claude working on the computer

Install Claude Code on the always-on computer and log in. Then test it from the terminal:

```
claude -p "say hello"
```

If it answers, the hard part is done. Make a folder for your files, for example `~/my-files`, and put a few notes in it.

## Step 2: Create the Meta app

Go to developers.facebook.com, create an app, and choose the use case about connecting with customers through WhatsApp. Meta will ask you to create a business portfolio. It does not need to be verified.

Meta then gives you a test WhatsApp number. Add your own phone as a recipient and confirm the code they send. From the setup page, note down four things:

- the **temporary access token**
- the **phone number ID**
- the **WhatsApp account ID**
- the **app secret** (in the app's Basic settings)

Screens change, so the names may differ slightly. These four items are what you are after.

## Step 3: Give your computer a public address

Meta needs a web address it can call. On your computer, install Tailscale and sign in. In the Tailscale admin page, switch on HTTPS certificates and Funnel. Then run:

```
sudo tailscale funnel --bg 8766
```

Your computer now answers at `https://<your-machine-name>.<your-tailnet>.ts.net`. Port 8766 is just the one my script listens on.

## Step 4: Save your secrets in files

Make a private folder and put each secret in its own file. Never put these in a public repository.

```
mkdir -p ~/.config/mybot && cd ~/.config/mybot
echo "YOUR_TEMPORARY_TOKEN" > token
echo "YOUR_PHONE_NUMBER_ID" > phone-id
echo "YOUR_APP_SECRET" > app-secret
echo "any-long-random-phrase-you-invent" > verify-token
echo "919876543210" > my-number
chmod 600 *
```

`my-number` is your own WhatsApp number, digits only, with the country code. The `verify-token` is a phrase you make up. You will paste the same phrase into Meta in step 6.

If you paste a token and the file looks far too long, check it. I once pasted mine three times in a row.

## Step 5: The script

Save this as `bot.py` on the computer.

```python
#!/usr/bin/env python3
import hashlib, hmac, json, os, subprocess, threading, urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

CFG = os.path.expanduser("~/.config/mybot")
def cfg(name):
    return open(f"{CFG}/{name}").read().strip()

TOKEN, PHONE_ID, SECRET = cfg("token"), cfg("phone-id"), cfg("app-secret")
VERIFY, ME = cfg("verify-token"), cfg("my-number")
WORKDIR = os.path.expanduser("~/my-files")        # the folder Claude works in
SESSION = os.path.expanduser("~/.mybot-session")  # remembers the conversation

def send(to, text):
    body = json.dumps({"messaging_product": "whatsapp", "to": to, "type": "text",
                       "text": {"body": text[:3800]}}).encode()
    req = urllib.request.Request(f"https://graph.facebook.com/v25.0/{PHONE_ID}/messages", body,
        {"Authorization": f"Bearer {TOKEN}", "Content-Type": "application/json"})
    urllib.request.urlopen(req, timeout=30)

def ask_claude(text):
    cmd = ["claude", "-p", text, "--output-format", "json", "--permission-mode", "acceptEdits"]
    if os.path.exists(SESSION):
        cmd += ["--resume", open(SESSION).read().strip()]
    env = {k: v for k, v in os.environ.items() if k != "ANTHROPIC_API_KEY"}  # use the subscription login
    out = json.loads(subprocess.run(cmd, cwd=WORKDIR, env=env, capture_output=True,
                                    text=True, timeout=900).stdout)
    open(SESSION, "w").write(out["session_id"])
    return out["result"]

def handle(text):
    try:
        if text.strip() == "/new":
            if os.path.exists(SESSION):
                os.remove(SESSION)
            return send(ME, "Fresh conversation started.")
        send(ME, ask_claude(text))
    except Exception as e:
        send(ME, "Something went wrong: " + str(e)[:200])

class Hook(BaseHTTPRequestHandler):
    def reply(self, code, body=b""):
        self.send_response(code); self.end_headers(); self.wfile.write(body)

    def do_GET(self):  # Meta calls this once to check the address is yours
        q = dict(p.split("=", 1) for p in self.path.split("?", 1)[-1].split("&") if "=" in p)
        if q.get("hub.verify_token") == VERIFY:
            return self.reply(200, q.get("hub.challenge", "").encode())
        self.reply(403)

    def do_POST(self):
        raw = self.rfile.read(int(self.headers.get("Content-Length", 0)))
        good = "sha256=" + hmac.new(SECRET.encode(), raw, hashlib.sha256).hexdigest()
        if not hmac.compare_digest(good, self.headers.get("X-Hub-Signature-256", "")):
            return self.reply(403)   # not from Meta
        self.reply(200)              # answer fast, work in the background
        for entry in json.loads(raw).get("entry", []):
            for change in entry.get("changes", []):
                for m in change.get("value", {}).get("messages", []):
                    if m.get("from") == ME and m.get("type") == "text":  # only you, only text
                        threading.Thread(target=handle, args=(m["text"]["body"],), daemon=True).start()

ThreadingHTTPServer(("127.0.0.1", 8766), Hook).serve_forever()
```

Run it with `python3 bot.py`. It uses nothing outside Python's standard library.

Three lines in it matter most. The signature check rejects anything that did not come from Meta. The `m.get("from") == ME` line means a stranger who finds your number gets silence, not an answer. And `acceptEdits` lets Claude change files in your folder but nothing wider, so keep that folder to things you are happy for it to edit.

## Step 6: Tell Meta where to send messages

In the app's WhatsApp settings, find the webhook section. Enter your public address as the callback URL and your made-up phrase as the verify token. Meta calls your script once to check it. If the check passes, subscribe to the `messages` field.

## Step 7: Subscribe the app to the WhatsApp account

This is the step nobody mentions, and it cost me an hour. The dashboard does not do it for you. Without it, messages never arrive and nothing shows an error. Run:

```
curl -X POST "https://graph.facebook.com/v25.0/YOUR_WHATSAPP_ACCOUNT_ID/subscribed_apps" \
  -H "Authorization: Bearer YOUR_TEMPORARY_TOKEN"
```

You can check it worked by running the same address with `-X GET`. Your app should be in the list.

## Step 8: Send a message

Open WhatsApp on your phone, find the test number, and send "hello". A few seconds later, Claude's answer arrives. If you send "what files are in my folder", it will tell you. Send `/new` to clear its memory and start a fresh conversation.

If nothing arrives, check in this order: is the script running, does the public address answer, is the app subscribed (step 7), and does `my-number` match the number you are sending from.

## Step 9: Make it permanent

Two things stop it from lasting.

**The token expires.** The temporary one lasts about a day. In Meta's Business settings, create a system user, give it your app and your WhatsApp account, and generate a token with the permissions `whatsapp_business_messaging` and `whatsapp_business_management`, set to never expire. Replace the contents of the `token` file and restart the script.

**The script stops when the computer restarts.** Run it from a startup entry so it comes back by itself. On Linux, a line in `crontab` that starts it at reboot is enough, and a second line every five minutes that starts it only if it is not running keeps it alive.

## Two things to know

**Meta will want a privacy policy** before you can publish the app, and publishing is what lets messages flow outside test mode. A single plain page is enough. Say what the bot receives, who can use it, where the messages go, and how long things are kept. Mine is at [growthtodo.com/privacy](/privacy) if you want to see what one looks like.

**You can only reply, not start.** Meta allows free-form messages for 24 hours after your last message to the bot. So the bot answers you, but it cannot ping you first. I get my morning list through a second bot on Telegram for that reason.

## What I added later

The script above reads text. Mine also takes photos and PDFs. When I send one, it ignores the caption and asks what it is about. My reply becomes the instruction, so "this is the invoice for the Delhi trip, save it in my Travel folder" does the right thing. It saves files outside my notes, deletes them after two weeks, and can only copy a file to Drive, never overwrite or delete one.

Mine also has a few instant commands that skip Claude and answer in a second: my list for today, my open items, and what I got done yesterday. And every night it clears the conversation, so each morning starts fresh. Sending `/new` does the same on demand.

None of it needs more than the pieces above. The difference between a toy and something I use every day is mostly small rules like these, added one at a time as I noticed what annoyed me.
