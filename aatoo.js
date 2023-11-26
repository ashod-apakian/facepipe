//---------------------------------------------------------
 "use strict";
//---------------------------------------------------------

 var hiz=0;
 var fifla=0;
 var old_iu=-1;
 var cur_iu=0;
 //var xswp;
 //var new_cy=0;




 function mpipeStart ()
 {
 var sww,shh;
 if(cfg_video_square) { sww=320; shh=320; }
 else                 { sww=320; shh=240; }
 app.mpipe={};
 app.mpipe.obj_ray=[];
 mpipeCreate("video",2,3,sww,shh);
 mpipeCreate("image",2,3,sww,shh);
 app.mpipe.hyper=mpipeHyperStuff();
 app.mpipe.xswp=null;
 console.log(app.mpipe.hyper);
 }




 function mpipeCreate (name,iquemax,oquemax,width,height)
 {
 var obj,disp,pal,req;

 obj={};
 obj.type="mpipe";
 obj.name=name;
 obj.is_started=true;
 obj.is_ready=false;
 obj.is_waitin=false;
 obj.is_ok=false;
 obj.self_index=app.mpipe.obj_ray.length;
 obj.stage=100;

 obj.raw_queue=[];
 obj.raw_queue_writes=0;
 obj.raw_queue_reads=0;
 obj.raw_queue_tik=0;
 obj.raw_queue_max=iquemax;

 obj.processed_queue=[];
 obj.processed_queue_writes=0;
 obj.processed_queue_reads=0;
 obj.processed_queue_tik=0;
 obj.processed_queue_max=oquemax;

 obj.fm=null;
 obj.last_pop=null;
 if(0) { disp="inline-block"; }
 else  { disp="none";         }

 obj.can_id="fxcan_"+obj.self_index;
 obj.can_wid=width;
 obj.can_hit=height;
 obj.can_handle=aa.guiCreate("canvas",obj.can_id,9999);
 obj.can_grp=aa.guiGroupGetById(obj.can_id);
 obj.can_probe=aa.guiProbeGet(obj.can_handle);
 req=guiRequirments(disp,false,1.0,28+(obj.self_index*350),245,obj.can_wid,obj.can_hit,obj.can_wid,obj.can_hit);
 obj.can_changes=aa.guiProbeCompare(obj.can_probe,req.disp,req.retina,req.opa,req.x,req.y,req.w,req.h,req.domw,req.domh);
 aa.guiApply(obj.can_probe.handle,req.disp,req.retina,req.opa,req.x,req.y,req.w,req.h,req.domw,req.domh);
 obj.can_probe=aa.guiProbeGet(obj.can_handle)
 ///aa.guiCssOutlineSet(obj.can_grp.han,3,-4,3,aa.guiPaletteByName("HOTPINK").rgba);

 obj.tmp_id="tmpcan_"+obj.self_index;
 obj.tmp_wid=width;
 obj.tmp_hit=height;
 obj.tmp_handle=aa.guiCreate("canvas",obj.tmp_id,9999);
 obj.tmp_grp=aa.guiGroupGetById(obj.tmp_id);
 obj.tmp_probe=aa.guiProbeGet(obj.tmp_handle);
 req=guiRequirments(disp,false,1.0,800,10+(obj.self_index*250),obj.tmp_wid,obj.tmp_hit,obj.tmp_wid,obj.tmp_hit);
 obj.tmp_changes=aa.guiProbeCompare(obj.tmp_probe,req.disp,req.retina,req.opa,req.x,req.y,req.w,req.h,req.domw,req.domh);
 aa.guiApply(obj.tmp_probe.handle,req.disp,req.retina,req.opa,req.x,req.y,req.w,req.h,req.domw,req.domh);
 obj.tmp_probe=aa.guiProbeGet(obj.tmp_handle)
 ///aa.guiCssOutlineSet(obj.tmp_grp.han,3,-4,3,aa.guiPaletteByName("HOTPINK").rgba);

 app.mpipe.obj_ray.push(obj);
 return obj;
 }








 function sign (p1x,p1y,p2x,p2y,p3x,p3y)
 {
 return (p1x-p3x)*(p2y-p3y)-(p2x-p3x)*(p1y-p3y);
 }




 function PointInTriangle (ptx,pty,v1x,v1y,v2x,v2y,v3x,v3y)
 {
 var d1,d2,d3,has_neg,has_pos;
 d1=sign(ptx,pty,v1x,v1y,v2x,v2y);
 d2=sign(ptx,pty,v2x,v2y,v3x,v3y);
 d3=sign(ptx,pty,v3x,v3y,v1x,v1y);
 has_neg=(d1<0)||(d2<0)||(d3<0);
 has_pos=(d1>0)||(d2>0)||(d3>0);
 return !(has_neg&&has_pos);
 }




 function getBounder (x1,y1,x2,y2,x3,y3)
 {
 var xmax,ymax,xmin,ymin,box;
 if(x1>=x2&&x1>=x3) { xmax=x1; } else
 if(x2>=x1&&x2>=x3) { xmax=x2; } else { xmax=x3; }
 if(y1>=y2&&y1>=y3) { ymax=y1; } else
 if(y2>=y1&&y2>=y3) { ymax=y2; } else { ymax=y3; }
 if(x1<=x2&&x1<=x3) { xmin=x1; } else
 if(x2<=x1&&x2<=x3) { xmin=x2; } else { xmin=x3; }
 if(y1<=y2&&y1<=y3) { ymin=y1; } else
 if(y2<=y1&&y2<=y3) { ymin=y2; } else { ymin=y3; }
 //xmin-- ymin--
 //xmax++ ymax++
 box=[xmin,ymin,(xmax-xmin)+1,(ymax-ymin)+1];
 return box;
 }




 function IsPointInPolygon4(ptx,pty,v1x,v1y,v2x,v2y,v3x,v3y)
 {
 var result = false;
 var i,j=2;
 var polygon=[{X:v1x,Y:v1y},{X:v2x,Y:v2y},{X:v3x,Y:v3y}];
 for (i = 0; i < 3; i++)
  {
  if (polygon[i].Y < pty && polygon[j].Y >= pty||  polygon[j].Y <pty && polygon[i].Y >= pty)
            {
                if (polygon[i].X + (pty - polygon[i].Y) /    (polygon[j].Y - polygon[i].Y) *
                   (polygon[j].X - polygon[i].X) < ptx)
                {
                    result = !result;
                }
            }
            j = i;
        }
        return result;
 }





 function mpipeHyperStuff ()
 {
 var obj;
 obj={};
 obj.type="mpipehypa";
 obj.iu=5;
 obj.pic_speed=100;
 obj.h_mul=1.0; obj.s_mul=1.0; obj.v_mul=1.0; obj.pix_alpha=220; obj.global_alpha=0.8;
 obj.h_mul=1.0; obj.s_mul=0.8; obj.v_mul=1.0; obj.pix_alpha=232; obj.global_alpha=0.8;
 obj.h_mul=1.0; obj.s_mul=1.0; obj.v_mul=0.8; obj.pix_alpha=200; obj.global_alpha=0.9;
 obj.iu=3;  obj.h_mul=1.0; obj.s_mul=1.2; obj.v_mul=0.7; obj.pix_alpha=205; obj.global_alpha=0.9;
 obj.iu=0;  obj.h_mul=1.0; obj.s_mul=1.1; obj.v_mul=0.9; obj.pix_alpha=192; obj.global_alpha=0.8;
 obj.iu=0;  obj.h_mul=1.0; obj.s_mul=0.9; obj.v_mul=0.9; obj.pix_alpha=242; obj.global_alpha=0.8;

 obj.iu=0;  obj.h_mul=1.0; obj.s_mul=1.0; obj.v_mul=1.0; obj.pix_alpha=255; obj.global_alpha=1.0;
 return obj;
 }







 function mpipeXswpInit ()
 {
 app.mpipe.xswp=null;
 }


 var mpipeTriaNew=[

 10,151,337, 10,337,338, 337,338,299, 338,299,297, 299,297,333, 297,333,332, 333,332,298, 332,298,284,  298,284,301,
 284,301,251, 301,368,251, 368,251,389, 368,264,389, 264,389,356, 264,447,356, 447,356,454, 366,447,454, 366,323,454,
 401,366,323, 401,323,361, 401,288,361, 435,401,288, 397,435,288, 367,435,288, 365,367,397, 364,365,367, 379,364,365,
 394,379,364, 378,394,379, 395,378,394, 369,395,378, 369,400,378, 396,400,369, 396,377,400, 152,396,377,
 //
 175,152,396, 171,175,152, 148,171,152, 176,171,148, 176,140,171, 149,140,176, 149,170,140, 169,149,170, 150,169,149,
 135,150,169, 136,135,150, 138,136,135, 172,138,136, 172,215,138, 58,215,172, 58,177,215, 132,58,177, 93,132,177,
 93,177,137, 234,93,137, 234,227,137, 127,234,227, 127,34,227, 127,162,34, 162,34,139, 162,21,139, 21,139,71, 21,71,54,
 71,54,68, 54,68,103, 68,103,104, 103,104,67, 104,67,69, 67,69,109, 69,109,108, 109,108,10, 108,10,151,
 //
 151,9,336, 151,336,337, 336,337,296, 337,296,299, 296,299,334, 299,334,333, 334,333,293, 333,293,298, 293,298,300,
 298,300,301, 300,383,301, 383,301,368, 383,372,368, 372,368,264, 345,372,264, 345,264,447, 352,345,447, 352,366,447,
 352,376,366, 376,401,433, 433,376,401, 433,435,401, 416,433,435, 416,367,435, 416,364,367, 434,364,416, 430,434,364,
 430,394,364,  395,430,394, 431,395,430, 262,431,395, 262,369,395, 428,262,369, 428,396,369,  175,428,396, 199,175,428,
 //

 208,199,175, 171,208,175, 140,208,171, 140,32,208, 170,32,140, 170,211,32, 210,170,211, 169,210,170, 135,169,210,
 135,214,210, 192,135,214, 138,192,135, 215,138,192, 215,213,192, 177,215,213, 177,147,213, 137,177,147, 137,147,123,
 137,227,123,227,116,123, 227,34,116, 34,116,143, 34,139,143, 139,143,156, 139,71,156, 71,156,70, 71,70,68, 70,68,63,
 68,63,104, 63,104,105, 104,105,69, 105,69,66, 69,66,108, 66,108,107, 108,107,151, 107,151,9,
 //

 9,8,285, 9,285,336, 285,336,295, 336,295,296, 295,296,282, 282,334,283, 334,283,293, 283,293,276, 293,276,300,
 276,353,300, 353,300,383, 353,265,383, 265,383,372, 340,265,372, 340,345,372, 346,340,345, 346,352,345, 280,346,352,
 280,411,352, 411,352,376, 411,416,376, 416,376,435, 427,411,416, 434,427,416, 436,434,427, 435,432,434, 432,430,434,
 422,432,430, 431,422,430, 424,431,422, 418,424,431, 418,262,431, 421,418,262, 421,428,262, 200,421,428, 200,199,428,

 //

 208,200,199, 208,201,200, 32,208,201, 32,194,201, 211,32,194, 211,204,194, 202,211,204, 210,202,211, 210,212,202,
 214,210,212, 214,212,216, 214,207,216, 192,214,207, 192,187,207, 213,147,192, 147,192,187, 147,123,187, 123,187,50,
 123,117,50, 116,123,117, 116,111,117, 143,116,111, 143,35,111, 143,156,35, 156,35,124, 156,70,124, 124,70,46,
 70,46,63, 46,63,53, 63,53,105, 53,105,52, 105,52,66, 52,66,65, 66,65,107, 65,107,55, 107,55,9, 55,9,8,

 //
 8,168,417, 8,417,285, 417,285,441, 285,441,442, 285,442,295, 295,442,282, 442,282,443, 443,282,444, 282,444,283,
 444,283,445, 283,445,276, 445,276,342, 342,276,353, 342,353,446, 446,353,265, 261,446,265, 261,265,340, 346,261,340,
 448,261,346, 448,347,346, 280,347,346, 330,347,280, 330,280,425, 425,280,411, 425,427,411, 426,425,427, 426,436,427,
 322,426,436, 322,436,410, 410,436,432, 410,287,432, 273,287,432, 273,422,432, 335,273,422, 335,424,422,
 406,335,424, 406,418,424, 421,406,418, 313,406,421, 200,313,421, 200,18,313,
 //
 83,18,200,
 201,83,200,
 182,201,83,
 194,182,201,
 204,182,194,
 204,106,182,
 202,204,106,
 202,43,106,
 212,202,43,
 212,57,43,
 212,57,186,
 212,216,186,
 216,186,92,
 216,206,92,
 207,206,216,
 207,205,206,
 187,205,207,
 187,50,205,
 50,101,205,
 50,118,101,
 117,118,50,
 117,228,118,
 31,117,228,
 111,31,117,
 35,111,31,
 35,226,31,
 35,124,226,
 124,113,226,
 124,46,113,
 46,113,225,
 46,225,53,
 225,53,224,
 53,224,52,
 224,52,223,
 52,223,222,
 52,222,65,
 65,222,55,
 222,221,55,
 221,55,193,
 55,193,8,
 193,8,168,
 //




 //
 57,61,185,
 57,186,185,
 186,185,40,
 186,92,40,
 92,39,40,
 92,39,165,
 92,165,39,
 165,167,39,
 39,167,37,
 37,167,164,
 37,164,0,
 //
 0,164,267,
 164,267,393,
 267,393,269,
 393,269,391,
 269,391,322,
 269,270,322,
 270,322,410,
 270,410,409,
 409,410,287,
 409,287,291,



 //
 291,287,375,
 375,287,273,
 321,375,273,
 321,273,335,
 406,321,335,
 405,406,321,
 314,405,406,
 313,314,406,
 18,314,313,
 18,17,314,
 //
 84,17,18,
 83,84,18,
 182,83,84,
 182,181,84,
 91,181,182,
 106,91,182,
 43,106,91,
 43,146,91,
 57,43,146,
 57,61,146,
 //



 //
 61,185,76,
 76,185,184,
 185,184,40,
 184,40,74,
 40,74,73,
 40,39,73,
 39,73,72,
 39,72,37,
 37,72,0,
 0,72,11,
 0,11,302,
 0,302,267,
 302,267,269,
 302,303,269,
 303,269,270,
 303,304,270,
 304,270,408,
 270,408,409,
 408,292,409,
 409,291,306,
 //
 306,291,375,
 307,306,375,
 321,307,375,
 320,321,307,
 404,320,321,
 405,404,321,
 315,405,404,
 314,315,405,
 16,314,315,
 16,17,314,
 84,16,17,
 84,85,16,
 181,84,85,
 180,181,85,
 91,180,181,
 90,91,180,
 77,90,91,
 146,77,91,
 146,76,77,
 61,76,146,
 //


 76,62,183,
 76,183,184,
 183,184,42,
 184,42,74,
 42,74,41,
 41,74,73,
 73,41,38,
 73,38,72,
 38,72,12,
 72,12,11,
 11,12,302,
 12,302,268,
 302,268,303,
 268,303,271,
 271,303,304,
 271,272,304,
 272,304,408,
 272,407,408,
 407,408,292,
 407,292,306,
 //



 292,306,307,
 292,325,307,
 320,325,307,
 319,325,320,
 403,319,320,
 403,404,320,
 316,403,404,
 315,316,404,
 315,316,15,
 15,16,315,
 85,15,16,
 85,86,15,
 85,86,180,
 179,180,86,
 89,90,180,
 89,90,179,
 89,90,96,
 90,96,77,
 77,96,62,
 62,76,77,
 //





 62,78,183,
 183,191,80,
 183,80,42,
 42,80,81,
 41,42,81,
 41,81,82,
 41,38,82,
 38,82,13,
 38,12,13,
 12,13,268,
 13,268,312,
 268,312,271,
 311,312,271,
 271,272,311,
 310,311,272,
 310,272,407,
 310,415,407,
 415,407,308,
//



 324,325,308,
 318,324,325,
 318,319,325,
 403,318,318,
 402,403,318,
 317,402,403,
 316,317,403,
 316,317,14,
 14,15,316,
 14,15,86,
 14,86,87,
 86,87,179,
 178,179,87,
 178,179,88,
 88,89,179,
 88,89,96,
 95,96,88,
 95,96,62,
 //





 /* if unused, use src teeth
 //
 78,95,191,
 95,191,80,
 95,80,88,
 88,80,81,
 88,81,178,
 178,81,82,
 178,87,82,
 82,87,13,
 87,13,14,
 13,14,317,
 13,312,317,
 312,317,402,
 311,312,402,
 311,402,318,
 311,310,318,
 310,318,324,
 310,324,415,
 415,324,308
 */

 //











 ];


 function mpipeCalculate (pkt0,pkt1)
 {
 var obj,guide,gi,gl,nn,wid0,hit0,wid1,hit1,smack,crack;
 var mmm,mi,ml,found,thing,ti,tl,equa,equb,eqi,eql,tuch,tui,tul;
 var lia,lib,lic,cnt,go,from;
 var zx0,zy0,zx1,zy1,zx2,zy2;
 var zu0,zv0,zu1,zv1,zu2,zv2;
 var zr0,zr1,st;
 var egrp,egsz,imw,imh;
 var pix,four,rr,gg,bb,al,yy,xx,hex,bnd,hit;

 wid0=pkt0.image.width;
 hit0=pkt0.image.height;
 wid1=pkt1.image.width;
 hit1=pkt1.image.height;


 app.mpipe.xswp=null;
  obj={};
  obj.type="mmapper";
  obj.lia=[];
  obj.lib=[];
  obj.lic=[];
  obj.amc0=[];
  obj.amc1=[];
  obj.amc2=[];
  obj.bmc0=[];
  obj.bmc1=[];
  obj.bmc2=[];
  obj.xyuva=[];
  obj.xyuvb=[];
  obj.xyuvc=[];
  obj.ar0=[];
  obj.ar1=[];
  obj.mode=[];
  obj.pen=[];
  obj.trips=0;
 guide=mpipeTriaNew;
 gl=guide.length;
 gi=0;
 nn=0;
 equa=[
      //10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58 ,132,     93 ,234,127,162,21 ,54 ,

      162,21,54,103,67 ,109,
      10,
      338,297,332,284,251,389,

      //104,69,108,151,337,299,333,
      ];
 equb=[
 284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58 ,132,     93 ,234,127,162,21 ,54 ,

      //151,337,299,333,
      298,301,368,264,447,366,401,435,367,364,394,395,369,396,
      175,
      171,140,170,169,135,138,215,177,137,227,34,139,71,68
      //,104,69,108,
      ];
 //eql=equ.length;

 while(1)
  {
  if(gi>=gl) { break; }
  obj.mode[nn]=1;
  obj.pen[nn]=0;
  obj.lia[nn]=guide[gi+0];
  obj.lib[nn]=guide[gi+1];
  obj.lic[nn]=guide[gi+2];
  obj.amc0[nn]=mpipeLandmarkGet(pkt0.multiFaceLandmarks[0],obj.lia[nn]);
  obj.amc1[nn]=mpipeLandmarkGet(pkt0.multiFaceLandmarks[0],obj.lib[nn]);
  obj.amc2[nn]=mpipeLandmarkGet(pkt0.multiFaceLandmarks[0],obj.lic[nn]);
   obj.bmc0[nn]=mpipeLandmarkGet(pkt1.multiFaceLandmarks[0],obj.lia[nn]);
   obj.bmc1[nn]=mpipeLandmarkGet(pkt1.multiFaceLandmarks[0],obj.lib[nn]);
   obj.bmc2[nn]=mpipeLandmarkGet(pkt1.multiFaceLandmarks[0],obj.lic[nn]);
  obj.xyuva[nn]=aa.guiXyuvSetEx(obj.amc0[nn].x,obj.amc0[nn].y, obj.bmc0[nn].x,obj.bmc0[nn].y, wid0,hit0,wid1,hit1);
  obj.xyuvb[nn]=aa.guiXyuvSetEx(obj.amc1[nn].x,obj.amc1[nn].y, obj.bmc1[nn].x,obj.bmc1[nn].y, wid0,hit0,wid1,hit1);
  obj.xyuvc[nn]=aa.guiXyuvSetEx(obj.amc2[nn].x,obj.amc2[nn].y, obj.bmc2[nn].x,obj.bmc2[nn].y, wid0,hit0,wid1,hit1);
  obj.ar0[nn]=aa.numTriangleAreaGet(obj.xyuva[nn].x>>0,obj.xyuva[nn].y>>0,obj.xyuvb[nn].x>>0,obj.xyuvb[nn].y>>0,obj.xyuvc[nn].x>>0,obj.xyuvc[nn].y>>0);
  obj.ar1[nn]=aa.numTriangleAreaGet(obj.xyuva[nn].u>>0,obj.xyuva[nn].v>>0,obj.xyuvb[nn].u>>0,obj.xyuvb[nn].v>>0,obj.xyuvc[nn].u>>0,obj.xyuvc[nn].v>>0);

  /*
  eql=equa.length;
  for(eqi=0;eqi<eql;eqi+=1)
   {
   cnt=0;
   if(obj.lia[nn]==equa[eqi]) { cnt++; }
   if(obj.lib[nn]==equa[eqi]) { cnt++; }
   if(obj.lic[nn]==equa[eqi]) { cnt++; }
   if(cnt>=1){   obj.mode[nn]=2;  }
   }
  eql=equb.length;
  for(eqi=0;eqi<eql;eqi+=1)
   {
   //if(obj.mode[nn]!=1) { continue; }
   cnt=0;
   if(obj.lia[nn]==equb[eqi]) { cnt++; }
   if(obj.lib[nn]==equb[eqi]) { cnt++; }
   if(obj.lic[nn]==equb[eqi]) { cnt++; }
  // if(cnt>=1){   obj.mode[nn]=3;  }
   }
   */


  gi+=3;
  nn++;
  }
 obj.trips=nn;
 return obj;
 }




