const CACHE_NAME = 'color-picker-v2'; // Mude a versão sempre que fizer alterações importantes

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// Escuta mensagens enviadas pelo script principal no index.html
self.addEventListener('message', (event) => {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

// Evento de instalação: baixa os arquivos essenciais para o cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting(); // Ativa o novo Service Worker imediatamente após a instalação
});

// Evento de ativação: limpa caches antigos de versões anteriores
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Removendo cache antigo:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim(); // Assume o controle do aplicativo imediatamente em todas as abas abertas
});

// Evento de busca (fetch): tenta carregar da rede primeiro; se estiver sem internet, usa o cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((networkResponse) => {
        // Se a resposta da rede for válida, atualiza o cache
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Se falhar a conexão à rede (offline), entrega do cache
        return caches.match(e.request);
      })
  );
});
