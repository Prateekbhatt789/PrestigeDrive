/* PrestigeDrive Rentals — fleet.js v2.0 */
'use strict';
const CARS=[
  {id:1,category:'sedan',name:'Mercedes-Benz',model:'E 350 AMG Line',fuel:'Petrol',trans:'Automatic',seats:5,price:187,priceWeek:1149,badge:'Most Popular'},
  {id:2,category:'suv',name:'BMW',model:'X7 xDrive40i M Sport',fuel:'Petrol',trans:'Automatic',seats:7,price:243,priceWeek:1549},
  {id:3,category:'sports',name:'Porsche',model:'911 Carrera S',fuel:'Petrol',trans:'PDK',seats:2,price:379,priceWeek:2399,badge:'Weekend Pick'},
  {id:4,category:'executive',name:'Rolls-Royce',model:'Ghost Extended',fuel:'Petrol',trans:'Automatic',seats:4,price:649,priceWeek:4099,badge:'Ultra Luxury'},
  {id:5,category:'suv',name:'Range Rover',model:'Autobiography LWB',fuel:'Petrol',trans:'Automatic',seats:5,price:309,priceWeek:1949},
  {id:6,category:'convertible',name:'Bentley',model:'Continental GTC V8',fuel:'Petrol',trans:'DCT',seats:4,price:519,priceWeek:3299,badge:'New Arrival'},
  {id:7,category:'sedan',name:'Audi',model:'A8 L 60 TFSIe',fuel:'Hybrid',trans:'Automatic',seats:4,price:213,priceWeek:1349},
  {id:8,category:'sports',name:'Ferrari',model:'Roma Spider',fuel:'Petrol',trans:'DCT',seats:2,price:887,priceWeek:5599,badge:'Exclusive'},
  {id:9,category:'executive',name:'Mercedes-Maybach',model:'S 680 4MATIC',fuel:'Petrol',trans:'Automatic',seats:4,price:779,priceWeek:4899},
  {id:10,category:'convertible',name:'McLaren',model:'720S Spider',fuel:'Petrol',trans:'DCT',seats:2,price:957,priceWeek:6099,badge:'Limited'},
  {id:11,category:'suv',name:'Lamborghini',model:'Urus Performante',fuel:'Petrol',trans:'Automatic',seats:5,price:719,priceWeek:4499,badge:'Beast Mode'},
  {id:12,category:'sedan',name:'Genesis',model:'G90 Prestige AWD',fuel:'Petrol',trans:'Automatic',seats:5,price:173,priceWeek:1099}
];
const CAT_LABEL={sedan:'Business Sedan',suv:'Luxury SUV',sports:'Sports Car',convertible:'Convertible',executive:'Executive Class'};
const CAR_IMAGES={
  1:'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=700&q=80',
  2:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=700&q=80',
  3:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80',
  4:'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=700&q=80',
  5:'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=700&q=80',
  6:'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=700&q=80',
  7:'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=700&q=80',
  8:'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=700&q=80',
  9:'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=700&q=80',
  10:'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=700&q=80',
  11:'https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?w=700&q=80',
  12:'https://images.unsplash.com/photo-1537984822441-cff330075342?w=700&q=80'
};
const IC_TRANS='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>';
const IC_FUEL='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M3 22V8a2 2 0 012-2h7a2 2 0 012 2v14M3 22h11"/><rect x="5" y="10" width="6" height="4" rx="1"/></svg>';
const IC_SEATS='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>';
const IC_WA='<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

function buildCard(c){
  var wa=encodeURIComponent('Hello PrestigeDrive! I\'d like to book the '+c.name+' '+c.model+'. Please confirm availability and pricing.');
  var img=CAR_IMAGES[c.id]||CAR_IMAGES[1];
  return '<article class="car-card reveal-card" data-category="'+c.category+'">'+
    (c.badge?'<span class="car-badge">'+c.badge+'</span>':'')+
    '<div class="car-img-wrap"><img src="'+img+'" alt="'+c.name+' '+c.model+'" loading="lazy" class="car-img"><div class="car-img-overlay"></div></div>'+
    '<div class="car-body">'+
      '<div class="car-cat">'+CAT_LABEL[c.category]+'</div>'+
      '<h3 class="car-name">'+c.name+'</h3>'+
      '<p class="car-model-label">'+c.model+'</p>'+
      '<div class="car-specs-row">'+
        '<span class="spec-chip">'+IC_TRANS+c.trans+'</span>'+
        '<span class="spec-chip">'+IC_FUEL+c.fuel+'</span>'+
        '<span class="spec-chip">'+IC_SEATS+c.seats+' Seats</span>'+
      '</div>'+
      '<div class="car-footer">'+
        '<div class="car-price"><span class="price-amount">$'+c.price+'</span><span class="price-per">/day</span></div>'+
        '<a class="wa-book-btn ripple-btn" href="https://wa.me/1234567890?text='+wa+'" target="_blank" rel="noopener">'+IC_WA+' Book Now</a>'+
      '</div>'+
    '</div>'+
  '</article>';
}

