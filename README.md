# slack-voice

A Claude Code plugin that makes Claude reply like a human texting a trusted
colleague on Slack — short, plain, answer-first — instead of writing essays.

## How it works

It ships a `UserPromptSubmit` hook. On every message you send, Claude Code runs
`inject.mjs`, which prints [`style.md`](style.md) into the model's context
*right before it responds* — so the rule stays fresh and never fades over a long
conversation.

No output judging, no redo loops, no per-turn model cost. It just makes the style
instruction unmissable, every turn.

## Install (plugin)

```
/plugin marketplace add Vijeth-Rai/slack-voice
/plugin install slack-voice@slack-voice
```

Restart Claude Code. Done — works on any machine, no paths to edit.

## Install (manual hook)

If you'd rather not use the plugin system, add this to `~/.claude/settings.json`
(all projects) or a project's `.claude/settings.json`, pointing at your clone:

```json
{
  "hooks": {
    "UserPromptSubmit": [
      { "hooks": [
        { "type": "command", "command": "node \"/path/to/slack-voice/inject.mjs\"" }
      ]}
    ]
  }
}
```

## Tune it

Edit [`style.md`](style.md). Takes effect on the next message — no restart.

## Requirements

Node.js (any recent version).
