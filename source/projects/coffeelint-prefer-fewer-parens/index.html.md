---
categories:
  - lint
  - coffeescript
description: CoffeeScript lint rule for people who don't like parens
title: coffeelint-prefer-fewer-parens
---

# coffeelint-prefer-fewer-parens

[Source](https://github.com/jedcn/coffeelint-prefer-fewer-parens)

## Overview

This project defines a rule within the [CoffeeLint] eco-system.

[CoffeeLint]: http://www.coffeelint.org/

When active, this CoffeeLint rule can find situations where you
could've relied on CoffeeScript's implicit parenthesis.

Here are explicit parenthesis:

    Math.pow(2, 3)

But the parens in this case are not needed. The following is
equivalent:

    Math.pow 2, 3

When this rule is configured, it actively rejects the former and
pushes you to write the latter.

## Motivation

I created the rule for two reasons:

1. **I believe** you should only have style rules that are enforceable via lint.
2. **My team agreed** that this was the best way to write CoffeeScript.

It is important to note that **I do not like** writing CoffeeScript
this way. I think you are less likely to get in trouble if you always
use explicit parens.

Putting my personal feelings aside, it is vital that a team be able to
focus on *analyzing the logic of a code change rather than losing even
the smallest moment of time to stylistic concerns*.

And so, I created this rule for them.
