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