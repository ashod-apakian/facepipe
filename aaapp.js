//---------------------------------------------------------
 "use strict";
//---------------------------------------------------------


 var cfg_profiler_use=0;
 var cfg_profiler_hz=2;

 var cfg_app_version="3.186";
 var cfg_app_speed=40;

 var cfg_vlog_use=0;

 var cfg_mpipe_fix=33;

 var cfg_max_peers=3;

 var cfg_audio_default_gain=4.5;
 var cfg_audio_local_initially_muted=false;//true;
 var cfg_audio_peer_initially_muted=false;
 var cfg_audio_loopback_muted=true;

 var cfg_audio_script_processor_size=1024; // was 1024
 var cfg_audio_fft_size=128; // was 128
 var cfg_audio_min_db=-90;
 var cfg_audio_max_db=-10;
 var cfg_audio_smoothing=0.5;
 var cfg_audio_threshold=110;
 var cfg_audio_aec=true;
 var cfg_audio_nsu=false;
 var cfg_audio_agc=false;

 var cfg_video_square=false;

 var cfg_cam_res_wid=320;
 var cfg_cam_res_short=false;
 var cfg_cam_res_rot=false;

 var cfg_cam_fps=30;

 var cfg_cstream_auto=false;//true;

 var cfg_sdp_manip=true;
 var cfg_sdp_sbool=true;
 var cfg_sdp_use_arate=(128);
 var cfg_sdp_use_vrate=(512);

 var cfg_rembug_use=true;//true;



//---------------------------------------------------------



 var mpipeTria68=[
 162,234,93,58,172,136,149,148,152,377,378,365,397,288,323,454,389,71,63,105,66,107,336,296,334,293,301,168,197,5,4,75,97,
 2,326,305,33,160,158,133,153,144,362,385,387,263,373,380,61,39,37,0,267,269,291,405,314,17,84,181,78,82,13,312,308,317,14,87];



 var mpipeTria466=[
 127,34,139,11,0,37,232,231,120,72,37,39,128,121,47,232,121,128,104,69,67,175,171,148,157,154,155,118,50,101,73,39,40,9,
 151,108,48,115,131,194,204,211,74,40,185,80,42,183,40,92,186,230,229,118,202,212,214,83,18,17,76,61,146,160,29,30,56,
 157,173,106,204,194,135,214,192,203,165,98,21,71,68,51,45,4,144,24,23,77,146,91,205,50,187,201,200,18,91,106,182,90,91,
 181,85,84,17,206,203,36,148,171,140,92,40,39,193,189,244,159,158,28,247,246,161,236,3,196,54,68,104,193,168,8,117,
 228,31,189,193,55,98,97,99,126,47,100,166,79,218,155,154,26,209,49,131,135,136,150,47,126,217,223,52,53,45,51,134,211,
 170,140,67,69,108,43,106,91,230,119,120,226,130,247,63,53,52,238,20,242,46,70,156,78,62,96,46,53,63,143,34,227,173,
 155,133,123,117,111,44,125,19,236,134,51,216,206,205,154,153,22,39,37,167,200,201,208,36,142,100,57,212,202,20,60,99,28,
 158,157,35,226,113,160,159,27,204,202,210,113,225,46,43,202,204,62,76,77,137,123,116,41,38,72,203,129,142,64,98,240,49,
 102,64,41,73,74,212,216,207,42,74,184,169,170,211,170,149,176,105,66,69,122,6,168,123,147,187,96,77,90,65,55,107,89,
 90,180,101,100,120,63,105,104,93,137,227,15,86,85,129,102,49,14,87,86,55,8,9,100,47,121,145,23,22,88,89,179,6,122,
 196,88,95,96,138,172,136,215,58,172,115,48,219,42,80,81,195,3,51,43,146,61,171,175,199,81,82,38,53,46,225,144,163,110,
 246,33,7,52,65,66,229,228,117,34,127,234,107,108,69,109,108,151,48,64,235,62,78,191,129,209,126,111,35,143,163,161,246,
 117,123,50,222,65,52,19,125,141,221,55,65,3,195,197,25,7,33,220,237,44,70,71,139,122,193,245,247,130,33,71,21,162,
 153,158,159,170,169,150,188,174,196,216,186,92,144,160,161,2,97,167,141,125,241,164,167,37,72,38,12,145,159,160,38,82,13,
 63,68,71,226,35,111,158,153,154,101,50,205,206,92,165,209,198,217,165,167,97,220,115,218,133,112,243,239,238,241,214,
 135,169,190,173,133,171,208,32,125,44,237,86,87,178,85,86,179,84,85,180,83,84,181,201,83,182,137,93,132,76,62,183,61,
 76,184,57,61,185,212,57,186,214,207,187,34,143,156,79,239,237,123,137,177,44,1,4,201,194,32,64,102,129,213,215,138,59,
 166,219,242,99,97,2,94,141,75,59,235,24,110,228,25,130,226,23,24,229,22,23,230,26,22,231,112,26,232,189,190,243,221,56,
 190,28,56,221,27,28,222,29,27,223,30,29,224,247,30,225,238,79,20,166,59,75,60,75,240,147,177,215,20,79,166,187,147,213,
 112,233,244,233,128,245,128,114,188,114,217,174,131,115,220,217,198,236,198,131,134,177,132,58,143,35,124,110,163,7,228,
 110,25,356,389,368,11,302,267,452,350,349,302,303,269,357,343,277,452,453,357,333,332,297,175,152,377,384,398,382,347,
 348,330,303,304,270,9,336,337,278,279,360,418,262,431,304,408,409,310,415,407,270,409,410,450,348,347,422,430,434,313,
 314,17,306,307,375,387,388,260,286,414,398,335,406,418,364,367,416,423,358,327,251,284,298,281,5,4,373,374,253,307,320,
 321,425,427,411,421,313,18,321,405,406,320,404,405,315,16,17,426,425,266,377,400,369,322,391,269,417,465,464,386,257,258,
 466,260,388,456,399,419,284,332,333,417,285,8,346,340,261,413,441,285,327,460,328,355,371,329,392,439,438,382,341,256,
 429,420,360,364,394,379,277,343,437,443,444,283,275,440,363,431,262,369,297,338,337,273,375,321,450,451,349,446,342,467,
 293,334,282,458,461,462,276,353,383,308,324,325,276,300,293,372,345,447,382,398,362,352,345,340,274,1,19,456,248,281,436,
 427,425,381,256,252,269,391,393,200,199,428,266,330,329,287,273,422,250,462,328,258,286,384,265,353,342,387,259,257,424,
 431,430,342,353,276,273,335,424,292,325,307,366,447,345,271,303,302,423,266,371,294,455,460,279,278,294,271,272,304,432,
 434,427,272,407,408,394,430,431,395,369,400,334,333,299,351,417,168,352,280,411,325,319,320,295,296,336,319,403,404,330,
 348,349,293,298,333,323,454,447,15,16,315,358,429,279,14,15,316,285,336,9,329,349,350,374,380,252,318,402,403,6,197,419,
 318,319,325,367,364,365,435,367,397,344,438,439,272,271,311,195,5,281,273,287,291,396,428,199,311,271,268,283,444,445,
 373,254,339,263,466,249,282,334,296,449,347,346,264,447,454,336,296,299,338,10,151,278,439,455,292,407,415,358,371,355,
 340,345,372,390,249,466,346,347,280,442,443,282,19,94,370,441,442,295,248,419,197,263,255,359,440,275,274,300,383,368,
 351,412,465,263,467,466,301,368,389,380,374,386,395,378,379,412,351,419,436,426,322,373,390,388,2,164,393,370,462,461,
 164,0,267,302,11,12,374,373,387,268,12,13,293,300,301,446,261,340,385,384,381,330,266,425,426,423,391,429,355,437,391,
 327,326,440,457,438,341,382,362,459,457,461,434,430,394,414,463,362,396,369,262,354,461,457,316,403,402,315,404,403,314,
 405,404,313,406,405,421,418,406,366,401,361,306,408,407,291,409,408,287,410,409,432,436,410,434,416,411,264,368,383,309,
 438,457,352,376,401,274,275,4,421,428,262,294,327,358,433,416,367,289,455,439,462,370,326,2,326,370,305,460,455,254,
 449,448,255,261,446,253,450,449,252,451,450,256,452,451,341,453,452,413,464,463,441,413,414,258,442,441,257,443,442,259,
 444,443,260,445,444,467,342,445,459,458,250,289,392,290,290,328,460,376,433,435,250,290,392,411,416,433,341,463,464,453,
 464,465,357,465,412,343,412,399,360,363,440,437,399,456,420,456,363,401,435,288,372,383,353,339,255,249,448,261,255,133,
 243,190,133,155,112,33,246,247,33,130,25,398,384,286,362,398,414,362,463,341,263,359,467,263,249,255,466,467,260,75,60,
 166,238,239,79,162,127,139,72,11,37,121,232,120,73,72,39,114,128,47,233,232,128,103,104,67,152,175,148,173,157,155,
 119,118,101,74,73,40,107,9,108,49,48,131,32,194,211,184,74,185,191,80,183,185,40,186,119,230,118,210,202,214,84,83,17,
 77,76,146,161,160,30,190,56,173,182,106,194,138,135,192,129,203,98,54,21,68,5,51,4,145,144,23,90,77,91,207,205,187,83,
 201,18,181,91,182,180,90,181,16,85,17,205,206,36,176,148,140,165,92,39,245,193,244,27,159,28,30,247,161,174,236,196,
 103,54,104,55,193,8,111,117,31,221,189,55,240,98,99,142,126,100,219,166,218,112,155,26,198,209,131,169,135,150,114,47,
 217,224,223,53,220,45,134,32,211,140,109,67,108,146,43,91,231,230,120,113,226,247,105,63,52,241,238,242,124,46,156,95,
 78,96,70,46,63,116,143,227,116,123,111,1,44,19,3,236,51,207,216,205,26,154,22,165,39,167,199,200,208,101,36,100,43,
 57,202,242,20,99,56,28,157,124,35,113,29,160,27,211,204,210,124,113,46,106,43,204,96,62,77,227,137,116,73,41,72,36,203,
 142,235,64,240,48,49,64,42,41,74,214,212,207,183,42,184,210,169,211,140,170,176,104,105,69,193,122,168,50,123,187,89,96,
 90,66,65,107,179,89,180,119,101,120,68,63,104,234,93,227,16,15,85,209,129,49,15,14,86,107,55,9,120,100,121,153,145,22,
 178,88,179,197,6,196,89,88,96,135,138,136,138,215,172,218,115,219,41,42,81,5,195,51,57,43,61,208,171,199,41,81,38,
 224,53,225,24,144,110,105,52,66,118,229,117,227,34,234,66,107,69,10,109,151,219,48,235,183,62,191,142,129,126,116,111,
 143,7,163,246,118,117,50,223,222,52,94,19,141,222,221,65,196,3,197,45,220,44,156,70,139,188,122,245,139,71,162,145,
 153,159,149,170,150,122,188,196,206,216,92,163,144,161,164,2,167,242,141,241,0,164,37,11,72,12,144,145,160,12,38,13,70,
 63,71,31,226,111,157,158,154,36,101,205,203,206,165,126,209,217,98,165,97,237,220,218,237,239,241,210,214,169,140,171,32,
 241,125,237,179,86,178,180,85,179,181,84,180,182,83,181,194,201,182,177,137,132,184,76,183,185,61,184,186,57,185,216,212,
 186,192,214,187,139,34,156,218,79,237,147,123,177,45,44,4,208,201,32,98,64,129,192,213,138,235,59,219,141,242,97,97,2,
 141,240,75,235,229,24,228,31,25,226,230,23,229,231,22,230,232,26,231,233,112,232,244,189,243,189,221,190,222,28,221,
 223,27,222,224,29,223,225,30,224,113,247,225,99,60,240,213,147,215,60,20,166,192,187,213,243,112,244,244,233,245,245,
 128,188,188,114,174,134,131,220,174,217,236,236,198,134,215,177,58,156,143,124,25,110,7,31,228,25,264,356,368,0,11,267,
 451,452,349,267,302,269,350,357,277,350,452,357,299,333,297,396,175,377,381,384,382,280,347,330,269,303,270,151,9,337,
 344,278,360,424,418,431,270,304,409,272,310,407,322,270,410,449,450,347,432,422,434,18,313,17,291,306,375,259,387,260,
 424,335,418,434,364,416,391,423,327,301,251,298,275,281,4,254,373,253,375,307,321,280,425,411,200,421,18,335,321,406,
 321,320,405,314,315,17,423,426,266,396,377,369,270,322,269,413,417,464,385,386,258,248,456,419,298,284,333,168,417,8,
 448,346,261,417,413,285,326,327,328,277,355,329,309,392,438,381,382,256,279,429,360,365,364,379,355,277,437,282,443,283,
 281,275,363,395,431,369,299,297,337,335,273,321,348,450,349,359,446,467,283,293,282,250,458,462,300,276,383,292,308,325,
 283,276,293,264,372,447,346,352,340,354,274,19,363,456,281,426,436,425,380,381,252,267,269,393,421,200,428,371,266,329,
 432,287,422,290,250,328,385,258,384,446,265,342,386,387,257,422,424,430,445,342,276,422,273,424,306,292,307,352,366,345,
 268,271,302,358,423,371,327,294,460,331,279,294,303,271,304,436,432,427,304,272,408,395,394,431,378,395,400,296,334,299,
 6,351,168,376,352,411,307,325,320,285,295,336,320,319,404,329,330,349,334,293,333,366,323,447,316,15,315,331,358,279,
 317,14,316,8,285,9,277,329,350,253,374,252,319,318,403,351,6,419,324,318,325,397,367,365,288,435,397,278,344,439,310,
 272,311,248,195,281,375,273,291,175,396,199,312,311,268,276,283,445,390,373,339,295,282,296,448,449,346,356,264,454,337,
 336,299,337,338,151,294,278,455,308,292,415,429,358,355,265,340,372,388,390,466,352,346,280,295,442,282,354,19,370,285,
 441,295,195,248,197,457,440,274,301,300,368,417,351,465,251,301,389,385,380,386,394,395,379,399,412,419,410,436,322,387,
 373,388,326,2,393,354,370,461,393,164,267,268,302,12,386,374,387,312,268,13,298,293,301,265,446,340,380,385,381,280,330,
 425,322,426,391,420,429,437,393,391,326,344,440,438,458,459,461,364,434,394,428,396,262,274,354,457,317,316,402,316,315,
 403,315,314,404,314,313,405,313,421,406,323,366,361,292,306,407,306,291,408,291,287,409,287,432,410,427,434,411,372,264,
 383,459,309,457,366,352,401,1,274,4,418,421,262,331,294,358,435,433,367,392,289,439,328,462,326,94,2,370,289,305,455,339,
 254,448,359,255,446,254,253,449,253,252,450,252,256,451,256,341,452,414,413,463,286,441,414,286,258,441,258,257,442,257,
 259,443,259,260,444,260,467,445,309,459,250,305,289,290,305,290,460,401,376,435,309,250,392,376,411,433,453,341,464,357,
 453,465,343,357,412,437,343,399,344,360,440,420,437,456,360,420,363,361,401,288,265,372,353,390,339,249,339,448,255];




 var mpipeTriaTiny=[
 10,151,337,
 10,337,338



];





 function mpipeLandMarksGet (what)
 {
 switch(what)
  {
  case "oval":              case 0:  return([10 ,338,297,332,284,251,389,356,454,
                                             323,361,288,397,365,379,378,400,377,
                                             152,148,176,149,150,136,172,58 ,132,
                                             93 ,234,127,162,21 ,54 ,103,67 ,109 ]);

  case "lipsUpperOuter":    case 1:  return([61,185,40,39,37,0,267,269,270,409,291]);
  case "lipsLowerOuter":    case 2:  return([61,146,91,181,84,17,314,405,321,375,291]);
  case "lipsUpperInner":    case 3:  return([78,191,80,81,82,13,312,311,310,415,308]);
  case "lipsLowerInner":    case 4:  return([78,95,88,178,87,14,317,402,318,324,308]);

  case "rightEyeUpper0":    case 5:  return([246,161,160,159,158,157,173]);
  case "rightEyeLower0":    case 6:  return([33,7,163,144,145,153,154,155,133]);
  case "rightEyeUpper1":    case 7:  return([247,30,29,27,28,56,190]);
  case "rightEyeLower1":    case 8:  return([130,25,110,24,23,22,26,112,243]);
  case "rightEyeUpper2":    case 9:  return([113,225,224,223,222,221,189]);
  case "rightEyeLower2":    case 10: return([226,31,228,229,230,231,232,233,244]);
  case "rightEyeLower3":    case 11: return([143,111,117,118,119,120,121,128,245]);

   case "rightEyebrowUpper": case 12: return([156,70,63,105,66,107,55,193]);
   case "rightEyebrowLower": case 13: return([35,124,46,53,52,65]);

  case "rightEyeIris":      case 14: return([469, 470,470, 471,471, 472,472, 469]);

  case "leftEyeUpper0":     case 15: return([466,388,387,386,385,384,398]);
  case "leftEyeLower0":     case 16: return([263,249,390,373,374,380,381,382,362]);
  case "leftEyeUpper1":     case 17: return([467,260,259,257,258,286,414]);
  case "leftEyeLower1":     case 18: return([359,255,339,254,253,252,256,341,463]);
  case "leftEyeUpper2":     case 19: return([342,445,444,443,442,441,413]);
  case "leftEyeLower2":     case 20: return([446,261,448,449,450,451,452,453,464]);
  case "leftEyeLower3":     case 21: return([372,340,346,347,348,349,350,357,465]);

   case "leftEyebrowUpper":  case 22: return([383,300,293,334,296,336,285,417]);
   case "leftEyebrowLower":  case 23: return([265,353,276,283,282,295]);

  case "leftEyeIris":       case 24: return([474, 475,475, 476,476, 477,477, 474]);

  case "midwayBetweenEyes": case 25: return([168]);

  case "noseTip":           case 26: return([1]);
  case "noseBottom":        case 27: return([2]);
  case "noseRightCorner":   case 28: return([98]);
  case "noseLeftCorner":    case 29: return([327]);

  case "rightCheek":        case 30: return([205]);
  case "leftCheek":         case 31: return([425]);

  case "rightEye":          case 32: return([130,247,30,29,27,28,56,190,244,233,232,231,230,229,228,31,226]);
   case "mouth":             case 33: return([61,185,40,39,37,0,267,269,270,409,291,375,321,405,314,17,84,181,91,146]);
  case "leftEye":           case 34: return([252,253,254,255,256,263,339,341,362,382,384,385,386,387,388,398]);
  }
 return null;
 }




