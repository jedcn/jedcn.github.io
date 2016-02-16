---
categories:
  - app
  - cli
  - ruby
  - useful
description: Write slides for your next presentation in Markdown.
rank: 100
title: reveal-ck
---

# reveal-ck

[Source](https://github.com/jedcn/reveal-ck)

## Overview

[reveal-ck] provides a command line interface that takes one or more
files as input and creates a [reveal.js presentation][reveal.js] using
ruby.

[reveal-ck]: https://rubygems.org/gems/reveal-ck
[reveal.js]: http://lab.hakim.se/reveal-js/#/

reveal-ck operates in two modes:

* It can generate a presentation: runs in a few seconds, creates a
  bunch of files.
* It can serve as a dynamic presentation environment: starts up a
  server, you can view the presentation in a browser, make changes
  with your favorite text editor, have them LiveReloaded, etc).

## Motivation

I was working at a company that invited people to get up and present
their work at a weekly lunch.

I was doing all of my work in my favorite editor, and I wanted to
present on some topic without learning the ins-and-outs of PowerPoint
or KeyNote.

I started using reveal.js, but without support it was too cumbersome:
there were hundreds of files, and my content was mixed in with my
presentation.

One of the goals of reveal-ck is to let you create a reveal.js
presentation from a single file containing only your content.

That file, ultimately, will become HTML but users can write in
Markdown or HAML or whatever.

It heavily leverages some of the tools that make ruby famous,
including tools used by github to do things like insert emoji or write
an `@mention`.

## Extras

* I spoke about reveal-ck in front of about 170 people at a
  [Boston Ruby group meetup back in August of 2014](https://twitter.com/jedcn/status/499630488047607808).
* My [favorite issue](https://github.com/jedcn/reveal-ck/issues/15)
  involved implementing a feature someone told me about in person
  after the Boston RB Meet Up, it was then seconded by someone in
  France, and then verified as working by someone who lives near me
  (but I don't know, and have never heard from again).
