# PWA Starter
Template utilitário para configuração inicial de WebApps com suporte a PWA.

## HTML5 APIs
Pré configurado com suporte ao estado de conexão do dispositivo (online/offline) via [navigator.online](https://developer.mozilla.org/pt-BR/docs/Web/API/NavigatorOnLine/onLine).

Mais recursos: [What Web Can Do Today](https://whatwebcando.today)

## Service Worker Toolbox
Pré configurado para utilização da biblioteca [sw-toolbox](https://googlechrome.github.io/sw-toolbox/docs/master/tutorial-api)

## Fallback
Pré configurado com suporte Safari iOS e MacOS via appcache manifest para estratégia de cache.

Limites: [Working with quota on mobile browsers](https://www.html5rocks.com/en/tutorials/offline/quota-research/)

## Dicas
Em aplicações AngularJS adicione uma estratégia de cache nas requisições HTTP via [$cacheFactory](http://stackoverflow.com/questions/14117653/how-to-cache-an-http-get-service-in-angularjs?answertab=votes#tab-top).

Utilize [PouchDB](https://pouchdb.com/) para persistência de dados offline.

Explore os [recursos disponíveis](https://whatwebcando.today) para cada navegador/plataforma.

cacheFirst: Dê preferência em utilizar o cache nas requisições de recursos estáticos. 

networkFirst: Dê preferência ao dados remotos quando precisar de recursos com atualização frequente.

Utilize o [Google Firebase](https://firebase.google.com/) para deploy na fase de desenvolvimento com suporte a HTTPS. Crie um projeto no Firebase, acesse o menu "Hosting" e siga o passo a passo.

Utilize a ferramenta [Lighthouse](https://developers.google.com/web/tools/lighthouse) para validação de seu PWA.


## Demo
Visite a [demo](https://pwa-sw-toolbox.firebaseapp.com/step3/) e logo após o carregamento da página desconecte-se da internet e navegue até uma página interna clicando na imagem. Conecte-se novamente :)

URL: [https://pwa-sw-toolbox.firebaseapp.com/step3/](https://pwa-sw-toolbox.firebaseapp.com/step3)



## Roadmap
Adicionar suporte a [BackgroundSync](https://developers.google.com/web/updates/2015/12/background-sync).

Adicionar suporte a [PushNotification](https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web).

Colabore [https://github.com/nandofalcao/pwa-starter/pulls](https://github.com/nandofalcao/pwa-starter/pulls)

## Lighthouse results
![light house results](https://s30.postimg.org/7r0osp2td/Captura_de_Tela_2017_01_31_a_s_00_04_30.png)

### Preview Modo Online
![online mode](https://s24.postimg.org/jux8zo9yd/pwa_online.png)

### Preview Modo Offline
![offline mode](https://s24.postimg.org/kyhdbmulh/pwa_offline.png)


