---
title: "Video reconstruction of variable VLBI observations with neural fields"
authors: ["Marianna Foschi", "Brandon Zhao", "Antonio Fuentes", "Katherine L. Bouman", "José L. Gómez", "Aviad Levis"]
first_authors: ["Marianna Foschi", "Brandon Zhao", "Antonio Fuentes"]
venue: Nature
year: 2026
month: Aug
featured: true
focusTags:
  - eht
  - data-driven-dynamics
  - neural-reconstruction
  - black-holes-strong-gravity
thumbnail: /images/pubs/kine-3c345-cropped.gif
teaser: /images/pubs/kine-3c345-polarization.gif
project: https://www.nature.com/articles/s41586-026-10988-5
projectLabel: paper
press: https://www.nature.com/articles/d41586-026-02522-4
pressLabel: Nature editorial
code: https://github.com/mariannafoschi/kine3c345/
bibtex: |
  @article{foschi2026video,
    title={Video reconstruction of variable VLBI observations with neural fields},
    author={Foschi, Marianna and Zhao, Brandon and Fuentes, Antonio and Bouman, Katherine L. and G\'{o}mez, Jos\'{e} L. and Levis, Aviad},
    journal={Nature},
    year={2026},
    doi={10.1038/s41586-026-10988-5},
    url={https://doi.org/10.1038/s41586-026-10988-5}
  }
---

Supermassive black hole accretion and the ejection of collimated, relativistic jets of plasma are intrinsically dynamic processes shaped by large-scale magnetic fields<sup><a href="https://doi.org/10.1093/mnras/179.3.433">1</a>,<a href="https://doi.org/10.1093/mnras/199.4.883">2</a>,<a href="https://doi.org/10.1093/pasj/55.6.L69">3</a>,<a href="https://doi.org/10.1111/j.1745-3933.2011.01147.x">4</a></sup>. Various algorithms have been developed to image these objects at different scales using radio interferometric observations<sup><a href="https://ui.adsabs.harvard.edu/abs/1974A%26AS...15..417H/abstract">5</a>,<a href="https://doi.org/10.1051/0004-6361/201323094">6</a>,<a href="https://doi.org/10.3847/1538-4357/aab6a8">7</a>,<a href="https://doi.org/10.21105/joss.04457">8</a></sup>. However, there is a lack of imaging methods that can robustly resolve the temporal variability of the sources at high resolution. Here we present kine, a video reconstruction algorithm for very long baseline interferometry observations of variable sources. The kine algorithm uses a neural representation<sup><a href="https://doi.org/10.1111/cgf.14505">9</a></sup> of the video to simultaneously process observations at different times, while learning and leveraging the spatio-temporal correlations present in the data. The algorithm reconstructs polarimetric time-continuous videos from single observations of fast-varying sources, such as horizon-scale observations of Sagittarius A* with the Event Horizon Telescope, or from repeated observations of slowly varying sources. In this work, we demonstrate the latter case, applying kine to multi-epoch Very Long Baseline Array observations of blazar 3C 345 (ref. <sup><a href="https://doi.org/10.3847/1538-4365/aa9c44">10</a></sup>). The time continuity of the video, combined with the resolution and dynamic range improvement achieved over traditional methods, enables the measurement of the local, instantaneous velocity of the plasma in the jet, in contrast to previous methods that track only discrete components. The proposed algorithm and methodology provide a transformative tool for kinematic jet analysis and can be applied to entire monitoring programs, providing a complete kinematic description of hundreds of sources, possibly leading to a reinterpretation of established models.
