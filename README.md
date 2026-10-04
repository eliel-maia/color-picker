# 🎨 Seletor de Cores PWA

Aplicativo Web Progressivo (PWA) leve, moderno e responsivo para seleção, extração e organização de paletas de cores a partir de imagens da galeria ou capturas da câmera.

---

## 🚀 Funcionalidades

- 📸 **Captura e Seleção:** Importe imagens da galeria ou utilize a câmera em tempo real para extrair cores.
- 🔍 **Lupa Magnificadora:** Precisão no toque para selecionar a cor exata de qualquer pixel.
- 🎨 **Paletas Automáticas:** Geração de paletas contínuas e harmônicas com controle do número de amostras.
- 📋 **Códigos de Cor:** Cópia rápida em formatos **HEX** e **RGB** com um toque.
- 💾 **Cores Salvas:** Armazenamento local (`localStorage`) das suas cores e paletas favoritas.
- 📲 **PWA & Offline:** Funciona sem conexão à internet e pode ser instalado como aplicativo nativo na tela inicial.

---

## 📁 Estrutura do Projeto

```text
.
├── index.html       # Estrutura da aplicação, interface e scripts principais
├── manifest.json    # Configuração de instalação do PWA (ícone, tema, tela cheia)
├── sw.js            # Service Worker para controle de cache e suporte offline
└── icon.png         # Ícone em bitmap (512x512) para telas de instalação
