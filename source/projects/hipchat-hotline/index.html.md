---
categories:
  - cli
  - node
  - useful
description: Send chat messages from the command line.
rank: 200
title: hipchat-hotline
---

# hipchat-hotline

[Source](https://github.com/jedcn/hipchat-hotline)

## Overview

[hipchat-hotline] provides a command line interface for sending
messages via [HipChat] using node.

[hipchat-hotline]: https://www.npmjs.com/package/hipchat-hotline
[HipChat]: https://hipchat.com

Once installed globally, you easily can send hipchat messages from
your terminal or from shell scripts.

## Motivation

Before I wrote hipchat-hotline, my team members and I were building
our code in Jenkins, but we were all relying on HipChat "Room
Notifications" to let us know how the build went.

This was problematic. What we really we wanted was a direct message so
that we wouldn't miss information we were depending on.

We already had a node environment to build our code, so I installed
hipchat-hotline into our Jenkins instances and setup a Post Build
Action to send messages directly to a user.

I sent messages to the email address on the last commit:

    git log -n 1 --oneline --format="%ae" HEAD

And I would include the first line of their commit message:

    git log -n 1 --oneline HEAD

Beyond build jobs, hipchat-hotline proved useful in any situation
where we wanted to communicate from an automated jenkins job to the
greater HipChat community-- code deploys, configuration changes, etc.