/*
 function mpipeSwap (pkt0,wid0,hit0,pkt1,wid1,hit1)
 {
 var obj,nn,mm,ar0,ar1,ii,cc,kk,dv,ray,wadd,hadd,xadd,yadd,lmc1,lmc2,lmc3,lmc4,lmc5,lmc6;

 obj={};
 obj.xyuva=[];
 obj.xyuvb=[];
 obj.xyuvc=[];
 nn=0;

 for(mm=0;mm<mpipeTria466.length;mm+=3)
  {
  lmc1=mpipeLandmarkGet(pkt0.multiFaceLandmarks[0],mpipeTria466[mm+0]);
  lmc2=mpipeLandmarkGet(pkt0.multiFaceLandmarks[0],mpipeTria466[mm+1]);
  lmc3=mpipeLandmarkGet(pkt0.multiFaceLandmarks[0],mpipeTria466[mm+2]);

  lmc4=mpipeLandmarkGet(pkt1.multiFaceLandmarks[0],mpipeTria466[mm+0]);
  lmc5=mpipeLandmarkGet(pkt1.multiFaceLandmarks[0],mpipeTria466[mm+1]);
  lmc6=mpipeLandmarkGet(pkt1.multiFaceLandmarks[0],mpipeTria466[mm+2]);

  obj.xyuva[nn]=aa.guiXyuvSetEx(lmc1.x,lmc1.y,lmc4.x,lmc4.y,wid0,hit0,wid1,hit1);
  obj.xyuvb[nn]=aa.guiXyuvSetEx(lmc2.x,lmc2.y,lmc5.x,lmc5.y,wid0,hit0,wid1,hit1);
  obj.xyuvc[nn]=aa.guiXyuvSetEx(lmc3.x,lmc3.y,lmc6.x,lmc6.y,wid0,hit0,wid1,hit1);

  //obj.xyuva[nn].ar0=aa.numTriangleAreaGet(obj.xyuva[nn].x,obj.xyuva[nn].y,obj.xyuvb[nn].x,obj.xyuvb[nn].y,obj.xyuvc[nn].x,obj.xyuvc[nn].y);
  //obj.xyuva[nn].ar1=aa.numTriangleAreaGet(obj.xyuva[nn].u,obj.xyuva[nn].v,obj.xyuvb[nn].u,obj.xyuvb[nn].v,obj.xyuvc[nn].u,obj.xyuvc[nn].v);
  nn++;
  }
 return obj;
 }
*/



 function mpipeLandmarkGet (lmark,lindex)
 {
 var cd;

 if(lmark==undefined)               { return null; }
 if(lindex<0||lindex>=lmark.length) { aa.debugAlert("eea2"); }
 cd={};
 cd.type="lmc";
 cd.li=lindex;
 cd.x=lmark[lindex].x;
 cd.y=lmark[lindex].y;
 cd.z=lmark[lindex].z;
 return cd;
 }





 function mpipeFaceCord (lmark,cindex,xmul,ymul,zmul)
 {
 var cd;
 if(lmark==undefined) { return null; }
 if(cindex<0||cindex>=lmark.length) { aa.debugAlert("eea2"); }
 cd={};
 cd.type="facecord";
 cd.x=lmark[cindex].x*xmul;
 cd.y=lmark[cindex].y*ymul;
 cd.z=lmark[cindex].z*zmul;
 return cd;
 }





 function mpipeFaceCordAll (lmark,xmul,ymul,zmul)
 {
 var cd,i,xx,yy,zz,ee;
 if(lmark==undefined) { return null; }
 cd={};
 cd.type="facecords";
 cd.xyz=[];
 for(i=0;i<lmark.length;i++)
  {
  ee={};
  ee.x=lmark[i].x*xmul;
  ee.y=lmark[i].y*ymul;
  ee.z=lmark[i].z*zmul;
  cd.xyz[i]=ee;
  }
 return cd;
 }




//---------------------------------------------------------
 //"use strict";
//---------------------------------------------------------

 window.onload=function() { aa.mainStart(cfg_app_version,cfg_app_speed,appProc); aa.mainRun(); };

 var app=aa.main_vars.app;

//---------------------------------------------------------

 window.addEventListener("unhandledrejection",function(reason)
 {
 console.log(reason);
 });


//---------------------------------------------------------
//---------------------------------------------------------


 var fgpnts=[
 {fp:"9730d3d5b6a370a32f97421c2921060d393c5ec1f4523e05a2666eae650ff587",dz:"chrome windows"},
 {fp:"ec6d23d88293b24ff8749a8cc16ab6b166d922fe79406e87b1011e244cf29df5",dz:"chrome laptop"},
 {fp:"7624767f84a3ff3d69d3d05e8dbe496bd62453ae52b2d109d4397d316f9d62ad",dz:"safari iphone"},
 {fp:"3df29f244b9d6d8cd28527add06cc6215d35bdf177862b67089e25f43126271f",dz:"firefox windows"},
 {fp:"0d1c4526e4c87f5e022de2a21d87b5c59b2e1b565092a68c123f89a79c8a4eba",dz:"msedge windows"},
 {fp:"7624767f84a3ff3d69d3d05e8dbe496bd62453ae52b2d109d4397d316f9d62ad",dz:"iphone safari"}
 ];






 function fgpntFind (fp)
 {
 var mat,f;
 if(fp) { mat=fp; }
 else   { mat=app.ei.finger_print; }
 for(f=0;f<fgpnts.length;f++) { if(mat==fgpnts[f].fp)  { return fgpnts[f]; } }
 return null;
 }




//---------------------------------------------------------


 function rembug (msg)
 {
 var pf;
/// console.log(msg);
 if(app.bb&&app.bb.is_ready)
  {
  pf=app.ei.platform.substring(0,2)+app.ei.name.substring(0,2);
  clientRtcsigWrite(app.bb,1,"bug",".,; "+pf+"   "+msg);
  console.log(msg);
//  clientRtcsigWrite(app.bb,1,"bug","a.a u="+app.bb.my_uid+"  "+pf+"   "+msg);
  //clientRtcsigWrite(app.bb,1,"bug","uid="+app.bb.my_uid+"  "+app.ei.platform+"  "+app.ei.name+"   "+msg);
  }
 else
  {
  console.log(msg);
  }
 }





