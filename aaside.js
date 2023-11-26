//---------------------------------------------------------
 "use strict";
//---------------------------------------------------------


 function guixSidemenuInit ()
 {
 app.guix.side={};
 app.guix.side.state=false;
 app.guix.side.pos=0;
 app.guix.side.dir=1;
 app.guix.side.speed=64;
 app.guix.side.num_section=0;
 app.guix.side.data_ray=[];
 }




 function guixSidemenuDataReset ()
 {
 app.guix.side.data_ray=[];
 app.guix.side.num_section=0;
 }



 function guixSidemenuDataAppend (type,data)
 {
 data.self_index=app.guix.side.data_ray.length;
 data.type=type;
 app.guix.side.data_ray.push(data);
 }




 function guixSidemenuHeadingAppend (data,state)
 {
 guixSidemenuDataAppend("hed",{data:data,open:state,section:app.guix.side.num_section});
 app.guix.side.num_section++;
 }




 function guixSidemenuItemAppend (data,state,isswitch)
 {
 guixSidemenuDataAppend("itm",{data:data,state:state,isswitch:isswitch});
 }



 function guixSidemenuSectionSet (sec,state)
 {
 var di,dl,itema;
 dl=app.guix.side.data_ray.length;
 for(di=0;di<dl;di++)
  {
  itema=app.guix.side.data_ray[di];
  if(itema.type!="hed")   { continue; }
  if(sec==-1)
   {
   itema.open=state;
   continue;
   }
  if(itema.section!=sec)  { continue; }
  itema.open=state;
  break;
  }
 }




