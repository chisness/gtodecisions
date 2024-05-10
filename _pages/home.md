---
title: "Expected Value Org"
permalink: /
sidebar:
  nav: "nav"
# toc: true
# toc_label: "TOC"
# toc_sticky: true
layout: single
---
**Expected Value Org** is a project to teach you about the important probability concept of expected value.

Andrew Huberman posted a video discussing the cumulative probability of pregnancy. He said that if the $$ Pr(Pregnancy) = 0.2 $$, then the $$ Pr(Pregnancy) $$ after 6 attempts is $$ 1.2 $$. 

(Note that this is not expected value, but an important probability concept nonetheless.)

Since probabilities are by definition between 0 and 1, he clearly made an error. He did not recognize the error in the original video, but did post a [Twitter correction](https://twitter.com/hubermanlab/status/1788964558758965281) afterwards. 

So how DO you calculate this probability? 

Well we know that $$ Pr(Pregnancy) = 0.2 $$. We'll define this as $$ p = 0.2 $$. So also we know that $$ Pr(No Pregnancy) = 1 - 0.2 = 0.8 $$. 

So after 6 attempts, we can say that the $$ Pr(Pregnancy) $$ is equal to inverse of the probability of *not* getting pregnant 6 times in a row. Mathematically, we can write: 

$$ Pr(Pregnant after 6 attempts) = 1 - Pr(Not Pregnant after 6 attempts) = 1 - (0.8)^6 = 0.738 = 73.8%

More generally, after x attempts, we can say:

$$ Pr(Pregnant after x attempts) = 1 - Pr(Not Pregnant after 6 attempts) = 1 - (1-p)^x $$