//---------------------------------------------------------





 function appYield ()
 {
 var str,lines,i,j,sec,hit;
 if(cfg_profiler_use&&aa_profiler.is_started==false)  {  aaProfilerStart();  }
 if(aa_profiler.is_started)  {  aaProfilerHit("appYield");  }

 sec=aa.main_state.cycle/(1000/(1000/cfg_app_speed));
 hit=false;
 if(sec>(cfg_profiler_hz+app.hz_sec+1)) { hit=true;  app.hz_sec+=(cfg_profiler_hz+1); }
 if(cfg_profiler_use&&aa_profiler.is_started&&hit==true)//aa.mainCyclePulse((1000/cfg_app_speed)*cfg_profiler_hz))
  {
  lines=aaProfilerDump(0,100,0,20000000,1,0,0);
  if(lines!=false&&lines.length>2)
   {
   console.log(" ");
   for(i=0;i<lines.length;i++) {  console.log(lines[i]);    }
   }
  }
 if(app.bb)
  {
  for(i=0;i<4;i++)
   {
   clientRtcsigYield(app.bb);
   }
  }
 if(app.mpipe)
  {
  //if(aa.main_state.stage>=1250)
   {
   for(i=0;i<2;i++) { mpipeYield(app.mpipe.obj_ray[i]);   }
   for(i=0;i<1;i++) { mpipeEngine(); }
   //for(i=0;i<2;i++) { mpipeYield(app.mpipe.obj_ray[i]);   }
   //for(i=0;i<1;i++) { mpipeEngine(); }
   }
  }
 if(app.media)
  {
  for(i=0;i<4;i++) {  mediaYield(); }
  }
 if(app.beam)
  {
  for(i=0;i<8;i++) { beamYield(app.beam); }
  }
 if(aa.main_state.stage>=2200)
  {
  speechrecogKeepAlive();
  }
 }







 function appProc ()
 {
 var fp,med,err,grp,eob;
 var vs,etc,el,cy;
 var vs;

 switch(aa.main_state.stage)
  {
  case 0:
//  console.log(aa.numRoundPlaces(1.132,2));
  ///hyperPanel();
  app.noSleep=new NoSleep();
  //console.log(app.noSleep);
  //app.noSleep.disable();  console.log(app.noSleep);
  app.hz_sec=0;
  app.options={};
  app.room_num=0;
  app.ei=aa.envInfoGet();
  app.fp=fgpntFind(app.ei.finger_print);
  if(app.fp==null)  {  console.log("fp not in whitelist ",app.ei.finger_print);   }
  //console.log(aa.timerMsRunning());
  aa.mainStageSet(100);
  break;



  case 66:
  break;



  case 100:
  ///if(aa.main_state.cycle<100) { break; }
  ///if(app.fp==null) { aa.mainStageSet(300); break; }
  if(cfg_rembug_use==false) { aa.mainStageSet(300); break; }
  console.log("connecting to bugroom");
  app.bb=clientRtcsigNew("wss://xdosh.com:443/wss/rtcsig/",10,"bugroom");
  aa.mainStageSet(120);
  break;



  case 120:
  if(app.bb.cli.sock_xfwd=="") { break; }
  if(app.bb.is_ready!=true)    { break; }
  rembug("== xfwd:"+app.bb.cli.sock_xfwd+"  "+app.ei.finger_print);
  aa.mainStageSet(300);
  break;



  case 300:
  guixInit();
  console.log("back from guixInit");
  aa.mainStageSet(400);
  break;




  case 400:
  if(app.guix.is_ready!=true)      { break; }
  if(app.guix.group_ray.length==0) { break; }
  //grp.vars.is_splash=false;
  console.log("guix ready");
  aa.mainStageSet(420);
  break;


  case 420:
  //alert(grp.vars.splash_index);

  //guixSplashPaint(1);
  //guixNeedsPaint("maincanvas",true);
  guixNeeds("maincanvas",true,null);
  aa.mainStageSet(440);
  break;



  case 440:
  //if(aa.main_state.initial_click==false) { break; }
  app.noSleep.enable();
  rembug("initial click has happened");
  aa.guiCanvasFillFull(aa.guiGroupGetById("maincanvas").han,aa.guiRgbaString(255,255,55,1));
  if((grp=aa.guiGroupGetById("maincanvas"))==null) { aa.debugAlert("eee"); }
  grp.vars.splash_index=1;
  //guixNeedsPaint("maincanvas",true);
  guixNeeds("maincanvas",true,null);
  aa.mainStageSet(500);
  aa.mainStageSet(450);
  break;

  case 450:
  if((grp=aa.guiGroupGetById("vippy"))==null) { aa.debugAlert("eee"); }
  aa.videoLoad(grp.han,true,"https://xdosh.com/app/800/gfx/Twitch1.mp4");
  //aa.videoLoad(grp.han,true,"https://xdosh.com/app/815/gfx/vid40.mp4");
  aa.mainStageSet(460);
  break;

  case 460:
  if((grp=aa.guiGroupGetById("vippy"))==null) { aa.debugAlert("eee"); }
  if(grp.vars.is_failed)                          { aa.debugAlert(); }
  vs=aa.videoStatus(grp.han);
  if(vs.can_play!=true)   { break; }
  console.log(vs);
  console.log("can play");
  aa.videoMuteSet(grp.han,true);
  aa.videoRateSet(grp.han,1.0);
  aa.videoPlay(grp.han);
  aa.mainStageSet(470);
  aa.mainStageSet(500);
  break;




  case 500:
  mpipeStart();
  aa.mainStageSet(600);
  break;




  case 600:
  mediaStart();
  aa.mainStageSet(700);
  break;





  case 700:
  guixNeeds("top_most",true);
  console.log("ok");
  mediaDetectStart();
  aa.mainStageSet(800);
  break;





  case 800:
  if(app.media.is_detect_success==false&&app.media.is_detect_failure==false) { break; }
  if(app.media.is_detect_success==true) {  aa.mainStageSet(900); break; }
  aa.mainStageSet(66);
  break;




  case 900:
  //console.log("ok2");
  if(app.media.devenu.vid_input==true&&app.media.devenu.aud_input==true)
   {
   if(0) { mediaDeviceDump(false); }
   mediaDeviceListInit(app.media.devenu);
   aa.mainStageSet(1000);
   break;
   }
  aa.mainStageSet(66);
  break;



  case 1000:
  if((grp=aa.guiGroupGetById("maincanvas"))==null) { aa.debugAlert("eee"); }
  grp.vars.is_splash=false;
  //guixNeedsPaint("maincanvas",true);
  guixNeeds("maincanvas",true,null);
  aa.mainStageSet(1100);
  break;


  case 1100:
  aa.mainStageSet(1200);
  break;



  case 1200:
  app.media.handle=mediaPairCreate(app.media.cur_axi,app.media.cur_vxi);
  aa.mainStageSet(1220);
  break;



  case 1220:
  aa.mediaStatus(app.media.handle);
  med=aa.mediaGet(app.media.handle);
  if(med==null) { break; }
  if(med.res==="err")
   {
   err=aa.mediaErrorEtc(med.e_name,med.e_msg);
   alert("berr = "+err+"  "+med.e_name+"  "+med.e_msg);
   aa.mainStageSet(66);
   break;
   }
  if(med.res!=="ok")  { break; }
  if(med.stage!=300)  { break; }
  if((grp=aa.guiGroupGetById("b_video_0"))==null) { aa.debugAlert("eee"); }
  aa.mediaAttach(app.media.handle,grp.han);
  if(cfg_audio_loopback_muted==true)   {   grp.dom.muted=true;    grp.dom.volume=0;   }
  else                                 {   grp.dom.muted=false;   grp.dom.volume=1;   }
  if(med.res!="ok")  { console.log(med.e_name,med.e_msg,med.e_code,med.e_etc0,med.e_etc1);   }
  eob=aa.mediaErrObjCreate(med.res,med.e_name,med.e_msg,med.e_code);
  mediaDeviceListErr(app.media.active_devenu,"videoinput",app.media.cur_vxi,eob);//app.media.cur_axi,err);
  mediaDeviceListErr(app.media.active_devenu,"audioinput",app.media.cur_axi,eob);//app.media.cur_axi,err);
  aa.mainStageSet(1240);
  break;





  case 1240:
  console.log("swapper init");
  mediaDeviceSwapperInit();
  aa.mainStageSet(1250);
  break;




  case 1250:
//  aa.guiCanvasFillFull(aa.guiGroupGetById("maincanvas").han,aa.guiRgbaString(255,255,255,1));
  aa.mainStageSet(2000);
  aa.mainStageSet(1999);
  break;



  case 2000:
  console.log("CONNECTING to room");
  app.beam=beamNew("wss://xdosh.com:443/wss/rtcsig/","demo"+app.room_num);
  aa.mainStageSet(2100);
  break;



  case 2100:
  if(app.beam.is_full)
   {
   beamDelete(app.beam);
   app.room_num++;
   aa.mainStageSet(2000);
   break;
   }
  if(app.beam.rtcsig_cli.my_uid>0)
   {
   //aa.guiCanvasFillFull(aa.guiGroupGetById("maincanvas").han,aa.guiRgbaString(255,255,255,1));
   //guixNeedsPaint("b_hud_0",true);
   guixNeeds("b_hud_0",true,null);
   console.log("were  in !");
   aa.mainStageSet(2200);
   break;
   }
  break;


  case 2200:
  break;
  }

 if(aa.main_state.stage>=1000&&aa.mainCyclePulse(5))
  {
  if(cfg_vlog_use) { guixVlogUpdate(); }
  }

 appYield();
 }







/*

 const options = {  enableHighAccuracy: true,  timeout: 5000,  maximumAge: 0,};

 function success(pos)
 {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log("ms="+aa.timerMsRunning());
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {  console.warn(`ERROR(${err.code}): ${err.message}`);}

navigator.geolocation.getCurrentPosition(success, error, options);
*/




//---------------------------------------------------------





 function speechrecogNew (lang)
 {
 var obj,i,len,txt,todo,msg,out,prev_len;
 if(app.ei.has_speech_recog!=true) { return null; }
 obj={};
 obj.type="speechrecog";
 obj.is_recognizing=false;
 obj.is_ended=false;
 obj.lang=lang;
 obj.is_aborted=false;
 obj.is_thrown=false;
 obj.is_starting=false;
 obj.err=0;
 obj.inter="";
 obj.all="";
 obj.all_off=0;
 obj.blank_ms=aa.timerMsRunning();
 obj.recog=new webkitSpeechRecognition();
 obj.recog.continuous=true;
 obj.recog.interimResults=true;
 obj.recog.lang=obj.lang;

 obj.recog.onstart=function(event)        { obj.is_recognizing=true;  };
 obj.recog.onspeechstart=function(event)  {   };
 obj.recog.onspeechend=function(event)    {   };
 obj.recog.onsoundstart=function(event)   {   };
 obj.recog.onsoundend=function(event)     {   };
 obj.recog.onaudiostart=function(event)   {   };
 obj.recog.onaudioend=function(event)     {   };
 obj.recog.onend=function(event)          { obj.is_recognizing=false;  obj.is_ended=true;  };

 obj.recog.onerror=function(event)
  {
  if(event.error=="aborted")
   {
   obj.is_recognizing=false;
   obj.is_aborted=true;
   obj.is_ended=true;
   }
  else
  if(event.error!="no-speech")
   {
   console.log(event.error);
   }
  };
 obj.recog.onnomatch=function(event)      {   };

 obj.recog.onresult=function(event)
  {
  prev_len=obj.all.length;
  obj.inter="";
  for(i=0;i<event.results.length;i++) { obj.inter+=event.results[i][0].transcript;  }
  obj.all=obj.inter;
  if(obj.all.length>prev_len)
   {
   obj.blank_ms=aa.timerMsRunning();
   }
  };
 return obj;
 }





 function speechrecogStart (obj)
 {
 var prom;
 if(obj.type!="speechrecog") { return false; }
 obj.is_recognizing=false;
 obj.is_ended=false;
 obj.is_aborted=false;
 obj.is_starting=true;
 obj.err=0;
 obj.inter="";
 obj.all="";
 obj.all_off=0;
 try
  {
  obj.recog.start();
  }
 catch(e)
  {
  obj.is_thrown=true;
  console.log("speech recog thrown");
  //console.log(e);
  }
 return true;
 }




 function speechrecogStop (obj)
 {
 if(obj.type!="speechrecog") { return false; }
 obj.recog.abort();
 return true;
 }




 function speechrecogWhip (obj)
 {
 var el,len,txt,msg,pa,lch,etc,was,fc,alen,acan,asub;

 if(obj.type!="speechrecog") { return false; }
 alen=obj.all.length;
 acan=alen-obj.all_off;
 el=aa.timerMsRunning()-obj.blank_ms;
 if(0&&acan<=0)
  {
  if(el>=2000)
   {
   if(app.beam&&app.beam.rtcsig_cli.my_uid>0&&aa.numRandValue(0,10)==0)
    {
    msg={};
    msg.txt=" ";
    clientRtcsigWrite(app.beam.rtcsig_cli,0,"chat",JSON.stringify(msg));
    obj.blank_ms=aa.timerMsRunning();
    }
   }
  return true;
  }

 //console.log(el,acan);
 //if(el<900&&acan<65) { return true; }
 if(el<600) { return true; }
 asub=obj.all.substring(obj.all_off,obj.all_off+acan);
 while(1)
  {
  fc=aa.stringFirstCharGet(asub)
  if(fc==" ") { obj.all_off++; obj.blank_ms=aa.timerMsRunning(); return true; }
  break;
  }
 if(asub.length>0)
  {
  console.log("SUB>",asub);
  if(0&&app.beam&&app.beam.my_id>0)
   {
   msg={};
   msg.txt=asub;
   msg.lang=obj.lang;
   clientRtcsigWrite(app.beam.rtcsig_cli,0,"chat",JSON.stringify(msg));
   }
  }
 obj.all_off+=acan;
 obj.blank_ms=aa.timerMsRunning();
 return true;
 }





 function speechrecogKeepAlive ()
 {
 if(app.ei.has_speech_recog)
  {
  if(app.sprec===undefined)
   {
   app.sprec=speechrecogNew("en-US");
   }
  else
   {
   if(app.sprec.is_thrown==false)
    {
    if(app.sprec.is_starting==false)
     {
     speechrecogStart(app.sprec);
     }
    else
     {
     speechrecogWhip(app.sprec);
     if(app.sprec.is_ended==true)
      {
      speechrecogStop(app.sprec);
      speechrecogStart(app.sprec);
      }
     }
    }
   }
  }
 return true;
 }




//---------------------------------------------------------




 function clientNew (address)
 {
 var obj={};
 obj.type="client";
 obj.show_bug=true;
 obj.stage=1000;
 obj.sock_handle=0;
 obj.sock_status=null;
 obj.sock_obj=null;
 obj.sock_xfwd="";
 obj.close_msg_shown=false;
 obj.error_msg_shown=false;
 obj.pkt_in_ray=[];
 obj.tot_pkts_sent=0;
 obj.tot_pkts_read=0;
 obj.address=address;
 obj.vars={};
 obj.sock_handle=aa.socketCreate(address);
 if(obj.sock_handle==0) {   aa.debugAlert("ff");  }
 aa.socketYield(obj.sock_handle);
 obj.sock_obj=aa.socketGet(obj.sock_handle);
 obj.sock_status=aa.socketStatus(obj.sock_handle);
 return obj;
 }





 function clientDelete (clientobj)
 {
 if(clientobj==null)          { return false;  }
 if(clientobj.type!="client") { return false; }
 if(clientobj.sock_handle!=0) { aa.socketDestroy(clientobj.sock_handle); }
 clientobj.sock_handle=0;
 clientobj.sock_status=null;
 clientobj.sock_obj=null;
 clientobj.pkt_in_ray=[];
 clientobj.vars={};
 clientobj={};
 clientobj=null;
 return true;
 }





 function clientReconnect (clientobj)
 {
 var adr,sbu;
 if(clientobj==null)          { return false;  }
 if(clientobj.type!="client") { return false;  }
 adr=clientobj.address;
 sbu=clientobj.show_bug;

 if(clientobj.sock_handle!=0) { aa.socketDestroy(clientobj.sock_handle); }
 clientobj.sock_handle=0;
 clientobj.sock_status=null;
 clientobj.sock_obj=null;
 clientobj.pkt_in_ray=[];
 clientobj.vars={};

 clientobj.stage=1000;
 clientobj.sock_xfwd="";
 clientobj.close_msg_shown=false;
 clientobj.error_msg_shown=false;
 clientobj.tot_pkts_sent=0;
 clientobj.tot_pkts_read=0;
 clientobj.show_bug=sbu;
 clientobj.address=adr;
 clientobj.sock_handle=aa.socketCreate(adr);
 if(clientobj.sock_handle==0) {   aa.debugAlert("gg");  }
 aa.socketYield(clientobj.sock_handle);
 clientobj.sock_obj=aa.socketGet(clientobj.sock_handle);
 clientobj.sock_status=aa.socketStatus(clientobj.sock_handle);
 return true;
 }




 function clientRead (clientobj)
 {
 var ret,pkt;
 if((ret=clientStatus(clientobj))!=true) { return null; }
 if(clientobj.pkt_in_ray.length==0)      { return null; }
 pkt=clientobj.pkt_in_ray.shift();
 return pkt;
 }





 function clientWrite (clientobj,sfy,pkt)
 {
 var ret;
 if((ret=clientStatus(clientobj))!=true) { return false; }
 if(1||clientobj.sock_xfwd=="220.240.77.127")
  {
  if(sfy) { aa.socketWrite(clientobj.sock_handle,JSON.stringify(pkt));   }
  else    { aa.socketWrite(clientobj.sock_handle,pkt); }
  }
 clientobj.tot_pkts_sent++;
 return true;
 }




 function clientStatus (clientobj)
 {
 var pkt,go;
 if(clientobj==null)          { return false;  }
 if(clientobj.type!="client") { return false;  }
 if(clientobj.sock_handle==0) { return false;  }
 aa.socketYield(clientobj.sock_handle);
 clientobj.sock_obj=aa.socketGet(clientobj.sock_handle);
 clientobj.sock_status=aa.socketStatus(clientobj.sock_handle);

 if(clientobj.sock_status.is_closed==true&&clientobj.close_msg_shown==false)
  {
  if(clientobj.show_bug) { console.log("client closed"); }
  clientobj.close_msg_shown=true;
  }
 if(clientobj.sock_status.is_error==true&&clientobj.error_msg_shown==false)
  {
  if(clientobj.show_bug) { console.log("client error"); }
  clientobj.error_msg_shown=true;
  }
 if(clientobj.sock_status.is_error==true||clientobj.sock_status.is_closed==true)
  {
  return aa.ret.FAILED;
  }
 switch(clientobj.stage)
  {
  case 1000:
  if(clientobj.sock_status.is_open!=true) { break; }
  clientobj.stage=1200;
  break;

  case 1200:
  for(go=0;go<8;go++)
   {
   aa.socketYield(clientobj.sock_handle);
   if((pkt=aa.socketRead(clientobj.sock_handle))==null) { break; } //continue; } //break; }
   if(0) { console.log("socket read"); }
   if(clientobj.sock_xfwd=="")
    {
    if(pkt.substring(0,9)=="{\"xfwd\":\"")
     {
     clientobj.sock_xfwd=pkt.substring(9);
     clientobj.sock_xfwd=aa.stringLastCharTrim(clientobj.sock_xfwd);
     clientobj.sock_xfwd=aa.stringLastCharTrim(clientobj.sock_xfwd);
     continue;
     }
    }
   clientobj.tot_pkts_read++;
   clientobj.pkt_in_ray.push(pkt);
   //break;
   }
  return true;
  }
 return false;
 }