function renderFleet(filter,gridId){
  filter=filter||'all'; gridId=gridId||'fleetGrid';
  var grid=document.getElementById(gridId);
  if(!grid)return;
  var list=filter==='all'?CARS:CARS.filter(function(c){return c.category===filter;});
  grid.innerHTML=list.map(buildCard).join('');
  observeCards(); initRipple();
}
function initFilters(gridId){
  document.querySelectorAll('.filter-pill').forEach(function(p){
    p.addEventListener('click',function(){
      document.querySelectorAll('.filter-pill').forEach(function(x){x.classList.remove('active');});
      p.classList.add('active');
      renderFleet(p.dataset.filter,gridId||'fleetGrid');
    });
  });
}
function openWhatsApp(msg){
  window.open('https://wa.me/1234567890?text='+encodeURIComponent(msg||'Hello PrestigeDrive! I\'d like to make a booking enquiry.'),'_blank');
}
function initNav(){
  var nav=document.getElementById('mainNav');
  window.addEventListener('scroll',function(){
    if(nav)nav.classList.toggle('scrolled',window.scrollY>70);
  },{passive:true});
  var path=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(a){
    if(a.getAttribute('href')===path)a.classList.add('active');
  });
}
function openMobileNav(){document.getElementById('mobileNav').classList.add('open');document.getElementById('overlay').classList.add('open');document.body.style.overflow='hidden';}
function closeMobileNav(){document.getElementById('mobileNav').classList.remove('open');document.getElementById('overlay').classList.remove('open');document.body.style.overflow='';}
function initReveal(){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},{threshold:0.07,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
}
function observeCards(){
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e,i){if(e.isIntersecting){var idx=i;setTimeout(function(){e.target.classList.add('visible');},idx*70);io.unobserve(e.target);}});
  },{threshold:0.04});
  document.querySelectorAll('.reveal-card').forEach(function(el){io.observe(el);});
}
function initRipple(){
  document.querySelectorAll('.ripple-btn').forEach(function(btn){
    if(btn._r)return; btn._r=true;
    btn.addEventListener('click',function(e){
      var r=btn.getBoundingClientRect(),sp=document.createElement('span');
      sp.className='ripple-wave';sp.style.left=(e.clientX-r.left)+'px';sp.style.top=(e.clientY-r.top)+'px';
      btn.appendChild(sp);setTimeout(function(){sp.remove();},700);
    });
  });
}
function initFAQ(){
  document.querySelectorAll('.faq-item').forEach(function(item){
    var btn=item.querySelector('.faq-q'),body=item.querySelector('.faq-a');
    if(!btn||!body)return;
    btn.addEventListener('click',function(){
      var open=item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open');var b=i.querySelector('.faq-a');if(b)b.style.maxHeight=null;});
      if(!open){item.classList.add('open');body.style.maxHeight=body.scrollHeight+'px';}
    });
  });
}
function initCounters(){
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting)return;
      var el=e.target,target=parseInt(el.dataset.count,10),start=performance.now(),dur=1600;
      (function tick(now){var p=Math.min((now-start)/dur,1),ease=1-Math.pow(1-p,3);el.textContent=Math.round(ease*target).toLocaleString();if(p<1)requestAnimationFrame(tick);})(start);
      io.unobserve(el);
    });
  },{threshold:0.5});
  document.querySelectorAll('[data-count]').forEach(function(el){io.observe(el);});
}
function initHeroParallax(){
  var bg=document.querySelector('.hero-bg-img');
  if(!bg)return;
  window.addEventListener('scroll',function(){bg.style.transform='scale(1.08) translateY('+(window.scrollY*0.28)+'px)';},{passive:true});
}
function initWaFloat(){
  var cta=document.querySelector('.cta-section'),wf=document.getElementById('waFloat');
  if(!cta||!wf)return;
  new IntersectionObserver(function(es){wf.style.opacity=es[0].isIntersecting?'0':'1';wf.style.pointerEvents=es[0].isIntersecting?'none':'auto';},{threshold:0.3}).observe(cta);
}
var currentFilter='all';
function refreshGrid(){
  var sortEl=document.getElementById('sortSelect'),sort=sortEl?sortEl.value:'default';
  var base=currentFilter==='all'?CARS.slice():CARS.filter(function(c){return c.category===currentFilter;});
  if(sort==='price-asc')base.sort(function(a,b){return a.price-b.price;});
  if(sort==='price-desc')base.sort(function(a,b){return b.price-a.price;});
  var ce=document.getElementById('carCount');if(ce)ce.textContent=base.length;
  var grid=document.getElementById('fleetGrid');
  if(grid){grid.innerHTML=base.map(buildCard).join('');observeCards();initRipple();}
}
function handleSubmit(e){
  e.preventDefault();
  var f=document.getElementById('contactForm'),ok=document.getElementById('formSuccess');
  if(f)f.style.display='none';if(ok)ok.style.display='block';
}
function showTab(id,btn){
  document.querySelectorAll('.terms-panel').forEach(function(p){p.classList.remove('active');});
  document.querySelectorAll('.terms-tab').forEach(function(b){b.classList.remove('active');});
  var panel=document.getElementById('tab-'+id);if(panel)panel.classList.add('active');if(btn)btn.classList.add('active');
}
document.addEventListener('DOMContentLoaded',function(){
  initNav();initReveal();initFAQ();initCounters();initWaFloat();initHeroParallax();initRipple();
  var grid=document.getElementById('fleetGrid');
  if(grid){
    var sortEl=document.getElementById('sortSelect');
    if(sortEl){
      refreshGrid();sortEl.addEventListener('change',refreshGrid);
      document.querySelectorAll('.filter-pill').forEach(function(p){
        p.addEventListener('click',function(){
          document.querySelectorAll('.filter-pill').forEach(function(x){x.classList.remove('active');});
          p.classList.add('active');currentFilter=p.dataset.filter;refreshGrid();
        });
      });
    } else {
      renderFleet('all','fleetGrid');initFilters('fleetGrid');
    }
  }
});
