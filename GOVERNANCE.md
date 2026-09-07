# Governance of the CCP Standard

The Cryptographic Control Plane (CCP) Standard is an open, vendor-neutral
architectural standard. This document defines how the standard is governed, how
decisions are made, and how individuals and organizations participate in its
evolution.

The guiding principle is **vendor neutrality**: no single organization — including
the founding contributor — controls the standard. Authority rests with the
community of contributors and a Steering Committee whose seats are open to any
participating organization.

## Roles

### Contributors

Anyone who engages with the standard — by opening an issue, joining a discussion,
or submitting a pull request — is a contributor. There is no membership barrier.
Contributions are licensed under CC BY 4.0 (see `CONTRIBUTING.md`).

### Maintainers

Maintainers triage issues, review pull requests, and shepherd changes through the
RFC process. Maintainers are appointed by the Steering Committee based on a record
of sustained, high-quality contribution. Maintainership is **personal**, not
tied to an employer, and is not exclusive to any one organization.

A contributor may be proposed for maintainership by any existing maintainer or
Steering Committee member after a meaningful track record of accepted
contributions. Appointment requires Steering Committee approval (see Decision
Making).

### Steering Committee

The Steering Committee (SC) sets direction, ratifies normative changes, appoints
maintainers, and safeguards the neutrality of the standard. 

- **Seats are open to organizations**, not reserved for the founding contributor.
  Any organization that demonstrates sustained engagement may request a seat.
- **No single organization may hold a majority of seats.** If contributions would
  lead to one organization controlling a majority, additional independent seats
  are sought before further normative changes are ratified.
- The founding contributor (ANKATech Solutions INC) holds **one** seat, equal to
  any other member.

The SC publishes its membership and meeting cadence. Until the SC reaches at least
three independent organizations, the standard remains a **Working Draft** (current
version 0.10) and is not promoted to a stable 1.0 release.

## Decision Making

The standard uses **lazy consensus**: a proposal is accepted if no maintainer or SC
member raises a substantive, unresolved objection within the stated review window.

- **Editorial changes** (typos, clarifications): a single maintainer approval.
- **Substantive changes** (new sections, definitions, capability requirements):
  the RFC process below, with at least two maintainer approvals and no SC
  objection.
- **Normative/breaking changes** (changes to conformance requirements, the CAPA
  framework, or the maturity model): RFC process plus explicit SC ratification by
  simple majority of seated members.

Decisions and their rationale are recorded publicly in the repository.

## The RFC Process

Substantive and normative changes follow a lightweight Request for Comments flow:

1. **Propose** — open a GitHub Discussion or Issue describing the problem and the
   proposed change.
2. **Draft** — submit a pull request with the concrete text change, referencing the
   discussion.
3. **Review** — a public review window (default 14 days) for comment from
   maintainers, SC members, and the community.
4. **Decide** — accepted by lazy consensus / the approval rules above, or sent back
   with documented reasons.
5. **Record** — merged change is reflected in `CHANGELOG.md` with attribution.

## Founding Contributor

The CCP Standard was initiated by **ANKATech Solutions INC**, which authored the
initial draft and maintains **ANKASecure©** as a reference implementation. ANKATech
participates as a **founding contributor and one Steering Committee member among
equals**. It does not hold special authority over the standard's content,
direction, or conformance definitions. The standard is published independently of
any implementation under CC BY 4.0.

## Becoming Involved

- Join a discussion or open an issue: <https://github.com/ccp-standard/standard>
- Request a Steering Committee seat for your organization: standard@ccp-standard.org
- Read `CONTRIBUTING.md` for the contribution and RFC mechanics.

## Amending This Document

Changes to governance follow the normative-change path: RFC plus Steering Committee
ratification by simple majority. The goal is stability and trust; governance is not
changed lightly.