/*

 function guiWarper (handle,sindex,count,xyuv0,xyuv1,xyuv2,xyuv3,img)
 {
 var grp,c,l,t,i,j;
 var sx0,sy0,su0,sv0;
 var sx1,sy1,su1,sv1;
 var sx2,sy2,su2,sv2;
 var sx3,sy3,su3,sv3;
 var x0,x1,x2;
 var y0,y1,y2;
 var u0,u1,u2;
 var v0,v1,v2;
 var delta,delta_a,delta_b,delta_c,delta_d,delta_e,delta_f;

 if((grp=aa.guiGroupGet(handle))==null) { return false; }
 c=2;
 if(xyuv3==null) {  c=1; }

 for(j=0;j<count;j++)
  {
  i=sindex+j;

  sx0=xyuv0[i].x; sx1=xyuv1[i].x; sx2=xyuv2[i].x; if(c==2) sx3=xyuv3[i].x;
  sy0=xyuv0[i].y; sy1=xyuv1[i].y; sy2=xyuv2[i].y; if(c==2) sy3=xyuv3[i].y;
  su0=xyuv0[i].u; su1=xyuv1[i].u; su2=xyuv2[i].u; if(c==2) su3=xyuv3[i].u;
  sv0=xyuv0[i].v; sv1=xyuv1[i].v; sv2=xyuv2[i].v; if(c==2) sv3=xyuv3[i].v;


  for(t=0;t<c;t++)
   {
   if(t==0) {  x0=sx0; x1=sx1; x2=sx2; y0=sy0; y1=sy1; y2=sy2; u0=su0; u1=su1; u2=su2; v0=sv0; v1=sv1; v2=sv2; }
   else     {  x0=sx2; x1=sx3; x2=sx0; y0=sy2; y1=sy3; y2=sy0; u0=su2; u1=su3; u2=su0; v0=sv2; v1=sv3; v2=sv0; }

   if(t==0) grp.ctx.save();
   grp.ctx.lineWidth=0;
   grp.ctx.beginPath();
   if(t==0)
    {
    grp.ctx.moveTo(sx0,sy0);
    grp.ctx.lineTo(sx1,sy1);
    grp.ctx.lineTo(sx2,sy2);
    //grp.ctx.lineTo(sx3,sy3);
    }
   else
    {
    grp.ctx.moveTo(sx2,sy2);
    grp.ctx.lineTo(sx3,sy3);
    grp.ctx.lineTo(sx0,sy0);
    ////grp.ctx.lineTo(sx1,sy1);
    }


   grp.ctx.closePath();
   grp.ctx.clip();


   delta=u0*v1+v0*u2+u1*v2-v1*u2-v0*u1-u0*v2;
   delta_a=x0*v1+v0*x2+x1*v2-v1*x2-v0*x1-x0*v2;
   delta_b=u0*x1+x0*u2+u1*x2-x1*u2-x0*u1-u0*x2;
   delta_c=u0*v1*x2+v0*x1*u2+x0*u1*v2-x0*v1*u2-v0*u1*x2-u0*x1*v2;
   delta_d=y0*v1+v0*y2+y1*v2-v1*y2-v0*y1-y0*v2;
   delta_e=u0*y1+y0*u2+u1*y2-y1*u2-y0*u1-u0*y2;
   delta_f=u0*v1*y2+v0*y1*u2+y0*u1*v2-y0*v1*u2-v0*u1*y2-u0*y1*v2;
   grp.ctx.transform(delta_a/delta,delta_d/delta,delta_b/delta,delta_e/delta,delta_c/delta,delta_f/delta);
   grp.ctx.drawImage(img,0,0);

   if(t==1) grp.ctx.restore();
   }



  }
 return true;
 }

*/





