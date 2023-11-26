//---------------------------------------------------------
 "use strict";
//---------------------------------------------------------


 function guixVlogInit ()
 {
 app.guix.vlog=aa.virtualLogNew(22);
 }




 function guixVlogSet (line,lines,txt)
 {
 var msg;
 msg={};
 msg.txt=txt;
 if(aa.virtualLogSet(app.guix.vlog,line,lines,msg.txt)==false) { aa.debugAlert(); }
 }





 function guixVlogAppend (txt)
 {
 var msg;
 if(app.guix.vlog)
  {
  msg={};
  msg.txt=txt;
  if(aa.virtualLogSet(app.guix.vlog,0,app.guix.vlog.num_lines-1,msg.txt)==false) { aa.debugAlert(); }
  if(txt=="reload"&&app.fp.dz=="chrome laptop")   {   aa.envReload(true,300);   }
  }
 }



 //guixAssertion(grp,"inline-block",true,0.7,3,((dhit/2)>>0)+80,dwid-6,(((dhit/2)>>0)-80)-3,dwid-6,(((dhit/2)-80)>>0)-3);

 function guixVlogPaint ()
 {
 var ogrp,hit,col,fnt,fix,xx,yy,al,i,txt,this_disp,bs,grad,ww,hh,grad;
 var vlog_fade=7;
 if(app.guix.vlog)
  {
  this_disp=aa.envDisplayGet();
  ogrp=aa.guiGroupGetById("overlay");
  if(ogrp==null) { aa.debugAlert(); }
  hit=ogrp.vars.kool.probe.css_area.height;
  col=(hit/app.guix.vlog.num_lines)>>0;
  col=7*ogrp.vars.scale_w;
  fnt=guixFontSet("srccodepro",780,col);
  //fix=aa.guiFontFix(fnt);
  fix=0;
  //dconsole.log(ogrp.vars.scale_w+" "+ogrp.vars.scale_h+"  "+ogrp.vars.is_retina);
////  console.log(fnt);


  //aa.guiCanvasClear(ogrp.han);
  //console.log(ogrp.dom.width);
  ww=ogrp.dom.width;//ogrp.vars.kool.probe.css_area.width;
  hh=ogrp.dom.height;//ogrp.vars.kool.probe.css_area.height;
  if(isNaN(ww)) { ww=0; }
  if(isNaN(hh)) { hh=0; }
  ///console.log(ogrp.ctx);
  ///console.log(ww+" "+hh);
  grad=ogrp.ctx.createLinearGradient(0,0,ww,hh);
  grad.addColorStop(0.0,aa.guiRgbaString(255,250,242,1.0));
  grad.addColorStop(0.5,aa.guiRgbaString(215,234,242,1.0));
  grad.addColorStop(1.0,aa.guiRgbaString(255,220,252,1.0));
  aa.guiCanvasFill(ogrp.han,0,0,ww,hh,grad);

  xx=2+this_disp.safety_sal+10;
  yy=2+this_disp.safety_sat;
  al=1/(app.guix.vlog.num_lines/vlog_fade);
  if(al>1.0) { al=1.0; }

  for(i=0;i<app.guix.vlog.num_lines;i++)
   {
   txt=aa.virtualLogGet(app.guix.vlog,i);
   if(txt==false)
    {
    al+=(1/(app.guix.vlog.num_lines/vlog_fade));
    if(al>1.0) { al=1.0; }
    yy+=col+fix+2;
    continue;
    }
   yy+=fix;
   if(txt.length>0)
    {
    al=255;
    //aa.guiCanvasText(ogrp.han,xx,yy,0,null,aa.guiRgbaString(5,5,5,200),fnt,i+") "+txt);
    aa.guiCanvasText(ogrp.han,xx,yy,0,null,aa.guiRgbaString(5,5,5,200),fnt,""+txt);
    }
   al+=(1/(app.guix.vlog.num_lines/2));
   if(al>1.0) { al=1.0; }
   yy+=col+2;
   }
  app.guix.vlog.needs_paint=false;
  }
 }






 function guixVlogUpdate ()
 {
 var obj,txt,ela;
 var psa,psb,psc,psd;

 txt=""+aa.timerMsRunning()+"  "+aa.main_state.stage;
 guixVlogSet(1,1,txt);

 obj=app.mpipe.obj_ray[0];
 txt="mpipe[0]";
 guixVlogSet(4,1,txt);

 ela=aa.timerMsRunning()-obj.raw_queue_tik;
 psa=obj.raw_queue_reads/(ela/1000.0);
 psb=obj.raw_queue_writes/(ela/1000.0);
 ela=aa.timerMsRunning()-obj.processed_queue_tik;
 psc=obj.processed_queue_reads/(ela/1000.0);
 psd=obj.processed_queue_writes/(ela/1000.0);
 psa=Math.round(psa*100)/100;
 psb=Math.round(psb*100)/100;
 psc=Math.round(psc*100)/100;
 psd=Math.round(psd*100)/100;


 txt="raw_queue.length="+obj.raw_queue.length+"  reads="+obj.raw_queue_reads+"  "+psa+"   writes="+obj.raw_queue_writes+"  "+psb;
 guixVlogSet(5,1,txt);
 txt="processed_queue.length="+obj.processed_queue.length+"  reads="+obj.processed_queue_reads+"  "+psc+"   writes="+obj.processed_queue_writes+"  "+psd;
 guixVlogSet(6,1,txt);

 obj=app.mpipe.obj_ray[1];
 txt="mpipe[0]";
 guixVlogSet(8,1,txt);

 ela=aa.timerMsRunning()-obj.raw_queue_tik;
 psa=obj.raw_queue_reads/(ela/1000.0);
 psb=obj.raw_queue_writes/(ela/1000.0);
 ela=aa.timerMsRunning()-obj.processed_queue_tik;
 psc=obj.processed_queue_reads/(ela/1000.0);
 psd=obj.processed_queue_writes/(ela/1000.0);
 psa=Math.round(psa*100)/100;
 psb=Math.round(psb*100)/100;
 psc=Math.round(psc*100)/100;
 psd=Math.round(psd*100)/100;

 txt="raw_queue.length="+obj.raw_queue.length+"  reads="+obj.raw_queue_reads+"  "+psa+"   writes="+obj.raw_queue_writes+"  "+psb;
 guixVlogSet(9,1,txt);
 txt="processed_queue.length="+obj.processed_queue.length+"  reads="+obj.processed_queue_reads+"  "+psc+"   writes="+obj.processed_queue_writes+"  "+psd;
 guixVlogSet(10,1,txt);

 //guixVlogSet(15,1,"seventeen");
 }



