---
title: "{{ replace .Name "-" " " | title }}"

date: {{ now.Format "2006-01-02" }}
url: /{{ .Name }}/
image: images/{{ now.Format "2006" }}/{{ .Name }}.jpg
categories:
  - Opinion
  - Technology
  - Music
tags:
  - College
  - Sociology
draft: true
---
<!--more-->
