---
title: "BHCast: Unlocking Black Hole Plasma Dynamics from a Single Blurry Image with Long-Term Forecasting"
authors: ["Renbo Tu", "Ali SaraerToosi", "Nicholas S. Conroy", "Gennady Pekhimenko", "Aviad Levis"]
first_authors: ["Renbo Tu"]
venue: CVPR
year: 2026
focusTags:
  - eht
  - differentiable-physics
  - neural-reconstruction
  - black-holes-strong-gravity
thumbnail: /images/pubs/bhcast-teaser.gif
teaser: /images/pubs/bhcast-teaser.gif
project: https://bhcast.cs.toronto.edu
pdf: https://arxiv.org/pdf/2603.26777
code: https://github.com/pi-vision/bhcast-release
video: https://www.youtube.com/watch?v=1i3fB-a1hE0

abstract: >
  The Event Horizon Telescope (EHT) delivered the first image of a black hole by capturing the light from its surrounding accretion flow, revealing structure but not dynamics. Simulations of black hole accretion dynamics are essential for interpreting EHT images but costly to generate and impractical for inference. Motivated by this bottleneck, BHCast presents a framework for forecasting black hole plasma dynamics from a single, blurry snapshot, such as those captured by the EHT. At its core, BHCast is a neural model that transforms a static image into forecasted future frames, revealing the underlying dynamics hidden within one snapshot. With a multi-scale pyramid loss, we demonstrate how autoregressive forecasting can simultaneously super-resolve and evolve a blurry frame into a coherent, high-resolution movie that remains stable over long time horizons. From forecasted dynamics, we can then extract interpretable spatio-temporal features, such as pattern speed (rotation rate) and pitch angle. Finally, BHCast uses gradient-boosting trees to recover black hole properties from these plasma features, including the spin and viewing inclination angle. The separation between forecasting and inference provides modular flexibility, interpretability, and robust uncertainty quantification. We demonstrate the effectiveness of BHCast on simulations of two distinct black hole accretion systems, Sagittarius A* and M87*, by testing on simulated frames blurred to EHT resolution and real EHT images of M87*. Ultimately, our methodology establishes a scalable paradigm for solving inverse problems, demonstrating the potential of learned dynamics to unlock insights from resolution-limited scientific data.
bibtex: |
  @article{tu2026bhcast,
    title={BHCast: Unlocking Black Hole Plasma Dynamics from a Single Blurry Image with Long-Term Forecasting},
    author={Tu, Renbo and SaraerToosi, Ali and Conroy, Nicholas S and Pekhimenko, Gennady and Levis, Aviad},
    journal={arXiv preprint arXiv:2603.26777},
    year={2026}
  }
---
