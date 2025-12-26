import{w as rt,a as u,f as C,c as tt,t as et}from"../chunks/I0AGUu3X.js";import{h as it,a0 as at,V as h,_ as Y,a1 as nt,W as o,Z as n,w as v,$ as w,X as ft,a2 as X,Y as dt,a3 as ut}from"../chunks/D623fXL-.js";import{s as E}from"../chunks/DsmpRkHX.js";import{i as I}from"../chunks/BcnujHhF.js";import{e as K,i as Z,r as _t,s as B,a as bt}from"../chunks/BJjor23F.js";const st=[...` 	
\r\f \v\uFEFF`];function gt(s,t,e){var i=""+s;if(e){for(var r in e)if(e[r])i=i?i+" "+r:r;else if(i.length)for(var c=r.length,a=0;(a=i.indexOf(r,a))>=0;){var m=a+c;(a===0||st.includes(i[a-1]))&&(m===i.length||st.includes(i[m]))?i=(a===0?"":i.substring(0,a))+i.substring(m+1):a=m}}return i===""?null:i}function pt(s,t,e,i,r,c){var a=s.__className;if(it||a!==e||a===void 0){var m=gt(e,i,c);(!it||m!==s.getAttribute("class"))&&(m==null?s.removeAttribute("class"):s.className=m),s.__className=e}else if(c&&r!==c)for(var O in c){var j=!!c[O];(r==null||j!==!!r[O])&&s.classList.toggle(O,j)}return c}const ot=["hasPart"],jt=[["hasNumerator","hasDenominator"],["hasSource","hasTarget"]],lt=jt.flat(),Q=[...ot,...lt];class F{static#e=["en",""];#t;_iri;_shortIri;_label={};_comment={};_isBlank;_constrained=[];#i="";constructor({iri:t,shortIri:e,label:i,comment:r,isBlank:c}={}){this._iri=t,this._shortIri=e,this._isBlank=c??!t,typeof i=="string"?this._label[""]=i:this._label=Object.fromEntries(Object.entries(i??{}).filter(([a,m])=>m)),typeof r=="string"?this._comment[""]=r:this._comment=Object.fromEntries(Object.entries(r??{}).filter(([a,m])=>m)),this instanceof ct&&(this.#i="Variable")}clone(){return new F({iri:this._iri,shortiri:this._shortIri,label:JSON.parse(JSON.stringify(this._label)),comment:JSON.parse(JSON.stringify(this._comment)),isblank:this._isBlank})}setVariable(t){this.#t=t}getVariable(){return this.#t}setIri(t){t?(this._iri=t,this._isBlank=!1):(this._iri=null,this._isBlank=!0)}getIri(){return this._isBlank?null:this._iri}getId(){return this._iri}getShortIri(){return this._isBlank?null:this._shortIri}isBlank(){return this._isBlank}setLabel(t,e){this._label[t]=e}getLabel(t=!0){for(const r of F.#e)if(r in this._label)return this._label[r];let e=Object.values(this._label)[0];if(e)return e;if(t)return;const i=this._iri.split("/");return i.pop()||i.pop()||"[missing label]"}setComment(t,e){this._comment[t]=e}getComment(){for(const t of F.#e)if(t in this._comment)return this._comment[t];return Object.values(this._comment)[0]}setRole(t){this.#i=t}getRole(){return this.#i}}class ct extends F{#e;#t;#i;#a;#s=[];#r=[];setProperty(t){if(!(t instanceof vt))throw new Error("Can only assign instances of Property!");t.setVariable(this),t.setRole("Property"),this.#e=t}setObjectOfInterest(t){if(!(t instanceof M))throw new Error("Can only assign instances of Entity!");t.setVariable(this),t.setRole("OoI"),this.#t=t}setMatrix(t){if(!(t instanceof M))throw new Error("Can only assign instances of Entity!");t.setVariable(this),t.setRole("Matrix"),this.#i=t}setStatisticalModifier(t){if(!(t instanceof M))throw new Error("Can only assign instances of Entity!");t.setVariable(this),t.setRole("StatisticalModifier"),this.#a=t}addContextObject(t){if(!(t instanceof M))throw new Error("Can only assign instances of Entity!");t.setVariable(this),t.setRole("ContextObject"),this.#s.push(t)}addConstraint(t,...e){if(!(t instanceof ht))throw new Error("Can only assign instances of Constraint!");if(e.some(i=>i.getVariable()!=this))throw Error("Can only constrain entities of the same variable!");if(this.#r.includes(t)){const i=t.getEntities();for(const r of e)i.includes(r)||(t.addEntity(r),r._addConstraint(t));return}for(const i of e)t.addEntity(i),i._addConstraint(t);t.setRole("Constraint"),this.#r.push(t),t.setVariable(this)}getProperty(){return this.#e}getObjectOfInterest(){return this.#t}getMatrix(){return this.#i}getStatisticalModifier(){return this.#a}getContextObjects(){return this.#s.slice(0)}getConstraints(){return this.#r.slice(0)}getClassLabel(){return"Variable"}_removeConstraint(t){this.#r=this.#r.filter(e=>e!=t)}_removeContextObject(t){this.#s=this.#s.filter(e=>e!=t)}_removeStatisticalModifier(t){this.#a=void 0}_removeMatrix(){this.#i=void 0}toString(){return`[Variable ${this._iri?`(${this._iri})`:"(_blank)"}`+(Object.values(this._label).length?`
  label:
`+Object.entries(this._label).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+(Object.values(this._comment).length?`
  comment:
`+Object.entries(this._comment).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+`
  Property:
${this.#e?this.#e.toString().split(`
`).map(t=>`    ${t}`).join(`
`):"-"}
  ObjectOfInterest:
${this.#t?this.#t.toString().split(`
`).map(t=>`    ${t}`).join(`
`):"-"}
  Matrix:
${this.#i?this.#i.toString().split(`
`).map(t=>`    ${t}`).join(`
`):"-"}
  ContextObject:
${this.#s.length?this.#s.map(t=>t.toString().split(`
`).map(e=>`    ${e}`).join(`
`)).join(`
`):"-"}
]`}}class ht extends F{#e=[];addEntity(t){this.#e.push(t)}getEntities(){return this.#e.slice(0)}getClassLabel(){return"Constraint"}remove(){this.getVariable()._removeConstraint(this),this.#e.forEach(t=>t._removeConstraint(this))}toString(){return`[Constraint ${this._iri?`(${this._iri})`:"(_blank)"}`+(Object.values(this._label).length?`
  label:
`+Object.entries(this._label).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+(Object.values(this._comment).length?`
  comment:
`+Object.entries(this._comment).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+`
]`}}class M extends F{#e=[];#t={};setVariable(t){super.setVariable(t),Object.values(this.#t).forEach(e=>e.forEach(i=>i.setVariable(t)))}_addConstraint(t){this.#e.push(t)}_removeConstraint(t){this.#e=this.#e.filter(e=>e!=t)}addConstraint(t){this.#e.push(t)}getConstraints(){return Array.from(this.#e)}addComponent(t,e){if(!Q.includes(t))throw new Error("Invalid property to connect a System to its components: "+t);t in this.#t||(this.#t[t]=[]),e.setVariable(this.getVariable()),e.setRole("SystemComponent"),this.#t[t].push(e)}getComponents(){return Object.entries(this.#t).reduce((t,e)=>(t[e[0]]=Array.from(e[1]),t),{})}getComponentCount(){return Object.entries(this.#t).reduce((t,e)=>t+e[1].length,0)}getComponentKeys(){return Object.keys(this.#t)}changeComponentKeys(t){for(const i of t)if(!Q.includes(i))throw new Error(`Invalid system property: "${i}"`);const e=Object.values(this.#t).flat();if(t.length!=e.length)throw new Error(`Need exactly ${e.length} new properties!`);this.#t={};for(let i=0;i<e.length;i++)this.addComponent(t[i],e[i])}isSystem(){return Object.keys(this.#t).length>0}isSymmetricSystem(){return Object.keys(this.#t).length==1}getClassLabel(){switch(!0){case this.getRole()=="StatisticalModifier":return"Stat. Mod.";case ot.some(t=>t in this.#t):return"SymmetricSystem";case lt.some(t=>t in this.#t):return"AsymmetricSystem";default:return"Entity"}}remove(){if(["OoI","SystemComponent","Property"].includes(this.getRole())){console.warn(`Can not remove Entities of type ${this.getRole()}`);return}for(const t of[...this.#e])t.remove();switch(this.removeComponents(),this.getRole()){case"Matrix":this.getVariable()._removeMatrix();break;case"ContextObject":this.getVariable()._removeContextObject(this);break;case"StatisticalModifier":this.getVariable()._removeStatisticalModifier(this);break;default:throw Error(`Missing Code for removal of Entity type ${this.getRole()}`)}}removeComponents(){if(this.isSystem()){const t=Object.values(this.#t).flat().flatMap(e=>e.getConstraints());for(const e of t)e.remove();this.#t={}}}toString(){return`[Entity ${this._iri?`(${this._iri})`:"(_blank)"}`+(Object.values(this._label).length?`
  label:
`+Object.entries(this._label).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+(Object.values(this._comment).length?`
  comment:
`+Object.entries(this._comment).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+(Object.values(this.#e).length?`
  constrained:
`+this.#e.map(t=>t.toString().split(`
`).map(e=>`    ${e}`).join(`
`)).join(`
`):"-")+`
]`}clone(){const t=new M({iri:this._iri,shortIri:this._shortIri,label:this._label,comment:this._comment,isBlank:this._isBlank});for(const e of this.#e)t._addConstraint(e);for(const e in this.#t)for(const i of this.#t[e])t.addComponent(e,i.clone());return t}}class vt extends M{getClassLabel(){return"Property"}toString(){return`[Entity ${this._iri?`(${this._iri})`:"(_blank)"}`+(Object.values(this._label).length?`
  label:
`+Object.entries(this._label).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+(Object.values(this._comment).length?`
  comment:
`+Object.entries(this._comment).map(([t,e])=>`    ${t}: ${e}`).join(`
`):"")+`
]`}}function Ct(s){const t=new ct({iri:s["@id"],label:s.label,comment:s.comment}),e={};let i=D(s.property,vt,e);if(i&&t.setProperty(i),i=D(s.statisticalModifier,M,e),i&&t.setStatisticalModifier(i),i=D(s.ooi,M,e),i&&t.setObjectOfInterest(i),i=D(s.matrix,M,e),i&&t.setMatrix(i),s.context)for(const r of s.context)i=D(r,M,e),t.addContextObject(i);if(s.constraint)for(const r of s.constraint){let{constraint:c,entities:a}=xt(r);a=a.map(m=>e[m]),t.addConstraint(c,...a)}return t}function D(s,t,e){if(!s)return;const i=new t({iri:s["@id"],label:s.label,comment:s.comment});e[i.getIri()]=i;for(const r of Q)if(r in s){const c=Array.isArray(s[r])?s[r].map(a=>D(a,t,e)):[D(s[r],t,e)];for(const a of c)i.addComponent(r,a),e[a.getIri()]=a}return i}function xt(s){if(s)return{constraint:new ht({iri:s["@id"],label:s.label,comment:s.comment}),entities:s.constrains}}var Ot=C('<a class="navBoxItem"><li> </li></a>'),yt=C('<li class="svelte-10b7788"><label class="svelte-10b7788"><i> </i></label> <input type="checkbox" class="svelte-10b7788"/> <ul class="svelte-10b7788"></ul></li>'),St=rt(C(`<div class="navBox svelte-10b7788"><div class="navBoxHead">Filter</div> <div class="navBoxBody filterBody svelte-10b7788"><input type="text" id="filter" placeholder="Filter Variables ..."/> <script>
      (function(){

        // schedule update of filter
        let filterTimer = null;
        document.querySelector( '#filter' )
          ?.addEventListener( 'input', () => {
            if ( filterTimer ) {
              clearTimeout( filterTimer );
            }
            filterTimer = setTimeout( triggerFilter, 200 );
          } );


        function triggerFilter() {

          // get filter term
          const term = document.querySelector( '#filter' )?.value?.toLowerCase() || null;

          for( const entry of document.querySelectorAll( '.navBoxItem') ) {

            if( term ) {

              // only show, if filter term is included
              if( ! entry.textContent?.toLowerCase().includes( term ) ) {
                entry.classList.add( 'hidden' );
              } else {
                entry.classList.remove( 'hidden' );
              }

            } else {

              // if no filter term is set, show all entries
              entry.classList.remove( 'hidden' );

            }
          }
        }

      })();
    <\/script></div></div> <div class="navBox svelte-10b7788"><div class="navBoxHead">Navigation</div> <div class="navBoxBody svelte-10b7788"><ul class="svelte-10b7788"></ul></div></div>`,1));function wt(s,t){at(t,!0);const e=t.selected.split("/").slice(0,-1).map(()=>"..").join("/"),i=Object.keys(t.variables).find(O=>t.variables[O].some(j=>j.path==t.selected));var r=St(),c=h(Y(r),2),a=h(o(c),2),m=o(a);K(m,21,()=>Object.keys(t.variables),Z,(O,j)=>{var V=yt(),L=o(V),k=o(L),J=o(k,!0);n(k),n(L);var P=h(L,2);_t(P);var $=h(P,2);K($,21,()=>t.variables[v(j)],Z,(d,l)=>{var b=Ot(),_=o(b);let g;var S=o(_,!0);n(_),n(b),w(()=>{B(b,"href",(e?`${e}/${v(l).path}`:v(l).path)+".html"),g=pt(_,1,"svelte-10b7788",null,g,{selected:t.selected==v(l).path}),E(S,v(l).title)}),u(d,b)}),n($),n(V),w(()=>{B(L,"for",`checkBox${v(j)??""}`),E(J,v(j)),B(P,"id",`checkBox${v(j)??""}`),bt(P,i==v(j))}),u(O,V)}),n(m),n(a),n(c),u(s,r),nt()}const H=(s,t=ft)=>{var e=tt(),i=Y(e);{var r=c=>{var a=Lt(),m=o(a);{var O=d=>{var l=Et(),b=o(l,!0);n(l),w((_,g)=>{B(l,"href",_),E(b,g)},[()=>t().getIri(),()=>t().getLabel()]),u(d,l)},j=d=>{var l=et();w(b=>E(l,b),[()=>t().getLabel()]),u(d,l)};I(m,d=>{t().getIri()?d(O):d(j,!1)})}var V=h(m,2);{var L=d=>{var l=It(),b=o(l,!0);n(l),w(_=>E(b,_),[()=>t().getComment()]),u(d,l)};I(V,d=>{t().getComment()&&d(L)})}var k=h(V,2);{var J=d=>{var l=kt(),b=h(o(l),2);K(b,21,()=>t().getConstraints(),_=>_.getIri(),(_,g)=>{var S=Rt(),A=o(S);{var q=x=>{var p=et();w(R=>E(p,R),[()=>v(g).getLabel()]),u(x,p)},z=x=>{var p=Mt(),R=o(p,!0);n(p),w((U,f)=>{B(p,"href",U),E(R,f)},[()=>v(g).getIri(),()=>v(g).getLabel()]),u(x,p)};I(A,x=>{v(g).isBlank()?x(q):x(z,!1)})}var T=h(A,2);{var G=x=>{var p=Vt(),R=o(p,!0);n(p),w(U=>E(R,U),[()=>v(g).getComment()]),u(x,p)};I(T,x=>{v(g).getComment()&&x(G)})}n(S),u(_,S)}),n(b),n(l),u(d,l)};I(k,d=>{t().getConstraints().length>0&&d(J)})}var P=h(k,2);{var $=d=>{var l=tt(),b=Y(l);K(b,17,()=>Object.entries(t().getComponents()),([_,g])=>_,(_,g)=>{var S=X(()=>ut(v(g),2));let A=()=>v(S)[0],q=()=>v(S)[1];var z=Bt(),T=o(z),G=o(T,!0);n(T);var x=h(T,2);K(x,17,q,p=>p.getIri(),(p,R)=>{H(p,()=>v(R))}),n(z),w(()=>E(G,A())),u(_,z)}),u(d,l)};I(P,d=>{t().getComponentCount()>0&&d($)})}n(a),u(c,a)};I(i,c=>{t()&&c(r)})}u(s,e)};var Et=C("<a> </a>"),It=C('<p class="desc svelte-iaj60x"> </p>'),Mt=C("<a> </a>"),Vt=C('<p class="description"> </p>'),Rt=C('<li class="constraint-item"><!> <!></li>'),kt=C('<div><span class="subheading">Constraint(s)</span> <ul class="constraint-list"></ul></div>'),Bt=C('<dl class="svelte-iaj60x"><dt class="subheading svelte-iaj60x"> </dt> <!></dl>'),Lt=C("<dd><!> <!> <!> <!></dd>"),Pt=C('<a target="_blank" aria-label="Discuss on Github" class="svelte-iaj60x"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 367.4 90" style="height: 1em;"><g fill="currentColor"><path d="m46.1 0c-25.5 0-46.1 20.6-46.1 46.1 0 20.4 13.2 37.7 31.5 43.8 2.3.4 3.2-1 3.2-2.2 0-1.1-.1-4.7-.1-8.6-11.6 2.1-14.6-2.8-15.5-5.4-.5-1.3-2.8-5.4-4.7-6.5-1.6-.9-3.9-3-.1-3.1 3.6-.1 6.2 3.3 7.1 4.7 4.2 7 10.8 5 13.4 3.8.4-3 1.6-5 2.9-6.2-10.3-1.2-21-5.1-21-22.8 0-5 1.8-9.2 4.7-12.4-.5-1.2-2.1-5.9.5-12.2 0 0 3.9-1.2 12.7 4.7 3.7-1 7.6-1.6 11.5-1.6s7.8.5 11.5 1.6c8.8-6 12.7-4.7 12.7-4.7 2.5 6.3.9 11.1.5 12.2 2.9 3.2 4.7 7.3 4.7 12.4 0 17.7-10.8 21.6-21.1 22.8 1.7 1.4 3.1 4.2 3.1 8.5 0 6.2-.1 11.1-.1 12.7 0 1.2.9 2.7 3.2 2.2 18.2-6.1 31.4-23.4 31.4-43.8.3-25.4-20.4-46-45.9-46z"></path><path d="m221.6 67.1h-.1zm0 0c-.5 0-1.8.3-3.2.3-4.4 0-5.9-2-5.9-4.6v-17.5h8.9c.5 0 .9-.4.9-1.1v-9.5c0-.5-.4-.9-.9-.9h-8.9v-11.7c0-.4-.3-.7-.8-.7h-12c-.5 0-.8.3-.8.7v12.1s-6.1 1.5-6.5 1.6-.7.5-.7.9v7.6c0 .6.4 1.1.9 1.1h6.2v18.3c0 13.6 9.5 15 16 15 3 0 6.5-.9 7.1-1.2.3-.1.5-.5.5-.9v-8.4c.1-.6-.3-1-.8-1.1zm132.2-12.2c0-10.1-4.1-11.4-8.4-11-3.3.2-6 1.9-6 1.9v19.6s2.7 1.9 6.8 2c5.8.2 7.6-1.9 7.6-12.5zm13.6-.9c0 19.1-6.2 24.6-17 24.6-9.1 0-14.1-4.6-14.1-4.6s-.2 2.6-.5 2.9c-.2.3-.4.4-.8.4h-8.3c-.6 0-1.1-.4-1.1-.9l.1-62c0-.5.4-.9.9-.9h11.9c.5 0 .9.4.9.9l-.1 20.9s4.6-3 11.3-3h.1c6.8-0 16.7 2.5 16.7 21.7zm-48.7-20.2h-11.7c-.6 0-.9.4-.9 1.1v30.3s-3.1 2.2-7.3 2.2-5.4-1.9-5.4-6.1v-26.5c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v28.5c0 12.3 6.9 15.3 16.3 15.3 7.8 0 14.1-4.3 14.1-4.3s.3 2.2.4 2.5.5.5.9.5h7.5c.6 0 .9-.4.9-.9l.1-41.7c-.1-.4-.6-.9-1.2-.9zm-132.2 0h-11.9c-.5 0-.9.5-.9 1.1v40.9c0 1.1.7 1.5 1.7 1.5h10.7c1.1 0 1.4-.5 1.4-1.5v-41.1c0-.5-.5-.9-1-.9zm-5.8-18.9c-4.3 0-7.7 3.4-7.7 7.7s3.4 7.7 7.7 7.7c4.2 0 7.6-3.4 7.6-7.7s-3.4-7.7-7.6-7.7zm92-1.4h-11.8c-.5 0-.9.4-.9.9v22.8h-18.5v-22.7c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v62c0 .5.5.9.9.9h11.9c.5 0 .9-.4.9-.9v-26.6h18.5l-.1 26.5c0 .5.4.9.9.9h11.9c.5 0 .9-.4.9-.9v-62c0-.4-.4-.9-.9-.9zm-105.3 27.5v32c0 .2-.1.6-.3.7 0 0-7 5-18.5 5-13.9 0-30.3-4.4-30.3-33 0-28.7 14.4-34.6 28.4-34.5 12.2 0 17.1 2.7 17.8 3.2.2.3.3.5.3.8l-2.3 9.9c0 .5-.5 1.1-1.1.9-2-.6-5-1.8-12.1-1.8-8.2 0-17 2.3-17 20.8s8.4 20.6 14.4 20.6c5.1 0 7-.6 7-.6v-12.8h-8.2c-.6 0-1.1-.4-1.1-.9v-10.3c0-.5.4-.9 1.1-.9h20.9c.6-.1 1 .4 1 .9z"></path></g></svg></a>'),$t=C('<dt class="svelte-iaj60x">Statistical Modifier</dt> <!>',1),Tt=C('<dt class="svelte-iaj60x">Matrix</dt> <!>',1),At=C('<dt class="svelte-iaj60x">Context Objects</dt> <!>',1),zt=rt(C(`<nav><!></nav> <main class="svelte-iaj60x"><div class="svelte-iaj60x"><section class="svelte-iaj60x"><h2 class="svelte-iaj60x"> </h2> <p class="links svelte-iaj60x"><!> <a target="_blank" aria-label="Download RDF" class="svelte-iaj60x"><img style="height: 1em;" alt="Download RDF"/></a></p> <p class="description"> </p></section> <section class="textual svelte-iaj60x"><dl class="svelte-iaj60x"><dt class="svelte-iaj60x">Property</dt> <!> <dt class="svelte-iaj60x">Object of Interest</dt> <!> <!> <!> <!></dl></section></div> <br/> <div class="vis svelte-iaj60x"><iframe title="Visualization of the Variable" class="svelte-iaj60x"></iframe> <script>
      function updateVisSize( ev ) {
        // set the proper iframe ratio
        const iframe = document.querySelector( 'iframe' );
        const ratio = ev.data.width / ev.data.height;
        iframe.style.aspectRatio = ratio;
        // remove the listener
        window.removeEventListener( 'message', updateVisSize );
      }
      window.addEventListener( 'message', updateVisSize );
    <\/script></div></main>`,1));function qt(s,t){at(t,!0);const e=Ct(t.data.variable),i=t.data.path.split("/").slice(0,-1).map(()=>"..").join("/");var r=zt(),c=Y(r),a=o(c);wt(a,{get selected(){return t.data.path},get variables(){return t.data.variableList}}),n(c);var m=h(c,2),O=o(m),j=o(O),V=o(j),L=o(V,!0);n(V);var k=h(V,2),J=o(k);{var P=f=>{var y=Pt();w(()=>B(y,"href",t.data.issue)),u(f,y)};I(J,f=>{t.data.issue&&f(P)})}var $=h(J,2),d=o($);n($),n(k);var l=h(k,2),b=o(l,!0);n(l),n(j);var _=h(j,2),g=o(_),S=h(o(g),2);{let f=X(()=>e.getProperty());H(S,()=>v(f))}var A=h(S,4);{let f=X(()=>e.getObjectOfInterest());H(A,()=>v(f))}var q=h(A,2);{var z=f=>{var y=$t(),N=h(Y(y),2);{let W=X(()=>e.getStatisticalModifier());H(N,()=>v(W))}u(f,y)};I(q,f=>{e.getStatisticalModifier()&&f(z)})}var T=h(q,2);{var G=f=>{var y=Tt(),N=h(Y(y),2);{let W=X(()=>e.getMatrix());H(N,()=>v(W))}u(f,y)};I(T,f=>{e.getMatrix()&&f(G)})}var x=h(T,2);{var p=f=>{var y=At(),N=h(Y(y),2);K(N,17,()=>e.getContextObjects(),Z,(W,mt)=>{H(W,()=>v(mt))}),u(f,y)};I(x,f=>{e.getContextObjects().length>0&&f(p)})}n(g),n(_),n(O);var R=h(O,4),U=o(R);dt(2),n(R),n(m),w((f,y,N)=>{E(L,f),B($,"href",`${i}/${t.data.path}`),B(d,"src",`${i}/rdf.svg`),E(b,y),B(U,"src",`https://sirkos.github.io/iadopt-vis/remote.html?jsonld=${N??""}`)},[()=>e.getLabel(),()=>e.getComment(),()=>encodeURIComponent(JSON.stringify(t.data.variable))]),u(s,r),nt()}export{qt as component};
