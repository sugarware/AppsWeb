(function(){
  const id=(window.SUGARWARE_SITE||{}).gaMeasurementId;
  if(!id || id==='G-XXXXXXXXXX') return;
  const s=document.createElement('script'); s.async=true; s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(id); document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[]; window.gtag=function(){dataLayer.push(arguments)}; gtag('js',new Date()); gtag('config',id);
  document.addEventListener('click',e=>{const a=e.target.closest('a[data-track]'); if(!a)return; gtag('event',a.dataset.track,{app_name:a.dataset.app||'',link_url:a.href});});
})();
