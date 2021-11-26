const readMoreBtn = document.querySelector(".read_more_btn");
const text = document.querySelector(".about_text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show_more_about");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});

const showMoreBtn = document.querySelector(".show_more_btn");
const holistic_text = document.querySelector(".holistic_text");

showMoreBtn.addEventListener("click", (e) => {
  holistic_text.classList.toggle("show_more_holistic");
  if (showMoreBtn.innerText === "Show More") {
    showMoreBtn.innerText = "Show Less";
  } else {
    showMoreBtn.innerText = "Show More";
  }
});

const utilizedHeaderDaVinci = document.querySelector(
  ".utilized_header_daVinci"
);
const daVinciText = document.querySelector(".daVinci_text");
const downArrowUtilizedDaVinci = document.querySelector(
  ".down_arrow_utilized_daVinci"
);

utilizedHeaderDaVinci.addEventListener("click", (downArrowUtilizedDaVinci) => {
  daVinciText.classList.toggle("daVinci_more_text");
  downArrowUtilizedDaVinci.target.classList.toggle("up_arrow_utilized_daVinci");
});

const utilizedHeaderModuler = document.querySelector(
  ".utilized_header_moduler"
);
const modulerText = document.querySelector(".moduler_text");
const downArrowUtilizedModuler = document.querySelector(
  ".down_arrow_utilized_moduler"
);

utilizedHeaderModuler.addEventListener("click", (downArrowUtilizedModuler) => {
  modulerText.classList.toggle("moduler_more_text");
  downArrowUtilizedModuler.target.classList.toggle("up_arrow_utilized_moduler");
});

const utilizedHeaderCtScan = document.querySelector(".utilized_header_ctScan");
const ctScanText = document.querySelector(".ctScan_text");
const downArrowUtilizedctScan = document.querySelector(
  ".down_arrow_utilized_ctScan"
);

utilizedHeaderCtScan.addEventListener("click", (downArrowUtilizedctScan) => {
  ctScanText.classList.toggle("ctScan_more_text");
  downArrowUtilizedctScan.target.classList.toggle("up_arrow_utilized_ctScan");
});

const utilizedHeadertesla = document.querySelector(".utilized_header_tesla");
const teslaText = document.querySelector(".tesla_text");
const downArrowUtilizedtesla = document.querySelector(
  ".down_arrow_utilized_tesla"
);

utilizedHeadertesla.addEventListener("click", (downArrowUtilizedtesla) => {
  teslaText.classList.toggle("tesla_more_text");
  downArrowUtilizedtesla.target.classList.toggle("up_arrow_utilized_tesla");
});

const utilizedHeadermyrian = document.querySelector(".utilized_header_myrian");
const myrianText = document.querySelector(".myrian_text");
const downArrowUtilizedmyrian = document.querySelector(
  ".down_arrow_utilized_myrian"
);

utilizedHeadermyrian.addEventListener("click", (downArrowUtilizedmyrian) => {
  myrianText.classList.toggle("myrian_more_text");
  downArrowUtilizedmyrian.target.classList.toggle("up_arrow_utilized_myrian");
});

const utilizedHeaderfdg = document.querySelector(".utilized_header_fdg");
const fdgText = document.querySelector(".fdg_text");
const downArrowUtilizedfdg = document.querySelector(".down_arrow_utilized_fdg");

utilizedHeaderfdg.addEventListener("click", (downArrowUtilizedfdg) => {
  fdgText.classList.toggle("fdg_more_text");
  downArrowUtilizedfdg.target.classList.toggle("up_arrow_utilized_fdg");
});

const utilizedHeadertransplant = document.querySelector(
  ".utilized_header_transplant"
);
const transplantText = document.querySelector(".transplant_text");
const downArrowUtilizedtransplant = document.querySelector(
  ".down_arrow_utilized_transplant"
);

utilizedHeadertransplant.addEventListener(
  "click",
  (downArrowUtilizedtransplant) => {
    transplantText.classList.toggle("transplant_more_text");
    downArrowUtilizedtransplant.target.classList.toggle(
      "up_arrow_utilized_transplant"
    );
  }
);

const utilizedHeadersurgery = document.querySelector(
  ".utilized_header_surgery"
);
const surgeryText = document.querySelector(".surgery_text");
const downArrowUtilizedsurgery = document.querySelector(
  ".down_arrow_utilized_surgery"
);

utilizedHeadersurgery.addEventListener("click", (downArrowUtilizedsurgery) => {
  surgeryText.classList.toggle("surgery_more_text");
  downArrowUtilizedsurgery.target.classList.toggle("up_arrow_utilized_surgery");
});

