async function fetchCall(idP,log){
    const store = tienda();
    let finalArray=[];
    let tempArr=[];
    let ordered=[];
    const items=['INTERNET','INTERNETm2','NORMAL','M2','CMR','CMRm2','AB','ABm2','EVENT','EVENTm2','bundlePrice','PriceFormat','backEndCategory','bvRating','bvReview','currency','name','webCategory','webCategoryName','homeDelivery','pickupInStore','brand','productId','combo'];
    const url = searchUrl+"?"+searchUrlPriceZoneVar+"="+store+"&"+searchUrlProductVar+"="+ idP.join('-');
    const response = await fetch(url);
    if (!response.ok) {
          throw new Error(`error fetchCall: ${response.status}`);
      }
    let data = await response.json();
    
    let dataMap = data.productDetailsJson.reduce((a,e)=>{
      a[e.productId]=e;
      return a;
    },[]);
    
    idP.forEach(ord=>{
      ordered.push(dataMap[ord])
    });
    
    ordered.forEach(e=>{
      tempArr=[];
      tempArr['status']=e.status;
      if(e.status=='OK'){
      items.forEach(i=>{
        tempArr[i]=e[i];
      });
      finalArray.push(tempArr);
      } 
    });
    return finalArray;
  }
  
  function muestraProd(prod,variables) {
    const arr = prod;
    for (i = 0; i < arr.length; i++) {
      const product = new dynamicProd(arr[i], `data-recsku(arr[i].productId)`);
      pintaProd(product,variables);
    }
  }
  
  
  function dynamicProd(o, a) {
    this.objetive = a;
    this.status = o.status;
    this.marca = o.brand;
    this.titulo = o.name;
    this.sku = o.productId;
    this.combo = o.combo;
    this.homeDelivery = o.homeDelivery;
    this.pickupInStore = o.pickupInStore;
    this.unit = o.PriceFormat;
    this.star = o.bvRating;
    this.review = o.bvReview;
    this.moneda = o.currency;
  
    this.precios = new dynamicPrice(o.EVENTm2, o.EVENT, o.CMRm2, o.CMR, o.ABm2, o.AB, o.INTERNETm2, o.INTERNET, o.M2, o.NORMAL, o.bundlePrice);
  }
  
  function dynamicPrice (eventom2, evento, cmrm2, cmr, abm2, AB, internetm2, internet, m2, normal, bundlePrice) {
    this.eventom2 = formatPrice(eventom2, formatPriceDecimals);
    this.evento = formatPrice(evento, formatPriceDecimals);
    this.cmrm2 = formatPrice(cmrm2, formatPriceDecimals);
    this.cmr = formatPrice(cmr, formatPriceDecimals);
    this.abm2 = formatPrice(abm2, formatPriceDecimals);
    this.AB = formatPrice(AB, formatPriceDecimals);
    this.internetm2 = formatPrice(internetm2, formatPriceDecimals);
    this.internet = formatPrice(internet, formatPriceDecimals);
    this.m2 = formatPrice(m2, formatPriceDecimals);
    this.normal = formatPrice(normal, formatPriceDecimals);
    this.bundlePrice = formatPrice(bundlePrice, formatPriceDecimals);
  }
  
  function formatPrice(amount, decimals) {
    amount += ''; // por si pasan un numero en vez de un string
    amount = parseFloat(amount.replace(/[^0-9\.]/g, '')); // elimino cualquier cosa que no sea numero o punto
  
    decimals = decimals || 0; // por si la variable no fue fue pasada
  
    // si no es un numero o es igual a cero retorno el mismo cero
    if (isNaN(amount) || amount === 0) 
        return parseFloat(0).toFixed(decimals);
  
    // si es mayor o menor que cero retorno el valor formateado como numero
    amount = '' + amount.toFixed(decimals);
    let amount_parts = amount.split(','),
        regexp = /(\d+)(\d{3})/;
  
    while (regexp.test(amount_parts[0]))
        amount_parts[0] = amount_parts[0].replace(regexp, '$1' + '.' + '$2');
  
    return amount_parts.join(',');
  }
  
  function pintaProd(o,variables){
    if(variables.log) console.log("Pinta Prod:");
    if(variables.log) console.log(o);
    const elementsContainer = document.querySelector("#content-"+variables.dyVariationId);
    
    const i = initializePod(o,elementsContainer);
    
    dyPodImage(o,i.info,variables.scene7);
    dyPodBrand(o,i.info);
    dyPodName(o,i.info);
    dyPodStars(o,i.info);
    dyPodPrecios(o,i.info,variables);
    dyPodButton(o,i.btn);
  }
  
  /* Crea el HTML div del pod dentro de un <a> para hacerlo clickeabel. Devuelve el DOMElement del div pod*/
  function initializePod(o,cont){
    const pod = document.createElement('div');
    pod.classList.add('dy-pod');
    pod.setAttribute('dy-sku',o.sku);
    
    const info = document.createElement('div');
    info.classList.add('dy-info-container'); 
    
    const btn = document.createElement('div');
    btn.classList.add('dy-btn-container');
    
    const a = document.createElement('a');
    a.classList.add('dy-pod-container');
    a.setAttribute('href',productUrl+ o.sku);
    
    cont.appendChild(a);
    a.appendChild(pod);
    pod.appendChild(info);
    pod.appendChild(btn);
    
    return {a: a, pod: pod, info: info, btn: btn};
  }
  
  function dyPodImage(o,pod,varScene7){
    const img = document.createElement('img');
    img.classList.add('dy-pod-img');
    img.setAttribute('src',scene7Url+ o.sku+ "?"+varScene7);
    img.setAttribute('alt',o.titulo+' '+o.marca);
    img.setAttribute('title',o.titulo+' '+o.marca);
    
    pod.appendChild(img);
  }
  
  function dyPodBrand(o,pod){
    const brand = document.createElement('div');
    brand.classList.add('dy-pod-brand');
    brand.innerText=o.marca?o.marca:'';
    pod.appendChild(brand);
  }
  
  function dyPodName(o,pod){
    const name = document.createElement('div');
    name.classList.add('dy-pod-name');
    name.innerText=o.titulo?o.titulo:'';
    pod.appendChild(name);
  }
  
  function dyPodStars(o,pod){
    
    const starPercentage = (parseFloat(o.star||0) / 5) * 100;
    const starPercentageRounded = (Math.round(starPercentage / 10) * 10) + `%`;
  
    const cont = document.createElement('div');
    cont.classList.add('dy-pod-stars-cont');
    
    const starsOut = document.createElement('div');
    starsOut.classList.add('dy-pod-stars-outer');
    
    const starsIn = document.createElement('div');
    starsIn.classList.add('dy-pod-stars-inner');
    starsIn.style.width = starPercentageRounded;
    
    const reviewNumber = document.createElement('span');
    reviewNumber.classList.add('dy-pod-stars-review-number');
    reviewNumber.innerText = '('+(o.review?o.review:'0')+')';
    
    starsOut.appendChild(starsIn);
    cont.appendChild(starsOut);
    cont.appendChild(reviewNumber);
    
    pod.appendChild(cont);
  }
  
  function dyPodButton(o,pod){
    const btn = document.createElement('button');
    btn.innerHTML= 'Ver Producto';
    btn.classList.add('dy-pod-btn');
    pod.appendChild(btn);
  }
  
  function getAbIcon(){
    return `<svg width="76" height="17" data-testid="ab-icon"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M5.916 0L0 5.706V16h18V0z"></path><path fill="#DC0022" d="M19 0v17h51.375L76 11.22V0zM5.828 0L0 5.998V17h18V0H5.828zM.72 6.304L6.127.74H17.28v15.52H.72V6.304z"></path><path d="M25.66 11.36a.353.353 0 01-.251.44c-.186.056-.373-.056-.427-.249 0 0-.142-.553-.35-1.32h-2.124c-.208.767-.351 1.32-.351 1.32a.347.347 0 01-.437.249.356.356 0 01-.242-.44l1.752-6.544a.363.363 0 01.34-.27c.153 0 .295.112.339.27l1.752 6.543zm-1.225-1.85c-.296-1.118-.646-2.426-.865-3.25-.22.824-.57 2.132-.866 3.25h1.73zM28.255 11.81c-.92 0-1.664-.766-1.664-1.714v-5.19c0-.202.153-.36.35-.36.198 0 .35.158.35.36v5.19c0 .553.427.992.964.992a.98.98 0 00.964-.992v-5.19c0-.202.153-.36.35-.36.198 0 .35.158.35.36v5.19c0 .948-.744 1.714-1.664 1.714m-.81-8.133a.356.356 0 01.033-.507l1.095-1.015c.142-.136.36-.113.493.034a.366.366 0 01-.033.507L27.938 3.71a.332.332 0 01-.493-.034M34.419 11.608s-1.588-3.385-2.397-5.122v4.964c0 .202-.154.36-.35.36a.351.351 0 01-.351-.36V4.907c0-.17.109-.316.274-.35a.363.363 0 01.393.192s1.577 3.384 2.398 5.121V4.907a.35.35 0 01.35-.361.35.35 0 01.35.36v6.544c0 .169-.109.316-.273.35-.153.044-.318-.045-.394-.192M38.677 11.45V4.907a.35.35 0 01.275-.35.362.362 0 01.393.192s1.007 2.211 1.435 3.147l1.434-3.147a.35.35 0 01.394-.192.36.36 0 01.274.35v6.543c0 .203-.165.36-.351.36a.351.351 0 01-.35-.36V6.52c-.515 1.117-1.085 2.38-1.085 2.38a.362.362 0 01-.316.203.34.34 0 01-.318-.203s-.58-1.263-1.084-2.38v4.93c0 .203-.164.36-.35.36a.351.351 0 01-.35-.36M48.082 11.36a.353.353 0 01-.252.44c-.186.056-.373-.056-.427-.249 0 0-.142-.553-.35-1.32h-2.125c-.207.767-.35 1.32-.35 1.32a.348.348 0 01-.437.249.355.355 0 01-.241-.44l1.751-6.544a.363.363 0 01.34-.27c.152 0 .295.112.339.27l1.752 6.543zM46.8 2.187a.356.356 0 01-.033.508l-1.095 1.015a.332.332 0 01-.493-.034.356.356 0 01.033-.507l1.095-1.015c.142-.136.361-.114.493.033zm.054 7.321c-.295-1.117-.646-2.425-.864-3.249-.22.824-.57 2.132-.865 3.25h1.73zM51.388 10.118a1.058 1.058 0 00-.285-.811l-1.752-1.851a1.72 1.72 0 01-.46-1.319 1.7 1.7 0 01.658-1.241 1.617 1.617 0 011.335-.316c.46.101.865.395 1.106.823a.364.364 0 01-.131.497.337.337 0 01-.471-.136.958.958 0 00-1.423-.293.987.987 0 00-.373.71c-.02.293.077.565.263.767l1.751 1.862c.34.36.515.857.483 1.365-.044.507-.285.97-.679 1.275a1.69 1.69 0 01-1.38.327 1.738 1.738 0 01-1.15-.846.383.383 0 01.132-.497.343.343 0 01.482.136.998.998 0 001.489.304c.24-.18.383-.45.405-.756M58.328 8.065c.34.35.559.824.559 1.354v.632c0 1.05-.832 1.895-1.84 1.895h-1.313a.527.527 0 01-.526-.542V4.952c0-.294.23-.541.526-.541h1.313c1.008 0 1.84.846 1.84 1.895v.406c0 .53-.219 1.015-.559 1.353zm-1.28-.54a.797.797 0 00.787-.813v-.406c0-.451-.35-.812-.788-.812h-.788v2.03h.788zm0 1.082h-.789v2.256h.788c.438 0 .788-.36.788-.812v-.632c0-.45-.35-.812-.788-.812zM63.944 11.303a.544.544 0 01-.36.666.524.524 0 01-.647-.373s-.131-.485-.317-1.184h-1.86c-.187.7-.319 1.184-.319 1.184a.524.524 0 01-.645.373.545.545 0 01-.362-.666l1.751-6.543a.51.51 0 01.504-.395.51.51 0 01.504.395l1.751 6.543zm-1.62-1.974c-.208-.779-.438-1.647-.635-2.38-.197.733-.427 1.601-.634 2.38h1.27zM66.254 11.743c-.57.327-1.28.327-1.838 0a.56.56 0 01-.198-.744c.143-.26.471-.35.723-.204a.76.76 0 00.788 0 .801.801 0 00.394-.699v-5.19c0-.292.23-.54.526-.54.284 0 .525.248.525.54v5.19a1.94 1.94 0 01-.92 1.647M68.138 10.096V6.26c0-1.049.82-1.895 1.839-1.895 1.018 0 1.839.846 1.839 1.895v3.836c0 1.05-.821 1.895-1.84 1.895-1.017 0-1.838-.846-1.838-1.895m1.05-3.836v3.836c0 .451.35.813.789.813a.798.798 0 00.788-.813V6.26c0-.45-.351-.812-.788-.812a.798.798 0 00-.789.812" fill="#FFF"></path><path d="M8.464 13.975a.258.258 0 01-.182-.076L3.316 8.991a.275.275 0 01-.05-.322.26.26 0 01.288-.138l1.682.377.24-5.804a.274.274 0 01.103-.202.258.258 0 01.216-.05l9.274 2.07a.267.267 0 01.175.135c.037.07.041.15.014.225l-2.044 5.508 1.756.398a.27.27 0 01.206.25.27.27 0 01-.179.271l-6.45 2.251a.261.261 0 01-.083.015" fill="#DC0022"></path><path d="M10.759 10.223c-.092.527-.39.984-.845 1.259a1.7 1.7 0 01-.543.207l-.049.277a.632.632 0 01-.726.521.649.649 0 01-.506-.749l.048-.277a1.698 1.698 0 01-.734-.924.644.644 0 01.372-.823.62.62 0 01.807.385c.078.24.246.301.371.324a.437.437 0 00.33-.062.485.485 0 00.238-.345.54.54 0 00-.106-.42L8.38 8.362a1.808 1.808 0 01-.387-1.434 1.73 1.73 0 01.819-1.221c.166-.102.338-.173.523-.211l.048-.278a.633.633 0 01.728-.521.648.648 0 01.505.748l-.048.279c.321.213.575.525.708.899.11.338-.053.707-.38.82a.608.608 0 01-.799-.383c-.083-.21-.22-.276-.346-.3a.412.412 0 00-.307.057.465.465 0 00-.217.328.453.453 0 00.104.378l1.027 1.235c.346.412.483.939.402 1.466" fill="#FFF"></path></g></svg>`;
  }  
  
  function getInternetIcon(){
    return `<svg width="76" height="17" xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 102 20"><defs><style>.cls-1{fill:#d73537;}.cls-2{fill:none;stroke:#d73537;stroke-miterlimit:10;stroke-width:0.75px;}</style></defs><path class="cls-1" d="M6.75,10.9v2.92h-1V6H8a4.43,4.43,0,0,1,1.29.17,2.55,2.55,0,0,1,.91.49,2,2,0,0,1,.54.76,2.87,2.87,0,0,1,.17,1,2.51,2.51,0,0,1-.19,1,2,2,0,0,1-.56.78,2.84,2.84,0,0,1-.91.51A4,4,0,0,1,8,10.9Zm0-.84H8a2.45,2.45,0,0,0,.8-.12,1.51,1.51,0,0,0,.58-.34,1.32,1.32,0,0,0,.36-.51,1.76,1.76,0,0,0,.11-.66A1.52,1.52,0,0,0,9.4,7.26,2,2,0,0,0,8,6.84H6.75Z"/><path class="cls-1" d="M13.23,10.56v3.26H12.18V6h2.21a4.84,4.84,0,0,1,1.28.15,2.38,2.38,0,0,1,.89.43,1.67,1.67,0,0,1,.52.69,2.28,2.28,0,0,1,.17.89,2.2,2.2,0,0,1-.13.78,2,2,0,0,1-.38.64,2.22,2.22,0,0,1-.6.49,2.9,2.9,0,0,1-.81.31,1.08,1.08,0,0,1,.35.33L18,13.82H17a.46.46,0,0,1-.43-.22l-2-2.79a.52.52,0,0,0-.2-.19.67.67,0,0,0-.32-.06Zm0-.77h1.11a2.58,2.58,0,0,0,.82-.11,1.48,1.48,0,0,0,.58-.32,1.22,1.22,0,0,0,.36-.48,1.61,1.61,0,0,0,.12-.63,1.23,1.23,0,0,0-.46-1,2.2,2.2,0,0,0-1.37-.36H13.23Z"/><path class="cls-1" d="M23.73,6v.86H20v2.6h3v.82H20V13h3.75v.86H18.92V6Z"/><path class="cls-1" d="M30.58,12.21a.21.21,0,0,1,.16.07l.41.45A3.44,3.44,0,0,1,30,13.6a4.12,4.12,0,0,1-1.65.31,4,4,0,0,1-1.53-.29,3.39,3.39,0,0,1-1.17-.82,3.47,3.47,0,0,1-.75-1.26,4.67,4.67,0,0,1-.27-1.62A4.45,4.45,0,0,1,24.9,8.3,3.89,3.89,0,0,1,25.71,7,3.68,3.68,0,0,1,27,6.21a4.29,4.29,0,0,1,1.59-.29A3.74,3.74,0,0,1,30,6.19a3.88,3.88,0,0,1,1.11.73l-.35.48a.24.24,0,0,1-.08.09.3.3,0,0,1-.15,0,.29.29,0,0,1-.15-.06l-.18-.12L30,7.18A1.92,1.92,0,0,0,29.62,7a3.44,3.44,0,0,0-.47-.13,3.67,3.67,0,0,0-.61,0,3.06,3.06,0,0,0-1.15.21,2.59,2.59,0,0,0-.9.62,2.76,2.76,0,0,0-.58,1,3.7,3.7,0,0,0-.21,1.28,3.77,3.77,0,0,0,.21,1.3,3,3,0,0,0,.57,1,2.47,2.47,0,0,0,.86.6,2.69,2.69,0,0,0,1.07.21A5.54,5.54,0,0,0,29,13a2.64,2.64,0,0,0,.52-.13,2.26,2.26,0,0,0,.44-.22,5.15,5.15,0,0,0,.41-.32A.24.24,0,0,1,30.58,12.21Z"/><path class="cls-1" d="M33.62,13.82H32.56V6h1.06Z"/><path class="cls-1" d="M42.79,9.92a4.65,4.65,0,0,1-.27,1.61,3.7,3.7,0,0,1-.79,1.26,3.45,3.45,0,0,1-1.22.82,4.39,4.39,0,0,1-3.14,0,3.41,3.41,0,0,1-1.21-.82,3.7,3.7,0,0,1-.79-1.26,4.77,4.77,0,0,1,0-3.22A3.84,3.84,0,0,1,36.16,7a3.41,3.41,0,0,1,1.21-.82,4.26,4.26,0,0,1,3.14,0A3.45,3.45,0,0,1,41.73,7a3.84,3.84,0,0,1,.79,1.27A4.61,4.61,0,0,1,42.79,9.92Zm-1.08,0a4,4,0,0,0-.2-1.29,2.62,2.62,0,0,0-.55-1,2.4,2.4,0,0,0-.88-.61,3.2,3.2,0,0,0-2.28,0,2.45,2.45,0,0,0-.87.61,2.64,2.64,0,0,0-.56,1,4.26,4.26,0,0,0,0,2.58,2.67,2.67,0,0,0,.56,1,2.45,2.45,0,0,0,.87.61,3.2,3.2,0,0,0,2.28,0,2.4,2.4,0,0,0,.88-.61,2.66,2.66,0,0,0,.55-1A4,4,0,0,0,41.71,9.92Z"/><path class="cls-1" d="M47.71,13.82H45.86V5.88h1.85Z"/><path class="cls-1" d="M50.18,5.89l.15,0,.12.09.14.14,3.77,4.77,0-.44c0-.15,0-.28,0-.41V5.88h1.62v7.94H55a.8.8,0,0,1-.36-.07.75.75,0,0,1-.28-.24L50.6,8.78c0,.14,0,.28,0,.41s0,.26,0,.37v4.26H49V5.88h1.17Z"/><path class="cls-1" d="M62.84,5.88V7.34H60.61v6.48H58.77V7.34H56.53V5.88Z"/><path class="cls-1" d="M68.54,5.88V7.3H65.28V9.15h2.5v1.36h-2.5V12.4h3.26v1.42H63.43V5.88Z"/><path class="cls-1" d="M71.26,10.88v2.94H69.41V5.88H72a5.27,5.27,0,0,1,1.47.18,2.87,2.87,0,0,1,1,.49A2,2,0,0,1,75,7.3a2.56,2.56,0,0,1,.17.93,2.48,2.48,0,0,1-.1.73,2.23,2.23,0,0,1-.31.64,2.46,2.46,0,0,1-.5.52,2.85,2.85,0,0,1-.69.38,1.59,1.59,0,0,1,.35.22,1.34,1.34,0,0,1,.28.34l1.69,2.76H74.24a.7.7,0,0,1-.66-.35l-1.32-2.3a.5.5,0,0,0-.21-.22.56.56,0,0,0-.32-.07Zm0-1.27H72a2,2,0,0,0,.64-.09,1.17,1.17,0,0,0,.43-.27,1,1,0,0,0,.25-.39,1.57,1.57,0,0,0,.07-.49,1,1,0,0,0-.34-.82,1.62,1.62,0,0,0-1-.29h-.74Z"/><path class="cls-1" d="M77.66,5.89l.15,0,.12.09.14.14,3.77,4.77a3.37,3.37,0,0,1,0-.44c0-.15,0-.28,0-.41V5.88h1.62v7.94h-1a.8.8,0,0,1-.36-.07.68.68,0,0,1-.28-.24L78.07,8.78l0,.41c0,.13,0,.26,0,.37v4.26H76.49V5.88h1.17Z"/><path class="cls-1" d="M89.66,5.88V7.3H86.41V9.15H88.9v1.36H86.41V12.4h3.25v1.42H84.55V5.88Z"/><path class="cls-1" d="M96.3,5.88V7.34H94.07v6.48H92.23V7.34H90V5.88Z"/><line class="cls-2" x1="5.62" y1="1.69" x2="96.38" y2="1.69"/><line class="cls-2" x1="5.62" y1="18.31" x2="96.38" y2="18.31"/></svg>`;
  }
  
  // precios
  
  function dyPodPrecios(o,pod,variables){
    if(variables.log) console.log('precios '+o.titulo);
    const iconos = {
      'cmr':dyCMRIcon(),
      'cmrm2':dyCMRIcon(),
      'internetm2':getInternetIcon(),
      'AB':getAbIcon(),
      'combo':'combo',
      'bundlePrice':'combo',
      'internet':getInternetIcon(),
      'evento':variables.labelEvento
    };
    const valores = dyPrecios(o,variables.log,variables.pais);
    
    const priceCont = document.createElement('div');
    priceCont.classList.add('dy-pod-promo-price-cont');
    priceCont.classList.add('dy-price');
    
    const priceIcon = document.createElement('div');
    priceIcon.classList.add('dy-pod-promo-price-icon');
    
    const priceValue = document.createElement('p');
    priceValue.classList.add('dy-pod-promo-price-value');
    
    priceCont.appendChild(priceIcon);
    priceCont.appendChild(priceValue);
    
    if(valores.texto == 'normal' || valores.texto == 'm2'){
      priceCont.classList.add('dy-price-'+valores.texto);
      priceValue.innerHTML = o.moneda.currencySymbol + '<span class="dy-price-val">' + valores.p1 + '</span><span class="dy-price-und">'+ o.unit.toUpperCase() + '</span>';
      pod.appendChild(priceCont);
    }else{
      priceCont.classList.add('dy-price-'+valores.texto);
      priceValue.innerHTML = o.moneda.currencySymbol + '<span class="dy-price-val">' + valores.p1 + '</span><span class="dy-price-und">'+ o.unit.toUpperCase() + '</span>';
      if(Object.keys(iconos).includes(valores.texto)){
            priceIcon.innerHTML=iconos[valores.texto];
      }
      pod.appendChild(priceCont);
      const normalPriceCont = document.createElement('div');
      normalPriceCont.classList.add('dy-pod-normal-price-cont');
      normalPriceCont.classList.add('dy-price');
      
      const normalPriceTag = document.createElement('p');
      normalPriceTag.classList.add('dy-pod-normal-price-normal-tag');
      normalPriceTag.innerText = 'Normal' + (country=='SOCL'?'':':');
      
      const normalPriceValue = document.createElement('p');
      normalPriceValue.classList.add('dy-pod-normal-price-value');
      
      normalPriceCont.classList.add('dy-price-normal');
        normalPriceValue.innerHTML = o.moneda.currencySymbol + '<span class="dy-price-val">' + valores.p2 + '</span><span class="dy-price-und">'+ o.unit.toUpperCase() + '</span>';
      
      normalPriceCont.appendChild(normalPriceTag);
      normalPriceCont.appendChild(normalPriceValue);
      pod.appendChild(normalPriceCont);
      
    }
  
  }
  
  
