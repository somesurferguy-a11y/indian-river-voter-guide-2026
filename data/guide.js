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
    updated: '2026-08-26',
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
    },
    {
      label: 'Sebastian Inlet Tax District — added Aug 26, 2026; status genuinely unclear',
      detail: 'An independent special taxing district managing Sebastian Inlet, separate from the county, with a 5-member commission (3 Brevard County seats, 2 Indian River County seats). The Indian River County seat, Board District 4, is held by David Barney with a term expiring in 2026 — but this guide could NOT confirm whether he is seeking re-election, whether the seat is contested, or whether it will actually appear on any Indian River County voter\'s printed ballot this cycle. It does not appear on the county Supervisor of Elections\' own "offices up for election" list, which only covers offices that qualify through the county\'s regular candidate portal — this district appears to run its own separate qualifying process. Included here so voters who\'ve heard of it know what is and isn\'t confirmed, rather than finding no mention of it at all.',
      source: { title: 'Sebastian Inlet District — Board of Commissioners', url: 'https://www.sitd.us/board-of-commissioners', date: '2026-08-25' }
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

  /* ----------------------------------------------------------------- quiz */

  // A candidate-match quiz. IMPORTANT — this is not an endorsement engine:
  // match percentages are computed entirely from the reader's own answers
  // against each candidate's already-published, already-sourced positions
  // (see the `stance` field alongside `summary`/`quote`/`source` on each
  // position in the races above). No candidate is hidden or reordered by
  // this guide's own judgment — every candidate in a race is always shown,
  // sorted by the reader's personal match score, with "not enough data"
  // shown honestly where a candidate hasn't stated a position.
  quiz: {
    disclaimer: 'This tool matches you to candidates using their own public statements on the issues below — it does not reflect this guide\'s opinion, and it is not an endorsement. A high match score means a candidate\'s stated position lines up with your answer, sourced exactly like everywhere else in this guide. Skip any question you don\'t have a strong view on; skipped questions are excluded from scoring rather than counted against anyone.',
    questions: [
      {
        issueId: 'amendment',
        text: 'Amendment 3 on the November ballot would raise the homestead property tax exemption. Do you support it?',
        options: [
          { value: 'support', label: 'Support it' },
          { value: 'oppose', label: 'Oppose it' }
        ]
      },
      {
        issueId: 'growth',
        text: 'How should growth and development be handled here?',
        options: [
          { value: 'restrict-slow-growth', label: 'Resist unchecked growth — reject density, preserve local control against state mandates' },
          { value: 'balanced-managed', label: 'Balanced, case-by-case management' },
          { value: 'streamline-development', label: 'Streamline permitting — reduce barriers to building' }
        ]
      },
      {
        issueId: 'taxes',
        text: 'What should local government prioritize on taxes and spending?',
        options: [
          { value: 'cut-taxes', label: 'Fiscal discipline — keep taxes and spending low' },
          { value: 'transparency-oversight', label: 'Spending transparency and oversight' },
          { value: 'diversify-revenue', label: 'Diversify revenue so it relies less on property taxes' }
        ]
      },
      {
        issueId: 'lagoon',
        text: 'What approach to the Indian River Lagoon do you prefer?',
        options: [
          { value: 'infrastructure-investment', label: 'Invest in infrastructure — septic-to-sewer, stormwater' },
          { value: 'regulatory-accountability', label: 'Hold polluters and industry accountable through regulation' },
          { value: 'general-stewardship', label: 'General environmental stewardship, no strong mechanism preference' }
        ]
      },
      {
        issueId: 'insurance',
        text: "How should Florida address the property insurance crisis?",
        options: [
          { value: 'market-based-reform', label: 'Market-based reform — tort reform, hardening incentives' },
          { value: 'stronger-regulation-oversight', label: 'Stronger state regulation and oversight of insurers' }
        ]
      },
      {
        issueId: 'housing',
        text: "What's the best way to address housing affordability?",
        options: [
          { value: 'expand-affordable-mandate', label: 'Mandates/programs to expand affordable and workforce housing' },
          { value: 'reduce-regulatory-cost', label: 'Reduce the regulatory costs that drive up home prices' },
          { value: 'targeted-financing-tools', label: 'Targeted financing tools — loans, closing-cost help' }
        ]
      },
      {
        issueId: 'schools',
        text: 'What should be the priority for public education?',
        options: [
          { value: 'school-choice-expansion', label: 'Expand school choice — charter, private, homeschool' },
          { value: 'public-school-investment', label: 'Invest more in traditional public schools' },
          { value: 'local-state-control', label: 'Keep control at the state, local, and school-board level' }
        ]
      },
      {
        issueId: 'sheriff-budget',
        text: 'In a funding dispute between the Sheriff and county commission, where do you lean?',
        options: [
          { value: 'back-sheriff-funding', label: 'Prioritize the Sheriff\'s requested public-safety funding' },
          { value: 'process-reform', label: 'Neither side — fix the budget process itself' }
        ]
      }
    ]
  },

  /* --------------------------------------------------------------- issues */

  issues: [
    {
      id: 'demographics',
      name: 'Who Votes Here — The Electorate',
      background:
        'As of July 20, 2026, Indian River County had 118,078 active registered voters: 62,760 Republicans (53.2%), 26,072 Democrats (22.1%), 24,003 No Party Affiliation (20.3%), and 5,243 registered with other parties (4.4%). That Republican registration advantage is a large part of why most seriously contested local races are Republican primaries — and why the roughly 50,000 Democratic and NPA voters are the group county races most often overlook, even though several 2026 contests are decided by all of them together.\n\n' +
        'The county is older than the nation as a whole: about 36.1% of residents are 65 or older, against roughly 18% nationally, while 14.7% are under 18. That skews what issues carry weight locally — healthcare access, prescription costs, and property tax burden on fixed incomes tend to matter more here than in a younger county. Population has grown from about 160,000 at the 2020 Census to a 2025 estimate near 172,800, which is also the raw material behind the growth-and-development fights described elsewhere in this guide.\n\n' +
        'Economically, median household income is $57,945 and about 10.3% of residents live below the poverty line. Educational attainment: a 90.1% high school graduation rate and 30.6% with a bachelor\'s degree or higher. By race and ethnicity: 72.8% White non-Hispanic, 14.8% Hispanic, 8.7% Black non-Hispanic, and 1.8% Asian non-Hispanic.',
      trend: {
        title: 'Registration trend, 2022-2026',
        intro: 'Added Aug 26, 2026. Official book-closing snapshots pulled directly from the Florida Division of Elections, not a single "current" pull — each row is a real point-in-time count as of that election\'s registration deadline. Over these four years, the county\'s Republican registration edge has widened (48.3% to 53.2% of all registered voters) while both the Democratic and NPA shares have shrunk, and minor-party registration has more than doubled in raw share (2.3% to 4.4%). Total registration is roughly flat; the 2026 row is a primary-cycle snapshot (before the pre-general registration deadline), not directly comparable in raw totals to the two October general-election snapshots above it.',
        rows: [
          { label: 'Oct 2022 general', r: 57745, rPct: 48.35, d: 30489, dPct: 25.53, npa: 28439, npaPct: 23.81, other: 2760, otherPct: 2.31, total: 119433,
            source: { title: 'FL Division of Elections — 2022 General Election, Active Registered Voters By Party (book closing Oct 11, 2022)', url: 'https://dos.fl.gov/elections/data-statistics/voter-registration-statistics/bookclosing/bookclosing-reports-regular/', date: '2022-10-11' } },
          { label: 'Oct 2024 general', r: 61833, rPct: 51.15, d: 28221, dPct: 23.35, npa: 26654, npaPct: 22.05, other: 4172, otherPct: 3.45, total: 120880,
            source: { title: 'FL Division of Elections — 2024 General Election, Active Registered Voters by Party (book closing Oct 7, 2024)', url: 'https://dos.fl.gov/elections/data-statistics/voter-registration-statistics/bookclosing/bookclosing-reports-regular/', date: '2024-10-07' } },
          { label: 'Jul 2026 primary', r: 62760, rPct: 53.15, d: 26072, dPct: 22.08, npa: 24008, npaPct: 20.33, other: 5238, otherPct: 4.44, total: 118078,
            source: { title: 'FL Division of Elections — 2026 Primary Election, Active Registered Voters by Party (book closing Jul 20, 2026)', url: 'https://dos.fl.gov/elections/data-statistics/voter-registration-statistics/voter-registration-reports/voter-registration-by-county-and-party/', date: '2026-07-20' } }
        ]
      },
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
      ballot: 'general',
      term: '4 years',
      stakes:
        'An OPEN SEAT: four-term incumbent Joe Flescher, first elected in 2006, is not seeking re-election. The Board of County Commissioners sets the county property tax rate, approves the budget, and controls zoning, density, and the comprehensive plan — the single most consequential local body for growth and taxes. Note that county commissioners are elected COUNTYWIDE but must live in their district. The three-way Republican money race is unusually tight: all three are within about $4,100 of each other and have each spent roughly 90% of what they raised.',
      whoVotes:
        'On August 18 this is a CLOSED REPUBLICAN primary: only registered Republicans may vote it, choosing among McPartlan, Pippin, and Robinson. Democrat Robert Hardingham is unopposed for his party\'s nomination, so there is no Democratic contest here. NPA and minor-party voters do NOT see this race on their August ballot — but they do get School Board, the special districts, and any referendum questions. On November 3 EVERY registered voter in District 2 votes: the Republican winner vs. Hardingham vs. a blank write-in line. November is what actually decides this seat.',
      primaryResult: {
        status: 'advanced',
        summary: 'Jennifer Pippin won the three-way Republican primary with 41.57% (8,713 votes), ahead of Bob McPartlan (34.48%, 7,228) and Daniel "Brooks" Robinson (23.95%, 5,019) — official county results, unofficial until certified. Pippin advances to face Democrat Robert "Robbie" Hardingham (unopposed in his primary) and qualified write-in Nicole Paradiso on the Nov 3 general election ballot.',
        source: {
          title: 'Indian River County Election Night Reporting — 2026 Primary Election (official, county-hosted; unofficial until certified)',
          url: 'https://enr.electionsfl.org/IND/4032/Summary/',
          date: '2026-08-25'
        }
      },
      candidates: [
        {
          id: 'mcpartlan',
          name: 'Bob McPartlan',
          party: 'R',
          residence: 'Sebastian',
          occupation: 'Sebastian City Council member (currently Vice Mayor); 25+ years, Florida Dept. of Children and Families',
          bio: 'On the Sebastian City Council since 2011, having served as Mayor and currently as Vice Mayor. U.S. Army veteran and former Explosive Ordnance Disposal technician who rose to sergeant, serving in the Army Reserves during Operation Desert Storm. Spent 25+ years with the Florida Department of Children and Families, advancing to leadership overseeing child protective investigations across multiple counties.',
          primary: {
            result: 'lost',
            votes: 7228,
            pct: 34.48,
            source: {
              title: 'Indian River County Election Night Reporting — 2026 Primary Election (official, county-hosted; unofficial until certified)',
              url: 'https://enr.electionsfl.org/IND/4032/Summary/',
              date: '2026-08-25'
            }
          },
          positions: {
            amendment: {
              stance: 'oppose',
              summary: 'OPPOSED Amendment 3, the November property tax measure, at a pre-primary candidate forum.',
              source: { title: 'Vero News — District 2 candidate forum', url: 'https://veronews.com/2026/08/07/district-2-commissioner-candidates-discuss-key-issues-before-primary/', date: '2026-08-07' }
            },
            lagoon: {
              summary: 'Names the lagoon his first priority; points to work on it during 15 years on the Sebastian council. In a separate candidate Q&A he reportedly proposed membership on a lagoon council as his specific mechanism, distinct from his opponents\' approaches. Correction, Aug 2026: this guide had mistakenly tagged this as "general stewardship, no specific mechanism" for the match quiz — the opposite of what it says. A "lagoon council" is a real, specific mechanism, but it\'s a governance/coordination approach that doesn\'t fit this guide\'s other two mechanism categories (infrastructure spending, polluter-accountability regulation), so no quiz stance is assigned rather than force a wrong fit — it will show as "no data" in the quiz.',
              quote: 'The Indian River Lagoon is the heart of our community — our economy, our recreation, and our way of life all depend on it.',
              source: { title: 'Campaign website — Issues', url: 'https://votebobmcpartlan.com/', date: '2026-08-05' }
            },
            growth: {
              stance: 'balanced-managed',
              summary: 'Manage growth responsibly while preserving small-town character; frames it around infrastructure delivery.',
              quote: 'Indian River County is growing, and growth has to be managed responsibly.',
              source: { title: 'Campaign website — Issues', url: 'https://votebobmcpartlan.com/', date: '2026-08-05' }
            },
            taxes: {
              stance: 'cut-taxes',
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
          primary: {
            result: 'won',
            votes: 8713,
            pct: 41.57,
            source: {
              title: 'Indian River County Election Night Reporting — 2026 Primary Election (official, county-hosted; unofficial until certified)',
              url: 'https://enr.electionsfl.org/IND/4032/Summary/',
              date: '2026-08-25'
            }
          },
          positions: {
            amendment: {
              stance: 'support',
              summary: 'Her campaign site banner declares blanket support for the amendment. See her record below for a more hedged position stated in a later interview.',
              quote: 'I\'m YOUR County Commission District 2 Candidate that Supports the proposed constitutional amendment "Save Our Homes from Excessive Property Taxes" that will appear on Florida\'s November 2026 ballot.',
              source: { title: 'Campaign website homepage', url: 'https://votejenniferpippin.com/', date: '2026-08-05' }
            },
            growth: {
              stance: 'balanced-managed',
              summary: 'Manage growth responsibly to protect roads, environment and communities.',
              quote: 'Growth should be managed responsibly so our roads, environment, and communities are protected for future generations.',
              source: { title: 'Campaign website', url: 'https://votejenniferpippin.com/', date: '2026-08-05' }
            },
            taxes: {
              stance: 'transparency-oversight',
              summary: 'Frames county government around spending transparency; carries her school-board activism into county government.',
              quote: 'The same accountability I brought to our schools, I am bringing to county government. Same fight. Bigger arena.',
              source: { title: 'Campaign website', url: 'https://votejenniferpippin.com/', date: '2026-08-05' }
            },
            'sheriff-budget': {
              stance: 'back-sheriff-funding',
              summary: 'Says the county and sheriff should have settled their budget dispute earlier through tougher public discussion, and that she would back full funding for the sheriff\'s office if needed for safety.',
              quote: 'If I was a county commissioner at that time, I would have tried to settle it prior. I would have said, listen, we need to have longer, harder conversations. Do it in the sunshine, do it in the public... if the sheriff and the Indian River County Sheriff\'s Office needs more money to do that, I would absolutely back the blue and make sure that they have the funding for what they need.',
              detail: 'This guide\'s own transcription (via YouTube auto-captions) of a candidate interview recorded April 17, 2026.',
              source: { title: 'The Board Report by IRC Media with Candidate Jennifer Pippin', url: 'https://www.youtube.com/watch?v=HiQchfzacOU', date: '2026-04-17' }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'In an April 2026 interview, gave a more hedged position on the property tax amendment than her campaign site banner suggests: when asked directly whether she wants it to pass, she did not answer yes or no, instead favoring a phased rollout — retired veterans first, then seniors and the disabled — rather than eliminating property taxes for everyone at once.',
              detail: 'She named non-governmental nonprofit funding (SESAC and similar county-funded outside organizations) as her first target for cuts if the amendment reduces county revenue, before touching the sheriff, roads, or safety services. Both her campaign-site banner statement and this more cautious interview answer are genuine public statements from the same candidate; this guide presents both rather than picking one as more authoritative.',
              date: '2026-04-17',
              source: { title: 'The Board Report by IRC Media with Candidate Jennifer Pippin', url: 'https://www.youtube.com/watch?v=HiQchfzacOU' }
            },
            {
              type: 'fact',
              claim: 'In the same interview, opposed allowing new Community Development Districts (CDDs) — an added layer of elected taxing authority some developers have proposed for new subdivisions — and separately said she wants to preserve agricultural land and conservation preserves rather than rezone them for denser development, tying land preservation directly to Indian River Lagoon health.',
              quote: 'For me, I\'m about less government... I worry about putting more people in government, more votes, more things like that, more responsibility on one or two individuals that don\'t have the experience.',
              date: '2026-04-17',
              source: { title: 'The Board Report by IRC Media with Candidate Jennifer Pippin', url: 'https://www.youtube.com/watch?v=HiQchfzacOU' }
            },
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
          primary: {
            result: 'lost',
            votes: 5019,
            pct: 23.95,
            source: {
              title: 'Indian River County Election Night Reporting — 2026 Primary Election (official, county-hosted; unofficial until certified)',
              url: 'https://enr.electionsfl.org/IND/4032/Summary/',
              date: '2026-08-25'
            }
          },
          positions: {
            amendment: {
              stance: 'oppose',
              summary: 'OPPOSED Amendment 3, the November property tax measure, at a pre-primary candidate forum.',
              source: { title: 'Vero News — District 2 candidate forum', url: 'https://veronews.com/2026/08/07/district-2-commissioner-candidates-discuss-key-issues-before-primary/', date: '2026-08-07' }
            },
            growth: {
              stance: 'restrict-slow-growth',
              summary: 'Update the comprehensive plan and plan growth deliberately; explicitly rejects becoming a dense South Florida city.',
              quote: 'The goal is not to become another crowded South Florida city, but to remain a thriving, less-dense community where families can live, work, and play locally.',
              source: { title: 'Campaign website', url: 'https://votebrooksrobinson.com/', date: '2026-08-05' }
            },
            taxes: {
              stance: 'diversify-revenue',
              summary: 'Reduce reliance on residential property taxes by broadening the local economy — tax diversification rather than a stated position on the amendment.',
              quote: 'Indian River County must reduce its reliance on residential property taxes by building a more balanced local economy.',
              source: { title: 'Campaign website', url: 'https://votebrooksrobinson.com/', date: '2026-08-05' }
            },
            lagoon: {
              stance: 'infrastructure-investment',
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
          primary: {
            result: 'advanced',
            source: {
              title: 'Indian River County Supervisor of Elections — candidate list (VoterFocus campaign finance system)',
              url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?c=indian',
              date: '2026-08-25'
            }
          },
          positions: {
            amendment: {
              stance: 'oppose',
              summary: 'OPPOSED Amendment 3, the November property tax measure, at a pre-primary candidate forum.',
              source: { title: 'Vero News — District 2 candidate forum', url: 'https://veronews.com/2026/08/07/district-2-commissioner-candidates-discuss-key-issues-before-primary/', date: '2026-08-07' }
            },
            lagoon: {
              stance: 'regulatory-accountability',
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
          primary: {
            result: 'advanced',
            source: {
              title: 'Indian River County Supervisor of Elections — candidate list (VoterFocus campaign finance system)',
              url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?c=indian',
              date: '2026-08-25'
            }
          },
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
              stance: 'process-reform',
              summary: 'Described the sheriff\'s lawsuit against the commission as unprecedented in county history. After the April 2026 settlement, as Board Chairman, framed it as a reset toward cooperation rather than relitigating who was right.',
              quote: 'The Board affirms its commitment to putting recent conflicts behind and moving forward in a cooperative, professional partnership with the Sheriff\'s Office for the benefit of all residents.',
              source: {
                title: 'WPTV — "Indian River County settles budget dispute with sheriff, provides $3.5 million"',
                url: 'https://www.wptv.com/news/treasure-coast/region-indian-river-county/indian-river-county-settles-budget-dispute-with-sheriff-provides-3-5-million',
                date: '2026-04-14'
              }
            },
            taxes: {
              stance: 'cut-taxes',
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
              stance: 'balanced-managed',
              summary: 'Supports development that funds its own infrastructure, and weighing cumulative environmental impact rather than project-by-project.',
              quote: 'Growth is coming whether we plan for it or not. The question is whether we will manage that growth responsibly.',
              source: {
                title: 'Campaign website',
                url: 'https://votemarcjaffe.com/issues',
                date: '2026-08-08'
              }
            },
            lagoon: {
              stance: 'infrastructure-investment',
              summary: 'Frames lagoon health as an economic necessity, calling for science-based decisions and better stormwater management.',
              quote: 'A healthy lagoon is not just an environmental goal — it\'s an economic necessity and a quality-of-life issue.',
              source: {
                title: 'Campaign website',
                url: 'https://votemarcjaffe.com/issues',
                date: '2026-08-08'
              }
            },
            taxes: {
              stance: 'transparency-oversight',
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
      ballot: 'decided',
      term: '4 years',
      stakes:
        'The School Board sets district policy, approves the budget, hires and evaluates the superintendent, and decides challenges to library books — the issue that put this district in national news. District 2 covers the southern half of Sebastian south to the city of Vero Beach, plus the northern tip of the barrier island.',
      whoVotes:
        'EVERY registered voter in District 2 may vote in this race on August 18, including No Party Affiliation and third-party voters — school board races in Florida are nonpartisan and not restricted by party. With only two candidates, August 18 decides this seat. Worth knowing: as of July 20, 2026 the county had 26,072 registered Democrats and 24,003 NPA voters — about 50,000 people who have few or no partisan primaries pulling them to the polls, but who can all vote this race.',
      primaryResult: {
        status: 'decided',
        summary: 'Incumbent Jacqueline "Jackie" Rosario won outright with 51.84% of the vote (17,069) over Thomas "Tom" Lange (48.16%, 15,856) — a margin of 1,213 votes, official county results, unofficial until certified. Because this is a nonpartisan universal primary and she cleared 50%, the race is fully decided; it does not appear on the Nov 3 general ballot.',
        source: {
          title: 'Indian River County Election Night Reporting — 2026 Primary Election (official, county-hosted; unofficial until certified)',
          url: 'https://enr.electionsfl.org/IND/4032/Summary/',
          date: '2026-08-25'
        }
      },
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
          primary: {
            result: 'won',
            votes: 17069,
            pct: 51.84,
            source: {
              title: 'Indian River County Election Night Reporting — 2026 Primary Election (official, county-hosted; unofficial until certified)',
              url: 'https://enr.electionsfl.org/IND/4032/Summary/',
              date: '2026-08-25'
            }
          },
          positions: {
            schools: {
              stance: 'public-school-investment',
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
          primary: {
            result: 'lost',
            votes: 15856,
            pct: 48.16,
            source: {
              title: 'Indian River County Election Night Reporting — 2026 Primary Election (official, county-hosted; unofficial until certified)',
              url: 'https://enr.electionsfl.org/IND/4032/Summary/',
              date: '2026-08-25'
            }
          },
          positions: {
            schools: {
              stance: 'public-school-investment',
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
      ballot: 'decided',
      stakes: 'Unopposed. Ryan Matthews qualified without opposition and is elected to the seat.',
      whoVotes: 'Unopposed races may not appear on your ballot.',
      primaryResult: {
        status: 'decided',
        summary: 'Ryan Matthews qualified with no opponent and is elected without a ballot contest — no primary or general-election vote occurs for this seat.',
        source: {
          title: 'Indian River County Supervisor of Elections — candidate list (VoterFocus campaign finance system)',
          url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?c=indian',
          date: '2026-08-25'
        }
      },
      candidates: [
        {
          id: 'matthews',
          name: 'Ryan Matthews',
          party: 'NONPARTISAN',
          age: 39,
          residence: 'Sebastian',
          occupation: 'Former Marine Corps officer and federal law enforcement officer',
          bio: 'Sebastian native and 2004 graduate of Sebastian River High School. Bachelor\'s in criminal justice from the University of North Florida; currently pursuing an aerospace engineering degree at Florida Institute of Technology. Commissioned as a Marine Corps artillery officer in 2010, later a federal law enforcement officer with the Defense Intelligence Agency and an officer with the Florida Fish and Wildlife Conservation Commission; medically separated in 2019 after an injury. Three sons at Liberty Magnet Elementary. Coaches Sebastian Little League. Running unopposed for the seat currently held by Gene Posca. His four stated priorities: child education and safety first; making public schools the preferred choice for local families; making the district Florida\'s most desirable employer for educators; and fiscal transparency.',
          primary: {
            result: 'unopposed',
            source: {
              title: 'Indian River County Supervisor of Elections — candidate list (VoterFocus campaign finance system)',
              url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?c=indian',
              date: '2026-08-25'
            }
          },
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
      ballot: 'decided',
      stakes: 'Unopposed. Incumbent Teri Barenborg qualified without opposition and returns to the seat.',
      whoVotes: 'Unopposed races may not appear on your ballot.',
      primaryResult: {
        status: 'decided',
        summary: 'Teri L. Barenborg qualified with no opponent and is elected without a ballot contest — no primary or general-election vote occurs for this seat.',
        source: {
          title: 'Indian River County Supervisor of Elections — candidate list (VoterFocus campaign finance system)',
          url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?c=indian',
          date: '2026-08-25'
        }
      },
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
          primary: {
            result: 'unopposed',
            source: {
              title: 'Indian River County Supervisor of Elections — candidate list (VoterFocus campaign finance system)',
              url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?c=indian',
              date: '2026-08-25'
            }
          },
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
      ballot: 'decided',
      term: '4 years',
      stakes: 'The ONLY contested special-district race on the August 18 ballot, and one of just two races open to every voter regardless of party. This is a separate government you already pay taxes to: an independent special district created by the Legislature in 1925, governed by just THREE commissioners elected countywide, levying its own property tax of about 0.25 mills — roughly $75 a year on a home with $300,000 of taxable value, paid by about 93,000 parcels. It raises around $5.4 million a year. With only three seats, this one is a third of the entire governing body.',
      whoVotes: 'EVERY registered voter in Indian River County, including No Party Affiliation voters. It is nonpartisan, and with two candidates it is decided outright on August 18 — it does not appear again in November. Worth noting: roughly 24,000 NPA and 26,000 Democratic voters are eligible here, and neither candidate has made a documented campaign expenditure aimed at them. Both candidates\' only political-organization spending was at Republican Party events. That is a sourced observation about spending, not a claim about either candidate\'s registration, which this guide did not verify.',
      primaryResult: {
        status: 'decided',
        summary: 'This is a two-candidate nonpartisan race, so Florida\'s universal-primary rule means it was decided outright on Aug 18 regardless of margin — it will not appear on the Nov 3 ballot. However, despite an extensive search of the state\'s Election Night Reporting system, local news coverage, and official county sources, this guide could not confirm a winner or vote totals as of its last update (Aug 25, 2026). Confirm directly with the Indian River County Supervisor of Elections at (772) 226-4700.',
        source: {
          title: 'This guide\'s review of official and news sources — winner not located as of last update',
          url: 'https://www.voteindianriver.gov/',
          date: '2026-08-25'
        }
      },
      candidates: [
        {
          id: 'kirkland',
          name: 'Anna J. Kirkland',
          party: 'NONPARTISAN',
          incumbent: true,
          residence: 'Vero Beach',
          occupation: 'Estate manager; sitting Seat 2 commissioner',
          bio: 'The sitting Seat 2 commissioner, elected in 2022. By her own filed candidate statement: a third-generation Floridian and lifelong Indian River County resident, Vero Beach High School graduate, with an associate degree from Indian River State College and a bachelor\'s in business administration anticipated January 2027. Career in executive-level administration and estate management. Founded the Indian River County Cattlewomen chapter in 2019 and serves as its president. Has served on the Agriculture Advisory Committee, Economic Development Council, Environmental Control Hearing Board, and the Treasure Coast Regional Planning Council CEDS committee. Her campaign\'s public Facebook page describes her: "Born and raised in Indian River County. Proud to serve as your Mosquito Control Commissioner, committed to protecting our community through responsible leadership."',
          positions: {
            taxes: {
              stance: 'transparency-oversight',
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
              claim: 'Two of his education claims are independently confirmed on his own Facebook profile: high school at Fork Union Military Academy, college at Virginia Commonwealth University.',
              detail: 'Verified directly from the public "About" section of his personal Facebook profile, not just a secondhand report. A TCPalm candidate questionnaire (June 28, 2026) additionally reported he attended Walsingham Academy, owns a consulting business called "Blue Sky Consultation," and volunteers as a Little League coach and umpire — this guide\'s tool is blocked from fetching tcpalm.com directly, so those three specific details remain attributed to TCPalm\'s reporting rather than independently confirmed.',
              date: '2026-08-17',
              source: { title: 'Craig MacCoy — public Facebook profile', url: 'https://www.facebook.com/craig.maccoy' }
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
      ballot: 'decided',
      stakes:
        'Six local seats drew only one qualified candidate each and are therefore filled automatically. Unopposed candidates generally do not appear on the ballot. Listed here so voters know these offices were decided — and by whom — even though no vote was taken: Hospital District Seats 2 (Michael Kint), 4 (Wayne L. Creelman) and 6 (Kerry Ann Bartlett); Soil & Water Conservation District Seat 1 (Bob Adair); Mosquito Control District Seat 3 (Thomas S. Lowther). Note also that Soil & Water Seats 3 and 5 were listed as up for election but drew no qualified candidate at all; such vacancies are typically filled by appointment.',
      whoVotes: 'No vote is taken in these races. They are included for transparency only.',
      primaryResult: {
        status: 'decided',
        summary: 'All five candidates qualified with no opponent and are elected without a ballot contest — no primary or general-election vote occurs for any of these seats.',
        source: {
          title: 'Indian River County Supervisor of Elections — candidate list (VoterFocus campaign finance system)',
          url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?c=indian',
          date: '2026-08-25'
        }
      },
      candidates: [
        {
          id: 'kint', name: 'Michael Kint', party: 'NONPARTISAN',
          occupation: 'Hospital District, Seat 2 — elected unopposed',
          bio: 'Elected without opposition to the Indian River County Hospital District, Seat 2. The Hospital District levies its own property tax — see the issues section on its budget growth.',
          primary: {
            result: 'unopposed',
            source: {
              title: 'Indian River County Supervisor of Elections — candidate list (VoterFocus campaign finance system)',
              url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?c=indian',
              date: '2026-08-25'
            }
          },
          positions: {}, record: [], finance: null, endorsements: [], links: {}
        },
        {
          id: 'creelman', name: 'Wayne L. Creelman', party: 'NONPARTISAN',
          occupation: 'Hospital District, Seat 4 — elected unopposed',
          bio: 'Elected without opposition to the Indian River County Hospital District, Seat 4.',
          primary: {
            result: 'unopposed',
            source: {
              title: 'Indian River County Supervisor of Elections — candidate list (VoterFocus campaign finance system)',
              url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?c=indian',
              date: '2026-08-25'
            }
          },
          positions: {}, record: [], finance: null, endorsements: [], links: {}
        },
        {
          id: 'bartlett', name: 'Kerry Ann Bartlett', party: 'NONPARTISAN', incumbent: true,
          occupation: 'Hospital District, Seat 6 — elected unopposed; current board chair',
          bio: 'Elected without opposition to the Indian River County Hospital District, Seat 6. As board chair she favored "strategic" funding over frugality in the budget debate that took the District\'s proposed budget to $25.37 million — roughly double FY2021-22 — at a millage above the rolled-back rate.',
          primary: {
            result: 'unopposed',
            source: {
              title: 'Indian River County Supervisor of Elections — candidate list (VoterFocus campaign finance system)',
              url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?c=indian',
              date: '2026-08-25'
            }
          },
          positions: {}, record: [
            { type: 'vote', claim: 'As board chair, favored "strategic" funding over frugality in FY2025-26 budget deliberations.',
              quote: "I think we have a responsibility to be strategic with our funding. I don't know about the word frugal.",
              date: '2026-08-04', source: { title: 'Vero News — "Hospital District can\'t seem to curb its spending habits"', url: 'https://veronews.com/2026/08/04/hospital-district-cant-seem-to-curb-its-spending-habits/', date: '2026-08-04' } },
            { type: 'vote', claim: 'The board approved a maximum FY2025-26 millage rate of 74.5 cents per $1,000 of assessed value — above the 71.2-cent rollback rate, a $1.2 million tax increase — on a 5-1 vote, with Trustee Paul Westcott dissenting. Total budget: $25.37 million, roughly double FY2021-22.',
              date: '2026-08-04', source: { title: 'Vero News — "Hospital District can\'t seem to curb its spending habits"', url: 'https://veronews.com/2026/08/04/hospital-district-cant-seem-to-curb-its-spending-habits/', date: '2026-08-04' } }
          ], finance: null, endorsements: [], links: {}
        },
        {
          id: 'adair', name: 'Bob Adair', party: 'NONPARTISAN',
          occupation: 'Soil & Water Conservation District, Seat 1 — elected unopposed',
          bio: 'Elected without opposition to the Indian River Soil & Water Conservation District, Seat 1.',
          primary: {
            result: 'unopposed',
            source: {
              title: 'Indian River County Supervisor of Elections — candidate list (VoterFocus campaign finance system)',
              url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?c=indian',
              date: '2026-08-25'
            }
          },
          positions: {}, record: [], finance: null, endorsements: [], links: {}
        },
        {
          id: 'lowther', name: 'Thomas S. Lowther', party: 'NONPARTISAN',
          occupation: 'Mosquito Control District, Seat 3 — elected unopposed',
          bio: 'Elected without opposition to the Indian River Mosquito Control District, Seat 3.',
          primary: {
            result: 'unopposed',
            source: {
              title: 'Indian River County Supervisor of Elections — candidate list (VoterFocus campaign finance system)',
              url: 'https://www.voterfocus.com/CampaignFinance/candidate_pr.php?c=indian',
              date: '2026-08-25'
            }
          },
          positions: {}, record: [], finance: null, endorsements: [], links: {}
        }
      ]
    },

    {
      id: 'vero-beach-council',
      office: 'Vero Beach City Council',
      district: 'At-large',
      type: 'nonpartisan',
      ballot: 'general',
      stakes:
        'CORRECTION (added Aug 25, 2026): this guide originally described this race as tied to the county\'s August 18 primary date. That was wrong. The city\'s own official candidate-treasurer schedule confirms there is no separate August contest for City Council — it is a single nonpartisan "vote for 3" plurality election on November 3, 2026, the same day as the county general election. ONLY relevant if you live within Vero Beach city limits. Three of the council\'s five seats are up this cycle — those held by Linda Moore, John Carroll, and Aaron Vos (each elected Nov. 2024 to 2-year terms). John Carroll is not on the 2026 candidate list and appears not to be seeking re-election, leaving his seat open. Eight candidates qualified for the three seats; the top three vote-getters win. Several candidates here have long, multi-cycle Vero Beach political histories; this guide is deliberately not importing older-cycle campaign statements as current 2026 positions unless independently confirmed as still current.',
      whoVotes:
        'Only registered voters residing within Vero Beach city limits, on the November 3, 2026 general election ballot — there is no separate August primary for this race. Vote for up to three; the top three finishers win the three open seats. If you live in unincorporated Indian River County, in Sebastian, Fellsmere, Indian River Shores, or Orchid, this race is not on your ballot at all.',
      candidates: [
        { id: 'oconnor', name: "John O'Connor", party: 'NONPARTISAN',
          occupation: 'Retired Indian River County firefighter/paramedic; former union president',
          bio: 'A lifelong Vero Beach resident who attended St. Helen Catholic School, Vero Beach Junior High, and Vero Beach High School before earning a bachelor\'s in psychology from the University of Central Florida. Served over two decades as an Indian River County firefighter and paramedic, and led the Professional Firefighters and Paramedics of Indian River County as president for 12 years. Also led the Vero Velo Bicycle Club and directed the Tour de Vero charity cycling event for three years.',
          positions: {}, record: [], finance: null, endorsements: [],
          links: { 'Campaign website': 'https://www.votejohnoconnor.com/' } },
        { id: 'zudans', name: 'Tracey Lockwood Zudans', party: 'NONPARTISAN',
          occupation: 'Former Vero Beach City Council member',
          bio: 'Previously served a term on Vero Beach City Council before leaving to run for Indian River County Commission District 5 in 2024, where she lost the Republican primary to incumbent Laura Moss, 55%-45% — that county seat is not up again until 2028 and is unrelated to this race. Her 2026 campaign site (copyright-dated 2026) confirms she is now seeking a return to City Council, describing herself as having "previously served as a Vero Beach City Council Member."',
          positions: {}, record: [
            { type: 'vote', claim: 'Cast the sole dissenting vote against both the FY2023-24 city budget and its accompanying millage-rate increase (consecutive 4-1 votes, Sept. 2023). The $33 million budget, up 5.1%, raised the millage from $2.69 to $2.77 per $1,000 of taxable value to fund four new police officers, added staff, and 5% raises for 330+ employees.',
              quote: "unnecessary [spending]... [the council could have] met the public-safety criteria without raising the millage.",
              date: '2023-10-30', source: { title: 'Vero News — "City ups taxes to fund raises, add cops"', url: 'https://veronews.com/2023/10/30/city-ups-taxes-to-fund-raises-add-cops/', date: '2023-10-30' } },
            { type: 'fact', claim: 'While simultaneously running for County Commission in Dec. 2023, was asked about a potential conflict of interest given a pending water-sewer agreement between the city and Indian River Shores. Mayor Cotugno said "potential exists" for conflicts; her county-race opponent and a former commissioner said they saw none.',
              quote: "I can't even think of an issue where there would be a conflict... [my] fiduciary duty to Vero Beach [is my] first responsibility.",
              detail: 'No specific instance of an actual conflicted vote was found.',
              date: '2023-12-01', source: { title: 'Vero News — "Zudans, seeking County Commission seat, sees no conflict with city duties"', url: 'https://veronews.com/2023/12/01/zudans-seeking-county-commission-seat-sees-no-conflict-with-city-duties/', date: '2023-12-01' } },
            { type: 'vote', claim: 'On May 28, 2024, voted with a 3-2 council majority to pursue the "SuDa" Three Corners redevelopment proposal over "Clearpath." After that vote, she received an email from Brian Barefoot suggesting his support for her county-commission campaign was contingent on how she voted — which she has publicly cited as the basis for recusing herself from the subsequent June 7, 2024 vote to disqualify SuDa, even though the city attorney had advised her the email did not meet Florida\'s statutory recusal requirements.',
              quote: 'support for my run for county commission was based on my vote, or not on my vote.',
              detail: 'The June 7, 2024 vote tallies (reported as 3-1 with one abstention to disqualify SuDa, and 4-1 to restart the developer-selection process) are sourced only to a partisan Substack in this guide\'s research; an independent read of the city\'s own council minutes would corroborate the exact tallies.',
              date: '2024-06-07', source: { title: 'The Sunshine Journal (partisan Substack) — reporting on the Three Corners recusal', url: 'https://thomasaugustus.substack.com/p/update-mayor-cotugnos-political-failure', date: '2024-06-07' } }
          ], finance: null, endorsements: [],
          links: { 'Campaign website': 'https://traceyzudans.com/' } },
        { id: 'vos', name: 'Aaron Vos', party: 'NONPARTISAN', incumbent: true,
          occupation: 'Management/technical consultant, RTX Corporation (formerly Raytheon)',
          bio: 'Elected to City Council in 2024 after moving to Vero Beach from California; lives in Castaway Cove. Age 63 at the time of that election, a first-time officeholder who won with 23% of the vote in a multi-candidate field. Seeking a second term in 2026.',
          positions: {}, record: [
            { type: 'vote', claim: 'Seconded then-Vice Mayor Moore\'s motion to approve the FY2025-26 budget (2.9816 millage, 7.72% higher than the prior year); passed unanimously, 5-0. Separately advocated using AI to assist with crime-data analysis during the police-budget discussion.',
              date: '2025-09-04', source: { title: 'Hometown News — "Vero Beach approves $36m city budget with higher tax rate"', url: 'https://www.hometownnewstc.com/news/indian_river/vero-beach-approves-36m-city-budget-with-higher-tax-rate/article_e73e323f-e8a2-5b1e-b911-2e7922c34448.html', date: '2025-09-04' } },
            { type: 'vote', claim: 'Voted against using a 14-acre city-owned "old nursery site" for affordable housing under the Live Local Act (joined by Vice Mayor Dingle and Councilman Carroll; opposed by Moore and Mayor Cotugno, who wanted to use the site). Cited environmental/industrial-zoning concerns tied to a nearby cement operation.',
              quote: "This site is a required city resource. It's just like a fire truck. We might not need a fire truck every day, but when you need it, you need it.",
              date: '2025-12-30', source: { title: 'Vero News — "On housing site, Vero\'s tough call was right one"', url: 'https://veronews.com/2025/12/30/on-housing-site-veros-tough-call-was-right-one/', date: '2025-12-30' } },
            { type: 'fact', claim: 'After a February 2025 state enforcement action against the city over late sales-tax payments and two years of delayed pension contributions (costing the city over $250,000 in penalties/interest), conducted his own independent root-cause analysis of the failures and pushed successfully for the city to resume monthly financial reports.',
              quote: "There are more yellows, which means potential contributor to the issue, than I've ever seen [in comparable corrective-action studies].",
              date: '2025-06-05', source: { title: 'Vero Beach 32963 — "Council Demands Monthly Reports On City Finances"', url: 'https://vb32963online.com/STORIES%202025/JUNE%202025/VB32963_Council_Demands_Monthly_Reports_On_City_Finances_Issue23_060525.html', date: '2025-06-05' } },
            { type: 'vote', claim: 'Supported a second 30-day extension on Three Corners ground-lease negotiations in August 2026, while pushing for tighter oversight of any further extension.',
              quote: 'Probably a little more rigor on the next round. Maybe have more of a briefing or an update that helps qualify another extension.',
              date: '2026-08-13', source: { title: 'WQCS — "Three Corners project gets additional 30 day extension in Vero Beach"', url: 'https://www.wqcs.org/wqcs-news/2026-08-13/three-corners-project-gets-additional-30-day-extension-in-vero-beach', date: '2026-08-13' } },
            { type: 'fact', claim: 'This guide could not locate a 2026-cycle campaign treasurer\'s report for Vos on the City of Vero Beach\'s filing system as of late August 2026 — only 2024-cycle filings are indexed there.',
              date: '2026-08-26', source: { title: 'City of Vero Beach DocumentCenter', url: 'https://www.covb.org/161/Election-Information', date: '2026-08-26' } }
          ], finance: null, endorsements: [],
          links: { 'Campaign website': 'https://www.vosforvero.com/' } },
        { id: 'maccallum', name: 'Robert MacCallum', party: 'NONPARTISAN',
          occupation: 'Owner, Exit Right Realty (downtown Vero Beach)',
          bio: 'Spent much of his youth in Vero Beach before a career in sports promotion and marketing, including work for Major League Soccer\'s Real Salt Lake, and later launched an insurance business in Massachusetts. He and his wife Colleen started their downtown realty company. Filed his candidacy in June 2026.',
          positions: {
            growth: {
              summary: 'Frames the council term as a pivotal moment for shaping the city\'s next 30 years, citing his business and leadership background. Correction, Aug 2026: this guide had tagged this as a "balanced management" stance for the match quiz — on review, this statement doesn\'t actually commit to a growth-policy direction, so no stance is assigned; it will correctly show as "no data" in the quiz rather than a false match.',
              quote: 'I live, work, and raise my family in this city, and I believe we have a tremendous opportunity to shape what our community becomes over the next 30 years. I believe this is a pivotal moment in our city\'s history.',
              source: { title: 'The Sunshine Journal (partisan Substack) — reporting his candidacy filing', url: 'https://thomasaugustus.substack.com/p/breaking-rob-maccallum-files-candidacy', date: '2026-06-01' } }
          }, record: [], finance: null, endorsements: [], links: {} },
        { id: 'kramer', name: 'Jay Kramer', party: 'NONPARTISAN',
          occupation: 'Former Vero Beach City Council member and two-time Mayor; Indian River County Republican Executive Committee Chairman',
          bio: 'Served on Vero Beach City Council Nov. 2010 - Nov. 2016, including two terms as Mayor (2010-2011, 2015-2016), returning after roughly a decade away from the ballot. This guide located his historical council service and record below — his 2010s policy positions are not imported as current 2026 platform statements, but the record of his conduct in office is fair game the same as any other candidate\'s. Confirmed, resolving a prior open question: he is the same Jay Kramer who chairs the Indian River County Republican Executive Committee.',
          positions: {}, record: [
            { type: 'vote', claim: 'Elected in 2010 as part of a slate favoring the sale of the city\'s Vero Electric utility to Florida Power & Light, then reversed himself and became the leading council opponent of the sale, arguing the city could run the utility without a power plant.',
              detail: 'Voters ultimately approved the FPL sale in a March 2013 referendum; it closed in 2014, with the full transition completed by Dec. 2018, after Kramer had left the council.',
              date: '2015-12-03', source: { title: 'Vero Beach 32963 — "Will new Mayor Kramer steer Vero Council back to the right?"', url: 'https://vb32963online.com/STORIES%202015/DECEMBER%202015/VB32963_Will_New_Mayor_Kramer_Steer_Vero_Council_Back_To_The_Right_Issue49_120315.html', date: '2015-12-03' } },
            { type: 'vote', claim: 'In early 2013, proposed a council resolution opposing an FPL rate-increase request; it was rejected by the then-council majority (Mayor Pilar Turner, Vice Mayor Craig Fletcher, Councilwoman Tracy Carroll).',
              detail: 'This guide located this via aggregated search results rather than a directly re-fetched dated article — the vote is reported with reasonable confidence but the exact tally has not been independently re-verified from a primary document.',
              date: '2013-01-01', source: { title: 'Vero Beach 32963 archive coverage (aggregated)', url: 'https://vb32963online.com/', date: '2013-01-01' } },
            { type: 'allegation', claim: 'In Jan. 2021, FBI agents visited Kramer\'s home seeking to question him about his attendance at Trump\'s "Save America" rally in Washington, D.C. on Jan. 6, 2021, after he posted (then deleted) a social-media photo of himself with the Capitol visible in the background.',
              response: 'Kramer refused to answer the agents\' questions ("You work for the prosecution, and I have a right to remain silent"), stated on the record that he "absolutely did not participate in the violent and deadly insurrection," said he learned of the Capitol breach while driving home, and disputed that the portion of the crowd he personally saw was violent. He retained legal counsel and notified state GOP leadership of the contact. No charge, indictment, or further law-enforcement action against him was found by this guide.',
              date: '2021-01-28', source: { title: 'Vero News — "FBI agents seek to question former Mayor Jay Kramer"', url: 'http://veronews.com/2021/01/28/fbi-agents-seek-to-question-former-mayor-jay-kramer/', date: '2021-01-28' } },
            { type: 'allegation', claim: 'As Indian River County Republican Executive Committee Chairman, announced the committee\'s Sept. 2021 censure of then-School Board Chairman Brian Barefoot for supporting a school mask mandate. When Barefoot publicly asked what "censure" meant procedurally, Kramer could not define it on the spot. Critics alleged the censure vote violated the committee\'s own procedural rules (not on the agenda, guests present during voting).',
              response: 'Kramer is on the record only regarding the "what does censure mean" exchange itself ("That would be a definition to the membership of the REC"); this guide found no on-the-record response from him specifically addressing the procedural-violation allegations.',
              date: '2021-09-23', source: { title: 'Vero Beach 32963 — "Backlash Against Jay Kramer Over GOP Unit\'s Vote To Censure Barefoot"', url: 'https://www.vb32963online.com/STORIES%202021/SEPTEMBER%202021/VB32963_Backlash_Against_Jay_Kramer_Over_GOP_Units_Vote_To_Censure_Barefoot_Issue38_092321.html', date: '2021-09-23' } },
            { type: 'fact', claim: 'While serving as Mayor, ran for County Commission District 5 against incumbent Bob Solari in 2016 and did not advance to the general election.',
              detail: 'The general election that year was contested between Solari (R) and Brian Heady (NPA), confirming Solari won the Republican primary — this guide infers Kramer\'s primary loss from that lineup rather than from a directly-read primary-night vote tally, which could not be located.',
              date: '2016-11-08', source: { title: 'Florida Division of Elections Election Night Reporting, Indian River County', url: 'https://enr.electionsfl.org/IND/1638/Summary/', date: '2016-11-08' } }
          ], finance: null, endorsements: [], links: {} },
        { id: 'heady', name: 'Brian Heady', party: 'NONPARTISAN',
          occupation: 'Perennial Vero Beach candidate; one prior term on City Council (2009-2011)',
          bio: 'Correction, Aug 26, 2026: this guide previously described him only as a "perennial candidate," which undersold his history — he won one of his roughly 26 campaigns for office, serving a full term on Vero Beach City Council 2009-2011 after riding voter anger over high Vero Electric bills (he served alongside Jay Kramer, also a candidate in this race). He lost his 2011 re-election bid and has run for various offices since, including an unsuccessful 2016 run for County Commission District 5. His past stated focus has been opposing what he calls wasteful council spending on studies (downtown parking, the Twin Pairs). This guide has not confirmed his specific 2026 platform and is not importing older statements as current.',
          positions: {}, record: [
            { type: 'vote', claim: 'In Nov. 2010, voted "no" on a motion related to selling Vero Electric to FPL, despite having spent months pushing for the city to at least discuss a sale — a reversal he disputed.',
              quote: 'I did not backtrack. I have not changed my position.',
              detail: 'He argued the amended motion required proof the sale would be financially beneficial before he\'d support it. On the same underlying issue, he opposed a colleague\'s push for public FPL meetings, instead favoring private one-on-one sessions between each council member and FPL.',
              date: '2010-11-25', source: { title: 'Vero Beach 32963 — "Heady: Man of principle or professional contrarian?"', url: 'https://vb32963online.com/STORIES%202010/NOVEMBER/vb32963_Heady_Issue36_112510.html', date: '2010-11-25' } },
            { type: 'fact', claim: 'Placed 12 agenda items without the backup documentation the city required during a nearly-5-hour meeting, while other members\' items were properly documented.',
              detail: 'A different, more sympathetic retrospective account describes him during his term as someone who "worked hard and was always accessible to the public," "voted his conscience, even if it meant playing the contrarian," and "insisted on full transparency at all times" — both characterizations are reported here rather than one being selected over the other.',
              date: '2010-11-25', source: { title: 'Vero Beach 32963 — "Heady: Man of principle or professional contrarian?"', url: 'https://vb32963online.com/STORIES%202010/NOVEMBER/vb32963_Heady_Issue36_112510.html', date: '2010-11-25' } },
            { type: 'fact', claim: 'While still sitting on the council, sued the city in federal court in May 2010, alleging officials failed to negotiate transparently on a 2007 contract with the Orlando Utilities Commission, including refusing public access to strategy sessions and contract documents.',
              date: '2010-05-01', source: { title: 'Vero News — "Brian Heady sues Vero, alleging his rights have been violated" (retrospective)', url: 'https://veronews.com/2018/06/21/brian-heady-sues-vero-alleging-rights-violated/', date: '2018-06-21' } },
            { type: 'allegation', claim: 'In a separate June 2018 lawsuit (after leaving office), alleged the council "violates my rights at almost every city council meeting" and that officials had him removed from chambers by police "to hide from public view frauds on the public," bringing claims for Denial of Rights, Unjust Enrichment, and Public Ridicule and Embarrassment.',
              response: 'No on-the-record city rebuttal to this specific 2018 suit was found. The article reports that "all the lawsuits were eventually dismissed" in reference to his cumulative legal history against the city since 2010, but does not give this suit\'s individual outcome.',
              date: '2018-06-21', source: { title: 'Vero News — "Brian Heady sues Vero, alleging his rights have been violated"', url: 'https://veronews.com/2018/06/21/brian-heady-sues-vero-alleging-rights-violated/', date: '2018-06-21' } }
          ], finance: null, endorsements: [], links: {} },
        { id: 'moore', name: 'Linda Moore', party: 'NONPARTISAN', incumbent: true,
          occupation: 'Vero Beach City Council member (Vice Mayor 2023-2025)',
          bio: 'Correction, Aug 26, 2026: this guide previously listed her as sitting Vice Mayor — she stepped down from that post at the council\'s Nov. 17, 2025 organizational meeting, nominating Councilman Taylor Dingle instead (he won 3-2). John Cotugno remains Mayor. Moore is now a Councilmember seeking a further term. This guide has not confirmed her specific 2026 platform beyond the record items below and is not importing older statements as current positions.',
          positions: {}, record: [
            { type: 'vote', claim: 'Made the motion to approve the city\'s FY2025-26 budget: a 2.9816 millage rate, 7.72% higher than the prior year, funding a $36 million budget with seven new positions and a 2% raise for retirees. Passed unanimously, 5-0.',
              date: '2025-09-04', source: { title: 'Hometown News — "Vero Beach approves $36m city budget with higher tax rate"', url: 'https://www.hometownnewstc.com/news/indian_river/vero-beach-approves-36m-city-budget-with-higher-tax-rate/article_e73e323f-e8a2-5b1e-b911-2e7922c34448.html', date: '2025-09-04' } },
            { type: 'vote', claim: 'On the Three Corners waterfront redevelopment, initially voted with two other council members to pursue a rival "SuDa" development proposal over "Clearpath" — a 3-2 vote. The council later disqualified SuDa in a separate, contested vote, and on April 22, 2025 selected Clearpath, reported by multiple outlets as unanimous.',
              detail: 'This guide could not independently confirm Moore\'s specific April 22, 2025 vote from a directly-read tally — the "unanimous" characterization comes from secondary aggregation of news coverage, not a directly verified minutes document. Flagged rather than stated as fully confirmed.',
              date: '2025-04-11', source: { title: 'Vero News — "Three Corners: Council seen backing Clearpath"', url: 'https://veronews.com/2025/04/11/three-corners-council-seen-backing-clearpath/', date: '2025-04-11' } },
            { type: 'vote', claim: 'Supported a second 30-day extension on Three Corners ground-lease negotiations in August 2026, while signaling she would not support a third.',
              quote: "I'm okay with this extension, but I don't think I'd be okay with another one. It feels like we're stalling a little bit.",
              date: '2026-08-13', source: { title: 'WQCS — "Three Corners project gets additional 30 day extension in Vero Beach"', url: 'https://www.wqcs.org/wqcs-news/2026-08-13/three-corners-project-gets-additional-30-day-extension-in-vero-beach', date: '2026-08-13' } },
            { type: 'vote', claim: 'Voted with Mayor Cotugno (the losing side of a 2-3 split) to use a 14-acre city-owned "old nursery site" for affordable housing under the state Live Local Act; Vos, Dingle, and Carroll voted it down.',
              quote: "This is making me crazy, that we're not going to do affordable housing because of hurricane debris.",
              date: '2025-12-30', source: { title: 'Vero News — "On housing site, Vero\'s tough call was right one"', url: 'https://veronews.com/2025/12/30/on-housing-site-veros-tough-call-was-right-one/', date: '2025-12-30' } },
            { type: 'fact', claim: 'Raised a concern that a state zoning provision letting religious institutions build workforce housing on their property could create religious-discrimination questions, while still voting with the full council to direct staff to incorporate it into the city\'s zoning rewrite.',
              quote: "open that can of worms",
              date: '2026-01-27', source: { title: 'Hometown News — "Vero Beach updates zoning for Live Local rules"', url: 'https://www.hometownnewstc.com/news/indian_river/vero-beach-updates-zoning-for-live-local-rules/article_70137709-1754-55c1-a42d-0c8edfe1d7a9.html', date: '2026-01-27' } },
            { type: 'fact', claim: 'In summer 2025, faced public calls to resign after a drag-themed event at her privately-owned restaurant drew a complaint filed with the Florida Attorney General\'s office; she stated publicly, in her capacity as the sitting Vice Mayor, that she would not resign. Of 24 speakers on the matter at a city council meeting, 17 spoke in support of her.',
              detail: 'This guide reports only the public-record portion of this matter — her public statement as an officeholder and the council-meeting public comment. The private event\'s own programming and unrelated personal social-media activity are not reported here as they are not official public conduct.',
              date: '2025-07-31', source: { title: 'Vero News — "Support for vice mayor, tolerance run deep in city"', url: 'https://veronews.com/2025/07/31/support-for-vice-mayor-tolerance-run-deep-in-city/', date: '2025-07-31' } },
            { type: 'fact', claim: 'This guide could not locate a 2026-cycle campaign treasurer\'s report for Moore on the City of Vero Beach\'s filing system as of late August 2026 — only 2022- and 2024-cycle filings are indexed there. City council campaign finance is filed with the City Clerk, not the county Supervisor of Elections\' system used elsewhere in this guide.',
              date: '2026-08-26', source: { title: 'City of Vero Beach DocumentCenter', url: 'https://www.covb.org/161/Election-Information', date: '2026-08-26' } }
          ], finance: null, endorsements: [],
          links: { 'Campaign Facebook': 'https://www.facebook.com/Lindamoreismore/' } },
        { id: 'benedict', name: 'Davis Benedict', party: 'NONPARTISAN',
          occupation: 'Not yet documented by this guide',
          bio: 'Added Aug 25, 2026 after this guide found it had missed him in an earlier pass — he was confirmed as the 8th qualified candidate via the City of Vero Beach\'s official candidate page. This guide has not yet researched his background, occupation, or platform.',
          positions: {}, record: [
            { type: 'fact', claim: 'This guide has not yet completed research on this candidate beyond confirming his name on the official qualified-candidate list.',
              detail: 'Added late after an initial gap in this guide\'s research; flagged honestly rather than left off the ballot entirely.',
              date: '2026-08-25', source: { title: 'City of Vero Beach — official candidate list', url: 'https://www.covb.org/659/Candidates-For-City-Council-2026', date: '2026-08-25' } }
          ], finance: null, endorsements: [], links: {} }
      ]
    },

    {
      id: 'fl-house-34',
      office: 'Florida House',
      district: 'District 34',
      type: 'partisan',
      ballot: 'general',
      term: '2 years',
      stakes: 'ALL of Indian River County sits inside House District 34, which also takes in part of southern Brevard (Micco, Barefoot Bay, Grant-Valkaria). The county is NOT split among state House districts — the district is what crosses the county line. The seat has gone Republican by about 35 points in each of the last two general elections, so on recent history the August 18 Republican primary is the decisive contest. State representatives vote on property taxes, insurance regulation, school funding, lagoon appropriations, and state preemption of local land-use control.',
      whoVotes: 'Only registered Republicans may vote the contested August 18 primary: incumbent Robbie Brackett vs. Paul Sohi. There is NO Democratic primary — it was cancelled and Jordyn Balderas advances unopposed. Every voter chooses between the Republican nominee and Balderas on November 3.',
      primaryResult: {
        status: 'advanced',
        summary: 'Robert "Robbie" Brackett won the Republican primary over Paul Sohi, 85.7% to 14.3% (20,443 to 3,398 votes district-wide; unofficial results, pending certification). He advances to face unopposed Democrat Jordyn Balderas on the Nov 3 general election ballot.',
        source: {
          title: 'Ballotpedia — Florida House of Representatives District 34 (unofficial, pending certification)',
          url: 'https://ballotpedia.org/Florida_House_of_Representatives_District_34',
          date: '2026-08-25'
        }
      },
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
          primary: {
            result: 'won',
            votes: 20443,
            pct: 85.7,
            source: {
              title: 'Ballotpedia — Florida House of Representatives District 34 (unofficial, pending certification)',
              url: 'https://ballotpedia.org/Florida_House_of_Representatives_District_34',
              date: '2026-08-25'
            }
          },
          positions: {
            amendment: {
              stance: 'support',
              summary: 'Voted YES on the property tax amendment that voters actually decide in November. Did not cast a vote on the earlier, more sweeping February version.',
              source: {
                title: 'Florida House roll call, CS/HJR 1-F',
                url: 'https://www.flsenate.gov/Session/Bill/2026F/1F/Vote/HouseVote_h00001Fc1900.PDF',
                date: '2026-06-02'
              }
            },
            lagoon: {
              stance: 'infrastructure-investment',
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
          primary: {
            result: 'lost',
            votes: 3398,
            pct: 14.3,
            source: {
              title: 'Ballotpedia — Florida House of Representatives District 34 (unofficial, pending certification)',
              url: 'https://ballotpedia.org/Florida_House_of_Representatives_District_34',
              date: '2026-08-25'
            }
          },
          positions: {
            growth: {
              stance: 'restrict-slow-growth',
              summary: 'The most home-rule-favorable stated position among the Republicans: wants the Live Local Act amended to focus on homeownership rather than rental loopholes, and to restore local community oversight.',
              quote: 'Opposes overdevelopment without infrastructure planning.',
              source: {
                title: 'Campaign website',
                url: 'https://paulsohi.com/',
                date: '2026-08-05'
              }
            },
            amendment: {
              stance: 'no-position',
              summary: 'Supports "property tax relief, insurance reform, and greater accountability in government spending," but states no position on the specific November amendment.',
              source: {
                title: 'Campaign website',
                url: 'https://paulsohi.com/',
                date: '2026-08-05'
              }
            },
            lagoon: {
              stance: 'general-stewardship',
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
          primary: {
            result: 'advanced',
            source: {
              title: 'Ballotpedia — Florida House of Representatives District 34 (unofficial, pending certification)',
              url: 'https://ballotpedia.org/Florida_House_of_Representatives_District_34',
              date: '2026-08-25'
            }
          },
          positions: {
            growth: {
              stance: 'restrict-slow-growth',
              summary: 'Names home rule his top priority — opposing state preemption bills that strip local authority over growth management, environmental protection, and tenant rights.',
              source: {
                title: 'Campaign website',
                url: 'https://jordynforfl.com/',
                date: '2026-08-05'
              }
            },
            lagoon: {
              stance: 'infrastructure-investment',
              summary: 'The most specific lagoon plan in this race: mangrove planting and living shorelines, protecting wetlands as flood barriers, and funding septic-to-sewer conversions through the state budget rather than homeowner assessments.',
              source: {
                title: 'Campaign website',
                url: 'https://jordynforfl.com/',
                date: '2026-08-05'
              }
            },
            housing: {
              stance: 'expand-affordable-mandate',
              summary: 'Prioritize restoring vacant properties over luxury complexes, expand workforce and affordable housing, and protect tenant organizing rights.',
              source: {
                title: 'Campaign website',
                url: 'https://jordynforfl.com/',
                date: '2026-08-05'
              }
            },
            schools: {
              stance: 'public-school-investment',
              summary: 'Repeal the charter school co-location law and "keep public dollars in public schools"; move teaching toward a six-figure profession; fund counselors and mental health staff.',
              source: {
                title: 'Campaign website',
                url: 'https://jordynforfl.com/',
                date: '2026-08-05'
              }
            },
            amendment: {
              stance: 'no-position',
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
      ballot: 'general',
      term: '2 years',
      stakes: 'IMPORTANT: Indian River County CHANGED congressional districts. Under the map signed in May 2026 the county moved from District 8 to District 9, which now runs from the Orlando area south through Indian River, Okeechobee, Highlands and Glades counties — roughly 769,000 residents. The partisan character flipped with it: under the old lines this was territory where over 51% backed Kamala Harris in 2024; under the new lines it is territory that voted over 58% for Donald Trump. The district is also no longer majority-Hispanic, its Hispanic share falling from 54% to 41%. On those numbers the August 18 Republican primary is now the most consequential contest here.',
      whoVotes: 'Registered Republicans vote a seven-way primary on August 18; incumbent Democrat Darren Soto has no filed primary opponent. CHECK YOUR SAMPLE BALLOT: the elections office homepage announces District 9 while its own maps page still referenced the old District 8. If the map and your ballot disagree, the ballot governs. Note also that the new map is under active legal challenge on Fair Districts grounds — a judge declined to block it in May 2026 and the Florida Supreme Court declined to enjoin it in June without ruling on the merits. The litigation does not change that Indian River County votes in District 9 this year; it may change future maps.',
      primaryResult: {
        status: 'advanced',
        summary: 'In a crowded 7-way Republican primary, Dan Green won a narrow plurality with 25.4% (14,748 votes), edging out Ben Butler by just 587 votes (24.4%, 14,161). Thomas Chalifoux Jr. (20.3%), Jorge Martinez (19.5%), Justin Story (4.3%), Marcus Carter (3.9%), and Steve Rance (2.3%) trailed further behind. Results are unofficial, pending certification. Green\'s strongest showing was his home county, Indian River (35.7%) — the single biggest reason he won district-wide. He advances to face unopposed Democratic incumbent Darren Soto on the Nov 3 general election ballot.',
        source: {
          title: 'Ballotpedia — Florida\'s 9th Congressional District election, 2026 (unofficial, pending certification)',
          url: 'https://ballotpedia.org/Florida%27s_9th_Congressional_District_election,_2026',
          date: '2026-08-25'
        }
      },
      candidates: [
        {
          id: 'soto',
          name: 'Darren Soto',
          party: 'D',
          incumbent: true,
          age: 48,
          residence: 'Kissimmee',
          occupation: 'U.S. Representative; attorney',
          bio: 'In Congress since 2017 and now a five-term incumbent, the first Floridian of Puerto Rican descent elected to Congress. Previously served in the Florida House (2007-2012) and Florida Senate (2012-2016). Rutgers undergraduate, George Washington University law degree; ran his own Central Florida practice in family law, civil litigation and real estate. Sits on the House Energy and Commerce Committee, where he points to work expanding access to affordable health care. He now runs in a district redrawn to lean Republican, and has confirmed he is running for re-election despite the less favorable map.',
          primary: {
            result: 'advanced',
            source: {
              title: 'Ballotpedia — Florida\'s 9th Congressional District election, 2026 (unofficial, pending certification)',
              url: 'https://ballotpedia.org/Florida%27s_9th_Congressional_District_election,_2026',
              date: '2026-08-25'
            }
          },
          positions: {
            lagoon: {
              stance: 'general-stewardship', summary: 'Sits on the House Natural Resources Committee and points to work preserving Florida\'s natural resources and securing federal disaster relief after storms.',
              source: { title: 'Congressional committee assignments and campaign material', url: 'https://soto.house.gov/', date: '2026-08-17' } },
            housing: {
              summary: 'Introduced the "Protect Our Homes Act" in 2026, a federal housing bill — this guide has not yet obtained the bill\'s specific provisions. Correction, Aug 2026: this had been tagged with an "expand affordable housing" stance for the match quiz based on the bill\'s name alone — since this guide has not actually verified what the bill does, no quiz stance is assigned; it will show as "no data" rather than a guessed match.',
              source: { title: 'Congress.gov / campaign material', url: 'https://www.congress.gov/member/darren-soto/S001200', date: '2026-08-17' } }
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
          primary: {
            result: 'won',
            votes: 14748,
            pct: 25.4,
            source: {
              title: 'Ballotpedia — Florida\'s 9th Congressional District election, 2026 (unofficial, pending certification)',
              url: 'https://ballotpedia.org/Florida%27s_9th_Congressional_District_election,_2026',
              date: '2026-08-25'
            }
          },
          positions: {
            amendment: {
              stance: 'support',
              summary: 'Supports the Florida property tax amendment, arguing tax cuts promote responsible budgets and reduce waste and fraud.',
              source: {
                title: 'ClickOrlando voter guide questionnaire',
                url: 'https://www.clickorlando.com/voters-guide/2026/07/31/2026-voters-guide-us-house-district-9-republican-primary/',
                date: '2026-07-31'
              }
            },
            lagoon: {
              stance: 'general-stewardship',
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
          occupation: 'Farmer; member, South Florida Water Management District Governing Board',
          bio: 'A 22-year dairy farmer whose family has milked cows in Florida for 85 years; now also a cattle rancher. Attended the University of Florida, then returned to manage the family farm. Has served seven years on the South Florida Water Management District Governing Board, a taxing authority. Qualified for the August 18 Republican primary in District 9.',
          primary: {
            result: 'lost',
            votes: 14161,
            pct: 24.4,
            source: {
              title: 'Ballotpedia — Florida\'s 9th Congressional District election, 2026 (unofficial, pending certification)',
              url: 'https://ballotpedia.org/Florida%27s_9th_Congressional_District_election,_2026',
              date: '2026-08-25'
            }
          },
          positions: {
            growth: {
              stance: 'streamline-development', summary: 'Frames his platform around balancing conservation, agriculture, and economic growth, drawing on his water-district board experience. At a July 29 candidate forum he named regulatory permitting delays — citing Army Corps of Engineers 404 permits with no enforced time limit — as a direct driver of higher costs.',
              quote: 'As a farmer, conservation advocate, and leader on the South Florida Water Management District Governing Board, Ben understands the balance between protecting our natural resources, supporting agriculture, and keeping our economy strong.',
              source: { title: 'Campaign website', url: 'https://www.butlerforflorida.com/', date: '2026-08-17' } },
            housing: {
              stance: 'targeted-financing-tools', summary: 'Proposed extending the VA home-loan guarantee model — which backs veteran home loans at no cost to government — to all U.S. citizens as a way to expand home ownership access.',
              quote: 'This is a program that has been wildly successful for veterans that has not cost the government a penny. It\'s a free program essentially... we can offer that to all US citizens.',
              detail: 'This guide\'s own transcription of a July 29, 2026 candidate forum hosted by the Republican Club of Indian River at the Heritage Center, Vero Beach, livestreamed via IRC Media.',
              source: { title: 'Republican Club of Indian River — U.S. House District 9 Candidate Forum (video)', url: 'https://www.youtube.com/live/6p96QhR5Uck', date: '2026-07-29' } }
          },
          record: [
            {
              type: 'fact',
              claim: 'At a July 29 candidate forum, said his campaign has been endorsed by his entire county commission delegation across two counties, the Highlands County school board, four sheriffs from the district (including Sheriff Eric Flowers), and U.S. Reps. Greg Steube and Kat Cammack.',
              detail: 'This guide\'s own transcription of the forum; endorsements as stated by the candidate himself, not independently verified against each endorser.',
              date: '2026-07-29',
              source: { title: 'Republican Club of Indian River — U.S. House District 9 Candidate Forum (video)', url: 'https://www.youtube.com/live/6p96QhR5Uck', date: '2026-07-29' }
            },
            {
              type: 'fact',
              claim: 'This guide located limited independent coverage of this candidate beyond campaign materials, filings, and the forum transcript above.',
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
          bio: 'Describes his campaign as volunteer-powered and self-consciously anti-corporate-money. Says he and volunteers have knocked on more than 30,000 doors over an 18-month campaign, which began in three counties before redistricting expanded the district. Qualified for the August 18 Republican primary in District 9.',
          primary: {
            result: 'lost',
            votes: 2248,
            pct: 3.9,
            source: {
              title: 'Ballotpedia — Florida\'s 9th Congressional District election, 2026 (unofficial, pending certification)',
              url: 'https://ballotpedia.org/Florida%27s_9th_Congressional_District_election,_2026',
              date: '2026-08-25'
            }
          },
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'At a July 29 candidate forum, said in his own words that his campaign takes no corporate or special-interest money and runs entirely on volunteers, framing this as central to his candidacy rather than incidental.',
              quote: 'I don\'t take money from corporations. I don\'t take money from special interests. And my entire campaign is powered by volunteers.',
              detail: 'This guide\'s own transcription of a July 29, 2026 candidate forum hosted by the Republican Club of Indian River at the Heritage Center, Vero Beach; livestreamed via IRC Media. This is consistent with his FEC filings, which show no PAC contributions.',
              date: '2026-07-29',
              source: { title: 'Republican Club of Indian River — U.S. House District 9 Candidate Forum (video)', url: 'https://www.youtube.com/live/6p96QhR5Uck', date: '2026-07-29' }
            },
            {
              type: 'fact',
              claim: 'This guide located limited independent coverage of this candidate beyond campaign materials, filings, and the forum transcript above.',
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
          occupation: 'Retired U.S. Army Colonel; businessman',
          bio: 'A retired Army Colonel and businessman who previously ran for this seat in 2024. Describes himself as a man of faith, husband and father. Qualified for the August 18 Republican primary in District 9.',
          primary: {
            result: 'lost',
            votes: 11802,
            pct: 20.3,
            source: {
              title: 'Ballotpedia — Florida\'s 9th Congressional District election, 2026 (unofficial, pending certification)',
              url: 'https://ballotpedia.org/Florida%27s_9th_Congressional_District_election,_2026',
              date: '2026-08-25'
            }
          },
          positions: {
            schools: {
              stance: 'school-choice-expansion', summary: 'Supports school choice — public, charter, private, or homeschool, whichever fits the family — plus veterans\' benefits, growth-driven infrastructure, and food/health transparency.',
              quote: 'Empowering Florida families with the freedom to choose the school — public, charter, private, or homeschool — that fits their child best.',
              source: { title: 'Campaign website', url: 'https://thomas4fl.com/issues', date: '2026-08-17' } },
            housing: {
              stance: 'reduce-regulatory-cost', summary: 'A homebuilder by background who says local government regulation adds 25-30% to the cost of a home, and points to a shortage of skilled trades labor (carpenters, welders, masons, electricians) as a second driver of housing costs.',
              quote: 'The cost of regulation, government regulation locally is running between 25 and 30% of the cost of a home... we have a significant shortage of untrained, skilled labor.',
              detail: 'This guide\'s own transcription of a July 29, 2026 candidate forum hosted by the Republican Club of Indian River at the Heritage Center, Vero Beach, livestreamed via IRC Media.',
              source: { title: 'Republican Club of Indian River — U.S. House District 9 Candidate Forum (video)', url: 'https://www.youtube.com/live/6p96QhR5Uck', date: '2026-07-29' } }
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
          occupation: 'Certified public accountant; ran an Orlando accounting firm for 32 years',
          bio: 'A Cuban immigrant who arrived in the U.S. in 1973 and has lived in the Orlando area for nearly 50 years. Describes himself as the only immigrant and only Hispanic candidate in the race, and frames his general-election pitch around reaching the district\'s roughly 35% Hispanic vote share. Qualified for the August 18 Republican primary in District 9.',
          primary: {
            result: 'lost',
            votes: 11324,
            pct: 19.5,
            source: {
              title: 'Ballotpedia — Florida\'s 9th Congressional District election, 2026 (unofficial, pending certification)',
              url: 'https://ballotpedia.org/Florida%27s_9th_Congressional_District_election,_2026',
              date: '2026-08-25'
            }
          },
          positions: {
            housing: {
              stance: 'targeted-financing-tools', summary: 'Says he has developed legislative proposals to reduce closing and ownership costs for first-time homebuyers, and separately supports expanding U.S. oil and gas production to lower energy costs.',
              quote: 'I\'ve developed legislative ideas to help first-time home buyers lower the cost of purchasing a home by reducing unnecessary expenses for home ownership, making home ownership more attainable.',
              detail: 'This guide\'s own transcription of a July 29, 2026 candidate forum hosted by the Republican Club of Indian River at the Heritage Center, Vero Beach; livestreamed via IRC Media. This guide has not yet obtained the specific text of his proposed legislation.',
              source: { title: 'Republican Club of Indian River — U.S. House District 9 Candidate Forum (video)', url: 'https://www.youtube.com/live/6p96QhR5Uck', date: '2026-07-29' } }
          },
          record: [
            {
              type: 'fact',
              claim: 'This guide located limited independent coverage of this candidate beyond campaign materials, filings, and the forum transcript above.',
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
          primary: {
            result: 'lost',
            votes: 1335,
            pct: 2.3,
            source: {
              title: 'Ballotpedia — Florida\'s 9th Congressional District election, 2026 (unofficial, pending certification)',
              url: 'https://ballotpedia.org/Florida%27s_9th_Congressional_District_election,_2026',
              date: '2026-08-25'
            }
          },
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
          occupation: 'Commercial airline pilot; former Marine Corps F-18 fighter pilot',
          bio: 'A sixth-generation Floridian, born and raised in St. Cloud, where he still lives. Commissioned into the Marine Corps in 2001 as an F-18 fighter pilot, flying combat missions over Iraq and Afghanistan across multiple deployments as both active duty and reserve. Now a commercial airline pilot. His wife is a Venezuelan immigrant who left the country six years ago. Qualified for the August 18 Republican primary in District 9.',
          primary: {
            result: 'lost',
            votes: 2484,
            pct: 4.3,
            source: {
              title: 'Ballotpedia — Florida\'s 9th Congressional District election, 2026 (unofficial, pending certification)',
              url: 'https://ballotpedia.org/Florida%27s_9th_Congressional_District_election,_2026',
              date: '2026-08-25'
            }
          },
          positions: {
            schools: {
              stance: 'local-state-control', summary: 'Supports eliminating the U.S. Department of Education, arguing education policy should be set at the state, local, and school-board level rather than by the federal government.',
              quote: 'I do not believe the federal government should have a hand in our education. This is a state function, ladies and gentlemen. It\'s a local function and it\'s a city function... every state should set its own policy, and we take best practices.',
              detail: 'This guide\'s own transcription of a July 29, 2026 candidate forum hosted by the Republican Club of Indian River at the Heritage Center, Vero Beach, livestreamed via IRC Media.',
              source: { title: 'Republican Club of Indian River — U.S. House District 9 Candidate Forum (video)', url: 'https://www.youtube.com/live/6p96QhR5Uck', date: '2026-07-29' } }
          },
          record: [
            {
              type: 'fact',
              claim: 'This guide located limited independent coverage of this candidate beyond campaign materials, filings, and the forum transcript above.',
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
      id: 'fl-ag-commissioner',
      office: 'Florida Commissioner of Agriculture',
      district: 'Statewide',
      type: 'partisan',
      ballot: 'general',
      term: '4 years',
      stakes: 'A statewide cabinet office overseeing the Department of Agriculture and Consumer Services — 12 divisions regulating farm products, animal and forestry industries, state forests and wildfire response, concealed-weapons licensing, the hemp industry, and consumer-fraud enforcement, over a roughly $13 billion agricultural sector. Directly relevant to Indian River County given its citrus and agricultural industry, and connected to Amendment 2 on this same ballot (the agricultural equipment tax exemption). No public polling exists for either primary in this race.',
      whoVotes: 'Registered Republicans and registered Democrats each vote a contested primary today. All voters choose in the November 3 general election, where a qualified write-in candidate, Kyle Gibson, also appears regardless of the primary outcome.',
      primaryResult: {
        status: 'advanced',
        summary: 'Wilton Simpson won the Republican primary over Matt Taylor, 68.9% to 31.1% (1,110,689 to 501,100 votes). Joey Mendoza Atkins won the Democratic primary over Don Prichard, 60.3% to 39.7% (716,467 to 472,100 votes). All three advance to the Nov 3 general election ballot: Simpson (R) vs. Atkins (D) vs. write-in Kyle "KC" Gibson.',
        source: {
          title: 'Florida Politics — Simpson runs away with GOP nomination; Atkins advances for Democrats',
          url: 'https://floridapolitics.com/archives/814743-wilton-simpson-runs-away-with-gop-nomination-for-agriculture-commissioner-democrat-joey-mendoza-atkins-advances-to-general-election/',
          date: '2026-08-18'
        }
      },
      candidates: [
        {
          id: 'simpson',
          name: 'Wilton Simpson',
          party: 'R',
          incumbent: true,
          occupation: 'Florida Commissioner of Agriculture; former Florida Senate President',
          bio: 'Began working on his father\'s egg farm in Trilby as a teenager and built it into a large-scale operation now housing roughly 1 million chickens, alongside Simpson Environmental Services and Simpson Farms; net worth $31.5 million per his state financial disclosure. Served in the Florida Senate 2012-2022, as Majority Leader 2016-2018 and Senate President 2020-2022, backing the Florida Wildlife Corridor Act and school-choice expansion. Won the OPEN Commissioner of Agriculture seat outright in the November 2022 general election with 59.3% over Democrat Naomi Blemur — not an appointment — taking office January 2023 as Florida\'s 13th Commissioner of Agriculture. Now seeks a second term with endorsements from President Trump, Gov. DeSantis, the Florida Chamber of Commerce, and 61 of Florida\'s 67 sheriffs.',
          primary: {
            result: 'won',
            votes: 1110689,
            pct: 68.9,
            source: {
              title: 'Florida Politics — Simpson runs away with GOP nomination; Atkins advances for Democrats',
              url: 'https://floridapolitics.com/archives/814743-wilton-simpson-runs-away-with-gop-nomination-for-agriculture-commissioner-democrat-joey-mendoza-atkins-advances-to-general-election/',
              date: '2026-08-18'
            }
          },
          positions: {
            growth: {
              stance: 'restrict-slow-growth',
              summary: 'Supports preserving legacy farming operations against residential development encroachment and protecting agricultural communities from "frivolous lawsuits." Cites Cabinet-level approval of nearly $58 million in conservation easements protecting about 18,279 acres of working farmland through the Rural and Family Lands Protection Program — which he has expanded roughly 243% during his tenure — rather than Florida Forever, which prioritizes public-access conservation.',
              source: {
                title: 'ClickOrlando voter guide (from his campaign site; did not respond to survey)',
                url: 'https://www.clickorlando.com/voters-guide/2026/07/31/2026-voters-guide-florida-commissioner-of-agriculture-race-republican-primary/',
                date: '2026-07-31'
              }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'Fought a public, monthslong dispute with Gov. DeSantis in early 2025 over which of them would control state immigration enforcement — and lost.',
              detail: 'In January 2025 the Legislature passed SB 2-B over DeSantis\'s objection, which would have made Simpson the state\'s sole immigration liaison and created an Office of State Immigration Enforcement inside his agency, with a $500 million local law-enforcement grant program to run through it. DeSantis publicly opposed the arrangement — "Agriculture has not exactly been known for immigration enforcement, so it\'s almost like the fox guarding the hen house" — and pushed for tougher provisions instead. Simpson pushed back, arguing farmers were being unfairly blamed and noting his own estimate that only about 4% of Florida\'s undocumented workforce is in agriculture. DeSantis ultimately signed a separate compromise immigration package on February 13, 2025 that left Simpson out of the chief-immigration-officer role, and formally vetoed the original SB 2-B on February 20, 2025. Net outcome: DeSantis prevailed.',
              date: '2025-02-20',
              source: {
                title: 'WLRN — timeline compiled from Florida Senate bill history, Fox 13 Tampa Bay, and WFSU',
                url: 'https://www.wlrn.org/government-politics/2026-08-10/election-2026-floridas-primary-races-for-commissioner-of-agriculture'
              }
            },
            {
              type: 'fact',
              claim: 'Later in 2025, downplayed the role of undocumented labor in Florida agriculture and called for the federal H-2A visa program to be simplified rather than restricted.',
              quote: 'In Florida, the vast majority of our agriculture labor is H2A legal labor.',
              detail: 'Coverage noted this framing runs counter to federal research suggesting roughly 25% of U.S. crop workers nationally lack legal work authorization, and that most of Florida\'s unauthorized immigrants work in construction and services rather than agriculture.',
              date: '2025-06-23',
              source: {
                title: 'WUSF',
                url: 'https://www.wusf.org/politics-issues/2025-06-23/state-agriculture-commissioner-doubles-down-support-immigration-crackdowns'
              }
            },
            {
              type: 'fact',
              claim: 'Championed 2024 legislation making Florida the first state to ban lab-grown meat, and backed a 2025 bill to ban fluoride in Florida drinking water.',
              date: '2025-01-01',
              source: {
                title: 'Wikipedia — Wilton Simpson',
                url: 'https://en.wikipedia.org/wiki/Wilton_Simpson',
                date: '2026-08-18'
              }
            },
            {
              type: 'fact',
              claim: 'As Senate President, helped pass a law shielding sugar growers from lawsuits over air pollution from field-burning. As Commissioner, championed a farm bill that would originally have made it easier for sugar growers to sue environmentalists, scientists, and journalists publishing unflattering pollution research — that specific language was removed before the bill passed.',
              detail: 'The final, weakened provision did pass into law; the strongest version did not. Both halves matter for an accurate picture.',
              date: '2026-08-03',
              source: {
                title: 'WUWF/WLRN/WGCU — Who is pouring millions into the ag commissioner race?',
                url: 'https://www.wlrn.org/government-politics/2026-08-03/who-is-pouring-millions-into-the-sleepy-race-for-floridas-ag-commissioner'
              }
            },
            {
              type: 'fact',
              claim: 'Entered the 2026 race with $33 million already stashed across four political committees, and his campaign account alone shows $1,172,288.63 raised.',
              detail: 'Top PAC donor categories: agriculture/sugar-industry donors over $1 million (Florida Crystals Corp. $250,000, U.S. Sugar $102,500, Siboney Ranch and a linked Tomeu family trust $200,000 combined); additional sugar-linked money via industry PACs totaling roughly $750,000; the Seminole Tribe of Florida $1 million; NextEra Energy/FPL $250,000; Sig Sauer $50,000. WLRN reported one source calling the Siboney Ranch donation\'s timing relative to a state conservation-easement payment to the same ranch as having "the appearance of pay-to-play" — a characterization from a source, not an adjudicated finding of wrongdoing.',
              date: '2026-08-18',
              source: {
                title: 'Florida Division of Elections campaign finance database, queried directly',
                url: 'https://dos.elections.myflorida.com/campaign-finance/'
              }
            },
            {
              type: 'fact',
              claim: 'Became embroiled in the immigration dispute described above with Gov. DeSantis in 2025.',
              detail: 'See the detailed timeline above; included here as a placeholder cross-reference in case this item is read out of order.',
              date: '2025-02-20',
              source: {
                title: 'WLRN',
                url: 'https://www.wlrn.org/government-politics/2026-08-10/election-2026-floridas-primary-races-for-commissioner-of-agriculture'
              }
            }
          ],
          finance: {
            raised: 1172288.63,
            spent: null,
            asOf: '2026-08-18',
            note: 'This is his CANDIDATE ACCOUNT ONLY, pulled directly from the Florida Division of Elections database. Separately, WLRN reports $33 million raised across four affiliated political committees since April 2026 (Friends of Wilton Simpson, Home Grown PAC, Future Florida, Florida Green PAC), with about $26.8 million remaining as of July 31, 2026 — combined, all three of his opponents in this race had roughly $40,000 on hand at the same point.',
            source: {
              title: 'Florida Division of Elections campaign finance database',
              url: 'https://dos.elections.myflorida.com/campaign-finance/',
              date: '2026-08-18'
            }
          },
          endorsements: [
            {
              name: 'President Donald Trump — called him a "true America First Patriot"',
              source: {
                title: 'WLRN',
                url: 'https://www.wlrn.org/government-politics/2026-08-10/election-2026-floridas-primary-races-for-commissioner-of-agriculture'
              }
            },
            {
              name: 'Gov. Ron DeSantis — despite the 2025 immigration dispute',
              source: {
                title: 'WLRN',
                url: 'https://www.wlrn.org/government-politics/2026-08-10/election-2026-floridas-primary-races-for-commissioner-of-agriculture'
              }
            }
          ],
          links: {
            'Campaign website': 'https://wiltonsimpson.com'
          }
        },
        {
          id: 'taylor',
          name: 'Matt Taylor',
          party: 'R',
          occupation: '"Matt the Welder" — welder and tractor mechanic',
          bio: 'A Plant City native who built a following of over 474,000 Instagram followers through his campaign\'s social media presence. Runs as a tradesman challenger to the sitting commissioner, calling FDACS under Simpson a "giant bureaucracy."',
          primary: {
            result: 'lost',
            votes: 501100,
            pct: 31.1,
            source: {
              title: 'Florida Politics — Simpson runs away with GOP nomination; Atkins advances for Democrats',
              url: 'https://floridapolitics.com/archives/814743-wilton-simpson-runs-away-with-gop-nomination-for-agriculture-commissioner-democrat-joey-mendoza-atkins-advances-to-general-election/',
              date: '2026-08-18'
            }
          },
          positions: {
            growth: {
              stance: 'restrict-slow-growth',
              summary: 'Opposes converting farmland to subdivisions and solar projects; proposes expanded programs to keep farmers farming rather than selling to developers, tax relief for family farms and timber owners, a "Florida Grown First" state-purchasing program, faster disaster relief and crop insurance for small farms, farm-to-school programs, and cracking down on price gouging. Prefers Florida Forever-style public-access conservation over Simpson\'s working-farm easements, citing the state\'s $68 million June 2026 purchase of the 4G Ranch easement as land the public still can\'t use.',
              source: {
                title: 'Ballotpedia / campaign site (did not respond to survey)',
                url: 'https://ballotpedia.org/Matt_The_Welder',
                date: '2026-08-18'
              }
            },
            lagoon: {
              stance: 'regulatory-accountability',
              summary: 'Wants tighter oversight of phosphate-mining runoff and pesticide spraying, and says he would use the Commissioner\'s existing statewide pesticide-regulatory authority to protect rivers, springs, and wetlands.',
              source: {
                title: 'Mindful SWFL interview / campaign bio',
                url: 'https://mindfulswfl.com/chat-with-matt-the-welder/',
                date: '2026-08-18'
              }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'Criticizes Simpson\'s 2018 vote (as a state senator) for the Marjory Stoneman Douglas Public High School Safety Act, which raised the minimum purchase age for long guns from 18 to 21, tying it to $50,000 in Sig Sauer contributions to Simpson\'s campaign committees.',
              detail: 'The vote and the contribution are independently verifiable facts. The implication that one caused the other, or that it constitutes hypocrisy, is Taylor\'s campaign argument, not an independently adjudicated finding — presented here as a documented campaign critique, not as established fact.',
              date: '2026-08-03',
              source: {
                title: 'WLRN',
                url: 'https://www.wlrn.org/government-politics/2026-08-03/who-is-pouring-millions-into-the-sleepy-race-for-floridas-ag-commissioner'
              }
            }
          ],
          finance: {
            raised: 269000,
            spent: null,
            asOf: '2026-08-07',
            note: 'This figure comes from news reporting (WLRN/Florida Phoenix), NOT a direct pull from the state database — this guide\'s attempt to query the Florida Division of Elections database directly for "Taylor" returned a server-side timeout on three separate attempts, while identical queries for every other candidate in this race succeeded. Reported cash on hand at the same time was under $29,000. Treat this figure as of early August 2026, not necessarily current to the primary date.',
            source: {
              title: 'Florida Phoenix / WLRN',
              url: 'https://floridaphoenix.com/2026/08/07/floridas-primary-races-for-commissioner-of-agriculture/',
              date: '2026-08-07'
            }
          },
          endorsements: [],
          links: {
            'Campaign website': 'https://treadback.com'
          }
        },
        {
          id: 'atkins',
          name: 'Joey Mendoza Atkins',
          party: 'D',
          occupation: 'Trial attorney (Barnes Trial Group); former sports agent',
          bio: 'A Miami trial attorney and Florida Bar member who previously worked at a legal-aid foundation representing migrant farmworkers, which he cites as formative to his views on agriculture policy. Frames his campaign as "David vs. Goliath" against the far-better-funded incumbent.',
          primary: {
            result: 'won',
            votes: 716467,
            pct: 60.3,
            source: {
              title: 'Florida Politics — Simpson runs away with GOP nomination; Atkins advances for Democrats',
              url: 'https://floridapolitics.com/archives/814743-wilton-simpson-runs-away-with-gop-nomination-for-agriculture-commissioner-democrat-joey-mendoza-atkins-advances-to-general-election/',
              date: '2026-08-18'
            }
          },
          positions: {
            growth: {
              stance: 'balanced-managed',
              summary: 'Supports conservation easements as a tool but argues their success should be measured by public benefit rather than acres protected — an implicit critique of Simpson\'s working-farm easement approach that echoes Taylor\'s public-access argument from the opposite party.',
              quote: 'It should be measured by public benefit.',
              source: {
                title: 'WLRN',
                url: 'https://www.wlrn.org/government-politics/2026-08-10/election-2026-floridas-primary-races-for-commissioner-of-agriculture'
              }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'Opposes Simpson\'s 2024 lab-grown meat ban, preferring "creative and dynamic" approaches that protect farmers economically without an outright ban, to avoid putting Florida at a competitive disadvantage.',
              date: '2026-08-10',
              source: {
                title: 'WLRN',
                url: 'https://www.wlrn.org/government-politics/2026-08-10/election-2026-floridas-primary-races-for-commissioner-of-agriculture'
              }
            },
            {
              type: 'fact',
              claim: 'This guide found no endorsements, no record of prior elected or appointed office, and no controversies for this candidate.',
              detail: 'A genuinely thin public footprint outside a small cluster of August 2026 news profiles that appear to draw on similar candidate-interview material — stated plainly as a first-time statewide candidate in a low-profile down-ballot race, not as a finding against him.',
              date: '2026-08-18',
              source: {
                title: 'This guide\'s review of public sources',
                url: 'https://www.wlrn.org/government-politics/2026-08-10/election-2026-floridas-primary-races-for-commissioner-of-agriculture'
              }
            }
          ],
          finance: {
            raised: 10165.0,
            spent: null,
            asOf: '2026-08-18',
            note: 'Largely self-loaned — WLRN reported $8,480 in self-loans against $1,290 from outside contributors as of early August.',
            source: {
              title: 'Florida Division of Elections campaign finance database, queried directly',
              url: 'https://dos.elections.myflorida.com/campaign-finance/',
              date: '2026-08-18'
            }
          },
          endorsements: [],
          links: {
            'Campaign website': 'https://www.joeyforflorida.com/'
          }
        },
        {
          id: 'prichard',
          name: 'Donald A. "Don" Prichard',
          party: 'D',
          age: 45,
          occupation: 'Captain, Pembroke Park Police Department',
          bio: 'A native Floridian who joined the Florida Army National Guard at 17 in 1998, serving as a sergeant through 2006, then joined the Broward Sheriff\'s Office at 19 and served there until 2025; now a captain with the Pembroke Park Police Department. Served as Vice President then President of the Broward Deputy Sheriffs Association, 2022-2025, and chaired the Broward County Farm Bureau\'s Young Farmers and Ranchers, 2018-2021. Filed to run only weeks before the qualifying deadline after concluding no other Democrat had entered the race, and campaigns nights and weekends around his police schedule.',
          primary: {
            result: 'lost',
            votes: 472100,
            pct: 39.7,
            source: {
              title: 'Florida Politics — Simpson runs away with GOP nomination; Atkins advances for Democrats',
              url: 'https://floridapolitics.com/archives/814743-wilton-simpson-runs-away-with-gop-nomination-for-agriculture-commissioner-democrat-joey-mendoza-atkins-advances-to-general-election/',
              date: '2026-08-18'
            }
          },
          positions: {
            lagoon: {
              summary: 'His top stated issue: opposes Florida\'s 2026 data-center legislation (SB 484) for not addressing the long-term water impact of AI data centers, citing existing Central Florida droughts, and calls for self-sufficient systems that protect aquifers. Correction, Aug 2026: no quiz stance is assigned here — this is a genuine mix of opposing specific legislation and a vague infrastructure aspiration ("self-sufficient systems") that doesn\'t cleanly fit this guide\'s mechanism categories, so it shows as "no data" rather than forced into either bucket.',
              source: {
                title: 'WLRN',
                url: 'https://www.wlrn.org/government-politics/2026-08-10/election-2026-floridas-primary-races-for-commissioner-of-agriculture'
              }
            },
            taxes: {
              summary: 'Says he won\'t be a "rubber stamp for the governor" and would prioritize Floridians over special interests and corporate groups; says he\'d aggressively use FDACS\'s existing consumer-protection authority against phone scams and consumer fraud. Correction, Aug 2026: no quiz stance is assigned — this statement is about consumer-fraud enforcement, not government taxing/spending, so it doesn\'t actually answer the quiz\'s taxes question despite being filed under this issue.',
              source: {
                title: 'WLRN',
                url: 'https://www.wlrn.org/government-politics/2026-08-10/election-2026-floridas-primary-races-for-commissioner-of-agriculture'
              }
            }
          },
          record: [
            {
              type: 'fact',
              claim: 'Listed on the Florida Democratic Party\'s official candidate tracker (BlueVoterGuide), though the specific endorsing organizations were not itemized on the page this guide retrieved.',
              date: '2026-08-18',
              source: {
                title: 'BlueVoterGuide',
                url: 'https://bluevoterguide.org/FL/candidate_Donald_Prichard/766731'
              }
            },
            {
              type: 'fact',
              claim: 'This guide found no controversies or complaints for this candidate.',
              date: '2026-08-18',
              source: {
                title: 'This guide\'s review of public sources',
                url: 'https://www.wlrn.org/government-politics/2026-08-10/election-2026-floridas-primary-races-for-commissioner-of-agriculture'
              }
            }
          ],
          finance: {
            raised: 29378.0,
            spent: null,
            asOf: '2026-08-18',
            note: 'WLRN reported $28,135 raised as of early August; this direct database pull shows modest additional fundraising since then.',
            source: {
              title: 'Florida Division of Elections campaign finance database, queried directly',
              url: 'https://dos.elections.myflorida.com/campaign-finance/',
              date: '2026-08-18'
            }
          },
          endorsements: [],
          links: {

          }
        },
        {
          id: 'gibson',
          name: 'Kyle "KC" Gibson',
          party: 'WRITE-IN',
          occupation: 'Not documented by this guide',
          bio: 'Qualified write-in candidate; appears on the November 3 general election ballot regardless of the primary outcome. Previously ran for Florida Governor in 2018 under the same name, suggesting a pattern of perennial candidacy rather than a first-time entry into politics — though that 2018 run is documented only via his own campaign Facebook page, not independent news coverage.',
          primary: {
            result: 'advanced',
            source: {
              title: 'Florida Politics — Simpson runs away with GOP nomination; Atkins advances for Democrats',
              url: 'https://floridapolitics.com/archives/814743-wilton-simpson-runs-away-with-gop-nomination-for-agriculture-commissioner-democrat-joey-mendoza-atkins-advances-to-general-election/',
              date: '2026-08-18'
            }
          },
          positions: {

          },
          record: [
            {
              type: 'fact',
              claim: 'This guide found no stated platform, no campaign website, and no news coverage of his current candidacy — only a Facebook presence and his official filing.',
              detail: 'Combined with minimal campaign finance (see below), this suggests a low-visibility candidacy. Documented honestly rather than padded, consistent with this guide\'s equal-effort standard.',
              date: '2026-08-18',
              source: {
                title: 'This guide\'s review of public sources',
                url: 'https://dos.elections.myflorida.com/campaign-finance/'
              }
            }
          ],
          finance: {
            raised: 2625.08,
            spent: null,
            asOf: '2026-08-18',
            note: 'An earlier, lower-confidence news aggregation cited roughly $900 — this guide uses the direct Division of Elections figure as authoritative instead.',
            source: {
              title: 'Florida Division of Elections campaign finance database, queried directly',
              url: 'https://dos.elections.myflorida.com/campaign-finance/',
              date: '2026-08-18'
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
      ballot: 'general',
      term: 'Remainder of term (2 years)',
      stakes: 'A special election for the final two years of the U.S. Senate term vacated by Marco Rubio. Ashley Moody was appointed to the seat by Gov. DeSantis and must now win it at the ballot box. This is by far the most expensive race on your ballot: two candidates have together raised over $25 million, while four of the seven have raised under $20,000 each.',
      whoVotes: 'Statewide. Registered Republicans and registered Democrats each vote their own contested primary on August 18. Every voter, including NPA, chooses in the November 3 general election. Note: no public polling of either primary has been published — the available polls test general-election matchups only.',
      primaryResult: {
        status: 'advanced',
        summary: 'Ashley Moody won the Republican primary with 79.6% over Chris Gleason (13.7%), Ernest Rivera (4.8%), and Neelam Perry (1.9%). Angie Nixon won the Democratic primary in an upset over Alexander Vindman, 56.1% to 43.9%, despite being outspent roughly 16-to-1. All three advance to the Nov 3 general election ballot: Moody (R) vs. Nixon (D) vs. Neil Gillespie (NPA).',
        source: {
          title: 'CBS News — Florida Senate race set between Ashley Moody and Angie Nixon after projected primary wins',
          url: 'https://www.cbsnews.com/news/florida-senate-primary-results-ashley-moody-angie-nixon/',
          date: '2026-08-18'
        }
      },
      candidates: [
        {
          id: 'moody',
          name: 'Ashley Moody',
          party: 'R',
          incumbent: true,
          residence: 'Tampa',
          occupation: 'U.S. Senator (appointed); former Florida Attorney General',
          bio: 'Appointed by Gov. Ron DeSantis to the U.S. Senate seat vacated by Marco Rubio. Previously served as Florida Attorney General, and before that as a state circuit judge. She must win this special election to serve the remainder of the term.',
          primary: {
            result: 'won',
            votes: 1320048,
            pct: 79.6,
            source: {
              title: 'CBS News — Florida Senate race set between Ashley Moody and Angie Nixon after projected primary wins',
              url: 'https://www.cbsnews.com/news/florida-senate-primary-results-ashley-moody-angie-nixon/',
              date: '2026-08-18'
            }
          },
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
          primary: {
            result: 'lost',
            votes: 227843,
            pct: 13.7,
            source: {
              title: 'CBS News — Florida Senate race set between Ashley Moody and Angie Nixon after projected primary wins',
              url: 'https://www.cbsnews.com/news/florida-senate-primary-results-ashley-moody-angie-nixon/',
              date: '2026-08-18'
            }
          },
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
          primary: {
            result: 'lost',
            votes: 31217,
            pct: 1.9,
            source: {
              title: 'CBS News — Florida Senate race set between Ashley Moody and Angie Nixon after projected primary wins',
              url: 'https://www.cbsnews.com/news/florida-senate-primary-results-ashley-moody-angie-nixon/',
              date: '2026-08-18'
            }
          },
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
          primary: {
            result: 'lost',
            votes: 79915,
            pct: 4.8,
            source: {
              title: 'CBS News — Florida Senate race set between Ashley Moody and Angie Nixon after projected primary wins',
              url: 'https://www.cbsnews.com/news/florida-senate-primary-results-ashley-moody-angie-nixon/',
              date: '2026-08-18'
            }
          },
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
          primary: {
            result: 'won',
            votes: 705192,
            pct: 56.1,
            source: {
              title: 'NBC News — Angie Nixon wins Florida Senate Democratic primary, defeating Alex Vindman',
              url: 'https://www.nbcnews.com/politics/2026-election/angie-nixon-winner-florida-senate-primary-democrat-alex-vindman-moody-rcna593255',
              date: '2026-08-18'
            }
          },
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
          primary: {
            result: 'lost',
            votes: 552774,
            pct: 43.9,
            source: {
              title: 'NBC News — Angie Nixon wins Florida Senate Democratic primary, defeating Alex Vindman',
              url: 'https://www.nbcnews.com/politics/2026-election/angie-nixon-winner-florida-senate-primary-democrat-alex-vindman-moody-rcna593255',
              date: '2026-08-18'
            }
          },
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
          primary: {
            result: 'advanced',
            source: {
              title: 'CBS News — Florida Senate race set between Ashley Moody and Angie Nixon after projected primary wins',
              url: 'https://www.cbsnews.com/news/florida-senate-primary-results-ashley-moody-angie-nixon/',
              date: '2026-08-18'
            }
          },
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

,
    {
    id: 'fl-governor',
    office: 'Florida Governor',
    district: 'Statewide',
    type: 'partisan',
    ballot: 'general',
    term: '4 years',
    stakes: 'Florida\'s chief executive, term-limited after two terms; Ron DeSantis is not seeking re-election. The governor appoints agency heads and judges (subject to retention), signs or vetoes legislation including line-item budget vetoes, and sits atop the Florida Cabinet with the Attorney General, CFO, and Commissioner of Agriculture. The governor and lieutenant governor run as a single ticket. This was the most expensive primary cycle on the entire 2026 ballot: Donalds\' campaign and PAC combined raised more than $67 million, roughly ten times Jolly\'s total.',
    whoVotes: 'Statewide. Registered Republicans and Democrats each had a contested primary on August 18; NPA and Libertarian candidates skipped the primary and go straight to the Nov 3 general ballot alongside the two major-party nominees. Every registered voter chooses among all qualified candidates on November 3.',
    primaryResult: {
        status: 'advanced',
        summary: 'U.S. Rep. Byron Donalds won a crowded 11-candidate Republican primary with 47.79% (811,101 votes), well ahead of then-Lt. Gov. Jay Collins (25.16%) and former House Speaker Paul Renner (8.55%). Former U.S. Rep. David Jolly won the Democratic primary with 60.95% (762,109 votes) after Orange County Mayor Jerry Demings, his main rival, suspended his campaign in June 2026 following a cancer diagnosis. Results are unofficial, pending state certification. Donalds and Jolly advance to the Nov 3 general election ballot, along with a Libertarian nominee, six NPA candidates, and five qualified write-ins.',
        source: {
            title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
            url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
            date: '2026-08-25'
          }
      },
    candidates: [
        {
          id: 'donalds',
          name: 'Byron Donalds',
          party: 'R',
          age: 47,
          residence: 'Naples',
          occupation: 'U.S. Representative, FL-19 (Naples/Fort Myers)',
          bio: 'Raised by a single mother in Crown Heights, Brooklyn, after she lost her city job when he was in middle school; his grandmother helped pay his Catholic-school tuition. Moved to Florida for college; background in finance, banking, and insurance before politics. Florida House 2016-2020, elected to the U.S. House (FL-19) in 2020 and re-elected twice; was on Donald Trump\'s 2024 vice-presidential shortlist and is widely described as one of the most prominent Black Republicans in the country. Selected Florida state Sen. Bryan Avila, a Hialeah-raised Florida Army National Guard veteran, as his Lt. Governor running mate.',
          primary: {
              result: 'won',
              votes: 811101,
              pct: 47.79,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {
              amendment: {
                stance: 'support',
                  summary: 'Supports Amendment 3 (raising the homestead exemption) and wants to go further regardless of its outcome, eventually eliminating homestead property taxes entirely.',
                  quote: 'Whether Amendment 3 passes or fails, we are going to reform property taxes in our state with a goal of eliminating homestead property taxes once and for all.',
                  source: {
                      title: 'WLRN — "Byron Donalds promotes his economic plans for Florida, defends Trump\'s record"',
                      url: 'https://www.wlrn.org/government-politics/2026-08-21/byron-donalds-promotes-his-economic-plans-for-florida-defends-trumps-record',
                      date: '2026-08-21'
                    }
                },
              insurance: {
                stance: 'market-based-reform',
                  summary: 'Wants tort reform and expanded "home hardening" programs for buildings constructed before 1992 (pre-Hurricane Andrew codes); has promised rate cuts heading into the general election.',
                  source: {
                      title: 'WLRN — "Byron Donalds promotes his economic plans for Florida, defends Trump\'s record"',
                      url: 'https://www.wlrn.org/government-politics/2026-08-21/byron-donalds-promotes-his-economic-plans-for-florida-defends-trumps-record',
                      date: '2026-08-21'
                    }
                },
              growth: {
                stance: 'streamline-development',
                  summary: 'Wants to cut permitting costs and timelines, which he says add 20-30% to construction costs.',
                  quote: 'modernize that entire process, shrink those timelines down.',
                  source: {
                      title: 'WLRN — "Byron Donalds promotes his economic plans for Florida, defends Trump\'s record"',
                      url: 'https://www.wlrn.org/government-politics/2026-08-21/byron-donalds-promotes-his-economic-plans-for-florida-defends-trumps-record',
                      date: '2026-08-21'
                    }
                }
            },
          record: [
              {
                type: 'fact',
                claim: 'Supports continued data-center/AI infrastructure development and opposes bans or moratoriums, proposing safeguards (closed-loop water cooling, utility-customer protections, distance limits from homes) instead.',
                quote: 'There ain\'t no bans coming.',
                detail: 'Has received "dozens" of campaign contributions from AI companies, per reporting. Contrasts directly with Jolly, who wants a statewide moratorium.',
                date: '2026-08-01',
                source: {
                    title: 'Florida Politics — "\'There ain\'t no bans coming\': Byron Donalds says critics can\'t stop AI data centers"',
                    url: 'https://floridapolitics.com/archives/812893-there-aint-no-bans-donalds/',
                    date: '2026-08-01'
                  }
              },
              {
                type: 'fact',
                claim: 'Education platform proposes "customized career roadmaps" starting in 6th grade, a school-meal health initiative, and keeping what his platform calls "radical woke ideology" out of schools.',
                date: '2026-08-01',
                source: {
                    title: 'FOX 13 Tampa Bay — "Florida 2026 primary: Where governor candidates stand on property taxes, immigration, housing"',
                    url: 'https://www.fox13news.com/news/florida-2026-primary-where-governor-candidates-stand-property-taxes-immigration-housing',
                    date: '2026-08-01'
                  }
              },
              {
                type: 'fact',
                claim: 'Immigration platform is a continuation of the Trump administration\'s enforcement agenda: securing the border and ending "taxpayer handouts to illegals."',
                date: '2026-08-25',
                source: {
                    title: 'ByronDonalds.com — Issues',
                    url: 'https://byrondonalds.com/issues/',
                    date: '2026-08-25'
                  }
              },
              {
                type: 'fact',
                claim: 'No Indian River Lagoon-specific statement was found for Donalds; his platform pledges to "complete Everglades Restoration, improve water quality, expand access to water supply" in general terms.',
                detail: 'Stated explicitly as a gap rather than assumed — this guide could not locate Lagoon-specific comment from either general-election nominee.',
                date: '2026-08-25',
                source: {
                    title: 'ByronDonalds.com — Issues',
                    url: 'https://byrondonalds.com/issues/',
                    date: '2026-08-25'
                  }
              },
              {
                type: 'fact',
                claim: 'Maintained an active U.S. House re-election campaign committee for more than 18 months after launching his governor bid; the FEC warned in August 2025 that contributions to the House account "must be refunded" since he was not an active House candidate. His campaign did not confirm he would not seek House re-election until Aug. 8, 2026.',
                detail: 'His treasurer initially disputed that he\'d ended the House campaign, directly contradicting an earlier FEC filing from February 2025 stating he would not seek re-election.',
                date: '2026-08-20',
                source: {
                    title: 'WUSF — "Byron Donalds kept House reelection campaign alive during run for governor"',
                    url: 'https://www.wusf.org/politics-issues/2026-08-20/byron-donalds-kept-house-re-election-campaign-alive-during-run-for-florida-governor',
                    date: '2026-08-20'
                  }
              },
              {
                type: 'allegation',
                claim: 'The nonpartisan Campaign Legal Center filed a 2024 ethics complaint alleging Donalds and his wife failed to timely disclose more than 100 stock trades worth up to $1.6 million under the STOCK Act.',
                response: 'A campaign spokesperson said Donalds does not personally initiate trades (his broker has third-party authorization) and that the campaign was "working to reconcile any outstanding infractions."',
                date: '2025-01-01',
                source: {
                    title: 'Campaign Legal Center — "Rep. Byron Donalds of Florida Fails to Disclose up to $1.6 Million in Stock Trades"',
                    url: 'https://campaignlegal.org/press-releases/rep-byron-donalds-florida-fails-disclose-16-million-stock-trades-campaign-legal',
                    date: '2025-01-01'
                  }
              },
              {
                type: 'allegation',
                claim: 'Reporting noted Donalds and his wife purchased up to $100,000 in Bitcoin the same day he and other lawmakers sent a letter to the IRS seeking more favorable crypto tax rules, raising conflict-of-interest questions given his seat on the House Digital Assets Subcommittee.',
                response: 'Donalds says his investments are handled by a financial advisor and has called the attacks "politically motivated."',
                date: '2025-06-01',
                source: {
                    title: 'NOTUS — "Rep. Byron Donalds Pressed the IRS for Favorable Crypto Rules. His Wife Bought Bitcoin the Same Day."',
                    url: 'https://www.notus.org/congress/byron-donalds-crypto-rules-bitcoin',
                    date: '2025-06-01'
                  }
              },
              {
                type: 'allegation',
                claim: 'At a June 2024 campaign event, Donalds said "during Jim Crow, the Black family was together," pointing to Great Society programs as having since weakened Black family structure — widely criticized by Democratic leaders including the Congressional Black Caucus chairman.',
                response: 'Donalds pushed back on the "he said Jim Crow was better" characterization in a televised exchange with MSNBC\'s Joy Reid, saying "I never said that it was better for Black people in Jim Crow" while maintaining that Black marriage rates were statistically higher in that era.',
                detail: 'Independent fact-checks (PolitiFact, Tampa Bay Times) found the "Jim Crow was better" framing an overstatement of what he literally said, while also finding his own comments "thorny in their own right" and his implied causal argument weakly supported.',
                date: '2024-06-10',
                source: {
                    title: 'PolitiFact — "Fact-checking Byron Donalds\' \'Jim Crow\' comments on Black families"',
                    url: 'https://www.politifact.com/article/2024/jun/10/fact-checking-byron-donalds-jim-crow-comments/',
                    date: '2024-06-10'
                  }
              },
              {
                type: 'fact',
                claim: 'Outgoing Gov. Ron DeSantis has notably NOT endorsed Donalds, before or after the primary, and at points questioned his fitness for the office and floated his own wife Casey DeSantis as a preferable candidate.',
                quote: 'You got a guy like Byron. He just hasn\'t been a part of any of the victories that we\'ve had here over the left over these last few years.',
                date: '2025-02-24',
                source: {
                    title: 'Florida Phoenix — "DeSantis disses Donalds, touts First Lady, when asked about 2026 governor race"',
                    url: 'https://floridaphoenix.com/2025/02/24/desantis-disses-donalds-touts-first-lady-when-asked-about-2026-governor-race/',
                    date: '2025-02-24'
                  }
              }
            ],
          finance: {
              raised: 67000000,
              spent: null,
              asOf: '2026-06-01',
              note: 'Campaign account plus political committee combined; $65.8 million cash on hand as of June 1, 2026. A direct FL Division of Elections database query returned individual contribution records but not a computed grand total (the tool\'s "totals" mode errored on every attempted date range) — this figure is secondary-sourced to reporting that itself cites DOE filings, not a raw database pull. Major PAC donors include Palm Beach billionaire Thomas Peterffy and shipping magnate Richard Uihlein ($1 million each) and the Florida Club for Growth ($975,000).',
              source: {
                  title: 'Florida Politics — "Byron Donalds posts record $22M quarter to kick off 2026 Governor\'s race"',
                  url: 'https://floridapolitics.com/archives/788293-byron-donalds-posts-record-22m-quarter-to-kick-off-2026-governors-race/',
                  date: '2026-04-01'
                }
            },
          endorsements: [
              {
                name: 'President Donald Trump — "As Governor, Byron would have a BIG Voice and would work closely with me to advance our America First Agenda."',
                source: {
                    title: 'Time — "Who Is Byron Donalds, the Trump-Backed Favorite for Florida Governor"',
                    url: 'https://time.com/article/2026/08/18/byron-donalds-congressman-trump-republican-governor-florida/',
                    date: '2026-08-18'
                  }
              },
              {
                name: 'House Speaker Mike Johnson',
                source: {
                    title: 'Fox News — "Top House Republican backs Byron Donalds for Florida governor"',
                    url: 'https://www.foxnews.com/politics/top-house-republican-backs-byron-donalds-florida-governor',
                    date: '2026-01-01'
                  }
              },
              {
                name: 'A group of DeSantis political allies, including Florida GOP chair/Attorney General James Uthmeier, who broke from DeSantis to endorse Donalds in July 2026',
                source: {
                    title: 'Tampa Bay Times — "DeSantis allies break away, endorse Byron Donalds for Florida governor"',
                    url: 'https://www.tampabay.com/news/florida-politics/elections/2026/07/06/florida-desantis-byron-donalds-trump-uthmeier-endorse-2026-governor/',
                    date: '2026-07-06'
                  }
              }
            ],
          links: {
              'Campaign website': 'https://byrondonalds.com/',
              'Running mate (Bryan Avila) announcement': 'https://www.cbsnews.com/miami/news/florida-republican-byron-donalds-gubernatorial-candidate-lieutenant-governor-running-mate-2026/'
            }
        },
        {
          id: 'jolly',
          name: 'David Jolly',
          party: 'D',
          age: 53,
          residence: 'Pinellas County',
          occupation: 'Attorney; television political analyst',
          bio: 'Attorney and nationally recognized MSNBC political analyst who describes himself as a devout Christian. Won a March 2014 special election to the U.S. House (FL-13, Pinellas County) as a Republican, then lost his 2016 re-election bid to Charlie Crist. Left the Republican Party in 2018 over opposition to Donald Trump, spent several years as a registered independent building a national profile as an anti-Trump former-Republican commentator, then registered as a Democrat in mid-2025 and launched this campaign shortly after. Selected Gwen Graham — daughter of former Gov./Sen. Bob Graham, a former one-term U.S. Representative who ran for governor herself in 2018 and later served in the Biden administration\'s Education Department — as his Lt. Governor running mate.',
          primary: {
              result: 'won',
              votes: 762109,
              pct: 60.95,
              source: {
                  title: 'WLRN — "David Jolly wins Democratic nomination for governor, will face Republican Byron Donalds"',
                  url: 'https://www.wlrn.org/government-politics/2026-08-18/david-jolly-governors-race-florida',
                  date: '2026-08-18'
                }
            },
          positions: {
              amendment: {
                stance: 'oppose',
                  summary: 'Opposes Amendment 3, arguing local communities should retain control over property-tax exemption policy rather than have it set by state constitutional mandate.',
                  source: {
                      title: 'Yahoo News/Newsweek — "Byron Donalds to Face David Jolly in Florida Governor\'s Race: What They Say on Property Taxes"',
                      url: 'https://www.yahoo.com/news/politics/articles/byron-donalds-face-david-jolly-155152696.html',
                      date: '2026-08-19'
                    }
                },
              insurance: {
                stance: 'stronger-regulation-oversight',
                  summary: 'Central campaign theme is "historic homeowner\'s insurance reform"; has floated shifting some catastrophic-risk coverage to a state-assumed model, potentially funded by a new real-estate-transaction tax or reallocated tourism revenue.',
                  quote: 'Floridians are being squeezed by an affordability crisis.',
                  source: {
                      title: 'WTSP — "Who is David Jolly? Meet the Democratic nominee for Florida governor"',
                      url: 'https://www.wtsp.com/article/news/politics/elections/who-is-david-jolly-democrat-florida-governor-2026-race/67-9baa25b9-1a5d-4da0-ae1c-0168ff555583',
                      date: '2026-08-18'
                    }
                }
            },
          record: [
              {
                type: 'fact',
                claim: 'Calls for a statewide moratorium on new data centers pending study of environmental, economic, and privacy/security impacts of AI infrastructure — a direct contrast with Donalds, who opposes any ban.',
                date: '2026-07-01',
                source: {
                    title: 'Florida Politics — "David Jolly calls for a halt to data centers, betting Byron Donalds is vulnerable"',
                    url: 'https://floridapolitics.com/archives/808692-david-jolly-calls-for-data-center-moratorium/',
                    date: '2026-07-01'
                  }
              },
              {
                type: 'fact',
                claim: 'Called the Everglades immigration-detention facility known as "Alligator Alcatraz" a "callous political stunt" and supports closing it and returning the land to Miami-Dade County, while saying this doesn\'t make him soft on crime.',
                quote: 'if you violate the law in Florida, you should be held accountable regardless of where you were born.',
                date: '2026-07-01',
                source: {
                    title: 'CBS Miami — "David Jolly, leading Democratic candidate for 2026 governor, shares views on abortion and Alligator Alcatraz"',
                    url: 'https://www.cbsnews.com/amp/miami/news/democratic-candidate-governor-david-jolly-abortion-rights-alligator-alcatraz',
                    date: '2026-07-01'
                  }
              },
              {
                type: 'fact',
                claim: 'Now supports abortion rights, a shift from his time as a Republican member of Congress, which he frames as part of a broader personal "evolution" since leaving the GOP.',
                date: '2026-07-01',
                source: {
                    title: 'CBS Miami — "David Jolly, leading Democratic candidate for 2026 governor, shares views on abortion and Alligator Alcatraz"',
                    url: 'https://www.cbsnews.com/amp/miami/news/democratic-candidate-governor-david-jolly-abortion-rights-alligator-alcatraz',
                    date: '2026-07-01'
                  }
              },
              {
                type: 'fact',
                claim: 'Education platform centers on a "renaissance" in public education, reinvestment in community public schools, and higher teacher pay, citing Florida\'s ranking as near-last nationally on teacher pay.',
                date: '2026-08-01',
                source: {
                    title: 'FOX 13 Tampa Bay — "Florida 2026 primary: Where governor candidates stand on property taxes, immigration, housing"',
                    url: 'https://www.fox13news.com/news/florida-2026-primary-where-governor-candidates-stand-property-taxes-immigration-housing',
                    date: '2026-08-01'
                  }
              },
              {
                type: 'fact',
                claim: 'No Indian River Lagoon-specific statement was found for Jolly; his platform references investing in "climate resiliency" in general terms. This appears to be a genuine gap in campaign-trail coverage of the race, not one-sided reporting — the same gap exists for Donalds.',
                date: '2026-08-25',
                source: {
                    title: 'WTSP — "Who is David Jolly? Meet the Democratic nominee for Florida governor"',
                    url: 'https://www.wtsp.com/article/news/politics/elections/who-is-david-jolly-democrat-florida-governor-2026-race/67-9baa25b9-1a5d-4da0-ae1c-0168ff555583',
                    date: '2026-08-18'
                  }
              },
              {
                type: 'allegation',
                claim: 'Republicans and some conservative commentary characterize Jolly\'s political trajectory — GOP congressman (2014-2017) to independent (2018-2025) to Democratic gubernatorial nominee — as career opportunism rather than principled evolution.',
                response: 'Jolly frames his shift as a genuine break with a Trump-era GOP he came to oppose; during his House tenure he notably forwent PAC contributions and campaigned on reducing special-interest money in politics, a position his campaign cites as evidence of consistency.',
                date: '2026-05-29',
                source: {
                    title: 'The Florida Pundit — "David Jolly Faces Criticism Over Political Switch in Florida Governor Race"',
                    url: 'https://thefloridapundit.com/2026/05/29/david-jolly-criticism-florida-governor-race/',
                    date: '2026-05-29'
                  }
              },
              {
                type: 'fact',
                claim: 'In April 2016, during a U.S. Senate campaign, edits were made to Jolly\'s Wikipedia page removing references to his prior lobbying work, which his campaign said presented a "public negative narrative" — drawing press scrutiny at the time as an apparent attempt to obscure part of his record.',
                detail: 'This is 2016-era conduct, over a decade before this campaign; no comparable 2026-cycle controversy was found for Jolly.',
                date: '2016-04-01',
                source: {
                    title: 'GovTrack.us — "Rep. David Jolly [R-FL13, 2014-2016]"',
                    url: 'https://www.govtrack.us/congress/members/david_jolly/412603',
                    date: '2026-08-25'
                  }
              },
              {
                type: 'fact',
                claim: 'No financial-disclosure or ethics-complaint controversy comparable to Donalds\' STOCK Act complaint or dual-campaign FEC warning was found for Jolly in this guide\'s research.',
                detail: 'This guide searched specifically; the absence may reflect a genuinely thinner record (Jolly left elected office in 2017) rather than one-sided reporting, and readers should treat it as "not found," not "does not exist."',
                date: '2026-08-25',
                source: {
                    title: 'GovTrack.us — "Rep. David Jolly [R-FL13, 2014-2016]"',
                    url: 'https://www.govtrack.us/congress/members/david_jolly/412603',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: {
              raised: 6400000,
              spent: null,
              asOf: '2026-08-18',
              note: 'Includes $1.6 million from Florida\'s public campaign-finance matching-funds program. Roughly one-tenth of Donalds\' reported $67M+. Top donors in one recent quarter were investment advisor Donald Sussman and heiress Barbara Stiefel, $100,000 each; campaign says its broader donor base is mostly grassroots. A direct FL DOE database query for a grand total could not be completed in this research pass; this figure is secondary-sourced to reporting that itself cites DOE filings.',
              source: {
                  title: 'WLRN — "David Jolly wins Democratic nomination for governor"',
                  url: 'https://www.wlrn.org/government-politics/2026-08-18/david-jolly-governors-race-florida',
                  date: '2026-08-18'
                }
            },
          endorsements: [
              {
                name: 'Florida Education Association (the state\'s largest teachers\' union), in coordination with the Florida AFL-CIO',
                source: {
                    title: 'Florida Politics — "Florida Education Association backs David Jolly for Governor"',
                    url: 'https://floridapolitics.com/archives/804118-florida-education-association-backs-david-jolly-for-governor/',
                    date: '2026-06-01'
                  }
              },
              {
                name: 'Became the de facto Democratic frontrunner after Orange County Mayor Jerry Demings — his chief rival, previously the better-funded of the two — suspended his campaign June 5, 2026 following a prostate cancer diagnosis',
                source: {
                    title: 'Tampa Bay Times — "What does Jerry Demings dropping out mean for Florida governor\'s race?"',
                    url: 'https://www.tampabay.com/news/florida-politics/elections/2026/06/05/jerry-demings-drops-out-governors-race-cancer-diagnosis-democrat-david-jolly/',
                    date: '2026-06-05'
                  }
              }
            ],
          links: {
              'Campaign website': 'https://www.jollyforflorida.com/'
            }
        },
        {
          id: 'collins',
          name: 'Jay Collins',
          party: 'R',
          occupation: 'Lieutenant Governor of Florida (2025-2026, resigned to run); Florida Senate 2022-2025',
          bio: 'Army Special Forces (Green Beret) combat veteran, 23+ years of service including deployments to Afghanistan, Iraq, and twice to South America as a medical specialist. Lost a leg to combat injuries, then continued serving as a Green Beret for five more years before retiring; decorations include the Legion of Merit, Bronze Star, and Purple Heart. Gov. DeSantis appointed him the 21st Lt. Governor of Florida in August 2025, making him the sitting Lt. Governor when he entered this race against Trump-backed frontrunner Donalds — widely read as DeSantis\'s implicit signal of support.',
          primary: {
              result: 'lost',
              votes: 427000,
              pct: 25.16,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'Campaigned on protecting Florida\'s waters from PFAS contamination, protecting farmland and the food supply, immigration enforcement, and "immediate property-tax relief."',
                quote: 'We have to protect Florida as it is. Growth is part of life...but that will never come at the expense of our agriculture, our green zones, our waterways.',
                date: '2026-08-01',
                source: {
                    title: 'FOX 13 Tampa Bay — "Florida 2026 primary: Where governor candidates stand on property taxes, immigration, housing"',
                    url: 'https://www.fox13news.com/news/florida-2026-primary-where-governor-candidates-stand-property-taxes-immigration-housing',
                    date: '2026-08-01'
                  }
              },
              {
                type: 'fact',
                claim: 'This guide found no specific controversies for Collins beyond the ordinary scrutiny of a competitive primary.',
                date: '2026-08-25',
                source: {
                    title: 'Ballotpedia News — "Byron Donalds defeated 10 other candidates in the Republican primary for governor of Florida on Aug. 18"',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-20'
                  }
              }
            ],
          finance: {
              raised: null,
              spent: null,
              asOf: '2026-08-25',
              note: 'Not separately itemized in available reporting beyond his distant 2nd-place primary finish; not confirmed against a direct FL DOE pull.',
              source: {
                  title: 'Ballotpedia News — "Byron Donalds defeated 10 other candidates in the Republican primary for governor of Florida on Aug. 18"',
                  url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                  date: '2026-08-20'
                }
            },
          endorsements: [],
          links: {

            }
        },
        {
          id: 'renner',
          name: 'Paul Renner',
          party: 'R',
          occupation: 'Speaker of the Florida House, 2022-2024; Florida House 2015-2024',
          bio: 'Navy veteran; prosecutor and business attorney by background. Served as Florida House Speaker 2022-2024, during which he says over $2 billion in conservation easements were funded.',
          primary: {
              result: 'lost',
              votes: 145055,
              pct: 8.55,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'Proposed eliminating property taxes by shifting the burden toward new residents, tourists, and international real-estate speculators; promised to reduce homeowners\' insurance premiums by 20%.',
                date: '2026-08-01',
                source: {
                    title: 'FOX 13 Tampa Bay — "Florida 2026 primary: Where governor candidates stand on property taxes, immigration, housing"',
                    url: 'https://www.fox13news.com/news/florida-2026-primary-where-governor-candidates-stand-property-taxes-immigration-housing',
                    date: '2026-08-01'
                  }
              },
              {
                type: 'fact',
                claim: 'The only candidate in either 2026 gubernatorial primary this guide found to have made an Indian River Lagoon-specific statement: wanted to protect the Lagoon\'s wildlife corridor and allow aquifer recharge.',
                date: '2026-08-01',
                source: {
                    title: 'FOX 13 Tampa Bay — "Florida 2026 primary: Where governor candidates stand on property taxes, immigration, housing"',
                    url: 'https://www.fox13news.com/news/florida-2026-primary-where-governor-candidates-stand-property-taxes-immigration-housing',
                    date: '2026-08-01'
                  }
              },
              {
                type: 'fact',
                claim: 'On criminal justice, supported the death penalty for human trafficking of minors and wanted to limit death-penalty appeals to three years; opposed Flock automated license-plate-reader cameras.',
                date: '2026-08-01',
                source: {
                    title: 'FOX 13 Tampa Bay — "Florida 2026 primary: Where governor candidates stand on property taxes, immigration, housing"',
                    url: 'https://www.fox13news.com/news/florida-2026-primary-where-governor-candidates-stand-property-taxes-immigration-housing',
                    date: '2026-08-01'
                  }
              }
            ],
          finance: {
              raised: 6700000,
              spent: null,
              asOf: '2026-08-17',
              note: '$6.2 million through his political committee plus roughly $490,000 in his regular campaign account — a distant second to Donalds but well ahead of Fishback.',
              source: {
                  title: 'WLRN/Florida Phoenix fundraising-gap coverage',
                  url: 'https://www.wlrn.org/government-politics/2026-08-17/will-byron-donalds-dominance-in-fundraising-result-in-a-gop-victory',
                  date: '2026-08-17'
                }
            },
          endorsements: [],
          links: {

            }
        },
        {
          id: 'fishback',
          name: 'James Fishback',
          party: 'R',
          occupation: 'Founder, investment firm Azoria and nonprofit Incubate Debate; DOGE consultant',
          bio: 'Founder of investment firm Azoria and the nonprofit Incubate Debate; served as a consultant to the Department of Government Efficiency (DOGE) during the Trump administration.',
          primary: {
              result: 'lost',
              votes: 177796,
              pct: 10.48,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'Supported eliminating property taxes; on homelessness, advocated "structure, care and treatment" over what he called "free needles, encampments"; pro-life, pledging to "shut down the 53 abortion clinics in Florida" while also advocating paid maternity leave.',
                date: '2026-08-01',
                source: {
                    title: 'FOX 13 Tampa Bay — "Florida 2026 primary: Where governor candidates stand on property taxes, immigration, housing"',
                    url: 'https://www.fox13news.com/news/florida-2026-primary-where-governor-candidates-stand-property-taxes-immigration-housing',
                    date: '2026-08-01'
                  }
              }
            ],
          finance: {
              raised: 1905000,
              spent: null,
              asOf: '2026-08-17',
              note: 'More than $1.2 million in his "Florida First" PAC and more than $705,000 in his regular campaign account, including a $100,000 personal loan on Aug. 13, 2026 — but had just $2,371 left in the campaign account, reflecting a fundraising struggle relative to Donalds and Renner.',
              source: {
                  title: 'Florida Politics — "James Fishback\'s fundraising continues to flounder; campaign has less than $28K left in bank"',
                  url: 'https://floridapolitics.com/archives/790153-fishback-fundraising-flounders/',
                  date: '2026-08-17'
                }
            },
          endorsements: [],
          links: {

            }
        },
        {
          id: 'williams',
          name: 'Bobby Williams',
          party: 'R',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'lost',
              votes: 69101,
              pct: 4.07,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'Described in earlier national coverage as an activist.',
                date: '2026-08-25',
                source: {
                    title: 'This guide\'s review of Florida Election Watch results and Ballotpedia\'s primary coverage',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-25'
                  }
              },
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance detail, or policy platform for this candidate beyond their name and primary vote total — a genuine reporting gap in a crowded field, not a research shortfall specific to this candidate.',
                date: '2026-08-25',
                source: {
                    title: 'This guide\'s review of Florida Election Watch results and Ballotpedia\'s primary coverage',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'rodriguezr',
          name: 'Rachel Rodriguez',
          party: 'R',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'lost',
              votes: 27623,
              pct: 1.63,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'An attorney by profession per aggregated candidate listings.',
                date: '2026-08-25',
                source: {
                    title: 'This guide\'s review of Florida Election Watch results and Ballotpedia\'s primary coverage',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-25'
                  }
              },
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance detail, or policy platform for this candidate beyond their name and primary vote total — a genuine reporting gap in a crowded field, not a research shortfall specific to this candidate.',
                date: '2026-08-25',
                source: {
                    title: 'This guide\'s review of Florida Election Watch results and Ballotpedia\'s primary coverage',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'holcomb',
          name: 'Jim Holcomb',
          party: 'R',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'lost',
              votes: 13183,
              pct: 0.78,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance detail, or policy platform for this candidate beyond their name and primary vote total — a genuine reporting gap in a crowded field, not a research shortfall specific to this candidate.',
                date: '2026-08-25',
                source: {
                    title: 'This guide\'s review of Florida Election Watch results and Ballotpedia\'s primary coverage',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'shaw',
          name: 'James W. Shaw',
          party: 'R',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'lost',
              votes: 7888,
              pct: 0.46,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'Described as a farmer in aggregated candidate listings.',
                date: '2026-08-25',
                source: {
                    title: 'This guide\'s review of Florida Election Watch results and Ballotpedia\'s primary coverage',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-25'
                  }
              },
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance detail, or policy platform for this candidate beyond their name and primary vote total — a genuine reporting gap in a crowded field, not a research shortfall specific to this candidate.',
                date: '2026-08-25',
                source: {
                    title: 'This guide\'s review of Florida Election Watch results and Ballotpedia\'s primary coverage',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'mccaffrey',
          name: 'Arthur Joseph McCaffrey',
          party: 'R',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'lost',
              votes: 7048,
              pct: 0.42,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance detail, or policy platform for this candidate beyond their name and primary vote total — a genuine reporting gap in a crowded field, not a research shortfall specific to this candidate.',
                date: '2026-08-25',
                source: {
                    title: 'This guide\'s review of Florida Election Watch results and Ballotpedia\'s primary coverage',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'succe',
          name: 'Caneste Succe',
          party: 'R',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'lost',
              votes: 6275,
              pct: 0.37,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'Described in aggregated listings as a "public representative."',
                date: '2026-08-25',
                source: {
                    title: 'This guide\'s review of Florida Election Watch results and Ballotpedia\'s primary coverage',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-25'
                  }
              },
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance detail, or policy platform for this candidate beyond their name and primary vote total — a genuine reporting gap in a crowded field, not a research shortfall specific to this candidate.',
                date: '2026-08-25',
                source: {
                    title: 'This guide\'s review of Florida Election Watch results and Ballotpedia\'s primary coverage',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'nokovich',
          name: 'Daniel Nokovich',
          party: 'R',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'lost',
              votes: 5192,
              pct: 0.31,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance detail, or policy platform for this candidate beyond their name and primary vote total — a genuine reporting gap in a crowded field, not a research shortfall specific to this candidate.',
                date: '2026-08-25',
                source: {
                    title: 'This guide\'s review of Florida Election Watch results and Ballotpedia\'s primary coverage',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'foster',
          name: 'Dayna Marie Foster',
          party: 'D',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'lost',
              votes: 189393,
              pct: 15.15,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance detail, or policy platform for this candidate beyond their name and primary vote total — a genuine reporting gap in a crowded field, not a research shortfall specific to this candidate.',
                date: '2026-08-25',
                source: {
                    title: 'This guide\'s review of Florida Election Watch results and Ballotpedia\'s primary coverage',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'joseph',
          name: 'Dotie Joseph',
          party: 'D',
          occupation: 'Member, Florida House of Representatives (North Miami-area district)',
          bio: 'A sitting Florida state representative at the time of her campaign, running on an affordability-focused platform.',
          primary: {
              result: 'lost',
              votes: 119950,
              pct: 9.59,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'Focused on "lowering costs, including housing, groceries, gas, insurance and healthcare"; supported raising the minimum wage for state workers to $20/hour; platform included expanding Medicaid and lowering prescription drug costs; explicitly positioned herself against "culture war" and "fear mongering" politics.',
                date: '2026-08-01',
                source: {
                    title: 'FOX 13 Tampa Bay — "Florida 2026 primary: Where governor candidates stand on property taxes, immigration, housing"',
                    url: 'https://www.fox13news.com/news/florida-2026-primary-where-governor-candidates-stand-property-taxes-immigration-housing',
                    date: '2026-08-01'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'castillobach',
          name: 'Evelyn Castillo-Bach',
          party: 'D',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'lost',
              votes: 96695,
              pct: 7.73,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance detail, or policy platform for this candidate beyond their name and primary vote total — a genuine reporting gap in a crowded field, not a research shortfall specific to this candidate.',
                date: '2026-08-25',
                source: {
                    title: 'This guide\'s review of Florida Election Watch results and Ballotpedia\'s primary coverage',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'fernandez',
          name: 'Thomas Eloy Fernandez',
          party: 'D',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'lost',
              votes: 47320,
              pct: 3.78,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance detail, or policy platform for this candidate beyond their name and primary vote total — a genuine reporting gap in a crowded field, not a research shortfall specific to this candidate.',
                date: '2026-08-25',
                source: {
                    title: 'This guide\'s review of Florida Election Watch results and Ballotpedia\'s primary coverage',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'norman',
          name: 'Stephann Norman',
          party: 'D',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'lost',
              votes: 34964,
              pct: 2.8,
              source: {
                  title: 'Florida Election Watch (FL Division of Elections results portal) — "2nd Set of Unofficial Returns," not yet certified',
                  url: 'https://floridaelectionwatch.gov/StateOffices/Governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance detail, or policy platform for this candidate beyond their name and primary vote total — a genuine reporting gap in a crowded field, not a research shortfall specific to this candidate.',
                date: '2026-08-25',
                source: {
                    title: 'This guide\'s review of Florida Election Watch results and Ballotpedia\'s primary coverage',
                    url: 'https://news.ballotpedia.org/2026/08/20/byron-donalds-defeated-10-other-candidates-in-the-republican-primary-for-governor-of-florida-on-aug-18/',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'jewett',
          name: 'Scott Eckhard Jewett',
          party: 'L',
          occupation: 'Not documented by this guide',
          bio: 'The Libertarian Party of Florida\'s nominee for governor, confirmed on the Nov 3 general election ballot. No biography, finance, or platform detail was located.',
          primary: {
              result: 'advanced',
              source: {
                  title: 'WFSU — "Donalds and Jolly will face off for Florida governor"',
                  url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                  date: '2026-08-19'
                }
            },
          positions: {

            },
          record: [],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'meade',
          name: 'Desmond Meade',
          party: 'NPA',
          occupation: 'President/CEO, Florida Rights Restoration Coalition',
          bio: 'A nationally known voting-rights advocate who led the successful grassroots campaign behind Florida\'s 2018 Amendment 4, which restored voting rights to an estimated 1.4 million Floridians with past felony convictions — the largest expansion of voting rights in the U.S. in decades. A MacArthur "Genius Grant" Fellow who has spoken publicly about his own past conviction, homelessness, and addiction, and about earning a law degree afterward. Running as a No Party Affiliation candidate for governor.',
          primary: {
              result: 'advanced',
              source: {
                  title: 'WSLR+Fogartyville — "The race for Florida governor: Desmond Meade"',
                  url: 'https://wslr.org/the-race-for-florida-governor-desmond-meade/',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'burkett',
          name: 'Charles Burkett',
          party: 'NPA',
          occupation: 'Mayor, Town of Surfside (Miami-Dade County)',
          bio: 'Mayor of the Town of Surfside at the time of his candidacy for governor. No further biography, finance, or platform detail was located.',
          primary: {
              result: 'advanced',
              source: {
                  title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                  url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'abrams',
          name: 'Dean Ocean Abrams',
          party: 'NPA',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'advanced',
              source: {
                  title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                  url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance, or platform detail for this candidate beyond their name on a general-election qualified-candidate list. That list itself is provisional and should be re-verified against a primary FL Division of Elections source before publication.',
                date: '2026-08-25',
                source: {
                    title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                    url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'datto',
          name: 'Jeffrey Peter "Dr. Jeff" Datto',
          party: 'NPA',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'advanced',
              source: {
                  title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                  url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance, or platform detail for this candidate beyond their name on a general-election qualified-candidate list. That list itself is provisional and should be re-verified against a primary FL Division of Elections source before publication.',
                date: '2026-08-25',
                source: {
                    title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                    url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'dimanche',
          name: 'Moliere "Moe" Dimanche',
          party: 'NPA',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'advanced',
              source: {
                  title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                  url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance, or platform detail for this candidate beyond their name on a general-election qualified-candidate list. That list itself is provisional and should be re-verified against a primary FL Division of Elections source before publication.',
                date: '2026-08-25',
                source: {
                    title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                    url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'russo',
          name: 'Frank J. Russo',
          party: 'NPA',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'advanced',
              source: {
                  title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                  url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance, or platform detail for this candidate beyond their name on a general-election qualified-candidate list. That list itself is provisional and should be re-verified against a primary FL Division of Elections source before publication.',
                date: '2026-08-25',
                source: {
                    title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                    url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'anderson_wi',
          name: 'Kathy Anderson',
          party: 'WRITE-IN',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'advanced',
              source: {
                  title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                  url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance, or platform detail for this candidate beyond their name on a general-election qualified-candidate list. That list itself is provisional and should be re-verified against a primary FL Division of Elections source before publication.',
                date: '2026-08-25',
                source: {
                    title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                    url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'dejesus_wi',
          name: 'David "DJ" DeJesus',
          party: 'WRITE-IN',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'advanced',
              source: {
                  title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                  url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance, or platform detail for this candidate beyond their name on a general-election qualified-candidate list. That list itself is provisional and should be re-verified against a primary FL Division of Elections source before publication.',
                date: '2026-08-25',
                source: {
                    title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                    url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'dembinsky_wi',
          name: 'Richard Paul Dembinsky',
          party: 'WRITE-IN',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'advanced',
              source: {
                  title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                  url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance, or platform detail for this candidate beyond their name on a general-election qualified-candidate list. That list itself is provisional and should be re-verified against a primary FL Division of Elections source before publication.',
                date: '2026-08-25',
                source: {
                    title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                    url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'khan_wi',
          name: 'M.W. Khan',
          party: 'WRITE-IN',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'advanced',
              source: {
                  title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                  url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance, or platform detail for this candidate beyond their name on a general-election qualified-candidate list. That list itself is provisional and should be re-verified against a primary FL Division of Elections source before publication.',
                date: '2026-08-25',
                source: {
                    title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                    url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'morris_wi',
          name: 'Erik Morris',
          party: 'WRITE-IN',
          occupation: 'Not documented by this guide',
          bio: 'A minor candidate in a crowded 2026 gubernatorial primary; see record section for what this guide could and could not confirm.',
          primary: {
              result: 'advanced',
              source: {
                  title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                  url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                  date: '2026-08-25'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide found no biography, campaign finance, or platform detail for this candidate beyond their name on a general-election qualified-candidate list. That list itself is provisional and should be re-verified against a primary FL Division of Elections source before publication.',
                date: '2026-08-25',
                source: {
                    title: 'WebSearch aggregation of qualified-candidate listings (provisional — not cross-verified against a single FL DOE or Ballotpedia primary source; recheck before treating as final)',
                    url: 'https://news.wfsu.org/state-news/2026-08-19/donalds-and-jolly-will-face-off-for-florida-governor',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        }
      ]
  }
,
    {
    id: 'fl-attorney-general',
    office: 'Florida Attorney General',
    district: 'Statewide',
    type: 'partisan',
    ballot: 'general',
    term: '4 years',
    stakes: 'Florida\'s chief legal officer: represents the state in litigation, enforces consumer-protection and antitrust law, oversees Medicaid fraud investigations, and sits on the Florida Cabinet with the Governor, CFO, and Commissioner of Agriculture. Incumbent James Uthmeier was appointed by Gov. DeSantis in January 2025 after Ashley Moody moved to the U.S. Senate. Notably, NEITHER party held an actual primary election for this office — only one candidate per party qualified by the June 12, 2026 deadline, so both nominations were decided without a single vote being cast.',
    whoVotes: 'Statewide, on the November 3, 2026 general election ballot only. No primary was held for this race in either party — see the primary-result note below for why.',
    primaryResult: {
        status: 'decided',
        summary: 'No primary was held. Under Florida law, when only one candidate qualifies within a party, that candidate is automatically the nominee. Incumbent Republican James Uthmeier\'s only announced rival, Steven Leskovich, withdrew before the June 12, 2026 qualifying deadline (and then endorsed the Democrat rather than Uthmeier). Democrat José Javier Rodríguez\'s would-be rival, perennial candidate Jim Lewis, was ruled not legally qualified by the state over a paperwork issue. Uthmeier and Rodríguez advance directly to the Nov 3 general election ballot; no NPA or write-in candidates were identified for this race.',
        source: {
            title: 'Ballotpedia — "Florida Attorney General election, 2026"',
            url: 'https://ballotpedia.org/Florida_Attorney_General_election,_2026',
            date: '2026-08-25'
          }
      },
    candidates: [
        {
          id: 'uthmeier',
          name: 'James Uthmeier',
          party: 'R',
          incumbent: true,
          age: 38,
          occupation: 'Attorney General of Florida (appointed Feb. 2025)',
          bio: 'Born in Destin, FL; competed in track and field at the University of Florida; J.D., Georgetown University Law Center. Associate at Jones Day, then senior counsel/advisor at the U.S. Dept. of Commerce under the first Trump administration. Joined Gov. DeSantis\'s office in 2019, rising to chief of staff in 2021 and serving as campaign manager for DeSantis\'s 2024 presidential run. DeSantis appointed him Attorney General in Jan. 2025, succeeding Ashley Moody; sworn in Feb. 17, 2025 at age 37, among the youngest state AGs in the country.',
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'Proposed and became the public face of "Alligator Alcatraz," the Everglades immigration-detention facility that opened July 1, 2025 with Trump, DeSantis, and DHS Secretary Kristi Noem attending.',
                date: '2026-08-25',
                source: {
                    title: 'Wikipedia — James Uthmeier',
                    url: 'https://en.wikipedia.org/wiki/James_Uthmeier',
                    date: '2026-08-25'
                  }
              },
              {
                type: 'fact',
                claim: 'Held in contempt of federal court in June 2025 by U.S. District Judge Kathleen M. Williams for continuing to enforce a state immigration law (SB 4-C) after it had been preliminarily blocked by federal court order; separately reported to have directed Florida law enforcement to keep enforcing it anyway.',
                quote: 'If being held in contempt is what it costs to ... stand firmly behind [Trump\'s immigration agenda, he accepted the consequences].',
                date: '2025-06-01',
                source: {
                    title: 'Wikipedia — James Uthmeier',
                    url: 'https://en.wikipedia.org/wiki/James_Uthmeier',
                    date: '2026-08-25'
                  }
              },
              {
                type: 'fact',
                claim: 'Opened high-profile criminal investigations into Roblox (child-safety/grooming concerns), the Tate brothers, JPMorgan Chase (alleged coordination with Special Counsel Jack Smith over Trump Media account terminations), and reopened a 1996 Brothers to the Rescue shootdown probe into Raúl Castro.',
                date: '2026-08-25',
                source: {
                    title: 'Wikipedia — James Uthmeier',
                    url: 'https://en.wikipedia.org/wiki/James_Uthmeier',
                    date: '2026-08-25'
                  }
              },
              {
                type: 'allegation',
                claim: 'During the 2025 legislative session, $10 million from a Centene Corp. Medicaid settlement was directed to the Hope Florida Foundation (a charity affiliated with First Lady Casey DeSantis), which then funneled a combined $8.5 million through two nonprofits to "Keep Florida Clean," a political committee Uthmeier chaired that opposed the 2024 marijuana legalization amendment. State Rep. Alex Andrade (R) accused Uthmeier and Foundation counsel of "a conspiracy to commit money laundering and wire fraud."',
                response: 'Uthmeier denied wrongdoing, characterizing the $10 million as a voluntary donation from Centene and arguing gifts to a 501(c)(3) were not state funds subject to the same restrictions.',
                detail: 'A criminal investigation was announced May 2025; a Tallahassee grand jury returned a presentment around Feb. 25, 2026, but neither Uthmeier\'s office nor the State Attorney had publicly detailed its contents as of this guide\'s research. No criminal charges against Uthmeier personally have been confirmed.',
                date: '2026-02-25',
                source: {
                    title: 'Wikipedia — James Uthmeier',
                    url: 'https://en.wikipedia.org/wiki/James_Uthmeier',
                    date: '2026-08-25'
                  }
              },
              {
                type: 'fact',
                claim: 'Issued a legal opinion declining to enforce some state laws he deemed unconstitutional, including those establishing the Black Business Loan Program.',
                detail: 'Reported by Yahoo News; this guide could not independently retrieve the underlying legal opinion text.',
                date: '2026-08-25',
                source: {
                    title: 'Yahoo News — "Florida AG James Uthmeier embraces ultimate culture warrior role"',
                    url: 'https://www.yahoo.com/news/politics/articles/florida-ag-james-uthmeier-embraces-211711468.html',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: {
              raised: 1754115.52,
              spent: null,
              asOf: '2026-08-26',
              note: 'Candidate account only, pulled live from the FL DOE database. Separately, his affiliated PAC "Friends of James Uthmeier" raised $9,806,527.85 (also DOE, 2026-08-26) — combined total $11.56 million. Top PAC donors include the Republican Party of Florida ($1.8 million across four checks), First Principles PAC ($325,000), and CDR Enterprises ($250,000 — a firm that separately holds over $537 million in no-bid state contracts).',
              source: {
                  title: 'FL Division of Elections Campaign Finance Database — Candidate Search, Office=Attorney General, 2026',
                  url: 'https://dos.elections.myflorida.com/campaign-finance/contributions/',
                  date: '2026-08-26'
                }
            },
          endorsements: [
              {
                name: 'President Donald Trump — "James Uthmeier is a Strong Conservative Fighter and Prosecutor, and has my Complete and Total Endorsement."',
                source: {
                    title: 'Tampa Bay Times',
                    url: 'https://www.tampabay.com/news/florida-politics/elections/2025/10/08/uthmeier-attorney-general-race-trump-desantis-endorsement/',
                    date: '2025-10-08'
                  }
              },
              {
                name: 'Florida Sheriffs Association (all 67 sheriffs) plus 51 individual sheriffs separately',
                source: {
                    title: 'Florida Politics',
                    url: 'https://floridapolitics.com/archives/810185-he-has-stepped-up-to-the-plate-florida-sheriffs-association-backs-james-uthmeier-for-attorney-general/',
                    date: '2026-01-01'
                  }
              },
              {
                name: 'Republican Party of Florida; Club for Growth PAC',
                source: {
                    title: 'Florida Politics',
                    url: 'https://floridapolitics.com/archives/761780-a-proven-leader-club-for-growth-pac-endorses-james-uthmeir-for-attorney-general/',
                    date: '2026-01-01'
                  }
              }
            ],
          links: {
              'Campaign website': 'https://www.jamesuthmeier.com/'
            }
        },
        {
          id: 'rodriguez_ag',
          name: 'José Javier Rodríguez',
          party: 'D',
          age: 48,
          residence: 'Miami',
          occupation: 'Attorney; former Assistant U.S. Secretary of Labor',
          bio: 'Born in High Point, NC; raised in Miami, son of a Cuban refugee who came via Operation Pedro Pan. Eagle Scout; B.A., Brown University; Peace Corps 2000-2003; J.D., Harvard Law School. Worked as a legal-aid attorney on wage-theft cases. Florida House 2012-2016 (upset win over a veteran incumbent); Florida Senate 2016-2020, sitting on the Judiciary and Appropriations committees. Nominated by President Biden as Assistant Secretary of Labor for Employment and Training in 2021; confirmation was repeatedly delayed before finally passing 50-48 in March 2024, and he served in the role through Jan. 2025.',
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'Lost re-election to his Senate seat in 2020 by just 32 votes after a spoiler "ghost candidate" also named Alex Rodriguez (no relation) drew over 6,000 votes, funded through dark money tied to GOP strategists. Former GOP state Sen. Frank Artiles later admitted orchestrating the scheme, paying the sham candidate $44,708.03, and was arrested.',
                detail: 'One of Florida\'s best-documented "ghost candidate" scandals; Rodríguez now cites it on the campaign trail as personal motivation for an anti-corruption, election-integrity focus. He was the target of the scheme, not a participant.',
                date: '2020-11-01',
                source: {
                    title: 'Wikipedia — José Javier Rodríguez (Florida politician)',
                    url: 'https://en.wikipedia.org/wiki/Jos%C3%A9_Javier_Rodr%C3%ADguez_(Florida_politician)',
                    date: '2026-08-25'
                  }
              },
              {
                type: 'fact',
                claim: 'Campaign centers on "the three C\'s" — crime, costs, and corruption — arguing the AG\'s office under Uthmeier has "gone very far afield" from its proper mission.',
                quote: 'the attorney general is like the governor\'s personal lawyer... a press secretary for the governor.',
                date: '2026-03-31',
                source: {
                    title: 'WUSF — "Florida attorney general candidate José Javier Rodríguez on \'fighting for the little guy\' and more"',
                    url: 'https://www.wusf.org/politics-issues/2026-03-31/florida-matters-florida-attorney-general-candidate-jose-javier-rodriguez-talks-priorities',
                    date: '2026-03-31'
                  }
              },
              {
                type: 'fact',
                claim: 'Emphasizes consumer protection on utilities and insurance, criticizing FPL rate proposals, plus pledges on fentanyl distribution, opioid-manufacturer accountability, and defending voting rights.',
                date: '2026-03-31',
                source: {
                    title: 'WUSF — "Florida attorney general candidate José Javier Rodríguez on \'fighting for the little guy\' and more"',
                    url: 'https://www.wusf.org/politics-issues/2026-03-31/florida-matters-florida-attorney-general-candidate-jose-javier-rodriguez-talks-priorities',
                    date: '2026-03-31'
                  }
              },
              {
                type: 'fact',
                claim: 'No independent controversies, ethics complaints, or negative record items were found for Rodríguez himself in this guide\'s research — searched specifically. This is a genuine asymmetry with Uthmeier\'s record (Hope Florida, the federal contempt finding), not a research shortfall unique to one candidate.',
                date: '2026-08-26',
                source: {
                    title: 'Wikipedia — José Javier Rodríguez (Florida politician)',
                    url: 'https://en.wikipedia.org/wiki/Jos%C3%A9_Javier_Rodr%C3%ADguez_(Florida_politician)',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: {
              raised: 1101843.38,
              spent: null,
              asOf: '2026-08-26',
              note: 'Candidate account, pulled live from the FL DOE database. He has no affiliated PAC — a DOE committee search for his name returned zero results — and is enrolled in Florida\'s public matching-funds program, which caps individual contributions at $3,000. Confirmed matching-fund disbursements: $240,896.70 and $18,274.68.',
              source: {
                  title: 'FL Division of Elections Campaign Finance Database — Candidate Search, Office=Attorney General, 2026',
                  url: 'https://dos.elections.myflorida.com/campaign-finance/contributions/',
                  date: '2026-08-26'
                }
            },
          endorsements: [
              {
                name: 'Florida AFL-CIO (unanimous COPE vote — its first "Labor 2026" endorsement); SEIU Florida',
                source: {
                    title: 'Florida Politics',
                    url: 'https://floridapolitics.com/archives/798721-florida-afl-cio-endorses-principled-jose-javier-rodriguez-for-attorney-general/',
                    date: '2026-01-01'
                  }
              },
              {
                name: 'Steven Leskovich — the Republican primary withdrawee — endorsed Rodríguez rather than Uthmeier, a cross-party endorsement',
                source: {
                    title: 'Yoursun.com/Port Charlotte News',
                    url: 'https://www.yoursun.com/charlotte/news/leskovich-pulls-out-of-state-ag-race-endorses-democrat-candidate/article_f514d561-61f1-45e1-8b9b-b178e8cc42e6.html',
                    date: '2026-01-01'
                  }
              },
              {
                name: 'U.S. Rep. Maxwell Frost; former U.S. Sen. Bill Nelson; former FL AG Bob Butterworth (individual endorsements, per aggregated reporting)',
                source: {
                    title: 'The Floridian',
                    url: 'https://floridianpress.com/2026/06/congressman-maxwell-frost-endorses-jose-javier-rodriguez-for-attorney-general/',
                    date: '2026-06-01'
                  }
              }
            ],
          links: {
              'Campaign website': 'https://www.jjr.vote/'
            }
        },
        {
          id: 'leskovich',
          name: 'Steven S. Leskovich',
          party: 'R',
          occupation: 'Interim City Attorney, Punta Gorda; criminal-defense attorney',
          bio: 'A Punta Gorda-based attorney who began as an assistant public defender before moving into private criminal-defense and family-law practice. Announced a primary challenge to Uthmeier but withdrew before the June 12, 2026 qualifying deadline, citing "nefarious guidelines" and "unwritten rules where if you\'re not part of the establishment they will give you no time of day." He then endorsed Democrat José Javier Rodríguez rather than Uthmeier — a notable cross-party move. Never appeared on the primary ballot, so no primary vote total exists for him.',
          primary: {
              result: 'withdrew',
              source: {
                  title: 'Yoursun.com/Port Charlotte News — "Leskovich pulls out of state AG race, endorses Democrat candidate"',
                  url: 'https://www.yoursun.com/charlotte/news/leskovich-pulls-out-of-state-ag-race-endorses-democrat-candidate/article_f514d561-61f1-45e1-8b9b-b178e8cc42e6.html',
                  date: '2026-01-01'
                }
            },
          positions: {

            },
          record: [],
          finance: {
              raised: 123103.31,
              spent: null,
              asOf: '2026-08-26',
              note: 'Candidate account, pulled live from the FL DOE database.',
              source: {
                  title: 'FL Division of Elections Campaign Finance Database — Candidate Search, Office=Attorney General, 2026',
                  url: 'https://dos.elections.myflorida.com/campaign-finance/contributions/',
                  date: '2026-08-26'
                }
            },
          endorsements: [],
          links: {

            }
        },
        {
          id: 'lewis_ag',
          name: 'Jim Lewis',
          party: 'D',
          occupation: 'Criminal-defense attorney, Fort Lauderdale',
          bio: 'An extensively documented perennial candidate who has run roughly ten prior campaigns for local, state, and judicial office — including twice before for Attorney General (2022, where he placed third with 27% in a three-way Democratic primary). Career included work as an Assistant State Attorney and Special Prosecutor to the Statewide Grand Jury under then-Gov. Bob Graham. For 2026, the Florida Division of Elections ruled he did not legally qualify for the ballot by the June 12, 2026 deadline over a paperwork issue, which he attributed to the Department of State. Never appeared on the primary ballot.',
          primary: {
              result: 'disqualified',
              source: {
                  title: 'Yahoo News — "Jim Lewis won\'t be on 2026 ballot. Perennial candidate blames Florida election paperwork issue"',
                  url: 'https://www.yahoo.com/news/politics/articles/jim-lewis-won-t-2026-213500037.html',
                  date: '2026-01-01'
                }
            },
          positions: {

            },
          record: [],
          finance: {
              raised: 14600.0,
              spent: null,
              asOf: '2026-08-26',
              note: 'Candidate account, pulled live from the FL DOE database.',
              source: {
                  title: 'FL Division of Elections Campaign Finance Database — Candidate Search, Office=Attorney General, 2026',
                  url: 'https://dos.elections.myflorida.com/campaign-finance/contributions/',
                  date: '2026-08-26'
                }
            },
          endorsements: [],
          links: {

            }
        }
      ]
  }
,
    {
    id: 'fl-cfo',
    office: 'Florida Chief Financial Officer',
    district: 'Statewide',
    type: 'partisan',
    ballot: 'general',
    term: '4 years',
    stakes: 'One of three statewide-elected Florida Cabinet members alongside the Governor and Attorney General. The CFO heads the Department of Financial Services: regulates insurance solvency and agent licensing, houses the State Fire Marshal, runs the State Treasury, investigates insurance and workers\'-comp fraud, and serves as the state\'s chief accounting officer auditing state contracts. Directly relevant to Florida\'s property-insurance affordability crisis. Incumbent Blaise Ingoglia was appointed by Gov. DeSantis in July 2025 — notably passing over Sen. Joe Gruters, whom President Trump had already endorsed for the seat, a move covered as DeSantis "snubbing" Trump\'s pick.',
    whoVotes: 'Statewide. Registered Republicans and Democrats each had a contested primary on August 18. Every voter chooses between the two nominees on November 3 — no third-party or write-in candidates were identified for this race.',
    primaryResult: {
        status: 'advanced',
        summary: 'Incumbent Blaise Ingoglia won the Republican primary over Frank Collige, roughly 61% to 39% (968,183 to 610,837 votes). Former state Sen. Annette Taddeo won the Democratic primary over Earle Ford, roughly 66% to 34% (796,647 to 416,960 votes). Results are the best available unofficial figures (99% of precincts reporting per News4Jax); formal certification was not independently confirmed as of this guide\'s research. Ingoglia and Taddeo advance to the Nov 3 general election ballot.',
        source: {
            title: 'News4Jax — "Vote 2026: Primary election results for Florida\'s chief financial officer, agriculture commissioner" (99% precincts reporting, unofficial)',
            url: 'https://www.news4jax.com/vote-2026/2026/08/17/vote-2026-primary-election-results-for-floridas-chief-financial-officer-agriculture-commissioner-on-aug-18-2026/',
            date: '2026-08-18'
          }
      },
    candidates: [
        {
          id: 'ingoglia',
          name: 'Blaise Ingoglia',
          party: 'R',
          incumbent: true,
          age: 55,
          residence: 'Spring Hill',
          occupation: 'Chief Financial Officer of Florida (appointed July 2025); homebuilder',
          bio: 'Born in Queens, NYC; attended Queens College and Brooklyn College without completing a degree. Relocated to Spring Hill, FL in 1996 and founded two companies, America One Mortgage and homebuilder Hartland Homes (reported net worth $28.3 million as of a 2022 disclosure). Entered politics in 2008; chaired the Hernando County GOP, then the Republican Party of Florida (2015-2019). Florida House 2014-2022, Florida Senate 2022-2025. Appointed CFO by Gov. DeSantis in July 2025, succeeding Jimmy Patronis — bypassing Trump-endorsed state Sen. Joe Gruters for the post.',
          positions: {
              insurance: {
                stance: 'stronger-regulation-oversight',
                  summary: 'Names pushing down property-insurance rates as a top-3 priority (with property-tax relief and government-efficiency/waste reduction), framing his fraud-enforcement record as accountability without "protecting the profits of insurance companies."',
                  quote: 'I am not here to protect the profits of insurance companies... What I am here to do is protect you, the policyholders.',
                  source: {
                      title: 'ClickOrlando 2026 Voter\'s Guide, Republican primary',
                      url: 'https://www.clickorlando.com/voters-guide/2026/07/31/2026-voters-guide-florida-chief-financial-officer-race-republican-primary/',
                      date: '2026-07-31'
                    }
                }
            },
          record: [
              {
                type: 'fact',
                claim: 'As a state senator, filed SB 1248 in Feb. 2023 (the "Ultimate Cancel Act"), which would have canceled the registration of any political party that "historically supported slavery or involuntary servitude" — aimed at the Florida Democratic Party. Called it satire of "cancel culture." The bill did not advance.',
                date: '2023-02-01',
                source: {
                    title: 'Wikipedia — Blaise Ingoglia',
                    url: 'https://en.wikipedia.org/wiki/Blaise_Ingoglia',
                    date: '2026-08-25'
                  }
              },
              {
                type: 'fact',
                claim: 'As CFO, touts his office\'s fraud-enforcement record: 1,219 arrests and $38 million in restitution since his July 2025 appointment, per his office\'s own figures.',
                date: '2026-08-25',
                source: {
                    title: 'CBS12 — "Florida CFO Ingoglia touts 1,219 financial fraud arrests"',
                    url: 'https://cbs12.com/news/local/florida-cfo-blaise-ingoglia-touts-1219-financial-fraud-arrests-defends-end-of-haitian-tps-temporary-protected-status-immigration-enforcement-illegal-workforce-crime-news',
                    date: '2026-08-25'
                  }
              },
              {
                type: 'allegation',
                claim: 'A Largo resident mailed Ingoglia\'s office a postcard reading "You lack values" in fall 2025. Within four minutes, a DFS colonel requested a "threat assessment," and two armed DFS agents subsequently visited the resident\'s home in October 2025.',
                response: 'The recorded encounter shows agents reassuring the resident he "wasn\'t in trouble," finding "No credible threat." Ingoglia defended the response, saying outspoken officials are unfortunately targets, while acknowledging offices "should always be better safe than sorry, but at the same time also protect free speech."',
                detail: 'After the story became public, 341 additional people reportedly mailed similar postcards to Ingoglia in protest.',
                date: '2026-07-15',
                source: {
                    title: 'Bay News 9 — "Why Blaise Ingoglia\'s office sent agents to a Largo home"',
                    url: 'https://baynews9.com/fl/tampa/news/2026/07/15/armed-agents-largo-home-protest',
                    date: '2026-07-15'
                  }
              },
              {
                type: 'allegation',
                claim: 'A Florida Bulldog investigation found 200 DFS purchase orders over $500,000 each — together worth more than $342 million — lacking transparency documentation required by the Transparency Florida Act. The investigation also noted CDR Enterprises, a firm with over $537 million in no-bid state contracts, donated $100,000 to Ingoglia\'s political committee.',
                response: 'A DFS spokeswoman argued one such flagged item was "different from a contract" — a purchase order not subject to the same disclosure rule.',
                detail: 'The donor/contract pairing is presented by the investigation as an appearance-of-conflict, not an adjudicated finding of wrongdoing.',
                date: '2026-03-08',
                source: {
                    title: 'Florida Bulldog — "CFO Ingoglia talks transparency; $342 million in contracts hidden"',
                    url: 'https://www.floridabulldog.org/2026/03/florida-cfo-ingoglia-talks-transparency-accountability-fails-deliver-342-million-contracts-hidden/',
                    date: '2026-03-08'
                  }
              },
              {
                type: 'fact',
                claim: 'No public Trump endorsement of Ingoglia for the 2026 CFO race was found despite specific searching — notable given Trump had originally backed Joe Gruters (who withdrew) for this same seat.',
                date: '2026-08-25',
                source: {
                    title: 'Wikipedia — Blaise Ingoglia',
                    url: 'https://en.wikipedia.org/wiki/Blaise_Ingoglia',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: {
              raised: 6500000,
              spent: null,
              asOf: '2026-07-01',
              note: 'Combined campaign account + "Friends of Blaise Ingoglia" PAC + a largely dormant second PAC. A direct FL DOE database pull could not be completed (the legacy query tool resisted automated submission); figures are secondary-sourced to reporting that itself cites DOE records. Notable PAC donors: U.S. Sugar ($50,000), CDR Enterprises ($100,000), Florida League of Credit Unions ($50,000).',
              source: {
                  title: 'Florida Politics — "Qualified for ballot, Blaise Ingoglia carries more than $6M into first CFO campaign"',
                  url: 'https://floridapolitics.com/archives/801365-blaise-ingoglia-qualifies-6m/',
                  date: '2026-07-01'
                }
            },
          endorsements: [
              {
                name: 'Gov. Ron DeSantis; Republican Party of Florida; Florida Chamber of Commerce; Gun Owners of America',
                source: {
                    title: 'Ingoglia campaign site, Endorsements',
                    url: 'https://blaiseforflorida.com/endorsements/',
                    date: '2026-08-01'
                  }
              },
              {
                name: 'U.S. Sen. Ashley Moody — "leading the charge to make Florida affordable"',
                source: {
                    title: 'Florida Politics',
                    url: 'https://floridapolitics.com/archives/809714-leading-the-charge-to-make-florida-affordable-ashley-moody-backs-blaise-ingoglia-for-cfo/',
                    date: '2026-01-01'
                  }
              }
            ],
          links: {
              'Campaign website': 'https://blaiseforflorida.com/'
            }
        },
        {
          id: 'taddeo',
          name: 'Annette Taddeo',
          party: 'D',
          age: 59,
          residence: 'Miami',
          occupation: 'Small-business owner (LanguageSpeak translation company); former state senator',
          bio: 'Born in Barrancabermeja, Colombia; moved to Huntsville, Alabama at 17, then to Miami, where she founded a translation business in 1995. A small-business owner who says she\'s personally paid Florida insurance premiums for over 30 years. Florida Senate 2017-2022 (won a 2017 special election, re-elected 2018), serving five years on the Banking and Insurance Committee — the committee most directly relevant to the CFO\'s insurance portfolio. Recruited into this race by Ruth\'s List Florida. Has run for office roughly ten times since 2008, including a 2014 run as Charlie Crist\'s Lt. Governor pick and a 2022 U.S. House bid she lost to Rep. María Elvira Salazar.',
          positions: {
              insurance: {
                stance: 'stronger-regulation-oversight',
                  summary: 'Makes property-insurance oversight the explicit centerpiece of her campaign, arguing Tallahassee has for decades prioritized insurers over homeowners; wants insurers to justify rate hikes and faster, fairer claims handling.',
                  quote: 'we have had now for decades in Tallahassee, the elected [officials] doing the bidding for the insurance companies... We have not had somebody that\'s truly going to be there to look out for the homeowners.',
                  source: {
                      title: 'CBS News Miami — "Annette Taddeo says she\'s running for Florida CFO to hold insurance companies accountable"',
                      url: 'https://www.cbsnews.com/miami/news/annette-taddeo-florida-cfo-race-insurance-oversight-homeowners/',
                      date: '2026-06-14'
                    }
                }
            },
          record: [
              {
                type: 'fact',
                claim: 'During her 2022 U.S. House run, an opponent\'s attack ad accused her of associating with Democratic socialists at a community forum; Taddeo and Black faith leaders publicly rebuked the ad, and a Miami New Times report found the underlying forum had actually focused on expanding health-care access.',
                detail: 'Included for completeness/balance — this was an attack made against her that was substantively rebutted, not a substantiated finding against her. No other ethics or personal-conduct controversies were found in this guide\'s research.',
                date: '2022-01-01',
                source: {
                    title: 'Wikipedia — Annette Taddeo',
                    url: 'https://en.wikipedia.org/wiki/Annette_Taddeo',
                    date: '2026-08-25'
                  }
              },
              {
                type: 'fact',
                claim: 'Directly criticizes Ingoglia\'s tenure, saying the CFO office has become "a lap dog for the governor" rather than "the watchdog for Floridians."',
                date: '2026-07-24',
                source: {
                    title: 'WLRN — "Democrats Annette Taddeo and Earle Ford compete to face CFO Blaise Ingoglia in November"',
                    url: 'https://www.wlrn.org/2026-07-24/democrats-annette-taddeo-and-earle-ford-compete-to-face-cfo-blaise-ingoglia-in-november',
                    date: '2026-07-24'
                  }
              },
              {
                type: 'fact',
                claim: 'Criticizes Ingoglia\'s auditing focus on local governments while citing the roughly $1.2 billion "Alligator Alcatraz" facility and $92 million-plus in state payments to a portable-toilet vendor as examples of state-level spending she says warrants scrutiny.',
                date: '2026-07-24',
                source: {
                    title: 'WLRN — "Democrats Annette Taddeo and Earle Ford compete to face CFO Blaise Ingoglia in November"',
                    url: 'https://www.wlrn.org/2026-07-24/democrats-annette-taddeo-and-earle-ford-compete-to-face-cfo-blaise-ingoglia-in-november',
                    date: '2026-07-24'
                  }
              },
              {
                type: 'fact',
                claim: 'Has run for office roughly ten times since 2008, winning some legislative and special-election races but losing several bids for higher office (U.S. House three times, Lt. Governor once, state party chair once, county clerk once).',
                detail: 'A matter of public record documented for a full picture of her political history, not a finding against her.',
                date: '2026-08-25',
                source: {
                    title: 'Wikipedia — Annette Taddeo',
                    url: 'https://en.wikipedia.org/wiki/Annette_Taddeo',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: {
              raised: 52000,
              spent: null,
              asOf: '2026-07-27',
              note: '$45,959 in outside contributions from 192 donors plus a $6,000 personal loan and $374 in-kind, 85% from Florida-based donors. Over 100 times smaller than Ingoglia\'s combined war chest.',
              source: {
                  title: 'WMNF — "Get to know the 2026 Florida candidates for Agriculture Commissioner and Chief Financial Officer," compiled from FL DOE records',
                  url: 'https://www.wmnf.org/2026-florida-candidates-agriculture-commissioner-chief-financial-officer/',
                  date: '2026-07-27'
                }
            },
          endorsements: [
              {
                name: 'Florida AFL-CIO and multiple constituent unions (AFSCME-FL, CWA-FL, SEIU Florida, SEIU Local 1991, Teamsters)',
                source: {
                    title: 'Florida Politics',
                    url: 'https://floridapolitics.com/archives/812596-she-has-consistently-stood-with-the-people-florida-afl-cio-backs-annette-taddeo-for-cfo/',
                    date: '2026-01-01'
                  }
              },
              {
                name: 'Equality Florida Action PAC, citing her record "defending the LGBTQ+ community"',
                source: {
                    title: 'Florida Politics',
                    url: 'https://floridapolitics.com/archives/813902-a-fearless-voice-equality-florida-backs-annette-taddeo-for-cfo/',
                    date: '2026-01-01'
                  }
              },
              {
                name: 'Miami-Dade Mayor Daniella Levine Cava; Orange County Mayor Jerry Demings; Miami Times editorial board',
                source: {
                    title: 'Florida Politics',
                    url: 'https://floridapolitics.com/archives/807786-daniella-levine-cava-jerry-demings-endorse-annette-taddeo-for-cfo/',
                    date: '2026-01-01'
                  }
              }
            ],
          links: {

            }
        },
        {
          id: 'collige',
          name: 'Frank W. Collige',
          party: 'R',
          occupation: 'Founder, Property Pros Consulting (public-adjusting firm)',
          bio: 'Born in Michigan; U.S. Air Force veteran (1999-2010). Founded a public-adjusting firm representing policyholders in insurance claims across eight states, handling over 1,000 claims annually. This was his first run for statewide office.',
          primary: {
              result: 'lost',
              votes: 610837,
              pct: 39,
              source: {
                  title: 'News4Jax — "Vote 2026: Primary election results for Florida\'s chief financial officer, agriculture commissioner" (99% precincts reporting, unofficial)',
                  url: 'https://www.news4jax.com/vote-2026/2026/08/17/vote-2026-primary-election-results-for-floridas-chief-financial-officer-agriculture-commissioner-on-aug-18-2026/',
                  date: '2026-08-18'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'Ran on stronger financial oversight of insurers, greater rate-filing transparency, and treating fraud symmetrically.',
                quote: 'Fraud is fraud, whether it is committed against an insurance company or by one.',
                date: '2026-07-31',
                source: {
                    title: 'ClickOrlando 2026 Voter\'s Guide, Republican primary',
                    url: 'https://www.clickorlando.com/voters-guide/2026/07/31/2026-voters-guide-florida-chief-financial-officer-race-republican-primary/',
                    date: '2026-07-31'
                  }
              }
            ],
          finance: {
              raised: 15970,
              spent: null,
              asOf: '2026-07-03',
              note: 'From 31 donors — a small fraction of Ingoglia\'s resources.',
              source: {
                  title: 'Florida Politics fundraising coverage',
                  url: 'https://floridapolitics.com/archives/803141-ingoglia-cfo-fundraising/',
                  date: '2026-07-01'
                }
            },
          endorsements: [],
          links: {

            }
        },
        {
          id: 'ford_cfo',
          name: 'Earle Ford',
          party: 'D',
          age: 40,
          occupation: 'Attorney; former IRS estate/gift-tax attorney',
          bio: 'Born on a U.S. Air Force base, raised in small-town Wyoming; moved to Florida in 2015. U.S. Army veteran (Airborne Infantry, 3 years); J.D., Barry University. Served as an Assistant State Attorney in Orange/Osceola counties, then as a federal IRS attorney auditing trusts and estates exceeding $100 million (2021-2025). Originally entered the 2026 cycle as a candidate for a U.S. House seat, then withdrew about two weeks before the June 12 qualifying deadline to run for CFO instead. Describes himself as a "non-career politician," father of two.',
          primary: {
              result: 'lost',
              votes: 416960,
              pct: 34,
              source: {
                  title: 'News4Jax — "Vote 2026: Primary election results for Florida\'s chief financial officer, agriculture commissioner" (99% precincts reporting, unofficial)',
                  url: 'https://www.news4jax.com/vote-2026/2026/08/17/vote-2026-primary-election-results-for-floridas-chief-financial-officer-agriculture-commissioner-on-aug-18-2026/',
                  date: '2026-08-18'
                }
            },
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'Campaigned on forcing insurers to open their books before rate hikes, investigating bad-faith claim denials, and combating what he called algorithmic-bias-driven "modern redlining" in lending.',
                quote: 'Florida\'s property insurance market is broken because Tallahassee has consistently allowed the insurance lobby to write the rules.',
                date: '2026-07-24',
                source: {
                    title: 'WLRN — "Democrats Annette Taddeo and Earle Ford compete to face CFO Blaise Ingoglia in November"',
                    url: 'https://www.wlrn.org/2026-07-24/democrats-annette-taddeo-and-earle-ford-compete-to-face-cfo-blaise-ingoglia-in-november',
                    date: '2026-07-24'
                  }
              },
              {
                type: 'fact',
                claim: 'Called Ingoglia\'s property-tax-relief push "a distraction" designed to "unify power in Tallahassee."',
                date: '2026-07-24',
                source: {
                    title: 'WLRN — "Democrats Annette Taddeo and Earle Ford compete to face CFO Blaise Ingoglia in November"',
                    url: 'https://www.wlrn.org/2026-07-24/democrats-annette-taddeo-and-earle-ford-compete-to-face-cfo-blaise-ingoglia-in-november',
                    date: '2026-07-24'
                  }
              }
            ],
          finance: {
              raised: 13744,
              spent: null,
              asOf: '2026-07-03',
              note: '$8,000 of the total came from self-loans. Separately raised roughly $600,000 for his earlier, abandoned congressional bid — that money does not carry over to this race.',
              source: {
                  title: 'Yahoo News — "2026 Florida primary voter guide to chief financial officer candidates"',
                  url: 'https://www.yahoo.com/news/politics/articles/2026-florida-primary-voter-guide-090350188.html',
                  date: '2026-07-01'
                }
            },
          endorsements: [],
          links: {

            }
        }
      ]
  }
,
    {
    id: 'fellsmere-council',
    office: 'Fellsmere City Council',
    district: 'At-large',
    type: 'nonpartisan',
    ballot: 'general',
    term: '2 years',
    stakes: 'Added Aug 26, 2026 — this guide originally missed this race entirely. ONLY relevant if you live within Fellsmere city limits. Three seats are up, decided in a single nonpartisan "vote for 3" election on November 3, 2026, the same day as the county and state general election. Four candidates qualified.',
    whoVotes: 'Only registered voters residing within Fellsmere city limits, on the November 3, 2026 general election ballot. Vote for up to three; the top three finishers win the three open seats.',
    candidates: [
        {
          id: 'herrera_fellsmere',
          name: 'Fernando Herrera',
          party: 'NONPARTISAN',
          occupation: 'Not yet documented by this guide',
          bio: 'Added Aug 26, 2026 after this guide discovered it had missed the entire Fellsmere City Council race in earlier passes. Qualified for the ballot on 8/4/2026, confirmed via the city\'s own election page. This guide has not yet researched this candidate\'s background, occupation, or platform.',
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide has not yet completed research on this candidate beyond confirming their name and qualifying date on the City of Fellsmere\'s official candidate list.',
                date: '2026-08-26',
                source: {
                    title: 'City of Fellsmere — Election Information',
                    url: 'https://www.cityoffellsmere.org/city-clerk/page/election-information',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'murillo_fellsmere',
          name: 'Javi Murillo',
          party: 'NONPARTISAN',
          occupation: 'Not yet documented by this guide',
          bio: 'Added Aug 26, 2026 after this guide discovered it had missed the entire Fellsmere City Council race in earlier passes. Qualified for the ballot on 8/12/2026, confirmed via the city\'s own election page. This guide has not yet researched this candidate\'s background, occupation, or platform.',
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide has not yet completed research on this candidate beyond confirming their name and qualifying date on the City of Fellsmere\'s official candidate list.',
                date: '2026-08-26',
                source: {
                    title: 'City of Fellsmere — Election Information',
                    url: 'https://www.cityoffellsmere.org/city-clerk/page/election-information',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'macias_fellsmere',
          name: 'Shayla Macias',
          party: 'NONPARTISAN',
          occupation: 'Not yet documented by this guide',
          bio: 'Added Aug 26, 2026 after this guide discovered it had missed the entire Fellsmere City Council race in earlier passes. Qualified for the ballot on 8/12/2026, confirmed via the city\'s own election page. This guide has not yet researched this candidate\'s background, occupation, or platform.',
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide has not yet completed research on this candidate beyond confirming their name and qualifying date on the City of Fellsmere\'s official candidate list.',
                date: '2026-08-26',
                source: {
                    title: 'City of Fellsmere — Election Information',
                    url: 'https://www.cityoffellsmere.org/city-clerk/page/election-information',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        },
        {
          id: 'zamarripa_fellsmere',
          name: 'Jose M. Zamarripa',
          party: 'NONPARTISAN',
          occupation: 'Not yet documented by this guide',
          bio: 'Added Aug 26, 2026 after this guide discovered it had missed the entire Fellsmere City Council race in earlier passes. Qualified for the ballot on 8/13/2026, confirmed via the city\'s own election page. This guide has not yet researched this candidate\'s background, occupation, or platform.',
          positions: {

            },
          record: [
              {
                type: 'fact',
                claim: 'This guide has not yet completed research on this candidate beyond confirming their name and qualifying date on the City of Fellsmere\'s official candidate list.',
                date: '2026-08-26',
                source: {
                    title: 'City of Fellsmere — Election Information',
                    url: 'https://www.cityoffellsmere.org/city-clerk/page/election-information',
                    date: '2026-08-25'
                  }
              }
            ],
          finance: null,
          endorsements: [],
          links: {

            }
        }
      ]
  }

  ]
};
