# Changelog

All notable changes to the Cryptographic Control Plane reference architecture will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.10.0] — 2026-09

Two changes in one release. The material is realigned with the second edition of the foundational whitepaper, and it stops calling itself a standard. Both are conceptual revisions rather than editorial ones: the architectural model, the pillar structure, the reference architecture and the positioning all change.

### Repositioned

- **This is a reference architecture, not a standard.** The material had been published as the *CCP Standard* — a claim the foundational whitepaper never makes. Measured against the V2 text: zero self-referential uses of the word, which appears 45 times and always for external standards. The whitepaper calls the Cryptographic Control Plane *an architectural layer* and CAPA *a framework*; the site now says the same.
- **The word “standard” is reserved** for an interoperability specification and a conformance suite that do not exist — Open Questions 1 and 2. Neither ratification nor de-facto adoption has occurred.
- **All claims of evaluation and certification removed.** The required capabilities are kept, stated normatively so they are precise to build against, with an explicit statement that no conformance suite, test harness or certification body exists and that listings are self-declared.
- **ANKASecure© relabelled** from *reference implementation* to *originating implementation*, with shared authorship stated as a limitation rather than a credential.
- **Governance replaced by stewardship.** The previous document described maintainers, steering-committee seats, lazy consensus and 14-day review windows for a body with no members. It now declares the actual state — zero maintainers, no committee, one author — and keeps the structure as a forward commitment with named triggers.
- **Authorship made explicit**: Javier Galindo, ANKATech Solutions INC.
- **Primary domain** is now `cryptographiccontrolplane.org`; `ccp-standard.org`, `ccpstandard.org` and `ccp-architecture.org` redirect to it.

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

- **Site structure** — the single page became seven, with a shared stylesheet and no build step
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