function dyPrecios(prod,log,pais){
    var CoM2 =false;
    var p1 = parseInt(prod.precios.normal.replaceAll('.',''));
    var p1Txt=prod.precios.normal;
    var m2Price = p1;
    var m2PriceTxt = p1Txt;
    var p2 = p1;
    var p2Txt = p1Txt;
    var txtKey = 'normal';
    var bundle = false;
    var bundlePrice = 0;
    var ki = {
      "eventom2": 4,
      "evento": 4,
      "cmrm2": 3,
      "cmr": 3,
      "abm2": 4,
      "AB": 4,
      "internetm2": 4,
      "internet": 4,
    }
    Object.entries(prod.precios).forEach(([key,val])=>{
      CoM2 = (pais =='SOCO' && key.slice(-2)=='m2');
      let val2=parseInt(val.replaceAll('.',''));
      if(key!=='normal' && key!=='m2' && val2 != 0 && !CoM2){
        if(key == "bundlePrice"){
          bundle = true;
          bundlePrice = val;
        }else{
          if(val2 === p1 && ki[txtKey]<ki[key]){
            txtKey=key;
          }
          if(val2<p1){
            p1=val2;
            p1Txt=val;
            txtKey=key;
          }
        }
        if(log)console.log(key,val2);
      }
      if(key=='m2' && !bundle){
            m2Price= val2;
            m2PriceTxt= val;
          }
    });
    
    
    if(bundle && prod.combo){
      if(txtKey=='normal')txtKey='bundlePrice';
      p2Txt=bundlePrice;
    }
    if(m2Price < p2 && txtKey.slice(-2)=='m2'){
      p2 = m2Price;
      p2Txt = m2PriceTxt;
      txtKey='m2';
    }
    if(p1==p2){
      p2=0;
    }
    if(log)console.log(txtKey,p1,p2);
    return {texto:txtKey,p1:p1Txt,p2:p2Txt}
  }

