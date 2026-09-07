# Changelog

All notable changes to the Cryptographic Control Plane Standard will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.10.0] — 2026-09

Realignment of the standard with the second edition of the foundational whitepaper. This is a conceptual revision, not an editorial one: the architectural model, the pillar structure and the reference architecture all change.

### Added

- **Centralized Governance, Distributed Trust** as a core architectural principle — the Control Plane centralizes governance, not cryptographic custody, execution or Roots of Trust
- **Domain boundary** for the Control Plane — it governs application and data cryptography; it does not replace protocol and transport cryptography (TLS, QUIC, SSH, IPsec) and complements rather than replaces PKI and digital trust services
- **Enterprise Readiness** as the fifth CAPA pillar
- Explicit statement of the relationship between CAPA, the Cryptographic Control Plane and an implementation, including that the mapping between pillars and platform capabilities is **not one-to-one**
- Per-pillar core principles and fifteen "CAPA in practice" scenarios
- **Enterprise integration ecosystem** as a layer of the enterprise cryptographic stack
- Minimum capability requirement 05 — coordination across distributed trust infrastructure; a platform requiring all keys or Roots of Trust in a single provider, repository or cryptographic failure domain does not conform
- The distinction between governance convergence and infrastructure consolidation, as separate decisions on separate timelines
- The distinction between discovery (visibility) and control
- Greenfield/brownfield multi-level coexistence in the maturity model

### Changed

- **Site structure** — the single-page standard became seven pages, with a shared stylesheet and no build step
- **CAPA pillars 4 and 5** — "Policy-Driven Governance" and "Regulatory Compliance" merged into a single context-aware pillar, *Cryptographic Governance & Compliance*
- **Cryptographic Sovereignty** expanded from key ownership to three dimensions: sovereignty of trust, of cryptographic authority, and of choice — and stated explicitly not to require centralized key custody
- **Frictionless Modernization** re-centred on existing protected data whose originating applications may have changed or been retired, rather than on application migration
- **Enterprise cryptographic stack** expanded from four layers to six; PKI separated from HSM/KMS by function; "algorithm catalog" removed as a layer, being a platform property rather than an architectural one
- **Migration path** restated as three parallel tracks and five activities, replacing the four timeboxed phases
- **Maturity Level 5** rescoped from "full landscape / entire enterprise" to the relevant cryptographic landscape operating predominantly under the Control Plane
- Post-quantum cryptography repositioned throughout as the catalyst for the architectural change, not its destination

### Fixed

- CAPA expanded correctly as *Crypto Agility Posture **Architecture*** throughout; the README previously said "Posture Assessment"
- A second, incompatible maturity model (levels 0–5: Ad Hoc, Aware, Managed, Orchestrated, Adaptive, Autonomous) removed from the README and this changelog; the L1–L6 model is now the only one published
- Universal and absolute claims scoped to governed systems — instantaneous policy propagation, "every application", "all systems", "entire enterprise" and "full landscape" no longer appear
- Version state reconciled; the site previously asserted both 0.9 and 1.0 in different places
- Whitepaper reference updated; it previously stated the document would be available at a future date

## [0.9.0] — 2026-05

### Added

- Initial publication of the Cryptographic Control Plane Standard
- CAPA framework definition (5 pillars)
- CAPA Cryptographic Maturity Model (6 levels)
- Reference architecture for vendor-neutral CCP implementations
- Minimum capability requirements for conformant CCP implementations
- Open questions for community engagement (5 foundational topics)
- Contributing guidelines with versioning policy
- Project whitepaper reference
