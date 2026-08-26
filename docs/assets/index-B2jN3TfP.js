(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ho="170",eh=0,vc=1,nh=2,Kl=1,ih=2,$n=3,_i=0,We=1,Pn=2,gi=0,sr=1,xc=2,Mc=3,yc=4,rh=5,Ci=100,sh=101,ah=102,oh=103,ch=104,lh=200,uh=201,hh=202,dh=203,Va=204,Ga=205,fh=206,ph=207,mh=208,gh=209,_h=210,vh=211,xh=212,Mh=213,yh=214,Wa=0,Xa=1,qa=2,lr=3,Ya=4,$a=5,Ka=6,Za=7,Vo=0,Sh=1,Eh=2,Qn=0,bh=1,wh=2,Th=3,Ah=4,Rh=5,Ch=6,Ph=7,Zl=300,ur=301,hr=302,Ja=303,ja=304,Hs=306,Qa=1e3,Di=1001,to=1002,Tn=1003,Dh=1004,Yr=1005,Dn=1006,Zs=1007,Li=1008,ni=1009,Jl=1010,jl=1011,Fr=1012,Go=1013,Ii=1014,Jn=1015,Hr=1016,Wo=1017,Xo=1018,dr=1020,Ql=35902,tu=1021,eu=1022,bn=1023,nu=1024,iu=1025,ar=1026,fr=1027,ru=1028,qo=1029,su=1030,Yo=1031,$o=1033,bs=33776,ws=33777,Ts=33778,As=33779,eo=35840,no=35841,io=35842,ro=35843,so=36196,ao=37492,oo=37496,co=37808,lo=37809,uo=37810,ho=37811,fo=37812,po=37813,mo=37814,go=37815,_o=37816,vo=37817,xo=37818,Mo=37819,yo=37820,So=37821,Rs=36492,Eo=36494,bo=36495,au=36283,wo=36284,To=36285,Ao=36286,Lh=3200,Ih=3201,ou=0,Uh=1,pi="",Be="srgb",mr="srgb-linear",Vs="linear",re="srgb",Bi=7680,Sc=519,Nh=512,Oh=513,Fh=514,cu=515,zh=516,Bh=517,kh=518,Hh=519,Ec=35044,bc="300 es",jn=2e3,Us=2001;class gr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,Ro=180/Math.PI;function Vr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function De(n,t,e){return Math.max(t,Math.min(e,n))}function Vh(n,t){return(n%t+t)%t}function js(n,t,e){return(1-e)*n+e*t}function Sr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ye(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,i,r,s,a,o,c,l){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],m=i[7],p=i[2],f=i[5],g=i[8],_=r[0],d=r[3],u=r[6],M=r[1],b=r[4],x=r[7],P=r[2],A=r[5],w=r[8];return s[0]=a*_+o*M+c*P,s[3]=a*d+o*b+c*A,s[6]=a*u+o*x+c*w,s[1]=l*_+h*M+m*P,s[4]=l*d+h*b+m*A,s[7]=l*u+h*x+m*w,s[2]=p*_+f*M+g*P,s[5]=p*d+f*b+g*A,s[8]=p*u+f*x+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],m=h*a-o*l,p=o*c-h*s,f=l*s-a*c,g=e*m+i*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=m*_,t[1]=(r*l-h*i)*_,t[2]=(o*i-r*a)*_,t[3]=p*_,t[4]=(h*e-r*c)*_,t[5]=(r*s-o*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Qs.makeScale(t,e)),this}rotate(t){return this.premultiply(Qs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qs=new Gt;function lu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ns(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Gh(){const n=Ns("canvas");return n.style.display="block",n}const wc={};function Pr(n){n in wc||(wc[n]=!0,console.warn(n))}function Wh(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Xh(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qh(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(n.r=ti(n.r),n.g=ti(n.g),n.b=ti(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(n.r=or(n.r),n.g=or(n.g),n.b=or(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===pi?Vs:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function or(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Tc=[.64,.33,.3,.6,.15,.06],Ac=[.2126,.7152,.0722],Rc=[.3127,.329],Cc=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pc=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[mr]:{primaries:Tc,whitePoint:Rc,transfer:Vs,toXYZ:Cc,fromXYZ:Pc,luminanceCoefficients:Ac,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:Tc,whitePoint:Rc,transfer:re,toXYZ:Cc,fromXYZ:Pc,luminanceCoefficients:Ac,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});let ki;class Yh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=Ns("canvas")),ki.width=t.width,ki.height=t.height;const i=ki.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ns("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ti(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ti(e[i]/255)*255):e[i]=ti(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $h=0;class uu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Vr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ta(r[a].image)):s.push(ta(r[a]))}else s=ta(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kh=0;class Xe extends gr{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,i=Di,r=Di,s=Dn,a=Li,o=bn,c=ni,l=Xe.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Vr(),this.name="",this.source=new uu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qa:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case to:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qa:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case to:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Zl;Xe.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,i=0,r=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],h=c[4],m=c[8],p=c[1],f=c[5],g=c[9],_=c[2],d=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(m-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(m+_)<.1&&Math.abs(g+d)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,x=(f+1)/2,P=(u+1)/2,A=(h+p)/4,w=(m+_)/4,R=(g+d)/4;return b>x&&b>P?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=A/i,s=w/i):x>P?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=R/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=R/s),this.set(i,r,s,e),this}let M=Math.sqrt((d-g)*(d-g)+(m-_)*(m-_)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(d-g)/M,this.y=(m-_)/M,this.z=(p-h)/M,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zh extends gr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Xe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new uu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Zh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class hu extends Xe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jh extends Xe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],m=i[r+3];const p=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=m;return}if(o===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(m!==_||c!==p||l!==f||h!==g){let d=1-o;const u=c*p+l*f+h*g+m*_,M=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const P=Math.sqrt(b),A=Math.atan2(P,u*M);d=Math.sin(d*A)/P,o=Math.sin(o*A)/P}const x=o*M;if(c=c*d+p*x,l=l*d+f*x,h=h*d+g*x,m=m*d+_*x,d===1-o){const P=1/Math.sqrt(c*c+l*l+h*h+m*m);c*=P,l*=P,h*=P,m*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],m=s[a],p=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+h*m+c*f-l*p,t[e+1]=c*g+h*p+l*m-o*f,t[e+2]=l*g+h*f+o*p-c*m,t[e+3]=h*g-o*m-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),m=o(s/2),p=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=p*h*m+l*f*g,this._y=l*f*m-p*h*g,this._z=l*h*g+p*f*m,this._w=l*h*m-p*f*g;break;case"YXZ":this._x=p*h*m+l*f*g,this._y=l*f*m-p*h*g,this._z=l*h*g-p*f*m,this._w=l*h*m+p*f*g;break;case"ZXY":this._x=p*h*m-l*f*g,this._y=l*f*m+p*h*g,this._z=l*h*g+p*f*m,this._w=l*h*m-p*f*g;break;case"ZYX":this._x=p*h*m-l*f*g,this._y=l*f*m+p*h*g,this._z=l*h*g-p*f*m,this._w=l*h*m+p*f*g;break;case"YZX":this._x=p*h*m+l*f*g,this._y=l*f*m+p*h*g,this._z=l*h*g-p*f*m,this._w=l*h*m-p*f*g;break;case"XZY":this._x=p*h*m-l*f*g,this._y=l*f*m-p*h*g,this._z=l*h*g+p*f*m,this._w=l*h*m+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],m=e[10],p=i+o+m;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>m){const f=2*Math.sqrt(1+i-o-m);this._w=(h-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>m){const f=2*Math.sqrt(1+o-i-m);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+m-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*r+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),m=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=a*m+this._w*p,this._x=i*m+this._x*p,this._y=r*m+this._y*p,this._z=s*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*e-s*r),m=2*(s*i-a*e);return this.x=e+c*l+a*m-o*h,this.y=i+c*h+o*l-s*m,this.z=r+c*m+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ea.copy(this).projectOnVector(t),this.sub(ea)}reflect(t){return this.sub(ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new D,Dc=new Gr;class Wr{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$r.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(t.matrixWorld),this.union($r)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),Kr.subVectors(this.max,Er),Hi.subVectors(t.a,Er),Vi.subVectors(t.b,Er),Gi.subVectors(t.c,Er),oi.subVectors(Vi,Hi),ci.subVectors(Gi,Vi),xi.subVectors(Hi,Gi);let e=[0,-oi.z,oi.y,0,-ci.z,ci.y,0,-xi.z,xi.y,oi.z,0,-oi.x,ci.z,0,-ci.x,xi.z,0,-xi.x,-oi.y,oi.x,0,-ci.y,ci.x,0,-xi.y,xi.x,0];return!na(e,Hi,Vi,Gi,Kr)||(e=[1,0,0,0,1,0,0,0,1],!na(e,Hi,Vi,Gi,Kr))?!1:(Zr.crossVectors(oi,ci),e=[Zr.x,Zr.y,Zr.z],na(e,Hi,Vi,Gi,Kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new D,new D,new D,new D,new D,new D,new D,new D],gn=new D,$r=new Wr,Hi=new D,Vi=new D,Gi=new D,oi=new D,ci=new D,xi=new D,Er=new D,Kr=new D,Zr=new D,Mi=new D;function na(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Mi.fromArray(n,s);const o=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),c=t.dot(Mi),l=e.dot(Mi),h=i.dot(Mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const jh=new Wr,br=new D,ia=new D;class Gs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):jh.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);const e=br.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(br,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(ia)),this.expandByPoint(br.copy(t.center).sub(ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new D,ra=new D,Jr=new D,li=new D,sa=new D,jr=new D,aa=new D;class du{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ra.copy(t).add(e).multiplyScalar(.5),Jr.copy(e).sub(t).normalize(),li.copy(this.origin).sub(ra);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Jr),o=li.dot(this.direction),c=-li.dot(Jr),l=li.lengthSq(),h=Math.abs(1-a*a);let m,p,f,g;if(h>0)if(m=a*c-o,p=a*o-c,g=s*h,m>=0)if(p>=-g)if(p<=g){const _=1/h;m*=_,p*=_,f=m*(m+a*p+2*o)+p*(a*m+p+2*c)+l}else p=s,m=Math.max(0,-(a*p+o)),f=-m*m+p*(p+2*c)+l;else p=-s,m=Math.max(0,-(a*p+o)),f=-m*m+p*(p+2*c)+l;else p<=-g?(m=Math.max(0,-(-a*s+o)),p=m>0?-s:Math.min(Math.max(-s,-c),s),f=-m*m+p*(p+2*c)+l):p<=g?(m=0,p=Math.min(Math.max(-s,-c),s),f=p*(p+2*c)+l):(m=Math.max(0,-(a*s+o)),p=m>0?s:Math.min(Math.max(-s,-c),s),f=-m*m+p*(p+2*c)+l);else p=a>0?-s:s,m=Math.max(0,-(a*p+o)),f=-m*m+p*(p+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(ra).addScaledVector(Jr,p),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const i=Gn.dot(this.direction),r=Gn.dot(Gn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,p=this.origin;return l>=0?(i=(t.min.x-p.x)*l,r=(t.max.x-p.x)*l):(i=(t.max.x-p.x)*l,r=(t.min.x-p.x)*l),h>=0?(s=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(t.min.z-p.z)*m,c=(t.max.z-p.z)*m):(o=(t.max.z-p.z)*m,c=(t.min.z-p.z)*m),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,i,r,s){sa.subVectors(e,t),jr.subVectors(i,t),aa.crossVectors(sa,jr);let a=this.direction.dot(aa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,t);const c=o*this.direction.dot(jr.crossVectors(li,jr));if(c<0)return null;const l=o*this.direction.dot(sa.cross(li));if(l<0||c+l>a)return null;const h=-o*li.dot(aa);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,i,r,s,a,o,c,l,h,m,p,f,g,_,d){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,h,m,p,f,g,_,d)}set(t,e,i,r,s,a,o,c,l,h,m,p,f,g,_,d){const u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=m,u[14]=p,u[3]=f,u[7]=g,u[11]=_,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Wi.setFromMatrixColumn(t,0).length(),s=1/Wi.setFromMatrixColumn(t,1).length(),a=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),m=Math.sin(s);if(t.order==="XYZ"){const p=a*h,f=a*m,g=o*h,_=o*m;e[0]=c*h,e[4]=-c*m,e[8]=l,e[1]=f+g*l,e[5]=p-_*l,e[9]=-o*c,e[2]=_-p*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const p=c*h,f=c*m,g=l*h,_=l*m;e[0]=p+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*m,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*h,f=c*m,g=l*h,_=l*m;e[0]=p-_*o,e[4]=-a*m,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-p*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*h,f=a*m,g=o*h,_=o*m;e[0]=c*h,e[4]=g*l-f,e[8]=p*l+_,e[1]=c*m,e[5]=_*l+p,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-p*m,e[8]=g*m+f,e[1]=m,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*m+g,e[10]=p-_*m}else if(t.order==="XZY"){const p=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-m,e[8]=l*h,e[1]=p*m+_,e[5]=a*h,e[9]=f*m-g,e[2]=g*m-f,e[6]=o*h,e[10]=_*m+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qh,t,td)}lookAt(t,e,i){const r=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),ui.crossVectors(i,Je),ui.lengthSq()===0&&(Math.abs(i.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),ui.crossVectors(i,Je)),ui.normalize(),Qr.crossVectors(Je,ui),r[0]=ui.x,r[4]=Qr.x,r[8]=Je.x,r[1]=ui.y,r[5]=Qr.y,r[9]=Je.y,r[2]=ui.z,r[6]=Qr.z,r[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],m=i[5],p=i[9],f=i[13],g=i[2],_=i[6],d=i[10],u=i[14],M=i[3],b=i[7],x=i[11],P=i[15],A=r[0],w=r[4],R=r[8],S=r[12],v=r[1],C=r[5],G=r[9],L=r[13],B=r[2],Y=r[6],q=r[10],tt=r[14],X=r[3],ut=r[7],gt=r[11],Rt=r[15];return s[0]=a*A+o*v+c*B+l*X,s[4]=a*w+o*C+c*Y+l*ut,s[8]=a*R+o*G+c*q+l*gt,s[12]=a*S+o*L+c*tt+l*Rt,s[1]=h*A+m*v+p*B+f*X,s[5]=h*w+m*C+p*Y+f*ut,s[9]=h*R+m*G+p*q+f*gt,s[13]=h*S+m*L+p*tt+f*Rt,s[2]=g*A+_*v+d*B+u*X,s[6]=g*w+_*C+d*Y+u*ut,s[10]=g*R+_*G+d*q+u*gt,s[14]=g*S+_*L+d*tt+u*Rt,s[3]=M*A+b*v+x*B+P*X,s[7]=M*w+b*C+x*Y+P*ut,s[11]=M*R+b*G+x*q+P*gt,s[15]=M*S+b*L+x*tt+P*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],m=t[6],p=t[10],f=t[14],g=t[3],_=t[7],d=t[11],u=t[15];return g*(+s*c*m-r*l*m-s*o*p+i*l*p+r*o*f-i*c*f)+_*(+e*c*f-e*l*p+s*a*p-r*a*f+r*l*h-s*c*h)+d*(+e*l*m-e*o*f-s*a*m+i*a*f+s*o*h-i*l*h)+u*(-r*o*h-e*c*m+e*o*p+r*a*m-i*a*p+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],m=t[9],p=t[10],f=t[11],g=t[12],_=t[13],d=t[14],u=t[15],M=m*d*l-_*p*l+_*c*f-o*d*f-m*c*u+o*p*u,b=g*p*l-h*d*l-g*c*f+a*d*f+h*c*u-a*p*u,x=h*_*l-g*m*l+g*o*f-a*_*f-h*o*u+a*m*u,P=g*m*c-h*_*c-g*o*p+a*_*p+h*o*d-a*m*d,A=e*M+i*b+r*x+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=M*w,t[1]=(_*p*s-m*d*s-_*r*f+i*d*f+m*r*u-i*p*u)*w,t[2]=(o*d*s-_*c*s+_*r*l-i*d*l-o*r*u+i*c*u)*w,t[3]=(m*c*s-o*p*s-m*r*l+i*p*l+o*r*f-i*c*f)*w,t[4]=b*w,t[5]=(h*d*s-g*p*s+g*r*f-e*d*f-h*r*u+e*p*u)*w,t[6]=(g*c*s-a*d*s-g*r*l+e*d*l+a*r*u-e*c*u)*w,t[7]=(a*p*s-h*c*s+h*r*l-e*p*l-a*r*f+e*c*f)*w,t[8]=x*w,t[9]=(g*m*s-h*_*s-g*i*f+e*_*f+h*i*u-e*m*u)*w,t[10]=(a*_*s-g*o*s+g*i*l-e*_*l-a*i*u+e*o*u)*w,t[11]=(h*o*s-a*m*s-h*i*l+e*m*l+a*i*f-e*o*f)*w,t[12]=P*w,t[13]=(h*_*r-g*m*r+g*i*p-e*_*p-h*i*d+e*m*d)*w,t[14]=(g*o*r-a*_*r-g*i*c+e*_*c+a*i*d-e*o*d)*w,t[15]=(a*m*r-h*o*r+h*i*c-e*m*c-a*i*p+e*o*p)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,m=o+o,p=s*l,f=s*h,g=s*m,_=a*h,d=a*m,u=o*m,M=c*l,b=c*h,x=c*m,P=i.x,A=i.y,w=i.z;return r[0]=(1-(_+u))*P,r[1]=(f+x)*P,r[2]=(g-b)*P,r[3]=0,r[4]=(f-x)*A,r[5]=(1-(p+u))*A,r[6]=(d+M)*A,r[7]=0,r[8]=(g+b)*w,r[9]=(d-M)*w,r[10]=(1-(p+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Wi.set(r[0],r[1],r[2]).length();const a=Wi.set(r[4],r[5],r[6]).length(),o=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],_n.copy(this);const l=1/s,h=1/a,m=1/o;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=m,_n.elements[9]*=m,_n.elements[10]*=m,e.setFromRotationMatrix(_n),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=jn){const c=this.elements,l=2*s/(e-t),h=2*s/(i-r),m=(e+t)/(e-t),p=(i+r)/(i-r);let f,g;if(o===jn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Us)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=jn){const c=this.elements,l=1/(e-t),h=1/(i-r),m=1/(a-s),p=(e+t)*l,f=(i+r)*h;let g,_;if(o===jn)g=(a+s)*m,_=-2*m;else if(o===Us)g=s*m,_=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new D,_n=new pe,Qh=new D(0,0,0),td=new D(1,1,1),ui=new D,Qr=new D,Je=new D,Lc=new pe,Ic=new Gr;class Fn{constructor(t=0,e=0,i=0,r=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],m=r[2],p=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-De(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class fu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ed=0;const Uc=new D,Xi=new Gr,Wn=new pe,ts=new D,wr=new D,nd=new D,id=new Gr,Nc=new D(1,0,0),Oc=new D(0,1,0),Fc=new D(0,0,1),zc={type:"added"},rd={type:"removed"},qi={type:"childadded",child:null},oa={type:"childremoved",child:null};class Ae extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new D,e=new Fn,i=new Gr,r=new D(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new Gt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(Nc,t)}rotateY(t){return this.rotateOnAxis(Oc,t)}rotateZ(t){return this.rotateOnAxis(Fc,t)}translateOnAxis(t,e){return Uc.copy(t).applyQuaternion(this.quaternion),this.position.add(Uc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nc,t)}translateY(t){return this.translateOnAxis(Oc,t)}translateZ(t){return this.translateOnAxis(Fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ts.copy(t):ts.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(wr,ts,this.up):Wn.lookAt(ts,wr,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zc),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rd),oa.child=t,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zc),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,id,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const m=c[l];s(t.shapes,m)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),m=a(t.shapes),p=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ae.DEFAULT_UP=new D(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new D,Xn=new D,ca=new D,qn=new D,Yi=new D,$i=new D,Bc=new D,la=new D,ua=new D,ha=new D,da=new ve,fa=new ve,pa=new ve;class Sn{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),vn.subVectors(t,e),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){vn.subVectors(r,e),Xn.subVectors(i,e),ca.subVectors(t,e);const a=vn.dot(vn),o=vn.dot(Xn),c=vn.dot(ca),l=Xn.dot(Xn),h=Xn.dot(ca),m=a*l-o*o;if(m===0)return s.set(0,0,0),null;const p=1/m,f=(l*c-o*h)*p,g=(a*h-o*c)*p;return s.set(1-f-g,g,f)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,qn.x),c.addScaledVector(a,qn.y),c.addScaledVector(o,qn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return da.setScalar(0),fa.setScalar(0),pa.setScalar(0),da.fromBufferAttribute(t,e),fa.fromBufferAttribute(t,i),pa.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(da,s.x),a.addScaledVector(fa,s.y),a.addScaledVector(pa,s.z),a}static isFrontFacing(t,e,i,r){return vn.subVectors(i,e),Xn.subVectors(t,e),vn.cross(Xn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),vn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Sn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Yi.subVectors(r,i),$i.subVectors(s,i),la.subVectors(t,i);const c=Yi.dot(la),l=$i.dot(la);if(c<=0&&l<=0)return e.copy(i);ua.subVectors(t,r);const h=Yi.dot(ua),m=$i.dot(ua);if(h>=0&&m<=h)return e.copy(r);const p=c*m-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Yi,a);ha.subVectors(t,s);const f=Yi.dot(ha),g=$i.dot(ha);if(g>=0&&f<=g)return e.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector($i,o);const d=h*g-f*m;if(d<=0&&m-h>=0&&f-g>=0)return Bc.subVectors(s,r),o=(m-h)/(m-h+(f-g)),e.copy(r).addScaledVector(Bc,o);const u=1/(d+_+p);return a=_*u,o=p*u,e.copy(i).addScaledVector(Yi,a).addScaledVector($i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},es={h:0,s:0,l:0};function ma(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Qt.workingColorSpace){if(t=Vh(t,1),e=De(e,0,1),i=De(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=ma(a,s,t+1/3),this.g=ma(a,s,t),this.b=ma(a,s,t-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(t,e=Be){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const i=pu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Qt.fromWorkingColorSpace(Fe.copy(this),t),Math.round(De(Fe.r*255,0,255))*65536+Math.round(De(Fe.g*255,0,255))*256+Math.round(De(Fe.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Fe.copy(this),e);const i=Fe.r,r=Fe.g,s=Fe.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const m=a-o;switch(l=h<=.5?m/(a+o):m/(2-a-o),a){case i:c=(r-s)/m+(r<s?6:0);break;case r:c=(s-i)/m+2;break;case s:c=(i-r)/m+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Be){Qt.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,i=Fe.g,r=Fe.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(es);const i=js(hi.h,es.h,e),r=js(hi.s,es.s,e),s=js(hi.l,es.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new wt;wt.NAMES=pu;let sd=0;class _r extends gr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Vr(),this.name="",this.blending=sr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Va&&(i.blendSrc=this.blendSrc),this.blendDst!==Ga&&(i.blendDst=this.blendDst),this.blendEquation!==Ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nn extends _r{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new D,ns=new Mt;class Nn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ec,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ns.fromBufferAttribute(this,e),ns.applyMatrix3(t),this.setXY(e,ns.x,ns.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ec&&(t.usage=this.usage),t}}class mu extends Nn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class gu extends Nn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class se extends Nn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ad=0;const an=new pe,ga=new Ae,Ki=new D,je=new Wr,Tr=new Wr,we=new D;class He extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lu(t)?gu:mu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Gt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,i){return an.makeTranslation(t,e,i),this.applyMatrix4(an),this}scale(t,e,i){return an.makeScale(t,e,i),this.applyMatrix4(an),this}lookAt(t){return ga.lookAt(t),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];je.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Tr.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(je.min,Tr.min),je.expandByPoint(we),we.addVectors(je.max,Tr.max),je.expandByPoint(we)):(je.expandByPoint(Tr.min),je.expandByPoint(Tr.max))}je.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)we.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(we));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)we.fromBufferAttribute(o,l),c&&(Ki.fromBufferAttribute(t,l),we.add(Ki)),r=Math.max(r,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<i.count;R++)o[R]=new D,c[R]=new D;const l=new D,h=new D,m=new D,p=new Mt,f=new Mt,g=new Mt,_=new D,d=new D;function u(R,S,v){l.fromBufferAttribute(i,R),h.fromBufferAttribute(i,S),m.fromBufferAttribute(i,v),p.fromBufferAttribute(s,R),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,v),h.sub(l),m.sub(l),f.sub(p),g.sub(p);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(m,-f.y).multiplyScalar(C),d.copy(m).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[R].add(_),o[S].add(_),o[v].add(_),c[R].add(d),c[S].add(d),c[v].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,S=M.length;R<S;++R){const v=M[R],C=v.start,G=v.count;for(let L=C,B=C+G;L<B;L+=3)u(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const b=new D,x=new D,P=new D,A=new D;function w(R){P.fromBufferAttribute(r,R),A.copy(P);const S=o[R];b.copy(S),b.sub(P.multiplyScalar(P.dot(S))).normalize(),x.crossVectors(A,S);const C=x.dot(c[R])<0?-1:1;a.setXYZW(R,b.x,b.y,b.z,C)}for(let R=0,S=M.length;R<S;++R){const v=M[R],C=v.start,G=v.count;for(let L=C,B=C+G;L<B;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);const r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,h=new D,m=new D;if(t)for(let p=0,f=t.count;p<f;p+=3){const g=t.getX(p+0),_=t.getX(p+1),d=t.getX(p+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,d),h.subVectors(a,s),m.subVectors(r,s),h.cross(m),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,d),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,s),m.subVectors(r,s),h.cross(m),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,m=o.normalized,p=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,d=c.length;_<d;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let u=0;u<h;u++)p[g++]=l[f++]}return new Nn(p,h,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,m=l.length;h<m;h++){const p=l[h],f=t(p,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let m=0,p=l.length;m<p;m++){const f=l[m];h.push(f.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],m=s[l];for(let p=0,f=m.length;p<f;p++)h.push(m[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kc=new pe,yi=new du,is=new Gs,Hc=new D,rs=new D,ss=new D,as=new D,_a=new D,os=new D,Vc=new D,cs=new D;class nt extends Ae{constructor(t=new He,e=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){os.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],m=s[c];h!==0&&(_a.fromBufferAttribute(m,t),a?os.addScaledVector(_a,h):os.addScaledVector(_a.sub(e),h))}e.add(os)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(s),yi.copy(t.ray).recast(t.near),!(is.containsPoint(yi.origin)===!1&&(yi.intersectSphere(is,Hc)===null||yi.origin.distanceToSquared(Hc)>(t.far-t.near)**2))&&(kc.copy(s).invert(),yi.copy(t.ray).applyMatrix4(kc),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,m=s.attributes.normal,p=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const d=p[g],u=a[d.materialIndex],M=Math.max(d.start,f.start),b=Math.min(o.count,Math.min(d.start+d.count,f.start+f.count));for(let x=M,P=b;x<P;x+=3){const A=o.getX(x),w=o.getX(x+1),R=o.getX(x+2);r=ls(this,u,t,i,l,h,m,A,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let d=g,u=_;d<u;d+=3){const M=o.getX(d),b=o.getX(d+1),x=o.getX(d+2);r=ls(this,a,t,i,l,h,m,M,b,x),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const d=p[g],u=a[d.materialIndex],M=Math.max(d.start,f.start),b=Math.min(c.count,Math.min(d.start+d.count,f.start+f.count));for(let x=M,P=b;x<P;x+=3){const A=x,w=x+1,R=x+2;r=ls(this,u,t,i,l,h,m,A,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let d=g,u=_;d<u;d+=3){const M=d,b=d+1,x=d+2;r=ls(this,a,t,i,l,h,m,M,b,x),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function od(n,t,e,i,r,s,a,o){let c;if(t.side===We?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===_i,o),c===null)return null;cs.copy(o),cs.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(cs);return l<e.near||l>e.far?null:{distance:l,point:cs.clone(),object:n}}function ls(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,rs),n.getVertexPosition(c,ss),n.getVertexPosition(l,as);const h=od(n,t,e,i,rs,ss,as,Vc);if(h){const m=new D;Sn.getBarycoord(Vc,rs,ss,as,m),r&&(h.uv=Sn.getInterpolatedAttribute(r,o,c,l,m,new Mt)),s&&(h.uv1=Sn.getInterpolatedAttribute(s,o,c,l,m,new Mt)),a&&(h.normal=Sn.getInterpolatedAttribute(a,o,c,l,m,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new D,materialIndex:0};Sn.getNormal(rs,ss,as,p.normal),h.face=p,h.barycoord=m}return h}class et extends He{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],m=[];let p=0,f=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(m,2));function g(_,d,u,M,b,x,P,A,w,R,S){const v=x/w,C=P/R,G=x/2,L=P/2,B=A/2,Y=w+1,q=R+1;let tt=0,X=0;const ut=new D;for(let gt=0;gt<q;gt++){const Rt=gt*C-L;for(let qt=0;qt<Y;qt++){const ae=qt*v-G;ut[_]=ae*M,ut[d]=Rt*b,ut[u]=B,l.push(ut.x,ut.y,ut.z),ut[_]=0,ut[d]=0,ut[u]=A>0?1:-1,h.push(ut.x,ut.y,ut.z),m.push(qt/w),m.push(1-gt/R),tt+=1}}for(let gt=0;gt<R;gt++)for(let Rt=0;Rt<w;Rt++){const qt=p+Rt+Y*gt,ae=p+Rt+Y*(gt+1),K=p+(Rt+1)+Y*(gt+1),st=p+(Rt+1)+Y*gt;c.push(qt,ae,st),c.push(ae,K,st),X+=6}o.addGroup(f,X,S),f+=X,p+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ve(n){const t={};for(let e=0;e<n.length;e++){const i=pr(n[e]);for(const r in i)t[r]=i[r]}return t}function cd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function _u(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const ld={clone:pr,merge:Ve};var ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends _r{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class vu extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new D,Gc=new Mt,Wc=new Mt;class ln extends vu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,Gc,Wc),e.subVectors(Wc,Gc)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Js*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zi=-90,Ji=1;class dd extends Ae{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(Zi,Ji,t,e);r.layers=this.layers,this.add(r);const s=new ln(Zi,Ji,t,e);s.layers=this.layers,this.add(s);const a=new ln(Zi,Ji,t,e);a.layers=this.layers,this.add(a);const o=new ln(Zi,Ji,t,e);o.layers=this.layers,this.add(o);const c=new ln(Zi,Ji,t,e);c.layers=this.layers,this.add(c);const l=new ln(Zi,Ji,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Us)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,m=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(m,p,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class xu extends Xe{constructor(t,e,i,r,s,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ur,super(t,e,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fd extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new xu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new et(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:gi});s.uniforms.tEquirect.value=e;const a=new nt(r,s),o=e.minFilter;return e.minFilter===Li&&(e.minFilter=Dn),new dd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const va=new D,pd=new D,md=new Gt;class Ai{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=va.subVectors(i,e).cross(pd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(va),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||md.getNormalMatrix(t),r=this.coplanarPoint(va).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Gs,us=new D;class Ko{constructor(t=new Ai,e=new Ai,i=new Ai,r=new Ai,s=new Ai,a=new Ai){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=jn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],m=r[6],p=r[7],f=r[8],g=r[9],_=r[10],d=r[11],u=r[12],M=r[13],b=r[14],x=r[15];if(i[0].setComponents(c-s,p-l,d-f,x-u).normalize(),i[1].setComponents(c+s,p+l,d+f,x+u).normalize(),i[2].setComponents(c+a,p+h,d+g,x+M).normalize(),i[3].setComponents(c-a,p-h,d-g,x-M).normalize(),i[4].setComponents(c-o,p-m,d-_,x-b).normalize(),e===jn)i[5].setComponents(c+o,p+m,d+_,x+b).normalize();else if(e===Us)i[5].setComponents(o,m,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(us.x=r.normal.x>0?t.max.x:t.min.x,us.y=r.normal.y>0?t.max.y:t.min.y,us.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mu(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function gd(n){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,m=l.byteLength,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,c,l){const h=c.array,m=c.updateRanges;if(n.bindBuffer(l,o),m.length===0)n.bufferSubData(l,0,h);else{m.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<m.length;f++){const g=m[p],_=m[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,m[p]=_)}m.length=p+1;for(let f=0,g=m.length;f<g;f++){const _=m[f];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class fn extends He{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,m=t/o,p=e/c,f=[],g=[],_=[],d=[];for(let u=0;u<h;u++){const M=u*p-a;for(let b=0;b<l;b++){const x=b*m-s;g.push(x,-M,0),_.push(0,0,1),d.push(b/o),d.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<o;M++){const b=M+l*u,x=M+l*(u+1),P=M+1+l*(u+1),A=M+1+l*u;f.push(b,x,A),f.push(x,P,A)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fn(t.width,t.height,t.widthSegments,t.heightSegments)}}var _d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vd=`#ifdef USE_ALPHAHASH
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
#endif`,xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ed=`#ifdef USE_AOMAP
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
#endif`,bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`#ifdef USE_BATCHING
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
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pd=`#ifdef USE_IRIDESCENCE
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
#endif`,Dd=`#ifdef USE_BUMPMAP
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kd=`#define PI 3.141592653589793
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
} // validated`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vd=`vec3 transformedNormal = objectNormal;
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
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",$d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sf=`#ifdef USE_GRADIENTMAP
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
}`,af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lf=`uniform bool receiveShadow;
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
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mf=`PhysicalMaterial material;
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
#endif`,gf=`struct PhysicalMaterial {
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
}`,_f=`
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
#endif`,vf=`#if defined( RE_IndirectDiffuse )
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
#endif`,xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ef=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Af=`#if defined( USE_POINTS_UV )
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
#endif`,Rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
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
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Of=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kf=`#ifdef USE_NORMALMAP
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
#endif`,Hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,np=`float getShadowMask() {
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
}`,ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hp=`#ifdef USE_TRANSMISSION
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
#endif`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vp=`uniform sampler2D t2D;
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`#include <common>
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
}`,bp=`#if DEPTH_PACKING == 3200
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
}`,wp=`#define DISTANCE
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
}`,Tp=`#define DISTANCE
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`uniform float scale;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Dp=`#include <common>
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Ip=`#define LAMBERT
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
}`,Up=`#define LAMBERT
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
}`,Np=`#define MATCAP
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
}`,Op=`#define MATCAP
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
}`,Fp=`#define NORMAL
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
}`,zp=`#define NORMAL
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
}`,Bp=`#define PHONG
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
}`,kp=`#define PHONG
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
}`,Hp=`#define STANDARD
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
}`,Vp=`#define STANDARD
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
}`,Gp=`#define TOON
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
}`,Wp=`#define TOON
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
}`,Xp=`uniform float size;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,$p=`uniform vec3 color;
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
}`,Kp=`uniform float rotation;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:_d,alphahash_pars_fragment:vd,alphamap_fragment:xd,alphamap_pars_fragment:Md,alphatest_fragment:yd,alphatest_pars_fragment:Sd,aomap_fragment:Ed,aomap_pars_fragment:bd,batching_pars_vertex:wd,batching_vertex:Td,begin_vertex:Ad,beginnormal_vertex:Rd,bsdfs:Cd,iridescence_fragment:Pd,bumpmap_pars_fragment:Dd,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Id,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:Nd,color_fragment:Od,color_pars_fragment:Fd,color_pars_vertex:zd,color_vertex:Bd,common:kd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Gd,displacementmap_vertex:Wd,emissivemap_fragment:Xd,emissivemap_pars_fragment:qd,colorspace_fragment:Yd,colorspace_pars_fragment:$d,envmap_fragment:Kd,envmap_common_pars_fragment:Zd,envmap_pars_fragment:Jd,envmap_pars_vertex:jd,envmap_physical_pars_fragment:uf,envmap_vertex:Qd,fog_vertex:tf,fog_pars_vertex:ef,fog_fragment:nf,fog_pars_fragment:rf,gradientmap_pars_fragment:sf,lightmap_pars_fragment:af,lights_lambert_fragment:of,lights_lambert_pars_fragment:cf,lights_pars_begin:lf,lights_toon_fragment:hf,lights_toon_pars_fragment:df,lights_phong_fragment:ff,lights_phong_pars_fragment:pf,lights_physical_fragment:mf,lights_physical_pars_fragment:gf,lights_fragment_begin:_f,lights_fragment_maps:vf,lights_fragment_end:xf,logdepthbuf_fragment:Mf,logdepthbuf_pars_fragment:yf,logdepthbuf_pars_vertex:Sf,logdepthbuf_vertex:Ef,map_fragment:bf,map_pars_fragment:wf,map_particle_fragment:Tf,map_particle_pars_fragment:Af,metalnessmap_fragment:Rf,metalnessmap_pars_fragment:Cf,morphinstance_vertex:Pf,morphcolor_vertex:Df,morphnormal_vertex:Lf,morphtarget_pars_vertex:If,morphtarget_vertex:Uf,normal_fragment_begin:Nf,normal_fragment_maps:Of,normal_pars_fragment:Ff,normal_pars_vertex:zf,normal_vertex:Bf,normalmap_pars_fragment:kf,clearcoat_normal_fragment_begin:Hf,clearcoat_normal_fragment_maps:Vf,clearcoat_pars_fragment:Gf,iridescence_pars_fragment:Wf,opaque_fragment:Xf,packing:qf,premultiplied_alpha_fragment:Yf,project_vertex:$f,dithering_fragment:Kf,dithering_pars_fragment:Zf,roughnessmap_fragment:Jf,roughnessmap_pars_fragment:jf,shadowmap_pars_fragment:Qf,shadowmap_pars_vertex:tp,shadowmap_vertex:ep,shadowmask_pars_fragment:np,skinbase_vertex:ip,skinning_pars_vertex:rp,skinning_vertex:sp,skinnormal_vertex:ap,specularmap_fragment:op,specularmap_pars_fragment:cp,tonemapping_fragment:lp,tonemapping_pars_fragment:up,transmission_fragment:hp,transmission_pars_fragment:dp,uv_pars_fragment:fp,uv_pars_vertex:pp,uv_vertex:mp,worldpos_vertex:gp,background_vert:_p,background_frag:vp,backgroundCube_vert:xp,backgroundCube_frag:Mp,cube_vert:yp,cube_frag:Sp,depth_vert:Ep,depth_frag:bp,distanceRGBA_vert:wp,distanceRGBA_frag:Tp,equirect_vert:Ap,equirect_frag:Rp,linedashed_vert:Cp,linedashed_frag:Pp,meshbasic_vert:Dp,meshbasic_frag:Lp,meshlambert_vert:Ip,meshlambert_frag:Up,meshmatcap_vert:Np,meshmatcap_frag:Op,meshnormal_vert:Fp,meshnormal_frag:zp,meshphong_vert:Bp,meshphong_frag:kp,meshphysical_vert:Hp,meshphysical_frag:Vp,meshtoon_vert:Gp,meshtoon_frag:Wp,points_vert:Xp,points_frag:qp,shadow_vert:Yp,shadow_frag:$p,sprite_vert:Kp,sprite_frag:Zp},at={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Cn={basic:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new wt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ve([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ve([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ve([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new wt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ve([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ve([at.points,at.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ve([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ve([at.common,at.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ve([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ve([at.sprite,at.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ve([at.common,at.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ve([at.lights,at.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Cn.physical={uniforms:Ve([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const hs={r:0,b:0,g:0},Ei=new Fn,Jp=new pe;function jp(n,t,e,i,r,s,a){const o=new wt(0);let c=s===!0?0:1,l,h,m=null,p=0,f=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?e:t).get(b)),b}function _(M){let b=!1;const x=g(M);x===null?u(o,c):x&&x.isColor&&(u(x,1),b=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(M,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===Hs)?(h===void 0&&(h=new nt(new et(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:pr(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ei.copy(b.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jp.makeRotationFromEuler(Ei)),h.material.toneMapped=Qt.getTransfer(x.colorSpace)!==re,(m!==x||p!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,m=x,p=x.version,f=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new nt(new fn(2,2),new zn({name:"BackgroundMaterial",uniforms:pr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(m!==x||p!==x.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,m=x,p=x.version,f=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function u(M,b){M.getRGB(hs,_u(n)),i.buffers.color.setClear(hs.r,hs.g,hs.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),c=b,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,u(o,c)},render:_,addToRenderList:d}}function Qp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(v,C,G,L,B){let Y=!1;const q=m(L,G,C);s!==q&&(s=q,l(s.object)),Y=f(v,L,G,B),Y&&g(v,L,G,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(v,C,G,L),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function m(v,C,G){const L=G.wireframe===!0;let B=i[v.id];B===void 0&&(B={},i[v.id]=B);let Y=B[C.id];Y===void 0&&(Y={},B[C.id]=Y);let q=Y[L];return q===void 0&&(q=p(c()),Y[L]=q),q}function p(v){const C=[],G=[],L=[];for(let B=0;B<e;B++)C[B]=0,G[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:L,object:v,attributes:{},index:null}}function f(v,C,G,L){const B=s.attributes,Y=C.attributes;let q=0;const tt=G.getAttributes();for(const X in tt)if(tt[X].location>=0){const gt=B[X];let Rt=Y[X];if(Rt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(Rt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(Rt=v.instanceColor)),gt===void 0||gt.attribute!==Rt||Rt&&gt.data!==Rt.data)return!0;q++}return s.attributesNum!==q||s.index!==L}function g(v,C,G,L){const B={},Y=C.attributes;let q=0;const tt=G.getAttributes();for(const X in tt)if(tt[X].location>=0){let gt=Y[X];gt===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(gt=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(gt=v.instanceColor));const Rt={};Rt.attribute=gt,gt&&gt.data&&(Rt.data=gt.data),B[X]=Rt,q++}s.attributes=B,s.attributesNum=q,s.index=L}function _(){const v=s.newAttributes;for(let C=0,G=v.length;C<G;C++)v[C]=0}function d(v){u(v,0)}function u(v,C){const G=s.newAttributes,L=s.enabledAttributes,B=s.attributeDivisors;G[v]=1,L[v]===0&&(n.enableVertexAttribArray(v),L[v]=1),B[v]!==C&&(n.vertexAttribDivisor(v,C),B[v]=C)}function M(){const v=s.newAttributes,C=s.enabledAttributes;for(let G=0,L=C.length;G<L;G++)C[G]!==v[G]&&(n.disableVertexAttribArray(G),C[G]=0)}function b(v,C,G,L,B,Y,q){q===!0?n.vertexAttribIPointer(v,C,G,B,Y):n.vertexAttribPointer(v,C,G,L,B,Y)}function x(v,C,G,L){_();const B=L.attributes,Y=G.getAttributes(),q=C.defaultAttributeValues;for(const tt in Y){const X=Y[tt];if(X.location>=0){let ut=B[tt];if(ut===void 0&&(tt==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),tt==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor)),ut!==void 0){const gt=ut.normalized,Rt=ut.itemSize,qt=t.get(ut);if(qt===void 0)continue;const ae=qt.buffer,K=qt.type,st=qt.bytesPerElement,bt=K===n.INT||K===n.UNSIGNED_INT||ut.gpuType===Go;if(ut.isInterleavedBufferAttribute){const ht=ut.data,It=ht.stride,Bt=ut.offset;if(ht.isInstancedInterleavedBuffer){for(let Yt=0;Yt<X.locationSize;Yt++)u(X.location+Yt,ht.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Yt=0;Yt<X.locationSize;Yt++)d(X.location+Yt);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let Yt=0;Yt<X.locationSize;Yt++)b(X.location+Yt,Rt/X.locationSize,K,gt,It*st,(Bt+Rt/X.locationSize*Yt)*st,bt)}else{if(ut.isInstancedBufferAttribute){for(let ht=0;ht<X.locationSize;ht++)u(X.location+ht,ut.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ht=0;ht<X.locationSize;ht++)d(X.location+ht);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let ht=0;ht<X.locationSize;ht++)b(X.location+ht,Rt/X.locationSize,K,gt,Rt*st,Rt/X.locationSize*ht*st,bt)}}else if(q!==void 0){const gt=q[tt];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(X.location,gt);break;case 3:n.vertexAttrib3fv(X.location,gt);break;case 4:n.vertexAttrib4fv(X.location,gt);break;default:n.vertexAttrib1fv(X.location,gt)}}}}M()}function P(){R();for(const v in i){const C=i[v];for(const G in C){const L=C[G];for(const B in L)h(L[B].object),delete L[B];delete C[G]}delete i[v]}}function A(v){if(i[v.id]===void 0)return;const C=i[v.id];for(const G in C){const L=C[G];for(const B in L)h(L[B].object),delete L[B];delete C[G]}delete i[v.id]}function w(v){for(const C in i){const G=i[C];if(G[v.id]===void 0)continue;const L=G[v.id];for(const B in L)h(L[B].object),delete L[B];delete G[v.id]}}function R(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:d,disableUnusedAttributes:M}}function tm(n,t,e){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function a(l,h,m){m!==0&&(n.drawArraysInstanced(i,l,h,m),e.update(h,i,m))}function o(l,h,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,m);let f=0;for(let g=0;g<m;g++)f+=h[g];e.update(f,i,1)}function c(l,h,m,p){if(m===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,p,0,m);let g=0;for(let _=0;_<m;_++)g+=h[_]*p[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function em(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==bn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===Hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ni&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Jn&&!R)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const m=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:m,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:u,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:P,maxSamples:A}}function nm(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Ai,o=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){const f=m.length!==0||p||i!==0||r;return r=p,i=m.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,p){e=h(m,p,0)},this.setState=function(m,p,f){const g=m.clippingPlanes,_=m.clipIntersection,d=m.clipShadows,u=n.get(m);if(!r||g===null||g.length===0||s&&!d)s?h(null):l();else{const M=s?0:i,b=M*4;let x=u.clippingState||null;c.value=x,x=h(g,p,b,f);for(let P=0;P!==b;++P)x[P]=e[P];u.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(m,p,f,g){const _=m!==null?m.length:0;let d=null;if(_!==0){if(d=c.value,g!==!0||d===null){const u=f+_*4,M=p.matrixWorldInverse;o.getNormalMatrix(M),(d===null||d.length<u)&&(d=new Float32Array(u));for(let b=0,x=f;b!==_;++b,x+=4)a.copy(m[b]).applyMatrix4(M,o),a.normal.toArray(d,x),d[x+3]=a.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function im(n){let t=new WeakMap;function e(a,o){return o===Ja?a.mapping=ur:o===ja&&(a.mapping=hr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ja||o===ja)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new fd(c.height);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class yu extends vu{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ir=4,Xc=[.125,.215,.35,.446,.526,.582],Pi=20,xa=new yu,qc=new wt;let Ma=null,ya=0,Sa=0,Ea=!1;const Ri=(1+Math.sqrt(5))/2,ji=1/Ri,Yc=[new D(-Ri,ji,0),new D(Ri,ji,0),new D(-ji,0,Ri),new D(ji,0,Ri),new D(0,Ri,-ji),new D(0,Ri,ji),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class $c{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Ma=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ma,ya,Sa),this._renderer.xr.enabled=Ea,t.scissorTest=!1,ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ur||t.mapping===hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ma=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Hr,format:bn,colorSpace:mr,depthBuffer:!1},r=Kc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rm(s)),this._blurMaterial=sm(s,t,e)}return r}_compileMaterial(t){const e=new nt(this._lodPlanes[0],t);this._renderer.compile(e,xa)}_sceneToCubeUV(t,e,i,r){const o=new ln(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,p=h.toneMapping;h.getClearColor(qc),h.toneMapping=Qn,h.autoClear=!1;const f=new nn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new nt(new et,f);let _=!1;const d=t.background;d?d.isColor&&(f.color.copy(d),t.background=null,_=!0):(f.color.copy(qc),_=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):M===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const b=this._cubeSize;ds(r,M*b,u>2?b:0,b,b),h.setRenderTarget(r),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=m,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===ur||t.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;ds(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,xa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Yc[(r-s-1)%Yc.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,m=new nt(this._lodPlanes[r],l),p=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Pi-1),_=s/g,d=isFinite(s)?1+Math.floor(h*_):Pi;d>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Pi}`);const u=[];let M=0;for(let w=0;w<Pi;++w){const R=w/_,S=Math.exp(-R*R/2);u.push(S),w===0?M+=S:w<d&&(M+=2*S)}for(let w=0;w<u.length;w++)u[w]=u[w]/M;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:b}=this;p.dTheta.value=g,p.mipInt.value=b-i;const x=this._sizeLods[r],P=3*x*(r>b-ir?r-b+ir:0),A=4*(this._cubeSize-x);ds(e,P,A,3*x,2*x),c.setRenderTarget(e),c.render(m,xa)}}function rm(n){const t=[],e=[],i=[];let r=n;const s=n-ir+1+Xc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-ir?c=Xc[a-n+ir-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,m=1+l,p=[h,h,m,h,m,m,h,h,m,m,h,m],f=6,g=6,_=3,d=2,u=1,M=new Float32Array(_*g*f),b=new Float32Array(d*g*f),x=new Float32Array(u*g*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,R=A>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];M.set(S,_*g*A),b.set(p,d*g*A);const v=[A,A,A,A,A,A];x.set(v,u*g*A)}const P=new He;P.setAttribute("position",new Nn(M,_)),P.setAttribute("uv",new Nn(b,d)),P.setAttribute("faceIndex",new Nn(x,u)),t.push(P),r>ir&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Kc(n,t,e){const i=new Ui(n,t,e);return i.texture.mapping=Hs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function sm(n,t,e){const i=new Float32Array(Pi),r=new D(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Zc(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Jc(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Zo(){return`

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
	`}function am(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ja||c===ja,h=c===ur||c===hr;if(l||h){let m=t.get(o);const p=m!==void 0?m.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new $c(n)),m=l?e.fromEquirectangular(o,m):e.fromCubemap(o,m),m.texture.pmremVersion=o.pmremVersion,t.set(o,m),m.texture;if(m!==void 0)return m.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&r(f)?(e===null&&(e=new $c(n)),m=l?e.fromEquirectangular(o):e.fromCubemap(o),m.texture.pmremVersion=o.pmremVersion,t.set(o,m),o.addEventListener("dispose",s),m.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function om(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Pr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cm(n,t,e,i){const r={},s=new WeakMap;function a(m){const p=m.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let d=0,u=_.length;d<u;d++)t.remove(_[d])}p.removeEventListener("dispose",a),delete r[p.id];const f=s.get(p);f&&(t.remove(f),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(m,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,e.memory.geometries++),p}function c(m){const p=m.attributes;for(const g in p)t.update(p[g],n.ARRAY_BUFFER);const f=m.morphAttributes;for(const g in f){const _=f[g];for(let d=0,u=_.length;d<u;d++)t.update(_[d],n.ARRAY_BUFFER)}}function l(m){const p=[],f=m.index,g=m.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let b=0,x=M.length;b<x;b+=3){const P=M[b+0],A=M[b+1],w=M[b+2];p.push(P,A,A,w,w,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let b=0,x=M.length/3-1;b<x;b+=3){const P=b+0,A=b+1,w=b+2;p.push(P,A,A,w,w,P)}}else return;const d=new(lu(p)?gu:mu)(p,1);d.version=_;const u=s.get(m);u&&t.remove(u),s.set(m,d)}function h(m){const p=s.get(m);if(p){const f=m.index;f!==null&&p.version<f.version&&l(m)}else l(m);return s.get(m)}return{get:o,update:c,getWireframeAttribute:h}}function lm(n,t,e){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,f){n.drawElements(i,f,s,p*a),e.update(f,i,1)}function l(p,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,p*a,g),e.update(f,i,g))}function h(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,g);let d=0;for(let u=0;u<g;u++)d+=f[u];e.update(d,i,1)}function m(p,f,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<p.length;u++)l(p[u]/a,f[u],_[u]);else{d.multiDrawElementsInstancedWEBGL(i,f,0,s,p,0,_,0,g);let u=0;for(let M=0;M<g;M++)u+=f[M]*_[M];e.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function um(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function hm(n,t,e){const i=new WeakMap,r=new ve;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==m){let v=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",v)};var f=v;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),d===!0&&(x=3);let P=o.attributes.position.count*x,A=1;P>t.maxTextureSize&&(A=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const w=new Float32Array(P*A*4*m),R=new hu(w,P,A,m);R.type=Jn,R.needsUpdate=!0;const S=x*4;for(let C=0;C<m;C++){const G=u[C],L=M[C],B=b[C],Y=P*A*4*C;for(let q=0;q<G.count;q++){const tt=q*S;g===!0&&(r.fromBufferAttribute(G,q),w[Y+tt+0]=r.x,w[Y+tt+1]=r.y,w[Y+tt+2]=r.z,w[Y+tt+3]=0),_===!0&&(r.fromBufferAttribute(L,q),w[Y+tt+4]=r.x,w[Y+tt+5]=r.y,w[Y+tt+6]=r.z,w[Y+tt+7]=0),d===!0&&(r.fromBufferAttribute(B,q),w[Y+tt+8]=r.x,w[Y+tt+9]=r.y,w[Y+tt+10]=r.z,w[Y+tt+11]=B.itemSize===4?r.w:1)}}p={count:m,texture:R,size:new Mt(P,A)},i.set(o,p),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let d=0;d<l.length;d++)g+=l[d];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:s}}function dm(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,m=t.get(c,h);if(r.get(m)!==l&&(t.update(m),r.set(m,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return m}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}class Su extends Xe{constructor(t,e,i,r,s,a,o,c,l,h=ar){if(h!==ar&&h!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ar&&(i=Ii),i===void 0&&h===fr&&(i=dr),super(null,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Tn,this.minFilter=c!==void 0?c:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Eu=new Xe,jc=new Su(1,1),bu=new hu,wu=new Jh,Tu=new xu,Qc=[],tl=[],el=new Float32Array(16),nl=new Float32Array(9),il=new Float32Array(4);function vr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Qc[r];if(s===void 0&&(s=new Float32Array(r),Qc[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ws(n,t){let e=tl[t];e===void 0&&(e=new Int32Array(t),tl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function fm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function pm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),be(e,t)}}function mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),be(e,t)}}function gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),be(e,t)}}function _m(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,i))return;il.set(i),n.uniformMatrix2fv(this.addr,!1,il),be(e,i)}}function vm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,i))return;nl.set(i),n.uniformMatrix3fv(this.addr,!1,nl),be(e,i)}}function xm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Ee(e,i))return;el.set(i),n.uniformMatrix4fv(this.addr,!1,el),be(e,i)}}function Mm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ym(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),be(e,t)}}function Sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),be(e,t)}}function Em(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),be(e,t)}}function bm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function wm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),be(e,t)}}function Tm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),be(e,t)}}function Am(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),be(e,t)}}function Rm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(jc.compareFunction=cu,s=jc):s=Eu,e.setTexture2D(t||s,r)}function Cm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||wu,r)}function Pm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Tu,r)}function Dm(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||bu,r)}function Lm(n){switch(n){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return _m;case 35675:return vm;case 35676:return xm;case 5124:case 35670:return Mm;case 35667:case 35671:return ym;case 35668:case 35672:return Sm;case 35669:case 35673:return Em;case 5125:return bm;case 36294:return wm;case 36295:return Tm;case 36296:return Am;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Dm}}function Im(n,t){n.uniform1fv(this.addr,t)}function Um(n,t){const e=vr(t,this.size,2);n.uniform2fv(this.addr,e)}function Nm(n,t){const e=vr(t,this.size,3);n.uniform3fv(this.addr,e)}function Om(n,t){const e=vr(t,this.size,4);n.uniform4fv(this.addr,e)}function Fm(n,t){const e=vr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function zm(n,t){const e=vr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Bm(n,t){const e=vr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function km(n,t){n.uniform1iv(this.addr,t)}function Hm(n,t){n.uniform2iv(this.addr,t)}function Vm(n,t){n.uniform3iv(this.addr,t)}function Gm(n,t){n.uniform4iv(this.addr,t)}function Wm(n,t){n.uniform1uiv(this.addr,t)}function Xm(n,t){n.uniform2uiv(this.addr,t)}function qm(n,t){n.uniform3uiv(this.addr,t)}function Ym(n,t){n.uniform4uiv(this.addr,t)}function $m(n,t,e){const i=this.cache,r=t.length,s=Ws(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Eu,s[a])}function Km(n,t,e){const i=this.cache,r=t.length,s=Ws(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||wu,s[a])}function Zm(n,t,e){const i=this.cache,r=t.length,s=Ws(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Tu,s[a])}function Jm(n,t,e){const i=this.cache,r=t.length,s=Ws(e,r);Ee(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||bu,s[a])}function jm(n){switch(n){case 5126:return Im;case 35664:return Um;case 35665:return Nm;case 35666:return Om;case 35674:return Fm;case 35675:return zm;case 35676:return Bm;case 5124:case 35670:return km;case 35667:case 35671:return Hm;case 35668:case 35672:return Vm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}class Qm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Lm(e.type)}}class t0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jm(e.type)}}class e0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function rl(n,t){n.seq.push(t),n.map[t.id]=t}function n0(n,t,e){const i=n.name,r=i.length;for(ba.lastIndex=0;;){const s=ba.exec(i),a=ba.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){rl(e,l===void 0?new Qm(o,n,t):new t0(o,n,t));break}else{let m=e.map[o];m===void 0&&(m=new e0(o),rl(e,m)),e=m}}}class Cs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);n0(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function sl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const i0=37297;let r0=0;function s0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const al=new Gt;function a0(n){Qt._getMatrix(al,Qt.workingColorSpace,n);const t=`mat3( ${al.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case Vs:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ol(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+s0(n.getShaderSource(t),a)}else return r}function o0(n,t){const e=a0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function c0(n,t){let e;switch(t){case bh:e="Linear";break;case wh:e="Reinhard";break;case Th:e="Cineon";break;case Ah:e="ACESFilmic";break;case Ch:e="AgX";break;case Ph:e="Neutral";break;case Rh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fs=new D;function l0(){Qt.getLuminanceCoefficients(fs);const n=fs.x.toFixed(4),t=fs.y.toFixed(4),e=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function h0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function d0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Dr(n){return n!==""}function cl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ll(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(n){return n.replace(f0,m0)}const p0=new Map;function m0(n,t){let e=Xt[t];if(e===void 0){const i=p0.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Co(e)}const g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(n){return n.replace(g0,_0)}function _0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hl(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function v0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ih?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function x0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ur:case hr:t="ENVMAP_TYPE_CUBE";break;case Hs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function M0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case hr:t="ENVMAP_MODE_REFRACTION";break}return t}function y0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vo:t="ENVMAP_BLENDING_MULTIPLY";break;case Sh:t="ENVMAP_BLENDING_MIX";break;case Eh:t="ENVMAP_BLENDING_ADD";break}return t}function S0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function E0(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=v0(e),l=x0(e),h=M0(e),m=y0(e),p=S0(e),f=u0(e),g=h0(s),_=r.createProgram();let d,u,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),d.length>0&&(d+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),u.length>0&&(u+=`
`)):(d=[hl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),u=[hl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?c0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,o0("linearToOutputTexel",e.outputColorSpace),l0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),a=Co(a),a=cl(a,e),a=ll(a,e),o=Co(o),o=cl(o,e),o=ll(o,e),a=ul(a),o=ul(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,u=["#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=M+d+a,x=M+u+o,P=sl(r,r.VERTEX_SHADER,b),A=sl(r,r.FRAGMENT_SHADER,x);r.attachShader(_,P),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(C){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(P).trim(),B=r.getShaderInfoLog(A).trim();let Y=!0,q=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,A);else{const tt=ol(r,P,"vertex"),X=ol(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+tt+`
`+X)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(L===""||B==="")&&(q=!1);q&&(C.diagnostics={runnable:Y,programLog:G,vertexShader:{log:L,prefix:d},fragmentShader:{log:B,prefix:u}})}r.deleteShader(P),r.deleteShader(A),R=new Cs(r,_),S=d0(r,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,i0)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=r0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let b0=0;class w0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new T0(t),e.set(t,i)),i}}class T0{constructor(t){this.id=b0++,this.code=t,this.usedTimes=0}}function A0(n,t,e,i,r,s,a){const o=new fu,c=new w0,l=new Set,h=[],m=r.logarithmicDepthBuffer,p=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function d(S,v,C,G,L){const B=G.fog,Y=L.geometry,q=S.isMeshStandardMaterial?G.environment:null,tt=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),X=tt&&tt.mapping===Hs?tt.image.height:null,ut=g[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const gt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Rt=gt!==void 0?gt.length:0;let qt=0;Y.morphAttributes.position!==void 0&&(qt=1),Y.morphAttributes.normal!==void 0&&(qt=2),Y.morphAttributes.color!==void 0&&(qt=3);let ae,K,st,bt;if(ut){const ie=Cn[ut];ae=ie.vertexShader,K=ie.fragmentShader}else ae=S.vertexShader,K=S.fragmentShader,c.update(S),st=c.getVertexShaderID(S),bt=c.getFragmentShaderID(S);const ht=n.getRenderTarget(),It=n.state.buffers.depth.getReversed(),Bt=L.isInstancedMesh===!0,Yt=L.isBatchedMesh===!0,me=!!S.map,Jt=!!S.matcap,xe=!!tt,O=!!S.aoMap,rn=!!S.lightMap,$t=!!S.bumpMap,Kt=!!S.normalMap,Pt=!!S.displacementMap,he=!!S.emissiveMap,Ct=!!S.metalnessMap,T=!!S.roughnessMap,y=S.anisotropy>0,k=S.clearcoat>0,Z=S.dispersion>0,j=S.iridescence>0,$=S.sheen>0,Tt=S.transmission>0,dt=y&&!!S.anisotropyMap,_t=k&&!!S.clearcoatMap,jt=k&&!!S.clearcoatNormalMap,it=k&&!!S.clearcoatRoughnessMap,vt=j&&!!S.iridescenceMap,Lt=j&&!!S.iridescenceThicknessMap,Nt=$&&!!S.sheenColorMap,xt=$&&!!S.sheenRoughnessMap,Zt=!!S.specularMap,Wt=!!S.specularColorMap,oe=!!S.specularIntensityMap,I=Tt&&!!S.transmissionMap,ct=Tt&&!!S.thicknessMap,W=!!S.gradientMap,J=!!S.alphaMap,mt=S.alphaTest>0,ft=!!S.alphaHash,Ht=!!S.extensions;let ge=Qn;S.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ge=n.toneMapping);const Ne={shaderID:ut,shaderType:S.type,shaderName:S.name,vertexShader:ae,fragmentShader:K,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:bt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Yt,batchingColor:Yt&&L._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&L.instanceColor!==null,instancingMorph:Bt&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:mr,alphaToCoverage:!!S.alphaToCoverage,map:me,matcap:Jt,envMap:xe,envMapMode:xe&&tt.mapping,envMapCubeUVHeight:X,aoMap:O,lightMap:rn,bumpMap:$t,normalMap:Kt,displacementMap:p&&Pt,emissiveMap:he,normalMapObjectSpace:Kt&&S.normalMapType===Uh,normalMapTangentSpace:Kt&&S.normalMapType===ou,metalnessMap:Ct,roughnessMap:T,anisotropy:y,anisotropyMap:dt,clearcoat:k,clearcoatMap:_t,clearcoatNormalMap:jt,clearcoatRoughnessMap:it,dispersion:Z,iridescence:j,iridescenceMap:vt,iridescenceThicknessMap:Lt,sheen:$,sheenColorMap:Nt,sheenRoughnessMap:xt,specularMap:Zt,specularColorMap:Wt,specularIntensityMap:oe,transmission:Tt,transmissionMap:I,thicknessMap:ct,gradientMap:W,opaque:S.transparent===!1&&S.blending===sr&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:mt,alphaHash:ft,combine:S.combine,mapUv:me&&_(S.map.channel),aoMapUv:O&&_(S.aoMap.channel),lightMapUv:rn&&_(S.lightMap.channel),bumpMapUv:$t&&_(S.bumpMap.channel),normalMapUv:Kt&&_(S.normalMap.channel),displacementMapUv:Pt&&_(S.displacementMap.channel),emissiveMapUv:he&&_(S.emissiveMap.channel),metalnessMapUv:Ct&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:dt&&_(S.anisotropyMap.channel),clearcoatMapUv:_t&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(S.sheenRoughnessMap.channel),specularMapUv:Zt&&_(S.specularMap.channel),specularColorMapUv:Wt&&_(S.specularColorMap.channel),specularIntensityMapUv:oe&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:ct&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Kt||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!Y.attributes.uv&&(me||J),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:It,skinning:L.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:qt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ge,decodeVideoTexture:me&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===re,decodeVideoTextureEmissive:he&&S.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(S.emissiveMap.colorSpace)===re,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pn,flipSided:S.side===We,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ht&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&S.extensions.multiDraw===!0||Yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function u(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)v.push(C),v.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(M(v,S),b(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function M(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function b(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const v=g[S.type];let C;if(v){const G=Cn[v];C=ld.clone(G.uniforms)}else C=S.uniforms;return C}function P(S,v){let C;for(let G=0,L=h.length;G<L;G++){const B=h[G];if(B.cacheKey===v){C=B,++C.usedTimes;break}}return C===void 0&&(C=new E0(n,v,S,s),h.push(C)),C}function A(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function w(S){c.remove(S)}function R(){c.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:x,acquireProgram:P,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:R}}function R0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function C0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function dl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function fl(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(m,p,f,g,_,d){let u=n[t];return u===void 0?(u={id:m.id,object:m,geometry:p,material:f,groupOrder:g,renderOrder:m.renderOrder,z:_,group:d},n[t]=u):(u.id=m.id,u.object=m,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=m.renderOrder,u.z=_,u.group=d),t++,u}function o(m,p,f,g,_,d){const u=a(m,p,f,g,_,d);f.transmission>0?i.push(u):f.transparent===!0?r.push(u):e.push(u)}function c(m,p,f,g,_,d){const u=a(m,p,f,g,_,d);f.transmission>0?i.unshift(u):f.transparent===!0?r.unshift(u):e.unshift(u)}function l(m,p){e.length>1&&e.sort(m||C0),i.length>1&&i.sort(p||dl),r.length>1&&r.sort(p||dl)}function h(){for(let m=t,p=n.length;m<p;m++){const f=n[m];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function P0(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new fl,n.set(i,[a])):r>=s.length?(a=new fl,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function D0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new wt};break;case"SpotLight":e={position:new D,direction:new D,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function L0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let I0=0;function U0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function N0(n){const t=new D0,e=L0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const r=new D,s=new pe,a=new pe;function o(l){let h=0,m=0,p=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,_=0,d=0,u=0,M=0,b=0,x=0,P=0,A=0,w=0;l.sort(U0);for(let S=0,v=l.length;S<v;S++){const C=l[S],G=C.color,L=C.intensity,B=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=G.r*L,m+=G.g*L,p+=G.b*L;else if(C.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],L);w++}else if(C.isDirectionalLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const tt=C.shadow,X=e.get(C);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=C.shadow.matrix,M++}i.directional[f]=q,f++}else if(C.isSpotLight){const q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(G).multiplyScalar(L),q.distance=B,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[_]=q;const tt=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,tt.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[_]=tt.matrix,C.castShadow){const X=e.get(C);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=Y,x++}_++}else if(C.isRectAreaLight){const q=t.get(C);q.color.copy(G).multiplyScalar(L),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),i.rectArea[d]=q,d++}else if(C.isPointLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const tt=C.shadow,X=e.get(C);X.shadowIntensity=tt.intensity,X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=C.shadow.matrix,b++}i.point[g]=q,g++}else if(C.isHemisphereLight){const q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(L),q.groundColor.copy(C.groundColor).multiplyScalar(L),i.hemi[u]=q,u++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=p;const R=i.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==d||R.hemiLength!==u||R.numDirectionalShadows!==M||R.numPointShadows!==b||R.numSpotShadows!==x||R.numSpotMaps!==P||R.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=d,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=d,R.hemiLength=u,R.numDirectionalShadows=M,R.numPointShadows=b,R.numSpotShadows=x,R.numSpotMaps=P,R.numLightProbes=w,i.version=I0++)}function c(l,h){let m=0,p=0,f=0,g=0,_=0;const d=h.matrixWorldInverse;for(let u=0,M=l.length;u<M;u++){const b=l[u];if(b.isDirectionalLight){const x=i.directional[m];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),m++}else if(b.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(d),f++}else if(b.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(d),a.identity(),s.copy(b.matrixWorld),s.premultiply(d),a.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(d),_++}}}return{setup:o,setupView:c,state:i}}function pl(n){const t=new N0(n),e=[],i=[];function r(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function O0(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new pl(n),t.set(r,[o])):s>=a.length?(o=new pl(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class F0 extends _r{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class z0 extends _r{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
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
}`;function H0(n,t,e){let i=new Ko;const r=new Mt,s=new Mt,a=new ve,o=new F0({depthPacking:Ih}),c=new z0,l={},h=e.maxTextureSize,m={[_i]:We,[We]:_i,[Pn]:Pn},p=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:B0,fragmentShader:k0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new He;g.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nt(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let u=this.type;this.render=function(A,w,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),v=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),G=n.state;G.setBlending(gi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const L=u!==$n&&this.type===$n,B=u===$n&&this.type!==$n;for(let Y=0,q=A.length;Y<q;Y++){const tt=A[Y],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ut=X.getFrameExtents();if(r.multiply(ut),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ut.x),r.x=s.x*ut.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ut.y),r.y=s.y*ut.y,X.mapSize.y=s.y)),X.map===null||L===!0||B===!0){const Rt=this.type!==$n?{minFilter:Tn,magFilter:Tn}:{};X.map!==null&&X.map.dispose(),X.map=new Ui(r.x,r.y,Rt),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const gt=X.getViewportCount();for(let Rt=0;Rt<gt;Rt++){const qt=X.getViewport(Rt);a.set(s.x*qt.x,s.y*qt.y,s.x*qt.z,s.y*qt.w),G.viewport(a),X.updateMatrices(tt,Rt),i=X.getFrustum(),x(w,R,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===$n&&M(X,R),X.needsUpdate=!1}u=this.type,d.needsUpdate=!1,n.setRenderTarget(S,v,C)};function M(A,w){const R=t.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ui(r.x,r.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,R,p,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,R,f,_,null)}function b(A,w,R,S){let v=null;const C=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)v=C;else if(v=R.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=v.uuid,L=w.uuid;let B=l[G];B===void 0&&(B={},l[G]=B);let Y=B[L];Y===void 0&&(Y=v.clone(),B[L]=Y,w.addEventListener("dispose",P)),v=Y}if(v.visible=w.visible,v.wireframe=w.wireframe,S===$n?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:m[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const G=n.properties.get(v);G.light=R}return v}function x(A,w,R,S,v){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===$n)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const L=t.update(A),B=A.material;if(Array.isArray(B)){const Y=L.groups;for(let q=0,tt=Y.length;q<tt;q++){const X=Y[q],ut=B[X.materialIndex];if(ut&&ut.visible){const gt=b(A,ut,S,v);A.onBeforeShadow(n,A,w,R,L,gt,X),n.renderBufferDirect(R,null,L,gt,A,X),A.onAfterShadow(n,A,w,R,L,gt,X)}}}else if(B.visible){const Y=b(A,B,S,v);A.onBeforeShadow(n,A,w,R,L,Y,null),n.renderBufferDirect(R,null,L,Y,A,null),A.onAfterShadow(n,A,w,R,L,Y,null)}}const G=A.children;for(let L=0,B=G.length;L<B;L++)x(G[L],w,R,S,v)}function P(A){A.target.removeEventListener("dispose",P);for(const R in l){const S=l[R],v=A.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const V0={[Wa]:Xa,[qa]:Ka,[Ya]:Za,[lr]:$a,[Xa]:Wa,[Ka]:qa,[Za]:Ya,[$a]:lr};function G0(n,t){function e(){let I=!1;const ct=new ve;let W=null;const J=new ve(0,0,0,0);return{setMask:function(mt){W!==mt&&!I&&(n.colorMask(mt,mt,mt,mt),W=mt)},setLocked:function(mt){I=mt},setClear:function(mt,ft,Ht,ge,Ne){Ne===!0&&(mt*=ge,ft*=ge,Ht*=ge),ct.set(mt,ft,Ht,ge),J.equals(ct)===!1&&(n.clearColor(mt,ft,Ht,ge),J.copy(ct))},reset:function(){I=!1,W=null,J.set(-1,0,0,0)}}}function i(){let I=!1,ct=!1,W=null,J=null,mt=null;return{setReversed:function(ft){if(ct!==ft){const Ht=t.get("EXT_clip_control");ct?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const ge=mt;mt=null,this.setClear(ge)}ct=ft},getReversed:function(){return ct},setTest:function(ft){ft?ht(n.DEPTH_TEST):It(n.DEPTH_TEST)},setMask:function(ft){W!==ft&&!I&&(n.depthMask(ft),W=ft)},setFunc:function(ft){if(ct&&(ft=V0[ft]),J!==ft){switch(ft){case Wa:n.depthFunc(n.NEVER);break;case Xa:n.depthFunc(n.ALWAYS);break;case qa:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case Ya:n.depthFunc(n.EQUAL);break;case $a:n.depthFunc(n.GEQUAL);break;case Ka:n.depthFunc(n.GREATER);break;case Za:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ft}},setLocked:function(ft){I=ft},setClear:function(ft){mt!==ft&&(ct&&(ft=1-ft),n.clearDepth(ft),mt=ft)},reset:function(){I=!1,W=null,J=null,mt=null,ct=!1}}}function r(){let I=!1,ct=null,W=null,J=null,mt=null,ft=null,Ht=null,ge=null,Ne=null;return{setTest:function(ie){I||(ie?ht(n.STENCIL_TEST):It(n.STENCIL_TEST))},setMask:function(ie){ct!==ie&&!I&&(n.stencilMask(ie),ct=ie)},setFunc:function(ie,pn,kn){(W!==ie||J!==pn||mt!==kn)&&(n.stencilFunc(ie,pn,kn),W=ie,J=pn,mt=kn)},setOp:function(ie,pn,kn){(ft!==ie||Ht!==pn||ge!==kn)&&(n.stencilOp(ie,pn,kn),ft=ie,Ht=pn,ge=kn)},setLocked:function(ie){I=ie},setClear:function(ie){Ne!==ie&&(n.clearStencil(ie),Ne=ie)},reset:function(){I=!1,ct=null,W=null,J=null,mt=null,ft=null,Ht=null,ge=null,Ne=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},m={},p=new WeakMap,f=[],g=null,_=!1,d=null,u=null,M=null,b=null,x=null,P=null,A=null,w=new wt(0,0,0),R=0,S=!1,v=null,C=null,G=null,L=null,B=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,tt=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=tt>=1):X.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=tt>=2);let ut=null,gt={};const Rt=n.getParameter(n.SCISSOR_BOX),qt=n.getParameter(n.VIEWPORT),ae=new ve().fromArray(Rt),K=new ve().fromArray(qt);function st(I,ct,W,J){const mt=new Uint8Array(4),ft=n.createTexture();n.bindTexture(I,ft),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<W;Ht++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(ct+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return ft}const bt={};bt[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),bt[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),bt[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(n.DEPTH_TEST),a.setFunc(lr),$t(!1),Kt(vc),ht(n.CULL_FACE),O(gi);function ht(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function It(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Bt(I,ct){return m[I]!==ct?(n.bindFramebuffer(I,ct),m[I]=ct,I===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ct),I===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function Yt(I,ct){let W=f,J=!1;if(I){W=p.get(ct),W===void 0&&(W=[],p.set(ct,W));const mt=I.textures;if(W.length!==mt.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,Ht=mt.length;ft<Ht;ft++)W[ft]=n.COLOR_ATTACHMENT0+ft;W.length=mt.length,J=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,J=!0);J&&n.drawBuffers(W)}function me(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Jt={[Ci]:n.FUNC_ADD,[sh]:n.FUNC_SUBTRACT,[ah]:n.FUNC_REVERSE_SUBTRACT};Jt[oh]=n.MIN,Jt[ch]=n.MAX;const xe={[lh]:n.ZERO,[uh]:n.ONE,[hh]:n.SRC_COLOR,[Va]:n.SRC_ALPHA,[_h]:n.SRC_ALPHA_SATURATE,[mh]:n.DST_COLOR,[fh]:n.DST_ALPHA,[dh]:n.ONE_MINUS_SRC_COLOR,[Ga]:n.ONE_MINUS_SRC_ALPHA,[gh]:n.ONE_MINUS_DST_COLOR,[ph]:n.ONE_MINUS_DST_ALPHA,[vh]:n.CONSTANT_COLOR,[xh]:n.ONE_MINUS_CONSTANT_COLOR,[Mh]:n.CONSTANT_ALPHA,[yh]:n.ONE_MINUS_CONSTANT_ALPHA};function O(I,ct,W,J,mt,ft,Ht,ge,Ne,ie){if(I===gi){_===!0&&(It(n.BLEND),_=!1);return}if(_===!1&&(ht(n.BLEND),_=!0),I!==rh){if(I!==d||ie!==S){if((u!==Ci||x!==Ci)&&(n.blendEquation(n.FUNC_ADD),u=Ci,x=Ci),ie)switch(I){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xc:n.blendFunc(n.ONE,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,b=null,P=null,A=null,w.set(0,0,0),R=0,d=I,S=ie}return}mt=mt||ct,ft=ft||W,Ht=Ht||J,(ct!==u||mt!==x)&&(n.blendEquationSeparate(Jt[ct],Jt[mt]),u=ct,x=mt),(W!==M||J!==b||ft!==P||Ht!==A)&&(n.blendFuncSeparate(xe[W],xe[J],xe[ft],xe[Ht]),M=W,b=J,P=ft,A=Ht),(ge.equals(w)===!1||Ne!==R)&&(n.blendColor(ge.r,ge.g,ge.b,Ne),w.copy(ge),R=Ne),d=I,S=!1}function rn(I,ct){I.side===Pn?It(n.CULL_FACE):ht(n.CULL_FACE);let W=I.side===We;ct&&(W=!W),$t(W),I.blending===sr&&I.transparent===!1?O(gi):O(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const J=I.stencilWrite;o.setTest(J),J&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),he(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):It(n.SAMPLE_ALPHA_TO_COVERAGE)}function $t(I){v!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),v=I)}function Kt(I){I!==eh?(ht(n.CULL_FACE),I!==C&&(I===vc?n.cullFace(n.BACK):I===nh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):It(n.CULL_FACE),C=I}function Pt(I){I!==G&&(q&&n.lineWidth(I),G=I)}function he(I,ct,W){I?(ht(n.POLYGON_OFFSET_FILL),(L!==ct||B!==W)&&(n.polygonOffset(ct,W),L=ct,B=W)):It(n.POLYGON_OFFSET_FILL)}function Ct(I){I?ht(n.SCISSOR_TEST):It(n.SCISSOR_TEST)}function T(I){I===void 0&&(I=n.TEXTURE0+Y-1),ut!==I&&(n.activeTexture(I),ut=I)}function y(I,ct,W){W===void 0&&(ut===null?W=n.TEXTURE0+Y-1:W=ut);let J=gt[W];J===void 0&&(J={type:void 0,texture:void 0},gt[W]=J),(J.type!==I||J.texture!==ct)&&(ut!==W&&(n.activeTexture(W),ut=W),n.bindTexture(I,ct||bt[I]),J.type=I,J.texture=ct)}function k(){const I=gt[ut];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(I){ae.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ae.copy(I))}function xt(I){K.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),K.copy(I))}function Zt(I,ct){let W=l.get(ct);W===void 0&&(W=new WeakMap,l.set(ct,W));let J=W.get(I);J===void 0&&(J=n.getUniformBlockIndex(ct,I.name),W.set(I,J))}function Wt(I,ct){const J=l.get(ct).get(I);c.get(ct)!==J&&(n.uniformBlockBinding(ct,J,I.__bindingPointIndex),c.set(ct,J))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ut=null,gt={},m={},p=new WeakMap,f=[],g=null,_=!1,d=null,u=null,M=null,b=null,x=null,P=null,A=null,w=new wt(0,0,0),R=0,S=!1,v=null,C=null,G=null,L=null,B=null,ae.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ht,disable:It,bindFramebuffer:Bt,drawBuffers:Yt,useProgram:me,setBlending:O,setMaterial:rn,setFlipSided:$t,setCullFace:Kt,setLineWidth:Pt,setPolygonOffset:he,setScissorTest:Ct,activeTexture:T,bindTexture:y,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:vt,texImage3D:Lt,updateUBOMapping:Zt,uniformBlockBinding:Wt,texStorage2D:jt,texStorage3D:it,texSubImage2D:$,texSubImage3D:Tt,compressedTexSubImage2D:dt,compressedTexSubImage3D:_t,scissor:Nt,viewport:xt,reset:oe}}function ml(n,t,e,i){const r=W0(i);switch(e){case tu:return n*t;case nu:return n*t;case iu:return n*t*2;case ru:return n*t/r.components*r.byteLength;case qo:return n*t/r.components*r.byteLength;case su:return n*t*2/r.components*r.byteLength;case Yo:return n*t*2/r.components*r.byteLength;case eu:return n*t*3/r.components*r.byteLength;case bn:return n*t*4/r.components*r.byteLength;case $o:return n*t*4/r.components*r.byteLength;case bs:case ws:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ts:case As:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case no:case ro:return Math.max(n,16)*Math.max(t,8)/4;case eo:case io:return Math.max(n,8)*Math.max(t,8)/2;case so:case ao:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case oo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case uo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ho:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case fo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case po:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case mo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case go:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case _o:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case vo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case xo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case yo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case So:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Rs:case Eo:case bo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case au:case wo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case To:case Ao:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function W0(n){switch(n){case ni:case Jl:return{byteLength:1,components:1};case Fr:case jl:case Hr:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case Ii:case Go:case Jn:return{byteLength:4,components:1};case Ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function X0(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Mt,h=new WeakMap;let m;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):Ns("canvas")}function _(T,y,k){let Z=1;const j=Ct(T);if((j.width>k||j.height>k)&&(Z=k/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(Z*j.width),Tt=Math.floor(Z*j.height);m===void 0&&(m=g($,Tt));const dt=y?g($,Tt):m;return dt.width=$,dt.height=Tt,dt.getContext("2d").drawImage(T,0,0,$,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+Tt+")."),dt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function d(T){return T.generateMipmaps}function u(T){n.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,y,k,Z,j=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=y;if(y===n.RED&&(k===n.FLOAT&&($=n.R32F),k===n.HALF_FLOAT&&($=n.R16F),k===n.UNSIGNED_BYTE&&($=n.R8)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.R8UI),k===n.UNSIGNED_SHORT&&($=n.R16UI),k===n.UNSIGNED_INT&&($=n.R32UI),k===n.BYTE&&($=n.R8I),k===n.SHORT&&($=n.R16I),k===n.INT&&($=n.R32I)),y===n.RG&&(k===n.FLOAT&&($=n.RG32F),k===n.HALF_FLOAT&&($=n.RG16F),k===n.UNSIGNED_BYTE&&($=n.RG8)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RG8UI),k===n.UNSIGNED_SHORT&&($=n.RG16UI),k===n.UNSIGNED_INT&&($=n.RG32UI),k===n.BYTE&&($=n.RG8I),k===n.SHORT&&($=n.RG16I),k===n.INT&&($=n.RG32I)),y===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGB8UI),k===n.UNSIGNED_SHORT&&($=n.RGB16UI),k===n.UNSIGNED_INT&&($=n.RGB32UI),k===n.BYTE&&($=n.RGB8I),k===n.SHORT&&($=n.RGB16I),k===n.INT&&($=n.RGB32I)),y===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGBA8UI),k===n.UNSIGNED_SHORT&&($=n.RGBA16UI),k===n.UNSIGNED_INT&&($=n.RGBA32UI),k===n.BYTE&&($=n.RGBA8I),k===n.SHORT&&($=n.RGBA16I),k===n.INT&&($=n.RGBA32I)),y===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),y===n.RGBA){const Tt=j?Vs:Qt.getTransfer(Z);k===n.FLOAT&&($=n.RGBA32F),k===n.HALF_FLOAT&&($=n.RGBA16F),k===n.UNSIGNED_BYTE&&($=Tt===re?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(T,y){let k;return T?y===null||y===Ii||y===dr?k=n.DEPTH24_STENCIL8:y===Jn?k=n.DEPTH32F_STENCIL8:y===Fr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ii||y===dr?k=n.DEPTH_COMPONENT24:y===Jn?k=n.DEPTH_COMPONENT32F:y===Fr&&(k=n.DEPTH_COMPONENT16),k}function P(T,y){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==Tn&&T.minFilter!==Dn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){const y=T.target;y.removeEventListener("dispose",A),R(y),y.isVideoTexture&&h.delete(y)}function w(T){const y=T.target;y.removeEventListener("dispose",w),v(y)}function R(T){const y=i.get(T);if(y.__webglInit===void 0)return;const k=T.source,Z=p.get(k);if(Z){const j=Z[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(T),Object.keys(Z).length===0&&p.delete(k)}i.remove(T)}function S(T){const y=i.get(T);n.deleteTexture(y.__webglTexture);const k=T.source,Z=p.get(k);delete Z[y.__cacheKey],a.memory.textures--}function v(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let j=0;j<y.__webglFramebuffer[Z].length;j++)n.deleteFramebuffer(y.__webglFramebuffer[Z][j]);else n.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[Z]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=T.textures;for(let Z=0,j=k.length;Z<j;Z++){const $=i.get(k[Z]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(k[Z])}i.remove(T)}let C=0;function G(){C=0}function L(){const T=C;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),C+=1,T}function B(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function Y(T,y){const k=i.get(T);if(T.isVideoTexture&&Pt(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,T,y);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function q(T,y){const k=i.get(T);if(T.version>0&&k.__version!==T.version){K(k,T,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function tt(T,y){const k=i.get(T);if(T.version>0&&k.__version!==T.version){K(k,T,y);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function X(T,y){const k=i.get(T);if(T.version>0&&k.__version!==T.version){st(k,T,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}const ut={[Qa]:n.REPEAT,[Di]:n.CLAMP_TO_EDGE,[to]:n.MIRRORED_REPEAT},gt={[Tn]:n.NEAREST,[Dh]:n.NEAREST_MIPMAP_NEAREST,[Yr]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[Zs]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},Rt={[Nh]:n.NEVER,[Hh]:n.ALWAYS,[Oh]:n.LESS,[cu]:n.LEQUAL,[Fh]:n.EQUAL,[kh]:n.GEQUAL,[zh]:n.GREATER,[Bh]:n.NOTEQUAL};function qt(T,y){if(y.type===Jn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Dn||y.magFilter===Zs||y.magFilter===Yr||y.magFilter===Li||y.minFilter===Dn||y.minFilter===Zs||y.minFilter===Yr||y.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ut[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ut[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ut[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,gt[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,gt[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Rt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Tn||y.minFilter!==Yr&&y.minFilter!==Li||y.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ae(T,y){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));const Z=y.source;let j=p.get(Z);j===void 0&&(j={},p.set(Z,j));const $=B(y);if($!==T.__cacheKey){j[$]===void 0&&(j[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[$].usedTimes++;const Tt=j[T.__cacheKey];Tt!==void 0&&(j[T.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(y)),T.__cacheKey=$,T.__webglTexture=j[$].texture}return k}function K(T,y,k){let Z=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=n.TEXTURE_3D);const j=ae(T,y),$=y.source;e.bindTexture(Z,T.__webglTexture,n.TEXTURE0+k);const Tt=i.get($);if($.version!==Tt.__version||j===!0){e.activeTexture(n.TEXTURE0+k);const dt=Qt.getPrimaries(Qt.workingColorSpace),_t=y.colorSpace===pi?null:Qt.getPrimaries(y.colorSpace),jt=y.colorSpace===pi||dt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let it=_(y.image,!1,r.maxTextureSize);it=he(y,it);const vt=s.convert(y.format,y.colorSpace),Lt=s.convert(y.type);let Nt=b(y.internalFormat,vt,Lt,y.colorSpace,y.isVideoTexture);qt(Z,y);let xt;const Zt=y.mipmaps,Wt=y.isVideoTexture!==!0,oe=Tt.__version===void 0||j===!0,I=$.dataReady,ct=P(y,it);if(y.isDepthTexture)Nt=x(y.format===fr,y.type),oe&&(Wt?e.texStorage2D(n.TEXTURE_2D,1,Nt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Nt,it.width,it.height,0,vt,Lt,null));else if(y.isDataTexture)if(Zt.length>0){Wt&&oe&&e.texStorage2D(n.TEXTURE_2D,ct,Nt,Zt[0].width,Zt[0].height);for(let W=0,J=Zt.length;W<J;W++)xt=Zt[W],Wt?I&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,xt.width,xt.height,vt,Lt,xt.data):e.texImage2D(n.TEXTURE_2D,W,Nt,xt.width,xt.height,0,vt,Lt,xt.data);y.generateMipmaps=!1}else Wt?(oe&&e.texStorage2D(n.TEXTURE_2D,ct,Nt,it.width,it.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,vt,Lt,it.data)):e.texImage2D(n.TEXTURE_2D,0,Nt,it.width,it.height,0,vt,Lt,it.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Wt&&oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Nt,Zt[0].width,Zt[0].height,it.depth);for(let W=0,J=Zt.length;W<J;W++)if(xt=Zt[W],y.format!==bn)if(vt!==null)if(Wt){if(I)if(y.layerUpdates.size>0){const mt=ml(xt.width,xt.height,y.format,y.type);for(const ft of y.layerUpdates){const Ht=xt.data.subarray(ft*mt/xt.data.BYTES_PER_ELEMENT,(ft+1)*mt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ft,xt.width,xt.height,1,vt,Ht)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,xt.width,xt.height,it.depth,vt,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Nt,xt.width,xt.height,it.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,xt.width,xt.height,it.depth,vt,Lt,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,W,Nt,xt.width,xt.height,it.depth,0,vt,Lt,xt.data)}else{Wt&&oe&&e.texStorage2D(n.TEXTURE_2D,ct,Nt,Zt[0].width,Zt[0].height);for(let W=0,J=Zt.length;W<J;W++)xt=Zt[W],y.format!==bn?vt!==null?Wt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,W,Nt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?I&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,xt.width,xt.height,vt,Lt,xt.data):e.texImage2D(n.TEXTURE_2D,W,Nt,xt.width,xt.height,0,vt,Lt,xt.data)}else if(y.isDataArrayTexture)if(Wt){if(oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Nt,it.width,it.height,it.depth),I)if(y.layerUpdates.size>0){const W=ml(it.width,it.height,y.format,y.type);for(const J of y.layerUpdates){const mt=it.data.subarray(J*W/it.data.BYTES_PER_ELEMENT,(J+1)*W/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,vt,Lt,mt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,vt,Lt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,it.width,it.height,it.depth,0,vt,Lt,it.data);else if(y.isData3DTexture)Wt?(oe&&e.texStorage3D(n.TEXTURE_3D,ct,Nt,it.width,it.height,it.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,vt,Lt,it.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,it.width,it.height,it.depth,0,vt,Lt,it.data);else if(y.isFramebufferTexture){if(oe)if(Wt)e.texStorage2D(n.TEXTURE_2D,ct,Nt,it.width,it.height);else{let W=it.width,J=it.height;for(let mt=0;mt<ct;mt++)e.texImage2D(n.TEXTURE_2D,mt,Nt,W,J,0,vt,Lt,null),W>>=1,J>>=1}}else if(Zt.length>0){if(Wt&&oe){const W=Ct(Zt[0]);e.texStorage2D(n.TEXTURE_2D,ct,Nt,W.width,W.height)}for(let W=0,J=Zt.length;W<J;W++)xt=Zt[W],Wt?I&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,vt,Lt,xt):e.texImage2D(n.TEXTURE_2D,W,Nt,vt,Lt,xt);y.generateMipmaps=!1}else if(Wt){if(oe){const W=Ct(it);e.texStorage2D(n.TEXTURE_2D,ct,Nt,W.width,W.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Lt,it)}else e.texImage2D(n.TEXTURE_2D,0,Nt,vt,Lt,it);d(y)&&u(Z),Tt.__version=$.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function st(T,y,k){if(y.image.length!==6)return;const Z=ae(T,y),j=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+k);const $=i.get(j);if(j.version!==$.__version||Z===!0){e.activeTexture(n.TEXTURE0+k);const Tt=Qt.getPrimaries(Qt.workingColorSpace),dt=y.colorSpace===pi?null:Qt.getPrimaries(y.colorSpace),_t=y.colorSpace===pi||Tt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const jt=y.isCompressedTexture||y.image[0].isCompressedTexture,it=y.image[0]&&y.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!jt&&!it?vt[J]=_(y.image[J],!0,r.maxCubemapSize):vt[J]=it?y.image[J].image:y.image[J],vt[J]=he(y,vt[J]);const Lt=vt[0],Nt=s.convert(y.format,y.colorSpace),xt=s.convert(y.type),Zt=b(y.internalFormat,Nt,xt,y.colorSpace),Wt=y.isVideoTexture!==!0,oe=$.__version===void 0||Z===!0,I=j.dataReady;let ct=P(y,Lt);qt(n.TEXTURE_CUBE_MAP,y);let W;if(jt){Wt&&oe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Zt,Lt.width,Lt.height);for(let J=0;J<6;J++){W=vt[J].mipmaps;for(let mt=0;mt<W.length;mt++){const ft=W[mt];y.format!==bn?Nt!==null?Wt?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,ft.width,ft.height,Nt,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,Zt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,ft.width,ft.height,Nt,xt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,Zt,ft.width,ft.height,0,Nt,xt,ft.data)}}}else{if(W=y.mipmaps,Wt&&oe){W.length>0&&ct++;const J=Ct(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Zt,J.width,J.height)}for(let J=0;J<6;J++)if(it){Wt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,Nt,xt,vt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Zt,vt[J].width,vt[J].height,0,Nt,xt,vt[J].data);for(let mt=0;mt<W.length;mt++){const Ht=W[mt].image[J].image;Wt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,Ht.width,Ht.height,Nt,xt,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,Zt,Ht.width,Ht.height,0,Nt,xt,Ht.data)}}else{Wt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Nt,xt,vt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Zt,Nt,xt,vt[J]);for(let mt=0;mt<W.length;mt++){const ft=W[mt];Wt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,Nt,xt,ft.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,Zt,Nt,xt,ft.image[J])}}}d(y)&&u(n.TEXTURE_CUBE_MAP),$.__version=j.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function bt(T,y,k,Z,j,$){const Tt=s.convert(k.format,k.colorSpace),dt=s.convert(k.type),_t=b(k.internalFormat,Tt,dt,k.colorSpace),jt=i.get(y),it=i.get(k);if(it.__renderTarget=y,!jt.__hasExternalTextures){const vt=Math.max(1,y.width>>$),Lt=Math.max(1,y.height>>$);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,$,_t,vt,Lt,y.depth,0,Tt,dt,null):e.texImage2D(j,$,_t,vt,Lt,0,Tt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Kt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,j,it.__webglTexture,0,$t(y)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,j,it.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(T,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){const Z=y.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,$=x(y.stencilBuffer,j),Tt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=$t(y);Kt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,$,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,$,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,$,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,T)}else{const Z=y.textures;for(let j=0;j<Z.length;j++){const $=Z[j],Tt=s.convert($.format,$.colorSpace),dt=s.convert($.type),_t=b($.internalFormat,Tt,dt,$.colorSpace),jt=$t(y);k&&Kt(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,_t,y.width,y.height):Kt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,jt,_t,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,_t,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const j=Z.__webglTexture,$=$t(y);if(y.depthTexture.format===ar)Kt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(y.depthTexture.format===fr)Kt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Bt(T){const y=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=Z}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");It(y.__webglFramebuffer,T)}else if(k){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=n.createRenderbuffer(),ht(y.__webglDepthbuffer[Z],T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,$)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ht(y.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,j)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Yt(T,y,k){const Z=i.get(T);y!==void 0&&bt(Z.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Bt(T)}function me(T){const y=T.texture,k=i.get(T),Z=i.get(y);T.addEventListener("dispose",w);const j=T.textures,$=T.isWebGLCubeRenderTarget===!0,Tt=j.length>1;if(Tt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=y.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[dt]=[];for(let _t=0;_t<y.mipmaps.length;_t++)k.__webglFramebuffer[dt][_t]=n.createFramebuffer()}else k.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let dt=0;dt<y.mipmaps.length;dt++)k.__webglFramebuffer[dt]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let dt=0,_t=j.length;dt<_t;dt++){const jt=i.get(j[dt]);jt.__webglTexture===void 0&&(jt.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Kt(T)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let dt=0;dt<j.length;dt++){const _t=j[dt];k.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[dt]);const jt=s.convert(_t.format,_t.colorSpace),it=s.convert(_t.type),vt=b(_t.internalFormat,jt,it,_t.colorSpace,T.isXRRenderTarget===!0),Lt=$t(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,vt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,k.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ht(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),qt(n.TEXTURE_CUBE_MAP,y);for(let dt=0;dt<6;dt++)if(y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)bt(k.__webglFramebuffer[dt][_t],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,_t);else bt(k.__webglFramebuffer[dt],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);d(y)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let dt=0,_t=j.length;dt<_t;dt++){const jt=j[dt],it=i.get(jt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),qt(n.TEXTURE_2D,jt),bt(k.__webglFramebuffer,T,jt,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),d(jt)&&u(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(dt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),qt(dt,y),y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)bt(k.__webglFramebuffer[_t],T,y,n.COLOR_ATTACHMENT0,dt,_t);else bt(k.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,dt,0);d(y)&&u(dt),e.unbindTexture()}T.depthBuffer&&Bt(T)}function Jt(T){const y=T.textures;for(let k=0,Z=y.length;k<Z;k++){const j=y[k];if(d(j)){const $=M(T),Tt=i.get(j).__webglTexture;e.bindTexture($,Tt),u($),e.unbindTexture()}}}const xe=[],O=[];function rn(T){if(T.samples>0){if(Kt(T)===!1){const y=T.textures,k=T.width,Z=T.height;let j=n.COLOR_BUFFER_BIT;const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(T),dt=y.length>1;if(dt)for(let _t=0;_t<y.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<y.length;_t++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const jt=i.get(y[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,jt,0)}n.blitFramebuffer(0,0,k,Z,0,0,k,Z,j,n.NEAREST),c===!0&&(xe.length=0,O.length=0,xe.push(n.COLOR_ATTACHMENT0+_t),T.depthBuffer&&T.resolveDepthBuffer===!1&&(xe.push($),O.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let _t=0;_t<y.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const jt=i.get(y[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function $t(T){return Math.min(r.maxSamples,T.samples)}function Kt(T){const y=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Pt(T){const y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function he(T,y){const k=T.colorSpace,Z=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==mr&&k!==pi&&(Qt.getTransfer(k)===re?(Z!==bn||j!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function Ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=tt,this.setTextureCube=X,this.rebindTextures=Yt,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Kt}function q0(n,t){function e(i,r=pi){let s;const a=Qt.getTransfer(r);if(i===ni)return n.UNSIGNED_BYTE;if(i===Wo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ql)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jl)return n.BYTE;if(i===jl)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===Go)return n.INT;if(i===Ii)return n.UNSIGNED_INT;if(i===Jn)return n.FLOAT;if(i===Hr)return n.HALF_FLOAT;if(i===tu)return n.ALPHA;if(i===eu)return n.RGB;if(i===bn)return n.RGBA;if(i===nu)return n.LUMINANCE;if(i===iu)return n.LUMINANCE_ALPHA;if(i===ar)return n.DEPTH_COMPONENT;if(i===fr)return n.DEPTH_STENCIL;if(i===ru)return n.RED;if(i===qo)return n.RED_INTEGER;if(i===su)return n.RG;if(i===Yo)return n.RG_INTEGER;if(i===$o)return n.RGBA_INTEGER;if(i===bs||i===ws||i===Ts||i===As)if(a===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===As)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ts)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===As)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eo||i===no||i===io||i===ro)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===eo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===no)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===io)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===so||i===ao||i===oo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===so||i===ao)return a===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===oo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===co||i===lo||i===uo||i===ho||i===fo||i===po||i===mo||i===go||i===_o||i===vo||i===xo||i===Mo||i===yo||i===So)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===co)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ho)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===po)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===go)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_o)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yo)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===So)return a===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rs||i===Eo||i===bo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Rs)return a===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Eo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===au||i===wo||i===To||i===Ao)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===To)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ao)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Y0 extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ot extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $0={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,i),u=this._getHandJoint(l,_);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}const h=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],p=h.position.distanceTo(m.position),f=.02,g=.005;l.inputState.pinching&&p>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ot;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const K0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
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

}`;class J0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Xe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new zn({vertexShader:K0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new fn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j0 extends gr{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,m=null,p=null,f=null,g=null;const _=new J0,d=e.getContextAttributes();let u=null,M=null;const b=[],x=[],P=new Mt;let A=null;const w=new ln;w.viewport=new ve;const R=new ln;R.viewport=new ve;const S=[w,R],v=new Y0;let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let st=b[K];return st===void 0&&(st=new wa,b[K]=st),st.getTargetRaySpace()},this.getControllerGrip=function(K){let st=b[K];return st===void 0&&(st=new wa,b[K]=st),st.getGripSpace()},this.getHand=function(K){let st=b[K];return st===void 0&&(st=new wa,b[K]=st),st.getHandSpace()};function L(K){const st=x.indexOf(K.inputSource);if(st===-1)return;const bt=b[st];bt!==void 0&&(bt.update(K.inputSource,K.frame,l||a),bt.dispatchEvent({type:K.type,data:K.inputSource}))}function B(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",Y);for(let K=0;K<b.length;K++){const st=x[K];st!==null&&(x[K]=null,b[K].disconnect(st))}C=null,G=null,_.reset(),t.setRenderTarget(u),f=null,p=null,m=null,r=null,M=null,ae.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return m},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(u=t.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",B),r.addEventListener("inputsourceschange",Y),d.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),r.renderState.layers===void 0){const st={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,st),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ui(f.framebufferWidth,f.framebufferHeight,{format:bn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let st=null,bt=null,ht=null;d.depth&&(ht=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=d.stencil?fr:ar,bt=d.stencil?dr:Ii);const It={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};m=new XRWebGLBinding(r,e),p=m.createProjectionLayer(It),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),M=new Ui(p.textureWidth,p.textureHeight,{format:bn,type:ni,depthTexture:new Su(p.textureWidth,p.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(K){for(let st=0;st<K.removed.length;st++){const bt=K.removed[st],ht=x.indexOf(bt);ht>=0&&(x[ht]=null,b[ht].disconnect(bt))}for(let st=0;st<K.added.length;st++){const bt=K.added[st];let ht=x.indexOf(bt);if(ht===-1){for(let Bt=0;Bt<b.length;Bt++)if(Bt>=x.length){x.push(bt),ht=Bt;break}else if(x[Bt]===null){x[Bt]=bt,ht=Bt;break}if(ht===-1)break}const It=b[ht];It&&It.connect(bt)}}const q=new D,tt=new D;function X(K,st,bt){q.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(bt.matrixWorld);const ht=q.distanceTo(tt),It=st.projectionMatrix.elements,Bt=bt.projectionMatrix.elements,Yt=It[14]/(It[10]-1),me=It[14]/(It[10]+1),Jt=(It[9]+1)/It[5],xe=(It[9]-1)/It[5],O=(It[8]-1)/It[0],rn=(Bt[8]+1)/Bt[0],$t=Yt*O,Kt=Yt*rn,Pt=ht/(-O+rn),he=Pt*-O;if(st.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(he),K.translateZ(Pt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),It[10]===-1)K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Ct=Yt+Pt,T=me+Pt,y=$t-he,k=Kt+(ht-he),Z=Jt*me/T*Ct,j=xe*me/T*Ct;K.projectionMatrix.makePerspective(y,k,Z,j,Ct,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ut(K,st){st===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(st.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let st=K.near,bt=K.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),v.near=R.near=w.near=st,v.far=R.far=w.far=bt,(C!==v.near||G!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,G=v.far),w.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,v.layers.mask=w.layers.mask|R.layers.mask;const ht=K.parent,It=v.cameras;ut(v,ht);for(let Bt=0;Bt<It.length;Bt++)ut(It[Bt],ht);It.length===2?X(v,w,R):v.projectionMatrix.copy(w.projectionMatrix),gt(K,v,ht)};function gt(K,st,bt){bt===null?K.matrix.copy(st.matrixWorld):(K.matrix.copy(bt.matrixWorld),K.matrix.invert(),K.matrix.multiply(st.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ro*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(K){c=K,p!==null&&(p.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Rt=null;function qt(K,st){if(h=st.getViewerPose(l||a),g=st,h!==null){const bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let ht=!1;bt.length!==v.cameras.length&&(v.cameras.length=0,ht=!0);for(let Bt=0;Bt<bt.length;Bt++){const Yt=bt[Bt];let me=null;if(f!==null)me=f.getViewport(Yt);else{const xe=m.getViewSubImage(p,Yt);me=xe.viewport,Bt===0&&(t.setRenderTargetTextures(M,xe.colorTexture,p.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(M))}let Jt=S[Bt];Jt===void 0&&(Jt=new ln,Jt.layers.enable(Bt),Jt.viewport=new ve,S[Bt]=Jt),Jt.matrix.fromArray(Yt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(Yt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(me.x,me.y,me.width,me.height),Bt===0&&(v.matrix.copy(Jt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ht===!0&&v.cameras.push(Jt)}const It=r.enabledFeatures;if(It&&It.includes("depth-sensing")){const Bt=m.getDepthInformation(bt[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,r.renderState)}}for(let bt=0;bt<b.length;bt++){const ht=x[bt],It=b[bt];ht!==null&&It!==void 0&&It.update(ht,st,l||a)}Rt&&Rt(K,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),g=null}const ae=new Mu;ae.setAnimationLoop(qt),this.setAnimationLoop=function(K){Rt=K},this.dispose=function(){}}}const bi=new Fn,Q0=new pe;function tg(n,t){function e(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function i(d,u){u.color.getRGB(d.fogColor.value,_u(n)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function r(d,u,M,b,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(d,u):u.isMeshToonMaterial?(s(d,u),m(d,u)):u.isMeshPhongMaterial?(s(d,u),h(d,u)):u.isMeshStandardMaterial?(s(d,u),p(d,u),u.isMeshPhysicalMaterial&&f(d,u,x)):u.isMeshMatcapMaterial?(s(d,u),g(d,u)):u.isMeshDepthMaterial?s(d,u):u.isMeshDistanceMaterial?(s(d,u),_(d,u)):u.isMeshNormalMaterial?s(d,u):u.isLineBasicMaterial?(a(d,u),u.isLineDashedMaterial&&o(d,u)):u.isPointsMaterial?c(d,u,M,b):u.isSpriteMaterial?l(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,e(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===We&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,e(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===We&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,e(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,e(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const M=t.get(u),b=M.envMap,x=M.envMapRotation;b&&(d.envMap.value=b,bi.copy(x),bi.x*=-1,bi.y*=-1,bi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),d.envMapRotation.value.setFromMatrix4(Q0.makeRotationFromEuler(bi)),d.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap&&(d.lightMap.value=u.lightMap,d.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,d.lightMapTransform)),u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,d.aoMapTransform))}function a(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform))}function o(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function c(d,u,M,b){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*M,d.scale.value=b*.5,u.map&&(d.map.value=u.map,e(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function l(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,e(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,e(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function m(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,d.roughnessMapTransform)),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function f(d,u,M){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===We&&d.clearcoatNormalScale.value.negate())),u.dispersion>0&&(d.dispersion.value=u.dispersion),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,u){u.matcap&&(d.matcap.value=u.matcap)}function _(d,u){const M=t.get(u).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eg(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){const x=b.program;i.uniformBlockBinding(M,x)}function l(M,b){let x=r[M.id];x===void 0&&(g(M),x=h(M),r[M.id]=x,M.addEventListener("dispose",d));const P=b.program;i.updateUBOMapping(M,P);const A=t.render.frame;s[M.id]!==A&&(p(M),s[M.id]=A)}function h(M){const b=m();M.__bindingPointIndex=b;const x=n.createBuffer(),P=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function m(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const b=r[M.id],x=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,w=x.length;A<w;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,v=R.length;S<v;S++){const C=R[S];if(f(C,A,S,P)===!0){const G=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let Y=0;Y<L.length;Y++){const q=L[Y],tt=_(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,G+B,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,B),B+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,b,x,P){const A=M.value,w=b+"_"+x;if(P[w]===void 0)return typeof A=="number"||typeof A=="boolean"?P[w]=A:P[w]=A.clone(),!0;{const R=P[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return P[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(M){const b=M.uniforms;let x=0;const P=16;for(let w=0,R=b.length;w<R;w++){const S=Array.isArray(b[w])?b[w]:[b[w]];for(let v=0,C=S.length;v<C;v++){const G=S[v],L=Array.isArray(G.value)?G.value:[G.value];for(let B=0,Y=L.length;B<Y;B++){const q=L[B],tt=_(q),X=x%P,ut=X%tt.boundary,gt=X+ut;x+=ut,gt!==0&&P-gt<tt.storage&&(x+=P-gt),G.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=tt.storage}}}const A=x%P;return A>0&&(x+=P-A),M.__size=x,M.__cache={},this}function _(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function d(M){const b=M.target;b.removeEventListener("dispose",d);const x=a.indexOf(b.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function u(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class ng{constructor(t={}){const{canvas:e=Gh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let d=null,u=null;const M=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=Qn,this.toneMappingExposure=1;const x=this;let P=!1,A=0,w=0,R=null,S=-1,v=null;const C=new ve,G=new ve;let L=null;const B=new wt(0);let Y=0,q=e.width,tt=e.height,X=1,ut=null,gt=null;const Rt=new ve(0,0,q,tt),qt=new ve(0,0,q,tt);let ae=!1;const K=new Ko;let st=!1,bt=!1;const ht=new pe,It=new pe,Bt=new D,Yt=new ve,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function xe(){return R===null?X:1}let O=i;function rn(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ho}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),O===null){const U="webgl2";if(O=rn(U,E),O===null)throw rn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $t,Kt,Pt,he,Ct,T,y,k,Z,j,$,Tt,dt,_t,jt,it,vt,Lt,Nt,xt,Zt,Wt,oe,I;function ct(){$t=new om(O),$t.init(),Wt=new q0(O,$t),Kt=new em(O,$t,t,Wt),Pt=new G0(O,$t),Kt.reverseDepthBuffer&&p&&Pt.buffers.depth.setReversed(!0),he=new um(O),Ct=new R0,T=new X0(O,$t,Pt,Ct,Kt,Wt,he),y=new im(x),k=new am(x),Z=new gd(O),oe=new Qp(O,Z),j=new cm(O,Z,he,oe),$=new dm(O,j,Z,he),Nt=new hm(O,Kt,T),it=new nm(Ct),Tt=new A0(x,y,k,$t,Kt,oe,it),dt=new tg(x,Ct),_t=new P0,jt=new O0($t),Lt=new jp(x,y,k,Pt,$,f,c),vt=new H0(x,$,Kt),I=new eg(O,he,Kt,Pt),xt=new tm(O,$t,he),Zt=new lm(O,$t,he),he.programs=Tt.programs,x.capabilities=Kt,x.extensions=$t,x.properties=Ct,x.renderLists=_t,x.shadowMap=vt,x.state=Pt,x.info=he}ct();const W=new j0(x,O);this.xr=W,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=$t.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$t.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(q,tt,!1))},this.getSize=function(E){return E.set(q,tt)},this.setSize=function(E,U,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,tt=U,e.width=Math.floor(E*X),e.height=Math.floor(U*X),H===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(q*X,tt*X).floor()},this.setDrawingBufferSize=function(E,U,H){q=E,tt=U,X=H,e.width=Math.floor(E*H),e.height=Math.floor(U*H),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(Rt)},this.setViewport=function(E,U,H,V){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,U,H,V),Pt.viewport(C.copy(Rt).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(qt)},this.setScissor=function(E,U,H,V){E.isVector4?qt.set(E.x,E.y,E.z,E.w):qt.set(E,U,H,V),Pt.scissor(G.copy(qt).multiplyScalar(X).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(E){Pt.setScissorTest(ae=E)},this.setOpaqueSort=function(E){ut=E},this.setTransparentSort=function(E){gt=E},this.getClearColor=function(E){return E.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(E=!0,U=!0,H=!0){let V=0;if(E){let N=!1;if(R!==null){const rt=R.texture.format;N=rt===$o||rt===Yo||rt===qo}if(N){const rt=R.texture.type,pt=rt===ni||rt===Ii||rt===Fr||rt===dr||rt===Wo||rt===Xo,yt=Lt.getClearColor(),St=Lt.getClearAlpha(),Ft=yt.r,Vt=yt.g,Et=yt.b;pt?(g[0]=Ft,g[1]=Vt,g[2]=Et,g[3]=St,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Ft,_[1]=Vt,_[2]=Et,_[3]=St,O.clearBufferiv(O.COLOR,0,_))}else V|=O.COLOR_BUFFER_BIT}U&&(V|=O.DEPTH_BUFFER_BIT),H&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),_t.dispose(),jt.dispose(),Ct.dispose(),y.dispose(),k.dispose(),$.dispose(),oe.dispose(),I.dispose(),Tt.dispose(),W.dispose(),W.removeEventListener("sessionstart",uc),W.removeEventListener("sessionend",hc),vi.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=he.autoReset,U=vt.enabled,H=vt.autoUpdate,V=vt.needsUpdate,N=vt.type;ct(),he.autoReset=E,vt.enabled=U,vt.autoUpdate=H,vt.needsUpdate=V,vt.type=N}function ft(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ht(E){const U=E.target;U.removeEventListener("dispose",Ht),ge(U)}function ge(E){Ne(E),Ct.remove(E)}function Ne(E){const U=Ct.get(E).programs;U!==void 0&&(U.forEach(function(H){Tt.releaseProgram(H)}),E.isShaderMaterial&&Tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,H,V,N,rt){U===null&&(U=me);const pt=N.isMesh&&N.matrixWorld.determinant()<0,yt=ju(E,U,H,V,N);Pt.setMaterial(V,pt);let St=H.index,Ft=1;if(V.wireframe===!0){if(St=j.getWireframeAttribute(H),St===void 0)return;Ft=2}const Vt=H.drawRange,Et=H.attributes.position;let te=Vt.start*Ft,ce=(Vt.start+Vt.count)*Ft;rt!==null&&(te=Math.max(te,rt.start*Ft),ce=Math.min(ce,(rt.start+rt.count)*Ft)),St!==null?(te=Math.max(te,0),ce=Math.min(ce,St.count)):Et!=null&&(te=Math.max(te,0),ce=Math.min(ce,Et.count));const de=ce-te;if(de<0||de===1/0)return;oe.setup(N,V,yt,H,St);let qe,ee=xt;if(St!==null&&(qe=Z.get(St),ee=Zt,ee.setIndex(qe)),N.isMesh)V.wireframe===!0?(Pt.setLineWidth(V.wireframeLinewidth*xe()),ee.setMode(O.LINES)):ee.setMode(O.TRIANGLES);else if(N.isLine){let At=V.linewidth;At===void 0&&(At=1),Pt.setLineWidth(At*xe()),N.isLineSegments?ee.setMode(O.LINES):N.isLineLoop?ee.setMode(O.LINE_LOOP):ee.setMode(O.LINE_STRIP)}else N.isPoints?ee.setMode(O.POINTS):N.isSprite&&ee.setMode(O.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const At=N._multiDrawStarts,Hn=N._multiDrawCounts,ne=N._multiDrawCount,mn=St?Z.get(St).bytesPerElement:1,zi=Ct.get(V).currentProgram.getUniforms();for(let Ze=0;Ze<ne;Ze++)zi.setValue(O,"_gl_DrawID",Ze),ee.render(At[Ze]/mn,Hn[Ze])}else if(N.isInstancedMesh)ee.renderInstances(te,de,N.count);else if(H.isInstancedBufferGeometry){const At=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Hn=Math.min(H.instanceCount,At);ee.renderInstances(te,de,Hn)}else ee.render(te,de)};function ie(E,U,H){E.transparent===!0&&E.side===Pn&&E.forceSinglePass===!1?(E.side=We,E.needsUpdate=!0,qr(E,U,H),E.side=_i,E.needsUpdate=!0,qr(E,U,H),E.side=Pn):qr(E,U,H)}this.compile=function(E,U,H=null){H===null&&(H=E),u=jt.get(H),u.init(U),b.push(u),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),E!==H&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const V=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const rt=N.material;if(rt)if(Array.isArray(rt))for(let pt=0;pt<rt.length;pt++){const yt=rt[pt];ie(yt,H,N),V.add(yt)}else ie(rt,H,N),V.add(rt)}),b.pop(),u=null,V},this.compileAsync=function(E,U,H=null){const V=this.compile(E,U,H);return new Promise(N=>{function rt(){if(V.forEach(function(pt){Ct.get(pt).currentProgram.isReady()&&V.delete(pt)}),V.size===0){N(E);return}setTimeout(rt,10)}$t.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let pn=null;function kn(E){pn&&pn(E)}function uc(){vi.stop()}function hc(){vi.start()}const vi=new Mu;vi.setAnimationLoop(kn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(E){pn=E,W.setAnimationLoop(E),E===null?vi.stop():vi.start()},W.addEventListener("sessionstart",uc),W.addEventListener("sessionend",hc),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,R),u=jt.get(E,b.length),u.init(U),b.push(u),It.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(It),bt=this.localClippingEnabled,st=it.init(this.clippingPlanes,bt),d=_t.get(E,M.length),d.init(),M.push(d),W.enabled===!0&&W.isPresenting===!0){const rt=x.xr.getDepthSensingMesh();rt!==null&&Ks(rt,U,-1/0,x.sortObjects)}Ks(E,U,0,x.sortObjects),d.finish(),x.sortObjects===!0&&d.sort(ut,gt),Jt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Jt&&Lt.addToRenderList(d,E),this.info.render.frame++,st===!0&&it.beginShadows();const H=u.state.shadowsArray;vt.render(H,E,U),st===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=d.opaque,N=d.transmissive;if(u.setupLights(),U.isArrayCamera){const rt=U.cameras;if(N.length>0)for(let pt=0,yt=rt.length;pt<yt;pt++){const St=rt[pt];fc(V,N,E,St)}Jt&&Lt.render(E);for(let pt=0,yt=rt.length;pt<yt;pt++){const St=rt[pt];dc(d,E,St,St.viewport)}}else N.length>0&&fc(V,N,E,U),Jt&&Lt.render(E),dc(d,E,U);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,U),oe.resetDefaultState(),S=-1,v=null,b.pop(),b.length>0?(u=b[b.length-1],st===!0&&it.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,M.pop(),M.length>0?d=M[M.length-1]:d=null};function Ks(E,U,H,V){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){V&&Yt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(It);const pt=$.update(E),yt=E.material;yt.visible&&d.push(E,pt,yt,H,Yt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||K.intersectsObject(E))){const pt=$.update(E),yt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Yt.copy(E.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Yt.copy(pt.boundingSphere.center)),Yt.applyMatrix4(E.matrixWorld).applyMatrix4(It)),Array.isArray(yt)){const St=pt.groups;for(let Ft=0,Vt=St.length;Ft<Vt;Ft++){const Et=St[Ft],te=yt[Et.materialIndex];te&&te.visible&&d.push(E,pt,te,H,Yt.z,Et)}}else yt.visible&&d.push(E,pt,yt,H,Yt.z,null)}}const rt=E.children;for(let pt=0,yt=rt.length;pt<yt;pt++)Ks(rt[pt],U,H,V)}function dc(E,U,H,V){const N=E.opaque,rt=E.transmissive,pt=E.transparent;u.setupLightsView(H),st===!0&&it.setGlobalState(x.clippingPlanes,H),V&&Pt.viewport(C.copy(V)),N.length>0&&Xr(N,U,H),rt.length>0&&Xr(rt,U,H),pt.length>0&&Xr(pt,U,H),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function fc(E,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new Ui(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?Hr:ni,minFilter:Li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const rt=u.state.transmissionRenderTarget[V.id],pt=V.viewport||C;rt.setSize(pt.z,pt.w);const yt=x.getRenderTarget();x.setRenderTarget(rt),x.getClearColor(B),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Jt&&Lt.render(H);const St=x.toneMapping;x.toneMapping=Qn;const Ft=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),st===!0&&it.setGlobalState(x.clippingPlanes,V),Xr(E,H,V),T.updateMultisampleRenderTarget(rt),T.updateRenderTargetMipmap(rt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Et=0,te=U.length;Et<te;Et++){const ce=U[Et],de=ce.object,qe=ce.geometry,ee=ce.material,At=ce.group;if(ee.side===Pn&&de.layers.test(V.layers)){const Hn=ee.side;ee.side=We,ee.needsUpdate=!0,pc(de,H,V,qe,ee,At),ee.side=Hn,ee.needsUpdate=!0,Vt=!0}}Vt===!0&&(T.updateMultisampleRenderTarget(rt),T.updateRenderTargetMipmap(rt))}x.setRenderTarget(yt),x.setClearColor(B,Y),Ft!==void 0&&(V.viewport=Ft),x.toneMapping=St}function Xr(E,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,rt=E.length;N<rt;N++){const pt=E[N],yt=pt.object,St=pt.geometry,Ft=V===null?pt.material:V,Vt=pt.group;yt.layers.test(H.layers)&&pc(yt,U,H,St,Ft,Vt)}}function pc(E,U,H,V,N,rt){E.onBeforeRender(x,U,H,V,N,rt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,U,H,V,E,rt),N.transparent===!0&&N.side===Pn&&N.forceSinglePass===!1?(N.side=We,N.needsUpdate=!0,x.renderBufferDirect(H,U,V,N,E,rt),N.side=_i,N.needsUpdate=!0,x.renderBufferDirect(H,U,V,N,E,rt),N.side=Pn):x.renderBufferDirect(H,U,V,N,E,rt),E.onAfterRender(x,U,H,V,N,rt)}function qr(E,U,H){U.isScene!==!0&&(U=me);const V=Ct.get(E),N=u.state.lights,rt=u.state.shadowsArray,pt=N.state.version,yt=Tt.getParameters(E,N.state,rt,U,H),St=Tt.getProgramCacheKey(yt);let Ft=V.programs;V.environment=E.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(E.isMeshStandardMaterial?k:y).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ft===void 0&&(E.addEventListener("dispose",Ht),Ft=new Map,V.programs=Ft);let Vt=Ft.get(St);if(Vt!==void 0){if(V.currentProgram===Vt&&V.lightsStateVersion===pt)return gc(E,yt),Vt}else yt.uniforms=Tt.getUniforms(E),E.onBeforeCompile(yt,x),Vt=Tt.acquireProgram(yt,St),Ft.set(St,Vt),V.uniforms=yt.uniforms;const Et=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=it.uniform),gc(E,yt),V.needsLights=th(E),V.lightsStateVersion=pt,V.needsLights&&(Et.ambientLightColor.value=N.state.ambient,Et.lightProbe.value=N.state.probe,Et.directionalLights.value=N.state.directional,Et.directionalLightShadows.value=N.state.directionalShadow,Et.spotLights.value=N.state.spot,Et.spotLightShadows.value=N.state.spotShadow,Et.rectAreaLights.value=N.state.rectArea,Et.ltc_1.value=N.state.rectAreaLTC1,Et.ltc_2.value=N.state.rectAreaLTC2,Et.pointLights.value=N.state.point,Et.pointLightShadows.value=N.state.pointShadow,Et.hemisphereLights.value=N.state.hemi,Et.directionalShadowMap.value=N.state.directionalShadowMap,Et.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Et.spotShadowMap.value=N.state.spotShadowMap,Et.spotLightMatrix.value=N.state.spotLightMatrix,Et.spotLightMap.value=N.state.spotLightMap,Et.pointShadowMap.value=N.state.pointShadowMap,Et.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Vt,V.uniformsList=null,Vt}function mc(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Cs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function gc(E,U){const H=Ct.get(E);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function ju(E,U,H,V,N){U.isScene!==!0&&(U=me),T.resetTextureUnits();const rt=U.fog,pt=V.isMeshStandardMaterial?U.environment:null,yt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:mr,St=(V.isMeshStandardMaterial?k:y).get(V.envMap||pt),Ft=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Vt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Et=!!H.morphAttributes.position,te=!!H.morphAttributes.normal,ce=!!H.morphAttributes.color;let de=Qn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(de=x.toneMapping);const qe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ee=qe!==void 0?qe.length:0,At=Ct.get(V),Hn=u.state.lights;if(st===!0&&(bt===!0||E!==v)){const sn=E===v&&V.id===S;it.setState(V,E,sn)}let ne=!1;V.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Hn.state.version||At.outputColorSpace!==yt||N.isBatchedMesh&&At.batching===!1||!N.isBatchedMesh&&At.batching===!0||N.isBatchedMesh&&At.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&At.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&At.instancing===!1||!N.isInstancedMesh&&At.instancing===!0||N.isSkinnedMesh&&At.skinning===!1||!N.isSkinnedMesh&&At.skinning===!0||N.isInstancedMesh&&At.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&At.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&At.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&At.instancingMorph===!1&&N.morphTexture!==null||At.envMap!==St||V.fog===!0&&At.fog!==rt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==it.numPlanes||At.numIntersection!==it.numIntersection)||At.vertexAlphas!==Ft||At.vertexTangents!==Vt||At.morphTargets!==Et||At.morphNormals!==te||At.morphColors!==ce||At.toneMapping!==de||At.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,At.__version=V.version);let mn=At.currentProgram;ne===!0&&(mn=qr(V,U,N));let zi=!1,Ze=!1,Mr=!1;const fe=mn.getUniforms(),An=At.uniforms;if(Pt.useProgram(mn.program)&&(zi=!0,Ze=!0,Mr=!0),V.id!==S&&(S=V.id,Ze=!0),zi||v!==E){Pt.buffers.depth.getReversed()?(ht.copy(E.projectionMatrix),Xh(ht),qh(ht),fe.setValue(O,"projectionMatrix",ht)):fe.setValue(O,"projectionMatrix",E.projectionMatrix),fe.setValue(O,"viewMatrix",E.matrixWorldInverse);const si=fe.map.cameraPosition;si!==void 0&&si.setValue(O,Bt.setFromMatrixPosition(E.matrixWorld)),Kt.logarithmicDepthBuffer&&fe.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&fe.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Ze=!0,Mr=!0)}if(N.isSkinnedMesh){fe.setOptional(O,N,"bindMatrix"),fe.setOptional(O,N,"bindMatrixInverse");const sn=N.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),fe.setValue(O,"boneTexture",sn.boneTexture,T))}N.isBatchedMesh&&(fe.setOptional(O,N,"batchingTexture"),fe.setValue(O,"batchingTexture",N._matricesTexture,T),fe.setOptional(O,N,"batchingIdTexture"),fe.setValue(O,"batchingIdTexture",N._indirectTexture,T),fe.setOptional(O,N,"batchingColorTexture"),N._colorsTexture!==null&&fe.setValue(O,"batchingColorTexture",N._colorsTexture,T));const yr=H.morphAttributes;if((yr.position!==void 0||yr.normal!==void 0||yr.color!==void 0)&&Nt.update(N,H,mn),(Ze||At.receiveShadow!==N.receiveShadow)&&(At.receiveShadow=N.receiveShadow,fe.setValue(O,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(An.envMap.value=St,An.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(An.envMapIntensity.value=U.environmentIntensity),Ze&&(fe.setValue(O,"toneMappingExposure",x.toneMappingExposure),At.needsLights&&Qu(An,Mr),rt&&V.fog===!0&&dt.refreshFogUniforms(An,rt),dt.refreshMaterialUniforms(An,V,X,tt,u.state.transmissionRenderTarget[E.id]),Cs.upload(O,mc(At),An,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Cs.upload(O,mc(At),An,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&fe.setValue(O,"center",N.center),fe.setValue(O,"modelViewMatrix",N.modelViewMatrix),fe.setValue(O,"normalMatrix",N.normalMatrix),fe.setValue(O,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const sn=V.uniformsGroups;for(let si=0,ai=sn.length;si<ai;si++){const _c=sn[si];I.update(_c,mn),I.bind(_c,mn)}}return mn}function Qu(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function th(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,H){Ct.get(E.texture).__webglTexture=U,Ct.get(E.depthTexture).__webglTexture=H;const V=Ct.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const H=Ct.get(E);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,H=0){R=E,A=U,w=H;let V=!0,N=null,rt=!1,pt=!1;if(E){const St=Ct.get(E);if(St.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(O.FRAMEBUFFER,null),V=!1;else if(St.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(St.__hasExternalTextures)T.rebindTextures(E,Ct.get(E.texture).__webglTexture,Ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Et=E.depthTexture;if(St.__boundDepthTexture!==Et){if(Et!==null&&Ct.has(Et)&&(E.width!==Et.image.width||E.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Ft=E.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(pt=!0);const Vt=Ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?N=Vt[U][H]:N=Vt[U],rt=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?N=Ct.get(E).__webglMultisampledFramebuffer:Array.isArray(Vt)?N=Vt[H]:N=Vt,C.copy(E.viewport),G.copy(E.scissor),L=E.scissorTest}else C.copy(Rt).multiplyScalar(X).floor(),G.copy(qt).multiplyScalar(X).floor(),L=ae;if(Pt.bindFramebuffer(O.FRAMEBUFFER,N)&&V&&Pt.drawBuffers(E,N),Pt.viewport(C),Pt.scissor(G),Pt.setScissorTest(L),rt){const St=Ct.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,H)}else if(pt){const St=Ct.get(E.texture),Ft=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,St.__webglTexture,H||0,Ft)}S=-1},this.readRenderTargetPixels=function(E,U,H,V,N,rt,pt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){Pt.bindFramebuffer(O.FRAMEBUFFER,yt);try{const St=E.texture,Ft=St.format,Vt=St.type;if(!Kt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-V&&H>=0&&H<=E.height-N&&O.readPixels(U,H,V,N,Wt.convert(Ft),Wt.convert(Vt),rt)}finally{const St=R!==null?Ct.get(R).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(E,U,H,V,N,rt,pt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){const St=E.texture,Ft=St.format,Vt=St.type;if(!Kt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-V&&H>=0&&H<=E.height-N){Pt.bindFramebuffer(O.FRAMEBUFFER,yt);const Et=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Et),O.bufferData(O.PIXEL_PACK_BUFFER,rt.byteLength,O.STREAM_READ),O.readPixels(U,H,V,N,Wt.convert(Ft),Wt.convert(Vt),0);const te=R!==null?Ct.get(R).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,te);const ce=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Wh(O,ce,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Et),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,rt),O.deleteBuffer(Et),O.deleteSync(ce),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,H=0){E.isTexture!==!0&&(Pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-H),N=Math.floor(E.image.width*V),rt=Math.floor(E.image.height*V),pt=U!==null?U.x:0,yt=U!==null?U.y:0;T.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,pt,yt,N,rt),Pt.unbindTexture()},this.copyTextureToTexture=function(E,U,H=null,V=null,N=0){E.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let rt,pt,yt,St,Ft,Vt,Et,te,ce;const de=E.isCompressedTexture?E.mipmaps[N]:E.image;H!==null?(rt=H.max.x-H.min.x,pt=H.max.y-H.min.y,yt=H.isBox3?H.max.z-H.min.z:1,St=H.min.x,Ft=H.min.y,Vt=H.isBox3?H.min.z:0):(rt=de.width,pt=de.height,yt=de.depth||1,St=0,Ft=0,Vt=0),V!==null?(Et=V.x,te=V.y,ce=V.z):(Et=0,te=0,ce=0);const qe=Wt.convert(U.format),ee=Wt.convert(U.type);let At;U.isData3DTexture?(T.setTexture3D(U,0),At=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),At=O.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),At=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const Hn=O.getParameter(O.UNPACK_ROW_LENGTH),ne=O.getParameter(O.UNPACK_IMAGE_HEIGHT),mn=O.getParameter(O.UNPACK_SKIP_PIXELS),zi=O.getParameter(O.UNPACK_SKIP_ROWS),Ze=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,de.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,de.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,St),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ft),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Vt);const Mr=E.isDataArrayTexture||E.isData3DTexture,fe=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const An=Ct.get(E),yr=Ct.get(U),sn=Ct.get(An.__renderTarget),si=Ct.get(yr.__renderTarget);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,sn.__webglFramebuffer),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ai=0;ai<yt;ai++)Mr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(E).__webglTexture,N,Vt+ai),E.isDepthTexture?(fe&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(U).__webglTexture,N,ce+ai),O.blitFramebuffer(St,Ft,rt,pt,Et,te,rt,pt,O.DEPTH_BUFFER_BIT,O.NEAREST)):fe?O.copyTexSubImage3D(At,N,Et,te,ce+ai,St,Ft,rt,pt):O.copyTexSubImage2D(At,N,Et,te,ce+ai,St,Ft,rt,pt);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else fe?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(At,N,Et,te,ce,rt,pt,yt,qe,ee,de.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(At,N,Et,te,ce,rt,pt,yt,qe,de.data):O.texSubImage3D(At,N,Et,te,ce,rt,pt,yt,qe,ee,de):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,N,Et,te,rt,pt,qe,ee,de.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,N,Et,te,de.width,de.height,qe,de.data):O.texSubImage2D(O.TEXTURE_2D,N,Et,te,rt,pt,qe,ee,de);O.pixelStorei(O.UNPACK_ROW_LENGTH,Hn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ne),O.pixelStorei(O.UNPACK_SKIP_PIXELS,mn),O.pixelStorei(O.UNPACK_SKIP_ROWS,zi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ze),N===0&&U.generateMipmaps&&O.generateMipmap(At),Pt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,H=null,V=null,N=0){return E.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0),Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,H,V,N)},this.initRenderTarget=function(E){Ct.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Pt.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,Pt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Jo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(t),this.density=e}clone(){return new Jo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ig extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class jo extends _r{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Os=new D,Fs=new D,gl=new pe,Ar=new du,ps=new Gs,Ta=new D,_l=new D;class Au extends Ae{constructor(t=new He,e=new jo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Os.fromBufferAttribute(e,r-1),Fs.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Os.distanceTo(Fs);t.setAttribute("lineDistance",new se(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere),ps.applyMatrix4(r),ps.radius+=s,t.ray.intersectsSphere(ps)===!1)return;gl.copy(r).invert(),Ar.copy(t.ray).applyMatrix4(gl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,d=g-1;_<d;_+=l){const u=h.getX(_),M=h.getX(_+1),b=ms(this,t,Ar,c,u,M);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(g-1),d=h.getX(f),u=ms(this,t,Ar,c,_,d);u&&e.push(u)}}else{const f=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let _=f,d=g-1;_<d;_+=l){const u=ms(this,t,Ar,c,_,_+1);u&&e.push(u)}if(this.isLineLoop){const _=ms(this,t,Ar,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ms(n,t,e,i,r,s){const a=n.geometry.attributes.position;if(Os.fromBufferAttribute(a,r),Fs.fromBufferAttribute(a,s),e.distanceSqToSegment(Os,Fs,Ta,_l)>i)return;Ta.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ta);if(!(c<t.near||c>t.far))return{distance:c,point:_l.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}class Qo extends Xe{constructor(t,e,i,r,s,a,o,c,l){super(t,e,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=i[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===a)return r/(s-1);const h=i[r],p=i[r+1]-h,f=(a-h)/p;return(r+f)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new Mt:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new D,r=[],s=[],a=[],o=new D,c=new pe;for(let f=0;f<=t;f++){const g=f/t;r[f]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),m=Math.abs(r[0].y),p=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),m<=l&&(l=m,i.set(0,1,0)),p<=l&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(De(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(r[f],s[f])}if(e===!0){let f=Math.acos(De(s[0].dot(s[t]),-1,1));f/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class tc extends Bn{constructor(t=0,e=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Mt){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*h-f*m+this.aX,l=p*m+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class rg extends tc{constructor(t,e,i,r,s,a){super(t,e,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ec(){let n=0,t=0,e=0,i=0;function r(s,a,o,c){n=s,t=o,e=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,m){let p=(a-s)/l-(o-s)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+m)+(c-o)/m;p*=h,f*=h,r(a,o,p,f)},calc:function(s){const a=s*s,o=a*s;return n+t*s+e*a+i*o}}}const gs=new D,Aa=new ec,Ra=new ec,Ca=new ec;class sg extends Bn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new D){const i=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=r[(o-1)%s]:(gs.subVectors(r[0],r[1]).add(r[0]),l=gs);const m=r[o%s],p=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(gs.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=gs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(m),f),_=Math.pow(m.distanceToSquared(p),f),d=Math.pow(p.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),Aa.initNonuniformCatmullRom(l.x,m.x,p.x,h.x,g,_,d),Ra.initNonuniformCatmullRom(l.y,m.y,p.y,h.y,g,_,d),Ca.initNonuniformCatmullRom(l.z,m.z,p.z,h.z,g,_,d)}else this.curveType==="catmullrom"&&(Aa.initCatmullRom(l.x,m.x,p.x,h.x,this.tension),Ra.initCatmullRom(l.y,m.y,p.y,h.y,this.tension),Ca.initCatmullRom(l.z,m.z,p.z,h.z,this.tension));return i.set(Aa.calc(c),Ra.calc(c),Ca.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vl(n,t,e,i,r){const s=(i-t)*.5,a=(r-e)*.5,o=n*n,c=n*o;return(2*e-2*i+s+a)*c+(-3*e+3*i-2*s-a)*o+s*n+e}function ag(n,t){const e=1-n;return e*e*t}function og(n,t){return 2*(1-n)*n*t}function cg(n,t){return n*n*t}function Lr(n,t,e,i){return ag(n,t)+og(n,e)+cg(n,i)}function lg(n,t){const e=1-n;return e*e*e*t}function ug(n,t){const e=1-n;return 3*e*e*n*t}function hg(n,t){return 3*(1-n)*n*n*t}function dg(n,t){return n*n*n*t}function Ir(n,t,e,i,r){return lg(n,t)+ug(n,e)+hg(n,i)+dg(n,r)}class Ru extends Bn{constructor(t=new Mt,e=new Mt,i=new Mt,r=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new Mt){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ir(t,r.x,s.x,a.x,o.x),Ir(t,r.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fg extends Bn{constructor(t=new D,e=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new D){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Ir(t,r.x,s.x,a.x,o.x),Ir(t,r.y,s.y,a.y,o.y),Ir(t,r.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Cu extends Bn{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pg extends Bn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pu extends Bn{constructor(t=new Mt,e=new Mt,i=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Mt){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(Lr(t,r.x,s.x,a.x),Lr(t,r.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mg extends Bn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(Lr(t,r.x,s.x,a.x),Lr(t,r.y,s.y,a.y),Lr(t,r.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Du extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){const i=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],m=r[a>r.length-3?r.length-1:a+2];return i.set(vl(o,c.x,l.x,h.x,m.x),vl(o,c.y,l.y,h.y,m.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new Mt().fromArray(r))}return this}}var xl=Object.freeze({__proto__:null,ArcCurve:rg,CatmullRomCurve3:sg,CubicBezierCurve:Ru,CubicBezierCurve3:fg,EllipseCurve:tc,LineCurve:Cu,LineCurve3:pg,QuadraticBezierCurve:Pu,QuadraticBezierCurve3:mg,SplineCurve:Du});class gg extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new xl[r.type]().fromJSON(r))}return this}}class _g extends gg{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Cu(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new Pu(this.currentPoint.clone(),new Mt(t,e),new Mt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,a){const o=new Ru(this.currentPoint.clone(),new Mt(t,e),new Mt(i,r),new Mt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Du(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,r,s,a),this}absarc(t,e,i,r,s,a){return this.absellipse(t,e,i,i,r,s,a),this}ellipse(t,e,i,r,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,r,s,a,o,c),this}absellipse(t,e,i,r,s,a,o,c){const l=new tc(t,e,i,r,s,a,o,c);if(this.curves.length>0){const m=l.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nc extends He{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:r},e=Math.floor(e),r=De(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],h=1/e,m=new D,p=new Mt,f=new D,g=new D,_=new D;let d=0,u=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:d=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,f.x=u*1,f.y=-d,f.z=u*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:d=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,f.x=u*1,f.y=-d,f.z=u*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){const b=i+M*h*r,x=Math.sin(b),P=Math.cos(b);for(let A=0;A<=t.length-1;A++){m.x=t[A].x*x,m.y=t[A].y,m.z=t[A].x*P,a.push(m.x,m.y,m.z),p.x=M/e,p.y=A/(t.length-1),o.push(p.x,p.y);const w=c[3*A+0]*x,R=c[3*A+1],S=c[3*A+0]*P;l.push(w,R,S)}}for(let M=0;M<e;M++)for(let b=0;b<t.length-1;b++){const x=b+M*t.length,P=x,A=x+t.length,w=x+t.length+1,R=x+1;s.push(P,A,R),s.push(w,R,A)}this.setIndex(s),this.setAttribute("position",new se(a,3)),this.setAttribute("uv",new se(o,2)),this.setAttribute("normal",new se(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.points,t.segments,t.phiStart,t.phiLength)}}class dn extends nc{constructor(t=1,e=1,i=4,r=8){const s=new _g;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:r}}static fromJSON(t){return new dn(t.radius,t.length,t.capSegments,t.radialSegments)}}class zt extends He{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],m=[],p=[],f=[];let g=0;const _=[],d=i/2;let u=0;M(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(p,3)),this.setAttribute("uv",new se(f,2));function M(){const x=new D,P=new D;let A=0;const w=(e-t)/i;for(let R=0;R<=s;R++){const S=[],v=R/s,C=v*(e-t)+t;for(let G=0;G<=r;G++){const L=G/r,B=L*c+o,Y=Math.sin(B),q=Math.cos(B);P.x=C*Y,P.y=-v*i+d,P.z=C*q,m.push(P.x,P.y,P.z),x.set(Y,w,q).normalize(),p.push(x.x,x.y,x.z),f.push(L,1-v),S.push(g++)}_.push(S)}for(let R=0;R<r;R++)for(let S=0;S<s;S++){const v=_[S][R],C=_[S+1][R],G=_[S+1][R+1],L=_[S][R+1];(t>0||S!==0)&&(h.push(v,C,L),A+=3),(e>0||S!==s-1)&&(h.push(C,G,L),A+=3)}l.addGroup(u,A,0),u+=A}function b(x){const P=g,A=new Mt,w=new D;let R=0;const S=x===!0?t:e,v=x===!0?1:-1;for(let G=1;G<=r;G++)m.push(0,d*v,0),p.push(0,v,0),f.push(.5,.5),g++;const C=g;for(let G=0;G<=r;G++){const B=G/r*c+o,Y=Math.cos(B),q=Math.sin(B);w.x=S*q,w.y=d*v,w.z=S*Y,m.push(w.x,w.y,w.z),p.push(0,v,0),A.x=Y*.5+.5,A.y=q*.5*v+.5,f.push(A.x,A.y),g++}for(let G=0;G<r;G++){const L=P+G,B=C+G;x===!0?h.push(B,B+1,L):h.push(B+1,B,L),R+=3}l.addGroup(u,R,x===!0?1:2),u+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ke extends zt{constructor(t=1,e=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ke(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ic extends He{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],a=[];o(r),l(i),h(),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(s.slice(),3)),this.setAttribute("uv",new se(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const b=new D,x=new D,P=new D;for(let A=0;A<e.length;A+=3)f(e[A+0],b),f(e[A+1],x),f(e[A+2],P),c(b,x,P,M)}function c(M,b,x,P){const A=P+1,w=[];for(let R=0;R<=A;R++){w[R]=[];const S=M.clone().lerp(x,R/A),v=b.clone().lerp(x,R/A),C=A-R;for(let G=0;G<=C;G++)G===0&&R===A?w[R][G]=S:w[R][G]=S.clone().lerp(v,G/C)}for(let R=0;R<A;R++)for(let S=0;S<2*(A-R)-1;S++){const v=Math.floor(S/2);S%2===0?(p(w[R][v+1]),p(w[R+1][v]),p(w[R][v])):(p(w[R][v+1]),p(w[R+1][v+1]),p(w[R+1][v]))}}function l(M){const b=new D;for(let x=0;x<s.length;x+=3)b.x=s[x+0],b.y=s[x+1],b.z=s[x+2],b.normalize().multiplyScalar(M),s[x+0]=b.x,s[x+1]=b.y,s[x+2]=b.z}function h(){const M=new D;for(let b=0;b<s.length;b+=3){M.x=s[b+0],M.y=s[b+1],M.z=s[b+2];const x=d(M)/2/Math.PI+.5,P=u(M)/Math.PI+.5;a.push(x,1-P)}g(),m()}function m(){for(let M=0;M<a.length;M+=6){const b=a[M+0],x=a[M+2],P=a[M+4],A=Math.max(b,x,P),w=Math.min(b,x,P);A>.9&&w<.1&&(b<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),P<.2&&(a[M+4]+=1))}}function p(M){s.push(M.x,M.y,M.z)}function f(M,b){const x=M*3;b.x=t[x+0],b.y=t[x+1],b.z=t[x+2]}function g(){const M=new D,b=new D,x=new D,P=new D,A=new Mt,w=new Mt,R=new Mt;for(let S=0,v=0;S<s.length;S+=9,v+=6){M.set(s[S+0],s[S+1],s[S+2]),b.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),A.set(a[v+0],a[v+1]),w.set(a[v+2],a[v+3]),R.set(a[v+4],a[v+5]),P.copy(M).add(b).add(x).divideScalar(3);const C=d(P);_(A,v+0,M,C),_(w,v+2,b,C),_(R,v+4,x,C)}}function _(M,b,x,P){P<0&&M.x===1&&(a[b]=M.x-1),x.x===0&&x.z===0&&(a[b]=P/2/Math.PI+.5)}function d(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ic(t.vertices,t.indices,t.radius,t.details)}}class rc extends ic{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rc(t.radius,t.detail)}}class sc extends He{constructor(t=.5,e=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],h=[];let m=t;const p=(e-t)/r,f=new D,g=new Mt;for(let _=0;_<=r;_++){for(let d=0;d<=i;d++){const u=s+d/i*a;f.x=m*Math.cos(u),f.y=m*Math.sin(u),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}m+=p}for(let _=0;_<r;_++){const d=_*(i+1);for(let u=0;u<i;u++){const M=u+d,b=M,x=M+i+1,P=M+i+2,A=M+1;o.push(b,x,A),o.push(x,P,A)}}this.setIndex(o),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ye extends He{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],m=new D,p=new D,f=[],g=[],_=[],d=[];for(let u=0;u<=i;u++){const M=[],b=u/i;let x=0;u===0&&a===0?x=.5/e:u===i&&c===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const A=P/e;m.x=-t*Math.cos(r+A*s)*Math.sin(a+b*o),m.y=t*Math.cos(a+b*o),m.z=t*Math.sin(r+A*s)*Math.sin(a+b*o),g.push(m.x,m.y,m.z),p.copy(m).normalize(),_.push(p.x,p.y,p.z),d.push(A+x,1-b),M.push(l++)}h.push(M)}for(let u=0;u<i;u++)for(let M=0;M<e;M++){const b=h[u][M+1],x=h[u][M],P=h[u+1][M],A=h[u+1][M+1];(u!==0||a>0)&&f.push(b,x,A),(u!==i-1||c<Math.PI)&&f.push(x,P,A)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ii extends He{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],l=[],h=new D,m=new D,p=new D;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){const _=g/r*s,d=f/i*Math.PI*2;m.x=(t+e*Math.cos(d))*Math.cos(_),m.y=(t+e*Math.cos(d))*Math.sin(_),m.z=e*Math.sin(d),o.push(m.x,m.y,m.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(m,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){const _=(r+1)*f+g-1,d=(r+1)*(f-1)+g-1,u=(r+1)*(f-1)+g,M=(r+1)*f+g;a.push(_,d,M),a.push(d,u,M)}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Le extends _r{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lu extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vg extends Lu{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Pa=new pe,Ml=new D,yl=new D;class xg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ml.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ml),yl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yl),e.updateMatrixWorld(),Pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Mg extends xg{constructor(){super(new yu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Iu extends Lu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Mg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ho);const F={sky:6988748,oceanDeep:3108758,rock:7172456,rockDark:4869703,grass:7306572,grassLit:8292949,sand:13811345,wood:8017203,woodMid:6044964,woodDark:3810838,white:16053744,green:3115592,greenDeep:2055216,skin:13350026,skinShadow:11770478,black:1711130,clothBlack:2763818,clothGreen:2980418,hatStraw:12886362,torch:16757850,dirt:9073480},tn=42,Ut={x:118,z:-8,r:28},Da={x:1.6,y:2.1,z:36.2};function yg(n=256){const t=document.createElement("canvas");t.width=n,t.height=n;const e=t.getContext("2d");e.clearRect(0,0,n,n);const i=n/2,r=n/2,s=n*.62,a=n*.22,o=-.48;e.translate(i,r),e.rotate(o);const c=()=>{e.beginPath(),e.moveTo(-s/2,-a),e.lineTo(s/2,-a),e.arc(s/2,0,a,-Math.PI/2,Math.PI/2),e.lineTo(-s/2,a),e.arc(-s/2,0,a,Math.PI/2,-Math.PI/2),e.closePath()};return e.save(),c(),e.fillStyle="#16382a",e.fill(),e.restore(),e.save(),e.beginPath(),e.rect(-s,-n,s,n*2),e.clip(),c(),e.fillStyle="#6ed18a",e.fill(),e.restore(),e.save(),e.beginPath(),e.rect(0,-n,s,n*2),e.clip(),c(),e.fillStyle="#f4f8f5",e.fill(),e.restore(),e.lineJoin="round",e.lineWidth=n*.055,c(),e.strokeStyle="#16382a",e.stroke(),t}let Qi=null;function Sg(){return Qi||(Qi=new Qo(yg(256)),Qi.colorSpace=Be,Qi.anisotropy=8,Qi)}function ac(n=1){const t=new ot;t.name="pump-pill";const e=new nn({map:Sg(),transparent:!0,depthWrite:!1,toneMapped:!1}),i=new nt(new fn(1.15*n,1.15*n),e);return t.add(i),t}function Eg(n=1){return ac(n*.28)}const un=(n,t={})=>new Le({color:n,flatShading:!0,...t});function _e(n,t,e,i,r=0){const s=new nt(new et(n,t,e),un(i));return s.position.y=r,s}function Ge(n,t,e,i,r=0,s=6){const a=new nt(new zt(n,t,e,s),un(i));return a.position.y=r,a}function Zn(n,t,e=0,i=6){const r=new nt(new ye(n,i,i),un(t));return r.position.y=e,r}function _s(n,t,e,i=0){const r=new nt(new dn(n,t,2,6),un(e));return r.position.y=i,r}const Sl={DEFAULT:{hat:"cap",hatColor:F.clothBlack,shirt:F.white,pants:F.clothBlack,shoes:F.white,extra:"tee"},FISHERMAN:{hat:"bucket",hatColor:F.clothGreen,shirt:F.white,pants:F.clothGreen,shoes:F.clothGreen,extra:"overalls",prop:"rod"},HUNTER:{hat:"beanie",hatColor:F.clothBlack,shirt:F.clothBlack,pants:F.clothBlack,shoes:F.white,extra:"tee",prop:"gun"},HARVESTER:{hat:"cap",hatColor:F.white,shirt:F.white,pants:F.clothGreen,shoes:F.white,extra:"overalls",prop:"axe"},TRADER:{hat:"top",hatColor:F.clothGreen,shirt:F.clothGreen,pants:F.clothGreen,shoes:F.clothBlack,extra:"suit"},PIRATE:{hat:"tricorn",hatColor:F.clothBlack,shirt:F.white,pants:F.clothBlack,shoes:F.clothBlack,extra:"coat"},BUILDER:{hat:"hardhat",hatColor:F.white,shirt:F.clothBlack,pants:F.clothBlack,shoes:F.white,extra:"vest"},SCOUT:{hat:"cap",hatColor:F.clothGreen,shirt:F.clothGreen,pants:F.clothBlack,shoes:F.white,extra:"pack"},CHEF:{hat:"toque",hatColor:F.white,shirt:F.white,pants:F.clothBlack,shoes:F.clothBlack,extra:"apron",prop:"pan"},BEACHGOER:{hat:"straw",hatColor:F.hatStraw,shirt:4165461,pants:F.clothGreen,shoes:7031336,extra:"hawaii"}};function bg(n,t){const e=new ot;if(n==="cap"){e.add(Ge(.2,.22,.1,t,.02,8));const i=_e(.2,.025,.14,t);i.position.set(0,-.01,.16),e.add(i)}else if(n==="bucket")e.add(Ge(.17,.22,.12,t,.05,8)),e.add(Ge(.3,.3,.03,t,-.02,10));else if(n==="beanie")e.add(Zn(.21,t,.04,8));else if(n==="top")e.add(Ge(.17,.17,.2,t,.12,8)),e.add(Ge(.28,.28,.035,t,-.02,8));else if(n==="tricorn"){const i=new nt(new Ke(.32,.09,3),un(t));i.rotation.y=Math.PI/6,i.position.y=.04,e.add(i),e.add(Zn(.16,t,.08,6))}else n==="hardhat"?(e.add(Zn(.22,t,.04,8)),e.add(Ge(.24,.24,.035,t,-.04,8))):n==="toque"?(e.add(Ge(.18,.2,.26,F.white,.14,8)),e.add(Ge(.22,.22,.045,F.white,-.03,8))):n==="straw"&&(e.add(Ge(.2,.2,.09,t,.05,8)),e.add(Ge(.36,.36,.025,t,-.02,10)),e.add(Ge(.21,.21,.03,F.clothBlack,.02,8)));return e}function wg(n){const t=new ot;if(n==="rod"){const e=Ge(.015,.02,1.45,3811864,0,5);e.rotation.z=.42,e.position.set(.18,.42,.04),t.add(e);const i=Zn(.045,F.clothBlack);i.position.set(.1,-.02,.05),t.add(i)}else if(n==="gun"){const e=_e(.07,.07,.58,3815992);e.position.set(.1,.02,.2),t.add(e)}else if(n==="axe"){const e=Ge(.02,.025,.72,6965805,0,5);e.rotation.z=-.55,e.position.set(.16,.22,.03);const i=_e(.2,.11,.05,9080200);i.position.set(.36,.5,.03),t.add(e,i)}else if(n==="pan"){const e=Ge(.15,.13,.035,F.clothBlack,0,8);e.position.set(.26,0,.1),t.add(e)}return t}function Tg(n="DEFAULT",t={}){const e=Sl[n]||Sl.DEFAULT,i=new ot;i.name=`char-${n}`,i.userData.archetype=n;const r=new ot;r.position.y=.56;const s=_s(.16,.38,e.shirt,.48);s.scale.set(1.15,1,.85);const a=_e(.32,.14,.2,e.pants,.08);if(r.add(s,a),e.extra==="overalls"){const w=_e(.22,.28,.02,e.pants);w.position.set(0,.46,.15),r.add(w);const R=_e(.035,.28,.02,e.pants);R.position.set(-.09,.58,.15);const S=R.clone();S.position.x=.09,r.add(R,S)}if(e.extra==="suit"){const w=_e(.4,.48,.26,e.shirt,.42);r.add(w);const R=_e(.04,.16,.02,F.white);R.position.set(0,.5,.14),r.add(R)}if(e.extra==="coat"){const w=_e(.5,.82,.32,F.clothBlack,.28);r.add(w);const R=_e(.22,.22,.04,F.white);R.position.set(0,.52,.17),r.add(R)}if(e.extra==="apron"){const w=_e(.28,.48,.02,F.white);w.position.set(0,.22,.15),r.add(w)}if(e.extra==="vest"){const w=_e(.4,.3,.26,F.clothGreen,.42);r.add(w);const R=_e(.28,.08,.14,4864546);R.position.set(0,.22,.12),r.add(R)}if(e.extra==="pack"){const w=_e(.26,.28,.12,3820082);w.position.set(0,.46,-.2),r.add(w)}if(e.extra==="hawaii")for(let w=0;w<5;w++){const R=Zn(.03,w%2?15258474:15922414,0);R.position.set(-.1+w%3*.1,.42+w%2*.1,.15),r.add(R)}const o=Eg(e.extra==="tee"||e.extra==="hawaii"?1.15:.8);o.position.set(0,.48,.17),r.add(o);const c=Ge(.055,.06,.16,F.skin,.78,6);r.add(c);const l=new ot;l.position.y=1.02;const h=new nt(new ye(.2,8,7),un(F.skin));h.scale.set(.95,1.22,.92),h.position.y=.1,h.castShadow=!0,l.add(h);const m=Zn(.12,F.skinShadow,-.08,7);m.scale.set(1.05,.7,.9),l.add(m);const p=w=>{const R=new ot,S=Zn(.092,F.white,0,8);S.scale.set(1,1.08,.88);const v=Zn(.034,F.black,0,6);return v.position.z=.07,R.add(S,v),R.position.set(w,.13,.175),R};l.add(p(-.075),p(.075));const f=_e(.22,.025,.04,F.skinShadow);f.position.set(0,.2,.14),l.add(f);const g=_e(.045,.055,.06,F.skinShadow);g.position.set(0,.05,.175),l.add(g);const _=_e(.09,.018,.02,5914672);if(_.position.set(0,-.03,.165),l.add(_),n==="TRADER"){const w=_e(.12,.14,.06,3813412);w.position.set(0,-.14,.1),l.add(w)}if(n==="PIRATE"){const w=_e(.16,.1,.06,4866100);w.position.set(0,-.14,.1),l.add(w)}if(n==="BEACHGOER"){const w=_e(.24,.05,.07,F.clothBlack);w.position.set(0,.12,.17),l.add(w)}const d=bg(e.hat,e.hatColor);d.position.y=.3,l.add(d),r.add(l);function u(w){const R=new ot;R.position.set(w*.22,.64,0);const S=e.extra==="suit"||e.extra==="coat"?e.shirt:F.skin,v=_s(.045,.28,S,-.18),C=_s(.04,.26,F.skin,-.5),G=Zn(.05,F.skin,-.7,6);return R.add(v,C,G),R}const M=u(-1),b=u(1);e.prop&&b.add(wg(e.prop)),r.add(M,b);function x(w){const R=new ot;R.position.set(w*.09,.04,0),R.add(_s(.055,.42,e.pants,-.28));const S=_e(.11,.06,.2,e.shoes);S.position.set(0,-.56,.03);const v=_e(.12,.02,.21,F.clothBlack);return v.position.set(0,-.6,.03),R.add(S,v),R}const P=x(-1),A=x(1);return r.add(P,A),i.add(r),i.userData.parts={hips:r,head:l,lArm:M,rArm:b,lLeg:P,rLeg:A},i.userData.phase=t.phase||Math.random()*Math.PI*2,t.scale&&i.scale.setScalar(t.scale),i}function Ag(n,t,e=!1,i=!1){const r=n.userData.parts;if(!r)return;const s=n.userData.phase||0,a=e?1:.16,o=Math.sin(t*6.5+s)*.38*a;r.lLeg.rotation.x=o,r.rLeg.rotation.x=-o,r.lArm.rotation.x=-o*.75,r.rArm.rotation.x=i?-1.05+Math.sin(t*2.6)*.1:o*.75,r.head.rotation.y=Math.sin(t*.6+s)*.1,r.hips.position.y=.56+Math.abs(Math.sin(t*6.5+s))*(e?.035:.01)}function wi(n){return n.rotation.x=Math.PI/2,n}function El(n,t=1){const e=new ot,i=new nt(new et(.038,.022,.05),n);i.position.set(0,-.006,0);const r=new nt(new zt(.02,.02,.042,8),n);r.rotation.x=Math.PI/2,r.position.y=-.002;const s=new nt(new et(.012,.012,.028),n);s.position.set(t*-.02,.01,.004),s.rotation.z=t*.85,e.add(i,r,s);for(let a=0;a<4;a++){const o=new nt(new et(.008,.01,.026),n);o.position.set(t*(-.012+a*.009),.01,.02),o.rotation.x=.7,e.add(o)}return e}function Rg(n){const t=new ot;t.name="fp-arms";const e=un(F.skin),i=un(15264740),r=un(3811352),s=un(11565626),a=un(1709586),o=un(7262602),c=new ot;c.name="rod-rig",c.position.set(.18,-.24,-.32),c.rotation.set(.62,.18,-.12);const l=wi(new nt(new zt(.012,.015,.08,7),i));l.position.set(.05,-.02,.22),l.visible=!1;const h=El(e,1);h.position.set(0,-.02,-.02),h.rotation.z=.2;const m=wi(new nt(new zt(.011,.014,.07,7),i));m.position.set(-.05,0,-.12),m.visible=!1;const p=El(e,-1);if(p.position.set(0,-.018,-.14),p.rotation.z=-.15,t.userData.lArm=m,t.userData.rArm=l,t.userData.pole=null,t.userData.line=null,t.userData.reel=null,t.userData.rod=c,n){const f=wi(new nt(new zt(.014,.017,.045,8),a));f.position.z=.08;const g=wi(new nt(new zt(.015,.017,.16,10),s));g.position.z=-.04;const _=wi(new nt(new zt(.013,.015,.035,8),a));_.position.z=-.14;const d=wi(new nt(new zt(.004,.012,1.05,8),r));d.position.z=-.68;const u=wi(new nt(new zt(.002,.004,.2,6),o));u.position.z=-1.3;const M=new nt(new ii(.009,.002,5,8),a);M.position.z=-1.18;const b=new ot,x=new nt(new zt(.024,.024,.016,10),a);x.rotation.z=Math.PI/2;const P=new nt(new ii(.018,.005,6,10),o);P.rotation.y=Math.PI/2;const A=new nt(new et(.01,.008,.032),a);A.position.y=.016,b.add(x,P,A),b.position.set(0,-.032,-.05);const w=new He().setFromPoints([new D(0,0,-1.4),new D(.01,-.06,-2.3)]),R=new Au(w,new jo({color:15266540,transparent:!0,opacity:.65}));R.visible=!1,c.add(f,g,_,d,u,M,b,R),t.userData.pole=d,t.userData.reel=b,t.userData.line=R}return c.add(l,h,m,p),t.add(c),t}function zs(n,t,e){if(!n)return;const i=n.userData.rod,r=n.userData.line,s=n.userData.reel;if(!i)return;const a={x:.62,y:.18,z:-.12};if(t==="cast"){const o=Math.min(1,e/.38);i.rotation.x=a.x-.85*o,i.rotation.z=a.z-.12*o,r&&(r.visible=o>.62)}else if(t==="wait"){if(i.rotation.x=a.x+Math.sin(e*1.6)*.03,i.rotation.z=a.z,r){r.visible=!0;const o=r.geometry.attributes.position;o.setY(1,-.08+Math.sin(e*2.4)*.07),o.needsUpdate=!0}}else if(t==="bite"){const o=Math.sin(e*24)*.07;i.rotation.x=a.x-.12+o,i.rotation.z=a.z+o*.4,r&&(r.visible=!0)}else if(t==="reel")i.rotation.x=a.x-.28+Math.sin(e*13)*.05,s&&(s.rotation.x=e*14),r&&(r.visible=!0);else if(t==="fight"){const o=.22+Math.min(.7,e||0),c=Math.sin(performance.now()/40)*.08*o;i.rotation.x=a.x-o+c,i.rotation.z=a.z+c*.6,s&&(s.rotation.x+=.4),r&&(r.visible=!0),n.userData.pole&&(n.userData.pole.rotation.x=o*.35)}else t==="land"?(i.rotation.x=a.x-.55,i.rotation.y=a.y-.2,r&&(r.visible=!1)):(i.rotation.x=a.x+Math.sin(e*1.3)*.018,i.rotation.y=a.y,i.rotation.z=a.z,r&&(r.visible=!1),s&&(s.rotation.x=0))}function Cg(){const n=new ot;n.name="sky";const t=new nt(new ye(280,12,8),new zn({side:We,depthWrite:!1,uniforms:{top:{value:new wt(5148607)},mid:{value:new wt(9353428)},bot:{value:new wt(14149320)}},vertexShader:`
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
      `}));n.add(t);const e=new nt(new ye(7.5,12,12),new nn({color:16773568}));e.position.set(-90,58,40),n.add(e);const i=new nt(new ye(16,12,12),new nn({color:16770720,transparent:!0,opacity:.22,depthWrite:!1}));i.position.copy(e.position),n.add(i);for(let r=0;r<4;r++){const s=new ot,a=new nn({color:15660280,transparent:!0,opacity:.7});for(let c=0;c<3;c++){const l=new nt(new ye(4.2+c%3,5,4),a);l.position.set((c-1.4)*5.2,c%2*1.4,c%3-1),s.add(l)}const o=r/4*Math.PI*2;s.position.set(Math.cos(o)*90,28+r%3*4,Math.sin(o)*90),s.userData.spin=.012+r%4*.004,s.userData.base=o,n.add(s)}return n}const Pg=[{ax:.82,az:.57,amp:.22,len:18,speed:1.15,q:.42},{ax:-.35,az:.94,amp:.12,len:9.5,speed:1.55,q:.32},{ax:.2,az:-.98,amp:.07,len:5.2,speed:1.9,q:.28},{ax:.95,az:.31,amp:.045,len:3.1,speed:2.4,q:.2}];function Dg(n,t){const e=Math.hypot(n,t),i=Math.hypot(n-118,t+8),r=Math.max(0,Math.min(1,(e-33.2)/8.5)),s=Math.max(0,Math.min(1,(i-22.5)/7.5));return Math.min(r,s)}function Ln(n,t,e){const i=Dg(n,t);if(i<=.02)return-.06;let r=0;for(const s of Pg){const a=Math.PI*2/s.len,o=(n*s.ax+t*s.az)*a+e*s.speed;r+=s.amp*Math.sin(o)}return r*i}function Lg(){const n=new fn(720,720,72,72);n.rotateX(-Math.PI/2);const t=new zn({transparent:!0,uniforms:{uTime:{value:0},uSun:{value:new D(-.55,.72,.28).normalize()},uDeep:{value:new wt(933731)},uMid:{value:new wt(3112616)},uShal:{value:new wt(9425116)},uFoam:{value:new wt(15989759)},uAmp:{value:1}},vertexShader:`
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
    `}),e=new nt(n,t);return e.position.y=0,e.name="water",e}function Ig(){const n=new ot,t=new nt(new ye(.09,8,8),new Le({color:13781562,flatShading:!0})),e=new nt(new ye(.07,8,8),new Le({color:F.white,flatShading:!0}));return e.position.y=.07,n.add(t,e),n.visible=!1,n}function Ug(){const n=new ot,t=[],e=new nn({color:14216946,transparent:!0,opacity:.8});for(let i=0;i<18;i++){const r=new nt(new ye(.035,5,5),e.clone());n.add(r),t.push(r)}return n.visible=!1,n.userData.drops=t,n.userData.t=0,n.userData.live=!1,n}function zr(n,t,e,i){n.position.set(t,e,i),n.visible=!0,n.userData.t=0,n.userData.live=!0,n.userData.drops.forEach((r,s)=>{const a=s/18*Math.PI*2;r.position.set(0,.02,0),r.userData.v=new D(Math.cos(a)*(.8+Math.random()),1.6+Math.random(),Math.sin(a)*(.8+Math.random())),r.material.opacity=.85})}function Ng(n,t){if(n?.userData.live){n.userData.t+=t;for(const e of n.userData.drops)e.userData.v.y-=6*t,e.position.addScaledVector(e.userData.v,t),e.material.opacity=Math.max(0,.85-n.userData.t*1.6);n.userData.t>.7&&(n.visible=!1,n.userData.live=!1)}}function Og(){const n=new nt(new sc(.12,.28,18),new nn({color:15267570,transparent:!0,opacity:.55,side:Pn,depthWrite:!1}));return n.rotation.x=-Math.PI/2,n.visible=!1,n.userData.t=0,n.userData.live=!1,n}function La(n,t,e,i){n.position.set(t,e+.04,i),n.visible=!0,n.userData.t=0,n.userData.live=!0,n.scale.setScalar(.4),n.material.opacity=.6}function Fg(n,t){if(!n?.userData.live)return;n.userData.t+=t;const e=n.userData.t;n.scale.setScalar(.4+e*3.6),n.material.opacity=Math.max(0,.6-e*.7),e>.9&&(n.visible=!1,n.userData.live=!1)}function zg(){const n=new He().setFromPoints([new D,new D(0,0,-1)]),t=new Au(n,new jo({color:15266540,transparent:!0,opacity:.8}));return t.visible=!1,t.frustumCulled=!1,t}function Bg(){const n=new ot,t=new nt(new dn(.09,.34,2,5),new Le({color:4034495,flatShading:!0}));t.rotation.z=Math.PI/2;const e=new nt(new Ke(.1,.16,4),new Le({color:2779784,flatShading:!0}));return e.rotation.z=-Math.PI/2,e.position.x=-.28,n.add(t,e),n.visible=!1,n}function kg(n="fish"){const t=new ot;if(n==="boot")t.add(new nt(new et(.16,.1,.28),new Le({color:3811864,flatShading:!0})));else if(n==="crate")t.add(new nt(new et(.22,.18,.22),new Le({color:6965805,flatShading:!0})));else{const e=new nt(new dn(.06,.22,3,6),new Le({color:4034495,flatShading:!0}));e.rotation.z=Math.PI/2;const i=new nt(new Ke(.07,.12,4),new Le({color:2779784,flatShading:!0}));i.rotation.z=-Math.PI/2,i.position.x=-.2,t.add(e,i)}return t.visible=!1,t}const oc=[];function Po(n,t,e){oc.push({x:n,z:t,r:e})}function Hg(n,t,e=.42){let i=n,r=t;for(const s of oc){const a=i-s.x,o=r-s.z,c=Math.hypot(a,o),l=s.r+e;if(c<l&&c>1e-4){const h=l/c;i=s.x+a*h,r=s.z+o*h}}return{x:i,z:r}}const Vg=(n,t={})=>new Le({color:n,flatShading:!0,...t});function Q(n,t){return new nt(n,typeof t=="number"?Vg(t):t)}function Gg(n,t){return Math.sin(n*.21)*Math.cos(t*.17)+Math.sin(n*.09+t*.13)*.6}function Wg(n,t){const e=n-Ut.x,i=t-Ut.z,r=Math.hypot(e,i);if(r>Ut.r+6)return-.55;if(r>Ut.r+1.2)return-.35;if(r>Ut.r-2.4){const o=(Ut.r+1.2-r)/3.6;return-.05+o*o*(3-2*o)*.7}const s=Math.hypot(e+2,i-1);let a=.55+(1-r/(Ut.r-2))*2.4;return a+=Math.sin(e*.31)*Math.cos(i*.27)*.22,s<7&&(a=Math.min(a,.42+s*.08)),e>4&&i>-6&&i<8&&(a=Math.min(a,.38)),Math.max(.18,a)}function Re(n,t){if(Math.hypot(n-Ut.x,t-Ut.z)<Ut.r+8)return Wg(n,t);const i=Math.hypot(n,t);if(i>tn+10)return-.55;if(n>10&&t>-4&&t<22&&i<tn+5&&i>24)return-.08+Math.max(0,Math.min(1,(32-i)/8))*.42;if(i>tn+2.4)return-.42;if(i>tn-3.2){const l=(tn+2.4-i)/5.6;return-.08+l*l*(3-2*l)*.46}const s=Math.max(0,1-i/(tn-2.4));let o=.38+s*s*(3-2*s)*2.85;const c=Math.hypot(n,t+1.2);if(c<9&&(o+=(1-c/9)*.24),n<-4&&t>2&&i<36){const l=Math.max(0,Math.min(1,(-n-4)/20));o+=l*.36}return n>2&&t<-6&&i<30&&(o+=.14),n>12&&n<22&&t>16&&t<24&&(o=Math.min(o,.55)),o+=Gg(n,t)*.05,Math.max(.2,o)}function Xg(){const n=new ot,t=48,e=(tn+6)*2,i=new fn(e,e,t,t);i.rotateX(-Math.PI/2);const r=i.attributes.position,s=[],a=new wt(F.grass),o=new wt(F.grassLit);new wt(F.rock),new wt(F.rockDark);const c=new wt(F.sand),l=new wt(F.dirt),h=new wt;for(let p=0;p<r.count;p++){const f=r.getX(p),g=r.getZ(p),_=Math.hypot(f,g);let d=Re(f,g);_>tn+4&&(d=-.5),r.setY(p,d);const u=f>10&&g>-4&&g<24&&d<.55;_>tn+2.2?h.set(F.oceanDeep):d<.22||u?h.copy(c):d<.55?h.lerpColors(c,a,(d-.22)/.33):d>3.1?h.copy(l):h.lerpColors(a,o,(Math.sin(f*.3)+1)*.35),s.push(h.r,h.g,h.b)}i.setAttribute("color",new se(s,3)),i.computeVertexNormals();const m=new nt(i,new Le({vertexColors:!0,flatShading:!0}));n.add(m);for(let p=0;p<42;p++){const f=p/42*Math.PI*2+p%3*.03,g=tn+.4+p%4*.35,_=Math.cos(f)*g,d=Math.sin(f)*g;if(_>16&&d>0&&d<22)continue;const u=1.6+p%3*.45,M=1.2+p*2%3*.3,b=.55+p%4*.18,x=Q(new et(u,b,M),p%2?F.rock:F.rockDark);x.position.set(_,Math.max(.02,Re(_,d)-.08),d),x.rotation.y=f+.2,n.add(x)}return n}function qg(){const n=new ot,t=36,e=(Ut.r+6)*2,i=new fn(e,e,t,t);i.rotateX(-Math.PI/2);const r=i.attributes.position,s=[],a=new wt(6968132),o=new wt(12864058),c=new wt(13213802),l=new wt(F.rockDark),h=new wt;for(let p=0;p<r.count;p++){const f=r.getX(p),g=r.getZ(p),_=f+Ut.x,d=g+Ut.z,u=Math.hypot(f,g);let M=Re(_,d);u>Ut.r+3&&(M=-.5),r.setY(p,M),u>Ut.r+1.6?h.set(F.oceanDeep):M<.28?h.copy(c):Math.hypot(f+2,g-1)<6.2?h.copy(o):M>2.2?h.copy(l):h.copy(a),s.push(h.r,h.g,h.b)}i.setAttribute("color",new se(s,3)),i.computeVertexNormals();const m=new nt(i,new Le({vertexColors:!0,flatShading:!0}));return m.position.set(Ut.x,0,Ut.z),n.add(m),n}function Yg(){const n=new ot;for(let t=0;t<5;t++){const e=Q(new et(.04,.28+Math.random()*.18,.03),t%2?F.grass:F.grassLit);e.position.set((t-2)*.07,.16,t%2*.05),e.rotation.z=(t-2)*.12,n.add(e)}return n}function vs(n){const t=new ot,e=Q(new zt(.05,.06,1.55,5),F.woodDark);e.position.y=.78;const i=Q(new et(1.35,.48,.06),F.wood);i.position.set(0,1.42,.04);const r=document.createElement("canvas");r.width=256,r.height=96;const s=r.getContext("2d");s.fillStyle="#6a4528",s.fillRect(0,0,256,96),s.fillStyle="#f4efe4",s.font="bold 28px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(n,128,48);const a=new Qo(r);a.colorSpace=Be;const o=new nt(new fn(1.28,.42),new nn({map:a,toneMapped:!1}));return o.position.set(0,1.42,.08),t.add(e,i,o),t}function $g(){const n=new ot,t=Q(new et(1.4,.22,.62),3810838);t.position.y=.14;const e=Q(new et(.82,.55,.58),6044964);e.position.set(-.18,.48,0);const i=Q(new et(.48,.28,.56),4862496);return i.position.set(.48,.28,0),n.add(t,e,i),n}function Kg(){const n=new ot,t=Q(new zt(.28,.22,.32,8),F.white);t.position.y=.22;const e=Q(new et(.32,.38,.16),F.white);e.position.set(0,.52,-.22);const i=Q(new ii(.22,.04,6,10),14212566);return i.rotation.x=Math.PI/2,i.position.y=.38,n.add(t,e,i),n}function Zg(){const n=new ot,t=Q(new et(.9,.16,.7),F.rock);t.position.y=.08;const e=ac(.42);return e.position.set(0,.48,.08),n.add(t,e),n}function Jg(){const n=new ot,t=Q(new et(.72,.42,.18),2763818);t.position.y=.24;const e=Q(new et(.58,.3,.02),7262602);return e.position.set(0,.26,.1),n.add(t,e),n}function jg(){const n=new ot,t=Q(new ye(.22,8,6),15778666);t.scale.set(1.15,.75,1),t.position.y=.16;const e=Q(new ye(.13,7,6),15778666);e.position.set(.14,.32,0);const i=Q(new et(.1,.04,.08),14711336);return i.position.set(.26,.3,0),n.add(t,e,i),n}function Qg(){const n=new ot;for(let t=0;t<7;t++){const e=Q(new et(.025,.22,.025),F.green);e.position.set((t-3)*.09,.11,t%3*.06);const i=Q(new ye(.05,5,4),t%2?15253850:14983423);i.position.set(e.position.x,.24,e.position.z),n.add(e,i)}return n}function Ps(){const n=new ot,t=Q(new rc(.55,0),F.rock);return t.scale.set(1.2,.7,1),t.position.y=.22,n.add(t),n}function t_(){const n=new ot;for(let e=0;e<5;e++){const i=e/5*Math.PI*2,r=Q(new zt(.05,.055,.55,5),F.woodDark);r.rotation.z=Math.PI/2,r.rotation.y=i,r.position.set(Math.cos(i)*.12,.06,Math.sin(i)*.12),n.add(r)}const t=Q(new Ke(.16,.38,5),F.torch);return t.position.y=.32,t.material.emissive=new wt(F.torch),t.material.emissiveIntensity=.7,n.add(t),n}function bl(n){const t=new ot,e=Q(new zt(n==="tax"?6.4:5.2,7.6,1.6,8),F.sand);if(e.position.y=.1,t.add(e),n==="tax"){const i=yn(F.white);i.position.set(-1.4,.8,.4),i.scale.setScalar(1.4);const r=yn(F.green);r.position.set(1.8,.8,-.6),r.scale.setScalar(1.1);const s=Uu();s.position.set(3.2,.8,1.4),t.add(i,r,s)}else{const i=Q(new zt(.45,.7,5.2,6),F.white);i.position.y=3.2;const r=Q(new Ke(.9,1.1,5),12864058);r.position.y=6.1,t.add(i,r)}return t}function tr(n,t=2.4){const e=new ot,i=Q(new zt(.06,.07,2.2,5),F.woodDark);i.position.y=1.1;const r=Q(new et(t,.7,.08),1456170);r.position.set(0,2.05,.04);const s=document.createElement("canvas");s.width=384,s.height=128;const a=s.getContext("2d");a.fillStyle="#16382a",a.fillRect(0,0,384,128),a.fillStyle="#f4efe4",a.font="bold 34px sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(n,192,64);const o=new Qo(s);o.colorSpace=Be;const c=new nt(new fn(t-.1,.58),new nn({map:o,toneMapped:!1}));return c.position.set(0,2.05,.1),e.add(i,r,c),e}function e_(){const n=new ot,t=Q(new et(.7,.38,.46),6964520);t.position.y=.2;const e=Q(new et(.72,.12,.48),9067050);e.position.set(0,.42,-.04),e.rotation.x=-.35;const i=Q(new et(.1,.1,.06),15253850);return i.position.set(0,.28,.24),n.add(t,e,i),n}function n_(){const n=new ot,t=Do();t.rotation.z=.4,t.rotation.x=.2;const e=Do();return e.position.set(.55,.05,.2),e.rotation.y=.8,n.add(t,e),n}function i_(){const n=new ot,t=new Le({color:16054002,flatShading:!0}),e=new nt(new et(.18,.07,.32),t),i=new nt(new et(.7,.03,.16),t);i.position.set(-.35,.02,0);const r=i.clone();return r.position.x=.35,n.add(e,i,r),n.userData.wings=[i,r],n}function Xs(n=1){return ac(n)}function r_(){const n=new ot,t=Q(new zt(.045,.055,3.4,5),F.woodDark);t.position.y=1.7;const e=Q(new et(.95,1.25,.04),F.white);e.position.set(.52,2.55,0);const i=Xs(.28);return i.position.set(.52,2.55,.06),n.add(t,e,i),n}function Do(){const n=new ot,t=Q(new et(.95,.72,.72),F.wood);t.position.y=.36;const e=Q(new et(.97,.16,.74),F.green);e.position.y=.42;const i=Xs(.2);return i.position.set(0,.52,.39),n.add(t,e,i),n}function s_(n=4.4){const t=new ot,e=Q(new zt(.11,.16,n*.3,5),F.woodDark);e.position.y=n*.15,t.add(e);for(let i=0;i<4;i++){const r=1-i*.18,s=Q(new Ke(1.05*r,n*.38,7),i%2?F.greenDeep:F.green);s.position.y=n*.28+i*n*.2,t.add(s)}return t}function Uu(){const n=new ot,t=Q(new zt(.1,.16,3.5,6),9071162);t.position.y=1.75,t.rotation.z=.1,n.add(t);const e=Q(new ye(.22,6,5),F.greenDeep);e.position.set(.18,3.5,0),n.add(e);for(let i=0;i<6;i++){const r=i/6*Math.PI*2,s=Q(new ye(.55,6,4),i%2?F.green:F.greenDeep);s.scale.set(1.6,.22,.55),s.position.set(Math.cos(r)*.85+.15,3.42,Math.sin(r)*.85),s.rotation.y=r,s.rotation.z=-.35,n.add(s)}return n}function yn(n=F.green){const t=new ot;for(const[r,s]of[[-.95,-.7],[.95,-.7],[-.95,.7],[.95,.7]]){const a=Q(new zt(.07,.08,1.7,5),F.wood);a.position.set(r,.85,s),t.add(a)}const e=Q(new Ke(1.75,.9,4),n);e.rotation.y=Math.PI/4,e.position.y=2.15;const i=Q(new et(2.2,.08,1.8),F.wood);return i.position.y=.08,t.add(e,i),t}function xs(n=8,t=1.7){const e=new ot,i=Math.max(3,Math.round(n/.85));for(let s=0;s<i;s++){const a=Q(new et(t,.1,.72),s%2?F.wood:F.woodMid);a.position.set(0,.42,-n/2+.4+s*(n/i)),e.add(a)}const r=Math.max(2,Math.round(n/2.1));for(let s=0;s<r;s++){const a=-n/2+.55+s*(n/r);for(const o of[-t/2+.1,t/2-.1]){const c=Q(new zt(.07,.08,1.35,5),F.woodDark);c.position.set(o,-.12,a),e.add(c)}}return e}function a_(){const n=new ot,t=Q(new et(1.15,.38,2.7),F.woodDark);t.position.y=.12;const e=Q(new et(.72,.3,.7),F.wood);e.position.set(0,.14,-1.5);const i=Q(new et(.68,.42,.68),F.white);return i.position.set(0,.5,.35),n.add(t,e,i),n}function o_(){const n=new ot;for(const[s,a]of[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]]){const o=Q(new zt(.08,.1,3.6,5),F.woodDark);o.position.set(s,1.8,a),n.add(o)}const t=Q(new et(2.05,.12,2.05),F.wood);t.position.y=3.5;const e=Q(new Ke(1.55,.82,4),F.green);e.rotation.y=Math.PI/4,e.position.y=4.25;const i=Q(new et(2.05,.35,2.05),F.woodMid);i.position.y=3.72,n.add(t,e,i);const r=Xs(.24);return r.position.set(0,3.92,1.04),n.add(r),n}function c_(){const n=new ot,t=Q(new et(1.25,.09,.38),F.wood);t.position.y=.4;const e=Q(new et(1.25,.34,.08),F.wood);return e.position.set(0,.6,-.16),n.add(t,e),n}function wl(){const n=new ot,t=Q(new zt(.04,.05,1.7,5),F.woodDark);t.position.y=.85;const e=Q(new ye(.13,5,5),F.torch);return e.position.y=1.75,e.material.emissive=new wt(F.torch),e.material.emissiveIntensity=.75,n.add(t,e),n}function Tl(n=4){const t=new ot,e=Q(new et(n,.07,.055),F.woodDark);e.position.y=.58,t.add(e);const i=Math.round(n/1.05);for(let r=0;r<=i;r++){const s=Q(new et(.065,.72,.065),F.wood);s.position.set(-n/2+r*n/i,.36,0),t.add(s)}return t}function l_(){const n=new ot;n.name="lighthouse";const t=Q(new zt(2.55,2.95,1.55,12),F.green);t.position.y=.78;const e=Q(new zt(1.95,2.4,5.6,12),F.white);e.position.y=4.3;const i=Q(new zt(2.05,2.2,1.05,12),F.green);i.position.y=5.85;const r=Q(new zt(1.6,1.95,2.15,12),F.white);r.position.y=7.4;const s=Q(new zt(1.18,1.22,1.25,8),15265508);s.position.y=9.05,s.material.emissive=new wt(16773570),s.material.emissiveIntensity=.28;const a=Q(new Ke(1.5,1.2,8),F.green);a.position.y=10.15;const o=Q(new Ke(.07,.5,5),F.woodDark);o.position.y=10.9;const c=Q(new et(.72,1.2,.12),F.woodDark);c.position.set(0,.9,2.65);const l=Q(new ii(1.62,.065,5,14),F.woodDark);l.rotation.x=Math.PI/2,l.position.y=8.3;for(let p=0;p<12;p++){const f=p/12*Math.PI*2,g=Q(new et(.055,.52,.055),F.woodDark);g.position.set(Math.cos(f)*1.62,8.55,Math.sin(f)*1.62),n.add(g)}const h=Q(new zt(1.78,1.78,.1,12),F.woodDark);h.position.y=8.22;const m=Xs(1.05);return m.position.set(0,4.78,2.28),n.add(t,e,i,r,s,a,o,c,l,h,m),n}function u_(){const n=new ot,t=Q(new et(2.4,1.4,.08),2763818);t.position.y=1.1,n.add(t);for(let i=0;i<6;i++){const r=Q(new et(.18+i*.08,.04,.04),15253850);r.position.set(-.7+i*.28,.7+i%3*.22,.06),r.rotation.z=i%2?-.4:.3,n.add(r)}const e=Q(new dn(.18,.7,2,5),12864058);return e.rotation.z=Math.PI/2,e.position.set(.2,1.15,.08),n.add(e),n}function h_(){const n=new ot,t=Q(new et(.7,1.5,.5),12864058);t.position.y=.75;const e=Q(new et(.5,.9,.06),8308436);e.position.set(0,.9,.26);const i=Q(new et(.22,.08,.08),F.black);return i.position.set(0,.28,.28),n.add(t,e,i),n}function d_(){const n=new ot,t=Q(new et(.9,2.2,.9),12864058);t.position.y=1.1;const e=Q(new et(.55,1.1,.06),9353428);e.position.set(0,1.2,.46);const i=Q(new et(.18,.08,.06),F.black);return i.position.set(.18,1.35,.4),n.add(t,e,i),n}function f_(){const n=new ot,t=Q(new zt(.7,.7,.12,8),F.rockDark);t.position.y=.06;const e=Q(new ii(.22,.04,5,8),15253850);return e.rotation.x=Math.PI/2,e.position.y=.14,n.add(t,e),n}function Al(){const n=new ot,t=Q(new et(.42,.06,.42),F.wood);t.position.y=.42;const e=Q(new et(.42,.55,.06),F.woodDark);e.position.set(0,.7,-.18);for(const[i,r]of[[-.16,-.16],[.16,-.16],[-.16,.16],[.16,.16]]){const s=Q(new et(.05,.42,.05),F.woodDark);s.position.set(i,.21,r),n.add(s)}return n.add(t,e),n}function Ia(){const n=new ot,t=Q(new zt(.07,.08,.28,5),7262602);t.position.y=.14;const e=Q(new zt(.03,.04,.1,5),7262602);return e.position.y=.32,n.add(t,e),n}function p_(){const n=new ot,t=Q(new et(1.1,.12,1.1),F.rockDark);t.position.y=.06;const e=Q(new et(.7,.08,.7),1184272);return e.position.y=.08,n.add(t,e),n}function m_(){const n=new ot,t=Q(new et(3.4,1.1,8.2),F.woodDark);t.rotation.z=.35,t.position.y=.2;const e=Q(new zt(.08,.1,4.4,5),F.wood);return e.position.set(.4,1.8,1.2),e.rotation.z=.5,n.add(t,e),n}function g_(){const n=yn(F.woodDark);return n.scale.setScalar(1.15),n}function __(){const n=Ps(),t=Q(new et(.5,.08,.04),15253850);return t.position.set(.1,.55,.45),n.add(t),n}function v_(){return yn(13227206)}function Rl(){const n=new ot,t=Q(new et(1.4,2.8,2.4),F.rockDark);t.position.set(-1.5,1.1,0),t.rotation.z=.25;const e=Q(new et(1.4,2.8,2.4),F.rock);e.position.set(1.5,1.1,0),e.rotation.z=-.25;const i=Q(new et(3.2,1.1,2.2),F.rockDark);i.position.set(0,2.35,0);const r=Q(new et(1.9,1.7,2.6),1184272);return r.position.set(0,.95,.15),n.add(t,e,i,r),n}function Dt(n,t,e,i,r=0,s=0,a=0){t.position.set(e,Re(e,i)+s,i),t.rotation.y=r,n.add(t),a>0&&Po(e,i,a)}function x_(n){for(let t=0;t<20;t++){const e=26.2-t*1.12,i=.18,r=Re(i,e),s=Re(i,e-1.12),a=Q(new et(1.42,.08,1.14),t%2?F.dirt:8021312);a.position.set(i,r+.04,e),a.rotation.x=-Math.atan2(s-r,1.12),n.add(a)}}const M_=[{id:"MAIN_DOCK",label:"MAIN DOCK",hint:"Starter water",x:1.6,z:32,r:11,fish:!0},{id:"NORTH_DOCK",label:"NORTH DOCK",hint:"Token trout water",x:-24,z:8,r:8,fish:!0},{id:"EAST_BEACH",label:"EAST BEACH",hint:"Sandy shallows",x:28,z:10,r:10,fish:!0},{id:"SOUTH_CLIFFS",label:"SOUTH CLIFFS",hint:"Need Cliff Rod",x:-18,z:18,r:8,fish:!0},{id:"CAVES",label:"THE CAVES",hint:"Dark pool",x:17,z:20,r:7,fish:!0},{id:"OFFSHORE",label:"OFFSHORE",hint:"Need Offshore Rod",x:-30,z:2,r:7,fish:!0},{id:"FOREST",label:"PINE WOODS",hint:"No fishing",x:10,z:-14,r:10,fish:!1},{id:"LIGHTHOUSE",label:"LIGHTHOUSE",hint:"Shop + burns",x:0,z:-1,r:8,fish:!1},{id:"VILLAGE",label:"HUT ROW",hint:"Redeem counter",x:6,z:22,r:6,fish:!1},{id:"EMBER_SHORE",label:"ST ALON SHORE",hint:"Great Saint Alon shallows",x:118,z:16,r:12,fish:!0},{id:"EMBER_POOL",label:"ST ALON POOL",hint:"Need Offshore Rod",x:116,z:-8,r:9,fish:!0},{id:"EMBER_HILL",label:"ST ALON HILL",hint:"Ash ridge",x:118,z:-8,r:10,fish:!1},{id:"THE_DROP",label:"THE DROP",hint:"You can see it. You cannot go there yet.",x:0,z:-96,r:18,fish:!1}];function Lo(n,t){let e={id:"ISLAND",label:"ISLAND PATH",hint:"Walk the hill",fish:!1,d:99};for(const i of M_){const r=Math.hypot(n-i.x,t-i.z);r<i.r&&r<e.d&&(e={...i,d:r})}return Re(n,t)<.12&&e.id==="ISLAND"?{id:"OCEAN",label:"OPEN OCEAN",hint:"Swim / boat",fish:!0,d:0}:e}function y_(n){oc.length=0;const t=new ot;t.name="island";const e=Lg();t.add(e);const i=Q(new fn(1100,1100),F.oceanDeep);i.rotation.x=-Math.PI/2,i.position.y=-.45,t.add(i),t.add(Xg()),t.add(qg());const r=l_(),s=Re(0,-1.2);r.position.set(0,s,-1.2),t.add(r),Po(0,-1.2,3.1);const a=new ot;for(let L=0;L<14;L++){const B=5.8-L*.38,Y=Re(0,B),q=Q(new et(1.4,.1,.4),F.wood);q.position.set(0,Y+.05,B),a.add(q)}t.add(a);const o=xs(12,2.15);o.position.set(1.6,.12,31.4),t.add(o),Dt(t,yn(F.white),-6.8,22.4,.25,0,1.8),Dt(t,yn(F.green),8.6,21.6,-.3,0,1.8);const c=xs(10.5,1.7);c.position.set(-27.2,.12,8),c.rotation.y=1.2,t.add(c),Dt(t,yn(13808490),-19.2,6.4,.4,0,1.7);const l=a_();l.position.set(-31,.18,5.6),l.rotation.y=.45,t.add(l),Dt(t,o_(),-16.8,17.6,.2,-.1,1.6),Dt(t,Rl(),17.2,20.6,.45,-.35,2.4);const h=xs(4.4,1.25);h.position.set(18.8,.12,24.2),h.rotation.y=.4,t.add(h),Dt(t,yn(F.green),25.2,8.8,-.4,0,1.7),Dt(t,yn(13808490),28.4,12.4,-.55,0,1.7),Dt(t,c_(),23.6,11.2,-.7,0,.7);for(const[L,B]of[[22,6.2],[26.2,4.8],[30,8.4],[27.6,15.5],[21.5,14.2]])Dt(t,Uu(),L,B,0,0,.7);for(const[L,B]of[[8,-15],[12.2,-17.4],[15.4,-12.6],[6.2,-19.5],[18.2,-15.8],[10.4,-10.6],[4.1,-14.8],[14.2,-20.6],[-3.4,-13.8],[1.2,-17.6],[7.4,-8.2]])Dt(t,s_(3.8+(L+B)%5*.22),L,B,0,0,.85);for(const[L,B,Y]of[[-7.4,5.2,.15],[8.2,-5.4,1.1],[16.4,3.2,.05],[-11.5,-5.2,.7],[12.6,11.4,-.35],[-5.2,14.6,.1],[20.4,-7.2,.5],[-17.2,12.4,.3]])Dt(t,r_(),L,B,Y,0,.28);for(const[L,B]of[[-11.2,13.4],[-9.1,11.6],[9.4,-7.6],[11.6,-5.8],[14.8,8.4],[-3.6,-7.4],[6.8,10.2]])Dt(t,Do(),L,B,L*.15,0,.7);const m=Tl(11);Dt(t,m,7.4,-3.6,.45,0,.45);const p=Tl(8.5);Dt(t,p,-5.6,-7.2,-.5,0,.45),Dt(t,wl(),-1.15,8.4),Dt(t,wl(),1.35,8.4),x_(t);for(const[L,B]of[[3.2,18.4],[5.1,14.2],[-4.4,16.6],[7.8,6.2],[9.2,-9.6],[13.4,-6.2],[16.2,7.4],[-12.6,8.8]])Dt(t,Yg(),L,B);for(const[L,B]of[[6.4,18.8],[-5.2,20.2],[10.8,5.4],[-8.6,14.2],[3.6,-8.4],[14.2,13.6]])Dt(t,Qg(),L,B);for(const[L,B]of[[4.8,-6.2],[-9.4,2.2],[13.6,-3.4],[-4.2,-10.6],[18.2,1.6]])Dt(t,Ps(),L,B,L*.2,0,.55);Dt(t,t_(),-14.8,15.2,0,0,.6),Dt(t,vs("NO RUGS"),3.4,28.6,.1,0,.35),Dt(t,vs("CAST HERE"),4.8,33.2,-.2,0,.35),Dt(t,vs("BEWARE CHEF"),-4.2,8.8,.4,0,.35),Dt(t,tr("DEV WALLET THIS WAY"),9.6,24.8,-.5,0,.4),Dt(t,tr("LIQUIDITY POOL"),-10.4,20.6,.6,0,.4),Dt(t,$g(),29.6,6.2,-.6,0,.7),Dt(t,Kg(),19.4,18.8,.8,.05,.45),Dt(t,Zg(),-8.8,-8.4,.2,0,.5),Dt(t,Jg(),26.8,17.4,.5,0,.4),Dt(t,e_(),21.2,22.6,.3,0,.45),Dt(t,n_(),-26.4,12.2,.4,0,.7),Dt(t,u_(),16.4,19.4,.5,.1,0),Dt(t,h_(),18.2,18.2,-.4,0,.6),Dt(t,d_(),11.4,-16.6,.3,0,.7),Dt(t,f_(),2.4,-3.2,0,0,.8),Dt(t,Al(),-3.6,31.2,.2,0,.4),Dt(t,Ia(),27.4,8.6,.4,0,0),Dt(t,Ia(),24.8,13.2,-.3,0,0),Dt(t,g_(),14.6,-18.4,.4,0,1.4),Dt(t,p_(),8.2,16.4,0,0,.6);const f=m_();f.position.set(36.4,.05,4.2),f.rotation.y=.7,t.add(f),Dt(t,__(),-12.6,-6.4,.3,0,.6),Dt(t,v_(),-6.8,-18.2,-.5,0,1.3),Dt(t,Rl(),-16.4,4.2,1.2,-.2,1.8),Dt(t,Ia(),32.2,16.8,.2,0,0);const g=jg();g.position.set(8.4,.18,34.6),g.userData.float=!0,t.add(g);const _=bl("tax");_.position.set(92,-.2,-48),_.rotation.y=.4,t.add(_);const d=bl("paper");d.position.set(-86,-.2,54),d.rotation.y=-.7,t.add(d);const u=tr("TAX HAVEN",3.2);u.position.set(86,1.2,-42),u.lookAt(0,2,0),t.add(u);const M=tr("PAPER HANDS ATOLL",3.6);M.position.set(-80,1.2,48),M.lookAt(0,2,0),t.add(M);const b=Q(new zt(2.4,3.1,1.1,7),F.sand);b.position.set(-62,-.1,-38),t.add(b);const x=Al();x.position.set(-62,.55,-38),t.add(x);const P=tr("SIT HERE",2.2);P.position.set(-62,1.1,-36),P.lookAt(0,2,0),t.add(P);const A=Q(new zt(9,11,4.2,8),1713200);A.position.set(0,1.4,-118),t.add(A);const w=tr("THE DROP  ·  NOT YET",4.4);w.position.set(0,4.2,-108),w.lookAt(0,2,0),t.add(w);const R=xs(7.2,1.7);R.position.set(Ut.x-6,.14,Ut.z+22),R.rotation.y=.2,t.add(R),Dt(t,yn(12864058),Ut.x-4,Ut.z+14,.2,0,1.7),Dt(t,yn(F.woodDark),Ut.x+6,Ut.z+8,-.4,0,1.7),Dt(t,vs("GREAT SAINT ALON"),Ut.x-2,Ut.z+20,.3,0,.4),Dt(t,Ps(),Ut.x+8,Ut.z-4,.4,0,.7),Dt(t,Ps(),Ut.x-10,Ut.z-6,-.2,0,.7);const S=[];for(let L=0;L<5;L++){const B=i_(),Y=L/5*Math.PI*2;B.position.set(Math.cos(Y)*22,9+L%3,Math.sin(Y)*22),B.userData.orbit=Y,B.userData.rad=18+L*3,B.userData.h=8.5+L*.7,t.add(B),S.push(B)}const v=[{type:"TRADER",x:5.4,z:22.8,rot:Math.PI},{type:"FISHERMAN",x:-2.8,z:30.4,rot:.4},{type:"DEFAULT",x:-3.4,z:27.8,rot:.5},{type:"BEACHGOER",x:24.8,z:10.6,rot:-.8},{type:"SCOUT",x:9.8,z:-12.2,rot:.4},{type:"PIRATE",x:-23.4,z:8,rot:1.2},{type:"HUNTER",x:-16.2,z:16.8,rot:.25},{type:"CHEF",x:-2.2,z:7.2,rot:2.5},{type:"BUILDER",x:6.6,z:-4.8,rot:-.4},{type:"HARVESTER",x:12.6,z:-15.2,rot:1.05},{type:"DEFAULT",x:-6.2,z:6.4,rot:.75},{type:"FISHERMAN",x:-3.6,z:31.2,rot:.15,sit:!0,talk:"chair17"},{type:"FISHERMAN",x:1.2,z:29.6,rot:.1,path:[[1.2,29.6],[-2.4,28.2],[3.4,26.8],[1.2,29.6]]},{type:"DEFAULT",x:-14.2,z:16.4,rot:.4},{type:"SCOUT",x:-18.6,z:22.4,rot:.2,watcher:!0},{type:"TRADER",x:5.6,z:8.2,rot:2.2,talk:"advice"},{type:"BEACHGOER",x:22.4,z:14.2,rot:.3},{type:"SCOUT",x:-8.4,z:18.6,rot:1.1},{type:"DEFAULT",x:2.8,z:20.4,rot:-.6},{type:"TRADER",x:-1.6,z:24.2,rot:2.8},{type:"PIRATE",x:Ut.x-5,z:Ut.z+18,rot:.4},{type:"HUNTER",x:Ut.x+4,z:Ut.z+6,rot:-.8},{type:"CHEF",x:Ut.x+1,z:Ut.z+12,rot:1.6}],C=[];for(const L of v){const B=Tg(L.type,{phase:L.x});B.position.set(L.x,Re(L.x,L.z),L.z),B.rotation.y=L.rot,B.userData.npc=!0,B.userData.path=L.path||null,B.userData.u=Math.random(),B.userData.talk=L.talk||null,B.userData.watcher=!!L.watcher,L.sit&&(B.position.y+=.42),L.watcher&&(B.userData.hide=0),t.add(B),Po(L.x,L.z,.45),C.push(B)}const G=C.find(L=>L.userData.watcher)||null;return n.add(t),{root:t,ocean:e,people:C,lighthouse:r,birds:S,duck:g,watcher:G}}const S_=[{id:"shop",label:"E  Shop",x:0,z:3.8,r:3.4},{id:"board",label:"E  Log",x:1.4,z:8.2,r:2.4},{id:"redeem",label:"E  Redeem",x:4.2,z:24.4,r:2.6},{id:"boat",label:"E  Boat",x:-31,z:5.6,r:3},{id:"boot",label:"E  Giant boot",x:29.6,z:6.2,r:2.2},{id:"loo",label:"E  Secret loo",x:19.4,z:18.8,r:2},{id:"shrine",label:"E  Pill shrine",x:-8.8,z:-8.4,r:2},{id:"pc",label:"E  Washed-up PC",x:26.8,z:17.4,r:2},{id:"duck",label:"E  Rubber duck",x:8.4,z:34.6,r:2.2},{id:"chest",label:"E  Chest",x:21.2,z:22.6,r:2},{id:"crash",label:"E  Airdrop",x:-26.4,z:12.2,r:2.2},{id:"emberdock",label:"E  Saint Alon dock",x:112,z:14,r:3.2},{id:"vending",label:"E  Cave vending",x:18.2,z:18.2,r:2},{id:"phone",label:"E  Forest phone",x:11.4,z:-16.6,r:2},{id:"bunker",label:"E  Lighthouse hatch",x:2.4,z:-3.2,r:2},{id:"chairman",label:"E  The chair",x:-3.6,z:31.2,r:2.2},{id:"advice",label:"E  Useless advice",x:5.6,z:8.2,r:2.2},{id:"drawings",label:"E  Cave wall",x:16.4,z:19.4,r:2},{id:"drop",label:"E  The Drop",x:0,z:-96,r:14},{id:"hut",label:"E  Abandoned hut",x:14.6,z:-18.4,r:2.4},{id:"sewer",label:"E  Drain",x:8.2,z:16.4,r:2.2},{id:"wreck",label:"E  Wreck",x:36.4,z:4.2,r:3.2},{id:"secret_beach",label:"E  Quiet cove",x:22.4,z:-6.8,r:2.6},{id:"cliff_path",label:"E  Goat path",x:-22.4,z:22.6,r:2.2},{id:"carving",label:"E  Carved rock",x:-12.6,z:-6.4,r:2},{id:"station",label:"E  Research shack",x:-6.8,z:-18.2,r:2.4},{id:"map",label:"E  Soggy chart",x:32.2,z:16.8,r:2},{id:"buried",label:"E  Disturbed sand",x:27.2,z:4.8,r:2},{id:"tunnel",label:"E  Pipe",x:-34.2,z:14.6,r:3},{id:"west_cave",label:"E  Second mouth",x:-16.4,z:4.2,r:2.4},{id:"isle_chair",label:"E  Empty chair",x:-62,z:-38,r:4},{id:"hole",label:"E  Black hole",x:-20.8,z:12.4,r:2.4}],Io=[{id:"whale_calf",name:"Sighted Calf",rarity:"Legendary",kind:"sol",value:.08,zones:["OFFSHORE","EVENT"],minRod:"basic",event:"whale",blurb:"Only while the whale is in the bay.",trade:"Redeems for 0.08 SOL (preview)."},{id:"shark_tooth",name:"Shark Tooth",rarity:"Rare",kind:"collectible",value:0,zones:["EAST_BEACH","EVENT"],minRod:"basic",event:"shark",blurb:"Still warm. Do not ask.",trade:"Collectible."},{id:"meteor_koi",name:"Meteor Koi",rarity:"Epic",kind:"token",value:40,zones:["MAIN_DOCK","EVENT"],minRod:"basic",event:"meteor",blurb:"Fell with the rocks. Still glowing.",trade:"Redeems for 40 TOKEN."},{id:"blood_eel",name:"Blood Eel",rarity:"Epic",kind:"credits",value:220,zones:["CAVES","EVENT"],minRod:"basic",event:"blood_moon",blurb:"Only the red night. Put it back if you can.",trade:"Redeems for 220 credits."},{id:"storm_cod",name:"Storm Cod",rarity:"Rare",kind:"credits",value:70,zones:["MAIN_DOCK","NORTH_DOCK","EVENT"],minRod:"basic",event:"storm",blurb:"Came in with the ugly water.",trade:"Redeems for 70 credits."},{id:"wreck_lockbox",name:"Wreck Lockbox",rarity:"Epic",kind:"treasure",value:0,zones:["EAST_BEACH","EVENT"],minRod:"basic",event:"wreck",blurb:"Washed off the cargo ship. Still sealed.",trade:"Treasure. Keep it."},{id:"gilt_snapper",name:"Gilt Snapper",rarity:"Legendary",kind:"sol",value:.06,zones:["EAST_BEACH","EVENT"],minRod:"basic",event:"golden",blurb:"The gold run. Ten minutes. Then gone.",trade:"Redeems for 0.06 SOL (preview)."},{id:"cave_lantern",name:"Lantern Fish",rarity:"Rare",kind:"credits",value:90,zones:["CAVES","EVENT"],minRod:"basic",event:"glow_cave",blurb:"The cave opened a second mouth.",trade:"Redeems for 90 credits."},{id:"ufo_bass",name:"Unidentified Bass",rarity:"Mythic",kind:"collectible",value:0,zones:["OFFSHORE","EVENT"],minRod:"basic",event:"ufo",blurb:"It looked at you first.",trade:"Collectible. Do not cook."},{id:"tide_relic",name:"Tide Relic",rarity:"Epic",kind:"collectible",value:0,zones:["SOUTH_CLIFFS","EVENT"],minRod:"basic",event:"low_tide",blurb:"The sandbar only exists at this tide.",trade:"Collectible."},{id:"crate_tin",name:"Crate Tin",rarity:"Uncommon",kind:"credits",value:36,zones:["EAST_BEACH","EVENT"],minRod:"basic",event:"crate",blurb:"Still cold. Label says 1998.",trade:"Redeems for 36 credits."}],Cl=[{id:"whale",title:"WHALE SIGHTING",shout:"WHALE IN THE BAY",hint:"Offshore · exclusive calf pool",x:-30,z:4,dur:240,rare:!0,weather:null,sky:6988748},{id:"shark",title:"SHARK RUN",shout:"SHARKS ON THE BEACH",hint:"East Beach · don’t swim stupid",x:28,z:10,dur:180,rare:!1,weather:null,sky:null},{id:"meteor",title:"METEOR SHOWER",shout:"ROCKS ARE FALLING",hint:"Dock water is glowing",x:2,z:32,dur:200,rare:!1,weather:null,sky:1709616},{id:"blood_moon",title:"BLOOD MOON",shout:"THE MOON WENT WRONG",hint:"Cave pool is exclusive",x:17,z:20,dur:300,rare:!0,weather:"fog",sky:4855840},{id:"storm",title:"TROPICAL STORM",shout:"GET OFF THE WATER",hint:"Storm cod on the docks",x:1.6,z:32,dur:220,rare:!1,weather:"storm",sky:3819088},{id:"wreck",title:"CARGO WRECK",shout:"SHIP CAME APART",hint:"East Beach lockboxes",x:28,z:10,dur:260,rare:!1,weather:null,sky:null},{id:"treasure",title:"TREASURE BOAT",shout:"BOAT FULL OF JUNK GOLD",hint:"North dock · look offshore",x:-24,z:8,dur:210,rare:!0,weather:null,sky:null},{id:"golden",title:"GOLDEN RUN",shout:"THE WATER WENT GOLD",hint:"East Beach exclusive gilt",x:28,z:10,dur:180,rare:!0,weather:null,sky:12886362},{id:"glow_cave",title:"CAVE OPENING",shout:"THE CAVE GREW A MOUTH",hint:"Lantern fish inside",x:17,z:20,dur:240,rare:!1,weather:null,sky:null},{id:"ufo",title:"SOMETHING OVERHEAD",shout:"THAT IS NOT A PLANE",hint:"Offshore unidentified bass",x:0,z:8,dur:200,rare:!0,weather:null,sky:1318936},{id:"lighthouse",title:"LIGHTHOUSE FAULT",shout:"THE LIGHT IS DRUNK",hint:"Beam is wrong. Fish don’t care.",x:0,z:-1,dur:180,rare:!1,weather:null,sky:null},{id:"giant",title:"GIANT OFFSHORE",shout:"SOMETHING HUGE UNDER US",hint:"Stay on the skiff",x:-30,z:2,dur:200,rare:!0,weather:null,sky:null},{id:"crate",title:"SUPPLY WASH",shout:"CRATES ON THE SAND",hint:"East Beach tins",x:26,z:8,dur:200,rare:!1,weather:null,sky:null},{id:"npc",title:"THE OTHER FISHERMAN",shout:"WHO IS THAT",hint:"He fishes. He does not talk.",x:4,z:30,dur:240,rare:!0,weather:null,sky:null},{id:"low_tide",title:"LOW TIDE",shout:"THE FLOOR CAME UP",hint:"South sandbar is real for a bit",x:-8,z:22,dur:280,rare:!1,weather:null,sky:null}],Pl=["RUN","BOATS NOW","I SAW IT","NOT A DRILL","LEAVE THE CHAIR","JEFF IS INVOLVED","GET THE ROD"];function ri(n,t){return new nt(n,new Le({color:t,flatShading:!0}))}function E_(){const n=new ot,t=ri(new zt(.08,.1,4.2,5),12864058);t.position.y=2.1;const e=ri(new et(1.6,.7,.05),15253850);return e.position.set(.8,3.6,0),n.add(t,e),n.visible=!1,n}function b_(){const n=new ot,t=ri(new zt(1.8,2.4,.35,8),13227206),e=ri(new ye(.7,6,4),8250266);return e.position.y=.4,n.add(t,e),n.visible=!1,n}function w_(){const n=new ot,t=ri(new dn(1.1,4.4,3,6),4872808);t.rotation.z=Math.PI/2;const e=ri(new et(.2,1.6,1.1),3820117);return e.position.x=-3.1,n.add(t,e),n.visible=!1,n}function T_(){const n=ri(new et(.7,.55,.7),6965805);return n.visible=!1,n}function A_(n){const t={active:null,nextIn:22,marker:E_(),ufo:b_(),whale:w_(),crate:T_(),sandbar:ri(new zt(6,7.4,.5,8),F.sand),mets:[],shoutT:0};t.sandbar.position.set(-8,-.4,24),t.sandbar.visible=!1,n.add(t.marker,t.ufo,t.whale,t.crate,t.sandbar);for(let e=0;e<10;e++){const i=ri(new ye(.12,5,4),16770720);i.visible=!1,i.userData.live=!1,n.add(i),t.mets.push(i)}return t}function er(){return cc}let cc=null;function R_(n,t){const{dt:e,t:i,toast:r,people:s,onStart:a,onEnd:o}=t;if(n.active){if(n.active.left-=e,n.shoutT-=e,n.shoutT<=0){n.shoutT=7+Math.random()*6;const c=Pl[Math.random()*Pl.length|0];r(`${n.active.shout} · “${c}”`)}if(D_(n,i),n.active.left<=0){const c=n.active;P_(n),n.active=null,cc=null,n.nextIn=70+Math.random()*90,r(`${c.title} ended. Water is ordinary again.`),o?.(c)}return n.active}return n.nextIn-=e,n.nextIn<=0&&C_(n,r,s,a),null}function C_(n,t,e,i){const r=Cl[Math.random()*Cl.length|0];if(n.active={...r,left:r.dur},cc=n.active,n.shoutT=1.2,n.marker.position.set(r.x,.2,r.z),n.marker.visible=!0,n.ufo.visible=r.id==="ufo",n.whale.visible=r.id==="whale"||r.id==="giant",n.crate.visible=r.id==="crate"||r.id==="wreck",n.crate.position.set(26.4,.28,8.2),n.sandbar.visible=r.id==="low_tide",n.sandbar.visible&&(n.sandbar.position.y=.12),e)for(const s of e)s.userData.sit||s.userData.watcher||(s.userData.eventRun=!0,s.userData.path=[[s.position.x,s.position.z],[r.x+(Math.random()-.5)*4,r.z+(Math.random()-.5)*4]],s.userData.u=0);t(`EVENT · ${r.title} · ${Math.round(r.dur/60)} min`),i?.(n.active)}function P_(n){n.marker.visible=!1,n.ufo.visible=!1,n.whale.visible=!1,n.crate.visible=!1,n.sandbar.visible=!1;for(const t of n.mets)t.visible=!1}function D_(n,t){const e=n.active;if(e&&(n.marker.rotation.y=t*.8,n.whale.visible&&(n.whale.position.set(e.x+Math.sin(t*.3)*8,.4+Math.sin(t)*.4,e.z+Math.cos(t*.25)*6),n.whale.rotation.y=t*.25),n.ufo.visible&&(n.ufo.position.set(Math.cos(t*.4)*22,18+Math.sin(t)*2,Math.sin(t*.4)*22),n.ufo.rotation.y=t),e.id==="meteor"))for(const i of n.mets)!i.userData.live&&Math.random()<.04&&(i.userData.live=!0,i.visible=!0,i.position.set((Math.random()-.5)*40,22,(Math.random()-.5)*40),i.userData.v={x:-8-Math.random()*6,y:-14,z:-4}),i.userData.live&&(i.position.x+=i.userData.v.x*.016,i.position.y+=i.userData.v.y*.016,i.position.z+=i.userData.v.z*.016,i.position.y<.4&&(i.userData.live=!1,i.visible=!1))}const Ur={none:{id:"none",name:"No rod",burn:0,luck:0,zones:[]},basic:{id:"basic",name:"Dock Rod",burn:80,luck:0,zones:["MAIN_DOCK","EAST_BEACH","NORTH_DOCK","DRAIN","COVE"],note:"Docks and beach water."},advanced:{id:"advanced",name:"Cliff Rod",burn:180,luck:8,zones:["MAIN_DOCK","EAST_BEACH","NORTH_DOCK","SOUTH_CLIFFS","CAVES","DRAIN","COVE","HOLE","WRECK"],note:"Opens cliffs and the cave pool."},elite:{id:"elite",name:"Offshore Rod",burn:360,luck:18,zones:["MAIN_DOCK","EAST_BEACH","NORTH_DOCK","SOUTH_CLIFFS","CAVES","OFFSHORE","EMBER_SHORE","EMBER_POOL","DRAIN","COVE","HOLE","WRECK"],note:"Opens the deep offshore pool and Great Saint Alon."}},Uo=[{id:"blue_snapper",name:"Blue Snapper",rarity:"Common",kind:"credits",value:12,zones:["MAIN_DOCK","EAST_BEACH"],minRod:"basic",blurb:"Everyday dock fish. Silver-blue, always hungry.",trade:"Redeems for 12 credits."},{id:"old_boot",name:"Old Boot",rarity:"Common",kind:"junk",value:0,zones:["MAIN_DOCK","NORTH_DOCK"],minRod:"basic",blurb:"Somebody lost this in 2004. Keep it as a joke.",trade:"Cannot be traded. Trophy junk."},{id:"kelp_perch",name:"Kelp Perch",rarity:"Common",kind:"credits",value:18,zones:["EAST_BEACH","NORTH_DOCK"],minRod:"basic",blurb:"Fat beach perch with kelp in its gills.",trade:"Redeems for 18 credits."},{id:"bottle_note",name:"Message in a Bottle",rarity:"Uncommon",kind:"collectible",value:0,zones:["EAST_BEACH","CAVES"],minRod:"basic",blurb:"A corked bottle. The note is half-legible island lore.",trade:"Collectible. Stays in your pack."},{id:"token_trout",name:"Token Trout",rarity:"Uncommon",kind:"token",value:14,zones:["NORTH_DOCK","MAIN_DOCK","SOUTH_CLIFFS"],minRod:"basic",blurb:"Speckled trout with a mint-green stripe.",trade:"Redeems for 14 native TOKEN."},{id:"cave_eel",name:"Cave Eel",rarity:"Rare",kind:"credits",value:55,zones:["CAVES"],minRod:"advanced",blurb:"Blind, long, and mean. Lives in the black water.",trade:"Redeems for 55 credits."},{id:"locked_crate",name:"Locked Crate",rarity:"Rare",kind:"treasure",value:0,zones:["CAVES","OFFSHORE"],minRod:"advanced",blurb:"Iron-banded crate. Something knocks inside.",trade:"Treasure. Keep it. No payout yet."},{id:"golden_tuna",name:"Golden Tuna",rarity:"Epic",kind:"sol",value:.04,zones:["SOUTH_CLIFFS","OFFSHORE"],minRod:"advanced",blurb:"Heavy gold-flank tuna. The island’s first real prize.",trade:"Redeems for 0.04 SOL (preview)."},{id:"crystal_angler",name:"Crystal Angler",rarity:"Epic",kind:"credits",value:140,zones:["CAVES","OFFSHORE"],minRod:"advanced",blurb:"Glass-clear body, a lantern that never goes out.",trade:"Redeems for 140 credits."},{id:"merch_marlin",name:"Merch Marlin",rarity:"Legendary",kind:"merch",value:1,merch:"Limited Marlin Tee",zones:["OFFSHORE","EAST_BEACH"],minRod:"elite",blurb:"A billfish wearing the island’s drop tag.",trade:"Redeems for a Limited Marlin Tee claim (preview)."},{id:"pump_pillfish",name:"Pump Pillfish",rarity:"Legendary",kind:"token",value:90,zones:["OFFSHORE","SOUTH_CLIFFS"],minRod:"elite",blurb:"Shaped like the official pill. Extremely few exist.",trade:"Redeems for 90 native TOKEN."},{id:"moon_marlin",name:"Moon Marlin",rarity:"Mythic",kind:"sol",value:.18,zones:["OFFSHORE"],minRod:"elite",blurb:"Night-silver marlin. Only the offshore black water.",trade:"Redeems for 0.18 SOL (preview)."},{id:"jackpot_leviathan",name:"Jackpot Leviathan",rarity:"Mythic",kind:"sol",value:.25,zones:["OFFSHORE"],minRod:"elite",blurb:"The island’s jackpot. Almost nobody lands it.",trade:"Redeems for 0.25 SOL (preview)."},{id:"vault_whale",name:"Vault Whale",rarity:"Mythic",kind:"bundle",value:1,zones:["OFFSHORE"],minRod:"elite",blurb:"A pale whale calf with a vault lock on its tail.",trade:"Redeems for 200 credits + 40 TOKEN + 0.05 SOL (preview)."},{id:"cinder_bass",name:"Cinder Bass",rarity:"Uncommon",kind:"credits",value:28,zones:["EMBER_SHORE"],minRod:"basic",blurb:"Warm-water bass off Great Saint Alon.",trade:"Redeems for 28 credits."},{id:"ash_trout",name:"Ash Trout",rarity:"Rare",kind:"token",value:22,zones:["EMBER_SHORE","EMBER_POOL"],minRod:"advanced",blurb:"Grey-speckled trout from the lava shelf.",trade:"Redeems for 22 native TOKEN."},{id:"ember_eel",name:"Ember Eel",rarity:"Epic",kind:"credits",value:160,zones:["EMBER_POOL"],minRod:"elite",blurb:"Glows in the black pool. Don’t drop it.",trade:"Redeems for 160 credits."},{id:"jeff",name:"Jeff",rarity:"Mythic",kind:"collectible",value:0,zones:["OFFSHORE","MAIN_DOCK","EAST_BEACH"],minRod:"basic",blurb:"It’s Jeff. He has a name tag. Nobody issued it.",trade:"Collectible. Jeff stays in the book."},{id:"drain_goby",name:"Drain Goby",rarity:"Uncommon",kind:"credits",value:24,zones:["DRAIN"],minRod:"basic",blurb:"Lives in the pipe. Tastes like coins.",trade:"Redeems for 24 credits."},{id:"wreck_grouper",name:"Wreck Grouper",rarity:"Rare",kind:"token",value:18,zones:["WRECK"],minRod:"basic",blurb:"Grew up in the hold. Still wearing rust.",trade:"Redeems for 18 TOKEN."},{id:"cove_perch",name:"Cove Perch",rarity:"Uncommon",kind:"credits",value:22,zones:["COVE"],minRod:"basic",blurb:"The quiet beach fish. Nobody logged it.",trade:"Redeems for 22 credits."},{id:"hole_ling",name:"Hole Ling",rarity:"Epic",kind:"credits",value:110,zones:["HOLE"],minRod:"advanced",blurb:"Black-water ling. No waypoint. On purpose.",trade:"Redeems for 110 credits."},{id:"lost_wallet",name:"Lost Wallet",rarity:"Legendary",kind:"sol",value:.03,zones:["EAST_BEACH","MAIN_DOCK","WRECK"],minRod:"basic",hidden:!0,blurb:"Still has a seed phrase written wrong.",trade:"Redeems for 0.03 SOL (preview)."},{id:"secret_key",name:"Brass Key",rarity:"Legendary",kind:"collectible",value:0,zones:["CAVES","DRAIN","HOLE"],minRod:"advanced",hidden:!0,blurb:"Fits a lock nobody admits exists.",trade:"Collectible. Status piece."},{id:"mystery_ticket",name:"Mystery Ticket",rarity:"Mythic",kind:"collectible",value:0,zones:["OFFSHORE","COVE"],minRod:"elite",hidden:!0,blurb:"Admit one. Date blank. Venue blank.",trade:"Collectible."},{id:"boat_part",name:"Skiff Rib",rarity:"Epic",kind:"collectible",value:0,zones:["WRECK","OFFSHORE"],minRod:"advanced",hidden:!0,blurb:"Would complete a better boat. Someday.",trade:"Collectible."},{id:"ancient_coil",name:"Ancient Coil",rarity:"Mythic",kind:"collectible",value:0,zones:["CAVES","EMBER_POOL"],minRod:"elite",hidden:!0,blurb:"Warm. Older than the lighthouse.",trade:"Collectible."},{id:"mutant_snapper",name:"Mutant Snapper",rarity:"Legendary",kind:"token",value:48,zones:["EAST_BEACH","DRAIN"],minRod:"basic",hidden:!0,blurb:"Too many eyes. Still a snapper.",trade:"Redeems for 48 TOKEN."},{id:"jackpot_box",name:"???",rarity:"???",kind:"bundle",value:1,zones:["OFFSHORE","THE_DROP","HOLE"],minRod:"elite",hidden:!0,blurb:"The island paid out. Nobody wrote the rules down.",trade:"Jackpot preview. Mixed claim."}],Nu=[{id:"tok20",name:"20 TOKEN",cost:80,give:{tokens:20},note:"Credits → native token. Preview."},{id:"tok60",name:"60 TOKEN",cost:210,give:{tokens:60},note:"Bulk token swap. Preview."},{id:"sol01",name:"0.01 SOL",cost:160,give:{sol:.01},note:"Preview SOL. No chain."},{id:"sol05",name:"0.05 SOL",cost:720,give:{sol:.05},note:"Bigger preview SOL claim."}],Ou=[{id:"hat",name:"Dock Hat",cost:70,merch:"Dock Hat",note:"White brim. Preview fulfilment."},{id:"tee",name:"PUMPISLAND Tee",cost:140,merch:"PUMPISLAND Tee",note:"Official pill print. Preview."},{id:"hoodie",name:"Island Hoodie",cost:260,merch:"Island Hoodie",note:"Heavy cotton. Preview."},{id:"rodskin",name:"Mint Rod Wrap",cost:190,merch:"Mint Rod Wrap",note:"Cosmetic wrap. Preview."}],Fu=[{id:"skiff",name:"Island Skiff",cost:160,note:"Sail to Great Saint Alon. Preview boat. Local only."}],L_={Common:50,Uncommon:24,Rare:12,Epic:7,Legendary:2.2,Mythic:.45,"???":.08},Ua={basic:1,advanced:2,elite:3};function Dl(){return{wallet:null,tokens:240,credits:180,burned:0,rods:["basic"],equipped:"basic",inventory:[],claims:[],merch:[],boat:!1,visitedEmber:!1,caught:0,previewSol:0,book:{},biggest:0,sawDrop:!1,found:{}}}function I_(){const n=localStorage.getItem("pi-state-v3"),t=n?{...Dl(),...JSON.parse(n)}:Dl();Array.isArray(t.merch)||(t.merch=[]),typeof t.boat!="boolean"&&(t.boat=!1),typeof t.visitedEmber!="boolean"&&(t.visitedEmber=!1),(!t.book||typeof t.book!="object")&&(t.book={}),typeof t.biggest!="number"&&(t.biggest=0),typeof t.sawDrop!="boolean"&&(t.sawDrop=!1),(!t.found||typeof t.found!="object")&&(t.found={}),t.rods?.length||(t.rods=["basic"],t.equipped="basic");function e(){localStorage.setItem("pi-state-v3",JSON.stringify(t))}function i(){if(!t.wallet){const g=[...crypto.getRandomValues(new Uint8Array(4))].map(_=>_.toString(16).padStart(2,"0")).join("");t.wallet=`preview${g}…demo`,e()}return t.wallet}function r(f){const g=Ur[f];return!g||g.id==="none"?{ok:!1,reason:"Unknown rod."}:t.rods.includes(f)?{ok:!1,reason:"Already owned."}:t.tokens<g.burn?{ok:!1,reason:`Need ${g.burn} TOKEN.`}:(t.tokens-=g.burn,t.burned+=g.burn,t.rods.push(f),t.equipped=f,e(),{ok:!0,rod:g})}function s(f){return t.rods.includes(f)?(t.equipped=f,e(),!0):!1}function a(f){const g=Ur[t.equipped]||Ur.none;return g.id==="none"?{ok:!1,reason:"Burn TOKEN for a rod at the lighthouse."}:f==="EVENT"?{ok:!0,rod:g}:g.zones.includes(f)?{ok:!0,rod:g}:{ok:!1,reason:`${g.name} cannot fish ${f.replaceAll("_"," ")}.`}}function o(f,g){const _=a(f);if(!_.ok)return _;const d=_.rod;let u=Uo.filter(S=>S.zones.includes(f)&&Ua[d.id]>=Ua[S.minRod]);if(g){const S=Io.filter(v=>v.event===g&&(v.zones.includes(f)||v.zones.includes("EVENT")));u=u.concat(S)}if(!u.length)return{ok:!1,reason:"Nothing bites here."};const M=u.map(S=>({c:S,w:Math.max(.04,(L_[S.rarity]||.08)+d.luck*(S.rarity==="Common"?-.4:S.rarity==="???"?.08:.38))})),b=M.reduce((S,v)=>S+v.w,0);let x=Math.random()*b,P=M[0].c;for(const S of M)if(x-=S.w,x<=0){P=S.c;break}const A=P.kind==="collectible"||P.kind==="junk"||P.kind==="treasure",w={uid:`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`,...P,zone:f,at:Date.now(),status:A?"kept":"redeemable"};t.inventory.unshift(w),t.caught+=1,t.book||(t.book={}),t.book[P.id]=(t.book[P.id]||0)+1;const R=20+Math.round(Math.random()*80+(Ua[d.id]||1)*8);return w.size=R,R>(t.biggest||0)&&(t.biggest=R),e(),{ok:!0,item:w}}function c(f){f.kind==="credits"&&(t.credits+=f.value),f.kind==="token"&&(t.tokens+=f.value),f.kind==="sol"&&(t.previewSol+=f.value),f.kind==="merch"&&t.merch.unshift({name:f.merch||f.name,at:Date.now()}),f.kind==="bundle"&&(t.credits+=f.id==="jackpot_box"?400:200,t.tokens+=f.id==="jackpot_box"?80:40,t.previewSol+=f.id==="jackpot_box"?.12:.05)}function l(f){const g=t.inventory.find(_=>_.uid===f);return g?g.status!=="redeemable"?{ok:!1,reason:"Not redeemable."}:(g.status="locked",c(g),g.status="redeemed",g.redeemedAt=Date.now(),t.claims.unshift({uid:g.uid,name:g.name,kind:g.kind,value:g.value,note:g.kind==="sol"||g.kind==="merch"||g.kind==="bundle"?"PREVIEW claim — no chain, no fulfilment":"Applied locally"}),e(),{ok:!0,item:g}):{ok:!1,reason:"Not in inventory."}}function h(f){const g=Nu.find(_=>_.id===f);return g?t.credits<g.cost?{ok:!1,reason:`Need ${g.cost} credits.`}:(t.credits-=g.cost,g.give.tokens&&(t.tokens+=g.give.tokens),g.give.sol&&(t.previewSol+=g.give.sol),e(),{ok:!0,offer:g}):{ok:!1,reason:"Unknown swap."}}function m(f){const g=Ou.find(_=>_.id===f);return g?t.credits<g.cost?{ok:!1,reason:`Need ${g.cost} credits.`}:(t.credits-=g.cost,t.merch.unshift({name:g.merch,at:Date.now()}),e(),{ok:!0,offer:g}):{ok:!1,reason:"Unknown merch."}}function p(f){const g=Fu.find(_=>_.id===f);return g?f==="skiff"?t.boat?{ok:!1,reason:"You already own the skiff."}:t.credits<g.cost?{ok:!1,reason:`Need ${g.cost} credits.`}:(t.credits-=g.cost,t.boat=!0,e(),{ok:!0,offer:g}):{ok:!1,reason:"Unknown gear."}:{ok:!1,reason:"Unknown gear."}}return{state:t,save:e,connectPreviewWallet:i,burnForRod:r,equip:s,canFish:a,rollCatch:o,redeem:l,buySwap:h,buyMerch:m,buyGear:p,markEmber(){t.visitedEmber||(t.visitedEmber=!0,e())},markDrop(){t.sawDrop||(t.sawDrop=!0,e())},discover(f){return t.found||(t.found={}),t.found[f]?!1:(t.found[f]=Date.now(),e(),!0)}}}function qs(n){return{credits:"IN-GAME CREDITS",token:"NATIVE TOKEN",sol:"SOL (PREVIEW)",merch:"MERCH CLAIM (PREVIEW)",treasure:"TREASURE",collectible:"COLLECTIBLE",junk:"JUNK",bundle:"MIXED PAYOUT (PREVIEW)"}[n]||n}function zu(n){return n.trade||qs(n.kind)}const Ie=(n,t="0 0 80 80")=>`<svg class="thumb" viewBox="${t}" aria-hidden="true">${n}</svg>`;function U_(n){return Ie(n==="advanced"?`
      <rect x="36" y="8" width="6" height="64" rx="3" fill="#3a2616"/>
      <rect x="37" y="10" width="4" height="48" rx="2" fill="#6a4a28"/>
      <rect x="34" y="50" width="10" height="16" rx="3" fill="#1f5c30"/>
      <circle cx="48" cy="56" r="7" fill="#1a1c1a" stroke="#c9d4c6" stroke-width="2"/>
      <path d="M39 12 C58 18 62 36 54 48" fill="none" stroke="#dfe8e2" stroke-width="1.4"/>
    `:n==="elite"?`
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
  `)}function N_(n){return n.startsWith("sol")?Ie(`
      <circle cx="40" cy="40" r="26" fill="#14f195"/>
      <path d="M40 18 L28 38 H40 L32 62 L56 36 H42 Z" fill="#0b3b2a"/>
    `):Ie(`
    <rect x="18" y="28" width="44" height="28" rx="14" fill="#6ed18a"/>
    <rect x="40" y="28" width="22" height="28" rx="14" fill="#f4f8f5"/>
    <rect x="16" y="26" width="48" height="32" rx="16" fill="none" stroke="#16382a" stroke-width="4"/>
  `)}function O_(n){return Ie(n==="hat"?`
      <ellipse cx="40" cy="52" rx="28" ry="8" fill="#f4f5f0"/>
      <path d="M22 50 Q22 28 40 24 Q58 28 58 50" fill="#2f8a48"/>
      <rect x="20" y="48" width="40" height="6" rx="3" fill="#16382a"/>
    `:n==="hoodie"?`
      <path d="M26 26 Q40 16 54 26 L62 36 L56 40 L54 68 H26 L24 40 L18 36 Z" fill="#1f5c30"/>
      <path d="M32 26 Q40 22 48 26 L46 38 H34 Z" fill="#16382a"/>
      <rect x="36" y="44" width="8" height="10" rx="2" fill="#6ed18a"/>
    `:n==="rodskin"?`
      <rect x="18" y="36" width="44" height="10" rx="5" fill="#6ed18a"/>
      <rect x="18" y="36" width="18" height="10" rx="5" fill="#f4f8f5"/>
      <rect x="16" y="34" width="48" height="14" rx="7" fill="none" stroke="#16382a" stroke-width="3"/>
    `:`
    <path d="M26 24 H54 L58 70 H22 Z" fill="#f4f5f0"/>
    <path d="M26 24 H54 L52 32 H28 Z" fill="#2f8a48"/>
    <rect x="34" y="40" width="12" height="12" rx="6" fill="#6ed18a"/>
    <rect x="40" y="40" width="6" height="12" rx="3" fill="#f4f8f5"/>
  `)}function No(n){const t={blue_snapper:["#4e96bc","#2f6f96"],old_boot:["#5c3d24","#3a2616"],kelp_perch:["#6f7d4c","#2f8a48"],bottle_note:["#8fd0ff","#2f6f96"],token_trout:["#6ed18a","#16382a"],cave_eel:["#3a3a48","#1a1c1a"],locked_crate:["#7a5533","#3a2616"],golden_tuna:["#e8c15a","#8a6a20"],crystal_angler:["#b8f0ff","#4e96bc"],merch_marlin:["#2f8a48","#16382a"],pump_pillfish:["#6ed18a","#f4f8f5"],moon_marlin:["#d5e6ee","#6aa3cc"],jackpot_leviathan:["#e4a0ff","#4a2a68"],vault_whale:["#f4f5f0","#6aa3cc"]},[e,i]=t[n]||["#4e96bc","#16382a"];return Ie(n==="old_boot"?`<path d="M18 30 H48 V44 H62 Q70 44 70 54 H18 Z" fill="${e}"/><rect x="20" y="26" width="26" height="8" fill="${i}"/>`:n==="locked_crate"?`<rect x="18" y="22" width="44" height="36" fill="${e}"/><rect x="18" y="36" width="44" height="8" fill="${i}"/><circle cx="40" cy="40" r="5" fill="#e8c15a"/>`:n==="bottle_note"?`<rect x="34" y="14" width="12" height="10" fill="${i}"/><path d="M28 24 H52 L48 66 H32 Z" fill="${e}"/><rect x="32" y="34" width="16" height="18" fill="#f4f5f0"/>`:`
    <ellipse cx="38" cy="40" rx="22" ry="12" fill="${e}"/>
    <path d="M58 40 L74 28 V52 Z" fill="${i}"/>
    <circle cx="26" cy="38" r="3" fill="#142018"/>
    <path d="M36 30 Q40 40 36 50" fill="none" stroke="${i}" stroke-width="2"/>
  `)}function F_(){return Ie(`
    <rect x="16" y="42" width="48" height="14" rx="4" fill="#3a2616"/>
    <path d="M16 42 L40 22 L64 42" fill="#f4f5f0"/>
    <rect x="36" y="28" width="8" height="16" fill="#6ed18a"/>
  `)}function Na(n){return Ie(n==="fish"?'<ellipse cx="40" cy="40" rx="22" ry="12" fill="#4e96bc"/><path d="M60 40 L74 28 V52 Z" fill="#2f6f96"/>':n==="burn"?'<path d="M40 14 C28 34 28 46 40 66 C52 46 52 34 40 14 Z" fill="#e8c15a"/>':'<rect x="22" y="28" width="36" height="24" rx="4" fill="#6ed18a"/><text x="40" y="46" text-anchor="middle" font-size="16" fill="#16382a" font-family="sans-serif">C</text>')}const Ms={ctx:null};function Ys(){if(Ms.ctx)return Ms.ctx;const n=window.AudioContext||window.webkitAudioContext;return n?(Ms.ctx=new n,Ms.ctx):null}function z_(){const n=Ys();n&&n.state==="suspended"&&n.resume()}function Bu(n,t,e,i,r,s){const a=n.createGain();return a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(e,t+i),a.gain.setValueAtTime(e,t+i+r),a.gain.exponentialRampToValueAtTime(1e-4,t+i+r+s),a}function xn({freq:n=220,type:t="sine",dur:e=.2,vol:i=.08,slide:r=0}={}){const s=Ys();if(!s)return;const a=s.currentTime,o=s.createOscillator();o.type=t,o.frequency.setValueAtTime(n,a),r&&o.frequency.exponentialRampToValueAtTime(Math.max(40,n+r),a+e);const c=Bu(s,a,i,.012,e*.35,e*.6);o.connect(c),c.connect(s.destination),o.start(a),o.stop(a+e+.05)}function Oa({dur:n=.18,vol:t=.05,hp:e=400,lp:i=2400}={}){const r=Ys();if(!r)return;const s=Math.floor(r.sampleRate*n),a=r.createBuffer(1,s,r.sampleRate),o=a.getChannelData(0);for(let p=0;p<s;p++)o[p]=(Math.random()*2-1)*(1-p/s);const c=r.createBufferSource();c.buffer=a;const l=r.createBiquadFilter();l.type="highpass",l.frequency.value=e;const h=r.createBiquadFilter();h.type="lowpass",h.frequency.value=i;const m=Bu(r,r.currentTime,t,.005,n*.2,n*.75);c.connect(l),l.connect(h),h.connect(m),m.connect(r.destination),c.start()}const Se={step:()=>Oa({dur:.07,vol:.035,hp:80,lp:420}),splash:()=>{Oa({dur:.28,vol:.07,hp:200,lp:1800}),xn({freq:180,type:"triangle",dur:.18,vol:.03,slide:-80})},cast:()=>xn({freq:340,type:"triangle",dur:.16,vol:.05,slide:-120}),bite:()=>{xn({freq:620,type:"square",dur:.08,vol:.045}),xn({freq:180,type:"sawtooth",dur:.12,vol:.03,slide:-40})},reel:()=>xn({freq:240,type:"triangle",dur:.09,vol:.03,slide:70}),catch:(n=!1)=>{xn({freq:n?520:360,type:"sine",dur:.16,vol:.06}),xn({freq:n?780:480,type:"triangle",dur:.22,vol:.04,slide:40})},miss:()=>xn({freq:140,type:"sine",dur:.2,vol:.04,slide:-70}),ui:()=>xn({freq:480,type:"sine",dur:.07,vol:.03}),burn:()=>{Oa({dur:.22,vol:.04,hp:300,lp:1600}),xn({freq:260,type:"sawtooth",dur:.18,vol:.035,slide:90})},jump:()=>xn({freq:210,type:"triangle",dur:.1,vol:.035,slide:80})};let Ll=null;function B_(){const n=Ys();if(!n||Ll)return;const t=n.currentTime,e=n.createOscillator();e.type="sine",e.frequency.value=72;const i=n.createOscillator();i.type="triangle",i.frequency.value=118;const r=n.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(.018,t+1.6);const s=n.createOscillator();s.frequency.value=.07;const a=n.createGain();a.gain.value=.006,s.connect(a),a.connect(r.gain),e.connect(r),i.connect(r),r.connect(n.destination),e.start(),i.start(),s.start(),Ll=r}const mi=160,ys=212,Yn=80;function Rr(n,t,e,i){return{x:(n+mi)/(mi*2)*e,y:(mi-t)/(mi*2)*i}}function k_(n){const t=n.getContext("2d");n.width=ys,n.height=ys;const e=ys,i=ys,r=document.createElement("canvas");r.width=e,r.height=i;const s=r.getContext("2d");s.fillStyle="#1c5a78",s.fillRect(0,0,e,i);const a=s.createImageData(Yn,Yn),o=a.data;for(let g=0;g<Yn;g++)for(let _=0;_<Yn;_++){const d=-mi+(_+.5)/Yn*mi*2,u=mi-(g+.5)/Yn*mi*2,M=Re(d,u),b=Math.hypot(d,u),x=Math.hypot(d-Ut.x,u-Ut.z);let P,A,w;if(x<Ut.r+2&&M>.08)M<.3?(P=201,A=160,w=106):Math.hypot(d-Ut.x+2,u-Ut.z-1)<6?(P=196,A=74,w=58):(P=106,A=83,w=68);else if(M<.08||b>tn+3.4){const S=Math.min(1,Math.max(0,Math.min(b,x)/40));P=28+S*8,A=88-S*18,w=118-S*10}else if(M<.28||d>10&&u>-4&&u<24&&M<.62)P=210,A=190,w=145;else if(d>2&&u<-6&&b<30)P=72,A=92,w=52;else if(M>2.8)P=138,A=116,w=72;else{const S=(Math.sin(d*.28)+1)*10;P=98+S,A=118+S*.6,w=62}const R=(g*Yn+_)*4;o[R]=P,o[R+1]=A,o[R+2]=w,o[R+3]=255}const c=document.createElement("canvas");c.width=Yn,c.height=Yn,c.getContext("2d").putImageData(a,0,0),s.imageSmoothingEnabled=!1,s.drawImage(c,0,0,e,i);function l(g,_,d){const u=Rr(g,_,e,i);s.save(),s.translate(u.x,u.y),d(s),s.restore()}l(1.6,31.4,g=>{g.fillStyle="#6a4524",g.fillRect(-4,-16,8,22),g.fillStyle="#8a5a2a",g.fillRect(-3.2,-15,6.4,20)}),l(-27.2,8,g=>{g.rotate(-1.2),g.fillStyle="#6a4524",g.fillRect(-3.2,-12,6.4,18)}),l(18.8,24.2,g=>{g.rotate(-.4),g.fillStyle="#6a4524",g.fillRect(-2.4,-6,4.8,10)}),l(0,-1.2,g=>{g.fillStyle="#f4f5f0",g.beginPath(),g.arc(0,0,4.2,0,Math.PI*2),g.fill(),g.fillStyle="#c44a3a",g.beginPath(),g.moveTo(0,-7),g.lineTo(3.2,-1),g.lineTo(-3.2,-1),g.closePath(),g.fill()});for(const[g,_]of[[-6.8,22.4],[8.6,21.6],[-19.2,6.4],[25.2,8.8],[28.4,12.4]])l(g,_,d=>{d.fillStyle="#2f8a48",d.beginPath(),d.moveTo(0,-4),d.lineTo(4,2),d.lineTo(-4,2),d.closePath(),d.fill()});l(17.2,20.6,g=>{g.fillStyle="#2a2c2a",g.beginPath(),g.ellipse(0,0,5,3.4,0,0,Math.PI*2),g.fill()}),l(-31,5.6,g=>{g.fillStyle="#3a2616",g.beginPath(),g.ellipse(0,0,3.4,1.6,.45,0,Math.PI*2),g.fill()});const h=Rr(-31,5.6,e,i),m=Rr(Ut.x-6,Ut.z+22,e,i);s.strokeStyle="rgba(244,247,242,0.35)",s.setLineDash([4,4]),s.beginPath(),s.moveTo(h.x,h.y),s.lineTo(m.x,m.y),s.stroke(),s.setLineDash([]);const p=[{t:"HOME",x:0,z:8,fill:"#f4f7f2"},{t:"DOCK",x:8,z:36,fill:"#f4f7f2"},{t:"ST ALON",x:Ut.x,z:Ut.z,fill:"#ffd0c0"}];s.font="700 9px ui-monospace, SFMono-Regular, Menlo, monospace",s.textAlign="center",s.textBaseline="middle";for(const g of p){const _=Rr(g.x,g.z,e,i);s.fillStyle="rgba(8,14,12,0.62)",s.fillRect(_.x-16,_.y-6,32,12),s.fillStyle=g.fill,s.fillText(g.t,_.x,_.y)}s.strokeStyle="rgba(244,247,242,0.18)",s.lineWidth=2,s.strokeRect(1,1,e-2,i-2);function f(g,_,d){t.clearRect(0,0,e,i),t.drawImage(r,0,0);const u=Rr(g,_,e,i);t.save(),t.translate(u.x,u.y),t.rotate(d),t.beginPath(),t.moveTo(0,11),t.lineTo(6,-6),t.lineTo(0,-2),t.lineTo(-6,-6),t.closePath(),t.fillStyle="#ffffff",t.strokeStyle="#102018",t.lineWidth=2,t.fill(),t.stroke(),t.restore()}return{draw:f}}function H_(n){const t=(n.inventory||[]).some(e=>e.zone==="EMBER_SHORE"||e.zone==="EMBER_POOL");return[{id:"cast",label:"Land a catch from the water",done:(n.caught||0)>0},{id:"redeem",label:"Redeem a catch at the hut counter",done:(n.claims||[]).length>0},{id:"skiff",label:"Buy the Island Skiff in Shop · GEAR",done:!!n.boat},{id:"sail",label:"Sail the skiff to Great Saint Alon",done:!!n.visitedEmber},{id:"ember",label:"Catch a fish on Great Saint Alon",done:t},{id:"book",label:"Open the Fish Book (J)",done:Object.keys(n.book||{}).length>=3},{id:"drop",label:"Look at The Drop from the south cliffs",done:!!n.sawDrop},{id:"secrets",label:`Log 5 secrets (${Object.keys(n.found||{}).length}/13)`,done:Object.keys(n.found||{}).length>=5}]}const V_=420;function $e(n){return new Le({color:n,flatShading:!0})}function G_(){const n=new ot,t=$e(16054002),e=new nt(new et(.18,.07,.32),t),i=new nt(new et(.7,.03,.16),t);i.position.set(-.35,.02,0);const r=i.clone();return r.position.x=.35,n.add(e,i,r),n.userData.wings=[i,r],n}function W_(){const n=new ot,t=new nt(new et(.22,.08,.16),$e(11684402));t.position.y=.06;const e=new nt(new et(.08,.05,.12),$e(9056802));e.position.set(-.16,.06,.08);const i=e.clone();return i.position.x=.16,n.add(t,e,i),n}function X_(n=!1){const t=new ot,e=new nt(new dn(.07,.22,2,5),$e(n?2763818:4034495));e.rotation.z=Math.PI/2;const i=new nt(new Ke(.08,.12,4),$e(2779784));if(i.rotation.z=-Math.PI/2,i.position.x=-.2,t.add(e,i),n){const r=new nt(new et(.16,.04,.04),$e(1711130));r.position.set(.08,.04,0),t.add(r)}return t.visible=!1,t}function Il(n=F.woodDark,t=2.7){const e=new ot,i=new nt(new et(1.15,.38,t),$e(n));i.position.y=.12;const r=new nt(new et(.72,.3,.7),$e(F.wood));return r.position.set(0,.14,-t*.55),e.add(i,r),e}function q_(){const n=new ot,t=new nt(new et(4.8,1.1,14),$e(4869703));t.position.y=.4;const e=new nt(new et(3.6,1.6,4.2),$e(12864058));e.position.set(0,1.4,3.4);const i=new nt(new zt(.35,.4,2.2,6),$e(2763818));return i.position.set(0,2.8,3.6),n.add(t,e,i),n}function Y_(){const n=new ot,t=new nt(new et(.5,.35,2.4),$e(16053744)),e=new nt(new et(3.4,.08,.55),$e(12864058)),i=new nt(new et(.08,.55,.4),$e(12864058));return i.position.set(0,.35,1.05),n.add(t,e,i),n}function $_(){return new nt(new et(.04,.28,.04),new nn({color:12969200,transparent:!0,opacity:.45}))}function ku(n){const t=(n/V_%1+1)%1,e=t*Math.PI*2,i=Math.sin(t*Math.PI*2),r=i<0;return{u:t,ang:e,elev:i,night:r,dusk:t>.42&&t<.58,dawn:t<.12||t>.92}}function K_(n){const t={birds:[],crabs:[],jumpers:[],boats:[],ships:[],planes:[],rain:[],patrol:[],beam:null,fog:null,ghostBoat:null,leviathan:null,watcher:null,chairIsle:null,weather:"clear",weatherT:18,eventT:40,stealT:22};for(let l=0;l<8;l++){const h=G_(),m=l/8*Math.PI*2;h.userData.orbit=m,h.userData.rad=16+l%5*3.2,h.userData.h=7.4+l%4*.8,h.userData.cx=l%2?2:26,h.userData.cz=l%2?30:10,n.add(h),t.birds.push(h)}const e=[[26,8],[28,12],[24,6],[22,14],[30,9]];for(const[l,h]of e){const m=W_();m.position.set(l,.04,h),m.userData.ox=l,m.userData.oz=h,m.userData.ph=Math.random()*6,n.add(m),t.crabs.push(m)}for(let l=0;l<5;l++){const h=X_(l===3);h.userData.cool=2+l*1.4,h.userData.sunglass=l===3,n.add(h),t.jumpers.push(h)}for(let l=0;l<3;l++){const h=Il();h.userData.a=l*2.1,h.userData.rad=58+l*8,h.userData.speed=.05+l*.012,n.add(h),t.boats.push(h)}const i=q_();i.userData.t=0,i.userData.live=!1,i.visible=!1,n.add(i),t.ships.push(i);const r=Y_();r.visible=!1,r.userData.live=!1,n.add(r),t.planes.push(r);const s=Il(3810838,3.2);s.visible=!1,s.userData.live=!1,n.add(s),t.ghostBoat=s;const a=new nt(new dn(1.8,7.5,3,6),new Le({color:1318952,flatShading:!0,transparent:!0,opacity:.55}));a.rotation.z=Math.PI/2,a.visible=!1,a.userData.live=!1,n.add(a),t.leviathan=a;for(let l=0;l<28;l++){const h=$_();h.visible=!1,h.userData.vy=12+Math.random()*8,n.add(h),t.rain.push(h)}const o=new nt(new et(.35,.35,48),new nn({color:16773568,transparent:!0,opacity:.18,depthWrite:!1}));o.position.set(0,10.2,-1.2),o.visible=!1,n.add(o),t.beam=o;const c=new nt(new fn(220,220),new nn({color:13490384,transparent:!0,opacity:0,depthWrite:!1}));return c.rotation.x=-Math.PI/2,c.position.y=1.4,n.add(c),t.fog=c,t}function Z_(n,t){const{dt:e,t:i,camera:r,toast:s,night:a,rough:o,raining:c,foggy:l}=t,h=r.position.x,m=r.position.z;for(const d of n.birds){d.userData.orbit+=e*.28;const u=d.userData.orbit;if(d.position.set(d.userData.cx+Math.cos(u)*d.userData.rad,d.userData.h+Math.sin(i*1.4+u)*.5,d.userData.cz+Math.sin(u)*d.userData.rad),d.rotation.y=-u+Math.PI/2,d.userData.wings){const M=Math.sin(i*9+u)*.5;d.userData.wings[0].rotation.z=M,d.userData.wings[1].rotation.z=-M}}n.stealT-=e,n.stealT<=0&&(n.stealT=28+Math.random()*24,Math.hypot(h,m-32)<18&&s("A gull took a fish. Not yours. Allegedly."));for(const d of n.crabs){const u=i*.7+d.userData.ph,M=d.userData.ox+Math.sin(u)*1.6,b=d.userData.oz+Math.cos(u*.8)*1.1;d.position.set(M,Math.max(.03,Re(M,b)+.02),b),d.rotation.y=u}for(const d of n.jumpers){if(d.userData.cool-=e,!d.visible&&d.userData.cool<=0){const u=Math.random()*Math.PI*2,M=36+Math.random()*10;d.userData.x=Math.cos(u)*M,d.userData.z=Math.sin(u)*M,d.userData.jump=0,d.visible=!0,d.userData.cool=6+Math.random()*8}if(d.visible){d.userData.jump+=e;const u=d.userData.jump,M=Ln(d.userData.x,d.userData.z,i)+Math.sin(u*4.2)*1.35;d.position.set(d.userData.x+u*.8,M,d.userData.z),d.rotation.z=.4-u,u>1.15&&(d.visible=!1)}}for(const d of n.boats){d.userData.a+=e*d.userData.speed;const u=d.userData.a,M=Math.cos(u)*d.userData.rad,b=Math.sin(u)*d.userData.rad;d.position.set(M,Ln(M,b,i)+.08,b),d.rotation.y=-u+Math.PI/2,d.rotation.z=Math.sin(i*1.2+u)*.08*(o?2.2:1)}const p=n.ships[0];if(p)if(!p.userData.live)p.userData.cool=(p.userData.cool??20)-e,p.userData.cool<=0&&(p.userData.live=!0,p.visible=!0,p.userData.x=-90,p.userData.z=70);else{p.userData.x+=e*4.2;const d=p.userData.x,u=p.userData.z;p.position.set(d,Ln(d,u,i)+.2,u),p.rotation.y=Math.PI/2,d>110&&(p.userData.live=!1,p.visible=!1,p.userData.cool=55+Math.random()*40)}const f=n.planes[0];f&&(f.userData.live?(f.userData.x+=e*22,f.userData.z+=e*6,f.position.set(f.userData.x,28,f.userData.z),f.rotation.y=Math.PI/2.4,f.userData.x>120&&(f.userData.live=!1,f.visible=!1,f.userData.cool=50+Math.random()*50)):(f.userData.cool=(f.userData.cool??35)-e,f.userData.cool<=0&&(f.userData.live=!0,f.visible=!0,f.userData.x=-80,f.userData.z=-40)));const g=n.ghostBoat;if(g)if(!g.userData.live)g.userData.cool=(g.userData.cool??26)-e,g.userData.cool<=0&&(g.userData.live=!0,g.visible=!0,g.userData.x=48,g.userData.z=-36);else{g.userData.x-=e*3.4;const d=g.userData.x,u=g.userData.z;g.position.set(d,Ln(d,u,i)+.1,u),g.rotation.y=-Math.PI/2,d<-70&&(g.userData.live=!1,g.visible=!1,g.userData.cool=40+Math.random()*50)}const _=n.leviathan;if(_&&(_.userData.live?(_.userData.k+=e,_.userData.x-=e*7,_.position.set(_.userData.x,-1.4,_.userData.z),_.userData.k>2.4&&(_.visible=!1,_.userData.live=!1,_.userData.cool=48+Math.random()*30)):(_.userData.cool=(_.userData.cool??18)-e,Re(h,m)<.1&&Math.hypot(h,m)>tn-2&&_.userData.cool<=0&&(_.userData.live=!0,_.visible=!0,_.userData.k=0,_.userData.x=h+8,_.userData.z=m-4))),n.watcher&&(Math.hypot(h-n.watcher.position.x,m-n.watcher.position.z)<11?(n.watcher.visible=!1,n.watcher.userData.hide=i):!n.watcher.visible&&i-(n.watcher.userData.hide||0)>16&&(n.watcher.visible=!0)),n.beam&&(n.beam.visible=a,a&&(n.beam.rotation.y=i*.35,n.beam.material.opacity=.16+Math.sin(i*2)*.04)),n.fog){const d=l?.22:0;n.fog.material.opacity+=(d-n.fog.material.opacity)*Math.min(1,e*1.6),n.fog.position.set(h,1.5,m)}for(const d of n.rain){if(!c){d.visible=!1;continue}d.visible=!0,d.position.y-=d.userData.vy*e,(d.position.y<.2||!d.userData.set)&&(d.position.set(h+(Math.random()-.5)*28,8+Math.random()*10,m+(Math.random()-.5)*28),d.userData.set=!0)}for(const d of n.patrol){const u=d.userData.path;if(!u)continue;d.userData.u=(d.userData.u||0)+e*(d.userData.eventRun?.22:.08);const M=d.userData.u%1,b=Math.floor(M*u.length),x=(b+1)%u.length,P=M*u.length-b,A=u[b][0]+(u[x][0]-u[b][0])*P,w=u[b][1]+(u[x][1]-u[b][1])*P;d.position.set(A,Re(A,w),w),d.rotation.y=Math.atan2(u[x][0]-u[b][0],u[x][1]-u[b][1]),d.userData.moving=!0}if(n.weatherT-=e,n.weatherT<=0){const d=Math.random();n.weather=d<.55?"clear":d<.75?"rain":d<.9?"fog":"storm",n.weatherT=22+Math.random()*28,n.weather==="storm"&&s("The sea got ugly. Stay on the dock if you like your hat."),n.weather==="fog"&&s("Fog came in sideways. The lighthouse is doing its best.")}if(n.eventT-=e,n.eventT<=0){n.eventT=50+Math.random()*40;const d=Math.random();d<.25?s("The water went still. Then it didn’t."):d<.5?s("Something huge moved under the drop. You weren’t meant to see that."):d<.75?s("A plane nobody scheduled crossed the island."):s("Jeff was spotted. That’s the whole report.")}}function Ce(n,t={}){return new Le({color:n,flatShading:!0,...t})}function Cr(n,t=n,e=[]){const i=new ot,r=new nt(new dn(.07,.26,2,5),Ce(n));r.rotation.z=Math.PI/2;const s=new nt(new Ke(.08,.14,4),Ce(t));return s.rotation.z=-Math.PI/2,s.position.x=-.24,i.add(r,s,...e),i}function J_(n){const t=new ot;if(n==="old_boot")t.add(new nt(new et(.16,.1,.28),Ce(3811864)));else if(n==="locked_crate"||n==="wreck_lockbox")t.add(new nt(new et(.22,.18,.22),Ce(6965805)));else if(n==="golden_tuna"||n==="gilt_snapper")t.add(Cr(15253850,12886362));else if(n==="pump_pillfish"){const e=new nt(new dn(.09,.18,3,8),Ce(7262602));e.rotation.z=Math.PI/2,t.add(e)}else if(n==="jeff"){const e=new nt(new et(.18,.18,.16),Ce(15913654)),i=new nt(new et(.12,.05,.02),Ce(15253850));i.position.set(0,-.12,.08),t.add(e,i)}else if(n==="lost_wallet")t.add(new nt(new et(.18,.04,.12),Ce(2758672)));else if(n==="secret_key"){const e=new nt(new zt(.015,.015,.28,5),Ce(15253850));e.rotation.z=Math.PI/2;const i=new nt(new ii(.05,.012,5,8),Ce(15253850));i.position.x=.16,t.add(e,i)}else if(n==="mystery_ticket")t.add(new nt(new et(.22,.01,.12),Ce(12864058)));else if(n==="boat_part")t.add(new nt(new et(.28,.06,.1),Ce(3810838)));else if(n==="ancient_coil")t.add(new nt(new ii(.1,.03,5,10),Ce(9075274)));else if(n==="mutant_snapper"){const e=new nt(new ye(.05,5,4),Ce(8250266));e.position.set(.12,.08,0),t.add(Cr(4885048,2775592,[e]))}else if(n==="jackpot_box"){const e=new nt(new et(.2,.2,.2),Ce(1710612)),i=new nt(new et(.06,.06,.04),Ce(15253850));i.position.z=.12,t.add(e,i)}else if(n==="moon_marlin"||n==="merch_marlin")t.add(Cr(n==="moon_marlin"?14215410:4034495,9085104));else if(n==="vault_whale"||n==="whale_calf"){const e=new nt(new dn(.1,.32,2,5),Ce(13227206));e.rotation.z=Math.PI/2,t.add(e)}else n==="ufo_bass"?t.add(Cr(8250266,13227206)):t.add(Cr(4034495,2779784));return t}function j_(n,t){for(;n.children.length;)n.remove(n.children[0]);const e=J_(t);return n.add(e),n}const Br=[{id:"hut",name:"Abandoned hut",hint:"Someone left the stove on in 2006.",x:14.6,z:-18.4,r:2.4},{id:"sewer",name:"Drain tunnel",hint:"It smells like bait and regret.",x:8.2,z:16.4,r:2.2,fish:"DRAIN"},{id:"wreck",name:"Shipwreck",hint:"The hull still ticks.",x:36.4,z:4.2,r:3.2,need:"boat",fish:"WRECK"},{id:"secret_beach",name:"Quiet cove",hint:"Not on any chart.",x:22.4,z:-6.8,r:2.6,fish:"COVE"},{id:"cliff_path",name:"Goat path",hint:"One wrong step. Then fish.",x:-22.4,z:22.6,r:2.2,need:"advanced"},{id:"carving",name:"Rock carving",hint:"DO NOT FEED WHAT LIVES UNDER.",x:-12.6,z:-6.4,r:2},{id:"station",name:"Research shack",hint:"Clipboard dated tomorrow.",x:-6.8,z:-18.2,r:2.4,need:"night"},{id:"map",name:"Soggy chart",hint:"X is not where you think.",x:32.2,z:16.8,r:2},{id:"buried",name:"Buried tin",hint:"The sand was hiding it badly.",x:27.2,z:4.8,r:2,need:"night"},{id:"tunnel",name:"Underwater pipe",hint:"You can hear a generator.",x:-34.2,z:14.6,r:3,need:"boat"},{id:"west_cave",name:"Second mouth",hint:"The cave the map forgot.",x:-16.4,z:4.2,r:2.4},{id:"isle_chair",name:"Chair island",hint:"The other chair. Empty.",x:-62,z:-38,r:4,need:"boat"},{id:"hole",name:"Black hole water",hint:"Cliff Rod water. No sign.",x:-20.8,z:12.4,r:2.4,need:"advanced",fish:"HOLE"}];function Oo(n,t){let e=null;for(const i of Br){const r=Math.hypot(n-i.x,t-i.z);r<i.r&&(!e||r<e.d)&&(e={...i,d:r})}return e}function Q_(n,t){return n?.need?n.need==="boat"&&!t.boat?{ok:!1,reason:"Need the skiff. Or a worse idea."}:n.need==="night"&&!t.night?{ok:!1,reason:"Come back when the lighthouse is working."}:n.need==="advanced"&&(t.rodRank||0)<2?{ok:!1,reason:"Cliff Rod. Then maybe."}:n.need==="storm"&&!t.storm?{ok:!1,reason:"Wait for ugly weather."}:{ok:!0}:{ok:!0}}const Ni=document.getElementById("game"),tv=document.getElementById("hud"),Hu=document.getElementById("boot"),ev=document.getElementById("loader"),Ul=document.getElementById("load-fill"),Nl=document.getElementById("load-line"),Ol=document.getElementById("prompt"),nv=document.getElementById("zone-label"),iv=document.getElementById("zone-hint"),rv=document.getElementById("area-now-label"),sv=document.getElementById("area-now-hint"),Ds=document.getElementById("area-enter");let Fl="",Ls=0;const av=document.getElementById("token-bal"),ov=document.getElementById("credit-bal"),cv=document.getElementById("catch-count"),Ss=document.getElementById("rod-slot"),On=document.getElementById("panel"),Fo=document.getElementById("toast"),nr=document.getElementById("cast-meter"),lv=document.getElementById("cast-fill"),uv=document.getElementById("cast-label"),zl=document.getElementById("cast-phase"),Vu=document.getElementById("tension-wrap"),Bl=document.getElementById("tension-fill"),ei=document.getElementById("catch-card"),kl=document.getElementById("compass-n"),Gu=document.getElementById("touch"),Ot=I_(),Pe=Object.create(null),en={x:0,y:0},le=new D,on=new D,hv=new D;let $s=!1,kr=!1,ke=null,z=null,ze=null;const dv={x:-31,z:5.6},fv={x:112,z:14};let Is=0,Nr=0,In=null,ue=null,xr=!1,Fa=0,za=0,Hl=!0,Es=72,Wu="rods";const Bs=matchMedia("(pointer: coarse)").matches,Qe={active:!1,x:0,y:0,id:null},Fi=new ng({canvas:Ni,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!0});Fi.setPixelRatio(1);Fi.setSize(innerWidth,innerHeight);Fi.shadowMap.enabled=!1;Fi.outputColorSpace=Be;Fi.toneMapping=Qn;const Ue=new ig;Ue.background=new wt(F.sky);Ue.fog=new Jo(F.sky,.011);const lt=new ln(72,innerWidth/innerHeight,.08,520);lt.rotation.order="YXZ";lt.position.set(Da.x,Da.y,Da.z);const Xu=new vg(12967147,6972752,1.2);Ue.add(Xu);const ks=new Iu(16774102,.85);ks.position.set(-48,62,22);Ue.add(ks);const Te=y_(Ue),pv=Cg();Ue.add(pv);const Mn=K_(Te.root);Mn.patrol=Te.people.filter(n=>n.userData.path);Mn.watcher=Te.watcher;const rr=A_(Te.root),cn=Ig();Ue.add(cn);const Oi=Ug();Ue.add(Oi);const Or=Og();Ue.add(Or);const cr=zg();Ue.add(cr);const Rn=Bg();Ue.add(Rn);const Un=kg();lt.add(Un);Un.position.set(.18,-.12,-.42);zo();const Vl=document.getElementById("minimap"),Gl=Vl?k_(Vl):null,qu=new Iu(12047592,.28);qu.position.set(30,18,-40);Ue.add(qu);function zo(){In&&lt.remove(In),In=Rg(Ot.state.equipped!=="none"),lt.add(In),Ue.add(lt)}function kt(n){Fo.textContent=n,Fo.classList.remove("hidden"),Is=2.6}function hn(){av.textContent=String(Ot.state.tokens),ov.textContent=String(Ot.state.credits),cv.textContent=String(Ot.state.caught);const n=Ur[Ot.state.equipped];!n||n.id==="none"?(Ss.textContent="NO ROD",Ss.classList.add("empty")):(Ss.textContent=n.name.toUpperCase(),Ss.classList.remove("empty")),mv()}function mv(){const n=document.getElementById("quest-list");if(!n)return;const t=H_(Ot.state);n.innerHTML=`<p>OBJECTIVES</p><ul>${t.map(e=>`<li class="${e.done?"done":""}"><i>${e.done?"✓":"○"}</i>${e.label}</li>`).join("")}</ul>`}function Yu(){document.pointerLockElement&&document.exitPointerLock(),$s=!1}function En(){ke=null,On.classList.add("hidden"),On.setAttribute("aria-hidden","true"),On.innerHTML=""}function wn(n){Yu(),ke=n,On.classList.remove("hidden"),On.setAttribute("aria-hidden","false"),n==="shop"?fi():n==="inv"?Bo():n==="board"?_v():n==="book"?vv():n==="redeem"&&Bo(!0)}function gv(){const n=Ot.state.wallet;return`<div class="shop-wallet">
    <div>
      <b>${n?"Preview wallet":"No wallet"}</b>
      <span>${n||"Local demo only"}</span>
    </div>
    <button type="button" data-act="connect">${n?"LINKED":"LINK"}</button>
  </div>`}function fi(){const n=Wu,t=Object.values(Ur).filter(a=>a.id!=="none").map(a=>{const o=Ot.state.rods.includes(a.id),c=Ot.state.equipped===a.id;return`<article class="card">
        <div class="art">${U_(a.id)}</div>
        <div class="copy">
          <b>${a.name}</b>
          <span>${a.note}</span>
          <i class="tag token">BURN ${a.burn} TOKEN</i>
        </div>
        ${o?`<button type="button" data-act="equip" data-id="${a.id}" ${c?"disabled":""}>${c?"ON":"EQUIP"}</button>`:`<button class="primary" type="button" data-act="burn" data-id="${a.id}">BURN</button>`}
      </article>`}).join(""),e=Nu.map(a=>`<article class="card">
      <div class="art">${N_(a.id)}</div>
      <div class="copy">
        <b>${a.name}</b>
        <span>${a.note}</span>
        <i class="tag">${a.cost} CREDITS</i>
      </div>
      <button class="primary" type="button" data-act="swap" data-id="${a.id}">SWAP</button>
    </article>`).join(""),i=Fu.map(a=>{const o=a.id==="skiff"&&Ot.state.boat;return`<article class="card">
      <div class="art">${F_()}</div>
      <div class="copy">
        <b>${a.name}</b>
        <span>${a.note}</span>
        <i class="tag">${a.cost} CREDITS</i>
      </div>
      ${o?'<em class="kept">OWNED</em>':`<button class="primary" type="button" data-act="gear" data-id="${a.id}">BUY</button>`}
    </article>`}).join(""),r=Ou.map(a=>`<article class="card">
      <div class="art">${O_(a.id)}</div>
      <div class="copy">
        <b>${a.name}</b>
        <span>${a.note}</span>
        <i class="tag merch">${a.cost} CREDITS</i>
      </div>
      <button class="primary" type="button" data-act="merch" data-id="${a.id}">BUY</button>
    </article>`).join(""),s=Ot.state.merch.length?`<div class="locker">${Ot.state.merch.map(a=>`<span>${a.name}</span>`).join("")}</div>`:'<p class="sub">Locker empty.</p>';On.innerHTML=`
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">LIGHTHOUSE</p>
    <h2>Shop</h2>
    <div class="wallet-line">
      <span><em>${Ot.state.credits}</em>CR</span>
      <span><em>${Ot.state.tokens}</em>TOKEN</span>
      <span><em>${Ot.state.previewSol.toFixed(2)}</em>SOL</span>
    </div>
    <div class="tabs">
      <button type="button" data-act="tab" data-id="rods" class="${n==="rods"?"on":""}">RODS</button>
      <button type="button" data-act="tab" data-id="gear" class="${n==="gear"?"on":""}">GEAR</button>
      <button type="button" data-act="tab" data-id="swap" class="${n==="swap"?"on":""}">SWAPS</button>
      <button type="button" data-act="tab" data-id="merch" class="${n==="merch"?"on":""}">MERCH</button>
    </div>
    ${n==="rods"?`${gv()}<div class="cards">${t}</div><p class="sub">Burned ${Ot.state.burned} TOKEN · preview only</p>`:""}
    ${n==="gear"?`<div class="cards">${i}</div><p class="sub">Buy the skiff, then E on the north dock boat. Local preview. Not a live fleet.</p>`:""}
    ${n==="swap"?`<div class="cards">${e}</div><p class="sub">Credits → TOKEN or preview SOL. No chain.</p>`:""}
    ${n==="merch"?`<div class="cards">${r}</div>${s}<p class="sub">Preview locker. Nothing ships.</p>`:""}
  `}function Bo(n=!1){const t=Ot.state.inventory,e=t.length?t.map(i=>`<article class="card">
        <div class="art">${No(i.id)}</div>
        <div class="copy">
          <b>${i.name}</b>
          <span>${i.blurb||zu(i)}</span>
          <i class="tag ${i.kind}">${i.rarity} · ${qs(i.kind)}</i>
        </div>
        ${i.status==="redeemable"?`<button class="primary" type="button" data-act="redeem" data-id="${i.uid}">REDEEM</button>`:`<em class="kept">${i.status.toUpperCase()}</em>`}
      </article>`).join(""):'<p class="empty-pack">Nothing in the pack. Fish the docks.</p>';On.innerHTML=`
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">${n?"COUNTER":"PACK"}</p>
    <h2>${n?"Redeem":"Catch pack"}</h2>
    <p class="sub">${n?"Preview claims. SOL and merch stay in this browser.":"Each catch shows what it trades for."}</p>
    <div class="cards">${e}</div>
    <p class="sub">Preview SOL claimed: ${Ot.state.previewSol.toFixed(2)}</p>
  `}function _v(){const n={};for(const e of Ot.state.inventory)n[e.rarity]=(n[e.rarity]||0)+1;const t=["Common","Uncommon","Rare","Epic","Legendary","Mythic","???"].map(e=>`<div class="stat-pill"><b>${n[e]||0}</b><span>${e}</span></div>`).join("");On.innerHTML=`
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">JOURNAL</p>
    <h2>Island log</h2>
    <p class="sub">Local preview. Room for a crowd — not a live 50-player server.</p>
    <div class="stat-grid">
      <div class="stat-card">${Na("fish")}<b>${Ot.state.caught}</b><span>Landed</span></div>
      <div class="stat-card">${Na("burn")}<b>${Ot.state.burned}</b><span>Burned</span></div>
      <div class="stat-card">${Na("credits")}<b>${Ot.state.credits}</b><span>Credits</span></div>
    </div>
    <div class="rarity-row">${t}</div>
    <p class="sub">Local record · biggest fish ${Ot.state.biggest||0} cm. Not a live server board.</p>
    <p class="mini">FOUND</p>
    <p class="sub">${Object.keys(Ot.state.found||{}).length}/${Br.length} secrets. No map pins. On purpose.</p>
    <div class="locker">${Br.filter(e=>Ot.state.found?.[e.id]).map(e=>`<span>${e.name}</span>`).join("")||"Nothing logged yet. Walk."}</div>
  `}function vv(){const n=Ot.state.book||{},t=[...Uo,...Io].filter(r=>n[r.id]||!r.hidden),e=[...Uo,...Io].filter(r=>r.hidden&&!n[r.id]).length,i=t.map(r=>{const s=n[r.id]||0;return`<article class="card">
      <div class="art">${No(s?r.id:"old_boot")}</div>
      <div class="copy">
        <b>${s?r.name:"???"}</b>
        <span>${s?r.blurb:"Not logged yet."}</span>
        <i class="tag">${s?`${r.rarity} · x${s}`:"UNKNOWN"}</i>
      </div>
    </article>`}).join("");On.innerHTML=`
    <button class="close-x" type="button" data-act="close">✕</button>
    <p class="mini">FISH BOOK</p>
    <h2>What you landed</h2>
    <p class="sub">${Object.keys(n).length} logged · ${e} still unnamed · this browser only</p>
    <div class="cards">${i}</div>
  `}On.addEventListener("click",n=>{const t=n.target.closest("button");if(!t)return;const e=t.dataset.act;if(e==="close"){En();return}if(e==="connect"){Ot.connectPreviewWallet(),Se.ui(),kt("Preview wallet linked. No real keys."),fi();return}if(e==="burn"){const i=Ot.burnForRod(t.dataset.id);i.ok?(Se.burn(),kt(`Burned ${i.rod.burn} TOKEN · ${i.rod.name} unlocked`),zo()):kt(i.reason),hn(),fi();return}if(e==="equip"){Ot.equip(t.dataset.id),zo(),hn(),fi();return}if(e==="redeem"){const i=Ot.redeem(t.dataset.id);i.ok?kt(`Redeemed ${i.item.name} · ${qs(i.item.kind)}`):kt(i.reason),hn(),Bo(ke==="redeem");return}if(e==="tab"){Wu=t.dataset.id,fi();return}if(e==="swap"){const i=Ot.buySwap(t.dataset.id);i.ok?(Se.ui(),kt(`Swapped credits for ${i.offer.name}`)):kt(i.reason),hn(),fi();return}if(e==="merch"){const i=Ot.buyMerch(t.dataset.id);i.ok?(Se.ui(),kt(`Claimed ${i.offer.name} (preview locker)`)):kt(i.reason),hn(),fi()}if(e==="gear"){const i=Ot.buyGear(t.dataset.id);i.ok?(Se.ui(),kt("Island Skiff owned. E the north dock boat to sail.")):kt(i.reason),hn(),fi()}});function $u(){if(ke){En();return}if(!ue)return;if(ue.id==="shop"&&wn("shop"),ue.id==="board"&&wn("board"),ue.id==="redeem"&&wn("redeem"),ue.id==="boat"){if(!Ot.state.boat){kt("Buy the Island Skiff in Shop · GEAR first.");return}Xl(fv,"Great Saint Alon");return}if(ue.id==="emberdock"){Xl(dv,"Pump Island");return}if(ue.id==="boot"&&kt("Size 400. Someone lost the other one."),ue.id==="loo"&&kt("Cave plumbing. Do not fish here."),ue.id==="shrine"&&kt("The pill watches. Burn wisely."),ue.id==="pc"&&kt("Still compiling. Since 2004."),ue.id==="duck"&&kt("Quack. Not a fish. You cannot redeem this."),ue.id==="chest"&&kt("Locked. The chef has the key. Obviously."),ue.id==="crash"&&kt("Failed airdrop. Contents: sand."),ue.id==="vending"&&kt("Sells warm soda and a key that fits nothing. Out of order since 2009."),ue.id==="phone"&&kt(Math.random()<.5?"It rings. Nobody speaks. You hang up first.":"Dial tone. Then a splash. Then nothing."),ue.id==="bunker"&&kt("Hatch is locked from below. Something knocks twice, then stops."),ue.id==="chairman"&&kt("Been here 17 years. Says the fish come to him now. He has not moved."),ue.id==="advice"&&kt("Cast when the water looks wet. Reel when it doesn’t. Good luck."),ue.id==="drawings"&&kt("Scratched into the rock: a fish larger than the island. Dated tomorrow."),ue.id==="drop"&&(Ot.markDrop(),hn(),kt("The Drop. You can see it from day one. You cannot go there yet.")),new Set(Br.map(t=>t.id)).has(ue.id)){const t=Br.find(r=>r.id===ue.id),e=Q_(t,{boat:Ot.state.boat,night:ku(performance.now()/1e3).night,rodRank:{none:0,basic:1,advanced:2,elite:3}[Ot.state.equipped]||0,storm:Mn.weather==="storm"});if(!e.ok){kt(e.reason);return}const i=Ot.discover(t.id);kt(t.hint),i&&(hn(),kt(`LOGGED · ${t.name}`))}}function Kn(n,t,e){if(!nr)return;nr.classList.remove("hidden","bite","reel","snap"),n==="bite"&&nr.classList.add("bite"),(n==="fight"||n==="reel")&&nr.classList.add("reel"),n==="snap"&&nr.classList.add("snap"),zl&&(zl.textContent=n.toUpperCase()),uv.textContent=t,lv.style.width=`${Math.max(0,Math.min(100,e))}%`;const i=n==="fight";Vu?.classList.toggle("hidden",!i),i&&Bl&&z&&(Bl.style.width=`${Math.max(4,Math.min(100,z.tension*100))}%`)}function ko(n){z=null,cn.visible=!1,cr.visible=!1,Rn.visible=!1,nr.classList.add("hidden"),Vu?.classList.add("hidden"),zs(In,"idle",0),n&&kt(n)}function xv(){if(!z||!cr)return;const n=new D(.18,-.18,-1.35);lt.localToWorld(n);const t=cr.geometry.attributes.position;t.setXYZ(0,n.x,n.y,n.z),t.setXYZ(1,z.bx,z.by,z.bz),t.needsUpdate=!0,cr.visible=z.phase!=="land"}function Mv(n){if(!ei)return;document.getElementById("catch-rarity").textContent=n.rarity.toUpperCase(),document.getElementById("catch-name").textContent=n.name;const t=document.getElementById("catch-blurb");t&&(t.textContent=n.blurb||""),document.getElementById("catch-kind").textContent=qs(n.kind);const e=document.getElementById("catch-trade");e&&(e.textContent=`${zu(n)}${n.size?` · ${n.size} cm`:""}`),ei.classList.toggle("jackpot",n.rarity==="???"||n.rarity==="Mythic"),ei.classList.remove("hidden"),Nr=n.rarity==="???"?12:8,j_(Un,n.id),Un.visible=!0;const i=Math.max(.7,Math.min(2.6,(n.size||40)/40));Un.scale.setScalar(i),Yu();const r=n.rarity==="Legendary"||n.rarity==="Mythic"||n.rarity==="???"||n.rarity==="Epic";Se.catch(r);const s=(n.zone||"ISLAND").replaceAll("_"," ");if(r&&kt(`YOU caught ${n.name} at ${s}`),n.rarity==="???"||n.rarity==="Mythic"){const a=document.getElementById("event-banner");a&&!rr.active&&(a.classList.remove("hidden"),document.getElementById("event-title").textContent="ISLAND CALL",document.getElementById("event-hint").textContent=`YOU caught ${n.name} at ${s} · local preview`,setTimeout(()=>{rr.active||a.classList.add("hidden")},8e3))}}function Ku(){const n=new D(0,0,-1).applyEuler(lt.rotation);for(const t of[3.2,5.4,8.2,11]){const e=lt.position.x+n.x*t,i=lt.position.z+n.z*t,r=lt.position.y+n.y*t,s=Oo(e,i)||Oo(lt.position.x,lt.position.z);if(s?.fish&&Ot.state.found?.[s.id])return{ok:!0,x:e,z:i,secret:s};if(r<1.4&&Re(e,i)<.35)return{ok:!0,x:e,z:i}}return{ok:!1}}function yv(){if(z||ke||!xr||ze||ei&&!ei.classList.contains("hidden"))return;const n=Ku();if(!n.ok){kt("Look at the water to cast.");return}const t=Lo(n.x,n.z),e=Lo(lt.position.x,lt.position.z),i=n.secret||Oo(lt.position.x,lt.position.z),r=i?.fish&&Ot.state.found?.[i.id]?{id:i.fish}:t.fish?t:e;if(!i?.fish&&Re(n.x,n.z)>=.35){kt("Look at the water to cast.");return}const s=Ot.canFish(r.id);if(!s.ok){kt(s.reason);return}const a=lt.position.clone();z={t:0,phase:"cast",zone:r.id,window:.9+Math.random()*.5,biteAt:1.1+Math.random()*2.2,fromX:a.x,fromY:a.y-.2,fromZ:a.z,tx:n.x,tz:n.z,bx:a.x,by:a.y,bz:a.z,tension:.28,pull:.55+Math.random()*.7,dir:Math.random()*Math.PI*2,progress:0,shake:0,sizeHint:.7+Math.random()*1.6},Se.cast(),Kn("cast","F to Cast",8)}function Sv(n){if(!z){cn.visible=!1;return}const t=Ln(z.bx,z.bz,n);if(z.phase==="cast"){const e=Math.min(1,z.t/.55),i=e*e*(3-2*e);z.bx=z.fromX+(z.tx-z.fromX)*i,z.bz=z.fromZ+(z.tz-z.fromZ)*i,z.by=z.fromY+(t-z.fromY)*i+Math.sin(e*Math.PI)*2.4,cn.position.set(z.bx,z.by,z.bz),cn.visible=e>.12}else if(z.phase==="bite"||z.phase==="fight")z.by=t-(z.phase==="bite"?.45:.22+z.tension*.3),cn.position.set(z.bx,z.by,z.bz),cn.visible=z.phase==="fight";else if(z.phase==="land")cn.visible=!1;else{const e=Math.sin(n*3.2)*.05;z.by=t+.08+e,cn.position.set(z.bx,z.by,z.bz),cn.rotation.z=Math.sin(n*2.1)*.18,cn.visible=!0}}function Ev(n){if(!z){zs(In,"idle",0),cn.visible=!1,cr.visible=!1;return}z.t+=n;const t=performance.now()/1e3;if(zs(In,z.phase,z.phase==="fight"?z.tension:z.t),Sv(t),xv(),z.phase==="cast")Kn("cast","F to Cast",z.t/.55*100),z.t>=.55&&(z.phase="wait",z.t=0,z.bx=z.tx,z.bz=z.tz,zr(Oi,z.bx,.12,z.bz),La(Or,z.bx,.04,z.bz),Se.splash(),Kn("wait","F to Reel · waiting",0));else if(z.phase==="wait")z.t%.9<n&&La(Or,z.bx,.03,z.bz),Kn("wait","F to Reel · waiting",z.t/z.biteAt*100),z.t>=z.biteAt&&(z.phase="bite",z.t=0,z.shake=.18,zr(Oi,z.bx,.12,z.bz),Se.bite(),Kn("bite","F to Reel",100),kt("F to Reel"));else if(z.phase==="bite")z.shake*=.92,Kn("bite","F to Reel",(1-z.t/z.window)*100),z.t>z.window&&(Se.miss(),ko("It got away."));else if(z.phase==="fight"){z.dir+=(Math.random()-.5)*n*3.2;const e=!!Pe.KeyF;e?(z.progress+=n*(.34+(1-z.tension)*.22),z.tension+=n*(.18+z.pull*.12)):(z.tension-=n*.22,z.progress-=n*.05),z.tension+=Math.sin(t*7)*n*.08*z.pull,z.tension=Math.max(.08,Math.min(1.15,z.tension));const i=z.pull*(.4+z.tension);le.x+=Math.cos(z.dir)*i*n*3.4,le.z+=Math.sin(z.dir)*i*n*3.4,z.shake=.06+z.tension*.16,z.t%.35<n&&La(Or,z.bx,.03,z.bz),Rn.visible=z.tension>.55,Rn.visible&&(Rn.position.set(z.bx+Math.sin(t*8)*.4,z.by-.15,z.bz+Math.cos(t*6)*.4),Rn.scale.setScalar(.7+z.sizeHint*.5),Rn.rotation.y=t*4),Kn("fight",e?"HOLD F · don’t snap it":"HOLD F to reel",z.progress*100),z.tension>1?(Se.miss(),ko("Line snapped.")):z.progress>=1&&bv()}else if(z.phase==="land"){const e=Math.min(1,z.t/.7),i=lt.position.x,r=lt.position.z;z.bx=z.tx+(i-z.tx)*e,z.bz=z.tz+(r-z.tz)*e,z.by=Ln(z.bx,z.bz,t)+Math.sin(e*Math.PI)*2.1+e*.6,Rn.visible=!0,Rn.position.set(z.bx,z.by,z.bz),Rn.rotation.z=-e*1.2,Kn("land","FISH ON",100),e>=1&&wv()}}function bv(){z.phase="land",z.t=0,z.tx=z.bx,z.tz=z.bz,zr(Oi,z.bx,.2,z.bz),Se.reel()}function wv(){const n=z.zone,t=z.sizeHint;ko();const e=Ot.rollCatch(n,er()?.id);if(!e.ok){kt(e.reason);return}e.item&&t&&(e.item.size=Math.max(e.item.size||20,Math.round(t*48))),hn(),Mv(e.item),kt(`${e.item.rarity} · ${e.item.name}${e.item.size?` · ${e.item.size}cm`:""}`)}function lc(){if(xr){if(!z){yv();return}z.phase==="bite"&&(z.phase="fight",z.t=0,z.tension=.34,z.progress=0,Se.reel(),Kn("fight","HOLD F to reel",0),zr(Oi,z.bx,.12,z.bz))}}function Wl(){return kr?1.05:1.62}function Ti(n,t){n&&n.textContent!==t&&(n.textContent=t)}function Tv(){const n=lt.position;ue=null;let t=99;for(const s of S_){const a=Math.hypot(n.x-s.x,n.z-s.z);a<s.r&&a<t&&(t=a,ue=s)}const e=Lo(n.x,n.z),i=e.hint||(e.fish?"Fish here":"Explore");if(Ti(nv,e.label),Ti(iv,i),Ti(rv,e.label),Ti(sv,i),e.id!==Fl&&(Fl=e.id,xr&&Ds&&(Ti(Ds,`ENTERING  ${e.label}`),Ds.classList.remove("hidden"),Ls=2.4)),ze){Ti(Ol,"Sailing…");return}let r="";ke||(z?z.phase==="cast"?r="F to Cast":z.phase==="fight"?r="HOLD F · let off if it screams":z.phase==="land"?r="FISH ON":r="F to Reel":ue?r=ue.label:Ku().ok&&Ot.state.equipped!=="none"&&(r="F to Cast")),Ti(Ol,r)}function Zu(n,t){en.x-=n*.00225,en.y-=t*.00225,en.y=Math.max(-1.2,Math.min(1.2,en.y)),lt.rotation.y=en.x,lt.rotation.x=en.y,z?.shake&&(lt.rotation.x+=(Math.random()-.5)*z.shake,lt.rotation.y+=(Math.random()-.5)*z.shake*.6)}function Xl(n,t){ze||z||(ze={t:0,dur:7.2,fromX:lt.position.x,fromZ:lt.position.z,toX:n.x,toZ:n.z,label:t},en.x=Math.atan2(n.x-lt.position.x,-(n.z-lt.position.z)),lt.rotation.y=en.x,kt(`Sailing to ${t}`))}function Av(n){ze.t+=n;const t=Math.min(1,ze.t/ze.dur),e=t*t*(3-2*t);lt.position.x=ze.fromX+(ze.toX-ze.fromX)*e,lt.position.z=ze.fromZ+(ze.toZ-ze.fromZ)*e;const i=performance.now()/1e3;if(lt.position.y=Ln(lt.position.x,lt.position.z,i)+1.42,t>=1){const r=ze.label;ze=null,r==="Great Saint Alon"&&Ot.markEmber(),kt(`Landed · ${r}`),hn()}}let ql=0;function Rv(n){if(ze){Av(n);return}const t=performance.now()/1e3,e=Re(lt.position.x,lt.position.z),i=Ln(lt.position.x,lt.position.z,t),r=e<.12,s=Math.max(i,.02),a=r?s:e,o=!!(Pe.ShiftLeft||Pe.ShiftRight),c=(o?8.4:5.1)*(kr?.42:1)*(r?.55:1)*(z?.32:1);on.set(0,0,0),(Pe.KeyW||Pe.ArrowUp)&&(on.z-=1),(Pe.KeyS||Pe.ArrowDown)&&(on.z+=1),(Pe.KeyA||Pe.ArrowLeft)&&(on.x-=1),(Pe.KeyD||Pe.ArrowRight)&&(on.x+=1),Bs&&(on.x+=Qe.x,on.z+=Qe.y),on.lengthSq()>1&&on.normalize(),on.applyAxisAngle(hv.set(0,1,0),en.x);const l=r?9:11;le.x+=(on.x*c-le.x)*Math.min(1,n*l),le.z+=(on.z*c-le.z)*Math.min(1,n*l),Pe._jump&&(lt.position.y<=a+Wl()+.1&&(le.y=r?4.2:6.4,Se.jump()),Pe._jump=!1),le.y-=(r?9:20)*n;let h=lt.position.x+le.x*n,m=lt.position.z+le.z*n;if(Ot.state.boat){const w=Math.hypot(h,m),R=Math.hypot(h-Ut.x,m-Ut.z),S=210;if(w>S&&R>Ut.r+18){if(w<R){const v=S/w;h*=v,m*=v}le.x*=.2,le.z*=.2}m<-88&&(m=-88,le.z*=.1)}else{const w=Math.hypot(h,m),R=tn+1.6;if(w>R){const S=R/w;h*=S,m*=S,le.x*=.15,le.z*=.15;const v=performance.now();v-ql>2200&&(ql=v,kt("Need the Island Skiff to leave Pump Island."))}}const p=Hg(h,m);(p.x!==h||p.z!==m)&&(le.x*=.2,le.z*=.2),lt.position.x=p.x,lt.position.z=p.z,lt.position.y+=le.y*n;const f=Re(lt.position.x,lt.position.z),g=f<.12,_=Ln(lt.position.x,lt.position.z,t),d=(g?Math.max(_,.02):f)+Wl(),u=lt.position.y<=d+.12,M=d-lt.position.y;g&&le.y<=1.2?(lt.position.y+=M*Math.min(1,n*6.5),le.y*=.72):M>0&&M<.42&&le.y<=.6?(lt.position.y+=Math.min(M,n*8.5),le.y=Math.max(le.y,0)):lt.position.y<d&&(lt.position.y=d,le.y=0),u&&!Hl&&r&&(zr(Oi,lt.position.x,.1,lt.position.z),Se.splash()),Hl=u,lt.rotation.y=en.x,lt.rotation.x=en.y,z?.shake&&(lt.rotation.x+=(Math.random()-.5)*z.shake,lt.rotation.y+=(Math.random()-.5)*z.shake*.55);const b=Math.hypot(le.x,le.z)>.4&&u;b&&(Fa+=n*(o?12:8.2),za+=n,za>(o?.32:.44)&&(za=0,r?Se.splash():Se.step()));const x=b?Math.sin(Fa)*.032:0,P=b?Math.cos(Fa*.5)*.014:0;In&&(In.position.set(P,x-(kr?.08:0),0),z||zs(In,"idle",t)),Es+=((o&&b?80:72)-Es)*Math.min(1,n*6),Math.abs(lt.fov-Es)>.05&&(lt.fov=Es,lt.updateProjectionMatrix()),kl&&(kl.style.transform=`rotate(${-en.x}rad)`)}addEventListener("resize",()=>{lt.aspect=innerWidth/innerHeight,lt.updateProjectionMatrix(),Fi.setSize(innerWidth,innerHeight)});addEventListener("keydown",n=>{Pe[n.code]=!0,n.code==="KeyC"&&(kr=!0),n.code==="Space"&&(n.preventDefault(),Pe._jump=!0),n.code==="KeyE"&&$u(),n.code==="KeyF"&&lc(),n.code==="KeyI"&&(ke==="inv"?En():wn("inv")),n.code==="KeyB"&&(ke==="shop"?En():wn("shop")),n.code==="KeyJ"&&(ke==="book"?En():wn("book")),n.code==="Tab"&&(n.preventDefault(),ke==="board"?En():wn("board")),n.code==="Escape"&&(En(),document.exitPointerLock?.())});addEventListener("keyup",n=>{Pe[n.code]=!1,n.code==="KeyC"&&(kr=!1)});document.addEventListener("mousemove",n=>{!$s||ke||Zu(n.movementX,n.movementY)});Ni.addEventListener("click",()=>{!xr||ke||ei&&!ei.classList.contains("hidden")||(!$s&&!Bs?Ni.requestPointerLock():lc())});document.addEventListener("pointerlockchange",()=>{$s=document.pointerLockElement===Ni});function Cv(){const n=document.getElementById("stick"),t=n.querySelector("i"),e=(a,o)=>{const c=n.getBoundingClientRect(),l=a-(c.left+c.width/2),h=o-(c.top+c.height/2),m=40,p=Math.hypot(l,h)||1,f=Math.min(1,p/m);Qe.x=l/p*f,Qe.y=h/p*f,t.style.transform=`translate(${Qe.x*m}px, ${Qe.y*m}px)`};n.addEventListener("pointerdown",a=>{Qe.active=!0,Qe.id=a.pointerId,n.setPointerCapture(a.pointerId),e(a.clientX,a.clientY)}),n.addEventListener("pointermove",a=>{!Qe.active||a.pointerId!==Qe.id||e(a.clientX,a.clientY)});const i=()=>{Qe.active=!1,Qe.x=0,Qe.y=0,t.style.transform=""};n.addEventListener("pointerup",i),n.addEventListener("pointercancel",i),Gu.addEventListener("click",a=>{const o=a.target.closest("button");o&&(o.dataset.act==="jump"&&(Pe._jump=!0),o.dataset.act==="use"&&$u(),o.dataset.act==="cast"&&lc())});let r=0,s=0;Ni.addEventListener("touchstart",a=>{const o=a.changedTouches[0];o.clientX<innerWidth*.42||(r=o.clientX,s=o.clientY)},{passive:!0}),Ni.addEventListener("touchmove",a=>{const o=a.changedTouches[0];o.clientX<innerWidth*.42||(Zu(o.clientX-r,o.clientY-s),r=o.clientX,s=o.clientY)},{passive:!0})}document.getElementById("catch-keep")?.addEventListener("click",()=>{ei.classList.add("hidden"),Un.visible=!1,Nr=0,Se.ui()});document.getElementById("enter-btn").addEventListener("click",()=>{Hu.classList.add("hidden"),tv.classList.remove("hidden"),xr=!0,z_(),B_(),Se.ui(),Bs&&Gu.classList.remove("hidden"),hn(),Bs||Ni.requestPointerLock()});document.querySelector(".hotbar")?.addEventListener("click",n=>{const t=n.target.closest("button");if(!t)return;const e=t.dataset.hot;e==="shop"&&(ke==="shop"?En():wn("shop")),e==="inv"&&(ke==="inv"?En():wn("inv")),e==="book"&&(ke==="book"?En():wn("book")),e==="board"&&(ke==="board"?En():wn("board"))});function Yl(){ev.classList.add("hidden"),Hu.classList.remove("hidden")}if(matchMedia("(prefers-reduced-motion: reduce)").matches)Yl();else{const n=["Waking the lighthouse…","Stretching lanky fishermen…","Tuning the catch tables…","Preview wallet standing by…","Island is ready."];let t=0;const e=setInterval(()=>{t+=1;const i=Math.min(100,t*22);Ul&&(Ul.style.width=`${i}%`),Nl&&(Nl.textContent=n[Math.min(n.length-1,t-1)]),i>=100&&(clearInterval(e),setTimeout(Yl,280))},220)}Cv();hn();let $l=performance.now(),Ba=0,ka=0,Ha=0;function Ju(n){const t=Math.min(.05,(n-$l)/1e3);if($l=n,xr&&(Rv(t),Ev(t),Ba+=t,ka+=t,Ba>.08&&(Ba=0,Tv()),Gl&&ka>.05&&(ka=0,Gl.draw(lt.position.x,lt.position.z,en.x))),Ha+=t,Ha>.12){Ha=0;const m=n/1e3;for(const p of Te.people){const f=p.position.x-lt.position.x,g=p.position.z-lt.position.z;f*f+g*g<900&&Ag(p,m,!!p.userData.moving,p.userData.archetype==="FISHERMAN")}}const e=n/1e3,i=ku(e),r=Mn.weather==="rain"||Mn.weather==="storm"||er()?.weather==="storm",s=Mn.weather==="fog"||Mn.weather==="storm"||er()?.weather==="fog",a=Mn.weather==="storm"||er()?.id==="storm";if(Z_(Mn,{dt:t,t:e,camera:lt,toast:kt,night:i.night||er()?.id==="blood_moon",rough:a,raining:r,foggy:s}),R_(rr,{dt:t,t:e,toast:kt,people:Te.people,onStart:m=>{Mn.patrol=Te.people.filter(f=>f.userData.path),m.weather&&(Mn.weather=m.weather);const p=document.getElementById("event-banner");p&&(p.classList.remove("hidden"),document.getElementById("event-title").textContent=m.title,document.getElementById("event-hint").textContent=`${m.hint} · local preview`)},onEnd:()=>{document.getElementById("event-banner")?.classList.add("hidden")}}),rr.active){const m=Math.max(0,rr.active.left),p=document.getElementById("event-hint");p&&(p.textContent=`${rr.active.hint} · ${Math.ceil(m/60)}m left · local`)}const o=i.elev,c=i.dusk,h=er()?.sky||(c?12876362:i.night?1384499:6988748);if(Ue.background.setHex(h),Ue.fog.color.setHex(h),Ue.fog.density=s?.028:i.night?.016:.011,Xu.intensity=i.night?.28:c?.7:1.2,ks.intensity=i.night?.08:c?.7:.85,ks.position.set(Math.cos(i.ang)*70,Math.max(-12,o*62),Math.sin(i.ang)*40),Te.ocean?.material?.uniforms?.uAmp&&(Te.ocean.material.uniforms.uAmp.value=a?2.15:1),Te.lighthouse){const m=Te.lighthouse.children.find(p=>p.material?.emissive);m?.material&&(m.material.emissiveIntensity=i.night?1.4:.22)}Ng(Oi,t),Fg(Or,t),Te.ocean?.material?.uniforms?.uTime&&(Te.ocean.material.uniforms.uTime.value=e),Te.duck&&(Te.duck.position.y=Ln(Te.duck.position.x,Te.duck.position.z,e)+.1,Te.duck.rotation.z=Math.sin(e*1.7)*.2),Un.visible&&(Un.rotation.y+=t*1.6,Un.position.y=-.12+Math.sin(n/220)*.02),Is>0&&(Is-=t,Is<=0&&Fo.classList.add("hidden")),Ls>0&&(Ls-=t,Ls<=0&&Ds?.classList.add("hidden")),Nr>0&&(Nr-=t,Nr<=0&&(ei?.classList.add("hidden"),Un.visible=!1)),Fi.render(Ue,lt),requestAnimationFrame(Ju)}requestAnimationFrame(Ju);
