function doClick() {
   if(window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches)
       window.open("/images/open_research_information_infographic_darkmode_full.png");
   else
      window.open("/images/open_research_information_infographic.jpg");
       
}