import { ConversationFlows } from './types';

export const conversationFlows: ConversationFlows = {
  'Fix My Ads': {
    userMessage: "Why aren't my ads delivering?",
    steps: [
      {
        botMessage: "I'll help you diagnose delivery issues. Which campaign should I check?",
        campaigns: [
          { id: 'b2ccaa57-fa54-57bd-b402-ffd53a47ce74', name: 'Sponsored Listing - Taco Bell 05/09', status: 'Active', performance: 'ROAS: 18.87 • 162 orders' },
          { id: 'dca53d26-b9d7-4b17-8438-87a78bcfc11a', name: 'Sponsored Search - Tacos', status: 'Paused', performance: '0 impressions • Not delivering' }
        ]
      },
      {
        botMessage: "I found the delivery issues:\n\n❌ Status: PAUSED (ads won't serve)\n❌ Budget: $18/week (below minimum recommended $150/week)\n❌ Bid: May be too low to win auctions\n❌ Last active: 2021\n\nDiagnostic summary:",
        dataTable: [
          { label: 'Status', value: '❌ PAUSED' },
          { label: 'Impressions (7 days)', value: '0' },
          { label: 'Weekly Budget', value: '$18 (⚠️ Below $150 minimum)' },
          { label: 'Bid Strategy', value: 'Auto-Bidding' },
          { label: 'Audience', value: 'All Customers' },
          { label: 'Issue', value: 'Not serving due to PAUSED status' }
        ]
      },
      {
        botMessage: "What would you like me to fix?",
        options: ['Fix all issues automatically', 'Reactivate & increase budget', 'Just reactivate (keep settings)', 'Update bid strategy', 'Delete campaign']
      },
      {
        botMessage: "I'll reactivate and optimize for delivery. Let's set a competitive budget.\n\n💡 Recommendation: $252/week based on your active campaign's performance\n📊 Industry benchmark: $150-300/week for restaurants\n\nSelect weekly budget:",
        options: ['$150/week ($21/day) - Minimum recommended', '$210/week ($30/day)', '$252/week ($36/day) - Recommended', '$350/week ($50/day)', 'Custom amount']
      },
      {
        botMessage: "Great! Budget set to $252/week.\n\n🎯 Now let's optimize the bid strategy for better auction performance:\n\nCurrent: Auto-Bidding\n\nWhich bidding approach?",
        options: ['Auto-Bidding (Recommended) - Let Uber optimize', 'Manual CPC - Set max cost per click', 'Maximize ROAS - Optimize for return', 'Maximize Reach - Get more impressions']
      },
      {
        botMessage: "Perfect! Auto-Bidding selected - Uber will optimize your bids automatically.\n\n📅 Schedule update:\n\nCurrent: 09/17/2021 - Ongoing\nTimezone: America/New_York\n\nUpdate start date?",
        options: ['Start today (recommended)', 'Start next Monday (budget reset day)', 'Keep original date', 'Custom date']
      },
      {
        botMessage: "Excellent! Here's what I'm updating:",
        successMessage: "Campaign reactivated and optimized",
        dataTable: [
          { label: 'Status', value: 'ACTIVE (was PAUSED)' },
          { label: 'Weekly Budget', value: '$252/week (was $18/week)' },
          { label: 'Bid Strategy', value: 'Auto-Bidding (optimized)' },
          { label: 'Schedule', value: 'Starting today - Ongoing' },
          { label: 'Approval Time', value: '24-48 hours for review' },
          { label: 'Attribution Window', value: '7-day click attribution' }
        ]
      },
      {
        botMessage: "🎉 Campaign will go live within 24-48 hours after Uber's ad review.\n\nExpected performance (based on your other campaign):\n\n• Impressions: ~12,000/week\n• CTR: 3-4% (above 2% benchmark)\n• Orders: ~150-170/week\n• ROAS: 16-19x\n• Ad Sales: ~$3,800-4,200/week\n\nWould you like me to set up performance monitoring?",
        options: ['Yes, enable alerts', 'Set custom thresholds', 'No thanks', 'Explain metrics']
      },
      {
        botMessage: "Monitoring enabled! You'll receive alerts when:\n\n✓ Campaign goes live (post-review)\n✓ First impressions served\n✓ ROAS drops below 10x\n✓ CTR falls below 2% (benchmark)\n✓ Weekly budget hits 80%\n✓ Conversion rate changes ±15%\n\n📊 Billing: Charged weekly via earnings deduction or card.\n\nWhat else can I help with?",
        options: ['View all campaigns', 'Optimize active campaign', 'Create new campaign', 'Done']
      }
    ],
    completionMessage: "All set! Your campaign will be reviewed and go live in 24-48 hours. I'll monitor performance and alert you to any issues."
  },
  
  'Edit Campaign': {
    userMessage: "I want to edit my campaign",
    steps: [
      {
        botMessage: "I can help you edit campaign settings. Which campaign would you like to modify?",
        campaigns: [
          { id: 'b2ccaa57-fa54-57bd-b402-ffd53a47ce74', name: 'Sponsored Listing - Taco Bell 05/09', status: 'Active', budget: '$252/week', performance: '$4,071 GMV • ROAS 18.87' },
          { id: 'dca53d26-b9d7-4b17-8438-87a78bcfc11a', name: 'Sponsored Search - Tacos', status: 'Paused', budget: '$18/week', performance: '0 impressions' }
        ]
      },
      {
        botMessage: "Here are the current campaign settings:",
        dataTable: [
          { label: 'Campaign Type', value: 'Sponsored Listing' },
          { label: 'Store', value: 'Taco Bell (1359 Broadway)' },
          { label: 'Status', value: 'ACTIVE' },
          { label: 'Weekly Budget', value: '$252 (resets Monday 12 AM)' },
          { label: 'Bid Strategy', value: 'Auto-Bidding' },
          { label: 'Audience Target', value: 'All Customers' },
          { label: 'Schedule', value: '05/09/2025 - Ongoing' },
          { label: 'Timezone', value: 'America/New_York' }
        ]
      },
      {
        botMessage: "What would you like to edit?",
        options: ['Change budget', 'Edit targeting (audience)', 'Update bid strategy', 'Edit schedule/dayparting', 'Change campaign name', 'Pause campaign', 'View performance metrics']
      },
      {
        botMessage: "Let's update the budget. Your campaign is performing excellently:\n\n📊 Current Performance:\n• ROAS: 18.87x (every $1 → $18.87 sales)\n• Weekly GMV: $4,071\n• Weekly Spend: ~$216\n• Orders: 162\n• CTR: ~3.5% (above 2-4% benchmark)\n• Conversion Rate: 50% (well above 10-20% benchmark)\n\nCurrent weekly budget: $252\n\nSelect new weekly budget:",
        options: ['$150/week ($21/day)', '$210/week ($30/day)', '$252/week (current)', '$350/week ($50/day)', '$500/week ($71/day)', 'Custom amount']
      },
      {
        botMessage: "Excellent! Increasing to $350/week.\n\n📈 Projected Performance:\n• New weekly budget: $350\n• Est. weekly spend: $299\n• Est. GMV: $5,650 (+38.8%)\n• Est. orders: 225 (+39%)\n• Expected ROAS: ~18.9x (maintain)\n• CTR: 3.5% (maintain)\n• CVR: 50% (maintain)\n\n⏰ Budget resets: Every Monday 12 AM EST\n\nConfirm changes?",
        options: ['Confirm & save', 'Also adjust bid strategy', 'Cancel changes']
      },
      {
        botMessage: "Perfect! Budget updated successfully.",
        successMessage: "Weekly budget increased to $350",
        dataTable: [
          { label: 'Previous Budget', value: '$252/week' },
          { label: 'New Budget', value: '$350/week (+38.9%)' },
          { label: 'Est. GMV Increase', value: '+$1,579/week' },
          { label: 'Est. Order Increase', value: '+63 orders/week' },
          { label: 'Next Reset', value: 'Monday 12:00 AM EST' },
          { label: 'Effective', value: 'Immediately' }
        ]
      },
      {
        botMessage: "Changes take effect immediately. Your updated budget will allow you to win more auctions and capture additional demand.\n\n💡 Pro Tip: With your exceptional ROAS of 18.87x, you could scale to $500-700/week without risk.\n\nWould you like to make other optimizations?",
        options: ['Optimize audience targeting', 'Add dayparting (time restrictions)', 'View detailed metrics', 'Done']
      },
      {
        botMessage: "Current targeting: All Customers\n\nYou can refine your audience to improve performance:\n\n• **All Customers** - Broadest reach\n• **New Customers** - Never ordered from you (acquisition)\n• **Returning Customers** - Previous buyers (retention)\n• **Lapsed Customers** - Haven't ordered in 42+ days (win-back)\n• **Uber One Members** - Subscribers (higher basket size)\n\nWhich audience would you like to target?",
        options: ['Keep All Customers (current)', 'Switch to New Customers only', 'Switch to Uber One Members', 'Test multiple audiences (split budget)']
      },
      {
        botMessage: "Great! I'll keep 'All Customers' since it's working well.\n\n✅ Your optimized campaign:",
        dataTable: [
          { label: 'Weekly Budget', value: '$350 (optimized)' },
          { label: 'Bid Strategy', value: 'Auto-Bidding' },
          { label: 'Audience', value: 'All Customers' },
          { label: 'Expected Weekly GMV', value: '~$5,650' },
          { label: 'Expected ROAS', value: '~18.9x' },
          { label: 'Performance Rank', value: 'Top 5% of campaigns' }
        ]
      },
      {
        botMessage: "Your campaign is now optimized for maximum growth while maintaining your exceptional ROAS.\n\n🔔 I'll alert you if:\n• ROAS drops below 15x\n• CTR falls below 3%\n• You're hitting budget cap early (indicates more demand)\n\nWhat would you like to do next?",
        options: ['Create another campaign', 'View performance report', 'Export billing data', 'Done']
      }
    ],
    completionMessage: "Campaign updated successfully! Changes are live. I'll continue monitoring performance and alert you to optimization opportunities."
  },

  'Get Insights': {
    userMessage: "Give me performance insights",
    steps: [
      {
        botMessage: "Analyzing your campaign portfolio...\\n\\n📊 Account Overview:",
        dataTable: [
          { label: 'Active Campaigns', value: '1' },
          { label: 'Paused Campaigns', value: '1' },
          { label: 'Total Weekly Budget', value: '$252' },
          { label: 'Weekly Ad Spend', value: '$215.71 (85.6% utilization)' },
          { label: 'Weekly GMV (Ad Sales)', value: '$4,071.25' },
          { label: 'Portfolio ROAS', value: '18.87x' },
          { label: 'Attribution Window', value: '7-day click' }
        ]
      },
      {
        botMessage: "Here's the performance breakdown for your top campaign:",
        performanceCard: {
          title: "Performance Breakdown - 'Sponsored Listing - Taco Bell 05/09':",
          metrics: [
            { label: 'Ad Sales (GMV)', value: '$4,071', change: 'Weekly', isPositive: true },
            { label: 'ROAS', value: '18.87x', change: '4x above avg', isPositive: true },
            { label: 'Orders', value: '162', change: '50% CVR', isPositive: true },
            { label: 'CTR', value: '3.5%', change: 'Above 2-4%', isPositive: true }
          ]
        }
      },
      {
        botMessage: "Additional metrics:",
        dataTable: [
          { label: 'Impressions (7-day)', value: '~12,000' },
          { label: 'Clicks', value: '~420' },
          { label: 'CTR', value: '3.5% (benchmark: 2-4%)' },
          { label: 'CPC (Cost per Click)', value: '$0.51' },
          { label: 'Orders', value: '162' },
          { label: 'Conversion Rate', value: '38.6% (benchmark: 10-20%)' },
          { label: 'CPO (Cost per Order)', value: '$1.33' },
          { label: 'Avg Order Value', value: '$25.13' }
        ]
      },
      {
        botMessage: "🔍 Key Insights & Recommendations:",
        suggestions: [
          {
            title: 'Exceptional ROAS - Scale Immediately',
            description: '18.87x ROAS is 3-4x industry average (5-7x). You have significant room to increase budget without risk.',
            action: 'Scale Budget to $500/week'
          },
          {
            title: 'Outstanding Conversion Rate',
            description: '38.6% of clicks convert to orders vs. 10-20% benchmark. Your menu and pricing are highly competitive.',
            action: 'View Conversion Funnel'
          },
          {
            title: 'Budget Underutilization',
            description: 'Spending $216 of $252 budget (85.6%). You\'re likely missing demand. Increase budget to capture more orders.',
            action: 'Increase Budget Cap'
          },
          {
            title: 'Inactive Campaign Opportunity',
            description: 'Your paused "Sponsored Search - Tacos" could capture high-intent keyword traffic if reactivated with proper budget.',
            action: 'Reactivate & Optimize'
          }
        ]
      },
      {
        botMessage: "📈 Recommended Actions:\n\n**Priority 1:** Scale active campaign to $500/week (expect +$4,000 weekly GMV)\n**Priority 2:** Reactivate paused campaign with $150-210/week budget\n**Priority 3:** Add Sponsored Items campaign for high-margin menu items\n\nWhat would you like to do first?",
        options: ['Scale active campaign budget', 'Reactivate paused campaign', 'Apply all recommendations', 'View detailed attribution report', 'Export performance CSV']
      },
      {
        botMessage: "Perfect! Let's scale your active campaign.\n\nCurrent: $252/week → Recommended: $500/week\n\n📊 Projected Impact:",
        dataTable: [
          { label: 'Current Weekly GMV', value: '$4,071' },
          { label: 'Projected Weekly GMV', value: '$8,090 (+98.5%)' },
          { label: 'Current Orders', value: '162/week' },
          { label: 'Projected Orders', value: '322/week (+98.8%)' },
          { label: 'Current ROAS', value: '18.87x' },
          { label: 'Expected ROAS', value: '18.5-19x (maintain)' },
          { label: 'Additional Weekly Profit', value: '~$3,400 (after ad costs)' }
        ]
      },
      {
        botMessage: "Approve budget increase to $500/week?",
        options: ['Yes, scale to $500/week', 'Try $350/week first', 'Cancel']
      },
      {
        botMessage: "Excellent! Budget scaled to $500/week.",
        successMessage: "Campaign budget increased to $500/week",
        dataTable: [
          { label: 'Previous Budget', value: '$252/week' },
          { label: 'New Budget', value: '$500/week' },
          { label: 'Increase', value: '+98.4%' },
          { label: 'Expected GMV Boost', value: '+$4,019/week' },
          { label: 'Expected Order Boost', value: '+160 orders/week' },
          { label: 'Next Budget Reset', value: 'Monday 12:00 AM EST' }
        ]
      },
      {
        botMessage: "Now for the paused campaign 'Sponsored Search - Tacos'.\n\nThis keyword campaign can capture users searching for 'tacos' - high purchase intent.\n\nRecommended settings:\n• Budget: $210/week\n• Bid Strategy: Auto-Bidding\n• Keywords: Broad match for 'tacos', 'burritos', 'quesadilla'\n• Audience: All Customers\n\nReactivate with these settings?",
        options: ['Yes, reactivate with recommended settings', 'Show me keyword options first', 'Skip this campaign', 'Increase budget to $252/week']
      },
      {
        botMessage: "Perfect! Reactivating 'Sponsored Search - Tacos' with optimized settings.",
        successMessage: "Keyword campaign reactivated",
        dataTable: [
          { label: 'Campaign Type', value: 'Sponsored Search (Keyword)' },
          { label: 'Status', value: 'ACTIVE (pending 24-48h review)' },
          { label: 'Weekly Budget', value: '$210' },
          { label: 'Bid Strategy', value: 'Auto-Bidding' },
          { label: 'Keywords', value: 'Tacos, Burritos, Quesadilla (Broad)' },
          { label: 'Expected Weekly GMV', value: '~$2,800-3,200' },
          { label: 'Expected ROAS', value: '14-16x (keyword campaigns)' }
        ]
      },
      {
        botMessage: "🎉 Portfolio optimized!\n\n**Updated Account Performance:**",
        dataTable: [
          { label: 'Active Campaigns', value: '2 (was 1)' },
          { label: 'Total Weekly Budget', value: '$710 (was $252)' },
          { label: 'Expected Weekly GMV', value: '~$11,000 (was $4,071)' },
          { label: 'Expected Portfolio ROAS', value: '~17.5x' },
          { label: 'Expected Weekly Orders', value: '~440 (was 162)' },
          { label: 'Billing Method', value: 'Weekly earnings deduction' }
        ]
      },
      {
        botMessage: "Your campaigns will deliver results within 24-48 hours after review.\n\n🔔 Monitoring alerts set for:\n• ROAS drops below 12x\n• CTR falls below 2.5%\n• Budget utilization exceeds 95% (scale signal)\n• Keyword campaign approval status\n\nWhat would you like to do next?",
        options: ['View campaign dashboard', 'Set up custom alerts', 'Create Sponsored Items campaign', 'Done']
      }
    ],
    completionMessage: "Insights analysis complete! Your portfolio is optimized for 2.7x growth. I'll monitor performance and alert you to changes."
  },

  'Create Campaign': {
    userMessage: "Create a new ad campaign",
    steps: [
      {
        botMessage: "Let's create a new campaign! I'll guide you through the setup.\n\n🎯 Step 1: Campaign Goal\n\nWhat's your primary objective?",
        options: ['Attract New Customers (Acquisition)', 'Increase Order Volume (Sales)', 'Promote Specific Menu Items', 'Re-engage Lapsed Customers', 'Maximize Visibility (Reach)']
      },
      {
        botMessage: "Great! Goal: Increase Order Volume\n\n📋 Step 2: Campaign Type\n\nChoose the ad format:",
        options: ['Sponsored Listing - Promote entire store (Home, Search, Category)', 'Sponsored Search - Bid on keywords (High-intent capture)', 'Sponsored Items - Promote specific menu items']
      },
      {
        botMessage: "Perfect! Campaign Type: Sponsored Listing\n\n📝 Step 3: Campaign Name\n\nWhat should we call this campaign?",
        options: ['Sponsored Listing - Taco Bell 12/16', 'Holiday Promo - December', 'New Customer Drive Q4', 'Weekend Traffic Boost', 'Custom name']
      },
      {
        botMessage: "Great! Campaign name: 'Sponsored Listing - Taco Bell 12/16'\n\n📍 Step 4: Store Location\n\nWhich store location should run this campaign?",
        options: ['Taco Bell (1359 Broadway, Brooklyn)', 'All Taco Bell locations in my account', 'Different store']
      },
      {
        botMessage: "Perfect! Store: Taco Bell (1359 Broadway)\n\n💰 Step 5: Weekly Budget\n\nBased on your active campaign's ROAS (18.87x), I recommend $252-350/week.\n\n💡 Minimum recommended: $150/week\n📊 Your current campaign: $252/week → $4,071 GMV\n\nSelect weekly budget:",
        options: ['$150/week ($21/day) - Minimum', '$210/week ($30/day)', '$252/week ($36/day) - Recommended', '$350/week ($50/day)', '$500/week ($71/day)', 'Custom amount']
      },
      {
        botMessage: "Excellent! Budget: $252/week\n\n⏰ Budget resets every Monday at 12:00 AM EST.\n\n💡 Step 6: Bid Strategy\n\nHow should we optimize your bids?",
        options: ['Auto-Bidding (Recommended) - Uber optimizes for you', 'Manual CPC - Set max cost per click', 'Maximize ROAS - Optimize for return on ad spend', 'Maximize Reach - Prioritize impressions']
      },
      {
        botMessage: "Great choice! Bid Strategy: Auto-Bidding\n\nUber will automatically adjust bids to maximize order volume within your budget.\n\n📅 Step 7: Schedule\n\nWhen should this campaign run?",
        options: ['Start today - Ongoing (Recommended)', 'Start next Monday (budget reset day)', 'Start today - End in 30 days', 'Custom schedule', 'Add dayparting (specific hours)']
      },
      {
        botMessage: "Perfect! Schedule: Starting today - Ongoing\n\n🕐 Step 8: Timezone\n\nConfirm timezone for scheduling and reporting:",
        options: ['America/New_York (EST/EDT)', 'America/Los_Angeles (PST/PDT)', 'America/Chicago (CST/CDT)', 'America/Denver (MST/MDT)']
      },
      {
        botMessage: "Great! Timezone: America/New_York\n\n🎯 Step 9: Audience Targeting\n\nWho should see your ads?",
        options: ['All Customers - Broadest reach', 'New Customers Only - Never ordered from you', 'Returning Customers - Previous buyers', 'Lapsed Customers - Haven\'t ordered in 42+ days', 'Uber One Members - Subscribers (higher value)']
      },
      {
        botMessage: "Excellent! Audience: All Customers\n\n🖼️ Step 10: Creative (Ad Image)\n\nWhich image should we use?",
        options: ['Use store cover photo (default)', 'Upload custom high-res image', 'Skip - Review later']
      },
      {
        botMessage: "Perfect! Using store cover photo.\n\n📊 Campaign Summary:",
        dataTable: [
          { label: 'Campaign Type', value: 'Sponsored Listing' },
          { label: 'Campaign Name', value: 'Sponsored Listing - Taco Bell 12/16' },
          { label: 'Store', value: 'Taco Bell (1359 Broadway, Brooklyn)' },
          { label: 'Weekly Budget', value: '$252 (resets Monday 12 AM EST)' },
          { label: 'Bid Strategy', value: 'Auto-Bidding' },
          { label: 'Schedule', value: 'Today - Ongoing' },
          { label: 'Timezone', value: 'America/New_York' },
          { label: 'Audience', value: 'All Customers' },
          { label: 'Creative', value: 'Store cover photo' },
          { label: 'Attribution', value: '7-day click window' }
        ]
      },
      {
        botMessage: "📈 Expected Performance (based on your store's data):\n\n• Weekly Impressions: ~11,000-13,000\n• CTR: 3-4% (benchmark: 2-4%)\n• Clicks: ~400-450\n• Orders: 150-170 (CVR: 35-40%)\n• Weekly GMV: $3,800-4,200\n• Expected ROAS: 16-19x\n• CPC: ~$0.50-0.65\n• CPO: ~$1.40-1.60\n\n*Results may vary. Projections based on similar campaigns.\n\nReady to create campaign?",
        options: ['Create campaign & submit for review', 'Edit settings', 'Add negative keywords', 'Cancel']
      },
      {
        botMessage: "🎉 Campaign created successfully!",
        successMessage: "Campaign submitted for review",
        dataTable: [
          { label: 'Status', value: 'Pending Review' },
          { label: 'Review Time', value: '24-48 hours' },
          { label: 'Campaign ID', value: 'Generated upon approval' },
          { label: 'Billing Method', value: 'Weekly earnings deduction' },
          { label: 'First Charge', value: 'Next Monday billing cycle' }
        ]
      },
      {
        botMessage: "Your campaign has been submitted to Uber for review.\n\n📋 Next Steps:\n1. Uber reviews ad creative (24-48 hours)\n2. Campaign goes ACTIVE upon approval\n3. Ads start serving immediately\n4. You'll see first impressions within hours\n\n🔔 I'll notify you when:\n• Campaign is approved\n• First impressions are served\n• First orders come in\n\nWould you like to set up monitoring?",
        options: ['Yes, enable performance alerts', 'Set custom alert thresholds', 'No, I will check manually', 'View billing schedule']
      },
      {
        botMessage: "Monitoring enabled! You'll receive alerts for:\n\n✓ Campaign approval status\n✓ First 100 impressions served\n✓ ROAS drops below 12x\n✓ CTR falls below 2%\n✓ Budget utilization hits 80%\n✓ Conversion rate changes ±20%\n\n📊 Billing: Charged weekly via earnings deduction. First charge next Monday.\n\nWhat would you like to do next?",
        options: ['Create another campaign (Keyword/Items)', 'View all campaigns', 'Get performance insights', 'Done']
      }
    ],
    completionMessage: "Campaign created and submitted! You'll receive approval notification in 24-48 hours. The campaign will start delivering immediately upon approval."
  },

  'Optimize Campaigns': {
    userMessage: "Optimize my campaigns",
    steps: [
      {
        botMessage: "Running optimization analysis on your portfolio...\n\n📊 Account Summary:",
        dataTable: [
          { label: 'Active Campaigns', value: '1 Sponsored Listing' },
          { label: 'Paused Campaigns', value: '1 Sponsored Search' },
          { label: 'Total Weekly Budget', value: '$252' },
          { label: 'Weekly Ad Spend', value: '$215.71 (85.6% utilization)' },
          { label: 'Weekly GMV', value: '$4,071.25' },
          { label: 'Portfolio ROAS', value: '18.87x' },
          { label: 'Optimization Score', value: '68/100 (Room for improvement)' }
        ],
        suggestions: [
          {
            title: '🚀 Scale High-Performer (+$4,000 GMV/week)',
            description: 'ROAS of 18.87x is exceptional. Increase budget to $500/week to double sales. You\'re leaving money on the table.',
            action: 'Scale to $500/week'
          },
          {
            title: '🔄 Reactivate Keyword Campaign (+$2,500 GMV/week)',
            description: 'Paused Sponsored Search campaign could capture high-intent "taco" searches with proper budget and settings.',
            action: 'Reactivate & Optimize'
          },
          {
            title: '💰 Low Budget Utilization (14.4% wasted)',
            description: 'Spending $216 of $252 budget. You\'re not constrained - increase budget to capture missed demand.',
            action: 'Increase Budget Cap'
          },
          {
            title: '🎯 Add Audience Segmentation',
            description: 'Test "New Customers" audience in separate ad group to improve acquisition efficiency.',
            action: 'Create Ad Group'
          }
        ]
      },
      {
        botMessage: "🎯 Recommended Optimization Plan:\n\n**Phase 1:** Scale active campaign $252 → $500/week\n**Phase 2:** Reactivate keyword campaign with $210/week\n**Phase 3:** Create Uber One Members ad group for retention\n\n📈 Expected Results:\n• Total GMV: $4,071 → $11,500 (+182%)\n• Total Orders: 162 → 460 (+184%)\n• Portfolio ROAS: Maintain 17-19x\n\nWhich optimizations should I apply?",
        options: ['Apply all optimizations (recommended)', 'Scale active campaign only', 'Reactivate paused campaign only', 'Review each individually', 'Skip for now']
      },
      {
        botMessage: "Perfect! I'll apply all optimizations.\n\n**Optimization 1 of 3:** Scale Active Campaign\n\nCurrent: $252/week → New: $500/week\n\n📊 Impact:",
        dataTable: [
          { label: 'Budget Change', value: '$252 → $500/week (+98%)' },
          { label: 'GMV Projection', value: '$4,071 → $8,090 (+$4,019)' },
          { label: 'Orders', value: '162 → 322 (+160)' },
          { label: 'ROAS', value: 'Maintain 18.5-19x' },
          { label: 'CPC', value: '~$0.50 (auto-optimized)' },
          { label: 'CVR', value: 'Maintain 38%+' }
        ]
      },
      {
        botMessage: "Approve scaling to $500/week?",
        options: ['Yes, scale to $500/week', 'Try $350/week instead', 'Skip this']
      },
      {
        botMessage: "Excellent! Active campaign scaled to $500/week.",
        successMessage: "Budget increased to $500/week",
        dataTable: [
          { label: 'Campaign', value: 'Sponsored Listing - Taco Bell 05/09' },
          { label: 'Previous Budget', value: '$252/week' },
          { label: 'New Budget', value: '$500/week' },
          { label: 'Effective', value: 'Immediately' },
          { label: 'Next Reset', value: 'Monday 12:00 AM EST' }
        ]
      },
      {
        botMessage: "**Optimization 2 of 3:** Reactivate Keyword Campaign\n\n'Sponsored Search - Tacos' can capture high-intent searches.\n\nRecommended settings:\n• Budget: $210/week ($30/day)\n• Keywords: 'tacos', 'burritos', 'mexican food' (Broad match)\n• Bid: Auto-Bidding\n• Audience: All Customers\n• Expected ROAS: 14-16x (keyword campaigns typically lower)\n\nReactivate with these settings?",
        options: ['Yes, reactivate with recommended settings', 'Increase budget to $252/week', 'Skip this campaign']
      },
      {
        botMessage: "Perfect! Reactivating keyword campaign.",
        successMessage: "Sponsored Search campaign reactivated",
        dataTable: [
          { label: 'Campaign Type', value: 'Sponsored Search (Keyword)' },
          { label: 'Status', value: 'ACTIVE (pending review)' },
          { label: 'Weekly Budget', value: '$210' },
          { label: 'Keywords', value: 'tacos, burritos, mexican food' },
          { label: 'Match Type', value: 'Broad' },
          { label: 'Expected Weekly GMV', value: '~$2,900' },
          { label: 'Approval Time', value: '24-48 hours' }
        ]
      },
      {
        botMessage: "**Optimization 3 of 3:** Create New Ad Group for Segmentation\n\nCreate a separate ad group targeting Uber One Members:\n\n• Ad Group: 'Uber One Retention'\n• Parent Campaign: Sponsored Listing\n• Budget Share: 30% of campaign budget\n• Audience: Uber One Members only\n• Benefit: Higher AOV and conversion rates\n\nCreate this ad group?",
        options: ['Yes, create Uber One ad group', 'Target New Customers instead', 'Skip segmentation']
      },
      {
        botMessage: "🎉 All optimizations applied successfully!\n\n**Updated Portfolio Performance:**",
        dataTable: [
          { label: 'Active Campaigns', value: '2 (was 1)' },
          { label: 'Active Ad Groups', value: '2 (added segmentation)' },
          { label: 'Total Weekly Budget', value: '$710 (was $252)' },
          { label: 'Expected Weekly GMV', value: '~$11,500 (was $4,071)' },
          { label: 'Expected Orders', value: '~460 (was 162)' },
          { label: 'Portfolio ROAS', value: '~17.8x' },
          { label: 'Optimization Score', value: '92/100 (Excellent)' }
        ]
      },
      {
        botMessage: "📋 Optimization Summary:\n\n✅ Scaled Sponsored Listing: $252 → $500/week\n✅ Reactivated Sponsored Search: $210/week\n✅ Created Uber One ad group for retention\n\n⏰ Timeline:\n• Budget changes: Effective immediately\n• Keyword campaign: Live in 24-48h after review\n• Results visible: Within 3-5 days\n\n🔔 Monitoring enabled for all campaigns.\n\nWhat would you like to do next?",
        options: ['View detailed performance dashboard', 'Set custom alert thresholds', 'Create Sponsored Items campaign', 'Done']
      }
    ],
    completionMessage: "Portfolio optimized! Your campaigns are positioned for 182% growth. I'll monitor performance and alert you to results within 3-5 days."
  },

  'troubleshoot': {
    userMessage: "Why is my campaign not performing?",
    steps: [
      {
        botMessage: "Let me run diagnostics on your campaigns...\n\n✅ Sponsored Listing - Taco Bell 05/09: ACTIVE, performing excellently\n⚠️ Sponsored Search - Tacos: PAUSED, delivery issues\n\nWhich campaign are you concerned about?",
        campaigns: [
          { id: 'b2ccaa57-fa54-57bd-b402-ffd53a47ce74', name: 'Sponsored Listing - Taco Bell 05/09', status: 'Active', performance: 'ROAS: 18.87x • Excellent' },
          { id: 'dca53d26-b9d7-4b17-8438-87a78bcfc11a', name: 'Sponsored Search - Tacos', status: 'Paused', performance: '0 impressions • Not delivering' }
        ]
      },
      {
        botMessage: "Running full diagnostic report...\n\n🔍 Issues Found:",
        dataTable: [
          { label: 'Status', value: '❌ PAUSED (ads won\'t serve)' },
          { label: 'Impressions (7-day)', value: '❌ 0' },
          { label: 'Clicks', value: '❌ 0' },
          { label: 'Weekly Budget', value: '⚠️ $18 (below $150 minimum)' },
          { label: 'Bid Strategy', value: '✓ Auto-Bidding (OK)' },
          { label: 'Schedule', value: '⚠️ Started 2021 (outdated)' },
          { label: 'Approval Status', value: '⚠️ Unknown (too old)' }
        ]
      },
      {
        botMessage: "📋 Root Cause Analysis:\n\n**Critical Issues:**\n1. ❌ Campaign is PAUSED - Ads cannot serve\n2. ⚠️ Budget $18/week is below minimum recommended ($150)\n3. ⚠️ May need re-approval (campaign from 2021)\n\n**Why zero impressions?**\n• Paused status prevents ad serving\n• Even if active, $18 budget too low to win auctions\n• Competing advertisers bid $0.50-1.50 CPC\n\n**Why budget matters:**\n• Min $150/week = ~$21/day = 30-40 clicks/day\n• Your budget = $2.57/day = Only 3-5 clicks if active\n\nWhat would you like me to fix?",
        options: ['Fix all issues (recommended)', 'Reactivate & set proper budget', 'Just reactivate (keep budget)', 'Update bid strategy only', 'Delete this campaign']
      },
      {
        botMessage: "I'll fix all issues to get this campaign delivering.\n\n💰 Step 1: Set Competitive Budget\n\nRecommended: $210-252/week based on your successful campaign.\n\nSelect weekly budget:",
        options: ['$150/week ($21/day) - Minimum viable', '$210/week ($30/day) - Recommended', '$252/week ($36/day) - Match successful campaign', '$180/week ($25/day)']
      },
      {
        botMessage: "Great! Budget set to $210/week.\n\n🎯 Step 2: Verify Keywords (Sponsored Search)\n\nCurrent keywords may be outdated. Recommended keywords for Taco Bell:\n\n• Primary: 'tacos', 'burritos', 'quesadilla'\n• Secondary: 'mexican food', 'nachos'\n• Match type: Broad (captures variations)\n• Negative keywords: 'vegan' (if not offered)\n\nUpdate keywords?",
        options: ['Use recommended keywords', 'Keep existing keywords', 'Add custom keywords']
      },
      {
        botMessage: "Perfect! Keywords updated to high-intent terms.\n\n📅 Step 3: Update Schedule\n\nCurrent: 09/17/2021 - Ongoing (outdated start)\n\nUpdate to current date?",
        options: ['Start today - Ongoing (recommended)', 'Start next Monday (budget reset)', 'Keep original date']
      },
      {
        botMessage: "Excellent! Schedule updated to start today.\n\n🔍 Step 4: Re-submit for Approval\n\nCampaigns from 2021 may need re-approval for:\n• Creative compliance\n• Updated ad policies\n• Menu item availability\n\nI'll re-submit this campaign for review.\n\n⏰ Approval time: 24-48 hours\n\nReady to reactivate?",
        options: ['Yes, reactivate & submit for review', 'Review all changes first', 'Cancel']
      },
      {
        botMessage: "📋 Reviewing All Changes:\n\n**Before:**",
        dataTable: [
          { label: 'Status', value: 'PAUSED' },
          { label: 'Budget', value: '$18/week' },
          { label: 'Keywords', value: 'Outdated' },
          { label: 'Schedule', value: '09/17/2021' },
          { label: 'Impressions', value: '0' }
        ]
      },
      {
        botMessage: "**After (Proposed):**",
        dataTable: [
          { label: 'Status', value: 'ACTIVE (pending review)' },
          { label: 'Budget', value: '$210/week (+1,067%)' },
          { label: 'Keywords', value: 'tacos, burritos, mexican food' },
          { label: 'Schedule', value: 'Today - Ongoing' },
          { label: 'Bid Strategy', value: 'Auto-Bidding' },
          { label: 'Expected Impressions', value: '~8,000/week' },
          { label: 'Expected Orders', value: '~110-130/week' },
          { label: 'Expected ROAS', value: '14-16x' }
        ]
      },
      {
        botMessage: "All changes look good! Approve reactivation?",
        options: ['Yes, reactivate now', 'Edit budget', 'Cancel']
      },
      {
        botMessage: "🎉 Campaign reactivated and submitted for review!",
        successMessage: "Campaign fixed and reactivated",
        dataTable: [
          { label: 'Status', value: 'ACTIVE - Pending Review' },
          { label: 'Review Time', value: '24-48 hours' },
          { label: 'Budget', value: '$210/week' },
          { label: 'Keywords', value: 'Optimized (3 terms)' },
          { label: 'Expected Weekly GMV', value: '~$2,900' },
          { label: 'Delivery Start', value: 'Upon approval' }
        ]
      },
      {
        botMessage: "📋 What Happens Next:\n\n**Hour 0-48:** Uber reviews campaign\n**Hour 48-52:** Campaign approved → Goes ACTIVE\n**Hour 52+:** Ads start serving in search results\n**Day 3-5:** First performance data available\n\n🔔 I'll alert you when:\n• Campaign is approved\n• First impressions served (100+ milestone)\n• First orders attributed\n• ROAS stabilizes (after 7 days)\n\nWould you like to enable monitoring?",
        options: ['Yes, enable all alerts', 'Set custom thresholds', 'No thanks']
      },
      {
        botMessage: "Monitoring enabled! You'll receive alerts for:\n\n✓ Approval status change\n✓ First 100 impressions\n✓ First attributed order\n✓ ROAS below 10x (after 7 days)\n✓ CTR below 2%\n✓ Budget utilization issues\n✓ Keyword performance (top vs. bottom)\n\n💡 Pro Tip: Give keyword campaigns 7-14 days to optimize before making changes.\n\nWhat would you like to do next?",
        options: ['View campaign dashboard', 'Optimize other campaigns', 'Create new campaign', 'Done']
      }
    ],
    completionMessage: "Campaign fixed! It will go live within 24-48 hours after Uber's review. I'll monitor delivery and alert you to any issues or performance milestones."
  }
};