const utilizedHeaderbiliary = document.querySelector(
  ".utilized_header_biliary"
);
const biliaryText = document.querySelector(".biliary_text");
const downArrowUtilizedbiliary = document.querySelector(
  ".down_arrow_utilized_biliary"
);

utilizedHeaderbiliary.addEventListener("click", (downArrowUtilizedbiliary) => {
  biliaryText.classList.toggle("biliary_more_text");
  downArrowUtilizedbiliary.target.classList.toggle("up_arrow_utilized_biliary");
});

const utilizedHeaderinter = document.querySelector(".utilized_header_inter");
const interText = document.querySelector(".inter_text");
const downArrowUtilizedinter = document.querySelector(
  ".down_arrow_utilized_inter"
);

utilizedHeaderinter.addEventListener("click", (downArrowUtilizedinter) => {
  interText.classList.toggle("inter_more_text");
  downArrowUtilizedinter.target.classList.toggle("up_arrow_utilized_inter");
});

const NewsUpdate = document.querySelector(".NewsUpdate");
const activeProgram = document.querySelector(".activeProgram");
const research = document.querySelector(".research");
const patient = document.querySelector(".patient");
let newsUpdateContent = document.querySelector(".newsUpdate_content");
let activeProgramContent = document.querySelector(".activeProgram_content");
let researchContent = document.querySelector(".research_content");
let patientContent = document.querySelector(".patient_content");
let patientLogo = document.querySelector(".patient_logo");
let activeProgramLogo = document.querySelector(".activeProgram_logo");
let researchLogo = document.querySelector(".research_logo");
let NewsUpdateLogo = document.querySelector(".NewsUpdate_logo");
let NewsUpdateText = document.querySelector(".NewsUpdate_text");
let activeProgramText = document.querySelector(".activeProgram_text");
let researchText = document.querySelector(".research_text");
let patientText = document.querySelector(".patient_text");

function newsUpdate(){
    NewsUpdateText.classList.add("active");
    if(patientText.classList == "patient_text p-4 active"){
        patientText.classList.remove("active")
    }
    if(activeProgramText.classList == "activeProgram_text p-4 active"){
        activeProgramText.classList.remove("active")
    }
    if(researchText.classList == "research_text p-4 active"){
        researchText.classList.remove("active")
    }

    NewsUpdateLogo.classList.add("active");
    if(patientLogo.classList == "patient_logo active"){
        patientLogo.classList.remove("active")
    }
    if(activeProgramLogo.classList == "activeProgram_logo active"){
        activeProgramLogo.classList.remove("active")
    }
    if(researchLogo.classList == "research_logo active"){
        researchLogo.classList.remove("active")
    }
    if (newsUpdateContent.style.display  === "none"){
        newsUpdateContent.style.display  = "inline";
    }
    if(activeProgramContent.style.display  === "inline"){
        activeProgramContent.style.display  = "none"
    }
    if(researchContent.style.display  === "inline"){
        researchContent.style.display  = "none"
    }
    if(patientContent.style.display  === "inline"){
        patientContent.style.display  = "none"
    }
}
function activeProgramFunction(){
    activeProgramText.classList.add("active");
    if(patientText.classList == "patient_text p-4 active"){
        patientText.classList.remove("active")
    }
    if(NewsUpdateText.classList == "NewsUpdate_text p-4 active"){
        NewsUpdateText.classList.remove("active")
    }
    if(researchText.classList == "research_text p-4 active"){
        researchText.classList.remove("active")
    }

    activeProgramLogo.classList.add("active");
    if(patientLogo.classList == "patient_logo active"){
        patientLogo.classList.remove("active")
    }
    if(NewsUpdateLogo.classList == "NewsUpdate_logo active"){
        NewsUpdateLogo.classList.remove("active")
    }
    if(researchLogo.classList == "research_logo active"){
        researchLogo.classList.remove("active")
    }
    if (newsUpdateContent.style.display  === "inline"){
        newsUpdateContent.style.display  = "none";
    }
    if(activeProgramContent.style.display  === "none"){
        activeProgramContent.style.display  = "inline"
    }
    if(researchContent.style.display  === "inline"){
        researchContent.style.display  = "none"
    }
    if(patientContent.style.display  === "inline"){
        patientContent.style.display  = "none"
    }
}
function researchFunction(){
    researchText.classList.add("active");
    if(patientText.classList == "patient_text p-4 active"){
        patientText.classList.remove("active")
    }
    if(activeProgramText.classList == "activeProgram_text p-4 active"){
        activeProgramText.classList.remove("active")
    }
    if(researchText.classList == "NewsUpdate_text p-4 active"){
        researchText.classList.remove("active")
    }

    researchLogo.classList.add("active");
    if(patientLogo.classList == "patient_logo active"){
        patientLogo.classList.remove("active")
    }
    if(activeProgramLogo.classList == "activeProgram_logo active"){
        activeProgramLogo.classList.remove("active")
    }
    if(NewsUpdateLogo.classList == "NewsUpdate_logo active"){
        NewsUpdateLogo.classList.remove("active")
    }
    if (newsUpdateContent.style.display  === "inline"){
        newsUpdateContent.style.display  = "none";
    }
    if(activeProgramContent.style.display  === "inline"){
        activeProgramContent.style.display  = "none"
    }
    if(researchContent.style.display  === "none"){
        researchContent.style.display  = "inline"
    }
    if(patientContent.style.display  === "inline"){
        patientContent.style.display  = "none"
    }
}
function patientFunction(){
    patientText.classList.add("active");
    if(NewsUpdateText.classList == "NewsUpdate_text active"){
        NewsUpdateText.classList.remove("active")
    }
    if(activeProgramText.classList == "activeProgram_text p-4 active"){
        activeProgramText.classList.remove("active")
    }
    if(researchText.classList == "research_text p-4 active"){
        researchText.classList.remove("active")
    }

    patientLogo.classList.add("active");
    if(researchLogo.classList == "research_logo active"){
        researchLogo.classList.remove("active")
    }
    if(activeProgramLogo.classList == "activeProgram_logo active"){
        activeProgramLogo.classList.remove("active")
    }
    if(NewsUpdateLogo.classList == "NewsUpdate_logo active"){
        NewsUpdateLogo.classList.remove("active")
    }
    if (newsUpdateContent.style.display  === "inline"){
        newsUpdateContent.style.display  = "none";
    }
    if(activeProgramContent.style.display  === "inline"){
        activeProgramContent.style.display  = "none"
    }
    if(researchContent.style.display  === "inline"){
        researchContent.style.display  = "none"
    }
    if(patientContent.style.display  === "none"){
        patientContent.style.display  = "inline"
    }

}

