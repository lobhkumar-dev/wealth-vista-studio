const GroupBands = () => {
  // Placeholder logos - in production, replace with actual company logo URLs
  const logos = [
    "Microsoft", "IBM", "HP", "Cisco", "Dell", "Intel", "Oracle", "SAP",
    "Salesforce", "Adobe", "VMware", "Nvidia", "AMD", "Qualcomm", "Broadcom",
    "PayPal", "Visa", "Mastercard", "American Express", "JPMorgan",
    "Goldman Sachs", "Morgan Stanley", "Barclays", "HSBC", "Citi",
    "Google", "Amazon", "Meta", "Apple", "Netflix", "Spotify", "Uber",
    "Airbnb", "Twitter", "LinkedIn", "Slack", "Zoom", "Dropbox", "Box",
    "ServiceNow", "Workday", "Splunk", "Atlassian", "Twilio", "Square",
    "Stripe", "Shopify", "HubSpot", "Zendesk", "DocuSign"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Group{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Bands
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Trusted by leading companies worldwide
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />

        {/* First row - scrolling left */}
        <div className="flex animate-marquee mb-6">
          <div className="flex shrink-0 gap-8 items-center">
            {logos.slice(0, 25).map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-6 py-4 min-w-[140px] sm:min-w-[160px] h-16 sm:h-20 flex items-center justify-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <span className="text-foreground/60 font-medium text-sm sm:text-base whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 gap-8 items-center ml-8">
            {logos.slice(0, 25).map((logo, index) => (
              <div
                key={`row1-dup-${index}`}
                className="flex-shrink-0 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-6 py-4 min-w-[140px] sm:min-w-[160px] h-16 sm:h-20 flex items-center justify-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <span className="text-foreground/60 font-medium text-sm sm:text-base whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scrolling right */}
        <div className="flex animate-marquee-reverse">
          <div className="flex shrink-0 gap-8 items-center">
            {logos.slice(25, 50).map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-6 py-4 min-w-[140px] sm:min-w-[160px] h-16 sm:h-20 flex items-center justify-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <span className="text-foreground/60 font-medium text-sm sm:text-base whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
          <div className="flex shrink-0 gap-8 items-center ml-8">
            {logos.slice(25, 50).map((logo, index) => (
              <div
                key={`row2-dup-${index}`}
                className="flex-shrink-0 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl px-6 py-4 min-w-[140px] sm:min-w-[160px] h-16 sm:h-20 flex items-center justify-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <span className="text-foreground/60 font-medium text-sm sm:text-base whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupBands;
