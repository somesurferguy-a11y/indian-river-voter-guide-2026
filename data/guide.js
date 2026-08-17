/* ==========================================================================
   Indian River County Voter Guide 2026 — content
   See data/schema.md. This file is the ONLY place content lives.

   STATUS: baseline. Every item below is verified against the source linked
   with it. Sections still being researched are marked with an explicit
   "researchPending" note rather than left blank, so the site never implies
   completeness it doesn't have.
   ========================================================================== */

const SOE = 'https://www.voteindianriver.gov/election_information/upcoming_elections.php';
const SOE_HOME = 'https://voteindianriver.gov/';
const WHOSRUNNING = 'https://whosrunning.app/counties/Indian%20River';

/* ------------------------------------------------------------------------
   MEDIA SOURCE RATINGS

   Political-lean labels for NEWS/MEDIA outlets cited in this guide, drawn
   from established third-party bias-rating organizations rather than this
   guide's own judgment — the same rule as everything else here: no claim
   without a source. Full detail and links: methodology.html#media-ratings.

   IMPORTANT SCOPE LIMIT: this table rates JOURNALISM outlets only. It does
   NOT apply to official government records, court filings, campaign
   websites, or a candidate's own statements — "political lean" is a
   media-bias concept and does not meaningfully describe a primary document
   or a candidate's own words about themselves. Domains not listed here
   (voteindianriver.gov, fec.gov, campaign sites, court records, etc.) are
   primary/official sources and intentionally excluded.

   Keyed by hostname without "www.". rating = short display label.
   ratingBody/ratingUrl/ratingDate = the citation for that label.
   ------------------------------------------------------------------------ */
const MBFC = 'Media Bias/Fact Check';
const ALLSIDES = 'AllSides';

window.MEDIA_RATINGS = {
  'tcpalm.com': {
    outlet: 'TCPalm / Treasure Coast Newspapers', category: 'Local daily newspaper (Gannett)',
    rating: 'Left-Center', ratingBody: MBFC,
    source: { title: 'Media Bias/Fact Check — TCPalm', url: 'https://mediabiasfactcheck.com/tcpalm-treasure-coast-news-bias/', date: '2026-08-08' },
    note: 'MBFC also rates factual reporting "High." A separate rater, Biasly, scores it "somewhat liberal" — broadly consistent.'
  },
  'aol.com': {
    outlet: 'TCPalm content, republished via AOL syndication', category: 'Syndicated local news',
    rating: 'Left-Center', ratingBody: MBFC,
    source: { title: 'Media Bias/Fact Check — TCPalm', url: 'https://mediabiasfactcheck.com/tcpalm-treasure-coast-news-bias/', date: '2026-08-08' },
    note: 'The reporting itself is TCPalm’s; AOL is the distribution channel. AOL’s own aggregation has a separately reported "Left-Center" MBFC rating for its own editorial content.'
  },
  'wptv.com': {
    outlet: 'WPTV (NBC affiliate, West Palm Beach)', category: 'Local TV news',
    rating: 'Least Biased (Center)', ratingBody: MBFC,
    source: { title: 'Media Bias/Fact Check — WPTV', url: 'https://mediabiasfactcheck.com/wptv-west-palm-beach-news-bias/', date: '2026-08-08' },
    note: 'MBFC also rates factual reporting "High."'
  },
  'cbs12.com': {
    outlet: 'CBS12 / WPEC (West Palm Beach)', category: 'Local TV news',
    rating: 'Right-Center', ratingBody: MBFC,
    source: { title: 'Media Bias/Fact Check — WPEC/CBS12', url: 'https://mediabiasfactcheck.com/wpec-cbs12-com/', date: '2026-08-08' },
    note: 'MBFC also rates factual reporting "High," describing minimal but present right-leaning tilt in opinion content.'
  },
  'wqcs.org': {
    outlet: 'WQCS (NPR, licensed to Indian River State College)', category: 'Public radio',
    rating: 'Left-Center', ratingBody: MBFC,
    source: { title: 'Media Bias/Fact Check — WQCS/NPR Fort Pierce', url: 'https://mediabiasfactcheck.com/wqcs-npr-fort-pierce-bias/', date: '2026-08-08' },
    note: 'MBFC also rates factual reporting "High."'
  },
  'clickorlando.com': {
    outlet: 'ClickOrlando / WKMG News 6', category: 'Local TV news',
    rating: 'Center', ratingBody: ALLSIDES + ' / ' + MBFC,
    source: { title: 'AllSides — Click Orlando', url: 'https://www.allsides.com/news-source/click-orlando-media-bias', date: '2026-08-08' },
    note: 'AllSides rates it Center with low/initial confidence (online coverage only). MBFC separately rates it "Least biased" with high factual reporting.'
  },
  'floridapolitics.com': {
    outlet: 'Florida Politics', category: 'State political news',
    rating: 'Center', ratingBody: MBFC + ' / ' + ALLSIDES,
    source: { title: 'Media Bias/Fact Check — Florida Politics', url: 'https://mediabiasfactcheck.com/florida-politics/', date: '2026-08-08' },
    note: 'MBFC rates it "Least biased" with high factual reporting; AllSides-derived aggregation also places it Center. Framing tends toward insider/lobbyist-adjacent even where measured bias is low, and it is paywalled.'
  },
  'ballotpedia.org': {
    outlet: 'Ballotpedia', category: 'Nonpartisan reference encyclopedia (not original reporting)',
    rating: 'Center / nonpartisan reference', ratingBody: ALLSIDES,
    source: { title: 'AllSides — Ballotpedia', url: 'https://www.allsides.com/news-source/ballotpedia-media-bias', date: '2026-08-08' },
    note: 'Ballotpedia does not do original reporting — it curates and summarizes from other sources. Founded by the nonprofit Lucy Burns Institute.'
  },
  'veronews.com': {
    outlet: 'Vero News', category: 'Local digital newspaper',
    rating: 'Not independently rated', ratingBody: null,
    source: null,
    note: 'No rating located from AllSides, Media Bias/Fact Check, or Ad Fontes Media as of this research — it is a small hyperlocal outlet below the size these organizations typically cover. Its coverage of the Hospital District in this guide is separately noted as opinion-inflected.'
  },
  'sebastiandaily.com': {
    outlet: 'Sebastian Daily', category: 'Local digital newspaper',
    rating: 'Not independently rated', ratingBody: null, source: null,
    note: 'No rating located from major bias-rating organizations — a small hyperlocal outlet.'
  },
  'hometownnewstc.com': {
    outlet: 'Hometown News Treasure Coast', category: 'Local community newspaper group',
    rating: 'Not independently rated', ratingBody: null, source: null,
    note: 'Ground News, which aggregates AllSides/MBFC/Ad Fontes, explicitly lists this outlet as having no rating from any of the three.'
  },
  'unclosetedmedia.com': {
    outlet: 'Uncloseted Media', category: 'Nonprofit LGBTQ-focused investigative outlet',
    rating: 'Not independently rated', ratingBody: null, source: null,
    note: 'No rating located from major bias-rating organizations. Describes itself as nonpartisan; its subject matter is specifically LGBTQ-focused investigative journalism, which this guide treats as relevant context (not a bias verdict) when its reporting touches LGBTQ policy topics.'
  },
  'thomasaugustus.substack.com': {
    outlet: 'The Sunshine Journal (single-author Substack)', category: 'Self-published partisan blog',
    rating: 'Not independently rated — self-published, avowedly one-sided', ratingBody: null, source: null,
    note: 'Not evaluated by major bias-rating organizations. This guide treats it as a lead source only, to be corroborated against primary records before anything it reports is published as fact — see individual citations for corroboration status.'
  }
};

