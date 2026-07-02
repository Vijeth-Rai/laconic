# slack-voice

A Claude Code hook that makes Claude reply like a human texting a trusted
colleague on Slack — short, plain, answer-first — instead of writing essays.

## How it works

It's a `UserPromptSubmit` hook. On every message you send, Claude Code runs
`inject.mjs`, which prints [`style.md`](style.md) to stdout. Claude Code feeds
that into the model's context *right before it responds* — so the rule is always
fresh and never fades over a long conversation.

No output judging, no redo loops, no per-turn model cost. It just makes the style
instruction unmissable, every turn.

## Install

Add this to your Claude Code settings — `.claude/settings.json` in a project
(that project only) or `~/.claude/settings.json` (all projects):

```json
{
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "node \"C:/Users/vijet/projects/slack-voice/inject.mjs\""
          }
        ]
      }
    ]
  }
}
```

Restart Claude Code (or `/hooks` to reload). To turn it off, remove the block.

## Tune it

Edit [`style.md`](style.md). No restart needed — it's read fresh on every turn.
