# The Cryptographic Control Plane

**A Reference Architecture for Continuous Cryptographic Evolution**

![Version](https://img.shields.io/badge/version-0.11-blue) ![Status](https://img.shields.io/badge/status-Working%20Draft-orange) ![Type](https://img.shields.io/badge/type-Reference%20Architecture-lightgrey) ![License](https://img.shields.io/badge/license-CC%20BY%204.0-green)

Authored by **Javier Galindo** · ANKATech Solutions INC · javier@cryptographiccontrolplane.org

**Live site:** [https://cryptographiccontrolplane.org](https://cryptographiccontrolplane.org)

---

## Where this stands

A reference architecture, published in the open for critique. It describes how cryptographic governance can be separated from application implementation.

The word **standard** is reserved for what would earn it — the interoperability specification and conformance suite described in Open Questions 1 and 2.

Authored by Javier Galindo at ANKATech Solutions INC. ANKASecure© is the first implementation, built by that same organization — which is why implementations from others are the contribution this most needs. The rest is in [GOVERNANCE.md](GOVERNANCE.md).

## Overview

Modern enterprises face an unprecedented cryptographic challenge. The transition to post-quantum cryptography, evolving compliance mandates and the proliferation of cryptographic dependencies across distributed systems demand a different operational model — one where cryptography is managed as infrastructure rather than embedded as code.

This reference architecture defines the **Cryptographic Control Plane**: an architectural layer that decouples cryptographic policy and lifecycle management from application implementation. Applications express cryptographic intent; infrastructure governs how that intent is fulfilled according to policy and context.

### Three things, related but distinct

They are frequently used interchangeably. They are not the same.

| | What it is |
|---|---|
| **CAPA** — Crypto Agility Posture Architecture | The framework defining the organizational and architectural **capabilities** required to establish and sustain a governed cryptographic posture. |
| **Cryptographic Control Plane** | The **architectural model** through which cryptographic intent, policy, lifecycle, trust, execution and modernization are governed independently from individual application implementations. |
| **An implementation** | A platform that operationalizes that architecture. ANKASecure© is one. |

The relationship between CAPA pillars and platform capabilities is **not one-to-one**: a single capability may contribute to several pillars, and each pillar may depend on several capabilities.

### Centralized Governance, Distributed Trust

The Control Plane centralizes **governance** — not cryptographic custody, not execution, and not Roots of Trust. An enterprise may deliberately operate multiple HSMs, multiple KMS platforms, cloud and on-premises infrastructure, several providers, regions, jurisdictions and independent trust domains. The Control Plane provides a common governance layer across them without requiring consolidation.

Centralized governance must not become centralized cryptographic risk.

### Scope boundary

The Control Plane governs **application and data cryptography**. It does not replace protocol and transport cryptography (TLS, QUIC, SSH, IPsec), which evolves through its own protocols and implementations, and it complements rather than replaces PKI and digital trust services.

## CAPA — the five pillars

1. **Crypto-Agility** — *Cryptographic change without application change.*
2. **Cryptographic Sovereignty** — *Retain control of cryptographic trust, choice and authority wherever your data operates.*
3. **Frictionless Modernization** — *Modernize the cryptography protecting your data, without recreating the data or rewriting the applications.*
4. **Cryptographic Governance & Compliance** — *Turn cryptographic requirements into enforceable policy and verifiable evidence.*
5. **Enterprise Readiness** — *Cryptographic infrastructure must interoperate with the enterprise, not require the enterprise to adapt around it.*

## Maturity model

Six levels of organizational cryptographic capability:

| Level | Name | Description |
|-------|------|-------------|
| L1 | Embedded Cryptography | Cryptographic logic embedded in application code; changes require redeployment |
| L2 | Managed Cryptography | Key protection centralized (HSM, KMS); cryptographic behaviour still coupled to applications |
| L3 | Cryptographic Control Plane | The architectural inflection point — policy can be acted on without modifying governed applications |
| L4 | Cryptographic Agility | Coverage expanded across critical systems; brownfield migration advanced |
| L5 | Optimized Cryptography | The relevant cryptographic landscape operates predominantly under the Control Plane |
| L6 | Continuous Crypto Evolution | Cryptographic evolution embedded in normal operating practice |

Two principles underpin it. Maturity is measured by **capability today**, not by how much legacy migration remains pending. And **post-quantum cryptography is not a level** — it is a dimension that improves at every level, adoptable from the moment a Control Plane is deployed.

## Migration

Three tracks run in parallel from day one: **greenfield** (all new applications), **brownfield critical** (the five to ten highest-risk applications, analysed immediately without waiting for the full inventory) and **brownfield general** (the remaining landscape, phased by risk).

Two distinctions matter: discovery produces **visibility**, not control; and governance convergence is a separate decision from infrastructure consolidation.

## Contributing

The most valuable contribution is **an implementation**. After that, disagreement on the substance.

- Read [GOVERNANCE.md](GOVERNANCE.md) for how this is stewarded today
- Read [CONTRIBUTING.md](CONTRIBUTING.md) for the mechanics
- Open a [GitHub Issue](https://github.com/ccp-standard/standard/issues)
- Review the [Changelog](CHANGELOG.md) for version history

Five foundational questions are open for community discussion. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Repository layout

The site is plain static HTML served directly by GitHub Pages — there is no build step, so a contributor can correct a paragraph without a toolchain.

```
index.html               The thesis
control-plane/           Definition, domain boundary, six-layer stack, required capabilities
capa/                    The five pillars and their practice scenarios
maturity/                The six-level maturity model
migration/               Three tracks, five activities
implementations/         Implementations and how they are listed
about/                   Current state, open questions, document history
assets/ccp.css           Shared stylesheet
assets/legacy-anchors.js Redirects for pre-0.10 single-page anchors
docs/whitepaper.md       The foundational whitepaper
```

## Licence

Licensed under [CC BY 4.0](LICENSE). Free to share and adapt for any purpose, with attribution.

## Provenance

The Cryptographic Control Plane concept and the CAPA framework were developed at **ANKATech Solutions INC** through research and product development in post-quantum cryptography. The foundational whitepaper — *The Cryptographic Control Plane: A New Architecture for Continuous Cryptographic Evolution* — is the source document; where the two differ in wording, the whitepaper governs.
