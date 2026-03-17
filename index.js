import{a as f,i as n}from"./assets/vendor-iVBFAIZj.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function u(e){const s="https://pixabay.com/api/",o={params:{key:"55049647-b8a5550eee026fa1bd35fd901",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}};return f.get(s,o).then(i=>i.data)}const c=document.querySelector(".gallery");function p(e){return`
    <li class="li-item">
      <a class="link-a" href="${e.largeImageURL}">
        <img class="img-item" src="${e.webformatURL}" alt="${e.tags}">
        <div class="img-info">
          <div class="info-item">
            <p class="info-label">Likes</p>
            <p class="info-value">${e.likes}</p>
          </div>
          <div class="info-item">
            <p class="info-label">Views</p>
            <p class="info-value">${e.views}</p>
          </div>
          <div class="info-item">
            <p class="info-label">Comments</p>
            <p class="info-value">${e.comments}</p>
          </div>
          <div class="info-item">
            <p class="info-label">Downloads</p>
            <p class="info-value">${e.downloads}</p>
          </div>
        </div>
      </a>
    </li>`}function d(e){const s=e.map(o=>p(o)).join("");c.innerHTML=s}function m(){c.innerHTML=""}document.querySelector(".gallery");const l=document.querySelector(".form");l.addEventListener("submit",e=>{e.preventDefault();const s=e.currentTarget.elements["search-text"].value.trim();if(s===""){n.error({message:"Please fill in the search field!",position:"topRight"});return}m(),u(s).then(o=>{if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}d(o.hits)}).catch(o=>{console.log("Error:",o)}),l.reset()});
//# sourceMappingURL=index.js.map
