import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Partners = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Life Insurance Companies with proper logos
  const lifeInsurance = [
    { name: "LIC", image: "https://companieslogo.com/img/orig/LICI.NS-47be1c98.png?t=1647270408" },
    { name: "Max Life", image: "https://companieslogo.com/img/orig/MAXHEALTH.NS-30ab9cfe.png?t=1720244492" },
    { name: "HDFC Life", image: "https://companieslogo.com/img/orig/HDFCLIFE.NS-d6dd6428.png?t=1720244492" },
    { name: "ICICI Prudential", image: "https://companieslogo.com/img/orig/ICICIPRULI.NS-29281503.png?t=1720244492" },
    { name: "Kotak Life", image: "https://companieslogo.com/img/orig/KOTAKBANK.NS-19038e20.png?t=1720244493" },
    { name: "Aditya Birla Sun Life", image: "https://companieslogo.com/img/orig/ABSLAMC.NS-8d2af5f6.png?t=1720244490" },
    { name: "TATA AIA", image: "https://companieslogo.com/img/orig/TATACONSUM.NS-c7f01ac4.png?t=1720244494" },
    { name: "SBI Life", image: "https://companieslogo.com/img/orig/SBILIFE.NS-6b285ceb.png?t=1720244493" },
    { name: "Bajaj Allianz Life", image: "https://companieslogo.com/img/orig/BAJFINANCE.NS-5b55eb98.png?t=1720244490" },
    { name: "PNB MetLife", image: "https://companieslogo.com/img/orig/PNB.NS-fa8f4a28.png?t=1720244493" },
    { name: "Reliance Nippon Life", image: "https://companieslogo.com/img/orig/RELIANCE.NS-aeebfcef.png?t=1720244493" },
    { name: "Aviva Life", image: "https://companieslogo.com/img/orig/AV.L-ec0a7cae.png?t=1720244490" },
    { name: "Shriram Life", image: "https://companieslogo.com/img/orig/SHRIRAMFIN.NS-ede17ac3.png?t=1720244494" },
    { name: "Bharti AXA Life", image: "https://companieslogo.com/img/orig/BHARTIARTL.NS-0f3cc799.png?t=1720244490" },
    { name: "Canara HSBC Life", image: "https://companieslogo.com/img/orig/CANBK.NS-7f9e6ba0.png?t=1720244491" },
    { name: "Bandhan Life", image: "https://companieslogo.com/img/orig/BANDHANBNK.NS-fb05c3f5.png?t=1720244490" },
    { name: "Star Union Dai-Ichi", image: "https://companieslogo.com/img/orig/BANKINDIA.NS-a66f8a93.png?t=1720244490" },
    { name: "IndiaFirst Life", image: "https://companieslogo.com/img/orig/BANKBARODA.NS-28866f2c.png?t=1720244490" },
    { name: "Edelweiss Life", image: "https://companieslogo.com/img/orig/EDELWEISS.NS-e3ed38d9.png?t=1720244491" },
    { name: "Acko Life", image: "https://cdn.worldvectorlogo.com/logos/acko-2.svg" },
    { name: "Go Digit Life", image: "https://companieslogo.com/img/orig/DIGI.NS-8e70a5e8.png?t=1720244491" },
  ];

  // General Insurance Companies
  const generalInsurance = [
    { name: "National Insurance", image: "https://www.nationalinsurance.nic.co.in/sites/default/files/inline-images/nic_logo.png" },
    { name: "New India Assurance", image: "https://companieslogo.com/img/orig/NIACL.NS-19e2a5b2.png?t=1720244493" },
    { name: "Oriental Insurance", image: "https://orientalinsurance.org.in/en/images/logo.png" },
    { name: "United India Insurance", image: "https://companieslogo.com/img/orig/UIIC.NS_BIG-b0b05f87.png?t=1720244494" },
    { name: "Acko General", image: "https://cdn.worldvectorlogo.com/logos/acko-2.svg" },
    { name: "Bajaj Allianz", image: "https://companieslogo.com/img/orig/BAJFINANCE.NS-5b55eb98.png?t=1720244490" },
    { name: "Cholamandalam MS", image: "https://companieslogo.com/img/orig/CHOLAFIN.NS-df9b2e67.png?t=1720244491" },
    { name: "Go Digit General", image: "https://companieslogo.com/img/orig/DIGI.NS-8e70a5e8.png?t=1720244491" },
    { name: "HDFC ERGO", image: "https://companieslogo.com/img/orig/HDFCLIFE.NS-d6dd6428.png?t=1720244492" },
    { name: "ICICI Lombard", image: "https://companieslogo.com/img/orig/ICICIGI.NS-20ed1c7c.png?t=1720244492" },
    { name: "IFFCO-TOKIO", image: "https://www.iffcotokio.co.in/themes/custom/iffco_tokio/logo.svg" },
    { name: "Zurich Kotak", image: "https://companieslogo.com/img/orig/ZURN.SW-3a7b5019.png?t=1720244494" },
    { name: "Liberty General", image: "https://companieslogo.com/img/orig/LFC-c3b8ea15.png?t=1720244493" },
    { name: "Navi General", image: "https://companieslogo.com/img/orig/NAVI.NS-d97b2e0a.png?t=1720244493" },
    { name: "Reliance General", image: "https://companieslogo.com/img/orig/RELIANCE.NS-aeebfcef.png?t=1720244493" },
    { name: "Royal Sundaram", image: "https://companieslogo.com/img/orig/SUNDARMFIN.NS-09d03a1d.png?t=1720244494" },
    { name: "SBI General", image: "https://companieslogo.com/img/orig/SBIN.NS-dc50524e.png?t=1720244493" },
    { name: "Shriram General", image: "https://companieslogo.com/img/orig/SHRIRAMFIN.NS-ede17ac3.png?t=1720244494" },
    { name: "TATA AIG", image: "https://companieslogo.com/img/orig/TATACONSUM.NS-c7f01ac4.png?t=1720244494" },
    { name: "Universal Sompo", image: "https://companieslogo.com/img/orig/INDUSINDBK.NS-72c40a90.png?t=1720244492" },
  ];

  // Mutual Fund Companies (AMCs)
  const mutualFunds = [
    { name: "360 ONE MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830285/360_ONE_MUTUAL_FUND_votcpk.png" },
    { name: "Abakkus MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830285/Abakkus_Mutual_Fund_msu5cv.png" },
    { name: "Aditya Birla Sun Life MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830285/Aditya_Birla_Sun_Life_Mutual_Fund_gribmb.png" },
    { name: "Angel One MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830285/Angel_One_Mutual_Fund_lyykn0.png" },
    { name: "Axis MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830285/Axis_Mutual_Fund_jpxvr4.png" },
    { name: "Bajaj Finserv MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830286/Bajaj_Finserv_Mutual_Fund_cgv8j6.png" },
    { name: "Bandhan MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830285/Bandhan_Mutual_Fund_gbbpp2.png" },
    { name: "Bank of India MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830286/Bank_of_India_Mutual_Fund_ijzte5.png" },
    { name: "Baroda BNP Paribas MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830286/Baroda_BNP_Paribas_Mutual_Fund_p46or8.png" },
    { name: "Canara Robeco MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830286/Canara_Robeco_Mutual_Fund_zwxyeb.png" },
    { name: "Capitalmind MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830286/Capitalmind_Mutual_Fund_hjfixb.png" },
    { name: "DSP MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830286/DSP_Mutual_Fund_yek60i.png" },
    { name: "Edelweiss MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830287/Edelweiss_Mutual_Fund_oingif.png" },
    { name: "Franklin Templeton MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830286/Franklin_Templeton_Mutual_Fund_jdrbpr.png" },
    { name: "Goldman Sachs MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830288/Goldman_Sachs_Mutual_Fund_usiere.png" },
    { name: "Groww MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830294/Groww_Mutual_Fund_uakalz.png" },
    { name: "HDFC MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830294/HDFC_Mutual_Fund_fmq6yu.png" },
    { name: "Helios MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830295/Helios_Mutual_Fund_hegrza.png" },
    { name: "HSBC MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830295/HSBC_Mutual_Fund_udqdde.png" },
    { name: "ICICI Prudential MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830295/ICICI_Prudential_Mutual_Fund_eoyhng.png" },
    { name: "IDBI MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830295/IDBI_Mutual_Fund_mbjavx.png" },
    { name: "IIFCL MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830296/IIFCL_Mutual_Fund_jtual9.png" },
    { name: "IL&FS MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830296/IL_FS_Mutual_Fund_umicx7.png" },
    { name: "Invesco MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830298/Invesco_Mutual_Fund_ydiy48.png" },
    { name: "ITI MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830300/ITI_Mutual_Fund_xwck1p.png" },
    { name: "Jio BlackRock MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/Jio_BlackRock_Mutual_Fund_gd9ma4.png" },
    { name: "JM Financial MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/JM_Financial_Mutual_Fund_wddtds.png" },
    { name: "Kotak Mahindra MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/Kotak_Mahindra_Mutual_Fund_xjhw3r.png" },
    { name: "LIC MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/LIC_Mutual_Fund_zzqp4s.png" },
    { name: "Mirae Asset MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/Mirae_Asset_Mutual_Fund_yd70vt.png" },
    { name: "Motilal Oswal MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/Motilal_Oswal_Mutual_Fund_tfvbuw.png" },
    { name: "Navi MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/Navi_Mutual_Fund_fx7mjq.png" },
    { name: "Nippon India MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/Nippon_India_Mutual_Fund_hrarjs.png" },
    { name: "NJ MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830302/NJ_Mutual_Fund_nrhe1c.png" },
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
              title={partner.name}
            >
              <img 
                src={partner.image} 
                alt={partner.name}
                className="max-h-6 sm:max-h-8 max-w-[70px] sm:max-w-[90px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<span class="text-xs text-foreground/60 font-medium text-center leading-tight">${partner.name}</span>`;
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
              title={partner.name}
            >
              <img 
                src={partner.image} 
                alt={partner.name}
                className="max-h-6 sm:max-h-8 max-w-[70px] sm:max-w-[90px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<span class="text-xs text-foreground/60 font-medium text-center leading-tight">${partner.name}</span>`;
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

        {/* Third row - Mutual Fund */}
        <MarqueeRow partners={mutualFunds} label="Mutual Funds" />
      </div>
    </section>
  );
};

export default Partners;
