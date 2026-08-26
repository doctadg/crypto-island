(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="170",Qu=0,gc=1,th=2,Yl=1,eh=2,Xn=3,pi=0,Ge=1,Rn=2,fi=0,ir=1,_c=2,vc=3,xc=4,nh=5,Ai=100,ih=101,rh=102,sh=103,oh=104,ah=200,ch=201,lh=202,uh=203,Ho=204,Vo=205,hh=206,dh=207,fh=208,ph=209,mh=210,gh=211,_h=212,vh=213,xh=214,Go=0,Wo=1,Xo=2,ar=3,qo=4,Yo=5,$o=6,Ko=7,ka=0,Mh=1,yh=2,Jn=0,Sh=1,Eh=2,bh=3,wh=4,Th=5,Ah=6,Rh=7,$l=300,cr=301,lr=302,Zo=303,Jo=304,Bs=306,jo=1e3,Ci=1001,Qo=1002,bn=1003,Ch=1004,Wr=1005,Cn=1006,$s=1007,Pi=1008,Qn=1009,Kl=1010,Zl=1011,Ur=1012,Ha=1013,Di=1014,$n=1015,zr=1016,Va=1017,Ga=1018,ur=1020,Jl=35902,jl=1021,Ql=1022,Sn=1023,tu=1024,eu=1025,rr=1026,hr=1027,nu=1028,Wa=1029,iu=1030,Xa=1031,qa=1033,Ss=33776,Es=33777,bs=33778,ws=33779,ta=35840,ea=35841,na=35842,ia=35843,ra=36196,sa=37492,oa=37496,aa=37808,ca=37809,la=37810,ua=37811,ha=37812,da=37813,fa=37814,pa=37815,ma=37816,ga=37817,_a=37818,va=37819,xa=37820,Ma=37821,Ts=36492,ya=36494,Sa=36495,ru=36283,Ea=36284,ba=36285,wa=36286,Ph=3200,Dh=3201,su=0,Lh=1,hi="",Fe="srgb",fr="srgb-linear",ks="linear",re="srgb",zi=7680,Mc=519,Ih=512,Uh=513,Nh=514,ou=515,Oh=516,Fh=517,zh=518,Bh=519,yc=35044,Sc="300 es",Kn=2e3,Ls=2001;class pr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ks=Math.PI/180,Ta=180/Math.PI;function Br(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function kh(i,t){return(i%t+t)%t}function Zs(i,t,e){return(1-e)*i+e*t}function Mr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,r,s,o,a,c,l){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],m=n[7],p=n[2],f=n[5],g=n[8],_=r[0],d=r[3],u=r[6],M=r[1],b=r[4],x=r[7],P=r[2],A=r[5],w=r[8];return s[0]=o*_+a*M+c*P,s[3]=o*d+a*b+c*A,s[6]=o*u+a*x+c*w,s[1]=l*_+h*M+m*P,s[4]=l*d+h*b+m*A,s[7]=l*u+h*x+m*w,s[2]=p*_+f*M+g*P,s[5]=p*d+f*b+g*A,s[8]=p*u+f*x+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],m=h*o-a*l,p=a*c-h*s,f=l*s-o*c,g=e*m+n*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=m*_,t[1]=(r*l-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=p*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Js.makeScale(t,e)),this}rotate(t){return this.premultiply(Js.makeRotation(-t)),this}translate(t,e){return this.premultiply(Js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new Gt;function au(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hh(){const i=Is("canvas");return i.style.display="block",i}const Ec={};function Ar(i){i in Ec||(Ec[i]=!0,console.warn(i))}function Vh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Gh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(i.r=sr(i.r),i.g=sr(i.g),i.b=sr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?ks:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const bc=[.64,.33,.3,.6,.15,.06],wc=[.2126,.7152,.0722],Tc=[.3127,.329],Ac=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[fr]:{primaries:bc,whitePoint:Tc,transfer:ks,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:wc,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:bc,whitePoint:Tc,transfer:re,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:wc,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});let Bi;class Xh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=Is("canvas")),Bi.width=t.width,Bi.height=t.height;const n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Is("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qh=0;class cu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Br(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(js(r[o].image)):s.push(js(r[o]))}else s=js(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function js(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yh=0;class We extends pr{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Ci,r=Ci,s=Cn,o=Pi,a=Sn,c=Qn,l=We.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Br(),this.name="",this.source=new cu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jo:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case Qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jo:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case Qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=$l;We.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,r=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],h=c[4],m=c[8],p=c[1],f=c[5],g=c[9],_=c[2],d=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(m-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(m+_)<.1&&Math.abs(g+d)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,x=(f+1)/2,P=(u+1)/2,A=(h+p)/4,w=(m+_)/4,R=(g+d)/4;return b>x&&b>P?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=A/n,s=w/n):x>P?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=A/r,s=R/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=w/s,r=R/s),this.set(n,r,s,e),this}let M=Math.sqrt((d-g)*(d-g)+(m-_)*(m-_)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(d-g)/M,this.y=(m-_)/M,this.z=(p-h)/M,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $h extends pr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new We(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends $h{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lu extends We{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kh extends We{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],m=n[r+3];const p=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=m;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(m!==_||c!==p||l!==f||h!==g){let d=1-a;const u=c*p+l*f+h*g+m*_,M=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const P=Math.sqrt(b),A=Math.atan2(P,u*M);d=Math.sin(d*A)/P,a=Math.sin(a*A)/P}const x=a*M;if(c=c*d+p*x,l=l*d+f*x,h=h*d+g*x,m=m*d+_*x,d===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+m*m);c*=P,l*=P,h*=P,m*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],m=s[o],p=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*m+c*f-l*p,t[e+1]=c*g+h*p+l*m-a*f,t[e+2]=l*g+h*f+a*p-c*m,t[e+3]=h*g-a*m-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),m=a(s/2),p=c(n/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=p*h*m+l*f*g,this._y=l*f*m-p*h*g,this._z=l*h*g+p*f*m,this._w=l*h*m-p*f*g;break;case"YXZ":this._x=p*h*m+l*f*g,this._y=l*f*m-p*h*g,this._z=l*h*g-p*f*m,this._w=l*h*m+p*f*g;break;case"ZXY":this._x=p*h*m-l*f*g,this._y=l*f*m+p*h*g,this._z=l*h*g+p*f*m,this._w=l*h*m-p*f*g;break;case"ZYX":this._x=p*h*m-l*f*g,this._y=l*f*m+p*h*g,this._z=l*h*g-p*f*m,this._w=l*h*m+p*f*g;break;case"YZX":this._x=p*h*m+l*f*g,this._y=l*f*m+p*h*g,this._z=l*h*g-p*f*m,this._w=l*h*m-p*f*g;break;case"XZY":this._x=p*h*m-l*f*g,this._y=l*f*m-p*h*g,this._z=l*h*g+p*f*m,this._w=l*h*m+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],m=e[10],p=n+a+m;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>m){const f=2*Math.sqrt(1+n-a-m);this._w=(h-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>m){const f=2*Math.sqrt(1+a-n-m);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+m-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),m=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*m+this._w*p,this._x=n*m+this._x*p,this._y=r*m+this._y*p,this._z=s*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),h=2*(a*e-s*r),m=2*(s*n-o*e);return this.x=e+c*l+o*m-a*h,this.y=n+c*h+a*l-s*m,this.z=r+c*m+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qs.copy(this).projectOnVector(t),this.sub(Qs)}reflect(t){return this.sub(Qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new D,Cc=new kr;class Hr{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(s,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(t.matrixWorld),this.union(Xr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),qr.subVectors(this.max,yr),ki.subVectors(t.a,yr),Hi.subVectors(t.b,yr),Vi.subVectors(t.c,yr),ri.subVectors(Hi,ki),si.subVectors(Vi,Hi),_i.subVectors(ki,Vi);let e=[0,-ri.z,ri.y,0,-si.z,si.y,0,-_i.z,_i.y,ri.z,0,-ri.x,si.z,0,-si.x,_i.z,0,-_i.x,-ri.y,ri.x,0,-si.y,si.x,0,-_i.y,_i.x,0];return!to(e,ki,Hi,Vi,qr)||(e=[1,0,0,0,1,0,0,0,1],!to(e,ki,Hi,Vi,qr))?!1:(Yr.crossVectors(ri,si),e=[Yr.x,Yr.y,Yr.z],to(e,ki,Hi,Vi,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bn=[new D,new D,new D,new D,new D,new D,new D,new D],pn=new D,Xr=new Hr,ki=new D,Hi=new D,Vi=new D,ri=new D,si=new D,_i=new D,yr=new D,qr=new D,Yr=new D,vi=new D;function to(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){vi.fromArray(i,s);const a=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),c=t.dot(vi),l=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Zh=new Hr,Sr=new D,eo=new D;class Hs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zh.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Sr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(eo)),this.expandByPoint(Sr.copy(t.center).sub(eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new D,no=new D,$r=new D,oi=new D,io=new D,Kr=new D,ro=new D;class uu{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){no.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(no);const s=t.distanceTo(e)*.5,o=-this.direction.dot($r),a=oi.dot(this.direction),c=-oi.dot($r),l=oi.lengthSq(),h=Math.abs(1-o*o);let m,p,f,g;if(h>0)if(m=o*c-a,p=o*a-c,g=s*h,m>=0)if(p>=-g)if(p<=g){const _=1/h;m*=_,p*=_,f=m*(m+o*p+2*a)+p*(o*m+p+2*c)+l}else p=s,m=Math.max(0,-(o*p+a)),f=-m*m+p*(p+2*c)+l;else p=-s,m=Math.max(0,-(o*p+a)),f=-m*m+p*(p+2*c)+l;else p<=-g?(m=Math.max(0,-(-o*s+a)),p=m>0?-s:Math.min(Math.max(-s,-c),s),f=-m*m+p*(p+2*c)+l):p<=g?(m=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(m=Math.max(0,-(o*s+a)),p=m>0?s:Math.min(Math.max(-s,-c),s),f=-m*m+p*(p+2*c)+l);else p=o>0?-s:s,m=Math.max(0,-(o*p+a)),f=-m*m+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(no).addScaledVector($r,p),f}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),r=kn.dot(kn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,r=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,r=(t.min.x-p.x)*l),h>=0?(s=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),m>=0?(a=(t.min.z-p.z)*m,c=(t.max.z-p.z)*m):(a=(t.max.z-p.z)*m,c=(t.min.z-p.z)*m),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,r,s){io.subVectors(e,t),Kr.subVectors(n,t),ro.crossVectors(io,Kr);let o=this.direction.dot(ro),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);const c=a*this.direction.dot(Kr.crossVectors(oi,Kr));if(c<0)return null;const l=a*this.direction.dot(io.cross(oi));if(l<0||c+l>o)return null;const h=-a*oi.dot(ro);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,r,s,o,a,c,l,h,m,p,f,g,_,d){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,h,m,p,f,g,_,d)}set(t,e,n,r,s,o,a,c,l,h,m,p,f,g,_,d){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=m,u[14]=p,u[3]=f,u[7]=g,u[11]=_,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Gi.setFromMatrixColumn(t,0).length(),s=1/Gi.setFromMatrixColumn(t,1).length(),o=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),m=Math.sin(s);if(t.order==="XYZ"){const p=o*h,f=o*m,g=a*h,_=a*m;e[0]=c*h,e[4]=-c*m,e[8]=l,e[1]=f+g*l,e[5]=p-_*l,e[9]=-a*c,e[2]=_-p*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*h,f=c*m,g=l*h,_=l*m;e[0]=p+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*m,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*h,f=c*m,g=l*h,_=l*m;e[0]=p-_*a,e[4]=-o*m,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*h,f=o*m,g=a*h,_=a*m;e[0]=c*h,e[4]=g*l-f,e[8]=p*l+_,e[1]=c*m,e[5]=_*l+p,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-p*m,e[8]=g*m+f,e[1]=m,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*m+g,e[10]=p-_*m}else if(t.order==="XZY"){const p=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-m,e[8]=l*h,e[1]=p*m+_,e[5]=o*h,e[9]=f*m-g,e[2]=g*m-f,e[6]=a*h,e[10]=_*m+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jh,t,jh)}lookAt(t,e,n){const r=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),ai.crossVectors(n,Ke),ai.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),ai.crossVectors(n,Ke)),ai.normalize(),Zr.crossVectors(Ke,ai),r[0]=ai.x,r[4]=Zr.x,r[8]=Ke.x,r[1]=ai.y,r[5]=Zr.y,r[9]=Ke.y,r[2]=ai.z,r[6]=Zr.z,r[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],m=n[5],p=n[9],f=n[13],g=n[2],_=n[6],d=n[10],u=n[14],M=n[3],b=n[7],x=n[11],P=n[15],A=r[0],w=r[4],R=r[8],S=r[12],v=r[1],C=r[5],G=r[9],L=r[13],B=r[2],Y=r[6],q=r[10],tt=r[14],X=r[3],ut=r[7],gt=r[11],Rt=r[15];return s[0]=o*A+a*v+c*B+l*X,s[4]=o*w+a*C+c*Y+l*ut,s[8]=o*R+a*G+c*q+l*gt,s[12]=o*S+a*L+c*tt+l*Rt,s[1]=h*A+m*v+p*B+f*X,s[5]=h*w+m*C+p*Y+f*ut,s[9]=h*R+m*G+p*q+f*gt,s[13]=h*S+m*L+p*tt+f*Rt,s[2]=g*A+_*v+d*B+u*X,s[6]=g*w+_*C+d*Y+u*ut,s[10]=g*R+_*G+d*q+u*gt,s[14]=g*S+_*L+d*tt+u*Rt,s[3]=M*A+b*v+x*B+P*X,s[7]=M*w+b*C+x*Y+P*ut,s[11]=M*R+b*G+x*q+P*gt,s[15]=M*S+b*L+x*tt+P*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],m=t[6],p=t[10],f=t[14],g=t[3],_=t[7],d=t[11],u=t[15];return g*(+s*c*m-r*l*m-s*a*p+n*l*p+r*a*f-n*c*f)+_*(+e*c*f-e*l*p+s*o*p-r*o*f+r*l*h-s*c*h)+d*(+e*l*m-e*a*f-s*o*m+n*o*f+s*a*h-n*l*h)+u*(-r*a*h-e*c*m+e*a*p+r*o*m-n*o*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],m=t[9],p=t[10],f=t[11],g=t[12],_=t[13],d=t[14],u=t[15],M=m*d*l-_*p*l+_*c*f-a*d*f-m*c*u+a*p*u,b=g*p*l-h*d*l-g*c*f+o*d*f+h*c*u-o*p*u,x=h*_*l-g*m*l+g*a*f-o*_*f-h*a*u+o*m*u,P=g*m*c-h*_*c-g*a*p+o*_*p+h*a*d-o*m*d,A=e*M+n*b+r*x+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=M*w,t[1]=(_*p*s-m*d*s-_*r*f+n*d*f+m*r*u-n*p*u)*w,t[2]=(a*d*s-_*c*s+_*r*l-n*d*l-a*r*u+n*c*u)*w,t[3]=(m*c*s-a*p*s-m*r*l+n*p*l+a*r*f-n*c*f)*w,t[4]=b*w,t[5]=(h*d*s-g*p*s+g*r*f-e*d*f-h*r*u+e*p*u)*w,t[6]=(g*c*s-o*d*s-g*r*l+e*d*l+o*r*u-e*c*u)*w,t[7]=(o*p*s-h*c*s+h*r*l-e*p*l-o*r*f+e*c*f)*w,t[8]=x*w,t[9]=(g*m*s-h*_*s-g*n*f+e*_*f+h*n*u-e*m*u)*w,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*u+e*a*u)*w,t[11]=(h*a*s-o*m*s-h*n*l+e*m*l+o*n*f-e*a*f)*w,t[12]=P*w,t[13]=(h*_*r-g*m*r+g*n*p-e*_*p-h*n*d+e*m*d)*w,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*d-e*a*d)*w,t[15]=(o*m*r-h*a*r+h*n*c-e*m*c-o*n*p+e*a*p)*w,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,m=a+a,p=s*l,f=s*h,g=s*m,_=o*h,d=o*m,u=a*m,M=c*l,b=c*h,x=c*m,P=n.x,A=n.y,w=n.z;return r[0]=(1-(_+u))*P,r[1]=(f+x)*P,r[2]=(g-b)*P,r[3]=0,r[4]=(f-x)*A,r[5]=(1-(p+u))*A,r[6]=(d+M)*A,r[7]=0,r[8]=(g+b)*w,r[9]=(d-M)*w,r[10]=(1-(p+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Gi.set(r[0],r[1],r[2]).length();const o=Gi.set(r[4],r[5],r[6]).length(),a=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],mn.copy(this);const l=1/s,h=1/o,m=1/a;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=m,mn.elements[9]*=m,mn.elements[10]*=m,e.setFromRotationMatrix(mn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Kn){const c=this.elements,l=2*s/(e-t),h=2*s/(n-r),m=(e+t)/(e-t),p=(n+r)/(n-r);let f,g;if(a===Kn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ls)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Kn){const c=this.elements,l=1/(e-t),h=1/(n-r),m=1/(o-s),p=(e+t)*l,f=(n+r)*h;let g,_;if(a===Kn)g=(o+s)*m,_=-2*m;else if(a===Ls)g=s*m,_=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Gi=new D,mn=new pe,Jh=new D(0,0,0),jh=new D(1,1,1),ai=new D,Zr=new D,Ke=new D,Pc=new pe,Dc=new kr;class Un{constructor(t=0,e=0,n=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],m=r[2],p=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Pe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class hu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qh=0;const Lc=new D,Wi=new kr,Hn=new pe,Jr=new D,Er=new D,td=new D,ed=new kr,Ic=new D(1,0,0),Uc=new D(0,1,0),Nc=new D(0,0,1),Oc={type:"added"},nd={type:"removed"},Xi={type:"childadded",child:null},so={type:"childremoved",child:null};class Ae extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new D,e=new Un,n=new kr,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new Gt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(Ic,t)}rotateY(t){return this.rotateOnAxis(Uc,t)}rotateZ(t){return this.rotateOnAxis(Nc,t)}translateOnAxis(t,e){return Lc.copy(t).applyQuaternion(this.quaternion),this.position.add(Lc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ic,t)}translateY(t){return this.translateOnAxis(Uc,t)}translateZ(t){return this.translateOnAxis(Nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Er,Jr,this.up):Hn.lookAt(Jr,Er,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nd),so.child=t,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oc),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,ed,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const m=c[l];s(t.shapes,m)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),m=o(t.shapes),p=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ae.DEFAULT_UP=new D(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new D,Vn=new D,oo=new D,Gn=new D,qi=new D,Yi=new D,Fc=new D,ao=new D,co=new D,lo=new D,uo=new ve,ho=new ve,fo=new ve;class Mn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),gn.subVectors(t,e),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){gn.subVectors(r,e),Vn.subVectors(n,e),oo.subVectors(t,e);const o=gn.dot(gn),a=gn.dot(Vn),c=gn.dot(oo),l=Vn.dot(Vn),h=Vn.dot(oo),m=o*l-a*a;if(m===0)return s.set(0,0,0),null;const p=1/m,f=(l*c-a*h)*p,g=(o*h-a*c)*p;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(a,Gn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return uo.setScalar(0),ho.setScalar(0),fo.setScalar(0),uo.fromBufferAttribute(t,e),ho.fromBufferAttribute(t,n),fo.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(uo,s.x),o.addScaledVector(ho,s.y),o.addScaledVector(fo,s.z),o}static isFrontFacing(t,e,n,r){return gn.subVectors(n,e),Vn.subVectors(t,e),gn.cross(Vn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),gn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;qi.subVectors(r,n),Yi.subVectors(s,n),ao.subVectors(t,n);const c=qi.dot(ao),l=Yi.dot(ao);if(c<=0&&l<=0)return e.copy(n);co.subVectors(t,r);const h=qi.dot(co),m=Yi.dot(co);if(h>=0&&m<=h)return e.copy(r);const p=c*m-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(qi,o);lo.subVectors(t,s);const f=qi.dot(lo),g=Yi.dot(lo);if(g>=0&&f<=g)return e.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Yi,a);const d=h*g-f*m;if(d<=0&&m-h>=0&&f-g>=0)return Fc.subVectors(s,r),a=(m-h)/(m-h+(f-g)),e.copy(r).addScaledVector(Fc,a);const u=1/(d+_+p);return o=_*u,a=p*u,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},jr={h:0,s:0,l:0};function po(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=kh(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=po(o,s,t+1/3),this.g=po(o,s,t),this.b=po(o,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=Fe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=du[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Qt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Pe(Ne.r*255,0,255))*65536+Math.round(Pe(Ne.g*255,0,255))*256+Math.round(Pe(Ne.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,r=Ne.g,s=Ne.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const m=o-a;switch(l=h<=.5?m/(o+a):m/(2-o-a),o){case n:c=(r-s)/m+(r<s?6:0);break;case r:c=(s-n)/m+2;break;case s:c=(n-r)/m+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Fe){Qt.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,r=Ne.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(jr);const n=Zs(ci.h,jr.h,e),r=Zs(ci.s,jr.s,e),s=Zs(ci.l,jr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new wt;wt.NAMES=du;let id=0;class mr extends pr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Br(),this.name="",this.blending=ir,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ho,this.blendDst=Vo,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ho&&(n.blendSrc=this.blendSrc),this.blendDst!==Vo&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tn extends mr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new D,Qr=new Mt;class Ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yc,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mr(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mr(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mr(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yc&&(t.usage=this.usage),t}}class fu extends Ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pu extends Ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends Ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rd=0;const sn=new pe,mo=new Ae,$i=new D,Ze=new Hr,br=new Hr,we=new D;class ke extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(au(t)?pu:fu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return mo.lookAt(t),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(n,3))}else{for(let n=0,r=e.count;n<r;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ze.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];br.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Ze.min,br.min),Ze.expandByPoint(we),we.addVectors(Ze.max,br.max),Ze.expandByPoint(we)):(Ze.expandByPoint(br.min),Ze.expandByPoint(br.max))}Ze.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)we.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(we));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)we.fromBufferAttribute(a,l),c&&($i.fromBufferAttribute(t,l),we.add($i)),r=Math.max(r,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new D,c[R]=new D;const l=new D,h=new D,m=new D,p=new Mt,f=new Mt,g=new Mt,_=new D,d=new D;function u(R,S,v){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),m.fromBufferAttribute(n,v),p.fromBufferAttribute(s,R),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,v),h.sub(l),m.sub(l),f.sub(p),g.sub(p);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(m,-f.y).multiplyScalar(C),d.copy(m).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[R].add(_),a[S].add(_),a[v].add(_),c[R].add(d),c[S].add(d),c[v].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,S=M.length;R<S;++R){const v=M[R],C=v.start,G=v.count;for(let L=C,B=C+G;L<B;L+=3)u(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const b=new D,x=new D,P=new D,A=new D;function w(R){P.fromBufferAttribute(r,R),A.copy(P);const S=a[R];b.copy(S),b.sub(P.multiplyScalar(P.dot(S))).normalize(),x.crossVectors(A,S);const C=x.dot(c[R])<0?-1:1;o.setXYZW(R,b.x,b.y,b.z,C)}for(let R=0,S=M.length;R<S;++R){const v=M[R],C=v.start,G=v.count;for(let L=C,B=C+G;L<B;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const r=new D,s=new D,o=new D,a=new D,c=new D,l=new D,h=new D,m=new D;if(t)for(let p=0,f=t.count;p<f;p+=3){const g=t.getX(p+0),_=t.getX(p+1),d=t.getX(p+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,d),h.subVectors(o,s),m.subVectors(r,s),h.cross(m),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,s),m.subVectors(r,s),h.cross(m),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,m=a.normalized,p=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,d=c.length;_<d;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let u=0;u<h;u++)p[g++]=l[f++]}return new Ln(p,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,m=l.length;h<m;h++){const p=l[h],f=t(p,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let m=0,p=l.length;m<p;m++){const f=l[m];h.push(f.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],m=s[l];for(let p=0,f=m.length;p<f;p++)h.push(m[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const m=o[l];this.addGroup(m.start,m.count,m.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zc=new pe,xi=new uu,ts=new Hs,Bc=new D,es=new D,ns=new D,is=new D,go=new D,rs=new D,kc=new D,ss=new D;class ot extends Ae{constructor(t=new ke,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){rs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],m=s[c];h!==0&&(go.fromBufferAttribute(m,t),o?rs.addScaledVector(go,h):rs.addScaledVector(go.sub(e),h))}e.add(rs)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(s),xi.copy(t.ray).recast(t.near),!(ts.containsPoint(xi.origin)===!1&&(xi.intersectSphere(ts,Bc)===null||xi.origin.distanceToSquared(Bc)>(t.far-t.near)**2))&&(zc.copy(s).invert(),xi.copy(t.ray).applyMatrix4(zc),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,m=s.attributes.normal,p=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const d=p[g],u=o[d.materialIndex],M=Math.max(d.start,f.start),b=Math.min(a.count,Math.min(d.start+d.count,f.start+f.count));for(let x=M,P=b;x<P;x+=3){const A=a.getX(x),w=a.getX(x+1),R=a.getX(x+2);r=os(this,u,t,n,l,h,m,A,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let d=g,u=_;d<u;d+=3){const M=a.getX(d),b=a.getX(d+1),x=a.getX(d+2);r=os(this,o,t,n,l,h,m,M,b,x),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const d=p[g],u=o[d.materialIndex],M=Math.max(d.start,f.start),b=Math.min(c.count,Math.min(d.start+d.count,f.start+f.count));for(let x=M,P=b;x<P;x+=3){const A=x,w=x+1,R=x+2;r=os(this,u,t,n,l,h,m,A,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let d=g,u=_;d<u;d+=3){const M=d,b=d+1,x=d+2;r=os(this,o,t,n,l,h,m,M,b,x),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function sd(i,t,e,n,r,s,o,a){let c;if(t.side===Ge?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===pi,a),c===null)return null;ss.copy(a),ss.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ss);return l<e.near||l>e.far?null:{distance:l,point:ss.clone(),object:i}}function os(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,es),i.getVertexPosition(c,ns),i.getVertexPosition(l,is);const h=sd(i,t,e,n,es,ns,is,kc);if(h){const m=new D;Mn.getBarycoord(kc,es,ns,is,m),r&&(h.uv=Mn.getInterpolatedAttribute(r,a,c,l,m,new Mt)),s&&(h.uv1=Mn.getInterpolatedAttribute(s,a,c,l,m,new Mt)),o&&(h.normal=Mn.getInterpolatedAttribute(o,a,c,l,m,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new D,materialIndex:0};Mn.getNormal(es,ns,is,p.normal),h.face=p,h.barycoord=m}return h}class it extends ke{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],m=[];let p=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(m,2));function g(_,d,u,M,b,x,P,A,w,R,S){const v=x/w,C=P/R,G=x/2,L=P/2,B=A/2,Y=w+1,q=R+1;let tt=0,X=0;const ut=new D;for(let gt=0;gt<q;gt++){const Rt=gt*C-L;for(let qt=0;qt<Y;qt++){const oe=qt*v-G;ut[_]=oe*M,ut[d]=Rt*b,ut[u]=B,l.push(ut.x,ut.y,ut.z),ut[_]=0,ut[d]=0,ut[u]=A>0?1:-1,h.push(ut.x,ut.y,ut.z),m.push(qt/w),m.push(1-gt/R),tt+=1}}for(let gt=0;gt<R;gt++)for(let Rt=0;Rt<w;Rt++){const qt=p+Rt+Y*gt,oe=p+Rt+Y*(gt+1),K=p+(Rt+1)+Y*(gt+1),rt=p+(Rt+1)+Y*gt;c.push(qt,oe,rt),c.push(oe,K,rt),X+=6}a.addGroup(f,X,S),f+=X,p+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new it(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function dr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=dr(i[e]);for(const r in n)t[r]=n[r]}return t}function od(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const ad={clone:dr,merge:He};var cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends mr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dr(t.uniforms),this.uniformsGroups=od(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gu extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new D,Hc=new Mt,Vc=new Mt;class cn extends gu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,Hc,Vc),e.subVectors(Vc,Hc)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ki=-90,Zi=1;class ud extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(Ki,Zi,t,e);r.layers=this.layers,this.add(r);const s=new cn(Ki,Zi,t,e);s.layers=this.layers,this.add(s);const o=new cn(Ki,Zi,t,e);o.layers=this.layers,this.add(o);const a=new cn(Ki,Zi,t,e);a.layers=this.layers,this.add(a);const c=new cn(Ki,Zi,t,e);c.layers=this.layers,this.add(c);const l=new cn(Ki,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,m=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(m,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _u extends We{constructor(t,e,n,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:cr,super(t,e,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hd extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new _u(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new it(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:fi});s.uniforms.tEquirect.value=e;const o=new ot(r,s),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=Cn),new ud(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const _o=new D,dd=new D,fd=new Gt;class wi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=_o.subVectors(n,e).cross(dd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_o),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fd.getNormalMatrix(t),r=this.coplanarPoint(_o).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Hs,as=new D;class Ya{constructor(t=new wi,e=new wi,n=new wi,r=new wi,s=new wi,o=new wi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],m=r[6],p=r[7],f=r[8],g=r[9],_=r[10],d=r[11],u=r[12],M=r[13],b=r[14],x=r[15];if(n[0].setComponents(c-s,p-l,d-f,x-u).normalize(),n[1].setComponents(c+s,p+l,d+f,x+u).normalize(),n[2].setComponents(c+o,p+h,d+g,x+M).normalize(),n[3].setComponents(c-o,p-h,d-g,x-M).normalize(),n[4].setComponents(c-a,p-m,d-_,x-b).normalize(),e===Kn)n[5].setComponents(c+a,p+m,d+_,x+b).normalize();else if(e===Ls)n[5].setComponents(a,m,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(as.x=r.normal.x>0?t.max.x:t.min.x,as.y=r.normal.y>0?t.max.y:t.min.y,as.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(as)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vu(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function pd(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,m=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,c,l){const h=c.array,m=c.updateRanges;if(i.bindBuffer(l,a),m.length===0)i.bufferSubData(l,0,h);else{m.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<m.length;f++){const g=m[p],_=m[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,m[p]=_)}m.length=p+1;for(let f=0,g=m.length;f<g;f++){const _=m[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class hn extends ke{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,m=t/a,p=e/c,f=[],g=[],_=[],d=[];for(let u=0;u<h;u++){const M=u*p-o;for(let b=0;b<l;b++){const x=b*m-s;g.push(x,-M,0),_.push(0,0,1),d.push(b/a),d.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<a;M++){const b=M+l*u,x=M+l*(u+1),P=M+1+l*(u+1),A=M+1+l*u;f.push(b,x,A),f.push(x,P,A)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.widthSegments,t.heightSegments)}}var md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gd=`#ifdef USE_ALPHAHASH
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
#endif`,_d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
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
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ed=`#ifdef USE_BATCHING
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
#endif`,bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ad=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rd=`#ifdef USE_IRIDESCENCE
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
#endif`,Cd=`#ifdef USE_BUMPMAP
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zd=`#define PI 3.141592653589793
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
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",qd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nf=`#ifdef USE_GRADIENTMAP
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
}`,rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,af=`uniform bool receiveShadow;
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
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ff=`PhysicalMaterial material;
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
#endif`,pf=`struct PhysicalMaterial {
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
}`,mf=`
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
#endif`,gf=`#if defined( RE_IndirectDiffuse )
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
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wf=`#if defined( USE_POINTS_UV )
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
#endif`,Tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Df=`#ifdef USE_MORPHTARGETS
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
#endif`,Lf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zf=`#ifdef USE_NORMALMAP
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
#endif`,Bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tp=`float getShadowMask() {
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
}`,ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,up=`#ifdef USE_TRANSMISSION
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gp=`uniform sampler2D t2D;
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`#include <common>
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
}`,Sp=`#if DEPTH_PACKING == 3200
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
}`,Ep=`#define DISTANCE
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
}`,bp=`#define DISTANCE
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`uniform float scale;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Dp=`#define LAMBERT
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
}`,Lp=`#define LAMBERT
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
}`,Ip=`#define MATCAP
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
}`,Up=`#define MATCAP
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
}`,Np=`#define NORMAL
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
}`,Op=`#define NORMAL
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
}`,Fp=`#define PHONG
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
}`,zp=`#define PHONG
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
}`,Bp=`#define STANDARD
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
}`,kp=`#define STANDARD
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
}`,Hp=`#define TOON
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
}`,Vp=`#define TOON
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
}`,Gp=`uniform float size;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,qp=`uniform vec3 color;
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
}`,Yp=`uniform float rotation;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:md,alphahash_pars_fragment:gd,alphamap_fragment:_d,alphamap_pars_fragment:vd,alphatest_fragment:xd,alphatest_pars_fragment:Md,aomap_fragment:yd,aomap_pars_fragment:Sd,batching_pars_vertex:Ed,batching_vertex:bd,begin_vertex:wd,beginnormal_vertex:Td,bsdfs:Ad,iridescence_fragment:Rd,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Pd,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Id,color_fragment:Ud,color_pars_fragment:Nd,color_pars_vertex:Od,color_vertex:Fd,common:zd,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:kd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Vd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Wd,colorspace_fragment:Xd,colorspace_pars_fragment:qd,envmap_fragment:Yd,envmap_common_pars_fragment:$d,envmap_pars_fragment:Kd,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:cf,envmap_vertex:Jd,fog_vertex:jd,fog_pars_vertex:Qd,fog_fragment:tf,fog_pars_fragment:ef,gradientmap_pars_fragment:nf,lightmap_pars_fragment:rf,lights_lambert_fragment:sf,lights_lambert_pars_fragment:of,lights_pars_begin:af,lights_toon_fragment:lf,lights_toon_pars_fragment:uf,lights_phong_fragment:hf,lights_phong_pars_fragment:df,lights_physical_fragment:ff,lights_physical_pars_fragment:pf,lights_fragment_begin:mf,lights_fragment_maps:gf,lights_fragment_end:_f,logdepthbuf_fragment:vf,logdepthbuf_pars_fragment:xf,logdepthbuf_pars_vertex:Mf,logdepthbuf_vertex:yf,map_fragment:Sf,map_pars_fragment:Ef,map_particle_fragment:bf,map_particle_pars_fragment:wf,metalnessmap_fragment:Tf,metalnessmap_pars_fragment:Af,morphinstance_vertex:Rf,morphcolor_vertex:Cf,morphnormal_vertex:Pf,morphtarget_pars_vertex:Df,morphtarget_vertex:Lf,normal_fragment_begin:If,normal_fragment_maps:Uf,normal_pars_fragment:Nf,normal_pars_vertex:Of,normal_vertex:Ff,normalmap_pars_fragment:zf,clearcoat_normal_fragment_begin:Bf,clearcoat_normal_fragment_maps:kf,clearcoat_pars_fragment:Hf,iridescence_pars_fragment:Vf,opaque_fragment:Gf,packing:Wf,premultiplied_alpha_fragment:Xf,project_vertex:qf,dithering_fragment:Yf,dithering_pars_fragment:$f,roughnessmap_fragment:Kf,roughnessmap_pars_fragment:Zf,shadowmap_pars_fragment:Jf,shadowmap_pars_vertex:jf,shadowmap_vertex:Qf,shadowmask_pars_fragment:tp,skinbase_vertex:ep,skinning_pars_vertex:np,skinning_vertex:ip,skinnormal_vertex:rp,specularmap_fragment:sp,specularmap_pars_fragment:op,tonemapping_fragment:ap,tonemapping_pars_fragment:cp,transmission_fragment:lp,transmission_pars_fragment:up,uv_pars_fragment:hp,uv_pars_vertex:dp,uv_vertex:fp,worldpos_vertex:pp,background_vert:mp,background_frag:gp,backgroundCube_vert:_p,backgroundCube_frag:vp,cube_vert:xp,cube_frag:Mp,depth_vert:yp,depth_frag:Sp,distanceRGBA_vert:Ep,distanceRGBA_frag:bp,equirect_vert:wp,equirect_frag:Tp,linedashed_vert:Ap,linedashed_frag:Rp,meshbasic_vert:Cp,meshbasic_frag:Pp,meshlambert_vert:Dp,meshlambert_frag:Lp,meshmatcap_vert:Ip,meshmatcap_frag:Up,meshnormal_vert:Np,meshnormal_frag:Op,meshphong_vert:Fp,meshphong_frag:zp,meshphysical_vert:Bp,meshphysical_frag:kp,meshtoon_vert:Hp,meshtoon_frag:Vp,points_vert:Gp,points_frag:Wp,shadow_vert:Xp,shadow_frag:qp,sprite_vert:Yp,sprite_frag:$p},st={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},An={basic:{uniforms:He([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:He([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new wt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:He([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:He([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:He([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new wt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:He([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:He([st.points,st.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:He([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:He([st.common,st.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:He([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:He([st.sprite,st.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:He([st.common,st.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:He([st.lights,st.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};An.physical={uniforms:He([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const cs={r:0,b:0,g:0},yi=new Un,Kp=new pe;function Zp(i,t,e,n,r,s,o){const a=new wt(0);let c=s===!0?0:1,l,h,m=null,p=0,f=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?e:t).get(b)),b}function _(M){let b=!1;const x=g(M);x===null?u(a,c):x&&x.isColor&&(u(x,1),b=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(M,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===Bs)?(h===void 0&&(h=new ot(new it(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:dr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),yi.copy(b.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kp.makeRotationFromEuler(yi)),h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==re,(m!==x||p!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,m=x,p=x.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ot(new hn(2,2),new Nn({name:"BackgroundMaterial",uniforms:dr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(m!==x||p!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,m=x,p=x.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function u(M,b){M.getRGB(cs,mu(i)),n.buffers.color.setClear(cs.r,cs.g,cs.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),c=b,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,u(a,c)},render:_,addToRenderList:d}}function Jp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function a(v,C,G,L,B){let Y=!1;const q=m(L,G,C);s!==q&&(s=q,l(s.object)),Y=f(v,L,G,B),Y&&g(v,L,G,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(v,C,G,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function m(v,C,G){const L=G.wireframe===!0;let B=n[v.id];B===void 0&&(B={},n[v.id]=B);let Y=B[C.id];Y===void 0&&(Y={},B[C.id]=Y);let q=Y[L];return q===void 0&&(q=p(c()),Y[L]=q),q}function p(v){const C=[],G=[],L=[];for(let B=0;B<e;B++)C[B]=0,G[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:L,object:v,attributes:{},index:null}}function f(v,C,G,L){const B=s.attributes,Y=C.attributes;let q=0;const tt=G.getAttributes();for(const X in tt)if(tt[X].location>=0){const gt=B[X];let Rt=Y[X];if(Rt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(Rt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(Rt=v.instanceColor)),gt===void 0||gt.attribute!==Rt||Rt&&gt.data!==Rt.data)return!0;q++}return s.attributesNum!==q||s.index!==L}function g(v,C,G,L){const B={},Y=C.attributes;let q=0;const tt=G.getAttributes();for(const X in tt)if(tt[X].location>=0){let gt=Y[X];gt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(gt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(gt=v.instanceColor));const Rt={};Rt.attribute=gt,gt&&gt.data&&(Rt.data=gt.data),B[X]=Rt,q++}s.attributes=B,s.attributesNum=q,s.index=L}function _(){const v=s.newAttributes;for(let C=0,G=v.length;C<G;C++)v[C]=0}function d(v){u(v,0)}function u(v,C){const G=s.newAttributes,L=s.enabledAttributes,B=s.attributeDivisors;G[v]=1,L[v]===0&&(i.enableVertexAttribArray(v),L[v]=1),B[v]!==C&&(i.vertexAttribDivisor(v,C),B[v]=C)}function M(){const v=s.newAttributes,C=s.enabledAttributes;for(let G=0,L=C.length;G<L;G++)C[G]!==v[G]&&(i.disableVertexAttribArray(G),C[G]=0)}function b(v,C,G,L,B,Y,q){q===!0?i.vertexAttribIPointer(v,C,G,B,Y):i.vertexAttribPointer(v,C,G,L,B,Y)}function x(v,C,G,L){_();const B=L.attributes,Y=G.getAttributes(),q=C.defaultAttributeValues;for(const tt in Y){const X=Y[tt];if(X.location>=0){let ut=B[tt];if(ut===void 0&&(tt==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),tt==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor)),ut!==void 0){const gt=ut.normalized,Rt=ut.itemSize,qt=t.get(ut);if(qt===void 0)continue;const oe=qt.buffer,K=qt.type,rt=qt.bytesPerElement,bt=K===i.INT||K===i.UNSIGNED_INT||ut.gpuType===Ha;if(ut.isInterleavedBufferAttribute){const ht=ut.data,It=ht.stride,zt=ut.offset;if(ht.isInstancedInterleavedBuffer){for(let Yt=0;Yt<X.locationSize;Yt++)u(X.location+Yt,ht.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Yt=0;Yt<X.locationSize;Yt++)d(X.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Yt=0;Yt<X.locationSize;Yt++)b(X.location+Yt,Rt/X.locationSize,K,gt,It*rt,(zt+Rt/X.locationSize*Yt)*rt,bt)}else{if(ut.isInstancedBufferAttribute){for(let ht=0;ht<X.locationSize;ht++)u(X.location+ht,ut.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ht=0;ht<X.locationSize;ht++)d(X.location+ht);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let ht=0;ht<X.locationSize;ht++)b(X.location+ht,Rt/X.locationSize,K,gt,Rt*rt,Rt/X.locationSize*ht*rt,bt)}}else if(q!==void 0){const gt=q[tt];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(X.location,gt);break;case 3:i.vertexAttrib3fv(X.location,gt);break;case 4:i.vertexAttrib4fv(X.location,gt);break;default:i.vertexAttrib1fv(X.location,gt)}}}}M()}function P(){R();for(const v in n){const C=n[v];for(const G in C){const L=C[G];for(const B in L)h(L[B].object),delete L[B];delete C[G]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const C=n[v.id];for(const G in C){const L=C[G];for(const B in L)h(L[B].object),delete L[B];delete C[G]}delete n[v.id]}function w(v){for(const C in n){const G=n[C];if(G[v.id]===void 0)continue;const L=G[v.id];for(const B in L)h(L[B].object),delete L[B];delete G[v.id]}}function R(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:d,disableUnusedAttributes:M}}function jp(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,m){m!==0&&(i.drawArraysInstanced(n,l,h,m),e.update(h,n,m))}function a(l,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,m);let f=0;for(let g=0;g<m;g++)f+=h[g];e.update(f,n,1)}function c(l,h,m,p){if(m===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,m);let g=0;for(let _=0;_<m;_++)g+=h[_]*p[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Qp(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Sn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Qn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==$n&&!R)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const m=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:m,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:u,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:P,maxSamples:A}}function tm(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new wi,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){const f=m.length!==0||p||n!==0||r;return r=p,n=m.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,p){e=h(m,p,0)},this.setState=function(m,p,f){const g=m.clippingPlanes,_=m.clipIntersection,d=m.clipShadows,u=i.get(m);if(!r||g===null||g.length===0||s&&!d)s?h(null):l();else{const M=s?0:n,b=M*4;let x=u.clippingState||null;c.value=x,x=h(g,p,b,f);for(let P=0;P!==b;++P)x[P]=e[P];u.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(m,p,f,g){const _=m!==null?m.length:0;let d=null;if(_!==0){if(d=c.value,g!==!0||d===null){const u=f+_*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(d===null||d.length<u)&&(d=new Float32Array(u));for(let b=0,x=f;b!==_;++b,x+=4)o.copy(m[b]).applyMatrix4(M,a),o.normal.toArray(d,x),d[x+3]=o.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function em(i){let t=new WeakMap;function e(o,a){return a===Zo?o.mapping=cr:a===Jo&&(o.mapping=lr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zo||a===Jo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new hd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class xu extends gu{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const nr=4,Gc=[.125,.215,.35,.446,.526,.582],Ri=20,vo=new xu,Wc=new wt;let xo=null,Mo=0,yo=0,So=!1;const Ti=(1+Math.sqrt(5))/2,Ji=1/Ti,Xc=[new D(-Ti,Ji,0),new D(Ti,Ji,0),new D(-Ji,0,Ti),new D(Ji,0,Ti),new D(0,Ti,-Ji),new D(0,Ti,Ji),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class qc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){xo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xo,Mo,yo),this._renderer.xr.enabled=So,t.scissorTest=!1,ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cr||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:zr,format:Sn,colorSpace:fr,depthBuffer:!1},r=Yc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nm(s)),this._blurMaterial=im(s,t,e)}return r}_compileMaterial(t){const e=new ot(this._lodPlanes[0],t);this._renderer.compile(e,vo)}_sceneToCubeUV(t,e,n,r){const a=new cn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,p=h.toneMapping;h.getClearColor(Wc),h.toneMapping=Jn,h.autoClear=!1;const f=new tn({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new ot(new it,f);let _=!1;const d=t.background;d?d.isColor&&(f.color.copy(d),t.background=null,_=!0):(f.color.copy(Wc),_=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):M===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const b=this._cubeSize;ls(r,M*b,u>2?b:0,b,b),h.setRenderTarget(r),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=m,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===cr||t.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;ls(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,vo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xc[(r-s-1)%Xc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,m=new ot(this._lodPlanes[r],l),p=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),_=s/g,d=isFinite(s)?1+Math.floor(h*_):Ri;d>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ri}`);const u=[];let M=0;for(let w=0;w<Ri;++w){const R=w/_,S=Math.exp(-R*R/2);u.push(S),w===0?M+=S:w<d&&(M+=2*S)}for(let w=0;w<u.length;w++)u[w]=u[w]/M;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:b}=this;p.dTheta.value=g,p.mipInt.value=b-n;const x=this._sizeLods[r],P=3*x*(r>b-nr?r-b+nr:0),A=4*(this._cubeSize-x);ls(e,P,A,3*x,2*x),c.setRenderTarget(e),c.render(m,vo)}}function nm(i){const t=[],e=[],n=[];let r=i;const s=i-nr+1+Gc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-nr?c=Gc[o-i+nr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,m=1+l,p=[h,h,m,h,m,m,h,h,m,m,h,m],f=6,g=6,_=3,d=2,u=1,M=new Float32Array(_*g*f),b=new Float32Array(d*g*f),x=new Float32Array(u*g*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,R=A>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];M.set(S,_*g*A),b.set(p,d*g*A);const v=[A,A,A,A,A,A];x.set(v,u*g*A)}const P=new ke;P.setAttribute("position",new Ln(M,_)),P.setAttribute("uv",new Ln(b,d)),P.setAttribute("faceIndex",new Ln(x,u)),t.push(P),r>nr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yc(i,t,e){const n=new Li(i,t,e);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function im(i,t,e){const n=new Float32Array(Ri),r=new D(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$a(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function $c(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Kc(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function $a(){return`

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
	`}function rm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Zo||c===Jo,h=c===cr||c===lr;if(l||h){let m=t.get(a);const p=m!==void 0?m.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new qc(i)),m=l?e.fromEquirectangular(a,m):e.fromCubemap(a,m),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),m.texture;if(m!==void 0)return m.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&r(f)?(e===null&&(e=new qc(i)),m=l?e.fromEquirectangular(a):e.fromCubemap(a),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),a.addEventListener("dispose",s),m.texture):null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function sm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function om(i,t,e,n){const r={},s=new WeakMap;function o(m){const p=m.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let d=0,u=_.length;d<u;d++)t.remove(_[d])}p.removeEventListener("dispose",o),delete r[p.id];const f=s.get(p);f&&(t.remove(f),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(m,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function c(m){const p=m.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const f=m.morphAttributes;for(const g in f){const _=f[g];for(let d=0,u=_.length;d<u;d++)t.update(_[d],i.ARRAY_BUFFER)}}function l(m){const p=[],f=m.index,g=m.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let b=0,x=M.length;b<x;b+=3){const P=M[b+0],A=M[b+1],w=M[b+2];p.push(P,A,A,w,w,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let b=0,x=M.length/3-1;b<x;b+=3){const P=b+0,A=b+1,w=b+2;p.push(P,A,A,w,w,P)}}else return;const d=new(au(p)?pu:fu)(p,1);d.version=_;const u=s.get(m);u&&t.remove(u),s.set(m,d)}function h(m){const p=s.get(m);if(p){const f=m.index;f!==null&&p.version<f.version&&l(m)}else l(m);return s.get(m)}return{get:a,update:c,getWireframeAttribute:h}}function am(i,t,e){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,f){i.drawElements(n,f,s,p*o),e.update(f,n,1)}function l(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,s,p*o,g),e.update(f,n,g))}function h(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,g);let d=0;for(let u=0;u<g;u++)d+=f[u];e.update(d,n,1)}function m(p,f,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<p.length;u++)l(p[u]/o,f[u],_[u]);else{d.multiDrawElementsInstancedWEBGL(n,f,0,s,p,0,_,0,g);let u=0;for(let M=0;M<g;M++)u+=f[M]*_[M];e.update(u,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function cm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function lm(i,t,e){const n=new WeakMap,r=new ve;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==m){let v=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),d===!0&&(x=3);let P=a.attributes.position.count*x,A=1;P>t.maxTextureSize&&(A=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const w=new Float32Array(P*A*4*m),R=new lu(w,P,A,m);R.type=$n,R.needsUpdate=!0;const S=x*4;for(let C=0;C<m;C++){const G=u[C],L=M[C],B=b[C],Y=P*A*4*C;for(let q=0;q<G.count;q++){const tt=q*S;g===!0&&(r.fromBufferAttribute(G,q),w[Y+tt+0]=r.x,w[Y+tt+1]=r.y,w[Y+tt+2]=r.z,w[Y+tt+3]=0),_===!0&&(r.fromBufferAttribute(L,q),w[Y+tt+4]=r.x,w[Y+tt+5]=r.y,w[Y+tt+6]=r.z,w[Y+tt+7]=0),d===!0&&(r.fromBufferAttribute(B,q),w[Y+tt+8]=r.x,w[Y+tt+9]=r.y,w[Y+tt+10]=r.z,w[Y+tt+11]=B.itemSize===4?r.w:1)}}p={count:m,texture:R,size:new Mt(P,A)},n.set(a,p),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let d=0;d<l.length;d++)g+=l[d];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function um(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,m=t.get(c,h);if(r.get(m)!==l&&(t.update(m),r.set(m,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return m}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Mu extends We{constructor(t,e,n,r,s,o,a,c,l,h=rr){if(h!==rr&&h!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===rr&&(n=Di),n===void 0&&h===hr&&(n=ur),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=c!==void 0?c:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yu=new We,Zc=new Mu(1,1),Su=new lu,Eu=new Kh,bu=new _u,Jc=[],jc=[],Qc=new Float32Array(16),tl=new Float32Array(9),el=new Float32Array(4);function gr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Jc[r];if(s===void 0&&(s=new Float32Array(r),Jc[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vs(i,t){let e=jc[t];e===void 0&&(e=new Int32Array(t),jc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;el.set(n),i.uniformMatrix2fv(this.addr,!1,el),be(e,n)}}function gm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;tl.set(n),i.uniformMatrix3fv(this.addr,!1,tl),be(e,n)}}function _m(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,n))return;Qc.set(n),i.uniformMatrix4fv(this.addr,!1,Qc),be(e,n)}}function vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function Sm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function Tm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Zc.compareFunction=ou,s=Zc):s=yu,e.setTexture2D(t||s,r)}function Am(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Eu,r)}function Rm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||bu,r)}function Cm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Su,r)}function Pm(i){switch(i){case 5126:return hm;case 35664:return dm;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return _m;case 5124:case 35670:return vm;case 35667:case 35671:return xm;case 35668:case 35672:return Mm;case 35669:case 35673:return ym;case 5125:return Sm;case 36294:return Em;case 36295:return bm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Cm}}function Dm(i,t){i.uniform1fv(this.addr,t)}function Lm(i,t){const e=gr(t,this.size,2);i.uniform2fv(this.addr,e)}function Im(i,t){const e=gr(t,this.size,3);i.uniform3fv(this.addr,e)}function Um(i,t){const e=gr(t,this.size,4);i.uniform4fv(this.addr,e)}function Nm(i,t){const e=gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Om(i,t){const e=gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fm(i,t){const e=gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zm(i,t){i.uniform1iv(this.addr,t)}function Bm(i,t){i.uniform2iv(this.addr,t)}function km(i,t){i.uniform3iv(this.addr,t)}function Hm(i,t){i.uniform4iv(this.addr,t)}function Vm(i,t){i.uniform1uiv(this.addr,t)}function Gm(i,t){i.uniform2uiv(this.addr,t)}function Wm(i,t){i.uniform3uiv(this.addr,t)}function Xm(i,t){i.uniform4uiv(this.addr,t)}function qm(i,t,e){const n=this.cache,r=t.length,s=Vs(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||yu,s[o])}function Ym(i,t,e){const n=this.cache,r=t.length,s=Vs(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Eu,s[o])}function $m(i,t,e){const n=this.cache,r=t.length,s=Vs(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||bu,s[o])}function Km(i,t,e){const n=this.cache,r=t.length,s=Vs(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Su,s[o])}function Zm(i){switch(i){case 5126:return Dm;case 35664:return Lm;case 35665:return Im;case 35666:return Um;case 35674:return Nm;case 35675:return Om;case 35676:return Fm;case 5124:case 35670:return zm;case 35667:case 35671:return Bm;case 35668:case 35672:return km;case 35669:case 35673:return Hm;case 5125:return Vm;case 36294:return Gm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Km}}class Jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pm(e.type)}}class jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zm(e.type)}}class Qm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function nl(i,t){i.seq.push(t),i.map[t.id]=t}function t0(i,t,e){const n=i.name,r=n.length;for(Eo.lastIndex=0;;){const s=Eo.exec(n),o=Eo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){nl(e,l===void 0?new Jm(a,i,t):new jm(a,i,t));break}else{let m=e.map[a];m===void 0&&(m=new Qm(a),nl(e,m)),e=m}}}class As{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);t0(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function il(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const e0=37297;let n0=0;function i0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const rl=new Gt;function r0(i){Qt._getMatrix(rl,Qt.workingColorSpace,i);const t=`mat3( ${rl.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case ks:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+i0(i.getShaderSource(t),o)}else return r}function s0(i,t){const e=r0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function o0(i,t){let e;switch(t){case Sh:e="Linear";break;case Eh:e="Reinhard";break;case bh:e="Cineon";break;case wh:e="ACESFilmic";break;case Ah:e="AgX";break;case Rh:e="Neutral";break;case Th:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const us=new D;function a0(){Qt.getLuminanceCoefficients(us);const i=us.x.toFixed(4),t=us.y.toFixed(4),e=us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function l0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function u0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Rr(i){return i!==""}function ol(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function al(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const h0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(i){return i.replace(h0,f0)}const d0=new Map;function f0(i,t){let e=Xt[t];if(e===void 0){const n=d0.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Aa(e)}const p0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cl(i){return i.replace(p0,m0)}function m0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ll(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function g0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function _0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cr:case lr:t="ENVMAP_TYPE_CUBE";break;case Bs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function v0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case lr:t="ENVMAP_MODE_REFRACTION";break}return t}function x0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ka:t="ENVMAP_BLENDING_MULTIPLY";break;case Mh:t="ENVMAP_BLENDING_MIX";break;case yh:t="ENVMAP_BLENDING_ADD";break}return t}function M0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function y0(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=g0(e),l=_0(e),h=v0(e),m=x0(e),p=M0(e),f=c0(e),g=l0(s),_=r.createProgram();let d,u,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rr).join(`
`),d.length>0&&(d+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rr).join(`
`),u.length>0&&(u+=`
`)):(d=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),u=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?o0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,s0("linearToOutputTexel",e.outputColorSpace),a0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rr).join(`
`)),o=Aa(o),o=ol(o,e),o=al(o,e),a=Aa(a),a=ol(a,e),a=al(a,e),o=cl(o),a=cl(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,u=["#define varying in",e.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=M+d+o,x=M+u+a,P=il(r,r.VERTEX_SHADER,b),A=il(r,r.FRAGMENT_SHADER,x);r.attachShader(_,P),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(P).trim(),B=r.getShaderInfoLog(A).trim();let Y=!0,q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,P,A);else{const tt=sl(r,P,"vertex"),X=sl(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+tt+`
`+X)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(L===""||B==="")&&(q=!1);q&&(C.diagnostics={runnable:Y,programLog:G,vertexShader:{log:L,prefix:d},fragmentShader:{log:B,prefix:u}})}r.deleteShader(P),r.deleteShader(A),R=new As(r,_),S=u0(r,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,e0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=n0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let S0=0;class E0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new b0(t),e.set(t,n)),n}}class b0{constructor(t){this.id=S0++,this.code=t,this.usedTimes=0}}function w0(i,t,e,n,r,s,o){const a=new hu,c=new E0,l=new Set,h=[],m=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function d(S,v,C,G,L){const B=G.fog,Y=L.geometry,q=S.isMeshStandardMaterial?G.environment:null,tt=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),X=tt&&tt.mapping===Bs?tt.image.height:null,ut=g[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const gt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Rt=gt!==void 0?gt.length:0;let qt=0;Y.morphAttributes.position!==void 0&&(qt=1),Y.morphAttributes.normal!==void 0&&(qt=2),Y.morphAttributes.color!==void 0&&(qt=3);let oe,K,rt,bt;if(ut){const ie=An[ut];oe=ie.vertexShader,K=ie.fragmentShader}else oe=S.vertexShader,K=S.fragmentShader,c.update(S),rt=c.getVertexShaderID(S),bt=c.getFragmentShaderID(S);const ht=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),zt=L.isInstancedMesh===!0,Yt=L.isBatchedMesh===!0,me=!!S.map,Jt=!!S.matcap,xe=!!tt,O=!!S.aoMap,nn=!!S.lightMap,$t=!!S.bumpMap,Kt=!!S.normalMap,Pt=!!S.displacementMap,he=!!S.emissiveMap,Ct=!!S.metalnessMap,T=!!S.roughnessMap,y=S.anisotropy>0,k=S.clearcoat>0,Z=S.dispersion>0,j=S.iridescence>0,$=S.sheen>0,Tt=S.transmission>0,dt=y&&!!S.anisotropyMap,_t=k&&!!S.clearcoatMap,jt=k&&!!S.clearcoatNormalMap,et=k&&!!S.clearcoatRoughnessMap,vt=j&&!!S.iridescenceMap,Lt=j&&!!S.iridescenceThicknessMap,Ot=$&&!!S.sheenColorMap,xt=$&&!!S.sheenRoughnessMap,Zt=!!S.specularMap,Wt=!!S.specularColorMap,ae=!!S.specularIntensityMap,I=Tt&&!!S.transmissionMap,at=Tt&&!!S.thicknessMap,W=!!S.gradientMap,J=!!S.alphaMap,mt=S.alphaTest>0,ft=!!S.alphaHash,Ht=!!S.extensions;let ge=Jn;S.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ge=i.toneMapping);const Ie={shaderID:ut,shaderType:S.type,shaderName:S.name,vertexShader:oe,fragmentShader:K,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:bt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Yt,batchingColor:Yt&&L._colorsTexture!==null,instancing:zt,instancingColor:zt&&L.instanceColor!==null,instancingMorph:zt&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:fr,alphaToCoverage:!!S.alphaToCoverage,map:me,matcap:Jt,envMap:xe,envMapMode:xe&&tt.mapping,envMapCubeUVHeight:X,aoMap:O,lightMap:nn,bumpMap:$t,normalMap:Kt,displacementMap:p&&Pt,emissiveMap:he,normalMapObjectSpace:Kt&&S.normalMapType===Lh,normalMapTangentSpace:Kt&&S.normalMapType===su,metalnessMap:Ct,roughnessMap:T,anisotropy:y,anisotropyMap:dt,clearcoat:k,clearcoatMap:_t,clearcoatNormalMap:jt,clearcoatRoughnessMap:et,dispersion:Z,iridescence:j,iridescenceMap:vt,iridescenceThicknessMap:Lt,sheen:$,sheenColorMap:Ot,sheenRoughnessMap:xt,specularMap:Zt,specularColorMap:Wt,specularIntensityMap:ae,transmission:Tt,transmissionMap:I,thicknessMap:at,gradientMap:W,opaque:S.transparent===!1&&S.blending===ir&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:mt,alphaHash:ft,combine:S.combine,mapUv:me&&_(S.map.channel),aoMapUv:O&&_(S.aoMap.channel),lightMapUv:nn&&_(S.lightMap.channel),bumpMapUv:$t&&_(S.bumpMap.channel),normalMapUv:Kt&&_(S.normalMap.channel),displacementMapUv:Pt&&_(S.displacementMap.channel),emissiveMapUv:he&&_(S.emissiveMap.channel),metalnessMapUv:Ct&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:dt&&_(S.anisotropyMap.channel),clearcoatMapUv:_t&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(S.sheenRoughnessMap.channel),specularMapUv:Zt&&_(S.specularMap.channel),specularColorMapUv:Wt&&_(S.specularColorMap.channel),specularIntensityMapUv:ae&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:at&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Kt||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!Y.attributes.uv&&(me||J),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:It,skinning:L.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:qt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:me&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===re,decodeVideoTextureEmissive:he&&S.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(S.emissiveMap.colorSpace)===re,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Rn,flipSided:S.side===Ge,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ht&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&S.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function u(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)v.push(C),v.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(M(v,S),b(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function M(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function b(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const v=g[S.type];let C;if(v){const G=An[v];C=ad.clone(G.uniforms)}else C=S.uniforms;return C}function P(S,v){let C;for(let G=0,L=h.length;G<L;G++){const B=h[G];if(B.cacheKey===v){C=B,++C.usedTimes;break}}return C===void 0&&(C=new y0(i,v,S,s),h.push(C)),C}function A(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function w(S){c.remove(S)}function R(){c.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:x,acquireProgram:P,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:R}}function T0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function A0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ul(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hl(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(m,p,f,g,_,d){let u=i[t];return u===void 0?(u={id:m.id,object:m,geometry:p,material:f,groupOrder:g,renderOrder:m.renderOrder,z:_,group:d},i[t]=u):(u.id=m.id,u.object=m,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=m.renderOrder,u.z=_,u.group=d),t++,u}function a(m,p,f,g,_,d){const u=o(m,p,f,g,_,d);f.transmission>0?n.push(u):f.transparent===!0?r.push(u):e.push(u)}function c(m,p,f,g,_,d){const u=o(m,p,f,g,_,d);f.transmission>0?n.unshift(u):f.transparent===!0?r.unshift(u):e.unshift(u)}function l(m,p){e.length>1&&e.sort(m||A0),n.length>1&&n.sort(p||ul),r.length>1&&r.sort(p||ul)}function h(){for(let m=t,p=i.length;m<p;m++){const f=i[m];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function R0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new hl,i.set(n,[o])):r>=s.length?(o=new hl,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function C0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new wt};break;case"SpotLight":e={position:new D,direction:new D,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function P0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let D0=0;function L0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function I0(i){const t=new C0,e=P0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const r=new D,s=new pe,o=new pe;function a(l){let h=0,m=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,d=0,u=0,M=0,b=0,x=0,P=0,A=0,w=0;l.sort(L0);for(let S=0,v=l.length;S<v;S++){const C=l[S],G=C.color,L=C.intensity,B=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=G.r*L,m+=G.g*L,p+=G.b*L;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],L);w++}else if(C.isDirectionalLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const tt=C.shadow,X=e.get(C);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=C.shadow.matrix,M++}n.directional[f]=q,f++}else if(C.isSpotLight){const q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(G).multiplyScalar(L),q.distance=B,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[_]=q;const tt=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,tt.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=tt.matrix,C.castShadow){const X=e.get(C);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=Y,x++}_++}else if(C.isRectAreaLight){const q=t.get(C);q.color.copy(G).multiplyScalar(L),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[d]=q,d++}else if(C.isPointLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const tt=C.shadow,X=e.get(C);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=q,g++}else if(C.isHemisphereLight){const q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(L),q.groundColor.copy(C.groundColor).multiplyScalar(L),n.hemi[u]=q,u++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=p;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==d||R.hemiLength!==u||R.numDirectionalShadows!==M||R.numPointShadows!==b||R.numSpotShadows!==x||R.numSpotMaps!==P||R.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=d,R.hemiLength=u,R.numDirectionalShadows=M,R.numPointShadows=b,R.numSpotShadows=x,R.numSpotMaps=P,R.numLightProbes=w,n.version=D0++)}function c(l,h){let m=0,p=0,f=0,g=0,_=0;const d=h.matrixWorldInverse;for(let u=0,M=l.length;u<M;u++){const b=l[u];if(b.isDirectionalLight){const x=n.directional[m];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),m++}else if(b.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),f++}else if(b.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(d),o.identity(),s.copy(b.matrixWorld),s.premultiply(d),o.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=n.point[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(d),_++}}}return{setup:a,setupView:c,state:n}}function dl(i){const t=new I0(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function U0(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new dl(i),t.set(r,[a])):s>=o.length?(a=new dl(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class N0 extends mr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class O0 extends mr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const F0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
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
}`;function B0(i,t,e){let n=new Ya;const r=new Mt,s=new Mt,o=new ve,a=new N0({depthPacking:Dh}),c=new O0,l={},h=e.maxTextureSize,m={[pi]:Ge,[Ge]:pi,[Rn]:Rn},p=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:F0,fragmentShader:z0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new ke;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ot(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let u=this.type;this.render=function(A,w,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),G=i.state;G.setBlending(fi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const L=u!==Xn&&this.type===Xn,B=u===Xn&&this.type!==Xn;for(let Y=0,q=A.length;Y<q;Y++){const tt=A[Y],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ut=X.getFrameExtents();if(r.multiply(ut),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ut.x),r.x=s.x*ut.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ut.y),r.y=s.y*ut.y,X.mapSize.y=s.y)),X.map===null||L===!0||B===!0){const Rt=this.type!==Xn?{minFilter:bn,magFilter:bn}:{};X.map!==null&&X.map.dispose(),X.map=new Li(r.x,r.y,Rt),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const gt=X.getViewportCount();for(let Rt=0;Rt<gt;Rt++){const qt=X.getViewport(Rt);o.set(s.x*qt.x,s.y*qt.y,s.x*qt.z,s.y*qt.w),G.viewport(o),X.updateMatrices(tt,Rt),n=X.getFrustum(),x(w,R,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===Xn&&M(X,R),X.needsUpdate=!1}u=this.type,d.needsUpdate=!1,i.setRenderTarget(S,v,C)};function M(A,w){const R=t.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Li(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,R,p,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,R,f,_,null)}function b(A,w,R,S){let v=null;const C=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)v=C;else if(v=R.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=v.uuid,L=w.uuid;let B=l[G];B===void 0&&(B={},l[G]=B);let Y=B[L];Y===void 0&&(Y=v.clone(),B[L]=Y,w.addEventListener("dispose",P)),v=Y}if(v.visible=w.visible,v.wireframe=w.wireframe,S===Xn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:m[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const G=i.properties.get(v);G.light=R}return v}function x(A,w,R,S,v){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Xn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const L=t.update(A),B=A.material;if(Array.isArray(B)){const Y=L.groups;for(let q=0,tt=Y.length;q<tt;q++){const X=Y[q],ut=B[X.materialIndex];if(ut&&ut.visible){const gt=b(A,ut,S,v);A.onBeforeShadow(i,A,w,R,L,gt,X),i.renderBufferDirect(R,null,L,gt,A,X),A.onAfterShadow(i,A,w,R,L,gt,X)}}}else if(B.visible){const Y=b(A,B,S,v);A.onBeforeShadow(i,A,w,R,L,Y,null),i.renderBufferDirect(R,null,L,Y,A,null),A.onAfterShadow(i,A,w,R,L,Y,null)}}const G=A.children;for(let L=0,B=G.length;L<B;L++)x(G[L],w,R,S,v)}function P(A){A.target.removeEventListener("dispose",P);for(const R in l){const S=l[R],v=A.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const k0={[Go]:Wo,[Xo]:$o,[qo]:Ko,[ar]:Yo,[Wo]:Go,[$o]:Xo,[Ko]:qo,[Yo]:ar};function H0(i,t){function e(){let I=!1;const at=new ve;let W=null;const J=new ve(0,0,0,0);return{setMask:function(mt){W!==mt&&!I&&(i.colorMask(mt,mt,mt,mt),W=mt)},setLocked:function(mt){I=mt},setClear:function(mt,ft,Ht,ge,Ie){Ie===!0&&(mt*=ge,ft*=ge,Ht*=ge),at.set(mt,ft,Ht,ge),J.equals(at)===!1&&(i.clearColor(mt,ft,Ht,ge),J.copy(at))},reset:function(){I=!1,W=null,J.set(-1,0,0,0)}}}function n(){let I=!1,at=!1,W=null,J=null,mt=null;return{setReversed:function(ft){if(at!==ft){const Ht=t.get("EXT_clip_control");at?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const ge=mt;mt=null,this.setClear(ge)}at=ft},getReversed:function(){return at},setTest:function(ft){ft?ht(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(ft){W!==ft&&!I&&(i.depthMask(ft),W=ft)},setFunc:function(ft){if(at&&(ft=k0[ft]),J!==ft){switch(ft){case Go:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case ar:i.depthFunc(i.LEQUAL);break;case qo:i.depthFunc(i.EQUAL);break;case Yo:i.depthFunc(i.GEQUAL);break;case $o:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ft}},setLocked:function(ft){I=ft},setClear:function(ft){mt!==ft&&(at&&(ft=1-ft),i.clearDepth(ft),mt=ft)},reset:function(){I=!1,W=null,J=null,mt=null,at=!1}}}function r(){let I=!1,at=null,W=null,J=null,mt=null,ft=null,Ht=null,ge=null,Ie=null;return{setTest:function(ie){I||(ie?ht(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(ie){at!==ie&&!I&&(i.stencilMask(ie),at=ie)},setFunc:function(ie,dn,Fn){(W!==ie||J!==dn||mt!==Fn)&&(i.stencilFunc(ie,dn,Fn),W=ie,J=dn,mt=Fn)},setOp:function(ie,dn,Fn){(ft!==ie||Ht!==dn||ge!==Fn)&&(i.stencilOp(ie,dn,Fn),ft=ie,Ht=dn,ge=Fn)},setLocked:function(ie){I=ie},setClear:function(ie){Ie!==ie&&(i.clearStencil(ie),Ie=ie)},reset:function(){I=!1,at=null,W=null,J=null,mt=null,ft=null,Ht=null,ge=null,Ie=null}}}const s=new e,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let h={},m={},p=new WeakMap,f=[],g=null,_=!1,d=null,u=null,M=null,b=null,x=null,P=null,A=null,w=new wt(0,0,0),R=0,S=!1,v=null,C=null,G=null,L=null,B=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,tt=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=tt>=1):X.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=tt>=2);let ut=null,gt={};const Rt=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),oe=new ve().fromArray(Rt),K=new ve().fromArray(qt);function rt(I,at,W,J){const mt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(I,ft),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<W;Ht++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(at+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return ft}const bt={};bt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(ar),$t(!1),Kt(gc),ht(i.CULL_FACE),O(fi);function ht(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function It(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function zt(I,at){return m[I]!==at?(i.bindFramebuffer(I,at),m[I]=at,I===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=at),I===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Yt(I,at){let W=f,J=!1;if(I){W=p.get(at),W===void 0&&(W=[],p.set(at,W));const mt=I.textures;if(W.length!==mt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Ht=mt.length;ft<Ht;ft++)W[ft]=i.COLOR_ATTACHMENT0+ft;W.length=mt.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function me(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Jt={[Ai]:i.FUNC_ADD,[ih]:i.FUNC_SUBTRACT,[rh]:i.FUNC_REVERSE_SUBTRACT};Jt[sh]=i.MIN,Jt[oh]=i.MAX;const xe={[ah]:i.ZERO,[ch]:i.ONE,[lh]:i.SRC_COLOR,[Ho]:i.SRC_ALPHA,[mh]:i.SRC_ALPHA_SATURATE,[fh]:i.DST_COLOR,[hh]:i.DST_ALPHA,[uh]:i.ONE_MINUS_SRC_COLOR,[Vo]:i.ONE_MINUS_SRC_ALPHA,[ph]:i.ONE_MINUS_DST_COLOR,[dh]:i.ONE_MINUS_DST_ALPHA,[gh]:i.CONSTANT_COLOR,[_h]:i.ONE_MINUS_CONSTANT_COLOR,[vh]:i.CONSTANT_ALPHA,[xh]:i.ONE_MINUS_CONSTANT_ALPHA};function O(I,at,W,J,mt,ft,Ht,ge,Ie,ie){if(I===fi){_===!0&&(It(i.BLEND),_=!1);return}if(_===!1&&(ht(i.BLEND),_=!0),I!==nh){if(I!==d||ie!==S){if((u!==Ai||x!==Ai)&&(i.blendEquation(i.FUNC_ADD),u=Ai,x=Ai),ie)switch(I){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.ONE,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,b=null,P=null,A=null,w.set(0,0,0),R=0,d=I,S=ie}return}mt=mt||at,ft=ft||W,Ht=Ht||J,(at!==u||mt!==x)&&(i.blendEquationSeparate(Jt[at],Jt[mt]),u=at,x=mt),(W!==M||J!==b||ft!==P||Ht!==A)&&(i.blendFuncSeparate(xe[W],xe[J],xe[ft],xe[Ht]),M=W,b=J,P=ft,A=Ht),(ge.equals(w)===!1||Ie!==R)&&(i.blendColor(ge.r,ge.g,ge.b,Ie),w.copy(ge),R=Ie),d=I,S=!1}function nn(I,at){I.side===Rn?It(i.CULL_FACE):ht(i.CULL_FACE);let W=I.side===Ge;at&&(W=!W),$t(W),I.blending===ir&&I.transparent===!1?O(fi):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),he(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(I){v!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),v=I)}function Kt(I){I!==Qu?(ht(i.CULL_FACE),I!==C&&(I===gc?i.cullFace(i.BACK):I===th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),C=I}function Pt(I){I!==G&&(q&&i.lineWidth(I),G=I)}function he(I,at,W){I?(ht(i.POLYGON_OFFSET_FILL),(L!==at||B!==W)&&(i.polygonOffset(at,W),L=at,B=W)):It(i.POLYGON_OFFSET_FILL)}function Ct(I){I?ht(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function T(I){I===void 0&&(I=i.TEXTURE0+Y-1),ut!==I&&(i.activeTexture(I),ut=I)}function y(I,at,W){W===void 0&&(ut===null?W=i.TEXTURE0+Y-1:W=ut);let J=gt[W];J===void 0&&(J={type:void 0,texture:void 0},gt[W]=J),(J.type!==I||J.texture!==at)&&(ut!==W&&(i.activeTexture(W),ut=W),i.bindTexture(I,at||bt[I]),J.type=I,J.texture=at)}function k(){const I=gt[ut];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(I){oe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),oe.copy(I))}function xt(I){K.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),K.copy(I))}function Zt(I,at){let W=l.get(at);W===void 0&&(W=new WeakMap,l.set(at,W));let J=W.get(I);J===void 0&&(J=i.getUniformBlockIndex(at,I.name),W.set(I,J))}function Wt(I,at){const J=l.get(at).get(I);c.get(at)!==J&&(i.uniformBlockBinding(at,J,I.__bindingPointIndex),c.set(at,J))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ut=null,gt={},m={},p=new WeakMap,f=[],g=null,_=!1,d=null,u=null,M=null,b=null,x=null,P=null,A=null,w=new wt(0,0,0),R=0,S=!1,v=null,C=null,G=null,L=null,B=null,oe.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ht,disable:It,bindFramebuffer:zt,drawBuffers:Yt,useProgram:me,setBlending:O,setMaterial:nn,setFlipSided:$t,setCullFace:Kt,setLineWidth:Pt,setPolygonOffset:he,setScissorTest:Ct,activeTexture:T,bindTexture:y,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:vt,texImage3D:Lt,updateUBOMapping:Zt,uniformBlockBinding:Wt,texStorage2D:jt,texStorage3D:et,texSubImage2D:$,texSubImage3D:Tt,compressedTexSubImage2D:dt,compressedTexSubImage3D:_t,scissor:Ot,viewport:xt,reset:ae}}function fl(i,t,e,n){const r=V0(n);switch(e){case jl:return i*t;case tu:return i*t;case eu:return i*t*2;case nu:return i*t/r.components*r.byteLength;case Wa:return i*t/r.components*r.byteLength;case iu:return i*t*2/r.components*r.byteLength;case Xa:return i*t*2/r.components*r.byteLength;case Ql:return i*t*3/r.components*r.byteLength;case Sn:return i*t*4/r.components*r.byteLength;case qa:return i*t*4/r.components*r.byteLength;case Ss:case Es:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bs:case ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:case ia:return Math.max(i,16)*Math.max(t,8)/4;case ta:case na:return Math.max(i,8)*Math.max(t,8)/2;case ra:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ca:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ua:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ts:case ya:case Sa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ru:case Ea:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ba:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function V0(i){switch(i){case Qn:case Kl:return{byteLength:1,components:1};case Ur:case Zl:case zr:return{byteLength:2,components:1};case Va:case Ga:return{byteLength:2,components:4};case Di:case Ha:case $n:return{byteLength:4,components:1};case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function G0(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Mt,h=new WeakMap;let m;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):Is("canvas")}function _(T,y,k){let Z=1;const j=Ct(T);if((j.width>k||j.height>k)&&(Z=k/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(Z*j.width),Tt=Math.floor(Z*j.height);m===void 0&&(m=g($,Tt));const dt=y?g($,Tt):m;return dt.width=$,dt.height=Tt,dt.getContext("2d").drawImage(T,0,0,$,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+Tt+")."),dt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function d(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,y,k,Z,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=y;if(y===i.RED&&(k===i.FLOAT&&($=i.R32F),k===i.HALF_FLOAT&&($=i.R16F),k===i.UNSIGNED_BYTE&&($=i.R8)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.R8UI),k===i.UNSIGNED_SHORT&&($=i.R16UI),k===i.UNSIGNED_INT&&($=i.R32UI),k===i.BYTE&&($=i.R8I),k===i.SHORT&&($=i.R16I),k===i.INT&&($=i.R32I)),y===i.RG&&(k===i.FLOAT&&($=i.RG32F),k===i.HALF_FLOAT&&($=i.RG16F),k===i.UNSIGNED_BYTE&&($=i.RG8)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RG8UI),k===i.UNSIGNED_SHORT&&($=i.RG16UI),k===i.UNSIGNED_INT&&($=i.RG32UI),k===i.BYTE&&($=i.RG8I),k===i.SHORT&&($=i.RG16I),k===i.INT&&($=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGB8UI),k===i.UNSIGNED_SHORT&&($=i.RGB16UI),k===i.UNSIGNED_INT&&($=i.RGB32UI),k===i.BYTE&&($=i.RGB8I),k===i.SHORT&&($=i.RGB16I),k===i.INT&&($=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&($=i.RGBA8UI),k===i.UNSIGNED_SHORT&&($=i.RGBA16UI),k===i.UNSIGNED_INT&&($=i.RGBA32UI),k===i.BYTE&&($=i.RGBA8I),k===i.SHORT&&($=i.RGBA16I),k===i.INT&&($=i.RGBA32I)),y===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),y===i.RGBA){const Tt=j?ks:Qt.getTransfer(Z);k===i.FLOAT&&($=i.RGBA32F),k===i.HALF_FLOAT&&($=i.RGBA16F),k===i.UNSIGNED_BYTE&&($=Tt===re?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(T,y){let k;return T?y===null||y===Di||y===ur?k=i.DEPTH24_STENCIL8:y===$n?k=i.DEPTH32F_STENCIL8:y===Ur&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Di||y===ur?k=i.DEPTH_COMPONENT24:y===$n?k=i.DEPTH_COMPONENT32F:y===Ur&&(k=i.DEPTH_COMPONENT16),k}function P(T,y){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==bn&&T.minFilter!==Cn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){const y=T.target;y.removeEventListener("dispose",A),R(y),y.isVideoTexture&&h.delete(y)}function w(T){const y=T.target;y.removeEventListener("dispose",w),v(y)}function R(T){const y=n.get(T);if(y.__webglInit===void 0)return;const k=T.source,Z=p.get(k);if(Z){const j=Z[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(T),Object.keys(Z).length===0&&p.delete(k)}n.remove(T)}function S(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const k=T.source,Z=p.get(k);delete Z[y.__cacheKey],o.memory.textures--}function v(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let j=0;j<y.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(y.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=T.textures;for(let Z=0,j=k.length;Z<j;Z++){const $=n.get(k[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(k[Z])}n.remove(T)}let C=0;function G(){C=0}function L(){const T=C;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),C+=1,T}function B(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function Y(T,y){const k=n.get(T);if(T.isVideoTexture&&Pt(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,T,y);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function q(T,y){const k=n.get(T);if(T.version>0&&k.__version!==T.version){K(k,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function tt(T,y){const k=n.get(T);if(T.version>0&&k.__version!==T.version){K(k,T,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function X(T,y){const k=n.get(T);if(T.version>0&&k.__version!==T.version){rt(k,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}const ut={[jo]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[Qo]:i.MIRRORED_REPEAT},gt={[bn]:i.NEAREST,[Ch]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[$s]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},Rt={[Ih]:i.NEVER,[Bh]:i.ALWAYS,[Uh]:i.LESS,[ou]:i.LEQUAL,[Nh]:i.EQUAL,[zh]:i.GEQUAL,[Oh]:i.GREATER,[Fh]:i.NOTEQUAL};function qt(T,y){if(y.type===$n&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Cn||y.magFilter===$s||y.magFilter===Wr||y.magFilter===Pi||y.minFilter===Cn||y.minFilter===$s||y.minFilter===Wr||y.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ut[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ut[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ut[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,gt[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,gt[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Rt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===bn||y.minFilter!==Wr&&y.minFilter!==Pi||y.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function oe(T,y){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));const Z=y.source;let j=p.get(Z);j===void 0&&(j={},p.set(Z,j));const $=B(y);if($!==T.__cacheKey){j[$]===void 0&&(j[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[$].usedTimes++;const Tt=j[T.__cacheKey];Tt!==void 0&&(j[T.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(y)),T.__cacheKey=$,T.__webglTexture=j[$].texture}return k}function K(T,y,k){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);const j=oe(T,y),$=y.source;e.bindTexture(Z,T.__webglTexture,i.TEXTURE0+k);const Tt=n.get($);if($.version!==Tt.__version||j===!0){e.activeTexture(i.TEXTURE0+k);const dt=Qt.getPrimaries(Qt.workingColorSpace),_t=y.colorSpace===hi?null:Qt.getPrimaries(y.colorSpace),jt=y.colorSpace===hi||dt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let et=_(y.image,!1,r.maxTextureSize);et=he(y,et);const vt=s.convert(y.format,y.colorSpace),Lt=s.convert(y.type);let Ot=b(y.internalFormat,vt,Lt,y.colorSpace,y.isVideoTexture);qt(Z,y);let xt;const Zt=y.mipmaps,Wt=y.isVideoTexture!==!0,ae=Tt.__version===void 0||j===!0,I=$.dataReady,at=P(y,et);if(y.isDepthTexture)Ot=x(y.format===hr,y.type),ae&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Ot,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Ot,et.width,et.height,0,vt,Lt,null));else if(y.isDataTexture)if(Zt.length>0){Wt&&ae&&e.texStorage2D(i.TEXTURE_2D,at,Ot,Zt[0].width,Zt[0].height);for(let W=0,J=Zt.length;W<J;W++)xt=Zt[W],Wt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,xt.width,xt.height,vt,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,W,Ot,xt.width,xt.height,0,vt,Lt,xt.data);y.generateMipmaps=!1}else Wt?(ae&&e.texStorage2D(i.TEXTURE_2D,at,Ot,et.width,et.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,vt,Lt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,et.width,et.height,0,vt,Lt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Wt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Ot,Zt[0].width,Zt[0].height,et.depth);for(let W=0,J=Zt.length;W<J;W++)if(xt=Zt[W],y.format!==Sn)if(vt!==null)if(Wt){if(I)if(y.layerUpdates.size>0){const mt=fl(xt.width,xt.height,y.format,y.type);for(const ft of y.layerUpdates){const Ht=xt.data.subarray(ft*mt/xt.data.BYTES_PER_ELEMENT,(ft+1)*mt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ft,xt.width,xt.height,1,vt,Ht)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,xt.width,xt.height,et.depth,vt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ot,xt.width,xt.height,et.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,xt.width,xt.height,et.depth,vt,Lt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Ot,xt.width,xt.height,et.depth,0,vt,Lt,xt.data)}else{Wt&&ae&&e.texStorage2D(i.TEXTURE_2D,at,Ot,Zt[0].width,Zt[0].height);for(let W=0,J=Zt.length;W<J;W++)xt=Zt[W],y.format!==Sn?vt!==null?Wt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Ot,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,xt.width,xt.height,vt,Lt,xt.data):e.texImage2D(i.TEXTURE_2D,W,Ot,xt.width,xt.height,0,vt,Lt,xt.data)}else if(y.isDataArrayTexture)if(Wt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Ot,et.width,et.height,et.depth),I)if(y.layerUpdates.size>0){const W=fl(et.width,et.height,y.format,y.type);for(const J of y.layerUpdates){const mt=et.data.subarray(J*W/et.data.BYTES_PER_ELEMENT,(J+1)*W/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,vt,Lt,mt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,vt,Lt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,et.width,et.height,et.depth,0,vt,Lt,et.data);else if(y.isData3DTexture)Wt?(ae&&e.texStorage3D(i.TEXTURE_3D,at,Ot,et.width,et.height,et.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,vt,Lt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,et.width,et.height,et.depth,0,vt,Lt,et.data);else if(y.isFramebufferTexture){if(ae)if(Wt)e.texStorage2D(i.TEXTURE_2D,at,Ot,et.width,et.height);else{let W=et.width,J=et.height;for(let mt=0;mt<at;mt++)e.texImage2D(i.TEXTURE_2D,mt,Ot,W,J,0,vt,Lt,null),W>>=1,J>>=1}}else if(Zt.length>0){if(Wt&&ae){const W=Ct(Zt[0]);e.texStorage2D(i.TEXTURE_2D,at,Ot,W.width,W.height)}for(let W=0,J=Zt.length;W<J;W++)xt=Zt[W],Wt?I&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,vt,Lt,xt):e.texImage2D(i.TEXTURE_2D,W,Ot,vt,Lt,xt);y.generateMipmaps=!1}else if(Wt){if(ae){const W=Ct(et);e.texStorage2D(i.TEXTURE_2D,at,Ot,W.width,W.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Lt,et)}else e.texImage2D(i.TEXTURE_2D,0,Ot,vt,Lt,et);d(y)&&u(Z),Tt.__version=$.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function rt(T,y,k){if(y.image.length!==6)return;const Z=oe(T,y),j=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);const $=n.get(j);if(j.version!==$.__version||Z===!0){e.activeTexture(i.TEXTURE0+k);const Tt=Qt.getPrimaries(Qt.workingColorSpace),dt=y.colorSpace===hi?null:Qt.getPrimaries(y.colorSpace),_t=y.colorSpace===hi||Tt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const jt=y.isCompressedTexture||y.image[0].isCompressedTexture,et=y.image[0]&&y.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!jt&&!et?vt[J]=_(y.image[J],!0,r.maxCubemapSize):vt[J]=et?y.image[J].image:y.image[J],vt[J]=he(y,vt[J]);const Lt=vt[0],Ot=s.convert(y.format,y.colorSpace),xt=s.convert(y.type),Zt=b(y.internalFormat,Ot,xt,y.colorSpace),Wt=y.isVideoTexture!==!0,ae=$.__version===void 0||Z===!0,I=j.dataReady;let at=P(y,Lt);qt(i.TEXTURE_CUBE_MAP,y);let W;if(jt){Wt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Zt,Lt.width,Lt.height);for(let J=0;J<6;J++){W=vt[J].mipmaps;for(let mt=0;mt<W.length;mt++){const ft=W[mt];y.format!==Sn?Ot!==null?Wt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,ft.width,ft.height,Ot,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,Zt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,ft.width,ft.height,Ot,xt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,Zt,ft.width,ft.height,0,Ot,xt,ft.data)}}}else{if(W=y.mipmaps,Wt&&ae){W.length>0&&at++;const J=Ct(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Zt,J.width,J.height)}for(let J=0;J<6;J++)if(et){Wt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,Ot,xt,vt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Zt,vt[J].width,vt[J].height,0,Ot,xt,vt[J].data);for(let mt=0;mt<W.length;mt++){const Ht=W[mt].image[J].image;Wt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,Ht.width,Ht.height,Ot,xt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,Zt,Ht.width,Ht.height,0,Ot,xt,Ht.data)}}else{Wt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ot,xt,vt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Zt,Ot,xt,vt[J]);for(let mt=0;mt<W.length;mt++){const ft=W[mt];Wt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,Ot,xt,ft.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,Zt,Ot,xt,ft.image[J])}}}d(y)&&u(i.TEXTURE_CUBE_MAP),$.__version=j.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function bt(T,y,k,Z,j,$){const Tt=s.convert(k.format,k.colorSpace),dt=s.convert(k.type),_t=b(k.internalFormat,Tt,dt,k.colorSpace),jt=n.get(y),et=n.get(k);if(et.__renderTarget=y,!jt.__hasExternalTextures){const vt=Math.max(1,y.width>>$),Lt=Math.max(1,y.height>>$);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,$,_t,vt,Lt,y.depth,0,Tt,dt,null):e.texImage2D(j,$,_t,vt,Lt,0,Tt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Kt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,et.__webglTexture,0,$t(y)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,et.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(T,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){const Z=y.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,$=x(y.stencilBuffer,j),Tt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=$t(y);Kt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,$,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,$,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,$,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,T)}else{const Z=y.textures;for(let j=0;j<Z.length;j++){const $=Z[j],Tt=s.convert($.format,$.colorSpace),dt=s.convert($.type),_t=b($.internalFormat,Tt,dt,$.colorSpace),jt=$t(y);k&&Kt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,_t,y.width,y.height):Kt(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,_t,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_t,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const j=Z.__webglTexture,$=$t(y);if(y.depthTexture.format===rr)Kt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(y.depthTexture.format===hr)Kt(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function zt(T){const y=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=Z}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");It(y.__webglFramebuffer,T)}else if(k){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),ht(y.__webglDepthbuffer[Z],T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ht(y.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(T,y,k){const Z=n.get(T);y!==void 0&&bt(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&zt(T)}function me(T){const y=T.texture,k=n.get(T),Z=n.get(y);T.addEventListener("dispose",w);const j=T.textures,$=T.isWebGLCubeRenderTarget===!0,Tt=j.length>1;if(Tt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,o.memory.textures++),$){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let _t=0;_t<y.mipmaps.length;_t++)k.__webglFramebuffer[dt][_t]=i.createFramebuffer()}else k.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<y.mipmaps.length;dt++)k.__webglFramebuffer[dt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let dt=0,_t=j.length;dt<_t;dt++){const jt=n.get(j[dt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Kt(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<j.length;dt++){const _t=j[dt];k.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);const jt=s.convert(_t.format,_t.colorSpace),et=s.convert(_t.type),vt=b(_t.internalFormat,jt,et,_t.colorSpace,T.isXRRenderTarget===!0),Lt=$t(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,vt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),qt(i.TEXTURE_CUBE_MAP,y);for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)bt(k.__webglFramebuffer[dt][_t],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,_t);else bt(k.__webglFramebuffer[dt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);d(y)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let dt=0,_t=j.length;dt<_t;dt++){const jt=j[dt],et=n.get(jt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),qt(i.TEXTURE_2D,jt),bt(k.__webglFramebuffer,T,jt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),d(jt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(dt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),qt(dt,y),y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)bt(k.__webglFramebuffer[_t],T,y,i.COLOR_ATTACHMENT0,dt,_t);else bt(k.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,dt,0);d(y)&&u(dt),e.unbindTexture()}T.depthBuffer&&zt(T)}function Jt(T){const y=T.textures;for(let k=0,Z=y.length;k<Z;k++){const j=y[k];if(d(j)){const $=M(T),Tt=n.get(j).__webglTexture;e.bindTexture($,Tt),u($),e.unbindTexture()}}}const xe=[],O=[];function nn(T){if(T.samples>0){if(Kt(T)===!1){const y=T.textures,k=T.width,Z=T.height;let j=i.COLOR_BUFFER_BIT;const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(T),dt=y.length>1;if(dt)for(let _t=0;_t<y.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<y.length;_t++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const jt=n.get(y[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,k,Z,0,0,k,Z,j,i.NEAREST),c===!0&&(xe.length=0,O.length=0,xe.push(i.COLOR_ATTACHMENT0+_t),T.depthBuffer&&T.resolveDepthBuffer===!1&&(xe.push($),O.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let _t=0;_t<y.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const jt=n.get(y[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function $t(T){return Math.min(r.maxSamples,T.samples)}function Kt(T){const y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Pt(T){const y=o.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function he(T,y){const k=T.colorSpace,Z=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==fr&&k!==hi&&(Qt.getTransfer(k)===re?(Z!==Sn||j!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function Ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=tt,this.setTextureCube=X,this.rebindTextures=Yt,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Kt}function W0(i,t){function e(n,r=hi){let s;const o=Qt.getTransfer(r);if(n===Qn)return i.UNSIGNED_BYTE;if(n===Va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kl)return i.BYTE;if(n===Zl)return i.SHORT;if(n===Ur)return i.UNSIGNED_SHORT;if(n===Ha)return i.INT;if(n===Di)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===zr)return i.HALF_FLOAT;if(n===jl)return i.ALPHA;if(n===Ql)return i.RGB;if(n===Sn)return i.RGBA;if(n===tu)return i.LUMINANCE;if(n===eu)return i.LUMINANCE_ALPHA;if(n===rr)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===nu)return i.RED;if(n===Wa)return i.RED_INTEGER;if(n===iu)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===Ss||n===Es||n===bs||n===ws)if(o===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ss)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ss)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ws)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ta||n===ea||n===na||n===ia)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ta)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ea)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===na)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ia)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ra||n===sa||n===oa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ra||n===sa)return o===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===oa)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===aa||n===ca||n===la||n===ua||n===ha||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===aa)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ca)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===la)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ua)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ha)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===da)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fa)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pa)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ma)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ga)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_a)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===va)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xa)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ma)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ts||n===ya||n===Sa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ts)return o===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ya)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ru||n===Ea||n===ba||n===wa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ts)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ea)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class X0 extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class lt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q0={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,n),u=this._getHandJoint(l,_);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}const h=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],p=h.position.distanceTo(m.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$0=`
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

}`;class K0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new We,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Nn({vertexShader:Y0,fragmentShader:$0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z0 extends pr{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,m=null,p=null,f=null,g=null;const _=new K0,d=e.getContextAttributes();let u=null,M=null;const b=[],x=[],P=new Mt;let A=null;const w=new cn;w.viewport=new ve;const R=new cn;R.viewport=new ve;const S=[w,R],v=new X0;let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let rt=b[K];return rt===void 0&&(rt=new bo,b[K]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(K){let rt=b[K];return rt===void 0&&(rt=new bo,b[K]=rt),rt.getGripSpace()},this.getHand=function(K){let rt=b[K];return rt===void 0&&(rt=new bo,b[K]=rt),rt.getHandSpace()};function L(K){const rt=x.indexOf(K.inputSource);if(rt===-1)return;const bt=b[rt];bt!==void 0&&(bt.update(K.inputSource,K.frame,l||o),bt.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",Y);for(let K=0;K<b.length;K++){const rt=x[K];rt!==null&&(x[K]=null,b[K].disconnect(rt))}C=null,G=null,_.reset(),t.setRenderTarget(u),f=null,p=null,m=null,r=null,M=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return m},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(u=t.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",B),r.addEventListener("inputsourceschange",Y),d.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),r.renderState.layers===void 0){const rt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Li(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let rt=null,bt=null,ht=null;d.depth&&(ht=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=d.stencil?hr:rr,bt=d.stencil?ur:Di);const It={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};m=new XRWebGLBinding(r,e),p=m.createProjectionLayer(It),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),M=new Li(p.textureWidth,p.textureHeight,{format:Sn,type:Qn,depthTexture:new Mu(p.textureWidth,p.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(K){for(let rt=0;rt<K.removed.length;rt++){const bt=K.removed[rt],ht=x.indexOf(bt);ht>=0&&(x[ht]=null,b[ht].disconnect(bt))}for(let rt=0;rt<K.added.length;rt++){const bt=K.added[rt];let ht=x.indexOf(bt);if(ht===-1){for(let zt=0;zt<b.length;zt++)if(zt>=x.length){x.push(bt),ht=zt;break}else if(x[zt]===null){x[zt]=bt,ht=zt;break}if(ht===-1)break}const It=b[ht];It&&It.connect(bt)}}const q=new D,tt=new D;function X(K,rt,bt){q.setFromMatrixPosition(rt.matrixWorld),tt.setFromMatrixPosition(bt.matrixWorld);const ht=q.distanceTo(tt),It=rt.projectionMatrix.elements,zt=bt.projectionMatrix.elements,Yt=It[14]/(It[10]-1),me=It[14]/(It[10]+1),Jt=(It[9]+1)/It[5],xe=(It[9]-1)/It[5],O=(It[8]-1)/It[0],nn=(zt[8]+1)/zt[0],$t=Yt*O,Kt=Yt*nn,Pt=ht/(-O+nn),he=Pt*-O;if(rt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(he),K.translateZ(Pt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),It[10]===-1)K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Ct=Yt+Pt,T=me+Pt,y=$t-he,k=Kt+(ht-he),Z=Jt*me/T*Ct,j=xe*me/T*Ct;K.projectionMatrix.makePerspective(y,k,Z,j,Ct,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ut(K,rt){rt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(rt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let rt=K.near,bt=K.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),v.near=R.near=w.near=rt,v.far=R.far=w.far=bt,(C!==v.near||G!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,G=v.far),w.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,v.layers.mask=w.layers.mask|R.layers.mask;const ht=K.parent,It=v.cameras;ut(v,ht);for(let zt=0;zt<It.length;zt++)ut(It[zt],ht);It.length===2?X(v,w,R):v.projectionMatrix.copy(w.projectionMatrix),gt(K,v,ht)};function gt(K,rt,bt){bt===null?K.matrix.copy(rt.matrixWorld):(K.matrix.copy(bt.matrixWorld),K.matrix.invert(),K.matrix.multiply(rt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ta*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(K){c=K,p!==null&&(p.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Rt=null;function qt(K,rt){if(h=rt.getViewerPose(l||o),g=rt,h!==null){const bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let ht=!1;bt.length!==v.cameras.length&&(v.cameras.length=0,ht=!0);for(let zt=0;zt<bt.length;zt++){const Yt=bt[zt];let me=null;if(f!==null)me=f.getViewport(Yt);else{const xe=m.getViewSubImage(p,Yt);me=xe.viewport,zt===0&&(t.setRenderTargetTextures(M,xe.colorTexture,p.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(M))}let Jt=S[zt];Jt===void 0&&(Jt=new cn,Jt.layers.enable(zt),Jt.viewport=new ve,S[zt]=Jt),Jt.matrix.fromArray(Yt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Yt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(me.x,me.y,me.width,me.height),zt===0&&(v.matrix.copy(Jt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ht===!0&&v.cameras.push(Jt)}const It=r.enabledFeatures;if(It&&It.includes("depth-sensing")){const zt=m.getDepthInformation(bt[0]);zt&&zt.isValid&&zt.texture&&_.init(t,zt,r.renderState)}}for(let bt=0;bt<b.length;bt++){const ht=x[bt],It=b[bt];ht!==null&&It!==void 0&&It.update(ht,rt,l||o)}Rt&&Rt(K,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const oe=new vu;oe.setAnimationLoop(qt),this.setAnimationLoop=function(K){Rt=K},this.dispose=function(){}}}const Si=new Un,J0=new pe;function j0(i,t){function e(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function n(d,u){u.color.getRGB(d.fogColor.value,mu(i)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function r(d,u,M,b,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(d,u):u.isMeshToonMaterial?(s(d,u),m(d,u)):u.isMeshPhongMaterial?(s(d,u),h(d,u)):u.isMeshStandardMaterial?(s(d,u),p(d,u),u.isMeshPhysicalMaterial&&f(d,u,x)):u.isMeshMatcapMaterial?(s(d,u),g(d,u)):u.isMeshDepthMaterial?s(d,u):u.isMeshDistanceMaterial?(s(d,u),_(d,u)):u.isMeshNormalMaterial?s(d,u):u.isLineBasicMaterial?(o(d,u),u.isLineDashedMaterial&&a(d,u)):u.isPointsMaterial?c(d,u,M,b):u.isSpriteMaterial?l(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,e(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===Ge&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,e(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===Ge&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,e(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,e(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const M=t.get(u),b=M.envMap,x=M.envMapRotation;b&&(d.envMap.value=b,Si.copy(x),Si.x*=-1,Si.y*=-1,Si.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),d.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(Si)),d.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap&&(d.lightMap.value=u.lightMap,d.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,d.lightMapTransform)),u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,d.aoMapTransform))}function o(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform))}function a(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function c(d,u,M,b){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*M,d.scale.value=b*.5,u.map&&(d.map.value=u.map,e(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function l(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function m(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,d.roughnessMapTransform)),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function f(d,u,M){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ge&&d.clearcoatNormalScale.value.negate())),u.dispersion>0&&(d.dispersion.value=u.dispersion),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,u){u.matcap&&(d.matcap.value=u.matcap)}function _(d,u){const M=t.get(u).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Q0(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){const x=b.program;n.uniformBlockBinding(M,x)}function l(M,b){let x=r[M.id];x===void 0&&(g(M),x=h(M),r[M.id]=x,M.addEventListener("dispose",d));const P=b.program;n.updateUBOMapping(M,P);const A=t.render.frame;s[M.id]!==A&&(p(M),s[M.id]=A)}function h(M){const b=m();M.__bindingPointIndex=b;const x=i.createBuffer(),P=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function m(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const b=r[M.id],x=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,w=x.length;A<w;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,v=R.length;S<v;S++){const C=R[S];if(f(C,A,S,P)===!0){const G=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let Y=0;Y<L.length;Y++){const q=L[Y],tt=_(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,G+B,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,B),B+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,b,x,P){const A=M.value,w=b+"_"+x;if(P[w]===void 0)return typeof A=="number"||typeof A=="boolean"?P[w]=A:P[w]=A.clone(),!0;{const R=P[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return P[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(M){const b=M.uniforms;let x=0;const P=16;for(let w=0,R=b.length;w<R;w++){const S=Array.isArray(b[w])?b[w]:[b[w]];for(let v=0,C=S.length;v<C;v++){const G=S[v],L=Array.isArray(G.value)?G.value:[G.value];for(let B=0,Y=L.length;B<Y;B++){const q=L[B],tt=_(q),X=x%P,ut=X%tt.boundary,gt=X+ut;x+=ut,gt!==0&&P-gt<tt.storage&&(x+=P-gt),G.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=tt.storage}}}const A=x%P;return A>0&&(x+=P-A),M.__size=x,M.__cache={},this}function _(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function d(M){const b=M.target;b.removeEventListener("dispose",d);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function u(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:c,update:l,dispose:u}}class tg{constructor(t={}){const{canvas:e=Hh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let d=null,u=null;const M=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Jn,this.toneMappingExposure=1;const x=this;let P=!1,A=0,w=0,R=null,S=-1,v=null;const C=new ve,G=new ve;let L=null;const B=new wt(0);let Y=0,q=e.width,tt=e.height,X=1,ut=null,gt=null;const Rt=new ve(0,0,q,tt),qt=new ve(0,0,q,tt);let oe=!1;const K=new Ya;let rt=!1,bt=!1;const ht=new pe,It=new pe,zt=new D,Yt=new ve,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function xe(){return R===null?X:1}let O=n;function nn(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ba}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),O===null){const U="webgl2";if(O=nn(U,E),O===null)throw nn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $t,Kt,Pt,he,Ct,T,y,k,Z,j,$,Tt,dt,_t,jt,et,vt,Lt,Ot,xt,Zt,Wt,ae,I;function at(){$t=new sm(O),$t.init(),Wt=new W0(O,$t),Kt=new Qp(O,$t,t,Wt),Pt=new H0(O,$t),Kt.reverseDepthBuffer&&p&&Pt.buffers.depth.setReversed(!0),he=new cm(O),Ct=new T0,T=new G0(O,$t,Pt,Ct,Kt,Wt,he),y=new em(x),k=new rm(x),Z=new pd(O),ae=new Jp(O,Z),j=new om(O,Z,he,ae),$=new um(O,j,Z,he),Ot=new lm(O,Kt,T),et=new tm(Ct),Tt=new w0(x,y,k,$t,Kt,ae,et),dt=new j0(x,Ct),_t=new R0,jt=new U0($t),Lt=new Zp(x,y,k,Pt,$,f,c),vt=new B0(x,$,Kt),I=new Q0(O,he,Kt,Pt),xt=new jp(O,$t,he),Zt=new am(O,$t,he),he.programs=Tt.programs,x.capabilities=Kt,x.extensions=$t,x.properties=Ct,x.renderLists=_t,x.shadowMap=vt,x.state=Pt,x.info=he}at();const W=new Z0(x,O);this.xr=W,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=$t.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$t.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(q,tt,!1))},this.getSize=function(E){return E.set(q,tt)},this.setSize=function(E,U,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,tt=U,e.width=Math.floor(E*X),e.height=Math.floor(U*X),H===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(q*X,tt*X).floor()},this.setDrawingBufferSize=function(E,U,H){q=E,tt=U,X=H,e.width=Math.floor(E*H),e.height=Math.floor(U*H),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(Rt)},this.setViewport=function(E,U,H,V){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,U,H,V),Pt.viewport(C.copy(Rt).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(qt)},this.setScissor=function(E,U,H,V){E.isVector4?qt.set(E.x,E.y,E.z,E.w):qt.set(E,U,H,V),Pt.scissor(G.copy(qt).multiplyScalar(X).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(E){Pt.setScissorTest(oe=E)},this.setOpaqueSort=function(E){ut=E},this.setTransparentSort=function(E){gt=E},this.getClearColor=function(E){return E.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(E=!0,U=!0,H=!0){let V=0;if(E){let N=!1;if(R!==null){const nt=R.texture.format;N=nt===qa||nt===Xa||nt===Wa}if(N){const nt=R.texture.type,pt=nt===Qn||nt===Di||nt===Ur||nt===ur||nt===Va||nt===Ga,yt=Lt.getClearColor(),St=Lt.getClearAlpha(),Ft=yt.r,Vt=yt.g,Et=yt.b;pt?(g[0]=Ft,g[1]=Vt,g[2]=Et,g[3]=St,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Ft,_[1]=Vt,_[2]=Et,_[3]=St,O.clearBufferiv(O.COLOR,0,_))}else V|=O.COLOR_BUFFER_BIT}U&&(V|=O.DEPTH_BUFFER_BIT),H&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),_t.dispose(),jt.dispose(),Ct.dispose(),y.dispose(),k.dispose(),$.dispose(),ae.dispose(),I.dispose(),Tt.dispose(),W.dispose(),W.removeEventListener("sessionstart",cc),W.removeEventListener("sessionend",lc),gi.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=he.autoReset,U=vt.enabled,H=vt.autoUpdate,V=vt.needsUpdate,N=vt.type;at(),he.autoReset=E,vt.enabled=U,vt.autoUpdate=H,vt.needsUpdate=V,vt.type=N}function ft(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ht(E){const U=E.target;U.removeEventListener("dispose",Ht),ge(U)}function ge(E){Ie(E),Ct.remove(E)}function Ie(E){const U=Ct.get(E).programs;U!==void 0&&(U.forEach(function(H){Tt.releaseProgram(H)}),E.isShaderMaterial&&Tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,H,V,N,nt){U===null&&(U=me);const pt=N.isMesh&&N.matrixWorld.determinant()<0,yt=Zu(E,U,H,V,N);Pt.setMaterial(V,pt);let St=H.index,Ft=1;if(V.wireframe===!0){if(St=j.getWireframeAttribute(H),St===void 0)return;Ft=2}const Vt=H.drawRange,Et=H.attributes.position;let te=Vt.start*Ft,ce=(Vt.start+Vt.count)*Ft;nt!==null&&(te=Math.max(te,nt.start*Ft),ce=Math.min(ce,(nt.start+nt.count)*Ft)),St!==null?(te=Math.max(te,0),ce=Math.min(ce,St.count)):Et!=null&&(te=Math.max(te,0),ce=Math.min(ce,Et.count));const de=ce-te;if(de<0||de===1/0)return;ae.setup(N,V,yt,H,St);let Xe,ee=xt;if(St!==null&&(Xe=Z.get(St),ee=Zt,ee.setIndex(Xe)),N.isMesh)V.wireframe===!0?(Pt.setLineWidth(V.wireframeLinewidth*xe()),ee.setMode(O.LINES)):ee.setMode(O.TRIANGLES);else if(N.isLine){let At=V.linewidth;At===void 0&&(At=1),Pt.setLineWidth(At*xe()),N.isLineSegments?ee.setMode(O.LINES):N.isLineLoop?ee.setMode(O.LINE_LOOP):ee.setMode(O.LINE_STRIP)}else N.isPoints?ee.setMode(O.POINTS):N.isSprite&&ee.setMode(O.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const At=N._multiDrawStarts,zn=N._multiDrawCounts,ne=N._multiDrawCount,fn=St?Z.get(St).bytesPerElement:1,Fi=Ct.get(V).currentProgram.getUniforms();for(let $e=0;$e<ne;$e++)Fi.setValue(O,"_gl_DrawID",$e),ee.render(At[$e]/fn,zn[$e])}else if(N.isInstancedMesh)ee.renderInstances(te,de,N.count);else if(H.isInstancedBufferGeometry){const At=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,zn=Math.min(H.instanceCount,At);ee.renderInstances(te,de,zn)}else ee.render(te,de)};function ie(E,U,H){E.transparent===!0&&E.side===Rn&&E.forceSinglePass===!1?(E.side=Ge,E.needsUpdate=!0,Gr(E,U,H),E.side=pi,E.needsUpdate=!0,Gr(E,U,H),E.side=Rn):Gr(E,U,H)}this.compile=function(E,U,H=null){H===null&&(H=E),u=jt.get(H),u.init(U),b.push(u),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),E!==H&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const V=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let pt=0;pt<nt.length;pt++){const yt=nt[pt];ie(yt,H,N),V.add(yt)}else ie(nt,H,N),V.add(nt)}),b.pop(),u=null,V},this.compileAsync=function(E,U,H=null){const V=this.compile(E,U,H);return new Promise(N=>{function nt(){if(V.forEach(function(pt){Ct.get(pt).currentProgram.isReady()&&V.delete(pt)}),V.size===0){N(E);return}setTimeout(nt,10)}$t.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let dn=null;function Fn(E){dn&&dn(E)}function cc(){gi.stop()}function lc(){gi.start()}const gi=new vu;gi.setAnimationLoop(Fn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(E){dn=E,W.setAnimationLoop(E),E===null?gi.stop():gi.start()},W.addEventListener("sessionstart",cc),W.addEventListener("sessionend",lc),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,R),u=jt.get(E,b.length),u.init(U),b.push(u),It.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(It),bt=this.localClippingEnabled,rt=et.init(this.clippingPlanes,bt),d=_t.get(E,M.length),d.init(),M.push(d),W.enabled===!0&&W.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&Ys(nt,U,-1/0,x.sortObjects)}Ys(E,U,0,x.sortObjects),d.finish(),x.sortObjects===!0&&d.sort(ut,gt),Jt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Jt&&Lt.addToRenderList(d,E),this.info.render.frame++,rt===!0&&et.beginShadows();const H=u.state.shadowsArray;vt.render(H,E,U),rt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=d.opaque,N=d.transmissive;if(u.setupLights(),U.isArrayCamera){const nt=U.cameras;if(N.length>0)for(let pt=0,yt=nt.length;pt<yt;pt++){const St=nt[pt];hc(V,N,E,St)}Jt&&Lt.render(E);for(let pt=0,yt=nt.length;pt<yt;pt++){const St=nt[pt];uc(d,E,St,St.viewport)}}else N.length>0&&hc(V,N,E,U),Jt&&Lt.render(E),uc(d,E,U);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,U),ae.resetDefaultState(),S=-1,v=null,b.pop(),b.length>0?(u=b[b.length-1],rt===!0&&et.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,M.pop(),M.length>0?d=M[M.length-1]:d=null};function Ys(E,U,H,V){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){V&&Yt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(It);const pt=$.update(E),yt=E.material;yt.visible&&d.push(E,pt,yt,H,Yt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||K.intersectsObject(E))){const pt=$.update(E),yt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Yt.copy(E.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Yt.copy(pt.boundingSphere.center)),Yt.applyMatrix4(E.matrixWorld).applyMatrix4(It)),Array.isArray(yt)){const St=pt.groups;for(let Ft=0,Vt=St.length;Ft<Vt;Ft++){const Et=St[Ft],te=yt[Et.materialIndex];te&&te.visible&&d.push(E,pt,te,H,Yt.z,Et)}}else yt.visible&&d.push(E,pt,yt,H,Yt.z,null)}}const nt=E.children;for(let pt=0,yt=nt.length;pt<yt;pt++)Ys(nt[pt],U,H,V)}function uc(E,U,H,V){const N=E.opaque,nt=E.transmissive,pt=E.transparent;u.setupLightsView(H),rt===!0&&et.setGlobalState(x.clippingPlanes,H),V&&Pt.viewport(C.copy(V)),N.length>0&&Vr(N,U,H),nt.length>0&&Vr(nt,U,H),pt.length>0&&Vr(pt,U,H),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function hc(E,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new Li(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?zr:Qn,minFilter:Pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const nt=u.state.transmissionRenderTarget[V.id],pt=V.viewport||C;nt.setSize(pt.z,pt.w);const yt=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(B),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Jt&&Lt.render(H);const St=x.toneMapping;x.toneMapping=Jn;const Ft=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),rt===!0&&et.setGlobalState(x.clippingPlanes,V),Vr(E,H,V),T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Et=0,te=U.length;Et<te;Et++){const ce=U[Et],de=ce.object,Xe=ce.geometry,ee=ce.material,At=ce.group;if(ee.side===Rn&&de.layers.test(V.layers)){const zn=ee.side;ee.side=Ge,ee.needsUpdate=!0,dc(de,H,V,Xe,ee,At),ee.side=zn,ee.needsUpdate=!0,Vt=!0}}Vt===!0&&(T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt))}x.setRenderTarget(yt),x.setClearColor(B,Y),Ft!==void 0&&(V.viewport=Ft),x.toneMapping=St}function Vr(E,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,nt=E.length;N<nt;N++){const pt=E[N],yt=pt.object,St=pt.geometry,Ft=V===null?pt.material:V,Vt=pt.group;yt.layers.test(H.layers)&&dc(yt,U,H,St,Ft,Vt)}}function dc(E,U,H,V,N,nt){E.onBeforeRender(x,U,H,V,N,nt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,U,H,V,E,nt),N.transparent===!0&&N.side===Rn&&N.forceSinglePass===!1?(N.side=Ge,N.needsUpdate=!0,x.renderBufferDirect(H,U,V,N,E,nt),N.side=pi,N.needsUpdate=!0,x.renderBufferDirect(H,U,V,N,E,nt),N.side=Rn):x.renderBufferDirect(H,U,V,N,E,nt),E.onAfterRender(x,U,H,V,N,nt)}function Gr(E,U,H){U.isScene!==!0&&(U=me);const V=Ct.get(E),N=u.state.lights,nt=u.state.shadowsArray,pt=N.state.version,yt=Tt.getParameters(E,N.state,nt,U,H),St=Tt.getProgramCacheKey(yt);let Ft=V.programs;V.environment=E.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(E.isMeshStandardMaterial?k:y).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ft===void 0&&(E.addEventListener("dispose",Ht),Ft=new Map,V.programs=Ft);let Vt=Ft.get(St);if(Vt!==void 0){if(V.currentProgram===Vt&&V.lightsStateVersion===pt)return pc(E,yt),Vt}else yt.uniforms=Tt.getUniforms(E),E.onBeforeCompile(yt,x),Vt=Tt.acquireProgram(yt,St),Ft.set(St,Vt),V.uniforms=yt.uniforms;const Et=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=et.uniform),pc(E,yt),V.needsLights=ju(E),V.lightsStateVersion=pt,V.needsLights&&(Et.ambientLightColor.value=N.state.ambient,Et.lightProbe.value=N.state.probe,Et.directionalLights.value=N.state.directional,Et.directionalLightShadows.value=N.state.directionalShadow,Et.spotLights.value=N.state.spot,Et.spotLightShadows.value=N.state.spotShadow,Et.rectAreaLights.value=N.state.rectArea,Et.ltc_1.value=N.state.rectAreaLTC1,Et.ltc_2.value=N.state.rectAreaLTC2,Et.pointLights.value=N.state.point,Et.pointLightShadows.value=N.state.pointShadow,Et.hemisphereLights.value=N.state.hemi,Et.directionalShadowMap.value=N.state.directionalShadowMap,Et.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Et.spotShadowMap.value=N.state.spotShadowMap,Et.spotLightMatrix.value=N.state.spotLightMatrix,Et.spotLightMap.value=N.state.spotLightMap,Et.pointShadowMap.value=N.state.pointShadowMap,Et.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Vt,V.uniformsList=null,Vt}function fc(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=As.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function pc(E,U){const H=Ct.get(E);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Zu(E,U,H,V,N){U.isScene!==!0&&(U=me),T.resetTextureUnits();const nt=U.fog,pt=V.isMeshStandardMaterial?U.environment:null,yt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:fr,St=(V.isMeshStandardMaterial?k:y).get(V.envMap||pt),Ft=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Vt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Et=!!H.morphAttributes.position,te=!!H.morphAttributes.normal,ce=!!H.morphAttributes.color;let de=Jn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(de=x.toneMapping);const Xe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ee=Xe!==void 0?Xe.length:0,At=Ct.get(V),zn=u.state.lights;if(rt===!0&&(bt===!0||E!==v)){const rn=E===v&&V.id===S;et.setState(V,E,rn)}let ne=!1;V.version===At.__version?(At.needsLights&&At.lightsStateVersion!==zn.state.version||At.outputColorSpace!==yt||N.isBatchedMesh&&At.batching===!1||!N.isBatchedMesh&&At.batching===!0||N.isBatchedMesh&&At.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&At.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&At.instancing===!1||!N.isInstancedMesh&&At.instancing===!0||N.isSkinnedMesh&&At.skinning===!1||!N.isSkinnedMesh&&At.skinning===!0||N.isInstancedMesh&&At.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&At.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&At.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&At.instancingMorph===!1&&N.morphTexture!==null||At.envMap!==St||V.fog===!0&&At.fog!==nt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==et.numPlanes||At.numIntersection!==et.numIntersection)||At.vertexAlphas!==Ft||At.vertexTangents!==Vt||At.morphTargets!==Et||At.morphNormals!==te||At.morphColors!==ce||At.toneMapping!==de||At.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,At.__version=V.version);let fn=At.currentProgram;ne===!0&&(fn=Gr(V,U,N));let Fi=!1,$e=!1,vr=!1;const fe=fn.getUniforms(),wn=At.uniforms;if(Pt.useProgram(fn.program)&&(Fi=!0,$e=!0,vr=!0),V.id!==S&&(S=V.id,$e=!0),Fi||v!==E){Pt.buffers.depth.getReversed()?(ht.copy(E.projectionMatrix),Gh(ht),Wh(ht),fe.setValue(O,"projectionMatrix",ht)):fe.setValue(O,"projectionMatrix",E.projectionMatrix),fe.setValue(O,"viewMatrix",E.matrixWorldInverse);const ni=fe.map.cameraPosition;ni!==void 0&&ni.setValue(O,zt.setFromMatrixPosition(E.matrixWorld)),Kt.logarithmicDepthBuffer&&fe.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&fe.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,$e=!0,vr=!0)}if(N.isSkinnedMesh){fe.setOptional(O,N,"bindMatrix"),fe.setOptional(O,N,"bindMatrixInverse");const rn=N.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),fe.setValue(O,"boneTexture",rn.boneTexture,T))}N.isBatchedMesh&&(fe.setOptional(O,N,"batchingTexture"),fe.setValue(O,"batchingTexture",N._matricesTexture,T),fe.setOptional(O,N,"batchingIdTexture"),fe.setValue(O,"batchingIdTexture",N._indirectTexture,T),fe.setOptional(O,N,"batchingColorTexture"),N._colorsTexture!==null&&fe.setValue(O,"batchingColorTexture",N._colorsTexture,T));const xr=H.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&Ot.update(N,H,fn),($e||At.receiveShadow!==N.receiveShadow)&&(At.receiveShadow=N.receiveShadow,fe.setValue(O,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(wn.envMap.value=St,wn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(wn.envMapIntensity.value=U.environmentIntensity),$e&&(fe.setValue(O,"toneMappingExposure",x.toneMappingExposure),At.needsLights&&Ju(wn,vr),nt&&V.fog===!0&&dt.refreshFogUniforms(wn,nt),dt.refreshMaterialUniforms(wn,V,X,tt,u.state.transmissionRenderTarget[E.id]),As.upload(O,fc(At),wn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(As.upload(O,fc(At),wn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&fe.setValue(O,"center",N.center),fe.setValue(O,"modelViewMatrix",N.modelViewMatrix),fe.setValue(O,"normalMatrix",N.normalMatrix),fe.setValue(O,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const rn=V.uniformsGroups;for(let ni=0,ii=rn.length;ni<ii;ni++){const mc=rn[ni];I.update(mc,fn),I.bind(mc,fn)}}return fn}function Ju(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function ju(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,H){Ct.get(E.texture).__webglTexture=U,Ct.get(E.depthTexture).__webglTexture=H;const V=Ct.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const H=Ct.get(E);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,H=0){R=E,A=U,w=H;let V=!0,N=null,nt=!1,pt=!1;if(E){const St=Ct.get(E);if(St.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(O.FRAMEBUFFER,null),V=!1;else if(St.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(St.__hasExternalTextures)T.rebindTextures(E,Ct.get(E.texture).__webglTexture,Ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Et=E.depthTexture;if(St.__boundDepthTexture!==Et){if(Et!==null&&Ct.has(Et)&&(E.width!==Et.image.width||E.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Ft=E.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(pt=!0);const Vt=Ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?N=Vt[U][H]:N=Vt[U],nt=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?N=Ct.get(E).__webglMultisampledFramebuffer:Array.isArray(Vt)?N=Vt[H]:N=Vt,C.copy(E.viewport),G.copy(E.scissor),L=E.scissorTest}else C.copy(Rt).multiplyScalar(X).floor(),G.copy(qt).multiplyScalar(X).floor(),L=oe;if(Pt.bindFramebuffer(O.FRAMEBUFFER,N)&&V&&Pt.drawBuffers(E,N),Pt.viewport(C),Pt.scissor(G),Pt.setScissorTest(L),nt){const St=Ct.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,H)}else if(pt){const St=Ct.get(E.texture),Ft=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,St.__webglTexture,H||0,Ft)}S=-1},this.readRenderTargetPixels=function(E,U,H,V,N,nt,pt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){Pt.bindFramebuffer(O.FRAMEBUFFER,yt);try{const St=E.texture,Ft=St.format,Vt=St.type;if(!Kt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-V&&H>=0&&H<=E.height-N&&O.readPixels(U,H,V,N,Wt.convert(Ft),Wt.convert(Vt),nt)}finally{const St=R!==null?Ct.get(R).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(E,U,H,V,N,nt,pt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){const St=E.texture,Ft=St.format,Vt=St.type;if(!Kt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-V&&H>=0&&H<=E.height-N){Pt.bindFramebuffer(O.FRAMEBUFFER,yt);const Et=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Et),O.bufferData(O.PIXEL_PACK_BUFFER,nt.byteLength,O.STREAM_READ),O.readPixels(U,H,V,N,Wt.convert(Ft),Wt.convert(Vt),0);const te=R!==null?Ct.get(R).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,te);const ce=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Vh(O,ce,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Et),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,nt),O.deleteBuffer(Et),O.deleteSync(ce),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,H=0){E.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-H),N=Math.floor(E.image.width*V),nt=Math.floor(E.image.height*V),pt=U!==null?U.x:0,yt=U!==null?U.y:0;T.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,pt,yt,N,nt),Pt.unbindTexture()},this.copyTextureToTexture=function(E,U,H=null,V=null,N=0){E.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let nt,pt,yt,St,Ft,Vt,Et,te,ce;const de=E.isCompressedTexture?E.mipmaps[N]:E.image;H!==null?(nt=H.max.x-H.min.x,pt=H.max.y-H.min.y,yt=H.isBox3?H.max.z-H.min.z:1,St=H.min.x,Ft=H.min.y,Vt=H.isBox3?H.min.z:0):(nt=de.width,pt=de.height,yt=de.depth||1,St=0,Ft=0,Vt=0),V!==null?(Et=V.x,te=V.y,ce=V.z):(Et=0,te=0,ce=0);const Xe=Wt.convert(U.format),ee=Wt.convert(U.type);let At;U.isData3DTexture?(T.setTexture3D(U,0),At=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),At=O.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),At=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const zn=O.getParameter(O.UNPACK_ROW_LENGTH),ne=O.getParameter(O.UNPACK_IMAGE_HEIGHT),fn=O.getParameter(O.UNPACK_SKIP_PIXELS),Fi=O.getParameter(O.UNPACK_SKIP_ROWS),$e=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,de.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,de.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,St),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ft),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Vt);const vr=E.isDataArrayTexture||E.isData3DTexture,fe=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const wn=Ct.get(E),xr=Ct.get(U),rn=Ct.get(wn.__renderTarget),ni=Ct.get(xr.__renderTarget);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,rn.__webglFramebuffer),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ii=0;ii<yt;ii++)vr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(E).__webglTexture,N,Vt+ii),E.isDepthTexture?(fe&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(U).__webglTexture,N,ce+ii),O.blitFramebuffer(St,Ft,nt,pt,Et,te,nt,pt,O.DEPTH_BUFFER_BIT,O.NEAREST)):fe?O.copyTexSubImage3D(At,N,Et,te,ce+ii,St,Ft,nt,pt):O.copyTexSubImage2D(At,N,Et,te,ce+ii,St,Ft,nt,pt);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else fe?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(At,N,Et,te,ce,nt,pt,yt,Xe,ee,de.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(At,N,Et,te,ce,nt,pt,yt,Xe,de.data):O.texSubImage3D(At,N,Et,te,ce,nt,pt,yt,Xe,ee,de):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,N,Et,te,nt,pt,Xe,ee,de.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,N,Et,te,de.width,de.height,Xe,de.data):O.texSubImage2D(O.TEXTURE_2D,N,Et,te,nt,pt,Xe,ee,de);O.pixelStorei(O.UNPACK_ROW_LENGTH,zn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ne),O.pixelStorei(O.UNPACK_SKIP_PIXELS,fn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Fi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$e),N===0&&U.generateMipmaps&&O.generateMipmap(At),Pt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,H=null,V=null,N=0){return E.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0),Ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,H,V,N)},this.initRenderTarget=function(E){Ct.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Pt.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,Pt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Ka{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(t),this.density=e}clone(){return new Ka(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class eg extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Za extends mr{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Us=new D,Ns=new D,pl=new pe,wr=new uu,hs=new Hs,wo=new D,ml=new D;class wu extends Ae{constructor(t=new ke,e=new Za){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Us.fromBufferAttribute(e,r-1),Ns.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Us.distanceTo(Ns);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(r),hs.radius+=s,t.ray.intersectsSphere(hs)===!1)return;pl.copy(r).invert(),wr.copy(t.ray).applyMatrix4(pl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,d=g-1;_<d;_+=l){const u=h.getX(_),M=h.getX(_+1),b=ds(this,t,wr,c,u,M);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(g-1),d=h.getX(f),u=ds(this,t,wr,c,_,d);u&&e.push(u)}}else{const f=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let _=f,d=g-1;_<d;_+=l){const u=ds(this,t,wr,c,_,_+1);u&&e.push(u)}if(this.isLineLoop){const _=ds(this,t,wr,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ds(i,t,e,n,r,s){const o=i.geometry.attributes.position;if(Us.fromBufferAttribute(o,r),Ns.fromBufferAttribute(o,s),e.distanceSqToSegment(Us,Ns,wo,ml)>n)return;wo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(wo);if(!(c<t.near||c>t.far))return{distance:c,point:ml.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}class Ja extends We{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const h=n[r],p=n[r+1]-h,f=(o-h)/p;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new Mt:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,r=[],s=[],o=[],a=new D,c=new pe;for(let f=0;f<=t;f++){const g=f/t;r[f]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),m=Math.abs(r[0].y),p=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),m<=l&&(l=m,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Pe(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos(Pe(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ja extends On{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Mt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*h-f*m+this.aX,l=p*m+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ng extends ja{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qa(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,m){let p=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+m)+(c-a)/m;p*=h,f*=h,r(o,a,p,f)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const fs=new D,To=new Qa,Ao=new Qa,Ro=new Qa;class ig extends On{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(fs.subVectors(r[0],r[1]).add(r[0]),l=fs);const m=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(fs.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=fs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(m),f),_=Math.pow(m.distanceToSquared(p),f),d=Math.pow(p.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),To.initNonuniformCatmullRom(l.x,m.x,p.x,h.x,g,_,d),Ao.initNonuniformCatmullRom(l.y,m.y,p.y,h.y,g,_,d),Ro.initNonuniformCatmullRom(l.z,m.z,p.z,h.z,g,_,d)}else this.curveType==="catmullrom"&&(To.initCatmullRom(l.x,m.x,p.x,h.x,this.tension),Ao.initCatmullRom(l.y,m.y,p.y,h.y,this.tension),Ro.initCatmullRom(l.z,m.z,p.z,h.z,this.tension));return n.set(To.calc(c),Ao.calc(c),Ro.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gl(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function rg(i,t){const e=1-i;return e*e*t}function sg(i,t){return 2*(1-i)*i*t}function og(i,t){return i*i*t}function Cr(i,t,e,n){return rg(i,t)+sg(i,e)+og(i,n)}function ag(i,t){const e=1-i;return e*e*e*t}function cg(i,t){const e=1-i;return 3*e*e*i*t}function lg(i,t){return 3*(1-i)*i*i*t}function ug(i,t){return i*i*i*t}function Pr(i,t,e,n,r){return ag(i,t)+cg(i,e)+lg(i,n)+ug(i,r)}class Tu extends On{constructor(t=new Mt,e=new Mt,n=new Mt,r=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Mt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Pr(t,r.x,s.x,o.x,a.x),Pr(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hg extends On{constructor(t=new D,e=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Pr(t,r.x,s.x,o.x,a.x),Pr(t,r.y,s.y,o.y,a.y),Pr(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Au extends On{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dg extends On{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ru extends On{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Cr(t,r.x,s.x,o.x),Cr(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fg extends On{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Cr(t,r.x,s.x,o.x),Cr(t,r.y,s.y,o.y),Cr(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cu extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],m=r[o>r.length-3?r.length-1:o+2];return n.set(gl(a,c.x,l.x,h.x,m.x),gl(a,c.y,l.y,h.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new Mt().fromArray(r))}return this}}var _l=Object.freeze({__proto__:null,ArcCurve:ng,CatmullRomCurve3:ig,CubicBezierCurve:Tu,CubicBezierCurve3:hg,EllipseCurve:ja,LineCurve:Au,LineCurve3:dg,QuadraticBezierCurve:Ru,QuadraticBezierCurve3:fg,SplineCurve:Cu});class pg extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _l[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new _l[r.type]().fromJSON(r))}return this}}class mg extends pg{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Au(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Ru(this.currentPoint.clone(),new Mt(t,e),new Mt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new Tu(this.currentPoint.clone(),new Mt(t,e),new Mt(n,r),new Mt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Cu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){const l=new ja(t,e,n,r,s,o,a,c);if(this.curves.length>0){const m=l.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class tc extends ke{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Pe(r,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],h=1/e,m=new D,p=new Mt,f=new D,g=new D,_=new D;let d=0,u=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:d=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,f.x=u*1,f.y=-d,f.z=u*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:d=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,f.x=u*1,f.y=-d,f.z=u*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){const b=n+M*h*r,x=Math.sin(b),P=Math.cos(b);for(let A=0;A<=t.length-1;A++){m.x=t[A].x*x,m.y=t[A].y,m.z=t[A].x*P,o.push(m.x,m.y,m.z),p.x=M/e,p.y=A/(t.length-1),a.push(p.x,p.y);const w=c[3*A+0]*x,R=c[3*A+1],S=c[3*A+0]*P;l.push(w,R,S)}}for(let M=0;M<e;M++)for(let b=0;b<t.length-1;b++){const x=b+M*t.length,P=x,A=x+t.length,w=x+t.length+1,R=x+1;s.push(P,A,R),s.push(w,R,A)}this.setIndex(s),this.setAttribute("position",new se(o,3)),this.setAttribute("uv",new se(a,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tc(t.points,t.segments,t.phiStart,t.phiLength)}}class ei extends tc{constructor(t=1,e=1,n=4,r=8){const s=new mg;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new ei(t.radius,t.length,t.capSegments,t.radialSegments)}}class kt extends ke{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],m=[],p=[],f=[];let g=0;const _=[],d=n/2;let u=0;M(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(p,3)),this.setAttribute("uv",new se(f,2));function M(){const x=new D,P=new D;let A=0;const w=(e-t)/n;for(let R=0;R<=s;R++){const S=[],v=R/s,C=v*(e-t)+t;for(let G=0;G<=r;G++){const L=G/r,B=L*c+a,Y=Math.sin(B),q=Math.cos(B);P.x=C*Y,P.y=-v*n+d,P.z=C*q,m.push(P.x,P.y,P.z),x.set(Y,w,q).normalize(),p.push(x.x,x.y,x.z),f.push(L,1-v),S.push(g++)}_.push(S)}for(let R=0;R<r;R++)for(let S=0;S<s;S++){const v=_[S][R],C=_[S+1][R],G=_[S+1][R+1],L=_[S][R+1];(t>0||S!==0)&&(h.push(v,C,L),A+=3),(e>0||S!==s-1)&&(h.push(C,G,L),A+=3)}l.addGroup(u,A,0),u+=A}function b(x){const P=g,A=new Mt,w=new D;let R=0;const S=x===!0?t:e,v=x===!0?1:-1;for(let G=1;G<=r;G++)m.push(0,d*v,0),p.push(0,v,0),f.push(.5,.5),g++;const C=g;for(let G=0;G<=r;G++){const B=G/r*c+a,Y=Math.cos(B),q=Math.sin(B);w.x=S*q,w.y=d*v,w.z=S*Y,m.push(w.x,w.y,w.z),p.push(0,v,0),A.x=Y*.5+.5,A.y=q*.5*v+.5,f.push(A.x,A.y),g++}for(let G=0;G<r;G++){const L=P+G,B=C+G;x===!0?h.push(B,B+1,L):h.push(B+1,B,L),R+=3}l.addGroup(u,R,x===!0?1:2),u+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class en extends kt{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new en(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ec extends ke{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(s.slice(),3)),this.setAttribute("uv",new se(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const b=new D,x=new D,P=new D;for(let A=0;A<e.length;A+=3)f(e[A+0],b),f(e[A+1],x),f(e[A+2],P),c(b,x,P,M)}function c(M,b,x,P){const A=P+1,w=[];for(let R=0;R<=A;R++){w[R]=[];const S=M.clone().lerp(x,R/A),v=b.clone().lerp(x,R/A),C=A-R;for(let G=0;G<=C;G++)G===0&&R===A?w[R][G]=S:w[R][G]=S.clone().lerp(v,G/C)}for(let R=0;R<A;R++)for(let S=0;S<2*(A-R)-1;S++){const v=Math.floor(S/2);S%2===0?(p(w[R][v+1]),p(w[R+1][v]),p(w[R][v])):(p(w[R][v+1]),p(w[R+1][v+1]),p(w[R+1][v]))}}function l(M){const b=new D;for(let x=0;x<s.length;x+=3)b.x=s[x+0],b.y=s[x+1],b.z=s[x+2],b.normalize().multiplyScalar(M),s[x+0]=b.x,s[x+1]=b.y,s[x+2]=b.z}function h(){const M=new D;for(let b=0;b<s.length;b+=3){M.x=s[b+0],M.y=s[b+1],M.z=s[b+2];const x=d(M)/2/Math.PI+.5,P=u(M)/Math.PI+.5;o.push(x,1-P)}g(),m()}function m(){for(let M=0;M<o.length;M+=6){const b=o[M+0],x=o[M+2],P=o[M+4],A=Math.max(b,x,P),w=Math.min(b,x,P);A>.9&&w<.1&&(b<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),P<.2&&(o[M+4]+=1))}}function p(M){s.push(M.x,M.y,M.z)}function f(M,b){const x=M*3;b.x=t[x+0],b.y=t[x+1],b.z=t[x+2]}function g(){const M=new D,b=new D,x=new D,P=new D,A=new Mt,w=new Mt,R=new Mt;for(let S=0,v=0;S<s.length;S+=9,v+=6){M.set(s[S+0],s[S+1],s[S+2]),b.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),A.set(o[v+0],o[v+1]),w.set(o[v+2],o[v+3]),R.set(o[v+4],o[v+5]),P.copy(M).add(b).add(x).divideScalar(3);const C=d(P);_(A,v+0,M,C),_(w,v+2,b,C),_(R,v+4,x,C)}}function _(M,b,x,P){P<0&&M.x===1&&(o[b]=M.x-1),x.x===0&&x.z===0&&(o[b]=P/2/Math.PI+.5)}function d(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ec(t.vertices,t.indices,t.radius,t.details)}}class nc extends ec{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nc(t.radius,t.detail)}}class ic extends ke{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const a=[],c=[],l=[],h=[];let m=t;const p=(e-t)/r,f=new D,g=new Mt;for(let _=0;_<=r;_++){for(let d=0;d<=n;d++){const u=s+d/n*o;f.x=m*Math.cos(u),f.y=m*Math.sin(u),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}m+=p}for(let _=0;_<r;_++){const d=_*(n+1);for(let u=0;u<n;u++){const M=u+d,b=M,x=M+n+1,P=M+n+2,A=M+1;a.push(b,x,A),a.push(x,P,A)}}this.setIndex(a),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ic(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Se extends ke{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],m=new D,p=new D,f=[],g=[],_=[],d=[];for(let u=0;u<=n;u++){const M=[],b=u/n;let x=0;u===0&&o===0?x=.5/e:u===n&&c===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const A=P/e;m.x=-t*Math.cos(r+A*s)*Math.sin(o+b*a),m.y=t*Math.cos(o+b*a),m.z=t*Math.sin(r+A*s)*Math.sin(o+b*a),g.push(m.x,m.y,m.z),p.copy(m).normalize(),_.push(p.x,p.y,p.z),d.push(A+x,1-b),M.push(l++)}h.push(M)}for(let u=0;u<n;u++)for(let M=0;M<e;M++){const b=h[u][M+1],x=h[u][M],P=h[u+1][M],A=h[u+1][M+1];(u!==0||o>0)&&f.push(b,x,A),(u!==n-1||c<Math.PI)&&f.push(x,P,A)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ii extends ke{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],l=[],h=new D,m=new D,p=new D;for(let f=0;f<=n;f++)for(let g=0;g<=r;g++){const _=g/r*s,d=f/n*Math.PI*2;m.x=(t+e*Math.cos(d))*Math.cos(_),m.y=(t+e*Math.cos(d))*Math.sin(_),m.z=e*Math.sin(d),a.push(m.x,m.y,m.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(m,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=r;g++){const _=(r+1)*f+g-1,d=(r+1)*(f-1)+g-1,u=(r+1)*(f-1)+g,M=(r+1)*f+g;o.push(_,d,M),o.push(d,u,M)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ze extends mr{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pu extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class gg extends Pu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Co=new pe,vl=new D,xl=new D;class _g{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;vl.setFromMatrixPosition(t.matrixWorld),e.position.copy(vl),xl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xl),e.updateMatrixWorld(),Co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Co)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vg extends _g{constructor(){super(new xu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Du extends Pu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new vg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);const F={sky:6988748,oceanDeep:3108758,rock:7172456,rockDark:4869703,grass:7306572,grassLit:8292949,sand:13811345,wood:8017203,woodMid:6044964,woodDark:3810838,white:16053744,green:3115592,greenDeep:2055216,skin:13350026,skinShadow:11770478,black:1711130,clothBlack:2763818,clothGreen:2980418,hatStraw:12886362,torch:16757850,dirt:9073480},je=42,Ut={x:118,z:-8,r:28},Po={x:1.6,y:2.1,z:36.2};function xg(i=256){const t=document.createElement("canvas");t.width=i,t.height=i;const e=t.getContext("2d");e.clearRect(0,0,i,i);const n=i/2,r=i/2,s=i*.62,o=i*.22,a=-.48;e.translate(n,r),e.rotate(a);const c=()=>{e.beginPath(),e.moveTo(-s/2,-o),e.lineTo(s/2,-o),e.arc(s/2,0,o,-Math.PI/2,Math.PI/2),e.lineTo(-s/2,o),e.arc(-s/2,0,o,Math.PI/2,-Math.PI/2),e.closePath()};return e.save(),c(),e.fillStyle="#16382a",e.fill(),e.restore(),e.save(),e.beginPath(),e.rect(-s,-i,s,i*2),e.clip(),c(),e.fillStyle="#6ed18a",e.fill(),e.restore(),e.save(),e.beginPath(),e.rect(0,-i,s,i*2),e.clip(),c(),e.fillStyle="#f4f8f5",e.fill(),e.restore(),e.lineJoin="round",e.lineWidth=i*.055,c(),e.strokeStyle="#16382a",e.stroke(),t}let ji=null;function Mg(){return ji||(ji=new Ja(xg(256)),ji.colorSpace=Fe,ji.anisotropy=8,ji)}function rc(i=1){const t=new lt;t.name="pump-pill";const e=new tn({map:Mg(),transparent:!0,depthWrite:!1,toneMapped:!1}),n=new ot(new hn(1.15*i,1.15*i),e);return t.add(n),t}function yg(i=1){return rc(i*.28)}const ln=(i,t={})=>new ze({color:i,flatShading:!0,...t});function _e(i,t,e,n,r=0){const s=new ot(new it(i,t,e),ln(n));return s.position.y=r,s}function Ve(i,t,e,n,r=0,s=6){const o=new ot(new kt(i,t,e,s),ln(n));return o.position.y=r,o}function Yn(i,t,e=0,n=6){const r=new ot(new Se(i,n,n),ln(t));return r.position.y=e,r}function ps(i,t,e,n=0){const r=new ot(new ei(i,t,2,6),ln(e));return r.position.y=n,r}const Ml={DEFAULT:{hat:"cap",hatColor:F.clothBlack,shirt:F.white,pants:F.clothBlack,shoes:F.white,extra:"tee"},FISHERMAN:{hat:"bucket",hatColor:F.clothGreen,shirt:F.white,pants:F.clothGreen,shoes:F.clothGreen,extra:"overalls",prop:"rod"},HUNTER:{hat:"beanie",hatColor:F.clothBlack,shirt:F.clothBlack,pants:F.clothBlack,shoes:F.white,extra:"tee",prop:"gun"},HARVESTER:{hat:"cap",hatColor:F.white,shirt:F.white,pants:F.clothGreen,shoes:F.white,extra:"overalls",prop:"axe"},TRADER:{hat:"top",hatColor:F.clothGreen,shirt:F.clothGreen,pants:F.clothGreen,shoes:F.clothBlack,extra:"suit"},PIRATE:{hat:"tricorn",hatColor:F.clothBlack,shirt:F.white,pants:F.clothBlack,shoes:F.clothBlack,extra:"coat"},BUILDER:{hat:"hardhat",hatColor:F.white,shirt:F.clothBlack,pants:F.clothBlack,shoes:F.white,extra:"vest"},SCOUT:{hat:"cap",hatColor:F.clothGreen,shirt:F.clothGreen,pants:F.clothBlack,shoes:F.white,extra:"pack"},CHEF:{hat:"toque",hatColor:F.white,shirt:F.white,pants:F.clothBlack,shoes:F.clothBlack,extra:"apron",prop:"pan"},BEACHGOER:{hat:"straw",hatColor:F.hatStraw,shirt:4165461,pants:F.clothGreen,shoes:7031336,extra:"hawaii"}};function Sg(i,t){const e=new lt;if(i==="cap"){e.add(Ve(.2,.22,.1,t,.02,8));const n=_e(.2,.025,.14,t);n.position.set(0,-.01,.16),e.add(n)}else if(i==="bucket")e.add(Ve(.17,.22,.12,t,.05,8)),e.add(Ve(.3,.3,.03,t,-.02,10));else if(i==="beanie")e.add(Yn(.21,t,.04,8));else if(i==="top")e.add(Ve(.17,.17,.2,t,.12,8)),e.add(Ve(.28,.28,.035,t,-.02,8));else if(i==="tricorn"){const n=new ot(new en(.32,.09,3),ln(t));n.rotation.y=Math.PI/6,n.position.y=.04,e.add(n),e.add(Yn(.16,t,.08,6))}else i==="hardhat"?(e.add(Yn(.22,t,.04,8)),e.add(Ve(.24,.24,.035,t,-.04,8))):i==="toque"?(e.add(Ve(.18,.2,.26,F.white,.14,8)),e.add(Ve(.22,.22,.045,F.white,-.03,8))):i==="straw"&&(e.add(Ve(.2,.2,.09,t,.05,8)),e.add(Ve(.36,.36,.025,t,-.02,10)),e.add(Ve(.21,.21,.03,F.clothBlack,.02,8)));return e}function Eg(i){const t=new lt;if(i==="rod"){const e=Ve(.015,.02,1.45,3811864,0,5);e.rotation.z=.42,e.position.set(.18,.42,.04),t.add(e);const n=Yn(.045,F.clothBlack);n.position.set(.1,-.02,.05),t.add(n)}else if(i==="gun"){const e=_e(.07,.07,.58,3815992);e.position.set(.1,.02,.2),t.add(e)}else if(i==="axe"){const e=Ve(.02,.025,.72,6965805,0,5);e.rotation.z=-.55,e.position.set(.16,.22,.03);const n=_e(.2,.11,.05,9080200);n.position.set(.36,.5,.03),t.add(e,n)}else if(i==="pan"){const e=Ve(.15,.13,.035,F.clothBlack,0,8);e.position.set(.26,0,.1),t.add(e)}return t}function bg(i="DEFAULT",t={}){const e=Ml[i]||Ml.DEFAULT,n=new lt;n.name=`char-${i}`,n.userData.archetype=i;const r=new lt;r.position.y=.56;const s=ps(.16,.38,e.shirt,.48);s.scale.set(1.15,1,.85);const o=_e(.32,.14,.2,e.pants,.08);if(r.add(s,o),e.extra==="overalls"){const w=_e(.22,.28,.02,e.pants);w.position.set(0,.46,.15),r.add(w);const R=_e(.035,.28,.02,e.pants);R.position.set(-.09,.58,.15);const S=R.clone();S.position.x=.09,r.add(R,S)}if(e.extra==="suit"){const w=_e(.4,.48,.26,e.shirt,.42);r.add(w);const R=_e(.04,.16,.02,F.white);R.position.set(0,.5,.14),r.add(R)}if(e.extra==="coat"){const w=_e(.5,.82,.32,F.clothBlack,.28);r.add(w);const R=_e(.22,.22,.04,F.white);R.position.set(0,.52,.17),r.add(R)}if(e.extra==="apron"){const w=_e(.28,.48,.02,F.white);w.position.set(0,.22,.15),r.add(w)}if(e.extra==="vest"){const w=_e(.4,.3,.26,F.clothGreen,.42);r.add(w);const R=_e(.28,.08,.14,4864546);R.position.set(0,.22,.12),r.add(R)}if(e.extra==="pack"){const w=_e(.26,.28,.12,3820082);w.position.set(0,.46,-.2),r.add(w)}if(e.extra==="hawaii")for(let w=0;w<5;w++){const R=Yn(.03,w%2?15258474:15922414,0);R.position.set(-.1+w%3*.1,.42+w%2*.1,.15),r.add(R)}const a=yg(e.extra==="tee"||e.extra==="hawaii"?1.15:.8);a.position.set(0,.48,.17),r.add(a);const c=Ve(.055,.06,.16,F.skin,.78,6);r.add(c);const l=new lt;l.position.y=1.02;const h=new ot(new Se(.2,8,7),ln(F.skin));h.scale.set(.95,1.22,.92),h.position.y=.1,h.castShadow=!0,l.add(h);const m=Yn(.12,F.skinShadow,-.08,7);m.scale.set(1.05,.7,.9),l.add(m);const p=w=>{const R=new lt,S=Yn(.092,F.white,0,8);S.scale.set(1,1.08,.88);const v=Yn(.034,F.black,0,6);return v.position.z=.07,R.add(S,v),R.position.set(w,.13,.175),R};l.add(p(-.075),p(.075));const f=_e(.22,.025,.04,F.skinShadow);f.position.set(0,.2,.14),l.add(f);const g=_e(.045,.055,.06,F.skinShadow);g.position.set(0,.05,.175),l.add(g);const _=_e(.09,.018,.02,5914672);if(_.position.set(0,-.03,.165),l.add(_),i==="TRADER"){const w=_e(.12,.14,.06,3813412);w.position.set(0,-.14,.1),l.add(w)}if(i==="PIRATE"){const w=_e(.16,.1,.06,4866100);w.position.set(0,-.14,.1),l.add(w)}if(i==="BEACHGOER"){const w=_e(.24,.05,.07,F.clothBlack);w.position.set(0,.12,.17),l.add(w)}const d=Sg(e.hat,e.hatColor);d.position.y=.3,l.add(d),r.add(l);function u(w){const R=new lt;R.position.set(w*.22,.64,0);const S=e.extra==="suit"||e.extra==="coat"?e.shirt:F.skin,v=ps(.045,.28,S,-.18),C=ps(.04,.26,F.skin,-.5),G=Yn(.05,F.skin,-.7,6);return R.add(v,C,G),R}const M=u(-1),b=u(1);e.prop&&b.add(Eg(e.prop)),r.add(M,b);function x(w){const R=new lt;R.position.set(w*.09,.04,0),R.add(ps(.055,.42,e.pants,-.28));const S=_e(.11,.06,.2,e.shoes);S.position.set(0,-.56,.03);const v=_e(.12,.02,.21,F.clothBlack);return v.position.set(0,-.6,.03),R.add(S,v),R}const P=x(-1),A=x(1);return r.add(P,A),n.add(r),n.userData.parts={hips:r,head:l,lArm:M,rArm:b,lLeg:P,rLeg:A},n.userData.phase=t.phase||Math.random()*Math.PI*2,t.scale&&n.scale.setScalar(t.scale),n}function wg(i,t,e=!1,n=!1){const r=i.userData.parts;if(!r)return;const s=i.userData.phase||0,o=e?1:.16,a=Math.sin(t*6.5+s)*.38*o;r.lLeg.rotation.x=a,r.rLeg.rotation.x=-a,r.lArm.rotation.x=-a*.75,r.rArm.rotation.x=n?-1.05+Math.sin(t*2.6)*.1:a*.75,r.head.rotation.y=Math.sin(t*.6+s)*.1,r.hips.position.y=.56+Math.abs(Math.sin(t*6.5+s))*(e?.035:.01)}function Ei(i){return i.rotation.x=Math.PI/2,i}function yl(i,t=1){const e=new lt,n=new ot(new it(.038,.022,.05),i);n.position.set(0,-.006,0);const r=new ot(new kt(.02,.02,.042,8),i);r.rotation.x=Math.PI/2,r.position.y=-.002;const s=new ot(new it(.012,.012,.028),i);s.position.set(t*-.02,.01,.004),s.rotation.z=t*.85,e.add(n,r,s);for(let o=0;o<4;o++){const a=new ot(new it(.008,.01,.026),i);a.position.set(t*(-.012+o*.009),.01,.02),a.rotation.x=.7,e.add(a)}return e}function Tg(i){const t=new lt;t.name="fp-arms";const e=ln(F.skin),n=ln(15264740),r=ln(3811352),s=ln(11565626),o=ln(1709586),a=ln(7262602),c=new lt;c.name="rod-rig",c.position.set(.18,-.24,-.32),c.rotation.set(.62,.18,-.12);const l=Ei(new ot(new kt(.012,.015,.08,7),n));l.position.set(.05,-.02,.22),l.visible=!1;const h=yl(e,1);h.position.set(0,-.02,-.02),h.rotation.z=.2;const m=Ei(new ot(new kt(.011,.014,.07,7),n));m.position.set(-.05,0,-.12),m.visible=!1;const p=yl(e,-1);if(p.position.set(0,-.018,-.14),p.rotation.z=-.15,t.userData.lArm=m,t.userData.rArm=l,t.userData.pole=null,t.userData.line=null,t.userData.reel=null,t.userData.rod=c,i){const f=Ei(new ot(new kt(.014,.017,.045,8),o));f.position.z=.08;const g=Ei(new ot(new kt(.015,.017,.16,10),s));g.position.z=-.04;const _=Ei(new ot(new kt(.013,.015,.035,8),o));_.position.z=-.14;const d=Ei(new ot(new kt(.004,.012,1.05,8),r));d.position.z=-.68;const u=Ei(new ot(new kt(.002,.004,.2,6),a));u.position.z=-1.3;const M=new ot(new Ii(.009,.002,5,8),o);M.position.z=-1.18;const b=new lt,x=new ot(new kt(.024,.024,.016,10),o);x.rotation.z=Math.PI/2;const P=new ot(new Ii(.018,.005,6,10),a);P.rotation.y=Math.PI/2;const A=new ot(new it(.01,.008,.032),o);A.position.y=.016,b.add(x,P,A),b.position.set(0,-.032,-.05);const w=new ke().setFromPoints([new D(0,0,-1.4),new D(.01,-.06,-2.3)]),R=new wu(w,new Za({color:15266540,transparent:!0,opacity:.65}));R.visible=!1,c.add(f,g,_,d,u,M,b,R),t.userData.pole=d,t.userData.reel=b,t.userData.line=R}return c.add(l,h,m,p),t.add(c),t}function Os(i,t,e){if(!i)return;const n=i.userData.rod,r=i.userData.line,s=i.userData.reel;if(!n)return;const o={x:.62,y:.18,z:-.12};if(t==="cast"){const a=Math.min(1,e/.38);n.rotation.x=o.x-.85*a,n.rotation.z=o.z-.12*a,r&&(r.visible=a>.62)}else if(t==="wait"){if(n.rotation.x=o.x+Math.sin(e*1.6)*.03,n.rotation.z=o.z,r){r.visible=!0;const a=r.geometry.attributes.position;a.setY(1,-.08+Math.sin(e*2.4)*.07),a.needsUpdate=!0}}else if(t==="bite"){const a=Math.sin(e*24)*.07;n.rotation.x=o.x-.12+a,n.rotation.z=o.z+a*.4,r&&(r.visible=!0)}else if(t==="reel")n.rotation.x=o.x-.28+Math.sin(e*13)*.05,s&&(s.rotation.x=e*14),r&&(r.visible=!0);else if(t==="fight"){const a=.22+Math.min(.7,e||0),c=Math.sin(performance.now()/40)*.08*a;n.rotation.x=o.x-a+c,n.rotation.z=o.z+c*.6,s&&(s.rotation.x+=.4),r&&(r.visible=!0),i.userData.pole&&(i.userData.pole.rotation.x=a*.35)}else t==="land"?(n.rotation.x=o.x-.55,n.rotation.y=o.y-.2,r&&(r.visible=!1)):(n.rotation.x=o.x+Math.sin(e*1.3)*.018,n.rotation.y=o.y,n.rotation.z=o.z,r&&(r.visible=!1),s&&(s.rotation.x=0))}function Ag(){const i=new lt;i.name="sky";const t=new ot(new Se(280,12,8),new Nn({side:Ge,depthWrite:!1,uniforms:{top:{value:new wt(5148607)},mid:{value:new wt(9353428)},bot:{value:new wt(14149320)}},vertexShader:`
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
      `}));i.add(t);const e=new ot(new Se(7.5,12,12),new tn({color:16773568}));e.position.set(-90,58,40),i.add(e);const n=new ot(new Se(16,12,12),new tn({color:16770720,transparent:!0,opacity:.22,depthWrite:!1}));n.position.copy(e.position),i.add(n);for(let r=0;r<4;r++){const s=new lt,o=new tn({color:15660280,transparent:!0,opacity:.7});for(let c=0;c<3;c++){const l=new ot(new Se(4.2+c%3,5,4),o);l.position.set((c-1.4)*5.2,c%2*1.4,c%3-1),s.add(l)}const a=r/4*Math.PI*2;s.position.set(Math.cos(a)*90,28+r%3*4,Math.sin(a)*90),s.userData.spin=.012+r%4*.004,s.userData.base=a,i.add(s)}return i}const Rg=[{ax:.82,az:.57,amp:.22,len:18,speed:1.15,q:.42},{ax:-.35,az:.94,amp:.12,len:9.5,speed:1.55,q:.32},{ax:.2,az:-.98,amp:.07,len:5.2,speed:1.9,q:.28},{ax:.95,az:.31,amp:.045,len:3.1,speed:2.4,q:.2}];function Cg(i,t){const e=Math.hypot(i,t),n=Math.hypot(i-118,t+8),r=Math.max(0,Math.min(1,(e-33.2)/8.5)),s=Math.max(0,Math.min(1,(n-22.5)/7.5));return Math.min(r,s)}function Pn(i,t,e){const n=Cg(i,t);if(n<=.02)return-.06;let r=0;for(const s of Rg){const o=Math.PI*2/s.len,a=(i*s.ax+t*s.az)*o+e*s.speed;r+=s.amp*Math.sin(a)}return r*n}function Pg(){const i=new hn(720,720,72,72);i.rotateX(-Math.PI/2);const t=new Nn({transparent:!0,uniforms:{uTime:{value:0},uSun:{value:new D(-.55,.72,.28).normalize()},uDeep:{value:new wt(933731)},uMid:{value:new wt(3112616)},uShal:{value:new wt(9425116)},uFoam:{value:new wt(15989759)},uAmp:{value:1}},vertexShader:`
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
    `}),e=new ot(i,t);return e.position.y=0,e.name="water",e}function Dg(){const i=new lt,t=new ot(new Se(.09,8,8),new ze({color:13781562,flatShading:!0})),e=new ot(new Se(.07,8,8),new ze({color:F.white,flatShading:!0}));return e.position.y=.07,i.add(t,e),i.visible=!1,i}function Lg(){const i=new lt,t=[],e=new tn({color:14216946,transparent:!0,opacity:.8});for(let n=0;n<18;n++){const r=new ot(new Se(.035,5,5),e.clone());i.add(r),t.push(r)}return i.visible=!1,i.userData.drops=t,i.userData.t=0,i.userData.live=!1,i}function Nr(i,t,e,n){i.position.set(t,e,n),i.visible=!0,i.userData.t=0,i.userData.live=!0,i.userData.drops.forEach((r,s)=>{const o=s/18*Math.PI*2;r.position.set(0,.02,0),r.userData.v=new D(Math.cos(o)*(.8+Math.random()),1.6+Math.random(),Math.sin(o)*(.8+Math.random())),r.material.opacity=.85})}function Ig(i,t){if(i?.userData.live){i.userData.t+=t;for(const e of i.userData.drops)e.userData.v.y-=6*t,e.position.addScaledVector(e.userData.v,t),e.material.opacity=Math.max(0,.85-i.userData.t*1.6);i.userData.t>.7&&(i.visible=!1,i.userData.live=!1)}}function Ug(){const i=new ot(new ic(.12,.28,18),new tn({color:15267570,transparent:!0,opacity:.55,side:Rn,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.visible=!1,i.userData.t=0,i.userData.live=!1,i}function Do(i,t,e,n){i.position.set(t,e+.04,n),i.visible=!0,i.userData.t=0,i.userData.live=!0,i.scale.setScalar(.4),i.material.opacity=.6}function Ng(i,t){if(!i?.userData.live)return;i.userData.t+=t;const e=i.userData.t;i.scale.setScalar(.4+e*3.6),i.material.opacity=Math.max(0,.6-e*.7),e>.9&&(i.visible=!1,i.userData.live=!1)}function Og(){const i=new ke().setFromPoints([new D,new D(0,0,-1)]),t=new wu(i,new Za({color:15266540,transparent:!0,opacity:.8}));return t.visible=!1,t.frustumCulled=!1,t}function Fg(){const i=new lt,t=new ot(new ei(.09,.34,2,5),new ze({color:4034495,flatShading:!0}));t.rotation.z=Math.PI/2;const e=new ot(new en(.1,.16,4),new ze({color:2779784,flatShading:!0}));return e.rotation.z=-Math.PI/2,e.position.x=-.28,i.add(t,e),i.visible=!1,i}function zg(i="fish"){const t=new lt;if(i==="boot")t.add(new ot(new it(.16,.1,.28),new ze({color:3811864,flatShading:!0})));else if(i==="crate")t.add(new ot(new it(.22,.18,.22),new ze({color:6965805,flatShading:!0})));else{const e=new ot(new ei(.06,.22,3,6),new ze({color:4034495,flatShading:!0}));e.rotation.z=Math.PI/2;const n=new ot(new en(.07,.12,4),new ze({color:2779784,flatShading:!0}));n.rotation.z=-Math.PI/2,n.position.x=-.2,t.add(e,n)}return t.visible=!1,t}const sc=[];function Ra(i,t,e){sc.push({x:i,z:t,r:e})}function Bg(i,t,e=.42){let n=i,r=t;for(const s of sc){const o=n-s.x,a=r-s.z,c=Math.hypot(o,a),l=s.r+e;if(c<l&&c>1e-4){const h=l/c;n=s.x+o*h,r=s.z+a*h}}return{x:n,z:r}}const kg=(i,t={})=>new ze({color:i,flatShading:!0,...t});function Q(i,t){return new ot(i,typeof t=="number"?kg(t):t)}function Hg(i,t){return Math.sin(i*.21)*Math.cos(t*.17)+Math.sin(i*.09+t*.13)*.6}function Vg(i,t){const e=i-Ut.x,n=t-Ut.z,r=Math.hypot(e,n);if(r>Ut.r+6)return-.55;if(r>Ut.r+1.2)return-.35;if(r>Ut.r-2.4){const a=(Ut.r+1.2-r)/3.6;return-.05+a*a*(3-2*a)*.7}const s=Math.hypot(e+2,n-1);let o=.55+(1-r/(Ut.r-2))*2.4;return o+=Math.sin(e*.31)*Math.cos(n*.27)*.22,s<7&&(o=Math.min(o,.42+s*.08)),e>4&&n>-6&&n<8&&(o=Math.min(o,.38)),Math.max(.18,o)}function Re(i,t){if(Math.hypot(i-Ut.x,t-Ut.z)<Ut.r+8)return Vg(i,t);const n=Math.hypot(i,t);if(n>je+10)return-.55;if(i>10&&t>-4&&t<22&&n<je+5&&n>24)return-.08+Math.max(0,Math.min(1,(32-n)/8))*.42;if(n>je+2.4)return-.42;if(n>je-3.2){const l=(je+2.4-n)/5.6;return-.08+l*l*(3-2*l)*.46}const s=Math.max(0,1-n/(je-2.4));let a=.38+s*s*(3-2*s)*2.85;const c=Math.hypot(i,t+1.2);if(c<9&&(a+=(1-c/9)*.24),i<-4&&t>2&&n<36){const l=Math.max(0,Math.min(1,(-i-4)/20));a+=l*.36}return i>2&&t<-6&&n<30&&(a+=.14),i>12&&i<22&&t>16&&t<24&&(a=Math.min(a,.55)),a+=Hg(i,t)*.05,Math.max(.2,a)}function Gg(){const i=new lt,t=48,e=(je+6)*2,n=new hn(e,e,t,t);n.rotateX(-Math.PI/2);const r=n.attributes.position,s=[],o=new wt(F.grass),a=new wt(F.grassLit);new wt(F.rock),new wt(F.rockDark);const c=new wt(F.sand),l=new wt(F.dirt),h=new wt;for(let p=0;p<r.count;p++){const f=r.getX(p),g=r.getZ(p),_=Math.hypot(f,g);let d=Re(f,g);_>je+4&&(d=-.5),r.setY(p,d);const u=f>10&&g>-4&&g<24&&d<.55;_>je+2.2?h.set(F.oceanDeep):d<.22||u?h.copy(c):d<.55?h.lerpColors(c,o,(d-.22)/.33):d>3.1?h.copy(l):h.lerpColors(o,a,(Math.sin(f*.3)+1)*.35),s.push(h.r,h.g,h.b)}n.setAttribute("color",new se(s,3)),n.computeVertexNormals();const m=new ot(n,new ze({vertexColors:!0,flatShading:!0}));i.add(m);for(let p=0;p<42;p++){const f=p/42*Math.PI*2+p%3*.03,g=je+.4+p%4*.35,_=Math.cos(f)*g,d=Math.sin(f)*g;if(_>16&&d>0&&d<22)continue;const u=1.6+p%3*.45,M=1.2+p*2%3*.3,b=.55+p%4*.18,x=Q(new it(u,b,M),p%2?F.rock:F.rockDark);x.position.set(_,Math.max(.02,Re(_,d)-.08),d),x.rotation.y=f+.2,i.add(x)}return i}function Wg(){const i=new lt,t=36,e=(Ut.r+6)*2,n=new hn(e,e,t,t);n.rotateX(-Math.PI/2);const r=n.attributes.position,s=[],o=new wt(6968132),a=new wt(12864058),c=new wt(13213802),l=new wt(F.rockDark),h=new wt;for(let p=0;p<r.count;p++){const f=r.getX(p),g=r.getZ(p),_=f+Ut.x,d=g+Ut.z,u=Math.hypot(f,g);let M=Re(_,d);u>Ut.r+3&&(M=-.5),r.setY(p,M),u>Ut.r+1.6?h.set(F.oceanDeep):M<.28?h.copy(c):Math.hypot(f+2,g-1)<6.2?h.copy(a):M>2.2?h.copy(l):h.copy(o),s.push(h.r,h.g,h.b)}n.setAttribute("color",new se(s,3)),n.computeVertexNormals();const m=new ot(n,new ze({vertexColors:!0,flatShading:!0}));return m.position.set(Ut.x,0,Ut.z),i.add(m),i}function Xg(){const i=new lt;for(let t=0;t<5;t++){const e=Q(new it(.04,.28+Math.random()*.18,.03),t%2?F.grass:F.grassLit);e.position.set((t-2)*.07,.16,t%2*.05),e.rotation.z=(t-2)*.12,i.add(e)}return i}function ms(i){const t=new lt,e=Q(new kt(.05,.06,1.55,5),F.woodDark);e.position.y=.78;const n=Q(new it(1.35,.48,.06),F.wood);n.position.set(0,1.42,.04);const r=document.createElement("canvas");r.width=256,r.height=96;const s=r.getContext("2d");s.fillStyle="#6a4528",s.fillRect(0,0,256,96),s.fillStyle="#f4efe4",s.font="bold 28px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,128,48);const o=new Ja(r);o.colorSpace=Fe;const a=new ot(new hn(1.28,.42),new tn({map:o,toneMapped:!1}));return a.position.set(0,1.42,.08),t.add(e,n,a),t}function qg(){const i=new lt,t=Q(new it(1.4,.22,.62),3810838);t.position.y=.14;const e=Q(new it(.82,.55,.58),6044964);e.position.set(-.18,.48,0);const n=Q(new it(.48,.28,.56),4862496);return n.position.set(.48,.28,0),i.add(t,e,n),i}function Yg(){const i=new lt,t=Q(new kt(.28,.22,.32,8),F.white);t.position.y=.22;const e=Q(new it(.32,.38,.16),F.white);e.position.set(0,.52,-.22);const n=Q(new Ii(.22,.04,6,10),14212566);return n.rotation.x=Math.PI/2,n.position.y=.38,i.add(t,e,n),i}function $g(){const i=new lt,t=Q(new it(.9,.16,.7),F.rock);t.position.y=.08;const e=rc(.42);return e.position.set(0,.48,.08),i.add(t,e),i}function Kg(){const i=new lt,t=Q(new it(.72,.42,.18),2763818);t.position.y=.24;const e=Q(new it(.58,.3,.02),7262602);return e.position.set(0,.26,.1),i.add(t,e),i}function Zg(){const i=new lt,t=Q(new Se(.22,8,6),15778666);t.scale.set(1.15,.75,1),t.position.y=.16;const e=Q(new Se(.13,7,6),15778666);e.position.set(.14,.32,0);const n=Q(new it(.1,.04,.08),14711336);return n.position.set(.26,.3,0),i.add(t,e,n),i}function Jg(){const i=new lt;for(let t=0;t<7;t++){const e=Q(new it(.025,.22,.025),F.green);e.position.set((t-3)*.09,.11,t%3*.06);const n=Q(new Se(.05,5,4),t%2?15253850:14983423);n.position.set(e.position.x,.24,e.position.z),i.add(e,n)}return i}function Rs(){const i=new lt,t=Q(new nc(.55,0),F.rock);return t.scale.set(1.2,.7,1),t.position.y=.22,i.add(t),i}function jg(){const i=new lt;for(let e=0;e<5;e++){const n=e/5*Math.PI*2,r=Q(new kt(.05,.055,.55,5),F.woodDark);r.rotation.z=Math.PI/2,r.rotation.y=n,r.position.set(Math.cos(n)*.12,.06,Math.sin(n)*.12),i.add(r)}const t=Q(new en(.16,.38,5),F.torch);return t.position.y=.32,t.material.emissive=new wt(F.torch),t.material.emissiveIntensity=.7,i.add(t),i}function Sl(i){const t=new lt,e=Q(new kt(i==="tax"?6.4:5.2,7.6,1.6,8),F.sand);if(e.position.y=.1,t.add(e),i==="tax"){const n=xn(F.white);n.position.set(-1.4,.8,.4),n.scale.setScalar(1.4);const r=xn(F.green);r.position.set(1.8,.8,-.6),r.scale.setScalar(1.1);const s=Lu();s.position.set(3.2,.8,1.4),t.add(n,r,s)}else{const n=Q(new kt(.45,.7,5.2,6),F.white);n.position.y=3.2;const r=Q(new en(.9,1.1,5),12864058);r.position.y=6.1,t.add(n,r)}return t}function Qi(i,t=2.4){const e=new lt,n=Q(new kt(.06,.07,2.2,5),F.woodDark);n.position.y=1.1;const r=Q(new it(t,.7,.08),1456170);r.position.set(0,2.05,.04);const s=document.createElement("canvas");s.width=384,s.height=128;const o=s.getContext("2d");o.fillStyle="#16382a",o.fillRect(0,0,384,128),o.fillStyle="#f4efe4",o.font="bold 34px sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(i,192,64);const a=new Ja(s);a.colorSpace=Fe;const c=new ot(new hn(t-.1,.58),new tn({map:a,toneMapped:!1}));return c.position.set(0,2.05,.1),e.add(n,r,c),e}function Qg(){const i=new lt,t=Q(new it(.7,.38,.46),6964520);t.position.y=.2;const e=Q(new it(.72,.12,.48),9067050);e.position.set(0,.42,-.04),e.rotation.x=-.35;const n=Q(new it(.1,.1,.06),15253850);return n.position.set(0,.28,.24),i.add(t,e,n),i}function t_(){const i=new lt,t=Ca();t.rotation.z=.4,t.rotation.x=.2;const e=Ca();return e.position.set(.55,.05,.2),e.rotation.y=.8,i.add(t,e),i}function e_(){const i=new lt,t=new ze({color:16054002,flatShading:!0}),e=new ot(new it(.18,.07,.32),t),n=new ot(new it(.7,.03,.16),t);n.position.set(-.35,.02,0);const r=n.clone();return r.position.x=.35,i.add(e,n,r),i.userData.wings=[n,r],i}function Gs(i=1){return rc(i)}function n_(){const i=new lt,t=Q(new kt(.045,.055,3.4,5),F.woodDark);t.position.y=1.7;const e=Q(new it(.95,1.25,.04),F.white);e.position.set(.52,2.55,0);const n=Gs(.28);return n.position.set(.52,2.55,.06),i.add(t,e,n),i}function Ca(){const i=new lt,t=Q(new it(.95,.72,.72),F.wood);t.position.y=.36;const e=Q(new it(.97,.16,.74),F.green);e.position.y=.42;const n=Gs(.2);return n.position.set(0,.52,.39),i.add(t,e,n),i}function i_(i=4.4){const t=new lt,e=Q(new kt(.11,.16,i*.3,5),F.woodDark);e.position.y=i*.15,t.add(e);for(let n=0;n<4;n++){const r=1-n*.18,s=Q(new en(1.05*r,i*.38,7),n%2?F.greenDeep:F.green);s.position.y=i*.28+n*i*.2,t.add(s)}return t}function Lu(){const i=new lt,t=Q(new kt(.1,.16,3.5,6),9071162);t.position.y=1.75,t.rotation.z=.1,i.add(t);const e=Q(new Se(.22,6,5),F.greenDeep);e.position.set(.18,3.5,0),i.add(e);for(let n=0;n<6;n++){const r=n/6*Math.PI*2,s=Q(new Se(.55,6,4),n%2?F.green:F.greenDeep);s.scale.set(1.6,.22,.55),s.position.set(Math.cos(r)*.85+.15,3.42,Math.sin(r)*.85),s.rotation.y=r,s.rotation.z=-.35,i.add(s)}return i}function xn(i=F.green){const t=new lt;for(const[r,s]of[[-.95,-.7],[.95,-.7],[-.95,.7],[.95,.7]]){const o=Q(new kt(.07,.08,1.7,5),F.wood);o.position.set(r,.85,s),t.add(o)}const e=Q(new en(1.75,.9,4),i);e.rotation.y=Math.PI/4,e.position.y=2.15;const n=Q(new it(2.2,.08,1.8),F.wood);return n.position.y=.08,t.add(e,n),t}function gs(i=8,t=1.7){const e=new lt,n=Math.max(3,Math.round(i/.85));for(let s=0;s<n;s++){const o=Q(new it(t,.1,.72),s%2?F.wood:F.woodMid);o.position.set(0,.42,-i/2+.4+s*(i/n)),e.add(o)}const r=Math.max(2,Math.round(i/2.1));for(let s=0;s<r;s++){const o=-i/2+.55+s*(i/r);for(const a of[-t/2+.1,t/2-.1]){const c=Q(new kt(.07,.08,1.35,5),F.woodDark);c.position.set(a,-.12,o),e.add(c)}}return e}function r_(){const i=new lt,t=Q(new it(1.15,.38,2.7),F.woodDark);t.position.y=.12;const e=Q(new it(.72,.3,.7),F.wood);e.position.set(0,.14,-1.5);const n=Q(new it(.68,.42,.68),F.white);return n.position.set(0,.5,.35),i.add(t,e,n),i}function s_(){const i=new lt;for(const[s,o]of[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]]){const a=Q(new kt(.08,.1,3.6,5),F.woodDark);a.position.set(s,1.8,o),i.add(a)}const t=Q(new it(2.05,.12,2.05),F.wood);t.position.y=3.5;const e=Q(new en(1.55,.82,4),F.green);e.rotation.y=Math.PI/4,e.position.y=4.25;const n=Q(new it(2.05,.35,2.05),F.woodMid);n.position.y=3.72,i.add(t,e,n);const r=Gs(.24);return r.position.set(0,3.92,1.04),i.add(r),i}function o_(){const i=new lt,t=Q(new it(1.25,.09,.38),F.wood);t.position.y=.4;const e=Q(new it(1.25,.34,.08),F.wood);return e.position.set(0,.6,-.16),i.add(t,e),i}function El(){const i=new lt,t=Q(new kt(.04,.05,1.7,5),F.woodDark);t.position.y=.85;const e=Q(new Se(.13,5,5),F.torch);return e.position.y=1.75,e.material.emissive=new wt(F.torch),e.material.emissiveIntensity=.75,i.add(t,e),i}function bl(i=4){const t=new lt,e=Q(new it(i,.07,.055),F.woodDark);e.position.y=.58,t.add(e);const n=Math.round(i/1.05);for(let r=0;r<=n;r++){const s=Q(new it(.065,.72,.065),F.wood);s.position.set(-i/2+r*i/n,.36,0),t.add(s)}return t}function a_(){const i=new lt;i.name="lighthouse";const t=Q(new kt(2.55,2.95,1.55,12),F.green);t.position.y=.78;const e=Q(new kt(1.95,2.4,5.6,12),F.white);e.position.y=4.3;const n=Q(new kt(2.05,2.2,1.05,12),F.green);n.position.y=5.85;const r=Q(new kt(1.6,1.95,2.15,12),F.white);r.position.y=7.4;const s=Q(new kt(1.18,1.22,1.25,8),15265508);s.position.y=9.05,s.material.emissive=new wt(16773570),s.material.emissiveIntensity=.28;const o=Q(new en(1.5,1.2,8),F.green);o.position.y=10.15;const a=Q(new en(.07,.5,5),F.woodDark);a.position.y=10.9;const c=Q(new it(.72,1.2,.12),F.woodDark);c.position.set(0,.9,2.65);const l=Q(new Ii(1.62,.065,5,14),F.woodDark);l.rotation.x=Math.PI/2,l.position.y=8.3;for(let p=0;p<12;p++){const f=p/12*Math.PI*2,g=Q(new it(.055,.52,.055),F.woodDark);g.position.set(Math.cos(f)*1.62,8.55,Math.sin(f)*1.62),i.add(g)}const h=Q(new kt(1.78,1.78,.1,12),F.woodDark);h.position.y=8.22;const m=Gs(1.05);return m.position.set(0,4.78,2.28),i.add(t,e,n,r,s,o,a,c,l,h,m),i}function c_(){const i=new lt,t=Q(new it(2.4,1.4,.08),2763818);t.position.y=1.1,i.add(t);for(let n=0;n<6;n++){const r=Q(new it(.18+n*.08,.04,.04),15253850);r.position.set(-.7+n*.28,.7+n%3*.22,.06),r.rotation.z=n%2?-.4:.3,i.add(r)}const e=Q(new ei(.18,.7,2,5),12864058);return e.rotation.z=Math.PI/2,e.position.set(.2,1.15,.08),i.add(e),i}function l_(){const i=new lt,t=Q(new it(.7,1.5,.5),12864058);t.position.y=.75;const e=Q(new it(.5,.9,.06),8308436);e.position.set(0,.9,.26);const n=Q(new it(.22,.08,.08),F.black);return n.position.set(0,.28,.28),i.add(t,e,n),i}function u_(){const i=new lt,t=Q(new it(.9,2.2,.9),12864058);t.position.y=1.1;const e=Q(new it(.55,1.1,.06),9353428);e.position.set(0,1.2,.46);const n=Q(new it(.18,.08,.06),F.black);return n.position.set(.18,1.35,.4),i.add(t,e,n),i}function h_(){const i=new lt,t=Q(new kt(.7,.7,.12,8),F.rockDark);t.position.y=.06;const e=Q(new Ii(.22,.04,5,8),15253850);return e.rotation.x=Math.PI/2,e.position.y=.14,i.add(t,e),i}function wl(){const i=new lt,t=Q(new it(.42,.06,.42),F.wood);t.position.y=.42;const e=Q(new it(.42,.55,.06),F.woodDark);e.position.set(0,.7,-.18);for(const[n,r]of[[-.16,-.16],[.16,-.16],[-.16,.16],[.16,.16]]){const s=Q(new it(.05,.42,.05),F.woodDark);s.position.set(n,.21,r),i.add(s)}return i.add(t,e),i}function Lo(){const i=new lt,t=Q(new kt(.07,.08,.28,5),7262602);t.position.y=.14;const e=Q(new kt(.03,.04,.1,5),7262602);return e.position.y=.32,i.add(t,e),i}function d_(){const i=new lt,t=Q(new it(1.1,.12,1.1),F.rockDark);t.position.y=.06;const e=Q(new it(.7,.08,.7),1184272);return e.position.y=.08,i.add(t,e),i}function f_(){const i=new lt,t=Q(new it(3.4,1.1,8.2),F.woodDark);t.rotation.z=.35,t.position.y=.2;const e=Q(new kt(.08,.1,4.4,5),F.wood);return e.position.set(.4,1.8,1.2),e.rotation.z=.5,i.add(t,e),i}function p_(){const i=xn(F.woodDark);return i.scale.setScalar(1.15),i}function m_(){const i=Rs(),t=Q(new it(.5,.08,.04),15253850);return t.position.set(.1,.55,.45),i.add(t),i}function g_(){return xn(13227206)}function Tl(){const i=new lt,t=Q(new it(1.4,2.8,2.4),F.rockDark);t.position.set(-1.5,1.1,0),t.rotation.z=.25;const e=Q(new it(1.4,2.8,2.4),F.rock);e.position.set(1.5,1.1,0),e.rotation.z=-.25;const n=Q(new it(3.2,1.1,2.2),F.rockDark);n.position.set(0,2.35,0);const r=Q(new it(1.9,1.7,2.6),1184272);return r.position.set(0,.95,.15),i.add(t,e,n,r),i}function Dt(i,t,e,n,r=0,s=0,o=0){t.position.set(e,Re(e,n)+s,n),t.rotation.y=r,i.add(t),o>0&&Ra(e,n,o)}function __(i){for(let t=0;t<20;t++){const e=26.2-t*1.12,n=.18,r=Re(n,e),s=Re(n,e-1.12),o=Q(new it(1.42,.08,1.14),t%2?F.dirt:8021312);o.position.set(n,r+.04,e),o.rotation.x=-Math.atan2(s-r,1.12),i.add(o)}}const v_=[{id:"MAIN_DOCK",label:"MAIN DOCK",hint:"Starter water",x:1.6,z:32,r:11,fish:!0},{id:"NORTH_DOCK",label:"NORTH DOCK",hint:"Token trout water",x:-24,z:8,r:8,fish:!0},{id:"EAST_BEACH",label:"EAST BEACH",hint:"Sandy shallows",x:28,z:10,r:10,fish:!0},{id:"SOUTH_CLIFFS",label:"SOUTH CLIFFS",hint:"Need Cliff Rod",x:-18,z:18,r:8,fish:!0},{id:"CAVES",label:"THE CAVES",hint:"Dark pool",x:17,z:20,r:7,fish:!0},{id:"OFFSHORE",label:"OFFSHORE",hint:"Need Offshore Rod",x:-30,z:2,r:7,fish:!0},{id:"FOREST",label:"PINE WOODS",hint:"No fishing",x:10,z:-14,r:10,fish:!1},{id:"LIGHTHOUSE",label:"LIGHTHOUSE",hint:"Shop + burns",x:0,z:-1,r:8,fish:!1},{id:"VILLAGE",label:"HUT ROW",hint:"Redeem counter",x:6,z:22,r:6,fish:!1},{id:"EMBER_SHORE",label:"ST ALON SHORE",hint:"Great Saint Alon shallows",x:118,z:16,r:12,fish:!0},{id:"EMBER_POOL",label:"ST ALON POOL",hint:"Need Offshore Rod",x:116,z:-8,r:9,fish:!0},{id:"EMBER_HILL",label:"ST ALON HILL",hint:"Ash ridge",x:118,z:-8,r:10,fish:!1},{id:"THE_DROP",label:"THE DROP",hint:"You can see it. You cannot go there yet.",x:0,z:-96,r:18,fish:!1}];function Pa(i,t){let e={id:"ISLAND",label:"ISLAND PATH",hint:"Walk the hill",fish:!1,d:99};for(const n of v_){const r=Math.hypot(i-n.x,t-n.z);r<n.r&&r<e.d&&(e={...n,d:r})}return Re(i,t)<.12&&e.id==="ISLAND"?{id:"OCEAN",label:"OPEN OCEAN",hint:"Swim / boat",fish:!0,d:0}:e}function x_(i){sc.length=0;const t=new lt;t.name="island";const e=Pg();t.add(e);const n=Q(new hn(1100,1100),F.oceanDeep);n.rotation.x=-Math.PI/2,n.position.y=-.45,t.add(n),t.add(Gg()),t.add(Wg());const r=a_(),s=Re(0,-1.2);r.position.set(0,s,-1.2),t.add(r),Ra(0,-1.2,3.1);const o=new lt;for(let L=0;L<14;L++){const B=5.8-L*.38,Y=Re(0,B),q=Q(new it(1.4,.1,.4),F.wood);q.position.set(0,Y+.05,B),o.add(q)}t.add(o);const a=gs(12,2.15);a.position.set(1.6,.12,31.4),t.add(a),Dt(t,xn(F.white),-6.8,22.4,.25,0,1.8),Dt(t,xn(F.green),8.6,21.6,-.3,0,1.8);const c=gs(10.5,1.7);c.position.set(-27.2,.12,8),c.rotation.y=1.2,t.add(c),Dt(t,xn(13808490),-19.2,6.4,.4,0,1.7);const l=r_();l.position.set(-31,.18,5.6),l.rotation.y=.45,t.add(l),Dt(t,s_(),-16.8,17.6,.2,-.1,1.6),Dt(t,Tl(),17.2,20.6,.45,-.35,2.4);const h=gs(4.4,1.25);h.position.set(18.8,.12,24.2),h.rotation.y=.4,t.add(h),Dt(t,xn(F.green),25.2,8.8,-.4,0,1.7),Dt(t,xn(13808490),28.4,12.4,-.55,0,1.7),Dt(t,o_(),23.6,11.2,-.7,0,.7);for(const[L,B]of[[22,6.2],[26.2,4.8],[30,8.4],[27.6,15.5],[21.5,14.2]])Dt(t,Lu(),L,B,0,0,.7);for(const[L,B]of[[8,-15],[12.2,-17.4],[15.4,-12.6],[6.2,-19.5],[18.2,-15.8],[10.4,-10.6],[4.1,-14.8],[14.2,-20.6],[-3.4,-13.8],[1.2,-17.6],[7.4,-8.2]])Dt(t,i_(3.8+(L+B)%5*.22),L,B,0,0,.85);for(const[L,B,Y]of[[-7.4,5.2,.15],[8.2,-5.4,1.1],[16.4,3.2,.05],[-11.5,-5.2,.7],[12.6,11.4,-.35],[-5.2,14.6,.1],[20.4,-7.2,.5],[-17.2,12.4,.3]])Dt(t,n_(),L,B,Y,0,.28);for(const[L,B]of[[-11.2,13.4],[-9.1,11.6],[9.4,-7.6],[11.6,-5.8],[14.8,8.4],[-3.6,-7.4],[6.8,10.2]])Dt(t,Ca(),L,B,L*.15,0,.7);const m=bl(11);Dt(t,m,7.4,-3.6,.45,0,.45);const p=bl(8.5);Dt(t,p,-5.6,-7.2,-.5,0,.45),Dt(t,El(),-1.15,8.4),Dt(t,El(),1.35,8.4),__(t);for(const[L,B]of[[3.2,18.4],[5.1,14.2],[-4.4,16.6],[7.8,6.2],[9.2,-9.6],[13.4,-6.2],[16.2,7.4],[-12.6,8.8]])Dt(t,Xg(),L,B);for(const[L,B]of[[6.4,18.8],[-5.2,20.2],[10.8,5.4],[-8.6,14.2],[3.6,-8.4],[14.2,13.6]])Dt(t,Jg(),L,B);for(const[L,B]of[[4.8,-6.2],[-9.4,2.2],[13.6,-3.4],[-4.2,-10.6],[18.2,1.6]])Dt(t,Rs(),L,B,L*.2,0,.55);Dt(t,jg(),-14.8,15.2,0,0,.6),Dt(t,ms("NO RUGS"),3.4,28.6,.1,0,.35),Dt(t,ms("CAST HERE"),4.8,33.2,-.2,0,.35),Dt(t,ms("BEWARE CHEF"),-4.2,8.8,.4,0,.35),Dt(t,Qi("DEV WALLET THIS WAY"),9.6,24.8,-.5,0,.4),Dt(t,Qi("LIQUIDITY POOL"),-10.4,20.6,.6,0,.4),Dt(t,qg(),29.6,6.2,-.6,0,.7),Dt(t,Yg(),19.4,18.8,.8,.05,.45),Dt(t,$g(),-8.8,-8.4,.2,0,.5),Dt(t,Kg(),26.8,17.4,.5,0,.4),Dt(t,Qg(),21.2,22.6,.3,0,.45),Dt(t,t_(),-26.4,12.2,.4,0,.7),Dt(t,c_(),16.4,19.4,.5,.1,0),Dt(t,l_(),18.2,18.2,-.4,0,.6),Dt(t,u_(),11.4,-16.6,.3,0,.7),Dt(t,h_(),2.4,-3.2,0,0,.8),Dt(t,wl(),-3.6,31.2,.2,0,.4),Dt(t,Lo(),27.4,8.6,.4,0,0),Dt(t,Lo(),24.8,13.2,-.3,0,0),Dt(t,p_(),14.6,-18.4,.4,0,1.4),Dt(t,d_(),8.2,16.4,0,0,.6);const f=f_();f.position.set(36.4,.05,4.2),f.rotation.y=.7,t.add(f),Dt(t,m_(),-12.6,-6.4,.3,0,.6),Dt(t,g_(),-6.8,-18.2,-.5,0,1.3),Dt(t,Tl(),-16.4,4.2,1.2,-.2,1.8),Dt(t,Lo(),32.2,16.8,.2,0,0);const g=Zg();g.position.set(8.4,.18,34.6),g.userData.float=!0,t.add(g);const _=Sl("tax");_.position.set(92,-.2,-48),_.rotation.y=.4,t.add(_);const d=Sl("paper");d.position.set(-86,-.2,54),d.rotation.y=-.7,t.add(d);const u=Qi("TAX HAVEN",3.2);u.position.set(86,1.2,-42),u.lookAt(0,2,0),t.add(u);const M=Qi("PAPER HANDS ATOLL",3.6);M.position.set(-80,1.2,48),M.lookAt(0,2,0),t.add(M);const b=Q(new kt(2.4,3.1,1.1,7),F.sand);b.position.set(-62,-.1,-38),t.add(b);const x=wl();x.position.set(-62,.55,-38),t.add(x);const P=Qi("SIT HERE",2.2);P.position.set(-62,1.1,-36),P.lookAt(0,2,0),t.add(P);const A=Q(new kt(9,11,4.2,8),1713200);A.position.set(0,1.4,-118),t.add(A);const w=Qi("THE DROP  ·  NOT YET",4.4);w.position.set(0,4.2,-108),w.lookAt(0,2,0),t.add(w);const R=gs(7.2,1.7);R.position.set(Ut.x-6,.14,Ut.z+22),R.rotation.y=.2,t.add(R),Dt(t,xn(12864058),Ut.x-4,Ut.z+14,.2,0,1.7),Dt(t,xn(F.woodDark),Ut.x+6,Ut.z+8,-.4,0,1.7),Dt(t,ms("GREAT SAINT ALON"),Ut.x-2,Ut.z+20,.3,0,.4),Dt(t,Rs(),Ut.x+8,Ut.z-4,.4,0,.7),Dt(t,Rs(),Ut.x-10,Ut.z-6,-.2,0,.7);const S=[];for(let L=0;L<5;L++){const B=e_(),Y=L/5*Math.PI*2;B.position.set(Math.cos(Y)*22,9+L%3,Math.sin(Y)*22),B.userData.orbit=Y,B.userData.rad=18+L*3,B.userData.h=8.5+L*.7,t.add(B),S.push(B)}const v=[{type:"TRADER",x:5.4,z:22.8,rot:Math.PI},{type:"FISHERMAN",x:-2.8,z:30.4,rot:.4},{type:"DEFAULT",x:-3.4,z:27.8,rot:.5},{type:"BEACHGOER",x:24.8,z:10.6,rot:-.8},{type:"SCOUT",x:9.8,z:-12.2,rot:.4},{type:"PIRATE",x:-23.4,z:8,rot:1.2},{type:"HUNTER",x:-16.2,z:16.8,rot:.25},{type:"CHEF",x:-2.2,z:7.2,rot:2.5},{type:"BUILDER",x:6.6,z:-4.8,rot:-.4},{type:"HARVESTER",x:12.6,z:-15.2,rot:1.05},{type:"DEFAULT",x:-6.2,z:6.4,rot:.75},{type:"FISHERMAN",x:-3.6,z:31.2,rot:.15,sit:!0,talk:"chair17"},{type:"FISHERMAN",x:1.2,z:29.6,rot:.1,path:[[1.2,29.6],[-2.4,28.2],[3.4,26.8],[1.2,29.6]]},{type:"DEFAULT",x:-14.2,z:16.4,rot:.4},{type:"SCOUT",x:-18.6,z:22.4,rot:.2,watcher:!0},{type:"TRADER",x:5.6,z:8.2,rot:2.2,talk:"advice"},{type:"BEACHGOER",x:22.4,z:14.2,rot:.3},{type:"SCOUT",x:-8.4,z:18.6,rot:1.1},{type:"DEFAULT",x:2.8,z:20.4,rot:-.6},{type:"TRADER",x:-1.6,z:24.2,rot:2.8},{type:"PIRATE",x:Ut.x-5,z:Ut.z+18,rot:.4},{type:"HUNTER",x:Ut.x+4,z:Ut.z+6,rot:-.8},{type:"CHEF",x:Ut.x+1,z:Ut.z+12,rot:1.6}],C=[];for(const L of v){const B=bg(L.type,{phase:L.x});B.position.set(L.x,Re(L.x,L.z),L.z),B.rotation.y=L.rot,B.userData.npc=!0,B.userData.path=L.path||null,B.userData.u=Math.random(),B.userData.talk=L.talk||null,B.userData.watcher=!!L.watcher,L.sit&&(B.position.y+=.42),L.watcher&&(B.userData.hide=0),t.add(B),Ra(L.x,L.z,.45),C.push(B)}const G=C.find(L=>L.userData.watcher)||null;return i.add(t),{root:t,ocean:e,people:C,lighthouse:r,birds:S,duck:g,watcher:G}}const M_=[{id:"shop",label:"E  Shop",x:0,z:3.8,r:3.4},{id:"board",label:"E  Log",x:1.4,z:8.2,r:2.4},{id:"redeem",label:"E  Redeem",x:4.2,z:24.4,r:2.6},{id:"boat",label:"E  Boat",x:-31,z:5.6,r:3},{id:"boot",label:"E  Giant boot",x:29.6,z:6.2,r:2.2},{id:"loo",label:"E  Secret loo",x:19.4,z:18.8,r:2},{id:"shrine",label:"E  Pill shrine",x:-8.8,z:-8.4,r:2},{id:"pc",label:"E  Washed-up PC",x:26.8,z:17.4,r:2},{id:"duck",label:"E  Rubber duck",x:8.4,z:34.6,r:2.2},{id:"chest",label:"E  Chest",x:21.2,z:22.6,r:2},{id:"crash",label:"E  Airdrop",x:-26.4,z:12.2,r:2.2},{id:"emberdock",label:"E  Saint Alon dock",x:112,z:14,r:3.2},{id:"vending",label:"E  Cave vending",x:18.2,z:18.2,r:2},{id:"phone",label:"E  Forest phone",x:11.4,z:-16.6,r:2},{id:"bunker",label:"E  Lighthouse hatch",x:2.4,z:-3.2,r:2},{id:"chairman",label:"E  The chair",x:-3.6,z:31.2,r:2.2},{id:"advice",label:"E  Useless advice",x:5.6,z:8.2,r:2.2},{id:"drawings",label:"E  Cave wall",x:16.4,z:19.4,r:2},{id:"drop",label:"E  The Drop",x:0,z:-96,r:14},{id:"hut",label:"E  Abandoned hut",x:14.6,z:-18.4,r:2.4},{id:"sewer",label:"E  Drain",x:8.2,z:16.4,r:2.2},{id:"wreck",label:"E  Wreck",x:36.4,z:4.2,r:3.2},{id:"secret_beach",label:"E  Quiet cove",x:22.4,z:-6.8,r:2.6},{id:"cliff_path",label:"E  Goat path",x:-22.4,z:22.6,r:2.2},{id:"carving",label:"E  Carved rock",x:-12.6,z:-6.4,r:2},{id:"station",label:"E  Research shack",x:-6.8,z:-18.2,r:2.4},{id:"map",label:"E  Soggy chart",x:32.2,z:16.8,r:2},{id:"buried",label:"E  Disturbed sand",x:27.2,z:4.8,r:2},{id:"tunnel",label:"E  Pipe",x:-34.2,z:14.6,r:3},{id:"west_cave",label:"E  Second mouth",x:-16.4,z:4.2,r:2.4},{id:"isle_chair",label:"E  Empty chair",x:-62,z:-38,r:4},{id:"hole",label:"E  Black hole",x:-20.8,z:12.4,r:2.4}],Da=[{id:"whale_calf",name:"Sighted Calf",rarity:"Legendary",kind:"sol",value:.08,zones:["OFFSHORE","EVENT"],minRod:"basic",event:"whale",blurb:"Only while the whale is in the bay.",trade:"Redeems for 0.08 SOL (preview)."},{id:"shark_tooth",name:"Shark Tooth",rarity:"Rare",kind:"collectible",value:0,zones:["EAST_BEACH","EVENT"],minRod:"basic",event:"shark",blurb:"Still warm. Do not ask.",trade:"Collectible."},{id:"meteor_koi",name:"Meteor Koi",rarity:"Epic",kind:"token",value:40,zones:["MAIN_DOCK","EVENT"],minRod:"basic",event:"meteor",blurb:"Fell with the rocks. Still glowing.",trade:"Redeems for 40 TOKEN."},{id:"blood_eel",name:"Blood Eel",rarity:"Epic",kind:"credits",value:220,zones:["CAVES","EVENT"],minRod:"basic",event:"blood_moon",blurb:"Only the red night. Put it back if you can.",trade:"Redeems for 220 credits."},{id:"storm_cod",name:"Storm Cod",rarity:"Rare",kind:"credits",value:70,zones:["MAIN_DOCK","NORTH_DOCK","EVENT"],minRod:"basic",event:"storm",blurb:"Came in with the ugly water.",trade:"Redeems for 70 credits."},{id:"wreck_lockbox",name:"Wreck Lockbox",rarity:"Epic",kind:"treasure",value:0,zones:["EAST_BEACH","EVENT"],minRod:"basic",event:"wreck",blurb:"Washed off the cargo ship. Still sealed.",trade:"Treasure. Keep it."},{id:"gilt_snapper",name:"Gilt Snapper",rarity:"Legendary",kind:"sol",value:.06,zones:["EAST_BEACH","EVENT"],minRod:"basic",event:"golden",blurb:"The gold run. Ten minutes. Then gone.",trade:"Redeems for 0.06 SOL (preview)."},{id:"cave_lantern",name:"Lantern Fish",rarity:"Rare",kind:"credits",value:90,zones:["CAVES","EVENT"],minRod:"basic",event:"glow_cave",blurb:"The cave opened a second mouth.",trade:"Redeems for 90 credits."},{id:"ufo_bass",name:"Unidentified Bass",rarity:"Mythic",kind:"collectible",value:0,zones:["OFFSHORE","EVENT"],minRod:"basic",event:"ufo",blurb:"It looked at you first.",trade:"Collectible. Do not cook."},{id:"tide_relic",name:"Tide Relic",rarity:"Epic",kind:"collectible",value:0,zones:["SOUTH_CLIFFS","EVENT"],minRod:"basic",event:"low_tide",blurb:"The sandbar only exists at this tide.",trade:"Collectible."},{id:"crate_tin",name:"Crate Tin",rarity:"Uncommon",kind:"credits",value:36,zones:["EAST_BEACH","EVENT"],minRod:"basic",event:"crate",blurb:"Still cold. Label says 1998.",trade:"Redeems for 36 credits."}],Al=[{id:"whale",title:"WHALE SIGHTING",shout:"WHALE IN THE BAY",hint:"Offshore · exclusive calf pool",x:-30,z:4,dur:240,rare:!0,weather:null,sky:6988748},{id:"shark",title:"SHARK RUN",shout:"SHARKS ON THE BEACH",hint:"East Beach · don’t swim stupid",x:28,z:10,dur:180,rare:!1,weather:null,sky:null},{id:"meteor",title:"METEOR SHOWER",shout:"ROCKS ARE FALLING",hint:"Dock water is glowing",x:2,z:32,dur:200,rare:!1,weather:null,sky:1709616},{id:"blood_moon",title:"BLOOD MOON",shout:"THE MOON WENT WRONG",hint:"Cave pool is exclusive",x:17,z:20,dur:300,rare:!0,weather:"fog",sky:4855840},{id:"storm",title:"TROPICAL STORM",shout:"GET OFF THE WATER",hint:"Storm cod on the docks",x:1.6,z:32,dur:220,rare:!1,weather:"storm",sky:3819088},{id:"wreck",title:"CARGO WRECK",shout:"SHIP CAME APART",hint:"East Beach lockboxes",x:28,z:10,dur:260,rare:!1,weather:null,sky:null},{id:"treasure",title:"TREASURE BOAT",shout:"BOAT FULL OF JUNK GOLD",hint:"North dock · look offshore",x:-24,z:8,dur:210,rare:!0,weather:null,sky:null},{id:"golden",title:"GOLDEN RUN",shout:"THE WATER WENT GOLD",hint:"East Beach exclusive gilt",x:28,z:10,dur:180,rare:!0,weather:null,sky:12886362},{id:"glow_cave",title:"CAVE OPENING",shout:"THE CAVE GREW A MOUTH",hint:"Lantern fish inside",x:17,z:20,dur:240,rare:!1,weather:null,sky:null},{id:"ufo",title:"SOMETHING OVERHEAD",shout:"THAT IS NOT A PLANE",hint:"Offshore unidentified bass",x:0,z:8,dur:200,rare:!0,weather:null,sky:1318936},{id:"lighthouse",title:"LIGHTHOUSE FAULT",shout:"THE LIGHT IS DRUNK",hint:"Beam is wrong. Fish don’t care.",x:0,z:-1,dur:180,rare:!1,weather:null,sky:null},{id:"giant",title:"GIANT OFFSHORE",shout:"SOMETHING HUGE UNDER US",hint:"Stay on the skiff",x:-30,z:2,dur:200,rare:!0,weather:null,sky:null},{id:"crate",title:"SUPPLY WASH",shout:"CRATES ON THE SAND",hint:"East Beach tins",x:26,z:8,dur:200,rare:!1,weather:null,sky:null},{id:"npc",title:"THE OTHER FISHERMAN",shout:"WHO IS THAT",hint:"He fishes. He does not talk.",x:4,z:30,dur:240,rare:!0,weather:null,sky:null},{id:"low_tide",title:"LOW TIDE",shout:"THE FLOOR CAME UP",hint:"South sandbar is real for a bit",x:-8,z:22,dur:280,rare:!1,weather:null,sky:null}],Rl=["RUN","BOATS NOW","I SAW IT","NOT A DRILL","LEAVE THE CHAIR","JEFF IS INVOLVED","GET THE ROD"];function ti(i,t){return new ot(i,new ze({color:t,flatShading:!0}))}function y_(){const i=new lt,t=ti(new kt(.08,.1,4.2,5),12864058);t.position.y=2.1;const e=ti(new it(1.6,.7,.05),15253850);return e.position.set(.8,3.6,0),i.add(t,e),i.visible=!1,i}function S_(){const i=new lt,t=ti(new kt(1.8,2.4,.35,8),13227206),e=ti(new Se(.7,6,4),8250266);return e.position.y=.4,i.add(t,e),i.visible=!1,i}function E_(){const i=new lt,t=ti(new ei(1.1,4.4,3,6),4872808);t.rotation.z=Math.PI/2;const e=ti(new it(.2,1.6,1.1),3820117);return e.position.x=-3.1,i.add(t,e),i.visible=!1,i}function b_(){const i=ti(new it(.7,.55,.7),6965805);return i.visible=!1,i}function w_(i){const t={active:null,nextIn:22,marker:y_(),ufo:S_(),whale:E_(),crate:b_(),sandbar:ti(new kt(6,7.4,.5,8),F.sand),mets:[],shoutT:0};t.sandbar.position.set(-8,-.4,24),t.sandbar.visible=!1,i.add(t.marker,t.ufo,t.whale,t.crate,t.sandbar);for(let e=0;e<10;e++){const n=ti(new Se(.12,5,4),16770720);n.visible=!1,n.userData.live=!1,i.add(n),t.mets.push(n)}return t}function tr(){return oc}let oc=null;function T_(i,t){const{dt:e,t:n,toast:r,people:s,onStart:o,onEnd:a}=t;if(i.active){if(i.active.left-=e,i.shoutT-=e,i.shoutT<=0){i.shoutT=7+Math.random()*6;const c=Rl[Math.random()*Rl.length|0];r(`${i.active.shout} · “${c}”`)}if(C_(i,n),i.active.left<=0){const c=i.active;R_(i),i.active=null,oc=null,i.nextIn=70+Math.random()*90,r(`${c.title} ended. Water is ordinary again.`),a?.(c)}return i.active}return i.nextIn-=e,i.nextIn<=0&&A_(i,r,s,o),null}function A_(i,t,e,n){const r=Al[Math.random()*Al.length|0];if(i.active={...r,left:r.dur},oc=i.active,i.shoutT=1.2,i.marker.position.set(r.x,.2,r.z),i.marker.visible=!0,i.ufo.visible=r.id==="ufo",i.whale.visible=r.id==="whale"||r.id==="giant",i.crate.visible=r.id==="crate"||r.id==="wreck",i.crate.position.set(26.4,.28,8.2),i.sandbar.visible=r.id==="low_tide",i.sandbar.visible&&(i.sandbar.position.y=.12),e)for(const s of e)s.userData.sit||s.userData.watcher||(s.userData.eventRun=!0,s.userData.path=[[s.position.x,s.position.z],[r.x+(Math.random()-.5)*4,r.z+(Math.random()-.5)*4]],s.userData.u=0);t(`EVENT · ${r.title} · ${Math.round(r.dur/60)} min`),n?.(i.active)}function R_(i){i.marker.visible=!1,i.ufo.visible=!1,i.whale.visible=!1,i.crate.visible=!1,i.sandbar.visible=!1;for(const t of i.mets)t.visible=!1}function C_(i,t){const e=i.active;if(e&&(i.marker.rotation.y=t*.8,i.whale.visible&&(i.whale.position.set(e.x+Math.sin(t*.3)*8,.4+Math.sin(t)*.4,e.z+Math.cos(t*.25)*6),i.whale.rotation.y=t*.25),i.ufo.visible&&(i.ufo.position.set(Math.cos(t*.4)*22,18+Math.sin(t)*2,Math.sin(t*.4)*22),i.ufo.rotation.y=t),e.id==="meteor"))for(const n of i.mets)!n.userData.live&&Math.random()<.04&&(n.userData.live=!0,n.visible=!0,n.position.set((Math.random()-.5)*40,22,(Math.random()-.5)*40),n.userData.v={x:-8-Math.random()*6,y:-14,z:-4}),n.userData.live&&(n.position.x+=n.userData.v.x*.016,n.position.y+=n.userData.v.y*.016,n.position.z+=n.userData.v.z*.016,n.position.y<.4&&(n.userData.live=!1,n.visible=!1))}const Dr={none:{id:"none",name:"No rod",burn:0,luck:0,zones:[]},basic:{id:"basic",name:"Dock Rod",burn:80,luck:0,zones:["MAIN_DOCK","EAST_BEACH","NORTH_DOCK","DRAIN","COVE"],note:"Docks and beach water."},advanced:{id:"advanced",name:"Cliff Rod",burn:180,luck:8,zones:["MAIN_DOCK","EAST_BEACH","NORTH_DOCK","SOUTH_CLIFFS","CAVES","DRAIN","COVE","HOLE","WRECK"],note:"Opens cliffs and the cave pool."},elite:{id:"elite",name:"Offshore Rod",burn:360,luck:18,zones:["MAIN_DOCK","EAST_BEACH","NORTH_DOCK","SOUTH_CLIFFS","CAVES","OFFSHORE","EMBER_SHORE","EMBER_POOL","DRAIN","COVE","HOLE","WRECK"],note:"Opens the deep offshore pool and Great Saint Alon."}},La=[{id:"blue_snapper",name:"Blue Snapper",rarity:"Common",kind:"credits",value:12,zones:["MAIN_DOCK","EAST_BEACH"],minRod:"basic",blurb:"Everyday dock fish. Silver-blue, always hungry.",trade:"Redeems for 12 credits."},{id:"old_boot",name:"Old Boot",rarity:"Common",kind:"junk",value:0,zones:["MAIN_DOCK","NORTH_DOCK"],minRod:"basic",blurb:"Somebody lost this in 2004. Keep it as a joke.",trade:"Cannot be traded. Trophy junk."},{id:"kelp_perch",name:"Kelp Perch",rarity:"Common",kind:"credits",value:18,zones:["EAST_BEACH","NORTH_DOCK"],minRod:"basic",blurb:"Fat beach perch with kelp in its gills.",trade:"Redeems for 18 credits."},{id:"bottle_note",name:"Message in a Bottle",rarity:"Uncommon",kind:"collectible",value:0,zones:["EAST_BEACH","CAVES"],minRod:"basic",blurb:"A corked bottle. The note is half-legible island lore.",trade:"Collectible. Stays in your pack."},{id:"token_trout",name:"Token Trout",rarity:"Uncommon",kind:"token",value:14,zones:["NORTH_DOCK","MAIN_DOCK","SOUTH_CLIFFS"],minRod:"basic",blurb:"Speckled trout with a mint-green stripe.",trade:"Redeems for 14 native TOKEN."},{id:"cave_eel",name:"Cave Eel",rarity:"Rare",kind:"credits",value:55,zones:["CAVES"],minRod:"advanced",blurb:"Blind, long, and mean. Lives in the black water.",trade:"Redeems for 55 credits."},{id:"locked_crate",name:"Locked Crate",rarity:"Rare",kind:"treasure",value:0,zones:["CAVES","OFFSHORE"],minRod:"advanced",blurb:"Iron-banded crate. Something knocks inside.",trade:"Treasure. Keep it. No payout yet."},{id:"golden_tuna",name:"Golden Tuna",rarity:"Epic",kind:"sol",value:.04,zones:["SOUTH_CLIFFS","OFFSHORE"],minRod:"advanced",blurb:"Heavy gold-flank tuna. The island’s first real prize.",trade:"Redeems for 0.04 SOL (preview)."},{id:"crystal_angler",name:"Crystal Angler",rarity:"Epic",kind:"credits",value:140,zones:["CAVES","OFFSHORE"],minRod:"advanced",blurb:"Glass-clear body, a lantern that never goes out.",trade:"Redeems for 140 credits."},{id:"merch_marlin",name:"Merch Marlin",rarity:"Legendary",kind:"merch",value:1,merch:"Limited Marlin Tee",zones:["OFFSHORE","EAST_BEACH"],minRod:"elite",blurb:"A billfish wearing the island’s drop tag.",trade:"Redeems for a Limited Marlin Tee claim (preview)."},{id:"pump_pillfish",name:"Pump Pillfish",rarity:"Legendary",kind:"token",value:90,zones:["OFFSHORE","SOUTH_CLIFFS"],minRod:"elite",blurb:"Shaped like the official pill. Extremely few exist.",trade:"Redeems for 90 native TOKEN."},{id:"moon_marlin",name:"Moon Marlin",rarity:"Mythic",kind:"sol",value:.18,zones:["OFFSHORE"],minRod:"elite",blurb:"Night-silver marlin. Only the offshore black water.",trade:"Redeems for 0.18 SOL (preview)."},{id:"jackpot_leviathan",name:"Jackpot Leviathan",rarity:"Mythic",kind:"sol",value:.25,zones:["OFFSHORE"],minRod:"elite",blurb:"The island’s jackpot. Almost nobody lands it.",trade:"Redeems for 0.25 SOL (preview)."},{id:"vault_whale",name:"Vault Whale",rarity:"Mythic",kind:"bundle",value:1,zones:["OFFSHORE"],minRod:"elite",blurb:"A pale whale calf with a vault lock on its tail.",trade:"Redeems for 200 credits + 40 TOKEN + 0.05 SOL (preview)."},{id:"cinder_bass",name:"Cinder Bass",rarity:"Uncommon",kind:"credits",value:28,zones:["EMBER_SHORE"],minRod:"basic",blurb:"Warm-water bass off Great Saint Alon.",trade:"Redeems for 28 credits."},{id:"ash_trout",name:"Ash Trout",rarity:"Rare",kind:"token",value:22,zones:["EMBER_SHORE","EMBER_POOL"],minRod:"advanced",blurb:"Grey-speckled trout from the lava shelf.",trade:"Redeems for 22 native TOKEN."},{id:"ember_eel",name:"Ember Eel",rarity:"Epic",kind:"credits",value:160,zones:["EMBER_POOL"],minRod:"elite",blurb:"Glows in the black pool. Don’t drop it.",trade:"Redeems for 160 credits."},{id:"jeff",name:"Jeff",rarity:"Mythic",kind:"collectible",value:0,zones:["OFFSHORE","MAIN_DOCK","EAST_BEACH"],minRod:"basic",blurb:"It’s Jeff. He has a name tag. Nobody issued it.",trade:"Collectible. Jeff stays in the book."},{id:"drain_goby",name:"Drain Goby",rarity:"Uncommon",kind:"credits",value:24,zones:["DRAIN"],minRod:"basic",blurb:"Lives in the pipe. Tastes like coins.",trade:"Redeems for 24 credits."},{id:"wreck_grouper",name:"Wreck Grouper",rarity:"Rare",kind:"token",value:18,zones:["WRECK"],minRod:"basic",blurb:"Grew up in the hold. Still wearing rust.",trade:"Redeems for 18 TOKEN."},{id:"cove_perch",name:"Cove Perch",rarity:"Uncommon",kind:"credits",value:22,zones:["COVE"],minRod:"basic",blurb:"The quiet beach fish. Nobody logged it.",trade:"Redeems for 22 credits."},{id:"hole_ling",name:"Hole Ling",rarity:"Epic",kind:"credits",value:110,zones:["HOLE"],minRod:"advanced",blurb:"Black-water ling. No waypoint. On purpose.",trade:"Redeems for 110 credits."}],Iu=[{id:"tok20",name:"20 TOKEN",cost:80,give:{tokens:20},note:"Credits → native token. Preview."},{id:"tok60",name:"60 TOKEN",cost:210,give:{tokens:60},note:"Bulk token swap. Preview."},{id:"sol01",name:"0.01 SOL",cost:160,give:{sol:.01},note:"Preview SOL. No chain."},{id:"sol05",name:"0.05 SOL",cost:720,give:{sol:.05},note:"Bigger preview SOL claim."}],Uu=[{id:"hat",name:"Dock Hat",cost:70,merch:"Dock Hat",note:"White brim. Preview fulfilment."},{id:"tee",name:"PUMPISLAND Tee",cost:140,merch:"PUMPISLAND Tee",note:"Official pill print. Preview."},{id:"hoodie",name:"Island Hoodie",cost:260,merch:"Island Hoodie",note:"Heavy cotton. Preview."},{id:"rodskin",name:"Mint Rod Wrap",cost:190,merch:"Mint Rod Wrap",note:"Cosmetic wrap. Preview."}],Nu=[{id:"skiff",name:"Island Skiff",cost:160,note:"Sail to Great Saint Alon. Preview boat. Local only."}],P_={Common:50,Uncommon:24,Rare:12,Epic:7,Legendary:2.2,Mythic:.45},Io={basic:1,advanced:2,elite:3};function Cl(){return{wallet:null,tokens:240,credits:180,burned:0,rods:["basic"],equipped:"basic",inventory:[],claims:[],merch:[],boat:!1,visitedEmber:!1,caught:0,previewSol:0,book:{},biggest:0,sawDrop:!1,found:{}}}function D_(){const i=localStorage.getItem("pi-state-v3"),t=i?{...Cl(),...JSON.parse(i)}:Cl();Array.isArray(t.merch)||(t.merch=[]),typeof t.boat!="boolean"&&(t.boat=!1),typeof t.visitedEmber!="boolean"&&(t.visitedEmber=!1),(!t.book||typeof t.book!="object")&&(t.book={}),typeof t.biggest!="number"&&(t.biggest=0),typeof t.sawDrop!="boolean"&&(t.sawDrop=!1),(!t.found||typeof t.found!="object")&&(t.found={}),t.rods?.length||(t.rods=["basic"],t.equipped="basic");function e(){localStorage.setItem("pi-state-v3",JSON.stringify(t))}function n(){if(!t.wallet){const g=[...crypto.getRandomValues(new Uint8Array(4))].map(_=>_.toString(16).padStart(2,"0")).join("");t.wallet=`preview${g}…demo`,e()}return t.wallet}function r(f){const g=Dr[f];return!g||g.id==="none"?{ok:!1,reason:"Unknown rod."}:t.rods.includes(f)?{ok:!1,reason:"Already owned."}:t.tokens<g.burn?{ok:!1,reason:`Need ${g.burn} TOKEN.`}:(t.tokens-=g.burn,t.burned+=g.burn,t.rods.push(f),t.equipped=f,e(),{ok:!0,rod:g})}function s(f){return t.rods.includes(f)?(t.equipped=f,e(),!0):!1}function o(f){const g=Dr[t.equipped]||Dr.none;return g.id==="none"?{ok:!1,reason:"Burn TOKEN for a rod at the lighthouse."}:f==="EVENT"?{ok:!0,rod:g}:g.zones.includes(f)?{ok:!0,rod:g}:{ok:!1,reason:`${g.name} cannot fish ${f.replaceAll("_"," ")}.`}}function a(f,g){const _=o(f);if(!_.ok)return _;const d=_.rod;let u=La.filter(S=>S.zones.includes(f)&&Io[d.id]>=Io[S.minRod]);if(g){const S=Da.filter(v=>v.event===g&&(v.zones.includes(f)||v.zones.includes("EVENT")));u=u.concat(S)}if(!u.length)return{ok:!1,reason:"Nothing bites here."};const M=u.map(S=>({c:S,w:Math.max(.12,P_[S.rarity]+d.luck*(S.rarity==="Common"?-.4:.38))})),b=M.reduce((S,v)=>S+v.w,0);let x=Math.random()*b,P=M[0].c;for(const S of M)if(x-=S.w,x<=0){P=S.c;break}const A=P.kind==="collectible"||P.kind==="junk"||P.kind==="treasure",w={uid:`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`,...P,zone:f,at:Date.now(),status:A?"kept":"redeemable"};t.inventory.unshift(w),t.caught+=1,t.book||(t.book={}),t.book[P.id]=(t.book[P.id]||0)+1;const R=20+Math.round(Math.random()*80+(Io[d.id]||1)*8);return w.size=R,R>(t.biggest||0)&&(t.biggest=R),e(),{ok:!0,item:w}}function c(f){f.kind==="credits"&&(t.credits+=f.value),f.kind==="token"&&(t.tokens+=f.value),f.kind==="sol"&&(t.previewSol+=f.value),f.kind==="merch"&&t.merch.unshift({name:f.merch||f.name,at:Date.now()}),f.kind==="bundle"&&(t.credits+=200,t.tokens+=40,t.previewSol+=.05)}function l(f){const g=t.inventory.find(_=>_.uid===f);return g?g.status!=="redeemable"?{ok:!1,reason:"Not redeemable."}:(g.status="locked",c(g),g.status="redeemed",g.redeemedAt=Date.now(),t.claims.unshift({uid:g.uid,name:g.name,kind:g.kind,value:g.value,note:g.kind==="sol"||g.kind==="merch"||g.kind==="bundle"?"PREVIEW claim — no chain, no fulfilment":"Applied locally"}),e(),{ok:!0,item:g}):{ok:!1,reason:"Not in inventory."}}function h(f){const g=Iu.find(_=>_.id===f);return g?t.credits<g.cost?{ok:!1,reason:`Need ${g.cost} credits.`}:(t.credits-=g.cost,g.give.tokens&&(t.tokens+=g.give.tokens),g.give.sol&&(t.previewSol+=g.give.sol),e(),{ok:!0,offer:g}):{ok:!1,reason:"Unknown swap."}}function m(f){const g=Uu.find(_=>_.id===f);return g?t.credits<g.cost?{ok:!1,reason:`Need ${g.cost} credits.`}:(t.credits-=g.cost,t.merch.unshift({name:g.merch,at:Date.now()}),e(),{ok:!0,offer:g}):{ok:!1,reason:"Unknown merch."}}function p(f){const g=Nu.find(_=>_.id===f);return g?f==="skiff"?t.boat?{ok:!1,reason:"You already own the skiff."}:t.credits<g.cost?{ok:!1,reason:`Need ${g.cost} credits.`}:(t.credits-=g.cost,t.boat=!0,e(),{ok:!0,offer:g}):{ok:!1,reason:"Unknown gear."}:{ok:!1,reason:"Unknown gear."}}return{state:t,save:e,connectPreviewWallet:n,burnForRod:r,equip:s,canFish:o,rollCatch:a,redeem:l,buySwap:h,buyMerch:m,buyGear:p,markEmber(){t.visitedEmber||(t.visitedEmber=!0,e())},markDrop(){t.sawDrop||(t.sawDrop=!0,e())},discover(f){return t.found||(t.found={}),t.found[f]?!1:(t.found[f]=Date.now(),e(),!0)}}}function Ws(i){return{credits:"IN-GAME CREDITS",token:"NATIVE TOKEN",sol:"SOL (PREVIEW)",merch:"MERCH CLAIM (PREVIEW)",treasure:"TREASURE",collectible:"COLLECTIBLE",junk:"JUNK",bundle:"MIXED PAYOUT (PREVIEW)"}[i]||i}function Ou(i){return i.trade||Ws(i.kind)}const De=(i,t="0 0 80 80")=>`<svg class="thumb" viewBox="${t}" aria-hidden="true">${i}</svg>`;function L_(i){return De(i==="advanced"?`
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
  `)}function I_(i){return i.startsWith("sol")?De(`
      <circle cx="40" cy="40" r="26" fill="#14f195"/>
      <path d="M40 18 L28 38 H40 L32 62 L56 36 H42 Z" fill="#0b3b2a"/>
    `):De(`
    <rect x="18" y="28" width="44" height="28" rx="14" fill="#6ed18a"/>
    <rect x="40" y="28" width="22" height="28" rx="14" fill="#f4f8f5"/>
    <rect x="16" y="26" width="48" height="32" rx="16" fill="none" stroke="#16382a" stroke-width="4"/>
  `)}function U_(i){return De(i==="hat"?`
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
  `)}function Ia(i){const t={blue_snapper:["#4e96bc","#2f6f96"],old_boot:["#5c3d24","#3a2616"],kelp_perch:["#6f7d4c","#2f8a48"],bottle_note:["#8fd0ff","#2f6f96"],token_trout:["#6ed18a","#16382a"],cave_eel:["#3a3a48","#1a1c1a"],locked_crate:["#7a5533","#3a2616"],golden_tuna:["#e8c15a","#8a6a20"],crystal_angler:["#b8f0ff","#4e96bc"],merch_marlin:["#2f8a48","#16382a"],pump_pillfish:["#6ed18a","#f4f8f5"],moon_marlin:["#d5e6ee","#6aa3cc"],jackpot_leviathan:["#e4a0ff","#4a2a68"],vault_whale:["#f4f5f0","#6aa3cc"]},[e,n]=t[i]||["#4e96bc","#16382a"];return De(i==="old_boot"?`<path d="M18 30 H48 V44 H62 Q70 44 70 54 H18 Z" fill="${e}"/><rect x="20" y="26" width="26" height="8" fill="${n}"/>`:i==="locked_crate"?`<rect x="18" y="22" width="44" height="36" fill="${e}"/><rect x="18" y="36" width="44" height="8" fill="${n}"/><circle cx="40" cy="40" r="5" fill="#e8c15a"/>`:i==="bottle_note"?`<rect x="34" y="14" width="12" height="10" fill="${n}"/><path d="M28 24 H52 L48 66 H32 Z" fill="${e}"/><rect x="32" y="34" width="16" height="18" fill="#f4f5f0"/>`:`
    <ellipse cx="38" cy="40" rx="22" ry="12" fill="${e}"/>
    <path d="M58 40 L74 28 V52 Z" fill="${n}"/>
    <circle cx="26" cy="38" r="3" fill="#142018"/>
    <path d="M36 30 Q40 40 36 50" fill="none" stroke="${n}" stroke-width="2"/>
  `)}function N_(){return De(`
    <rect x="16" y="42" width="48" height="14" rx="4" fill="#3a2616"/>
    <path d="M16 42 L40 22 L64 42" fill="#f4f5f0"/>
    <rect x="36" y="28" width="8" height="16" fill="#6ed18a"/>
  `)}function Uo(i){return De(i==="fish"?'<ellipse cx="40" cy="40" rx="22" ry="12" fill="#4e96bc"/><path d="M60 40 L74 28 V52 Z" fill="#2f6f96"/>':i==="burn"?'<path d="M40 14 C28 34 28 46 40 66 C52 46 52 34 40 14 Z" fill="#e8c15a"/>':'<rect x="22" y="28" width="36" height="24" rx="4" fill="#6ed18a"/><text x="40" y="46" text-anchor="middle" font-size="16" fill="#16382a" font-family="sans-serif">C</text>')}const _s={ctx:null};function Xs(){if(_s.ctx)return _s.ctx;const i=window.AudioContext||window.webkitAudioContext;return i?(_s.ctx=new i,_s.ctx):null}function O_(){const i=Xs();i&&i.state==="suspended"&&i.resume()}function Fu(i,t,e,n,r,s){const o=i.createGain();return o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(e,t+n),o.gain.setValueAtTime(e,t+n+r),o.gain.exponentialRampToValueAtTime(1e-4,t+n+r+s),o}function _n({freq:i=220,type:t="sine",dur:e=.2,vol:n=.08,slide:r=0}={}){const s=Xs();if(!s)return;const o=s.currentTime,a=s.createOscillator();a.type=t,a.frequency.setValueAtTime(i,o),r&&a.frequency.exponentialRampToValueAtTime(Math.max(40,i+r),o+e);const c=Fu(s,o,n,.012,e*.35,e*.6);a.connect(c),c.connect(s.destination),a.start(o),a.stop(o+e+.05)}function No({dur:i=.18,vol:t=.05,hp:e=400,lp:n=2400}={}){const r=Xs();if(!r)return;const s=Math.floor(r.sampleRate*i),o=r.createBuffer(1,s,r.sampleRate),a=o.getChannelData(0);for(let p=0;p<s;p++)a[p]=(Math.random()*2-1)*(1-p/s);const c=r.createBufferSource();c.buffer=o;const l=r.createBiquadFilter();l.type="highpass",l.frequency.value=e;const h=r.createBiquadFilter();h.type="lowpass",h.frequency.value=n;const m=Fu(r,r.currentTime,t,.005,i*.2,i*.75);c.connect(l),l.connect(h),h.connect(m),m.connect(r.destination),c.start()}const ye={step:()=>No({dur:.07,vol:.035,hp:80,lp:420}),splash:()=>{No({dur:.28,vol:.07,hp:200,lp:1800}),_n({freq:180,type:"triangle",dur:.18,vol:.03,slide:-80})},cast:()=>_n({freq:340,type:"triangle",dur:.16,vol:.05,slide:-120}),bite:()=>{_n({freq:620,type:"square",dur:.08,vol:.045}),_n({freq:180,type:"sawtooth",dur:.12,vol:.03,slide:-40})},reel:()=>_n({freq:240,type:"triangle",dur:.09,vol:.03,slide:70}),catch:(i=!1)=>{_n({freq:i?520:360,type:"sine",dur:.16,vol:.06}),_n({freq:i?780:480,type:"triangle",dur:.22,vol:.04,slide:40})},miss:()=>_n({freq:140,type:"sine",dur:.2,vol:.04,slide:-70}),ui:()=>_n({freq:480,type:"sine",dur:.07,vol:.03}),burn:()=>{No({dur:.22,vol:.04,hp:300,lp:1600}),_n({freq:260,type:"sawtooth",dur:.18,vol:.035,slide:90})},jump:()=>_n({freq:210,type:"triangle",dur:.1,vol:.035,slide:80})};let Pl=null;function F_(){const i=Xs();if(!i||Pl)return;const t=i.currentTime,e=i.createOscillator();e.type="sine",e.frequency.value=72;const n=i.createOscillator();n.type="triangle",n.frequency.value=118;const r=i.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.018,t+1.6);const s=i.createOscillator();s.frequency.value=.07;const o=i.createGain();o.gain.value=.006,s.connect(o),o.connect(r.gain),e.connect(r),n.connect(r),r.connect(i.destination),e.start(),n.start(),s.start(),Pl=r}const di=160,vs=212,Wn=80;function Tr(i,t,e,n){return{x:(i+di)/(di*2)*e,y:(di-t)/(di*2)*n}}function z_(i){const t=i.getContext("2d");i.width=vs,i.height=vs;const e=vs,n=vs,r=document.createElement("canvas");r.width=e,r.height=n;const s=r.getContext("2d");s.fillStyle="#1c5a78",s.fillRect(0,0,e,n);const o=s.createImageData(Wn,Wn),a=o.data;for(let g=0;g<Wn;g++)for(let _=0;_<Wn;_++){const d=-di+(_+.5)/Wn*di*2,u=di-(g+.5)/Wn*di*2,M=Re(d,u),b=Math.hypot(d,u),x=Math.hypot(d-Ut.x,u-Ut.z);let P,A,w;if(x<Ut.r+2&&M>.08)M<.3?(P=201,A=160,w=106):Math.hypot(d-Ut.x+2,u-Ut.z-1)<6?(P=196,A=74,w=58):(P=106,A=83,w=68);else if(M<.08||b>je+3.4){const S=Math.min(1,Math.max(0,Math.min(b,x)/40));P=28+S*8,A=88-S*18,w=118-S*10}else if(M<.28||d>10&&u>-4&&u<24&&M<.62)P=210,A=190,w=145;else if(d>2&&u<-6&&b<30)P=72,A=92,w=52;else if(M>2.8)P=138,A=116,w=72;else{const S=(Math.sin(d*.28)+1)*10;P=98+S,A=118+S*.6,w=62}const R=(g*Wn+_)*4;a[R]=P,a[R+1]=A,a[R+2]=w,a[R+3]=255}const c=document.createElement("canvas");c.width=Wn,c.height=Wn,c.getContext("2d").putImageData(o,0,0),s.imageSmoothingEnabled=!1,s.drawImage(c,0,0,e,n);function l(g,_,d){const u=Tr(g,_,e,n);s.save(),s.translate(u.x,u.y),d(s),s.restore()}l(1.6,31.4,g=>{g.fillStyle="#6a4524",g.fillRect(-4,-16,8,22),g.fillStyle="#8a5a2a",g.fillRect(-3.2,-15,6.4,20)}),l(-27.2,8,g=>{g.rotate(-1.2),g.fillStyle="#6a4524",g.fillRect(-3.2,-12,6.4,18)}),l(18.8,24.2,g=>{g.rotate(-.4),g.fillStyle="#6a4524",g.fillRect(-2.4,-6,4.8,10)}),l(0,-1.2,g=>{g.fillStyle="#f4f5f0",g.beginPath(),g.arc(0,0,4.2,0,Math.PI*2),g.fill(),g.fillStyle="#c44a3a",g.beginPath(),g.moveTo(0,-7),g.lineTo(3.2,-1),g.lineTo(-3.2,-1),g.closePath(),g.fill()});for(const[g,_]of[[-6.8,22.4],[8.6,21.6],[-19.2,6.4],[25.2,8.8],[28.4,12.4]])l(g,_,d=>{d.fillStyle="#2f8a48",d.beginPath(),d.moveTo(0,-4),d.lineTo(4,2),d.lineTo(-4,2),d.closePath(),d.fill()});l(17.2,20.6,g=>{g.fillStyle="#2a2c2a",g.beginPath(),g.ellipse(0,0,5,3.4,0,0,Math.PI*2),g.fill()}),l(-31,5.6,g=>{g.fillStyle="#3a2616",g.beginPath(),g.ellipse(0,0,3.4,1.6,.45,0,Math.PI*2),g.fill()});const h=Tr(-31,5.6,e,n),m=Tr(Ut.x-6,Ut.z+22,e,n);s.strokeStyle="rgba(244,247,242,0.35)",s.setLineDash([4,4]),s.beginPath(),s.moveTo(h.x,h.y),s.lineTo(m.x,m.y),s.stroke(),s.setLineDash([]);const p=[{t:"HOME",x:0,z:8,fill:"#f4f7f2"},{t:"DOCK",x:8,z:36,fill:"#f4f7f2"},{t:"ST ALON",x:Ut.x,z:Ut.z,fill:"#ffd0c0"}];s.font="700 9px ui-monospace, SFMono-Regular, Menlo, monospace",s.textAlign="center",s.textBaseline="middle";for(const g of p){const _=Tr(g.x,g.z,e,n);s.fillStyle="rgba(8,14,12,0.62)",s.fillRect(_.x-16,_.y-6,32,12),s.fillStyle=g.fill,s.fillText(g.t,_.x,_.y)}s.strokeStyle="rgba(244,247,242,0.18)",s.lineWidth=2,s.strokeRect(1,1,e-2,n-2);function f(g,_,d){t.clearRect(0,0,e,n),t.drawImage(r,0,0);const u=Tr(g,_,e,n);t.save(),t.translate(u.x,u.y),t.rotate(d),t.beginPath(),t.moveTo(0,11),t.lineTo(6,-6),t.lineTo(0,-2),t.lineTo(-6,-6),t.closePath(),t.fillStyle="#ffffff",t.strokeStyle="#102018",t.lineWidth=2,t.fill(),t.stroke(),t.restore()}return{draw:f}}function B_(i){const t=(i.inventory||[]).some(e=>e.zone==="EMBER_SHORE"||e.zone==="EMBER_POOL");return[{id:"cast",label:"Land a catch from the water",done:(i.caught||0)>0},{id:"redeem",label:"Redeem a catch at the hut counter",done:(i.claims||[]).length>0},{id:"skiff",label:"Buy the Island Skiff in Shop · GEAR",done:!!i.boat},{id:"sail",label:"Sail the skiff to Great Saint Alon",done:!!i.visitedEmber},{id:"ember",label:"Catch a fish on Great Saint Alon",done:t},{id:"book",label:"Open the Fish Book (J)",done:Object.keys(i.book||{}).length>=3},{id:"drop",label:"Look at The Drop from the south cliffs",done:!!i.sawDrop},{id:"secrets",label:`Log 5 secrets (${Object.keys(i.found||{}).length}/13)`,done:Object.keys(i.found||{}).length>=5}]}const k_=420;function Ye(i){return new ze({color:i,flatShading:!0})}function H_(){const i=new lt,t=Ye(16054002),e=new ot(new it(.18,.07,.32),t),n=new ot(new it(.7,.03,.16),t);n.position.set(-.35,.02,0);const r=n.clone();return r.position.x=.35,i.add(e,n,r),i.userData.wings=[n,r],i}function V_(){const i=new lt,t=new ot(new it(.22,.08,.16),Ye(11684402));t.position.y=.06;const e=new ot(new it(.08,.05,.12),Ye(9056802));e.position.set(-.16,.06,.08);const n=e.clone();return n.position.x=.16,i.add(t,e,n),i}function G_(i=!1){const t=new lt,e=new ot(new ei(.07,.22,2,5),Ye(i?2763818:4034495));e.rotation.z=Math.PI/2;const n=new ot(new en(.08,.12,4),Ye(2779784));if(n.rotation.z=-Math.PI/2,n.position.x=-.2,t.add(e,n),i){const r=new ot(new it(.16,.04,.04),Ye(1711130));r.position.set(.08,.04,0),t.add(r)}return t.visible=!1,t}function Dl(i=F.woodDark,t=2.7){const e=new lt,n=new ot(new it(1.15,.38,t),Ye(i));n.position.y=.12;const r=new ot(new it(.72,.3,.7),Ye(F.wood));return r.position.set(0,.14,-t*.55),e.add(n,r),e}function W_(){const i=new lt,t=new ot(new it(4.8,1.1,14),Ye(4869703));t.position.y=.4;const e=new ot(new it(3.6,1.6,4.2),Ye(12864058));e.position.set(0,1.4,3.4);const n=new ot(new kt(.35,.4,2.2,6),Ye(2763818));return n.position.set(0,2.8,3.6),i.add(t,e,n),i}function X_(){const i=new lt,t=new ot(new it(.5,.35,2.4),Ye(16053744)),e=new ot(new it(3.4,.08,.55),Ye(12864058)),n=new ot(new it(.08,.55,.4),Ye(12864058));return n.position.set(0,.35,1.05),i.add(t,e,n),i}function q_(){return new ot(new it(.04,.28,.04),new tn({color:12969200,transparent:!0,opacity:.45}))}function zu(i){const t=(i/k_%1+1)%1,e=t*Math.PI*2,n=Math.sin(t*Math.PI*2),r=n<0;return{u:t,ang:e,elev:n,night:r,dusk:t>.42&&t<.58,dawn:t<.12||t>.92}}function Y_(i){const t={birds:[],crabs:[],jumpers:[],boats:[],ships:[],planes:[],rain:[],patrol:[],beam:null,fog:null,ghostBoat:null,leviathan:null,watcher:null,chairIsle:null,weather:"clear",weatherT:18,eventT:40,stealT:22};for(let l=0;l<8;l++){const h=H_(),m=l/8*Math.PI*2;h.userData.orbit=m,h.userData.rad=16+l%5*3.2,h.userData.h=7.4+l%4*.8,h.userData.cx=l%2?2:26,h.userData.cz=l%2?30:10,i.add(h),t.birds.push(h)}const e=[[26,8],[28,12],[24,6],[22,14],[30,9]];for(const[l,h]of e){const m=V_();m.position.set(l,.04,h),m.userData.ox=l,m.userData.oz=h,m.userData.ph=Math.random()*6,i.add(m),t.crabs.push(m)}for(let l=0;l<5;l++){const h=G_(l===3);h.userData.cool=2+l*1.4,h.userData.sunglass=l===3,i.add(h),t.jumpers.push(h)}for(let l=0;l<3;l++){const h=Dl();h.userData.a=l*2.1,h.userData.rad=58+l*8,h.userData.speed=.05+l*.012,i.add(h),t.boats.push(h)}const n=W_();n.userData.t=0,n.userData.live=!1,n.visible=!1,i.add(n),t.ships.push(n);const r=X_();r.visible=!1,r.userData.live=!1,i.add(r),t.planes.push(r);const s=Dl(3810838,3.2);s.visible=!1,s.userData.live=!1,i.add(s),t.ghostBoat=s;const o=new ot(new ei(1.8,7.5,3,6),new ze({color:1318952,flatShading:!0,transparent:!0,opacity:.55}));o.rotation.z=Math.PI/2,o.visible=!1,o.userData.live=!1,i.add(o),t.leviathan=o;for(let l=0;l<28;l++){const h=q_();h.visible=!1,h.userData.vy=12+Math.random()*8,i.add(h),t.rain.push(h)}const a=new ot(new it(.35,.35,48),new tn({color:16773568,transparent:!0,opacity:.18,depthWrite:!1}));a.position.set(0,10.2,-1.2),a.visible=!1,i.add(a),t.beam=a;const c=new ot(new hn(220,220),new tn({color:13490384,transparent:!0,opacity:0,depthWrite:!1}));return c.rotation.x=-Math.PI/2,c.position.y=1.4,i.add(c),t.fog=c,t}function $_(i,t){const{dt:e,t:n,camera:r,toast:s,night:o,rough:a,raining:c,foggy:l}=t,h=r.position.x,m=r.position.z;for(const d of i.birds){d.userData.orbit+=e*.28;const u=d.userData.orbit;if(d.position.set(d.userData.cx+Math.cos(u)*d.userData.rad,d.userData.h+Math.sin(n*1.4+u)*.5,d.userData.cz+Math.sin(u)*d.userData.rad),d.rotation.y=-u+Math.PI/2,d.userData.wings){const M=Math.sin(n*9+u)*.5;d.userData.wings[0].rotation.z=M,d.userData.wings[1].rotation.z=-M}}i.stealT-=e,i.stealT<=0&&(i.stealT=28+Math.random()*24,Math.hypot(h,m-32)<18&&s("A gull took a fish. Not yours. Allegedly."));for(const d of i.crabs){const u=n*.7+d.userData.ph,M=d.userData.ox+Math.sin(u)*1.6,b=d.userData.oz+Math.cos(u*.8)*1.1;d.position.set(M,Math.max(.03,Re(M,b)+.02),b),d.rotation.y=u}for(const d of i.jumpers){if(d.userData.cool-=e,!d.visible&&d.userData.cool<=0){const u=Math.random()*Math.PI*2,M=36+Math.random()*10;d.userData.x=Math.cos(u)*M,d.userData.z=Math.sin(u)*M,d.userData.jump=0,d.visible=!0,d.userData.cool=6+Math.random()*8}if(d.visible){d.userData.jump+=e;const u=d.userData.jump,M=Pn(d.userData.x,d.userData.z,n)+Math.sin(u*4.2)*1.35;d.position.set(d.userData.x+u*.8,M,d.userData.z),d.rotation.z=.4-u,u>1.15&&(d.visible=!1)}}for(const d of i.boats){d.userData.a+=e*d.userData.speed;const u=d.userData.a,M=Math.cos(u)*d.userData.rad,b=Math.sin(u)*d.userData.rad;d.position.set(M,Pn(M,b,n)+.08,b),d.rotation.y=-u+Math.PI/2,d.rotation.z=Math.sin(n*1.2+u)*.08*(a?2.2:1)}const p=i.ships[0];if(p)if(!p.userData.live)p.userData.cool=(p.userData.cool??20)-e,p.userData.cool<=0&&(p.userData.live=!0,p.visible=!0,p.userData.x=-90,p.userData.z=70);else{p.userData.x+=e*4.2;const d=p.userData.x,u=p.userData.z;p.position.set(d,Pn(d,u,n)+.2,u),p.rotation.y=Math.PI/2,d>110&&(p.userData.live=!1,p.visible=!1,p.userData.cool=55+Math.random()*40)}const f=i.planes[0];f&&(f.userData.live?(f.userData.x+=e*22,f.userData.z+=e*6,f.position.set(f.userData.x,28,f.userData.z),f.rotation.y=Math.PI/2.4,f.userData.x>120&&(f.userData.live=!1,f.visible=!1,f.userData.cool=50+Math.random()*50)):(f.userData.cool=(f.userData.cool??35)-e,f.userData.cool<=0&&(f.userData.live=!0,f.visible=!0,f.userData.x=-80,f.userData.z=-40)));const g=i.ghostBoat;if(g)if(!g.userData.live)g.userData.cool=(g.userData.cool??26)-e,g.userData.cool<=0&&(g.userData.live=!0,g.visible=!0,g.userData.x=48,g.userData.z=-36);else{g.userData.x-=e*3.4;const d=g.userData.x,u=g.userData.z;g.position.set(d,Pn(d,u,n)+.1,u),g.rotation.y=-Math.PI/2,d<-70&&(g.userData.live=!1,g.visible=!1,g.userData.cool=40+Math.random()*50)}const _=i.leviathan;if(_&&(_.userData.live?(_.userData.k+=e,_.userData.x-=e*7,_.position.set(_.userData.x,-1.4,_.userData.z),_.userData.k>2.4&&(_.visible=!1,_.userData.live=!1,_.userData.cool=48+Math.random()*30)):(_.userData.cool=(_.userData.cool??18)-e,Re(h,m)<.1&&Math.hypot(h,m)>je-2&&_.userData.cool<=0&&(_.userData.live=!0,_.visible=!0,_.userData.k=0,_.userData.x=h+8,_.userData.z=m-4))),i.watcher&&(Math.hypot(h-i.watcher.position.x,m-i.watcher.position.z)<11?(i.watcher.visible=!1,i.watcher.userData.hide=n):!i.watcher.visible&&n-(i.watcher.userData.hide||0)>16&&(i.watcher.visible=!0)),i.beam&&(i.beam.visible=o,o&&(i.beam.rotation.y=n*.35,i.beam.material.opacity=.16+Math.sin(n*2)*.04)),i.fog){const d=l?.22:0;i.fog.material.opacity+=(d-i.fog.material.opacity)*Math.min(1,e*1.6),i.fog.position.set(h,1.5,m)}for(const d of i.rain){if(!c){d.visible=!1;continue}d.visible=!0,d.position.y-=d.userData.vy*e,(d.position.y<.2||!d.userData.set)&&(d.position.set(h+(Math.random()-.5)*28,8+Math.random()*10,m+(Math.random()-.5)*28),d.userData.set=!0)}for(const d of i.patrol){const u=d.userData.path;if(!u)continue;d.userData.u=(d.userData.u||0)+e*(d.userData.eventRun?.22:.08);const M=d.userData.u%1,b=Math.floor(M*u.length),x=(b+1)%u.length,P=M*u.length-b,A=u[b][0]+(u[x][0]-u[b][0])*P,w=u[b][1]+(u[x][1]-u[b][1])*P;d.position.set(A,Re(A,w),w),d.rotation.y=Math.atan2(u[x][0]-u[b][0],u[x][1]-u[b][1]),d.userData.moving=!0}if(i.weatherT-=e,i.weatherT<=0){const d=Math.random();i.weather=d<.55?"clear":d<.75?"rain":d<.9?"fog":"storm",i.weatherT=22+Math.random()*28,i.weather==="storm"&&s("The sea got ugly. Stay on the dock if you like your hat."),i.weather==="fog"&&s("Fog came in sideways. The lighthouse is doing its best.")}if(i.eventT-=e,i.eventT<=0){i.eventT=50+Math.random()*40;const d=Math.random();d<.25?s("The water went still. Then it didn’t."):d<.5?s("Something huge moved under the drop. You weren’t meant to see that."):d<.75?s("A plane nobody scheduled crossed the island."):s("Jeff was spotted. That’s the whole report.")}}const Or=[{id:"hut",name:"Abandoned hut",hint:"Someone left the stove on in 2006.",x:14.6,z:-18.4,r:2.4},{id:"sewer",name:"Drain tunnel",hint:"It smells like bait and regret.",x:8.2,z:16.4,r:2.2,fish:"DRAIN"},{id:"wreck",name:"Shipwreck",hint:"The hull still ticks.",x:36.4,z:4.2,r:3.2,need:"boat",fish:"WRECK"},{id:"secret_beach",name:"Quiet cove",hint:"Not on any chart.",x:22.4,z:-6.8,r:2.6,fish:"COVE"},{id:"cliff_path",name:"Goat path",hint:"One wrong step. Then fish.",x:-22.4,z:22.6,r:2.2,need:"advanced"},{id:"carving",name:"Rock carving",hint:"DO NOT FEED WHAT LIVES UNDER.",x:-12.6,z:-6.4,r:2},{id:"station",name:"Research shack",hint:"Clipboard dated tomorrow.",x:-6.8,z:-18.2,r:2.4,need:"night"},{id:"map",name:"Soggy chart",hint:"X is not where you think.",x:32.2,z:16.8,r:2},{id:"buried",name:"Buried tin",hint:"The sand was hiding it badly.",x:27.2,z:4.8,r:2,need:"night"},{id:"tunnel",name:"Underwater pipe",hint:"You can hear a generator.",x:-34.2,z:14.6,r:3,need:"boat"},{id:"west_cave",name:"Second mouth",hint:"The cave the map forgot.",x:-16.4,z:4.2,r:2.4},{id:"isle_chair",name:"Chair island",hint:"The other chair. Empty.",x:-62,z:-38,r:4,need:"boat"},{id:"hole",name:"Black hole water",hint:"Cliff Rod water. No sign.",x:-20.8,z:12.4,r:2.4,need:"advanced",fish:"HOLE"}];function Ua(i,t){let e=null;for(const n of Or){const r=Math.hypot(i-n.x,t-n.z);r<n.r&&(!e||r<e.d)&&(e={...n,d:r})}return e}function K_(i,t){return i?.need?i.need==="boat"&&!t.boat?{ok:!1,reason:"Need the skiff. Or a worse idea."}:i.need==="night"&&!t.night?{ok:!1,reason:"Come back when the lighthouse is working."}:i.need==="advanced"&&(t.rodRank||0)<2?{ok:!1,reason:"Cliff Rod. Then maybe."}:i.need==="storm"&&!t.storm?{ok:!1,reason:"Wait for ugly weather."}:{ok:!0}:{ok:!0}}const Ui=document.getElementById("game"),Z_=document.getElementById("hud"),Bu=document.getElementById("boot"),J_=document.getElementById("loader"),Ll=document.getElementById("load-fill"),Il=document.getElementById("load-line"),Ul=document.getElementById("prompt"),j_=document.getElementById("zone-label"),Q_=document.getElementById("zone-hint"),tv=document.getElementById("area-now-label"),ev=document.getElementById("area-now-hint"),Cs=document.getElementById("area-enter");let Nl="",Ps=0;const nv=document.getElementById("token-bal"),iv=document.getElementById("credit-bal"),rv=document.getElementById("catch-count"),xs=document.getElementById("rod-slot"),In=document.getElementById("panel"),Na=document.getElementById("toast"),er=document.getElementById("cast-meter"),sv=document.getElementById("cast-fill"),ov=document.getElementById("cast-label"),Ol=document.getElementById("cast-phase"),ku=document.getElementById("tension-wrap"),Fl=document.getElementById("tension-fill"),mi=document.getElementById("catch-card"),zl=document.getElementById("compass-n"),Hu=document.getElementById("touch"),Nt=D_(),Ce=Object.create(null),Qe={x:0,y:0},le=new D,on=new D,av=new D;let qs=!1,Fr=!1,Be=null,z=null,Oe=null;const cv={x:-31,z:5.6},lv={x:112,z:14};let Ds=0,Lr=0,Dn=null,ue=null,_r=!1,Oo=0,Fo=0,Bl=!0,Ms=72,Vu="rods";const Fs=matchMedia("(pointer: coarse)").matches,Je={active:!1,x:0,y:0,id:null},Oi=new tg({canvas:Ui,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!0});Oi.setPixelRatio(1);Oi.setSize(innerWidth,innerHeight);Oi.shadowMap.enabled=!1;Oi.outputColorSpace=Fe;Oi.toneMapping=Jn;const Le=new eg;Le.background=new wt(F.sky);Le.fog=new Ka(F.sky,.011);const ct=new cn(72,innerWidth/innerHeight,.08,520);ct.rotation.order="YXZ";ct.position.set(Po.x,Po.y,Po.z);const Gu=new gg(12967147,6972752,1.2);Le.add(Gu);const zs=new Du(16774102,.85);zs.position.set(-48,62,22);Le.add(zs);const Te=x_(Le),uv=Ag();Le.add(uv);const vn=Y_(Te.root);vn.patrol=Te.people.filter(i=>i.userData.path);vn.watcher=Te.watcher;const ys=w_(Te.root),an=Dg();Le.add(an);const Ni=Lg();Le.add(Ni);const Ir=Ug();Le.add(Ir);const or=Og();Le.add(or);const Tn=Fg();Le.add(Tn);const Zn=zg();ct.add(Zn);Zn.position.set(.18,-.12,-.42);Oa();const kl=document.getElementById("minimap"),Hl=kl?z_(kl):null,Wu=new Du(12047592,.28);Wu.position.set(30,18,-40);Le.add(Wu);function Oa(){Dn&&ct.remove(Dn),Dn=Tg(Nt.state.equipped!=="none"),ct.add(Dn),Le.add(ct)}function Bt(i){Na.textContent=i,Na.classList.remove("hidden"),Ds=2.6}function un(){nv.textContent=String(Nt.state.tokens),iv.textContent=String(Nt.state.credits),rv.textContent=String(Nt.state.caught);const i=Dr[Nt.state.equipped];!i||i.id==="none"?(xs.textContent="NO ROD",xs.classList.add("empty")):(xs.textContent=i.name.toUpperCase(),xs.classList.remove("empty")),hv()}function hv(){const i=document.getElementById("quest-list");if(!i)return;const t=B_(Nt.state);i.innerHTML=`<p>OBJECTIVES</p><ul>${t.map(e=>`<li class="${e.done?"done":""}"><i>${e.done?"✓":"○"}</i>${e.label}</li>`).join("")}</ul>`}function Xu(){document.pointerLockElement&&document.exitPointerLock(),qs=!1}function yn(){Be=null,In.classList.add("hidden"),In.setAttribute("aria-hidden","true"),In.innerHTML=""}function En(i){Xu(),Be=i,In.classList.remove("hidden"),In.setAttribute("aria-hidden","false"),i==="shop"?ui():i==="inv"?Fa():i==="board"?fv():i==="book"?pv():i==="redeem"&&Fa(!0)}function dv(){const i=Nt.state.wallet;return`<div class="shop-wallet">
    <div>
      <b>${i?"Preview wallet":"No wallet"}</b>
      <span>${i||"Local demo only"}</span>
    </div>
    <button type="button" data-act="connect">${i?"LINKED":"LINK"}</button>
  </div>`}function ui(){const i=Vu,t=Object.values(Dr).filter(o=>o.id!=="none").map(o=>{const a=Nt.state.rods.includes(o.id),c=Nt.state.equipped===o.id;return`<article class="card">
        <div class="art">${L_(o.id)}</div>
        <div class="copy">
          <b>${o.name}</b>
          <span>${o.note}</span>
          <i class="tag token">BURN ${o.burn} TOKEN</i>
        </div>
        ${a?`<button type="button" data-act="equip" data-id="${o.id}" ${c?"disabled":""}>${c?"ON":"EQUIP"}</button>`:`<button class="primary" type="button" data-act="burn" data-id="${o.id}">BURN</button>`}
      </article>`}).join(""),e=Iu.map(o=>`<article class="card">
      <div class="art">${I_(o.id)}</div>
      <div class="copy">
        <b>${o.name}</b>
        <span>${o.note}</span>
        <i class="tag">${o.cost} CREDITS</i>
      </div>
      <button class="primary" type="button" data-act="swap" data-id="${o.id}">SWAP</button>
    </article>`).join(""),n=Nu.map(o=>{const a=o.id==="skiff"&&Nt.state.boat;return`<article class="card">
      <div class="art">${N_()}</div>
      <div class="copy">
        <b>${o.name}</b>
        <span>${o.note}</span>
        <i class="tag">${o.cost} CREDITS</i>
      </div>
      ${a?'<em class="kept">OWNED</em>':`<button class="primary" type="button" data-act="gear" data-id="${o.id}">BUY</button>`}
    </article>`}).join(""),r=Uu.map(o=>`<article class="card">
      <div class="art">${U_(o.id)}</div>
      <div class="copy">
        <b>${o.name}</b>
        <span>${o.note}</span>
        <i class="tag merch">${o.cost} CREDITS</i>
      </div>
      <button class="primary" type="button" data-act="merch" data-id="${o.id}">BUY</button>
    </article>`).join(""),s=Nt.state.merch.length?`<div class="locker">${Nt.state.merch.map(o=>`<span>${o.name}</span>`).join("")}</div>`:'<p class="sub">Locker empty.</p>';In.innerHTML=`
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">LIGHTHOUSE</p>
    <h2>Shop</h2>
    <div class="wallet-line">
      <span><em>${Nt.state.credits}</em>CR</span>
      <span><em>${Nt.state.tokens}</em>TOKEN</span>
      <span><em>${Nt.state.previewSol.toFixed(2)}</em>SOL</span>
    </div>
    <div class="tabs">
      <button type="button" data-act="tab" data-id="rods" class="${i==="rods"?"on":""}">RODS</button>
      <button type="button" data-act="tab" data-id="gear" class="${i==="gear"?"on":""}">GEAR</button>
      <button type="button" data-act="tab" data-id="swap" class="${i==="swap"?"on":""}">SWAPS</button>
      <button type="button" data-act="tab" data-id="merch" class="${i==="merch"?"on":""}">MERCH</button>
    </div>
    ${i==="rods"?`${dv()}<div class="cards">${t}</div><p class="sub">Burned ${Nt.state.burned} TOKEN · preview only</p>`:""}
    ${i==="gear"?`<div class="cards">${n}</div><p class="sub">Buy the skiff, then E on the north dock boat. Local preview. Not a live fleet.</p>`:""}
    ${i==="swap"?`<div class="cards">${e}</div><p class="sub">Credits → TOKEN or preview SOL. No chain.</p>`:""}
    ${i==="merch"?`<div class="cards">${r}</div>${s}<p class="sub">Preview locker. Nothing ships.</p>`:""}
  `}function Fa(i=!1){const t=Nt.state.inventory,e=t.length?t.map(n=>`<article class="card">
        <div class="art">${Ia(n.id)}</div>
        <div class="copy">
          <b>${n.name}</b>
          <span>${n.blurb||Ou(n)}</span>
          <i class="tag ${n.kind}">${n.rarity} · ${Ws(n.kind)}</i>
        </div>
        ${n.status==="redeemable"?`<button class="primary" type="button" data-act="redeem" data-id="${n.uid}">REDEEM</button>`:`<em class="kept">${n.status.toUpperCase()}</em>`}
      </article>`).join(""):'<p class="empty-pack">Nothing in the pack. Fish the docks.</p>';In.innerHTML=`
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">${i?"COUNTER":"PACK"}</p>
    <h2>${i?"Redeem":"Catch pack"}</h2>
    <p class="sub">${i?"Preview claims. SOL and merch stay in this browser.":"Each catch shows what it trades for."}</p>
    <div class="cards">${e}</div>
    <p class="sub">Preview SOL claimed: ${Nt.state.previewSol.toFixed(2)}</p>
  `}function fv(){const i={};for(const e of Nt.state.inventory)i[e.rarity]=(i[e.rarity]||0)+1;const t=["Common","Uncommon","Rare","Epic","Legendary","Mythic"].map(e=>`<div class="stat-pill"><b>${i[e]||0}</b><span>${e}</span></div>`).join("");In.innerHTML=`
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">JOURNAL</p>
    <h2>Island log</h2>
    <p class="sub">Local preview. Room for a crowd — not a live 50-player server.</p>
    <div class="stat-grid">
      <div class="stat-card">${Uo("fish")}<b>${Nt.state.caught}</b><span>Landed</span></div>
      <div class="stat-card">${Uo("burn")}<b>${Nt.state.burned}</b><span>Burned</span></div>
      <div class="stat-card">${Uo("credits")}<b>${Nt.state.credits}</b><span>Credits</span></div>
    </div>
    <div class="rarity-row">${t}</div>
    <p class="sub">Local record · biggest fish ${Nt.state.biggest||0} cm. Not a live server board.</p>
    <p class="mini">FOUND</p>
    <p class="sub">${Object.keys(Nt.state.found||{}).length}/${Or.length} secrets. No map pins. On purpose.</p>
    <div class="locker">${Or.filter(e=>Nt.state.found?.[e.id]).map(e=>`<span>${e.name}</span>`).join("")||"Nothing logged yet. Walk."}</div>
  `}function pv(){const i=Nt.state.book||{},t=[...La,...Da].map(e=>{const n=i[e.id]||0;return`<article class="card">
      <div class="art">${Ia(n?e.id:"old_boot")}</div>
      <div class="copy">
        <b>${n?e.name:"???"}</b>
        <span>${n?e.blurb:"Not logged yet."}</span>
        <i class="tag">${n?`${e.rarity} · x${n}`:"UNKNOWN"}</i>
      </div>
    </article>`}).join("");In.innerHTML=`
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">FISH BOOK</p>
    <h2>Catch log</h2>
    <p class="sub">${Object.keys(i).length}/${La.length+Da.length} logged · biggest ${Nt.state.biggest||0} cm · this browser only</p>
    <div class="cards">${t}</div>
  `}In.addEventListener("click",i=>{const t=i.target.closest("button");if(!t)return;const e=t.dataset.act;if(e==="close"){yn();return}if(e==="connect"){Nt.connectPreviewWallet(),ye.ui(),Bt("Preview wallet linked. No real keys."),ui();return}if(e==="burn"){const n=Nt.burnForRod(t.dataset.id);n.ok?(ye.burn(),Bt(`Burned ${n.rod.burn} TOKEN · ${n.rod.name} unlocked`),Oa()):Bt(n.reason),un(),ui();return}if(e==="equip"){Nt.equip(t.dataset.id),Oa(),un(),ui();return}if(e==="redeem"){const n=Nt.redeem(t.dataset.id);n.ok?Bt(`Redeemed ${n.item.name} · ${Ws(n.item.kind)}`):Bt(n.reason),un(),Fa(Be==="redeem");return}if(e==="tab"){Vu=t.dataset.id,ui();return}if(e==="swap"){const n=Nt.buySwap(t.dataset.id);n.ok?(ye.ui(),Bt(`Swapped credits for ${n.offer.name}`)):Bt(n.reason),un(),ui();return}if(e==="merch"){const n=Nt.buyMerch(t.dataset.id);n.ok?(ye.ui(),Bt(`Claimed ${n.offer.name} (preview locker)`)):Bt(n.reason),un(),ui()}if(e==="gear"){const n=Nt.buyGear(t.dataset.id);n.ok?(ye.ui(),Bt("Island Skiff owned. E the north dock boat to sail.")):Bt(n.reason),un(),ui()}});function qu(){if(Be){yn();return}if(!ue)return;if(ue.id==="shop"&&En("shop"),ue.id==="board"&&En("board"),ue.id==="redeem"&&En("redeem"),ue.id==="boat"){if(!Nt.state.boat){Bt("Buy the Island Skiff in Shop · GEAR first.");return}Gl(lv,"Great Saint Alon");return}if(ue.id==="emberdock"){Gl(cv,"Pump Island");return}if(ue.id==="boot"&&Bt("Size 400. Someone lost the other one."),ue.id==="loo"&&Bt("Cave plumbing. Do not fish here."),ue.id==="shrine"&&Bt("The pill watches. Burn wisely."),ue.id==="pc"&&Bt("Still compiling. Since 2004."),ue.id==="duck"&&Bt("Quack. Not a fish. You cannot redeem this."),ue.id==="chest"&&Bt("Locked. The chef has the key. Obviously."),ue.id==="crash"&&Bt("Failed airdrop. Contents: sand."),ue.id==="vending"&&Bt("Sells warm soda and a key that fits nothing. Out of order since 2009."),ue.id==="phone"&&Bt(Math.random()<.5?"It rings. Nobody speaks. You hang up first.":"Dial tone. Then a splash. Then nothing."),ue.id==="bunker"&&Bt("Hatch is locked from below. Something knocks twice, then stops."),ue.id==="chairman"&&Bt("Been here 17 years. Says the fish come to him now. He has not moved."),ue.id==="advice"&&Bt("Cast when the water looks wet. Reel when it doesn’t. Good luck."),ue.id==="drawings"&&Bt("Scratched into the rock: a fish larger than the island. Dated tomorrow."),ue.id==="drop"&&(Nt.markDrop(),un(),Bt("The Drop. You can see it from day one. You cannot go there yet.")),new Set(Or.map(t=>t.id)).has(ue.id)){const t=Or.find(r=>r.id===ue.id),e=K_(t,{boat:Nt.state.boat,night:zu(performance.now()/1e3).night,rodRank:{none:0,basic:1,advanced:2,elite:3}[Nt.state.equipped]||0,storm:vn.weather==="storm"});if(!e.ok){Bt(e.reason);return}const n=Nt.discover(t.id);Bt(t.hint),n&&(un(),Bt(`LOGGED · ${t.name}`))}}function qn(i,t,e){if(!er)return;er.classList.remove("hidden","bite","reel","snap"),i==="bite"&&er.classList.add("bite"),(i==="fight"||i==="reel")&&er.classList.add("reel"),i==="snap"&&er.classList.add("snap"),Ol&&(Ol.textContent=i.toUpperCase()),ov.textContent=t,sv.style.width=`${Math.max(0,Math.min(100,e))}%`;const n=i==="fight";ku?.classList.toggle("hidden",!n),n&&Fl&&z&&(Fl.style.width=`${Math.max(4,Math.min(100,z.tension*100))}%`)}function za(i){z=null,an.visible=!1,or.visible=!1,Tn.visible=!1,er.classList.add("hidden"),ku?.classList.add("hidden"),Os(Dn,"idle",0),i&&Bt(i)}function mv(){if(!z||!or)return;const i=new D(.18,-.18,-1.35);ct.localToWorld(i);const t=or.geometry.attributes.position;t.setXYZ(0,i.x,i.y,i.z),t.setXYZ(1,z.bx,z.by,z.bz),t.needsUpdate=!0,or.visible=z.phase!=="land"}function gv(i){if(!mi)return;document.getElementById("catch-rarity").textContent=i.rarity.toUpperCase(),document.getElementById("catch-name").textContent=i.name;const t=document.getElementById("catch-blurb");t&&(t.textContent=i.blurb||""),document.getElementById("catch-kind").textContent=Ws(i.kind);const e=document.getElementById("catch-trade");e&&(e.textContent=`${Ou(i)}${i.size?` · ${i.size} cm`:""}`),mi.classList.remove("hidden"),Lr=8,Zn.visible=!0;const n=Math.max(.7,Math.min(2.4,(i.size||40)/40));Zn.scale.setScalar(n),Xu();const r=i.rarity==="Legendary"||i.rarity==="Mythic"||i.rarity==="Epic";ye.catch(r),r&&Bt(`ISLAND CALL · ${i.name}`)}function Yu(){const i=new D(0,0,-1).applyEuler(ct.rotation);for(const t of[3.2,5.4,8.2,11]){const e=ct.position.x+i.x*t,n=ct.position.z+i.z*t,r=ct.position.y+i.y*t,s=Ua(e,n)||Ua(ct.position.x,ct.position.z);if(s?.fish&&Nt.state.found?.[s.id])return{ok:!0,x:e,z:n,secret:s};if(r<1.4&&Re(e,n)<.35)return{ok:!0,x:e,z:n}}return{ok:!1}}function _v(){if(z||Be||!_r||Oe||mi&&!mi.classList.contains("hidden"))return;const i=Yu();if(!i.ok){Bt("Look at the water to cast.");return}const t=Pa(i.x,i.z),e=Pa(ct.position.x,ct.position.z),n=i.secret||Ua(ct.position.x,ct.position.z),r=n?.fish&&Nt.state.found?.[n.id]?{id:n.fish}:t.fish?t:e;if(!n?.fish&&Re(i.x,i.z)>=.35){Bt("Look at the water to cast.");return}const s=Nt.canFish(r.id);if(!s.ok){Bt(s.reason);return}const o=ct.position.clone();z={t:0,phase:"cast",zone:r.id,window:.9+Math.random()*.5,biteAt:1.1+Math.random()*2.2,fromX:o.x,fromY:o.y-.2,fromZ:o.z,tx:i.x,tz:i.z,bx:o.x,by:o.y,bz:o.z,tension:.28,pull:.55+Math.random()*.7,dir:Math.random()*Math.PI*2,progress:0,shake:0,sizeHint:.7+Math.random()*1.6},ye.cast(),qn("cast","F to Cast",8)}function vv(i){if(!z){an.visible=!1;return}const t=Pn(z.bx,z.bz,i);if(z.phase==="cast"){const e=Math.min(1,z.t/.55),n=e*e*(3-2*e);z.bx=z.fromX+(z.tx-z.fromX)*n,z.bz=z.fromZ+(z.tz-z.fromZ)*n,z.by=z.fromY+(t-z.fromY)*n+Math.sin(e*Math.PI)*2.4,an.position.set(z.bx,z.by,z.bz),an.visible=e>.12}else if(z.phase==="bite"||z.phase==="fight")z.by=t-(z.phase==="bite"?.45:.22+z.tension*.3),an.position.set(z.bx,z.by,z.bz),an.visible=z.phase==="fight";else if(z.phase==="land")an.visible=!1;else{const e=Math.sin(i*3.2)*.05;z.by=t+.08+e,an.position.set(z.bx,z.by,z.bz),an.rotation.z=Math.sin(i*2.1)*.18,an.visible=!0}}function xv(i){if(!z){Os(Dn,"idle",0),an.visible=!1,or.visible=!1;return}z.t+=i;const t=performance.now()/1e3;if(Os(Dn,z.phase,z.phase==="fight"?z.tension:z.t),vv(t),mv(),z.phase==="cast")qn("cast","F to Cast",z.t/.55*100),z.t>=.55&&(z.phase="wait",z.t=0,z.bx=z.tx,z.bz=z.tz,Nr(Ni,z.bx,.12,z.bz),Do(Ir,z.bx,.04,z.bz),ye.splash(),qn("wait","F to Reel · waiting",0));else if(z.phase==="wait")z.t%.9<i&&Do(Ir,z.bx,.03,z.bz),qn("wait","F to Reel · waiting",z.t/z.biteAt*100),z.t>=z.biteAt&&(z.phase="bite",z.t=0,z.shake=.18,Nr(Ni,z.bx,.12,z.bz),ye.bite(),qn("bite","F to Reel",100),Bt("F to Reel"));else if(z.phase==="bite")z.shake*=.92,qn("bite","F to Reel",(1-z.t/z.window)*100),z.t>z.window&&(ye.miss(),za("It got away."));else if(z.phase==="fight"){z.dir+=(Math.random()-.5)*i*3.2;const e=!!Ce.KeyF;e?(z.progress+=i*(.34+(1-z.tension)*.22),z.tension+=i*(.18+z.pull*.12)):(z.tension-=i*.22,z.progress-=i*.05),z.tension+=Math.sin(t*7)*i*.08*z.pull,z.tension=Math.max(.08,Math.min(1.15,z.tension));const n=z.pull*(.4+z.tension);le.x+=Math.cos(z.dir)*n*i*3.4,le.z+=Math.sin(z.dir)*n*i*3.4,z.shake=.06+z.tension*.16,z.t%.35<i&&Do(Ir,z.bx,.03,z.bz),Tn.visible=z.tension>.55,Tn.visible&&(Tn.position.set(z.bx+Math.sin(t*8)*.4,z.by-.15,z.bz+Math.cos(t*6)*.4),Tn.scale.setScalar(.7+z.sizeHint*.5),Tn.rotation.y=t*4),qn("fight",e?"HOLD F · don’t snap it":"HOLD F to reel",z.progress*100),z.tension>1?(ye.miss(),za("Line snapped.")):z.progress>=1&&Mv()}else if(z.phase==="land"){const e=Math.min(1,z.t/.7),n=ct.position.x,r=ct.position.z;z.bx=z.tx+(n-z.tx)*e,z.bz=z.tz+(r-z.tz)*e,z.by=Pn(z.bx,z.bz,t)+Math.sin(e*Math.PI)*2.1+e*.6,Tn.visible=!0,Tn.position.set(z.bx,z.by,z.bz),Tn.rotation.z=-e*1.2,qn("land","FISH ON",100),e>=1&&yv()}}function Mv(){z.phase="land",z.t=0,z.tx=z.bx,z.tz=z.bz,Nr(Ni,z.bx,.2,z.bz),ye.reel()}function yv(){const i=z.zone,t=z.sizeHint;za();const e=Nt.rollCatch(i,tr()?.id);if(!e.ok){Bt(e.reason);return}e.item&&t&&(e.item.size=Math.max(e.item.size||20,Math.round(t*48))),un(),gv(e.item),Bt(`${e.item.rarity} · ${e.item.name}${e.item.size?` · ${e.item.size}cm`:""}`)}function ac(){if(_r){if(!z){_v();return}z.phase==="bite"&&(z.phase="fight",z.t=0,z.tension=.34,z.progress=0,ye.reel(),qn("fight","HOLD F to reel",0),Nr(Ni,z.bx,.12,z.bz))}}function Vl(){return Fr?1.05:1.62}function bi(i,t){i&&i.textContent!==t&&(i.textContent=t)}function Sv(){const i=ct.position;ue=null;let t=99;for(const s of M_){const o=Math.hypot(i.x-s.x,i.z-s.z);o<s.r&&o<t&&(t=o,ue=s)}const e=Pa(i.x,i.z),n=e.hint||(e.fish?"Fish here":"Explore");if(bi(j_,e.label),bi(Q_,n),bi(tv,e.label),bi(ev,n),e.id!==Nl&&(Nl=e.id,_r&&Cs&&(bi(Cs,`ENTERING  ${e.label}`),Cs.classList.remove("hidden"),Ps=2.4)),Oe){bi(Ul,"Sailing…");return}let r="";Be||(z?z.phase==="cast"?r="F to Cast":z.phase==="fight"?r="HOLD F · let off if it screams":z.phase==="land"?r="FISH ON":r="F to Reel":ue?r=ue.label:Yu().ok&&Nt.state.equipped!=="none"&&(r="F to Cast")),bi(Ul,r)}function $u(i,t){Qe.x-=i*.00225,Qe.y-=t*.00225,Qe.y=Math.max(-1.2,Math.min(1.2,Qe.y)),ct.rotation.y=Qe.x,ct.rotation.x=Qe.y,z?.shake&&(ct.rotation.x+=(Math.random()-.5)*z.shake,ct.rotation.y+=(Math.random()-.5)*z.shake*.6)}function Gl(i,t){Oe||z||(Oe={t:0,dur:7.2,fromX:ct.position.x,fromZ:ct.position.z,toX:i.x,toZ:i.z,label:t},Qe.x=Math.atan2(i.x-ct.position.x,-(i.z-ct.position.z)),ct.rotation.y=Qe.x,Bt(`Sailing to ${t}`))}function Ev(i){Oe.t+=i;const t=Math.min(1,Oe.t/Oe.dur),e=t*t*(3-2*t);ct.position.x=Oe.fromX+(Oe.toX-Oe.fromX)*e,ct.position.z=Oe.fromZ+(Oe.toZ-Oe.fromZ)*e;const n=performance.now()/1e3;if(ct.position.y=Pn(ct.position.x,ct.position.z,n)+1.42,t>=1){const r=Oe.label;Oe=null,r==="Great Saint Alon"&&Nt.markEmber(),Bt(`Landed · ${r}`),un()}}let Wl=0;function bv(i){if(Oe){Ev(i);return}const t=performance.now()/1e3,e=Re(ct.position.x,ct.position.z),n=Pn(ct.position.x,ct.position.z,t),r=e<.12,s=Math.max(n,.02),o=r?s:e,a=!!(Ce.ShiftLeft||Ce.ShiftRight),c=(a?8.4:5.1)*(Fr?.42:1)*(r?.55:1)*(z?.32:1);on.set(0,0,0),(Ce.KeyW||Ce.ArrowUp)&&(on.z-=1),(Ce.KeyS||Ce.ArrowDown)&&(on.z+=1),(Ce.KeyA||Ce.ArrowLeft)&&(on.x-=1),(Ce.KeyD||Ce.ArrowRight)&&(on.x+=1),Fs&&(on.x+=Je.x,on.z+=Je.y),on.lengthSq()>1&&on.normalize(),on.applyAxisAngle(av.set(0,1,0),Qe.x);const l=r?9:11;le.x+=(on.x*c-le.x)*Math.min(1,i*l),le.z+=(on.z*c-le.z)*Math.min(1,i*l),Ce._jump&&(ct.position.y<=o+Vl()+.1&&(le.y=r?4.2:6.4,ye.jump()),Ce._jump=!1),le.y-=(r?9:20)*i;let h=ct.position.x+le.x*i,m=ct.position.z+le.z*i;if(Nt.state.boat){const w=Math.hypot(h,m),R=Math.hypot(h-Ut.x,m-Ut.z),S=210;if(w>S&&R>Ut.r+18){if(w<R){const v=S/w;h*=v,m*=v}le.x*=.2,le.z*=.2}m<-88&&(m=-88,le.z*=.1)}else{const w=Math.hypot(h,m),R=je+1.6;if(w>R){const S=R/w;h*=S,m*=S,le.x*=.15,le.z*=.15;const v=performance.now();v-Wl>2200&&(Wl=v,Bt("Need the Island Skiff to leave Pump Island."))}}const p=Bg(h,m);(p.x!==h||p.z!==m)&&(le.x*=.2,le.z*=.2),ct.position.x=p.x,ct.position.z=p.z,ct.position.y+=le.y*i;const f=Re(ct.position.x,ct.position.z),g=f<.12,_=Pn(ct.position.x,ct.position.z,t),d=(g?Math.max(_,.02):f)+Vl(),u=ct.position.y<=d+.12,M=d-ct.position.y;g&&le.y<=1.2?(ct.position.y+=M*Math.min(1,i*6.5),le.y*=.72):M>0&&M<.42&&le.y<=.6?(ct.position.y+=Math.min(M,i*8.5),le.y=Math.max(le.y,0)):ct.position.y<d&&(ct.position.y=d,le.y=0),u&&!Bl&&r&&(Nr(Ni,ct.position.x,.1,ct.position.z),ye.splash()),Bl=u,ct.rotation.y=Qe.x,ct.rotation.x=Qe.y,z?.shake&&(ct.rotation.x+=(Math.random()-.5)*z.shake,ct.rotation.y+=(Math.random()-.5)*z.shake*.55);const b=Math.hypot(le.x,le.z)>.4&&u;b&&(Oo+=i*(a?12:8.2),Fo+=i,Fo>(a?.32:.44)&&(Fo=0,r?ye.splash():ye.step()));const x=b?Math.sin(Oo)*.032:0,P=b?Math.cos(Oo*.5)*.014:0;Dn&&(Dn.position.set(P,x-(Fr?.08:0),0),z||Os(Dn,"idle",t)),Ms+=((a&&b?80:72)-Ms)*Math.min(1,i*6),Math.abs(ct.fov-Ms)>.05&&(ct.fov=Ms,ct.updateProjectionMatrix()),zl&&(zl.style.transform=`rotate(${-Qe.x}rad)`)}addEventListener("resize",()=>{ct.aspect=innerWidth/innerHeight,ct.updateProjectionMatrix(),Oi.setSize(innerWidth,innerHeight)});addEventListener("keydown",i=>{Ce[i.code]=!0,i.code==="KeyC"&&(Fr=!0),i.code==="Space"&&(i.preventDefault(),Ce._jump=!0),i.code==="KeyE"&&qu(),i.code==="KeyF"&&ac(),i.code==="KeyI"&&(Be==="inv"?yn():En("inv")),i.code==="KeyB"&&(Be==="shop"?yn():En("shop")),i.code==="KeyJ"&&(Be==="book"?yn():En("book")),i.code==="Tab"&&(i.preventDefault(),Be==="board"?yn():En("board")),i.code==="Escape"&&(yn(),document.exitPointerLock?.())});addEventListener("keyup",i=>{Ce[i.code]=!1,i.code==="KeyC"&&(Fr=!1)});document.addEventListener("mousemove",i=>{!qs||Be||$u(i.movementX,i.movementY)});Ui.addEventListener("click",()=>{!_r||Be||mi&&!mi.classList.contains("hidden")||(!qs&&!Fs?Ui.requestPointerLock():ac())});document.addEventListener("pointerlockchange",()=>{qs=document.pointerLockElement===Ui});function wv(){const i=document.getElementById("stick"),t=i.querySelector("i"),e=(o,a)=>{const c=i.getBoundingClientRect(),l=o-(c.left+c.width/2),h=a-(c.top+c.height/2),m=40,p=Math.hypot(l,h)||1,f=Math.min(1,p/m);Je.x=l/p*f,Je.y=h/p*f,t.style.transform=`translate(${Je.x*m}px, ${Je.y*m}px)`};i.addEventListener("pointerdown",o=>{Je.active=!0,Je.id=o.pointerId,i.setPointerCapture(o.pointerId),e(o.clientX,o.clientY)}),i.addEventListener("pointermove",o=>{!Je.active||o.pointerId!==Je.id||e(o.clientX,o.clientY)});const n=()=>{Je.active=!1,Je.x=0,Je.y=0,t.style.transform=""};i.addEventListener("pointerup",n),i.addEventListener("pointercancel",n),Hu.addEventListener("click",o=>{const a=o.target.closest("button");a&&(a.dataset.act==="jump"&&(Ce._jump=!0),a.dataset.act==="use"&&qu(),a.dataset.act==="cast"&&ac())});let r=0,s=0;Ui.addEventListener("touchstart",o=>{const a=o.changedTouches[0];a.clientX<innerWidth*.42||(r=a.clientX,s=a.clientY)},{passive:!0}),Ui.addEventListener("touchmove",o=>{const a=o.changedTouches[0];a.clientX<innerWidth*.42||($u(a.clientX-r,a.clientY-s),r=a.clientX,s=a.clientY)},{passive:!0})}document.getElementById("catch-keep")?.addEventListener("click",()=>{mi.classList.add("hidden"),Zn.visible=!1,Lr=0,ye.ui()});document.getElementById("enter-btn").addEventListener("click",()=>{Bu.classList.add("hidden"),Z_.classList.remove("hidden"),_r=!0,O_(),F_(),ye.ui(),Fs&&Hu.classList.remove("hidden"),un(),Fs||Ui.requestPointerLock()});document.querySelector(".hotbar")?.addEventListener("click",i=>{const t=i.target.closest("button");if(!t)return;const e=t.dataset.hot;e==="shop"&&(Be==="shop"?yn():En("shop")),e==="inv"&&(Be==="inv"?yn():En("inv")),e==="book"&&(Be==="book"?yn():En("book")),e==="board"&&(Be==="board"?yn():En("board"))});function Xl(){J_.classList.add("hidden"),Bu.classList.remove("hidden")}if(matchMedia("(prefers-reduced-motion: reduce)").matches)Xl();else{const i=["Waking the lighthouse…","Stretching lanky fishermen…","Tuning the catch tables…","Preview wallet standing by…","Island is ready."];let t=0;const e=setInterval(()=>{t+=1;const n=Math.min(100,t*22);Ll&&(Ll.style.width=`${n}%`),Il&&(Il.textContent=i[Math.min(i.length-1,t-1)]),n>=100&&(clearInterval(e),setTimeout(Xl,280))},220)}wv();un();let ql=performance.now(),zo=0,Bo=0,ko=0;function Ku(i){const t=Math.min(.05,(i-ql)/1e3);if(ql=i,_r&&(bv(t),xv(t),zo+=t,Bo+=t,zo>.08&&(zo=0,Sv()),Hl&&Bo>.05&&(Bo=0,Hl.draw(ct.position.x,ct.position.z,Qe.x))),ko+=t,ko>.12){ko=0;const m=i/1e3;for(const p of Te.people){const f=p.position.x-ct.position.x,g=p.position.z-ct.position.z;f*f+g*g<900&&wg(p,m,!!p.userData.moving,p.userData.archetype==="FISHERMAN")}}const e=i/1e3,n=zu(e),r=vn.weather==="rain"||vn.weather==="storm"||tr()?.weather==="storm",s=vn.weather==="fog"||vn.weather==="storm"||tr()?.weather==="fog",o=vn.weather==="storm"||tr()?.id==="storm";if($_(vn,{dt:t,t:e,camera:ct,toast:Bt,night:n.night||tr()?.id==="blood_moon",rough:o,raining:r,foggy:s}),T_(ys,{dt:t,t:e,toast:Bt,people:Te.people,onStart:m=>{vn.patrol=Te.people.filter(f=>f.userData.path),m.weather&&(vn.weather=m.weather);const p=document.getElementById("event-banner");p&&(p.classList.remove("hidden"),document.getElementById("event-title").textContent=m.title,document.getElementById("event-hint").textContent=`${m.hint} · local preview`)},onEnd:()=>{document.getElementById("event-banner")?.classList.add("hidden")}}),ys.active){const m=Math.max(0,ys.active.left),p=document.getElementById("event-hint");p&&(p.textContent=`${ys.active.hint} · ${Math.ceil(m/60)}m left · local`)}const a=n.elev,c=n.dusk,h=tr()?.sky||(c?12876362:n.night?1384499:6988748);if(Le.background.setHex(h),Le.fog.color.setHex(h),Le.fog.density=s?.028:n.night?.016:.011,Gu.intensity=n.night?.28:c?.7:1.2,zs.intensity=n.night?.08:c?.7:.85,zs.position.set(Math.cos(n.ang)*70,Math.max(-12,a*62),Math.sin(n.ang)*40),Te.ocean?.material?.uniforms?.uAmp&&(Te.ocean.material.uniforms.uAmp.value=o?2.15:1),Te.lighthouse){const m=Te.lighthouse.children.find(p=>p.material?.emissive);m?.material&&(m.material.emissiveIntensity=n.night?1.4:.22)}Ig(Ni,t),Ng(Ir,t),Te.ocean?.material?.uniforms?.uTime&&(Te.ocean.material.uniforms.uTime.value=e),Te.duck&&(Te.duck.position.y=Pn(Te.duck.position.x,Te.duck.position.z,e)+.1,Te.duck.rotation.z=Math.sin(e*1.7)*.2),Zn.visible&&(Zn.rotation.y+=t*1.6,Zn.position.y=-.12+Math.sin(i/220)*.02),Ds>0&&(Ds-=t,Ds<=0&&Na.classList.add("hidden")),Ps>0&&(Ps-=t,Ps<=0&&Cs?.classList.add("hidden")),Lr>0&&(Lr-=t,Lr<=0&&(mi?.classList.add("hidden"),Zn.visible=!1)),Oi.render(Le,ct),requestAnimationFrame(Ku)}requestAnimationFrame(Ku);
