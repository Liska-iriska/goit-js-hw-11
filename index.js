import{a as u,S as d,i as n}from"./assets/vendor-D8kWkXeg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function p(e){const o="https://pixabay.com/api/",s={params:{key:"55049647-b8a5550eee026fa1bd35fd901",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}};return u.get(o,s).then(i=>i.data)}let m=new d(".gallery a",{captionsData:"alt",captionDelay:250});const c=document.querySelector(".gallery"),f=document.querySelector("#loader");function y(e){return`
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
    </li>`}function h(e){const o=e.map(s=>y(s)).join("");c.innerHTML=o,m.refresh()}function g(){c.innerHTML=""}function v(){f.classList.add("is-active")}function L(){f.classList.remove("is-active")}document.querySelector(".gallery");const l=document.querySelector(".form");l.addEventListener("submit",e=>{e.preventDefault();const o=e.currentTarget.elements["search-text"].value.trim();if(o===""){n.error({message:"Please fill in the search field!",position:"topRight"});return}g(),v(),p(o).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(s.hits)}).catch(s=>{console.log("Error:",s)}).finally(()=>{L(),l.reset()})});
//# sourceMappingURL=index.js.map
