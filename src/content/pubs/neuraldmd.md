---
title: "NeuralDMD: Interpretable Neural Representation of Dynamics from Sparse and Noisy Measurements"
authors: ["Ali SaraerToosi", "Renbo Tu", "Esther Y.H. Lin", "Kamyar Azizzadenesheli", "Aviad Levis"]
first_authors: ["Ali SaraerToosi", "Renbo Tu"]
venue: ECCV
year: 2026
month: Sep
focusTags:
  - eht
  - data-driven-dynamics
  - neural-reconstruction
  - differentiable-physics
  - black-holes-strong-gravity
  - earth-climate
thumbnail: /images/pubs/neuraldmd-eccv.png
project: https://neuraldmd.vercel.app/
arxiv: https://arxiv.org/abs/2507.03094
code: https://github.com/as2c/NeuralDMD
abstract: >
  Many challenges in scientific imaging involve solving ill-posed inverse problems, where the goal is to recover spatio-temporal fields from indirect, noisy, and highly sparse measurements - often without access to ground truth data or reliable simulators. To address this challenging scenario, we present NeuralDMD, an interpretable, untrained (per-instance) reconstruction framework that combines neural implicit representations with Dynamic Mode Decomposition (DMD) to reconstruct continuous spatio-temporal dynamics directly from measurements. NeuralDMD parameterizes DMD modes as continuous neural fields, and imposes a low-rank linear dynamics prior with spectral time evolution to enforce temporal continuity. This formulation enables both forecasting under sparsity, and yields interpretable modes and spectra. We find that NeuralDMD outperforms baselines on a wide variety of tasks: from weather data assimilation from sparse station observations to interferometric (Fourier domain) observations of Sagittarius A, the black hole at the center of our galaxy. Moreover, NeuralDMD remains stable when extrapolating into the future. While this framework is most naturally suited to linear dynamics, we show that it can be applied to nonlinear regimes, though with extrapolation performance that degrades with increasing nonlinearity. Together, these results show that NeuralDMD enables interpretable reconstruction and forecasting of spatio-temporal dynamics directly from sparse and indirect measurements without relying on numerical simulators or training data.
bibtex: |
  @inproceedings{saraertoosi2026neuraldmd,
    title={NeuralDMD: Interpretable Neural Representation of Dynamics from Sparse and Noisy Measurements},
    author={SaraerToosi, Ali and Tu, Renbo and Lin, Esther Y.H. and Azizzadenesheli, Kamyar and Levis, Aviad},
    booktitle={European Conference on Computer Vision},
    year={2026}
  }
---
