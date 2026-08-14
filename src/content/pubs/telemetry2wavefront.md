---
title: "Telemetry is a Sensor: Opportunistic Wavefront Estimation for the James Webb Space Telescope"
authors: ["Lahav Buzi", "Yoav Y. Schechner", "Aviad Levis", "Jason J. Wang"]
first_authors: ["Lahav Buzi"]
venue: ICCP
year: 2026
month: Aug
focusTags:
  - jwst
  - data-driven-dynamics
thumbnail: /images/pubs/telemetry2wavefront.png
arxiv: https://arxiv.org/abs/2608.07357
abstract: >
  Space telescopes maintain optical alignment through periodic, resource-intensive wavefront calibration, leaving the optical state unobserved between corrections. We propose treating onboard engineering telemetry as an opportunistic wavefront sensor. Specifically, the high-cadence thermal and pointing signals already recorded by the James Webb Space Telescope may suffice to recover spatially resolved optical path difference at nanometer precision, without dedicated measurements. Our framework uses a two-stage gradient boosting regressor. It predicts optical path difference residuals for each mirror segment in a low-dimensional principal component basis. The model is trained and evaluated using data captured on-orbit during six months. Based on this limited data, optical path difference inference has high statistical significance in 13 out of 18 mirror segments. In 6 mirror segments, the model achieves explained variance above 50%. These results demonstrate feasibility for telemetry-driven wavefront estimation as a low-overhead sensing modality. The study suggests a potential to support continuous monitoring and calibration scheduling for large segmented observatories.

bibtex: |
  @article{buzi2026telemetry,
    title={Telemetry is a Sensor: Opportunistic Wavefront Estimation for the James Webb Space Telescope},
    author={Buzi, Lahav and Schechner, Yoav Y. and Levis, Aviad and Wang, Jason J.},
    journal={arXiv preprint arXiv:2608.07357},
    year={2026}
  }
---
