import{w as $,a as c,f as m}from"../chunks/I0AGUu3X.js";import{V as v,_ as O,W as a,Z as e,$ as T,w as t,a0 as A,a1 as E,a2 as I,a3 as U}from"../chunks/D623fXL-.js";import{s as _}from"../chunks/DsmpRkHX.js";import{e as k,i as C,s as x}from"../chunks/BJjor23F.js";var W=m("<li><a> </a></li>"),Z=$(m(`<div class="navBox svelte-1m3jda"><div class="navBoxHead">Filter</div> <div class="navBoxBody filterBody svelte-1m3jda"><input type="text" id="filter" placeholder="Filter Variables ..." class="svelte-1m3jda"/> <script>
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

          for( const entry of document.querySelectorAll( '.variable-item') ) {

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
    <\/script></div></div> <div class="navBox svelte-1m3jda"><div class="navBoxHead">Navigation</div> <div class="navBoxBody"><ul></ul></div></div>`,1));function z(y,o){var n=Z(),d=v(O(n),2),i=v(a(d),2),u=a(i);k(u,21,()=>o.nav,C,(f,r)=>{var l=W(),s=a(l),h=a(s,!0);e(s),e(l),T(b=>{x(s,"href",b),_(h,t(r).label)},[()=>`#${encodeURIComponent(t(r).link)}`]),c(f,l)}),e(u),e(i),e(d),c(y,n)}var G=m('<li class="variable-item svelte-1uha8ag"><article><h3 class="svelte-1uha8ag"><a> </a></h3> <p class="svelte-1uha8ag"> </p> <a class="download svelte-1uha8ag" title="Download RDF"><img src="rdf.svg" alt="Download RDF" class="svelte-1uha8ag"/></a></article></li>'),J=m('<section><h2> </h2> <ul class="variable-list svelte-1uha8ag"></ul></section>'),K=m("<nav><!></nav> <main></main>",1);function Y(y,o){A(o,!0);const n=[];for(const[r,l]of Object.entries(o.data.variables))n.push({label:r,link:r});var d=K(),i=O(d),u=a(i);z(u,{get nav(){return n}}),e(i);var f=v(i,2);k(f,21,()=>Object.entries(o.data.variables),C,(r,l)=>{var s=I(()=>U(t(l),2));let h=()=>t(s)[0],b=()=>t(s)[1];var w=J(),p=a(w),R=a(p,!0);e(p);var D=v(p,2);k(D,21,b,C,(S,g)=>{var B=G(),q=a(B),j=a(q),F=a(j),H=a(F,!0);e(F),e(j);var L=v(j,2),N=a(L,!0);e(L);var V=v(L,2);e(q),e(B),T(()=>{x(F,"href",t(g).path+".html"),_(H,t(g).title),_(N,t(g).comment),x(V,"href",t(g).path)}),c(S,B)}),e(D),e(w),T(()=>{x(p,"id",h()),_(R,h())}),c(r,w)}),e(f),c(y,d),E()}export{Y as component};
