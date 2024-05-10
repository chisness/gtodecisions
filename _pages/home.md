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

**Pregnancy Probability Starring Andrew Huberman**

(Note that this is not expected value, but an important probability concept nonetheless.)

Is there a fertility crisis? Bryan Caplan suggests to [have more kids](https://www.amazon.com/Selfish-Reasons-Have-More-Kids/dp/0465028616) and recently posted [The Fertile Formula](https://www.betonit.ai/p/how-much-would-this-raise-fertility), an idea to reduce federal taxes based on how many kids you have, getting to income tax-free for life after six kids. Great deal! 

[![Bryan Caplan Selfish Reasons to Have More Kids](../assets/bryancaplan.jpg)]

If you were guaranteed a pregnancy after five attempts, it would be an even better deal! Which is what Andrew Huberman was implying while discussing pregnancy probabilities in a recent video: 

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Andrew Huberman says that having sex 6 times gives you a 120% chance of getting pregnant<br><br>Multiply that by his 6 girlfriends and we have a 120% chance of having 36 Hubermans after 6 years<br><br>Population crisis solved <a href="https://t.co/m1u5qgmwUJ">https://t.co/m1u5qgmwUJ</a></p>&mdash; BuccoCapital Bloke (@buccocapital) <a href="https://twitter.com/buccocapital/status/1788575303889035600?ref_src=twsrc%5Etfw">May 9, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

He was specifically talking about cumulative probabilities and he said that if the 
$ \Pr(\text{Pregnancy}) = 0.2 $, then the $ \Pr(\text{Pregnancy}) $ after 6 attempts is $ 1.2 $. 

In other words, he did this: 

$$
\begin{equation}
\begin{split}
\Pr(\text{Pregnant after 6 attempts}) &= 6 * \Pr(\text{Pregnant after 1 attempt}) \\
  &= 6 * 0.2 \\
  &= 1.2
\end{split}
\end{equation}
$$

There are many issues here. Importantly, since probabilities are by definition between 0 and 1, he clearly made an error. He since posted a [Twitter correction](https://twitter.com/hubermanlab/status/1788964558758965281) and has updated the original videos. 

We're not here to critique an error, but rather to LEARN PROBABILITY! So how DO you calculate this probability? 

Well we know that $ \Pr(\text{Pregnancy}) = 0.2 $. We'll define this as $ p = 0.2 $. We also know that $ \Pr(\text{No Pregnancy}) = 1 - p = 1 - 0.2 = 0.8 $. 

So after 6 attempts, we can say that the $ \Pr(\text{Pregnant after 6 attempts}) $ is equal to the inverse of the probability of *not* getting pregnant 6 times in a row. Mathematically, we can write: 

$$
\begin{equation}
\begin{split}
\Pr(\text{Pregnant after 6 attempts}) &= 1 - \Pr(\text{Not Pregnant after 6 attempts}) \\
  &= 1 - (0.8)^6 \\
  &= 0.738 \\
  &= 73.8\%
\end{split}
\end{equation}
$$

Why is it $ 1 - (0.8)^6 $? This is because when we are calculating probabilities involving independent events, they are multiplied. Each case of not becoming pregnant has an independent probability of $ 0.8 $. Multiplying this 6 times gets us the probability of *not* being pregnant after 6 attempts. So to get the probability *of* being pregnant after 6 attempts, we take $ 1 $ minus this, therefore getting $ 1 - (0.8)^6 $. 

More generally, after $ x $ attempts, we can say:

$$
\begin{equation}
\begin{split}
\Pr(\text{Pregnant after 6 attempts}) &= 1 - \Pr(\text{Not Pregnant after 6 attempts}) \\
  &= 1 - (1-p)^x
\end{split}
\end{equation}
$$