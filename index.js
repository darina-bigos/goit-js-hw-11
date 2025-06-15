import{S as m,a as f,i as a}from"./assets/vendor-Dl6Guels.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery"),p=new m(".gallery a"),c=document.querySelector(".loader");function g(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:d})=>`
        <li class="gallery-item">
        <a href="${n}">
        <img src="${o}" alt="${e}" title="${e}"/>
        <div class="info">
<p><b>💖 likes </b>${t} </p>
<p><b>👁️ views </b> ${s}</p>
<p><b>💬 comments </b>${u} </p>
<p><b>⬇️ downloads </b>${d} </p>
        </div>
        </a>
        </li>`).join("");console.log(r),l.insertAdjacentHTML("beforeend",r),p.refresh()}function y(){l.innerHTML=""}function h(){c.classList.add("is-visible")}function b(){c.classList.remove("is-visible")}function L(i){return f.get("https://pixabay.com/api/",{params:{key:"50835299-cfd675820214f48c95352b76b",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const S=document.querySelector(".form"),v=document.querySelector('[name="search-text"]');document.querySelector(".gallery");document.querySelector(".loader");S.addEventListener("submit",q);function q(i){i.preventDefault();const r=v.value.trim().toLowerCase();if(!r){a.error({title:"Error",message:"Please enter a search term.",position:"topRight"});return}y(),h(),L(r).then(o=>{if(console.log("API data:",o),o.hits.length===0){a.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(o.hits)}).catch(o=>{a.error({title:"Error",message:`Something went wrong: ${o.message}`,position:"topRight"})}).finally(()=>{b()})}
//# sourceMappingURL=index.js.map
