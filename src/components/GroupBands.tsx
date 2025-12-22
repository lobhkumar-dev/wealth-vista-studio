const GroupBands = () => {
  // Placeholder logos - replace these URLs with actual company logo images
  const logos = [
    { name: "Microsoft", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png" },
    { name: "IBM", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png" },
    { name: "HP", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/200px-HP_logo_2012.svg.png" },
    { name: "Cisco", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/200px-Cisco_logo_blue_2016.svg.png" },
    { name: "Dell", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/200px-Dell_Logo.svg.png" },
    { name: "Intel", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/200px-Intel_logo_%282006-2020%29.svg.png" },
    { name: "Oracle", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/200px-Oracle_logo.svg.png" },
    { name: "SAP", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/200px-SAP_2011_logo.svg.png" },
    { name: "Salesforce", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/200px-Salesforce.com_logo.svg.png" },
    { name: "Adobe", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.svg/200px-Adobe_Corporate_Logo.svg.png" },
    { name: "VMware", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/200px-Vmware.svg.png" },
    { name: "Nvidia", image: "https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/200px-Nvidia_logo.svg.png" },
    { name: "AMD", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/200px-AMD_Logo.svg.png" },
    { name: "Qualcomm", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qualcomm-Logo.svg/200px-Qualcomm-Logo.svg.png" },
    { name: "Broadcom", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Broadcom_Corporation_logo.svg/200px-Broadcom_Corporation_logo.svg.png" },
    { name: "PayPal", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png" },
    { name: "Visa", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" },
    { name: "Mastercard", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" },
    { name: "Google", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png" },
    { name: "Amazon", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png" },
    { name: "Meta", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png" },
    { name: "Apple", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png" },
    { name: "Netflix", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" },
    { name: "Spotify", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/200px-Spotify_logo_without_text.svg.png" },
    { name: "Uber", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/200px-Uber_logo_2018.svg.png" },
  ];

  const logos2 = [
    { name: "Airbnb", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/200px-Airbnb_Logo_B%C3%A9lo.svg.png" },
    { name: "Twitter", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/200px-Logo_of_Twitter.svg.png" },
    { name: "LinkedIn", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/200px-LinkedIn_logo_initials.png" },
    { name: "Slack", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/200px-Slack_icon_2019.svg.png" },
    { name: "Zoom", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/200px-Zoom_Communications_Logo.svg.png" },
    { name: "Dropbox", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/200px-Dropbox_Icon.svg.png" },
    { name: "Atlassian", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Atlassian_logo.svg/200px-Atlassian_logo.svg.png" },
    { name: "Twilio", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twilio-logo-red.svg/200px-Twilio-logo-red.svg.png" },
    { name: "Square", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Square%2C_Inc._-_Square_logo.svg/200px-Square%2C_Inc._-_Square_logo.svg.png" },
    { name: "Stripe", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/200px-Stripe_Logo%2C_revised_2016.svg.png" },
    { name: "Shopify", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/200px-Shopify_logo_2018.svg.png" },
    { name: "HubSpot", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/200px-HubSpot_Logo.svg.png" },
    { name: "Zendesk", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Zendesk_logo.svg/200px-Zendesk_logo.svg.png" },
    { name: "DocuSign", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Docusign_logo.svg/200px-Docusign_logo.svg.png" },
    { name: "Workday", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Workday_logo.svg/200px-Workday_logo.svg.png" },
    { name: "ServiceNow", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/ServiceNow_logo.svg/200px-ServiceNow_logo.svg.png" },
    { name: "Splunk", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Splunk_logo.svg/200px-Splunk_logo.svg.png" },
    { name: "Intuit", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Intuit_Logo.svg/200px-Intuit_Logo.svg.png" },
    { name: "Autodesk", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Autodesk%2C_Inc._logo.svg/200px-Autodesk%2C_Inc._logo.svg.png" },
    { name: "Figma", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/200px-Figma-logo.svg.png" },
    { name: "Canva", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/200px-Canva_icon_2021.svg.png" },
    { name: "GitHub", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/200px-Octicons-mark-github.svg.png" },
    { name: "GitLab", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/200px-GitLab_logo.svg.png" },
    { name: "MongoDB", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/200px-MongoDB_Logo.svg.png" },
    { name: "Snowflake", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Snowflake_Logo.svg/200px-Snowflake_Logo.svg.png" },
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
        {/* Strong gradient overlays for smooth fade/glassmorphism effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 bg-gradient-to-r from-secondary/100 via-secondary/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 md:w-64 bg-gradient-to-l from-secondary/100 via-secondary/80 to-transparent z-10 pointer-events-none" />

        {/* First row - scrolling left */}
        <div className="flex animate-marquee mb-6">
          <div className="flex shrink-0 gap-6 sm:gap-8 items-center">
            {logos.map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl px-4 sm:px-6 py-3 sm:py-4 min-w-[100px] sm:min-w-[140px] h-14 sm:h-18 flex items-center justify-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <img 
                  src={logo.image} 
                  alt={logo.name}
                  className="max-h-8 sm:max-h-10 max-w-[80px] sm:max-w-[100px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 gap-6 sm:gap-8 items-center ml-6 sm:ml-8">
            {logos.map((logo, index) => (
              <div
                key={`row1-dup-${index}`}
                className="flex-shrink-0 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl px-4 sm:px-6 py-3 sm:py-4 min-w-[100px] sm:min-w-[140px] h-14 sm:h-18 flex items-center justify-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <img 
                  src={logo.image} 
                  alt={logo.name}
                  className="max-h-8 sm:max-h-10 max-w-[80px] sm:max-w-[100px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scrolling right */}
        <div className="flex animate-marquee-reverse">
          <div className="flex shrink-0 gap-6 sm:gap-8 items-center">
            {logos2.map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl px-4 sm:px-6 py-3 sm:py-4 min-w-[100px] sm:min-w-[140px] h-14 sm:h-18 flex items-center justify-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <img 
                  src={logo.image} 
                  alt={logo.name}
                  className="max-h-8 sm:max-h-10 max-w-[80px] sm:max-w-[100px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 gap-6 sm:gap-8 items-center ml-6 sm:ml-8">
            {logos2.map((logo, index) => (
              <div
                key={`row2-dup-${index}`}
                className="flex-shrink-0 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl px-4 sm:px-6 py-3 sm:py-4 min-w-[100px] sm:min-w-[140px] h-14 sm:h-18 flex items-center justify-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <img 
                  src={logo.image} 
                  alt={logo.name}
                  className="max-h-8 sm:max-h-10 max-w-[80px] sm:max-w-[100px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupBands;
