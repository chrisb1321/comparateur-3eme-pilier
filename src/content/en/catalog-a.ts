import { chf, FIGURES } from "@/lib/figures";
import {
  FORM,
  HUB,
  PENDING,
  REVIEW,
  TODO_AFA,
  TODO_ADDRESS,
  TODO_ENTITY,
  TODO_PAY,
  TODO_REGISTER,
  TODO_STATUS,
  TODO_UID,
  type EnCopy,
  grand,
  h2,
  ol,
  p,
  petit,
  ul,
} from "./shared";

export const EN_A: Record<string, EnCopy> = {
  "3eme-pilier-suisse": {
    title: "Swiss third pillar: individual pension provision",
    metaTitle: "Swiss third pillar: pillar 3a, pillar 3b, bank or insurance",
    description:
      "What the Swiss third pillar is, how pillar 3a and pillar 3b differ, and where the 2026 FSIO ceilings come from.",
    intro:
      "The Swiss third pillar is individual pension provision. It sits beside OASI (1st pillar) and the occupational pension, BVG/LPP (2nd pillar). Pillar 3a is tied pension savings, with a federal deduction. Pillar 3b is flexible provision, without an FSIO ceiling.",
    brief: [
      `2026 pillar 3a ceiling with a 2nd pillar: ${petit}.`,
      `Without a 2nd pillar: 20% of earned income, up to ${grand}.`,
      "Pillar 3a needs income subject to OASI. Pillar 3b does not.",
      "Bank or insurance: same deduction, not the same contract.",
      "This site does not claim to list every provider in Switzerland.",
      PENDING,
    ],
    faqs: [
      {
        question: "Is the 2027 pillar 3a ceiling already known?",
        answer: `Yes. ${PENDING}. The 2026 ceilings on this page stay those of the 1 January 2026 table.`,
      },
      {
        question: "Does the site name a winning product?",
        answer:
          "No. There is no ranking and no promised return. A service adviser can call you back about solutions the service can actually see.",
      },
    ],
    blocks: [
      h2("Who it is for", "profils"),
      p("Employees with a pension fund, self-employed people with or without BVG/LPP, cross-border workers whose Swiss income is subject to OASI, and households looking at home ownership or a child without OASI income. The deduction rules are not the same for each of those cases."),
      h2("What is compared"),
      p("Fees, how free the payments are, surrender value, death or disability cover, and time horizon. A guaranteed rate exists only when the contract says so. A hypothetical return is not treated as likely."),
      p(`The 2026 numbers come from the FSIO table of 1 January 2026, checked on ${REVIEW}. ${PENDING}. Detail: [tax deductions](/en/deductions-fiscales-3eme-pilier/) and the [ceiling calculator](/en/calculateur-plafond-3a/).`),
      p("Next reads: [open a third pillar](/en/ouvrir-un-3eme-pilier/), [transfer a 3a](/en/transfert-3a/), [staggered withdrawal](/en/retrait-echelonne-3a/), [bank or insurance](/en/3eme-pilier-banque-assurance/)."),
      p(FORM),
    ],
  },
  "ouvrir-un-3eme-pilier": {
    title: "Opening a third pillar in Switzerland",
    metaTitle: "Open a Swiss third pillar: conditions and the 2026 ceiling",
    description: "Who can open a pillar 3a, the 2026 ceiling, and the difference between a bank and an insurer.",
    intro: `You open a tied pillar 3a when earned income is subject to OASI. In 2026 the deductible ceiling is ${petit} with a 2nd pillar, or 20% of earned income up to ${grand} without one. The payment must be credited by 31 December. Without OASI income, pillar 3a stays closed and flexible pillar 3b remains possible. ${PENDING}.`,
    brief: [
      `With a 2nd pillar: ${petit}.`,
      `Without a 2nd pillar: 20% of earned income, at most ${grand}.`,
      "Several 3a accounts do not multiply the ceiling.",
      "A transfer is not a withdrawal.",
      PENDING,
    ],
    faqs: [
      {
        question: "Do I need a 2nd pillar before I open a 3a?",
        answer: "No. The pension fund changes the ceiling, not the right to open. With a fund, it is the small contribution. Without one, it is 20% of earned income, inside the large contribution.",
      },
      {
        question: "Can I hold several pillar 3a accounts?",
        answer: `Yes. The ceiling ${petit} or ${grand} is global. Extra accounts do not create a second deduction. They mainly help you withdraw on different dates later.`,
      },
    ],
    blocks: [
      h2("Who can open a pillar 3a"),
      p("The FSIO aims at employees, self-employed people, some recipients of unemployment daily allowances, and cross-border workers in that situation. A residence permit is not enough. OASI liability is what opens the right."),
      h2("Several accounts, one ceiling"),
      p("You may open more than one 3a. The yearly deduction does not grow with the number of contracts. Closing them in different years is a [staggered withdrawal](/en/retrait-echelonne-3a/), not a way to deduct more."),
      h2("Moving an existing 3a"),
      p("Moving the balance to another foundation or policy is a [3a transfer](/en/transfert-3a/). It is not a withdrawal, and it does not rebuild the year’s ceiling."),
      p(HUB),
    ],
  },
  "deductions-fiscales-3eme-pilier": {
    title: "Third-pillar tax deductions in 2026",
    metaTitle: "2026 third-pillar deductions: FSIO ceilings",
    description: "2026 pillar 3a ceilings, the narrow buy-back, and what pillar 3b does not double.",
    intro: `What is the deductible pillar 3a ceiling in 2026? ${petit} if you belong to a 2nd-pillar institution, otherwise 20% of earned income up to ${grand}. Source: the FSIO table of 1 January 2026. ${PENDING}. Pillar 3b does not double that deduction.`,
    brief: [
      `With a 2nd pillar: ${petit}. Without: 20% of earned income, at most ${grand}.`,
      "The credit date is 31 December, not the date you gave the order.",
      "Two employed spouses each have their own ceiling, on two separate contracts.",
      PENDING,
    ],
    faqs: [
      {
        question: "Must the payment arrive before 31 December?",
        answer: "Yes. The value date on the 3a account or policy is what counts. An order that is credited in January falls into the next year.",
      },
      {
        question: "Are the 2027 ceilings published?",
        answer: `Yes. ${PENDING}. A 2026 payment still uses the 1 January 2026 table.`,
      },
    ],
    blocks: [
      h2("Buy-back from 2026"),
      p(`Gaps from 2025 can be bought back from the 2026 tax year, up to the small contribution (${chf(FIGURES.buybackMax)}), on top of the ordinary payment for the year, if you had OASI income in the gap year and in the buy-back year, and the ordinary maximum for the current year is already paid. ${PENDING} for the following year’s ceiling.`),
      p("Apply the 2026 formula to one income figure on the [ceiling calculator](/en/calculateur-plafond-3a/). Several contracts for the same person do not multiply the ceiling. Closing them on different dates is the [staggered withdrawal](/en/retrait-echelonne-3a/)."),
      p(HUB),
    ],
  },
  "calculateur-plafond-3a": {
    title: "2026 pillar 3a ceiling calculator",
    metaTitle: "Pillar 3a ceiling calculator for 2026",
    description: "With a 2nd pillar, the fixed 2026 ceiling. Without one, 20% of OASI income, capped. General information.",
    intro: `Two cases in 2026, and only those. With a 2nd-pillar institution, the ceiling is ${petit}. Without one, it is 20% of income subject to OASI, at most ${grand}. ${PENDING}. The tool below is general information, not your tax bill.`,
    brief: [
      `Pension fund, yes: ${petit}, whatever the income.`,
      `Pension fund, no: 20% of annual OASI income, capped at ${grand}.`,
      "Source: FSIO table of 1 January 2026.",
      "Splitting the ceiling by twelve is a labelled hypothesis, not advice.",
      "No capital is projected with a rate.",
    ],
    faqs: [
      {
        question: "Does the calculator use my canton?",
        answer: "No. The pillar 3a ceiling is federal. The cantonal tax saving is not estimated.",
      },
      {
        question: "Can I see a capital at 65?",
        answer: "No. No rate is presented as likely. The only split shown is the ceiling divided by twelve, and it is named as a hypothesis.",
      },
    ],
    blocks: [
      h2("How to read the result"),
      p(`Checked on ${REVIEW}. Written detail: [2026 ceilings](/en/plafonds-3a-2026-2027/) and [deductions](/en/deductions-fiscales-3eme-pilier/). ${HUB}`),
    ],
  },
  "3eme-pilier-banque-assurance": {
    title: "Third pillar at a bank or with an insurer",
    metaTitle: "Bank or insurance for a third pillar in 2026",
    description: "Same 2026 pillar 3a deduction. Different fees, guarantees and surrender value.",
    intro: `The 2026 pillar 3a deduction is the same whether the money goes to a bank foundation or an insurer. What changes is fees, guarantees, and what remains if you stop after a few years. Neither the bank nor the insurer is the right support for everyone.`,
    brief: [
      "Same 2026 ceiling at a bank foundation or an insurer.",
      `With a 2nd pillar: ${petit}. Without: 20% of income, up to ${grand}.`,
      "A bank: flexible payments, no built-in death capital.",
      "An insurer: premiums, death cover, sometimes waiver of premium. Early surrender value is often low.",
      PENDING,
    ],
    faqs: [
      {
        question: "Does insurance deduct more than a bank?",
        answer: `No. In 2026 the FSIO ceiling is ${petit} / ${grand}, whoever the provider is.`,
      },
    ],
    blocks: [
      h2("A labelled numerical example"),
      p(`Everything that follows is hypothetical. Hypothesis 1: the person belongs to a 2nd-pillar institution. Hypothesis 2: they pay the 2026 ceiling, ${petit}, for three years in a row. Hypothesis 3: no return, no numbered fee, no performance. Hypothetical contributions in total: ${chf(FIGURES.pillar3aWithLpp * 3)}. At a bank, that total is only the sum paid, not a maturity capital. With an insurer, the surrender value in year three is not that total: it is read on the [contract table](/en/valeur-de-rachat-3a/). If premiums stop: [stopping payments](/en/arret-primes-assurance-3a/). Neither support is declared the winner.`),
      p(HUB),
    ],
  },
  "3eme-pilier-a-ou-b": {
    title: "Pillar 3a or pillar 3b",
    metaTitle: "Pillar 3a or pillar 3b in 2026",
    description: "Tied pillar 3a has an FSIO ceiling. Flexible pillar 3b does not. They are not substitutes.",
    intro: `Pillar 3a is tied and deductible across Switzerland, up to ${petit} with a 2nd pillar or 20% of earned income up to ${grand} without one. Pillar 3b is flexible provision. It has no FSIO ceiling and is not deducted like a 3a. ${PENDING}.`,
    brief: [
      "3a: blocked except for legal reasons, federal deduction.",
      "3b: more freedom on withdrawals and beneficiaries.",
      "A 3b deduction, when it exists, is cantonal and mostly about life-insurance premiums.",
      PENDING,
    ],
    faqs: [
      {
        question: "Can pillar 3b replace pillar 3a?",
        answer: "No. The federal deduction belongs to pillar 3a. Pillar 3b is the flexible layer, useful when you need access or a beneficiary the 3a order does not allow.",
      },
    ],
    blocks: [
      h2("When each one is the point"),
      p("Choose 3a for the federal deduction and accept the lock. Choose 3b when the person has no OASI income, when you want to name a beneficiary more freely, or when you may need the money. Many households use both. [Combining 3a and 3b](/en/combiner-3a-et-3b-2026/)."),
      p(HUB),
    ],
  },
  "3eme-pilier-b-prevoyance-libre": {
    title: "Pillar 3b, flexible provision",
    metaTitle: "Pillar 3b in 2026: no FSIO ceiling",
    description: "Flexible pillar 3b is not a second federal ceiling. It is useful for access and beneficiaries.",
    intro: `Pillar 3b is flexible provision. It has no FSIO ceiling and is not deducted like pillar 3a. In 2026, pillar 3a deducts ${petit} with a 2nd pillar, or up to ${grand} without one. Pillar 3b is for choosing a beneficiary, keeping access to the money, or covering someone with no OASI income. ${PENDING}.`,
    brief: [
      "No federal ceiling.",
      "A tax deduction, if any, is cantonal and usually about life premiums.",
      "Geneva and Fribourg are the Romandy cases most often cited. The year’s notice wins.",
      PENDING,
    ],
    faqs: [
      {
        question: "Does the FSIO cap pillar 3b?",
        answer: `No. The FSIO caps only pillar 3a (${petit} / ${grand} in 2026). ${PENDING}.`,
      },
    ],
    blocks: [
      h2("Cantonal premium envelopes"),
      p(`Geneva and Fribourg allow life-insurance premiums inside cantonal limits. Orders of magnitude that circulate: ${chf(FIGURES.fr3bSingle)} / ${chf(FIGURES.fr3bMarried)} in Fribourg for some premiums, and ${chf(FIGURES.ge3bSingle)} / ${chf(FIGURES.ge3bMarried)} often cited in Geneva. Those are premium caps, not an automatic tax credit. The year’s notice wins.`),
      p(HUB),
    ],
  },
  "3eme-pilier-logement": {
    title: "Using a third pillar to buy a home in Switzerland",
    metaTitle: "Third pillar and housing: withdrawal or pledge",
    description: "Early withdrawal or a pledge of pillar 3a for your main home. No single tax rate is published.",
    intro: "A third pillar can help you buy the home you live in, in Switzerland, by an early withdrawal or by a pledge. The withdrawal pays the capital out and triggers a separate tax. The pledge leaves the assets invested and gives them to the bank as security. A second home or a rental property is outside this frame.",
    brief: [
      "Two paths: withdraw the 3a, or pledge it without taking it out.",
      "The early-withdrawal housing rule is for the main home in Switzerland.",
      "A withdrawal is taxed. A pledge is not, until the security is enforced.",
      "An insurance policy is read at surrender value, not at a projected capital.",
    ],
    faqs: [
      {
        question: "Can I use a 3a for a second home?",
        answer: "Not for the early withdrawal that promotes owner-occupied housing. You must live in the property. A pillar 3b follows the contract, not that legal reason.",
      },
      {
        question: "Does a pledge avoid tax?",
        answer: "When you pledge the 3a, there is in principle no withdrawal tax, because the capital is not paid to you. If the bank enforces the pledge, capital tax can then apply.",
      },
    ],
    blocks: [
      h2("Withdrawal and pledge"),
      p("A withdrawal pays 3a capital out for the home you occupy, or to repay the mortgage on that home. A pledge pays nothing out: the foundation or insurer commits to the bank, and the assets remain."),
      p("The exact tax depends on the canton and the amount. It is not estimated here. The money that leaves no longer compounds, and later deductions do not by themselves rebuild it."),
      p("On a policy, the bank reads the [surrender value](/en/valeur-de-rachat-3a/), not a projected capital. The frame: [Swiss third pillar](/en/3eme-pilier-suisse/)."),
    ],
  },
  "transfert-3a": {
    title: "Transferring a pillar 3a",
    metaTitle: "Transfer a pillar 3a: it is not a withdrawal",
    description: "Moving a 3a to another foundation or policy stays inside tied provision. It is not a taxable payout.",
    intro: "Transferring a pillar 3a moves the balance to another bank foundation or another policy, without paying it to you. While the money stays inside tied provision, it is not a withdrawal and not the moment of capital tax. Changing provider does not rebuild the year’s ceiling.",
    brief: [
      "A transfer is not a withdrawal: you do not receive the capital.",
      "Ask the receiving institution for the form.",
      "Before moving a policy, read the surrender value.",
      "The yearly ceiling stays global, even with several contracts.",
      PENDING,
    ],
    faqs: [
      {
        question: "Does the transfer trigger tax?",
        answer: "Not if it stays inside tied provision, from one 3a foundation or policy to another. A payment onto your private account is a withdrawal.",
      },
      {
        question: "Can I transfer only part of it?",
        answer: "That depends on the foundation or the contract. This page does not publish a single rule. Ask the institution that holds the assets, in writing.",
      },
    ],
    blocks: [
      h2("What the repository allows us to say"),
      p("A 3a balance can in principle move to another bank foundation or another policy, without tax, while it remains tied provision. Compare fees, securities and the [surrender value](/en/valeur-de-rachat-3a/) before moving a policy."),
      ul([
        "Transfer versus withdrawal: the second pays you the capital and opens the tax.",
        "Transfer versus a new ceiling: changing provider does not grant a second ceiling.",
        "Transfer versus a [gap buy-back](/en/rachat-lacunes-3a-2026/): a buy-back is a new payment, not a move of existing assets.",
      ]),
      p(HUB),
    ],
  },
  "retrait-echelonne-3a": {
    title: "Staggered withdrawal of pillar 3a",
    metaTitle: "Staggered pillar 3a withdrawal: several contracts, one ceiling",
    description: "Several 3a accounts do not multiply the deduction. Closing them in different years can separate the capital tax. No cantonal rate is estimated.",
    intro: "Staggering a pillar 3a withdrawal means not paying out every contract in the same year. The yearly ceiling stays unique: several accounts do not let you deduct more. Each contract that is paid out is taxed on its own amount. This page gives no tax rate and no numbered saving.",
    brief: [
      `Global 2026 ceiling: ${petit} with a 2nd pillar, or 20% up to ${grand} without one.`,
      "Several contracts: yes. Several ceilings: no.",
      "The idea is to close different contracts in different years.",
      "The exact tax depends on the canton and the amount. It is not calculated here.",
      PENDING,
    ],
    faqs: [
      {
        question: "Do two accounts double the deduction?",
        answer: `No. The ceiling ${petit} or ${grand} is global for the year.`,
      },
      {
        question: "Can I withdraw part of a single account?",
        answer: "Not as one universal rule. Some foundations allow it, others do not. The staggering described here relies on separate contracts, not on a promise of partial withdrawal.",
      },
    ],
    blocks: [
      h2("Why several contracts"),
      p("At payout, pillar 3a capital is taxed separately from income. The FTA circular on pillar 3a covers that tax, including staggering. Closing one contract one year and another later separates the amounts. We do not publish the cantonal scale."),
      p(HUB),
    ],
  },
  "valeur-de-rachat-3a": {
    title: "Surrender value of a pillar 3a insurance",
    metaTitle: "Pillar 3a surrender value: read the table",
    description: "Surrender value is what a policy pays if you stop. It is often below the premiums at the start. No percentage is published.",
    intro: "Surrender value is the sum a pillar 3a policy pays if the contract ends before maturity. It is not the capital announced at the end, and not the sum of the premiums. In the early years it is generally lower than the premiums already paid. The figure is on the contract table. This page publishes none.",
    brief: [
      "A cash account or securities: you see the balance. A policy: you see the surrender value.",
      "No sample percentage. No return.",
      "For a home loan, the bank looks at that value, not at a projected capital.",
    ],
    faqs: [
      {
        question: "Is a surrender value guaranteed on this site?",
        answer: "No. Only the contract can state an amount. We do not replace that table with a teaching percentage.",
      },
      {
        question: "Does a 3a account have a surrender value?",
        answer: "Not in the insurance sense. The account or securities balance is what is there, aside from custody fees. Surrender value is insurance vocabulary.",
      },
    ],
    blocks: [
      h2("Where to read it"),
      p("The surrender table is in the offer or the contract, year by year. Without that table, a policy cannot be compared. [Fees](/en/frais-3a-banque-assurance/) say what to ask for. They do not replace the table."),
      p(`If you stop paying: [stopping premiums](/en/arret-primes-assurance-3a/). For a purchase: [housing](/en/3eme-pilier-logement/). ${HUB}`),
    ],
  },
  "arret-primes-assurance-3a": {
    title: "Stopping payments on a pillar 3a insurance",
    metaTitle: "Stop paying a pillar 3a policy: surrender, reduction, not advice",
    description: "Stopping a 3a policy depends on the contract: surrender value, a reduced policy, or a waiver of premium if disability is covered.",
    intro: "Stopping a pillar 3a insurance does not have one outcome. Depending on the contract, the policy is surrendered at its surrender value, reduced, or kept if a waiver of premium covers a disability. A 3a account can simply pause: you stop paying and the balance stays. This page does not choose for you and publishes no fee scale.",
    brief: [
      "Bank: a pause is possible. The account or securities balance stays.",
      "Insurance: stopping is read on the surrender value and the contract.",
      "Waiver of premium is cover for disability, not a choice to pause.",
      "No loss percentage is given here.",
    ],
    faqs: [
      {
        question: "Must I surrender the policy if I stop?",
        answer: "Not under one rule published here. The contract may provide surrender, a reduction, or other outcomes. Ask the insurer in writing before you decide.",
      },
      {
        question: "Does waiver of premium mean I can stop when I want?",
        answer: "No. It is a guarantee in case of disability, if it is in the contract. It is not the same as a voluntary pause.",
      },
    ],
    blocks: [
      h2("Account and policy"),
      p("On an account or securities, stopping contributions leaves the balance in place, subject to the contract’s custody fees. On a policy, stopping premiums touches the cover and the [surrender value](/en/valeur-de-rachat-3a/). In the early years that value is generally below the premiums paid. The amount is the table’s, not a percentage from this page."),
      p(`Waiver of premium is a different subject: [waiver of premium](/en/liberation-du-paiement-des-primes/). ${HUB}`),
    ],
  },
  "choisir-les-beneficiaires": {
    title: "Choosing pillar 3a beneficiaries",
    metaTitle: "Pillar 3a and 3b beneficiaries if you die",
    description: "The current pillar 3a order, and what the FSIO announced for 1 June 2027 without rewriting the ordinance.",
    intro: "At death, pillar 3a is not a joint account. The beneficiary order is set by the OPP 3 rules described below. Pillar 3b is freer. An FSIO press release of 12 June 2026 announces more flexibility from 1 June 2027. This page cites that announcement. It does not draft the future ordinance.",
    brief: [
      "Pillar 3a follows the order below. You can specify inside a group. You cannot invent a contrary order.",
      "Pillar 3b leaves more freedom in the clause.",
      "From 1 June 2027 the FSIO announces a wider choice. The applicable text is the press release.",
    ],
    faqs: [
      {
        question: "Is a partner automatically a pillar 3a beneficiary?",
        answer: "Not after four years. The rank described here is a shared household of at least five years, or children in common, inside the group provided. The clause is filed with the foundation.",
      },
      {
        question: "Does the order change in 2027?",
        answer: "The FSIO release of 12 June 2026 announces more flexibility from 1 June 2027, for example naming your children first even if you are married or in a registered partnership. The order on this page is the one described before that date. The ordinance text is read at the source, not rewritten here.",
      },
    ],
    blocks: [
      h2("Pillar 3a order described so far"),
      ol([
        "The policyholder, if they survive (old-age benefit).",
        "At death: spouse or registered partner.",
        "Direct descendants, people the deceased substantially supported, or a person who shared a household for at least five years or with whom they had children.",
        "Parents, then siblings, then other heirs.",
      ]),
      h2("What the FSIO announced for 2027"),
      p("The 12 June 2026 release says that from 1 June 2027 pillar 3a holders will have more flexibility to name beneficiaries. The example written by the FSIO: being able to name their children as priority beneficiaries, including in a blended family, even if married or in a registered partnership. Source: [ordinance changes, FSIO, 12 June 2026](https://www.bsv.admin.ch/fr/newnsb/fFBgrSAIiYiGRg9YfWRfM). We do not copy the future article of the ordinance. The order above remains the one described on this page before 1 June 2027."),
      p(HUB),
    ],
  },
  "rachat-lacunes-3a-2026": {
    title: "Buying back pillar 3a gaps",
    metaTitle: "Pillar 3a gap buy-back: 2026 rules",
    description: "From the 2026 tax year, a narrow buy-back of gaps from 2025 is possible. Capped at the small contribution. The next year’s buy-back ceiling is not numbered.",
    intro: "Until gaps from 2024, a year without a 3a was lost. From 2026 the FSIO allows a retroactive buy-back. It is narrow, conditional, and capped at the small contribution. It is not a way to catch up a whole career.",
    brief: [
      "First possible buy-back: the 2026 tax year, for a 2025 gap.",
      "A window of at most ten years, only for years from 1 January 2025.",
      "The buy-back follows the small contribution, not the large one.",
      "The ordinary maximum for the buy-back year must already be paid.",
      PENDING,
    ],
    faqs: [
      {
        question: "Can a forgotten 2023 pillar 3a be bought back?",
        answer: "No. Only gaps from 2025 are buyable. Earlier years stay lost. The first possible buy-back is the 2026 tax year, for 2025.",
      },
      {
        question: "Is the buy-back added to the year’s payment?",
        answer: `In 2026, yes, up to the small contribution (${petit}), and only if the ordinary maximum for the buy-back year is already paid. ${PENDING}.`,
      },
    ],
    blocks: [
      h2("What the FSIO states"),
      p(`First buy-back: the 2026 tax year, for a 2025 gap. The window is at most ten years back, but only for years from 1 January 2025. The amount is up to the small contribution for 2026, ${petit} (article 7 OPP 3). You pay the ordinary maximum for the current year first, then the gap, in one payment.`),
      p("You must have had the right to contribute in the gap year — earned income subject to OASI in Switzerland — and still meet that condition in the buy-back year. A self-employed person on the large contribution does not catch up a forgotten large contribution. The buy-back stays pegged to the small one."),
      p(`The published method targets buy-backs from 2026. ${PENDING}. ${HUB}`),
    ],
  },
  "frais-3a-banque-assurance": {
    title: "Pillar 3a fees: bank or insurance",
    metaTitle: "Pillar 3a fees in 2026: same deduction",
    description: "The 2026 pillar 3a deduction is the same at a bank and at an insurer. Fees, surrender value and death capital differ. No ranking.",
    intro: `Bank or insurance: which one deducts more? Neither. The FSIO ceiling is the same (${petit} with a 2nd pillar, ${grand} without). The difference is the contract: fees, guarantees, and what remains if you stop in year three.`,
    brief: [
      "Same pillar 3a ceiling at a bank and at an insurer.",
      "Fees are read on the offer documents. No percentage is published here.",
      "A policy is compared with its surrender value, not with the sum of premiums.",
      "Stopping payments does not have one outcome. It is the contract.",
    ],
    faqs: [
      {
        question: "Does a 3a insurance deduct more than a 3a bank account?",
        answer: "No. Article 7 OPP 3: the maximum depends on membership of a 2nd pillar, not on the provider.",
      },
    ],
    blocks: [
      h2("Insurance fees, without a made-up scale"),
      p("Three lines, and no invented percentage: acquisition costs at the start of the policy, the cost of guarantees (death, disability, waiver of premium) if they are included, and the gap between premiums paid and the [surrender value](/en/valeur-de-rachat-3a/). If premiums stop: [stopping a pillar 3a policy](/en/arret-primes-assurance-3a/)."),
      p(`${HUB} ${PENDING}.`),
    ],
  },
};
