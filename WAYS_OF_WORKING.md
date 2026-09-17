# Ways of Working

## Product truth comes first

The production PedalFish application is the source of truth for what PedalFish does. Marketing may make the product easier to understand and visually presentable, but it must not invent capabilities, workflows, customer claims, integrations, results, or maturity that do not exist.

## Never commit production customer data

Do not commit raw production screenshots or other artifacts containing real customer information to this repository, even while the repository is private.

Public-facing product imagery must use synthetic customer identities and sanitized operational data. This includes names, phone numbers, email addresses, addresses, notes, and any other identifying information.

Synthetic data should still be operationally believable and should preserve real PedalFish workflow semantics.

## Use the real PedalFish brand

Use the actual PedalFish logo and approved brand assets. Do not substitute AI-generated approximations of the logo or silently adopt generated taglines, wordmarks, or brand elements.

## Avoid generic SaaS marketing

PedalFish should look and sound grounded in bicycle service and independent-shop work. Avoid generic blue/purple SaaS gradients, interchangeable card grids, empty automation claims, fake testimonials, and copy that could plausibly appear unchanged on hundreds of unrelated software sites.

A useful test: **Could this exact copy or design appear on 500 other AI-generated SaaS websites? If yes, reconsider it.**

A second test: **If the PedalFish logo disappeared, would someone still suspect this was PedalFish?** The long-term answer should be yes.

## PedalFish visual design language

### Serious software. Not a serious personality.

Operational information must remain trustworthy, legible, calm, and useful. Jobs, money, customer commitments, parts, and repair records are not jokes. The brand and the world surrounding that information can have substantially more personality.

### A little absurdity belongs here

PedalFish is deliberately an absurd name: a fish riding a bicycle, with a second reference to work moving through swimlanes. Do not hide that behind generic B2B design. Fish, bicycles, motion, swimming, lanes, workshop artifacts, and occasional visual jokes are legitimate ingredients when used selectively.

### The shop, not the SaaS dashboard

Draw visual vocabulary from real bicycle-shop culture: repair tags, grease-pencil marks, masking tape, work orders, parts bins, mechanic notes, stickers, tool drawers, bike colors, handwritten annotations, and the physical evidence of work being done. Abstract these ideas rather than recreating them literally or skeuomorphically.

### Organized does not mean rectangular

Do not solve every information problem with another white card containing another form. Prefer whitespace, typography, dividers, progressive disclosure, spatial grouping, timelines, status treatments, and strong hierarchy before adding another box. **Cards should mean something.**

This principle applies to both the marketing site and, over time, the PedalFish application itself. The product should develop a recognizable visual language rather than feeling like a collection of forms.

### Show the work moving

PedalFish is fundamentally about work progressing through a shop. The swimlane idea embedded in the name gives us permission to use lines, paths, arrows, stages, transitions, and motion as recurring visual language. The marketing site should feel more like following work through a shop than scrolling through a list of feature sections.

### Human marks over AI polish

Prefer selective imperfection and evidence of human hands: handwritten annotations, imperfect arrows, notes, stamps, labels, screen-print-like texture, and small visual interruptions. Avoid interchangeable AI/SaaS visual tropes such as glowing orbs, generic 3D illustrations, immaculate floating card piles, and decorative gradients with no relationship to the product.

### The fish earns the right to appear

The fish may become a recurring visual character, but not a cute corporate SaaS mascot pasted everywhere. The official logo remains stable. The broader visual world may use fish-on-bike artwork and other strange variations more like recurring art from an indie band, bike brand, skate company, zine, or screen-printed poster. The joke is stronger when it is not overused or explained.

### Do not make PedalFish whimsical. Make it a little weird.

The desired reference point is not childish whimsy or forced corporate fun. PedalFish can borrow energy from indie posters, zines, screen printing, bicycle culture, music art, stickers, and other handmade visual traditions. The product itself stays usable and credible; the brand is allowed to be surprising, odd, irreverent, and memorable.

The useful tension is:

**Bike-shop utility ← PedalFish → indie poster / zine / record art**

The application should sit closer to utility because people must use it all day. The marketing site and broader brand can pull considerably farther toward the expressive side.

## Show the real workflow

Prefer product evidence over abstract feature claims. The current service-story spine is:

**Take it in → See what's next → Do the work → Close the loop**

Candidate real surfaces include Intake/Intake Acknowledgement, Shop View, active Job Detail, and Completed Work Summary.

Use a small canonical synthetic dataset so the same fictional customer, bike, repair, services, and job state can continue across multiple marketing images.

## Device context is optional, not decoration everywhere

An iPad presentation can be useful because PedalFish is used at the counter and on the shop floor. Use device/shop context where it makes the product tangible, especially near the top of the site. Use larger clean product crops farther down the page when people need to see the interface clearly. Do not put every product image inside a device frame.

## Keep the marketing codebase independent

This repository owns the marketing website only. Do not share PedalFish source files, migrations, persistence, or application/domain logic for convenience. If the marketing site eventually needs integration with the product, treat that as an explicit future decision.

## Keep V1 small

V1 is a single-page static GitHub Pages site. Do not add a CMS, pricing system, authentication, application backend, exhaustive feature matrix, giant roadmap, fake customer proof, or complex demo integration without a demonstrated need.

## Brian remains the product/brand decision-maker

Drafts and generated concepts are working material, not automatic decisions. Do not treat generated copy, taglines, visual treatments, or positioning as approved merely because they appeared in a concept image or implementation.