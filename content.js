const header_content = {
  en: {
    home_btn: "Home",
    about_btn: "About",
    project_btn: "Projects",
    contact_btn: "Contact",
    lang_option: "Languages",
    eng_option: "English",
    no_option: "Norwegian",
  },
  no: {
    home_btn: "Hjem",
    about_btn: "Om meg",
    project_btn: "Prosjekter",
    contact_btn: "Kontakt",
    lang_option: "Språk",
    eng_option: "Engelsk",
    no_option: "Norsk",
  },
};

const index_content = {
  en: {
    hello_text: "Hi, I'm Jonar,",
    hello_text2: " a",
    homeDoText: "What do i do?",
    homeDoDescription1: "With a wide variety of ",
    homeDoDescription2: "technical skills, ",
    homeDoDescription3:
      "I can provide a tailor-made application and customer experience to fit your needs.",
    homeServiceTitle: "My services",
    homeService1Title: "Fullstack web and mobile application",
    homeService2Title: "Cloud architect",
    homeService3Title: "System maintenance and consulation",
    homeService2Description:
      "I have experience in setting up and hosting complex, secure, and high-performance applications, both onsite and in the cloud. My primary focus is on optimal performance, scalability, and availability.",
    homeService3Description1:
      "Maintenance services for new and existing systems, including:",
    homeService3Description2: "System maintenance",
    homeService3Description3:
      "Designing infrastructure for efficiency and scalability.",
    homeService3Description4: "Architecture design:",
    homeService3Description5:
      "Updates, troubleshooting, and optimization for peak system performance.",
    homeService3Description6: "Monitoring:",
    homeService3Description7:
      "Continuous monitoring to preemptively identify and resolve potential issues before they impact your operations.",
    homeService1Description1: "Web and mobile solutions, including:",
    homeService1Description2: "E-commerce Solutions:",
    homeService1Description3:
      "Developing web stores for seamless product distribution and customer management.",
    homeService1Description4: "Customer Engagement Systems:",
    homeService1Description5:
      "Review, ratings, bonus, and discount systems to enhance customer loyalty.",
    homeService1Description6: "Restaurant Order and Queue systems",
    homeService1Description7:
      "Sophisticated order and queue systems, with database integration.",
    homeViewProjectsBtn: "View peronal Projects",
  },
  no: {
    hello_text: "Hei, mitt navn er Jonar!",
    hello_text2: " Jeg er en",
    homeDoText: "Hva kan jeg?",
    homeDoDescription1: "Med en bred kunnskap av ",
    homeDoDescription2: "teknologier ",
    homeDoDescription3:
      "kan jeg skape en skreddersydd applikasjon og kundeopplevelse for å passe dine behov.",
    homeServiceTitle: "Mine tjenester",
    homeService1Title: "Fullstack web og mobilapplikasjon",
    homeService2Title: "Cloud arkitekt",
    homeService3Title: "System-vedlikehold og konsulent",
    homeService2Description:
      "Jeg har erfaring med å sette opp og hoste komplekse, sikre og høy-ytelse applikasjoner både onsite og i skyen. Mitt hoved fokus er ytelse, skalerbarhet og tilgjengelighet.",
    homeService3Description1:
      "Vedlikeholdstjenester for nye og eksisterende systemer, inkluderer:",
    homeService3Description2: "System vedlikehold",
    homeService3Description3:
      "Designe infrastruktur for effektivitet og skalerbarhet.",
    homeService3Description4: "Arkitekturdesign:",
    homeService3Description5:
      "Oppdateringer, feilsøking og optimalisering for topp ytelse.",
    homeService3Description6: "Monitorering:",
    homeService3Description7:
      "Kontinuerlig monitorering for å identifisere og løse potensielle problemer før de påvirker operasjonene dine.",
    homeService1Description1: "Web og mobilapplikasjoner, inkluderer:",
    homeService1Description2: "E-business tjenester",
    homeService1Description3:
      "Utvikling av nettbutikker for enkel produktutdeling og kundeopplevelse.",
    homeService1Description4: "Kundeopplevelsessystemer:",
    homeService1Description5:
      "Anmeldelser, vurderinger, bonus og tilbud-systemer for å forbedre kundeopplevelsen.",
    homeService1Description6: "Restaurant bestilling og kø systemer",
    homeService1Description7:
      "Sofistikerte bestilling og kø systemer med databaseintegratjon.",
    homeViewProjectsBtn: "Se personlige prosjekter",
  },
};

