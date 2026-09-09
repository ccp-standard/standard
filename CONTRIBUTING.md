# Contributing

The Cryptographic Control Plane reference architecture is published in the open. Contributions from cryptographers, security architects, compliance professionals, platform engineers and implementors are welcome.

Read [GOVERNANCE.md](GOVERNANCE.md) first for how this is stewarded today — briefly: by one person, in public, with no committee.

## The most valuable contribution

**A second, independent implementation.**

This architecture cannot be evaluated on one implementation, and the one that exists was built by the organization that wrote the document. An implementation by people who did not write it is what turns this into something that can be assessed at all — and it is worth considerably more than agreement.

Build against [the required capabilities](https://cryptographiccontrolplane.org/control-plane/#capabilities-required). Where this document turns out to be ambiguous, unimplementable or simply wrong, that is a finding worth having. Open an issue and it gets corrected in public.

After that: **disagreement on the substance** — the domain boundary, the required capability list, the maturity model, or the claim that governance can converge while cryptographic trust stays distributed.

## How to contribute

### GitHub Issues

Use [GitHub Issues](https://github.com/ccp-standard/standard/issues) to:

- Propose additions or modifications
- Report errors, ambiguities or inconsistencies
- Raise questions about scope, terminology or applicability
- Suggest new use cases or deployment patterns

### Pull Requests

For substantive changes to the document, the architecture definitions or supporting material:

1. Fork the repository
2. Create a feature branch (`feat/your-change-description`)
3. Make your changes with clear, descriptive commit messages
4. Submit a Pull Request against `main`

All changes are reviewed before merge, for technical accuracy, consistency with the architecture's principles, and clarity of expression. Every decision and its rationale is recorded publicly.

The site is plain static HTML with no build step, so a correction to a paragraph needs no toolchain.

## Open questions for community discussion

The following foundational questions are open. Each represents a design decision that will shape how this evolves, and the first two are the reason this material does not call itself a standard.

### 1. A CCP API specification

Should the community converge on a common wire protocol for CCP implementations? A standardized API specification would enable interoperability between implementations from different vendors, facilitate migration between platforms, and allow tooling ecosystems to develop around a common interface. The question is whether implementation approaches have matured enough to extract a meaningful common specification, or whether premature standardization would constrain the design space while there is still only one implementation to learn from.

**This is the artifact that would legitimately be a standard.** It does not exist.

### 2. Conformance and certification

What constitutes a conformant implementation, and who certifies it? This document defines architectural principles and required capabilities, but there is no conformance suite, no test harness and no certification body. Should there be? A self-assessment framework, a test suite, an independent certifier — each implies a different governance model, and each affects adoption and trust differently.

Until this is answered, listings are self-declared and the author of this document is explicitly not a neutral evaluator of the implementation he also builds.

### 3. Open-source reference implementation

Should there be an open-source implementation of the required capabilities, and under what governance? One would accelerate adoption, provide a testbed for the architecture, and lower the barrier for organizations evaluating the approach. It also raises questions about maintenance responsibility and the relationship between an open implementation and commercial offerings.

### 4. Integration with existing standards

How should this reference architecture relate to established cryptographic and key management standards? Relevant frameworks include NIST SP 800-57 (key management), NIST SP 800-131A (transitioning cryptographic algorithms), ETSI TS 119 312 (cryptographic suites), and ISO/IEC 19790 (cryptographic modules). This material should complement rather than duplicate them, but the precise integration points and normative references need community input.

Current position: the architecture scopes itself to application and data cryptography, and treats PKI, transport cryptography and key infrastructure as complementary rather than superseded.

### 5. Multi-cloud and hybrid deployment patterns

What are the recommended topologies for maintaining cryptographic sovereignty across multi-cloud and hybrid environments? Organizations increasingly operate across multiple cloud providers and on-premises infrastructure. This material should address how a Cryptographic Control Plane maintains consistent policy enforcement, key material sovereignty and audit integrity across heterogeneous environments.

Current position: governance must converge without requiring trust domains to be consolidated — *Centralized Governance, Distributed Trust*. The concrete topologies that satisfy this across specific provider combinations remain open.

## Versioning

Semantic versioning:

- **Patch** (0.1.0 → 0.1.1): editorial corrections, clarifications, typo fixes
- **Minor** (0.1 → 0.2): substantive additions, new sections, expanded definitions
- **Major** (0.x → 1.0): structural changes, changes to the required capabilities, breaking changes to the framework

The current version is **0.11** (Working Draft). A **1.0** release is not simply the next number: per [GOVERNANCE.md](GOVERNANCE.md) it requires participants that do not exist yet.

## Acknowledgment

Substantive contributors are acknowledged in the document and in `CHANGELOG.md`. By submitting a contribution, you agree to license your work under the same [CC BY 4.0](LICENSE) licence that governs this material.

## Code of conduct

All participants are expected to engage respectfully, constructively and in good faith. The goal is a rigorous, useful reference architecture that serves the global community. Technical disagreement is the point of this repository; personal attacks are not.
