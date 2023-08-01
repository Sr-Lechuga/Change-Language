"use strict";
const modal = document.querySelector(".modal-overlay"),
      language = localStorage.getItem("language");

const closeModal = () =>{
    modal.style.animation = "disappear 1s forwards";
    setTimeout(() => {
        modal.style.display = "none";
    }, 1000);
};

const selectLanguage = () =>{
    document.querySelector(".english").addEventListener("click",() =>{
        localStorage.setItem("language","en");
        closeModal();
    });
    document.querySelector(".spanish").addEventListener("click",() =>{
        localStorage.setItem("language","es");
        closeModal();
    });
};

if (language === null) selectLanguage();
else {
    console.log(`Language: ${language}`);
    modal.style.display = "none";
}