//============================================



 function guixInit ()
 {
 var s,i;
 app.guix={};
 app.guix.group_ray=[];
 app.guix.font_ray=[];
 app.guix.fonts_ready=false;
 app.guix.is_ready=false;
 if(1)  {  app.guix.pointer={};   aa.pointerStart();   }
 if(1)  {  app.guix.keyboard={};  aa.keyboardStart();  }
 s=Math.floor(Date.now()/100000);
 app.guix.font_ray.push(aa.guiFontLoad("saira","woff","./fonts/saira.woff"));
 app.guix.font_ray.push(aa.guiFontLoad("srccodepro","woff","./fonts/srccodepro.woff"));
 app.guix.font_ray.push(aa.guiFontLoad("ginto-reg","opentype","./fonts/ginto-regular.otf"));
 app.guix.font_ray.push(aa.guiFontLoad("nazi-reg","truetype","./fonts/nazi-regular.ttf"));
 app.guix.font_ray.push(aa.guiFontLoad("adieu-reg","woff2","./fonts/Adieu-Regular.woff2"));
 app.guix.font_ray.push(aa.guiFontLoad("fifteen-narrow","woff","./fonts/fifteennarrow.woff"));
 app.guix.font_ray.push(aa.guiFontLoad("resty","woff2","./fonts/resty.woff2"));
 app.guix.font_ray.push(aa.guiFontLoad("spread-tall","woff","./fonts/spreadtall.woff"));
 app.guix.font_ray.push(aa.guiFontLoad("sofia-sans","ttf","./fonts/sofiasans.ttf"));
 s=Math.floor(Date.now()/100000);
 app.guix.sprite=aa.spriteLoad("./gfx/spritestwo.png?"+s);
 s=Math.floor(Date.now()/100000);
 app.guix.image=[];
 for(i=0;i<14;i++)
  {
  switch(i)
   {
   case 0: app.guix.image[i]=aa.imageLoaderNew("./faces/face_endel1.webp?"+s); break;
   case 1: app.guix.image[i]=aa.imageLoaderNew("./faces/face_endel2.webp?"+s); break;
   case 2: app.guix.image[i]=aa.imageLoaderNew("./faces/face_endel3.webp?"+s); break;
   case 3: app.guix.image[i]=aa.imageLoaderNew("./faces/face_endel4.jpg?"+s); break;
   //case 0: app.guix.image[i]=aa.imageLoaderNew("./faces/face_anthony.jpg?"+s); break;
   //case 1: app.guix.image[i]=aa.imageLoaderNew("./faces/face_armo.jpg?"+s); break;
   //case 2: app.guix.image[i]=aa.imageLoaderNew("./faces/face_biden.jpg?"+s); break;
   //case 3: app.guix.image[i]=aa.imageLoaderNew("./faces/face_joe.jpg?"+s); break;
   case 4: app.guix.image[i]=aa.imageLoaderNew("./faces/face_chan.jpg?"+s); break;
   case 5: app.guix.image[i]=aa.imageLoaderNew("./faces/face_cillan.jpg?"+s); break;
   case 6: app.guix.image[i]=aa.imageLoaderNew("./faces/face_hsu.jpg?"+s); break;
   case 7: app.guix.image[i]=aa.imageLoaderNew("./faces/face_jackson.jpg?"+s); break;
   case 8: app.guix.image[i]=aa.imageLoaderNew("./faces/face_jchon.jpg?"+s); break;
   case 9: app.guix.image[i]=aa.imageLoaderNew("./faces/face_putin.jpg?"+s); break;
   case 10: app.guix.image[i]=aa.imageLoaderNew("./faces/face_theo.jpg?"+s); break;
   case 11: app.guix.image[i]=aa.imageLoaderNew("./faces/face_tom.jpg?"+s); break;
   case 12: app.guix.image[i]=aa.imageLoaderNew("./faces/face_trump.jpg?"+s); break;
   case 13: app.guix.image[i]=aa.imageLoaderNew("./faces/face_billgates.jpg?"+s); break;
   }
  }
 app.guix.image_used=3;
 app.guix.image_used%=app.guix.image.length;
 console.log("images loaded");
 if(cfg_vlog_use) {  guixVlogInit(); }
 aa.ifaceStart(guixIfaceProc);
 }








 function guixFontSet (fidx,weight,px)
 {
 var fnt;
 if(isNaN(fidx))
  {
  fnt="";
  fnt+=""+weight+" ";
  fnt+=""+px+"px ";
  fnt+=""+fidx;
  return fnt;
  }
 if(fidx<0)                         { return null; }
 if(fidx>=app.guix.font_ray.length) { return null; }
 fnt="";
 fnt+=""+weight+" ";
 fnt+=""+px+"px ";
 fnt+=""+app.guix.font_ray[fidx].name;
 return fnt;
 }




