(function () {
  'use strict';
  var doc = document;
  var ES = {
    'nav.tools':'Herramientas','nav.connect':'Conectar','nav.demos':'Demos','nav.faq':'FAQ','nav.community':'Comunidad','nav.cta':'Conectar',
    'copy':'Copiar','copied':'¡Copiado!',
    'hero.eyebrow':'Rabbit · The Rabbit Hole — gratis',
    'hero.h1':'Baja por la madriguera.<br><em>Vuelve con evidencia.</em>',
    'hero.lead':'Datos macro, métodos cuantitativos, informes de empresas públicas y papers académicos: <strong>54 herramientas de investigación</strong> para tu asistente de IA, detrás de <strong>una sola URL</strong>. Alojado por nosotros. Nada que instalar. Gratis.',
    'hero.fine':'Funciona en cualquier cliente MCP · acceso con OAuth · el endpoint puede pasar a un dominio de Rabbit; esta página siempre muestra el actual.',
    'hero.cta1':'Conecta en 30 segundos','hero.cta2':'Ver las 54 herramientas','hero.term':'sesión ilustrativa',
    'stats.tools':'herramientas en un endpoint','stats.fam':'familias de herramientas','stats.url':'URL para conectar','stats.free':'para usar — sin plan ni tarjeta',
    'why.h2':'Cuatro túneles. Una madriguera.',
    'why.sub':'Las herramientas de investigación vivían en servidores separados, con accesos y configuraciones distintas. Rabbit las reúne en un único endpoint alojado, para que tu asistente pase de una curva del Tesoro a un 10-K y a una auditoría de backtest sin reconfigurar nada.',
    'why.c1h':'Una conexión','why.c1p':'Añade una URL. Las 54 herramientas aparecen juntas, con prefijo por familia para que el asistente elija bien.',
    'why.c2h':'Alojado, nada que instalar','why.c2p':'Sin paquetes, sin Docker, sin claves que gestionar. Nosotros ejecutamos los servidores; tú, tu asistente.',
    'why.c3h':'Evidencia, no consejos','why.c3p':'Los resultados citan fuentes oficiales y señalan datos que faltan. Rabbit apoya la investigación; nunca promete rentabilidad.',
    'why.c4h':'Tus datos son tuyos','why.c4p':'Los cálculos y gráficos se construyen en tu propio asistente. Rabbit no ejecuta tu código ni toca tu bróker.',
    'tools.h2':'54 herramientas, cuatro familias','tools.sub':'Todas son herramientas de investigación de solo lectura. Los números son el catálogo real del endpoint unificado.','tools.word':'herramientas',
    'f.macro.h':'Contexto de mercado y gráficos','f.macro.p':'Recetas de fuentes, cálculos y especificaciones de gráficos para el panorama macro, más cinco herramientas de datos oficiales de FRED, EIA y CFTC.',
    'f.macro.native':'herramientas nativas del workbench','f.macro.data':'herramientas de datos oficiales','f.macro.data.h':'Datos oficiales','f.macro.cov':'El workbench cubre',
    'f.qf.h':'Métodos cuantitativos y backtests','f.qf.p':'Un copiloto de metodología: convierte una idea en un plan falsable, diseña un backtest point-in-time y audítalo en busca de fugas, errores de timing y costes omitidos.',
    't.qf1':'Busca en las notas revisadas de finanzas cuantitativas','t.qf2':'Abre una nota con su fuente','t.qf3':'Hipótesis → protocolo sin sesgos','t.qf4':'Universo, señal, tamaño y riesgo explícitos','t.qf5':'Arquitectura point-in-time y tests','t.qf6':'Revisión de fugas, timing y costes','t.qf7':'Walk-forward, holdout, embargo','t.qf8':'Lee resultados sin humo','t.qf9':'Contrato y plan de tests para tu stack','t.qf10':'Capacidades y límites',
    'f.pr.h':'Hechos oficiales de empresas públicas','f.pr.p':'Hechos estructurados e informes de fuentes públicas oficiales (SEC, BLS), con referencias de evidencia estables y avisos honestos de cobertura.',
    't.pr1':'Qué se cubre, con ejemplos','t.pr2':'Por nombre, ticker o ID','t.pr3':'Tendencias, márgenes, caja','t.pr4':'Paquete de evidencia en una llamada','t.pr5':'Informes anuales, trimestrales y actuales','t.pr6':'Texto y tablas con referencias','t.pr7':'Búsqueda literal dentro de un informe','t.pr8':'Qué se añadió o se quitó','t.pr9':'Briefing diario / semanal de todo el mercado','t.pr10':'Briefing para hasta diez empresas',
    'f.ed.h':'Papers, ordenados S/A/B/C','f.ed.p':'Descubrimiento de papers para investigación de trading: qué merece la pena leer, por prioridad, con enlaces directos a arXiv.',
    't.ed1':'1–30 papers para tu proyecto','t.ed2':'Búsqueda por tema con tiers','t.ed3':'Qué significan S, A, B y C','t.ed4':'Lee un paper desde su ID de arXiv','t.ed5':'Papers de 1–10 investigadores','t.ed6':'Quién trabaja en este tema',
    'dc.h':'Bot Research Tierlist','dc.p':'El mismo motor de ranking de papers de Edge, dentro de Discord. Ejecuta <code>/papers</code>, describe tu proyecto y recibe una lista de lectura S/A/B/C privada con enlaces directos a arXiv. Convive con las 54 herramientas, no está dentro del endpoint.',
    'con.h2':'Conecta en tres pasos','con.sub':'Rabbit habla MCP sobre Streamable HTTP. Si tu asistente admite servidores MCP remotos, funciona.',
    'con.s1h':'Añade la URL','con.s1p':'Pega el endpoint en los ajustes MCP de tu cliente, o usa uno de los snippets.',
    'con.s2h':'Inicia sesión una vez','con.s2p':'Tu cliente abre una ventana OAuth. Apruébala y listo: sin claves API que copiar.',
    'con.s3h':'Pregunta algo','con.s3p':'Prueba “¿Cómo está la curva de tipos frente a hace un año?” y mira las llamadas a herramientas.',
    'con.any':'Cualquier cliente MCP','con.cursor':'Añade a','con.cursor2':'(o al del proyecto',
    'con.cc':'Ejecuta una vez en tu terminal:','con.cc2':'Luego ejecuta <code>/mcp</code> dentro de Claude Code y elige “Authenticate” para rabbit.',
    'con.cd':'En Ajustes → Conectores, elige “Añadir conector personalizado” e introduce:','con.cd2':'Los nombres de menú varían según plan y versión. Cualquier cliente con MCP remoto sigue el mismo patrón.',
    'con.gen':'Apunta cualquier cliente MCP Streamable-HTTP al endpoint. Para explorar primero, usa MCP Inspector:',
    'con.noteh':'Aviso: el endpoint puede cambiar.','con.note':'La URL de arriba es el endpoint de producción actual. Planeamos mover Rabbit a su propio dominio; cuando pase, esta página mostrará la nueva URL y la antigua seguirá funcionando durante una transición.',
    'demo.h2':'Cómo se ve en la práctica','demo.sub':'Cuatro formas de bajar por la madriguera. Los nombres de herramientas son reales; las sesiones son ilustrativas.',
    'demo.t0':'Chequeo de régimen','demo.t1':'Auditoría de backtest','demo.t2':'Diff de informes','demo.t3':'Lista de lectura',
    'demo.a0':'“¿Se está agotando el viento de cola de liquidez y cómo está la curva frente a hace un año?”','demo.c00':'Liquidez del balance de la Fed con series oficiales de FRED','demo.c01':'Hoy vs hace 1 mes vs hace 1 año','demo.c02':'Una receta de gráfico con fuentes que tu asistente dibuja','demo.o0':'Recibes una lectura breve y con fuentes del régimen, con el gráfico construido en tu sesión.',
    'demo.a1':'“Este es mi backtest de momentum. ¿Me está mintiendo?”','demo.c10':'Revisión estática de look-ahead, fugas y errores de timing','demo.c11':'Plan de walk-forward, purga y embargo','demo.c12':'Lee tus números y lista la evidencia que falta','demo.o1':'Recibes hallazgos y lagunas de evidencia, nunca una promesa de rentabilidad.',
    'demo.a2':'“¿Qué cambió entre los dos últimos informes anuales de esta empresa?”','demo.c20':'Identifica la empresa','demo.c21':'Encuentra los dos informes','demo.c22':'Altas y bajas en negocio, resultados y perspectivas','demo.o2':'Recibes un diff con referencias de evidencia al informe original.',
    'demo.a3':'“Estoy montando una estrategia de pairs trading. ¿Qué leo primero?”','demo.c30':'Ordena los papers relevantes en tiers S/A/B/C','demo.c31':'Explica qué significa cada tier y sus límites','demo.c32':'Lee la mejor opción desde su ID de arXiv','demo.o3':'Recibes una lista de lectura priorizada con enlaces directos y un resumen del primer paper.',
    'pr.h2':'Gratis, alojado y honesto',
    'pr.c1h':'Gratis','pr.c1p':'Rabbit es gratis. Sin planes de pago en esta página, sin tarjeta, sin cuenta atrás de prueba.',
    'pr.c2h':'Alojado, código cerrado','pr.c2p':'Las herramientas corren en nuestros servidores y el código no se publica. Nunca instalas ni mantienes nada.',
    'pr.c3h':'Límites honestos','pr.c3p':'Los backtests son simulaciones, la cobertura puede ser incompleta y nada de esto es asesoramiento financiero. Rabbit también lo dice en sus resultados.',
    'faq.h2':'Preguntas',
    'faq.q1':'¿Es Rabbit realmente gratis?','faq.a1':'Sí, Rabbit es gratis. Inicias sesión con OAuth para distinguir usuarios y proteger el servicio de abusos, pero no hay tarjeta ni plan que elegir.',
    'faq.q2':'¿Es de código abierto?','faq.a2':'No. Rabbit es un servicio alojado y gratuito, con código cerrado. El repositorio de esta web solo contiene las páginas estáticas que estás viendo; nada de código de servidor.',
    'faq.q3':'¿Por qué alojado y no un paquete que instalo?','faq.a3':'Porque las herramientas dependen de datos oficiales en vivo y de conocimiento curado que sería engorroso ejecutar por tu cuenta. Una URL significa sin dependencias, sin actualizaciones que perseguir y el mismo catálogo para todos.',
    'faq.q4':'¿Y mi privacidad y mis datos?','faq.a4':'Rabbit no pide credenciales de bróker, no envía órdenes y no ejecuta tu código. Los gráficos y cálculos se construyen en tu propio asistente. Como cualquier servicio alojado, maneja lo operativo básico (quién está conectado, qué herramienta se ejecutó, cuánto tardó). No pegues secretos en los prompts.',
    'faq.q5':'¿Da consejos financieros u opera por mí?','faq.a5':'No. Rabbit es una herramienta de investigación: muestra datos, métodos y evidencia. Las decisiones —y el riesgo— son tuyos.',
    'faq.q6':'¿De dónde salen los datos?','faq.a6':'Fuentes oficiales y primarias: FRED, EIA y CFTC para series macro; SEC y BLS para hechos de empresas públicas y empleo; arXiv para papers. La atribución y los avisos de cobertura se conservan en los resultados.',
    'faq.q7':'¿Qué asistentes funcionan?','faq.a7':'Cualquiera que admita MCP remoto sobre Streamable HTTP con OAuth: Cursor, Claude Code, la app y web de Claude y otros clientes MCP.',
    'faq.q8':'¿Cambiará la URL?','faq.a8':'Posiblemente. Queremos pasar a un dominio propio de Rabbit. Este sitio siempre listará el endpoint actual y mantendremos el antiguo durante la transición.',
    'com.h2':'¿Has encontrado una madriguera que merece la pena?','com.sub':'Cuéntanos qué añadir, reporta un fallo o enséñanos lo que has construido. Lo leemos todo.','com.soon':'invitación próximamente','com.soon2':'dirección próximamente',
    'foot.legal':'Rabbit ofrece herramientas de investigación, no asesoramiento de inversión. Los backtests son simulaciones, no previsiones. Los datos provienen de fuentes públicas oficiales y pueden tener retraso o estar incompletos. Rabbit es independiente y no está afiliado a las fuentes ni a los clientes citados en esta página.'
  };

  var nodes = [].slice.call(doc.querySelectorAll('[data-i18n]'));
  nodes.forEach(function (el) { el.dataset.en = el.innerHTML; });
  var langBtn = doc.getElementById('lang');
  var lang = 'en';
  function apply(l) {
    lang = l;
    doc.documentElement.lang = l;
    nodes.forEach(function (el) {
      var k = el.dataset.i18n;
      el.innerHTML = (l === 'es' && ES[k] !== undefined) ? ES[k] : el.dataset.en;
    });
    langBtn.textContent = l === 'es' ? 'EN' : 'ES';
    try { localStorage.setItem('rabbit-lang', l); } catch (e) {}
  }
  var saved = null; try { saved = localStorage.getItem('rabbit-lang'); } catch (e) {}
  var initial = saved || ((navigator.language || '').toLowerCase().indexOf('es') === 0 ? 'es' : 'en');
  if (initial === 'es') apply('es');
  langBtn.addEventListener('click', function () { apply(lang === 'en' ? 'es' : 'en'); });

  // copy buttons
  doc.addEventListener('click', function (e) {
    var b = e.target.closest('.copy'); if (!b) return;
    var text = b.dataset.copy;
    if (!text && b.dataset.copyTarget) text = doc.querySelector(b.dataset.copyTarget).innerText;
    var label = b.textContent;
    function done() {
      b.classList.add('done'); b.textContent = lang === 'es' ? ES.copied : '✓';
      setTimeout(function () { b.classList.remove('done'); b.textContent = lang === 'es' ? ES.copy : (b.dataset.en || 'Copy'); }, 1400);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, done); else done();
  });

  // tabs (connect)
  [].forEach.call(doc.querySelectorAll('[data-tabs]'), function (root) {
    var tabs = root.querySelectorAll('[data-tab]'), panels = root.querySelectorAll('[data-panel]');
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        tabs.forEach(function (x) { x.setAttribute('aria-selected', x === t ? 'true' : 'false'); });
        panels.forEach(function (p) { p.hidden = p.dataset.panel !== t.dataset.tab; });
      });
    });
  });

  // demos
  [].forEach.call(doc.querySelectorAll('[data-demo]'), function (root) {
    var tabs = root.querySelectorAll('[data-d]'), panes = root.querySelectorAll('[data-p]');
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        tabs.forEach(function (x) { x.setAttribute('aria-selected', x === t ? 'true' : 'false'); });
        panes.forEach(function (p) { p.hidden = p.dataset.p !== t.dataset.d; });
      });
    });
  });

  // placeholders must not navigate
  [].forEach.call(doc.querySelectorAll('[aria-disabled="true"]'), function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); });
  });

  // reveal on scroll
  var rev = [].slice.call(doc.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    rev.forEach(function (el) { io.observe(el); });
  } else { rev.forEach(function (el) { el.classList.add('in'); }); }

  var y = doc.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