const projects_content = {
  en: {
    projectsPageTitle: "Personal projects",
    siegeDescription:
      "An idle online strategy game where you can fight other players, found new villages and take over the world!",
    duobingoDescription:
      "A teambuilding game perfect to add some fun to your workplace or friend group. Add quirks about ablblablabla",
    tryItBtn: "Try it",
    catTitle: "Cat collection",
  },
  no: {
    projectsPageTitle: "Personlige prosjekter",
    siegeDescription:
      "Et inaktivt online strategispill hvor du kan kampe mot andre spillere, finne nye gårder og ta over verden!",
    duobingoDescription:
      "Et teambyggingsspill som er perfekt til å legge til litt humor på arbeidsplassen din eller vennergruppen din. Legg til enkle og enkle ting om ablblablabla",
    tryItBtn: "Prøv nå",
    catTitle: "Kattesamling",
  },
};

function change_projects_content() {
  const chosen_lang = localStorage.getItem("language");
  if (chosen_lang === "english") {
    document.getElementById("projectsPageTitle").innerText =
      projects_content.en.projectsPageTitle;
    document.getElementById("siegeDescription").innerText =
      projects_content.en.siegeDescription;
    document.getElementById("duobingoDescription").innerText =
      projects_content.en.duobingoDescription;

    document.querySelectorAll(".tryItBtn").forEach((btn) => {
      btn.innerText = projects_content.en.tryItBtn;
    });
    document.getElementById("catTitle").innerText =
      projects_content.en.catTitle;
  } else if (chosen_lang === "norwegian") {
    document.getElementById("projectsPageTitle").innerText =
      projects_content.no.projectsPageTitle;
    document.getElementById("siegeDescription").innerText =
      projects_content.no.siegeDescription;
    document.getElementById("duobingoDescription").innerText =
      projects_content.no.duobingoDescription;
    document.querySelectorAll(".tryItBtn").forEach((btn) => {
      btn.innerText = projects_content.no.tryItBtn;
    });
    document.getElementById("catTitle").innerText =
      projects_content.no.catTitle;
  }
}
function change_header_content() {
  const chosen_lang = localStorage.getItem("language");
  if (chosen_lang === "english") {
    document.getElementById("home-btn").innerText = header_content.en.home_btn;
    document.getElementById("about-btn").innerText =
      header_content.en.about_btn;
    document.getElementById("projects-btn").innerText =
      header_content.en.project_btn;
    document.getElementById("contact-btn").innerText =
      header_content.en.contact_btn;
    document.getElementById("lang-option").innerText =
      header_content.en.lang_option;
    document.getElementById("english-option").innerText =
      header_content.en.eng_option;
    document.getElementById("norwegian-option").innerText =
      header_content.en.no_option;
  } else if (chosen_lang === "norwegian") {
    document.getElementById("home-btn").innerText = header_content.no.home_btn;
    document.getElementById("about-btn").innerText =
      header_content.no.about_btn;
    document.getElementById("projects-btn").innerText =
      header_content.no.project_btn;
    document.getElementById("contact-btn").innerText =
      header_content.no.contact_btn;
    document.getElementById("lang-option").innerText =
      header_content.no.lang_option;
    document.getElementById("english-option").innerText =
      header_content.no.eng_option;
    document.getElementById("norwegian-option").innerText =
      header_content.no.no_option;
  }
}

