---
title: "Dynamic Black-hole Emission Tomography with Physics-informed Neural Fields"
authors: ["Berthy T. Feng", "Andrew A. Chael", "David Bromley", "Aviad Levis", "William T. Freeman", "Katherine L. Bouman"]
first_authors: ["Berthy T. Feng"]
venue: CVPR
year: 2026
focusTags:
  - eht
  - differentiable-physics
  - neural-reconstruction
  - black-holes-strong-gravity
thumbnail: /images/pubs/pidef.png
youtube: dpsHZijwHw4        # OR: video: https://www.youtube.com/watch?v=dQw4w9WgXcQ
project: https://imaging.cms.caltech.edu/pidef/
pdf: https://arxiv.org/pdf/2602.08029
code: https://github.com/berthyf96/pidef
abstract: >
  With the success of static black-hole imaging, the next frontier is the dynamic and 3D imaging of black holes. Recovering the dynamic 3D gas near a black hole would reveal previously-unseen parts of the universe and inform new physics models. However, only sparse radio measurements from a single viewpoint are possible, making the dynamic 3D reconstruction problem significantly ill-posed. Previously, BH-NeRF addressed the ill-posed problem by assuming Keplerian dynamics of the gas, but this assumption breaks down near the black hole, where the strong gravitational pull of the black hole and increased electromagnetic activity complicate fluid dynamics. To overcome the restrictive assumptions of BH-NeRF, we propose PI-DEF, a physics-informed approach that uses differentiable neural rendering to fit a 4D (time + 3D) emissivity field given EHT measurements. Our approach jointly reconstructs the 3D velocity field with the 4D emissivity field and enforces the velocity as a soft constraint on the dynamics of the emissivity. In experiments on simulated data, we find significantly improved reconstruction accuracy over both BH-NeRF and a physics-agnostic approach. We demonstrate how our method may be used to estimate other physics parameters of the black hole, such as its spin.
bibtex: |
  @inproceedings{levis2022gravitationally,
    title     = {Dynamic Black-hole Emission Tomography with Physics-informed Neural Fields},
    author    = {Berthy T. Feng, Andrew A. Chael, David Bromley, Aviad Levis, William T. Freeman, Katherine L. Bouman},
    booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
    year={2026}
  }


---
