import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      openModal(
        'Welcome to Poly Congress',
        'Thank you for subscribing! You will receive the latest market insights, trading tips, and platform updates directly in your inbox.'
      );
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    } else {
      openModal('Invalid Email', 'Please enter a valid email address.');
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const trendingMarkets = [
    {
      id: 1,
      title: '2024 Presidential Election Winner',
      category: 'Politics',
      volume: '$145.2M',
      yes: 58,
      no: 42,
      trend: '+12%',
      description: 'Will Donald Trump win the 2024 Presidential Election?',
      traders: '45.2K',
      liquidity: '$18.3M'
    },
    {
      id: 2,
      title: 'Bitcoin Above $100K by December 2025',
      category: 'Crypto',
      volume: '$89.8M',
      yes: 52,
      no: 48,
      trend: '+8%',
      description: 'Will Bitcoin reach or exceed $100,000 by end of 2025?',
      traders: '38.7K',
      liquidity: '$12.1M'
    },
    {
      id: 3,
      title: 'Fed Interest Rate Cut in Q1 2025',
      category: 'Finance',
      volume: '$64.4M',
      yes: 71,
      no: 29,
      trend: '+4%',
      description: 'Will the Federal Reserve cut interest rates in Q1 2025?',
      traders: '29.1K',
      liquidity: '$9.8M'
    },
    {
      id: 4,
      title: 'Lakers Win NBA Championship 2025',
      category: 'Sports',
      volume: '$42.1M',
      yes: 34,
      no: 66,
      trend: '-3%',
      description: 'Will the Los Angeles Lakers win the 2024-25 NBA Championship?',
      traders: '18.5K',
      liquidity: '$6.4M'
    },
    {
      id: 5,
      title: 'Ethereum ETF Approval by June 2025',
      category: 'Crypto',
      volume: '$55.3M',
      yes: 67,
      no: 33,
      trend: '+15%',
      description: 'Will a spot Ethereum ETF be approved in the US by June 2025?',
      traders: '22.4K',
      liquidity: '$8.2M'
    },
    {
      id: 6,
      title: 'AI Regulation Bill Passed in 2025',
      category: 'Politics',
      volume: '$38.7M',
      yes: 44,
      no: 56,
      trend: '+6%',
      description: 'Will comprehensive AI regulation be passed in the US in 2025?',
      traders: '15.8K',
      liquidity: '$5.9M'
    },
    {
      id: 7,
      title: 'S&P 500 Above 6000 by Year End',
      category: 'Finance',
      volume: '$71.2M',
      yes: 59,
      no: 41,
      trend: '+9%',
      description: 'Will the S&P 500 close above 6000 by December 31, 2025?',
      traders: '31.6K',
      liquidity: '$10.5M'
    },
    {
      id: 8,
      title: 'Major Tech Company Layoffs in Q2',
      category: 'Technology',
      volume: '$29.4M',
      yes: 48,
      no: 52,
      trend: '-2%',
      description: 'Will a major tech company announce significant layoffs in Q2 2025?',
      traders: '12.3K',
      liquidity: '$4.7M'
    }
  ];

  const features = [
    {
      icon: 'INSTANT',
      title: 'Instant Settlement',
      description: 'Markets resolve immediately upon event conclusion. Automated smart contracts ensure instant payouts the moment an outcome is determined. Average settlement time: 2 minutes.'
    },
    {
      icon: 'INTEL',
      title: 'Market Intelligence',
      description: 'Advanced analytics dashboard with historical data, order book depth, trading volume analysis, and crowd wisdom indicators to inform your decisions.'
    },
    {
      icon: 'PLATFORM',
      title: 'Cross-Platform Trading',
      description: 'Seamless experience across web, iOS, and Android. Sync your portfolio, watchlists, and trading history across all devices in real-time.'
    },
    {
      icon: 'SECURE',
      title: 'Regulatory Compliance',
      description: 'Fully licensed CFTC-regulated exchange with bank-grade security. Funds held in segregated accounts, protected by SIPC insurance.'
    },
    {
      icon: 'ZERO',
      title: 'Zero Trading Fees',
      description: 'No commissions, no hidden fees, no minimum balance requirements. We profit from market spreads, not from charging traders.'
    },
    {
      icon: 'ORDERS',
      title: 'Advanced Order Types',
      description: 'Limit orders, stop losses, trailing stops, and conditional orders. Set automated trading strategies with professional-grade tools.'
    },
    {
      icon: 'GLOBAL',
      title: 'Global Markets',
      description: 'Trade on events worldwide across politics, finance, sports, entertainment, and technology. Over 1,200 active markets with new events added daily.'
    },
    {
      icon: 'LIQUID',
      title: 'Deep Liquidity',
      description: 'Automated market maker provides 24/7 liquidity with tight spreads and instant execution. $2.5B in total platform liquidity ensures optimal pricing.'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Browse Markets',
      description: 'Explore thousands of prediction markets across multiple categories. Each market represents a future event with clearly defined outcomes and resolution criteria.'
    },
    {
      step: '02',
      title: 'Analyze Probabilities',
      description: 'Market prices reflect collective wisdom. A share trading at $0.65 means the market estimates a 65% probability of that outcome. Use analytics to find opportunities.'
    },
    {
      step: '03',
      title: 'Buy or Sell Shares',
      description: 'Purchase shares in outcomes you believe will occur. Each share pays $1.00 if correct, $0.00 if incorrect. Trade anytime before the market closes.'
    },
    {
      step: '04',
      title: 'Market Resolves',
      description: 'When the event concludes, markets resolve based on verified sources. Winners receive $1 per share automatically. Resolution typically occurs within minutes.'
    },
    {
      step: '05',
      title: 'Instant Payout',
      description: 'Winnings are credited immediately to your account. Withdraw to your bank account or reinvest in other markets. No waiting periods or withdrawal fees.'
    }
  ];

  const marketCategories = [
    { name: 'Politics', count: '250+', volume: '$450M' },
    { name: 'Crypto', count: '180+', volume: '$320M' },
    { name: 'Finance', count: '220+', volume: '$380M' },
    { name: 'Sports', count: '300+', volume: '$290M' },
    { name: 'Entertainment', count: '150+', volume: '$180M' },
    { name: 'Technology', count: '120+', volume: '$210M' },
    { name: 'Science', count: '90+', volume: '$140M' },
    { name: 'World Events', count: '200+', volume: '$280M' }
  ];

  const faqs = [
    {
      question: 'What is Poly Congress and how does it work?',
      answer: 'Poly Congress is a CFTC-regulated prediction market platform where users trade on the outcome of future events. Markets function like stock exchanges - prices reflect the collective probability of outcomes. When you buy a share at $0.60, you are betting on a 60% chance of that outcome occurring. If correct, you receive $1 per share. If incorrect, the share is worth $0. This mechanism aggregates diverse information and opinions to create highly accurate forecasts.'
    },
    {
      question: 'How accurate are prediction markets compared to traditional forecasting?',
      answer: 'Prediction markets consistently outperform traditional polls, expert opinions, and statistical models. Studies show prediction markets are 3-5% more accurate than professional political forecasters. They aggregate information from thousands of traders with "skin in the game," incentivizing accurate predictions. Our platform has maintained a 98% accuracy rate on resolved markets over the past 3 years, significantly higher than polling averages.'
    },
    {
      question: 'Is this legal and regulated?',
      answer: 'Yes. Poly Congress operates as a Designated Contract Market (DCM) registered with the Commodity Futures Trading Commission (CFTC). We comply with all federal regulations governing derivatives exchanges. User funds are held in segregated FDIC-insured accounts and protected by SIPC insurance up to $500,000. We maintain SOC 2 Type II certification and undergo regular third-party security audits.'
    },
    {
      question: 'How do you ensure market integrity and prevent manipulation?',
      answer: 'We employ multiple safeguards: automated surveillance systems monitor for suspicious trading patterns, position limits prevent any single trader from dominating a market, sophisticated algorithms detect wash trading and collusion, and our compliance team investigates anomalies. Markets with evidence of manipulation are voided, and violators face permanent bans and legal action. We maintain a public transparency report of all enforcement actions.'
    },
    {
      question: 'What happens if there is a dispute about how a market should resolve?',
      answer: 'Each market has clearly defined resolution criteria established before trading begins. We use multiple verified sources (AP, Reuters, official government data, etc.) to determine outcomes. If ambiguity arises, our Resolution Committee - consisting of independent experts - reviews the evidence. Users can submit appeals within 48 hours of resolution. In rare cases of genuine ambiguity, markets are resolved as "invalid" and all funds are returned.'
    },
    {
      question: 'How does the automated market maker work?',
      answer: 'Our AMM uses a logarithmic market scoring rule (LMSR) to provide continuous liquidity. Unlike traditional order books, you can always buy or sell at the displayed price. The AMM automatically adjusts prices based on trading volume to maintain balance. This ensures tight spreads (typically 1-2 cents) and instant execution even in less popular markets. The system is seeded with initial liquidity and rebalanced using trading fees collected from the spread.'
    },
    {
      question: 'Can I withdraw my money at any time?',
      answer: 'Yes. You can withdraw available funds (not tied up in open positions) at any time with zero fees. Withdrawals to bank accounts typically process within 1-2 business days. You can also close open positions by selling your shares back to the market at the current price. There are no lock-up periods, minimum withdrawal amounts, or withdrawal limits.'
    },
    {
      question: 'Do you offer API access for algorithmic trading?',
      answer: 'Yes. Pro and Enterprise users have full API access with REST endpoints and WebSocket streams for real-time data. Our API supports order management, portfolio tracking, market data retrieval, and historical analytics. Rate limits are generous (1000 requests/minute for Pro, unlimited for Enterprise). We provide comprehensive documentation, client libraries in Python, JavaScript, and Go, plus dedicated technical support.'
    }
  ];

  return (
    <div className="App">
      {/* Scan Line Effect */}
      <div className="scan-line"></div>
      
      {/* Animated Background */}
      <div className="cyber-grid"></div>
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-content">
          <div className="logo">
            <img src="/logo.png" alt="Poly Congress" className="logo-icon" />
            <span className="logo-text">POLY CONGRESS</span>
          </div>
          
          <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('markets'); }} className="nav-link">Markets</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }} className="nav-link">How It Works</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="nav-link">Features</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }} className="nav-link">Pricing</a>
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className="nav-link">FAQ</a>
          </nav>

          <div className="header-actions">
            <button className="btn-secondary" onClick={() => openModal('Sign In', 'Sign in to your Poly Congress account to access prediction markets, view your portfolio, and manage your trades.')}>Sign In</button>
            <button className="btn-primary" onClick={() => openModal('Get Started', 'Create your free Poly Congress account:\n\n1. Verify your identity (2 minutes)\n2. Deposit funds via bank transfer\n3. Start trading on 1,200+ markets\n4. Get a $10 welcome bonus\n\nNo credit check required. FDIC-insured deposits.')}>Get Started</button>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? 'X' : 'MENU'}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-line">Trade The</span>
              <span className="title-line highlight">Future</span>
            </h1>
            <p className="hero-subtitle">
              The world's most advanced prediction market platform. Harness the wisdom of crowds to forecast elections, crypto prices, economic events, sports outcomes, and more with unprecedented accuracy.
            </p>
            <div className="hero-stats">
              <div className="stat" onClick={() => openModal('Trading Volume', '$2.5 Billion+ Total Trading Volume\n\nBreakdown by Category:\n- Politics: $450M (18%)\n- Crypto: $320M (13%)\n- Finance: $380M (15%)\n- Sports: $290M (12%)\n- Entertainment: $180M (7%)\n- Technology: $210M (8%)\n- Science: $140M (6%)\n- World Events: $280M (11%)\n- Other: $250M (10%)\n\nGrowth:\n- Year over year: +145%\n- Month over month: +12%\n- All-time high: $2.5B (current)\n\nAverage daily volume: $8.5M')} style={{cursor: 'pointer'}}>
                <div className="stat-value">$2.5B+</div>
                <div className="stat-label">Trading Volume</div>
              </div>
              <div className="stat" onClick={() => openModal('Active Traders', '150,000+ Active Traders\n\nUser Demographics:\n- Retail traders: 85%\n- Institutional: 15%\n- Average account size: $1,250\n- Median trades per user: 47\n\nGeographic Distribution:\n- United States: 68%\n- Europe: 18%\n- Asia: 10%\n- Other: 4%\n\nUser Growth:\n- New users this month: 12,500\n- Retention rate: 78%\n- Daily active users: 42,000\n\nCommunity:\n- Discord members: 15,000\n- Telegram members: 10,000\n- Twitter followers: 50,000')} style={{cursor: 'pointer'}}>
                <div className="stat-value">150K+</div>
                <div className="stat-label">Active Traders</div>
              </div>
              <div className="stat" onClick={() => openModal('Accuracy Rate', '98.3% Market Accuracy Rate\n\nHow We Calculate Accuracy:\nWe measure the correlation between final market probabilities (30 minutes before close) and actual outcomes across all resolved markets.\n\nComparison:\n- Poly Congress: 98.3%\n- Traditional polls: 85.1%\n- Expert forecasters: 89.7%\n- Statistical models: 92.4%\n\nAccuracy by Category:\n- Politics: 97.8%\n- Finance: 98.9%\n- Crypto: 96.5%\n- Sports: 99.1%\n- Technology: 97.2%\n- Entertainment: 98.6%\n\nTotal Markets Resolved: 8,450\nAverage Resolution Time: 2 minutes\n\nResearch backing:\nMultiple academic studies confirm prediction markets consistently outperform other forecasting methods.')} style={{cursor: 'pointer'}}>
                <div className="stat-value">98.3%</div>
                <div className="stat-label">Accuracy Rate</div>
              </div>
              <div className="stat" onClick={() => openModal('Active Markets', '1,200+ Active Markets\n\nMarkets by Category:\n- Politics: 250 markets\n- Crypto: 180 markets\n- Finance: 220 markets\n- Sports: 300 markets\n- Entertainment: 150 markets\n- Technology: 120 markets\n- Science: 90 markets\n- World Events: 200 markets\n\nMarket Types:\n- Binary (Yes/No): 85%\n- Multiple choice: 12%\n- Scalar (range): 3%\n\nMarket Lifecycle:\n- Average duration: 45 days\n- Shortest: 1 hour\n- Longest: 2 years\n- New markets created daily: 15-20\n\nLiquidity:\n- Total platform liquidity: $2.5B\n- Average per market: $2.1M\n- Minimum guaranteed: $10K')} style={{cursor: 'pointer'}}>
                <div className="stat-value">1,200+</div>
                <div className="stat-label">Active Markets</div>
              </div>
            </div>
            <div className="hero-cta">
              <button className="btn-primary large" onClick={() => openModal('Create Free Account', 'Join 150,000+ traders on Poly Congress:\n\nBenefits:\n- $10 welcome bonus\n- Zero trading fees\n- Instant settlements\n- Access to 1,200+ markets\n- Professional trading tools\n- 24/7 customer support\n\nAccount creation takes 60 seconds. Start forecasting the future today.')}>
                Start Trading Now
              </button>
              <button className="btn-secondary large" onClick={() => openModal('Learn More', 'Prediction markets are the most accurate way to forecast future events. Our platform combines:\n\n- CFTC regulation and oversight\n- Bank-grade security\n- Deep liquidity pools\n- Advanced analytics\n- Zero fees\n\nMarkets available across:\nPolitics | Finance | Crypto | Sports | Technology | Entertainment | Science | World Events')}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Categories */}
      <section id="categories" className="categories">
        <div className="container">
          <h2 className="section-title">Market Categories</h2>
          <p className="section-subtitle">Over 1,200 active markets across 8 major categories</p>
          <div className="categories-grid">
            {marketCategories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-name">{category.name}</div>
                <div className="category-count">{category.count} Markets</div>
                <div className="category-volume">{category.volume} Volume</div>
                <button className="btn-category" onClick={() => openModal(
                  `${category.name} Markets`,
                  `Explore ${category.count} active prediction markets in ${category.name}.\n\nTotal Trading Volume: ${category.volume}\n\nCategories include:\n- Major events and outcomes\n- Real-time probability tracking\n- Historical performance data\n- Expert commentary and analysis\n\nNew markets added daily based on user demand and current events.`
                )}>
                  Explore Markets
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Markets */}
      <section id="markets" className="markets">
        <div className="container">
          <h2 className="section-title">Trending Markets</h2>
          <p className="section-subtitle">Most traded markets in the last 24 hours</p>
          <div className="markets-grid">
            {trendingMarkets.map(market => (
              <div key={market.id} className="market-card">
                <div className="market-header">
                  <span className="market-category">{market.category}</span>
                  <span className={`market-trend ${market.trend.includes('+') ? 'positive' : 'negative'}`}>
                    {market.trend}
                  </span>
                </div>
                <h3 className="market-title">{market.title}</h3>
                <p className="market-description">{market.description}</p>
                <div className="market-meta">
                  <div className="market-volume">
                    <span className="meta-label">Volume:</span>
                    <span className="meta-value">{market.volume}</span>
                  </div>
                  <div className="market-traders">
                    <span className="meta-label">Traders:</span>
                    <span className="meta-value">{market.traders}</span>
                  </div>
                  <div className="market-liquidity">
                    <span className="meta-label">Liquidity:</span>
                    <span className="meta-value">{market.liquidity}</span>
                  </div>
                </div>
                <div className="market-odds">
                  <div className="odds-bar">
                    <div className="odds-yes" style={{ width: `${market.yes}%` }}>
                      <span>YES {market.yes}%</span>
                    </div>
                    <div className="odds-no" style={{ width: `${market.no}%` }}>
                      <span>NO {market.no}%</span>
                    </div>
                  </div>
                  <div className="odds-prices">
                    <div className="price-label">
                      <span>YES Price: ${(market.yes / 100).toFixed(2)}</span>
                    </div>
                    <div className="price-label">
                      <span>NO Price: ${(market.no / 100).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <button className="btn-trade" onClick={() => openModal(
                  market.title,
                  `${market.description}\n\nMarket Details:\n- Category: ${market.category}\n- Total Volume: ${market.volume}\n- Active Traders: ${market.traders}\n- Available Liquidity: ${market.liquidity}\n- 24h Change: ${market.trend}\n\nCurrent Probabilities:\nYES: ${market.yes}% ($${(market.yes / 100).toFixed(2)} per share)\nNO: ${market.no}% ($${(market.no / 100).toFixed(2)} per share)\n\nEach share pays $1.00 if the outcome occurs, $0.00 otherwise.\n\nCreate an account to start trading.`
                )}>
                  Trade Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How Prediction Markets Work</h2>
          <p className="section-subtitle">Understanding the mechanics of crowd-sourced forecasting</p>
          <div className="works-grid">
            {howItWorks.map((item, index) => (
              <div key={index} className="work-card">
                <div className="work-step">{item.step}</div>
                <h3 className="work-title">{item.title}</h3>
                <p className="work-description">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="works-info">
            <h3 className="info-title">The Science Behind Prediction Markets</h3>
            <p className="info-text">
              Prediction markets aggregate information from diverse participants, each with unique knowledge and perspectives. 
              The market price represents the collective probability estimate. Research shows this "wisdom of crowds" approach 
              consistently outperforms individual experts, polls, and statistical models. With real money at stake, traders 
              are incentivized to make accurate predictions, not wishful thinking.
            </p>
            <div className="info-stats">
              <div className="info-stat">
                <div className="info-stat-value">73%</div>
                <div className="info-stat-label">More accurate than polls in elections</div>
              </div>
              <div className="info-stat">
                <div className="info-stat-value">2.8x</div>
                <div className="info-stat-label">Better than expert forecasters</div>
              </div>
              <div className="info-stat">
                <div className="info-stat-value">94%</div>
                <div className="info-stat-label">Correlation with actual outcomes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Platform Features</h2>
          <p className="section-subtitle">Professional tools for serious traders</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Transparent Pricing</h2>
          <p className="section-subtitle">No hidden fees. No surprises. Just straightforward trading.</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Standard</h3>
                <div className="pricing-price">
                  <span className="price-amount">FREE</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>Trade on all 1,200+ markets</li>
                <li>Zero trading commissions</li>
                <li>Instant settlements</li>
                <li>Mobile app access</li>
                <li>Basic market analytics</li>
                <li>$10 welcome bonus</li>
                <li>Email support</li>
                <li>$0 minimum deposit</li>
              </ul>
              <button className="btn-pricing" onClick={() => openModal(
                'Standard Plan',
                'Free forever. No credit card required.\n\nIncludes:\n- Full market access\n- Zero fees on trades\n- Instant deposits & withdrawals\n- Mobile trading\n- Basic charts and analytics\n- Community forum access\n- Email support (24h response)\n\nPerfect for casual traders and those new to prediction markets.'
              )}>
                Get Started Free
              </button>
            </div>

            <div className="pricing-card featured">
              <div className="featured-badge">MOST POPULAR</div>
              <div className="pricing-header">
                <h3 className="pricing-title">Pro</h3>
                <div className="pricing-price">
                  <span className="price-amount">$49</span>
                  <span className="price-period">/month</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>Everything in Standard</li>
                <li>Advanced AI market analysis</li>
                <li>Priority customer support</li>
                <li>Full API access (1K req/min)</li>
                <li>Custom price alerts</li>
                <li>Portfolio analytics dashboard</li>
                <li>Historical market data</li>
                <li>Trade automation tools</li>
                <li>VIP Discord access</li>
                <li>Weekly analyst reports</li>
              </ul>
              <button className="btn-pricing primary" onClick={() => openModal(
                'Pro Plan - $49/month',
                'For serious traders who demand the best tools.\n\nAll Standard features plus:\n- Advanced AI-powered insights\n- Real-time sentiment analysis\n- Full REST + WebSocket API\n- Unlimited custom alerts\n- Advanced charting tools\n- Historical tick data\n- Automated trading strategies\n- Priority support (2h response)\n- VIP community access\n- Weekly market analysis reports\n\nSave $100/year with annual billing ($490/year)\n\n7-day free trial included.'
              )}>
                Start Pro Trial
              </button>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">Enterprise</h3>
                <div className="pricing-price">
                  <span className="price-amount">Custom</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>Everything in Pro</li>
                <li>Dedicated account manager</li>
                <li>Custom market creation</li>
                <li>White-label solutions</li>
                <li>Unlimited API requests</li>
                <li>99.9% SLA guarantee</li>
                <li>Volume-based discounts</li>
                <li>On-premise deployment option</li>
                <li>Custom integrations</li>
                <li>Compliance consultation</li>
              </ul>
              <button className="btn-pricing" onClick={() => openModal(
                'Enterprise Plan',
                'Custom solutions for institutions, hedge funds, and high-volume traders.\n\nFeatures:\n- Dedicated success manager\n- Custom market design\n- White-label platform options\n- Unlimited API access\n- 99.9% uptime SLA\n- Volume discounts (up to 50%)\n- Direct market maker access\n- Custom compliance workflows\n- On-premise deployment\n- Multi-user account management\n- Advanced security features\n- Custom contract terms\n\nContact us for pricing:\nEmail: enterprise@polycongress.com\nPhone: 1-800-POLY-CON ext. 2'
              )}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about prediction markets and Poly Congress</p>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className={`faq-question ${activeFAQ === index ? 'active' : ''}`}
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                >
                  {faq.question}
                  <span className="faq-icon">{activeFAQ === index ? '−' : '+'}</span>
                </button>
                {activeFAQ === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Market Intelligence Newsletter</h2>
            <p className="newsletter-subtitle">
              Get weekly market insights, probability analysis, trading strategies, and platform updates delivered to your inbox
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-button">
                {subscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </form>
            <p className="newsletter-privacy">
              We respect your privacy. Unsubscribe anytime. No spam, ever.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta-title">Ready to Trade the Future?</h2>
          <p className="cta-subtitle">Join 150,000+ traders making accurate predictions and profitable trades</p>
          <div className="cta-buttons">
            <button className="btn-primary large" onClick={() => openModal(
              'Create Your Account',
              'Start trading in 3 easy steps:\n\n1. Sign up with email (30 seconds)\n2. Verify identity with ID (2 minutes)\n3. Deposit funds and trade (instant)\n\nWelcome bonus: $10\nMinimum deposit: $10\nDeposit methods: Bank transfer, debit card, wire\nWithdrawal time: 1-2 business days\nCustomer support: 24/7\n\nJoin thousands of traders forecasting the future today.'
            )}>
              Create Free Account
            </button>
            <button className="btn-secondary large" onClick={() => openModal(
              'View Documentation',
              'Access comprehensive resources:\n\n- Getting Started Guide\n- Trading Tutorials\n- Market Mechanics\n- API Documentation\n- Security Best Practices\n- Resolution Rules\n- Video Walkthroughs\n\nNew to prediction markets? Start with our beginner guide to learn the fundamentals and start trading with confidence.'
            )}>
              View Documentation
            </button>
          </div>
          <div className="cta-trust">
            <div className="trust-item">
              <div className="trust-label">Regulated by CFTC</div>
            </div>
            <div className="trust-item">
              <div className="trust-label">FDIC Insured Deposits</div>
            </div>
            <div className="trust-item">
              <div className="trust-label">SOC 2 Type II Certified</div>
            </div>
            <div className="trust-item">
              <div className="trust-label">SSL Encrypted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4 className="footer-title">Product</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('markets'); }} className="footer-link">Markets</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }} className="footer-link">How It Works</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="footer-link">Features</a>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }} className="footer-link">Pricing</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('API Documentation', 'Access our comprehensive API documentation for algorithmic trading, data analysis, and custom integrations.\n\nEndpoints:\n- REST API for trading\n- WebSocket for real-time data\n- Historical data exports\n- Portfolio management\n\nRate limits: 1000 req/min (Pro), Unlimited (Enterprise)\n\nDocumentation: api.polycongress.com'); }} className="footer-link">API</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Mobile Apps', 'Trade on the go with native mobile apps:\n\niOS App:\n- App Store\n- Requires iOS 14+\n- Face ID / Touch ID\n- Push notifications\n\nAndroid App:\n- Google Play\n- Requires Android 8+\n- Fingerprint auth\n- Widget support\n\nFeatures match web platform exactly.'); }} className="footer-link">Mobile Apps</a>
            </div>

            <div className="footer-col">
              <h4 className="footer-title">Company</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('About Poly Congress', 'About Us\n\nPoly Congress is the world largest CFTC-regulated prediction market platform. Founded in 2020, we have facilitated over $2.5 billion in trading volume across 150,000+ active traders.\n\nMission:\nMake the future more predictable through collective intelligence and market-based forecasting.\n\nTeam:\nBuilt by traders, engineers, and data scientists from Goldman Sachs, Citadel, MIT, and Stanford.\n\nBacked by:\nSequoia Capital, Andreessen Horowitz, Paradigm, and leading fintech investors.'); }} className="footer-link">About</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Careers', 'Join Our Team\n\nWe are hiring across all departments:\n\n- Software Engineers\n- Quantitative Traders\n- Data Scientists\n- Product Managers\n- Compliance Officers\n- Customer Support\n\nPerks:\n- Competitive salary + equity\n- Remote-first culture\n- Unlimited PTO\n- Health insurance (100% covered)\n- $10,000 trading account bonus\n- Learning & development budget\n- Home office setup stipend\n\nApply: careers@polycongress.com'); }} className="footer-link">Careers</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Press & Media', 'Press Inquiries\n\nFor media requests, interviews, and press materials:\n\nPress Contact:\nEmail: press@polycongress.com\nPhone: 1-800-POLY-CON ext. 3\n\nPress Kit:\n- Company logos & brand assets\n- Executive headshots and bios\n- Product screenshots\n- Fact sheet and statistics\n- Recent announcements\n\nDownload press kit: polycongress.com/press'); }} className="footer-link">Press</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Contact Us', 'Get in Touch\n\nCustomer Support:\nEmail: support@polycongress.com\nLive Chat: 24/7 (click chat icon)\nPhone: 1-800-POLY-CON\nResponse time: <2 hours\n\nSales Inquiries:\nEmail: sales@polycongress.com\nPhone: 1-800-POLY-CON ext. 2\n\nHeadquarters:\n123 Market Street, Suite 400\nSan Francisco, CA 94105\n\nOffice Hours:\nMonday-Friday, 9am-6pm PST'); }} className="footer-link">Contact</a>
            </div>

            <div className="footer-col">
              <h4 className="footer-title">Resources</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Help Center', 'Help Center & Documentation\n\nComprehensive guides and tutorials:\n\n- Getting Started Guide\n- Trading 101\n- Account Management\n- Deposits & Withdrawals\n- Market Resolution Rules\n- API Documentation\n- Troubleshooting\n- Video Tutorials\n- Glossary of Terms\n\nSearch 500+ help articles:\nhelp.polycongress.com'); }} className="footer-link">Help Center</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Blog', 'Poly Congress Blog\n\nLatest insights and analysis:\n\n- Market commentary\n- Trading strategies\n- Platform updates\n- Industry news\n- Trader interviews\n- Research papers\n- Technical analysis\n\nPublished weekly by our research team.\n\nVisit: blog.polycongress.com'); }} className="footer-link">Blog</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Community Forum', 'Community Forum\n\n15,000+ active members discussing:\n\n- Trading strategies\n- Market analysis\n- Platform feedback\n- Technical support\n- General discussion\n\nModerated by team members.\nPost questions, share insights, connect with other traders.\n\nJoin: community.polycongress.com'); }} className="footer-link">Community</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('System Status', 'Platform Status\n\nCurrent Status: All Systems Operational\n\nComponents:\n- Trading Platform: Online (99.9%)\n- API Services: Online (99.9%)\n- Mobile Apps: Online (99.9%)\n- Payment Processing: Online (99.9%)\n- WebSocket Streams: Online (99.9%)\n\nUptime (30 days): 99.94%\nLast Incident: 47 days ago\nNext Maintenance: None scheduled\n\nSubscribe to updates:\nstatus.polycongress.com'); }} className="footer-link">Status</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Security', 'Security Measures\n\nYour security is our priority:\n\n- SOC 2 Type II certified\n- 256-bit SSL encryption\n- Two-factor authentication (2FA)\n- Biometric login support\n- Cold storage for funds\n- Regular security audits\n- Bug bounty program\n- DDoS protection\n- IP whitelisting\n- Session management\n\nReport vulnerabilities:\nsecurity@polycongress.com'); }} className="footer-link">Security</a>
            </div>

            <div className="footer-col">
              <h4 className="footer-title">Legal</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Terms of Service', 'Terms of Service\n\nBy using Poly Congress, you agree to:\n\n- Be 18+ years of age\n- Provide accurate information\n- Comply with all applicable laws\n- Trade responsibly\n- Not manipulate markets\n- Not use automated systems without permission\n- Respect other users\n\nWe reserve the right to:\n- Suspend or terminate accounts\n- Reverse fraudulent trades\n- Update terms with notice\n- Report illegal activity\n\nFull terms: polycongress.com/terms\nLast updated: January 15, 2025'); }} className="footer-link">Terms of Service</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Privacy Policy', 'Privacy Policy\n\nYour privacy matters to us.\n\nWe collect:\n- Account information (name, email, ID)\n- Trading activity and history\n- Device and browser data\n- Usage analytics\n\nWe never:\n- Sell your personal data\n- Share data without consent\n- Store passwords in plain text\n- Track you across other sites\n\nYour rights:\n- Access your data\n- Delete your account\n- Opt out of marketing\n- Export your information\n\nFull policy: polycongress.com/privacy\nLast updated: January 15, 2025'); }} className="footer-link">Privacy Policy</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Cookie Policy', 'Cookie Policy\n\nWe use cookies to:\n\n- Keep you logged in\n- Remember your preferences\n- Analyze site usage\n- Improve performance\n- Provide customer support\n\nCookie types:\n- Essential (required)\n- Functional (optional)\n- Analytics (optional)\n- Marketing (optional)\n\nYou can:\n- Manage cookie preferences\n- Disable non-essential cookies\n- Clear cookie data anytime\n\nManage settings: polycongress.com/cookies'); }} className="footer-link">Cookie Policy</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Responsible Trading', 'Responsible Trading\n\nPoly Congress promotes responsible trading:\n\n- Only trade what you can afford to lose\n- Set deposit and loss limits\n- Take breaks from trading\n- Seek help if needed\n\nProtections:\n- Self-exclusion options\n- Deposit limits\n- Timeout periods\n- Warnings for large positions\n\nProblem gambling resources:\nNational Council on Problem Gambling\n1-800-522-4700\n\nWe care about your well-being.'); }} className="footer-link">Responsible Trading</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Regulatory Compliance', 'Regulatory Information\n\nPoly Congress is a Designated Contract Market (DCM) registered with the Commodity Futures Trading Commission (CFTC).\n\nRegulation Number: DCM-2020-001\nRegistration Date: March 15, 2020\nNext Audit: June 2025\n\nCompliance:\n- Bank Secrecy Act (BSA)\n- Anti-Money Laundering (AML)\n- Know Your Customer (KYC)\n- SIPC Insurance Coverage\n\nFederal oversight ensures platform integrity and user protection.'); }} className="footer-link">Regulatory Info</a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-logo">
              <img src="/logo.png" alt="Poly Congress" className="logo-icon" />
              <span className="logo-text">POLY CONGRESS</span>
            </div>
            <div className="footer-social">
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Twitter / X', 'Follow us on X (formerly Twitter)\n\nHandle: @PolyCongress\n\nGet:\n- Real-time market updates\n- Trading tips and strategies\n- Platform announcements\n- Community highlights\n- Live customer support\n- Market commentary\n\nFollow 50,000+ traders and stay informed.'); }} className="social-link">X</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Discord Community', 'Join our Discord Server\n\n15,000+ active members\n\nChannels:\n- General chat\n- Trading strategies\n- Market discussion\n- Technical support\n- Announcements\n- Bot commands\n- VIP lounge (Pro+ only)\n\nPerks:\n- Direct team access\n- Exclusive insights\n- Community events\n- Early feature access\n\nJoin: discord.gg/polycongress'); }} className="social-link">Discord</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('Telegram', 'Join our Telegram Community\n\n10,000+ members across 3 channels:\n\nChannels:\n@PolyCongress - Official announcements\n@PolyChat - Trading discussion\n@PolySupport - Customer support\n\nBenefits:\n- Instant market alerts\n- Trading signals\n- Breaking news\n- Quick support responses\n- Community networking\n\nJoin: t.me/polycongress'); }} className="social-link">Telegram</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('GitHub', 'Open Source on GitHub\n\nExplore our public repositories:\n\nRepositories:\n- Trading algorithm examples\n- API client libraries (Python, JS, Go)\n- Data visualization tools\n- Community bots\n- Market analysis scripts\n\nContribute:\n- Report bugs and issues\n- Submit pull requests\n- Share trading strategies\n- Build integrations\n\nStar our repos: github.com/polycongress'); }} className="social-link">GitHub</a>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal('LinkedIn', 'Connect on LinkedIn\n\nCompany Page: Poly Congress\n\nFollow for:\n- Company news\n- Job openings\n- Industry insights\n- Team updates\n- Thought leadership\n- Event announcements\n\nConnect with our team members and stay updated on corporate developments.\n\nFollow: linkedin.com/company/polycongress'); }} className="social-link">LinkedIn</a>
            </div>
            <div className="footer-copyright">
              Copyright 2025 Poly Congress. All rights reserved. CFTC Registered DCM.
            </div>
          </div>

          <div className="footer-disclaimer">
            <p>
              <strong>Risk Disclosure:</strong> Prediction market trading involves substantial risk of loss. You should carefully consider whether trading is appropriate for your financial situation. Past performance is not indicative of future results. Only trade with funds you can afford to lose.
            </p>
            <p>
              <strong>Regulatory Notice:</strong> Poly Congress operates as a CFTC-registered Designated Contract Market (DCM). Participation is restricted to eligible jurisdictions. Users must be 18+ and comply with local regulations.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>X</button>
            <h3 className="modal-title">{modalContent.title}</h3>
            <div className="modal-content">{modalContent.content}</div>
            <button className="btn-primary" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;