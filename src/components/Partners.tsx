import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Partners = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Life Insurance Companies
  const lifeInsurance = [
    { name: "LIC", image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Life_Insurance_Corporation_of_India_logo.svg/200px-Life_Insurance_Corporation_of_India_logo.svg.png" },
    { name: "Max Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Max_Life_Insurance_logo.svg/200px-Max_Life_Insurance_logo.svg.png" },
    { name: "HDFC Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/HDFC_Life_Insurance_Logo.svg/200px-HDFC_Life_Insurance_Logo.svg.png" },
    { name: "ICICI Prudential", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/ICICI_Prudential_Life_logo.svg/200px-ICICI_Prudential_Life_logo.svg.png" },
    { name: "Kotak Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kotak_Mahindra_Group_logo.svg/200px-Kotak_Mahindra_Group_logo.svg.png" },
    { name: "Aditya Birla Sun Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Aditya_Birla_Group_Logo.svg/200px-Aditya_Birla_Group_Logo.svg.png" },
    { name: "TATA AIA", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/200px-Tata_logo.svg.png" },
    { name: "SBI Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/200px-SBI-logo.svg.png" },
    { name: "Bajaj Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Bajaj_Auto_logo.svg/200px-Bajaj_Auto_logo.svg.png" },
    { name: "PNB MetLife", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/MetLife_logo.svg/200px-MetLife_logo.svg.png" },
    { name: "Reliance Nippon Life", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Reliance_Industries_Logo.svg/200px-Reliance_Industries_Logo.svg.png" },
    { name: "Aviva Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Aviva_Logo.svg/200px-Aviva_Logo.svg.png" },
    { name: "Shriram Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Shriram_Group_Logo.svg/200px-Shriram_Group_Logo.svg.png" },
    { name: "Bharti AXA Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/AXA_Logo.svg/200px-AXA_Logo.svg.png" },
    { name: "Canara HSBC Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/200px-HSBC_logo_%282018%29.svg.png" },
    { name: "Bandhan Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bandhan_Bank_Logo.svg/200px-Bandhan_Bank_Logo.svg.png" },
    { name: "Star Union Dai-Ichi", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bank_of_India_logo.svg/200px-Bank_of_India_logo.svg.png" },
    { name: "IndiaFirst Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bank_of_Baroda_logo.svg/200px-Bank_of_Baroda_logo.svg.png" },
    { name: "Edelweiss Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Edelweiss_Logo.svg/200px-Edelweiss_Logo.svg.png" },
    { name: "Acko Life", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Acko_logo.svg/200px-Acko_logo.svg.png" },
    { name: "Go Digit Life", image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Go_Digit_Insurance_logo.svg/200px-Go_Digit_Insurance_logo.svg.png" },
  ];

  // General Insurance Companies
  const generalInsurance = [
    { name: "National Insurance", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/National_Insurance_Company_Limited_logo.svg/200px-National_Insurance_Company_Limited_logo.svg.png" },
    { name: "New India Assurance", image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/The_New_India_Assurance_Co._Ltd._logo.svg/200px-The_New_India_Assurance_Co._Ltd._logo.svg.png" },
    { name: "Oriental Insurance", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Oriental_Insurance_Company_logo.svg/200px-Oriental_Insurance_Company_logo.svg.png" },
    { name: "United India Insurance", image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/United_India_Insurance_logo.svg/200px-United_India_Insurance_logo.svg.png" },
    { name: "Acko General", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Acko_logo.svg/200px-Acko_logo.svg.png" },
    { name: "Bajaj Allianz", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Allianz_logo.svg/200px-Allianz_logo.svg.png" },
    { name: "Cholamandalam MS", image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Cholamandalam_Investment_and_Finance_Company_logo.svg/200px-Cholamandalam_Investment_and_Finance_Company_logo.svg.png" },
    { name: "Go Digit General", image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Go_Digit_Insurance_logo.svg/200px-Go_Digit_Insurance_logo.svg.png" },
    { name: "HDFC ERGO", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/HDFC_Life_Insurance_Logo.svg/200px-HDFC_Life_Insurance_Logo.svg.png" },
    { name: "ICICI Lombard", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/ICICI_Prudential_Life_logo.svg/200px-ICICI_Prudential_Life_logo.svg.png" },
    { name: "IFFCO-TOKIO", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/IFFCO-Tokio_logo.svg/200px-IFFCO-Tokio_logo.svg.png" },
    { name: "Zurich Kotak", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Zurich_Logo_new.svg/200px-Zurich_Logo_new.svg.png" },
    { name: "Liberty General", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Liberty_Mutual_logo.svg/200px-Liberty_Mutual_logo.svg.png" },
    { name: "Navi General", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Navi_Technologies_Logo.svg/200px-Navi_Technologies_Logo.svg.png" },
    { name: "Reliance General", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Reliance_Industries_Logo.svg/200px-Reliance_Industries_Logo.svg.png" },
    { name: "Royal Sundaram", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Sundaram_Finance_logo.svg/200px-Sundaram_Finance_logo.svg.png" },
    { name: "SBI General", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/200px-SBI-logo.svg.png" },
    { name: "Shriram General", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Shriram_Group_Logo.svg/200px-Shriram_Group_Logo.svg.png" },
    { name: "TATA AIG", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/200px-Tata_logo.svg.png" },
    { name: "Universal Sompo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sompo_Holdings_logo.svg/200px-Sompo_Holdings_logo.svg.png" },
  ];

  // Mutual Fund Companies (AMCs)
  const mutualFunds = [
    { name: "Aditya Birla Sun Life MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Aditya_Birla_Group_Logo.svg/200px-Aditya_Birla_Group_Logo.svg.png" },
    { name: "Axis MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/200px-Axis_Bank_logo.svg.png" },
    { name: "Bajaj Finserv MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Bajaj_Auto_logo.svg/200px-Bajaj_Auto_logo.svg.png" },
    { name: "Bandhan MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bandhan_Bank_Logo.svg/200px-Bandhan_Bank_Logo.svg.png" },
    { name: "Bank of India MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bank_of_India_logo.svg/200px-Bank_of_India_logo.svg.png" },
    { name: "Baroda BNP Paribas MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bank_of_Baroda_logo.svg/200px-Bank_of_Baroda_logo.svg.png" },
    { name: "Canara Robeco MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Canara_Bank_Logo.svg/200px-Canara_Bank_Logo.svg.png" },
    { name: "DSP MF", image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/DSP_Mutual_Fund_logo.svg/200px-DSP_Mutual_Fund_logo.svg.png" },
    { name: "Edelweiss MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Edelweiss_Logo.svg/200px-Edelweiss_Logo.svg.png" },
    { name: "Franklin Templeton MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Franklin_Templeton_Investments_logo.svg/200px-Franklin_Templeton_Investments_logo.svg.png" },
    { name: "Groww MF", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Groww_app_logo.svg/200px-Groww_app_logo.svg.png" },
    { name: "HDFC MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/HDFC_Life_Insurance_Logo.svg/200px-HDFC_Life_Insurance_Logo.svg.png" },
    { name: "HSBC MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/200px-HSBC_logo_%282018%29.svg.png" },
    { name: "ICICI Prudential MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/ICICI_Prudential_Life_logo.svg/200px-ICICI_Prudential_Life_logo.svg.png" },
    { name: "IDBI MF", image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/IDBI_Bank_logo.svg/200px-IDBI_Bank_logo.svg.png" },
    { name: "Invesco MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Invesco_logo.svg/200px-Invesco_logo.svg.png" },
    { name: "ITI MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ITI_Limited_Logo.svg/200px-ITI_Limited_Logo.svg.png" },
    { name: "JM Financial MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/JM_Financial_logo.svg/200px-JM_Financial_logo.svg.png" },
    { name: "Kotak Mahindra MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kotak_Mahindra_Group_logo.svg/200px-Kotak_Mahindra_Group_logo.svg.png" },
    { name: "LIC MF", image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Life_Insurance_Corporation_of_India_logo.svg/200px-Life_Insurance_Corporation_of_India_logo.svg.png" },
    { name: "Mirae Asset MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Mirae_Asset_Global_Investments_logo.svg/200px-Mirae_Asset_Global_Investments_logo.svg.png" },
    { name: "Motilal Oswal MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Motilal_Oswal_Financial_Services_logo.svg/200px-Motilal_Oswal_Financial_Services_logo.svg.png" },
    { name: "Navi MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Navi_Technologies_Logo.svg/200px-Navi_Technologies_Logo.svg.png" },
    { name: "Nippon India MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Nippon_Life_logo.svg/200px-Nippon_Life_logo.svg.png" },
    { name: "SBI MF", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/200px-SBI-logo.svg.png" },
    { name: "India Post", image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/India_Post_Logo.svg/200px-India_Post_Logo.svg.png" },
  ];

  const MarqueeRow = ({ 
    partners, 
    label, 
    reverse = false 
  }: { 
    partners: { name: string; image: string }[]; 
    label: string;
    reverse?: boolean;
  }) => (
    <div className="mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-primary/30" />
        <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-1 bg-primary/10 rounded-full">
          {label}
        </span>
        <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-primary/30" />
      </div>
      <div className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        <div className="flex shrink-0 gap-4 sm:gap-6 items-center">
          {partners.map((partner, index) => (
            <div
              key={`row-${index}`}
              className="flex-shrink-0 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl px-3 sm:px-4 py-2 sm:py-3 min-w-[90px] sm:min-w-[120px] h-12 sm:h-14 flex items-center justify-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <img 
                src={partner.image} 
                alt={partner.name}
                className="max-h-6 sm:max-h-8 max-w-[70px] sm:max-w-[90px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<span class="text-xs text-foreground/60 font-medium text-center">${partner.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex shrink-0 gap-4 sm:gap-6 items-center ml-4 sm:ml-6">
          {partners.map((partner, index) => (
            <div
              key={`row-dup-${index}`}
              className="flex-shrink-0 bg-card/90 backdrop-blur-sm border border-border/50 rounded-xl px-3 sm:px-4 py-2 sm:py-3 min-w-[90px] sm:min-w-[120px] h-12 sm:h-14 flex items-center justify-center hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <img 
                src={partner.image} 
                alt={partner.name}
                className="max-h-6 sm:max-h-8 max-w-[70px] sm:max-w-[90px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<span class="text-xs text-foreground/60 font-medium text-center">${partner.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Leading Insurers & Asset Management Company for your financial freedom.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Strong gradient overlays for smooth fade/glassmorphism effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 md:w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 md:w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        {/* First row - Life Insurance */}
        <MarqueeRow partners={lifeInsurance} label="Life Insurance" />

        {/* Second row - General Insurance */}
        <MarqueeRow partners={generalInsurance} label="General Insurance" reverse />

        {/* Third row - India Post & Mutual Fund */}
        <MarqueeRow partners={mutualFunds} label="India Post & Mutual Fund" />
      </div>
    </section>
  );
};

export default Partners;