//---------------------------------------------------------



 function clientRtcsigNew (address,tc,room)
 {
 var obj;
 obj={};
 obj.type="clientrtcsig";
 obj.stage=100;
 obj.is_ready=false;
 obj.is_full=false;
 obj.cli=null;
 obj.adr=address;
 obj.room=room;
 obj.my_uid=0;
 obj.test_count=tc;
 obj.i_queue=[];
 obj.peer_ray=[];
 return obj;
 }



 function clientRtcsigDelete (obj)
 {
 if(obj.type!="clientrtcsig")          { return false; }
 if(obj.cli!=null)
  {
  clientDelete(obj.cli);
  }
 obj.cli=null;
 obj.i_queue=null;
 obj.peer_ray=null;
 return true;
 }





 function clientRtcsigPeerGet (obj,pidx)
 {
 var peer;
 if(obj.type!="clientrtcsig")          { return false; }
 if(pidx<0||pidx>=obj.peer_ray.length) { return null;  }
 peer=obj.peer_ray[pidx];
 return peer;
 }




 function clientRtcsigRead (obj)
 {
 var msg;
 if(obj.type!="clientrtcsig") { return false; }
 if(obj.i_queue.length==0)    { return null;  }
 msg=obj.i_queue.shift();
 return msg;
 }





 function clientRtcsigWrite (obj,to,func,data)
 {
 var msg,pkt;
 if(obj.type!="clientrtcsig") { return false; }
 if(obj.is_ready!=true)       { return false; }
 msg={"func":func,"data":data};
 pkt={"cmd":"say","room":obj.room,"to":to,"msg":msg};
 clientWrite(obj.cli,true,pkt);
 return true;
 }




 function clientRtcsigBash (obj,to,slng,tlng,txt)//func,data)
 {
 var msg,pkt;
 if(obj.type!="clientrtcsig") { return false; }
 if(obj.is_ready!=true)       { return false; }
 pkt={"cmd":"bash","room":obj.room,"to":to,"slang":slng,"tlang":tlng,"text":txt};
 clientWrite(obj.cli,true,pkt);
 return true;
 }






 function clientRtcsigYield (obj)
 {
 var pkt,jsn,pi,pl,etc,t,tl,msg;
 if(obj.type!="clientrtcsig") { return false; }
 switch(obj.stage)
  {
  case 100:
  obj.cli=clientNew(obj.adr);
  obj.stage=110;
  break;


  case 110:
  obj.my_uid=0;
  obj.is_ready=false;
  obj.stage=120;
  break;


  case 120:
  clientStatus(obj.cli);
  if(obj.cli.sock_xfwd=="") { break; }
  pkt={"cmd":"join","room":obj.room,"fingerprint":app.ei.finger_print,"testcount":obj.test_count};
  clientWrite(obj.cli,true,pkt);
  obj.stage=140;
  break;



  case 133:
  clientStatus(obj.cli);
  break;



  case 140:
  clientStatus(obj.cli);
  if((pkt=clientRead(obj.cli))!=null)
   {
   jsn=aa.dataJsonParse(pkt);

   switch(jsn.cmd)
    {
    case "hi":
    if(jsn.room!=obj.room)                 { alert("room wrong , "+jsn.room+" "+obj.room); break; }
    if(jsn.peerCount!=jsn.peerList.length) { alert("wrong peercount "+jsn.peerCount+"  "+jsn.peerList.length); break; }
    obj.my_uid=jsn.uuid;
    obj.is_ready=true;
    for(pi=0;pi<jsn.peerList.length;pi++)  { obj.peer_ray.push(jsn.peerList[pi]);   }
    etc={};
    etc.cmd="hi";
    etc.room=jsn.room;
    etc.uuid=jsn.uuid;
    obj.i_queue.push(etc);
    obj.stage=160;
    break;


    case "full":
    obj.is_full=true;
    etc={};
    etc.cmd="full";
    etc.room=jsn.room;
    obj.i_queue.push(etc);
    obj.stage=133;
    break;


    default:
    alert("jsn.cmd="+jsn.cmd);
    break;
    }
   }
  break;



  case 160:
  clientStatus(obj.cli);
  if((pkt=clientRead(obj.cli))!=null)
   {
   jsn=aa.dataJsonParse(pkt);
   switch(jsn.cmd)
    {
    case "joined":
    if(jsn.room!=obj.room)   { alert("jroom wrong , "+jsn.room); break; }
    if(jsn.uuid==obj.my_uid) { alert("i joined while joined");   break; }
    pl=obj.peer_ray.length;
    for(pi=0;pi<pl;pi++)     { if(obj.peer_ray[pi]==jsn.uuid) { break; }  }
    if(pi!=pl)               { alert(jsn.uuid+" jouined already in list"); break; }
    obj.peer_ray.push(jsn.uuid);
    etc={};
    etc.cmd="joined";
    etc.room=jsn.room;
    etc.uuid=jsn.uuid;
    obj.i_queue.push(etc);
    break;


    case "left":
    if(jsn.room!=obj.room)   { alert("lroom wrong , "+jsn.room); break; }
    if(jsn.uuid==obj.my_uid) { alert("i left while joined");     break; }
    pl=obj.peer_ray.length;
    for(pi=0;pi<pl;pi++)     { if(obj.peer_ray[pi]==jsn.uuid) { break; } }
    if(pi==pl)               { alert(jsn.uuid+" left not in peer list"); break; }
    aa.dataArrayRemove(obj.peer_ray,pi);
    etc={};
    etc.cmd="left";
    etc.room=jsn.room;
    etc.uuid=jsn.uuid;
    obj.i_queue.push(etc);
    break;


    case "said":
    if(jsn.room!=obj.room)              { alert("lroom wrong , "+jsn.room); break; }
    if(jsn.target!=obj.my_uid)          { console.log("not targeted to me, but for "+jsn.target); break; }
    if(jsn.to==0||(jsn.to==obj.my_uid)) { obj.i_queue.push(jsn); break;     }
    aa.debugAlert("sent direct not to me",JSON.stringify(jsn,0,2));
    break;


    case "smash":
    if(jsn.room!=obj.room)   { alert("lroom wrong , "+jsn.room); break; }
    if(jsn.uuid!=obj.my_uid) { alert("not me"); break; }
    tl=jsn.data.payload.translations.length;
    for(t=0;t<tl;t++)
     {
     //msg={};
     //msg.txt=jsn.data.payload.translations[t].translation;
     ///  guixVlogAppend(jsn.data.payload.translations[t].translation);
     }
    break;


    default:
    console.log(JSON.stringify(jsn,0,2));
    aa.debugAlert("hh");
    break;
    }
   }
  break;
  }
 return true;
 }





