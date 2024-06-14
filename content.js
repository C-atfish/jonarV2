const header_content = {
    en: {
        home_btn: "Home",
        about_btn: "About",
        project_btn: "Projects",
        contact_btn: "Contact",
        lang_option: "Languages",
        eng_option: "English",
        no_option: "Norwegian",
        hello_text: "Hi, I'm Jonar,",
        hello_text2: " a",
    },
    no: {
        home_btn: "Hjem",
        about_btn: "Om meg",
        project_btn: "Prosjekter",
        contact_btn: "Kontakt",
        lang_option: "Språk",
        eng_option: "Engelsk",
        no_option: "Norsk",
        hello_text: "Hei, mitt navn er Jonar!",
        hello_text2: " Jeg er en",
    }
}

function change_header_content(){
    const chosen_lang = localStorage.getItem('language')
    if(chosen_lang === "english"){
        document.getElementById("home-btn").innerText = header_content.en.home_btn
        document.getElementById("about-btn").innerText = header_content.en.about_btn
        document.getElementById("projects-btn").innerText = header_content.en.project_btn
        document.getElementById("contact-btn").innerText = header_content.en.contact_btn
        document.getElementById("lang-option").innerText = header_content.en.lang_option
        document.getElementById("english-option").innerText = header_content.en.eng_option
        document.getElementById("norwegian-option").innerText = header_content.en.no_option
        //document.getElementById("hello-text").innerText = header_content.en.hello_text
    }else if(chosen_lang === "norwegian"){
        document.getElementById("home-btn").innerText = header_content.no.home_btn
        document.getElementById("about-btn").innerText = header_content.no.about_btn
        document.getElementById("projects-btn").innerText = header_content.no.project_btn
        document.getElementById("contact-btn").innerText = header_content.no.contact_btn
        document.getElementById("lang-option").innerText = header_content.no.lang_option
        document.getElementById("english-option").innerText = header_content.no.eng_option
        document.getElementById("norwegian-option").innerText = header_content.no.no_option
        //document.getElementById("hello-text").innerText = header_content.no.hello_text
    }
}

function change_index_content(){
    const chosen_lang = localStorage.getItem('language')
    if(chosen_lang === "english"){
        document.getElementById("hello-text").innerText = header_content.en.hello_text
        document.getElementById("hello-text2").innerText = header_content.en.hello_text2
    }else if(chosen_lang === "norwegian"){
        document.getElementById("hello-text").innerText = header_content.no.hello_text
        document.getElementById("hello-text2").innerText = header_content.no.hello_text2
    }
}




window.onload = () => {
    console.log("LOADED")
    const chosen_lang = localStorage.getItem("language")
    if(chosen_lang == null){
        console.log("defaulting to english")
        localStorage.setItem("language", 'english')
    }else{
        console.log("u had chosen " + chosen_lang)
        document.getElementById("languages").value = chosen_lang;
    }
    choose_language(chosen_lang)
}

function choose_language(language){
    console.log(language)
    localStorage.setItem("language", language)
    change_header_content()
    if(window.location.href.includes("index")){
        change_index_content()
    }else if(window.location.href.includes("about")){

    }else if(window.location.href.includes("contact")){

    }else if(window.location.href.includes("projects")){

    }

}

