(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="170",Iu=0,ec=1,Uu=2,Cl=1,Nu=2,zn=3,hi=0,ke=1,Hn=2,ui=0,Qi=1,nc=2,ic=3,sc=4,Fu=5,bi=100,Ou=101,Bu=102,zu=103,ku=104,Hu=200,Vu=201,Gu=202,Wu=203,Do=204,Lo=205,Xu=206,qu=207,Yu=208,$u=209,Ku=210,Zu=211,Ju=212,ju=213,Qu=214,Io=0,Uo=1,No=2,ns=3,Fo=4,Oo=5,Bo=6,zo=7,Ra=0,th=1,eh=2,Yn=0,nh=1,ih=2,sh=3,rh=4,oh=5,ah=6,ch=7,Pl=300,is=301,ss=302,ko=303,Ho=304,Pr=306,Vo=1e3,Ti=1001,Go=1002,Sn=1003,lh=1004,Bs=1005,wn=1006,zr=1007,Ai=1008,Kn=1009,Dl=1010,Ll=1011,Cs=1012,Ca=1013,Ri=1014,Wn=1015,Ls=1016,Pa=1017,Da=1018,rs=1020,Il=35902,Ul=1021,Nl=1022,xn=1023,Fl=1024,Ol=1025,ts=1026,os=1027,Bl=1028,La=1029,zl=1030,Ia=1031,Ua=1033,mr=33776,gr=33777,_r=33778,vr=33779,Wo=35840,Xo=35841,qo=35842,Yo=35843,$o=36196,Ko=37492,Zo=37496,Jo=37808,jo=37809,Qo=37810,ta=37811,ea=37812,na=37813,ia=37814,sa=37815,ra=37816,oa=37817,aa=37818,ca=37819,la=37820,ua=37821,xr=36492,ha=36494,da=36495,kl=36283,fa=36284,pa=36285,ma=36286,uh=3200,hh=3201,Hl=0,dh=1,ai="",Ne="srgb",cs="srgb-linear",Dr="linear",se="srgb",Ni=7680,rc=519,fh=512,ph=513,mh=514,Vl=515,gh=516,_h=517,vh=518,xh=519,oc=35044,ac="300 es",Xn=2e3,br=2001;class ls{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kr=Math.PI/180,ga=180/Math.PI;function Is(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Mh(i,t){return(i%t+t)%t}function Hr(i,t,e){return(1-e)*i+e*t}function ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],m=n[7],p=n[2],f=n[5],g=n[8],_=s[0],d=s[3],h=s[6],y=s[1],b=s[4],v=s[7],D=s[2],R=s[5],w=s[8];return r[0]=o*_+a*y+c*D,r[3]=o*d+a*b+c*R,r[6]=o*h+a*v+c*w,r[1]=l*_+u*y+m*D,r[4]=l*d+u*b+m*R,r[7]=l*h+u*v+m*w,r[2]=p*_+f*y+g*D,r[5]=p*d+f*b+g*R,r[8]=p*h+f*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],m=u*o-a*l,p=a*c-u*r,f=l*r-o*c,g=e*m+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=m*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=p*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vr.makeScale(t,e)),this}rotate(t){return this.premultiply(Vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new kt;function Gl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yh(){const i=wr("canvas");return i.style.display="block",i}const cc={};function Ss(i){i in cc||(cc[i]=!0,console.warn(i))}function Sh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Eh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ai?Dr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const lc=[.64,.33,.3,.6,.15,.06],uc=[.2126,.7152,.0722],hc=[.3127,.329],dc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[cs]:{primaries:lc,whitePoint:hc,transfer:Dr,toXYZ:dc,fromXYZ:fc,luminanceCoefficients:uc,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:lc,whitePoint:hc,transfer:se,toXYZ:dc,fromXYZ:fc,luminanceCoefficients:uc,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let Fi;class wh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fi===void 0&&(Fi=wr("canvas")),Fi.width=t.width,Fi.height=t.height;const n=Fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Th=0;class Wl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Is(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gr(s[o].image)):r.push(Gr(s[o]))}else r=Gr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ah=0;class He extends ls{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Ti,s=Ti,r=wn,o=Ai,a=xn,c=Kn,l=He.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Is(),this.name="",this.source=new Wl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vo:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vo:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Pl;He.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],m=c[8],p=c[1],f=c[5],g=c[9],_=c[2],d=c[6],h=c[10];if(Math.abs(u-p)<.01&&Math.abs(m-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+p)<.1&&Math.abs(m+_)<.1&&Math.abs(g+d)<.1&&Math.abs(l+f+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,v=(f+1)/2,D=(h+1)/2,R=(u+p)/4,w=(m+_)/4,A=(g+d)/4;return b>v&&b>D?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=R/n,r=w/n):v>D?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=A/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=w/r,s=A/r),this.set(n,s,r,e),this}let y=Math.sqrt((d-g)*(d-g)+(m-_)*(m-_)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(m-_)/y,this.z=(p-u)/y,this.w=Math.acos((l+f+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rh extends ls{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Rh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xl extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ch extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Us{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],m=n[s+3];const p=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=m;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(m!==_||c!==p||l!==f||u!==g){let d=1-a;const h=c*p+l*f+u*g+m*_,y=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const D=Math.sqrt(b),R=Math.atan2(D,h*y);d=Math.sin(d*R)/D,a=Math.sin(a*R)/D}const v=a*y;if(c=c*d+p*v,l=l*d+f*v,u=u*d+g*v,m=m*d+_*v,d===1-a){const D=1/Math.sqrt(c*c+l*l+u*u+m*m);c*=D,l*=D,u*=D,m*=D}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],m=r[o],p=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*m+c*f-l*p,t[e+1]=c*g+u*p+l*m-a*f,t[e+2]=l*g+u*f+a*p-c*m,t[e+3]=u*g-a*m-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),m=a(r/2),p=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=p*u*m+l*f*g,this._y=l*f*m-p*u*g,this._z=l*u*g+p*f*m,this._w=l*u*m-p*f*g;break;case"YXZ":this._x=p*u*m+l*f*g,this._y=l*f*m-p*u*g,this._z=l*u*g-p*f*m,this._w=l*u*m+p*f*g;break;case"ZXY":this._x=p*u*m-l*f*g,this._y=l*f*m+p*u*g,this._z=l*u*g+p*f*m,this._w=l*u*m-p*f*g;break;case"ZYX":this._x=p*u*m-l*f*g,this._y=l*f*m+p*u*g,this._z=l*u*g-p*f*m,this._w=l*u*m+p*f*g;break;case"YZX":this._x=p*u*m+l*f*g,this._y=l*f*m+p*u*g,this._z=l*u*g-p*f*m,this._w=l*u*m-p*f*g;break;case"XZY":this._x=p*u*m-l*f*g,this._y=l*f*m-p*u*g,this._z=l*u*g+p*f*m,this._w=l*u*m+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],m=e[10],p=n+a+m;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>m){const f=2*Math.sqrt(1+n-a-m);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>m){const f=2*Math.sqrt(1+a-n-m);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+m-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),m=Math.sin((1-e)*u)/l,p=Math.sin(e*u)/l;return this._w=o*m+this._w*p,this._x=n*m+this._x*p,this._y=s*m+this._y*p,this._z=r*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),m=2*(r*n-o*e);return this.x=e+c*l+o*m-a*u,this.y=n+c*u+a*l-r*m,this.z=s+c*m+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wr.copy(this).projectOnVector(t),this.sub(Wr)}reflect(t){return this.sub(Wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new P,pc=new Us;class Ns{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(t.matrixWorld),this.union(zs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),ks.subVectors(this.max,gs),Oi.subVectors(t.a,gs),Bi.subVectors(t.b,gs),zi.subVectors(t.c,gs),jn.subVectors(Bi,Oi),Qn.subVectors(zi,Bi),pi.subVectors(Oi,zi);let e=[0,-jn.z,jn.y,0,-Qn.z,Qn.y,0,-pi.z,pi.y,jn.z,0,-jn.x,Qn.z,0,-Qn.x,pi.z,0,-pi.x,-jn.y,jn.x,0,-Qn.y,Qn.x,0,-pi.y,pi.x,0];return!Xr(e,Oi,Bi,zi,ks)||(e=[1,0,0,0,1,0,0,0,1],!Xr(e,Oi,Bi,zi,ks))?!1:(Hs.crossVectors(jn,Qn),e=[Hs.x,Hs.y,Hs.z],Xr(e,Oi,Bi,zi,ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new P,new P,new P,new P,new P,new P,new P,new P],dn=new P,zs=new Ns,Oi=new P,Bi=new P,zi=new P,jn=new P,Qn=new P,pi=new P,gs=new P,ks=new P,Hs=new P,mi=new P;function Xr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){mi.fromArray(i,r);const a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=t.dot(mi),l=e.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ph=new Ns,_s=new P,qr=new P;class Lr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ph.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(qr)),this.expandByPoint(_s.copy(t.center).sub(qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new P,Yr=new P,Vs=new P,ti=new P,$r=new P,Gs=new P,Kr=new P;class ql{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yr.copy(t).add(e).multiplyScalar(.5),Vs.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(Yr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Vs),a=ti.dot(this.direction),c=-ti.dot(Vs),l=ti.lengthSq(),u=Math.abs(1-o*o);let m,p,f,g;if(u>0)if(m=o*c-a,p=o*a-c,g=r*u,m>=0)if(p>=-g)if(p<=g){const _=1/u;m*=_,p*=_,f=m*(m+o*p+2*a)+p*(o*m+p+2*c)+l}else p=r,m=Math.max(0,-(o*p+a)),f=-m*m+p*(p+2*c)+l;else p=-r,m=Math.max(0,-(o*p+a)),f=-m*m+p*(p+2*c)+l;else p<=-g?(m=Math.max(0,-(-o*r+a)),p=m>0?-r:Math.min(Math.max(-r,-c),r),f=-m*m+p*(p+2*c)+l):p<=g?(m=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+l):(m=Math.max(0,-(o*r+a)),p=m>0?r:Math.min(Math.max(-r,-c),r),f=-m*m+p*(p+2*c)+l);else p=o>0?-r:r,m=Math.max(0,-(o*p+a)),f=-m*m+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Yr).addScaledVector(Vs,p),f}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),u>=0?(r=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),m>=0?(a=(t.min.z-p.z)*m,c=(t.max.z-p.z)*m):(a=(t.max.z-p.z)*m,c=(t.min.z-p.z)*m),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){$r.subVectors(e,t),Gs.subVectors(n,t),Kr.crossVectors($r,Gs);let o=this.direction.dot(Kr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,t);const c=a*this.direction.dot(Gs.crossVectors(ti,Gs));if(c<0)return null;const l=a*this.direction.dot($r.cross(ti));if(l<0||c+l>o)return null;const u=-a*ti.dot(Kr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,s,r,o,a,c,l,u,m,p,f,g,_,d){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,m,p,f,g,_,d)}set(t,e,n,s,r,o,a,c,l,u,m,p,f,g,_,d){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=m,h[14]=p,h[3]=f,h[7]=g,h[11]=_,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),o=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){const p=o*u,f=o*m,g=a*u,_=a*m;e[0]=c*u,e[4]=-c*m,e[8]=l,e[1]=f+g*l,e[5]=p-_*l,e[9]=-a*c,e[2]=_-p*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*u,f=c*m,g=l*u,_=l*m;e[0]=p+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*m,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*u,f=c*m,g=l*u,_=l*m;e[0]=p-_*a,e[4]=-o*m,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*u,f=o*m,g=a*u,_=a*m;e[0]=c*u,e[4]=g*l-f,e[8]=p*l+_,e[1]=c*m,e[5]=_*l+p,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-p*m,e[8]=g*m+f,e[1]=m,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*m+g,e[10]=p-_*m}else if(t.order==="XZY"){const p=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-m,e[8]=l*u,e[1]=p*m+_,e[5]=o*u,e[9]=f*m-g,e[2]=g*m-f,e[6]=a*u,e[10]=_*m+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dh,t,Lh)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),ei.crossVectors(n,$e),ei.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),ei.crossVectors(n,$e)),ei.normalize(),Ws.crossVectors($e,ei),s[0]=ei.x,s[4]=Ws.x,s[8]=$e.x,s[1]=ei.y,s[5]=Ws.y,s[9]=$e.y,s[2]=ei.z,s[6]=Ws.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],m=n[5],p=n[9],f=n[13],g=n[2],_=n[6],d=n[10],h=n[14],y=n[3],b=n[7],v=n[11],D=n[15],R=s[0],w=s[4],A=s[8],S=s[12],x=s[1],C=s[5],L=s[9],U=s[13],W=s[2],$=s[6],X=s[10],j=s[14],G=s[3],ot=s[7],pt=s[11],At=s[15];return r[0]=o*R+a*x+c*W+l*G,r[4]=o*w+a*C+c*$+l*ot,r[8]=o*A+a*L+c*X+l*pt,r[12]=o*S+a*U+c*j+l*At,r[1]=u*R+m*x+p*W+f*G,r[5]=u*w+m*C+p*$+f*ot,r[9]=u*A+m*L+p*X+f*pt,r[13]=u*S+m*U+p*j+f*At,r[2]=g*R+_*x+d*W+h*G,r[6]=g*w+_*C+d*$+h*ot,r[10]=g*A+_*L+d*X+h*pt,r[14]=g*S+_*U+d*j+h*At,r[3]=y*R+b*x+v*W+D*G,r[7]=y*w+b*C+v*$+D*ot,r[11]=y*A+b*L+v*X+D*pt,r[15]=y*S+b*U+v*j+D*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],m=t[6],p=t[10],f=t[14],g=t[3],_=t[7],d=t[11],h=t[15];return g*(+r*c*m-s*l*m-r*a*p+n*l*p+s*a*f-n*c*f)+_*(+e*c*f-e*l*p+r*o*p-s*o*f+s*l*u-r*c*u)+d*(+e*l*m-e*a*f-r*o*m+n*o*f+r*a*u-n*l*u)+h*(-s*a*u-e*c*m+e*a*p+s*o*m-n*o*p+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],m=t[9],p=t[10],f=t[11],g=t[12],_=t[13],d=t[14],h=t[15],y=m*d*l-_*p*l+_*c*f-a*d*f-m*c*h+a*p*h,b=g*p*l-u*d*l-g*c*f+o*d*f+u*c*h-o*p*h,v=u*_*l-g*m*l+g*a*f-o*_*f-u*a*h+o*m*h,D=g*m*c-u*_*c-g*a*p+o*_*p+u*a*d-o*m*d,R=e*y+n*b+s*v+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=y*w,t[1]=(_*p*r-m*d*r-_*s*f+n*d*f+m*s*h-n*p*h)*w,t[2]=(a*d*r-_*c*r+_*s*l-n*d*l-a*s*h+n*c*h)*w,t[3]=(m*c*r-a*p*r-m*s*l+n*p*l+a*s*f-n*c*f)*w,t[4]=b*w,t[5]=(u*d*r-g*p*r+g*s*f-e*d*f-u*s*h+e*p*h)*w,t[6]=(g*c*r-o*d*r-g*s*l+e*d*l+o*s*h-e*c*h)*w,t[7]=(o*p*r-u*c*r+u*s*l-e*p*l-o*s*f+e*c*f)*w,t[8]=v*w,t[9]=(g*m*r-u*_*r-g*n*f+e*_*f+u*n*h-e*m*h)*w,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*h+e*a*h)*w,t[11]=(u*a*r-o*m*r-u*n*l+e*m*l+o*n*f-e*a*f)*w,t[12]=D*w,t[13]=(u*_*s-g*m*s+g*n*p-e*_*p-u*n*d+e*m*d)*w,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*d-e*a*d)*w,t[15]=(o*m*s-u*a*s+u*n*c-e*m*c-o*n*p+e*a*p)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,m=a+a,p=r*l,f=r*u,g=r*m,_=o*u,d=o*m,h=a*m,y=c*l,b=c*u,v=c*m,D=n.x,R=n.y,w=n.z;return s[0]=(1-(_+h))*D,s[1]=(f+v)*D,s[2]=(g-b)*D,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(p+h))*R,s[6]=(d+y)*R,s[7]=0,s[8]=(g+b)*w,s[9]=(d-y)*w,s[10]=(1-(p+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),a=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);const l=1/r,u=1/o,m=1/a;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=m,fn.elements[9]*=m,fn.elements[10]*=m,e.setFromRotationMatrix(fn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Xn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),m=(e+t)/(e-t),p=(n+s)/(n-s);let f,g;if(a===Xn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===br)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Xn){const c=this.elements,l=1/(e-t),u=1/(n-s),m=1/(o-r),p=(e+t)*l,f=(n+s)*u;let g,_;if(a===Xn)g=(o+r)*m,_=-2*m;else if(a===br)g=r*m,_=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ki=new P,fn=new pe,Dh=new P(0,0,0),Lh=new P(1,1,1),ei=new P,Ws=new P,$e=new P,mc=new pe,gc=new Us;class Rn{constructor(t=0,e=0,n=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],m=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gc.setFromEuler(this),this.setFromQuaternion(gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Yl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ih=0;const _c=new P,Hi=new Us,Nn=new pe,Xs=new P,vs=new P,Uh=new P,Nh=new Us,vc=new P(1,0,0),xc=new P(0,1,0),Mc=new P(0,0,1),yc={type:"added"},Fh={type:"removed"},Vi={type:"childadded",child:null},Zr={type:"childremoved",child:null};class be extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new P,e=new Rn,n=new Us,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new kt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(vc,t)}rotateY(t){return this.rotateOnAxis(xc,t)}rotateZ(t){return this.rotateOnAxis(Mc,t)}translateOnAxis(t,e){return _c.copy(t).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vc,t)}translateY(t){return this.translateOnAxis(xc,t)}translateZ(t){return this.translateOnAxis(Mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xs.copy(t):Xs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(vs,Xs,this.up):Nn.lookAt(Xs,vs,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fh),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,Uh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Nh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const m=c[l];r(t.shapes,m)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),m=o(t.shapes),p=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new P(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new P,Fn=new P,Jr=new P,On=new P,Gi=new P,Wi=new P,Sc=new P,jr=new P,Qr=new P,to=new P,eo=new ve,no=new ve,io=new ve;class _n{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pn.subVectors(t,e),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pn.subVectors(s,e),Fn.subVectors(n,e),Jr.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(Fn),c=pn.dot(Jr),l=Fn.dot(Fn),u=Fn.dot(Jr),m=o*l-a*a;if(m===0)return r.set(0,0,0),null;const p=1/m,f=(l*c-a*u)*p,g=(o*u-a*c)*p;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,On.x),c.addScaledVector(o,On.y),c.addScaledVector(a,On.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return eo.setScalar(0),no.setScalar(0),io.setScalar(0),eo.fromBufferAttribute(t,e),no.fromBufferAttribute(t,n),io.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(eo,r.x),o.addScaledVector(no,r.y),o.addScaledVector(io,r.z),o}static isFrontFacing(t,e,n,s){return pn.subVectors(n,e),Fn.subVectors(t,e),pn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),pn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Gi.subVectors(s,n),Wi.subVectors(r,n),jr.subVectors(t,n);const c=Gi.dot(jr),l=Wi.dot(jr);if(c<=0&&l<=0)return e.copy(n);Qr.subVectors(t,s);const u=Gi.dot(Qr),m=Wi.dot(Qr);if(u>=0&&m<=u)return e.copy(s);const p=c*m-u*l;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Gi,o);to.subVectors(t,r);const f=Gi.dot(to),g=Wi.dot(to);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Wi,a);const d=u*g-f*m;if(d<=0&&m-u>=0&&f-g>=0)return Sc.subVectors(r,s),a=(m-u)/(m-u+(f-g)),e.copy(s).addScaledVector(Sc,a);const h=1/(d+_+p);return o=_*h,a=p*h,e.copy(n).addScaledVector(Gi,o).addScaledVector(Wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},qs={h:0,s:0,l:0};function so(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Mh(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=so(o,r,t+1/3),this.g=so(o,r,t),this.b=so(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=$l[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return Qt.fromWorkingColorSpace(Le.copy(this),t),Math.round(Te(Le.r*255,0,255))*65536+Math.round(Te(Le.g*255,0,255))*256+Math.round(Te(Le.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,s=Le.g,r=Le.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const m=o-a;switch(l=u<=.5?m/(o+a):m/(2-o-a),o){case n:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-n)/m+2;break;case r:c=(n-s)/m+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Ne){Qt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,s=Le.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(qs);const n=Hr(ni.h,qs.h,e),s=Hr(ni.s,qs.s,e),r=Hr(ni.l,qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new bt;bt.NAMES=$l;let Oh=0;class us extends ls{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Is(),this.name="",this.blending=Qi,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Do,this.blendDst=Lo,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Do&&(n.blendSrc=this.blendSrc),this.blendDst!==Lo&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class an extends us{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new P,Ys=new vt;class Tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oc,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),r=Ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oc&&(t.usage=this.usage),t}}class Kl extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Zl extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bh=0;const nn=new pe,ro=new be,Xi=new P,Ke=new Ns,xs=new Ns,Ee=new P;class qe extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gl(t)?Zl:Kl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(Ke.min,xs.min),Ke.expandByPoint(Ee),Ee.addVectors(Ke.max,xs.max),Ke.expandByPoint(Ee)):(Ke.expandByPoint(xs.min),Ke.expandByPoint(xs.max))}Ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ee.fromBufferAttribute(a,l),c&&(Xi.fromBufferAttribute(t,l),Ee.add(Xi)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new P,c[A]=new P;const l=new P,u=new P,m=new P,p=new vt,f=new vt,g=new vt,_=new P,d=new P;function h(A,S,x){l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),m.fromBufferAttribute(n,x),p.fromBufferAttribute(r,A),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),u.sub(l),m.sub(l),f.sub(p),g.sub(p);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(m,-f.y).multiplyScalar(C),d.copy(m).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),a[A].add(_),a[S].add(_),a[x].add(_),c[A].add(d),c[S].add(d),c[x].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,S=y.length;A<S;++A){const x=y[A],C=x.start,L=x.count;for(let U=C,W=C+L;U<W;U+=3)h(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const b=new P,v=new P,D=new P,R=new P;function w(A){D.fromBufferAttribute(s,A),R.copy(D);const S=a[A];b.copy(S),b.sub(D.multiplyScalar(D.dot(S))).normalize(),v.crossVectors(R,S);const C=v.dot(c[A])<0?-1:1;o.setXYZW(A,b.x,b.y,b.z,C)}for(let A=0,S=y.length;A<S;++A){const x=y[A],C=x.start,L=x.count;for(let U=C,W=C+L;U<W;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,m=new P;if(t)for(let p=0,f=t.count;p<f;p+=3){const g=t.getX(p+0),_=t.getX(p+1),d=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,d),u.subVectors(o,r),m.subVectors(s,r),u.cross(m),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,r),m.subVectors(s,r),u.cross(m),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,m=a.normalized,p=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,d=c.length;_<d;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let h=0;h<u;h++)p[g++]=l[f++]}return new Tn(p,u,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,m=l.length;u<m;u++){const p=l[u],f=t(p,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let m=0,p=l.length;m<p;m++){const f=l[m];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],m=r[l];for(let p=0,f=m.length;p<f;p++)u.push(m[p].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const m=o[l];this.addGroup(m.start,m.count,m.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ec=new pe,gi=new ql,$s=new Lr,bc=new P,Ks=new P,Zs=new P,Js=new P,oo=new P,js=new P,wc=new P,Qs=new P;class dt extends be{constructor(t=new qe,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){js.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],m=r[c];u!==0&&(oo.fromBufferAttribute(m,t),o?js.addScaledVector(oo,u):js.addScaledVector(oo.sub(e),u))}e.add(js)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!($s.containsPoint(gi.origin)===!1&&(gi.intersectSphere($s,bc)===null||gi.origin.distanceToSquared(bc)>(t.far-t.near)**2))&&(Ec.copy(r).invert(),gi.copy(t.ray).applyMatrix4(Ec),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const d=p[g],h=o[d.materialIndex],y=Math.max(d.start,f.start),b=Math.min(a.count,Math.min(d.start+d.count,f.start+f.count));for(let v=y,D=b;v<D;v+=3){const R=a.getX(v),w=a.getX(v+1),A=a.getX(v+2);s=tr(this,h,t,n,l,u,m,R,w,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let d=g,h=_;d<h;d+=3){const y=a.getX(d),b=a.getX(d+1),v=a.getX(d+2);s=tr(this,o,t,n,l,u,m,y,b,v),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const d=p[g],h=o[d.materialIndex],y=Math.max(d.start,f.start),b=Math.min(c.count,Math.min(d.start+d.count,f.start+f.count));for(let v=y,D=b;v<D;v+=3){const R=v,w=v+1,A=v+2;s=tr(this,h,t,n,l,u,m,R,w,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let d=g,h=_;d<h;d+=3){const y=d,b=d+1,v=d+2;s=tr(this,o,t,n,l,u,m,y,b,v),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function zh(i,t,e,n,s,r,o,a){let c;if(t.side===ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===hi,a),c===null)return null;Qs.copy(a),Qs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Qs);return l<e.near||l>e.far?null:{distance:l,point:Qs.clone(),object:i}}function tr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ks),i.getVertexPosition(c,Zs),i.getVertexPosition(l,Js);const u=zh(i,t,e,n,Ks,Zs,Js,wc);if(u){const m=new P;_n.getBarycoord(wc,Ks,Zs,Js,m),s&&(u.uv=_n.getInterpolatedAttribute(s,a,c,l,m,new vt)),r&&(u.uv1=_n.getInterpolatedAttribute(r,a,c,l,m,new vt)),o&&(u.normal=_n.getInterpolatedAttribute(o,a,c,l,m,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new P,materialIndex:0};_n.getNormal(Ks,Zs,Js,p.normal),u.face=p,u.barycoord=m}return u}class it extends qe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],m=[];let p=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(m,2));function g(_,d,h,y,b,v,D,R,w,A,S){const x=v/w,C=D/A,L=v/2,U=D/2,W=R/2,$=w+1,X=A+1;let j=0,G=0;const ot=new P;for(let pt=0;pt<X;pt++){const At=pt*C-U;for(let Xt=0;Xt<$;Xt++){const re=Xt*x-L;ot[_]=re*y,ot[d]=At*b,ot[h]=W,l.push(ot.x,ot.y,ot.z),ot[_]=0,ot[d]=0,ot[h]=R>0?1:-1,u.push(ot.x,ot.y,ot.z),m.push(Xt/w),m.push(1-pt/A),j+=1}}for(let pt=0;pt<A;pt++)for(let At=0;At<w;At++){const Xt=p+At+$*pt,re=p+At+$*(pt+1),Y=p+(At+1)+$*(pt+1),nt=p+(At+1)+$*pt;c.push(Xt,re,nt),c.push(re,Y,nt),G+=6}a.addGroup(f,G,S),f+=G,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new it(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function as(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=as(i[e]);for(const s in n)t[s]=n[s]}return t}function kh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Hh={clone:as,merge:Oe};var Vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends us{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vh,this.fragmentShader=Gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jl extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new P,Tc=new vt,Ac=new vt;class rn extends jl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,Tc,Ac),e.subVectors(Ac,Tc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qi=-90,Yi=1;class Wh extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(qi,Yi,t,e);s.layers=this.layers,this.add(s);const r=new rn(qi,Yi,t,e);r.layers=this.layers,this.add(r);const o=new rn(qi,Yi,t,e);o.layers=this.layers,this.add(o);const a=new rn(qi,Yi,t,e);a.layers=this.layers,this.add(a);const c=new rn(qi,Yi,t,e);c.layers=this.layers,this.add(c);const l=new rn(qi,Yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,m=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(m,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ql extends He{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xh extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ql(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new it(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:ui});r.uniforms.tEquirect.value=e;const o=new dt(s,r),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=wn),new Wh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ao=new P,qh=new P,Yh=new kt;class Si{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ao.subVectors(n,e).cross(qh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ao),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yh.getNormalMatrix(t),s=this.coplanarPoint(ao).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Lr,er=new P;class Na{constructor(t=new Si,e=new Si,n=new Si,s=new Si,r=new Si,o=new Si){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],m=s[6],p=s[7],f=s[8],g=s[9],_=s[10],d=s[11],h=s[12],y=s[13],b=s[14],v=s[15];if(n[0].setComponents(c-r,p-l,d-f,v-h).normalize(),n[1].setComponents(c+r,p+l,d+f,v+h).normalize(),n[2].setComponents(c+o,p+u,d+g,v+y).normalize(),n[3].setComponents(c-o,p-u,d-g,v-y).normalize(),n[4].setComponents(c-a,p-m,d-_,v-b).normalize(),e===Xn)n[5].setComponents(c+a,p+m,d+_,v+b).normalize();else if(e===br)n[5].setComponents(a,m,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(er.x=s.normal.x>0?t.max.x:t.min.x,er.y=s.normal.y>0?t.max.y:t.min.y,er.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $h(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,m=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,c,l){const u=c.array,m=c.updateRanges;if(i.bindBuffer(l,a),m.length===0)i.bufferSubData(l,0,u);else{m.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<m.length;f++){const g=m[p],_=m[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,m[p]=_)}m.length=p+1;for(let f=0,g=m.length;f<g;f++){const _=m[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ln extends qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,m=t/a,p=e/c,f=[],g=[],_=[],d=[];for(let h=0;h<u;h++){const y=h*p-o;for(let b=0;b<l;b++){const v=b*m-r;g.push(v,-y,0),_.push(0,0,1),d.push(b/a),d.push(1-h/c)}}for(let h=0;h<c;h++)for(let y=0;y<a;y++){const b=y+l*h,v=y+l*(h+1),D=y+1+l*(h+1),R=y+1+l*h;f.push(b,v,R),f.push(v,D,R)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ed=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ad=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ld=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Md=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$d=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,If=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Uf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ff=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,np=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ip=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_p=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ap=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Kh,alphahash_pars_fragment:Zh,alphamap_fragment:Jh,alphamap_pars_fragment:jh,alphatest_fragment:Qh,alphatest_pars_fragment:td,aomap_fragment:ed,aomap_pars_fragment:nd,batching_pars_vertex:id,batching_vertex:sd,begin_vertex:rd,beginnormal_vertex:od,bsdfs:ad,iridescence_fragment:cd,bumpmap_pars_fragment:ld,clipping_planes_fragment:ud,clipping_planes_pars_fragment:hd,clipping_planes_pars_vertex:dd,clipping_planes_vertex:fd,color_fragment:pd,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:_d,common:vd,cube_uv_reflection_fragment:xd,defaultnormal_vertex:Md,displacementmap_pars_vertex:yd,displacementmap_vertex:Sd,emissivemap_fragment:Ed,emissivemap_pars_fragment:bd,colorspace_fragment:wd,colorspace_pars_fragment:Td,envmap_fragment:Ad,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Cd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Hd,envmap_vertex:Dd,fog_vertex:Ld,fog_pars_vertex:Id,fog_fragment:Ud,fog_pars_fragment:Nd,gradientmap_pars_fragment:Fd,lightmap_pars_fragment:Od,lights_lambert_fragment:Bd,lights_lambert_pars_fragment:zd,lights_pars_begin:kd,lights_toon_fragment:Vd,lights_toon_pars_fragment:Gd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Xd,lights_physical_fragment:qd,lights_physical_pars_fragment:Yd,lights_fragment_begin:$d,lights_fragment_maps:Kd,lights_fragment_end:Zd,logdepthbuf_fragment:Jd,logdepthbuf_pars_fragment:jd,logdepthbuf_pars_vertex:Qd,logdepthbuf_vertex:tf,map_fragment:ef,map_pars_fragment:nf,map_particle_fragment:sf,map_particle_pars_fragment:rf,metalnessmap_fragment:of,metalnessmap_pars_fragment:af,morphinstance_vertex:cf,morphcolor_vertex:lf,morphnormal_vertex:uf,morphtarget_pars_vertex:hf,morphtarget_vertex:df,normal_fragment_begin:ff,normal_fragment_maps:pf,normal_pars_fragment:mf,normal_pars_vertex:gf,normal_vertex:_f,normalmap_pars_fragment:vf,clearcoat_normal_fragment_begin:xf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:yf,iridescence_pars_fragment:Sf,opaque_fragment:Ef,packing:bf,premultiplied_alpha_fragment:wf,project_vertex:Tf,dithering_fragment:Af,dithering_pars_fragment:Rf,roughnessmap_fragment:Cf,roughnessmap_pars_fragment:Pf,shadowmap_pars_fragment:Df,shadowmap_pars_vertex:Lf,shadowmap_vertex:If,shadowmask_pars_fragment:Uf,skinbase_vertex:Nf,skinning_pars_vertex:Ff,skinning_vertex:Of,skinnormal_vertex:Bf,specularmap_fragment:zf,specularmap_pars_fragment:kf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Vf,transmission_fragment:Gf,transmission_pars_fragment:Wf,uv_pars_fragment:Xf,uv_pars_vertex:qf,uv_vertex:Yf,worldpos_vertex:$f,background_vert:Kf,background_frag:Zf,backgroundCube_vert:Jf,backgroundCube_frag:jf,cube_vert:Qf,cube_frag:tp,depth_vert:ep,depth_frag:np,distanceRGBA_vert:ip,distanceRGBA_frag:sp,equirect_vert:rp,equirect_frag:op,linedashed_vert:ap,linedashed_frag:cp,meshbasic_vert:lp,meshbasic_frag:up,meshlambert_vert:hp,meshlambert_frag:dp,meshmatcap_vert:fp,meshmatcap_frag:pp,meshnormal_vert:mp,meshnormal_frag:gp,meshphong_vert:_p,meshphong_frag:vp,meshphysical_vert:xp,meshphysical_frag:Mp,meshtoon_vert:yp,meshtoon_frag:Sp,points_vert:Ep,points_frag:bp,shadow_vert:wp,shadow_frag:Tp,sprite_vert:Ap,sprite_frag:Rp},st={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},bn={basic:{uniforms:Oe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Oe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new bt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Oe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Oe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Oe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new bt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Oe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Oe([st.points,st.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Oe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Oe([st.common,st.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Oe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Oe([st.sprite,st.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Oe([st.common,st.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Oe([st.lights,st.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};bn.physical={uniforms:Oe([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const nr={r:0,b:0,g:0},vi=new Rn,Cp=new pe;function Pp(i,t,e,n,s,r,o){const a=new bt(0);let c=r===!0?0:1,l,u,m=null,p=0,f=null;function g(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?e:t).get(b)),b}function _(y){let b=!1;const v=g(y);v===null?h(a,c):v&&v.isColor&&(h(v,1),b=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(y,b){const v=g(b);v&&(v.isCubeTexture||v.mapping===Pr)?(u===void 0&&(u=new dt(new it(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:as(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),vi.copy(b.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(vi)),u.material.toneMapped=Qt.getTransfer(v.colorSpace)!==se,(m!==v||p!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,m=v,p=v.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new dt(new ln(2,2),new Cn({name:"BackgroundMaterial",uniforms:as(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(v.colorSpace)!==se,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(m!==v||p!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,m=v,p=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function h(y,b){y.getRGB(nr,Jl(i)),n.buffers.color.setClear(nr.r,nr.g,nr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),c=b,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,h(a,c)},render:_,addToRenderList:d}}function Dp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(x,C,L,U,W){let $=!1;const X=m(U,L,C);r!==X&&(r=X,l(r.object)),$=f(x,U,L,W),$&&g(x,U,L,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(x,C,L,U),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function m(x,C,L){const U=L.wireframe===!0;let W=n[x.id];W===void 0&&(W={},n[x.id]=W);let $=W[C.id];$===void 0&&($={},W[C.id]=$);let X=$[U];return X===void 0&&(X=p(c()),$[U]=X),X}function p(x){const C=[],L=[],U=[];for(let W=0;W<e;W++)C[W]=0,L[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:U,object:x,attributes:{},index:null}}function f(x,C,L,U){const W=r.attributes,$=C.attributes;let X=0;const j=L.getAttributes();for(const G in j)if(j[G].location>=0){const pt=W[G];let At=$[G];if(At===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(At=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(At=x.instanceColor)),pt===void 0||pt.attribute!==At||At&&pt.data!==At.data)return!0;X++}return r.attributesNum!==X||r.index!==U}function g(x,C,L,U){const W={},$=C.attributes;let X=0;const j=L.getAttributes();for(const G in j)if(j[G].location>=0){let pt=$[G];pt===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor));const At={};At.attribute=pt,pt&&pt.data&&(At.data=pt.data),W[G]=At,X++}r.attributes=W,r.attributesNum=X,r.index=U}function _(){const x=r.newAttributes;for(let C=0,L=x.length;C<L;C++)x[C]=0}function d(x){h(x,0)}function h(x,C){const L=r.newAttributes,U=r.enabledAttributes,W=r.attributeDivisors;L[x]=1,U[x]===0&&(i.enableVertexAttribArray(x),U[x]=1),W[x]!==C&&(i.vertexAttribDivisor(x,C),W[x]=C)}function y(){const x=r.newAttributes,C=r.enabledAttributes;for(let L=0,U=C.length;L<U;L++)C[L]!==x[L]&&(i.disableVertexAttribArray(L),C[L]=0)}function b(x,C,L,U,W,$,X){X===!0?i.vertexAttribIPointer(x,C,L,W,$):i.vertexAttribPointer(x,C,L,U,W,$)}function v(x,C,L,U){_();const W=U.attributes,$=L.getAttributes(),X=C.defaultAttributeValues;for(const j in $){const G=$[j];if(G.location>=0){let ot=W[j];if(ot===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(ot=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(ot=x.instanceColor)),ot!==void 0){const pt=ot.normalized,At=ot.itemSize,Xt=t.get(ot);if(Xt===void 0)continue;const re=Xt.buffer,Y=Xt.type,nt=Xt.bytesPerElement,Et=Y===i.INT||Y===i.UNSIGNED_INT||ot.gpuType===Ca;if(ot.isInterleavedBufferAttribute){const at=ot.data,Lt=at.stride,Ot=ot.offset;if(at.isInstancedInterleavedBuffer){for(let qt=0;qt<G.locationSize;qt++)h(G.location+qt,at.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let qt=0;qt<G.locationSize;qt++)d(G.location+qt);i.bindBuffer(i.ARRAY_BUFFER,re);for(let qt=0;qt<G.locationSize;qt++)b(G.location+qt,At/G.locationSize,Y,pt,Lt*nt,(Ot+At/G.locationSize*qt)*nt,Et)}else{if(ot.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)h(G.location+at,ot.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let at=0;at<G.locationSize;at++)d(G.location+at);i.bindBuffer(i.ARRAY_BUFFER,re);for(let at=0;at<G.locationSize;at++)b(G.location+at,At/G.locationSize,Y,pt,At*nt,At/G.locationSize*at*nt,Et)}}else if(X!==void 0){const pt=X[j];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(G.location,pt);break;case 3:i.vertexAttrib3fv(G.location,pt);break;case 4:i.vertexAttrib4fv(G.location,pt);break;default:i.vertexAttrib1fv(G.location,pt)}}}}y()}function D(){A();for(const x in n){const C=n[x];for(const L in C){const U=C[L];for(const W in U)u(U[W].object),delete U[W];delete C[L]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const L in C){const U=C[L];for(const W in U)u(U[W].object),delete U[W];delete C[L]}delete n[x.id]}function w(x){for(const C in n){const L=n[C];if(L[x.id]===void 0)continue;const U=L[x.id];for(const W in U)u(U[W].object),delete U[W];delete L[x.id]}}function A(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:d,disableUnusedAttributes:y}}function Lp(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,m){m!==0&&(i.drawArraysInstanced(n,l,u,m),e.update(u,n,m))}function a(l,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,m);let f=0;for(let g=0;g<m;g++)f+=u[g];e.update(f,n,1)}function c(l,u,m,p){if(m===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,p,0,m);let g=0;for(let _=0;_<m;_++)g+=u[_]*p[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ip(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==xn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const A=w===Ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Kn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Wn&&!A)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const m=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:m,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:h,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:D,maxSamples:R}}function Up(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Si,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){const f=m.length!==0||p||n!==0||s;return s=p,n=m.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,p){e=u(m,p,0)},this.setState=function(m,p,f){const g=m.clippingPlanes,_=m.clipIntersection,d=m.clipShadows,h=i.get(m);if(!s||g===null||g.length===0||r&&!d)r?u(null):l();else{const y=r?0:n,b=y*4;let v=h.clippingState||null;c.value=v,v=u(g,p,b,f);for(let D=0;D!==b;++D)v[D]=e[D];h.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(m,p,f,g){const _=m!==null?m.length:0;let d=null;if(_!==0){if(d=c.value,g!==!0||d===null){const h=f+_*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(d===null||d.length<h)&&(d=new Float32Array(h));for(let b=0,v=f;b!==_;++b,v+=4)o.copy(m[b]).applyMatrix4(y,a),o.normal.toArray(d,v),d[v+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function Np(i){let t=new WeakMap;function e(o,a){return a===ko?o.mapping=is:a===Ho&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ko||a===Ho)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Xh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class eu extends jl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ji=4,Rc=[.125,.215,.35,.446,.526,.582],wi=20,co=new eu,Cc=new bt;let lo=null,uo=0,ho=0,fo=!1;const Ei=(1+Math.sqrt(5))/2,$i=1/Ei,Pc=[new P(-Ei,$i,0),new P(Ei,$i,0),new P(-$i,0,Ei),new P($i,0,Ei),new P(0,Ei,-$i),new P(0,Ei,$i),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){lo=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lo,uo,ho),this._renderer.xr.enabled=fo,t.scissorTest=!1,ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lo=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ls,format:xn,colorSpace:cs,depthBuffer:!1},s=Lc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fp(r)),this._blurMaterial=Op(r,t,e)}return s}_compileMaterial(t){const e=new dt(this._lodPlanes[0],t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,n,s){const a=new rn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,m=u.autoClear,p=u.toneMapping;u.getClearColor(Cc),u.toneMapping=Yn,u.autoClear=!1;const f=new an({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new dt(new it,f);let _=!1;const d=t.background;d?d.isColor&&(f.color.copy(d),t.background=null,_=!0):(f.color.copy(Cc),_=!0);for(let h=0;h<6;h++){const y=h%3;y===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):y===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const b=this._cubeSize;ir(s,y*b,h>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=m,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===is||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ir(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,co)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pc[(s-r-1)%Pc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,m=new dt(this._lodPlanes[s],l),p=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*wi-1),_=r/g,d=isFinite(r)?1+Math.floor(u*_):wi;d>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${wi}`);const h=[];let y=0;for(let w=0;w<wi;++w){const A=w/_,S=Math.exp(-A*A/2);h.push(S),w===0?y+=S:w<d&&(y+=2*S)}for(let w=0;w<h.length;w++)h[w]=h[w]/y;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:b}=this;p.dTheta.value=g,p.mipInt.value=b-n;const v=this._sizeLods[s],D=3*v*(s>b-Ji?s-b+Ji:0),R=4*(this._cubeSize-v);ir(e,D,R,3*v,2*v),c.setRenderTarget(e),c.render(m,co)}}function Fp(i){const t=[],e=[],n=[];let s=i;const r=i-Ji+1+Rc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ji?c=Rc[o-i+Ji-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,m=1+l,p=[u,u,m,u,m,m,u,u,m,m,u,m],f=6,g=6,_=3,d=2,h=1,y=new Float32Array(_*g*f),b=new Float32Array(d*g*f),v=new Float32Array(h*g*f);for(let R=0;R<f;R++){const w=R%3*2/3-1,A=R>2?0:-1,S=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];y.set(S,_*g*R),b.set(p,d*g*R);const x=[R,R,R,R,R,R];v.set(x,h*g*R)}const D=new qe;D.setAttribute("position",new Tn(y,_)),D.setAttribute("uv",new Tn(b,d)),D.setAttribute("faceIndex",new Tn(v,h)),t.push(D),s>Ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lc(i,t,e){const n=new Ci(i,t,e);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Op(i,t,e){const n=new Float32Array(wi),s=new P(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ic(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Uc(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Fa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ko||c===Ho,u=c===is||c===ss;if(l||u){let m=t.get(a);const p=m!==void 0?m.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Dc(i)),m=l?e.fromEquirectangular(a,m):e.fromCubemap(a,m),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),m.texture;if(m!==void 0)return m.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Dc(i)),m=l?e.fromEquirectangular(a):e.fromCubemap(a),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),a.addEventListener("dispose",r),m.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function zp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ss("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kp(i,t,e,n){const s={},r=new WeakMap;function o(m){const p=m.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let d=0,h=_.length;d<h;d++)t.remove(_[d])}p.removeEventListener("dispose",o),delete s[p.id];const f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(m,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(m){const p=m.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const f=m.morphAttributes;for(const g in f){const _=f[g];for(let d=0,h=_.length;d<h;d++)t.update(_[d],i.ARRAY_BUFFER)}}function l(m){const p=[],f=m.index,g=m.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let b=0,v=y.length;b<v;b+=3){const D=y[b+0],R=y[b+1],w=y[b+2];p.push(D,R,R,w,w,D)}}else if(g!==void 0){const y=g.array;_=g.version;for(let b=0,v=y.length/3-1;b<v;b+=3){const D=b+0,R=b+1,w=b+2;p.push(D,R,R,w,w,D)}}else return;const d=new(Gl(p)?Zl:Kl)(p,1);d.version=_;const h=r.get(m);h&&t.remove(h),r.set(m,d)}function u(m){const p=r.get(m);if(p){const f=m.index;f!==null&&p.version<f.version&&l(m)}else l(m);return r.get(m)}return{get:a,update:c,getWireframeAttribute:u}}function Hp(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,f){i.drawElements(n,f,r,p*o),e.update(f,n,1)}function l(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,p*o,g),e.update(f,n,g))}function u(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,g);let d=0;for(let h=0;h<g;h++)d+=f[h];e.update(d,n,1)}function m(p,f,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<p.length;h++)l(p[h]/o,f[h],_[h]);else{d.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,_,0,g);let h=0;for(let y=0;y<g;y++)h+=f[y]*_[y];e.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=m}function Vp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gp(i,t,e){const n=new WeakMap,s=new ve;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=u!==void 0?u.length:0;let p=n.get(a);if(p===void 0||p.count!==m){let x=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),d===!0&&(v=3);let D=a.attributes.position.count*v,R=1;D>t.maxTextureSize&&(R=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const w=new Float32Array(D*R*4*m),A=new Xl(w,D,R,m);A.type=Wn,A.needsUpdate=!0;const S=v*4;for(let C=0;C<m;C++){const L=h[C],U=y[C],W=b[C],$=D*R*4*C;for(let X=0;X<L.count;X++){const j=X*S;g===!0&&(s.fromBufferAttribute(L,X),w[$+j+0]=s.x,w[$+j+1]=s.y,w[$+j+2]=s.z,w[$+j+3]=0),_===!0&&(s.fromBufferAttribute(U,X),w[$+j+4]=s.x,w[$+j+5]=s.y,w[$+j+6]=s.z,w[$+j+7]=0),d===!0&&(s.fromBufferAttribute(W,X),w[$+j+8]=s.x,w[$+j+9]=s.y,w[$+j+10]=s.z,w[$+j+11]=W.itemSize===4?s.w:1)}}p={count:m,texture:A,size:new vt(D,R)},n.set(a,p),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let d=0;d<l.length;d++)g+=l[d];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Wp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,m=t.get(c,u);if(s.get(m)!==l&&(t.update(m),s.set(m,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return m}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class nu extends He{constructor(t,e,n,s,r,o,a,c,l,u=ts){if(u!==ts&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ts&&(n=Ri),n===void 0&&u===os&&(n=rs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Sn,this.minFilter=c!==void 0?c:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const iu=new He,Nc=new nu(1,1),su=new Xl,ru=new Ch,ou=new Ql,Fc=[],Oc=[],Bc=new Float32Array(16),zc=new Float32Array(9),kc=new Float32Array(4);function hs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Fc[s];if(r===void 0&&(r=new Float32Array(s),Fc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ir(i,t){let e=Oc[t];e===void 0&&(e=new Int32Array(t),Oc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function Yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function $p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function Kp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;kc.set(n),i.uniformMatrix2fv(this.addr,!1,kc),Se(e,n)}}function Zp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;zc.set(n),i.uniformMatrix3fv(this.addr,!1,zc),Se(e,n)}}function Jp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;Bc.set(n),i.uniformMatrix4fv(this.addr,!1,Bc),Se(e,n)}}function jp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nc.compareFunction=Vl,r=Nc):r=iu,e.setTexture2D(t||r,s)}function am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ru,s)}function cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ou,s)}function lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||su,s)}function um(i){switch(i){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return $p;case 35674:return Kp;case 35675:return Zp;case 35676:return Jp;case 5124:case 35670:return jp;case 35667:case 35671:return Qp;case 35668:case 35672:return tm;case 35669:case 35673:return em;case 5125:return nm;case 36294:return im;case 36295:return sm;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return lm}}function hm(i,t){i.uniform1fv(this.addr,t)}function dm(i,t){const e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function fm(i,t){const e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function pm(i,t){const e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function mm(i,t){const e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gm(i,t){const e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _m(i,t){const e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vm(i,t){i.uniform1iv(this.addr,t)}function xm(i,t){i.uniform2iv(this.addr,t)}function Mm(i,t){i.uniform3iv(this.addr,t)}function ym(i,t){i.uniform4iv(this.addr,t)}function Sm(i,t){i.uniform1uiv(this.addr,t)}function Em(i,t){i.uniform2uiv(this.addr,t)}function bm(i,t){i.uniform3uiv(this.addr,t)}function wm(i,t){i.uniform4uiv(this.addr,t)}function Tm(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||iu,r[o])}function Am(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ru,r[o])}function Rm(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ou,r[o])}function Cm(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||su,r[o])}function Pm(i){switch(i){case 5126:return hm;case 35664:return dm;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return _m;case 5124:case 35670:return vm;case 35667:case 35671:return xm;case 35668:case 35672:return Mm;case 35669:case 35673:return ym;case 5125:return Sm;case 36294:return Em;case 36295:return bm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Cm}}class Dm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=um(e.type)}}class Lm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pm(e.type)}}class Im{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const po=/(\w+)(\])?(\[|\.)?/g;function Hc(i,t){i.seq.push(t),i.map[t.id]=t}function Um(i,t,e){const n=i.name,s=n.length;for(po.lastIndex=0;;){const r=po.exec(n),o=po.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Hc(e,l===void 0?new Dm(a,i,t):new Lm(a,i,t));break}else{let m=e.map[a];m===void 0&&(m=new Im(a),Hc(e,m)),e=m}}}class Mr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Um(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Vc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Nm=37297;let Fm=0;function Om(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Gc=new kt;function Bm(i){Qt._getMatrix(Gc,Qt.workingColorSpace,i);const t=`mat3( ${Gc.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Dr:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Wc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Om(i.getShaderSource(t),o)}else return s}function zm(i,t){const e=Bm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function km(i,t){let e;switch(t){case nh:e="Linear";break;case ih:e="Reinhard";break;case sh:e="Cineon";break;case rh:e="ACESFilmic";break;case ah:e="AgX";break;case ch:e="Neutral";break;case oh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const sr=new P;function Hm(){Qt.getLuminanceCoefficients(sr);const i=sr.x.toFixed(4),t=sr.y.toFixed(4),e=sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function Gm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Es(i){return i!==""}function Xc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(i){return i.replace(Xm,Ym)}const qm=new Map;function Ym(i,t){let e=Vt[t];if(e===void 0){const n=qm.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _a(e)}const $m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(i){return i.replace($m,Km)}function Km(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $c(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Jm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case Pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function Qm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ra:t="ENVMAP_BLENDING_MULTIPLY";break;case th:t="ENVMAP_BLENDING_MIX";break;case eh:t="ENVMAP_BLENDING_ADD";break}return t}function t0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function e0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Zm(e),l=Jm(e),u=jm(e),m=Qm(e),p=t0(e),f=Vm(e),g=Gm(r),_=s.createProgram();let d,h,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),d.length>0&&(d+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),h.length>0&&(h+=`
`)):(d=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),h=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?km("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,zm("linearToOutputTexel",e.outputColorSpace),Hm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),o=_a(o),o=Xc(o,e),o=qc(o,e),a=_a(a),a=Xc(a,e),a=qc(a,e),o=Yc(o),a=Yc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,h=["#define varying in",e.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=y+d+o,v=y+h+a,D=Vc(s,s.VERTEX_SHADER,b),R=Vc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,D),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(D).trim(),W=s.getShaderInfoLog(R).trim();let $=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,R);else{const j=Wc(s,D,"vertex"),G=Wc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+j+`
`+G)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(U===""||W==="")&&(X=!1);X&&(C.diagnostics={runnable:$,programLog:L,vertexShader:{log:U,prefix:d},fragmentShader:{log:W,prefix:h}})}s.deleteShader(D),s.deleteShader(R),A=new Mr(s,_),S=Wm(s,_)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Nm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=R,this}let n0=0;class i0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new s0(t),e.set(t,n)),n}}class s0{constructor(t){this.id=n0++,this.code=t,this.usedTimes=0}}function r0(i,t,e,n,s,r,o){const a=new Yl,c=new i0,l=new Set,u=[],m=s.logarithmicDepthBuffer,p=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function d(S,x,C,L,U){const W=L.fog,$=U.geometry,X=S.isMeshStandardMaterial?L.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),G=j&&j.mapping===Pr?j.image.height:null,ot=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const pt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,At=pt!==void 0?pt.length:0;let Xt=0;$.morphAttributes.position!==void 0&&(Xt=1),$.morphAttributes.normal!==void 0&&(Xt=2),$.morphAttributes.color!==void 0&&(Xt=3);let re,Y,nt,Et;if(ot){const ie=bn[ot];re=ie.vertexShader,Y=ie.fragmentShader}else re=S.vertexShader,Y=S.fragmentShader,c.update(S),nt=c.getVertexShaderID(S),Et=c.getFragmentShaderID(S);const at=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Ot=U.isInstancedMesh===!0,qt=U.isBatchedMesh===!0,me=!!S.map,Jt=!!S.matcap,xe=!!j,O=!!S.aoMap,tn=!!S.lightMap,$t=!!S.bumpMap,Kt=!!S.normalMap,Ct=!!S.displacementMap,ce=!!S.emissiveMap,Rt=!!S.metalnessMap,T=!!S.roughnessMap,M=S.anisotropy>0,z=S.clearcoat>0,K=S.dispersion>0,J=S.iridescence>0,q=S.sheen>0,wt=S.transmission>0,ct=M&&!!S.anisotropyMap,mt=z&&!!S.clearcoatMap,jt=z&&!!S.clearcoatNormalMap,tt=z&&!!S.clearcoatRoughnessMap,gt=J&&!!S.iridescenceMap,Dt=J&&!!S.iridescenceThicknessMap,Ut=q&&!!S.sheenColorMap,_t=q&&!!S.sheenRoughnessMap,Zt=!!S.specularMap,Ht=!!S.specularColorMap,oe=!!S.specularIntensityMap,I=wt&&!!S.transmissionMap,rt=wt&&!!S.thicknessMap,V=!!S.gradientMap,Z=!!S.alphaMap,ht=S.alphaTest>0,lt=!!S.alphaHash,Bt=!!S.extensions;let ge=Yn;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ge=i.toneMapping);const Pe={shaderID:ot,shaderType:S.type,shaderName:S.name,vertexShader:re,fragmentShader:Y,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:Et,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:qt,batchingColor:qt&&U._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&U.instanceColor!==null,instancingMorph:Ot&&U.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:cs,alphaToCoverage:!!S.alphaToCoverage,map:me,matcap:Jt,envMap:xe,envMapMode:xe&&j.mapping,envMapCubeUVHeight:G,aoMap:O,lightMap:tn,bumpMap:$t,normalMap:Kt,displacementMap:p&&Ct,emissiveMap:ce,normalMapObjectSpace:Kt&&S.normalMapType===dh,normalMapTangentSpace:Kt&&S.normalMapType===Hl,metalnessMap:Rt,roughnessMap:T,anisotropy:M,anisotropyMap:ct,clearcoat:z,clearcoatMap:mt,clearcoatNormalMap:jt,clearcoatRoughnessMap:tt,dispersion:K,iridescence:J,iridescenceMap:gt,iridescenceThicknessMap:Dt,sheen:q,sheenColorMap:Ut,sheenRoughnessMap:_t,specularMap:Zt,specularColorMap:Ht,specularIntensityMap:oe,transmission:wt,transmissionMap:I,thicknessMap:rt,gradientMap:V,opaque:S.transparent===!1&&S.blending===Qi&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:ht,alphaHash:lt,combine:S.combine,mapUv:me&&_(S.map.channel),aoMapUv:O&&_(S.aoMap.channel),lightMapUv:tn&&_(S.lightMap.channel),bumpMapUv:$t&&_(S.bumpMap.channel),normalMapUv:Kt&&_(S.normalMap.channel),displacementMapUv:Ct&&_(S.displacementMap.channel),emissiveMapUv:ce&&_(S.emissiveMap.channel),metalnessMapUv:Rt&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:ct&&_(S.anisotropyMap.channel),clearcoatMapUv:mt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(S.sheenRoughnessMap.channel),specularMapUv:Zt&&_(S.specularMap.channel),specularColorMapUv:Ht&&_(S.specularColorMap.channel),specularIntensityMapUv:oe&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:rt&&_(S.thicknessMap.channel),alphaMapUv:Z&&_(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Kt||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&(me||Z),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Lt,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Xt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:me&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===se,decodeVideoTextureEmissive:ce&&S.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(S.emissiveMap.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Hn,flipSided:S.side===ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Bt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&S.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function h(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(y(x,S),b(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function y(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function b(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const x=g[S.type];let C;if(x){const L=bn[x];C=Hh.clone(L.uniforms)}else C=S.uniforms;return C}function D(S,x){let C;for(let L=0,U=u.length;L<U;L++){const W=u[L];if(W.cacheKey===x){C=W,++C.usedTimes;break}}return C===void 0&&(C=new e0(i,x,S,r),u.push(C)),C}function R(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function w(S){c.remove(S)}function A(){c.dispose()}return{getParameters:d,getProgramCacheKey:h,getUniforms:v,acquireProgram:D,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:A}}function o0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function a0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Kc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(m,p,f,g,_,d){let h=i[t];return h===void 0?(h={id:m.id,object:m,geometry:p,material:f,groupOrder:g,renderOrder:m.renderOrder,z:_,group:d},i[t]=h):(h.id=m.id,h.object=m,h.geometry=p,h.material=f,h.groupOrder=g,h.renderOrder=m.renderOrder,h.z=_,h.group=d),t++,h}function a(m,p,f,g,_,d){const h=o(m,p,f,g,_,d);f.transmission>0?n.push(h):f.transparent===!0?s.push(h):e.push(h)}function c(m,p,f,g,_,d){const h=o(m,p,f,g,_,d);f.transmission>0?n.unshift(h):f.transparent===!0?s.unshift(h):e.unshift(h)}function l(m,p){e.length>1&&e.sort(m||a0),n.length>1&&n.sort(p||Kc),s.length>1&&s.sort(p||Kc)}function u(){for(let m=t,p=i.length;m<p;m++){const f=i[m];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function c0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Zc,i.set(n,[o])):s>=r.length?(o=new Zc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function l0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new bt};break;case"SpotLight":e={position:new P,direction:new P,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function u0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let h0=0;function d0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function f0(i){const t=new l0,e=u0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new pe,o=new pe;function a(l){let u=0,m=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,d=0,h=0,y=0,b=0,v=0,D=0,R=0,w=0;l.sort(d0);for(let S=0,x=l.length;S<x;S++){const C=l[S],L=C.color,U=C.intensity,W=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=L.r*U,m+=L.g*U,p+=L.b*U;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],U);w++}else if(C.isDirectionalLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,G=e.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=C.shadow.matrix,y++}n.directional[f]=X,f++}else if(C.isSpotLight){const X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(L).multiplyScalar(U),X.distance=W,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[_]=X;const j=C.shadow;if(C.map&&(n.spotLightMap[D]=C.map,D++,j.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[_]=j.matrix,C.castShadow){const G=e.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=$,v++}_++}else if(C.isRectAreaLight){const X=t.get(C);X.color.copy(L).multiplyScalar(U),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[d]=X,d++}else if(C.isPointLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const j=C.shadow,G=e.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=X,g++}else if(C.isHemisphereLight){const X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(U),X.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[h]=X,h++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=p;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==d||A.hemiLength!==h||A.numDirectionalShadows!==y||A.numPointShadows!==b||A.numSpotShadows!==v||A.numSpotMaps!==D||A.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+D-R,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,A.directionalLength=f,A.pointLength=g,A.spotLength=_,A.rectAreaLength=d,A.hemiLength=h,A.numDirectionalShadows=y,A.numPointShadows=b,A.numSpotShadows=v,A.numSpotMaps=D,A.numLightProbes=w,n.version=h0++)}function c(l,u){let m=0,p=0,f=0,g=0,_=0;const d=u.matrixWorldInverse;for(let h=0,y=l.length;h<y;h++){const b=l[h];if(b.isDirectionalLight){const v=n.directional[m];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),m++}else if(b.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(d),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),f++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(d),o.identity(),r.copy(b.matrixWorld),r.premultiply(d),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const v=n.point[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(d),_++}}}return{setup:a,setupView:c,state:n}}function Jc(i){const t=new f0(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function p0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Jc(i),t.set(s,[a])):r>=o.length?(a=new Jc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class m0 extends us{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class g0 extends us{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function x0(i,t,e){let n=new Na;const s=new vt,r=new vt,o=new ve,a=new m0({depthPacking:hh}),c=new g0,l={},u=e.maxTextureSize,m={[hi]:ke,[ke]:hi,[Hn]:Hn},p=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:_0,fragmentShader:v0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new qe;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let h=this.type;this.render=function(R,w,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ui),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=h!==zn&&this.type===zn,W=h===zn&&this.type!==zn;for(let $=0,X=R.length;$<X;$++){const j=R[$],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ot=G.getFrameExtents();if(s.multiply(ot),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,G.mapSize.y=r.y)),G.map===null||U===!0||W===!0){const At=this.type!==zn?{minFilter:Sn,magFilter:Sn}:{};G.map!==null&&G.map.dispose(),G.map=new Ci(s.x,s.y,At),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const pt=G.getViewportCount();for(let At=0;At<pt;At++){const Xt=G.getViewport(At);o.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),L.viewport(o),G.updateMatrices(j,At),n=G.getFrustum(),v(w,A,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===zn&&y(G,A),G.needsUpdate=!1}h=this.type,d.needsUpdate=!1,i.setRenderTarget(S,x,C)};function y(R,w){const A=t.update(_);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ci(s.x,s.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,A,p,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,A,f,_,null)}function b(R,w,A,S){let x=null;const C=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)x=C;else if(x=A.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const L=x.uuid,U=w.uuid;let W=l[L];W===void 0&&(W={},l[L]=W);let $=W[U];$===void 0&&($=x.clone(),W[U]=$,w.addEventListener("dispose",D)),x=$}if(x.visible=w.visible,x.wireframe=w.wireframe,S===zn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:m[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=i.properties.get(x);L.light=A}return x}function v(R,w,A,S,x){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===zn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);const U=t.update(R),W=R.material;if(Array.isArray(W)){const $=U.groups;for(let X=0,j=$.length;X<j;X++){const G=$[X],ot=W[G.materialIndex];if(ot&&ot.visible){const pt=b(R,ot,S,x);R.onBeforeShadow(i,R,w,A,U,pt,G),i.renderBufferDirect(A,null,U,pt,R,G),R.onAfterShadow(i,R,w,A,U,pt,G)}}}else if(W.visible){const $=b(R,W,S,x);R.onBeforeShadow(i,R,w,A,U,$,null),i.renderBufferDirect(A,null,U,$,R,null),R.onAfterShadow(i,R,w,A,U,$,null)}}const L=R.children;for(let U=0,W=L.length;U<W;U++)v(L[U],w,A,S,x)}function D(R){R.target.removeEventListener("dispose",D);for(const A in l){const S=l[A],x=R.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const M0={[Io]:Uo,[No]:Bo,[Fo]:zo,[ns]:Oo,[Uo]:Io,[Bo]:No,[zo]:Fo,[Oo]:ns};function y0(i,t){function e(){let I=!1;const rt=new ve;let V=null;const Z=new ve(0,0,0,0);return{setMask:function(ht){V!==ht&&!I&&(i.colorMask(ht,ht,ht,ht),V=ht)},setLocked:function(ht){I=ht},setClear:function(ht,lt,Bt,ge,Pe){Pe===!0&&(ht*=ge,lt*=ge,Bt*=ge),rt.set(ht,lt,Bt,ge),Z.equals(rt)===!1&&(i.clearColor(ht,lt,Bt,ge),Z.copy(rt))},reset:function(){I=!1,V=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,rt=!1,V=null,Z=null,ht=null;return{setReversed:function(lt){if(rt!==lt){const Bt=t.get("EXT_clip_control");rt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const ge=ht;ht=null,this.setClear(ge)}rt=lt},getReversed:function(){return rt},setTest:function(lt){lt?at(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(lt){V!==lt&&!I&&(i.depthMask(lt),V=lt)},setFunc:function(lt){if(rt&&(lt=M0[lt]),Z!==lt){switch(lt){case Io:i.depthFunc(i.NEVER);break;case Uo:i.depthFunc(i.ALWAYS);break;case No:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case Oo:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=lt}},setLocked:function(lt){I=lt},setClear:function(lt){ht!==lt&&(rt&&(lt=1-lt),i.clearDepth(lt),ht=lt)},reset:function(){I=!1,V=null,Z=null,ht=null,rt=!1}}}function s(){let I=!1,rt=null,V=null,Z=null,ht=null,lt=null,Bt=null,ge=null,Pe=null;return{setTest:function(ie){I||(ie?at(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(ie){rt!==ie&&!I&&(i.stencilMask(ie),rt=ie)},setFunc:function(ie,un,Dn){(V!==ie||Z!==un||ht!==Dn)&&(i.stencilFunc(ie,un,Dn),V=ie,Z=un,ht=Dn)},setOp:function(ie,un,Dn){(lt!==ie||Bt!==un||ge!==Dn)&&(i.stencilOp(ie,un,Dn),lt=ie,Bt=un,ge=Dn)},setLocked:function(ie){I=ie},setClear:function(ie){Pe!==ie&&(i.clearStencil(ie),Pe=ie)},reset:function(){I=!1,rt=null,V=null,Z=null,ht=null,lt=null,Bt=null,ge=null,Pe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},m={},p=new WeakMap,f=[],g=null,_=!1,d=null,h=null,y=null,b=null,v=null,D=null,R=null,w=new bt(0,0,0),A=0,S=!1,x=null,C=null,L=null,U=null,W=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=j>=2);let ot=null,pt={};const At=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),re=new ve().fromArray(At),Y=new ve().fromArray(Xt);function nt(I,rt,V,Z){const ht=new Uint8Array(4),lt=i.createTexture();i.bindTexture(I,lt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<V;Bt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(rt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return lt}const Et={};Et[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(ns),$t(!1),Kt(ec),at(i.CULL_FACE),O(ui);function at(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Lt(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Ot(I,rt){return m[I]!==rt?(i.bindFramebuffer(I,rt),m[I]=rt,I===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=rt),I===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function qt(I,rt){let V=f,Z=!1;if(I){V=p.get(rt),V===void 0&&(V=[],p.set(rt,V));const ht=I.textures;if(V.length!==ht.length||V[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Bt=ht.length;lt<Bt;lt++)V[lt]=i.COLOR_ATTACHMENT0+lt;V.length=ht.length,Z=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Z=!0);Z&&i.drawBuffers(V)}function me(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Jt={[bi]:i.FUNC_ADD,[Ou]:i.FUNC_SUBTRACT,[Bu]:i.FUNC_REVERSE_SUBTRACT};Jt[zu]=i.MIN,Jt[ku]=i.MAX;const xe={[Hu]:i.ZERO,[Vu]:i.ONE,[Gu]:i.SRC_COLOR,[Do]:i.SRC_ALPHA,[Ku]:i.SRC_ALPHA_SATURATE,[Yu]:i.DST_COLOR,[Xu]:i.DST_ALPHA,[Wu]:i.ONE_MINUS_SRC_COLOR,[Lo]:i.ONE_MINUS_SRC_ALPHA,[$u]:i.ONE_MINUS_DST_COLOR,[qu]:i.ONE_MINUS_DST_ALPHA,[Zu]:i.CONSTANT_COLOR,[Ju]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[Qu]:i.ONE_MINUS_CONSTANT_ALPHA};function O(I,rt,V,Z,ht,lt,Bt,ge,Pe,ie){if(I===ui){_===!0&&(Lt(i.BLEND),_=!1);return}if(_===!1&&(at(i.BLEND),_=!0),I!==Fu){if(I!==d||ie!==S){if((h!==bi||v!==bi)&&(i.blendEquation(i.FUNC_ADD),h=bi,v=bi),ie)switch(I){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFunc(i.ONE,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,b=null,D=null,R=null,w.set(0,0,0),A=0,d=I,S=ie}return}ht=ht||rt,lt=lt||V,Bt=Bt||Z,(rt!==h||ht!==v)&&(i.blendEquationSeparate(Jt[rt],Jt[ht]),h=rt,v=ht),(V!==y||Z!==b||lt!==D||Bt!==R)&&(i.blendFuncSeparate(xe[V],xe[Z],xe[lt],xe[Bt]),y=V,b=Z,D=lt,R=Bt),(ge.equals(w)===!1||Pe!==A)&&(i.blendColor(ge.r,ge.g,ge.b,Pe),w.copy(ge),A=Pe),d=I,S=!1}function tn(I,rt){I.side===Hn?Lt(i.CULL_FACE):at(i.CULL_FACE);let V=I.side===ke;rt&&(V=!V),$t(V),I.blending===Qi&&I.transparent===!1?O(ui):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ce(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(I){x!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),x=I)}function Kt(I){I!==Iu?(at(i.CULL_FACE),I!==C&&(I===ec?i.cullFace(i.BACK):I===Uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),C=I}function Ct(I){I!==L&&(X&&i.lineWidth(I),L=I)}function ce(I,rt,V){I?(at(i.POLYGON_OFFSET_FILL),(U!==rt||W!==V)&&(i.polygonOffset(rt,V),U=rt,W=V)):Lt(i.POLYGON_OFFSET_FILL)}function Rt(I){I?at(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function T(I){I===void 0&&(I=i.TEXTURE0+$-1),ot!==I&&(i.activeTexture(I),ot=I)}function M(I,rt,V){V===void 0&&(ot===null?V=i.TEXTURE0+$-1:V=ot);let Z=pt[V];Z===void 0&&(Z={type:void 0,texture:void 0},pt[V]=Z),(Z.type!==I||Z.texture!==rt)&&(ot!==V&&(i.activeTexture(V),ot=V),i.bindTexture(I,rt||Et[I]),Z.type=I,Z.texture=rt)}function z(){const I=pt[ot];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(I){re.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),re.copy(I))}function _t(I){Y.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function Zt(I,rt){let V=l.get(rt);V===void 0&&(V=new WeakMap,l.set(rt,V));let Z=V.get(I);Z===void 0&&(Z=i.getUniformBlockIndex(rt,I.name),V.set(I,Z))}function Ht(I,rt){const Z=l.get(rt).get(I);c.get(rt)!==Z&&(i.uniformBlockBinding(rt,Z,I.__bindingPointIndex),c.set(rt,Z))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ot=null,pt={},m={},p=new WeakMap,f=[],g=null,_=!1,d=null,h=null,y=null,b=null,v=null,D=null,R=null,w=new bt(0,0,0),A=0,S=!1,x=null,C=null,L=null,U=null,W=null,re.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Lt,bindFramebuffer:Ot,drawBuffers:qt,useProgram:me,setBlending:O,setMaterial:tn,setFlipSided:$t,setCullFace:Kt,setLineWidth:Ct,setPolygonOffset:ce,setScissorTest:Rt,activeTexture:T,bindTexture:M,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:gt,texImage3D:Dt,updateUBOMapping:Zt,uniformBlockBinding:Ht,texStorage2D:jt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:wt,compressedTexSubImage2D:ct,compressedTexSubImage3D:mt,scissor:Ut,viewport:_t,reset:oe}}function jc(i,t,e,n){const s=S0(n);switch(e){case Ul:return i*t;case Fl:return i*t;case Ol:return i*t*2;case Bl:return i*t/s.components*s.byteLength;case La:return i*t/s.components*s.byteLength;case zl:return i*t*2/s.components*s.byteLength;case Ia:return i*t*2/s.components*s.byteLength;case Nl:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case Ua:return i*t*4/s.components*s.byteLength;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _r:case vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:case Yo:return Math.max(i,16)*Math.max(t,8)/4;case Wo:case qo:return Math.max(i,8)*Math.max(t,8)/2;case $o:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ta:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case aa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case la:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ua:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xr:case ha:case da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kl:case fa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pa:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function S0(i){switch(i){case Kn:case Dl:return{byteLength:1,components:1};case Cs:case Ll:case Ls:return{byteLength:2,components:1};case Pa:case Da:return{byteLength:2,components:4};case Ri:case Ca:case Wn:return{byteLength:4,components:1};case Il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function E0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,u=new WeakMap;let m;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):wr("canvas")}function _(T,M,z){let K=1;const J=Rt(T);if((J.width>z||J.height>z)&&(K=z/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(K*J.width),wt=Math.floor(K*J.height);m===void 0&&(m=g(q,wt));const ct=M?g(q,wt):m;return ct.width=q,ct.height=wt,ct.getContext("2d").drawImage(T,0,0,q,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+wt+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function d(T){return T.generateMipmaps}function h(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,M,z,K,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=M;if(M===i.RED&&(z===i.FLOAT&&(q=i.R32F),z===i.HALF_FLOAT&&(q=i.R16F),z===i.UNSIGNED_BYTE&&(q=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.R8UI),z===i.UNSIGNED_SHORT&&(q=i.R16UI),z===i.UNSIGNED_INT&&(q=i.R32UI),z===i.BYTE&&(q=i.R8I),z===i.SHORT&&(q=i.R16I),z===i.INT&&(q=i.R32I)),M===i.RG&&(z===i.FLOAT&&(q=i.RG32F),z===i.HALF_FLOAT&&(q=i.RG16F),z===i.UNSIGNED_BYTE&&(q=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RG8UI),z===i.UNSIGNED_SHORT&&(q=i.RG16UI),z===i.UNSIGNED_INT&&(q=i.RG32UI),z===i.BYTE&&(q=i.RG8I),z===i.SHORT&&(q=i.RG16I),z===i.INT&&(q=i.RG32I)),M===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(q=i.RGB16UI),z===i.UNSIGNED_INT&&(q=i.RGB32UI),z===i.BYTE&&(q=i.RGB8I),z===i.SHORT&&(q=i.RGB16I),z===i.INT&&(q=i.RGB32I)),M===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),z===i.UNSIGNED_INT&&(q=i.RGBA32UI),z===i.BYTE&&(q=i.RGBA8I),z===i.SHORT&&(q=i.RGBA16I),z===i.INT&&(q=i.RGBA32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),M===i.RGBA){const wt=J?Dr:Qt.getTransfer(K);z===i.FLOAT&&(q=i.RGBA32F),z===i.HALF_FLOAT&&(q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(q=wt===se?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function v(T,M){let z;return T?M===null||M===Ri||M===rs?z=i.DEPTH24_STENCIL8:M===Wn?z=i.DEPTH32F_STENCIL8:M===Cs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ri||M===rs?z=i.DEPTH_COMPONENT24:M===Wn?z=i.DEPTH_COMPONENT32F:M===Cs&&(z=i.DEPTH_COMPONENT16),z}function D(T,M){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==Sn&&T.minFilter!==wn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function R(T){const M=T.target;M.removeEventListener("dispose",R),A(M),M.isVideoTexture&&u.delete(M)}function w(T){const M=T.target;M.removeEventListener("dispose",w),x(M)}function A(T){const M=n.get(T);if(M.__webglInit===void 0)return;const z=T.source,K=p.get(z);if(K){const J=K[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(T),Object.keys(K).length===0&&p.delete(z)}n.remove(T)}function S(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const z=T.source,K=p.get(z);delete K[M.__cacheKey],o.memory.textures--}function x(T){const M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let J=0;J<M.__webglFramebuffer[K].length;J++)i.deleteFramebuffer(M.__webglFramebuffer[K][J]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=T.textures;for(let K=0,J=z.length;K<J;K++){const q=n.get(z[K]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(T)}let C=0;function L(){C=0}function U(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function W(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function $(T,M){const z=n.get(T);if(T.isVideoTexture&&Ct(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,T,M);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function X(T,M){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Y(z,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function j(T,M){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Y(z,T,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function G(T,M){const z=n.get(T);if(T.version>0&&z.__version!==T.version){nt(z,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const ot={[Vo]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Go]:i.MIRRORED_REPEAT},pt={[Sn]:i.NEAREST,[lh]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[wn]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},At={[fh]:i.NEVER,[xh]:i.ALWAYS,[ph]:i.LESS,[Vl]:i.LEQUAL,[mh]:i.EQUAL,[vh]:i.GEQUAL,[gh]:i.GREATER,[_h]:i.NOTEQUAL};function Xt(T,M){if(M.type===Wn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===wn||M.magFilter===zr||M.magFilter===Bs||M.magFilter===Ai||M.minFilter===wn||M.minFilter===zr||M.minFilter===Bs||M.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ot[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ot[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ot[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,pt[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,pt[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,At[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Sn||M.minFilter!==Bs&&M.minFilter!==Ai||M.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function re(T,M){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",R));const K=M.source;let J=p.get(K);J===void 0&&(J={},p.set(K,J));const q=W(M);if(q!==T.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[q].usedTimes++;const wt=J[T.__cacheKey];wt!==void 0&&(J[T.__cacheKey].usedTimes--,wt.usedTimes===0&&S(M)),T.__cacheKey=q,T.__webglTexture=J[q].texture}return z}function Y(T,M,z){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);const J=re(T,M),q=M.source;e.bindTexture(K,T.__webglTexture,i.TEXTURE0+z);const wt=n.get(q);if(q.version!==wt.__version||J===!0){e.activeTexture(i.TEXTURE0+z);const ct=Qt.getPrimaries(Qt.workingColorSpace),mt=M.colorSpace===ai?null:Qt.getPrimaries(M.colorSpace),jt=M.colorSpace===ai||ct===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let tt=_(M.image,!1,s.maxTextureSize);tt=ce(M,tt);const gt=r.convert(M.format,M.colorSpace),Dt=r.convert(M.type);let Ut=b(M.internalFormat,gt,Dt,M.colorSpace,M.isVideoTexture);Xt(K,M);let _t;const Zt=M.mipmaps,Ht=M.isVideoTexture!==!0,oe=wt.__version===void 0||J===!0,I=q.dataReady,rt=D(M,tt);if(M.isDepthTexture)Ut=v(M.format===os,M.type),oe&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Ut,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Ut,tt.width,tt.height,0,gt,Dt,null));else if(M.isDataTexture)if(Zt.length>0){Ht&&oe&&e.texStorage2D(i.TEXTURE_2D,rt,Ut,Zt[0].width,Zt[0].height);for(let V=0,Z=Zt.length;V<Z;V++)_t=Zt[V],Ht?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,_t.width,_t.height,gt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,V,Ut,_t.width,_t.height,0,gt,Dt,_t.data);M.generateMipmaps=!1}else Ht?(oe&&e.texStorage2D(i.TEXTURE_2D,rt,Ut,tt.width,tt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,gt,Dt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,tt.width,tt.height,0,gt,Dt,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Ut,Zt[0].width,Zt[0].height,tt.depth);for(let V=0,Z=Zt.length;V<Z;V++)if(_t=Zt[V],M.format!==xn)if(gt!==null)if(Ht){if(I)if(M.layerUpdates.size>0){const ht=jc(_t.width,_t.height,M.format,M.type);for(const lt of M.layerUpdates){const Bt=_t.data.subarray(lt*ht/_t.data.BYTES_PER_ELEMENT,(lt+1)*ht/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,lt,_t.width,_t.height,1,gt,Bt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,_t.width,_t.height,tt.depth,gt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Ut,_t.width,_t.height,tt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,_t.width,_t.height,tt.depth,gt,Dt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Ut,_t.width,_t.height,tt.depth,0,gt,Dt,_t.data)}else{Ht&&oe&&e.texStorage2D(i.TEXTURE_2D,rt,Ut,Zt[0].width,Zt[0].height);for(let V=0,Z=Zt.length;V<Z;V++)_t=Zt[V],M.format!==xn?gt!==null?Ht?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Ut,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,_t.width,_t.height,gt,Dt,_t.data):e.texImage2D(i.TEXTURE_2D,V,Ut,_t.width,_t.height,0,gt,Dt,_t.data)}else if(M.isDataArrayTexture)if(Ht){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Ut,tt.width,tt.height,tt.depth),I)if(M.layerUpdates.size>0){const V=jc(tt.width,tt.height,M.format,M.type);for(const Z of M.layerUpdates){const ht=tt.data.subarray(Z*V/tt.data.BYTES_PER_ELEMENT,(Z+1)*V/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,gt,Dt,ht)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,gt,Dt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,tt.width,tt.height,tt.depth,0,gt,Dt,tt.data);else if(M.isData3DTexture)Ht?(oe&&e.texStorage3D(i.TEXTURE_3D,rt,Ut,tt.width,tt.height,tt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,gt,Dt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,tt.width,tt.height,tt.depth,0,gt,Dt,tt.data);else if(M.isFramebufferTexture){if(oe)if(Ht)e.texStorage2D(i.TEXTURE_2D,rt,Ut,tt.width,tt.height);else{let V=tt.width,Z=tt.height;for(let ht=0;ht<rt;ht++)e.texImage2D(i.TEXTURE_2D,ht,Ut,V,Z,0,gt,Dt,null),V>>=1,Z>>=1}}else if(Zt.length>0){if(Ht&&oe){const V=Rt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,rt,Ut,V.width,V.height)}for(let V=0,Z=Zt.length;V<Z;V++)_t=Zt[V],Ht?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,gt,Dt,_t):e.texImage2D(i.TEXTURE_2D,V,Ut,gt,Dt,_t);M.generateMipmaps=!1}else if(Ht){if(oe){const V=Rt(tt);e.texStorage2D(i.TEXTURE_2D,rt,Ut,V.width,V.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Dt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Ut,gt,Dt,tt);d(M)&&h(K),wt.__version=q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function nt(T,M,z){if(M.image.length!==6)return;const K=re(T,M),J=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);const q=n.get(J);if(J.version!==q.__version||K===!0){e.activeTexture(i.TEXTURE0+z);const wt=Qt.getPrimaries(Qt.workingColorSpace),ct=M.colorSpace===ai?null:Qt.getPrimaries(M.colorSpace),mt=M.colorSpace===ai||wt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const jt=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,gt=[];for(let Z=0;Z<6;Z++)!jt&&!tt?gt[Z]=_(M.image[Z],!0,s.maxCubemapSize):gt[Z]=tt?M.image[Z].image:M.image[Z],gt[Z]=ce(M,gt[Z]);const Dt=gt[0],Ut=r.convert(M.format,M.colorSpace),_t=r.convert(M.type),Zt=b(M.internalFormat,Ut,_t,M.colorSpace),Ht=M.isVideoTexture!==!0,oe=q.__version===void 0||K===!0,I=J.dataReady;let rt=D(M,Dt);Xt(i.TEXTURE_CUBE_MAP,M);let V;if(jt){Ht&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Zt,Dt.width,Dt.height);for(let Z=0;Z<6;Z++){V=gt[Z].mipmaps;for(let ht=0;ht<V.length;ht++){const lt=V[ht];M.format!==xn?Ut!==null?Ht?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,lt.width,lt.height,Ut,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Zt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,lt.width,lt.height,Ut,_t,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Zt,lt.width,lt.height,0,Ut,_t,lt.data)}}}else{if(V=M.mipmaps,Ht&&oe){V.length>0&&rt++;const Z=Rt(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Zt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,gt[Z].width,gt[Z].height,Ut,_t,gt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Zt,gt[Z].width,gt[Z].height,0,Ut,_t,gt[Z].data);for(let ht=0;ht<V.length;ht++){const Bt=V[ht].image[Z].image;Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Bt.width,Bt.height,Ut,_t,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Zt,Bt.width,Bt.height,0,Ut,_t,Bt.data)}}else{Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ut,_t,gt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Zt,Ut,_t,gt[Z]);for(let ht=0;ht<V.length;ht++){const lt=V[ht];Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Ut,_t,lt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Zt,Ut,_t,lt.image[Z])}}}d(M)&&h(i.TEXTURE_CUBE_MAP),q.__version=J.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Et(T,M,z,K,J,q){const wt=r.convert(z.format,z.colorSpace),ct=r.convert(z.type),mt=b(z.internalFormat,wt,ct,z.colorSpace),jt=n.get(M),tt=n.get(z);if(tt.__renderTarget=M,!jt.__hasExternalTextures){const gt=Math.max(1,M.width>>q),Dt=Math.max(1,M.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,q,mt,gt,Dt,M.depth,0,wt,ct,null):e.texImage2D(J,q,mt,gt,Dt,0,wt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Kt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,J,tt.__webglTexture,0,$t(M)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,J,tt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(T,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){const K=M.depthTexture,J=K&&K.isDepthTexture?K.type:null,q=v(M.stencilBuffer,J),wt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=$t(M);Kt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,q,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,T)}else{const K=M.textures;for(let J=0;J<K.length;J++){const q=K[J],wt=r.convert(q.format,q.colorSpace),ct=r.convert(q.type),mt=b(q.internalFormat,wt,ct,q.colorSpace),jt=$t(M);z&&Kt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,mt,M.width,M.height):Kt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,mt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,mt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const J=K.__webglTexture,q=$t(M);if(M.depthTexture.format===ts)Kt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(M.depthTexture.format===os)Kt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ot(T){const M=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=K}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Lt(M.__webglFramebuffer,T)}else if(z){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),at(M.__webglDepthbuffer[K],T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),at(M.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(T,M,z){const K=n.get(T);M!==void 0&&Et(K.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ot(T)}function me(T){const M=T.texture,z=n.get(T),K=n.get(M);T.addEventListener("dispose",w);const J=T.textures,q=T.isWebGLCubeRenderTarget===!0,wt=J.length>1;if(wt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,o.memory.textures++),q){z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ct]=[];for(let mt=0;mt<M.mipmaps.length;mt++)z.__webglFramebuffer[ct][mt]=i.createFramebuffer()}else z.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)z.__webglFramebuffer[ct]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(wt)for(let ct=0,mt=J.length;ct<mt;ct++){const jt=n.get(J[ct]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Kt(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ct=0;ct<J.length;ct++){const mt=J[ct];z.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ct]);const jt=r.convert(mt.format,mt.colorSpace),tt=r.convert(mt.type),gt=b(mt.internalFormat,jt,tt,mt.colorSpace,T.isXRRenderTarget===!0),Dt=$t(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,gt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,z.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),at(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Xt(i.TEXTURE_CUBE_MAP,M);for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)Et(z.__webglFramebuffer[ct][mt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else Et(z.__webglFramebuffer[ct],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);d(M)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ct=0,mt=J.length;ct<mt;ct++){const jt=J[ct],tt=n.get(jt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Xt(i.TEXTURE_2D,jt),Et(z.__webglFramebuffer,T,jt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),d(jt)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,K.__webglTexture),Xt(ct,M),M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)Et(z.__webglFramebuffer[mt],T,M,i.COLOR_ATTACHMENT0,ct,mt);else Et(z.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,ct,0);d(M)&&h(ct),e.unbindTexture()}T.depthBuffer&&Ot(T)}function Jt(T){const M=T.textures;for(let z=0,K=M.length;z<K;z++){const J=M[z];if(d(J)){const q=y(T),wt=n.get(J).__webglTexture;e.bindTexture(q,wt),h(q),e.unbindTexture()}}}const xe=[],O=[];function tn(T){if(T.samples>0){if(Kt(T)===!1){const M=T.textures,z=T.width,K=T.height;let J=i.COLOR_BUFFER_BIT;const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(T),ct=M.length>1;if(ct)for(let mt=0;mt<M.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let mt=0;mt<M.length;mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[mt]);const jt=n.get(M[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,J,i.NEAREST),c===!0&&(xe.length=0,O.length=0,xe.push(i.COLOR_ATTACHMENT0+mt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(xe.push(q),O.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let mt=0;mt<M.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[mt]);const jt=n.get(M[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function $t(T){return Math.min(s.maxSamples,T.samples)}function Kt(T){const M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(T){const M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function ce(T,M){const z=T.colorSpace,K=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==cs&&z!==ai&&(Qt.getTransfer(z)===se?(K!==xn||J!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Rt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=qt,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Kt}function b0(i,t){function e(n,s=ai){let r;const o=Qt.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===Pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Il)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dl)return i.BYTE;if(n===Ll)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Ls)return i.HALF_FLOAT;if(n===Ul)return i.ALPHA;if(n===Nl)return i.RGB;if(n===xn)return i.RGBA;if(n===Fl)return i.LUMINANCE;if(n===Ol)return i.LUMINANCE_ALPHA;if(n===ts)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===Bl)return i.RED;if(n===La)return i.RED_INTEGER;if(n===zl)return i.RG;if(n===Ia)return i.RG_INTEGER;if(n===Ua)return i.RGBA_INTEGER;if(n===mr||n===gr||n===_r||n===vr)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===Yo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$o||n===Ko||n===Zo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$o||n===Ko)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jo||n===jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ua)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ta)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===na)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ia)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ra)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ca)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===la)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ua)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xr||n===ha||n===da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xr)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===fa||n===pa||n===ma)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class w0 extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ft extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T0={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,n),h=this._getHandJoint(l,_);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}const u=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],p=u.position.distanceTo(m.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const A0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class C0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:A0,fragmentShader:R0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dt(new ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P0 extends ls{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,m=null,p=null,f=null,g=null;const _=new C0,d=e.getContextAttributes();let h=null,y=null;const b=[],v=[],D=new vt;let R=null;const w=new rn;w.viewport=new ve;const A=new rn;A.viewport=new ve;const S=[w,A],x=new w0;let C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=b[Y];return nt===void 0&&(nt=new mo,b[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=b[Y];return nt===void 0&&(nt=new mo,b[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=b[Y];return nt===void 0&&(nt=new mo,b[Y]=nt),nt.getHandSpace()};function U(Y){const nt=v.indexOf(Y.inputSource);if(nt===-1)return;const Et=b[nt];Et!==void 0&&(Et.update(Y.inputSource,Y.frame,l||o),Et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",$);for(let Y=0;Y<b.length;Y++){const nt=v[Y];nt!==null&&(v[Y]=null,b[Y].disconnect(nt))}C=null,L=null,_.reset(),t.setRenderTarget(h),f=null,p=null,m=null,s=null,y=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return m},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",W),s.addEventListener("inputsourceschange",$),d.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const nt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ci(f.framebufferWidth,f.framebufferHeight,{format:xn,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let nt=null,Et=null,at=null;d.depth&&(at=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=d.stencil?os:ts,Et=d.stencil?rs:Ri);const Lt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};m=new XRWebGLBinding(s,e),p=m.createProjectionLayer(Lt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new Ci(p.textureWidth,p.textureHeight,{format:xn,type:Kn,depthTexture:new nu(p.textureWidth,p.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(Y){for(let nt=0;nt<Y.removed.length;nt++){const Et=Y.removed[nt],at=v.indexOf(Et);at>=0&&(v[at]=null,b[at].disconnect(Et))}for(let nt=0;nt<Y.added.length;nt++){const Et=Y.added[nt];let at=v.indexOf(Et);if(at===-1){for(let Ot=0;Ot<b.length;Ot++)if(Ot>=v.length){v.push(Et),at=Ot;break}else if(v[Ot]===null){v[Ot]=Et,at=Ot;break}if(at===-1)break}const Lt=b[at];Lt&&Lt.connect(Et)}}const X=new P,j=new P;function G(Y,nt,Et){X.setFromMatrixPosition(nt.matrixWorld),j.setFromMatrixPosition(Et.matrixWorld);const at=X.distanceTo(j),Lt=nt.projectionMatrix.elements,Ot=Et.projectionMatrix.elements,qt=Lt[14]/(Lt[10]-1),me=Lt[14]/(Lt[10]+1),Jt=(Lt[9]+1)/Lt[5],xe=(Lt[9]-1)/Lt[5],O=(Lt[8]-1)/Lt[0],tn=(Ot[8]+1)/Ot[0],$t=qt*O,Kt=qt*tn,Ct=at/(-O+tn),ce=Ct*-O;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ce),Y.translateZ(Ct),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Lt[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Rt=qt+Ct,T=me+Ct,M=$t-ce,z=Kt+(at-ce),K=Jt*me/T*Rt,J=xe*me/T*Rt;Y.projectionMatrix.makePerspective(M,z,K,J,Rt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ot(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,Et=Y.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),x.near=A.near=w.near=nt,x.far=A.far=w.far=Et,(C!==x.near||L!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,L=x.far),w.layers.mask=Y.layers.mask|2,A.layers.mask=Y.layers.mask|4,x.layers.mask=w.layers.mask|A.layers.mask;const at=Y.parent,Lt=x.cameras;ot(x,at);for(let Ot=0;Ot<Lt.length;Ot++)ot(Lt[Ot],at);Lt.length===2?G(x,w,A):x.projectionMatrix.copy(w.projectionMatrix),pt(Y,x,at)};function pt(Y,nt,Et){Et===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(Et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ga*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(Y){c=Y,p!==null&&(p.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let At=null;function Xt(Y,nt){if(u=nt.getViewerPose(l||o),g=nt,u!==null){const Et=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let at=!1;Et.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let Ot=0;Ot<Et.length;Ot++){const qt=Et[Ot];let me=null;if(f!==null)me=f.getViewport(qt);else{const xe=m.getViewSubImage(p,qt);me=xe.viewport,Ot===0&&(t.setRenderTargetTextures(y,xe.colorTexture,p.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(y))}let Jt=S[Ot];Jt===void 0&&(Jt=new rn,Jt.layers.enable(Ot),Jt.viewport=new ve,S[Ot]=Jt),Jt.matrix.fromArray(qt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(qt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(me.x,me.y,me.width,me.height),Ot===0&&(x.matrix.copy(Jt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(Jt)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Ot=m.getDepthInformation(Et[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(t,Ot,s.renderState)}}for(let Et=0;Et<b.length;Et++){const at=v[Et],Lt=b[Et];at!==null&&Lt!==void 0&&Lt.update(at,nt,l||o)}At&&At(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const re=new tu;re.setAnimationLoop(Xt),this.setAnimationLoop=function(Y){At=Y},this.dispose=function(){}}}const xi=new Rn,D0=new pe;function L0(i,t){function e(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function n(d,h){h.color.getRGB(d.fogColor.value,Jl(i)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function s(d,h,y,b,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(d,h):h.isMeshToonMaterial?(r(d,h),m(d,h)):h.isMeshPhongMaterial?(r(d,h),u(d,h)):h.isMeshStandardMaterial?(r(d,h),p(d,h),h.isMeshPhysicalMaterial&&f(d,h,v)):h.isMeshMatcapMaterial?(r(d,h),g(d,h)):h.isMeshDepthMaterial?r(d,h):h.isMeshDistanceMaterial?(r(d,h),_(d,h)):h.isMeshNormalMaterial?r(d,h):h.isLineBasicMaterial?(o(d,h),h.isLineDashedMaterial&&a(d,h)):h.isPointsMaterial?c(d,h,y,b):h.isSpriteMaterial?l(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,e(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===ke&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,e(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===ke&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,e(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,e(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);const y=t.get(h),b=y.envMap,v=y.envMapRotation;b&&(d.envMap.value=b,xi.copy(v),xi.x*=-1,xi.y*=-1,xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),d.envMapRotation.value.setFromMatrix4(D0.makeRotationFromEuler(xi)),d.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap&&(d.lightMap.value=h.lightMap,d.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,d.lightMapTransform)),h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,d.aoMapTransform))}function o(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform))}function a(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function c(d,h,y,b){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*y,d.scale.value=b*.5,h.map&&(d.map.value=h.map,e(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function l(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function u(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function m(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function p(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,d.roughnessMapTransform)),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function f(d,h,y){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ke&&d.clearcoatNormalScale.value.negate())),h.dispersion>0&&(d.dispersion.value=h.dispersion),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,h){h.matcap&&(d.matcap.value=h.matcap)}function _(d,h){const y=t.get(h).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function I0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const v=b.program;n.uniformBlockBinding(y,v)}function l(y,b){let v=s[y.id];v===void 0&&(g(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",d));const D=b.program;n.updateUBOMapping(y,D);const R=t.render.frame;r[y.id]!==R&&(p(y),r[y.id]=R)}function u(y){const b=m();y.__bindingPointIndex=b;const v=i.createBuffer(),D=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function m(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const b=s[y.id],v=y.uniforms,D=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,w=v.length;R<w;R++){const A=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,x=A.length;S<x;S++){const C=A[S];if(f(C,R,S,D)===!0){const L=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let $=0;$<U.length;$++){const X=U[$],j=_(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,L+W,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,v,D){const R=y.value,w=b+"_"+v;if(D[w]===void 0)return typeof R=="number"||typeof R=="boolean"?D[w]=R:D[w]=R.clone(),!0;{const A=D[w];if(typeof R=="number"||typeof R=="boolean"){if(A!==R)return D[w]=R,!0}else if(A.equals(R)===!1)return A.copy(R),!0}return!1}function g(y){const b=y.uniforms;let v=0;const D=16;for(let w=0,A=b.length;w<A;w++){const S=Array.isArray(b[w])?b[w]:[b[w]];for(let x=0,C=S.length;x<C;x++){const L=S[x],U=Array.isArray(L.value)?L.value:[L.value];for(let W=0,$=U.length;W<$;W++){const X=U[W],j=_(X),G=v%D,ot=G%j.boundary,pt=G+ot;v+=ot,pt!==0&&D-pt<j.storage&&(v+=D-pt),L.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=j.storage}}}const R=v%D;return R>0&&(v+=D-R),y.__size=v,y.__cache={},this}function _(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function d(y){const b=y.target;b.removeEventListener("dispose",d);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:h}}class U0{constructor(t={}){const{canvas:e=yh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let d=null,h=null;const y=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=Yn,this.toneMappingExposure=1;const v=this;let D=!1,R=0,w=0,A=null,S=-1,x=null;const C=new ve,L=new ve;let U=null;const W=new bt(0);let $=0,X=e.width,j=e.height,G=1,ot=null,pt=null;const At=new ve(0,0,X,j),Xt=new ve(0,0,X,j);let re=!1;const Y=new Na;let nt=!1,Et=!1;const at=new pe,Lt=new pe,Ot=new P,qt=new ve,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function xe(){return A===null?G:1}let O=n;function tn(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Aa}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),O===null){const N="webgl2";if(O=tn(N,E),O===null)throw tn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $t,Kt,Ct,ce,Rt,T,M,z,K,J,q,wt,ct,mt,jt,tt,gt,Dt,Ut,_t,Zt,Ht,oe,I;function rt(){$t=new zp(O),$t.init(),Ht=new b0(O,$t),Kt=new Ip(O,$t,t,Ht),Ct=new y0(O,$t),Kt.reverseDepthBuffer&&p&&Ct.buffers.depth.setReversed(!0),ce=new Vp(O),Rt=new o0,T=new E0(O,$t,Ct,Rt,Kt,Ht,ce),M=new Np(v),z=new Bp(v),K=new $h(O),oe=new Dp(O,K),J=new kp(O,K,ce,oe),q=new Wp(O,J,K,ce),Ut=new Gp(O,Kt,T),tt=new Up(Rt),wt=new r0(v,M,z,$t,Kt,oe,tt),ct=new L0(v,Rt),mt=new c0,jt=new p0($t),Dt=new Pp(v,M,z,Ct,q,f,c),gt=new x0(v,q,Kt),I=new I0(O,ce,Kt,Ct),_t=new Lp(O,$t,ce),Zt=new Hp(O,$t,ce),ce.programs=wt.programs,v.capabilities=Kt,v.extensions=$t,v.properties=Rt,v.renderLists=mt,v.shadowMap=gt,v.state=Ct,v.info=ce}rt();const V=new P0(v,O);this.xr=V,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=$t.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$t.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(X,j,!1))},this.getSize=function(E){return E.set(X,j)},this.setSize=function(E,N,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,j=N,e.width=Math.floor(E*G),e.height=Math.floor(N*G),k===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*G,j*G).floor()},this.setDrawingBufferSize=function(E,N,k){X=E,j=N,G=k,e.width=Math.floor(E*k),e.height=Math.floor(N*k),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(At)},this.setViewport=function(E,N,k,H){E.isVector4?At.set(E.x,E.y,E.z,E.w):At.set(E,N,k,H),Ct.viewport(C.copy(At).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(Xt)},this.setScissor=function(E,N,k,H){E.isVector4?Xt.set(E.x,E.y,E.z,E.w):Xt.set(E,N,k,H),Ct.scissor(L.copy(Xt).multiplyScalar(G).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(E){Ct.setScissorTest(re=E)},this.setOpaqueSort=function(E){ot=E},this.setTransparentSort=function(E){pt=E},this.getClearColor=function(E){return E.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(E=!0,N=!0,k=!0){let H=0;if(E){let F=!1;if(A!==null){const et=A.texture.format;F=et===Ua||et===Ia||et===La}if(F){const et=A.texture.type,ut=et===Kn||et===Ri||et===Cs||et===rs||et===Pa||et===Da,Mt=Dt.getClearColor(),yt=Dt.getClearAlpha(),Nt=Mt.r,zt=Mt.g,St=Mt.b;ut?(g[0]=Nt,g[1]=zt,g[2]=St,g[3]=yt,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Nt,_[1]=zt,_[2]=St,_[3]=yt,O.clearBufferiv(O.COLOR,0,_))}else H|=O.COLOR_BUFFER_BIT}N&&(H|=O.DEPTH_BUFFER_BIT),k&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),mt.dispose(),jt.dispose(),Rt.dispose(),M.dispose(),z.dispose(),q.dispose(),oe.dispose(),I.dispose(),wt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ya),V.removeEventListener("sessionend",$a),fi.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=ce.autoReset,N=gt.enabled,k=gt.autoUpdate,H=gt.needsUpdate,F=gt.type;rt(),ce.autoReset=E,gt.enabled=N,gt.autoUpdate=k,gt.needsUpdate=H,gt.type=F}function lt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Bt(E){const N=E.target;N.removeEventListener("dispose",Bt),ge(N)}function ge(E){Pe(E),Rt.remove(E)}function Pe(E){const N=Rt.get(E).programs;N!==void 0&&(N.forEach(function(k){wt.releaseProgram(k)}),E.isShaderMaterial&&wt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,k,H,F,et){N===null&&(N=me);const ut=F.isMesh&&F.matrixWorld.determinant()<0,Mt=Pu(E,N,k,H,F);Ct.setMaterial(H,ut);let yt=k.index,Nt=1;if(H.wireframe===!0){if(yt=J.getWireframeAttribute(k),yt===void 0)return;Nt=2}const zt=k.drawRange,St=k.attributes.position;let te=zt.start*Nt,ae=(zt.start+zt.count)*Nt;et!==null&&(te=Math.max(te,et.start*Nt),ae=Math.min(ae,(et.start+et.count)*Nt)),yt!==null?(te=Math.max(te,0),ae=Math.min(ae,yt.count)):St!=null&&(te=Math.max(te,0),ae=Math.min(ae,St.count));const le=ae-te;if(le<0||le===1/0)return;oe.setup(F,H,Mt,k,yt);let Ve,ee=_t;if(yt!==null&&(Ve=K.get(yt),ee=Zt,ee.setIndex(Ve)),F.isMesh)H.wireframe===!0?(Ct.setLineWidth(H.wireframeLinewidth*xe()),ee.setMode(O.LINES)):ee.setMode(O.TRIANGLES);else if(F.isLine){let Tt=H.linewidth;Tt===void 0&&(Tt=1),Ct.setLineWidth(Tt*xe()),F.isLineSegments?ee.setMode(O.LINES):F.isLineLoop?ee.setMode(O.LINE_LOOP):ee.setMode(O.LINE_STRIP)}else F.isPoints?ee.setMode(O.POINTS):F.isSprite&&ee.setMode(O.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ee.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))ee.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Tt=F._multiDrawStarts,Ln=F._multiDrawCounts,ne=F._multiDrawCount,hn=yt?K.get(yt).bytesPerElement:1,Ui=Rt.get(H).currentProgram.getUniforms();for(let Ye=0;Ye<ne;Ye++)Ui.setValue(O,"_gl_DrawID",Ye),ee.render(Tt[Ye]/hn,Ln[Ye])}else if(F.isInstancedMesh)ee.renderInstances(te,le,F.count);else if(k.isInstancedBufferGeometry){const Tt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ln=Math.min(k.instanceCount,Tt);ee.renderInstances(te,le,Ln)}else ee.render(te,le)};function ie(E,N,k){E.transparent===!0&&E.side===Hn&&E.forceSinglePass===!1?(E.side=ke,E.needsUpdate=!0,Os(E,N,k),E.side=hi,E.needsUpdate=!0,Os(E,N,k),E.side=Hn):Os(E,N,k)}this.compile=function(E,N,k=null){k===null&&(k=E),h=jt.get(k),h.init(N),b.push(h),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),E!==k&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const H=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const et=F.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const Mt=et[ut];ie(Mt,k,F),H.add(Mt)}else ie(et,k,F),H.add(et)}),b.pop(),h=null,H},this.compileAsync=function(E,N,k=null){const H=this.compile(E,N,k);return new Promise(F=>{function et(){if(H.forEach(function(ut){Rt.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){F(E);return}setTimeout(et,10)}$t.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let un=null;function Dn(E){un&&un(E)}function Ya(){fi.stop()}function $a(){fi.start()}const fi=new tu;fi.setAnimationLoop(Dn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(E){un=E,V.setAnimationLoop(E),E===null?fi.stop():fi.start()},V.addEventListener("sessionstart",Ya),V.addEventListener("sessionend",$a),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(N),N=V.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,A),h=jt.get(E,b.length),h.init(N),b.push(h),Lt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(Lt),Et=this.localClippingEnabled,nt=tt.init(this.clippingPlanes,Et),d=mt.get(E,y.length),d.init(),y.push(d),V.enabled===!0&&V.isPresenting===!0){const et=v.xr.getDepthSensingMesh();et!==null&&Br(et,N,-1/0,v.sortObjects)}Br(E,N,0,v.sortObjects),d.finish(),v.sortObjects===!0&&d.sort(ot,pt),Jt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Jt&&Dt.addToRenderList(d,E),this.info.render.frame++,nt===!0&&tt.beginShadows();const k=h.state.shadowsArray;gt.render(k,E,N),nt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=d.opaque,F=d.transmissive;if(h.setupLights(),N.isArrayCamera){const et=N.cameras;if(F.length>0)for(let ut=0,Mt=et.length;ut<Mt;ut++){const yt=et[ut];Za(H,F,E,yt)}Jt&&Dt.render(E);for(let ut=0,Mt=et.length;ut<Mt;ut++){const yt=et[ut];Ka(d,E,yt,yt.viewport)}}else F.length>0&&Za(H,F,E,N),Jt&&Dt.render(E),Ka(d,E,N);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,N),oe.resetDefaultState(),S=-1,x=null,b.pop(),b.length>0?(h=b[b.length-1],nt===!0&&tt.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,y.pop(),y.length>0?d=y[y.length-1]:d=null};function Br(E,N,k,H){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){H&&qt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Lt);const ut=q.update(E),Mt=E.material;Mt.visible&&d.push(E,ut,Mt,k,qt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){const ut=q.update(E),Mt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),qt.copy(E.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),qt.copy(ut.boundingSphere.center)),qt.applyMatrix4(E.matrixWorld).applyMatrix4(Lt)),Array.isArray(Mt)){const yt=ut.groups;for(let Nt=0,zt=yt.length;Nt<zt;Nt++){const St=yt[Nt],te=Mt[St.materialIndex];te&&te.visible&&d.push(E,ut,te,k,qt.z,St)}}else Mt.visible&&d.push(E,ut,Mt,k,qt.z,null)}}const et=E.children;for(let ut=0,Mt=et.length;ut<Mt;ut++)Br(et[ut],N,k,H)}function Ka(E,N,k,H){const F=E.opaque,et=E.transmissive,ut=E.transparent;h.setupLightsView(k),nt===!0&&tt.setGlobalState(v.clippingPlanes,k),H&&Ct.viewport(C.copy(H)),F.length>0&&Fs(F,N,k),et.length>0&&Fs(et,N,k),ut.length>0&&Fs(ut,N,k),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Za(E,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[H.id]===void 0&&(h.state.transmissionRenderTarget[H.id]=new Ci(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?Ls:Kn,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const et=h.state.transmissionRenderTarget[H.id],ut=H.viewport||C;et.setSize(ut.z,ut.w);const Mt=v.getRenderTarget();v.setRenderTarget(et),v.getClearColor(W),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),Jt&&Dt.render(k);const yt=v.toneMapping;v.toneMapping=Yn;const Nt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),h.setupLightsView(H),nt===!0&&tt.setGlobalState(v.clippingPlanes,H),Fs(E,k,H),T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et),$t.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let St=0,te=N.length;St<te;St++){const ae=N[St],le=ae.object,Ve=ae.geometry,ee=ae.material,Tt=ae.group;if(ee.side===Hn&&le.layers.test(H.layers)){const Ln=ee.side;ee.side=ke,ee.needsUpdate=!0,Ja(le,k,H,Ve,ee,Tt),ee.side=Ln,ee.needsUpdate=!0,zt=!0}}zt===!0&&(T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et))}v.setRenderTarget(Mt),v.setClearColor(W,$),Nt!==void 0&&(H.viewport=Nt),v.toneMapping=yt}function Fs(E,N,k){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,et=E.length;F<et;F++){const ut=E[F],Mt=ut.object,yt=ut.geometry,Nt=H===null?ut.material:H,zt=ut.group;Mt.layers.test(k.layers)&&Ja(Mt,N,k,yt,Nt,zt)}}function Ja(E,N,k,H,F,et){E.onBeforeRender(v,N,k,H,F,et),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,N,k,H,E,et),F.transparent===!0&&F.side===Hn&&F.forceSinglePass===!1?(F.side=ke,F.needsUpdate=!0,v.renderBufferDirect(k,N,H,F,E,et),F.side=hi,F.needsUpdate=!0,v.renderBufferDirect(k,N,H,F,E,et),F.side=Hn):v.renderBufferDirect(k,N,H,F,E,et),E.onAfterRender(v,N,k,H,F,et)}function Os(E,N,k){N.isScene!==!0&&(N=me);const H=Rt.get(E),F=h.state.lights,et=h.state.shadowsArray,ut=F.state.version,Mt=wt.getParameters(E,F.state,et,N,k),yt=wt.getProgramCacheKey(Mt);let Nt=H.programs;H.environment=E.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(E.isMeshStandardMaterial?z:M).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",Bt),Nt=new Map,H.programs=Nt);let zt=Nt.get(yt);if(zt!==void 0){if(H.currentProgram===zt&&H.lightsStateVersion===ut)return Qa(E,Mt),zt}else Mt.uniforms=wt.getUniforms(E),E.onBeforeCompile(Mt,v),zt=wt.acquireProgram(Mt,yt),Nt.set(yt,zt),H.uniforms=Mt.uniforms;const St=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(St.clippingPlanes=tt.uniform),Qa(E,Mt),H.needsLights=Lu(E),H.lightsStateVersion=ut,H.needsLights&&(St.ambientLightColor.value=F.state.ambient,St.lightProbe.value=F.state.probe,St.directionalLights.value=F.state.directional,St.directionalLightShadows.value=F.state.directionalShadow,St.spotLights.value=F.state.spot,St.spotLightShadows.value=F.state.spotShadow,St.rectAreaLights.value=F.state.rectArea,St.ltc_1.value=F.state.rectAreaLTC1,St.ltc_2.value=F.state.rectAreaLTC2,St.pointLights.value=F.state.point,St.pointLightShadows.value=F.state.pointShadow,St.hemisphereLights.value=F.state.hemi,St.directionalShadowMap.value=F.state.directionalShadowMap,St.directionalShadowMatrix.value=F.state.directionalShadowMatrix,St.spotShadowMap.value=F.state.spotShadowMap,St.spotLightMatrix.value=F.state.spotLightMatrix,St.spotLightMap.value=F.state.spotLightMap,St.pointShadowMap.value=F.state.pointShadowMap,St.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=zt,H.uniformsList=null,zt}function ja(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Mr.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Qa(E,N){const k=Rt.get(E);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Pu(E,N,k,H,F){N.isScene!==!0&&(N=me),T.resetTextureUnits();const et=N.fog,ut=H.isMeshStandardMaterial?N.environment:null,Mt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:cs,yt=(H.isMeshStandardMaterial?z:M).get(H.envMap||ut),Nt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,zt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),St=!!k.morphAttributes.position,te=!!k.morphAttributes.normal,ae=!!k.morphAttributes.color;let le=Yn;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(le=v.toneMapping);const Ve=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ee=Ve!==void 0?Ve.length:0,Tt=Rt.get(H),Ln=h.state.lights;if(nt===!0&&(Et===!0||E!==x)){const en=E===x&&H.id===S;tt.setState(H,E,en)}let ne=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Ln.state.version||Tt.outputColorSpace!==Mt||F.isBatchedMesh&&Tt.batching===!1||!F.isBatchedMesh&&Tt.batching===!0||F.isBatchedMesh&&Tt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Tt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Tt.instancing===!1||!F.isInstancedMesh&&Tt.instancing===!0||F.isSkinnedMesh&&Tt.skinning===!1||!F.isSkinnedMesh&&Tt.skinning===!0||F.isInstancedMesh&&Tt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Tt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Tt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Tt.instancingMorph===!1&&F.morphTexture!==null||Tt.envMap!==yt||H.fog===!0&&Tt.fog!==et||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==tt.numPlanes||Tt.numIntersection!==tt.numIntersection)||Tt.vertexAlphas!==Nt||Tt.vertexTangents!==zt||Tt.morphTargets!==St||Tt.morphNormals!==te||Tt.morphColors!==ae||Tt.toneMapping!==le||Tt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Tt.__version=H.version);let hn=Tt.currentProgram;ne===!0&&(hn=Os(H,N,F));let Ui=!1,Ye=!1,fs=!1;const ue=hn.getUniforms(),En=Tt.uniforms;if(Ct.useProgram(hn.program)&&(Ui=!0,Ye=!0,fs=!0),H.id!==S&&(S=H.id,Ye=!0),Ui||x!==E){Ct.buffers.depth.getReversed()?(at.copy(E.projectionMatrix),Eh(at),bh(at),ue.setValue(O,"projectionMatrix",at)):ue.setValue(O,"projectionMatrix",E.projectionMatrix),ue.setValue(O,"viewMatrix",E.matrixWorldInverse);const Zn=ue.map.cameraPosition;Zn!==void 0&&Zn.setValue(O,Ot.setFromMatrixPosition(E.matrixWorld)),Kt.logarithmicDepthBuffer&&ue.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ue.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Ye=!0,fs=!0)}if(F.isSkinnedMesh){ue.setOptional(O,F,"bindMatrix"),ue.setOptional(O,F,"bindMatrixInverse");const en=F.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),ue.setValue(O,"boneTexture",en.boneTexture,T))}F.isBatchedMesh&&(ue.setOptional(O,F,"batchingTexture"),ue.setValue(O,"batchingTexture",F._matricesTexture,T),ue.setOptional(O,F,"batchingIdTexture"),ue.setValue(O,"batchingIdTexture",F._indirectTexture,T),ue.setOptional(O,F,"batchingColorTexture"),F._colorsTexture!==null&&ue.setValue(O,"batchingColorTexture",F._colorsTexture,T));const ps=k.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&Ut.update(F,k,hn),(Ye||Tt.receiveShadow!==F.receiveShadow)&&(Tt.receiveShadow=F.receiveShadow,ue.setValue(O,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(En.envMap.value=yt,En.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(En.envMapIntensity.value=N.environmentIntensity),Ye&&(ue.setValue(O,"toneMappingExposure",v.toneMappingExposure),Tt.needsLights&&Du(En,fs),et&&H.fog===!0&&ct.refreshFogUniforms(En,et),ct.refreshMaterialUniforms(En,H,G,j,h.state.transmissionRenderTarget[E.id]),Mr.upload(O,ja(Tt),En,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Mr.upload(O,ja(Tt),En,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ue.setValue(O,"center",F.center),ue.setValue(O,"modelViewMatrix",F.modelViewMatrix),ue.setValue(O,"normalMatrix",F.normalMatrix),ue.setValue(O,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const en=H.uniformsGroups;for(let Zn=0,Jn=en.length;Zn<Jn;Zn++){const tc=en[Zn];I.update(tc,hn),I.bind(tc,hn)}}return hn}function Du(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Lu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,N,k){Rt.get(E.texture).__webglTexture=N,Rt.get(E.depthTexture).__webglTexture=k;const H=Rt.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const k=Rt.get(E);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,k=0){A=E,R=N,w=k;let H=!0,F=null,et=!1,ut=!1;if(E){const yt=Rt.get(E);if(yt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(O.FRAMEBUFFER,null),H=!1;else if(yt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(yt.__hasExternalTextures)T.rebindTextures(E,Rt.get(E.texture).__webglTexture,Rt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const St=E.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&Rt.has(St)&&(E.width!==St.image.width||E.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Nt=E.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ut=!0);const zt=Rt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[N])?F=zt[N][k]:F=zt[N],et=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?F=Rt.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?F=zt[k]:F=zt,C.copy(E.viewport),L.copy(E.scissor),U=E.scissorTest}else C.copy(At).multiplyScalar(G).floor(),L.copy(Xt).multiplyScalar(G).floor(),U=re;if(Ct.bindFramebuffer(O.FRAMEBUFFER,F)&&H&&Ct.drawBuffers(E,F),Ct.viewport(C),Ct.scissor(L),Ct.setScissorTest(U),et){const yt=Rt.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,yt.__webglTexture,k)}else if(ut){const yt=Rt.get(E.texture),Nt=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,yt.__webglTexture,k||0,Nt)}S=-1},this.readRenderTargetPixels=function(E,N,k,H,F,et,ut){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(Mt=Mt[ut]),Mt){Ct.bindFramebuffer(O.FRAMEBUFFER,Mt);try{const yt=E.texture,Nt=yt.format,zt=yt.type;if(!Kt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-H&&k>=0&&k<=E.height-F&&O.readPixels(N,k,H,F,Ht.convert(Nt),Ht.convert(zt),et)}finally{const yt=A!==null?Rt.get(A).__webglFramebuffer:null;Ct.bindFramebuffer(O.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(E,N,k,H,F,et,ut){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(Mt=Mt[ut]),Mt){const yt=E.texture,Nt=yt.format,zt=yt.type;if(!Kt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-H&&k>=0&&k<=E.height-F){Ct.bindFramebuffer(O.FRAMEBUFFER,Mt);const St=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,St),O.bufferData(O.PIXEL_PACK_BUFFER,et.byteLength,O.STREAM_READ),O.readPixels(N,k,H,F,Ht.convert(Nt),Ht.convert(zt),0);const te=A!==null?Rt.get(A).__webglFramebuffer:null;Ct.bindFramebuffer(O.FRAMEBUFFER,te);const ae=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Sh(O,ae,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,St),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,et),O.deleteBuffer(St),O.deleteSync(ae),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,k=0){E.isTexture!==!0&&(Ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-k),F=Math.floor(E.image.width*H),et=Math.floor(E.image.height*H),ut=N!==null?N.x:0,Mt=N!==null?N.y:0;T.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,k,0,0,ut,Mt,F,et),Ct.unbindTexture()},this.copyTextureToTexture=function(E,N,k=null,H=null,F=0){E.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],N=arguments[2],F=arguments[3]||0,k=null);let et,ut,Mt,yt,Nt,zt,St,te,ae;const le=E.isCompressedTexture?E.mipmaps[F]:E.image;k!==null?(et=k.max.x-k.min.x,ut=k.max.y-k.min.y,Mt=k.isBox3?k.max.z-k.min.z:1,yt=k.min.x,Nt=k.min.y,zt=k.isBox3?k.min.z:0):(et=le.width,ut=le.height,Mt=le.depth||1,yt=0,Nt=0,zt=0),H!==null?(St=H.x,te=H.y,ae=H.z):(St=0,te=0,ae=0);const Ve=Ht.convert(N.format),ee=Ht.convert(N.type);let Tt;N.isData3DTexture?(T.setTexture3D(N,0),Tt=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),Tt=O.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),Tt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);const Ln=O.getParameter(O.UNPACK_ROW_LENGTH),ne=O.getParameter(O.UNPACK_IMAGE_HEIGHT),hn=O.getParameter(O.UNPACK_SKIP_PIXELS),Ui=O.getParameter(O.UNPACK_SKIP_ROWS),Ye=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,le.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,yt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Nt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,zt);const fs=E.isDataArrayTexture||E.isData3DTexture,ue=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const En=Rt.get(E),ps=Rt.get(N),en=Rt.get(En.__renderTarget),Zn=Rt.get(ps.__renderTarget);Ct.bindFramebuffer(O.READ_FRAMEBUFFER,en.__webglFramebuffer),Ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Jn=0;Jn<Mt;Jn++)fs&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.get(E).__webglTexture,F,zt+Jn),E.isDepthTexture?(ue&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.get(N).__webglTexture,F,ae+Jn),O.blitFramebuffer(yt,Nt,et,ut,St,te,et,ut,O.DEPTH_BUFFER_BIT,O.NEAREST)):ue?O.copyTexSubImage3D(Tt,F,St,te,ae+Jn,yt,Nt,et,ut):O.copyTexSubImage2D(Tt,F,St,te,ae+Jn,yt,Nt,et,ut);Ct.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ue?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Tt,F,St,te,ae,et,ut,Mt,Ve,ee,le.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Tt,F,St,te,ae,et,ut,Mt,Ve,le.data):O.texSubImage3D(Tt,F,St,te,ae,et,ut,Mt,Ve,ee,le):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,St,te,et,ut,Ve,ee,le.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,St,te,le.width,le.height,Ve,le.data):O.texSubImage2D(O.TEXTURE_2D,F,St,te,et,ut,Ve,ee,le);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ln),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ne),O.pixelStorei(O.UNPACK_SKIP_PIXELS,hn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ui),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ye),F===0&&N.generateMipmaps&&O.generateMipmap(Tt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(E,N,k=null,H=null,F=0){return E.isTexture!==!0&&(Ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,E=arguments[2],N=arguments[3],F=arguments[4]||0),Ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,k,H,F)},this.initRenderTarget=function(E){Rt.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Ct.unbindTexture()},this.resetState=function(){R=0,w=0,A=null,Ct.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Oa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new Oa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class N0 extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class au extends us{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Tr=new P,Ar=new P,Qc=new pe,Ms=new ql,rr=new Lr,go=new P,tl=new P;class F0 extends be{constructor(t=new qe,e=new au){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Tr.fromBufferAttribute(e,s-1),Ar.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Tr.distanceTo(Ar);t.setAttribute("lineDistance",new he(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),rr.radius+=r,t.ray.intersectsSphere(rr)===!1)return;Qc.copy(s).invert(),Ms.copy(t.ray).applyMatrix4(Qc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,d=g-1;_<d;_+=l){const h=u.getX(_),y=u.getX(_+1),b=or(this,t,Ms,c,h,y);b&&e.push(b)}if(this.isLineLoop){const _=u.getX(g-1),d=u.getX(f),h=or(this,t,Ms,c,_,d);h&&e.push(h)}}else{const f=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let _=f,d=g-1;_<d;_+=l){const h=or(this,t,Ms,c,_,_+1);h&&e.push(h)}if(this.isLineLoop){const _=or(this,t,Ms,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function or(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Tr.fromBufferAttribute(o,s),Ar.fromBufferAttribute(o,r),e.distanceSqToSegment(Tr,Ar,go,tl)>n)return;go.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(go);if(!(c<t.near||c>t.far))return{distance:c,point:tl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Ba extends He{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],p=n[s+1]-u,f=(o-u)/p;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new vt:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],o=[],a=new P,c=new pe;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),m=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),m<=l&&(l=m,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class za extends Pn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new vt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),m=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*u-f*m+this.aX,l=p*m+f*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class O0 extends za{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ka(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,m){let p=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+m)+(c-a)/m;p*=u,f*=u,s(o,a,p,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ar=new P,_o=new ka,vo=new ka,xo=new ka;class B0 extends Pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(ar.subVectors(s[0],s[1]).add(s[0]),l=ar);const m=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ar.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ar),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(m),f),_=Math.pow(m.distanceToSquared(p),f),d=Math.pow(p.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),_o.initNonuniformCatmullRom(l.x,m.x,p.x,u.x,g,_,d),vo.initNonuniformCatmullRom(l.y,m.y,p.y,u.y,g,_,d),xo.initNonuniformCatmullRom(l.z,m.z,p.z,u.z,g,_,d)}else this.curveType==="catmullrom"&&(_o.initCatmullRom(l.x,m.x,p.x,u.x,this.tension),vo.initCatmullRom(l.y,m.y,p.y,u.y,this.tension),xo.initCatmullRom(l.z,m.z,p.z,u.z,this.tension));return n.set(_o.calc(c),vo.calc(c),xo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function el(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function z0(i,t){const e=1-i;return e*e*t}function k0(i,t){return 2*(1-i)*i*t}function H0(i,t){return i*i*t}function ws(i,t,e,n){return z0(i,t)+k0(i,e)+H0(i,n)}function V0(i,t){const e=1-i;return e*e*e*t}function G0(i,t){const e=1-i;return 3*e*e*i*t}function W0(i,t){return 3*(1-i)*i*i*t}function X0(i,t){return i*i*i*t}function Ts(i,t,e,n,s){return V0(i,t)+G0(i,e)+W0(i,n)+X0(i,s)}class cu extends Pn{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ts(t,s.x,r.x,o.x,a.x),Ts(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class q0 extends Pn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ts(t,s.x,r.x,o.x,a.x),Ts(t,s.y,r.y,o.y,a.y),Ts(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lu extends Pn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Y0 extends Pn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uu extends Pn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ws(t,s.x,r.x,o.x),ws(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $0 extends Pn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ws(t,s.x,r.x,o.x),ws(t,s.y,r.y,o.y),ws(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hu extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],m=s[o>s.length-3?s.length-1:o+2];return n.set(el(a,c.x,l.x,u.x,m.x),el(a,c.y,l.y,u.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new vt().fromArray(s))}return this}}var nl=Object.freeze({__proto__:null,ArcCurve:O0,CatmullRomCurve3:B0,CubicBezierCurve:cu,CubicBezierCurve3:q0,EllipseCurve:za,LineCurve:lu,LineCurve3:Y0,QuadraticBezierCurve:uu,QuadraticBezierCurve3:$0,SplineCurve:hu});class K0 extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new nl[s.type]().fromJSON(s))}return this}}class Z0 extends K0{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new lu(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new uu(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new cu(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new hu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new za(t,e,n,s,r,o,a,c);if(this.curves.length>0){const m=l.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ha extends qe{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Te(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/e,m=new P,p=new vt,f=new P,g=new P,_=new P;let d=0,h=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:d=t[y+1].x-t[y].x,h=t[y+1].y-t[y].y,f.x=h*1,f.y=-d,f.z=h*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:d=t[y+1].x-t[y].x,h=t[y+1].y-t[y].y,f.x=h*1,f.y=-d,f.z=h*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=e;y++){const b=n+y*u*s,v=Math.sin(b),D=Math.cos(b);for(let R=0;R<=t.length-1;R++){m.x=t[R].x*v,m.y=t[R].y,m.z=t[R].x*D,o.push(m.x,m.y,m.z),p.x=y/e,p.y=R/(t.length-1),a.push(p.x,p.y);const w=c[3*R+0]*v,A=c[3*R+1],S=c[3*R+0]*D;l.push(w,A,S)}}for(let y=0;y<e;y++)for(let b=0;b<t.length-1;b++){const v=b+y*t.length,D=v,R=v+t.length,w=v+t.length+1,A=v+1;r.push(D,R,A),r.push(w,A,R)}this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("uv",new he(a,2)),this.setAttribute("normal",new he(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ha(t.points,t.segments,t.phiStart,t.phiLength)}}class Li extends Ha{constructor(t=1,e=1,n=4,s=8){const r=new Z0;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Li(t.radius,t.length,t.capSegments,t.radialSegments)}}class Wt extends qe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],m=[],p=[],f=[];let g=0;const _=[],d=n/2;let h=0;y(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new he(m,3)),this.setAttribute("normal",new he(p,3)),this.setAttribute("uv",new he(f,2));function y(){const v=new P,D=new P;let R=0;const w=(e-t)/n;for(let A=0;A<=r;A++){const S=[],x=A/r,C=x*(e-t)+t;for(let L=0;L<=s;L++){const U=L/s,W=U*c+a,$=Math.sin(W),X=Math.cos(W);D.x=C*$,D.y=-x*n+d,D.z=C*X,m.push(D.x,D.y,D.z),v.set($,w,X).normalize(),p.push(v.x,v.y,v.z),f.push(U,1-x),S.push(g++)}_.push(S)}for(let A=0;A<s;A++)for(let S=0;S<r;S++){const x=_[S][A],C=_[S+1][A],L=_[S+1][A+1],U=_[S][A+1];(t>0||S!==0)&&(u.push(x,C,U),R+=3),(e>0||S!==r-1)&&(u.push(C,L,U),R+=3)}l.addGroup(h,R,0),h+=R}function b(v){const D=g,R=new vt,w=new P;let A=0;const S=v===!0?t:e,x=v===!0?1:-1;for(let L=1;L<=s;L++)m.push(0,d*x,0),p.push(0,x,0),f.push(.5,.5),g++;const C=g;for(let L=0;L<=s;L++){const W=L/s*c+a,$=Math.cos(W),X=Math.sin(W);w.x=S*X,w.y=d*x,w.z=S*$,m.push(w.x,w.y,w.z),p.push(0,x,0),R.x=$*.5+.5,R.y=X*.5*x+.5,f.push(R.x,R.y),g++}for(let L=0;L<s;L++){const U=D+L,W=C+L;v===!0?u.push(W,W+1,U):u.push(W+1,W,U),A+=3}l.addGroup(h,A,v===!0?1:2),h+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cn extends Wt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new cn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Va extends qe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const b=new P,v=new P,D=new P;for(let R=0;R<e.length;R+=3)f(e[R+0],b),f(e[R+1],v),f(e[R+2],D),c(b,v,D,y)}function c(y,b,v,D){const R=D+1,w=[];for(let A=0;A<=R;A++){w[A]=[];const S=y.clone().lerp(v,A/R),x=b.clone().lerp(v,A/R),C=R-A;for(let L=0;L<=C;L++)L===0&&A===R?w[A][L]=S:w[A][L]=S.clone().lerp(x,L/C)}for(let A=0;A<R;A++)for(let S=0;S<2*(R-A)-1;S++){const x=Math.floor(S/2);S%2===0?(p(w[A][x+1]),p(w[A+1][x]),p(w[A][x])):(p(w[A][x+1]),p(w[A+1][x+1]),p(w[A+1][x]))}}function l(y){const b=new P;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(y),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function u(){const y=new P;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];const v=d(y)/2/Math.PI+.5,D=h(y)/Math.PI+.5;o.push(v,1-D)}g(),m()}function m(){for(let y=0;y<o.length;y+=6){const b=o[y+0],v=o[y+2],D=o[y+4],R=Math.max(b,v,D),w=Math.min(b,v,D);R>.9&&w<.1&&(b<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),D<.2&&(o[y+4]+=1))}}function p(y){r.push(y.x,y.y,y.z)}function f(y,b){const v=y*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function g(){const y=new P,b=new P,v=new P,D=new P,R=new vt,w=new vt,A=new vt;for(let S=0,x=0;S<r.length;S+=9,x+=6){y.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),R.set(o[x+0],o[x+1]),w.set(o[x+2],o[x+3]),A.set(o[x+4],o[x+5]),D.copy(y).add(b).add(v).divideScalar(3);const C=d(D);_(R,x+0,y,C),_(w,x+2,b,C),_(A,x+4,v,C)}}function _(y,b,v,D){D<0&&y.x===1&&(o[b]=y.x-1),v.x===0&&v.z===0&&(o[b]=D/2/Math.PI+.5)}function d(y){return Math.atan2(y.z,-y.x)}function h(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.vertices,t.indices,t.radius,t.details)}}class Ga extends Va{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ga(t.radius,t.detail)}}class Re extends qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],m=new P,p=new P,f=[],g=[],_=[],d=[];for(let h=0;h<=n;h++){const y=[],b=h/n;let v=0;h===0&&o===0?v=.5/e:h===n&&c===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const R=D/e;m.x=-t*Math.cos(s+R*r)*Math.sin(o+b*a),m.y=t*Math.cos(o+b*a),m.z=t*Math.sin(s+R*r)*Math.sin(o+b*a),g.push(m.x,m.y,m.z),p.copy(m).normalize(),_.push(p.x,p.y,p.z),d.push(R+v,1-b),y.push(l++)}u.push(y)}for(let h=0;h<n;h++)for(let y=0;y<e;y++){const b=u[h][y+1],v=u[h][y],D=u[h+1][y],R=u[h+1][y+1];(h!==0||o>0)&&f.push(b,v,R),(h!==n-1||c<Math.PI)&&f.push(v,D,R)}this.setIndex(f),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(_,3)),this.setAttribute("uv",new he(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pi extends qe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new P,m=new P,p=new P;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,d=f/n*Math.PI*2;m.x=(t+e*Math.cos(d))*Math.cos(_),m.y=(t+e*Math.cos(d))*Math.sin(_),m.z=e*Math.sin(d),a.push(m.x,m.y,m.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),p.subVectors(m,u).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,d=(s+1)*(f-1)+g-1,h=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(_,d,y),o.push(d,h,y)}this.setIndex(o),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qe extends us{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class du extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class J0 extends du{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Mo=new pe,il=new P,sl=new P;class j0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;il.setFromMatrixPosition(t.matrixWorld),e.position.copy(il),sl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sl),e.updateMatrixWorld(),Mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Q0 extends j0{constructor(){super(new eu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fu extends du{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Q0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);const B={sky:6988748,oceanDeep:3108758,rock:7172456,rockDark:4869703,grass:7306572,grassLit:8292949,sand:13811345,wood:8017203,woodMid:6044964,woodDark:3810838,white:16053744,green:3115592,greenDeep:2055216,skin:13350026,skinShadow:11770478,black:1711130,clothBlack:2763818,clothGreen:2980418,hatStraw:12886362,torch:16757850,dirt:9073480},Je=42,It={x:118,z:-8,r:28},yo={x:1.6,y:2.1,z:36.2};function tg(i=256){const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d");e.clearRect(0,0,i,i);const n=i/2,s=i/2,r=i*.62,o=i*.22,a=-.48;e.translate(n,s),e.rotate(a);const c=()=>{e.beginPath(),e.moveTo(-r/2,-o),e.lineTo(r/2,-o),e.arc(r/2,0,o,-Math.PI/2,Math.PI/2),e.lineTo(-r/2,o),e.arc(-r/2,0,o,Math.PI/2,-Math.PI/2),e.closePath()};return e.save(),c(),e.fillStyle="#16382a",e.fill(),e.restore(),e.save(),e.beginPath(),e.rect(-r,-i,r,i*2),e.clip(),c(),e.fillStyle="#6ed18a",e.fill(),e.restore(),e.save(),e.beginPath(),e.rect(0,-i,r,i*2),e.clip(),c(),e.fillStyle="#f4f8f5",e.fill(),e.restore(),e.lineJoin="round",e.lineWidth=i*.055,c(),e.strokeStyle="#16382a",e.stroke(),t}let Ki=null;function eg(){return Ki||(Ki=new Ba(tg(256)),Ki.colorSpace=Ne,Ki.anisotropy=8,Ki)}function Wa(i=1){const t=new ft;t.name="pump-pill";const e=new an({map:eg(),transparent:!0,depthWrite:!1,toneMapped:!1}),n=new dt(new ln(1.15*i,1.15*i),e);return t.add(n),t}function ng(i=1){return Wa(i*.28)}const on=(i,t={})=>new Qe({color:i,flatShading:!0,...t});function _e(i,t,e,n,s=0){const r=new dt(new it(i,t,e),on(n));return r.position.y=s,r}function ze(i,t,e,n,s=0,r=6){const o=new dt(new Wt(i,t,e,r),on(n));return o.position.y=s,o}function Vn(i,t,e=0,n=6){const s=new dt(new Re(i,n,n),on(t));return s.position.y=e,s}function cr(i,t,e,n=0){const s=new dt(new Li(i,t,2,6),on(e));return s.position.y=n,s}const rl={DEFAULT:{hat:"cap",hatColor:B.clothBlack,shirt:B.white,pants:B.clothBlack,shoes:B.white,extra:"tee"},FISHERMAN:{hat:"bucket",hatColor:B.clothGreen,shirt:B.white,pants:B.clothGreen,shoes:B.clothGreen,extra:"overalls",prop:"rod"},HUNTER:{hat:"beanie",hatColor:B.clothBlack,shirt:B.clothBlack,pants:B.clothBlack,shoes:B.white,extra:"tee",prop:"gun"},HARVESTER:{hat:"cap",hatColor:B.white,shirt:B.white,pants:B.clothGreen,shoes:B.white,extra:"overalls",prop:"axe"},TRADER:{hat:"top",hatColor:B.clothGreen,shirt:B.clothGreen,pants:B.clothGreen,shoes:B.clothBlack,extra:"suit"},PIRATE:{hat:"tricorn",hatColor:B.clothBlack,shirt:B.white,pants:B.clothBlack,shoes:B.clothBlack,extra:"coat"},BUILDER:{hat:"hardhat",hatColor:B.white,shirt:B.clothBlack,pants:B.clothBlack,shoes:B.white,extra:"vest"},SCOUT:{hat:"cap",hatColor:B.clothGreen,shirt:B.clothGreen,pants:B.clothBlack,shoes:B.white,extra:"pack"},CHEF:{hat:"toque",hatColor:B.white,shirt:B.white,pants:B.clothBlack,shoes:B.clothBlack,extra:"apron",prop:"pan"},BEACHGOER:{hat:"straw",hatColor:B.hatStraw,shirt:4165461,pants:B.clothGreen,shoes:7031336,extra:"hawaii"}};function ig(i,t){const e=new ft;if(i==="cap"){e.add(ze(.2,.22,.1,t,.02,8));const n=_e(.2,.025,.14,t);n.position.set(0,-.01,.16),e.add(n)}else if(i==="bucket")e.add(ze(.17,.22,.12,t,.05,8)),e.add(ze(.3,.3,.03,t,-.02,10));else if(i==="beanie")e.add(Vn(.21,t,.04,8));else if(i==="top")e.add(ze(.17,.17,.2,t,.12,8)),e.add(ze(.28,.28,.035,t,-.02,8));else if(i==="tricorn"){const n=new dt(new cn(.32,.09,3),on(t));n.rotation.y=Math.PI/6,n.position.y=.04,e.add(n),e.add(Vn(.16,t,.08,6))}else i==="hardhat"?(e.add(Vn(.22,t,.04,8)),e.add(ze(.24,.24,.035,t,-.04,8))):i==="toque"?(e.add(ze(.18,.2,.26,B.white,.14,8)),e.add(ze(.22,.22,.045,B.white,-.03,8))):i==="straw"&&(e.add(ze(.2,.2,.09,t,.05,8)),e.add(ze(.36,.36,.025,t,-.02,10)),e.add(ze(.21,.21,.03,B.clothBlack,.02,8)));return e}function sg(i){const t=new ft;if(i==="rod"){const e=ze(.015,.02,1.45,3811864,0,5);e.rotation.z=.42,e.position.set(.18,.42,.04),t.add(e);const n=Vn(.045,B.clothBlack);n.position.set(.1,-.02,.05),t.add(n)}else if(i==="gun"){const e=_e(.07,.07,.58,3815992);e.position.set(.1,.02,.2),t.add(e)}else if(i==="axe"){const e=ze(.02,.025,.72,6965805,0,5);e.rotation.z=-.55,e.position.set(.16,.22,.03);const n=_e(.2,.11,.05,9080200);n.position.set(.36,.5,.03),t.add(e,n)}else if(i==="pan"){const e=ze(.15,.13,.035,B.clothBlack,0,8);e.position.set(.26,0,.1),t.add(e)}return t}function rg(i="DEFAULT",t={}){const e=rl[i]||rl.DEFAULT,n=new ft;n.name=`char-${i}`,n.userData.archetype=i;const s=new ft;s.position.y=.56;const r=cr(.16,.38,e.shirt,.48);r.scale.set(1.15,1,.85);const o=_e(.32,.14,.2,e.pants,.08);if(s.add(r,o),e.extra==="overalls"){const w=_e(.22,.28,.02,e.pants);w.position.set(0,.46,.15),s.add(w);const A=_e(.035,.28,.02,e.pants);A.position.set(-.09,.58,.15);const S=A.clone();S.position.x=.09,s.add(A,S)}if(e.extra==="suit"){const w=_e(.4,.48,.26,e.shirt,.42);s.add(w);const A=_e(.04,.16,.02,B.white);A.position.set(0,.5,.14),s.add(A)}if(e.extra==="coat"){const w=_e(.5,.82,.32,B.clothBlack,.28);s.add(w);const A=_e(.22,.22,.04,B.white);A.position.set(0,.52,.17),s.add(A)}if(e.extra==="apron"){const w=_e(.28,.48,.02,B.white);w.position.set(0,.22,.15),s.add(w)}if(e.extra==="vest"){const w=_e(.4,.3,.26,B.clothGreen,.42);s.add(w);const A=_e(.28,.08,.14,4864546);A.position.set(0,.22,.12),s.add(A)}if(e.extra==="pack"){const w=_e(.26,.28,.12,3820082);w.position.set(0,.46,-.2),s.add(w)}if(e.extra==="hawaii")for(let w=0;w<5;w++){const A=Vn(.03,w%2?15258474:15922414,0);A.position.set(-.1+w%3*.1,.42+w%2*.1,.15),s.add(A)}const a=ng(e.extra==="tee"||e.extra==="hawaii"?1.15:.8);a.position.set(0,.48,.17),s.add(a);const c=ze(.055,.06,.16,B.skin,.78,6);s.add(c);const l=new ft;l.position.y=1.02;const u=new dt(new Re(.2,8,7),on(B.skin));u.scale.set(.95,1.22,.92),u.position.y=.1,u.castShadow=!0,l.add(u);const m=Vn(.12,B.skinShadow,-.08,7);m.scale.set(1.05,.7,.9),l.add(m);const p=w=>{const A=new ft,S=Vn(.092,B.white,0,8);S.scale.set(1,1.08,.88);const x=Vn(.034,B.black,0,6);return x.position.z=.07,A.add(S,x),A.position.set(w,.13,.175),A};l.add(p(-.075),p(.075));const f=_e(.22,.025,.04,B.skinShadow);f.position.set(0,.2,.14),l.add(f);const g=_e(.045,.055,.06,B.skinShadow);g.position.set(0,.05,.175),l.add(g);const _=_e(.09,.018,.02,5914672);if(_.position.set(0,-.03,.165),l.add(_),i==="TRADER"){const w=_e(.12,.14,.06,3813412);w.position.set(0,-.14,.1),l.add(w)}if(i==="PIRATE"){const w=_e(.16,.1,.06,4866100);w.position.set(0,-.14,.1),l.add(w)}if(i==="BEACHGOER"){const w=_e(.24,.05,.07,B.clothBlack);w.position.set(0,.12,.17),l.add(w)}const d=ig(e.hat,e.hatColor);d.position.y=.3,l.add(d),s.add(l);function h(w){const A=new ft;A.position.set(w*.22,.64,0);const S=e.extra==="suit"||e.extra==="coat"?e.shirt:B.skin,x=cr(.045,.28,S,-.18),C=cr(.04,.26,B.skin,-.5),L=Vn(.05,B.skin,-.7,6);return A.add(x,C,L),A}const y=h(-1),b=h(1);e.prop&&b.add(sg(e.prop)),s.add(y,b);function v(w){const A=new ft;A.position.set(w*.09,.04,0),A.add(cr(.055,.42,e.pants,-.28));const S=_e(.11,.06,.2,e.shoes);S.position.set(0,-.56,.03);const x=_e(.12,.02,.21,B.clothBlack);return x.position.set(0,-.6,.03),A.add(S,x),A}const D=v(-1),R=v(1);return s.add(D,R),n.add(s),n.userData.parts={hips:s,head:l,lArm:y,rArm:b,lLeg:D,rLeg:R},n.userData.phase=t.phase||Math.random()*Math.PI*2,t.scale&&n.scale.setScalar(t.scale),n}function og(i,t,e=!1,n=!1){const s=i.userData.parts;if(!s)return;const r=i.userData.phase||0,o=e?1:.16,a=Math.sin(t*6.5+r)*.38*o;s.lLeg.rotation.x=a,s.rLeg.rotation.x=-a,s.lArm.rotation.x=-a*.75,s.rArm.rotation.x=n?-1.05+Math.sin(t*2.6)*.1:a*.75,s.head.rotation.y=Math.sin(t*.6+r)*.1,s.hips.position.y=.56+Math.abs(Math.sin(t*6.5+r))*(e?.035:.01)}function Mi(i){return i.rotation.x=Math.PI/2,i}function ol(i,t=1){const e=new ft,n=new dt(new it(.038,.022,.05),i);n.position.set(0,-.006,0);const s=new dt(new Wt(.02,.02,.042,8),i);s.rotation.x=Math.PI/2,s.position.y=-.002;const r=new dt(new it(.012,.012,.028),i);r.position.set(t*-.02,.01,.004),r.rotation.z=t*.85,e.add(n,s,r);for(let o=0;o<4;o++){const a=new dt(new it(.008,.01,.026),i);a.position.set(t*(-.012+o*.009),.01,.02),a.rotation.x=.7,e.add(a)}return e}function ag(i){const t=new ft;t.name="fp-arms";const e=on(B.skin),n=on(15264740),s=on(3811352),r=on(11565626),o=on(1709586),a=on(7262602),c=new ft;c.name="rod-rig",c.position.set(.18,-.24,-.32),c.rotation.set(.62,.18,-.12);const l=Mi(new dt(new Wt(.012,.015,.08,7),n));l.position.set(.05,-.02,.22),l.visible=!1;const u=ol(e,1);u.position.set(0,-.02,-.02),u.rotation.z=.2;const m=Mi(new dt(new Wt(.011,.014,.07,7),n));m.position.set(-.05,0,-.12),m.visible=!1;const p=ol(e,-1);if(p.position.set(0,-.018,-.14),p.rotation.z=-.15,t.userData.lArm=m,t.userData.rArm=l,t.userData.pole=null,t.userData.line=null,t.userData.reel=null,t.userData.rod=c,i){const f=Mi(new dt(new Wt(.014,.017,.045,8),o));f.position.z=.08;const g=Mi(new dt(new Wt(.015,.017,.16,10),r));g.position.z=-.04;const _=Mi(new dt(new Wt(.013,.015,.035,8),o));_.position.z=-.14;const d=Mi(new dt(new Wt(.004,.012,1.05,8),s));d.position.z=-.68;const h=Mi(new dt(new Wt(.002,.004,.2,6),a));h.position.z=-1.3;const y=new dt(new Pi(.009,.002,5,8),o);y.position.z=-1.18;const b=new ft,v=new dt(new Wt(.024,.024,.016,10),o);v.rotation.z=Math.PI/2;const D=new dt(new Pi(.018,.005,6,10),a);D.rotation.y=Math.PI/2;const R=new dt(new it(.01,.008,.032),o);R.position.y=.016,b.add(v,D,R),b.position.set(0,-.032,-.05);const w=new qe().setFromPoints([new P(0,0,-1.4),new P(.01,-.06,-2.3)]),A=new F0(w,new au({color:15266540,transparent:!0,opacity:.65}));A.visible=!1,c.add(f,g,_,d,h,y,b,A),t.userData.pole=d,t.userData.reel=b,t.userData.line=A}return c.add(l,u,m,p),t.add(c),t}function bs(i,t,e){if(!i)return;const n=i.userData.rod,s=i.userData.line,r=i.userData.reel;if(!n)return;const o={x:.62,y:.18,z:-.12};if(t==="cast"){const a=Math.min(1,e/.38);n.rotation.x=o.x-.85*a,n.rotation.z=o.z-.12*a,s&&(s.visible=a>.62)}else if(t==="wait"){if(n.rotation.x=o.x+Math.sin(e*1.6)*.03,n.rotation.z=o.z,s){s.visible=!0;const a=s.geometry.attributes.position;a.setY(1,-.08+Math.sin(e*2.4)*.07),a.needsUpdate=!0}}else if(t==="bite"){const a=Math.sin(e*24)*.07;n.rotation.x=o.x-.12+a,n.rotation.z=o.z+a*.4,s&&(s.visible=!0)}else t==="reel"?(n.rotation.x=o.x-.28+Math.sin(e*13)*.05,r&&(r.rotation.x=e*14),s&&(s.visible=!0)):(n.rotation.x=o.x+Math.sin(e*1.3)*.018,n.rotation.y=o.y,n.rotation.z=o.z,s&&(s.visible=!1),r&&(r.rotation.x=0))}function cg(){const i=new ft;i.name="sky";const t=new dt(new Re(280,12,8),new Cn({side:ke,depthWrite:!1,uniforms:{top:{value:new bt(5148607)},mid:{value:new bt(9353428)},bot:{value:new bt(14149320)}},vertexShader:`
        varying vec3 vP;
        void main() {
          vP = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vP;
        uniform vec3 top;
        uniform vec3 mid;
        uniform vec3 bot;
        void main() {
          float h = normalize(vP).y;
          vec3 col = mix(bot, mid, smoothstep(-0.15, 0.12, h));
          col = mix(col, top, smoothstep(0.08, 0.72, h));
          gl_FragColor = vec4(col, 1.0);
        }
      `}));i.add(t);const e=new dt(new Re(7.5,12,12),new an({color:16773568}));e.position.set(-90,58,40),i.add(e);const n=new dt(new Re(16,12,12),new an({color:16770720,transparent:!0,opacity:.22,depthWrite:!1}));n.position.copy(e.position),i.add(n);for(let s=0;s<4;s++){const r=new ft,o=new an({color:15660280,transparent:!0,opacity:.7});for(let c=0;c<3;c++){const l=new dt(new Re(4.2+c%3,5,4),o);l.position.set((c-1.4)*5.2,c%2*1.4,c%3-1),r.add(l)}const a=s/4*Math.PI*2;r.position.set(Math.cos(a)*90,28+s%3*4,Math.sin(a)*90),r.userData.spin=.012+s%4*.004,r.userData.base=a,i.add(r)}return i}const lg=[{ax:.82,az:.57,amp:.22,len:18,speed:1.15,q:.42},{ax:-.35,az:.94,amp:.12,len:9.5,speed:1.55,q:.32},{ax:.2,az:-.98,amp:.07,len:5.2,speed:1.9,q:.28},{ax:.95,az:.31,amp:.045,len:3.1,speed:2.4,q:.2}];function ug(i,t){const e=Math.hypot(i,t),n=Math.hypot(i-118,t+8),s=Math.max(0,Math.min(1,(e-33.2)/8.5)),r=Math.max(0,Math.min(1,(n-22.5)/7.5));return Math.min(s,r)}function qn(i,t,e){const n=ug(i,t);if(n<=.02)return-.06;let s=0;for(const r of lg){const o=Math.PI*2/r.len,a=(i*r.ax+t*r.az)*o+e*r.speed;s+=r.amp*Math.sin(a)}return s*n}function hg(){const i=new ln(720,720,72,72);i.rotateX(-Math.PI/2);const t=new Cn({transparent:!0,uniforms:{uTime:{value:0},uSun:{value:new P(-.55,.72,.28).normalize()},uDeep:{value:new bt(933731)},uMid:{value:new bt(3112616)},uShal:{value:new bt(9425116)},uFoam:{value:new bt(15989759)},uAmp:{value:1}},vertexShader:`
      uniform float uTime;
      uniform float uAmp;
      varying vec3 vW;
      varying vec3 vN;
      varying float vMix;
      varying float vCrest;
      vec3 gerstner(vec3 p, vec2 d, float amp, float len, float spd, float q, inout vec3 nAcc) {
        float k = 6.283185 / len;
        float phase = dot(d, p.xz) * k + uTime * spd;
        float s = sin(phase);
        float c = cos(phase);
        p.x += q * amp * d.x * c;
        p.z += q * amp * d.y * c;
        p.y += amp * s;
        nAcc.x += -d.x * k * amp * c;
        nAcc.z += -d.y * k * amp * c;
        nAcc.y += 1.0 - q * k * amp * s;
        return p;
      }
      void main() {
        vec3 p = position;
        float r = length(p.xz);
        float r2 = length(p.xz - vec2(118.0, -8.0));
        float mixW = min(clamp((r - 33.2) / 8.5, 0.0, 1.0), clamp((r2 - 22.5) / 7.5, 0.0, 1.0));
        vec3 nAcc = vec3(0.0, 0.0, 0.0);
        p = gerstner(p, normalize(vec2(0.82, 0.57)), 0.22 * mixW * uAmp, 18.0, 1.15, 0.42, nAcc);
        p = gerstner(p, normalize(vec2(-0.35, 0.94)), 0.12 * mixW * uAmp, 9.5, 1.55, 0.32, nAcc);
        p = gerstner(p, normalize(vec2(0.2, -0.98)), 0.07 * mixW * uAmp, 5.2, 1.9, 0.28, nAcc);
        p = gerstner(p, normalize(vec2(0.95, 0.31)), 0.045 * mixW * uAmp, 3.1, 2.4, 0.2, nAcc);
        vCrest = p.y;
        vMix = mixW;
        vN = normalize(nAcc);
        vW = (modelMatrix * vec4(p, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uDeep;
      uniform vec3 uMid;
      uniform vec3 uShal;
      uniform vec3 uFoam;
      uniform vec3 uSun;
      varying vec3 vW;
      varying vec3 vN;
      varying float vMix;
      varying float vCrest;
      void main() {
        vec3 n = normalize(vN);
        vec3 view = normalize(cameraPosition - vW);
        float ndv = max(0.0, dot(n, view));
        float fres = pow(1.0 - ndv, 3.2);
        float spec = pow(max(0.0, dot(reflect(-uSun, n), view)), 48.0);
        float shore = 1.0 - vMix;
        vec3 col = mix(uDeep, uMid, clamp(vCrest * 2.4 + 0.45, 0.0, 1.0));
        col = mix(col, uShal, shore * 0.85);
        col = mix(col, vec3(0.72, 0.88, 0.95), fres * 0.55);
        col += spec * 0.55 * vMix;
        float foam = smoothstep(0.12, 0.24, vCrest) * vMix;
        foam += pow(shore, 1.6) * 0.45;
        col = mix(col, uFoam, foam * 0.55);
        float alpha = mix(0.0, 0.94, smoothstep(0.02, 0.18, vMix));
        gl_FragColor = vec4(col, alpha);
      }
    `}),e=new dt(i,t);return e.position.y=0,e.name="water",e}function dg(){const i=new ft,t=new dt(new Re(.09,8,8),new Qe({color:13781562,flatShading:!0})),e=new dt(new Re(.07,8,8),new Qe({color:B.white,flatShading:!0}));return e.position.y=.07,i.add(t,e),i.visible=!1,i}function fg(){const i=new ft,t=[],e=new an({color:14216946,transparent:!0,opacity:.8});for(let n=0;n<18;n++){const s=new dt(new Re(.035,5,5),e.clone());i.add(s),t.push(s)}return i.visible=!1,i.userData.drops=t,i.userData.t=0,i.userData.live=!1,i}function va(i,t,e,n){i.position.set(t,e,n),i.visible=!0,i.userData.t=0,i.userData.live=!0,i.userData.drops.forEach((s,r)=>{const o=r/18*Math.PI*2;s.position.set(0,.02,0),s.userData.v=new P(Math.cos(o)*(.8+Math.random()),1.6+Math.random(),Math.sin(o)*(.8+Math.random())),s.material.opacity=.85})}function pg(i,t){if(i?.userData.live){i.userData.t+=t;for(const e of i.userData.drops)e.userData.v.y-=6*t,e.position.addScaledVector(e.userData.v,t),e.material.opacity=Math.max(0,.85-i.userData.t*1.6);i.userData.t>.7&&(i.visible=!1,i.userData.live=!1)}}function mg(i="fish"){const t=new ft;if(i==="boot")t.add(new dt(new it(.16,.1,.28),new Qe({color:3811864,flatShading:!0})));else if(i==="crate")t.add(new dt(new it(.22,.18,.22),new Qe({color:6965805,flatShading:!0})));else{const e=new dt(new Li(.06,.22,3,6),new Qe({color:4034495,flatShading:!0}));e.rotation.z=Math.PI/2;const n=new dt(new cn(.07,.12,4),new Qe({color:2779784,flatShading:!0}));n.rotation.z=-Math.PI/2,n.position.x=-.2,t.add(e,n)}return t.visible=!1,t}const Xa=[];function xa(i,t,e){Xa.push({x:i,z:t,r:e})}function gg(i,t,e=.42){let n=i,s=t;for(const r of Xa){const o=n-r.x,a=s-r.z,c=Math.hypot(o,a),l=r.r+e;if(c<l&&c>1e-4){const u=l/c;n=r.x+o*u,s=r.z+a*u}}return{x:n,z:s}}const _g=(i,t={})=>new Qe({color:i,flatShading:!0,...t});function Q(i,t){return new dt(i,typeof t=="number"?_g(t):t)}function vg(i,t){return Math.sin(i*.21)*Math.cos(t*.17)+Math.sin(i*.09+t*.13)*.6}function xg(i,t){const e=i-It.x,n=t-It.z,s=Math.hypot(e,n);if(s>It.r+6)return-.55;if(s>It.r+1.2)return-.35;if(s>It.r-2.4){const a=(It.r+1.2-s)/3.6;return-.05+a*a*(3-2*a)*.7}const r=Math.hypot(e+2,n-1);let o=.55+(1-s/(It.r-2))*2.4;return o+=Math.sin(e*.31)*Math.cos(n*.27)*.22,r<7&&(o=Math.min(o,.42+r*.08)),e>4&&n>-6&&n<8&&(o=Math.min(o,.38)),Math.max(.18,o)}function we(i,t){if(Math.hypot(i-It.x,t-It.z)<It.r+8)return xg(i,t);const n=Math.hypot(i,t);if(n>Je+10)return-.55;if(i>10&&t>-4&&t<22&&n<Je+5&&n>24)return-.08+Math.max(0,Math.min(1,(32-n)/8))*.42;if(n>Je+2.4)return-.42;if(n>Je-3.2){const l=(Je+2.4-n)/5.6;return-.08+l*l*(3-2*l)*.46}const r=Math.max(0,1-n/(Je-2.4));let a=.38+r*r*(3-2*r)*2.85;const c=Math.hypot(i,t+1.2);if(c<9&&(a+=(1-c/9)*.24),i<-4&&t>2&&n<36){const l=Math.max(0,Math.min(1,(-i-4)/20));a+=l*.36}return i>2&&t<-6&&n<30&&(a+=.14),i>12&&i<22&&t>16&&t<24&&(a=Math.min(a,.55)),a+=vg(i,t)*.05,Math.max(.2,a)}function Mg(){const i=new ft,t=48,e=(Je+6)*2,n=new ln(e,e,t,t);n.rotateX(-Math.PI/2);const s=n.attributes.position,r=[],o=new bt(B.grass),a=new bt(B.grassLit);new bt(B.rock),new bt(B.rockDark);const c=new bt(B.sand),l=new bt(B.dirt),u=new bt;for(let p=0;p<s.count;p++){const f=s.getX(p),g=s.getZ(p),_=Math.hypot(f,g);let d=we(f,g);_>Je+4&&(d=-.5),s.setY(p,d);const h=f>10&&g>-4&&g<24&&d<.55;_>Je+2.2?u.set(B.oceanDeep):d<.22||h?u.copy(c):d<.55?u.lerpColors(c,o,(d-.22)/.33):d>3.1?u.copy(l):u.lerpColors(o,a,(Math.sin(f*.3)+1)*.35),r.push(u.r,u.g,u.b)}n.setAttribute("color",new he(r,3)),n.computeVertexNormals();const m=new dt(n,new Qe({vertexColors:!0,flatShading:!0}));i.add(m);for(let p=0;p<42;p++){const f=p/42*Math.PI*2+p%3*.03,g=Je+.4+p%4*.35,_=Math.cos(f)*g,d=Math.sin(f)*g;if(_>16&&d>0&&d<22)continue;const h=1.6+p%3*.45,y=1.2+p*2%3*.3,b=.55+p%4*.18,v=Q(new it(h,b,y),p%2?B.rock:B.rockDark);v.position.set(_,Math.max(.02,we(_,d)-.08),d),v.rotation.y=f+.2,i.add(v)}return i}function yg(){const i=new ft,t=36,e=(It.r+6)*2,n=new ln(e,e,t,t);n.rotateX(-Math.PI/2);const s=n.attributes.position,r=[],o=new bt(6968132),a=new bt(12864058),c=new bt(13213802),l=new bt(B.rockDark),u=new bt;for(let p=0;p<s.count;p++){const f=s.getX(p),g=s.getZ(p),_=f+It.x,d=g+It.z,h=Math.hypot(f,g);let y=we(_,d);h>It.r+3&&(y=-.5),s.setY(p,y),h>It.r+1.6?u.set(B.oceanDeep):y<.28?u.copy(c):Math.hypot(f+2,g-1)<6.2?u.copy(a):y>2.2?u.copy(l):u.copy(o),r.push(u.r,u.g,u.b)}n.setAttribute("color",new he(r,3)),n.computeVertexNormals();const m=new dt(n,new Qe({vertexColors:!0,flatShading:!0}));return m.position.set(It.x,0,It.z),i.add(m),i}function Sg(){const i=new ft;for(let t=0;t<5;t++){const e=Q(new it(.04,.28+Math.random()*.18,.03),t%2?B.grass:B.grassLit);e.position.set((t-2)*.07,.16,t%2*.05),e.rotation.z=(t-2)*.12,i.add(e)}return i}function lr(i){const t=new ft,e=Q(new Wt(.05,.06,1.55,5),B.woodDark);e.position.y=.78;const n=Q(new it(1.35,.48,.06),B.wood);n.position.set(0,1.42,.04);const s=document.createElement("canvas");s.width=256,s.height=96;const r=s.getContext("2d");r.fillStyle="#6a4528",r.fillRect(0,0,256,96),r.fillStyle="#f4efe4",r.font="bold 28px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(i,128,48);const o=new Ba(s);o.colorSpace=Ne;const a=new dt(new ln(1.28,.42),new an({map:o,toneMapped:!1}));return a.position.set(0,1.42,.08),t.add(e,n,a),t}function Eg(){const i=new ft,t=Q(new it(1.4,.22,.62),3810838);t.position.y=.14;const e=Q(new it(.82,.55,.58),6044964);e.position.set(-.18,.48,0);const n=Q(new it(.48,.28,.56),4862496);return n.position.set(.48,.28,0),i.add(t,e,n),i}function bg(){const i=new ft,t=Q(new Wt(.28,.22,.32,8),B.white);t.position.y=.22;const e=Q(new it(.32,.38,.16),B.white);e.position.set(0,.52,-.22);const n=Q(new Pi(.22,.04,6,10),14212566);return n.rotation.x=Math.PI/2,n.position.y=.38,i.add(t,e,n),i}function wg(){const i=new ft,t=Q(new it(.9,.16,.7),B.rock);t.position.y=.08;const e=Wa(.42);return e.position.set(0,.48,.08),i.add(t,e),i}function Tg(){const i=new ft,t=Q(new it(.72,.42,.18),2763818);t.position.y=.24;const e=Q(new it(.58,.3,.02),7262602);return e.position.set(0,.26,.1),i.add(t,e),i}function Ag(){const i=new ft,t=Q(new Re(.22,8,6),15778666);t.scale.set(1.15,.75,1),t.position.y=.16;const e=Q(new Re(.13,7,6),15778666);e.position.set(.14,.32,0);const n=Q(new it(.1,.04,.08),14711336);return n.position.set(.26,.3,0),i.add(t,e,n),i}function Rg(){const i=new ft;for(let t=0;t<7;t++){const e=Q(new it(.025,.22,.025),B.green);e.position.set((t-3)*.09,.11,t%3*.06);const n=Q(new Re(.05,5,4),t%2?15253850:14983423);n.position.set(e.position.x,.24,e.position.z),i.add(e,n)}return i}function So(){const i=new ft,t=Q(new Ga(.55,0),B.rock);return t.scale.set(1.2,.7,1),t.position.y=.22,i.add(t),i}function Cg(){const i=new ft;for(let e=0;e<5;e++){const n=e/5*Math.PI*2,s=Q(new Wt(.05,.055,.55,5),B.woodDark);s.rotation.z=Math.PI/2,s.rotation.y=n,s.position.set(Math.cos(n)*.12,.06,Math.sin(n)*.12),i.add(s)}const t=Q(new cn(.16,.38,5),B.torch);return t.position.y=.32,t.material.emissive=new bt(B.torch),t.material.emissiveIntensity=.7,i.add(t),i}function al(i){const t=new ft,e=Q(new Wt(i==="tax"?6.4:5.2,7.6,1.6,8),B.sand);if(e.position.y=.1,t.add(e),i==="tax"){const n=kn(B.white);n.position.set(-1.4,.8,.4),n.scale.setScalar(1.4);const s=kn(B.green);s.position.set(1.8,.8,-.6),s.scale.setScalar(1.1);const r=pu();r.position.set(3.2,.8,1.4),t.add(n,s,r)}else{const n=Q(new Wt(.45,.7,5.2,6),B.white);n.position.y=3.2;const s=Q(new cn(.9,1.1,5),12864058);s.position.y=6.1,t.add(n,s)}return t}function Zi(i,t=2.4){const e=new ft,n=Q(new Wt(.06,.07,2.2,5),B.woodDark);n.position.y=1.1;const s=Q(new it(t,.7,.08),1456170);s.position.set(0,2.05,.04);const r=document.createElement("canvas");r.width=384,r.height=128;const o=r.getContext("2d");o.fillStyle="#16382a",o.fillRect(0,0,384,128),o.fillStyle="#f4efe4",o.font="bold 34px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(i,192,64);const a=new Ba(r);a.colorSpace=Ne;const c=new dt(new ln(t-.1,.58),new an({map:a,toneMapped:!1}));return c.position.set(0,2.05,.1),e.add(n,s,c),e}function Pg(){const i=new ft,t=Q(new it(.7,.38,.46),6964520);t.position.y=.2;const e=Q(new it(.72,.12,.48),9067050);e.position.set(0,.42,-.04),e.rotation.x=-.35;const n=Q(new it(.1,.1,.06),15253850);return n.position.set(0,.28,.24),i.add(t,e,n),i}function Dg(){const i=new ft,t=Ma();t.rotation.z=.4,t.rotation.x=.2;const e=Ma();return e.position.set(.55,.05,.2),e.rotation.y=.8,i.add(t,e),i}function Lg(){const i=new ft,t=new Qe({color:16054002,flatShading:!0}),e=new dt(new it(.18,.07,.32),t),n=new dt(new it(.7,.03,.16),t);n.position.set(-.35,.02,0);const s=n.clone();return s.position.x=.35,i.add(e,n,s),i.userData.wings=[n,s],i}function Ur(i=1){return Wa(i)}function Ig(){const i=new ft,t=Q(new Wt(.045,.055,3.4,5),B.woodDark);t.position.y=1.7;const e=Q(new it(.95,1.25,.04),B.white);e.position.set(.52,2.55,0);const n=Ur(.28);return n.position.set(.52,2.55,.06),i.add(t,e,n),i}function Ma(){const i=new ft,t=Q(new it(.95,.72,.72),B.wood);t.position.y=.36;const e=Q(new it(.97,.16,.74),B.green);e.position.y=.42;const n=Ur(.2);return n.position.set(0,.52,.39),i.add(t,e,n),i}function Ug(i=4.4){const t=new ft,e=Q(new Wt(.11,.16,i*.3,5),B.woodDark);e.position.y=i*.15,t.add(e);for(let n=0;n<4;n++){const s=1-n*.18,r=Q(new cn(1.05*s,i*.38,7),n%2?B.greenDeep:B.green);r.position.y=i*.28+n*i*.2,t.add(r)}return t}function pu(){const i=new ft,t=Q(new Wt(.1,.16,3.5,6),9071162);t.position.y=1.75,t.rotation.z=.1,i.add(t);const e=Q(new Re(.22,6,5),B.greenDeep);e.position.set(.18,3.5,0),i.add(e);for(let n=0;n<6;n++){const s=n/6*Math.PI*2,r=Q(new Re(.55,6,4),n%2?B.green:B.greenDeep);r.scale.set(1.6,.22,.55),r.position.set(Math.cos(s)*.85+.15,3.42,Math.sin(s)*.85),r.rotation.y=s,r.rotation.z=-.35,i.add(r)}return i}function kn(i=B.green){const t=new ft;for(const[s,r]of[[-.95,-.7],[.95,-.7],[-.95,.7],[.95,.7]]){const o=Q(new Wt(.07,.08,1.7,5),B.wood);o.position.set(s,.85,r),t.add(o)}const e=Q(new cn(1.75,.9,4),i);e.rotation.y=Math.PI/4,e.position.y=2.15;const n=Q(new it(2.2,.08,1.8),B.wood);return n.position.y=.08,t.add(e,n),t}function ur(i=8,t=1.7){const e=new ft,n=Math.max(3,Math.round(i/.85));for(let r=0;r<n;r++){const o=Q(new it(t,.1,.72),r%2?B.wood:B.woodMid);o.position.set(0,.42,-i/2+.4+r*(i/n)),e.add(o)}const s=Math.max(2,Math.round(i/2.1));for(let r=0;r<s;r++){const o=-i/2+.55+r*(i/s);for(const a of[-t/2+.1,t/2-.1]){const c=Q(new Wt(.07,.08,1.35,5),B.woodDark);c.position.set(a,-.12,o),e.add(c)}}return e}function Ng(){const i=new ft,t=Q(new it(1.15,.38,2.7),B.woodDark);t.position.y=.12;const e=Q(new it(.72,.3,.7),B.wood);e.position.set(0,.14,-1.5);const n=Q(new it(.68,.42,.68),B.white);return n.position.set(0,.5,.35),i.add(t,e,n),i}function Fg(){const i=new ft;for(const[r,o]of[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]]){const a=Q(new Wt(.08,.1,3.6,5),B.woodDark);a.position.set(r,1.8,o),i.add(a)}const t=Q(new it(2.05,.12,2.05),B.wood);t.position.y=3.5;const e=Q(new cn(1.55,.82,4),B.green);e.rotation.y=Math.PI/4,e.position.y=4.25;const n=Q(new it(2.05,.35,2.05),B.woodMid);n.position.y=3.72,i.add(t,e,n);const s=Ur(.24);return s.position.set(0,3.92,1.04),i.add(s),i}function Og(){const i=new ft,t=Q(new it(1.25,.09,.38),B.wood);t.position.y=.4;const e=Q(new it(1.25,.34,.08),B.wood);return e.position.set(0,.6,-.16),i.add(t,e),i}function cl(){const i=new ft,t=Q(new Wt(.04,.05,1.7,5),B.woodDark);t.position.y=.85;const e=Q(new Re(.13,5,5),B.torch);return e.position.y=1.75,e.material.emissive=new bt(B.torch),e.material.emissiveIntensity=.75,i.add(t,e),i}function ll(i=4){const t=new ft,e=Q(new it(i,.07,.055),B.woodDark);e.position.y=.58,t.add(e);const n=Math.round(i/1.05);for(let s=0;s<=n;s++){const r=Q(new it(.065,.72,.065),B.wood);r.position.set(-i/2+s*i/n,.36,0),t.add(r)}return t}function Bg(){const i=new ft;i.name="lighthouse";const t=Q(new Wt(2.55,2.95,1.55,12),B.green);t.position.y=.78;const e=Q(new Wt(1.95,2.4,5.6,12),B.white);e.position.y=4.3;const n=Q(new Wt(2.05,2.2,1.05,12),B.green);n.position.y=5.85;const s=Q(new Wt(1.6,1.95,2.15,12),B.white);s.position.y=7.4;const r=Q(new Wt(1.18,1.22,1.25,8),15265508);r.position.y=9.05,r.material.emissive=new bt(16773570),r.material.emissiveIntensity=.28;const o=Q(new cn(1.5,1.2,8),B.green);o.position.y=10.15;const a=Q(new cn(.07,.5,5),B.woodDark);a.position.y=10.9;const c=Q(new it(.72,1.2,.12),B.woodDark);c.position.set(0,.9,2.65);const l=Q(new Pi(1.62,.065,5,14),B.woodDark);l.rotation.x=Math.PI/2,l.position.y=8.3;for(let p=0;p<12;p++){const f=p/12*Math.PI*2,g=Q(new it(.055,.52,.055),B.woodDark);g.position.set(Math.cos(f)*1.62,8.55,Math.sin(f)*1.62),i.add(g)}const u=Q(new Wt(1.78,1.78,.1,12),B.woodDark);u.position.y=8.22;const m=Ur(1.05);return m.position.set(0,4.78,2.28),i.add(t,e,n,s,r,o,a,c,l,u,m),i}function zg(){const i=new ft,t=Q(new it(2.4,1.4,.08),2763818);t.position.y=1.1,i.add(t);for(let n=0;n<6;n++){const s=Q(new it(.18+n*.08,.04,.04),15253850);s.position.set(-.7+n*.28,.7+n%3*.22,.06),s.rotation.z=n%2?-.4:.3,i.add(s)}const e=Q(new Li(.18,.7,2,5),12864058);return e.rotation.z=Math.PI/2,e.position.set(.2,1.15,.08),i.add(e),i}function kg(){const i=new ft,t=Q(new it(.7,1.5,.5),12864058);t.position.y=.75;const e=Q(new it(.5,.9,.06),8308436);e.position.set(0,.9,.26);const n=Q(new it(.22,.08,.08),B.black);return n.position.set(0,.28,.28),i.add(t,e,n),i}function Hg(){const i=new ft,t=Q(new it(.9,2.2,.9),12864058);t.position.y=1.1;const e=Q(new it(.55,1.1,.06),9353428);e.position.set(0,1.2,.46);const n=Q(new it(.18,.08,.06),B.black);return n.position.set(.18,1.35,.4),i.add(t,e,n),i}function Vg(){const i=new ft,t=Q(new Wt(.7,.7,.12,8),B.rockDark);t.position.y=.06;const e=Q(new Pi(.22,.04,5,8),15253850);return e.rotation.x=Math.PI/2,e.position.y=.14,i.add(t,e),i}function ul(){const i=new ft,t=Q(new it(.42,.06,.42),B.wood);t.position.y=.42;const e=Q(new it(.42,.55,.06),B.woodDark);e.position.set(0,.7,-.18);for(const[n,s]of[[-.16,-.16],[.16,-.16],[-.16,.16],[.16,.16]]){const r=Q(new it(.05,.42,.05),B.woodDark);r.position.set(n,.21,s),i.add(r)}return i.add(t,e),i}function hl(){const i=new ft,t=Q(new Wt(.07,.08,.28,5),7262602);t.position.y=.14;const e=Q(new Wt(.03,.04,.1,5),7262602);return e.position.y=.32,i.add(t,e),i}function Gg(){const i=new ft,t=Q(new it(1.4,2.8,2.4),B.rockDark);t.position.set(-1.5,1.1,0),t.rotation.z=.25;const e=Q(new it(1.4,2.8,2.4),B.rock);e.position.set(1.5,1.1,0),e.rotation.z=-.25;const n=Q(new it(3.2,1.1,2.2),B.rockDark);n.position.set(0,2.35,0);const s=Q(new it(1.9,1.7,2.6),1184272);return s.position.set(0,.95,.15),i.add(t,e,n,s),i}function Ft(i,t,e,n,s=0,r=0,o=0){t.position.set(e,we(e,n)+r,n),t.rotation.y=s,i.add(t),o>0&&xa(e,n,o)}function Wg(i){for(let t=0;t<20;t++){const e=26.2-t*1.12,n=.18,s=we(n,e),r=we(n,e-1.12),o=Q(new it(1.42,.08,1.14),t%2?B.dirt:8021312);o.position.set(n,s+.04,e),o.rotation.x=-Math.atan2(r-s,1.12),i.add(o)}}const Xg=[{id:"MAIN_DOCK",label:"MAIN DOCK",hint:"Starter water",x:1.6,z:32,r:11,fish:!0},{id:"NORTH_DOCK",label:"NORTH DOCK",hint:"Token trout water",x:-24,z:8,r:8,fish:!0},{id:"EAST_BEACH",label:"EAST BEACH",hint:"Sandy shallows",x:28,z:10,r:10,fish:!0},{id:"SOUTH_CLIFFS",label:"SOUTH CLIFFS",hint:"Need Cliff Rod",x:-18,z:18,r:8,fish:!0},{id:"CAVES",label:"THE CAVES",hint:"Dark pool",x:17,z:20,r:7,fish:!0},{id:"OFFSHORE",label:"OFFSHORE",hint:"Need Offshore Rod",x:-30,z:2,r:7,fish:!0},{id:"FOREST",label:"PINE WOODS",hint:"No fishing",x:10,z:-14,r:10,fish:!1},{id:"LIGHTHOUSE",label:"LIGHTHOUSE",hint:"Shop + burns",x:0,z:-1,r:8,fish:!1},{id:"VILLAGE",label:"HUT ROW",hint:"Redeem counter",x:6,z:22,r:6,fish:!1},{id:"EMBER_SHORE",label:"ST ALON SHORE",hint:"Great Saint Alon shallows",x:118,z:16,r:12,fish:!0},{id:"EMBER_POOL",label:"ST ALON POOL",hint:"Need Offshore Rod",x:116,z:-8,r:9,fish:!0},{id:"EMBER_HILL",label:"ST ALON HILL",hint:"Ash ridge",x:118,z:-8,r:10,fish:!1},{id:"THE_DROP",label:"THE DROP",hint:"You can see it. You cannot go there yet.",x:0,z:-96,r:18,fish:!1}];function ya(i,t){let e={id:"ISLAND",label:"ISLAND PATH",hint:"Walk the hill",fish:!1,d:99};for(const n of Xg){const s=Math.hypot(i-n.x,t-n.z);s<n.r&&s<e.d&&(e={...n,d:s})}return we(i,t)<.12&&e.id==="ISLAND"?{id:"OCEAN",label:"OPEN OCEAN",hint:"Swim / boat",fish:!0,d:0}:e}function qg(i){Xa.length=0;const t=new ft;t.name="island";const e=hg();t.add(e);const n=Q(new ln(1100,1100),B.oceanDeep);n.rotation.x=-Math.PI/2,n.position.y=-.45,t.add(n),t.add(Mg()),t.add(yg());const s=Bg(),r=we(0,-1.2);s.position.set(0,r,-1.2),t.add(s),xa(0,-1.2,3.1);const o=new ft;for(let L=0;L<14;L++){const U=5.8-L*.38,W=we(0,U),$=Q(new it(1.4,.1,.4),B.wood);$.position.set(0,W+.05,U),o.add($)}t.add(o);const a=ur(12,2.15);a.position.set(1.6,.12,31.4),t.add(a),Ft(t,kn(B.white),-6.8,22.4,.25,0,1.8),Ft(t,kn(B.green),8.6,21.6,-.3,0,1.8);const c=ur(10.5,1.7);c.position.set(-27.2,.12,8),c.rotation.y=1.2,t.add(c),Ft(t,kn(13808490),-19.2,6.4,.4,0,1.7);const l=Ng();l.position.set(-31,.18,5.6),l.rotation.y=.45,t.add(l),Ft(t,Fg(),-16.8,17.6,.2,-.1,1.6),Ft(t,Gg(),17.2,20.6,.45,-.35,2.4);const u=ur(4.4,1.25);u.position.set(18.8,.12,24.2),u.rotation.y=.4,t.add(u),Ft(t,kn(B.green),25.2,8.8,-.4,0,1.7),Ft(t,kn(13808490),28.4,12.4,-.55,0,1.7),Ft(t,Og(),23.6,11.2,-.7,0,.7);for(const[L,U]of[[22,6.2],[26.2,4.8],[30,8.4],[27.6,15.5],[21.5,14.2]])Ft(t,pu(),L,U,0,0,.7);for(const[L,U]of[[8,-15],[12.2,-17.4],[15.4,-12.6],[6.2,-19.5],[18.2,-15.8],[10.4,-10.6],[4.1,-14.8],[14.2,-20.6],[-3.4,-13.8],[1.2,-17.6],[7.4,-8.2]])Ft(t,Ug(3.8+(L+U)%5*.22),L,U,0,0,.85);for(const[L,U,W]of[[-7.4,5.2,.15],[8.2,-5.4,1.1],[16.4,3.2,.05],[-11.5,-5.2,.7],[12.6,11.4,-.35],[-5.2,14.6,.1],[20.4,-7.2,.5],[-17.2,12.4,.3]])Ft(t,Ig(),L,U,W,0,.28);for(const[L,U]of[[-11.2,13.4],[-9.1,11.6],[9.4,-7.6],[11.6,-5.8],[14.8,8.4],[-3.6,-7.4],[6.8,10.2]])Ft(t,Ma(),L,U,L*.15,0,.7);const m=ll(11);Ft(t,m,7.4,-3.6,.45,0,.45);const p=ll(8.5);Ft(t,p,-5.6,-7.2,-.5,0,.45),Ft(t,cl(),-1.15,8.4),Ft(t,cl(),1.35,8.4),Wg(t);for(const[L,U]of[[3.2,18.4],[5.1,14.2],[-4.4,16.6],[7.8,6.2],[9.2,-9.6],[13.4,-6.2],[16.2,7.4],[-12.6,8.8]])Ft(t,Sg(),L,U);for(const[L,U]of[[6.4,18.8],[-5.2,20.2],[10.8,5.4],[-8.6,14.2],[3.6,-8.4],[14.2,13.6]])Ft(t,Rg(),L,U);for(const[L,U]of[[4.8,-6.2],[-9.4,2.2],[13.6,-3.4],[-4.2,-10.6],[18.2,1.6]])Ft(t,So(),L,U,L*.2,0,.55);Ft(t,Cg(),-14.8,15.2,0,0,.6),Ft(t,lr("NO RUGS"),3.4,28.6,.1,0,.35),Ft(t,lr("CAST HERE"),4.8,33.2,-.2,0,.35),Ft(t,lr("BEWARE CHEF"),-4.2,8.8,.4,0,.35),Ft(t,Zi("DEV WALLET THIS WAY"),9.6,24.8,-.5,0,.4),Ft(t,Zi("LIQUIDITY POOL"),-10.4,20.6,.6,0,.4),Ft(t,Eg(),29.6,6.2,-.6,0,.7),Ft(t,bg(),19.4,18.8,.8,.05,.45),Ft(t,wg(),-8.8,-8.4,.2,0,.5),Ft(t,Tg(),26.8,17.4,.5,0,.4),Ft(t,Pg(),21.2,22.6,.3,0,.45),Ft(t,Dg(),-26.4,12.2,.4,0,.7),Ft(t,zg(),16.4,19.4,.5,.1,0),Ft(t,kg(),18.2,18.2,-.4,0,.6),Ft(t,Hg(),11.4,-16.6,.3,0,.7),Ft(t,Vg(),2.4,-3.2,0,0,.8),Ft(t,ul(),-3.6,31.2,.2,0,.4),Ft(t,hl(),27.4,8.6,.4,0,0),Ft(t,hl(),24.8,13.2,-.3,0,0);const f=Ag();f.position.set(8.4,.18,34.6),f.userData.float=!0,t.add(f);const g=al("tax");g.position.set(92,-.2,-48),g.rotation.y=.4,t.add(g);const _=al("paper");_.position.set(-86,-.2,54),_.rotation.y=-.7,t.add(_);const d=Zi("TAX HAVEN",3.2);d.position.set(86,1.2,-42),d.lookAt(0,2,0),t.add(d);const h=Zi("PAPER HANDS ATOLL",3.6);h.position.set(-80,1.2,48),h.lookAt(0,2,0),t.add(h);const y=Q(new Wt(2.4,3.1,1.1,7),B.sand);y.position.set(-62,-.1,-38),t.add(y);const b=ul();b.position.set(-62,.55,-38),t.add(b);const v=Zi("SIT HERE",2.2);v.position.set(-62,1.1,-36),v.lookAt(0,2,0),t.add(v);const D=Q(new Wt(9,11,4.2,8),1713200);D.position.set(0,1.4,-118),t.add(D);const R=Zi("THE DROP  ·  NOT YET",4.4);R.position.set(0,4.2,-108),R.lookAt(0,2,0),t.add(R);const w=ur(7.2,1.7);w.position.set(It.x-6,.14,It.z+22),w.rotation.y=.2,t.add(w),Ft(t,kn(12864058),It.x-4,It.z+14,.2,0,1.7),Ft(t,kn(B.woodDark),It.x+6,It.z+8,-.4,0,1.7),Ft(t,lr("GREAT SAINT ALON"),It.x-2,It.z+20,.3,0,.4),Ft(t,So(),It.x+8,It.z-4,.4,0,.7),Ft(t,So(),It.x-10,It.z-6,-.2,0,.7);const A=[];for(let L=0;L<5;L++){const U=Lg(),W=L/5*Math.PI*2;U.position.set(Math.cos(W)*22,9+L%3,Math.sin(W)*22),U.userData.orbit=W,U.userData.rad=18+L*3,U.userData.h=8.5+L*.7,t.add(U),A.push(U)}const S=[{type:"TRADER",x:5.4,z:22.8,rot:Math.PI},{type:"FISHERMAN",x:-2.8,z:30.4,rot:.4},{type:"DEFAULT",x:-3.4,z:27.8,rot:.5},{type:"BEACHGOER",x:24.8,z:10.6,rot:-.8},{type:"SCOUT",x:9.8,z:-12.2,rot:.4},{type:"PIRATE",x:-23.4,z:8,rot:1.2},{type:"HUNTER",x:-16.2,z:16.8,rot:.25},{type:"CHEF",x:-2.2,z:7.2,rot:2.5},{type:"BUILDER",x:6.6,z:-4.8,rot:-.4},{type:"HARVESTER",x:12.6,z:-15.2,rot:1.05},{type:"DEFAULT",x:-6.2,z:6.4,rot:.75},{type:"FISHERMAN",x:-3.6,z:31.2,rot:.15,sit:!0,talk:"chair17"},{type:"FISHERMAN",x:1.2,z:29.6,rot:.1,path:[[1.2,29.6],[-2.4,28.2],[3.4,26.8],[1.2,29.6]]},{type:"DEFAULT",x:-14.2,z:16.4,rot:.4},{type:"SCOUT",x:-18.6,z:22.4,rot:.2,watcher:!0},{type:"TRADER",x:5.6,z:8.2,rot:2.2,talk:"advice"},{type:"BEACHGOER",x:22.4,z:14.2,rot:.3},{type:"SCOUT",x:-8.4,z:18.6,rot:1.1},{type:"DEFAULT",x:2.8,z:20.4,rot:-.6},{type:"TRADER",x:-1.6,z:24.2,rot:2.8},{type:"PIRATE",x:It.x-5,z:It.z+18,rot:.4},{type:"HUNTER",x:It.x+4,z:It.z+6,rot:-.8},{type:"CHEF",x:It.x+1,z:It.z+12,rot:1.6}],x=[];for(const L of S){const U=rg(L.type,{phase:L.x});U.position.set(L.x,we(L.x,L.z),L.z),U.rotation.y=L.rot,U.userData.npc=!0,U.userData.path=L.path||null,U.userData.u=Math.random(),U.userData.talk=L.talk||null,U.userData.watcher=!!L.watcher,L.sit&&(U.position.y+=.42),L.watcher&&(U.userData.hide=0),t.add(U),xa(L.x,L.z,.45),x.push(U)}const C=x.find(L=>L.userData.watcher)||null;return i.add(t),{root:t,ocean:e,people:x,lighthouse:s,birds:A,duck:f,watcher:C}}const Yg=[{id:"shop",label:"E  Shop",x:0,z:3.8,r:3.4},{id:"board",label:"E  Log",x:1.4,z:8.2,r:2.4},{id:"redeem",label:"E  Redeem",x:4.2,z:24.4,r:2.6},{id:"boat",label:"E  Boat",x:-31,z:5.6,r:3},{id:"boot",label:"E  Giant boot",x:29.6,z:6.2,r:2.2},{id:"loo",label:"E  Secret loo",x:19.4,z:18.8,r:2},{id:"shrine",label:"E  Pill shrine",x:-8.8,z:-8.4,r:2},{id:"pc",label:"E  Washed-up PC",x:26.8,z:17.4,r:2},{id:"duck",label:"E  Rubber duck",x:8.4,z:34.6,r:2.2},{id:"chest",label:"E  Chest",x:21.2,z:22.6,r:2},{id:"crash",label:"E  Airdrop",x:-26.4,z:12.2,r:2.2},{id:"emberdock",label:"E  Saint Alon dock",x:112,z:14,r:3.2},{id:"vending",label:"E  Cave vending",x:18.2,z:18.2,r:2},{id:"phone",label:"E  Forest phone",x:11.4,z:-16.6,r:2},{id:"bunker",label:"E  Lighthouse hatch",x:2.4,z:-3.2,r:2},{id:"chairman",label:"E  The chair",x:-3.6,z:31.2,r:2.2},{id:"advice",label:"E  Useless advice",x:5.6,z:8.2,r:2.2},{id:"drawings",label:"E  Cave wall",x:16.4,z:19.4,r:2},{id:"drop",label:"E  The Drop",x:0,z:-96,r:14}],As={none:{id:"none",name:"No rod",burn:0,luck:0,zones:[]},basic:{id:"basic",name:"Dock Rod",burn:80,luck:0,zones:["MAIN_DOCK","EAST_BEACH","NORTH_DOCK"],note:"Docks and beach water."},advanced:{id:"advanced",name:"Cliff Rod",burn:180,luck:8,zones:["MAIN_DOCK","EAST_BEACH","NORTH_DOCK","SOUTH_CLIFFS","CAVES"],note:"Opens cliffs and the cave pool."},elite:{id:"elite",name:"Offshore Rod",burn:360,luck:18,zones:["MAIN_DOCK","EAST_BEACH","NORTH_DOCK","SOUTH_CLIFFS","CAVES","OFFSHORE","EMBER_SHORE","EMBER_POOL"],note:"Opens the deep offshore pool and Great Saint Alon."}},Sa=[{id:"blue_snapper",name:"Blue Snapper",rarity:"Common",kind:"credits",value:12,zones:["MAIN_DOCK","EAST_BEACH"],minRod:"basic",blurb:"Everyday dock fish. Silver-blue, always hungry.",trade:"Redeems for 12 credits."},{id:"old_boot",name:"Old Boot",rarity:"Common",kind:"junk",value:0,zones:["MAIN_DOCK","NORTH_DOCK"],minRod:"basic",blurb:"Somebody lost this in 2004. Keep it as a joke.",trade:"Cannot be traded. Trophy junk."},{id:"kelp_perch",name:"Kelp Perch",rarity:"Common",kind:"credits",value:18,zones:["EAST_BEACH","NORTH_DOCK"],minRod:"basic",blurb:"Fat beach perch with kelp in its gills.",trade:"Redeems for 18 credits."},{id:"bottle_note",name:"Message in a Bottle",rarity:"Uncommon",kind:"collectible",value:0,zones:["EAST_BEACH","CAVES"],minRod:"basic",blurb:"A corked bottle. The note is half-legible island lore.",trade:"Collectible. Stays in your pack."},{id:"token_trout",name:"Token Trout",rarity:"Uncommon",kind:"token",value:14,zones:["NORTH_DOCK","MAIN_DOCK","SOUTH_CLIFFS"],minRod:"basic",blurb:"Speckled trout with a mint-green stripe.",trade:"Redeems for 14 native TOKEN."},{id:"cave_eel",name:"Cave Eel",rarity:"Rare",kind:"credits",value:55,zones:["CAVES"],minRod:"advanced",blurb:"Blind, long, and mean. Lives in the black water.",trade:"Redeems for 55 credits."},{id:"locked_crate",name:"Locked Crate",rarity:"Rare",kind:"treasure",value:0,zones:["CAVES","OFFSHORE"],minRod:"advanced",blurb:"Iron-banded crate. Something knocks inside.",trade:"Treasure. Keep it. No payout yet."},{id:"golden_tuna",name:"Golden Tuna",rarity:"Epic",kind:"sol",value:.04,zones:["SOUTH_CLIFFS","OFFSHORE"],minRod:"advanced",blurb:"Heavy gold-flank tuna. The island’s first real prize.",trade:"Redeems for 0.04 SOL (preview)."},{id:"crystal_angler",name:"Crystal Angler",rarity:"Epic",kind:"credits",value:140,zones:["CAVES","OFFSHORE"],minRod:"advanced",blurb:"Glass-clear body, a lantern that never goes out.",trade:"Redeems for 140 credits."},{id:"merch_marlin",name:"Merch Marlin",rarity:"Legendary",kind:"merch",value:1,merch:"Limited Marlin Tee",zones:["OFFSHORE","EAST_BEACH"],minRod:"elite",blurb:"A billfish wearing the island’s drop tag.",trade:"Redeems for a Limited Marlin Tee claim (preview)."},{id:"pump_pillfish",name:"Pump Pillfish",rarity:"Legendary",kind:"token",value:90,zones:["OFFSHORE","SOUTH_CLIFFS"],minRod:"elite",blurb:"Shaped like the official pill. Extremely few exist.",trade:"Redeems for 90 native TOKEN."},{id:"moon_marlin",name:"Moon Marlin",rarity:"Mythic",kind:"sol",value:.18,zones:["OFFSHORE"],minRod:"elite",blurb:"Night-silver marlin. Only the offshore black water.",trade:"Redeems for 0.18 SOL (preview)."},{id:"jackpot_leviathan",name:"Jackpot Leviathan",rarity:"Mythic",kind:"sol",value:.25,zones:["OFFSHORE"],minRod:"elite",blurb:"The island’s jackpot. Almost nobody lands it.",trade:"Redeems for 0.25 SOL (preview)."},{id:"vault_whale",name:"Vault Whale",rarity:"Mythic",kind:"bundle",value:1,zones:["OFFSHORE"],minRod:"elite",blurb:"A pale whale calf with a vault lock on its tail.",trade:"Redeems for 200 credits + 40 TOKEN + 0.05 SOL (preview)."},{id:"cinder_bass",name:"Cinder Bass",rarity:"Uncommon",kind:"credits",value:28,zones:["EMBER_SHORE"],minRod:"basic",blurb:"Warm-water bass off Great Saint Alon.",trade:"Redeems for 28 credits."},{id:"ash_trout",name:"Ash Trout",rarity:"Rare",kind:"token",value:22,zones:["EMBER_SHORE","EMBER_POOL"],minRod:"advanced",blurb:"Grey-speckled trout from the lava shelf.",trade:"Redeems for 22 native TOKEN."},{id:"ember_eel",name:"Ember Eel",rarity:"Epic",kind:"credits",value:160,zones:["EMBER_POOL"],minRod:"elite",blurb:"Glows in the black pool. Don’t drop it.",trade:"Redeems for 160 credits."},{id:"jeff",name:"Jeff",rarity:"Mythic",kind:"collectible",value:0,zones:["OFFSHORE","MAIN_DOCK","EAST_BEACH"],minRod:"basic",blurb:"It’s Jeff. He has a name tag. Nobody issued it.",trade:"Collectible. Jeff stays in the book."}],mu=[{id:"tok20",name:"20 TOKEN",cost:80,give:{tokens:20},note:"Credits → native token. Preview."},{id:"tok60",name:"60 TOKEN",cost:210,give:{tokens:60},note:"Bulk token swap. Preview."},{id:"sol01",name:"0.01 SOL",cost:160,give:{sol:.01},note:"Preview SOL. No chain."},{id:"sol05",name:"0.05 SOL",cost:720,give:{sol:.05},note:"Bigger preview SOL claim."}],gu=[{id:"hat",name:"Dock Hat",cost:70,merch:"Dock Hat",note:"White brim. Preview fulfilment."},{id:"tee",name:"PUMPISLAND Tee",cost:140,merch:"PUMPISLAND Tee",note:"Official pill print. Preview."},{id:"hoodie",name:"Island Hoodie",cost:260,merch:"Island Hoodie",note:"Heavy cotton. Preview."},{id:"rodskin",name:"Mint Rod Wrap",cost:190,merch:"Mint Rod Wrap",note:"Cosmetic wrap. Preview."}],_u=[{id:"skiff",name:"Island Skiff",cost:160,note:"Sail to Great Saint Alon. Preview boat. Local only."}],$g={Common:50,Uncommon:24,Rare:12,Epic:7,Legendary:2.2,Mythic:.45},Eo={basic:1,advanced:2,elite:3};function dl(){return{wallet:null,tokens:240,credits:180,burned:0,rods:["basic"],equipped:"basic",inventory:[],claims:[],merch:[],boat:!1,visitedEmber:!1,caught:0,previewSol:0,book:{},biggest:0,sawDrop:!1}}function Kg(){const i=localStorage.getItem("pi-state-v3"),t=i?{...dl(),...JSON.parse(i)}:dl();Array.isArray(t.merch)||(t.merch=[]),typeof t.boat!="boolean"&&(t.boat=!1),typeof t.visitedEmber!="boolean"&&(t.visitedEmber=!1),(!t.book||typeof t.book!="object")&&(t.book={}),typeof t.biggest!="number"&&(t.biggest=0),typeof t.sawDrop!="boolean"&&(t.sawDrop=!1),t.rods?.length||(t.rods=["basic"],t.equipped="basic");function e(){localStorage.setItem("pi-state-v3",JSON.stringify(t))}function n(){if(!t.wallet){const g=[...crypto.getRandomValues(new Uint8Array(4))].map(_=>_.toString(16).padStart(2,"0")).join("");t.wallet=`preview${g}…demo`,e()}return t.wallet}function s(f){const g=As[f];return!g||g.id==="none"?{ok:!1,reason:"Unknown rod."}:t.rods.includes(f)?{ok:!1,reason:"Already owned."}:t.tokens<g.burn?{ok:!1,reason:`Need ${g.burn} TOKEN.`}:(t.tokens-=g.burn,t.burned+=g.burn,t.rods.push(f),t.equipped=f,e(),{ok:!0,rod:g})}function r(f){return t.rods.includes(f)?(t.equipped=f,e(),!0):!1}function o(f){const g=As[t.equipped]||As.none;return g.id==="none"?{ok:!1,reason:"Burn TOKEN for a rod at the lighthouse."}:g.zones.includes(f)?{ok:!0,rod:g}:{ok:!1,reason:`${g.name} cannot fish ${f.replaceAll("_"," ")}.`}}function a(f){const g=o(f);if(!g.ok)return g;const _=g.rod,d=Sa.filter(A=>A.zones.includes(f)&&Eo[_.id]>=Eo[A.minRod]);if(!d.length)return{ok:!1,reason:"Nothing bites here."};const h=d.map(A=>({c:A,w:Math.max(.12,$g[A.rarity]+_.luck*(A.rarity==="Common"?-.4:.38))})),y=h.reduce((A,S)=>A+S.w,0);let b=Math.random()*y,v=h[0].c;for(const A of h)if(b-=A.w,b<=0){v=A.c;break}const D=v.kind==="collectible"||v.kind==="junk"||v.kind==="treasure",R={uid:`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`,...v,zone:f,at:Date.now(),status:D?"kept":"redeemable"};t.inventory.unshift(R),t.caught+=1,t.book||(t.book={}),t.book[v.id]=(t.book[v.id]||0)+1;const w=20+Math.round(Math.random()*80+(Eo[_.id]||1)*8);return R.size=w,w>(t.biggest||0)&&(t.biggest=w),e(),{ok:!0,item:R}}function c(f){f.kind==="credits"&&(t.credits+=f.value),f.kind==="token"&&(t.tokens+=f.value),f.kind==="sol"&&(t.previewSol+=f.value),f.kind==="merch"&&t.merch.unshift({name:f.merch||f.name,at:Date.now()}),f.kind==="bundle"&&(t.credits+=200,t.tokens+=40,t.previewSol+=.05)}function l(f){const g=t.inventory.find(_=>_.uid===f);return g?g.status!=="redeemable"?{ok:!1,reason:"Not redeemable."}:(g.status="locked",c(g),g.status="redeemed",g.redeemedAt=Date.now(),t.claims.unshift({uid:g.uid,name:g.name,kind:g.kind,value:g.value,note:g.kind==="sol"||g.kind==="merch"||g.kind==="bundle"?"PREVIEW claim — no chain, no fulfilment":"Applied locally"}),e(),{ok:!0,item:g}):{ok:!1,reason:"Not in inventory."}}function u(f){const g=mu.find(_=>_.id===f);return g?t.credits<g.cost?{ok:!1,reason:`Need ${g.cost} credits.`}:(t.credits-=g.cost,g.give.tokens&&(t.tokens+=g.give.tokens),g.give.sol&&(t.previewSol+=g.give.sol),e(),{ok:!0,offer:g}):{ok:!1,reason:"Unknown swap."}}function m(f){const g=gu.find(_=>_.id===f);return g?t.credits<g.cost?{ok:!1,reason:`Need ${g.cost} credits.`}:(t.credits-=g.cost,t.merch.unshift({name:g.merch,at:Date.now()}),e(),{ok:!0,offer:g}):{ok:!1,reason:"Unknown merch."}}function p(f){const g=_u.find(_=>_.id===f);return g?f==="skiff"?t.boat?{ok:!1,reason:"You already own the skiff."}:t.credits<g.cost?{ok:!1,reason:`Need ${g.cost} credits.`}:(t.credits-=g.cost,t.boat=!0,e(),{ok:!0,offer:g}):{ok:!1,reason:"Unknown gear."}:{ok:!1,reason:"Unknown gear."}}return{state:t,save:e,connectPreviewWallet:n,burnForRod:s,equip:r,canFish:o,rollCatch:a,redeem:l,buySwap:u,buyMerch:m,buyGear:p,markEmber(){t.visitedEmber||(t.visitedEmber=!0,e())},markDrop(){t.sawDrop||(t.sawDrop=!0,e())}}}function Nr(i){return{credits:"IN-GAME CREDITS",token:"NATIVE TOKEN",sol:"SOL (PREVIEW)",merch:"MERCH CLAIM (PREVIEW)",treasure:"TREASURE",collectible:"COLLECTIBLE",junk:"JUNK",bundle:"MIXED PAYOUT (PREVIEW)"}[i]||i}function vu(i){return i.trade||Nr(i.kind)}const Ce=(i,t="0 0 80 80")=>`<svg class="thumb" viewBox="${t}" aria-hidden="true">${i}</svg>`;function Zg(i){return Ce(i==="advanced"?`
      <rect x="36" y="8" width="6" height="64" rx="3" fill="#3a2616"/>
      <rect x="37" y="10" width="4" height="48" rx="2" fill="#6a4a28"/>
      <rect x="34" y="50" width="10" height="16" rx="3" fill="#1f5c30"/>
      <circle cx="48" cy="56" r="7" fill="#1a1c1a" stroke="#c9d4c6" stroke-width="2"/>
      <path d="M39 12 C58 18 62 36 54 48" fill="none" stroke="#dfe8e2" stroke-width="1.4"/>
    `:i==="elite"?`
      <rect x="37" y="6" width="5" height="66" rx="2.5" fill="#16382a"/>
      <rect x="38" y="8" width="3" height="50" rx="1.5" fill="#6ed18a"/>
      <rect x="33" y="48" width="12" height="18" rx="3" fill="#f4f8f5"/>
      <circle cx="50" cy="54" r="8" fill="#16382a" stroke="#6ed18a" stroke-width="2"/>
      <path d="M40 10 C64 16 68 38 56 52" fill="none" stroke="#f4f8f5" stroke-width="1.5"/>
    `:`
    <rect x="36" y="10" width="6" height="60" rx="3" fill="#5c3d24"/>
    <rect x="37" y="12" width="4" height="44" rx="2" fill="#c4a15a"/>
    <rect x="34" y="52" width="10" height="14" rx="3" fill="#7a5533"/>
    <circle cx="48" cy="58" r="6" fill="#2a2c2a"/>
    <path d="M39 14 C54 22 56 40 50 52" fill="none" stroke="#dfe8e2" stroke-width="1.3"/>
  `)}function Jg(i){return i.startsWith("sol")?Ce(`
      <circle cx="40" cy="40" r="26" fill="#14f195"/>
      <path d="M40 18 L28 38 H40 L32 62 L56 36 H42 Z" fill="#0b3b2a"/>
    `):Ce(`
    <rect x="18" y="28" width="44" height="28" rx="14" fill="#6ed18a"/>
    <rect x="40" y="28" width="22" height="28" rx="14" fill="#f4f8f5"/>
    <rect x="16" y="26" width="48" height="32" rx="16" fill="none" stroke="#16382a" stroke-width="4"/>
  `)}function jg(i){return Ce(i==="hat"?`
      <ellipse cx="40" cy="52" rx="28" ry="8" fill="#f4f5f0"/>
      <path d="M22 50 Q22 28 40 24 Q58 28 58 50" fill="#2f8a48"/>
      <rect x="20" y="48" width="40" height="6" rx="3" fill="#16382a"/>
    `:i==="hoodie"?`
      <path d="M26 26 Q40 16 54 26 L62 36 L56 40 L54 68 H26 L24 40 L18 36 Z" fill="#1f5c30"/>
      <path d="M32 26 Q40 22 48 26 L46 38 H34 Z" fill="#16382a"/>
      <rect x="36" y="44" width="8" height="10" rx="2" fill="#6ed18a"/>
    `:i==="rodskin"?`
      <rect x="18" y="36" width="44" height="10" rx="5" fill="#6ed18a"/>
      <rect x="18" y="36" width="18" height="10" rx="5" fill="#f4f8f5"/>
      <rect x="16" y="34" width="48" height="14" rx="7" fill="none" stroke="#16382a" stroke-width="3"/>
    `:`
    <path d="M26 24 H54 L58 70 H22 Z" fill="#f4f5f0"/>
    <path d="M26 24 H54 L52 32 H28 Z" fill="#2f8a48"/>
    <rect x="34" y="40" width="12" height="12" rx="6" fill="#6ed18a"/>
    <rect x="40" y="40" width="6" height="12" rx="3" fill="#f4f8f5"/>
  `)}function Ea(i){const t={blue_snapper:["#4e96bc","#2f6f96"],old_boot:["#5c3d24","#3a2616"],kelp_perch:["#6f7d4c","#2f8a48"],bottle_note:["#8fd0ff","#2f6f96"],token_trout:["#6ed18a","#16382a"],cave_eel:["#3a3a48","#1a1c1a"],locked_crate:["#7a5533","#3a2616"],golden_tuna:["#e8c15a","#8a6a20"],crystal_angler:["#b8f0ff","#4e96bc"],merch_marlin:["#2f8a48","#16382a"],pump_pillfish:["#6ed18a","#f4f8f5"],moon_marlin:["#d5e6ee","#6aa3cc"],jackpot_leviathan:["#e4a0ff","#4a2a68"],vault_whale:["#f4f5f0","#6aa3cc"]},[e,n]=t[i]||["#4e96bc","#16382a"];return Ce(i==="old_boot"?`<path d="M18 30 H48 V44 H62 Q70 44 70 54 H18 Z" fill="${e}"/><rect x="20" y="26" width="26" height="8" fill="${n}"/>`:i==="locked_crate"?`<rect x="18" y="22" width="44" height="36" fill="${e}"/><rect x="18" y="36" width="44" height="8" fill="${n}"/><circle cx="40" cy="40" r="5" fill="#e8c15a"/>`:i==="bottle_note"?`<rect x="34" y="14" width="12" height="10" fill="${n}"/><path d="M28 24 H52 L48 66 H32 Z" fill="${e}"/><rect x="32" y="34" width="16" height="18" fill="#f4f5f0"/>`:`
    <ellipse cx="38" cy="40" rx="22" ry="12" fill="${e}"/>
    <path d="M58 40 L74 28 V52 Z" fill="${n}"/>
    <circle cx="26" cy="38" r="3" fill="#142018"/>
    <path d="M36 30 Q40 40 36 50" fill="none" stroke="${n}" stroke-width="2"/>
  `)}function Qg(){return Ce(`
    <rect x="16" y="42" width="48" height="14" rx="4" fill="#3a2616"/>
    <path d="M16 42 L40 22 L64 42" fill="#f4f5f0"/>
    <rect x="36" y="28" width="8" height="16" fill="#6ed18a"/>
  `)}function bo(i){return Ce(i==="fish"?'<ellipse cx="40" cy="40" rx="22" ry="12" fill="#4e96bc"/><path d="M60 40 L74 28 V52 Z" fill="#2f6f96"/>':i==="burn"?'<path d="M40 14 C28 34 28 46 40 66 C52 46 52 34 40 14 Z" fill="#e8c15a"/>':'<rect x="22" y="28" width="36" height="24" rx="4" fill="#6ed18a"/><text x="40" y="46" text-anchor="middle" font-size="16" fill="#16382a" font-family="sans-serif">C</text>')}const hr={ctx:null};function Fr(){if(hr.ctx)return hr.ctx;const i=window.AudioContext||window.webkitAudioContext;return i?(hr.ctx=new i,hr.ctx):null}function t_(){const i=Fr();i&&i.state==="suspended"&&i.resume()}function xu(i,t,e,n,s,r){const o=i.createGain();return o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(e,t+n),o.gain.setValueAtTime(e,t+n+s),o.gain.exponentialRampToValueAtTime(1e-4,t+n+s+r),o}function mn({freq:i=220,type:t="sine",dur:e=.2,vol:n=.08,slide:s=0}={}){const r=Fr();if(!r)return;const o=r.currentTime,a=r.createOscillator();a.type=t,a.frequency.setValueAtTime(i,o),s&&a.frequency.exponentialRampToValueAtTime(Math.max(40,i+s),o+e);const c=xu(r,o,n,.012,e*.35,e*.6);a.connect(c),c.connect(r.destination),a.start(o),a.stop(o+e+.05)}function wo({dur:i=.18,vol:t=.05,hp:e=400,lp:n=2400}={}){const s=Fr();if(!s)return;const r=Math.floor(s.sampleRate*i),o=s.createBuffer(1,r,s.sampleRate),a=o.getChannelData(0);for(let p=0;p<r;p++)a[p]=(Math.random()*2-1)*(1-p/r);const c=s.createBufferSource();c.buffer=o;const l=s.createBiquadFilter();l.type="highpass",l.frequency.value=e;const u=s.createBiquadFilter();u.type="lowpass",u.frequency.value=n;const m=xu(s,s.currentTime,t,.005,i*.2,i*.75);c.connect(l),l.connect(u),u.connect(m),m.connect(s.destination),c.start()}const Ae={step:()=>wo({dur:.07,vol:.035,hp:80,lp:420}),splash:()=>{wo({dur:.28,vol:.07,hp:200,lp:1800}),mn({freq:180,type:"triangle",dur:.18,vol:.03,slide:-80})},cast:()=>mn({freq:340,type:"triangle",dur:.16,vol:.05,slide:-120}),bite:()=>{mn({freq:620,type:"square",dur:.08,vol:.045}),mn({freq:180,type:"sawtooth",dur:.12,vol:.03,slide:-40})},reel:()=>mn({freq:240,type:"triangle",dur:.09,vol:.03,slide:70}),catch:(i=!1)=>{mn({freq:i?520:360,type:"sine",dur:.16,vol:.06}),mn({freq:i?780:480,type:"triangle",dur:.22,vol:.04,slide:40})},miss:()=>mn({freq:140,type:"sine",dur:.2,vol:.04,slide:-70}),ui:()=>mn({freq:480,type:"sine",dur:.07,vol:.03}),burn:()=>{wo({dur:.22,vol:.04,hp:300,lp:1600}),mn({freq:260,type:"sawtooth",dur:.18,vol:.035,slide:90})},jump:()=>mn({freq:210,type:"triangle",dur:.1,vol:.035,slide:80})};let fl=null;function e_(){const i=Fr();if(!i||fl)return;const t=i.currentTime,e=i.createOscillator();e.type="sine",e.frequency.value=72;const n=i.createOscillator();n.type="triangle",n.frequency.value=118;const s=i.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.018,t+1.6);const r=i.createOscillator();r.frequency.value=.07;const o=i.createGain();o.gain.value=.006,r.connect(o),o.connect(s.gain),e.connect(s),n.connect(s),s.connect(i.destination),e.start(),n.start(),r.start(),fl=s}const ci=160,dr=212,Bn=80;function ys(i,t,e,n){return{x:(i+ci)/(ci*2)*e,y:(ci-t)/(ci*2)*n}}function n_(i){const t=i.getContext("2d");i.width=dr,i.height=dr;const e=dr,n=dr,s=document.createElement("canvas");s.width=e,s.height=n;const r=s.getContext("2d");r.fillStyle="#1c5a78",r.fillRect(0,0,e,n);const o=r.createImageData(Bn,Bn),a=o.data;for(let g=0;g<Bn;g++)for(let _=0;_<Bn;_++){const d=-ci+(_+.5)/Bn*ci*2,h=ci-(g+.5)/Bn*ci*2,y=we(d,h),b=Math.hypot(d,h),v=Math.hypot(d-It.x,h-It.z);let D,R,w;if(v<It.r+2&&y>.08)y<.3?(D=201,R=160,w=106):Math.hypot(d-It.x+2,h-It.z-1)<6?(D=196,R=74,w=58):(D=106,R=83,w=68);else if(y<.08||b>Je+3.4){const S=Math.min(1,Math.max(0,Math.min(b,v)/40));D=28+S*8,R=88-S*18,w=118-S*10}else if(y<.28||d>10&&h>-4&&h<24&&y<.62)D=210,R=190,w=145;else if(d>2&&h<-6&&b<30)D=72,R=92,w=52;else if(y>2.8)D=138,R=116,w=72;else{const S=(Math.sin(d*.28)+1)*10;D=98+S,R=118+S*.6,w=62}const A=(g*Bn+_)*4;a[A]=D,a[A+1]=R,a[A+2]=w,a[A+3]=255}const c=document.createElement("canvas");c.width=Bn,c.height=Bn,c.getContext("2d").putImageData(o,0,0),r.imageSmoothingEnabled=!1,r.drawImage(c,0,0,e,n);function l(g,_,d){const h=ys(g,_,e,n);r.save(),r.translate(h.x,h.y),d(r),r.restore()}l(1.6,31.4,g=>{g.fillStyle="#6a4524",g.fillRect(-4,-16,8,22),g.fillStyle="#8a5a2a",g.fillRect(-3.2,-15,6.4,20)}),l(-27.2,8,g=>{g.rotate(-1.2),g.fillStyle="#6a4524",g.fillRect(-3.2,-12,6.4,18)}),l(18.8,24.2,g=>{g.rotate(-.4),g.fillStyle="#6a4524",g.fillRect(-2.4,-6,4.8,10)}),l(0,-1.2,g=>{g.fillStyle="#f4f5f0",g.beginPath(),g.arc(0,0,4.2,0,Math.PI*2),g.fill(),g.fillStyle="#c44a3a",g.beginPath(),g.moveTo(0,-7),g.lineTo(3.2,-1),g.lineTo(-3.2,-1),g.closePath(),g.fill()});for(const[g,_]of[[-6.8,22.4],[8.6,21.6],[-19.2,6.4],[25.2,8.8],[28.4,12.4]])l(g,_,d=>{d.fillStyle="#2f8a48",d.beginPath(),d.moveTo(0,-4),d.lineTo(4,2),d.lineTo(-4,2),d.closePath(),d.fill()});l(17.2,20.6,g=>{g.fillStyle="#2a2c2a",g.beginPath(),g.ellipse(0,0,5,3.4,0,0,Math.PI*2),g.fill()}),l(-31,5.6,g=>{g.fillStyle="#3a2616",g.beginPath(),g.ellipse(0,0,3.4,1.6,.45,0,Math.PI*2),g.fill()});const u=ys(-31,5.6,e,n),m=ys(It.x-6,It.z+22,e,n);r.strokeStyle="rgba(244,247,242,0.35)",r.setLineDash([4,4]),r.beginPath(),r.moveTo(u.x,u.y),r.lineTo(m.x,m.y),r.stroke(),r.setLineDash([]);const p=[{t:"HOME",x:0,z:8,fill:"#f4f7f2"},{t:"DOCK",x:8,z:36,fill:"#f4f7f2"},{t:"ST ALON",x:It.x,z:It.z,fill:"#ffd0c0"}];r.font="700 9px ui-monospace, SFMono-Regular, Menlo, monospace",r.textAlign="center",r.textBaseline="middle";for(const g of p){const _=ys(g.x,g.z,e,n);r.fillStyle="rgba(8,14,12,0.62)",r.fillRect(_.x-16,_.y-6,32,12),r.fillStyle=g.fill,r.fillText(g.t,_.x,_.y)}r.strokeStyle="rgba(244,247,242,0.18)",r.lineWidth=2,r.strokeRect(1,1,e-2,n-2);function f(g,_,d){t.clearRect(0,0,e,n),t.drawImage(s,0,0);const h=ys(g,_,e,n);t.save(),t.translate(h.x,h.y),t.rotate(d),t.beginPath(),t.moveTo(0,11),t.lineTo(6,-6),t.lineTo(0,-2),t.lineTo(-6,-6),t.closePath(),t.fillStyle="#ffffff",t.strokeStyle="#102018",t.lineWidth=2,t.fill(),t.stroke(),t.restore()}return{draw:f}}function i_(i){const t=(i.inventory||[]).some(e=>e.zone==="EMBER_SHORE"||e.zone==="EMBER_POOL");return[{id:"cast",label:"Land a catch from the water",done:(i.caught||0)>0},{id:"redeem",label:"Redeem a catch at the hut counter",done:(i.claims||[]).length>0},{id:"skiff",label:"Buy the Island Skiff in Shop · GEAR",done:!!i.boat},{id:"sail",label:"Sail the skiff to Great Saint Alon",done:!!i.visitedEmber},{id:"ember",label:"Catch a fish on Great Saint Alon",done:t},{id:"book",label:"Open the Fish Book (J)",done:Object.keys(i.book||{}).length>=3},{id:"drop",label:"Look at The Drop from the south cliffs",done:!!i.sawDrop}]}const s_=420;function Xe(i){return new Qe({color:i,flatShading:!0})}function r_(){const i=new ft,t=Xe(16054002),e=new dt(new it(.18,.07,.32),t),n=new dt(new it(.7,.03,.16),t);n.position.set(-.35,.02,0);const s=n.clone();return s.position.x=.35,i.add(e,n,s),i.userData.wings=[n,s],i}function o_(){const i=new ft,t=new dt(new it(.22,.08,.16),Xe(11684402));t.position.y=.06;const e=new dt(new it(.08,.05,.12),Xe(9056802));e.position.set(-.16,.06,.08);const n=e.clone();return n.position.x=.16,i.add(t,e,n),i}function a_(i=!1){const t=new ft,e=new dt(new Li(.07,.22,2,5),Xe(i?2763818:4034495));e.rotation.z=Math.PI/2;const n=new dt(new cn(.08,.12,4),Xe(2779784));if(n.rotation.z=-Math.PI/2,n.position.x=-.2,t.add(e,n),i){const s=new dt(new it(.16,.04,.04),Xe(1711130));s.position.set(.08,.04,0),t.add(s)}return t.visible=!1,t}function pl(i=B.woodDark,t=2.7){const e=new ft,n=new dt(new it(1.15,.38,t),Xe(i));n.position.y=.12;const s=new dt(new it(.72,.3,.7),Xe(B.wood));return s.position.set(0,.14,-t*.55),e.add(n,s),e}function c_(){const i=new ft,t=new dt(new it(4.8,1.1,14),Xe(4869703));t.position.y=.4;const e=new dt(new it(3.6,1.6,4.2),Xe(12864058));e.position.set(0,1.4,3.4);const n=new dt(new Wt(.35,.4,2.2,6),Xe(2763818));return n.position.set(0,2.8,3.6),i.add(t,e,n),i}function l_(){const i=new ft,t=new dt(new it(.5,.35,2.4),Xe(16053744)),e=new dt(new it(3.4,.08,.55),Xe(12864058)),n=new dt(new it(.08,.55,.4),Xe(12864058));return n.position.set(0,.35,1.05),i.add(t,e,n),i}function u_(){return new dt(new it(.04,.28,.04),new an({color:12969200,transparent:!0,opacity:.45}))}function h_(i){const t=(i/s_%1+1)%1,e=t*Math.PI*2,n=Math.sin(t*Math.PI*2),s=n<0;return{u:t,ang:e,elev:n,night:s,dusk:t>.42&&t<.58,dawn:t<.12||t>.92}}function d_(i){const t={birds:[],crabs:[],jumpers:[],boats:[],ships:[],planes:[],rain:[],patrol:[],beam:null,fog:null,ghostBoat:null,leviathan:null,watcher:null,chairIsle:null,weather:"clear",weatherT:18,eventT:40,stealT:22};for(let l=0;l<8;l++){const u=r_(),m=l/8*Math.PI*2;u.userData.orbit=m,u.userData.rad=16+l%5*3.2,u.userData.h=7.4+l%4*.8,u.userData.cx=l%2?2:26,u.userData.cz=l%2?30:10,i.add(u),t.birds.push(u)}const e=[[26,8],[28,12],[24,6],[22,14],[30,9]];for(const[l,u]of e){const m=o_();m.position.set(l,.04,u),m.userData.ox=l,m.userData.oz=u,m.userData.ph=Math.random()*6,i.add(m),t.crabs.push(m)}for(let l=0;l<5;l++){const u=a_(l===3);u.userData.cool=2+l*1.4,u.userData.sunglass=l===3,i.add(u),t.jumpers.push(u)}for(let l=0;l<3;l++){const u=pl();u.userData.a=l*2.1,u.userData.rad=58+l*8,u.userData.speed=.05+l*.012,i.add(u),t.boats.push(u)}const n=c_();n.userData.t=0,n.userData.live=!1,n.visible=!1,i.add(n),t.ships.push(n);const s=l_();s.visible=!1,s.userData.live=!1,i.add(s),t.planes.push(s);const r=pl(3810838,3.2);r.visible=!1,r.userData.live=!1,i.add(r),t.ghostBoat=r;const o=new dt(new Li(1.8,7.5,3,6),new Qe({color:1318952,flatShading:!0,transparent:!0,opacity:.55}));o.rotation.z=Math.PI/2,o.visible=!1,o.userData.live=!1,i.add(o),t.leviathan=o;for(let l=0;l<28;l++){const u=u_();u.visible=!1,u.userData.vy=12+Math.random()*8,i.add(u),t.rain.push(u)}const a=new dt(new it(.35,.35,48),new an({color:16773568,transparent:!0,opacity:.18,depthWrite:!1}));a.position.set(0,10.2,-1.2),a.visible=!1,i.add(a),t.beam=a;const c=new dt(new ln(220,220),new an({color:13490384,transparent:!0,opacity:0,depthWrite:!1}));return c.rotation.x=-Math.PI/2,c.position.y=1.4,i.add(c),t.fog=c,t}function f_(i,t){const{dt:e,t:n,camera:s,toast:r,night:o,rough:a,raining:c,foggy:l}=t,u=s.position.x,m=s.position.z;for(const d of i.birds){d.userData.orbit+=e*.28;const h=d.userData.orbit;if(d.position.set(d.userData.cx+Math.cos(h)*d.userData.rad,d.userData.h+Math.sin(n*1.4+h)*.5,d.userData.cz+Math.sin(h)*d.userData.rad),d.rotation.y=-h+Math.PI/2,d.userData.wings){const y=Math.sin(n*9+h)*.5;d.userData.wings[0].rotation.z=y,d.userData.wings[1].rotation.z=-y}}i.stealT-=e,i.stealT<=0&&(i.stealT=28+Math.random()*24,Math.hypot(u,m-32)<18&&r("A gull took a fish. Not yours. Allegedly."));for(const d of i.crabs){const h=n*.7+d.userData.ph,y=d.userData.ox+Math.sin(h)*1.6,b=d.userData.oz+Math.cos(h*.8)*1.1;d.position.set(y,Math.max(.03,we(y,b)+.02),b),d.rotation.y=h}for(const d of i.jumpers){if(d.userData.cool-=e,!d.visible&&d.userData.cool<=0){const h=Math.random()*Math.PI*2,y=36+Math.random()*10;d.userData.x=Math.cos(h)*y,d.userData.z=Math.sin(h)*y,d.userData.jump=0,d.visible=!0,d.userData.cool=6+Math.random()*8}if(d.visible){d.userData.jump+=e;const h=d.userData.jump,y=qn(d.userData.x,d.userData.z,n)+Math.sin(h*4.2)*1.35;d.position.set(d.userData.x+h*.8,y,d.userData.z),d.rotation.z=.4-h,h>1.15&&(d.visible=!1)}}for(const d of i.boats){d.userData.a+=e*d.userData.speed;const h=d.userData.a,y=Math.cos(h)*d.userData.rad,b=Math.sin(h)*d.userData.rad;d.position.set(y,qn(y,b,n)+.08,b),d.rotation.y=-h+Math.PI/2,d.rotation.z=Math.sin(n*1.2+h)*.08*(a?2.2:1)}const p=i.ships[0];if(p)if(!p.userData.live)p.userData.cool=(p.userData.cool??20)-e,p.userData.cool<=0&&(p.userData.live=!0,p.visible=!0,p.userData.x=-90,p.userData.z=70);else{p.userData.x+=e*4.2;const d=p.userData.x,h=p.userData.z;p.position.set(d,qn(d,h,n)+.2,h),p.rotation.y=Math.PI/2,d>110&&(p.userData.live=!1,p.visible=!1,p.userData.cool=55+Math.random()*40)}const f=i.planes[0];f&&(f.userData.live?(f.userData.x+=e*22,f.userData.z+=e*6,f.position.set(f.userData.x,28,f.userData.z),f.rotation.y=Math.PI/2.4,f.userData.x>120&&(f.userData.live=!1,f.visible=!1,f.userData.cool=50+Math.random()*50)):(f.userData.cool=(f.userData.cool??35)-e,f.userData.cool<=0&&(f.userData.live=!0,f.visible=!0,f.userData.x=-80,f.userData.z=-40)));const g=i.ghostBoat;if(g)if(!g.userData.live)g.userData.cool=(g.userData.cool??26)-e,g.userData.cool<=0&&(g.userData.live=!0,g.visible=!0,g.userData.x=48,g.userData.z=-36);else{g.userData.x-=e*3.4;const d=g.userData.x,h=g.userData.z;g.position.set(d,qn(d,h,n)+.1,h),g.rotation.y=-Math.PI/2,d<-70&&(g.userData.live=!1,g.visible=!1,g.userData.cool=40+Math.random()*50)}const _=i.leviathan;if(_&&(_.userData.live?(_.userData.k+=e,_.userData.x-=e*7,_.position.set(_.userData.x,-1.4,_.userData.z),_.userData.k>2.4&&(_.visible=!1,_.userData.live=!1,_.userData.cool=48+Math.random()*30)):(_.userData.cool=(_.userData.cool??18)-e,we(u,m)<.1&&Math.hypot(u,m)>Je-2&&_.userData.cool<=0&&(_.userData.live=!0,_.visible=!0,_.userData.k=0,_.userData.x=u+8,_.userData.z=m-4))),i.watcher&&(Math.hypot(u-i.watcher.position.x,m-i.watcher.position.z)<11?(i.watcher.visible=!1,i.watcher.userData.hide=n):!i.watcher.visible&&n-(i.watcher.userData.hide||0)>16&&(i.watcher.visible=!0)),i.beam&&(i.beam.visible=o,o&&(i.beam.rotation.y=n*.35,i.beam.material.opacity=.16+Math.sin(n*2)*.04)),i.fog){const d=l?.22:0;i.fog.material.opacity+=(d-i.fog.material.opacity)*Math.min(1,e*1.6),i.fog.position.set(u,1.5,m)}for(const d of i.rain){if(!c){d.visible=!1;continue}d.visible=!0,d.position.y-=d.userData.vy*e,(d.position.y<.2||!d.userData.set)&&(d.position.set(u+(Math.random()-.5)*28,8+Math.random()*10,m+(Math.random()-.5)*28),d.userData.set=!0)}for(const d of i.patrol){const h=d.userData.path;if(!h)continue;d.userData.u=(d.userData.u||0)+e*.08;const y=d.userData.u%1,b=Math.floor(y*h.length),v=(b+1)%h.length,D=y*h.length-b,R=h[b][0]+(h[v][0]-h[b][0])*D,w=h[b][1]+(h[v][1]-h[b][1])*D;d.position.set(R,we(R,w),w),d.rotation.y=Math.atan2(h[v][0]-h[b][0],h[v][1]-h[b][1]),d.userData.moving=!0}if(i.weatherT-=e,i.weatherT<=0){const d=Math.random();i.weather=d<.55?"clear":d<.75?"rain":d<.9?"fog":"storm",i.weatherT=22+Math.random()*28,i.weather==="storm"&&r("The sea got ugly. Stay on the dock if you like your hat."),i.weather==="fog"&&r("Fog came in sideways. The lighthouse is doing its best.")}if(i.eventT-=e,i.eventT<=0){i.eventT=50+Math.random()*40;const d=Math.random();d<.25?r("The water went still. Then it didn’t."):d<.5?r("Something huge moved under the drop. You weren’t meant to see that."):d<.75?r("A plane nobody scheduled crossed the island."):r("Jeff was spotted. That’s the whole report.")}}const Di=document.getElementById("game"),p_=document.getElementById("hud"),Mu=document.getElementById("boot"),m_=document.getElementById("loader"),ml=document.getElementById("load-fill"),gl=document.getElementById("load-line"),_l=document.getElementById("prompt"),g_=document.getElementById("zone-label"),__=document.getElementById("zone-hint"),v_=document.getElementById("area-now-label"),x_=document.getElementById("area-now-hint"),yr=document.getElementById("area-enter");let vl="",Sr=0;const M_=document.getElementById("token-bal"),y_=document.getElementById("credit-bal"),S_=document.getElementById("catch-count"),fr=document.getElementById("rod-slot"),An=document.getElementById("panel"),ba=document.getElementById("toast"),ji=document.getElementById("cast-meter"),E_=document.getElementById("cast-fill"),b_=document.getElementById("cast-label"),xl=document.getElementById("cast-phase"),di=document.getElementById("catch-card"),Ml=document.getElementById("compass-n"),yu=document.getElementById("touch"),Gt=Kg(),Ie=Object.create(null),je={x:0,y:0},de=new P,sn=new P,w_=new P;let Or=!1,Ps=!1,Fe=null,Pt=null,Ue=null;const T_={x:-31,z:5.6},A_={x:112,z:14};let Er=0,Rs=0,Mn=null,fe=null,ds=!1,To=0,Ao=0,yl=!0,pr=72,Su="rods";const Rr=matchMedia("(pointer: coarse)").matches,Ze={active:!1,x:0,y:0,id:null},Ii=new U0({canvas:Di,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!0});Ii.setPixelRatio(1);Ii.setSize(innerWidth,innerHeight);Ii.shadowMap.enabled=!1;Ii.outputColorSpace=Ne;Ii.toneMapping=Yn;const We=new N0;We.background=new bt(B.sky);We.fog=new Oa(B.sky,.011);const xt=new rn(72,innerWidth/innerHeight,.08,520);xt.rotation.order="YXZ";xt.position.set(yo.x,yo.y,yo.z);const Eu=new J0(12967147,6972752,1.2);We.add(Eu);const Cr=new fu(16774102,.85);Cr.position.set(-48,62,22);We.add(Cr);const Be=qg(We),R_=cg();We.add(R_);const ri=d_(Be.root);ri.patrol=Be.people.filter(i=>i.userData.path);ri.watcher=Be.watcher;const Gn=dg();We.add(Gn);const Ds=fg();We.add(Ds);const li=mg();xt.add(li);li.position.set(.18,-.12,-.42);wa();const Sl=document.getElementById("minimap"),El=Sl?n_(Sl):null,bu=new fu(12047592,.28);bu.position.set(30,18,-40);We.add(bu);function wa(){Mn&&xt.remove(Mn),Mn=ag(Gt.state.equipped!=="none"),xt.add(Mn),We.add(xt)}function Yt(i){ba.textContent=i,ba.classList.remove("hidden"),Er=2.6}function gn(){M_.textContent=String(Gt.state.tokens),y_.textContent=String(Gt.state.credits),S_.textContent=String(Gt.state.caught);const i=As[Gt.state.equipped];!i||i.id==="none"?(fr.textContent="NO ROD",fr.classList.add("empty")):(fr.textContent=i.name.toUpperCase(),fr.classList.remove("empty")),C_()}function C_(){const i=document.getElementById("quest-list");if(!i)return;const t=i_(Gt.state);i.innerHTML=`<p>OBJECTIVES</p><ul>${t.map(e=>`<li class="${e.done?"done":""}"><i>${e.done?"✓":"○"}</i>${e.label}</li>`).join("")}</ul>`}function wu(){document.pointerLockElement&&document.exitPointerLock(),Or=!1}function vn(){Fe=null,An.classList.add("hidden"),An.setAttribute("aria-hidden","true"),An.innerHTML=""}function yn(i){wu(),Fe=i,An.classList.remove("hidden"),An.setAttribute("aria-hidden","false"),i==="shop"?si():i==="inv"?Ta():i==="board"?D_():i==="book"?L_():i==="redeem"&&Ta(!0)}function P_(){const i=Gt.state.wallet;return`<div class="shop-wallet">
    <div>
      <b>${i?"Preview wallet":"No wallet"}</b>
      <span>${i||"Local demo only"}</span>
    </div>
    <button type="button" data-act="connect">${i?"LINKED":"LINK"}</button>
  </div>`}function si(){const i=Su,t=Object.values(As).filter(o=>o.id!=="none").map(o=>{const a=Gt.state.rods.includes(o.id),c=Gt.state.equipped===o.id;return`<article class="card">
        <div class="art">${Zg(o.id)}</div>
        <div class="copy">
          <b>${o.name}</b>
          <span>${o.note}</span>
          <i class="tag token">BURN ${o.burn} TOKEN</i>
        </div>
        ${a?`<button type="button" data-act="equip" data-id="${o.id}" ${c?"disabled":""}>${c?"ON":"EQUIP"}</button>`:`<button class="primary" type="button" data-act="burn" data-id="${o.id}">BURN</button>`}
      </article>`}).join(""),e=mu.map(o=>`<article class="card">
      <div class="art">${Jg(o.id)}</div>
      <div class="copy">
        <b>${o.name}</b>
        <span>${o.note}</span>
        <i class="tag">${o.cost} CREDITS</i>
      </div>
      <button class="primary" type="button" data-act="swap" data-id="${o.id}">SWAP</button>
    </article>`).join(""),n=_u.map(o=>{const a=o.id==="skiff"&&Gt.state.boat;return`<article class="card">
      <div class="art">${Qg()}</div>
      <div class="copy">
        <b>${o.name}</b>
        <span>${o.note}</span>
        <i class="tag">${o.cost} CREDITS</i>
      </div>
      ${a?'<em class="kept">OWNED</em>':`<button class="primary" type="button" data-act="gear" data-id="${o.id}">BUY</button>`}
    </article>`}).join(""),s=gu.map(o=>`<article class="card">
      <div class="art">${jg(o.id)}</div>
      <div class="copy">
        <b>${o.name}</b>
        <span>${o.note}</span>
        <i class="tag merch">${o.cost} CREDITS</i>
      </div>
      <button class="primary" type="button" data-act="merch" data-id="${o.id}">BUY</button>
    </article>`).join(""),r=Gt.state.merch.length?`<div class="locker">${Gt.state.merch.map(o=>`<span>${o.name}</span>`).join("")}</div>`:'<p class="sub">Locker empty.</p>';An.innerHTML=`
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">LIGHTHOUSE</p>
    <h2>Shop</h2>
    <div class="wallet-line">
      <span><em>${Gt.state.credits}</em>CR</span>
      <span><em>${Gt.state.tokens}</em>TOKEN</span>
      <span><em>${Gt.state.previewSol.toFixed(2)}</em>SOL</span>
    </div>
    <div class="tabs">
      <button type="button" data-act="tab" data-id="rods" class="${i==="rods"?"on":""}">RODS</button>
      <button type="button" data-act="tab" data-id="gear" class="${i==="gear"?"on":""}">GEAR</button>
      <button type="button" data-act="tab" data-id="swap" class="${i==="swap"?"on":""}">SWAPS</button>
      <button type="button" data-act="tab" data-id="merch" class="${i==="merch"?"on":""}">MERCH</button>
    </div>
    ${i==="rods"?`${P_()}<div class="cards">${t}</div><p class="sub">Burned ${Gt.state.burned} TOKEN · preview only</p>`:""}
    ${i==="gear"?`<div class="cards">${n}</div><p class="sub">Buy the skiff, then E on the north dock boat. Local preview. Not a live fleet.</p>`:""}
    ${i==="swap"?`<div class="cards">${e}</div><p class="sub">Credits → TOKEN or preview SOL. No chain.</p>`:""}
    ${i==="merch"?`<div class="cards">${s}</div>${r}<p class="sub">Preview locker. Nothing ships.</p>`:""}
  `}function Ta(i=!1){const t=Gt.state.inventory,e=t.length?t.map(n=>`<article class="card">
        <div class="art">${Ea(n.id)}</div>
        <div class="copy">
          <b>${n.name}</b>
          <span>${n.blurb||vu(n)}</span>
          <i class="tag ${n.kind}">${n.rarity} · ${Nr(n.kind)}</i>
        </div>
        ${n.status==="redeemable"?`<button class="primary" type="button" data-act="redeem" data-id="${n.uid}">REDEEM</button>`:`<em class="kept">${n.status.toUpperCase()}</em>`}
      </article>`).join(""):'<p class="empty-pack">Nothing in the pack. Fish the docks.</p>';An.innerHTML=`
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">${i?"COUNTER":"PACK"}</p>
    <h2>${i?"Redeem":"Catch pack"}</h2>
    <p class="sub">${i?"Preview claims. SOL and merch stay in this browser.":"Each catch shows what it trades for."}</p>
    <div class="cards">${e}</div>
    <p class="sub">Preview SOL claimed: ${Gt.state.previewSol.toFixed(2)}</p>
  `}function D_(){const i={};for(const e of Gt.state.inventory)i[e.rarity]=(i[e.rarity]||0)+1;const t=["Common","Uncommon","Rare","Epic","Legendary","Mythic"].map(e=>`<div class="stat-pill"><b>${i[e]||0}</b><span>${e}</span></div>`).join("");An.innerHTML=`
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">JOURNAL</p>
    <h2>Island log</h2>
    <p class="sub">Local preview. Room for a crowd — not a live 50-player server.</p>
    <div class="stat-grid">
      <div class="stat-card">${bo("fish")}<b>${Gt.state.caught}</b><span>Landed</span></div>
      <div class="stat-card">${bo("burn")}<b>${Gt.state.burned}</b><span>Burned</span></div>
      <div class="stat-card">${bo("credits")}<b>${Gt.state.credits}</b><span>Credits</span></div>
    </div>
    <div class="rarity-row">${t}</div>
    <p class="sub">Local record · biggest fish ${Gt.state.biggest||0} cm. Not a live server board.</p>
  `}function L_(){const i=Gt.state.book||{},t=Sa.map(e=>{const n=i[e.id]||0;return`<article class="card">
      <div class="art">${Ea(n?e.id:"old_boot")}</div>
      <div class="copy">
        <b>${n?e.name:"???"}</b>
        <span>${n?e.blurb:"Not logged yet."}</span>
        <i class="tag">${n?`${e.rarity} · x${n}`:"UNKNOWN"}</i>
      </div>
    </article>`}).join("");An.innerHTML=`
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">FISH BOOK</p>
    <h2>Catch log</h2>
    <p class="sub">${Object.keys(i).length}/${Sa.length} logged · biggest ${Gt.state.biggest||0} cm · this browser only</p>
    <div class="cards">${t}</div>
  `}An.addEventListener("click",i=>{const t=i.target.closest("button");if(!t)return;const e=t.dataset.act;if(e==="close"){vn();return}if(e==="connect"){Gt.connectPreviewWallet(),Ae.ui(),Yt("Preview wallet linked. No real keys."),si();return}if(e==="burn"){const n=Gt.burnForRod(t.dataset.id);n.ok?(Ae.burn(),Yt(`Burned ${n.rod.burn} TOKEN · ${n.rod.name} unlocked`),wa()):Yt(n.reason),gn(),si();return}if(e==="equip"){Gt.equip(t.dataset.id),wa(),gn(),si();return}if(e==="redeem"){const n=Gt.redeem(t.dataset.id);n.ok?Yt(`Redeemed ${n.item.name} · ${Nr(n.item.kind)}`):Yt(n.reason),gn(),Ta(Fe==="redeem");return}if(e==="tab"){Su=t.dataset.id,si();return}if(e==="swap"){const n=Gt.buySwap(t.dataset.id);n.ok?(Ae.ui(),Yt(`Swapped credits for ${n.offer.name}`)):Yt(n.reason),gn(),si();return}if(e==="merch"){const n=Gt.buyMerch(t.dataset.id);n.ok?(Ae.ui(),Yt(`Claimed ${n.offer.name} (preview locker)`)):Yt(n.reason),gn(),si()}if(e==="gear"){const n=Gt.buyGear(t.dataset.id);n.ok?(Ae.ui(),Yt("Island Skiff owned. E the north dock boat to sail.")):Yt(n.reason),gn(),si()}});function Tu(){if(Fe){vn();return}if(fe){if(fe.id==="shop"&&yn("shop"),fe.id==="board"&&yn("board"),fe.id==="redeem"&&yn("redeem"),fe.id==="boat"){if(!Gt.state.boat){Yt("Buy the Island Skiff in Shop · GEAR first.");return}wl(A_,"Great Saint Alon");return}if(fe.id==="emberdock"){wl(T_,"Pump Island");return}fe.id==="boot"&&Yt("Size 400. Someone lost the other one."),fe.id==="loo"&&Yt("Cave plumbing. Do not fish here."),fe.id==="shrine"&&Yt("The pill watches. Burn wisely."),fe.id==="pc"&&Yt("Still compiling. Since 2004."),fe.id==="duck"&&Yt("Quack. Not a fish. You cannot redeem this."),fe.id==="chest"&&Yt("Locked. The chef has the key. Obviously."),fe.id==="crash"&&Yt("Failed airdrop. Contents: sand."),fe.id==="vending"&&Yt("Sells warm soda and a key that fits nothing. Out of order since 2009."),fe.id==="phone"&&Yt(Math.random()<.5?"It rings. Nobody speaks. You hang up first.":"Dial tone. Then a splash. Then nothing."),fe.id==="bunker"&&Yt("Hatch is locked from below. Something knocks twice, then stops."),fe.id==="chairman"&&Yt("Been here 17 years. Says the fish come to him now. He has not moved."),fe.id==="advice"&&Yt("Cast when the water looks wet. Reel when it doesn’t. Good luck."),fe.id==="drawings"&&Yt("Scratched into the rock: a fish larger than the island. Dated tomorrow."),fe.id==="drop"&&(Gt.markDrop(),gn(),Yt("The Drop. You can see it from day one. You cannot go there yet."))}}function oi(i,t,e){ji&&(ji.classList.remove("hidden","bite","reel"),i==="bite"&&ji.classList.add("bite"),i==="reel"&&ji.classList.add("reel"),xl&&(xl.textContent=i.toUpperCase()),b_.textContent=t,E_.style.width=`${Math.max(0,Math.min(100,e))}%`)}function Au(){const i=new P(0,0,-1).applyEuler(xt.rotation);for(const t of[3.2,5.4,8.2,11]){const e=xt.position.x+i.x*t,n=xt.position.z+i.z*t;if(xt.position.y+i.y*t<1.4&&we(e,n)<.35)return{ok:!0,x:e,z:n}}return{ok:!1}}function I_(i){if(!di)return;document.getElementById("catch-rarity").textContent=i.rarity.toUpperCase(),document.getElementById("catch-name").textContent=i.name;const t=document.getElementById("catch-blurb");t&&(t.textContent=i.blurb||""),document.getElementById("catch-kind").textContent=Nr(i.kind);const e=document.getElementById("catch-trade");e&&(e.textContent=vu(i)),di.classList.remove("hidden"),Rs=8,li.visible=!0,wu(),Ae.catch(i.rarity==="Legendary"||i.rarity==="Mythic"||i.rarity==="Epic")}function U_(){if(Pt||Fe||!ds||Ue||di&&!di.classList.contains("hidden"))return;const i=Au();if(!i.ok){Yt("Look at the water to cast.");return}const t=ya(i.x,i.z),e=ya(xt.position.x,xt.position.z),n=t.fish?t:e;if(!(we(i.x,i.z)<.35)){Yt("Look at the water to cast.");return}const r=Gt.canFish(n.id);if(!r.ok){Yt(r.reason);return}Pt={t:0,phase:"cast",zone:n.id,window:.85+Math.random()*.45,biteAt:1.25+Math.random()*1.7,bx:i.x,bz:i.z},Ae.cast(),oi("cast","F to Cast",12)}function N_(i){if(!Pt){Gn.visible=!1;return}const t=Math.sin(i*3.2)*.05,e=performance.now()/1e3,n=qn(Pt.bx,Pt.bz,e);Gn.position.set(Pt.bx,n+.08+t,Pt.bz),Gn.rotation.z=Math.sin(e*2.1)*.18,Gn.rotation.x=Math.cos(e*1.6)*.12,Gn.visible=Pt.phase!=="cast"||Pt.t>.28}function F_(i){if(!Pt){bs(Mn,"idle",0),Gn.visible=!1;return}if(Pt.t+=i,bs(Mn,Pt.phase,Pt.t),N_(performance.now()/1e3),Pt.phase==="cast")oi("cast","F to Cast",Pt.t/.42*100),Pt.t>=.42&&(Pt.phase="wait",Pt.t=0,va(Ds,Pt.bx,.12,Pt.bz),Ae.splash(),oi("wait","F to Reel · waiting",0));else if(Pt.phase==="wait")oi("wait","F to Reel · waiting",Pt.t/Pt.biteAt*100),Pt.t>=Pt.biteAt&&(Pt.phase="bite",Pt.t=0,va(Ds,Pt.bx,.12,Pt.bz),Ae.bite(),oi("bite","F to Reel",100),Yt("F to Reel"));else if(Pt.phase==="bite")oi("bite","F to Reel",(1-Pt.t/Pt.window)*100),Pt.t>Pt.window&&(Pt=null,Gn.visible=!1,ji.classList.add("hidden"),bs(Mn,"idle",0),Ae.miss(),Yt("It got away."));else if(Pt.phase==="reel"&&(oi("reel","F to Reel",Pt.t/.55*100),Pt.t>=.55)){const t=Pt.zone;Pt=null,Gn.visible=!1,ji.classList.add("hidden"),bs(Mn,"idle",0);const e=Gt.rollCatch(t);e.ok?(gn(),I_(e.item),Yt(`${e.item.rarity} · ${e.item.name}`)):Yt(e.reason)}}function qa(){if(ds){if(!Pt){U_();return}Pt.phase==="bite"&&(Pt.phase="reel",Pt.t=0,Ae.reel(),oi("reel","F to Reel",0))}}function bl(){return Ps?1.05:1.62}function yi(i,t){i&&i.textContent!==t&&(i.textContent=t)}function O_(){const i=xt.position;fe=null;let t=99;for(const r of Yg){const o=Math.hypot(i.x-r.x,i.z-r.z);o<r.r&&o<t&&(t=o,fe=r)}const e=ya(i.x,i.z),n=e.hint||(e.fish?"Fish here":"Explore");if(yi(g_,e.label),yi(__,n),yi(v_,e.label),yi(x_,n),e.id!==vl&&(vl=e.id,ds&&yr&&(yi(yr,`ENTERING  ${e.label}`),yr.classList.remove("hidden"),Sr=2.4)),Ue){yi(_l,"Sailing…");return}let s="";Fe||(Pt?s=Pt.phase==="cast"?"F to Cast":"F to Reel":fe?s=fe.label:Au().ok&&Gt.state.equipped!=="none"&&(s="F to Cast")),yi(_l,s)}function Ru(i,t){je.x-=i*.00225,je.y-=t*.00225,je.y=Math.max(-1.2,Math.min(1.2,je.y)),xt.rotation.y=je.x,xt.rotation.x=je.y}function wl(i,t){Ue||Pt||(Ue={t:0,dur:7.2,fromX:xt.position.x,fromZ:xt.position.z,toX:i.x,toZ:i.z,label:t},je.x=Math.atan2(i.x-xt.position.x,-(i.z-xt.position.z)),xt.rotation.y=je.x,Yt(`Sailing to ${t}`))}function B_(i){Ue.t+=i;const t=Math.min(1,Ue.t/Ue.dur),e=t*t*(3-2*t);xt.position.x=Ue.fromX+(Ue.toX-Ue.fromX)*e,xt.position.z=Ue.fromZ+(Ue.toZ-Ue.fromZ)*e;const n=performance.now()/1e3;if(xt.position.y=qn(xt.position.x,xt.position.z,n)+1.42,t>=1){const s=Ue.label;Ue=null,s==="Great Saint Alon"&&Gt.markEmber(),Yt(`Landed · ${s}`),gn()}}let Tl=0;function z_(i){if(Ue){B_(i);return}const t=performance.now()/1e3,e=we(xt.position.x,xt.position.z),n=qn(xt.position.x,xt.position.z,t),s=e<.12,r=Math.max(n,.02),o=s?r:e,a=!!(Ie.ShiftLeft||Ie.ShiftRight),c=(a?8.4:5.1)*(Ps?.42:1)*(s?.55:1)*(Pt?.32:1);sn.set(0,0,0),(Ie.KeyW||Ie.ArrowUp)&&(sn.z-=1),(Ie.KeyS||Ie.ArrowDown)&&(sn.z+=1),(Ie.KeyA||Ie.ArrowLeft)&&(sn.x-=1),(Ie.KeyD||Ie.ArrowRight)&&(sn.x+=1),Rr&&(sn.x+=Ze.x,sn.z+=Ze.y),sn.lengthSq()>1&&sn.normalize(),sn.applyAxisAngle(w_.set(0,1,0),je.x);const l=s?9:11;de.x+=(sn.x*c-de.x)*Math.min(1,i*l),de.z+=(sn.z*c-de.z)*Math.min(1,i*l),Ie._jump&&(xt.position.y<=o+bl()+.1&&(de.y=s?4.2:6.4,Ae.jump()),Ie._jump=!1),de.y-=(s?9:20)*i;let u=xt.position.x+de.x*i,m=xt.position.z+de.z*i;if(Gt.state.boat){const w=Math.hypot(u,m),A=Math.hypot(u-It.x,m-It.z),S=210;if(w>S&&A>It.r+18){if(w<A){const x=S/w;u*=x,m*=x}de.x*=.2,de.z*=.2}m<-88&&(m=-88,de.z*=.1)}else{const w=Math.hypot(u,m),A=Je+1.6;if(w>A){const S=A/w;u*=S,m*=S,de.x*=.15,de.z*=.15;const x=performance.now();x-Tl>2200&&(Tl=x,Yt("Need the Island Skiff to leave Pump Island."))}}const p=gg(u,m);(p.x!==u||p.z!==m)&&(de.x*=.2,de.z*=.2),xt.position.x=p.x,xt.position.z=p.z,xt.position.y+=de.y*i;const f=we(xt.position.x,xt.position.z),g=f<.12,_=qn(xt.position.x,xt.position.z,t),d=(g?Math.max(_,.02):f)+bl(),h=xt.position.y<=d+.12,y=d-xt.position.y;g&&de.y<=1.2?(xt.position.y+=y*Math.min(1,i*6.5),de.y*=.72):y>0&&y<.42&&de.y<=.6?(xt.position.y+=Math.min(y,i*8.5),de.y=Math.max(de.y,0)):xt.position.y<d&&(xt.position.y=d,de.y=0),h&&!yl&&s&&(va(Ds,xt.position.x,.1,xt.position.z),Ae.splash()),yl=h,xt.rotation.y=je.x,xt.rotation.x=je.y;const b=Math.hypot(de.x,de.z)>.4&&h;b&&(To+=i*(a?12:8.2),Ao+=i,Ao>(a?.32:.44)&&(Ao=0,s?Ae.splash():Ae.step()));const v=b?Math.sin(To)*.032:0,D=b?Math.cos(To*.5)*.014:0;Mn&&(Mn.position.set(D,v-(Ps?.08:0),0),Pt||bs(Mn,"idle",t)),pr+=((a&&b?80:72)-pr)*Math.min(1,i*6),Math.abs(xt.fov-pr)>.05&&(xt.fov=pr,xt.updateProjectionMatrix()),Ml&&(Ml.style.transform=`rotate(${-je.x}rad)`)}addEventListener("resize",()=>{xt.aspect=innerWidth/innerHeight,xt.updateProjectionMatrix(),Ii.setSize(innerWidth,innerHeight)});addEventListener("keydown",i=>{Ie[i.code]=!0,i.code==="KeyC"&&(Ps=!0),i.code==="Space"&&(i.preventDefault(),Ie._jump=!0),i.code==="KeyE"&&Tu(),i.code==="KeyF"&&qa(),i.code==="KeyI"&&(Fe==="inv"?vn():yn("inv")),i.code==="KeyB"&&(Fe==="shop"?vn():yn("shop")),i.code==="KeyJ"&&(Fe==="book"?vn():yn("book")),i.code==="Tab"&&(i.preventDefault(),Fe==="board"?vn():yn("board")),i.code==="Escape"&&(vn(),document.exitPointerLock?.())});addEventListener("keyup",i=>{Ie[i.code]=!1,i.code==="KeyC"&&(Ps=!1)});document.addEventListener("mousemove",i=>{!Or||Fe||Ru(i.movementX,i.movementY)});Di.addEventListener("click",()=>{!ds||Fe||di&&!di.classList.contains("hidden")||(!Or&&!Rr?Di.requestPointerLock():qa())});document.addEventListener("pointerlockchange",()=>{Or=document.pointerLockElement===Di});function k_(){const i=document.getElementById("stick"),t=i.querySelector("i"),e=(o,a)=>{const c=i.getBoundingClientRect(),l=o-(c.left+c.width/2),u=a-(c.top+c.height/2),m=40,p=Math.hypot(l,u)||1,f=Math.min(1,p/m);Ze.x=l/p*f,Ze.y=u/p*f,t.style.transform=`translate(${Ze.x*m}px, ${Ze.y*m}px)`};i.addEventListener("pointerdown",o=>{Ze.active=!0,Ze.id=o.pointerId,i.setPointerCapture(o.pointerId),e(o.clientX,o.clientY)}),i.addEventListener("pointermove",o=>{!Ze.active||o.pointerId!==Ze.id||e(o.clientX,o.clientY)});const n=()=>{Ze.active=!1,Ze.x=0,Ze.y=0,t.style.transform=""};i.addEventListener("pointerup",n),i.addEventListener("pointercancel",n),yu.addEventListener("click",o=>{const a=o.target.closest("button");a&&(a.dataset.act==="jump"&&(Ie._jump=!0),a.dataset.act==="use"&&Tu(),a.dataset.act==="cast"&&qa())});let s=0,r=0;Di.addEventListener("touchstart",o=>{const a=o.changedTouches[0];a.clientX<innerWidth*.42||(s=a.clientX,r=a.clientY)},{passive:!0}),Di.addEventListener("touchmove",o=>{const a=o.changedTouches[0];a.clientX<innerWidth*.42||(Ru(a.clientX-s,a.clientY-r),s=a.clientX,r=a.clientY)},{passive:!0})}document.getElementById("catch-keep")?.addEventListener("click",()=>{di.classList.add("hidden"),li.visible=!1,Rs=0,Ae.ui()});document.getElementById("enter-btn").addEventListener("click",()=>{Mu.classList.add("hidden"),p_.classList.remove("hidden"),ds=!0,t_(),e_(),Ae.ui(),Rr&&yu.classList.remove("hidden"),gn(),Rr||Di.requestPointerLock()});document.querySelector(".hotbar")?.addEventListener("click",i=>{const t=i.target.closest("button");if(!t)return;const e=t.dataset.hot;e==="shop"&&(Fe==="shop"?vn():yn("shop")),e==="inv"&&(Fe==="inv"?vn():yn("inv")),e==="book"&&(Fe==="book"?vn():yn("book")),e==="board"&&(Fe==="board"?vn():yn("board"))});function Al(){m_.classList.add("hidden"),Mu.classList.remove("hidden")}if(matchMedia("(prefers-reduced-motion: reduce)").matches)Al();else{const i=["Waking the lighthouse…","Stretching lanky fishermen…","Tuning the catch tables…","Preview wallet standing by…","Island is ready."];let t=0;const e=setInterval(()=>{t+=1;const n=Math.min(100,t*22);ml&&(ml.style.width=`${n}%`),gl&&(gl.textContent=i[Math.min(i.length-1,t-1)]),n>=100&&(clearInterval(e),setTimeout(Al,280))},220)}k_();gn();let Rl=performance.now(),Ro=0,Co=0,Po=0;function Cu(i){const t=Math.min(.05,(i-Rl)/1e3);if(Rl=i,ds&&(z_(t),F_(t),Ro+=t,Co+=t,Ro>.08&&(Ro=0,O_()),El&&Co>.05&&(Co=0,El.draw(xt.position.x,xt.position.z,je.x))),Po+=t,Po>.12){Po=0;const u=i/1e3;for(const m of Be.people){const p=m.position.x-xt.position.x,f=m.position.z-xt.position.z;p*p+f*f<900&&og(m,u,!!m.userData.moving,m.userData.archetype==="FISHERMAN")}}const e=i/1e3,n=h_(e),s=ri.weather==="rain"||ri.weather==="storm",r=ri.weather==="fog"||ri.weather==="storm",o=ri.weather==="storm";f_(ri,{dt:t,t:e,camera:xt,toast:Yt,night:n.night,rough:o,raining:s,foggy:r});const a=n.elev,c=n.dusk,l=c?12876362:n.night?1384499:6988748;if(We.background.setHex(l),We.fog.color.setHex(l),We.fog.density=r?.028:n.night?.016:.011,Eu.intensity=n.night?.28:c?.7:1.2,Cr.intensity=n.night?.08:c?.7:.85,Cr.position.set(Math.cos(n.ang)*70,Math.max(-12,a*62),Math.sin(n.ang)*40),Be.ocean?.material?.uniforms?.uAmp&&(Be.ocean.material.uniforms.uAmp.value=o?2.15:1),Be.lighthouse){const u=Be.lighthouse.children.find(m=>m.material?.emissive);u?.material&&(u.material.emissiveIntensity=n.night?1.4:.22)}pg(Ds,t),Be.ocean?.material?.uniforms?.uTime&&(Be.ocean.material.uniforms.uTime.value=e),Be.duck&&(Be.duck.position.y=qn(Be.duck.position.x,Be.duck.position.z,e)+.1,Be.duck.rotation.z=Math.sin(e*1.7)*.2),li.visible&&(li.rotation.y+=t*1.6,li.position.y=-.12+Math.sin(i/220)*.02),Er>0&&(Er-=t,Er<=0&&ba.classList.add("hidden")),Sr>0&&(Sr-=t,Sr<=0&&yr?.classList.add("hidden")),Rs>0&&(Rs-=t,Rs<=0&&(di?.classList.add("hidden"),li.visible=!1)),Ii.render(We,xt),requestAnimationFrame(Cu)}requestAnimationFrame(Cu);