//--------------------------------





 function guixWarmup (obj)
 {
 var c,f,rat;

 if(app.guix.is_ready==true) { return true; }
 if(app.guix.fonts_ready!=true)
  {
  for(c=0,f=0;f<app.guix.font_ray.length;f++) { if(aa.guiFontStatus(app.guix.font_ray[f])==true) { c++; } }
  if(c==app.guix.font_ray.length)             { app.guix.fonts_ready=true;   }
  }
 if(app.guix.sprite.is_ready!=true)
  {
  for(f=0;f<12;f++) { aa.spriteStatus(app.guix.sprite); if(app.guix.sprite.is_ready) { break; } }
  }
 if(app.guix.sprite.is_ready!=true||app.guix.fonts_ready!=true) {  return false;   }
 f=app.guix.image.length;
 for(c=0;c<f;c++)   {   if(app.guix.image[c].is_success!=true) { break; }   }
 if(c!=f) { return false; }
 for(c=0;c<f;c++)
  {
  if(0) { continue; }
  rat=app.guix.image[c].img.width/app.guix.image[c].img.height;
  rat=Math.round(rat*100)/100;
  console.log(c+"  "+app.guix.image[c].url+" "+app.guix.image[c].img.width+" "+app.guix.image[c].img.height+" "+rat);
  }
 guixCreateElements();
 console.log("sprite.sheet count="+app.guix.sprite.sheet_map.length);
 app.guix.is_ready=true;
 guixSidemenuInit();
 return false;
 }








 function guixIfaceProc (obj)
 {
 if(guixWarmup(obj)!=true) { return false; }
 guixHandleElements(obj);
 guixPtrYield(obj);
 mediaCanvasPaint();
 if(aa.numRandValue(0,20)==0)
  {
  //console.log(obj.blit_hz);
  }
 return true;
 }





 function guixNeeds (id,paintstate,drawstate)
 {
 var grp;
 if((grp=aa.guiGroupGetById(id))==null) { return false;  }
 if(paintstate!=null) { grp.vars.needs_paint=paintstate; }
 if(drawstate!=null)  { grp.vars.needs_draw=drawstate;   }
 return true;
 }