//---------------------------------------------------------





 function beamNew (url,room)
 {
 var beamobj,p;
 beamobj={};
 beamobj.type="beamobj";
 beamobj.room=room;//function clientRtcsigNew (address,room)
 beamobj.url=url;
 beamobj.stage=100;
 beamobj.max_peers=cfg_max_peers;
 beamobj.rtcsig_cli=null;
 beamobj.peer_count=0;
 beamobj.peer_count_connected=0;
 beamobj.peer_pf=0;
 beamobj.peer_array=[];
 beamobj.peer_event_flag=false;
 beamobj.my_id=0;
 for(p=0;p<beamobj.max_peers;p++)
  {
  beamPeerInit(beamobj,p);
  }
 return beamobj;
 }



 function beamDelete (beamobj)
 {
 var p;
 //console.log(beamobj);
 for(p=0;p<beamobj.max_peers;p++)
  {
  beamPeerUnuse(beamobj,p);
  }
 if(beamobj.rtcsig_cli!=null)
  {
  clientRtcsigDelete(beamobj.rtcsig_cli);
  beamobj.rtcsig_cli=null;
  }
 beamobj.peer_array=null;
 beamobj=null;
 return true;
 }




 function beamCountSet (beamobj,peercount,peerconnectedcount)
 {
 beamobj.peer_count=peercount;
 beamobj.peer_count_connected=peerconnectedcount;
 beamobj.peer_event_flag=true;
 //console.log("pc",beamobj.peer_count,beamobj.peer_count_connected);
 }





 function beamPeerInit (beamobj,peerindex)
 {
 var peerobj;
 peerobj={};
 peerobj.in_use=false;
 peerobj.type="peerobj";
 peerobj.self_index=peerindex;
 peerobj.phaze=0;
 peerobj.sent_final_ice=false
 peerobj.rvcd_final_ice=false;
 peerobj.rtc_handle=0;
 peerobj.r_queue_handle=0;
 peerobj.r_queue_status=null;
 peerobj.ms=0;
 peerobj.cycle=0;
 peerobj.id=0;
 peerobj.id_dif=null;
 peerobj.prom=null;
 beamobj.peer_array[peerindex]=peerobj;
 return peerobj;
 }




 function beamPeerNext (beamobj)
 {
 var p,peerobj;
 if(beamobj.peer_count==0) { return null; }
 for(p=0;p<beamobj.max_peers;p++)
  {
  beamobj.peer_pf++;
  beamobj.peer_pf%=beamobj.max_peers;
  peerobj=beamobj.peer_array[beamobj.peer_pf];
  if(1)
   {
   if(peerobj==null)        { continue; }
   if(peerobj.in_use!=true) { continue; }
   }
  return peerobj;
  }
 return null;
 }



 function beamPeerByIndex (beamobj,peerindex)
 {
 var peerobj;
 if(peerindex>=beamobj.max_peers) { return null; }
 peerobj=beamobj.peer_array[peerindex];
 return peerobj;
 }




 function beamPeerById (beamobj,peerid)
 {
  var p,peerobj;
 if(peerid<=0) { aa.debugAlert("ddwds"); }
 for(p=0;p<beamobj.max_peers;p++)
  {
  peerobj=beamobj.peer_array[p];
  if(peerobj.in_use!=true) { continue; }
  if(peerobj.id!=peerid)   { continue; }
  return peerobj;
  }
 return null;
 }




 function beamPeerUnusedGet (beamobj)
 {
 var p,peerobj;
 for(p=1;p<beamobj.max_peers;p++)
  {
  peerobj=beamPeerByIndex(beamobj,p);
  if(peerobj.in_use!=false) { continue; }
  return peerobj;
  }
 return null;
 }



 function beamPeerUse (beamobj,peerindex,id)
 {
 var peerobj;
 if(peerindex<0||peerindex>=beamobj.peer_array.length)  {  throw("cunt");  }
 peerobj=beamobj.peer_array[peerindex];
 if(peerobj.in_use!=false)  {  throw("peerinuse");  }
 //console.log("beampeeruse "+peerindex);
 peerobj.in_use=true;
 peerobj.type="peerobj";
 peerobj.self_index=peerindex;
 peerobj.phaze=0;
 peerobj.sent_final_ice=false
 peerobj.rvcd_final_ice=false;
 peerobj.rtc_handle=0;
 peerobj.r_queue_handle=aa.queueCreate();
 peerobj.r_queue_status=aa.queueStatus(peerobj.r_queue_handle);
 peerobj.ms=aa.timerMsRunning();
 peerobj.cycle=0;
 peerobj.id=id;
 peerobj.prom=null;
 peerobj.id_dif=(peerobj.id+"").localeCompare(beamobj.my_id+""); //!!!!!!!!!
 beamCountSet(beamobj,beamobj.peer_count+1,beamobj.peer_count_connected);
 return peerobj;
 }



 function beamPeerUnuse (beamobj,peerindex)
 {
 var peerobj,rtc,grp,isplaying,grpo,idx;
 if(peerindex<0||peerindex>=beamobj.peer_array.length)  {  throw("cunt");  }
 peerobj=beamobj.peer_array[peerindex];
 //console.log(peerindex);
 //console.log(peerobj);
 if(peerobj.in_use!=true)  { return peerobj; }// throw("peernotinuse");  }

 if(peerobj.phaze==200||peerobj.phaze==2000)
  {
  beamCountSet(beamobj,beamobj.peer_count,beamobj.peer_count_connected-1);
  }
 if(peerobj.r_queue_handle!=0)
  {
  aa.queueDestroy(peerobj.r_queue_handle);
  peerobj.r_queue_handle=0;
  }
 beamPeerVideoUnattach(beamobj,peerobj);
 beamPeerInit(beamobj,peerindex);
 beamCountSet(beamobj,beamobj.peer_count-1,beamobj.peer_count_connected);
 return peerobj;
 }




 function beamPeerVideoAttach (beamobj,peerobj)
 {
 var rtc,g,grp,grpo,grpc;
 if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
 g=peerobj.self_index;
 if(g==0) { aa.debugAlert("dc"); }
 if((grp=aa.guiGroupGetById("b_video_"+g))==null) { aa.debugAlert("55"); }
 if(grp.obj.type!="video")   { alert(grp.obj.type); aa.debugAlert("7877"); }
 if(grp.dom.srcObject!=null) { aa.debugAlert("355"); }
 console.log("beampeervideoattach "+g);
 if(g==0)
  {
  console.log("VIDEO ATTACH  to canstream "+g);
  if((grpc=aa.guiGroupGetById("b_canstream_0"))==null) { aa.debugAlert("as"); }
  grpc.vars.rtc_handle=0;
  }
 if(g!=0)
  {
  console.log("VIDEO ATTACH  to video "+g);
  grp.vars.rtc_handle=peerobj.rtc_handle;
  }
 grp.vars.peer_index=peerobj.self_index;
 rtc.gui_id=grp.obj.id;
 grp.dom.srcObject=rtc.rem_stream;
 if(1)
  {
  grp.dom.muted=true;
  grp.dom.volume=0;
  console.log("setting "+g);
  //obj.dom.defaultMuted=true;
  if(g==0) aa.debugAlert();
  if(cfg_audio_peer_initially_muted==true) {  grp.dom.muted=true;  grp.dom.volume=0;  }
  else                                     {  grp.dom.muted=false; grp.dom.volume=1;  }
  }
 grp.vars.rtc_handle=peerobj.rtc_handle;


 if(peerobj.prom!=null)  {  console.log("about but not null");  }
 //return;

 if(g!=0)
  {
  grp.dom.play();
  }


 }



 function beamPeerVideoUnattach (beamobj,peerobj)
 {
 var rtc,isplaying,grp,grpo,idx,g,pid,grpc;
 pid=peerobj.id;

 if(peerobj.rtc_handle>0)
  {
  if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) aa.debugAlert("ax34");
  if(rtc.gui_id!=null)
   {
   if((grp=aa.guiGroupGetById(rtc.gui_id))==null) { aa.debugAlert("535"); }
   if(grp!=null)
    {
    isplaying=grp.dom.currentTime>0&&!grp.dom.paused&&!grp.dom.ended&&grp.dom.readyState>2;
    grp.vars.rtc_handle=0;
    if(isplaying) {       grp.dom.pause();    }
    grp.dom.currentTime=0;
    grp.dom.srcObject=null;
    idx=rtc.peer_index;
    g=peerobj.self_index;
    ///console.log("video unat si="+g);
    grp=aa.guiGroupGet(aa.guiIdFind("b_video_"+g));
    grp.vars.rtc_handle=0;
    }
   rtc.gui_id=null;
   }
  aa.rtcDestroy(peerobj.rtc_handle);
  peerobj.rtc_handle=0;
  }
 }





 function beamWaitOfferCreate (beamobj,peerobj)
 {
 var status,val,rtc;
 status=aa.rtcStatus(peerobj.rtc_handle);
 if(status.in_promise==true)
  {
  while(1)
   {
   val=false;
   if(status.promise_status.state==PROMISE_completed)  { val=status.promise_status.val;      }    else
   if(status.promise_status.state==PROMISE_rejected)   { val=null; }
   if(status.promise_status.state==PROMISE_completed||status.promise_status.state==PROMISE_rejected)
    {
    if(aa.rtcPromiseClear(peerobj.rtc_handle)!=true) { aa.debugAlert("z"); }
    }
   if(val===null)   { aa.debugLogger(0,"rejected phaze="+peerobj.phaze); break; }
   if(val===false)  { break; }
   break;
   }
  }
 status=aa.rtcStatus(peerobj.rtc_handle);
 if(status.in_promise==true) { return false; }
 if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
 if(rtc.offer==null) { return false; }
 return true;
 }





 function beamWaitDescLocalSet (beamobj,peerobj)
 {
 var status,val,rtc;
 status=aa.rtcStatus(peerobj.rtc_handle);
 if(status.in_promise==true)
  {
  while(1)
   {
   val=false;
   if(status.promise_status.state==PROMISE_completed)  { val=status.promise_status.val;      }    else
   if(status.promise_status.state==PROMISE_rejected)   { val=null; }
   if(status.promise_status.state==PROMISE_completed||status.promise_status.state==PROMISE_rejected)
    {
    if(aa.rtcPromiseClear(peerobj.rtc_handle)!=true) { aa.debugAlert(":wedwe"); }
    }
   if(val===null)   { aa.debugLogger(0,"rejected phaze="+peerobj.phaze); break; }
   if(val===false)  { break; }
   break;
   }
  }
 status=aa.rtcStatus(peerobj.rtc_handle);
 if(status.in_promise==true) { return false; }
 if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
 if(rtc.loc_desc==null) { return false; }
 return true;
 }





 function beamWaitDescRemoteSet (beamobj,peerobj)
 {
 var status,val,rtc;
 status=aa.rtcStatus(peerobj.rtc_handle);
 if(status.in_promise==true)
  {
  while(1)
   {
   val=false;
   if(status.promise_status.state==PROMISE_completed)  { val=status.promise_status.val;      }    else
   if(status.promise_status.state==PROMISE_rejected)   { val=null; }
   if(status.promise_status.state==PROMISE_completed||status.promise_status.state==PROMISE_rejected)
    {
    if(aa.rtcPromiseClear(peerobj.rtc_handle)!=true) { aa.debugAlert("4456"); }
    }
   if(val===null)   { aa.debugLogger(0,"rejected phaze="+peerobj.phaze); break; }
   if(val===false)  { break; }
   break;
   }
  }
 status=aa.rtcStatus(peerobj.rtc_handle);
 if(status.in_promise==true) { return false; }
 if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
 if(rtc.rem_desc==null) { return false; }
 return true;
 }




 function beamWaitAnswerCreate (beamobj,peerobj)
 {
 var status,val,rtc;
 status=aa.rtcStatus(peerobj.rtc_handle);
 if(status.in_promise==true)
  {
  while(1)
   {
   val=false;
   if(status.promise_status.state==PROMISE_completed)  { val=status.promise_status.val;      }    else
   if(status.promise_status.state==PROMISE_rejected)   { val=null; }
   if(status.promise_status.state==PROMISE_completed||status.promise_status.state==PROMISE_rejected)
    {
    if(aa.rtcPromiseClear(peerobj.rtc_handle)!=true) { aa.debugAlert("32"); }
    }
   if(val===null)   { aa.debugLogger(0,"rejected phaze="+peerobj.phaze); break; }
   if(val===false)  { break; }
   break;
   }
  }
 status=aa.rtcStatus(peerobj.rtc_handle);
 if(status.in_promise==true) { return false; }
 if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
 if(rtc.answer==null) { return false; }
 return true;
 }





 function beamReadJoined(beamobj,pkt)
 {
 var peerobj,p;
 if((peerobj=beamPeerById(beamobj,pkt.uuid))!=null) { console.log(peerobj.self_index); aa.debugAlert("ss1"); }
 if(pkt.uuid==beamobj.my_id) { aa.debugAlert("x"); }
 if((peerobj=beamPeerUnusedGet(beamobj))==null)     { aa.debugAlert("6454"); }
 p=peerobj.self_index;
 peerobj=beamPeerUse(beamobj,p,pkt.uuid);//,jsn.hancock);
 return true;
 }





 function beamReadLeft (beamobj,pkt)
 {
 var peerobj,p;
 if((peerobj=beamPeerById(beamobj,pkt.uuid))==null) { aa.debugAlert("rewrewr"); }
 beamPeerUnuse(beamobj,peerobj.self_index);
 return true;
 }





 function beamRead (beamobj,id)
 {
 var status,peerobj,msg;
 peerobj=beamPeerById(beamobj,id);
 if(peerobj==null) { aa.debugAlert("erferf"); }
 peerobj.r_queue_status=aa.queueStatus(peerobj.r_queue_handle);
 if(peerobj.r_queue_status==null) aa.debugAlert("beamread2 "+id);
 if(peerobj.r_queue_status.msgs_queued==0) {  return null;  }
 if((msg=aa.queueRead(peerobj.r_queue_handle))==null) aa.debugAlert("beamread3");
 peerobj.r_queue_status=aa.queueStatus(peerobj.r_queue_handle);
 return msg;
 }





 function beamPeek (beamobj,id)
 {
 var status,peerobj,msg;
 peerobj=beamPeerById(beamobj,id);
 if(peerobj==null) { aa.debugAlert("Ferfe"); }
 peerobj.r_queue_status=aa.queueStatus(peerobj.r_queue_handle);
 if(peerobj.r_queue_status==null) aa.debugAlert("beampeek2 "+id);
 if(peerobj.r_queue_status.msgs_queued==0) {  return null;  }
 if((msg=aa.queuePeek(peerobj.r_queue_handle,0))==null) aa.debugAlert("wsds3dwe00");
 peerobj.r_queue_status=aa.queueStatus(peerobj.r_queue_handle);
 return msg;
 }





 function beamDiscard (beamobj,id)
 {
 var status,peerobj,msg;
 peerobj=beamPeerById(beamobj,id);
 if(peerobj==null) { aa.debugAlert("fdfv"); }
 peerobj.r_queue_status=aa.queueStatus(peerobj.r_queue_handle);
 if(peerobj.r_queue_status==null) aa.debugAlert("wxwew00");
 if(peerobj.r_queue_status.msgs_queued==0) { return true;  }
 if((msg=aa.queueRead(peerobj.r_queue_handle))==null) aa.debugAlert("xwxwxwx00");
 peerobj.r_queue_status=aa.queueStatus(peerobj.r_queue_handle);
 return true;
 }







 function beamYield (beamobj)
 {
 var pkt,msg,p,uid,peerobj,po,peer,etc,k,ii,j;

 switch(beamobj.stage)
  {
  case 100:
  beamobj.rtcsig_cli=clientRtcsigNew(beamobj.url,beamobj.max_peers,beamobj.room);
  beamobj.stage=120;
  break;


  case 120:
  if(beamobj.rtcsig_cli.is_full==true)
   {
   console.log("full");
   beamobj.is_full=true;
   beamobj.stage=130;
   break;
   }
  if(beamobj.rtcsig_cli.is_ready!=true) { break; }
  beamobj.stage=140;
  break;


  case 130:
  break;




  case 140:
  pkt=clientRtcsigRead(beamobj.rtcsig_cli);
  if(pkt==null||pkt==false) { break; }
  if(pkt.cmd!="hi") { alert(pkt.cmd); break; }

  rembug("room="+beamobj.room+" myuid="+beamobj.rtcsig_cli.my_uid+" peers="+beamobj.rtcsig_cli.peer_ray.length);

  beamobj.my_id=beamobj.rtcsig_cli.my_uid;
  k=0;
  for(p=0;p<beamobj.rtcsig_cli.peer_ray.length;p++)
   {
   uid=beamobj.rtcsig_cli.peer_ray[p];
   if(uid==beamobj.rtcsig_cli.my_uid)
    {
    peerobj=beamPeerUse(beamobj,k,uid);
    }
   }
  k++;
  for(p=0;p<beamobj.rtcsig_cli.peer_ray.length;p++)
   {
   uid=beamobj.rtcsig_cli.peer_ray[p];
   if(uid==beamobj.rtcsig_cli.my_uid) { continue; }
   if((peerobj=beamPeerById(beamobj,uid))!=null)  { alert("ss2"); continue; }
   if((peerobj=beamPeerUnusedGet(beamobj))==null) { aa.debugAlert("cdfvdf"); }
   peerobj=beamPeerUse(beamobj,k,uid);
   k++;
   }
  beamobj.stage=160;
  break;


  case 160:
  if((po=beamPeerNext(beamobj))!=null) {  beamPeerYield(beamobj,po.self_index);   }
  pkt=clientRtcsigRead(beamobj.rtcsig_cli);
  if(pkt==null||pkt==false) { break; }

  switch(pkt.cmd)
   {
   default:
   aa.debugAlert("unknown cmd="+pkt.cmd);
   break;


   case "said":
   peer=beamPeerById(beamobj,pkt.uuid);
   if(peer==null) { break; }
   if(pkt.msg_func=="chat")
    {
    etc=JSON.parse(pkt.msg_data);
    if(etc.txt.length>0)
     {
     ///!!!! guixVlogAppend(etc.txt);
     //if(app.vlog==undefined)  {  app.vlog=aa.virtualLogNew(10);     }
//      if(aa.virtualLogSet(app.vlog,0,app.vlog.num_lines-1,etc.txt)==false) { aa.debugAlert(); }
     if(etc.txt.length>1)
      {
      //console.log("sending "+etc.txt);
      //clientRtcsigBash(app.beam.rtcsig_cli,0,"zh","en",etc.txt);
      }
     }
    break;
    }
   aa.queueWrite(peer.r_queue_handle,pkt);
   peer.r_queue_status=aa.queueStatus(peer.r_queue_handle);
   break;

   case "joined":
   beamReadJoined(beamobj,pkt);
   break;

   case "left":
   beamReadLeft(beamobj,pkt);
   break;
   }
  break;
  }
 if(beamobj.rtcsig_cli!=null)
  {
  clientRtcsigYield(beamobj.rtcsig_cli);
  }
 }




 function beamPeerYield (beamobj,peerindex)
 {
 var peerobj,pkt,rtc,grp,msg,ice,xxx,val,status,med,etc,at,vt;
 if(peerindex>=beamobj.max_peers) { return; }

 peerobj=beamobj.peer_array[peerindex];
 if(peerobj==null)        { return; }
 if(peerobj.in_use!=true) { return; }
 if(peerobj.is_leaving)     { aa.debugAlert("Fefef");  return;  }

 switch(peerobj.phaze)
  {
  case 0:
  peerobj.phaze=100;
  break;

  case 66:
  case 666:
  break;



                case 100: // creation of individual WebRtc connections
                //console.log("peerobj 100");
                //console.log(peerobj);
                if(peerobj.id_dif==0)
                 {
                 beamCountSet(beamobj,beamobj.peer_count,beamobj.peer_count_connected+1);
                 peerobj.phaze=200;
                 break;
                 }
                peerobj.rtc_handle=aa.rtcCreate({'iceServers':[{'urls':'stun:stun.l.google.com:19302'}]});
                if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
                rtc.vars.peer_index=peerobj.self_index;
                if((grp=aa.guiGroupGetById("b_canstream_0"))==null) { aa.debugAlert("FEfefr"); }
                ///med=aa.mediaGet(app.media.handle);
                if(grp.vars.audio_processor.destination!=undefined)
                 {
                 rtc.pc.addTrack(grp.vars.audio_processor.destination.stream.getAudioTracks()[0],grp.vars.audio_processor.stream);
                 }
                rtc.pc.addTrack(grp.vars.audio_processor.stream.getVideoTracks()[0],grp.vars.audio_processor.stream);
                console.log("yield "+peerobj.phaze+" added tracks");

                if(peerobj.id_dif>0)  {    peerobj.phaze=400; break;    }
                if(peerobj.id_dif<0)  {    peerobj.phaze=600; break;    }
                break;





        case 200: // Peer connection to self
        pkt=beamPeek(beamobj,peerobj.id);
        if(pkt==null||pkt==false) { break; }
        //console.log("got 200",pkt);
        beamDiscard(beamobj,peerobj.id);
        break;





                case 400:
                //console.log("400 creating offer");
                aa.rtcOfferCreate(peerobj.rtc_handle);
                peerobj.phaze=430;
                break;



                case 430:
                if(beamWaitOfferCreate(beamobj,peerobj)==false) { break;  }
                peerobj.phaze=435;
                break;


                case 435:
                status=aa.rtcStatus(peerobj.rtc_handle);
                if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
             if(cfg_sdp_manip) { rtc.offer.sdp=aa.mediaSdpManipulate(rtc.offer.sdp,cfg_sdp_sbool,0,0); }
                aa.rtcDescLocalSet(peerobj.rtc_handle,rtc.offer);
                peerobj.phaze=440;
                break;


                case 440:
                if(beamWaitDescLocalSet(beamobj,peerobj)==false) { break;  }
                peerobj.phaze=450;
                break;




                case 450:
                status=aa.rtcStatus(peerobj.rtc_handle);
                if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
                etc={};
                etc.is_true=true;
                etc.offer=rtc.offer;
                clientRtcsigWrite(beamobj.rtcsig_cli,peerobj.id,"offer",JSON.stringify(etc));
                //beamWrite(beamobj,"say","aakak",peerobj.id,"offer",true,rtc.offer);
                peerobj.phaze=460;
                break;



                case 460:
                pkt=beamPeek(beamobj,peerobj.id);
                if(pkt==null||pkt==false) { break; }
                msg=JSON.parse(pkt.msg_data);
                if(pkt.msg_func!="answer")
                 {
                 //console.log("3036");
                 //console.log(pkt);//alert("fef "+pkt.msg_func);
                 beamDiscard(beamobj,peerobj.id);
                 break;
                 }
                beamDiscard(beamobj,peerobj.id);
                if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
                rtc.answer=msg.answer;//JSON.parse(msg.txt).txt;
                peerobj.phaze=470;
                break;



                case 470:
                status=aa.rtcStatus(peerobj.rtc_handle);
                if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
                //aa.debugLogger(0,"about to set desc remote");
                aa.rtcDescRemoteSet(peerobj.rtc_handle,rtc.answer);
                peerobj.phaze=480;
                break;




                case 480:
                if(beamWaitDescRemoteSet(beamobj,peerobj)==false) { break;  }
                peerobj.phaze=900;
                break;





           case 600: // We are accepting from this peer
           if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
           pkt=beamPeek(beamobj,peerobj.id)
           if(pkt==null||pkt==false) { break; }
           msg=JSON.parse(pkt.msg_data);
           if(pkt.msg_func!="offer")
            {
            alert("fefz "+pkt.msg_func);
            beamDiscard(beamobj,peerobj.id);
            break;
            }
           beamDiscard(beamobj,peerobj.id);
           //console.log("600 got offer, setting rem desc");
           aa.rtcDescRemoteSet(peerobj.rtc_handle,msg.offer);
           peerobj.phaze=610;
           break;


           case 610:
           if(beamWaitDescRemoteSet(beamobj,peerobj)==false) { break;  }
           peerobj.phaze=620;
           break;



           case 620:
           aa.rtcAnswerCreate(peerobj.rtc_handle);
           peerobj.phaze=630;
           break;



           case 630:
           if(beamWaitAnswerCreate(beamobj,peerobj)===false) { break; }
           peerobj.phaze=645;
           break;



           case 645:
           if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
       if(cfg_sdp_manip) { rtc.answer.sdp=aa.mediaSdpManipulate(rtc.answer.sdp,cfg_sdp_sbool,0,0); }
           aa.rtcDescLocalSet(peerobj.rtc_handle,rtc.answer);
           peerobj.phaze=647;
           break;




           case 647:
           if(beamWaitDescLocalSet(beamobj,peerobj)==false) { break;  }
           peerobj.phaze=720;
           break;



           case 720:
           if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
                etc={};
                etc.is_true=true;
                etc.answer=rtc.answer;
                clientRtcsigWrite(beamobj.rtcsig_cli,peerobj.id,"answer",JSON.stringify(etc));
           peerobj.phaze=900;
           break;




           case 900:
           if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
           status=aa.rtcStatus(peerobj.rtc_handle);
           if(status.in_promise==true) {   aa.debugAlert("fef"); }
           //console.log("enterying icey can trickle"+rtc.pc.canTrickleIceCandidates);
           peerobj.phaze=1000;
           break;




                case 1000:  // icey
                if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }

                if(0&&rtc.pc.connectionState=="connected"&&peerobj.sent_final_ice==true)
                 {
                 status=aa.rtcStatus(peerobj.rtc_handle);
                 if(status.in_promise==true) {      peerobj.phaze=1010;   break; }
                 peerobj.phaze=1200;
                 break;
                 }

                while(1)
                 {
                 pkt=beamPeek(beamobj,peerobj.id)
                 if(pkt==null||pkt==false) { break; }
                 msg=JSON.parse(pkt.msg_data);
                 if(pkt.msg_func=="ice")
                  {
                  if(msg.ice==".")  { peerobj.rvcd_final_ice=true;  } //console.log("rcve final ice");
                  else              { xxx=msg.ice;  aa.rtcIceCandidateAdd(peerobj.rtc_handle,xxx);  }//    console.log("candi add");  }
                  }
                 else {  console.log("3191");  console.log(pkt);                 }
                 beamDiscard(beamobj,peerobj.id);
                 break;
                 }
                status=aa.rtcStatus(peerobj.rtc_handle);
                if(status.in_promise==true) {      peerobj.phaze=1010;   break; }


                if(peerobj.sent_final_ice==false)
                 {
                 if((ice=aa.rtcIceCandidateGet(peerobj.rtc_handle))!=null)
                  {
                  if(ice==".")  { peerobj.sent_final_ice=true;  } //   console.log("sent final ice");
                  etc={};
                  etc.is_true=true;
                  etc.ice=ice;
                  clientRtcsigWrite(beamobj.rtcsig_cli,peerobj.id,"ice",JSON.stringify(etc));
                  status=aa.rtcStatus(peerobj.rtc_handle);
                  if(status.in_promise==true) {      peerobj.phaze=1010;   break; }
                  break;
                  }
                 }

                if(peerobj.phaze!=1000) { break; }

                if(peerobj.sent_final_ice!=true) { break; }
                if(peerobj.rvcd_final_ice!=true) { break; }
                //console.log("established a");
                peerobj.phaze=1200;
                break;



                 case 1010:
                 status=aa.rtcStatus(peerobj.rtc_handle);
                 if(status.in_promise==true)
                  {
                  while(1)
                   {
                   val=false;
                   if(status.promise_status.state==PROMISE_completed)  { val=status.promise_status.val; }  else
                   if(status.promise_status.state==PROMISE_rejected)   { val=null; }
                   if(status.promise_status.state==PROMISE_completed||status.promise_status.state==PROMISE_rejected)
                    {
                    if(aa.rtcPromiseClear(peerobj.rtc_handle)!=true) { aa.debugAlert("erfefef"); }
                    }
                   if(val===null)   { aa.debugLogger(0,"rejected phaze="+peerobj.phaze); break; }
                   if(val===false)  { break; }
                   break;
                   }
                  break;
                  }
                status=aa.rtcStatus(peerobj.rtc_handle);
                if(status.in_promise==true) { break; }
                //console.log("1010 prom done");
                peerobj.phaze=1000;
                break;




                case 1200: // wait for remote stream
                if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
                status=aa.rtcStatus(peerobj.rtc_handle);
                if(rtc.gui_id==null&&rtc.rem_stream!=null)  {    peerobj.phaze=1300;        break;                 }
                if(rtc.gui_id!=null) { aa.debugLogger(0,"guiid !=null = "+rtc.gui_id);  break;     }
                break;





                            case 1300: // attach to unused video element
                            beamPeerVideoAttach(beamobj,peerobj);
                            grp=aa.guiGroupGet(aa.guiIdFind("b_video_"+peerobj.self_index));
                            //console.log("peer use "+peerobj.self_index);

                            console.log("yield "+peerobj.phaze+" setting sinks");


                            if(app.media.active_devenu.aud_output_list.length>app.media.cur_axo)
                             {
                             grp.dom.setSinkId(mediaDeviceGet("audiooutput",0).deviceId);
                             }


                            beamCountSet(beamobj,beamobj.peer_count,beamobj.peer_count_connected+1);
                            //console.log("1300");
                            peerobj.phaze=1350;
                            break;


                     case 1350:
                     if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
                     if(rtc.prom!==undefined&&rtc.prom!=null) {  break; }
//                  peerobj.phaze=1370; break;
                     if(aa.rtcBitrateChange(peerobj.rtc_handle,0,cfg_sdp_use_vrate)!=true) { alert("sks1"); break }
                     peerobj.phaze=1360;
                     break;


                     case 1360:
                     if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
                     if(rtc.prom!==undefined&&rtc.prom!=null) {  break; }
                     if(aa.rtcBitrateChange(peerobj.rtc_handle,cfg_sdp_use_arate,0)!=true) { alert("sks"); break }
                     peerobj.phaze=1370;
                     break;


                     case 1370:
                     if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
                     if(rtc.prom!==undefined&&rtc.prom!=null) {  break; }
                     //aa.guiCanvasFillFull(aa.guiGroupGetById("maincanvas").han,aa.guiRgbaString(255,255,55,1));
                     console.log("established !!!!");
                     peerobj.phaze=2000;
                     break;


                     case 2000:  // established
                     status=aa.rtcStatus(peerobj.rtc_handle);
                     if(status.in_promise==true) { aa.debugAlert("Dwewww"); }
                     if((rtc=aa.rtcGet(peerobj.rtc_handle))==null) { aa.debugAlert("rtcget"); }
                     while(1)
                      {
                      pkt=beamPeek(beamobj,peerobj.id)
                      if(pkt==null||pkt==false) { break; }
                      if(pkt.cmd=="said"&&pkt.msg_func=="ice") // added
                       {
                       console.log("got ice");
                       beamDiscard(beamobj,peerobj.id);
                       }
                      else
                       {
                       console.log(pkt);
                       }
                      status=aa.rtcStatus(peerobj.rtc_handle);
                      }
                     peerobj.cycle++;
                     break;
  }
 }