var sns=0;

 function guixSidemenuBuild ()
 {
 var den,i,str,str;
 var di,dl,itema;

 if(app.media&&app.media.active_devenu) { den=app.media.active_devenu; }
 else                                   { den=null; }

 guixSidemenuDataReset();

 if(app.guix.side.data_ray.length!=0) { aa.debugAlert(); }


  if(den&&den.vid_input_list.length>1)
   {
   str="Cameras";
   guixSidemenuHeadingAppend(str,false);
   for(i=0;i<den.vid_input_list.length;i++)
    {
    str=den.vid_input_list[i].clean;
    guixSidemenuDataAppend("itm",{data:str,state:(app.media.cur_vxi==i),isswitch:false});
    }
   }

  if(den&&den.aud_input_list.length>1)
   {
   str="Mics";
   guixSidemenuHeadingAppend(str,false);
   for(i=0;i<den.aud_input_list.length;i++)
    {
    str=den.aud_input_list[i].clean;
    guixSidemenuDataAppend("itm",{data:str,state:(app.media.cur_axi==i),isswitch:false});
    }
   }

  if(den&&den.aud_output_list.length>1)
   {
   str="Speakers";
   guixSidemenuHeadingAppend(str,false);
   for(i=0;i<den.aud_output_list.length;i++)
    {
    str=den.aud_output_list[i].clean;
    guixSidemenuDataAppend("itm",{data:str,state:(app.media.cur_axo==i),isswitch:false});
    }
   }

  str="Options";
  guixSidemenuHeadingAppend(str,false);
  guixSidemenuItemAppend("Audio activity",false,true);
  guixSidemenuItemAppend("Auto hello",true,true);


  //guixSidemenuDataAppend("itm",{data:'Audio activity',state:false,isswitch:true});
  //guixSidemenuDataAppend("itm",{data:'Auto hello',state:true,isswitch:true});

  str="Effects";
  guixSidemenuHeadingAppend(str,false);//(app.guix.side.cur_section==str));
  guixSidemenuDataAppend("itm",{data:'Censor',state:false,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'Disco',state:true,isswitch:false});

  str="Todo";
  guixSidemenuHeadingAppend(str,false);//(app.guix.side.cur_section==str));
  guixSidemenuDataAppend("itm",{data:'Scrolling chat log',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'File sharing',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'Screen sharing',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'Single color polys',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'Cache Wasm',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'crolling chat log',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'ile sharing',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'creen sharing',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'ingle color polys',state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'ache Wasm',state:true,isswitch:false});

  str="Bugs";
  guixSidemenuHeadingAppend(str,false);//(app.guix.side.cur_section==str));
  guixSidemenuDataAppend("itm",{data:'More than I care for',state:true,isswitch:false});

  str="About";
  guixSidemenuHeadingAppend(str,false);//(app.guix.side.cur_section==str));
  guixSidemenuDataAppend("itm",{data:'aa_version: '+aa_version,state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'cpu_speed: '+app.cpu_speed,state:true,isswitch:false});
  guixSidemenuDataAppend("itm",{data:'copyright: ope(c)n Ashod Apakian',state:false,isswitch:false});

 guixSidemenuSectionSet(-1,false);

 if(sns!=-1) guixSidemenuSectionSet(sns,true);//aa.numRandValue(0,app.guix.side.num_section),true);
 //guixSidemenuSectionSet(3,true);

 return true;
 }






 function guixSidemenuDump ()
 {
 var grpv,gpsz,grpa,di,dl,itema,itemb;
 var xx,yy,txt,etc,fnt,mesa,mesb,mesd,str;
 var spc,ww,hh,fs,six;
 var nexthed,spid;

 if((grpv=aa.guiGroupGetById("side_menu"))==null) { aa.debugAlert(); }
 gpsz=aa.guiSizesGet(grpv.han);
 //console.log(gpsz);
 aa.guiSpotPurge(grpv.han);
 //aa.guiSpotAdd(grpv.han,spid,x,y+fix,ww,hh,1,2,3);//(mes.aw>>0)+4,mes.h+2,1,2,3);
 spid=2000;

 grpa=null;
 xx=14;
 yy=10;
 dl=app.guix.side.data_ray.length;
 di=0;
 nexthed=false;
 while(1)
  {
  if(di>=dl) { break; }
  itema=app.guix.side.data_ray[di];

  if(nexthed==true)
   {
   if(itema.type!="hed") { di++; continue; }
   nexthed=false;
   }

  if(itema.type=="hed")
   {
   txt=itema.data;
   if(itema.open==true) {   etc=aa.guiUni("u25b2"); }
   else                 {   etc=aa.guiUni("u25bc"); }
   fs=34;
   fnt=guixFontSet("spread-tall",300,fs);
   mesa=aa.guiCanvasFontMeasure(grpv.han,fnt,txt);
   mesb=aa.guiCanvasFontMeasure(grpv.han,fnt,etc);
   aa.guiCanvasText(grpv.han,xx              ,yy ,2,aa.guiRgbaString(10,10,19,1),aa.guiRgbaString(240,240,240,1),fnt,txt);
   aa.guiCanvasText(grpv.han,(xx+200)-mesb.aw,yy ,2,aa.guiRgbaString(10,10,19,1),aa.guiRgbaString(240,245,20,1),fnt,etc);

   aa.guiSpotAdd(grpv.han,spid,xx,yy,gpsz.domwh[0]-28,mesb.ah,1,2,3);//(mes.aw>>0)+4,mes.h+2,1,2,3);
   aa.guiCanvasBorder(grpv.han,xx,yy,gpsz.domwh[0]-28,mesb.ah,2,aa.guiRgbaString(120,210,19,1));
   spid++;

   yy+=mesa.height+8;
   if(itema.open!=true) { nexthed=true; di++; continue; }
   }
  else
  if(itema.type=="itm")
   {
   txt=itema.data;
   fs=17;
   fnt=guixFontSet("sofia-sans",300,fs);
   mesa=aa.guiCanvasFontMeasure(grpv.han,fnt,"|");
   mesb=aa.guiCanvasFontMeasure(grpv.han,fnt,txt);
   aa.guiCanvasText(grpv.han,xx+20          ,yy ,2,aa.guiRgbaString(10,10,19,1),aa.guiRgbaString(240,240,240,1),fnt,txt);

   if(itema.isswitch==true)
    {
    if(itema.state==true)
     {
     six=7;
     spc=aa.spriteRectGet(app.guix.sprite,six);
     if(0) { ww=60;    hh=ww*spc.ratio_hw; }
     else  { hh=20;    ww=hh*spc.ratio_wh; }
     aa.spritePaintByIndex(app.guix.sprite,grpv.obj.id,six,xx,yy,ww,hh,0,0,0);
     }
    }
   else
   if(itema.isswitch==false)
    {
    if(itema.state==true)
     {
     six=15;
     spc=aa.spriteRectGet(app.guix.sprite,six);
     if(0) { ww=60;    hh=ww*spc.ratio_hw; }
     else  { hh=20;    ww=hh*spc.ratio_wh; }
     aa.spritePaintByIndex(app.guix.sprite,grpv.obj.id,six,xx,yy,ww,hh,0,0,0);
     }
    }
   yy+=mesa.height+4;
   }
  else
   {
   aa.debugAlert();
   }
  di++;
  }
 return true;
 }






 function guixSideMenuTrigger (mode)
 {
 var prp;
 if((prp=aa.guiGroupGetById("side_menu"))==null) { aa.debugAlert(); }
 if(mode=="toggle")
  {
  console.log("trigger was "+prp.vars.is_animating+" dir="+prp.vars.ani_dir+" x="+prp.vars.ani_x);
  if(prp.vars.is_animating==true)
   {
   if(prp.vars.ani_dir>0)
    {
    prp.vars.ani_dir=-prp.vars.ani_dir;
    }
   else
    {
    prp.vars.ani_dir=Math.abs(prp.vars.ani_dir);
    }
   prp.vars.ani_w=220;
   }
  else
   {
   prp.vars.is_animating=true;
   prp.vars.ani_stage=10;
   prp.vars.ani_w=220;
   if(prp.vars.ani_x>100) prp.vars.ani_dir=-30;
   else                   prp.vars.ani_dir=+30;
   }
  console.log("trigger is now "+prp.vars.is_animating+" dir="+prp.vars.ani_dir+" x="+prp.vars.ani_x);
  }
 return;
 }





 function guixSideMenuPaint ()
 {
 var probe,spx,spc,rc,grp,fnt,fix,mes,txt,xx,yy,grad,ww,hh;
 probe=aa.guiProbeGet(aa.guiGroupGetById("side_menu").han);
 if((grp=aa.guiGroupGetById(probe.id))==null) { aa.debugAlert("rfff"); }
 xx=probe.css_area.left;
 ww=probe.css_area.width;
 hh=probe.css_area.height;
 if(isNaN(ww)) { ww=0; }
 if(isNaN(hh)) { hh=0; }
 if(Math.abs(xx)!=ww) { return; }//  console.log(xx+" "+ww); }
 grad=grp.ctx.createLinearGradient(0,0,ww,hh);
 grad.addColorStop(0.0,aa.guiRgbaString(aa.numRandValue(0,255),0,0,1.0));
 grad.addColorStop(0.5,aa.guiRgbaString(aa.numRandValue(0,255),aa.numRandValue(0,255),aa.numRandValue(0,255),1.0));
 grad.addColorStop(1.0,aa.guiRgbaString(125,0,aa.numRandValue(0,255),1.0));
 aa.guiCanvasFill(grp.han,0,0,ww,hh,grad);
 guixSidemenuBuild();
 guixSidemenuDump();
 }





