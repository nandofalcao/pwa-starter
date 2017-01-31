# PWA Starter
Template utilitário para configuração inicial de projetos com suporte a PWA.

## HTML5 APIs
Pré configurado com suporte ao estado de conexão do dispositivo (online/offline) via [navigator.online](https://developer.mozilla.org/pt-BR/docs/Web/API/NavigatorOnLine/onLine).

Mais recursos: [What Web Can Do Today](https://whatwebcando.today)

## Service Worker Toolbox
Pré configurado para utilização da biblioteca [sw-toolbox](https://googlechrome.github.io/sw-toolbox/docs/master/tutorial-api)

## Fallback
Pré configurado com suporte Safari iOS e MacOS via appcache manifest para estratégia de cache.

Limites: [Working with quota on mobile browsers](https://www.html5rocks.com/en/tutorials/offline/quota-research/)

## Dicas
Em aplicações Angular adicione um estratégia de cache em chamadas htp via [$cacheFactory](http://stackoverflow.com/questions/14117653/how-to-cache-an-http-get-service-in-angularjs?answertab=votes#tab-top).

Utilize PouchDB para persistência de dados offline.

Explore os [recursos disponíveis](https://whatwebcando.today) para cada navegador/plataforma.

Dê preferência a utilizar cache nas requisições de recursos estáticos. Para requisições de recursos com atualização frequente, de preferência ao dados remotos.


## Demo
Experimente entrar no site e logo após o carregamento da página desconecte-se da internet e navegue até uma página interna clicando na imagem. Conecte-se novamente :)
[https://pwa-sw-toolbox.firebaseapp.com/step3/](https://pwa-sw-toolbox.firebaseapp.com/step3/)


## Lighthouse results
![light house results](https://s30.postimg.org/7r0osp2td/Captura_de_Tela_2017_01_31_a_s_00_04_30.png)

### Preview Online
![online mode](https://s24.postimg.org/jux8zo9yd/pwa_online.png)

### Preview Offline
![offline mode](https://s24.postimg.org/kyhdbmulh/pwa_offline.png)