//---------------------------------------------------------


 function peerCount ()
 {
 var index,c;
 c=0;
 for(index=0;index<cfg_max_peers;index++)
  {
  if(peerState(index)==true) { c++; }
  }
 return c;
 }




 function peerState (index)
 {
 var med,peer;
 if(index<0||index>=cfg_max_peers) { return false; }
 if(index==0)
  {
  if(aa.main_state.stage<1100) { return false; } // was 2000
  if((med=aa.mediaGet(app.media.swapper_handle))==null) { return false; } // drame
  if(med.is_attached!=true) { return false; }
  return true;
  }
 if(app.beam&&app.beam.rtcsig_cli&&app.beam.rtcsig_cli.my_uid>0)
  {
  peer=beamPeerByIndex(app.beam,index);
  if(peer.in_use!=true) { return false; }
  if(peer.phaze!=2000)  { return false; }
  //console.log("peer "+index,peer);
  return true;
  }
 return false;
 }





//---------------------------------------------------------







//---------------------------------------------------------



 function mediaStart ()
 {
 app.media={};
 app.media.is_started=true;
 app.media.is_swapping=false;
 app.media.is_detecting=false;
 app.media.is_detect_failure=false;
 app.media.is_detect_success=false;
 app.media.detect_handle=0;
 app.media.detect_stage=0;
 app.media.detect_err=0;
 app.media.devenu=null;
 app.media.active_devenu=null;
 app.media.handle=0;
 app.media.handle2=0;
 app.media.cur_axi=0;  // current mic
 app.media.cur_vxi=0;  // current cam
 if(app.fp&&app.fp.fp=="9730d3d5b6a370a32f97421c2921060d393c5ec1f4523e05a2666eae650ff587")
  {
  app.media.cur_vxi=3;
  }
 app.media.cur_axo=0;  // current speakers
 app.media.cur_vfxi=0; // current vid fx
 app.media.cur_afxi=0; // current aud fx
 app.media.cur_grxi=0; // current green screen fx
 app.media.cur_arxi=0; // current AR fx
 app.media.cam_swap_stage=0;
 app.media.cam_swap_vxi=0;
 app.media.mic_swap_stage=0;
 app.media.mic_swap_axi=0;
 app.media.grp_of_b_video_0=null;
 app.media.grp_of_b_canstream_0=null;
 mediaLocalGainMuteSet(cfg_audio_default_gain,cfg_audio_local_initially_muted);
 }





 function mediaSize (useshort,rezwid,isrot)
 {
 var ww,hh,obj,ko;
 switch(rezwid)
  {
  //default:  aa.debugAlert("rezwid="+rezwid);  break;
  default:   ww=rezwid;  hh=rezwid; break;
  case 80:   ww=rezwid;  if(useshort) { hh=50;   }  else  { hh=60; }  break;
  case 160:  ww=rezwid;  if(useshort) { hh=90;   }  else  { hh=120; }  break;
  case 320:  ww=rezwid;  if(useshort) { hh=180;  }  else  { hh=240; }  break;
  case 640:  ww=rezwid;  if(useshort) { hh=360;  }  else  { hh=480; }  break;
  case 1280: ww=rezwid;  if(useshort) { hh=630; }   else  { hh=720;}  break;
  case 1080: ww=rezwid;  if(useshort) { hh=1200; }  else  { hh=1920;}  break;
  case 1920: ww=rezwid;  if(useshort) { hh=960;  }  else  { hh=1080;}  break;
  }
 if(isrot)  {  swp=ww;  ww=hh;  hh=swp;  }
 obj={};
 while(1)
  {
  if(cfg_video_square) { obj.w=ww; obj.h=ww; break; }
  ///ko=app.hyperPanel.photo_mode_a;//app.photo_modea;
  obj.w=ww; obj.h=hh; break;
//console.log(ko);
  if(ko==0) { obj.w=ww; obj.h=ww; break; }  // 320x320  skinny
  if(ko==1) { obj.w=hh; obj.h=hh; break; }  // 240x240  fat
  if(ko==2) { obj.w=ww; obj.h=hh; break; }  // 320x240  skinny
  if(ko==3) { obj.w=hh; obj.h=ww; break; }  // 240x320  fat
  aa.debugAlert();
  break;
  }
 //console.log("mediaSizeSet "+obj.w+"  "+obj.h);
 //console.log(callerName(),useshort,rezwid,isrot,obj);
 return obj;
 }






 function mediaCanvasPaint ()
 {
 var vgrp,ready,vgsz,isplaying,fps,mgt,res;

 if(app.media==undefined) { return; }
 if(app.media.handle<=0)  { return; }
 mgt=aa.mediaGet(app.media.handle);
 if(mgt.res==null)        { return; }
 if(mgt.res!="ok")        { alert("res="+mgt.res); return; }

 if(cfg_vlog_use) { if(app.guix.vlog&&app.guix.vlog.needs_paint) {  guixVlogPaint();  } }

 vgrp=aa.guiGroupGetById("b_video_0");
 if(vgrp==null||vgrp.dom.videoWidth==0)    { return; }

 while(1)
  {
  ready=false;
  if(app.media.is_swapping==true) {   break; }
  if(vgrp.obj.dom.readyState!=4)  {   break; }
  if(vgrp.obj.vars.prev_time!==undefined)  {  if(vgrp.obj.dom.currentTime<=vgrp.obj.vars.prev_time) { break; }   }
  ready=true;
  break;
  }
 if(ready!=true)     { return; }
 isplaying=vgrp.dom.currentTime>0&&!vgrp.dom.paused&&!vgrp.dom.ended&&vgrp.dom.readyState>2;
 if(isplaying!=true) { return; }
 vgsz=aa.guiSizesGet(vgrp.han);
 if(vgrp.obj.vars.frame_number==undefined)   {   vgrp.obj.vars.frame_number=0; }
 if(vgrp.obj.vars.frame_number==0)           {   vgrp.obj.vars.start_time=vgrp.obj.dom.currentTime;   }
 vgrp.obj.vars.frame_number++;
 vgrp.obj.vars.prev_time=vgrp.obj.dom.currentTime;
 fps=0;
 if(vgrp.obj.vars.frame_number>0) { fps=vgrp.obj.vars.frame_number/(vgrp.obj.dom.currentTime-vgrp.obj.vars.start_time); }
 vgrp.obj.vars.fps=fps;

 ///mediaVideoAddVadColor(cgrp,vw,vh);

 if(cfg_vlog_use) { if((vgrp.obj.vars.frame_number%5)==0) { guixVlogSet(2,1,""+(vgrp.obj.vars.fps|0)+" fps"); } }

 //================================ write the video frame from camera to mpipe
 //console.log("frame "+vgsz.vidwh[0]+"  "+vgsz.vidwh[1]);
 res=mpipeRawWrite(app.mpipe.obj_ray[0],vgsz.vidwh[0],vgsz.vidwh[1],vgrp.dom);
 //================================
 }





 function mediaLocalGainMuteSet (gainval,muteval)
 {
 app.media.cur_local_gain=gainval;
 app.media.cur_local_mute=muteval;
 }




 function mediaYield ()
 {
 if(app.media===undefined) { return; }
 mediaDetectYield();
 mediaSwapYield();
 }





 function mediaDetectStart ()
 {
 if(app.media.is_detecting==true) { return false; }
 if(app.media.devenu!=null) { aa.debugAlert("devenu not null"); return false; }
 app.media.detect_stage=100;
 app.media.is_detecting=true;
 app.media.is_detect_failure=false;
 app.media.is_detect_success=false;
 app.media.detect_err="";
 return true;
 }





 function mediaDeviceDump (doactive)
 {
 var str,len,i,eo,d,den,o;
 rembug("mediaDeviceDump==========");
 if(doactive) { den=app.media.active_devenu; }
 else         { den=app.media.devenu;        }
 for(i=0;i<den.aud_input_list.length;i++)
  {
  o=den.aud_input_list[i];
  str=i+" "+o.kind+" "+o.clean+" ";
  if(o.res!=null)  {  str+="res.res="+o.res.res+" res.name="+o.res.name+" res.msg="+o.res.msg+" ";   }
  rembug(str);
  }
 for(i=0;i<den.vid_input_list.length;i++)
  {
  o=den.vid_input_list[i];
  str=i+" "+o.kind+" "+o.clean+" ";
  if(o.res!=null)  {  str+="res.res="+o.res.res+" res.name="+o.res.name+" res.msg="+o.res.msg+" ";   }
  rembug(str);
  }
 for(i=0;i<den.aud_output_list.length;i++)
  {
  o=den.aud_output_list[i];
  str=i+" "+o.kind+" "+o.clean+" ";
  if(o.res!=null) {  str+="res.res="+o.res.res+" res.name="+o.res.name+" res.msg="+o.res.msg+" ";   }
  rembug(str);
  }
 for(i=0;i<den.vid_output_list.length;i++)
  {
  o=den.vid_output_list[i];
  str=i+" "+o.kind+" "+o.clean+" ";
  if(o.res!=null) {  str+="res.res="+o.res.res+" res.name="+o.res.name+" res.msg="+o.res.msg+" ";   }
  rembug(str);
  }
 }




 function mediaDetectYield ()
 {
 var res,err;

 switch(app.media.detect_stage)
  {
  case 66:
  break;

  case 100:
  console.log("media detect start");
  app.media.detect_handle=aa.mediaCreate(false,{},{});
  ///console.log("detect handle",app.media.detect_handle);
  app.media.detect_stage=120;
  break;

  case 120:
  res=aa.mediaStatus(app.media.detect_handle);
  if(res!=true) { break; }
  res=aa.mediaGet(app.media.detect_handle);
  if(res.res=="ok")
   {
   if(aa.mediaDestroy(app.media.detect_handle)!=true) {  aa.debugAlert("rdf");    }
   app.media.detect_handle=0;
   app.media.detect_res=res.res;
   app.media.detect_stage=200;
   break;
   }
  if(res.res=="err")
   {
   if(aa.mediaDestroy(app.media.detect_handle)!=true) { aa.debugAlert("wefwef");   }
   app.media.detect_handle=0;
   app.media.is_detect_success=false;
   app.media.is_detect_failure=true;
   app.media.detect_err=err;
   app.media.detect_stage=66;
   app.media.is_detecting=false;
   break;
   }
  break;


  case 200:
  app.media.devenu=aa.mediaDeviceEnumerator();
  app.media.detect_stage=220;
  break;


  case 220:
  if(app.media.devenu.is_failed==true)
   {
   app.media.detect_stage=66;
   app.media.is_detecting=false;
   break;
   }
  if(app.media.devenu.is_ready!=true)  { break; }
  app.media.is_detect_success=true;
  app.media.is_detect_failure=false;
  app.media.detect_err=0;
  app.media.detect_stage=300;
  app.media.is_detecting=false;
  console.log("media detect ok");
  break;

  case 300:
  break;
  }
 }






 function mediaMicSwap (axi)
 {
 var pxi,mod;
 if(app.media.is_swapping!=false) { console.log("swapping in use"); return false; }
 if(axi==null)                    { return false; }
 mod=mediaDeviceCountGet("audioinput");
 pxi=app.media.cur_axi;
 axi%=mod;
 if(axi==pxi) { return true; }
 app.media.is_swapping=true;
 app.media.mic_swap_stage=1;
 app.media.mic_swap_axi=axi;
 return true;
 }




 function mediaCamSwap (vxi)
 {
 var pxi,mod;
 if(app.media.is_swapping!=false) { return false; }
 if(vxi==null) { return false; }
 mod=mediaDeviceCountGet("videoinput");
 pxi=app.media.cur_vxi;
 vxi%=mod;
 ///if(vxi==pxi) { return true; }
 app.media.is_swapping=true;
 app.media.cam_swap_stage=1;
 app.media.cam_swap_vxi=vxi;
 return true;
 }





 function mediaSwapYield ()
 {
 if(app.media.is_swapping!=true) { return; }
 mediaSwapMicYield();
 mediaSwapCamYield();
 }






 function mediaDeviceListInit (obj)
 {
 var o,i,l;
 app.media.active_devenu=null;
 app.media.active_devenu=JSON.parse(JSON.stringify(obj));
 l=app.media.active_devenu.aud_input_list.length;
 for(i=0;i<l;i++)  {  app.media.active_devenu.aud_input_list[i].res=null;  }
 l=app.media.active_devenu.vid_input_list.length;
 for(i=0;i<l;i++)  {  app.media.active_devenu.vid_input_list[i].res=null;  }
 l=app.media.active_devenu.aud_output_list.length;
 for(i=0;i<l;i++)  {  app.media.active_devenu.aud_output_list[i].res=null;  }
 l=app.media.active_devenu.vid_output_list.length;
 for(i=0;i<l;i++)  {  app.media.active_devenu.vid_output_list[i].res=null;  }
 return true;
 }






 function mediaDeviceGet (kind,index)
 {
 switch(kind)
  {
  case "audioinput":
  if(index>=app.media.active_devenu.aud_input_list.length) { break; }
  return app.media.active_devenu.aud_input_list[index];

  case "audiooutput":
  if(index>=app.media.active_devenu.aud_output_list.length) { break; }
  return app.media.active_devenu.aud_output_list[index];

  case "videoinput":
  if(index>=app.media.active_devenu.vid_input_list.length) { break; }
  return app.media.active_devenu.vid_input_list[index];

  case "videooutput":
  if(index>=app.media.active_devenu.vid_output_list.length) { break; }
  return app.media.active_devenu.vid_output_list[index];
  }
 return null;
 }







 function mediaDeviceListErr (obj,kind,index,errobj)
 {
 var oe;

 if(errobj!==undefined)
  {
  }
 switch(kind)
  {
  case "audioinput":   app.media.active_devenu.aud_input_list[index].res=errobj; break;
  case "videoinput":   app.media.active_devenu.vid_input_list[index].res=errobj; break;
  case "audiooutput":  app.media.active_devenu.aud_output_list[index].res=errobj; break;
  case "videooutput":  app.media.active_devenu.vid_output_list[index].res=errobj; break;
  }
 if(errobj.res!="ok")
  {
  console.log("res="+errobj.res+" name="+errobj.name);
  console.log("msg="+errobj.msg+" code="+errobj.code);
  console.log("etc="+errobj.etc+" "+errobj.etc0+","+errobj.etc1);
  }
 }





 function mediaDeviceCountGet (kind)
 {
 switch(kind)
  {
  case "audioinput":  return app.media.active_devenu.aud_input_list.length;
  case "audiooutput": return app.media.active_devenu.aud_output_list.length;
  case "videoinput":  return app.media.active_devenu.vid_input_list.length;
  case "videooutput":  return app.media.active_devenu.vid_output_list.length;
  }
 return 0;
 }





 function mediaDeviceSwapperInit ()
 {
 var cap_stream,vid_tracks,med_object,aud_stream,new_stream,grp,tr;
 if((grp=aa.guiGroupGetById("b_canstream_0"))==null) { aa.debugAlert("weewdw"); }
 //if(cfg_auto_capture_stream==true)  { cap_stream=grp.dom.captureStream();          }
 //else                               { cap_stream=grp.dom.captureStream(cfg_cam_fps); }
 if(cfg_cstream_auto) { cap_stream=grp.dom.captureStream();            }
 else                 { cap_stream=grp.dom.captureStream(cfg_cam_fps); }
 vid_tracks=cap_stream.getVideoTracks()[0];
 //app.media.swapper_handle=app.media.handle;//handle;
 med_object=aa.mediaGet(app.media.handle);
 //console.log(med_object);
 aud_stream=med_object.a_stream;
 new_stream=mediaCombineStreams(aud_stream,vid_tracks);
 app.new_stream=new_stream;
 grp.vars.audio_processor=mediaAudioProcessorStart(grp.obj.id,new_stream);
 grp.vars.audio_processor.stream=new_stream;
 app.media.aud_pro=grp.vars.audio_processor;
 grp.vars.cst=cap_stream;
 grp.vars.nws=new_stream;
 }







 function mediaDeviceSwapperSwap ()
 {
 var cap_stream,vid_tracks,med_object,aud_stream,new_stream,grp,tr,han;
 if((grp=aa.guiGroupGetById("b_canstream_0"))==null) { aa.debugAlert("qqqqqqq"); }
 cap_stream=grp.dom.captureStream(cfg_cam_fps);
 vid_tracks=cap_stream.getVideoTracks()[0];
 han=app.media.handle;
 med_object=aa.mediaGet(han);
 aud_stream=med_object.a_stream;
 new_stream=mediaCombineStreams(aud_stream,vid_tracks);
 grp.vars.audio_processor.stream=new_stream;
 grp.vars.audio_processor.microphone.disconnect();
 grp.vars.audio_processor.microphone=grp.vars.audio_processor.context.createMediaStreamSource(new_stream);
 grp.vars.audio_processor.microphone.connect(grp.vars.audio_processor.analyser);
 }







 function mediaCombineStreams (astream,vstream)
 {
 var stream,tr=[];
 if(astream!=undefined) { tr=tr.concat(astream); }
 if(vstream!=undefined) { tr=tr.concat(vstream); }
 stream=new MediaStream(tr);
 return stream;
 }









 function mediaPairCreate (axi,vxi)
 {
 var ax,vx,ox,han,wid,hit,dsz,adid,vdid,csz,f,dz;

 ax=axi;
 vx=vxi;
 dsz=aa.ifaceDisplaySizesGet();
 csz=mediaSize(cfg_cam_res_short,cfg_cam_res_wid,cfg_cam_res_rot);
 wid=csz.w;
 hit=csz.h;
 if(ax>=0)
  {
  if((adid=mediaDeviceGet("audioinput",ax))!=null)  {  adid=adid.deviceId;  }
  }
 if(vx>=0)
  {
  if((vdid=mediaDeviceGet("videoinput",vx))!=null)  {  vdid=vdid.deviceId;  }
  }

 if(axi!=-1&&vxi==-1)
  {
  rembug("creating just audio "+axi);
  han=aa.mediaCreate(false,
    null,
    {deviceId:{exact:adid},channelCount:1,sampleRate:{min:16000,ideal:48000,max:48000},latency:0,
      echoCancellation:cfg_audio_aec,noiseSuppression:cfg_audio_nsu,autoGainControl:cfg_audio_agc,
     googEchoCancellation:cfg_audio_aec,googNoiseSuppression:cfg_audio_nsu,googAutoGainControl:cfg_audio_agc}
    );
  app.media.cur_axi=axi;
  return han;
  }

 if(axi==-1&&vxi!=-1&&vxi!=1000)
  {
  rembug("creating just video "+vxi);
  han=aa.mediaCreate(false,
    {deviceId:{exact:vdid},width:{ideal:wid,max:wid},height:{ideal:hit,max:hit},frameRate:{ideal:cfg_cam_fps,max:cfg_cam_fps} },
     null,
    );
   app.media.cur_vxi=vxi;
  return han;
  }

 if(axi==-1&&vxi==1000)
  {
  rembug("creating just screen ");
  han=aa.mediaCreate(true,
    {cursor:"always",width:{ideal:wid,max:wid},height:{ideal:hit,max:hit},frameRate:{ideal:cfg_cam_fps,max:cfg_cam_fps},aspectRatio:16/9},
    null
    );
  app.media.cur_vxi=vxi;
  return han;
  }

 if(axi!=-1&&vxi!=-1&&vxi!=1000)
  {
  ///rembug("creating normal"+axi+"  "+vxi+"   "+wid+"  "+hit);
  han=aa.mediaCreate(false,
    {deviceId:{exact:vdid},width:{ideal:wid,max:wid},height:{ideal:hit,max:hit},frameRate:{ideal:cfg_cam_fps,max:cfg_cam_fps} },
    {deviceId:{exact:adid},channelCount:1,sampleRate:{min:16000,ideal:48000,max:48000},latency:0,
     echoCancellation:cfg_audio_aec,noiseSuppression:cfg_audio_nsu,autoGainControl:cfg_audio_agc,
     googEchoCancellation:cfg_audio_aec,googNoiseSuppression:cfg_audio_nsu,googAutoGainControl:cfg_audio_agc}
    );
   app.media.cur_axi=axi;
   app.media.cur_vxi=vxi;
  return han;
  }


aa.debugAlert("rr");
 return han;
 }










 function mediaAudioProcessorStart (id,newlycreatedstream)
 {
 var obj,settings,sss;
 obj={};
 obj.id=id;
 obj.context=new AudioContext();
 sss=newlycreatedstream.getAudioTracks()[0];
 if(sss!=undefined)
  {
  obj.rate=sss.getSettings().sampleRate;
  obj.microphone=obj.context.createMediaStreamSource(newlycreatedstream);
  obj.destination=obj.context.createMediaStreamDestination();
  obj.scripter=obj.context.createScriptProcessor(cfg_audio_script_processor_size,1,1);
  obj.scripter.onaudioprocess=function(event) { mediaAudioProcessorProc(obj,event);  }

  obj.analyser_cycle=0;
  obj.analyser_level=0;
  obj.analyser=obj.context.createAnalyser();
  obj.analyser.fftSize=cfg_audio_fft_size;
  obj.analyser.smoothingTimeConstant=cfg_audio_smoothing; // was 0.3
  obj.analyser.maxDecibels=cfg_audio_max_db;
  obj.analyser.minDecibels=cfg_audio_min_db;

  obj.freq_buffer_len=obj.analyser.frequencyBinCount;
  obj.freq_float_buffer=new Float32Array(obj.freq_buffer_len);
  obj.freq_range=obj.rate/2.0;

  obj.band_count=obj.freq_buffer_len;
  obj.band_hertz=obj.freq_range/obj.band_count;

  obj.microphone.connect(obj.analyser);
  obj.analyser.connect(obj.scripter);
  obj.scripter.connect(obj.destination);
  console.log("audio proc started");
  }
 obj.stream=newlycreatedstream;
 return obj;
 }







 function mediaAudioProcessorProc (object,event)
 {
 var grp;
 grp=aa.guiGroupGetById(object.id);
 mediaAudioAnalyzeInput(object,event);
 mediaAudioScriptWithGain(object,event,app.media.cur_local_gain);
 }








 function mediaAudioAnalyzeInput (object,event)
 {
 var r,s,fqs,fqe,val,lev;
 var dbf,suv,i,ii,mv,va,vb,dsz;

 if((object.analyser_cycle%4)==0)
  {
  object.analyser.getFloatFrequencyData(object.freq_float_buffer);
  mv=-Infinity;
  for(i=0,ii=object.freq_buffer_len;i<ii;i++)
   {
   if(object.freq_float_buffer[i]>mv&&object.freq_float_buffer[i]<0) {  mv=object.freq_float_buffer[i];   }
   };
  suv=0;
  s=0;
  for(r=0;r<object.freq_buffer_len;r++)
   {
   //fqe=Math.round(audioIndexToFreq(object,r+1))-1;
   fqs=r+0;
   fqe=r+1;
   val=object.freq_float_buffer[r];
   val-=object.analyser.minDecibels;
   suv+=val**2;
   s++;
   }
  fqs=Math.round(mediaAudioIndexToFreq(object,fqs))-0;
  fqe=Math.round(mediaAudioIndexToFreq(object,fqe))-1;
  va=20*Math.log10(suv/s);
  mv=aa.numFixed(mv,1);
  va=aa.numFixed(va,1);
  lev=aa.numFixed((mv-(-160)),0);
  object.analyser_level=lev;
  }
 object.analyser_cycle++;
 }





 function mediaAudioFreqToIndex (object,freq)
 {
 var index,res;
 index=Math.round((freq/object.freq_range)*object.band_count);
 res=aa.numClamp(index,0,object.band_count);
 return res;
 }






 function mediaAudioIndexToFreq (object,index)
 {
 var res=(index*object.rate)/(object.band_count*2);
 return res;
 }





 function mediaAudioScriptWithGain (object,event,gain)
 {
 var ibuf,obuf,ilen,i,ival,oval,minv,maxv,q;
 ibuf=event.inputBuffer.getChannelData(0);
 obuf=event.outputBuffer.getChannelData(0);
 ilen=ibuf.length;
 minv=-0.999;
 maxv=+0.999;
 for(i=0;i<ilen;i++)
  {
  ival=ibuf[i];
  oval=ival*gain;
  if(oval<minv) { oval=minv;  }  else
  if(oval>maxv) { oval=maxv;  }
  obuf[i]=oval;
  }
 }




 function mediaVideoAddVadColor (cgrp,cw,ch)
 {
 if(app.media.aud_pro==undefined) { return; }
 //console.log(app.media.aud_pro.analyser_level+" "+cfg_audio_threshold);
 if(app.media.aud_pro.analyser_level>=cfg_audio_threshold&&app.media.cur_local_mute==false)
  {
  aa.guiCanvasBorder(cgrp.obj.han,0,0,cw-1,ch-1,2,aa.guiRgbaString(aa.numRandValue(0,255),220,240,1));
  //aa.guiCanvasBorder(cgrp.obj.han,0,0,cw-1,ch-1,4,aa.guiRgbaString(250,aa.numRandValue(0,255),240,1));
  //aa.guiCanvasBorder(cgrp.obj.han,0,0,cw-1,ch-1,2,aa.guiRgbaString(250,250,aa.numRandValue(0,255),1));
  }
 }



 function mediaSwapMicYield ()
 {
 var obj,ret,mob,grp,stream,rtc,status,grpc,vstream,astream,cstream,grpv;
 var err,oe;
 switch(app.media.mic_swap_stage)
  {
  case 0:
  return;


  case 1:
  ///console.log("mediaSwapMicYield stage 1, device count= "+mediaDeviceCountGet("audioinput"));
  //console.log("cur axi="+app.media.cur_axi+"  swap axi="+app.media.mic_swap_axi);
  app.media.cur_axi=app.media.mic_swap_axi;
  app.media.cur_axi%=mediaDeviceCountGet("audioinput");
  app.media_handle2=mediaPairCreate(app.media.cur_axi,app.media.cur_vxi); ///!!!!!!!!!!!!!!!!!!
  app.media.mic_swap_stage=2;
  ///guixNeedsPaintSet("sidemenu");
  return;




  case 6:
  console.log("mic 666");
  break;




  case 2:
  status=aa.mediaStatus(app.media_handle2);
  obj=aa.mediaGet(app.media_handle2);
  if(obj==null) { return; }
  if(obj.res==null) { return; }
  if(obj.res=="ok")
   {
   if(app.media.grp_of_b_canstream_0==null)
    {
    app.media.grp_of_b_canstream_0=aa.guiGroupGetById("b_canstream_0");
    //console.log(app.media.grp_of_b_canstream_0);
    }
   grpc=app.media.grp_of_b_canstream_0;
   if(grpc==null) { aa.debugAlert("Ferffer"); }
   aa.mediaAttach(app.media.handle,null);
   //== destroy media handle
   //console.log("DESTROYING MEDIA HANDLE");
   aa.mediaDestroy(app.media.handle);
   if(app.media.grp_of_b_video_0==null)
    {
    app.media.grp_of_b_video_0=aa.guiGroupGetById("b_video_0");
    }
   ret=aa.mediaAttach(app.media_handle2,app.media.grp_of_b_video_0.han);
   app.media.handle=app.media_handle2;
   app.media_handle2=0;
   if((obj=aa.mediaGet(app.media.handle))===null) { aa.debugAlert("erferfer"); }
   if(app.media.grp_of_b_video_0==null)
    {
    app.media.grp_of_b_video_0=aa.guiGroupGetById("b_video_0");
    }
   grpv=app.media.grp_of_b_video_0;
   if(grpv==null) { aa.debugAlert("ferff"); }
   ///if((grpv=aa.guiGroupGet(aa.guiIdFind("b_video_0")))==null) { aa.debugAlert(); }
   grpv.vars.prev_time=0;
   grpv.vars.frame_number=0;
   grpv.vars.fps=0;
   mediaDeviceSwapperSwap();
   app.media.mic_swap_stage=0;
   ///mediaStoreLastDevice();
   app.media.is_swapping=false;
   console.log("** mic swap success axi="+app.media.cur_axi+"  "+app.media.devenu.aud_input_list[app.media.cur_axi].clean);
   //console.log("--------mic");
   err=aa.mediaErrObjCreate(obj.res,obj.e_name,obj.e_msg,obj.e_code);
   mediaDeviceListErr(app.media.active_devenu,"audioinput",app.media.mic_swap_axi,err);//app.media.cur_axi,err);
   //guixNeedsPaint("b_hud_0",true);
   guixNeeds("b_hud_0",true,null);
   //guixNeedsPaintSet(null);
   }
  else
  if(obj.res=="err")
   {
   console.log("--------mic ");
   err=aa.mediaErrObjCreate(obj.res,obj.e_name,obj.e_msg,obj.e_code);
   mediaDeviceListErr(app.media.active_devenu,"audioinput",app.media.mic_swap_axi,err);//app.media.cur_axi,err);
   app.media.mic_swap_stage=1;
   app.media.mic_swap_axi++;
   app.media.mic_swap_axi%=mediaDeviceCountGet("audioinput");;
   //guixNeedsPaintSet(null);
   break;
   }
  return;
  }
 }






 function mediaSwapCamYield ()
 {
 var obj,ret,mob,grp,stream,rtc,status,grpc,vstream,astream,cstream,grpv;
 var err;
 switch(app.media.cam_swap_stage)
  {
  case 0:
  return;

  case 1:
  console.log("mediaSwapCamYield stage 1 "+mediaDeviceCountGet("videoinput"));
  console.log("cur vxi="+app.media.cur_vxi+"  swap vxi="+app.media.cam_swap_vxi);
  app.media.cur_vxi=app.media.cam_swap_vxi;
  app.media.cur_vxi%=mediaDeviceCountGet("videoinput");
  //console.log("new vxi="+app.media.cur_vxi);
  app.media_handle2=mediaPairCreate(app.media.cur_axi,app.media.cur_vxi);  ///!!!!!!!!!!!!!!!!!!
  app.media.cam_swap_stage=2;
  ///guixNeedsPaintSet("sidemenu");
  return;

  case 6:
  console.log("cam 666");
  break;


  case 2:
  status=aa.mediaStatus(app.media_handle2);
  obj=aa.mediaGet(app.media_handle2);
  if(obj==null)     { return; }
  if(obj.res==null) { return; }
  if(obj.res=="ok")
   {
   if(app.media.grp_of_b_canstream_0==null)
    {
    app.media.grp_of_b_canstream_0=aa.guiGroupGetById("b_canstream_0");
    }
   grpc=app.media.grp_of_b_canstream_0;
   if(!grpc) { aa.debugAlert("fefefer"); }
   aa.mediaAttach(app.media.handle,null);
   //== destroy media handle
   console.log("DESTROYING MEDIA HANDLE");
   aa.mediaDestroy(app.media.handle);
   if(app.media.grp_of_b_video_0==null)
    {
    app.media.grp_of_b_video_0=aa.guiGroupGetById("b_video_0");
    }
   if((ret=aa.mediaAttach(app.media_handle2,app.media.grp_of_b_video_0.han))!=true) { aa.debugAlert("media attach  ="+ret); }
   //if((ret=aa.mediaAttach(app.media_handle2,aa.guiGroupGet(aa.guiIdFind("b_video_0")).han))!=true) { aa.debugAlert("media attach  ="+ret); }
   app.media.handle=app.media_handle2;
   app.media_handle2=0;
   if((obj=aa.mediaGet(app.media.handle))===null) { aa.debugAlert("weeeee"); }
   grpv=app.media.grp_of_b_video_0;
   if(!grpv) { aa.debugAlert("xxxxxxx"); }
   //if((grpv=aa.guiGroupGet(aa.guiIdFind("b_video_0")))==null) { aa.debugAlert(); }
   grpv.vars.prev_time=0;
   grpv.vars.frame_number=0;
   grpv.vars.fps=0;
   mediaDeviceSwapperSwap();
   app.media.cam_swap_stage=0;
   ///mediaStoreLastDevice();
   app.media.is_swapping=false;
   console.log("** cam swap success vxi="+app.media.cur_vxi+"  "+app.media.devenu.vid_input_list[app.media.cur_vxi].clean);
   err=aa.mediaErrObjCreate(obj.res,obj.e_name,obj.e_msg,obj.e_code);
   mediaDeviceListErr(app.media.active_devenu,"videoinput",app.media.cam_swap_vxi,err);//app.media.cur_axi,err);
   //guixNeedsPaint("b_hud_0",true);
   guixNeeds("b_hud_0",true,null);
   //guixNeedsPaintSet(null);
   }
  else
  if(obj.res=="err")
   {
   console.log("--------cam err");
   err=aa.mediaErrObjCreate(obj.res,obj.e_name,obj.e_msg,obj.e_code);
   mediaDeviceListErr(app.media.active_devenu,"videoinput",app.media.cam_swap_vxi,err);//app.media.cur_axi,err);
   app.media.cam_swap_stage=1;
   app.media.cam_swap_vxi++;
   app.media.cam_swap_vxi%=mediaDeviceCountGet("videoinput");;
   //guixNeedsPaintSet(null);
   break;
   }
  return;
  }
 }