/*
 function guixNeedsPaint (id,state)
 {
 var grp;
 //aa.debugAlert();
 if((grp=aa.guiGroupGetById(id))==null) { return false;  }
 grp.vars.needs_paint=state;
 return true;
 }
*/







 function guixCreate (type,cat,id,zi)
 {
 var han,grp,idx,rgb,pal;

 if((han=aa.guiCreate(type,id,zi))==0)  { aa.debugAlert("jjr"); }
 if((grp=aa.guiGroupGetById(id))==null) { aa.debugAlert("wedw"); }

 idx=app.guix.group_ray.length;

 grp.vars.needs_paint=true;
 grp.vars.needs_draw=true;
 grp.vars.cat=cat;

 grp.vars.kool={};
 grp.vars.kool.is_enabled=true;
 grp.vars.kool.stage=0;
 grp.vars.kool.probe=null;
 grp.vars.kool.change=0;

 grp.vars.is_splash=true;
 grp.vars.splash_index=0;

 grp.vars.is_animating=false;
 grp.vars.ani_stage=0;
 grp.vars.ani_x=0;
 grp.vars.ani_w=400;
 grp.vars.ani_dir=+30;

 app.guix.group_ray.push(grp);

 pal=aa.guiPaletteByIndex(33+(idx*13));
 if(0) { console.log("idx="+idx+" "+(pal.index)+"  "+pal.rgba+"  "+pal.name); }


 switch(id)
  {
  case "maincanvas":
  //aa.guiCssOutlineSet(grp.han,3,-4,3,aa.guiPaletteByName("HOTPINK").rgba);
  return grp;

  case "top_most":
  //aa.guiCssOutlineSet(grp.han,3,-4,3,aa.guiPaletteByName("PLUM").rgba);
  return grp;

  case "side_menu":
  //aa.guiCssOutlineSet(grp.han,5,-4,5,aa.guiPaletteByName("THISTLE").rgba);
  return grp;

  case "overlay":
  //aa.guiCssOutlineSet(grp.han,2,-1,4,aa.guiPaletteByName("TEAL").rgba);
  return grp;

  case "b_canstream_0":
  //aa.guiCssOutlineSet(grp.han,3,-4,3,aa.guiPaletteByName("orange").rgba);
  return grp;

  case "b_video_0":
  //aa.guiCssOutlineSet(grp.han,3,-4,3,aa.guiPaletteByName("GREENYELLOW").rgba);
  return grp;

  case "b_video_1":
  case "b_video_2":
  //aa.guiCssOutlineSet(grp.han,3,-4,7,pal.rgba);
  return grp;

  case "vippy":
  //aa.guiCssOutlineSet(grp.han,3,-4,3,aa.guiPaletteByName("GREENYELLOW").rgba);
  return grp;
  }
 aa.debugAlert();
 aa.guiCssOutlineSet(grp.han,3,-4,7,pal.rgba);
 rembug("guicreate "+id);
 return grp;
 }






 function guixCreateElements ()
 {
 var c;
 guixCreate("canvas",null,"maincanvas",9000);
 ///guixCreate("canvas",null,"overlay",9090);
 guixCreate("canstream",null,"b_canstream_0",9070);
 for(c=0;c<cfg_max_peers;c++) { guixCreate("video",null,"b_video_"+c,9070);  }
 guixCreate("canvas",null,"top_most",9999);
 guixCreate("canvas",null,"side_menu",9996);
 guixCreate("video",null,"vippy",9996);
 }




 function guiRequirments (disp,retina,opa,x,y,w,h,domw,domh)
 {
 var obj;
 obj={};
 obj.type="guirequirments";
 obj.disp=disp;
 obj.retina=retina;
 obj.opa=opa;
 obj.x=x;
 obj.y=y;
 obj.w=w;
 obj.h=h;
 obj.domw=domw;
 obj.domh=domh;
 return obj;
 }





 function guixAssertion (grp,disp,retina,opa,x,y,w,h,dwid,dhit)
 {
 var req,kool,e,b,bit,left,n0,n1;
 kool=grp.vars.kool;
 req=guiRequirments(disp,retina,opa,x,y,w,h,dwid,dhit);
 kool.change=aa.guiProbeCompare(kool.probe,req.disp,req.retina,req.opa,req.x,req.y,req.w,req.h,req.domw,req.domh);
 if(kool.change<=0) { return; }
 aa.guiApply(kool.probe.handle,req.disp,req.retina,req.opa,req.x,req.y,req.w,req.h,req.domw,req.domh);
 kool.probe=aa.guiProbeGet(kool.probe.handle);
// console.log(grp.obj.id+"  "+kool.change);
 left=kool.change;
 bit=1;
 n0=null;
 n1=null;
 for(e=0;e<10;e++)
  {
  if(left<=0) { break; }
  if((left&bit)!=0)
   {
   //console.log(e+" ok");
   n1=true;
   if(e>=4&&e<=8) { n0=true; }
   }
  left-=bit;
  bit=bit+bit;
  }


 guixNeeds(grp.obj.id,true,null);//,n1);//true,null);//"b_hud_0",true,null);
// guixNeeds(grp.obj.id,n0,n1);//true,null);//"b_hud_0",true,null);
 return;
 }