function change_index_content() {
  const chosen_lang = localStorage.getItem("language");
  if (chosen_lang === "english") {
    document.getElementById("hello-text").innerText =
      index_content.en.hello_text;
    document.getElementById("hello-text2").innerText =
      index_content.en.hello_text2;
    document.getElementById("homeDoText").innerText =
      index_content.en.homeDoText;
    document.getElementById("homeDoDescription1").innerText =
      index_content.en.homeDoDescription1;
    document.getElementById("homeDoDescription2").innerText =
      index_content.en.homeDoDescription2;
    document.getElementById("homeDoDescription3").innerText =
      index_content.en.homeDoDescription3;
    document.getElementById("homeServiceTitle").innerText =
      index_content.en.homeServiceTitle;
    document.getElementById("homeService1Title").innerText =
      index_content.en.homeService1Title;
    document.getElementById("homeService2Title").innerText =
      index_content.en.homeService2Title;
    document.getElementById("homeService3Title").innerText =
      index_content.en.homeService3Title;
    document.getElementById("homeService2Description").innerText =
      index_content.en.homeService2Description;
    document.getElementById("homeService3Description1").innerText =
      index_content.en.homeService3Description1;
    document.getElementById("homeService3Description2").innerText =
      index_content.en.homeService3Description2;
    document.getElementById("homeService3Description3").innerText =
      index_content.en.homeService3Description3;
    document.getElementById("homeService3Description4").innerText =
      index_content.en.homeService3Description4;
    document.getElementById("homeService3Description5").innerText =
      index_content.en.homeService3Description5;
    document.getElementById("homeService3Description6").innerText =
      index_content.en.homeService3Description6;
    document.getElementById("homeService3Description7").innerText =
      index_content.en.homeService3Description7;
    document.getElementById("homeService1Description1").innerText =
      index_content.en.homeService1Description1;
    document.getElementById("homeService1Description2").innerText =
      index_content.en.homeService1Description2;
    document.getElementById("homeService1Description3").innerText =
      index_content.en.homeService1Description3;
    document.getElementById("homeService1Description4").innerText =
      index_content.en.homeService1Description4;
    document.getElementById("homeService1Description5").innerText =
      index_content.en.homeService1Description5;
    document.getElementById("homeService1Description6").innerText =
      index_content.en.homeService1Description6;
    document.getElementById("homeService1Description7").innerText =
      index_content.en.homeService1Description7;
    document.getElementById("homeViewProjectsBtn").innerText =
      index_content.en.homeViewProjectsBtn;
  } else if (chosen_lang === "norwegian") {
    document.getElementById("hello-text").innerText =
      index_content.no.hello_text;
    document.getElementById("hello-text2").innerText =
      index_content.no.hello_text2;
    document.getElementById("homeDoText").innerText =
      index_content.no.homeDoText;
    document.getElementById("homeDoDescription1").innerText =
      index_content.no.homeDoDescription1;
    document.getElementById("homeDoDescription2").innerText =
      index_content.no.homeDoDescription2;
    document.getElementById("homeDoDescription3").innerText =
      index_content.no.homeDoDescription3;
    document.getElementById("homeServiceTitle").innerText =
      index_content.no.homeServiceTitle;
    document.getElementById("homeService1Title").innerText =
      index_content.no.homeService1Title;
    document.getElementById("homeService2Title").innerText =
      index_content.no.homeService2Title;
    document.getElementById("homeService3Title").innerText =
      index_content.no.homeService3Title;
    document.getElementById("homeService2Description").innerText =
      index_content.no.homeService2Description;
    document.getElementById("homeService3Description1").innerText =
      index_content.no.homeService3Description1;
    document.getElementById("homeService3Description2").innerText =
      index_content.no.homeService3Description2;
    document.getElementById("homeService3Description3").innerText =
      index_content.no.homeService3Description3;
    document.getElementById("homeService3Description4").innerText =
      index_content.no.homeService3Description4;
    document.getElementById("homeService3Description5").innerText =
      index_content.no.homeService3Description5;
    document.getElementById("homeService3Description6").innerText =
      index_content.no.homeService3Description6;
    document.getElementById("homeService3Description7").innerText =
      index_content.no.homeService3Description7;
    document.getElementById("homeService1Description1").innerText =
      index_content.no.homeService1Description1;
    document.getElementById("homeService1Description2").innerText =
      index_content.no.homeService1Description2;
    document.getElementById("homeService1Description3").innerText =
      index_content.no.homeService1Description3;
    document.getElementById("homeService1Description4").innerText =
      index_content.no.homeService1Description4;
    document.getElementById("homeService1Description5").innerText =
      index_content.no.homeService1Description5;
    document.getElementById("homeService1Description6").innerText =
      index_content.no.homeService1Description6;
    document.getElementById("homeService1Description7").innerText =
      index_content.no.homeService1Description7;
    document.getElementById("homeViewProjectsBtn").innerText =
      index_content.no.homeViewProjectsBtn;
  }
}

window.onload = () => {
  console.log("LOADED");
  const chosen_lang = localStorage.getItem("language");
  if (chosen_lang == null) {
    console.log("defaulting to english");
    localStorage.setItem("language", "english");
  } else {
    console.log("u had chosen " + chosen_lang);
    document.getElementById("languages").value = chosen_lang;
  }
  choose_language(chosen_lang);
};

function choose_language(language) {
  console.log(language);
  localStorage.setItem("language", language);
  change_header_content();
  if (window.location.href.includes("index")) {
    change_index_content();
  } else if (window.location.href.includes("about")) {
  } else if (window.location.href.includes("contact")) {
  } else if (window.location.href.includes("projects")) {
    change_projects_content();
  }
}
