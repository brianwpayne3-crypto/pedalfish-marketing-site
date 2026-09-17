# PedalFish V1 Marketing Direction

## Objective

Create a credible single-page marketing presence for independent bicycle-shop owners, mechanics, mobile repair operators, and other owner-operators.

Within roughly 60–90 seconds, someone should be able to:

1. understand what PedalFish is;
2. understand why it is different;
3. see enough of the real product to know it is grounded in actual shop work;
4. have an easy path to talk with us or become an early user.

## Positioning foundation

PedalFish is being built by mechanics and owner-operators for mechanics and owner-operators.

Durable ideas already worth protecting:

- **Independent doesn't mean doing everything yourself.**
- Being great at fixing bikes should not require being great at every operational task required to run a bike shop.
- PedalFish is not trying to automate the bike shop; it is trying to strengthen the person who owns/runs it.
- Independent shops should be able to keep their own operating style rather than being forced into one identical business model.
- AI may be part of how PedalFish works over time, but AI is a mechanism, not the marketing message.

These are positioning inputs, not all necessarily final homepage copy.

## Product story

The current strongest organizing structure is:

### Take it in
Capture the bike, customer request, authorized work, expectations, pricing, and a photo so the repair starts with a durable shared record.

Primary evidence: **Intake / Intake Acknowledgement**.

### See what's next
Give the shop an operating view of what is ready to work, what is completed, what is waiting, and what action comes next.

Primary evidence: **Shop View**.

### Do the work
Keep the actual repair grounded in authorized service, mechanic workflow/checklists, changing reality, blockers, and a durable Job Record.

Primary evidence: **active Job Detail**, with selected checklist/detail crops where useful.

### Close the loop
Finish with a clear customer-facing record of the service performed, checklist results, price/amount due, and what happened to the bike.

Primary evidence: **Completed Work Summary**.

## Product imagery

A complete real PedalFish repair flow has already been captured as source material. We have enough screenshots for V1 and should not collect more unless implementation exposes a specific gap.

Do not commit those raw production screenshots here because they contain real customer information.

Marketing versions should:

- use the real PedalFish logo;
- replace all customer identity with synthetic data;
- preserve believable bike/service/repair details;
- use one consistent fictional repair story across surfaces;
- visually polish hierarchy, typography, spacing, framing, density, and presentation without inventing product behavior;
- preserve the bike-at-intake/photo concept because it immediately grounds PedalFish in real bicycle service.

## Visual direction learned from the first experiment

An initial four-iPad marketing concept validated that the raw PedalFish UI can become credible marketing imagery without first redesigning the entire production application.

What worked:
- real logo;
- bicycle-shop context;
- iPad/device framing making the product tangible;
- coherent sanitized repair story;
- easy-to-understand service progression.

What not to carry forward literally:
- four iPads side-by-side in the hero is too dense;
- the site should not feel like a finished brochure/advertisement;
- generated `WORK FLOWS HERE` and other generated copy are not approved brand language;
- individual product screens need more room to breathe.

Current direction: one strong device/product visual near the top, then larger product imagery as the visitor moves through the service story.

## Candidate page structure

`Hero → problem/value → service story / how PedalFish works → real product evidence → why it is different / built inside real shop work → who it is for → early-user CTA`

Do not treat this as immutable. The page should be designed around comprehension and the product story rather than filling a template.

## CTA

V1 is not a Buy Now funnel. PedalFish is still learning with real shops. The CTA should invite independent shop owners/mechanics to talk, see PedalFish, and potentially become early users.

## Domain and application URLs

Current direction:

- **`pedal-fish.com`** should be the public PedalFish marketing site. Someone hearing about PedalFish and visiting the primary domain should first land on the product/brand explanation rather than an application login screen.
- **`app.pedal-fish.com`** should be the production PedalFish application. The marketing site can link existing users to this subdomain with a Sign in action when appropriate.
- A future **`demo.pedal-fish.com`** may be useful for a distinct sandbox/demo experience if that remains part of the product strategy.

Brian already owns `pedal-fish.com`; subdomains such as `app.pedal-fish.com` do **not** require purchasing additional domains. They are created through DNS and pointed at the appropriate hosting/deployment target.

Keep the marketing site and application as separate deployment/codebase concerns. Using an application subdomain preserves the repository/infrastructure boundary already established between this static marketing site and the PedalFish production application. This URL structure does not imply an application rewrite or that the application must share hosting with the marketing site.

## Implementation

- Separate repository from the PedalFish application.
- Static GitHub Pages site.
- Brian + ChatGPT initial development workflow.
- No coding agent required for V1 unless complexity demonstrates a real need.
- Keep implementation deliberately small and easy to evolve.