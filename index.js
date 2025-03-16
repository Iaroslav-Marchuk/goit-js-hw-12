import{a as w,S as b,i as n}from"./assets/vendor-DXaqCXe3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function g(a,t=1){return(await w.get("https://pixabay.com/api/",{params:{key:"49242094-b67d71fe272541c15bafae494",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data}let S=new b(".gallery a",{captionsData:"alt",captionDelay:250,animationSlide:!0});function i(a,t=!0){const r=document.querySelector(".gallery");t&&(r.innerHTML="");const p=a.map(({webformatURL:e,largeImageURL:s,tags:c,likes:h,views:m,comments:y,downloads:v})=>`<li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-image" src="${e}" alt="${c}" />
        
        <div class="gallery-span-wrapper">
          <div class="gallery-span-wrapper-item">
            <span class="span-title">Likes</span>
            <span class="span-value">${h}</span>
          </div>

          <div class="gallery-span-wrapper-item">
            <span class="span-title">Views</span>
            <span class="span-value">${m}</span>
          </div>

          <div class="gallery-span-wrapper-item">
            <span class="span-title">Comments</span>
            <span class="span-value">${y}</span>
          </div>

          <div class="gallery-span-wrapper-item">
            <span class="span-title">Downloads</span>
            <span class="span-value">${v}</span>
          </div>
        </div>

        </a>
      </li>`).join("");r.insertAdjacentHTML("beforeend",p),S.refresh()}function L(){const a=document.querySelector(".gallery-item");if(!a)return;const r=a.getBoundingClientRect().height;window.scrollBy({top:r*2+48,left:0,behavior:"smooth"})}const q=document.querySelector(".form"),f=document.querySelector(".form-input"),u=document.querySelector(".loader"),o=document.querySelector(".load-btn");let l=1,d="";q.addEventListener("submit",async a=>{if(a.preventDefault(),d=f.value.trim(),d===""){n.warning({message:"Please fill the field",position:"topRight"}),o.hidden=!0,i([]);return}u.hidden=!1,l=1;try{const t=await g(d,l),r=t.hits;r.length===0?(i([]),n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})):(i(r,!0),r.length<15||l*15>=t.totalHits?(o.hidden=!0,n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):o.hidden=!1)}catch{i([]),n.error({message:"Something went wrong :(",position:"topRight"})}finally{f.value="",u.hidden=!0}});o.addEventListener("click",async a=>{o.hidden=!0,u.hidden=!1,l+=1;try{const t=await g(d,l),r=t.hits;if(r.length===0){i([]),n.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}i(r,!1),r.length<15||l*15>=t.totalHits?(o.hidden=!0,n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):o.hidden=!1}catch{n.error({message:"Something went wrong :(",position:"topRight"})}finally{u.hidden=!0,L()}});
//# sourceMappingURL=index.js.map