/*
  if(probe.display!=disp)       { chg+=1;  }
  if(probe.opacity!=opa)        { chg+=2;  }
  if(probe.css_area.left!=x)    { chg+=4;  }
  if(probe.css_area.top!=y)     { chg+=8;  }
  if(probe.css_area.width!=w)   { chg+=16; } // requires repaint
  if(probe.css_area.height!=h)  { chg+=32; } // requires repaint
  if(probe.is_retina!=retina)   { chg+=64; } // requires repaint
  if(probe.dom_widhit[0]!=domw) { chg+=128;}
  if(probe.dom_widhit[1]!=domh) { chg+=256;}
*/




 function guixHandleElements (obj)
 {
 var totchg,dwid,dhit,iw,ih,i,j,c,z,bs,bc;
 var swithid,xx,yy,ww,hh,grp,kool,ok;
 var sub,val,prstate,prcount,disp,req;

 totchg=0;
 c=cfg_max_peers;
 dwid=obj.this_dsz[5];
 dhit=obj.this_dsz[8];

 c=app.guix.group_ray.length;
 for(z=0;z<c;z++)
  {
  grp=app.guix.group_ray[z];
  kool=grp.vars.kool;
  switch(kool.stage)
   {
   case 0:
   kool.probe=aa.guiProbeGet(grp.han);
   kool.stage=80;
   break;

   case 6:
   break;

   case 80:
   kool.stage=100;
   break;


   case 100:
   ok=true;
   switch(grp.obj.id)
    {
    case "maincanvas":    break;
    case "vippy":         break;
    case "top_most":      break;
    case "side_menu":     break;
    ///case "overlay":       break;
    case "b_canstream_0": break;
    case "b_video_0":     break;
    case "b_video_1":     break;
    case "b_video_2":     break;
    default:    ok=false; break;
    }
   if(ok==false)
    {
    console.log("group_ray "+z+"=",grp.obj.id);
    kool.stage=6;
    break;
    }



   ok=true;
   switch(grp.obj.id)
    {
    case "maincanvas":
    guixAssertion(grp,"inline-block",false,1.0,0,0,dwid,dhit,dwid,dhit);
    break;

    case "vippy":
    if(cfg_video_square) { guixAssertion(grp,"none",false,1.0,300,140,320,320,320,320); }
    else                 { guixAssertion(grp,"none",false,1.0,300,140,320,240,320,240); }
    //guixAssertion(grp,"inline-block",false,1.0,300,140,320,240,320,240);
    //guixAssertion(grp,"none",false,1.0,300,140,320,240,320,240);
    break;

    case "top_most":
    //guixAssertion(grp,"inline-block",false,0.4,0,0,dwid,dhit/2,dwid,dhit/2);
    ///guixAssertion(grp,"inline-block",false,1.0,0,0,dwid,160,dwid,160);
    guixAssertion(grp,"inline-block",false,1.0,0,0,320,160,320,160);
    break;


    /*
     grp.vars.is_animating=false;
 grp.vars.ani_stage=0;
 grp.vars.ani_x=0;
 grp.vars.ani_w=400;
 grp.vars.ani_dir=+30;
*/

    case "side_menu":
    switch(grp.vars.ani_stage)
     {
     case 0:
     break;

     case 10:
     if(grp.vars.ani_dir<0)
      {
      guixAssertion(grp,"inline-block",true,1.0,(-grp.vars.ani_w)+grp.vars.ani_x,0,grp.vars.ani_w,dhit,grp.vars.ani_w,dhit);
      grp.vars.ani_x+=grp.vars.ani_dir;
      if(grp.vars.ani_x>=0) { break; }
      //if(grp.vars.ani_x<0) { console.log(grp.vars.ani_x); }
      grp.vars.is_animating=false;
      //console.log("stop ani a "+((-grp.vars.ani_w)+grp.vars.ani_x));
      grp.vars.ani_stage=0;
      }
     else
     if(grp.vars.ani_dir>0)
      {
      guixAssertion(grp,"inline-block",true,1.0,(-grp.vars.ani_w)+grp.vars.ani_x,0,grp.vars.ani_w,dhit,grp.vars.ani_w,dhit);
      grp.vars.ani_x+=grp.vars.ani_dir;
      if(grp.vars.ani_x<grp.vars.ani_w) { break; }
      //console.log("stop ani b "+((-grp.vars.ani_w)+grp.vars.ani_x));
      grp.vars.is_animating=false;
      grp.vars.ani_stage=0;
      }
     //grp.vars.is_animating=false;
     //grp.vars.is_animating=0;
     break;

     case 20:
     //grp.vars.is_animating=false;
     break;
     }
    break;




    ///case "overlay":
    ///guixAssertion(grp,"inline-block",false,0.7,3,((dhit/2)>>0)+80,dwid-6,(((dhit/2)>>0)-80)-3,dwid-6,(((dhit/2)-80)>>0)-3);
    /// //guixAssertion(grp,"none",false,1.0,3,((dhit/2)>>0)+80,dwid-6,(((dhit/2)>>0)-80)-3,dwid-6,(((dhit/2)-80)>>0)-3);
    /// break;

    case "b_canstream_0":
    if(cfg_video_square) { guixAssertion(grp,"inline-block",false,1.0,0,0,320,320,320,320); }
    else                 { guixAssertion(grp,"inline-block",false,1.0,0,0,320,240,320,240); }
    break;


    case "b_video_0":
    //guixAssertion(grp,"inline-block",false,1.0,320,120,320,320,320,320);
    if(cfg_video_square) { guixAssertion(grp,"none",false,1.0,320,120,320,320,320,320); }
    else                 { guixAssertion(grp,"none",false,1.0,320,120,320,240,320,240); }
    break;


    case "b_video_1":
    case "b_video_2":
    sub=grp.obj.id.substring(8);
    val=parseInt(sub);
    prstate=peerState(val);
    prcount=peerCount();
    if(prstate==true) { disp="inline-block"; }
    else              { disp="none";         }
    //disp="inline-block";
    //guixAssertion(grp,disp,false,1.0,190+(val*34),80,320,240,320,240);
    //guixAssertion(grp,disp,false,1.0,320+((val-1)*320),0,320,240,320,240);//330,320,330);
    if(cfg_video_square) { guixAssertion(grp,disp,false,1.0,320+((val-1)*320),0,320,240,320,240); }
    else                 { guixAssertion(grp,disp,false,1.0,320+((val-1)*320),0,320,320,320,320); }
    //console.log("val="+val);
    break;


    default:    ok=false; break;
    }

   if(ok==false)
    {
    console.log("group_ray "+z+"=",grp.obj.id+" unhandled changes");
    kool.stage=6;
    break;
    }
   guixHandlePainting();
   break;
   }
  }
 }








 function guixHandlePainting ()
 {
 var z,grp;
 for(z=0;z<app.guix.group_ray.length;z++)
  {
  grp=app.guix.group_ray[z];
  if(grp.vars.needs_paint!=true&&grp.vars.needs_draw!=true) { continue; }
  if(grp.obj.id.startsWith("side_menu"))
   {
   //console.log(grp.obj.id+"  "+grp.vars.needs_paint+" "+grp.vars.needs_draw);
   }
  while(1)
   {
   if(grp.obj.id.startsWith("side_menu"))
    {
    if(grp.vars.needs_paint)
     {
     guixSideMenuPaint();
     }
    }

   if(grp.obj.id.startsWith("top_most"))
    {
    //if(aa.main_state.initial_click==false) { break; }
    if(grp.vars.needs_paint)
     {
     aa.guiSpotPurge(grp.han);
    //aa.guiCanvasClear(grp.han);
    //guixButton("top_most",1002,20,20,300,200,"next_face");
    //guixButton("top_most",1003,20,50,300,200,"next_cam");
    //guixButton("top_most",1004,20,80,300,200,"next_mic");
//    guixButton("top_most",1005,20,20,300,200,aa.guiUni("u262f"));
     guixButton("top_most",1005,20,10,300,100,7);
     guixButton("top_most",1010,60,10,300,100,"previmg");
     guixButton("top_most",1020,120,10,300,100,"nextimg");
     if(app.mpipe)
      {
      guixButton("top_most",1011,20,40,300,100,"s: "+aa.numRoundPlaces(app.mpipe.hyper.s_mul,2));
      guixButton("top_most",1012,70,40,300,100,"s");
      guixButton("top_most",1013,20,70,300,100,"v: "+aa.numRoundPlaces(app.mpipe.hyper.v_mul,2));
      guixButton("top_most",1014,70,70,300,100,"v");
      guixButton("top_most",1015,20,100,300,100,"h: "+aa.numRoundPlaces(app.mpipe.hyper.h_mul,2));
      guixButton("top_most",1016,70,100,300,100,"h");
      guixButton("top_most",1017,20,130,300,100,"a: "+aa.numRoundPlaces(app.mpipe.hyper.global_alpha,2));
      guixButton("top_most",1018,70,130,300,100,"a");

      }
     }
    }

   if(grp.obj.id.startsWith("maincanvas"))
    {
    if(grp.vars.is_splash==true)
     {
     guixSplashPaint(1-grp.vars.splash_index);
     }
    }
   break;
   }

  ///if(grp.obj.id!="top_most")
   {
   grp.vars.needs_paint=false;
   }
  }
 }







 function guixSprite (grp,spidx,xx,yy,ww,hh,spid)
 {
 var spc,rec;
 spc=aa.spriteRectGet(app.guix.sprite,spidx);
 if(spc==null) {  console.log("guixSprite spriteRectGet "+spidx+" ==null");  return null;  }
 if(ww==0&&hh!=0) { ww=hh*spc.ratio_wh; }
 else
 if(ww!=0&&hh==0) { hh=ww*spc.ratio_hw; }
 ww>>=0;
 hh>>=0;
 aa.spritePaintByIndex(app.guix.sprite,grp.obj.id,spidx,xx,yy,ww,hh,0,0,0);
 rec=aa.guiRectSet(xx,yy,ww,hh);
 return rec;
 }






 function guixSplashPaint (phaze)
 {
 var probe,spx,spc,rc,grp,fnt,fix,mes,txt,xx,yy;
 probe=aa.guiProbeGet(aa.guiGroupGetById("maincanvas").han);
 if((grp=aa.guiGroupGetById(probe.id))==null) { aa.debugAlert("rfff"); }
 aa.guiCanvasFill(grp.han,0,0,probe.css_area.width,probe.css_area.height,aa.guiRgbaString(255,255,255,1));
 spx=2;
 spc=aa.spriteRectGet(app.guix.sprite,spx);
 rc=aa.guiRectSet(0,0,probe.css_area.width,probe.css_area.height);
 aa.spritePaintByIndex(app.guix.sprite,"maincanvas",spx,rc.x+(rc.w/2)-50,rc.y+(rc.h/2)-50,100,100,0,0,0);
 fnt="400 18px arial";
 if(phaze==0)  {  txt="Loading, version "+cfg_app_version;  }
 else          {  txt="Touch to start, v"+cfg_app_version;  }
 //fix=aa.guiFontFix(fnt);
 fix=0;
 mes=aa.guiCanvasFontMeasure(grp.han,fnt,txt);
 xx=(probe.css_area.width/2)-(mes.w/2);
 yy=((rc.y+(rc.h/2))+60)+fix;
 aa.guiCanvasText(grp.han,xx,yy,0,null,aa.guiRgbaString(225,225,226,1),fnt,""+txt);
 if(phaze==0)  { aa.guiCanvasText(grp.han,xx-2,yy-2,0,null,aa.guiRgbaString(25,75,190,1),fnt,""+txt); }
 else          { aa.guiCanvasText(grp.han,xx-2,yy-2,0,null,aa.guiRgbaString(65,65,90,1),fnt,""+txt);  }
 }







 function guixButton (id,spid,x,y,w,h,txt)
 {
 var str,mes,fix,grp,fnt;
 var wid,hit,res;
 var six,xx,yy,ww,hh,spc,gal;

 fnt=guixFontSet("arial",300,11);
 //fix=aa.guiFontFix(fnt);
 fix=0;

 grp=aa.guiGroupGetById(id);
 if(grp==null) { aa.debugAlert(); return null; }

 str=txt;
 mes=aa.guiCanvasFontMeasure(grp.han,fnt,str);

 ww=mes.aw+6;
 hh=mes.ah+4;

 if(isNaN(txt))
  {
  aa.guiCanvasFill(grp.han,x,y,ww,hh,aa.guiRgbaString(5,2,aa.numRandValue(0,200),0.7));
  aa.guiCanvasText(grp.han,x+2,y+2+fix,0,null,aa.guiRgbaString(225,225,226,1),fnt,str);
  aa.guiCanvasBorder(grp.han,x,y,ww,hh,1,aa.guiRgbaString(25,25,226,1));
  aa.guiSpotAdd(grp.han,spid,x,y+fix,ww,hh,1,2,3);//(mes.aw>>0)+4,mes.h+2,1,2,3);
  return;
  }


 six=txt;
 spc=aa.spriteRectGet(app.guix.sprite,six);
 xx=x;
 yy=y;
 if(0) { ww=60;  hh=ww*spc.ratio_hw; }
 else  { hh=32;  ww=hh*spc.ratio_wh; }
 gal=grp.ctx.globalAlpha;
 grp.ctx.globalAlpha=0.8;
 aa.spritePaintByIndex(app.guix.sprite,grp.obj.id,six,xx,yy,ww,hh,0,0,0);
 grp.ctx.globalAlpha=gal;

 aa.guiSpotAdd(grp.han,spid,xx,yy,ww,hh,1,2,3);//,y+fix,wid,hit,1,2,3);//(mes.aw>>0)+4,mes.h+2,1,2,3);
 //aa.guiCanvasBorder(grp.han,xx,yy,ww,hh,1,aa.guiRgbaString(25,25,226,1));
 //aa.guiCanvasText(grp.han,xx,yy,1,aa.guiRgbaString(25,25,22,1),aa.guiRgbaString(25,225,226,1),fnt,str);
 }









 function guixPtrYield (obj)
 {
 var rat,iu,x,y,x0,y0,x1,y1,et,el,spot,area,grp,prp;
 var mzi,old;

 while(1)
  {
  if((rat=aa.pointerRead())==null) { break; }
  if(rat.event.type=="pointermove") { continue; }

  if(rat.event.type=="pointerup")
   {
   x0=rat.event.pageX;
   y0=rat.event.pageY;

   for(mzi=0;mzi<1000;mzi++)
   {
   el=aa.guiElementFromPoint(x0,y0,10000-mzi,10000-mzi);
   if(el>0)
    {
    grp=aa.guiGroupGet(el);
    area=aa.guiCssAreaGet(el);
    if(area!=null)
     {
     x1=x0-area.left;
     y1=y0-area.top;
     spot=aa.guiSpotMatch(el,x0,y0);
     if(spot!=null)
      {
      //console.log("spot id ="+spot.id+" "+spot.sid+"  "+grp.obj.id+"  "+grp.css.zIndex);
      if(spot.sid==1005)  {  guixSideMenuTrigger("toggle");       }
      else
      if(spot.sid==1010)  {  cur_iu--; if(cur_iu<0) { cur_iu=13; } }
      else
      if(spot.sid==1020)  {  cur_iu++;  cur_iu%=14;      }
      else

      if(spot.sid==1011)  {  app.mpipe.hyper.s_mul-=0.1; app.mpipe.hyper.s_mul=Math.round(app.mpipe.hyper.s_mul*10)/10;    guixNeeds("top_most",true);       }
      else
      if(spot.sid==1012)  {  app.mpipe.hyper.s_mul+=0.1; app.mpipe.hyper.s_mul=Math.round(app.mpipe.hyper.s_mul*10)/10;    guixNeeds("top_most",true);       }
      else
      if(spot.sid==1013)  {  app.mpipe.hyper.v_mul-=0.1;  app.mpipe.hyper.v_mul=Math.round(app.mpipe.hyper.v_mul*10)/10;   guixNeeds("top_most",true);       }
      else
      if(spot.sid==1014)  {  app.mpipe.hyper.v_mul+=0.1;  app.mpipe.hyper.v_mul=Math.round(app.mpipe.hyper.v_mul*10)/10;   guixNeeds("top_most",true);       }
      else
      if(spot.sid==1015)  {  app.mpipe.hyper.h_mul-=0.1;  app.mpipe.hyper.h_mul=Math.round(app.mpipe.hyper.h_mul*10)/10;   guixNeeds("top_most",true);       }
      else
      if(spot.sid==1016)  {  app.mpipe.hyper.h_mul+=0.1;  app.mpipe.hyper.h_mul=Math.round(app.mpipe.hyper.h_mul*10)/10;   guixNeeds("top_most",true);       }
      else
      if(spot.sid==1017)  {  app.mpipe.hyper.global_alpha-=0.1; app.mpipe.hyper.global_alpha=Math.round(app.mpipe.hyper.global_alpha*10)/10;    guixNeeds("top_most",true);       }
      else
      if(spot.sid==1018)  {  app.mpipe.hyper.global_alpha+=0.1; app.mpipe.hyper.global_alpha=Math.round(app.mpipe.hyper.global_alpha*10)/10;      guixNeeds("top_most",true);       }

      else
       {
       if(spot.sid>=2000)
        {
        console.log("spot id ="+spot.id+" "+spot.sid+"  "+grp.obj.id+"  "+grp.css.zIndex);
        //guixSidemenuSectionSet(-1,false);
        //guixSidemenuSectionSet(spot.sid-2000,true);
        //guixSidemenuSectionSet(3,true);
        old=sns;
        sns=spot.sid-2000;
        if(sns==old) { sns=-1; }
         guixSideMenuTrigger("toggle");
         //guixSideMenuTrigger("toggle");

        }
       }

      break;
      }
     }
    }
   }



   /*
   el=aa.guiElementFromPoint(x0,y0,9000,9998);
   if(el>0)
    {
    grp=aa.guiGroupGet(el);
    console.log(grp.obj.id+"  "+grp.css.zIndex);
    area=aa.guiCssAreaGet(el);
    if(area!=null)
     {
     x1=x0-area.left;
     y1=y0-area.top;
     spot=aa.guiSpotMatch(el,x0,y0);
     if(spot!=null)
      {
      //if(aa.main_state.initial_click!=true) { break; }
      if(spot.sid==1002)  {  mpipeImageSet(-1);       }
      else
      if(spot.sid==1003)  {  mediaCamSwap(app.media.cur_vxi+1);       }
      else
      if(spot.sid==1004)  {  mediaMicSwap(app.media.cur_axi+1);       }
      else
      if(spot.sid==1005)  {  guixSideMenuTrigger("toggle");       }
      else
      if(spot.sid==1010)
       {
       cur_iu++;
       cur_iu%=14;
       //old_iu++;
       //console.log("spot id ="+spot.id+" "+spot.sid);
       }
      else
       {

       console.log("spot id ="+spot.id+" "+spot.sid);
       }
      }
     }
    }
   */
   }
  }
 }