window.addEventListener('scroll', function(){
  let myNavbarFixed = document.querySelector(".myNavbarFixed");
  myNavbarFixed.classList.toggle("stickyStyle", window.scrollY > 433)
  console.log(window.scrollY)
})


// function activeProgram(){
//     newsUpdateContent.style.display  = "none";
//     activeProgramContent.style.display  = "inline";
//     researchContent.style.display  = "none";
//     patientContent.style.display  = "none";
// }
// function research(){
//     newsUpdateContent.style.display  = "none";
//     activeProgramContent.style.display  = "none";
//     researchContent.style.display  = "inline";
//     patientContent.style.display  = "none";
// }
// function patient(){
//     newsUpdateContent.style.display  = "none";
//     activeProgramContent.style.display  = "none";
//     researchContent.style.display  = "none";
//     patientContent.style.display  = "inline";
// }

// NewsUpdate.addEventListener(
//   "click",
//   (
//     newsUpdateId,
//     activeProgramContent,
//     researchContent,
//     patientContent
//   ) => {
//     // newsUpdateId.style.display = "inline";
//     // activeProgramContent.style.display = "none";
//     // researchContent.style.display = "none";
//     // patientContent.style.display = "none";
//     console.log(newsUpdateId )
//   }
// );
// activeProgram.addEventListener(
//   "click",
//   (
//     newsUpdateContent,
//     activeProgramContent,
//     researchContent,
//     patientContent
//   ) => {
//     // newsUpdateContent.style.display = "none";
//     // activeProgramContent.style.display = "inline";
//     // researchContent.style.display = "none";
//     // patientContent.style.display = "none";
//   }
// );
// research.addEventListener(
//   "click",
//   (
//     newsUpdateContent,
//     activeProgramContent,
//     researchContent,
//     patientContent
//   ) => {
//     newsUpdateContent.style.display = "none";
//     activeProgramContent.style.display = "none";
//     researchContent.style.display = "inline";
//     patientContent.style.display = "none";
//   }
// );
// patient.addEventListener(
//     "click",
//     (
//       newsUpdateContent,
//       activeProgramContent,
//       researchContent,
//       patientContent
//     ) => {
//       newsUpdateContent.style.display = "none";
//       activeProgramContent.style.display = "none";
//       researchContent.style.display = "none";
//       patientContent.style.display = "inline";
//     }
//   );
