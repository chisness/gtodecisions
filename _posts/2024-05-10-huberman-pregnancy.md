---
title: "Pregnancy Probability Starring Andrew Huberman"
date: 2025-05-10
sidebar:
  nav: "nav"
# toc: true
# toc_label: "TOC"
# toc_sticky: true
---
(Note that this is not expected value, but an important probability concept nonetheless.)

Is there a fertility crisis? Bryan Caplan suggests to [have more kids](https://www.amazon.com/Selfish-Reasons-Have-More-Kids/dp/0465028616) and recently posted [The Fertile Formula](https://www.betonit.ai/p/how-much-would-this-raise-fertility), an idea to reduce federal taxes based on how many kids you have, getting to income tax-free for life after six kids. Great deal! 

<p align="center">
<a href="https://www.amazon.com/Selfish-Reasons-Have-More-Kids/dp/0465028616"><img src="../assets/misc/bryancaplan.jpg" alt="Bryan Caplan Selfish Reasons to Have More Kids" width="300"/></a></p>

If you were guaranteed a pregnancy after five attempts, it would be an even better deal! Which is what Andrew Huberman was implying while discussing pregnancy probabilities in a recent video: 

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Andrew Huberman says that having sex 6 times gives you a 120% chance of getting pregnant<br><br>Multiply that by his 6 girlfriends and we have a 120% chance of having 36 Hubermans after 6 years<br><br>Population crisis solved <a href="https://t.co/m1u5qgmwUJ">https://t.co/m1u5qgmwUJ</a></p>&mdash; BuccoCapital Bloke (@buccocapital) <a href="https://twitter.com/buccocapital/status/1788575303889035600?ref_src=twsrc%5Etfw">May 9, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

He was specifically talking about cumulative probabilities and he said that if the 
$ \Pr(\text{Pregnancy}) = 0.2 $, then the $ \Pr(\text{Pregnancy}) $ after $ 6 $ attempts is $ 1.2 $. 

In other words, he did this: 

$$
\begin{equation}
\begin{split}
\Pr(\text{Preg after 6 attempts}) &= 6 * \Pr(\text{Preg after 1 attempt}) \\
  &= 6 * 0.2 \\
  &= 1.2
\end{split}
\end{equation}
$$

There are many issues here. Importantly, since probabilities are by definition between $0$ and $1$, he clearly made an error. He since posted a [Twitter correction](https://twitter.com/hubermanlab/status/1788964558758965281) and has updated the original videos. 

We're not here to critique an error, but rather to **LEARN PROBABILITY**! So how DO you calculate this probability? 

Well we know that $ \Pr(\text{Pregnancy}) = 0.2 $. We'll define this as $ p = 0.2 $. 

We also know that $ \Pr(\text{No Pregnancy}) = 1 - p = 1 - 0.2 = 0.8 $. 

So after 6 attempts, we can say that the $ \Pr(\text{Preg after 6 attempts}) $ is equal to the inverse of the probability of *not* getting pregnant 6 times in a row. Mathematically, we can write: 

$$
\begin{equation}
\begin{split}
\Pr(\text{Preg after 6 attempts}) &= 1 - \Pr(\text{Not Preg after 6 attempts}) \\
  &= 1 - (0.8)^6 \\
  &= 0.738 \\
  &= 73.8\%
\end{split}
\end{equation}
$$

Why is it $ 1 - (0.8)^6 $? This is because when we are calculating probabilities involving independent events, they are multiplied. Each case of not becoming pregnant has an independent probability of $ 0.8 $. Multiplying this 6 times gets us the probability of *not* being pregnant after 6 attempts. So to get the probability *of* being pregnant after 6 attempts, we take 1 minus this, therefore getting $ 1 - (0.8)^6 $. 

More generally, after $ x $ attempts, we can say:

$$
\begin{equation}
\begin{split}
\Pr(\text{Preg after x attempts}) &= 1 - \Pr(\text{Not Preg after x attempts}) \\
  &= 1 - (1-0.2)^x \\
  &= 1 - (0.8)^x
\end{split}
\end{equation}
$$

So assuming that $ \Pr(\text{Pregnancy}) = 0.2 $, when are you $ 99\% $ to be pregnant? 

$$
\begin{equation}
\begin{split}
 0.99 &= 1 - \Pr(\text{Not Preg after x attempts}) && \text{Set pregnancy likelihood to} 0.99 \\
      &= 1 - (0.8)^x && \text{Use equation from above} \\
  0.99 + (0.8)^x &= 1 && \text{Add} 0.8^x \text{to both sides} \\
  (0.8)^x &= 0.01 && \text{Subtract} 0.99 \text{from both sides} \\
  x &= 20.64 && \text{Use calculator to solve}
\end{split}
\end{equation}
$$

Therefore after **21** pregnancy attempts where each attempt has a 20% likelihood, your cumulative likelihood of being pregant exceeds 99%. (We round up from 20.64 because each one is discrete and after 20 the probability would be under 99%, so only after 21 does it exceed 99%.)

We can see this on the graph below where $ \Pr(\text{Pregnancy}) = 0.2 $. The x-axis is the number of attempts and the y-axis is the cumulative (overall) probability of pregnancy after that many attempts. Note that the graph approaches, but will never exceed the probability of 1. 

![Pregnancy graph with p = 0.2](../assets/misc/preggraph.png)

Finally, even more generally, we can say that after $ x $ attempts and the more general $ \Pr(\text{Pregnancy}) = p $ (i.e. using probability $p$ instead of $0.2$): 

$$
\begin{equation}
\begin{split}
\Pr(\text{Preg after x attempts}) &= 1 - \Pr(\text{Not Preg after x attempts}) \\
  &= 1 - (1-p)^x \\
\end{split}
\end{equation}
$$