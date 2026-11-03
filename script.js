const motionAllowed=!matchMedia('(prefers-reduced-motion: reduce)').matches;
function embedUrl(id,autoplay=false){const url=new URL('https://www.youtube.com/embed/'+id);url.searchParams.set('rel','0');url.searchParams.set('playsinline','1');url.searchParams.set('enablejsapi','1');url.searchParams.set('autoplay',autoplay?'1':'0');if(/^https?:$/.test(location.protocol))url.searchParams.set('origin',location.origin);return url.href;}
const careers = [
 ['2024.06 — 재직중','더조은컴퓨터아트학원 일산','강사 (프리랜서)'],
 ['2017.11 — 2026.08','루아미','쇼핑몰운영'],
 ['2016.06 — 2020.07','㈜이젠아카데미컴퓨터 종로','강사'],
 ['2011.08 — 2016.06','더조은컴퓨터아트학원 종로','강사'],
 ['2010.02 — 2012.06','㈜아이비씨에듀케이션','컴퓨터교육강사'],
 ['2011.10 — 2012.04','야미손','쇼핑몰운영'],
 ['2007.04 — 2009.12','뷰닉스테크','디자인'],
 ['2004.09 — 2007.03','고려종합개발','웹디자인 프리랜서']
];
const qualifications = [
 ['2017.12','전자상거래관리사 2급','대한상공회의소'],['2017.03','전자상거래운용사','대한상공회의소'],['2016.06','웹디자인기능사','한국산업인력공단'],['2015.07','쇼핑몰플래너 1급','국제정보능력평가원'],['2012.10','PTG (GTQ그래픽전문강사)','한국생산성본부'],['2010.03','GTQ 1급','한국생산성본부'],['2010.01','컴퓨터그래픽스운용기능사','한국산업인력공단'],['2008.08','정보기술자격(ITQ) 한글파워포인트(한쇼) A등급','한국생산성본부'],['2008.06','정보기술자격(ITQ) 아래한글 A등급','한국생산성본부']
];
function renderRows(id, rows) {
 const parent = document.getElementById(id);
 rows.forEach(([date,title,detail]) => {
  const row=document.createElement('div');row.className='history-row';
  const time=document.createElement('time');time.textContent=date;
  const body=document.createElement('div');const strong=document.createElement('strong');strong.textContent=title;
  const p=document.createElement('p');p.textContent=detail;body.append(strong,p);row.append(time,body);parent.append(row);
 });
}
renderRows('career',careers);renderRows('qualifications',qualifications);