window.GUIDE = {

  meta: {
    updated: '2026-08-05',
    primaryDate: '2026-08-18',
    generalDate: '2026-11-03',
    disclaimer: 'Independent, nonpartisan, and not affiliated with any candidate, party, or government agency.'
  },

  /* Things voters will look for and NOT find — worth saying explicitly so an
     absence reads as information rather than an omission by this guide. */
  notOnBallot: [
    {
      label: 'Florida Senate — no race this year',
      detail: 'Indian River County sits entirely in Florida Senate District 29 (Sen. Erin Grall, R), whose term runs to November 2028. Only the 20 even-numbered Senate districts are up in 2026, and zero candidates filed in District 29. You will see NO Florida Senate race on either ballot.',
      source: { title: 'Florida Division of Elections candidate filings; Ballotpedia', url: 'https://ballotpedia.org/Erin_Grall', date: '2026-08-05' }
    },
    {
      label: 'Six local seats were filled without a vote',
      detail: 'Hospital District Seats 2, 4 and 6; Soil & Water Conservation District Seat 1; Mosquito Control District Seat 3; and School Board Districts 1 and 4 each drew a single qualified candidate. They are elected automatically and generally will not appear on your ballot. Soil & Water Seats 3 and 5 drew no candidate at all and are typically filled by appointment.',
      source: { title: 'IRC Supervisor of Elections — certified candidate list', url: 'https://www.voteindianriver.gov/campaigns/candidates/financial_reports_profiles.php', date: '2026-08-05' }
    },
    {
      label: 'A congressional district change to double-check',
      detail: 'Indian River County moved from U.S. House District 8 to District 9 under the map signed in May 2026. The elections office homepage announces District 9 while its own maps page still references District 8. Your sample ballot is the authority — check it.',
      source: { title: 'IRC Supervisor of Elections homepage notice', url: 'https://voteindianriver.gov/', date: '2026-08-05' }
    }
  ],

  /* --------------------------------------------------- judicial races */

  judicial: {
    explainer:
      'Florida judges above the trial-court level are not elected in a contest between candidates. Instead, voters get a straight YES or NO on each sitting judge: "Should this judge be retained in office?" A majority YES keeps the judge for another six-year term. A majority NO creates a vacancy that the governor fills by appointment. No Florida Supreme Court or District Court of Appeal judge has ever been removed by a retention vote. Because Florida\'s judicial ethics rules bar judges from campaigning on how they would rule in future cases, retention races carry almost no campaign material by design — that is a feature of the system, not a gap in this guide\'s research.',
    localRaces: {
      status: 'Indian River County has NO circuit or county judge races on the 2026 ballot — contested or otherwise.',
      detail: 'Every 19th Judicial Circuit judge up in 2026 — covering Indian River, Martin, Okeechobee, and St. Lucie counties — was returned to office unopposed, including Michael C. Heisey, Michael Linn, Steven J. Levin, Michael David Porter, Laurie Buchanan, Victoria L. Griffin, Lillian B. Ewen, Cynthia L. Cox, and Elizabeth Ann Metzger. No Indian River County judge seat drew a challenger, and the Florida Bar reports no county judge races were even filed for Indian River County this cycle.',
      source: { title: 'The Florida Bar — Dozens of trial court races set for August primary', url: 'https://www.floridabar.org/the-florida-bar-news/dozens-of-trial-court-races-set-for-august-primary/', date: '2026-08-01' }
    },
    retention: [
      {
        name: 'Chief Justice Carlos G. Muñiz',
        court: 'Florida Supreme Court', level: 'Statewide',
        appointed: 'Appointed by Gov. Ron DeSantis, January 22, 2019 — the 89th justice since Florida statehood.',
        source: { title: 'The Florida Bar — Justice Muñiz and 22 DCA judges to stand for merit retention', url: 'https://www.floridabar.org/the-florida-bar-news/justice-muniz-and-22-dca-judges-to-stand-for-merit-retention/', date: '2026-08-01' }
      },
      {
        name: 'Judge Alan O. Forst',
        court: 'Fourth District Court of Appeal', level: 'Covers Indian River County',
        source: { title: 'The Florida Bar — Justice Muñiz and 22 DCA judges to stand for merit retention', url: 'https://www.floridabar.org/the-florida-bar-news/justice-muniz-and-22-dca-judges-to-stand-for-merit-retention/', date: '2026-08-01' }
      },
      {
        name: 'Judge Mark W. Klingensmith',
        court: 'Fourth District Court of Appeal', level: 'Covers Indian River County',
        source: { title: 'The Florida Bar — Justice Muñiz and 22 DCA judges to stand for merit retention', url: 'https://www.floridabar.org/the-florida-bar-news/justice-muniz-and-22-dca-judges-to-stand-for-merit-retention/', date: '2026-08-01' }
      },
      {
        name: 'Judge Johnathan D. Lott',
        court: 'Fourth District Court of Appeal', level: 'Covers Indian River County',
        source: { title: 'The Florida Bar — Justice Muñiz and 22 DCA judges to stand for merit retention', url: 'https://www.floridabar.org/the-florida-bar-news/justice-muniz-and-22-dca-judges-to-stand-for-merit-retention/', date: '2026-08-01' }
      },
      {
        name: 'Judge Shannon K. Shaw',
        court: 'Fourth District Court of Appeal', level: 'Covers Indian River County',
        source: { title: 'The Florida Bar — Justice Muñiz and 22 DCA judges to stand for merit retention', url: 'https://www.floridabar.org/the-florida-bar-news/justice-muniz-and-22-dca-judges-to-stand-for-merit-retention/', date: '2026-08-01' }
      },
      {
        name: 'Judge Caroline Cahill Shepherd',
        court: 'Fourth District Court of Appeal', level: 'Covers Indian River County',
        source: { title: 'The Florida Bar — Justice Muñiz and 22 DCA judges to stand for merit retention', url: 'https://www.floridabar.org/the-florida-bar-news/justice-muniz-and-22-dca-judges-to-stand-for-merit-retention/', date: '2026-08-01' }
      }
    ],
    districtNote: 'Confirmed independently: the Fourth District Court of Appeal, headquartered in West Palm Beach, covers Broward, Palm Beach, Martin, St. Lucie, Indian River, and Okeechobee counties — hearing appeals from the 15th, 17th, and 19th Judicial Circuits.'
  },

  /* -------------------------------------------------- ballot measures */

  measures: [
    {
      id: 'amendment-3',
      number: 'Amendment 3',
      title: 'Save Our Homes from Excessive Property Taxes',
      ballot: 'general',
      threshold: '60% approval required to pass',
      origin: 'Placed on the ballot by the Legislature via CS/CS/HJR 203, then CS/HJR 1-F in the 2026 special session. Senate 30-9, House 75-26.',
      officialText: 'SAVE OUR HOMES FROM EXCESSIVE PROPERTY TAXES. — This amendment benefits Florida taxpayers by: Exempting homestead properties from taxation. Exempts the first $250,000 of a homestead’s value from taxation for all levies other than school district levies and requires, through general law, a schedule for full elimination. Ensuring funding for core services. Requires local governments to use remaining property taxes solely for core public needs including public safety, education and schools, infrastructure, and natural resources. Protecting small businesses. Limits future property tax assessments on businesses. Ensuring fairness for Florida residents. Requires any person who establishes Florida residency after January 1, 2027, to maintain Florida residency for five years prior to receiving the increased homestead exemption.',
      plain: 'Raises the homestead exemption from $50,000 to $150,000 in 2027 and $250,000 in 2028, and sets a path to eliminating non-school homestead property taxes entirely by 2037. School taxes are carved out and not affected.  Things the ballot title does not make obvious: the annual assessment-increase cap on NON-homestead property — rentals, commercial buildings, second homes — drops from 10% to 5% for non-school levies. The $250,000 figure is indexed to inflation starting 2029. New residents who establish Florida residency after January 1, 2027 get a smaller exemption until they have lived here five years. And counties and cities would be restricted in how they may spend the property tax revenue they keep.  Why it matters here more than most places: because school taxes are carved out but county, municipal, hospital district, mosquito control and fire/EMS levies are not, the entire burden falls on exactly the local boards on this year’s ballot.',
      yes: 'You want the homestead exemption raised toward $250,000, non-school homestead property taxes phased out by 2037, the non-homestead assessment cap tightened to 5%, and local spending of remaining property tax revenue restricted to listed categories.',
      no: 'You want the constitution left as is: the current $50,000 homestead exemption stays, local governments keep their existing property tax base, and no new restrictions are placed on how they spend it.',
      fiscal: 'The Florida House staff analysis puts the statewide reduction to non-school local government revenue at $4.6 billion a year initially, growing to $8.4 billion. No county-specific estimate for Indian River County’s general fund has been published — worth demanding from candidates. The one local figure that exists: Property Appraiser Wesley Davis calculated the Hospital District alone would lose $2.1+ million in FY2027-28 and roughly 16% of its revenue.',
      money: 'Notable asymmetry: no committee registered in SUPPORT has been located — reported support total $0. Organized OPPOSITION, the "Vote No on 3" committee chaired by former county commissioner Bryan Desolge, reported $35,167.74 raised and $8,785.81 spent, with three $10,000 donors (two law firms and Orlando PAC). Figures cover reports processed through July 31, 2026.',
      polling: 'A Sachs Media poll of 850 eligible voters conducted June 22-24, 2026 (margin ±3.8%) found 64% support and 36% opposition when respondents were read the official ballot summary. Note that 60% is the passage threshold, so this sits close to the line. Reported as polling, not prediction.',
      argsFor: [
        {
          who: 'Gov. Ron DeSantis (R)',
          text: 'Property tax revenue collected by local governments has nearly doubled in the past seven years and is expected to reach an astounding $83 billion by 2032. Florida homeowners need relief.'
        },
        {
          who: 'State CFO Blaise Ingoglia (R)',
          text: 'We are on the side of the taxpayers here... We’re not on the side of a government who thinks that you are an endless ATM.'
        },
        {
          who: 'State Sen. Bryan Avila (R)',
          text: 'Provides meaningful relief for Florida families, while protecting businesses from extreme tax increases and safeguarding local funding for education, law enforcement, infrastructure.'
        },
        {
          who: 'U.S. Sen. Rick Scott (R)',
          text: 'I guarantee you every county has waste to cut.'
        }
      ],
      argsAgainst: [
        {
          who: 'Sadaf Knight, CEO, Florida Policy Institute',
          text: 'Does not represent cost savings, but rather a cost shift — one that will force local lawmakers to cut local services... or increase other taxes and fees.'
        },
        {
          who: 'Jeff Brandes, former Republican state senator',
          text: 'Nobody in all of Florida understands how this is going to play out. We have no models, no math, nothing. It’s budget chaos.'
        },
        {
          who: 'Bryan Desolge, chair of Vote No on 3',
          text: 'Warns of higher rent, more expensive everyday purchases, and costlier first homes.'
        },
        {
          who: 'Audubon Florida',
          text: 'Warns that undefined terms such as "natural resource projects" could leave local conservation land acquisition, land management and habitat restoration outside the permitted spending categories.'
        }
      ],
      source: {
        title: 'Ballotpedia — Florida Amendment 3 (2026)',
        url: 'https://ballotpedia.org/Florida_Amendment_3,_Homestead_Tax_Exemptions,_Property_Assessments,_and_Spending_Restrictions_Amendment_(2026)',
        date: '2026-08-08'
      }
    },
    {
      id: 'amendment-1',
      number: 'Amendment 1',
      title: 'Budget Stabilization Fund',
      ballot: 'general',
      threshold: '60% approval required to pass',
      origin: 'Placed on the ballot by the Legislature via HJR 5019 (2025). House 100-1, Senate 29-4 — a bipartisan margin.',
      officialText: 'BUDGET STABILIZATION FUND. — Proposing an amendment to the State Constitution to increase the amount of funds that may be retained in the budget stabilization fund from 10% to 25% of general revenue collections, require the legislature to transfer the lesser of $750 million or the amount required to reach 25% of the general revenue collections each year unless certain conditions are met, and allow the legislature to withdraw funds for critical state needs.',
      plain: 'Florida has a state savings account created by voters in 1992 — the "rainy day fund." The constitution currently caps it at 10% of general revenue and says nothing about depositing into it annually.  This would raise the cap to 25%, write an annual deposit requirement into the constitution (the lesser of $750 million or whatever reaches the cap), and set rules for skipping deposits and making withdrawals. The Legislature could skip a deposit no more than once every five years on a two-thirds vote citing a critical state need, or if it withdrew from the fund that same year. Withdrawals would require the balance to be above 15% and a two-thirds vote.  Context: the fund held 9.3% of state revenue in FY2024-25, and has averaged 4.63% since FY1994-95. Florida last drew down more than it deposited in 2008.',
      yes: 'You want the rainy-day fund cap raised from 10% to 25%, the roughly $750 million annual deposit required by the constitution, and the new suspension and withdrawal rules put in place.',
      no: 'You want the constitution left as is: the fund stays capped at 10%, no annual deposit is constitutionally required, and current withdrawal rules remain.',
      fiscal: 'No Financial Impact Estimating Conference statement exists — that process applies to citizen initiatives, not legislatively referred amendments. What is known: the requirement redirects up to $750 million a year of state general revenue into reserves rather than into recurring appropriations. This is a STATE revenue effect and does not directly touch local property taxes. Any indirect effect on state aid flowing to Indian River County is unquantified.',
      money: 'No committee registered either in support or opposition has been located. Treat this as "no known committee" rather than a current dollar figure — the underlying finance data is dated.',
      polling: null,
      argsFor: [
        {
          who: 'Senate President Ben Albritton (R)',
          text: 'Makes Florida’s balance sheet more durable in difficult times, and we’re setting more money aside to have its rainy-day reserves if things get difficult.'
        },
        {
          who: 'House Speaker Daniel Perez (R)',
          text: 'This is just a preparation of being prepared for the unexpected... we have a sample to look at in the 2000s when we had a recession. The state of Florida was not prepared for that recession.'
        }
      ],
      argsAgainst: [
        {
          who: 'Rich Templin, Florida AFL-CIO',
          text: 'We have so many needs and obligations that are still unmet. Why would we take money and put it in our retirement account?'
        },
        {
          who: 'Note',
          text: 'No organized opposition campaign has been located.'
        }
      ],
      source: {
        title: 'Ballotpedia — Florida Budget Stabilization Fund Amendment (2026)',
        url: 'https://ballotpedia.org/Florida_Changes_to_Budget_Stabilization_Fund_Amendment_(2026)',
        date: '2026-08-08'
      }
    },
    {
      id: 'amendment-2',
      number: 'Amendment 2',
      title: 'Exemption of Tangible Personal Property on Agricultural Land',
      ballot: 'general',
      threshold: '60% approval required to pass',
      origin: 'Placed on the ballot by the Legislature via HJR 1215 (2025). House 110-1, Senate 37-0 — near-unanimous and bipartisan.',
      officialText: 'EXEMPTION OF TANGIBLE PERSONAL PROPERTY ON AGRICULTURAL LAND FROM TAXATION. — Proposing an amendment to the State Constitution to exempt tangible personal property habitually located or typically present on land classified as agricultural, used in the production of agricultural products or for agritourism activities, and owned by the landowner or leaseholder of the agricultural land from ad valorem taxation. If approved this amendment would first apply for tax years beginning January 1, 2027.',
      plain: '"Tangible personal property" means physical, movable business assets — machinery, tools, equipment. In Florida these are taxed by LOCAL governments, not the state, with the first $25,000 per taxpayer already exempt.  This would fully exempt farm and agritourism equipment from local property tax, with no dollar cap, where the equipment is usually kept on agriculturally classified land, used to produce agricultural products or run agritourism, and owned by whoever owns or leases that land. The Legislature would define the details later by ordinary statute.  Note that Florida agricultural LAND already receives favorable "greenbelt" assessment based on use value rather than market value. This addresses the EQUIPMENT, which is taxed separately. Given the size of agriculture and citrus in Indian River County, this is more locally consequential here than in most of the state.',
      yes: 'You want farm and agritourism equipment kept on agriculturally classified land exempted from local property tax starting in tax year 2027, with the Legislature setting the details.',
      no: 'You want farm equipment to continue being taxed as tangible personal property by local governments, subject to the existing $25,000 per-taxpayer exemption.',
      fiscal: 'This guide did not locate an official fiscal impact statement or a county-specific revenue estimate. Because the tax is levied locally, the revenue lost would come from county and other local budgets rather than the state — but the amount for Indian River County is unquantified here and is a fair question to put to candidates.',
      money: 'No registered support or opposition committee located.',
      polling: null,
      argsFor: [
        {
          who: 'Legislative sponsors',
          text: 'The near-unanimous bipartisan vote (House 110-1, Senate 37-0) reflects broad agreement that taxing farm equipment burdens agricultural producers. This guide did not locate extended published argument beyond the legislative record.'
        }
      ],
      argsAgainst: [
        {
          who: 'No organized opposition located',
          text: 'This guide found no registered opposition committee and no named opponents. The structural counter-argument — that any new exemption shifts the local tax burden onto other payers or reduces local services — is noted here as an observation about how exemptions work, not as an attributed quote.'
        }
      ],
      source: {
        title: 'Ballotpedia — Florida Agricultural TPP Exemption Amendment (2026)',
        url: 'https://ballotpedia.org/Florida_Exempt_Tangible_Personal_Property_Used_for_Agriculture_or_Agritourism_from_Property_Taxes_Amendment_(2026)',
        date: '2026-08-08'
      }
    }
  ],

  /* ---------------------------------------------------------------- dates */

  deadlines: [
    {
      date: '2026-07-20',
      label: 'Voter registration deadline for the primary',
      detail: 'Passed. If you missed it you can still register for the November 3 general election.',
      source: { title: 'IRC Supervisor of Elections', url: SOE, date: '2026-08-05' }
    },
    {
      date: '2026-08-06',
      label: 'Last day to request a mail ballot for the primary',
      detail: 'Request must be received by 5:00 pm. Request at voteindianriver.gov or call (772) 226-4700.',
      urgent: true,
      source: { title: 'IRC Supervisor of Elections', url: SOE, date: '2026-08-05' }
    },
    {
      date: '2026-08-08',
      label: 'Early voting begins',
      detail: 'Four locations countywide, through August 15. Any registered voter may use any site.',
      urgent: true,
      source: { title: 'IRC Supervisor of Elections', url: SOE, date: '2026-08-05' }
    },
    {
      date: '2026-08-15',
      label: 'Early voting ends',
      source: { title: 'IRC Supervisor of Elections', url: SOE, date: '2026-08-05' }
    },
    {
      date: '2026-08-18',
      label: 'PRIMARY ELECTION DAY',
      detail: 'Polls open 7:00 am to 7:00 pm. Mail ballots must be RECEIVED by 7:00 pm — a postmark is not enough.',
      urgent: true,
      source: { title: 'IRC Supervisor of Elections', url: SOE, date: '2026-08-05' }
    },
    {
      date: '2026-10-05',
      label: 'Voter registration deadline for the general election',
      source: { title: 'IRC Supervisor of Elections', url: SOE, date: '2026-08-05' }
    },
    {
      date: '2026-10-19',
      label: 'Early voting begins for the general election',
      detail: 'Through October 31.',
      source: { title: 'IRC Supervisor of Elections', url: SOE, date: '2026-08-05' }
    },
    {
      date: '2026-10-22',
      label: 'Last day to request a mail ballot for the general election',
      detail: 'By 5:00 pm.',
      source: { title: 'IRC Supervisor of Elections', url: SOE, date: '2026-08-05' }
    },
    {
      date: '2026-11-03',
      label: 'GENERAL ELECTION DAY',
      detail: 'Polls open 7:00 am to 7:00 pm.',
      source: { title: 'IRC Supervisor of Elections', url: SOE, date: '2026-08-05' }
    }
  ],

  /* --------------------------------------------------------------- issues */

  issues: [
    {
      id: 'demographics',
      name: 'Who Votes Here — The Electorate',
      background:
        'As of July 20, 2026, Indian River County had 118,078 active registered voters: 62,760 Republicans (53.2%), 26,072 Democrats (22.1%), 24,003 No Party Affiliation (20.3%), and 5,243 registered with other parties (4.4%). That Republican registration advantage is a large part of why most seriously contested local races are Republican primaries — and why the roughly 50,000 Democratic and NPA voters are the group county races most often overlook, even though several 2026 contests are decided by all of them together.\n\n' +
        'The county is older than the nation as a whole: about 36.1% of residents are 65 or older, against roughly 18% nationally, while 14.7% are under 18. That skews what issues carry weight locally — healthcare access, prescription costs, and property tax burden on fixed incomes tend to matter more here than in a younger county. Population has grown from about 160,000 at the 2020 Census to a 2025 estimate near 172,800, which is also the raw material behind the growth-and-development fights described elsewhere in this guide.\n\n' +
        'Economically, median household income is $57,945 and about 10.3% of residents live below the poverty line. Educational attainment: a 90.1% high school graduation rate and 30.6% with a bachelor\'s degree or higher. By race and ethnicity: 72.8% White non-Hispanic, 14.8% Hispanic, 8.7% Black non-Hispanic, and 1.8% Asian non-Hispanic.',
      numbers: [
        { label: 'Registered Republican', value: '62,760 (53.2%)', source: { title: 'IRC Supervisor of Elections registration report', url: 'https://voteindianriver.gov/', date: '2026-07-20' } },
        { label: 'Registered Democrat', value: '26,072 (22.1%)', source: { title: 'IRC Supervisor of Elections registration report', url: 'https://voteindianriver.gov/', date: '2026-07-20' } },
        { label: 'Registered No Party Affiliation', value: '24,003 (20.3%)', source: { title: 'IRC Supervisor of Elections registration report', url: 'https://voteindianriver.gov/', date: '2026-07-20' } },
        { label: 'Residents aged 65 or older', value: '36.1%', source: { title: 'U.S. Census Bureau QuickFacts — Indian River County, FL', url: 'https://www.census.gov/quickfacts/fact/table/indianrivercountyflorida', date: '2025-07-01' } },
        { label: 'Population, 2025 estimate (from ~160,454 in 2020)', value: '~172,800', source: { title: 'U.S. Census Bureau QuickFacts — Indian River County, FL', url: 'https://www.census.gov/quickfacts/fact/table/indianrivercountyflorida', date: '2025-07-01' } },
        { label: 'Median household income', value: '$57,945', source: { title: 'U.S. Census Bureau QuickFacts — Indian River County, FL', url: 'https://www.census.gov/quickfacts/fact/table/indianrivercountyflorida', date: '2025-07-01' } }
      ],
      sources: [
        { title: 'IRC Supervisor of Elections — voter registration by party', url: 'https://voteindianriver.gov/', date: '2026-07-20' },
        { title: 'U.S. Census Bureau QuickFacts — Indian River County, Florida', url: 'https://www.census.gov/quickfacts/fact/table/indianrivercountyflorida', date: '2025-07-01' }
      ]
    },
    {
      id: 'growth',
      name: 'Growth & Development',
      background:
        'Indian River County has been absorbing steady population growth along the Treasure Coast, and how much to build — and where — is the dominant fault line in county politics. The Board of County Commissioners controls the comprehensive plan, the urban service boundary, zoning, and density approvals, which makes commission races the main place voters can influence growth.\n\n' +
        'The recurring fight is between the position that housing supply must expand to keep workers and young families in the county, and the position that approvals have outrun the roads, schools, water, and character that made the area attractive. State preemption is a live constraint: Florida\'s Live Local Act limits how far local governments can restrict certain affordable housing projects, which narrows what commissioners can actually do.',
      sources: [
        { title: 'Who\'s Running — Indian River County candidates', url: WHOSRUNNING, date: '2026-08-04' }
      ]
    },
    {
      id: 'taxes',
      name: 'Property Taxes & the County Budget',
      background:
        'Property taxes fund most of Indian River County government. The county has held its General Fund and MSTU millage RATES flat for seven consecutive years — but because taxable values keep rising, the flat rate sits above the "rolled-back rate" (the rate that would raise the same revenue as last year). Under Florida law that is technically a tax increase and must be advertised as one. This is why "we didn\'t raise the rate" and "my bill went up" are both true at once, and it is the single most misunderstood thing in local tax debates.\n\n' +
        'The FY2026-27 proposed budget is $614.8 million, up 2.7%. Taxable value growth of 6.8% generates about $7.27 million in new property tax revenue — but a state-mandated 8.1% increase in constitutional officer funding costs about $7.96 million. The mandate alone consumes more than all the new revenue. On top of that the county is absorbing mental health court services and animal control, both new recurring obligations.\n\n' +
        'Looming over all of it is the statewide property tax amendment on the November 3 ballot (see the next section). County Commission District 2 candidate Bob McPartlan put the stakes bluntly when asked about eliminating property taxes: the county "would be in deep doo-doo."',
      numbers: [
        { label: 'FY2025-26 adopted county budget', value: '$598.9M', source: { title: 'WQCS', url: 'https://www.wqcs.org/wqcs-news/2025-09-19/indian-river-county-approves-598-9-million-budget-for-2025-26', date: '2025-09-19' } },
        { label: 'FY2026-27 proposed budget', value: '$614.8M', source: { title: 'WQCS', url: 'https://www.wqcs.org/wqcs-news/2026-07-08/indian-river-county-proposes-614-8-million-budget-with-flat-tax-rate', date: '2026-07-08' } },
        { label: 'General Fund millage (flat 7 years, 6.69% above rolled-back rate)', value: '3.5475', source: { title: 'WQCS', url: 'https://www.wqcs.org/wqcs-news/2025-09-19/indian-river-county-approves-598-9-million-budget-for-2025-26', date: '2025-09-19' } },
        { label: 'New property tax revenue from 6.8% value growth', value: '$7.27M', source: { title: 'WQCS', url: 'https://www.wqcs.org/wqcs-news/2026-07-08/indian-river-county-proposes-614-8-million-budget-with-flat-tax-rate', date: '2026-07-08' } },
        { label: 'State-mandated constitutional officer increase (8.1%) — exceeds all new revenue', value: '$7.96M', source: { title: 'WQCS', url: 'https://www.wqcs.org/wqcs-news/2026-07-08/indian-river-county-proposes-614-8-million-budget-with-flat-tax-rate', date: '2026-07-08' } }
      ],
      sources: [
        { title: 'WQCS — County proposes $614.8M budget with flat tax rate', url: 'https://www.wqcs.org/wqcs-news/2026-07-08/indian-river-county-proposes-614-8-million-budget-with-flat-tax-rate', date: '2026-07-08' },
        { title: 'Indian River County FY2026-27 Budget Workshop Book', url: 'https://www.indianriver.gov/Document%20Center/Services/Management%20&%20Budget/Annual%20Budget%20Documents/2026-27/Budget-Workshop-Book-2026-27.pdf', date: '2026-07-08' },
        { title: 'TCPalm — County Commission District 2 candidate questionnaire', url: 'https://www.aol.com/articles/indian-river-county-commission-district-090321000.html', date: '2026-07-01' }
      ]
    },

    {
      id: 'amendment',
      name: 'The November Property Tax Amendment (HJR 203)',
      background:
        'On November 3, Florida voters decide a constitutional amendment that would sharply cut — and eventually eliminate — non-school property taxes on homesteaded property. It needs 60% approval to pass.\n\n' +
        'What it does: raises the homestead exemption from $50,000 to $150,000 in 2027, then $250,000 in 2028. By 2037, all homestead property would be exempt from non-school property taxes. The expanded exemption does NOT apply to school taxes. Anyone establishing Florida residency after January 1, 2027 must maintain it up to five years before receiving the increased exemption.\n\n' +
        'Why it matters locally more than almost anywhere: because the amendment carves out school taxes but not county, municipal, hospital district, mosquito control, or fire/EMS levies, the entire burden of the cut falls on exactly the local boards on this year\'s ballot. The Florida House staff analysis puts the statewide hit to non-school governments at $4.6 billion a year initially, growing to $8.4 billion.\n\n' +
        'A county-specific estimate for the county general fund has not been published — which is itself worth asking candidates about. The one local number that does exist: Property Appraiser Wesley Davis calculated the amendment would cost the Hospital District alone $2.1+ million in FY2027-28 and roughly a 16% revenue decline.',
      numbers: [
        { label: 'Homestead exemption in 2027, then $250K in 2028 (from $50K)', value: '$150K', source: { title: 'Florida House — CS/CS/HJR 203', url: 'https://www.flhouse.gov/Sections/Bills/billsdetail.aspx?BillId=82728', date: '2026-06-02' } },
        { label: 'Statewide annual revenue loss to non-school governments, rising to $8.4B', value: '$4.6B', source: { title: 'Florida House staff analysis', url: 'https://www.flhouse.gov/Sections/Bills/billsdetail.aspx?BillId=82728', date: '2026-06-02' } },
        { label: 'Voter approval required to pass', value: '60%', source: { title: 'Florida Senate', url: 'https://www.flsenate.gov/PublishedContent/Offices/President/6_2_26_Senate_Passes_Historic_Property_Tax_Cut_for_Florida_Homeowners.pdf', date: '2026-06-02' } },
        { label: 'Estimated FY2027-28 cost to the IRC Hospital District alone', value: '$2.1M+', source: { title: 'Vero News, citing Property Appraiser Wesley Davis', url: 'http://veronews.com/2026/07/30/hospital-district-cant-seem-to-curb-its-spending-habits/', date: '2026-08-04' } }
      ],
      sources: [
        { title: 'Florida House — CS/CS/HJR 203 bill detail', url: 'https://www.flhouse.gov/Sections/Bills/billsdetail.aspx?BillId=82728', date: '2026-06-02' },
        { title: 'Florida Senate — passage announcement (Senate 30-9, House 75-26)', url: 'https://www.flsenate.gov/PublishedContent/Offices/President/6_2_26_Senate_Passes_Historic_Property_Tax_Cut_for_Florida_Homeowners.pdf', date: '2026-06-02' },
        { title: 'Governor\'s office — "Save Our Homes from Excessive Property Taxes"', url: 'https://www.flgov.com/eog/news/press/2026/governor-ron-desantis-announces-special-session-property-tax-relief-unveils-save', date: '2026-01-01' },
        { title: 'Tax Foundation — analysis of the Florida property tax proposal', url: 'https://taxfoundation.org/blog/florida-property-tax-proposal/', date: '2026-01-01' },
        { title: 'Florida Policy Institute — ballot language and local fiscal impacts', url: 'https://www.floridapolicy.org/posts/florida-property-tax-amendment-ballot-language-summary', date: '2026-01-01' }
      ]
    },

    {
      id: 'hospital-district',
      name: 'The Hospital District — the sleeper race',
      background:
        'Three seats on the Indian River County Hospital District board are on the August 18 ballot, and every registered voter can vote them — including No Party Affiliation voters locked out of the partisan primaries. Almost nobody does, and the board levies its own property tax.\n\n' +
        'The District was created about 67 years ago by the Legislature to levy a property tax funding indigent care at the community hospital. In 2019 the Cleveland Clinic Foundation assumed responsibility for most hospital-based indigent care, relieving the District of that original obligation. The District did not reduce its budget or tax rate afterward.\n\n' +
        'Its budget has roughly doubled since FY2021-22, from about $14 million to a proposed $25.37 million for FY2026-27. The proposed millage of 0.7450 sits above the rolled-back rate of 0.7120 — a difference generating about $1.2 million in additional revenue. The District now funds 24+ local nonprofits providing free primary care, dental, mental health counseling, detox, home health nursing, hospice, and meals for low-income residents.\n\n' +
        'Trustees split on the increase. Chair Kerry Bartlett favored "strategic" funding over frugality. Trustee Paul Westcott cast the sole no vote. Dr. Chuck Mackett initially urged reduced spending, then voted for the higher rate. Critics raise mission creep beyond the original indigent-care mandate, trustees serving on boards of nonprofits the District funds, and increasing spending as the November amendment\'s revenue cliff approaches. The defense: the charter permits funding health care broadly, and the funded nonprofits keep people out of emergency rooms.\n\n' +
        'A note on the millage figure: this guide sources 0.7450 directly to the District\'s own FY2025-26 resolution. A separate compiled research summary cited 0.7650 for FY2024-25 without a linked source. That may simply reflect an earlier fiscal year rather than a real conflict, but it would run counter to the "budget rising" trend described above, so it is flagged here rather than silently resolved. Confirm the current rate at irchd.com before relying on either figure.',
      numbers: [
        { label: 'Proposed FY2026-27 budget (roughly double FY2021-22)', value: '$25.37M', source: { title: 'Vero News', url: 'http://veronews.com/2026/07/30/hospital-district-cant-seem-to-curb-its-spending-habits/', date: '2026-08-04' } },
        { label: 'Proposed millage vs. 0.7120 rolled-back rate', value: '0.7450', source: { title: 'IRCHD Resolution 2025-01', url: 'https://irchd.com/wp-content/uploads/2025/09/Resolution-2025-01-Millage-.7450.pdf', date: '2025-09-18' } },
        { label: 'Year Cleveland Clinic assumed most indigent hospital care', value: '2019', source: { title: 'Vero News', url: 'http://veronews.com/2026/07/30/hospital-district-cant-seem-to-curb-its-spending-habits/', date: '2026-08-04' } },
        { label: 'Local nonprofits funded by the District', value: '24+', source: { title: 'IRCHD financials', url: 'https://irchd.com/financials/', date: '2026-08-05' } }
      ],
      sources: [
        { title: 'Vero News — Hospital District spending (opinion-inflected local coverage)', url: 'http://veronews.com/2026/07/30/hospital-district-cant-seem-to-curb-its-spending-habits/', date: '2026-08-04' },
        { title: 'Indian River County Hospital District — financials', url: 'https://irchd.com/financials/', date: '2026-08-05' },
        { title: 'IRCHD FY2025-26 final approved budget', url: 'https://irchd.com/wp-content/uploads/2024/03/2025-2026-DISTRICT-BUDGET-Final-Approved-Budget-9-18-25-530PM.pdf', date: '2025-09-18' }
      ]
    },
    {
      id: 'sheriff-budget',
      name: 'The Sheriff vs. the County Budget Fight',
      background:
        'Sheriff Eric Flowers sued the Board of County Commissioners over his budget — an extraordinary step. Sitting Commissioner Deryl Loar, himself a former Indian River County sheriff, noted this had never happened before in the county\'s history between a constitutional officer and the commission.\n\n' +
        'Flowers initially sought a $14.6 million increase, later revised to $12.2 million, largely to fund a $60,000 deputy base salary competitive with neighboring agencies. Commissioners approved $6.86 million. The legal claim was procedural — that the commission failed to discuss which line items it was cutting. Flowers publicly invoked a "defund the police movement"; the tone shifted after the deaths of a deputy and two county employees.\n\n' +
        'The suit was filed October 6, 2025 and settled April 14, 2026: the county provided an additional $3.5 million (31% general fund, 69% MSTU) and FY2026-27 was capped at a $4 million increase. Flowers dismissed both the circuit court case and the Florida Administration Commission appeal.\n\n' +
        'Commissioners split on how to read it. Deryl Loar — the District 4 incumbent on this year\'s ballot, and himself a former sheriff — called it non-precedent-setting. Commissioner Susan Adams dissented on precedent grounds. What happens from FY2027-28 onward is unresolved, and no one has published what the litigation cost taxpayers in legal fees.',
      numbers: [
        { label: 'Sheriff\'s original requested increase', value: '$14.6M', source: { title: 'WPTV', url: 'https://www.wptv.com/news/treasure-coast/region-indian-river-county/indian-river-county-sheriff-eric-flowers-sues-commissioners-over-budget-dispute', date: '2025-10-01' } },
        { label: 'Increase commissioners approved (July 2025)', value: '$6.86M', source: { title: 'WPTV', url: 'https://www.wptv.com/news/treasure-coast/region-indian-river-county/indian-river-county-sheriff-eric-flowers-sues-commissioners-over-budget-dispute', date: '2025-10-01' } },
        { label: 'Added in the April 2026 settlement', value: '$3.5M', source: { title: 'WQCS', url: 'https://www.wqcs.org/2026-04-14/indian-river-county-reaches-settlement-with-sheriff-eric-flowers-in-budget-lawsuit', date: '2026-04-14' } },
        { label: 'Cap on the FY2026-27 increase', value: '$4M', source: { title: 'CBS12', url: 'https://cbs12.com/news/local/settlement-negotiations-to-begin-in-indian-river-county-sheriffs-lawsuit-against-county-commissioners', date: '2026-04-14' } }
      ],
      sources: [
        { title: 'WPTV — Sheriff sues commissioners over budget dispute', url: 'https://www.wptv.com/news/treasure-coast/region-indian-river-county/indian-river-county-sheriff-eric-flowers-sues-commissioners-over-budget-dispute', date: '2025-10-01' },
        { title: 'WQCS — County reaches settlement with Sheriff Flowers', url: 'https://www.wqcs.org/2026-04-14/indian-river-county-reaches-settlement-with-sheriff-eric-flowers-in-budget-lawsuit', date: '2026-04-14' },
        { title: 'CBS12 — Settlement: $3.5M now, next year capped at $4M', url: 'https://cbs12.com/news/local/settlement-negotiations-to-begin-in-indian-river-county-sheriffs-lawsuit-against-county-commissioners', date: '2026-04-14' }
      ]
    },
    {
      id: 'mosquito-district',
      name: 'The Mosquito Control District — a government most voters don\'t know they fund',
      background:
        'It is an independent special district — a unit of local government legally separate from the county, created by the Legislature in 1925 and re-created by special act in 2006. Three commissioners, elected countywide to four-year terms, control it. It levies its own property tax and raises roughly $5.4 million a year from about 93,000 parcels.\n\n' +
        'What it does: mosquito surveillance, larviciding, truck-mounted spraying after sunset, and Rotational Impoundment Management across 2,600 acres of Indian River Lagoon saltmarsh. That impoundment program is worth knowing about — a state review called it "a unique example of effective mosquito control in vast coastal, environmentally sensitive areas" and a model for neighboring counties, and it removes the need for chemical treatment in those areas. Aerial spraying of naled is reserved for outbreaks and was not triggered at all during the four fiscal years the state reviewed.\n\n' +
        'A 2023 state review by OPPAGA found no material findings and no weaknesses in internal controls — two earlier audit issues were both corrected. But it did criticize the district for lacking measurable performance standards, for not actively managing performance against its goals, and for reporting more than 1,000 service calls a year without reporting how many it actually responded to.\n\n' +
        'The live question: the chair of the Indian River County Commission told the state\'s reviewer that while the district "seems to run efficiently," consolidating it into county government should be considered to improve accountability and transparency. OPPAGA\'s reviewer disagreed and did not recommend consolidation, finding limited efficiency gains available because mosquito control is specialized work. That is the only documented, on-the-record challenge to the district\'s continued independent existence — and it came from the county commission chair, not an activist.\n\n' +
        'Also documentable: revenues exceeded expenditures in consecutive years while the district built reserves for capital improvements. Whether that is prudent or excessive is a fair question to put to candidates.',
      numbers: [
        { label: 'Millage rate — about 25 cents per $1,000 of taxable value', value: '0.25', source: { title: 'OPPAGA review of the district', url: 'https://oppaga.fl.gov/Documents/ContractedReviews/Indian%20River%20MCD%20Final%20Report.pdf', date: '2023-09-01' } },
        { label: 'Roughly what it costs on a $300,000 taxable-value home, per year', value: '~$75', source: { title: 'OPPAGA review of the district', url: 'https://oppaga.fl.gov/Documents/ContractedReviews/Indian%20River%20MCD%20Final%20Report.pdf', date: '2023-09-01' } },
        { label: 'Annual revenue, nearly all from property tax', value: '~$5.4M', source: { title: 'OPPAGA review of the district', url: 'https://oppaga.fl.gov/Documents/ContractedReviews/Indian%20River%20MCD%20Final%20Report.pdf', date: '2023-09-01' } },
        { label: 'Commissioners governing it — one seat is a third of the board', value: '3', source: { title: 'OPPAGA review of the district', url: 'https://oppaga.fl.gov/Documents/ContractedReviews/Indian%20River%20MCD%20Final%20Report.pdf', date: '2023-09-01' } }
      ],
      sources: [
        { title: 'OPPAGA — Indian River Mosquito Control District Review (state review, primary source)', url: 'https://oppaga.fl.gov/Documents/ContractedReviews/Indian%20River%20MCD%20Final%20Report.pdf', date: '2023-09-01' },
        { title: 'Indian River Mosquito Control District — official site', url: 'https://www.irmosquito.com/', date: '2026-08-05' }
      ]
    },

    {
      id: 'lagoon',
      name: 'Indian River Lagoon & Water Quality',
      background:
        'The Indian River Lagoon is both the county\'s defining natural asset and its most persistent policy problem. For years the dominant story was decline — seagrass loss, algae blooms, nutrient pollution from septic systems and fertilizer, and manatee die-offs. That has genuinely started to turn: the St. Johns River Water Management District\'s own 2025 monitoring found lagoon-wide seagrass coverage up about 72% from 2023, with the seagrass also growing denser, not just more widespread. News coverage of the same data noted the recovery has been uneven — some areas, including parts of the central lagoon, lagged behind or kept declining even as the lagoon-wide total rose. Treat the aggregate number as real and well-documented, and the "uneven recovery" caveat as equally real.\n\n' +
        'The main local lever remains septic-to-sewer conversion, which is expensive and slow. County Utilities capital projects manager Howard Richards put a total county-wide price tag on it: $3.31–3.69 billion to bring sewer to the roughly 28,000 properties that still lack it. Utilities Director Sean Lieske separately estimated the cost to an individual homeowner at $5,000–$23,000, depending on what infrastructure already exists on the property — the huge gap between the systemic total and the per-home figure is the county\'s multi-decade capital buildout (trunk lines, lift stations, treatment capacity) versus what one household actually pays. In October 2025 commissioners began weighing a policy that would make sewer connection mandatory where it\'s available. Lagoon health also ties directly to the growth debate, because new development adds nutrient load unless it is sewered.\n\n' +
        'The county also enforces a fertilizer ordinance aimed at the lagoon: no fertilizer containing nitrogen or phosphorus may be applied during the rainy season, June 1 through September 30, and outside that window only products with at least 50% slow-release nitrogen are allowed. Application is also barred year-round immediately before a rain event.',
      numbers: [
        { label: 'Lagoon-wide seagrass coverage, 2023 → 2025', value: '9,924 → 17,042 ha (+72%)', source: { title: 'St. Johns River Water Management District — seagrass data release', url: 'https://www.sjrwmd.com/2026/05/district-releases-updated-seagrass-data-showing-continued-expansion/', date: '2026-05-12' } },
        { label: 'Total county-wide cost to sewer the remaining ~28,000 unsewered properties', value: '$3.31B–$3.69B', source: { title: 'WQCS — County weighs mandatory sewer connection policy amid cost concerns', url: 'https://www.wqcs.org/wqcs-news/2025-10-08/indian-river-county-weighs-mandatory-sewer-connection-policy-amid-cost-concerns', date: '2025-10-08' } },
        { label: 'Estimated cost per homeowner to connect, depending on existing infrastructure', value: '$5,000–$23,000', source: { title: 'WQCS — County weighs mandatory sewer connection policy amid cost concerns', url: 'https://www.wqcs.org/wqcs-news/2025-10-08/indian-river-county-weighs-mandatory-sewer-connection-policy-amid-cost-concerns', date: '2025-10-08' } }
      ],
      sources: [
        { title: 'St. Johns River Water Management District — seagrass data release', url: 'https://www.sjrwmd.com/2026/05/district-releases-updated-seagrass-data-showing-continued-expansion/', date: '2026-05-12' },
        { title: 'WQCS — County weighs mandatory sewer connection policy amid cost concerns', url: 'https://www.wqcs.org/wqcs-news/2025-10-08/indian-river-county-weighs-mandatory-sewer-connection-policy-amid-cost-concerns', date: '2025-10-08' },
        { title: 'Sebastian Daily — Seagrass coverage in Indian River Lagoon expands sharply, new data show', url: 'https://www.sebastiandaily.com/inlet/seagrass-coverage-in-indian-river-lagoon-expands-sharply-new-data-show-91997/', date: '2026-05-12' },
        { title: 'Indian River County — fertilizer ordinance compliance and comparison documents', url: 'https://indianriver.gov/Document%20Center/Services/Public%20Works/Stormwater/Fertilizer%20Ordinance/Compliant-Fertilizers.pdf', date: '2026-08-17' },
        { title: 'Hometown News — Indian River County fertilizer restrictions start June 1', url: 'https://www.hometownnewstc.com/news/indian-river-county-fertilizer-restrictions-start-june-1/article_2306e7ae-dc34-11ec-8a0e-97fee3b1c021.html', date: '2022-05-01' }
      ]
    },
    {
      id: 'schools',
      name: 'Schools, Books & the District Budget',
      background:
        'The School District of Indian River County became a national story over library book removals. Dozens of titles were pulled after organized challenges led by Jennifer Pippin, then chair of the county\'s Moms for Liberty chapter — including, notably, Alan Gratz\'s "Ban This Book," a novel about book banning.\n\n' +
        'Beyond books, the board faces enrollment decline, the fiscal effect of Florida\'s expanded school-choice vouchers on district revenue, teacher recruitment and retention, student discipline policy, and third-grade reading proficiency. The School Board race is decided on the August 18 ballot and is nonpartisan, meaning every registered voter can vote in it regardless of party.',
      sources: [
        { title: 'AP/AOL — Florida school board bans a book about book bans', url: 'https://www.aol.com/news/stranger-fiction-florida-school-board-185124384.html', date: '2024-08-01' }
      ]
    },
    {
      id: 'housing',
      name: 'Housing Affordability',
      background:
        'Housing cost is the issue most often named by employers, school administrators, and public safety agencies trying to hire in the county. It sits at the intersection of the growth debate — more supply versus preserving low density — and of state preemption through the Live Local Act, which limits how far local governments can restrict certain affordable-housing projects.\n\n' +
        'A caution on the numbers below: real-estate aggregator sites (Redfin, Realtor.com, Zillow) routinely disagree with each other by 10–20% on the same market because they use different methodologies and update on different schedules. Treat these as a general picture, not a precise figure, and expect a different site to show a somewhat different number on the same day.',
      numbers: [
        { label: 'Median home sale price (trailing 3 months, +4.9% year-over-year)', value: '~$388,000', source: { title: 'Redfin — Indian River County housing market data', url: 'https://www.redfin.com/county/1006/FL/Indian-River-County/housing-market', date: '2026-08-08' } },
        { label: 'Median rent', value: '~$2,800/mo', source: { title: 'Realtor.com — Indian River County rental market report', url: 'https://www.realtor.com/rentals/Indian-River-County_FL', date: '2026-08-08' } }
      ],
      sources: [
        { title: 'Redfin — Indian River County housing market data', url: 'https://www.redfin.com/county/1006/FL/Indian-River-County/housing-market', date: '2026-08-08' }
      ]
    },
    {
      id: 'insurance',
      name: 'Insurance & Cost of Living',
      background:
        'Property insurance costs and hurricane risk shape household budgets across the Treasure Coast and increasingly drive decisions about where people can afford to live. Local officials have limited control over rates, but do control resilience spending, building standards within state limits, and beach renourishment.',
      researchPending: true
    }
  ],

  /* ---------------------------------------------------------------- races */

  races: [
    {
      id: 'cc-d2',
      office: 'County Commission',
      district: 'District 2',
      type: 'partisan',
      ballot: 'primary',
      term: '4 years',
      stakes:
        'An OPEN SEAT: four-term incumbent Joe Flescher, first elected in 2006, is not seeking re-election. The Board of County Commissioners sets the county property tax rate, approves the budget, and controls zoning, density, and the comprehensive plan — the single most consequential local body for growth and taxes. Note that county commissioners are elected COUNTYWIDE but must live in their district. The three-way Republican money race is unusually tight: all three are within about $4,100 of each other and have each spent roughly 90% of what they raised.',
      whoVotes:
        'On August 18 this is a CLOSED REPUBLICAN primary: only registered Republicans may vote it, choosing among McPartlan, Pippin, and Robinson. Democrat Robert Hardingham is unopposed for his party\'s nomination, so there is no Democratic contest here. NPA and minor-party voters do NOT see this race on their August ballot — but they do get School Board, the special districts, and any referendum questions. On November 3 EVERY registered voter in District 2 votes: the Republican winner vs. Hardingham vs. a blank write-in line. November is what actually decides this seat.',
      candidates: [
        {
          id: 'mcpartlan',
          name: 'Bob McPartlan',
          party: 'R',
          residence: 'Sebastian',
          occupation: 'Sebastian City Council member (currently Vice Mayor); 25+ years, Florida Dept. of Children and Families',
          bio: 'On the Sebastian City Council since 2011, having served as Mayor and currently as Vice Mayor. U.S. Army veteran and former Explosive Ordnance Disposal technician who rose to sergeant, serving in the Army Reserves during Operation Desert Storm. Spent 25+ years with the Florida Department of Children and Families, advancing to leadership overseeing child protective investigations across multiple counties.',
          positions: {
            amendment: {
              summary: 'OPPOSED Amendment 3, the November property tax measure, at a pre-primary candidate forum.',
              source: { title: 'Vero News — District 2 candidate forum', url: 'https://veronews.com/2026/08/07/district-2-commissioner-candidates-discuss-key-issues-before-primary/', date: '2026-08-07' }
            },
            lagoon: {
              summary: 'Names the lagoon his first priority; points to work on it during 15 years on the Sebastian council. In a separate candidate Q&A he reportedly proposed membership on a lagoon council as his specific mechanism, distinct from his opponents\' approaches.',
              quote: 'The Indian River Lagoon is the heart of our community — our economy, our recreation, and our way of life all depend on it.',
              source: { title: 'Campaign website — Issues', url: 'https://votebobmcpartlan.com/', date: '2026-08-05' }
            },
            growth: {
              summary: 'Manage growth responsibly while preserving small-town character; frames it around infrastructure delivery.',
              quote: 'Indian River County is growing, and growth has to be managed responsibly.',
              source: { title: 'Campaign website — Issues', url: 'https://votebobmcpartlan.com/', date: '2026-08-05' }
            },
            taxes: {
              summary: 'Emphasizes "disciplined budgeting" to keep taxes reasonable. Has NOT stated a public position on the November property tax amendment.',
              quote: 'Through disciplined budgeting on the Sebastian City Council, Bob has worked to keep taxes reasonable while still delivering the services residents count on.',
              source: { title: 'Campaign website — Issues', url: 'https://votebobmcpartlan.com/', date: '2026-08-05' }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'This guide found no criminal record, ethics complaint, Sunshine Law finding, litigation, or disciplinary action against McPartlan in accessible public sources.',
              detail: 'Two negative claims circulate from a single partisan local Substack — that he said the county would be in "deep doo-doo" if property taxes were eliminated, and that he voted in 2022 to raise Sebastian residential trash collection rates by 15%. Neither could be corroborated in TCPalm, Vero News, Sebastian Daily, WQCS, WPTV or CBS12, and neither is published here as fact.',
              date: '2026-08-05',
              source: { title: 'This guide\'s review of public sources', url: 'https://www.voteindianriver.gov/campaigns/candidates/financial_reports_profiles.php' }
            },
            {
              type: 'fact',
              claim: 'His campaign website states four priorities but offers no specifics — no position on the property tax amendment, the Sheriff settlement, density caps, septic-to-sewer funding, or land conservation.',
              detail: 'Noted because the absence of stated detail is itself information for voters comparing candidates.',
              date: '2026-08-05',
              source: { title: 'Campaign website', url: 'https://votebobmcpartlan.com/' }
            }
          ],
          finance: {
            raised: 43702,
            spent: 30530,
            selfFunded: 12002,
            asOf: '2026-07-31',
            note: 'Includes about $12,002 in candidate loans. 93% of his money — $40,502 of $43,702 — came from Indian River County addresses, the highest in-county share in the race. 62 donors. Largest single bloc: $4,000 from a commercial real-estate cluster (Thomas P. Kennedy plus three Kennedy LLCs). Dominant donor category: construction and commercial real estate.',
            source: { title: 'IRC Supervisor of Elections campaign finance portal (transaction-level data)', url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=candlist&c=indian', date: '2026-08-05' }
          },
          endorsements: [
            { name: 'Joe Flescher, retiring District 2 commissioner (nearly 20 years on the commission)', source: { title: 'Sebastian Daily', url: 'https://www.sebastiandaily.com/business/flescher-endorses-mcpartlan-in-district-2-county-commission-race-94508/', date: '2026-07-01' } }
          ],
          links: { 'Campaign website': 'https://votebobmcpartlan.com/' }
        },
        {
          id: 'pippin',
          name: 'Jennifer Pippin',
          party: 'R',
          age: 40,
          residence: 'Indian River County',
          occupation: 'Former chair, Moms for Liberty Indian River County; chair, Family First Indian River',
          bio: 'Founding chair of Moms for Liberty Indian River County (2020–2025) and its legislative chair. Led the campaign that removed books from county school libraries. Married with two children; a 2003 graduate of Martin County High School who lists Indian River State College without stating a degree. Her campaign lists her employment as "Current Property Management Company CEO / Orthopedic Practice (Bones) / Outpatient Surgical Center / Indian River Medical Center — Operating Room — 2007." Served on the Florida Dept. of Education Library Media Review Committee (2023–24) and the district Code of Conduct Committee (2022–25). This is her first run for elected office.',
          positions: {
            amendment: {
              summary: 'Explicitly SUPPORTS the November property tax amendment — the sharpest stated contrast in this race.',
              quote: 'I\'m YOUR County Commission District 2 Candidate that Supports the proposed constitutional amendment "Save Our Homes from Excessive Property Taxes" that will appear on Florida\'s November 2026 ballot.',
              source: { title: 'Campaign website homepage', url: 'https://votejenniferpippin.com/', date: '2026-08-05' }
            },
            growth: {
              summary: 'Manage growth responsibly to protect roads, environment and communities.',
              quote: 'Growth should be managed responsibly so our roads, environment, and communities are protected for future generations.',
              source: { title: 'Campaign website', url: 'https://votejenniferpippin.com/', date: '2026-08-05' }
            },
            taxes: {
              summary: 'Frames county government around spending transparency; carries her school-board activism into county government.',
              quote: 'The same accountability I brought to our schools, I am bringing to county government. Same fight. Bigger arena.',
              source: { title: 'Campaign website', url: 'https://votejenniferpippin.com/', date: '2026-08-05' }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'Led the campaign that removed books from Indian River County school libraries.',
              detail: 'Her own framing: "No books are banned in the USA. Our school district has removed over 300 pornographic and sexually explicit content books following local, state and federal laws." Critics note the challenges included a graphic-novel adaptation of The Diary of Anne Frank and Alan Gratz\'s "Ban This Book," a novel about book banning — the latter drew national coverage.',
              date: '2025-10-13',
              source: { title: 'Uncloseted Media — Pippin\'s responses, published in full', url: 'https://www.unclosetedmedia.com/p/pippins-response-s-to-allegations' }
            },
            {
              type: 'allegation',
              claim: 'A nonprofit investigative outlet reported it could not locate a Florida nursing license for Pippin, who has repeatedly been described in national press as an operating-room nurse.',
              detail: 'Uncloseted Media reported that a public-records request returned a Florida Dept. of Health reply that it was "unable to find anyone licensed by the department matching the information provided," and that DOH added "there is no way for a medical license to be made private under any circumstances." The outlet reported finding no record in the state license database, the multistate NURSYS database, or the Competency and Credentialing Institute. A 2024 DOH inquiry reportedly closed without a criminal finding. NOTE: her own 2026 campaign bio lists workplaces, not a nursing license or nursing degree, and does not state she is a registered nurse. No criminal charge or disciplinary action against her has been reported. This question is unresolved — this guide does not assert she is or is not a nurse.',
              date: '2025-09-06',
              response: 'Pippin said she was "surprised to see these allegations being raised again — especially considering they were addressed over a year ago." She states her license is not publicly searchable because a court ordered it hidden from public view for five years following a 2020 fraud suit she filed against someone who allegedly used her license to claim unemployment. She did not provide a license number or documentary evidence to the outlet. The Florida Nurses Association\'s executive director called such a sealing order "unusual."',
              source: { title: 'Uncloseted Media', url: 'https://www.unclosetedmedia.com/p/a-moms-for-liberty-leader-claims' }
            },
            {
              type: 'fact',
              claim: 'Filed a complaint in July 2025 against a Vero Beach wine bar over an all-ages drag/Pride tea event.',
              detail: 'The bar\'s owner, who is also a city official, denies the allegations.',
              date: '2025-07-24',
              source: { title: 'TCPalm', url: 'https://www.tcpalm.com/story/news/local/indian-river-county/2025/07/24/moms-for-liberty-chair-filed-private-complaint-against-pride-tea-event/85340907007/' }
            },
            {
              type: 'allegation',
              claim: 'An outlet alleged the local Moms for Liberty chapter engaged in "harassing, doxing, and defaming their adversaries."',
              date: '2025-10-14',
              response: 'Pippin, in a response the outlet published in full: "Our chapter nor any chapter of Moms for Liberty have doxxed, defamed or harassed adversaries… Otherwise it\'s just hearsay because it\'s simply not true."',
              source: { title: 'Uncloseted Media', url: 'https://www.unclosetedmedia.com/p/pippins-response-s-to-allegations' }
            },
            {
              type: 'fact',
              claim: 'No criminal record, ethics complaint, Sunshine Law finding, or professional disciplinary action against Pippin was located by this guide.',
              date: '2026-08-05',
              source: { title: 'This guide\'s review of public sources', url: 'https://www.voteindianriver.gov/campaigns/candidates/financial_reports_profiles.php' }
            }
          ],
          finance: {
            raised: 37012,
            spent: 34562,
            selfFunded: 6550,
            asOf: '2026-07-31',
            note: 'Includes $6,550 in candidate loans. 104 donors — the broadest donor base of any District 2 candidate. Dominant pattern: small-dollar contributions plus $1,000 maximum checks from local individuals and a conservative donor network.',
            source: { title: 'IRC Supervisor of Elections campaign finance portal (transaction-level data)', url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=candlist&c=indian', date: '2026-08-05' }
          },
          endorsements: [],
          links: { 'Campaign website': 'https://votejenniferpippin.com/' }
        },
        {
          id: 'robinson',
          name: 'Daniel "Brooks" Robinson',
          party: 'R',
          residence: 'Indian River County (lifelong)',
          occupation: 'Attorney; leads his family\'s multi-generational logistics business',
          bio: 'Born and raised in Indian River County — Rosewood Magnet, Gifford Middle, Vero Beach High School. Earned both undergraduate and law degrees at Stetson University. Alongside practicing law he leads the family logistics business founded in the county in 1974, where he has worked since age 16. Joined the Republican Executive Committee at 16 as its youngest member.',
          positions: {
            amendment: {
              summary: 'OPPOSED Amendment 3, the November property tax measure, at a pre-primary candidate forum.',
              source: { title: 'Vero News — District 2 candidate forum', url: 'https://veronews.com/2026/08/07/district-2-commissioner-candidates-discuss-key-issues-before-primary/', date: '2026-08-07' }
            },
            growth: {
              summary: 'Update the comprehensive plan and plan growth deliberately; explicitly rejects becoming a dense South Florida city.',
              quote: 'The goal is not to become another crowded South Florida city, but to remain a thriving, less-dense community where families can live, work, and play locally.',
              source: { title: 'Campaign website', url: 'https://votebrooksrobinson.com/', date: '2026-08-05' }
            },
            taxes: {
              summary: 'Reduce reliance on residential property taxes by broadening the local economy — tax diversification rather than a stated position on the amendment.',
              quote: 'Indian River County must reduce its reliance on residential property taxes by building a more balanced local economy.',
              source: { title: 'Campaign website', url: 'https://votebrooksrobinson.com/', date: '2026-08-05' }
            },
            lagoon: {
              summary: 'The only candidate in this race offering a specific septic-to-sewer mechanism.',
              quote: 'This means improving water quality and responsibly advancing septic-to-sewer solutions through smart public-private partnerships.',
              source: { title: 'Campaign website', url: 'https://votebrooksrobinson.com/', date: '2026-08-05' }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'This guide located no criminal record, ethics complaint, litigation, residency question, or contradictory public statement for Robinson.',
              detail: 'Explicit limitation: this guide did NOT verify his Florida Bar membership or check the Bar\'s discipline database, and did not search county or circuit court records. His logistics-business history is self-reported. Absence of findings here reflects the limits of the search, not a cleared record.',
              date: '2026-08-05',
              source: { title: 'This guide\'s review of public sources', url: 'https://www.voteindianriver.gov/campaigns/candidates/financial_reports_profiles.php' }
            }
          ],
          finance: {
            raised: 33615,
            spent: 32128,
            selfFunded: 22631,
            asOf: '2026-07-31',
            note: 'The most heavily self-funded active candidate in the race — $20,250 of it in candidate loans. 48 donors. Beyond himself, contributions came mainly from retirees, a realtor, and law enforcement.',
            source: { title: 'IRC Supervisor of Elections campaign finance portal (transaction-level data)', url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=candlist&c=indian', date: '2026-08-05' }
          },
          endorsements: [
            { name: 'Indian River Firefighters (professional firefighters\' union)', source: { title: 'Campaign website', url: 'https://votebrooksrobinson.com/', date: '2026-08-05' } },
            { name: 'REALTORS® Association of Indian River County', source: { title: 'Campaign website', url: 'https://votebrooksrobinson.com/', date: '2026-08-05' } }
          ],
          links: { 'Campaign website': 'https://votebrooksrobinson.com/' }
        },
        {
          id: 'hardingham',
          name: 'Robert "Robbie" Hardingham',
          party: 'D',
          age: 50,
          residence: 'Indian River County (since age 5)',
          occupation: 'Long-haul truck driver',
          bio: 'Has lived in Indian River County since age 5 — roughly 45 years. Graduate of Vero Beach High School. Served two years in the U.S. Army driving a fuel truck. Career long-haul truck driver, currently running routes between Fort Pierce and Jacksonville. The sole Democrat qualified for District 2, advancing automatically to the November 3 general election.',
          positions: {
            amendment: {
              summary: 'OPPOSED Amendment 3, the November property tax measure, at a pre-primary candidate forum.',
              source: { title: 'Vero News — District 2 candidate forum', url: 'https://veronews.com/2026/08/07/district-2-commissioner-candidates-discuss-key-issues-before-primary/', date: '2026-08-07' }
            },
            lagoon: {
              summary: 'In a candidate Q&A he reportedly favors holding polluters accountable as his approach to lagoon health, a different emphasis than the infrastructure-focused proposals from the Republicans in this race.',
              source: { title: 'Hometown News Treasure Coast — District 2 candidate Q&A', url: 'https://www.hometownnewstc.com/news/indian_river/irc-district-2-commission-candidates-speak-out/article_40c05ea4-92bf-5a8a-9f4c-49cdae761f0d.html', date: '2026-08-08' }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'This guide could locate no campaign website, issue platform, or quoted policy statements from Hardingham.',
              detail: 'His answers to TCPalm\'s candidate questionnaire exist but sit behind that outlet\'s paywall. This is a real information deficit for voters and is stated plainly rather than left as an empty section. No criminal record, litigation, ethics matter, or controversy was located either — there is very little independent coverage of him in any direction.',
              date: '2026-08-05',
              source: { title: 'Sebastian Daily — the one substantive profile located', url: 'https://www.sebastiandaily.com/business/multiple-candidates-enter-race-for-indian-river-county-commission-district-2-seat-90632/' }
            }
          ],
          finance: {
            raised: 2686,
            spent: 2096,
            selfFunded: 80,
            asOf: '2026-07-31',
            note: '25 donors, almost entirely small-dollar local individuals. Roughly one-sixteenth of the leading Republican total — a minimal-budget campaign.',
            source: { title: 'IRC Supervisor of Elections campaign finance portal (transaction-level data)', url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=candlist&c=indian', date: '2026-08-05' }
          },
          endorsements: [],
          links: {}
        },
        {
          id: 'paradiso',
          name: 'Nicole Paradiso',
          party: 'WRITE-IN',
          residence: 'Indian River County',
          occupation: 'Not yet documented by this guide',
          bio: 'Qualified as a write-in candidate for the November 3 general election. Write-in candidates are never printed on the ballot — a voter choosing her must physically write her name on the blank line provided. Note: her candidacy is NOT what closes the August Republican primary. That is caused by Democrat Robert Hardingham qualifying, which guarantees November opposition regardless of any write-in.',
          positions: {},
          record: [
            {
              type: 'fact',
              claim: 'This guide could locate no biography, occupation, platform, statements, or press coverage of Paradiso in any source.',
              detail: 'She reported raising $30.00 and spending nothing. Her name will not be printed on the November ballot — voters choosing her must write it in.',
              date: '2026-08-05',
              source: { title: 'Indian River County Supervisor of Elections — candidate financial reports', url: 'https://www.voteindianriver.gov/campaigns/candidates/financial_reports_profiles.php' }
            }
          ],
          finance: {
            raised: 30.00,
            spent: 0,
            asOf: '2026-08-05',
            source: { title: 'Indian River County Supervisor of Elections — candidate financial reports', url: 'https://www.voteindianriver.gov/campaigns/candidates/financial_reports_profiles.php', date: '2026-08-05' }
          },
          endorsements: [],
          links: {}
        }
      ]
    },

    {
      id: 'cc-d4',
      office: 'County Commission',
      district: 'District 4',
      type: 'partisan',
      ballot: 'general',
      term: '4 years',
      stakes: 'A head-to-head general election contest for a seat on the board that sets the county tax rate, approves the budget, and decides zoning and density. It pits a long-serving law enforcement figure — county commissioner since 2022, sheriff for three terms before that — against a first-time candidate and small business owner who qualified by gathering petition signatures. Neither faces a primary opponent.',
      whoVotes: 'All registered voters in District 4, regardless of party, vote in this race on NOVEMBER 3. Because each candidate is unopposed for their party\'s nomination, this race does NOT appear on the August 18 primary ballot at all.',
      candidates: [
        {
          id: 'loar',
          name: 'Deryl Loar',
          party: 'R',
          incumbent: true,
          age: 58,
          residence: 'Indian River County',
          occupation: 'County Commissioner, District 4; former Sheriff of Indian River County',
          bio: 'Elected to the County Commission in 2022. Previously Sheriff of Indian River County, elected in 2008 and re-elected in 2012 and 2016. Before that, District Commander for the Florida Highway Patrol on the Treasure Coast from 1989 to 2008. Holds a BA in public administration. Describes himself as "a public servant for over 36 years." Serves with VNA Hospice and other community organizations.',
          positions: {
            'sheriff-budget': {
              summary: 'Described the sheriff\'s lawsuit against the commission as unprecedented in county history.',
              quote: 'This has never been done in the history of Indian River County where a constitutional officer has sued the board of county commissioners over budget concerns.',
              source: {
                title: 'WPTV',
                url: 'https://www.wptv.com/news/treasure-coast/region-indian-river-county/indian-river-county-sheriff-eric-flowers-sues-commissioners-over-budget-dispute',
                date: '2025-10-01'
              }
            },
            taxes: {
              summary: 'Names fiscal responsibility as his first stated priority, alongside public safety and a professional legislative body focused on policy and budget.',
              source: {
                title: 'TCPalm candidate questionnaire, via AOL',
                url: 'https://www.aol.com/articles/indian-river-county-commission-district-090321000.html',
                date: '2026-06-28'
              }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'The most serious civil case naming Loar in his official capacity as sheriff was litigated to a jury verdict and a federal appellate affirmance — and the Sheriff\'s Office prevailed on every claim.',
              detail: 'Teel v. Lozada arose from the 2017 shooting death of Susan Teel by a deputy responding to a suicide attempt. A grand jury declined to indict the deputy in 2018. The estate then filed a $10 million federal civil rights suit naming Loar and the deputy. After the Eleventh Circuit revived part of the case, a March 2022 jury found the deputy did NOT use excessive force, and the Eleventh Circuit affirmed on all issues on April 18, 2024. No liability was found and no money was paid on the claim. By the time of appeal the official-capacity defendant had automatically become Sheriff Eric Flowers, but the conduct occurred under Loar.',
              date: '2024-04-18',
              source: {
                title: 'Eleventh Circuit published opinion, No. 22-11106',
                url: 'https://media.ca11.uscourts.gov/opinions/pub/files/202211106.pdf'
              }
            },
            {
              type: 'fact',
              claim: 'A U.S. Department of Justice civil rights investigation of his agency closed with NO VIOLATION found — but DOJ documented concerns about the agency\'s disability-communication policies, which the agency then changed.',
              detail: 'The DOJ Office for Civil Rights issued a Notice of Findings to Sheriff Loar in February 2019 on a complaint alleging the agency failed to provide effective communication to a person with a disability during arrest and detention. OCR concluded the evidence did not support a finding of violation under Section 504 or Title II of the ADA. It also wrote that the evidence "raised concerns regarding the IRCSO\'s policies, procedures, and trainings for effective communication with individuals who have communication disabilities," and that the agency "has proactively adopted several changes to ameliorate these concerns." Both halves belong together.',
              date: '2019-02-04',
              source: {
                title: 'U.S. DOJ Office for Civil Rights, Notice of Findings, Complaint No. 17-OCR-1042',
                url: 'https://www.ojp.gov/sites/g/files/xyckuh241/files/media/document/no17ocr1042nof_redacted.pdf'
              }
            },
            {
              type: 'fact',
              claim: 'Mario Pratt sued Loar in his official capacity as sheriff in 2015. Loar prevailed at the trial court and the Fourth District Court of Appeal affirmed without opinion. Pratt lost.',
              detail: 'A per curiam affirmance publishes no reasoning, so the appellate record does not state what the suit was about. This guide is not characterizing the underlying claim, because doing so would require pulling the county clerk\'s file.',
              date: '2019-03-21',
              source: {
                title: 'Florida 4th DCA, No. 4D18-340',
                url: 'https://law.justia.com/cases/florida/fourth-district-court-of-appeal/2019/18-0340.html'
              }
            },
            {
              type: 'fact',
              claim: 'As sheriff, his budget requests were repeatedly contested by the same County Commission he now sits on — including a roughly $950,000 loan request for Hurricane Irma overtime in 2017.',
              detail: 'This is budget and policy conflict, not misconduct, and is labeled as such.',
              date: '2017-01-01',
              source: {
                title: 'Contemporaneous local coverage',
                url: 'https://www.aol.com/articles/indian-river-county-commission-district-090321000.html'
              }
            },
            {
              type: 'fact',
              claim: 'No state law enforcement or Florida Commission on Ethics investigation, criminal charge, or disciplinary action involving Loar was located by this guide.',
              detail: 'A null result from research, not a certification. Separately: this guide reviewed but is NOT publishing two reported jail incidents from his tenure as sheriff, because the only source located was a low-quality aggregator with no news report, court docket, or medical examiner record behind it. Noted so readers know the thread was checked and failed the evidence standard.',
              date: '2026-08-08',
              source: {
                title: 'This guide verification standard',
                url: 'methodology.html'
              }
            }
          ],
          finance: {
            raised: 54690,
            spent: 6040,
            selfFunded: 12000,
            asOf: '2026-07-31',
            note: 'The largest war chest of any local candidate this cycle, and he has spent only about 11% of it — a strong position heading into November. Includes a $10,000 candidate loan plus $2,000 in-kind. 54 donors. Dominant categories: business owners, real estate, and out-of-county manufacturing.',
            source: {
              title: 'IRC Supervisor of Elections campaign finance portal',
              url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=candlist&c=indian',
              date: '2026-08-05'
            }
          },
          endorsements: [],
          links: {

          }
        },
        {
          id: 'jaffe',
          name: 'Marc Jaffe',
          party: 'D',
          age: 40,
          residence: 'Vero Beach',
          occupation: 'Owner, The Jaffe Agency (life insurance and retirement planning) and The Vero Beach Handyman',
          bio: 'A Florida resident since 1996 who bought his first Vero Beach home at 18 and is married to his high school sweetheart; they have two sons. Holds an associate degree in business administration earned through dual enrollment, with a career in business development, technology sales and marketing before running his own businesses. Active in Temple Beth Shalom leadership. Cites Hurricanes Frances and Jeanne in 2004 as formative on emergency preparedness. No prior elected office. Notably, he qualified for the ballot by CITIZEN PETITION — gathering 1,281 verified signatures — rather than by paying the qualifying fee.',
          positions: {
            growth: {
              summary: 'Supports development that funds its own infrastructure, and weighing cumulative environmental impact rather than project-by-project.',
              quote: 'Growth is coming whether we plan for it or not. The question is whether we will manage that growth responsibly.',
              source: {
                title: 'Campaign website',
                url: 'https://votemarcjaffe.com/issues',
                date: '2026-08-08'
              }
            },
            lagoon: {
              summary: 'Frames lagoon health as an economic necessity, calling for science-based decisions and better stormwater management.',
              quote: 'A healthy lagoon is not just an environmental goal — it\'s an economic necessity and a quality-of-life issue.',
              source: {
                title: 'Campaign website',
                url: 'https://votemarcjaffe.com/issues',
                date: '2026-08-08'
              }
            },
            taxes: {
              summary: 'Calls for transparent spending, competitive contract oversight, and prioritizing infrastructure and public safety over what he calls wasteful projects. His signature proposal is a public-facing departmental dashboard and scorecard.',
              quote: 'Measure Results. Publish the Score. Earn the Trust.',
              source: {
                title: 'Campaign website',
                url: 'https://votemarcjaffe.com/issues',
                date: '2026-08-08'
              }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'Qualified for the ballot by citizen petition with 1,281 verified signatures rather than by paying the qualifying fee.',
              detail: 'A meaningful distinction: petition qualification requires demonstrating organized local support, and is the harder of the two paths.',
              date: '2026-06-28',
              source: {
                title: 'TCPalm candidate questionnaire, via AOL',
                url: 'https://www.aol.com/articles/indian-river-county-commission-district-090321000.html'
              }
            },
            {
              type: 'fact',
              claim: 'His campaign site does not address property taxes or the November property tax amendment, the sheriff budget lawsuit and settlement, septic-to-sewer funding, affordable housing specifics, or land conservation.',
              detail: 'Verified by direct review of the site. Noted because those are among the largest issues the commission actually decides.',
              date: '2026-08-08',
              source: {
                title: 'Campaign website',
                url: 'https://votemarcjaffe.com/issues'
              }
            },
            {
              type: 'fact',
              claim: 'This guide found nothing adverse on Marc Jaffe — no prior candidacy, litigation, business discipline, or controversy.',
              detail: 'A null result, not a clean bill of health. A fuller check would require Florida Division of Corporations records, state insurance-agent licensure and discipline records, and county clerk civil dockets, none of which were machine-searchable for this edition.',
              date: '2026-08-08',
              source: {
                title: 'This guide review of public sources',
                url: 'https://www.aol.com/articles/indian-river-county-commission-district-090321000.html'
              }
            }
          ],
          finance: {
            raised: 2863,
            spent: 1070,
            selfFunded: 100,
            asOf: '2026-07-31',
            note: '21 donors, almost entirely small-dollar local individuals. Roughly one-nineteenth of the incumbent total.',
            source: {
              title: 'IRC Supervisor of Elections campaign finance portal',
              url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=candlist&c=indian',
              date: '2026-08-05'
            }
          },
          endorsements: [],
          links: {
            'Campaign website': 'https://votemarcjaffe.com/'
          }
        }
      ]
    },

    {
      id: 'sb-d2',
      office: 'School Board',
      district: 'District 2',
      type: 'nonpartisan',
      ballot: 'primary',
      term: '4 years',
      stakes:
        'The School Board sets district policy, approves the budget, hires and evaluates the superintendent, and decides challenges to library books — the issue that put this district in national news. District 2 covers the southern half of Sebastian south to the city of Vero Beach, plus the northern tip of the barrier island.',
      whoVotes:
        'EVERY registered voter in District 2 may vote in this race on August 18, including No Party Affiliation and third-party voters — school board races in Florida are nonpartisan and not restricted by party. With only two candidates, August 18 decides this seat. Worth knowing: as of July 20, 2026 the county had 26,072 registered Democrats and 24,003 NPA voters — about 50,000 people who have few or no partisan primaries pulling them to the polls, but who can all vote this race.',
      candidates: [
        {
          id: 'rosario',
          name: 'Jacqueline "Jackie" Rosario',
          party: 'NONPARTISAN',
          incumbent: true,
          age: 56,
          residence: 'Vero Beach',
          occupation: 'School Board member since 2018; former ESL teacher and assistant principal',
          bio: 'Elected in 2018 and re-elected in 2022, now in her eighth year on the board. Began her career teaching English as a Second Language, later serving as assistant principal, professional learning facilitator and instructional leader. Holds graduate degrees from CUNY Hunter College (special education/deaf education) and CUNY Baruch College (education leadership), and a PhD in Educational Law from Liberty University. A Florida School Boards Association Certified Board Member. She homeschools her 17-year-old son and describes herself as "the common-sense conservative voice on the school board."',
          positions: {
            schools: {
              summary: 'Centers post-secondary readiness — every graduate leaving with a plan via CTE, dual enrollment and the PATH program. Cites district improvement from 38th to 5th in the state since 2018.',
              quote: 'I believe every graduating senior should leave our school district with a clear post-secondary plan, whether that path leads to college, a university, military service, or a career and technical profession.',
              source: { title: 'Ballotpedia Candidate Connection survey', url: 'https://ballotpedia.org/Jacqueline_Rosario_(School_District_of_Indian_River_County_school_board_District_2,_Florida,_candidate_2026)', date: '2026-06-25' }
            }
          },
          record: [
            {
              type: 'vote',
              claim: 'Voted in the 3-2 majority to remove "Ban This Book" by Alan Gratz — a novel about book banning — overruling the district\'s own review committee, which had recommended keeping it.',
              detail: 'The removal drew national coverage. Author Alan Gratz called it "erasure of the highest order" and asked for the book to be reinstated.',
              date: '2024-05-20',
              response: 'Rosario said the decision "had nothing to do with politics" but "everything to do with what was appropriate," adding: "We have the legal right. Each district school board is responsible for the content of all – not some – all instructional materials." and "At the end of the day, it is the board\'s responsibility...it is up to this board to take final action."',
              source: { title: 'WPTV', url: 'https://www.wptv.com/news/education/school-district-of-indian-river-co-banned-ban-this-book-author-calls-it-erasure-of-the-highest-order' }
            },
            {
              type: 'vote',
              claim: 'Voted with a unanimous board to remove "at least a couple dozen" books after Moms for Liberty representatives read excerpts aloud at the meeting, overriding the district\'s standard review procedure.',
              detail: 'Under the procedure applied that night, a chairperson interrupting a reading triggered immediate removal from shelves. This is the best-documented instance of an outside group directly driving a removal decision. Whether that amounts to improper influence is contested opinion, not established fact. Individual votes were not recorded by name; the vote is reported as unanimous among members present.',
              date: '2023-08-28',
              response: 'Rosario at the meeting: "Even with the first letter, this is really graphic. And we have a rule here. Nothing obscene."',
              source: { title: 'CBS12', url: 'https://cbs12.com/news/local/florida-law-books-under-review-this-is-really-graphic-indian-river-county-school-board-removes-dozens-of-books-at-the-publics-request-august-29-2023' }
            },
            {
              type: 'vote',
              claim: 'Cast the lone NO vote against raising Superintendent David Moore\'s salary from $195,699 to $239,000, a 22% increase. The vote was 4-1.',
              detail: 'The board justified the raise by benchmarking against Martin County and citing two consecutive district A ratings. Note the tension with her campaign site, which praises Moore as Florida Superintendent of the Year — both are presented here without characterizing either as a contradiction.',
              date: '2024-10-22',
              response: 'Rosario: "It\'s not the work. I\'m incredibly grateful for the work that you do. It is exemplary. I just think that (the raise amount) is a little too excessive."',
              source: { title: 'TCPalm via AOL', url: 'https://www.aol.com/indian-river-school-board-gives-013515379.html' }
            },
            {
              type: 'fact',
              claim: 'Publicly opposed charter school expansion into district facilities, calling Florida\'s "Schools of Hope" legislation an "extreme overreach."',
              detail: 'Her concern: charter operators occupy public facilities without contributing financially while the district still pays maintenance, custodial, safety, food, nursing and transportation costs. IMPORTANT NUANCE: Rosario campaigns as a school choice supporter (magnet and classical programs, homeschooling) while opposing charter operators taking district buildings. These are not contradictory but are easily conflated.',
              date: '2025-10-24',
              source: { title: 'WQCS', url: 'https://www.wqcs.org/wqcs-news/2025-10-24/indian-river-county-school-board-pleads-push-back-against-charter-schools-moving-in' }
            }
          ],
          finance: {
            raised: 31790,
            spent: 21845,
            selfFunded: 0,
            asOf: '2026-07-31',
            note: 'No self-funding at all. 101 donors. Dominant donor category: the Republican party and state-level political committees. Has spent only about 69% of what she raised, leaving the larger cash reserve for the final two weeks. Contribution cap is $1,000 per person.',
            source: { title: 'IRC Supervisor of Elections campaign finance portal (transaction-level data)', url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=candlist&c=indian', date: '2026-08-05' }
          },
          endorsements: [
            { name: 'Indian River GOP (Republican Executive Committee of Indian River County)', source: { title: 'Ballotpedia Candidate Connection', url: 'https://ballotpedia.org/Jacqueline_Rosario_(School_District_of_Indian_River_County_school_board_District_2,_Florida,_candidate_2026)', date: '2026-06-25' } },
            { name: 'Hispanic Conservatives of Indian River', source: { title: 'Ballotpedia Candidate Connection', url: 'https://ballotpedia.org/Jacqueline_Rosario_(School_District_of_Indian_River_County_school_board_District_2,_Florida,_candidate_2026)', date: '2026-06-25' } },
            { name: 'U.S. Rep. Mike Haridopolos (R)', source: { title: 'Ballotpedia', url: 'https://ballotpedia.org/Jacqueline_Rosario_(School_District_of_Indian_River_County_school_board_District_2,_Florida,_candidate_2026)', date: '2026-08-05' } }
          ],
          links: { 'Campaign website': 'https://www.reelectjackie.com/', 'Ballotpedia': 'https://ballotpedia.org/Jacqueline_Rosario_(School_District_of_Indian_River_County_school_board_District_2,_Florida,_candidate_2026)' }
        },
        {
          id: 'lange',
          name: 'Thomas "Tom" Lange',
          party: 'NONPARTISAN',
          age: 43,
          residence: 'Sebastian',
          occupation: 'Former English teacher and district career/technical education specialist',
          bio: 'Nearly two decades in Indian River County education. Taught English at Sebastian River High School from 2006 to 2018, serving as English department chair, then worked as the district\'s career and technical education specialist from 2018 to 2023. Founded Sebastian River Rowing in 2006; the program has won numerous scholastic state championships (outlets differ — Vero News reported 24, Sebastian Daily 27 plus $2M+ in scholarships, four days apart). Has two children attending district schools. First run for office.',
          positions: {
            schools: {
              summary: 'Six pillars: academic excellence and accountability, student opportunity and career pathways, data-informed decisions, fiscal transparency, community partnerships, and teacher support.',
              quote: 'I\'m committed to academic excellence, expanding student opportunity, supporting teachers, and making data-driven, transparent decisions that put students first.',
              source: { title: 'Campaign website', url: 'https://votetomlange.com/', date: '2026-08-05' }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'Has never held elected office and therefore has no voting record.',
              detail: 'Rosario has served since 2018 and has an eight-year record; the volume of documented material differs between these candidates as a function of incumbency, not as a judgment about either. This guide did not manufacture equivalent record items for Lange.',
              date: '2026-08-05',
              source: { title: 'Vero News', url: 'https://veronews.com/2026/01/22/2-school-board-incumbents-will-seek-re-election/' }
            },
            {
              type: 'fact',
              claim: 'His campaign website does not address book challenges, the superintendent\'s evaluation, vouchers, school safety, mental health, or the role of Moms for Liberty.',
              detail: 'Noted because the silence is itself information for voters weighing this race against the issues that have dominated the board.',
              date: '2026-08-05',
              source: { title: 'Campaign website', url: 'https://votetomlange.com/' }
            },
            {
              type: 'unverified',
              claim: 'A self-published local Substack attacks Lange\'s campaign funding as driven by "special interests."',
              detail: 'This is a partisan opinion blog, not a news outlet. This guide could not verify its claims and does not repeat them as fact — it is noted only so readers who encounter it know it was checked and found unverified.',
              date: '2026-08-05',
              source: { title: 'thomasaugustus.substack.com (partisan opinion blog)', url: 'https://thomasaugustus.substack.com/p/editorial-the-special-interest-campaign' }
            }
          ],
          finance: {
            raised: 18055,
            spent: 17214,
            selfFunded: 0,
            asOf: '2026-07-31',
            note: 'No self-funding. 42 donors, concentrated in a retired Vero Beach donor network writing $1,000 maximum checks. Has spent 95% of what he raised. Contribution cap is $1,000 per person.',
            source: { title: 'IRC Supervisor of Elections campaign finance portal (transaction-level data)', url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=candlist&c=indian', date: '2026-08-05' }
          },
          endorsements: [
            { name: 'TCPalm / Treasure Coast Newspapers editorial board — a newspaper opinion, produced separately from its news reporting. Not a factual finding and not an official endorsement.', source: { title: 'TCPalm editorial, via AOL', url: 'https://www.aol.com/news/indian-river-county-school-board-090005186.html', date: '2026-07-12' } }
          ],
          links: { 'Campaign website': 'https://votetomlange.com/', 'Ballotpedia': 'https://ballotpedia.org/Thomas_Lange_(School_District_of_Indian_River_County_school_board_District_2,_Florida,_candidate_2026)' }
        }
      ]
    },

    {
      id: 'sb-d1',
      office: 'School Board',
      district: 'District 1',
      type: 'nonpartisan',
      ballot: 'primary',
      stakes: 'Unopposed. Ryan Matthews qualified without opposition and is elected to the seat.',
      whoVotes: 'Unopposed races may not appear on your ballot.',
      candidates: [
        {
          id: 'matthews',
          name: 'Ryan Matthews',
          party: 'NONPARTISAN',
          age: 39,
          residence: 'Sebastian',
          occupation: 'Former Marine Corps officer and federal law enforcement officer',
          bio: 'Sebastian native and 2004 graduate of Sebastian River High School. Bachelor\'s in criminal justice from the University of North Florida; currently pursuing an aerospace engineering degree at Florida Institute of Technology. Commissioned as a Marine Corps artillery officer in 2010, later a federal law enforcement officer with the Defense Intelligence Agency and an officer with the Florida Fish and Wildlife Conservation Commission; medically separated in 2019 after an injury. Three sons at Liberty Magnet Elementary. Coaches Sebastian Little League. Running unopposed for the seat currently held by Gene Posca. His four stated priorities: child education and safety first; making public schools the preferred choice for local families; making the district Florida\'s most desirable employer for educators; and fiscal transparency.',
          positions: {}, record: [],
          finance: {
            raised: 17906,
            spent: 1541,
            selfFunded: 1000,
            asOf: '2026-07-31',
            note: 'Unopposed. 38 donors, drawing on the same retired Vero Beach donor network as Lange. Has spent under 9% of what he raised, unsurprising for an uncontested seat.',
            source: { title: 'IRC Supervisor of Elections campaign finance portal (transaction-level data)', url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=candlist&c=indian', date: '2026-08-05' }
          },
          endorsements: [],
          links: {}
        }
      ]
    },

    {
      id: 'sb-d4',
      office: 'School Board',
      district: 'District 4',
      type: 'nonpartisan',
      ballot: 'primary',
      stakes: 'Unopposed. Incumbent Teri Barenborg qualified without opposition and returns to the seat.',
      whoVotes: 'Unopposed races may not appear on your ballot.',
      candidates: [
        {
          id: 'barenborg',
          name: 'Teri L. Barenborg',
          party: 'NONPARTISAN',
          incumbent: true,
          age: 65,
          residence: 'Indian River County',
          occupation: 'School Board member since 2018; veteran educator',
          bio: 'Represents the southeastern corner of the county and has served on the board since 2018. Previously taught at Dodgertown Elementary and served as assistant principal at Indian River Academy. Currently the board\'s legislative liaison. On the district\'s trajectory: "We want to maintain the upward spiral that we\'ve got going." On school choice and unfunded mandates: "I am all for school choice. But that\'s just not fair." Unopposed.',
          positions: {}, record: [],
          finance: {
            raised: 15430,
            spent: 574,
            selfFunded: 10250,
            asOf: '2026-07-31',
            note: 'Unopposed. 66% self-funded through $10,250 in candidate loans, with only 10 donors. Has spent under 4% of what she raised.',
            source: { title: 'IRC Supervisor of Elections campaign finance portal (transaction-level data)', url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=candlist&c=indian', date: '2026-08-05' }
          },
          endorsements: [],
          links: {}
        }
      ]
    },

    {
      id: 'mosquito-2',
      office: 'Mosquito Control District',
      district: 'Seat 2',
      type: 'nonpartisan',
      ballot: 'primary',
      term: '4 years',
      stakes: 'The ONLY contested special-district race on the August 18 ballot, and one of just two races open to every voter regardless of party. This is a separate government you already pay taxes to: an independent special district created by the Legislature in 1925, governed by just THREE commissioners elected countywide, levying its own property tax of about 0.25 mills — roughly $75 a year on a home with $300,000 of taxable value, paid by about 93,000 parcels. It raises around $5.4 million a year. With only three seats, this one is a third of the entire governing body.',
      whoVotes: 'EVERY registered voter in Indian River County, including No Party Affiliation voters. It is nonpartisan, and with two candidates it is decided outright on August 18 — it does not appear again in November. Worth noting: roughly 24,000 NPA and 26,000 Democratic voters are eligible here, and neither candidate has made a documented campaign expenditure aimed at them. Both candidates\' only political-organization spending was at Republican Party events. That is a sourced observation about spending, not a claim about either candidate\'s registration, which this guide did not verify.',
      candidates: [
        {
          id: 'kirkland',
          name: 'Anna J. Kirkland',
          party: 'NONPARTISAN',
          incumbent: true,
          residence: 'Vero Beach',
          occupation: 'Estate manager; sitting Seat 2 commissioner',
          bio: 'The sitting Seat 2 commissioner, elected in 2022. By her own filed candidate statement: a third-generation Floridian and lifelong Indian River County resident, Vero Beach High School graduate, with an associate degree from Indian River State College and a bachelor\'s in business administration anticipated January 2027. Career in executive-level administration and estate management. Founded the Indian River County Cattlewomen chapter in 2019 and serves as its president. Has served on the Agriculture Advisory Committee, Economic Development Council, Environmental Control Hearing Board, and the Treasure Coast Regional Planning Council CEDS committee.',
          positions: {
            taxes: {
              summary: 'Frames her candidacy around fiscal oversight and stewardship of taxpayer money, without naming a specific policy.',
              quote: 'Responsible governance, fiscal oversight, and ensuring that taxpayer resources are managed effectively.',
              source: {
                title: 'Candidate statement filed with the Supervisor of Elections',
                url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=cv&e=18&c=indian&ca=562&rellevel=4&committee=N',
                date: '2026-08-05'
              }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'Her filed candidate statement contains no specific policy proposal — no stated position on the millage rate, aerial spraying, the district\'s growing reserves, or the consolidation question.',
              detail: 'Noted because in a race with two candidates and almost no press coverage, the filed statement is the main thing a voter can read.',
              date: '2026-08-05',
              source: {
                title: 'Candidate statement filed with the Supervisor of Elections',
                url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=cv&e=18&c=indian&ca=562&rellevel=4&committee=N'
              }
            },
            {
              type: 'fact',
              claim: 'Descriptions of her degree program differ across three sources — the 2026 filing, the district\'s own bio page, and 2022-era material.',
              detail: 'Not necessarily contradictory, since programs change. The 2026 filing is the operative self-description. Noted for completeness rather than as an allegation.',
              date: '2026-08-05',
              source: {
                title: 'District commissioner bio page',
                url: 'https://www.irmosquito.com/anna-kirkland'
              }
            },
            {
              type: 'fact',
              claim: 'This guide located no lawsuits, ethics complaints, criminal record, or controversies involving Kirkland.',
              detail: 'Reported as nothing found rather than as a clean record — the search was web-based and did not include a manual clerk-of-court docket search.',
              date: '2026-08-05',
              source: {
                title: 'This guide review of public sources',
                url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=cv&e=18&c=indian&ca=562&rellevel=4&committee=N'
              }
            }
          ],
          finance: {
            raised: 2450.0,
            spent: 60.0,
            selfFunded: 450.0,
            asOf: '2026-08-05',
            note: 'Includes $300 in-kind. Only TWO outside donors. Out-raised by her challenger nearly 2 to 1 — unusual for an incumbent. Her single reported expenditure, $60, went to a Republican Women event.',
            source: {
              title: 'IRC Supervisor of Elections campaign finance portal',
              url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?c=indian&e=18',
              date: '2026-08-05'
            }
          },
          endorsements: [],
          links: {
            'Campaign website': 'https://annakirklandmosquitocontrol.com/',
            'District bio': 'https://www.irmosquito.com/anna-kirkland'
          }
        },
        {
          id: 'maccoy',
          name: 'Craig E. MacCoy',
          party: 'NONPARTISAN',
          residence: 'Vero Beach',
          occupation: 'Operations Manager, Chuck Stone Painting (confirmed directly with the company)',
          bio: 'Works as Operations Manager at Chuck Stone Painting, a Vero Beach painting company — confirmed directly on the company\'s own staff page. Business records connect a Craig MacCoy at the same street address on file with the Supervisor of Elections to a Vero Beach pool-service business dating to 2004, alongside his current painting-company role. Ran previously for a DIFFERENT seat on this board — Seat 1 — in 2020, when a news article described him as a consultant and a graduate student at USF studying cybercrime. His 2026 Supervisor of Elections filing itself still contains no biography, platform, or photograph.',
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'His official Supervisor of Elections page contains contact information and financial reports only — no biography, no platform, no photograph filed with the county.',
              detail: 'A voter who looks him up through the official county channel finds nothing about who he is there. This guide also found no 2026 campaign website and no campaign social media with meaningful content. His opponent filed a statement with the county and has both a website and a Facebook page.',
              date: '2026-08-05',
              source: {
                title: 'Supervisor of Elections candidate profile',
                url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=cv&e=18&c=indian&ca=571&rellevel=4&committee=N'
              }
            },
            {
              type: 'fact',
              claim: 'Independently confirmed: he serves as Operations Manager at Chuck Stone Painting.',
              detail: 'Verified directly against the employer\'s own staff listing, not just a campaign or aggregator claim.',
              date: '2026-08-08',
              source: { title: 'Chuck Stone Painting — Our Team', url: 'https://www.chuckstonepainting.com/our-team/' }
            },
            {
              type: 'fact',
              claim: 'A TCPalm candidate questionnaire published June 28, 2026 reportedly quotes MacCoy describing his education as Walsingham Academy, Fork Union Military Academy, and Virginia Commonwealth University, a self-owned consulting business called "Blue Sky Consultation," and volunteer work as a Little League coach and umpire.',
              detail: 'IMPORTANT CAVEAT: this guide\'s fetching tool is blocked from accessing tcpalm.com directly and could not independently read the article. None of these specific details — the two schools, VCU, or "Blue Sky Consultation" — turned up in independent public-records searches this guide could run. This is reported here, attributed to TCPalm, rather than stated as this guide\'s own verified fact. The direct link is provided so it can be checked by anyone with TCPalm access.',
              date: '2026-06-28',
              source: { title: 'TCPalm — Indian River County Mosquito Control District candidates answer election questions', url: 'https://www.tcpalm.com/story/news/politics/elections/2026/06/28/indian-river-county-florida-mosquito-control-district-candidates-2026-election-vero-beach-irc/90524751007/' }
            },
            {
              type: 'fact',
              claim: 'This guide located no lawsuits, ethics complaints, or criminal matters involving MacCoy.',
              detail: 'Reported as nothing found rather than as a clean record.',
              date: '2026-08-05',
              source: {
                title: 'This guide review of public sources',
                url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?op=cv&e=18&c=indian&ca=571&rellevel=4&committee=N'
              }
            }
          ],
          finance: {
            raised: 4025.0,
            spent: 211.35,
            selfFunded: 25.0,
            asOf: '2026-08-05',
            note: 'Six outside donors. Has out-raised the sitting incumbent nearly 2 to 1 — the notable fact in this race. His only political-organization spending was $60 to a Republican Women event and $26.35 at an Indian River County Republican Executive Committee barbecue.',
            source: {
              title: 'IRC Supervisor of Elections campaign finance portal',
              url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?c=indian&e=18',
              date: '2026-08-05'
            }
          },
          endorsements: [],
          links: {

          }
        }
      ]
    },

    {
      id: 'unopposed',
      office: 'Elected without opposition',
      district: 'Six local seats',
      type: 'nonpartisan',
      ballot: 'primary',
      stakes:
        'Six local seats drew only one qualified candidate each and are therefore filled automatically. Unopposed candidates generally do not appear on the ballot. Listed here so voters know these offices were decided — and by whom — even though no vote was taken: Hospital District Seats 2 (Michael Kint), 4 (Wayne L. Creelman) and 6 (Kerry Ann Bartlett); Soil & Water Conservation District Seat 1 (Bob Adair); Mosquito Control District Seat 3 (Thomas S. Lowther). Note also that Soil & Water Seats 3 and 5 were listed as up for election but drew no qualified candidate at all; such vacancies are typically filled by appointment.',
      whoVotes: 'No vote is taken in these races. They are included for transparency only.',
      candidates: [
        {
          id: 'kint', name: 'Michael Kint', party: 'NONPARTISAN',
          occupation: 'Hospital District, Seat 2 — elected unopposed',
          bio: 'Elected without opposition to the Indian River County Hospital District, Seat 2. The Hospital District levies its own property tax — see the issues section on its budget growth.',
          positions: {}, record: [], finance: null, endorsements: [], links: {}
        },
        {
          id: 'creelman', name: 'Wayne L. Creelman', party: 'NONPARTISAN',
          occupation: 'Hospital District, Seat 4 — elected unopposed',
          bio: 'Elected without opposition to the Indian River County Hospital District, Seat 4.',
          positions: {}, record: [], finance: null, endorsements: [], links: {}
        },
        {
          id: 'bartlett', name: 'Kerry Ann Bartlett', party: 'NONPARTISAN', incumbent: true,
          occupation: 'Hospital District, Seat 6 — elected unopposed; current board chair',
          bio: 'Elected without opposition to the Indian River County Hospital District, Seat 6. As board chair she favored "strategic" funding over frugality in the budget debate that took the District\'s proposed budget to $25.37 million — roughly double FY2021-22 — at a millage above the rolled-back rate.',
          positions: {}, record: [], finance: null, endorsements: [], links: {}
        },
        {
          id: 'adair', name: 'Bob Adair', party: 'NONPARTISAN',
          occupation: 'Soil & Water Conservation District, Seat 1 — elected unopposed',
          bio: 'Elected without opposition to the Indian River Soil & Water Conservation District, Seat 1.',
          positions: {}, record: [], finance: null, endorsements: [], links: {}
        },
        {
          id: 'lowther', name: 'Thomas S. Lowther', party: 'NONPARTISAN',
          occupation: 'Mosquito Control District, Seat 3 — elected unopposed',
          bio: 'Elected without opposition to the Indian River Mosquito Control District, Seat 3.',
          positions: {}, record: [], finance: null, endorsements: [], links: {}
        }
      ]
    },

    {
      id: 'vero-beach-council',
      office: 'Vero Beach City Council',
      district: 'At-large',
      type: 'nonpartisan',
      ballot: 'primary',
      stakes:
        'ONLY relevant if you live within Vero Beach city limits — this is a municipal race, not a countywide one. The City of Vero Beach\'s own election page confirms a 2026 City Council election tied to the county\'s August 18 primary date, administered through the city clerk rather than appearing as a separate election day. Seven candidates qualified. The city\'s own page does not state how many seats are up this cycle or whether seats are numbered/grouped — confirm directly with the City Clerk (772-978-4500) or at covb.org before voting if this affects your ballot.',
      whoVotes:
        'Only registered voters residing within Vero Beach city limits. It is nonpartisan, administered by the city clerk, and tied to the county\'s August 18 primary date. If you live in unincorporated Indian River County, in Sebastian, Fellsmere, Indian River Shores, or Orchid, this race is not on your ballot at all.',
      candidates: [
        { id: 'oconnor', name: "John O'Connor", party: 'NONPARTISAN', occupation: 'Not yet documented by this guide',
          bio: 'Qualified candidate for Vero Beach City Council, confirmed on the city\'s own official candidate page. This guide has not yet researched his background or positions — a gap, not a finding.',
          positions: {}, record: [], finance: null, endorsements: [], links: {} },
        { id: 'zudans', name: 'Tracey Lockwood Zudans', party: 'NONPARTISAN', occupation: 'Not yet documented by this guide',
          bio: 'Qualified candidate for Vero Beach City Council, confirmed on the city\'s own official candidate page. This guide has not yet researched her background or positions — a gap, not a finding.',
          positions: {}, record: [], finance: null, endorsements: [], links: {} },
        { id: 'vos', name: 'Aaron Vos', party: 'NONPARTISAN', occupation: 'Not yet documented by this guide',
          bio: 'Qualified candidate for Vero Beach City Council, confirmed on the city\'s own official candidate page. This guide has not yet researched his background or positions — a gap, not a finding.',
          positions: {}, record: [], finance: null, endorsements: [], links: {} },
        { id: 'maccallum', name: 'Robert MacCallum', party: 'NONPARTISAN', occupation: 'Not yet documented by this guide',
          bio: 'Qualified candidate for Vero Beach City Council, confirmed on the city\'s own official candidate page. This guide has not yet researched his background or positions — a gap, not a finding.',
          positions: {}, record: [], finance: null, endorsements: [], links: {} },
        { id: 'kramer', name: 'Jay Kramer', party: 'NONPARTISAN', occupation: 'Not yet documented by this guide',
          bio: 'Qualified candidate for Vero Beach City Council, confirmed on the city\'s own official candidate page. This guide has not yet researched his background or positions — a gap, not a finding. Note: a Jay Kramer has separately been reported as an officer of the Indian River Republican Executive Committee in past coverage; this guide has not confirmed whether that is the same person.',
          positions: {}, record: [], finance: null, endorsements: [], links: {} },
        { id: 'heady', name: 'Brian Heady', party: 'NONPARTISAN', occupation: 'Not yet documented by this guide',
          bio: 'Qualified candidate for Vero Beach City Council, confirmed on the city\'s own official candidate page. A Brian Heady has run in prior Vero Beach council elections in earlier cycles; this guide has not confirmed continuity of positions between cycles and is not importing older statements as current ones.',
          positions: {}, record: [], finance: null, endorsements: [], links: {} },
        { id: 'moore', name: 'Linda Moore', party: 'NONPARTISAN', occupation: 'Not yet documented by this guide',
          bio: 'Qualified candidate for Vero Beach City Council, confirmed on the city\'s own official candidate page. This guide has not yet researched her background or positions — a gap, not a finding.',
          positions: {}, record: [], finance: null, endorsements: [], links: {} }
      ]
    },

    {
      id: 'fl-house-34',
      office: 'Florida House',
      district: 'District 34',
      type: 'partisan',
      ballot: 'primary',
      term: '2 years',
      stakes: 'ALL of Indian River County sits inside House District 34, which also takes in part of southern Brevard (Micco, Barefoot Bay, Grant-Valkaria). The county is NOT split among state House districts — the district is what crosses the county line. The seat has gone Republican by about 35 points in each of the last two general elections, so on recent history the August 18 Republican primary is the decisive contest. State representatives vote on property taxes, insurance regulation, school funding, lagoon appropriations, and state preemption of local land-use control.',
      whoVotes: 'Only registered Republicans may vote the contested August 18 primary: incumbent Robbie Brackett vs. Paul Sohi. There is NO Democratic primary — it was cancelled and Jordyn Balderas advances unopposed. Every voter chooses between the Republican nominee and Balderas on November 3.',
      candidates: [
        {
          id: 'brackett',
          name: 'Robert "Robbie" Brackett',
          party: 'R',
          incumbent: true,
          age: 63,
          residence: 'Vero Beach (born there)',
          occupation: 'State Representative, House District 34; former Mayor of Vero Beach',
          bio: 'Born in Vero Beach on April 9, 1963, and a lifelong resident. Previously Mayor of Vero Beach. Has held House District 34 since 2022, winning the general election by roughly 35 points in both 2022 and 2024. On that history, the August 18 Republican primary — not November — is the contest that decides this seat.',
          positions: {
            amendment: {
              summary: 'Voted YES on the property tax amendment that voters actually decide in November. Did not cast a vote on the earlier, more sweeping February version.',
              source: {
                title: 'Florida House roll call, CS/HJR 1-F',
                url: 'https://www.flsenate.gov/Session/Bill/2026F/1F/Vote/HouseVote_h00001Fc1900.PDF',
                date: '2026-06-02'
              }
            },
            lagoon: {
              summary: 'Sponsored two local Indian River County water district bills that became law, and co-sponsored PFAS legislation — his clearest water-quality-related actions.',
              source: {
                title: 'Florida House sponsored bills',
                url: 'https://www.flhouse.gov/Sections/Representatives/sponsoredbills.aspx?MemberId=4870&SessionId=113',
                date: '2026-08-05'
              }
            }
          },
          record: [
            {
              type: 'vote',
              claim: 'Did NOT VOTE on CS/CS/HJR 203, the sweeping property tax measure that would have eliminated non-school homestead property taxes by 2037. It passed the House 80-30; he was one of seven members not voting.',
              detail: 'He sat on the Select Committee on Property Taxes. This guide found no public explanation from him for the missed vote. Note the distinction: he later voted YES on CS/HJR 1-F, the narrower measure that is actually on your November ballot. The official roll call is the source here, not any campaign or partisan claim.',
              date: '2026-02-19',
              source: {
                title: 'Florida House roll call PDF, CS/CS/HJR 203',
                url: 'https://flsenate.gov/Session/Bill/2026/203/Vote/HouseVote_h00203c2523.PDF'
              }
            },
            {
              type: 'vote',
              claim: 'Voted YES on CS/HJR 1-F, the "Save Our Homes from Excessive Property Taxes" amendment that appears on the November 3, 2026 ballot. It passed the House 75-26.',
              date: '2026-06-02',
              source: {
                title: 'Florida House roll call PDF, CS/HJR 1-F',
                url: 'https://www.flsenate.gov/Session/Bill/2026F/1F/Vote/HouseVote_h00001Fc1900.PDF'
              }
            },
            {
              type: 'fact',
              claim: 'Sponsored five measures that became law in 2026, including two local Indian River County water district bills — Fellsmere Water Control District and Headwaters Water Control District.',
              detail: 'His legislative output is dominated by narrow local special-district bills plus health care regulation. He also co-sponsored PFAS legislation that became law.',
              date: '2026-08-05',
              source: {
                title: 'Florida House sponsored bills',
                url: 'https://www.flhouse.gov/Sections/Representatives/sponsoredbills.aspx?MemberId=4870&SessionId=113'
              }
            },
            {
              type: 'fact',
              claim: 'Roughly half of his $91,373 comes from political committees and corporate PACs headquartered outside the district, mostly in Tallahassee.',
              detail: 'Industry concentration is in health care, insurance and finance, real estate and homebuilding, beverage distribution, telecom and energy, and law and lobbying. Includes $3,000 from the Ronald L. Book lobbying family and development money — Ameron Homes, Local Home Builders PAC, Associated Builders & Contractors, Realtors PAC three times, and a donor listing his occupation as "land developer" — in a district where growth is the most-cited local issue. All of this is legal and disclosed; it is reported so voters can weigh it.',
              date: '2026-08-05',
              source: {
                title: 'Florida Division of Elections campaign finance database',
                url: 'https://dos.elections.myflorida.com/campaign-finance/contributions/'
              }
            },
            {
              type: 'fact',
              claim: 'Paid $2,250 to local Republican Party organizations during the campaign: $1,200 to Hispanic Conservatives of Indian River, $550 to the Indian River Republican Executive Committee, and $500 to Republican Women of Indian River.',
              detail: 'Legal and common practice, noted as a documentable fact about party-organization ties.',
              date: '2026-07-23',
              source: {
                title: 'Florida Division of Elections expenditures',
                url: 'https://dos.elections.myflorida.com/campaign-finance/expenditures/'
              }
            },
            {
              type: 'fact',
              claim: 'This guide found no lawsuits, ethics complaints, or Florida Commission on Ethics findings against Brackett, and no residency or eligibility question.',
              detail: 'Recorded as an absence of findings, not as a clearance.',
              date: '2026-08-05',
              source: {
                title: 'This guide review of news and public records',
                url: 'https://ballotpedia.org/Florida_House_of_Representatives_District_34'
              }
            }
          ],
          finance: {
            raised: 91372.77,
            spent: 17584.77,
            asOf: '2026-07-31',
            note: 'Has raised roughly 8.4x his primary opponent and 24x the Democratic nominee, and spent only about 19% of it — by far the largest reserve in this race. 130 itemized contributions. Spending goes mostly to compliance and local party event sponsorships rather than media.',
            source: {
              title: 'Florida Division of Elections campaign finance database',
              url: 'https://dos.elections.myflorida.com/campaign-finance/contributions/',
              date: '2026-08-05'
            }
          },
          endorsements: [],
          links: {
            'Florida House profile': 'https://www.flhouse.gov/Sections/Representatives/details.aspx?MemberId=4870'
          }
        },
        {
          id: 'sohi',
          name: 'Paul (Parneet) Sohi',
          party: 'R',
          residence: 'Vero Beach',
          occupation: 'Pediatric dentist and oral surgeon, 30+ years',
          bio: 'A pediatric dentist licensed in Ohio since 1990, who also lists a real estate group on his professional profile. He campaigns as Paul Sohi; state campaign finance records and Ohio court records use the name Parneet Sohi. His campaign site claims "more than 15 years" in Vero Beach — a claim that has been publicly disputed. He has never held elective office. Campaign slogan: "Faith, Family, Freedom."',
          positions: {
            growth: {
              summary: 'The most home-rule-favorable stated position among the Republicans: wants the Live Local Act amended to focus on homeownership rather than rental loopholes, and to restore local community oversight.',
              quote: 'Opposes overdevelopment without infrastructure planning.',
              source: {
                title: 'Campaign website',
                url: 'https://paulsohi.com/',
                date: '2026-08-05'
              }
            },
            amendment: {
              summary: 'Supports "property tax relief, insurance reform, and greater accountability in government spending," but states no position on the specific November amendment.',
              source: {
                title: 'Campaign website',
                url: 'https://paulsohi.com/',
                date: '2026-08-05'
              }
            },
            lagoon: {
              summary: 'Calls for "responsible environmental stewardship based on science, accountability, and common sense." No dollar figure, program, or specific lagoon proposal stated.',
              source: {
                title: 'Campaign website',
                url: 'https://paulsohi.com/',
                date: '2026-08-05'
              }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'The Ohio State Dental Board found in the 1990s that he "departed from the accepted standards of the profession by mistreating and abusing his young patients," and imposed a six-month license suspension with conditions.',
              detail: 'CRITICAL NUANCE: on appeal the court affirmed in part and REVERSED in part. It sustained his due-process objections regarding unidentified patients, upheld the findings only as to one identified patient, and remanded for the Board to reconsider the sanction based solely on that conduct. Describing this as a six-month suspension upheld on appeal would be inaccurate. Source is the published appellate opinion, not a campaign claim.',
              date: '1998-10-23',
              source: {
                title: 'Sohi v. Ohio State Dental Board, Ohio Ct. App. 1st Dist., No. C-970739',
                url: 'https://caselaw.findlaw.com/court/oh-court-of-appeals/1471110.html'
              }
            },
            {
              type: 'fact',
              claim: 'A second Ohio dental board matter arising from 2009-2010 patient complaints resulted in a 14-day license suspension, a continuing-education requirement, and a year of records review.',
              detail: 'Procedural history matters here: a county court threw out all counts on statute-of-limitations grounds, favorable to Sohi; the Court of Appeals reversed and remanded in 2015, holding the charges timely. THE FINAL DISPOSITION ON REMAND COULD NOT BE VERIFIED by this guide — it is not established whether the suspension was ultimately imposed.',
              date: '2015-09-23',
              source: {
                title: 'Sohi v. Ohio State Dental Bd., 2015-Ohio-3854',
                url: 'https://cases.justia.com/ohio/first-district-court-of-appeals/2015-c-140671.pdf'
              }
            },
            {
              type: 'fact',
              claim: 'Ran and lost a Democratic primary for the Ohio House in 2018, losing to Jessica Miranda roughly 60-40.',
              date: '2018-05-08',
              source: {
                title: 'Ballotpedia',
                url: 'https://ballotpedia.org/Ohio_House_of_Representatives_District_28'
              }
            },
            {
              type: 'allegation',
              claim: 'A local Substack alleges he has been registered as a Democrat in Ohio since 1996 and still holds an Ohio registration, registered Republican in Indian River County only in December 2024, and filed his first Florida homestead exemption in 2025 — which the author contrasts with his "more than 15 years" residency claim.',
              detail: 'This is a single-author Substack, not an established newsroom. The prior Ohio Democratic primary loss IS independently confirmed, but the registration dates and current Ohio registration are NOT verified against primary voter-file records and are checkable via the Ohio Secretary of State and the county Supervisor of Elections. Separately: this goes to the political question of how recently he became a Florida Republican, NOT to legal eligibility. He qualified with the Division of Elections, and a reported 2015 home purchase would satisfy Florida\'s two-year residency requirement comfortably. Do not conflate the two.',
              date: '2026-07-11',
              response: 'No response located. This guide found no interview, statement, or rebuttal from Sohi addressing his Ohio history, party history, or the dental board cases, and his campaign site does not mention them. He is invited to respond under this guide\'s corrections policy.',
              source: {
                title: 'The Sunshine Journal (Substack, partisan single-author source)',
                url: 'https://thomasaugustus.substack.com/p/robbie-brackett-has-a-primary-challenge'
              }
            },
            {
              type: 'fact',
              claim: 'His campaign site states no position on school vouchers or public school funding, abortion, or immigration.',
              date: '2026-08-05',
              source: {
                title: 'Campaign website',
                url: 'https://paulsohi.com/'
              }
            }
          ],
          finance: {
            raised: 10942.7,
            spent: 9838.12,
            selfFunded: 8752.7,
            asOf: '2026-07-31',
            note: 'About 80% self-funded. Of his seven outside contributions, ALL SEVEN come from Ohio addresses — Cincinnati, Loveland and West Chester. He has raised zero dollars from any donor inside House District 34 other than himself, and bought his campaign signs from a Cincinnati, Ohio sign company.',
            source: {
              title: 'Florida Division of Elections campaign finance database',
              url: 'https://dos.elections.myflorida.com/campaign-finance/contributions/',
              date: '2026-08-05'
            }
          },
          endorsements: [],
          links: {
            'Campaign website': 'https://paulsohi.com/'
          }
        },
        {
          id: 'balderas',
          name: 'Jordyn Guadalupe Balderas',
          party: 'D',
          age: 21,
          residence: 'Vero Beach',
          occupation: 'Community organizer',
          bio: 'At 21 he is at or barely above the constitutional minimum age for a Florida legislator. He openly discusses leaving high school to work full time and care for his mother, a nurse raising six children alone who was diagnosed with amyloidosis, and says he experienced homelessness as a teenager and is currently uninsured. Treasurer of the Young Democrats of Indian River and a Democratic precinct captain. No prior elective office. The Democratic primary was cancelled; he advances directly to November. He uses he/him pronouns.',
          positions: {
            growth: {
              summary: 'Names home rule his top priority — opposing state preemption bills that strip local authority over growth management, environmental protection, and tenant rights.',
              source: {
                title: 'Campaign website',
                url: 'https://jordynforfl.com/',
                date: '2026-08-05'
              }
            },
            lagoon: {
              summary: 'The most specific lagoon plan in this race: mangrove planting and living shorelines, protecting wetlands as flood barriers, and funding septic-to-sewer conversions through the state budget rather than homeowner assessments.',
              source: {
                title: 'Campaign website',
                url: 'https://jordynforfl.com/',
                date: '2026-08-05'
              }
            },
            housing: {
              summary: 'Prioritize restoring vacant properties over luxury complexes, expand workforce and affordable housing, and protect tenant organizing rights.',
              source: {
                title: 'Campaign website',
                url: 'https://jordynforfl.com/',
                date: '2026-08-05'
              }
            },
            schools: {
              summary: 'Repeal the charter school co-location law and "keep public dollars in public schools"; move teaching toward a six-figure profession; fund counselors and mental health staff.',
              source: {
                title: 'Campaign website',
                url: 'https://jordynforfl.com/',
                date: '2026-08-05'
              }
            },
            amendment: {
              summary: 'Has NOT stated an explicit position on the November amendment, but warns against "state revenue shifts that reduce local budgets" — implicitly a caution about its effect on county and municipal revenue.',
              source: {
                title: 'Campaign website',
                url: 'https://jordynforfl.com/',
                date: '2026-08-05'
              }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'Has never held elective office and has no voting record.',
              date: '2026-08-05',
              source: {
                title: 'Ballotpedia',
                url: 'https://ballotpedia.org/Florida_House_of_Representatives_District_34'
              }
            },
            {
              type: 'fact',
              claim: 'This guide located no lawsuits, ethics complaints, criminal record, business disputes, or controversial statements.',
              detail: 'This is an absence of findings, not a clearance — a 21-year-old first-time candidate has very little public paper trail to examine. The fair lines of scrutiny here are qualifications rather than conduct, and they come from facts he publicizes himself: he is 21, left high school, has never managed a public budget or staff, and has raised under $4,000. This guide could not verify how long he has lived in the district.',
              date: '2026-08-05',
              source: {
                title: 'This guide review of news, court and public records',
                url: 'https://ballotpedia.org/Florida_House_of_Representatives_District_34'
              }
            },
            {
              type: 'fact',
              claim: 'His campaign states no position on property insurance, abortion, or immigration, and references his own uninsured status without stating a health care policy.',
              date: '2026-08-05',
              source: {
                title: 'Campaign website',
                url: 'https://jordynforfl.com/'
              }
            }
          ],
          finance: {
            raised: 3810.0,
            spent: 2743.88,
            asOf: '2026-07-31',
            note: 'No self-funding. Almost entirely small local donations from Vero Beach, Sebastian and Palm Bay. One PAC check — Blue Florida, $1,000 — is his only institutional money. Running at roughly one twenty-fourth of the incumbent.',
            source: {
              title: 'Florida Division of Elections campaign finance database',
              url: 'https://dos.elections.myflorida.com/campaign-finance/contributions/',
              date: '2026-08-05'
            }
          },
          endorsements: [],
          links: {
            'Campaign website': 'https://jordynforfl.com/'
          }
        }
      ]
    },

    {
      id: 'us-house-9',
      office: 'U.S. House',
      district: 'District 9',
      type: 'partisan',
      ballot: 'primary',
      term: '2 years',
      stakes: 'IMPORTANT: Indian River County CHANGED congressional districts. Under the map signed in May 2026 the county moved from District 8 to District 9, which now runs from the Orlando area south through Indian River, Okeechobee, Highlands and Glades counties — roughly 769,000 residents. The partisan character flipped with it: under the old lines this was territory where over 51% backed Kamala Harris in 2024; under the new lines it is territory that voted over 58% for Donald Trump. The district is also no longer majority-Hispanic, its Hispanic share falling from 54% to 41%. On those numbers the August 18 Republican primary is now the most consequential contest here.',
      whoVotes: 'Registered Republicans vote a seven-way primary on August 18; incumbent Democrat Darren Soto has no filed primary opponent. CHECK YOUR SAMPLE BALLOT: the elections office homepage announces District 9 while its own maps page still referenced the old District 8. If the map and your ballot disagree, the ballot governs. Note also that the new map is under active legal challenge on Fair Districts grounds — a judge declined to block it in May 2026 and the Florida Supreme Court declined to enjoin it in June without ruling on the merits. The litigation does not change that Indian River County votes in District 9 this year; it may change future maps.',
      candidates: [
        {
          id: 'soto',
          name: 'Darren Soto',
          party: 'D',
          incumbent: true,
          age: 48,
          residence: 'Kissimmee',
          occupation: 'U.S. Representative; attorney',
          bio: 'In Congress since 2017 and now a five-term incumbent, the first Floridian of Puerto Rican descent elected to Congress. Previously served in the Florida House (2007-2012) and Florida Senate (2012-2016). Rutgers undergraduate, George Washington University law degree; ran his own Central Florida practice in family law, civil litigation and real estate. He now runs in a district redrawn to lean Republican.',
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'He is the only candidate in this race with substantial PAC support — about $1.39 million from other political committees.',
              detail: 'By comparison: $28,000 for Butler, $8,500 for Green, and zero for Carter, Chalifoux, Martinez, Rance and Story. This is the sharpest contrast in the finance data — the incumbent has an institutional donor network the challengers do not.',
              date: '2026-07-29',
              source: {
                title: 'FEC candidate totals, 2026 cycle',
                url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=H&state=FL&district=09'
              }
            },
            {
              type: 'fact',
              claim: 'This guide reviewed and is NOT publishing two circulating criticisms of Soto because neither met its evidence standard.',
              detail: 'One is a 2018 ethics complaint filed by an outside group naming 15 members of Congress, which Soto and the others denied — this guide could not establish any disposition, and an unresolved eight-year-old complaint with no known outcome is not a finding. The other is a campaign attack by the NRCC, the campaign arm of House Republicans and Soto\'s direct partisan opponent, which he publicly answered. Both are noted only so readers who encounter them know they were checked.',
              date: '2026-08-07',
              source: {
                title: 'This guide verification standard',
                url: 'methodology.html'
              }
            }
          ],
          finance: {
            raised: 2157834,
            spent: 984598,
            asOf: '2026-07-29',
            note: '$1,187,355 cash on hand. Includes $751,537 in itemized individual contributions and $1,385,550 from political committees — the only candidate in the race with significant institutional PAC money.',
            source: {
              title: 'FEC candidate totals, 2026 cycle',
              url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=H&state=FL&district=09',
              date: '2026-08-07'
            }
          },
          endorsements: [],
          links: {
            'Congress.gov profile': 'https://www.congress.gov/member/darren-soto/S001200'
          }
        },
        {
          id: 'green',
          name: 'Dan Green',
          party: 'R',
          residence: 'Vero Beach (Indian River County)',
          occupation: 'Former Deputy Assistant Secretary of Defense; U.S. Navy Reserve captain; author',
          bio: 'The ONLY candidate in this race, either party, whose address of record is in Indian River County. A Vero Beach High School graduate with degrees from American University, Florida State and George Washington, and a Ph.D. He was working as a civilian in the Pentagon on September 11, 2001 when the plane struck the building. Twenty-three years in uniform as a Navy Reserve captain, mobilized four times for Iraq and Afghanistan, most recently as a tribal and political engagement officer in Baghdad (2015-2016); also served with the State Department as a political advisor in southern Afghanistan. Appointed by President Trump in 2019 as Deputy Assistant Secretary of Defense for Strategy and Force Development, where his office developed the National Defense Strategy. Previously a defense fellow at The Washington Institute, and a published author on the Afghanistan and Iraq wars. Campaign slogan: "Make America Affordable Again."',
          positions: {
            amendment: {
              summary: 'Supports the Florida property tax amendment, arguing tax cuts promote responsible budgets and reduce waste and fraud.',
              source: {
                title: 'ClickOrlando voter guide questionnaire',
                url: 'https://www.clickorlando.com/voters-guide/2026/07/31/2026-voters-guide-us-house-district-9-republican-primary/',
                date: '2026-07-31'
              }
            },
            lagoon: {
              summary: 'Speaks generally to protecting "the Florida aquifer, our waterways, and lakes." NOTE: this guide found no on-the-record position from him on the Indian River Lagoon BY NAME, on Lake Okeechobee discharges, or on Everglades restoration funding.',
              source: {
                title: 'ClickOrlando voter guide questionnaire',
                url: 'https://www.clickorlando.com/voters-guide/2026/07/31/2026-voters-guide-us-house-district-9-republican-primary/',
                date: '2026-07-31'
              }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'His federal service record is verifiable in primary Department of Defense sources rather than campaign material — by a wide margin the most extensively documented professional record of any Republican in this field.',
              detail: 'A long Pentagon-policy and think-tank career is also Washington experience, which different primary voters will weigh differently. Both readings come from the same documented facts.',
              date: '2026-08-07',
              source: {
                title: 'U.S. Department of Defense official biography',
                url: 'https://www.defense.gov/About/Biographies/Article/1840812/dr-daniel-r-green/'
              }
            },
            {
              type: 'fact',
              claim: 'Roughly $1 million of his approximately $1.3 million raised is his own money — reported as "nearly all self-loans."',
              detail: 'He announced a $1.14 million haul in his first 14 days, about $1 million of it self-funded. Dollars raised is not the same as dollars donated by supporters.',
              date: '2026-07-30',
              source: {
                title: 'Lakeland Ledger, via AOL',
                url: 'https://www.aol.com/articles/7-republicans-vie-shot-soto-091333000.html'
              }
            },
            {
              type: 'fact',
              claim: 'The single most important question for a local voter to put to him: he is the Vero Beach candidate, but this guide could not find a specific position from him on the Indian River Lagoon by name.',
              detail: 'This is an observed absence in the sources reviewed, not evidence that he lacks a position.',
              date: '2026-08-07',
              source: {
                title: 'ClickOrlando voter guide questionnaire',
                url: 'https://www.clickorlando.com/voters-guide/2026/07/31/2026-voters-guide-us-house-district-9-republican-primary/'
              }
            }
          ],
          finance: {
            raised: 1298516,
            spent: 935273,
            selfFunded: 1000000,
            asOf: '2026-07-29',
            note: '$363,243 cash on hand. Only $144,589 came from itemized individual contributions and $8,500 from PACs — the bulk is his own money.',
            source: {
              title: 'FEC candidate totals, 2026 cycle',
              url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=H&state=FL&district=09',
              date: '2026-08-07'
            }
          },
          endorsements: [],
          links: {
            'Campaign website': 'https://dangreenfl.com/'
          }
        },
        {
          id: 'butler',
          name: 'Ben Butler',
          party: 'R',
          residence: 'Lorida (Highlands County)',
          occupation: 'Not documented by this guide',
          bio: 'Qualified for the August 18 Republican primary in District 9.',
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'This guide located limited independent coverage of this candidate beyond campaign materials and filings.',
              detail: 'Stated explicitly rather than left blank. In a seven-way primary, lower-profile candidates are covered here on the same terms as the best-funded.',
              date: '2026-08-07',
              source: {
                title: 'FEC candidate totals, 2026 cycle',
                url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=H&state=FL&district=09'
              }
            }
          ],
          finance: {
            raised: 386673,
            spent: 274398,
            asOf: '2026-07-29',
            note: '$112,275 cash on hand. Notably the most donor-driven Republican in the field rather than self-funded, with $346,313 in itemized individual contributions and $28,000 in PAC money.',
            source: {
              title: 'FEC candidate totals, 2026 cycle',
              url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=H&state=FL&district=09',
              date: '2026-08-07'
            }
          },
          endorsements: [],
          links: {

          }
        },
        {
          id: 'carter',
          name: 'Marcus Carter',
          party: 'R',
          residence: 'Kissimmee',
          occupation: 'Not documented by this guide',
          bio: 'Qualified for the August 18 Republican primary in District 9.',
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'This guide located limited independent coverage of this candidate beyond campaign materials and filings.',
              detail: 'Stated explicitly rather than left blank. In a seven-way primary, lower-profile candidates are covered here on the same terms as the best-funded.',
              date: '2026-08-07',
              source: {
                title: 'FEC candidate totals, 2026 cycle',
                url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=H&state=FL&district=09'
              }
            }
          ],
          finance: {
            raised: 22475,
            spent: 21951,
            asOf: '2026-07-29',
            note: 'Under $2,000 cash on hand — the least-funded candidate in the race by a wide margin. He has said his campaign runs on volunteers and rejects corporate and special-interest funding. A real constraint, stated as fact rather than characterization.',
            source: {
              title: 'FEC candidate totals, 2026 cycle',
              url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=H&state=FL&district=09',
              date: '2026-08-07'
            }
          },
          endorsements: [],
          links: {

          }
        },
        {
          id: 'chalifoux',
          name: 'Thomas E. Chalifoux Jr.',
          party: 'R',
          residence: 'Orlando',
          occupation: 'Not documented by this guide',
          bio: 'Qualified for the August 18 Republican primary in District 9.',
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'Has raised more than any other candidate in the race, but under 2% of it came from other donors — reported as nearly all self-loans.',
              date: '2026-07-30',
              source: {
                title: 'Lakeland Ledger, via AOL',
                url: 'https://www.aol.com/articles/7-republicans-vie-shot-soto-091333000.html'
              }
            },
            {
              type: 'fact',
              claim: 'This guide located limited independent coverage of this candidate beyond campaign materials and filings.',
              detail: 'Stated explicitly rather than left blank. In a seven-way primary, lower-profile candidates are covered here on the same terms as the best-funded.',
              date: '2026-08-07',
              source: {
                title: 'FEC candidate totals, 2026 cycle',
                url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=H&state=FL&district=09'
              }
            }
          ],
          finance: {
            raised: 3139737,
            spent: 1776689,
            asOf: '2026-07-29',
            note: '$1,966,256 cash on hand — the largest war chest in the race. But only $48,761 came from other people: under 2% of his receipts. Reported as "nearly all from self-loans." No PAC money.',
            source: {
              title: 'FEC candidate totals, 2026 cycle',
              url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=H&state=FL&district=09',
              date: '2026-08-07'
            }
          },
          endorsements: [],
          links: {

          }
        },
        {
          id: 'martinez',
          name: 'Jorge Martinez',
          party: 'R',
          residence: 'Orlando',
          occupation: 'Not documented by this guide',
          bio: 'Qualified for the August 18 Republican primary in District 9.',
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'This guide located limited independent coverage of this candidate beyond campaign materials and filings.',
              detail: 'Stated explicitly rather than left blank. In a seven-way primary, lower-profile candidates are covered here on the same terms as the best-funded.',
              date: '2026-08-07',
              source: {
                title: 'FEC candidate totals, 2026 cycle',
                url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=H&state=FL&district=09'
              }
            }
          ],
          finance: {
            raised: 854898,
            spent: 564749,
            asOf: '2026-07-29',
            note: '$290,149 cash on hand. Includes a reported $500,000 self-loan. No PAC money.',
            source: {
              title: 'FEC candidate totals, 2026 cycle',
              url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=H&state=FL&district=09',
              date: '2026-08-07'
            }
          },
          endorsements: [],
          links: {

          }
        },
        {
          id: 'rance',
          name: 'Steve Rance',
          party: 'R',
          residence: 'Ocoee',
          occupation: 'Not documented by this guide',
          bio: 'Qualified for the August 18 Republican primary in District 9.',
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'His address of record is outside District 9.',
              detail: 'Members of Congress are not constitutionally required to live in the district they represent, only in the state. Noted as a fact voters may weigh, not as an eligibility problem.',
              date: '2026-08-07',
              source: {
                title: 'Lakeland Ledger, via AOL',
                url: 'https://www.aol.com/articles/7-republicans-vie-shot-soto-091333000.html'
              }
            },
            {
              type: 'fact',
              claim: 'This guide located limited independent coverage of this candidate beyond campaign materials and filings.',
              detail: 'Stated explicitly rather than left blank. In a seven-way primary, lower-profile candidates are covered here on the same terms as the best-funded.',
              date: '2026-08-07',
              source: {
                title: 'FEC candidate totals, 2026 cycle',
                url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=H&state=FL&district=09'
              }
            }
          ],
          finance: {
            raised: 152757,
            spent: 144980,
            asOf: '2026-07-29',
            note: 'Under $8,000 cash on hand. Includes nearly $80,000 in self-loans.',
            source: {
              title: 'FEC candidate totals, 2026 cycle',
              url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=H&state=FL&district=09',
              date: '2026-08-07'
            }
          },
          endorsements: [],
          links: {

          }
        },
        {
          id: 'story',
          name: 'Justin Story',
          party: 'R',
          residence: 'St. Cloud',
          occupation: 'Not documented by this guide',
          bio: 'Qualified for the August 18 Republican primary in District 9.',
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'This guide located limited independent coverage of this candidate beyond campaign materials and filings.',
              detail: 'Stated explicitly rather than left blank. In a seven-way primary, lower-profile candidates are covered here on the same terms as the best-funded.',
              date: '2026-08-07',
              source: {
                title: 'FEC candidate totals, 2026 cycle',
                url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=H&state=FL&district=09'
              }
            }
          ],
          finance: {
            raised: 92585,
            spent: 55168,
            asOf: '2026-07-29',
            note: '$37,417 cash on hand. Includes a reported $24,000 self-loan. No PAC money.',
            source: {
              title: 'FEC candidate totals, 2026 cycle',
              url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=H&state=FL&district=09',
              date: '2026-08-07'
            }
          },
          endorsements: [],
          links: {

          }
        }
      ]
    },

    {
      id: 'us-senate',
      office: 'U.S. Senate',
      district: 'Florida — special election',
      type: 'partisan',
      ballot: 'primary',
      term: 'Remainder of term (2 years)',
      stakes: 'A special election for the final two years of the U.S. Senate term vacated by Marco Rubio. Ashley Moody was appointed to the seat by Gov. DeSantis and must now win it at the ballot box. This is by far the most expensive race on your ballot: two candidates have together raised over $25 million, while four of the seven have raised under $20,000 each.',
      whoVotes: 'Statewide. Registered Republicans and registered Democrats each vote their own contested primary on August 18. Every voter, including NPA, chooses in the November 3 general election. Note: no public polling of either primary has been published — the available polls test general-election matchups only.',
      candidates: [
        {
          id: 'moody',
          name: 'Ashley Moody',
          party: 'R',
          incumbent: true,
          residence: 'Tampa',
          occupation: 'U.S. Senator (appointed); former Florida Attorney General',
          bio: 'Appointed by Gov. Ron DeSantis to the U.S. Senate seat vacated by Marco Rubio. Previously served as Florida Attorney General, and before that as a state circuit judge. She must win this special election to serve the remainder of the term.',
          positions: {

          },
          record: [
            {
              type: 'vote',
              claim: 'Voted against extending Affordable Care Act premium subsidies.',
              date: '2025-12-01',
              source: {
                title: 'U.S. Senate roll call votes',
                url: 'https://www.senate.gov/legislative/votes.htm'
              }
            },
            {
              type: 'vote',
              claim: 'Voted against the Iran War Powers Resolution.',
              date: '2026-03-01',
              source: {
                title: 'U.S. Senate roll call votes',
                url: 'https://www.senate.gov/legislative/votes.htm'
              }
            },
            {
              type: 'fact',
              claim: 'As Florida Attorney General she joined Texas v. Pennsylvania, the 2020 suit seeking to overturn election results in other states, and joined litigation seeking to strike down the Affordable Care Act.',
              date: '2020-12-09',
              source: {
                title: 'Ballotpedia',
                url: 'https://ballotpedia.org/Ashley_Moody'
              },
              detail: 'Her tenure as Attorney General also included challenges to Amendment 4 on felon voting rights and to marijuana ballot initiatives, a referral over Michael Bloomberg paying court fees for felons, the U.S. Supreme Court case Moody v. NetChoice on social media regulation, and multistate opioid settlements.'
            }
          ],
          finance: {
            raised: 11260000,
            spent: null,
            asOf: '2026-07-29',
            note: '$8.48 million cash on hand. Separately, roughly $520,000 in independent expenditures has supported her, and a pro-Moody super PAC (Stronger Safer Nation) reported about $11 million on hand — including a single $2.5 million contribution from Ken Griffin. That outside support dwarfs the $2,167 in independent expenditures recorded for Vindman.',
            source: {
              title: 'FEC candidate totals, 2026 cycle',
              url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=S&state=FL',
              date: '2026-07-29'
            }
          },
          endorsements: [],
          links: {
            'FEC filings': 'https://www.fec.gov/data/candidates/?election_year=2026&office=S&state=FL'
          }
        },
        {
          id: 'gleason',
          name: 'Chris Gleason',
          party: 'R',
          residence: 'Largo',
          occupation: 'Not documented by this guide',
          bio: 'Qualified for the August 18 Republican primary.',
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'This guide located no significant public record, prior office, or documented controversy for this candidate.',
              date: '2026-08-05',
              source: {
                title: 'FEC candidate registry',
                url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=S&state=FL'
              },
              detail: 'Stated explicitly rather than left blank. Lower-profile candidates are covered here on the same terms as frontrunners.'
            }
          ],
          finance: {
            raised: 19690,
            spent: null,
            asOf: '2026-08-05',
            note: 'Under 0.2% of what the two leading candidates have raised.',
            source: {
              title: 'FEC candidate totals, 2026 cycle',
              url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=S&state=FL',
              date: '2026-08-05'
            }
          },
          endorsements: [],
          links: {

          }
        },
        {
          id: 'perry',
          name: 'Neelam Perry',
          party: 'R',
          residence: 'St. Petersburg',
          occupation: 'Not documented by this guide',
          bio: 'Qualified for the August 18 Republican primary.',
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'Has no campaign finance report on file with the FEC at all — the only qualified candidate in this race with zero reported financial activity.',
              date: '2026-08-05',
              source: {
                title: 'FEC candidate registry',
                url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=S&state=FL'
              }
            },
            {
              type: 'fact',
              claim: 'This guide reviewed, but is NOT publishing, an unverified claim circulating about this candidate’s professional licensing history.',
              date: '2026-08-05',
              source: {
                title: 'This guide’s verification standard',
                url: 'methodology.html'
              },
              detail: 'It could not be confirmed against primary regulatory records, and this guide could not confirm the claim even refers to this person rather than someone with a similar name. Publishing an unverified allegation of that kind would be irresponsible. It is noted only so that readers who encounter the claim elsewhere know it was checked and did not meet this guide’s evidence standard.'
            }
          ],
          finance: null,
          endorsements: [],
          links: {

          }
        },
        {
          id: 'rivera',
          name: 'Ernest Rivera',
          party: 'R',
          residence: 'Temple Terrace',
          occupation: 'Not documented by this guide',
          bio: 'Qualified for the August 18 Republican primary.',
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'This guide located no significant public record, prior office, or documented controversy for this candidate.',
              date: '2026-08-05',
              source: {
                title: 'FEC candidate registry',
                url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=S&state=FL'
              }
            }
          ],
          finance: {
            raised: 15973,
            spent: null,
            asOf: '2026-08-05',
            source: {
              title: 'FEC candidate totals, 2026 cycle',
              url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=S&state=FL',
              date: '2026-08-05'
            }
          },
          endorsements: [],
          links: {

          }
        },
        {
          id: 'nixon',
          name: 'Angie Nixon',
          party: 'D',
          residence: 'Jacksonville',
          occupation: 'Florida state legislator',
          bio: 'A member of the Florida House from Jacksonville, running in the August 18 Democratic primary.',
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'Was reprimanded by the Florida House over a protest in which she used a megaphone, and faces contested misdemeanor charges arising from it.',
              date: '2026-05-14',
              source: {
                title: 'Florida legislative and news coverage',
                url: 'https://ballotpedia.org/Angie_Nixon'
              },
              detail: 'The charges are contested and unresolved. A criminal charge is an accusation, not a finding of guilt.'
            }
          ],
          finance: {
            raised: 974845,
            spent: null,
            asOf: '2026-08-05',
            note: '$265,000 cash on hand — roughly one-fifteenth of her primary opponent’s war chest.',
            source: {
              title: 'FEC candidate totals, 2026 cycle',
              url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=S&state=FL',
              date: '2026-08-05'
            }
          },
          endorsements: [],
          links: {

          }
        },
        {
          id: 'vindman',
          name: 'Alexander Vindman',
          party: 'D',
          occupation: 'Retired U.S. Army lieutenant colonel',
          bio: 'Retired Army lieutenant colonel who served on the National Security Council and testified as a witness in the 2019 impeachment inquiry. His identity was independently confirmed across multiple outlets for this guide — this is that Alexander Vindman, not a different person with the same name.',
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'Filed a defamation lawsuit in 2022 that was dismissed.',
              date: '2022-11-08',
              source: {
                title: 'Federal court records coverage',
                url: 'https://ballotpedia.org/Alexander_Vindman'
              },
              detail: 'Dismissed by Judge James Boasberg. A dismissed suit is not a finding against the person who filed it; it appears here because litigation history is reported for every candidate in this guide.'
            }
          ],
          finance: {
            raised: 14600000,
            spent: null,
            asOf: '2026-06-30',
            note: '$7.31 million cash on hand — the most raised by any candidate in this race, ahead of the appointed incumbent. Outside spending runs the other way: $2,167 in independent expenditures supported him, versus roughly $520,000 for Moody plus an $11 million pro-Moody super PAC.',
            source: {
              title: 'FEC candidate totals, 2026 cycle',
              url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=S&state=FL',
              date: '2026-06-30'
            }
          },
          endorsements: [],
          links: {
            'FEC filings': 'https://www.fec.gov/data/candidates/?election_year=2026&office=S&state=FL'
          }
        },
        {
          id: 'gillespie',
          name: 'Neil Gillespie',
          party: 'NPA',
          residence: 'Ocala',
          occupation: 'Not documented by this guide',
          bio: 'Qualified as a no-party-affiliation candidate for the November 3 general election. He does not appear on an August primary ballot.',
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'He self-describes as a pro se litigant, but this guide retrieved no court docket and will not characterize his litigation history without one.',
              date: '2026-08-05',
              source: {
                title: 'FEC candidate registry',
                url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=S&state=FL'
              }
            }
          ],
          finance: {
            raised: 12297,
            spent: null,
            asOf: '2026-08-05',
            source: {
              title: 'FEC candidate totals, 2026 cycle',
              url: 'https://www.fec.gov/data/candidates/?election_year=2026&office=S&state=FL',
              date: '2026-08-05'
            }
          },
          endorsements: [],
          links: {

          }
        }
      ]
    }
  ]
};
