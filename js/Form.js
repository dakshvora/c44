class Form {

constructor(){
this.title = createElement('h2');
this.maths= createElement('h3');
this.hist= createElement('h3');
this.eng= createElement('h3');
this.geo= createElement('h3');
this.civ =createElement('h3');
this.bio= createElement('h3');
this.phy=createElement('h3');
this.chem=createElement('h3');
this.hin=createElement('h3');
this.guj=createElement('h3');
this.adv=createElement('h3');

this.ad= createInput("Description");
this.en= createInput("Description");
this.ma= createInput("Description");
this.ph= createInput("Description");
this.ch= createInput("Description");
this.bi= createInput("Description");
this.hs= createInput("Description");
this.ci= createInput("Description");
this.ge= createInput("Description");
this.hi= createInput("Description");
this.gu= createInput("Description");

this.ad1= createInput("Duration");
this.en1= createInput("Duration");
this.ma1= createInput("Duration");
this.ph1= createInput("Duration");
this.ch1= createInput("Duration");
this.bi1= createInput("Duration");
this.hs1= createInput("Duration");
this.ci1= createInput("Duration");
this.ge1= createInput("Duration");
this.hi1= createInput("Duration");
this.gu1= createInput("Duration");

this.ad2= createButton("Start");
this.en2= createButton("Start");
this.ma2= createButton("Start");
this.ph2= createButton("Start");
this.ch2= createButton("Start");
this.bi2= createButton("Start");
this.hs2= createButton("Start");
this.ci2= createButton("Start");
this.ge2= createButton("Start");
this.hi2= createButton("Start");
this.gu2= createButton("Start");

this.ad3= createButton("Submitted");
this.en3= createButton("Submitted");
this.ma3= createButton("Submitted");
this.ph3= createButton("Submitted");
this.ch3= createButton("Submitted");
this.bi3= createButton("Submitted");
this.hs3= createButton("Submitted");
this.ci3= createButton("Submitted");
this.ge3= createButton("Submitted");
this.hi3= createButton("Submitted");
this.gu3= createButton("Submitted");
}

display(){


this.title.html("H.W. Manager");
this.title.position(750,50);
this.adv.html("Advisory");
this.adv.position(400,100);
this.eng.html("English");
this.eng.position(400,150);
this.maths.html("Maths");
this.maths.position(400,200);
this.phy.html("Physics");
this.phy.position(400,250);
this.chem.html("Chemistry");
this.chem.position(400,300);
this.bio.html("Biology");
this.bio.position(400,350);
this.hist.html("History");
this.hist.position(400,400);
this.civ.html("Civics");
this.civ.position(400,450);
this.geo.html("Geography");
this.geo.position(400,500);
this.hin.html("Hindi");
this.hin.position(400,550);
this.guj.html("Gujarati");
this.guj.position(400,600);



//DESCRIPTION & DURATION
this.ad.position(490,120);
this.en.position(490,170);
this.ma.position(490,220);
this.ph.position(490,270);
this.ch.position(490,320);
this.bi.position(490,370);
this.hs.position(490,420);
this.ci.position(490,470);
this.ge.position(490,520);
this.hi.position(490,570);
this.gu.position(490,620);

this.ad1.position(660,120);
this.en1.position(660,170);
this.ma1.position(660,220);
this.ph1.position(660,270);
this.ch1.position(660,320);
this.bi1.position(660,370);
this.hs1.position(660,420);
this.ci1.position(660,470);
this.ge1.position(660,520);
this.hi1.position(660,570);
this.gu1.position(660,620);


this.ad2.position(840,120);
this.en2.position(840,170);
this.ma2.position(840,220);
this.ph2.position(840,270);
this.ch2.position(840,320);
this.bi2.position(840,370);
this.hs2.position(840,420);
this.ci2.position(840,470);
this.ge2.position(840,520);
this.hi2.position(840,570);
this.gu2.position(840,620);

this.ad3.position(900,120);
this.en3.position(900,170);
this.ma3.position(900,220);
this.ph3.position(900,270);
this.ch3.position(900,320);
this.bi3.position(900,370);
this.hs3.position(900,420);
this.ci3.position(900,470);
this.ge3.position(900,520);
this.hi3.position(900,570);
this.gu3.position(900,620);

//this.input.position(displayWidth/2 + 180,displayHeight/2 + 50);
//this.button.position(displayWidth/2 + 180,displayHeight/2 + 80);
//this.reset.position(displayWidth/2 + 180,displayHeight/2 + 120);

//MATHS
//this.ma2.buttonpressed(()=>{
//sub.md = this.ma1.value();
//let h = hour();
//let hnew = h +sub.md;
//if(){
  //  console.log(sub.md);
    //this.ma2.hide();
//}

//})
}

}