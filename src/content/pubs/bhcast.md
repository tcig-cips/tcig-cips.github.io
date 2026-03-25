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
abstract: >
  The Event Horizon Telescope (EHT) delivered the first image of a black hole by capturing the light from its surrounding accretion flow, revealing structure but not dynamics. Simulations of black hole accretion dynamics are essential for interpreting EHT images, though they are costly to generate and impractical for inference, as exploring many physical configurations remains computationally intractable. Consequently, EHT analyses often resort to comparing observations with libraries of precomputed models. Motivated by this bottleneck, BHCast presents a framework for forecasting black hole plasma dynamics from a single, blurry image, as those captured by the EHT. At its core, BHCast is a neural model that transforms a static image into forecasted future frames, revealing the underlying dynamics hidden within one snapshot. With a multi-scale pyramid loss, we demonstrate how autoregressive prediction can simultaneously super-resolve and evolve a blurry frame into a coherent, high-resolution movie that remains stable over long time horizons. By forecasting dynamics as a first step, we can then extract interpretable spatio-temporal features, such as pattern speed (rotation rate) and pitch angle. This two-step approach makes BHCast more versatile and interpretable than direct inference of such features. Finally, BHCast uses gradient-boosting trees to recover black hole properties from these plasma features, including the spin and viewing inclination angle. We demonstrate the effectiveness of BHCast on simulations of two distinct black hole accretion systems, Sagittarius A* and M87*, by testing on simulated frames blurred to EHT resolution. In addition, we show an application of our forecaster on real EHT images of M87*.

---
