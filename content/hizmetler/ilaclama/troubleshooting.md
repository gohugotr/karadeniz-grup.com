---
title: "Sorunlar - Çözümler"
description: "Sorunlar - Çözümler."
lead: "Sorunlar - Çözümler."
date: 2020-11-12T15:22:20+01:00
lastmod: 2020-11-12T15:22:20+01:00
draft: true
images: []
menu: 
  hizmetler:
    parent: "ilaclama"
weight: 620
toc: true
---

## Problems updating npm packages

Delete the `./node_modules` folder, and run again:

```bash
npm install
```

## Problems with cache

Delete the temporary directories:

```bash
npm run clean
```