/*

 function guiWarper (handle,sindex,count,xyuv0,xyuv1,xyuv2,xyuv3,img)
 {
 var grp,c,l,t,i,j;
 var sx0,sy0,su0,sv0;
 var sx1,sy1,su1,sv1;
 var sx2,sy2,su2,sv2;
 var sx3,sy3,su3,sv3;
 var x0,x1,x2;
 var y0,y1,y2;
 var u0,u1,u2;
 var v0,v1,v2;
 var delta,delta_a,delta_b,delta_c,delta_d,delta_e,delta_f;

 if((grp=aa.guiGroupGet(handle))==null) { return false; }
 c=2;
 if(xyuv3==null) {  c=1; }

 for(j=0;j<count;j++)
  {
  i=sindex+j;

  sx0=xyuv0[i].x; sx1=xyuv1[i].x; sx2=xyuv2[i].x; if(c==2) sx3=xyuv3[i].x;
  sy0=xyuv0[i].y; sy1=xyuv1[i].y; sy2=xyuv2[i].y; if(c==2) sy3=xyuv3[i].y;
  su0=xyuv0[i].u; su1=xyuv1[i].u; su2=xyuv2[i].u; if(c==2) su3=xyuv3[i].u;
  sv0=xyuv0[i].v; sv1=xyuv1[i].v; sv2=xyuv2[i].v; if(c==2) sv3=xyuv3[i].v;


  for(t=0;t<c;t++)
   {
   if(t==0) {  x0=sx0; x1=sx1; x2=sx2; y0=sy0; y1=sy1; y2=sy2; u0=su0; u1=su1; u2=su2; v0=sv0; v1=sv1; v2=sv2; }
   else     {  x0=sx2; x1=sx3; x2=sx0; y0=sy2; y1=sy3; y2=sy0; u0=su2; u1=su3; u2=su0; v0=sv2; v1=sv3; v2=sv0; }

   if(t==0) {  grp.ctx.save(); }
   grp.ctx.lineWidth=0;
   grp.ctx.beginPath();
   if(t==0)
    {
    grp.ctx.moveTo(sx0,sy0);
    grp.ctx.lineTo(sx1,sy1);
    grp.ctx.lineTo(sx2,sy2);
    grp.ctx.lineTo(sx3,sy3);
    }
   else
    {
    //grp.ctx.moveTo(sx2,sy2);
    //grp.ctx.lineTo(sx3,sy3);
    //grp.ctx.lineTo(sx0,sy0);
    //grp.ctx.lineTo(sx1,sy1);
    }
   grp.ctx.closePath();
   grp.ctx.clip();


   delta=u0*v1+v0*u2+u1*v2-v1*u2-v0*u1-u0*v2;
   delta_a=x0*v1+v0*x2+x1*v2-v1*x2-v0*x1-x0*v2;
   delta_b=u0*x1+x0*u2+u1*x2-x1*u2-x0*u1-u0*x2;
   delta_c=u0*v1*x2+v0*x1*u2+x0*u1*v2-x0*v1*u2-v0*u1*x2-u0*x1*v2;
   delta_d=y0*v1+v0*y2+y1*v2-v1*y2-v0*y1-y0*v2;
   delta_e=u0*y1+y0*u2+u1*y2-y1*u2-y0*u1-u0*y2;
   delta_f=u0*v1*y2+v0*y1*u2+y0*u1*v2-y0*v1*u2-v0*u1*y2-u0*y1*v2;
   grp.ctx.transform(delta_a/delta,delta_d/delta,delta_b/delta,delta_e/delta,delta_c/delta,delta_f/delta);
   grp.ctx.drawImage(img,0,0);

   if(t==1) { grp.ctx.restore(); }
   }
  }
 return true;
 }







 function guiTextureMap (handle,img)
 {
 var grp,t,i,l,c,pp,delta,delta_a,delta_b,delta_c,delta_d,delta_e,delta_f;
 var x0,y0,u0,v0,x1,y1,u1,v1,x2,y2,u2,v2,rr,gg,bb,al,fp,gal;

 if((grp=aa.guiGroupGet(handle))==null) { return false; }
 l=app.mpipe.xswp.trips;
 for(i=0;i<l;i+=1)
  {
  if(app.mpipe.xswp.mode[i]==2)  {   continue;   }

  x0=app.mpipe.xswp.xyuva[i].x; x1=app.mpipe.xswp.xyuvb[i].x; x2=app.mpipe.xswp.xyuvc[i].x;
  y0=app.mpipe.xswp.xyuva[i].y; y1=app.mpipe.xswp.xyuvb[i].y; y2=app.mpipe.xswp.xyuvc[i].y;
  u0=app.mpipe.xswp.xyuva[i].u; u1=app.mpipe.xswp.xyuvb[i].u; u2=app.mpipe.xswp.xyuvc[i].u;
  v0=app.mpipe.xswp.xyuva[i].v; v1=app.mpipe.xswp.xyuvb[i].v; v2=app.mpipe.xswp.xyuvc[i].v;


  if(app.mpipe.xswp.mode[i]==31)
   {
   rr=gg=bb=0;
   rr=(app.mpipe.xswp.pen[i]>>16)&0xff;
   gg=(app.mpipe.xswp.pen[i]>>8)&0xff;
   bb=(app.mpipe.xswp.pen[i]>>0)&0xff;
   grp.ctx.lineWidth=1;
   grp.ctx.fillStyle="rgba("+rr+","+gg+","+bb+",1.0)";//"rgba(162,104,75,1.0)";
   grp.ctx.beginPath();
   grp.ctx.moveTo(x0,y0);
   grp.ctx.lineTo(x1,y1);
   grp.ctx.lineTo(x2,y2);
   grp.ctx.closePath();
   grp.ctx.fill();
   continue;
   }

  //continue;

  if(app.mpipe.xswp.mode[i]==3)
   {
   gal=grp.ctx.globalAlpha;
   grp.ctx.globalAlpha=app.mpipe.hyper.global_alpha*0.7;
   //console.log(grp.ctx.globalAlpha);
   }

  grp.ctx.save();
  grp.ctx.lineWidth=0;
  grp.ctx.beginPath();
  grp.ctx.moveTo(x0,y0);
  grp.ctx.lineTo(x1,y1);
  grp.ctx.lineTo(x2,y2);
  grp.ctx.closePath();
  grp.ctx.clip();
  delta=u0*v1+v0*u2+u1*v2-v1*u2-v0*u1-u0*v2;
  delta_a=x0*v1+v0*x2+x1*v2-v1*x2-v0*x1-x0*v2;
  delta_b=u0*x1+x0*u2+u1*x2-x1*u2-x0*u1-u0*x2;
  delta_c=u0*v1*x2+v0*x1*u2+x0*u1*v2-x0*v1*u2-v0*u1*x2-u0*x1*v2;
  delta_d=y0*v1+v0*y2+y1*v2-v1*y2-v0*y1-y0*v2;
  delta_e=u0*y1+y0*u2+u1*y2-y1*u2-y0*u1-u0*y2;
  delta_f=u0*v1*y2+v0*y1*u2+y0*u1*v2-y0*v1*u2-v0*u1*y2-u0*y1*v2;
  grp.ctx.transform(delta_a/delta,delta_d/delta,delta_b/delta,delta_e/delta,delta_c/delta,delta_f/delta);
  grp.ctx.drawImage(img,0,0);
  grp.ctx.restore();

  if(app.mpipe.xswp.mode[i]==3)
   {
   grp.ctx.globalAlpha=gal;
   }

  }
 return true;
 }







*/





 function mpipeRawWrite (obj,wid,hit,img)
 {
 var cobj,grp,io,raw,egrp,egsz;
 var pix,rr,gg,bb,al,xx,yy,four;
 var imw,imh;
 var hsv,rgb;

 if(obj.type!="mpipe")   { aa.debugAlert(); return false; }
 if(obj.is_ready!=true)  {  return false; }
 if(obj.self_index==0)   { cobj=app.mpipe.obj_ray[1]; if(cobj.is_ready!=true) { return false; } }
 else                    { cobj=app.mpipe.obj_ray[0]; if(cobj.is_ready!=true) { return false; } }
 if(obj.raw_queue.length>obj.raw_queue_max)             { return false; }
 if(obj.processed_queue.length>obj.processed_queue_max) { return false; }

 if(1)
  {
  egrp=aa.guiGroupGetById(obj.can_id);
  egsz=aa.guiSizesGet(egrp.han);
  aa.guiCanvasImageDraw(egrp.obj.han, 0,0,wid,hit, 0,0,egsz.domwh[0],egsz.domwh[1], img);

  if(hiz<10)
  {
  if(obj.self_index==221)
   {
   imw=egsz.domwh[0];
   imh=egsz.domwh[1];
   pix=aa.guiCanvasImageGet(egrp.obj.han,  0,0,imw,imh);
               four=0;
               for(yy=0;yy<imh;yy++)
                {
                for(xx=0;xx<imw;xx++)
                 {
                 rr=pix.data[(four+0)];
                 gg=pix.data[(four+1)];
                 bb=pix.data[(four+2)];
                 al=pix.data[(four+3)];
                 rgb=aa.guiRgbaSet(rr,gg,bb,al);
                 hsv=aa.guiRgbaToHsva(rgb);
                 hsv.h*=app.mpipe.hyper.h_mul;
                 hsv.s*=app.mpipe.hyper.s_mul;
                 hsv.v*=app.mpipe.hyper.v_mul;
                 hsv.h=aa.numClamp(hsv.h,0,1);
                 hsv.s=aa.numClamp(hsv.s,0,1);
                 hsv.v=aa.numClamp(hsv.v,0,1);
                 //hsv.h=0.3;
                 //hsv.v=1;
                 ///hsv.s=1;
                 rgb=aa.guiHsvaToRgba(hsv);
                 rr=rgb.r;
                 gg=rgb.g;
                 bb=rgb.b;
                 pix.data[(four+0)]=rr>>0;
                 pix.data[(four+1)]=gg>>0;
                 pix.data[(four+2)]=bb>>0;
                 pix.data[(four+3)]=app.mpipe.hyper.pix_alpha;
                 four+=4;
                 }
                }
     aa.guiCanvasImagePut(egrp.obj.han,   0,0,  0,0,imw,imh,   pix);
     }
    }

  //console.log(obj.self_index+"  "+wid+"  "+hit+"  "+egsz.domwh[0]+"  "+egsz.domwh[1]);
  io={};
  io.width=egsz.domwh[0];
  io.height=egsz.domwh[1];
  io.vframe=egrp.dom;
  obj.raw_queue.push(io);
  if(obj.raw_queue_tik==0) { obj.raw_queue_tik=aa.timerMsRunning(); }
  obj.raw_queue_writes++;
  }
 else
  {
  ///console.log(obj.self_index+"  "+wid+"  "+hit);
  io={};
  io.width=wid;
  io.height=hit;
  io.vframe=img;
  obj.raw_queue.push(io);
  if(obj.raw_queue_tik==0) { obj.raw_queue_tik=aa.timerMsRunning(); }
  obj.raw_queue_writes++;
  }
 return true;
 }






 function mpipeRawSend (obj)
 {
 var raw;
 if(obj.type!="mpipe")       { return false; }
 if(obj.is_ready!=true)      { return false; }
 if(obj.is_waitin!=false)    { return false; }
 if(obj.raw_queue.length<=0) { return false; }
 obj.is_waitin=true;
 raw=obj.raw_queue.shift();
 obj.fm.send({image:raw.vframe});
 if(obj.raw_queue_tik==0) { obj.raw_queue_tik=aa.timerMsRunning(); }
 obj.raw_queue_reads++;
 return true;
 }





 function mpipeProcessedWrite (obj,results)
 {
 if(obj.type!="mpipe")     { aa.debugAlert(); }
 if(obj.is_waitin!=true)   { aa.debugAlert(); }
 obj.is_waitin=false;
 obj.processed_queue.push(results);
 if(obj.processed_queue_tik==0) { obj.processed_queue_tik=aa.timerMsRunning(); }
 obj.processed_queue_writes++;
 }







 function mpipeProcessedRead (obj)
 {
 var io;
 if(obj.type!="mpipe")             { return null; }
 if(obj.is_ready!=true)            { return null; }
 if(obj.processed_queue.length==0) { return null; }
 io=obj.processed_queue.shift();
 if(obj.processed_queue_tik==0) { obj.processed_queue_tik=aa.timerMsRunning(); }
 obj.processed_queue_reads++;
 return io;
 }






 function mpipeYield (obj)
 {
 var cobj,egrp,egsz,res,iu,img,rat;

 if(obj==undefined)       { return false; }
 if(obj.type!="mpipe")    { return false; }
 if(obj.is_started!=true) { return false; }

 while(1)
  {
  switch(obj.stage)
   {
   case 100:
   obj.fm=new FaceMesh({locateFile:(file)=>{ return "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/"+file;    }});
   obj.fm.setOptions({maxNumFaces:1,
                      refineLandmarks:true,
                      minDetectionConfidence:0.5,
                      minTrackingConfidence:0.5,
                      selfieMode:false,
                      useCpuInference:false,
                      enableFaceGeometry:false});
   obj.fm.onResults(function(results) {  obj.is_ok=true;  mpipeProcessedWrite(obj,results);   });
   obj.is_ready=true;
   console.log(obj.self_index+" mpipe ready");
   obj.stage=120;
   break;




   case 120:
   if(obj.is_ready!=true)  { break; }
   if(obj.self_index==0)   { cobj=app.mpipe.obj_ray[1]; }
   else                    { cobj=app.mpipe.obj_ray[0]; }
   if(cobj.is_ready!=true) { break; }
   if(obj.self_index==0)   { mpipeRawSend(obj); break;  }
   if(cobj.is_ok!=true)    { break; }
   iu=cur_iu;
   if(old_iu!=iu)
    {
    rat=app.guix.image[iu].img.width/app.guix.image[iu].img.height;
    rat=Math.round(rat*100)/100;
    console.log(iu+"  "+app.guix.image[iu].url+" "+app.guix.image[iu].img.width+" "+app.guix.image[iu].img.height+"  "+rat);
    old_iu=iu;
    hiz=0;
    app.mpipe.xswp=null;
    }
   hiz++;
   if(obj.self_index==1&&hiz<12)
    {
    img=app.guix.image[iu].img;
    if((res=mpipeRawWrite(obj,img.width,img.height,img))!=true) { console.log("raw failure"); }
    if((res=mpipeRawSend(obj))!=true)                           { console.log("raw send failure"); }
    break;
    }
   }
  break;
  }
 }




 var fuads=[
 // eye
 33,246,161,163,
 161,160,144,163,
 160,159,145,144,
 159,158,153,145,
 158,157,154,153,
 157,173,155,154,
 173,133,155,155,
 // eye
 362,398,384,382,
 382,384,385,381,
 385,386,380,381,
 380,386,387,374,
 374,387,388,373,
 373,388,466,390,
 390,466,263,263,
 // inner lips

 /*
 78,95,191,191,
 95,191,80,80,
 95,80,88,88,
 88,80,81,81,
 88,81,178,178,
 178,81,82,82,
 178,87,82,82,
 82,87,13,13,
 87,13,14,14,
 13,14,317,317,
 13,312,317,317,
 312,317,402,402,
 311,312,402,402,
 311,402,318,318,
 311,310,318,318,
 310,318,324,324,
 310,324,415,415,
 415,324,308,308,
 */

 // lips
 62,183,191,191,
 183,42,80,191,
 42,41,81,80,
 41,38,82,81,
 38,12,13,82,
 12,268,312,13,
 268,271,311,312,
 271,272,310,311,
 272,407,415,310,
 415,407,308,308,
 // lips
 62,95,96,96,
 95,88,89,96,
 88,178,179,89,
 178,87,86,179,
 87,14,15,86,
 14,317,316,15,
 317,402,403,316,
 402,318,319,403,
 318,324,325,319,
 324,325,308,308,
 //
 76,62,183,183,
 76,183,184,184,
 183,184,42,42,
 184,42,74,74,
 42,74,41,41,
 41,74,73,73,
 73,41,38,38,
 73,38,72,72,
 38,72,12,12,
 72,12,11,11,
 11,12,302,302,
 12,302,268,268,
 302,268,303,303,
 268,303,271,271,
 271,303,304,304,
 271,272,304,304,
 272,304,408,408,
 272,407,408,408,
 407,408,292,292,
 407,292,306,306,
 //
 292,306,307,307,
 292,325,307,307,
 320,325,307,307,
 319,325,320,320,
 403,319,320,320,
 403,404,320,320,
 316,403,404,404,
 315,316,404,404,
 315,316,15,15,
 15,16,315,315,
 85,15,16,16,
 85,86,15,15,
 85,86,180,180,
 179,180,86,86,
 89,90,180,180,
 89,90,179,179,
 89,90,96,96,
 90,96,77,77,
 77,96,62,62,
 62,76,77,77,
 //


 //
 61,185,76,76,
 76,185,184,184,
 185,184,40,40,
 184,40,74,74,
 40,74,73,73,
 40,39,73,73,
 39,73,72,72,
 39,72,37,37,
 37,72,0,0,
 0,72,11,11,
 0,11,302,302,
 0,302,267,267,
 302,267,269,269,
 302,303,269,269,
 303,269,270,270,
 303,304,270,270,
 304,270,408,408,
 270,408,409,409,
 408,292,409,409,
 409,291,306,306,

 //
 306,291,375,375,
 307,306,375,375,
 321,307,375,375,
 320,321,307,307,
 404,320,321,321,
 405,404,321,321,
 315,405,404,404,
 314,315,405,405,
 16,314,315,315,
 16,17,314,314,
 84,16,17,17,
 84,85,16,16,
 181,84,85,85,
 180,181,85,85,
 91,180,181,181,
 90,91,180,180,
 77,90,91,91,
 146,77,91,91,
 146,76,77,77,
 61,76,146,146,




 /*
 //
 57,61,185,185,
 57,186,185,185,
 186,185,40,40,
 186,92,40,40,
 92,39,40,40,
 92,39,165,165,
 92,165,39,39,
 165,167,39,39,
 39,167,37,37,
 37,167,164,164,
 37,164,0,0,

 //
 0,164,267,267,
 164,267,393,393,
 267,393,269,269,
 393,269,391,391,
 269,391,322,322,
 269,270,322,322,
 270,322,410,410,
 270,410,409,409,
 409,410,287,287,
 409,287,291,291,
*/




 ];

 var tuads=[
 10,411, 187,
 ];

 var quads=[
 ///
 10,338,337,151,
 338,297,299,337,
 297,332,333,299,
 332,284,298,333,
 284,251,301,298,
 251,389,368,301,
 389,356,264,368,
 356,454,447,264,
 454,323,366,447,
 323,361,401,366,
 361,288,435,401,
 288,397,367,435,
 397,365,364,367,
 365,379,394,364,
 379,378,395,394,
 378,400,369,395,
 400,377,396,369,
 377,152,175,396,
 152,148,171,175,
 148,176,140,171,
 176,149,170,140,
 149,150,169,170,
 150,136,135,169,
 136,172,138,135,
 172,58,215,138,
 58,132,177,215,
 132,93,137,177,
 93,234,227,137,
 234,127,34,227,
 127,162,139,34,
 162,21,71,139,
 21,54,68,71,
 54,103,104,68,
 103,67,69,104,
 67,109,108,69,
 109,10,151,108,
 ///
 164,393,267,0,
 393,391,269,267,
 391,322,270,269,
 322,410,409,270,
 410,432,287,409,
 432,273,375,287,
 273,335,321,375,
 335,406,405,321,
 406,313,314,405,
 313,18,17,314,
 18,83,84,17,
 83,182,181,84,
 182,106,91,181,
 106,43,146,91,
 43,57,61,146,
 57,186,92,40,
 92,165,39,40,
 165,167,37,39,
 167,164,0,37,
 ///
 0,267,302,11,
 267,269,303,302,

 269,270,304,303,
 270,409,408,304,








 ];

 var tris=[
 10,151,337,
 10,337,338,
 338,337,299,
 338,299,297,
 297,299,333,

 //338,299,297,
 //297,333,332,

 ];





 function mpipeEngine ()
 {
 var obj0,obj1,pkt0,pkt1,cobj,cgrp,cgsz,w0,h0,w1,h1,w2,h2,gal;
 var pix,rr,gg,bb,al,xx,yy,go;
 var zz,oval,ol,oi,dv;
 var xc,yc,zc;
 var str;
 var jgrp,kgrp;
 var x0,y0,mm,ix;
 var ma0,ma1,ma2,ma3,qq,qi,ee;

 if(app.mpipe==undefined)         { return; }
 if(app.mpipe.obj_ray==undefined) { return; }

 obj0=app.mpipe.obj_ray[0];
 obj1=app.mpipe.obj_ray[1];
 pkt0=null;
 pkt1=null;

 if((jgrp=aa.guiGroupGetById("tmpcan_0"))==null) { aa.debugAlert(); }
 if((kgrp=aa.guiGroupGetById("tmpcan_1"))==null) { aa.debugAlert(); }
 if((cgrp=aa.guiGroupGetById("b_canstream_0"))==null) { aa.debugAlert(); }
 cgsz=aa.guiSizesGet(cgrp.han);

 if((pkt1=mpipeProcessedRead(obj1))!=null)
  {
  obj1.last_pop=pkt1;
  }


 if((pkt0=mpipeProcessedRead(obj0))!=null)
  {
  ///aa.guiCanvasImageDraw(cgrp.obj.han,0,0,pkt0.image.width,pkt0.image.height, 0,0,cgsz.domwh[0],cgsz.domwh[1],pkt0.image);
  obj0.last_pop=pkt0; // placed to here
  if(pkt0.multiFaceLandmarks&&pkt0.multiFaceLandmarks[0])
   {
   pkt1=obj1.last_pop;
   if(pkt1&&pkt1.multiFaceLandmarks&&pkt1.multiFaceLandmarks[0])
    {
   // obj0.last_pop=pkt0; // placed from here
    obj1.last_pop=pkt1;
    if(fifla==0) { aa.guiCanvasFillFull(aa.guiGroupGetById("maincanvas").han,aa.guiRgbaString(255,255,255,1)); fifla=1; }

    w0=pkt0.image.width; h0=pkt0.image.height;
    w1=cgsz.domwh[0];    h1=cgsz.domwh[1];
    w2=pkt1.image.width; h2=pkt1.image.height;

 //   aa.guiCanvasFillFull(cgrp.han,aa.guiRgbaString(255,230,255,1));
    aa.guiCanvasImageDraw(cgrp.obj.han,0,0,w0,h0, 0,0,w1,h1,pkt0.image);

    app.mpipe.xswp=mpipeCalculate(pkt0,pkt1);

    for(mm=0;mm<pkt0.multiFaceLandmarks[0].length;mm++)
     {
     x0=pkt0.multiFaceLandmarks[0][mm].x;
     y0=pkt0.multiFaceLandmarks[0][mm].y;
     x0=x0*w0;
     y0=y0*h0;
     ///aa.guiCanvasFill(cgrp.han,x0-1,y0-1,2,2,aa.guiRgbaString(255,5,255,0.3));
     }

    /*
      if(gi>=gl) { break; }
  obj.mode[nn]=1;
  obj.pen[nn]=0;
  obj.lia[nn]=guide[gi+0];
  obj.lib[nn]=guide[gi+1];
  obj.lic[nn]=guide[gi+2];
  obj.amc0[nn]=mpipeLandmarkGet(pkt0.multiFaceLandmarks[0],obj.lia[nn]);
  obj.amc1[nn]=mpipeLandmarkGet(pkt0.multiFaceLandmarks[0],obj.lib[nn]);
  obj.amc2[nn]=mpipeLandmarkGet(pkt0.multiFaceLandmarks[0],obj.lic[nn]);
   obj.bmc0[nn]=mpipeLandmarkGet(pkt1.multiFaceLandmarks[0],obj.lia[nn]);
   obj.bmc1[nn]=mpipeLandmarkGet(pkt1.multiFaceLandmarks[0],obj.lib[nn]);
   obj.bmc2[nn]=mpipeLandmarkGet(pkt1.multiFaceLandmarks[0],obj.lic[nn]);
  obj.xyuva[nn]=aa.guiXyuvSetEx(obj.amc0[nn].x,obj.amc0[nn].y, obj.bmc0[nn].x,obj.bmc0[nn].y, wid0,hit0,wid1,hit1);
  obj.xyuvb[nn]=aa.guiXyuvSetEx(obj.amc1[nn].x,obj.amc1[nn].y, obj.bmc1[nn].x,obj.bmc1[nn].y, wid0,hit0,wid1,hit1);
  obj.xyuvc[nn]=aa.guiXyuvSetEx(obj.amc2[nn].x,obj.amc2[nn].y, obj.bmc2[nn].x,obj.bmc2[nn].y, wid0,hit0,wid1,hit1);
  obj.ar0[nn]=aa.numTriangleAreaGet(obj.xyuva[nn].x>>0,obj.xyuva[nn].y>>0,obj.xyuvb[nn].x>>0,obj.xyuvb[nn].y>>0,obj.xyuvc[nn].x>>0,obj.xyuvc[nn].y>>0);
  obj.ar1[nn]=aa.numTriangleAreaGet(obj.xyuva[nn].u>>0,obj.xyuva[nn].v>>0,obj.xyuvb[nn].u>>0,obj.xyuvb[nn].v>>0,obj.xyuvc[nn].u>>0,obj.xyuvc[nn].v>>0);
*/


 if(1)
 {
 ma0=[]; ma1=[]; ma2=[]; ma3=[]; ee=0;
 if(1)
  {
  for(qi=0;qi<fuads.length;qi+=4)
   {
   qq=fuads[qi+0]; ma0[ee]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
   qq=fuads[qi+1]; ma1[ee]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
   qq=fuads[qi+2]; ma2[ee]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
   qq=fuads[qi+3]; ma3[ee]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
   ee++;
   }

     gal=cgrp.ctx.globalAlpha;
     cgrp.ctx.globalAlpha=app.mpipe.hyper.global_alpha;
  aa.guiCanvasTextureMapper(cgrp.han,0,ee,ma0,ma1,ma2,ma3,pkt1.image);
       cgrp.ctx.globalAlpha=gal;
  }
 else
  {
  for(qi=0;qi<tuads.length;qi+=3)
   {
   qq=tuads[qi+0]; ma0[ee]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
   qq=tuads[qi+1]; ma1[ee]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
   qq=tuads[qi+2]; ma2[ee]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
   ee++;
   }
  aa.guiCanvasTextureMapper(cgrp.han,0,ee,ma0,ma1,ma2,null,pkt1.image);
  }

 }
else
 {
 ma0=[]; ma1=[]; ma2=[]; ma3=[]; ee=0;
 for(qi=0;qi<tris.length;qi+=3)
  {
  qq=tris[qi+0]; ma0[ee]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
  qq=tris[qi+1]; ma1[ee]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
  qq=tris[qi+2]; ma2[ee]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
  ee++;
  }
 aa.guiCanvasTextureMapper(cgrp.han,0,ee,ma0,ma1,ma2,null,pkt1.image);
 }


if(0)
{
if(0)
 {
 ma0=[]; qq=67; ma0[0]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
 ma1=[]; qq=297; ma1[0]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
 ma2=[]; qq=282; ma2[0]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
 ma3=[]; qq=53;  ma3[0]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
 aa.guiCanvasTextureMapper(cgrp.han,0,1,ma0,ma1,ma2,ma3,pkt1.image);
 }
else
 {
 ma0=[]; qq=109; ma0[0]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
 ma1=[]; qq=10;  ma1[0]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
 ma2=[]; qq=108; ma2[0]=aa.guiXyuvSetEx(pkt0.multiFaceLandmarks[0][qq].x,pkt0.multiFaceLandmarks[0][qq].y,pkt1.multiFaceLandmarks[0][qq].x,pkt1.multiFaceLandmarks[0][qq].y,w0,h0,w1,h1);
 aa.guiCanvasTextureMapper(cgrp.han,0,1,ma0,ma1,ma2,null,pkt1.image);
 }
}


 //obj.amc0[nn].x,obj.amc0[nn].y, obj.bmc0[nn].x,obj.bmc0[nn].y, wid0,hit0,wid1,hit1);

    //console.log(app.mpipe.xswp.xyuva[0]);
    //aa.guiCanvasTextureMapper(cgrp.han,0,1,ma0,ma1,ma2,null,pkt1.image);
    ///aa.guiCanvasTextureMapper(cgrp.han,0,1,app.mpipe.xswp.xyuva,app.mpipe.xswp.xyuvb,app.mpipe.xswp.xyuvc,null,pkt1.image);

    // (handle,xyuv0,xyuv1,xyuv2,xyuv3,img)

    /*
    ///console.log(pkt0.multiFaceLandmarks[0].length);
    for(mm=0;mm<mpipeTria466.length;mm++)
     {
     x0=pkt0.multiFaceLandmarks[0][mpipeTria466[mm+0]].x;
     y0=pkt0.multiFaceLandmarks[0][mpipeTria466[mm+0]].y;
     x0=x0*w0;
     y0=y0*h0;
     aa.guiCanvasFill(cgrp.han,x0-1,y0-1,2,2,aa.guiRgbaString(255,5,255,0.3));
     }
     //console.log(mm);
     */







    if(0)
     {
     gal=cgrp.ctx.globalAlpha;
     cgrp.ctx.globalAlpha=app.mpipe.hyper.global_alpha;
     guiTextureMap(cgrp.han,pkt1.image);
     cgrp.ctx.globalAlpha=gal;
     }

    }
   }
  }

 }