const projects=[
{id:'drama',title:'우아하게, 발칙하게',subtitle:'숏드라마 · 달콤한착각 EP1',category:'film',label:'SHORT DRAMA',youtube:'MOhzRfRnozg',featured:true,description:'노션에 수록된 숏드라마 작품. 달콤한착각 EP1을 감상하세요.'},
{id:'bag',title:'시크릿가든 초대장',subtitle:'명품가방 컨셉 광고',category:'ad',label:'CONCEPT AD / VISUAL STORY',youtube:'WqrLbaxq2Zo',description:'명품가방을 소재로 한 컨셉 광고. 원본에 수록된 스토리보드와 시각 자료를 영상 아래에서 함께 볼 수 있습니다.',images:['bag-storyboard-1.webp','bag-storyboard-2.webp','bag-visual.webp','bag-detail-1.webp','bag-detail-2.webp']},
{id:'quokka',title:'쿼카',subtitle:'AI콘텐츠 창작자 풀사이클 과정 · 대상작품',category:'film',label:'AI CONTENT / GRAND PRIZE',youtube:'qzRPEq8-M8Q',description:'AI콘텐츠 창작자 풀사이클 과정의 대상작품 섹션에 수록된 영상입니다.'},
{id:'ramang',title:'라망지우',subtitle:'AI콘텐츠 창작자 풀사이클 과정 · 대상작품',category:'film',label:'AI CONTENT / GRAND PRIZE',youtube:'Bg48PbLEQdU',description:'AI콘텐츠 창작자 풀사이클 과정의 대상작품 섹션에 함께 수록된 영상입니다.'},
{id:'padding',title:'자유를 입다',subtitle:'노스페이스 패딩 컨셉 광고',category:'ad',label:'CONCEPT AD / OUTDOOR',youtube:'JeWmp-7mVBY',description:'노스페이스 패딩을 소재로 한 컨셉 광고입니다. 스토리보드를 통해 장면 구성도 살펴볼 수 있습니다.',images:['padding-storyboard.webp']},
{id:'legend',title:'연오랑세오녀',subtitle:'전래동화 각색',category:'film',label:'FOLKTALE / REIMAGINED',youtube:'j_iA8HZ230Q',description:'전래동화 연오랑세오녀를 각색한 영상 작품입니다.'},
{id:'friends',title:'90’s 감성 20대 친구들',subtitle:'5친구 Intro',category:'film',label:'NINETIES / FIVE FRIENDS',youtube:'HMbszBjno3I',description:'90년대 감성을 담은 다섯 친구들의 인트로 영상입니다.'},
{id:'mv',title:'자꾸 니가 보여',subtitle:'90년대 대학생의 첫사랑 · 뮤직비디오',category:'film',label:'NINETIES / MUSIC VIDEO',youtube:'Qw6pJjRJ7hQ',description:'90년대 대학생의 첫사랑을 담은 뮤직비디오입니다.'},
{id:'taeo',title:'태오 암벽등반',subtitle:'90’s 감성 20대 친구들',category:'film',label:'NINETIES / CHARACTER STORY',youtube:'8BgGd5j24LQ',description:'90’s 감성 20대 친구들 시리즈에 수록된 태오의 암벽등반 영상입니다.'},
{id:'junho',title:'준호 라면 먹방',subtitle:'90’s 감성 20대 친구들',category:'film',label:'NINETIES / CHARACTER STORY',youtube:'sJ8BQbJBzjw',description:'90’s 감성 20대 친구들 시리즈에 수록된 준호의 라면 먹방 영상입니다.'},
{id:'tesla',title:'테슬라',subtitle:'자동차 컨셉 광고',category:'ad',label:'CONCEPT AD / AUTOMOTIVE',youtube:'cs2CQE8DtgQ',description:'테슬라를 소재로 제작한 컨셉 광고입니다.'},
{id:'palace',title:'경복궁 관광',subtitle:'경복궁 구경하기',category:'ad',label:'TOURISM / GYEONGBOKGUNG',youtube:'0PgQmE0a9zo',description:'경복궁을 소개하는 관광 영상입니다.'},
{id:'cat',title:'성수도 수제만두집 고양이',subtitle:'그외 작업물 · 캐릭터 영상',category:'creative',label:'CREATIVE LAB / CHARACTER',youtube:'H6PvxiNrOKk',description:'노션의 그외 작업물에 수록된 고양이 캐릭터 영상입니다.'},
{id:'santorini',title:'산토리니 여행',subtitle:'그외 작업물 · 여행 영상',category:'creative',label:'CREATIVE LAB / TRAVEL',youtube:'_5r4dv2Cd8E',description:'산토리니 여행을 소재로 한 영상 작업물입니다.'},
{id:'dance',title:'애니메이션 커플댄스',subtitle:'그외 작업물 · 애니메이션',category:'creative',label:'CREATIVE LAB / ANIMATION',youtube:'pn8ZtAiPjWw',description:'커플댄스를 소재로 한 애니메이션 작업물입니다.'},
{id:'autumn',title:'가을독서',subtitle:'애니메이션',category:'creative',label:'CREATIVE LAB / ANIMATION',file:'autumn.mp4',description:'가을독서를 소재로 한 애니메이션. 노션에 업로드된 원본 MP4 영상입니다.'},
{id:'lotus',title:'연잎밥',subtitle:'그외 작업물 · 영상',category:'creative',label:'CREATIVE LAB / FOOD',file:'lotus-rice.mp4',description:'연잎밥을 소재로 한 영상 작업물입니다.'},
{id:'bus',title:'버스안에서',subtitle:'무한루프 영상',category:'creative',label:'CREATIVE LAB / LOOP',file:'bus-loop.mp4',description:'버스안에서를 소재로 한 무한루프 영상입니다.'},
{id:'pasta',title:'스파게티',subtitle:'무한루프 영상',category:'creative',label:'CREATIVE LAB / LOOP',file:'pasta-loop.mp4',description:'스파게티를 소재로 한 무한루프 영상입니다.'},
{id:'etf',title:'ETF 투자, 계좌만 바꿔도',subtitle:'루키의 경제 살롱 · 손익통산',category:'sound',label:'CONTENTS / ECONOMY',youtube:'xOGem7Nkcw8',description:'경제 콘텐츠 작업물. ETF 투자와 손익통산을 다룬 영상입니다.'},
{id:'economy',title:'내 주식 계좌가 파란 이유?',subtitle:'루키의 경제 살롱 · 금리·달러·주식',category:'sound',label:'CONTENTS / ECONOMY',youtube:'Jbx2aH0Bn60',description:'경제 콘텐츠 작업물. 금리, 달러, 주식의 관계를 다룬 영상입니다.'},
{id:'playlist',title:'90년대 감성 플레이리스트',subtitle:'음악 · 플레이리스트',category:'sound',label:'MUSIC / NINETIES',youtube:'EEh4yP2ZPMM',description:'노션의 그외 작업물에 수록된 90년대 감성 플레이리스트입니다.'},
{id:'music',title:'AI 노동요',subtitle:'온실뮤직 · 일할 때 듣는 노래',category:'sound',label:'MUSIC / ONSIL',youtube:'bYWuplBCoIU',description:'노션의 음악 섹션에 수록된 온실뮤직의 AI 노동요입니다.'}
];
projects.splice(1,0,{id:'moon-jar',title:'달항아리',subtitle:'산수와 달의 이미지 · 영상 작품',category:'creative',label:'CREATIVE LAB / KOREAN ART',file:'moon-jar.mp4',description:'달항아리와 산수, 달의 이미지를 담은 52초 영상 작품입니다.'});
const grid=document.getElementById('project-grid');
projects.forEach((project,index)=>{
 const article=document.createElement('article');article.className='project'+(project.featured?' featured':'');article.dataset.category=project.category;
 const button=document.createElement('button');button.className='project-button';button.dataset.open=project.id;button.setAttribute('aria-label',`${project.title} — 페이지 안에서 감상하기`);
 const cover=document.createElement('div');cover.className='project-cover';
 if(project.youtube){const image=document.createElement('img');image.src=`https://i.ytimg.com/vi/${project.youtube}/hqdefault.jpg`;image.alt=`${project.title} 영상 썸네일`;image.loading='lazy';cover.append(image);}else{const video=document.createElement('video');video.src=`./assets/${project.file}#t=0.1`;if(project.poster)video.poster=`./assets/${project.poster}`;video.preload='metadata';video.muted=true;video.playsInline=true;video.setAttribute('aria-hidden','true');video.tabIndex=-1;cover.append(video);}
 const play=document.createElement('span');play.className='play';play.textContent='▶';play.setAttribute('aria-hidden','true');
 const label=document.createElement('span');label.className='project-tag';label.textContent=project.label;
 const number=document.createElement('span');number.className='project-number';number.textContent=String(index+1).padStart(2,'0');cover.append(play,label,number);
 const info=document.createElement('div');info.className='project-info';const words=document.createElement('div');const h3=document.createElement('h3');h3.textContent=project.title;const p=document.createElement('p');p.textContent=project.subtitle;words.append(h3,p);const arrow=document.createElement('span');arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');info.append(words,arrow);button.append(cover,info);article.append(button);grid.append(article);
});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 let count=0;document.querySelectorAll('[data-filter]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});
 document.querySelectorAll('.project').forEach(item=>{item.hidden=button.dataset.filter!=='all'&&item.dataset.category!==button.dataset.filter;if(!item.hidden)count++;});document.getElementById('results').textContent=`${count}개 작품이 표시됩니다.`;
}));
const viewer=document.getElementById('viewer'),player=document.getElementById('player'),extra=document.getElementById('viewer-extra');
function openProject(id){
 pauseFeaturedFilm();
 const project=projects.find(item=>item.id===id);if(!project)return;
 document.getElementById('viewer-title').textContent=project.title;document.getElementById('viewer-category').textContent=project.label;document.getElementById('viewer-description').textContent=project.description;player.replaceChildren();extra.replaceChildren();
 if(project.youtube){const frame=document.createElement('iframe');frame.src=embedUrl(project.youtube,true);frame.title=project.title;frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';player.append(frame);const link=document.createElement('a');link.href=`https://www.youtube.com/watch?v=${project.youtube}`;link.textContent='YouTube 원본 ↗';link.target='_blank';link.rel='noopener noreferrer';extra.append(link);}else{const video=document.createElement('video');video.src=`./assets/${project.file}`;video.controls=true;video.playsInline=true;video.preload='metadata';player.append(video);video.play().catch(()=>{});}
 if(project.images){const h3=document.createElement('h3');h3.textContent='Storyboard & Visual Study';extra.append(h3);project.images.forEach((file,index)=>{const image=document.createElement('img');image.src=`./assets/${file}`;image.alt=`${project.title} 스토리보드 및 시각 자료 ${index+1}`;image.loading='lazy';extra.append(image);});}
 viewer.showModal();document.body.classList.add('modal-open');viewer.scrollTop=0;
}
function openImage(src,caption){document.getElementById('viewer-title').textContent=caption;document.getElementById('viewer-category').textContent='STORYBOARD & VISUAL STUDY';document.getElementById('viewer-description').textContent='';player.replaceChildren();extra.replaceChildren();const image=document.createElement('img');image.src=src;image.alt=caption;player.append(image);viewer.showModal();document.body.classList.add('modal-open');viewer.scrollTop=0;}
document.addEventListener('click',event=>{const trigger=event.target.closest('[data-open]');if(trigger)openProject(trigger.dataset.open);const image=event.target.closest('[data-image]');if(image)openImage(image.dataset.image,image.dataset.caption);});
document.getElementById('close-viewer').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});
viewer.addEventListener('close',()=>{player.querySelectorAll('video').forEach(video=>video.pause());player.replaceChildren();extra.replaceChildren();document.body.classList.remove('modal-open');});
document.getElementById('year').textContent=new Date().getFullYear();

