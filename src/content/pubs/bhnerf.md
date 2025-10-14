---
title: Gravitationally Lensed Black Hole Emission Tomography
authors: ["Aviad Levis", "Pratul P. Srinivasan", "Andrew A. Chael", "Ren Ng", "Katherine L. Bouman"]
first_authors: ["Aviad Levis"]
venue: CVPR
year: 2022
month: March                 # optional, for sorting
thumbnail: /images/pubs/bhnerf.gif   # or teaser: for the larger detail image/gif
teaser: /images/pubs/bhnerf.gif       # optional preferred media for detail page
youtube: eFPmShxhtg0        # OR: video: https://www.youtube.com/watch?v=dQw4w9WgXcQ
project: https://imaging.cms.caltech.edu/bhnerf/
pdf: http://imaging.cms.caltech.edu/bhnerf/CVPR2022_main.pdf
code: https://github.com/aviadlevis/bhnerf
abstract: >
  Measurements from the Event Horizon Telescope enabled the visualization of light emission around a black hole for the first time. So far, these measurements have been used to recover a 2D image under the assumption that the emission field is static over the period of acquisition. In this work, we propose BH-NeRF, a novel tomography approach that leverages gravitational lensing to recover the continuous 3D emission field near a black hole. Compared to other 3D reconstruction or tomography settings, this task poses two significant challenges: first, rays near black holes follow curved paths dictated by general relativity, and second, we only observe measurements from a single viewpoint. Our method captures the unknown emission field using a continuous volumetric function parameterized by a coordinate-based neural network, and uses knowledge of Keplerian orbital dynamics to establish correspondence between 3D points over time. Together, these enable BH-NeRF to recover accurate 3D emission fields, even in challenging situations with sparse measurements and uncertain orbital dynamics. This work takes the first steps in showing how future measurements from the Event Horizon Telescope could be used to recover evolving 3D emission around the supermassive black hole in our Galactic center.
bibtex: |
  @inproceedings{levis2022gravitationally,
    title={Gravitationally lensed black hole emission tomography},
    author={Levis, Aviad and Srinivasan, Pratul P and Chael, Andrew A and Ng, Ren and Bouman, Katherine L},
    booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
    pages={19841--19850},
    year={2022}
  }
---
