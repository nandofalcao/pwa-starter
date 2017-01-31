(global => {
  'use strict';

  // Carregar biblioteca dosw-tookbox
  importScripts('./js/lib/sw-toolbox/sw-toolbox.js');

  // Ativar modo debug via console
  global.toolbox.options.debug = false;

  // Rota de cache GET para pasta "images". Verbos disponíveis: POST, GET, PUT, DELETE, HEAD
  // global.toolbox.cacheFirst = handler para dar preferência ao cache, se não houver, busca arquivo remoto
  toolbox.router.get('/images/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'images', // nome do cache
      maxEntries: 10, // a partir da 11a entrada, a versão menos utilizada será descartada
      maxAgeSeconds: 86400 // cache por um dia em segundos
    }
  });

  // Rota de cache GET para qualquer request através de "cdnjs.com"
  toolbox.router.get('/(.*)', global.toolbox.cacheFirst, {
    cache: {
      name: 'cdnjs',
      maxEntries: 10,
      maxAgeSeconds: 86400
    },
    origin: /\.cloudflare\.com$/, // domínio da rota
    networkTimeoutSeconds: 2 // se demorar mais de dois segundos será utilizado o arquivo em cache
  });

  // Pré cache acionado quando o service worker é instalado. Array de arquivos locais ou remotos
  global.toolbox.precache([ './second.html','./images/pwa-fast.png','./images/game.png']);

  // Padrão: Todos os requests que não corresponderem com as estratégias acima será utilizado "toolbox.networkFirst"
  // Ideal para requisições de API onde precisamos obter conteúdo atualizado
  global.toolbox.router.default = global.toolbox.networkFirst;

  // Boilerplate para que o service worker seja ativado
  global.addEventListener('install', event => event.waitUntil(global.skipWaiting()));
  global.addEventListener('activate', event => event.waitUntil(global.clients.claim()));

})(self);