// Enhance progressively: content stays readable if animations are unavailable.
if(motionAllowed&&'IntersectionObserver' in window){
 const reveals=document.querySelectorAll('.welcome-grid,.work-heading,.project,.process-grid,.storyboard-strip,.profile-title,.history,.contact,.film-heading');
 const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');revealObserver.unobserve(entry.target);}});},{threshold:.08});
 reveals.forEach((element,index)=>{element.classList.add('reveal');element.style.setProperty('--reveal-delay',(element.classList.contains('project')?(index%3)*60:0)+'ms');revealObserver.observe(element);});
 document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.project:not([hidden])').forEach((card,index)=>{card.classList.add('in-view');card.animate([{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'translateY(0)'}],{duration:450,delay:index*25,fill:'backwards',easing:'cubic-bezier(.2,.7,.2,1)'});});}));
 const heroElement=document.querySelector('.cinema-hero');let animationFrame;
 heroElement.addEventListener('pointermove',event=>{if(event.pointerType!=='mouse')return;cancelAnimationFrame(animationFrame);animationFrame=requestAnimationFrame(()=>{const r=heroElement.getBoundingClientRect();heroElement.style.setProperty('--pointer-x',((event.clientX-r.left)/r.width-.5)*12+'px');heroElement.style.setProperty('--pointer-y',((event.clientY-r.top)/r.height-.5)*10+'px');});});
 heroElement.addEventListener('pointerleave',()=>{heroElement.style.setProperty('--pointer-x','0px');heroElement.style.setProperty('--pointer-y','0px');});
 document.querySelectorAll('.project-button').forEach(button=>{button.addEventListener('pointerenter',()=>{const video=button.querySelector('video');if(video)video.play().catch(()=>{});});button.addEventListener('pointerleave',()=>button.querySelector('video')?.pause());});
}

function pauseFeaturedFilm(){const frame=document.querySelector('#featured-player iframe');if(frame)frame.contentWindow.postMessage(JSON.stringify({event:'command',func:'pauseVideo',args:[]}),'https://www.youtube.com');}
document.getElementById('play-featured').addEventListener('click',()=>{const frame=document.createElement('iframe');frame.src=embedUrl('MOhzRfRnozg',true);frame.title='우아하게, 발칙하게 — 달콤한 착각 EP1';frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';document.getElementById('featured-player').replaceChildren(frame);});
