# 🔨 Forca-w-Electron: Jogo da Forca Desktop

## 💻 Sobre o Projeto

O **Forca-w-Electron** é uma implementação moderna e nativa do clássico jogo da Forca.

Este projeto utiliza o framework **Electron** para empacotar uma aplicação **Node.js** e **TypeScript (TS)**, transformando-a em um aplicativo de desktop **multiplataforma** (Windows, macOS e Linux) com uma interface gráfica rica. O objetivo foi demonstrar a capacidade de utilizar tecnologias web modernas para criar softwares de mesa (desktop).

> ℹ️ **Nota:** Você pode adicionar uma imagem ou GIF do jogo aqui, usando a sintaxe: `![Captura de Tela do Jogo](caminho/para/sua/imagem.png)`

---

## ✨ Funcionalidades

O jogo oferece uma experiência de usuário intuitiva e as seguintes funcionalidades:

* **Interface Gráfica Desktop:** Experiência nativa de desktop, desenvolvida com HTML, CSS e JavaScript/TypeScript.
* **Lógica Robusta:** Implementação da lógica do jogo em **TypeScript**, garantindo código tipado e mais seguro.
* **Múltiplas Palavras:** Sistema de seleção de palavras aleatórias de um banco de dados interno (ou lista estática).
* **Feedback Visual:** Atualização visual da forca e das letras acertadas/erradas a cada tentativa.
* **Compilado e Empacotado:** Pronto para ser distribuído como um instalador/executável standalone.
---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes ferramentas e tecnologias principais:

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Framework Principal** | **Electron** | Cria a janela da aplicação e a ponte entre o Node.js e a interface web. |
| **Linguagem (Lógica)** | **TypeScript (TS)** | Superset do JavaScript que adiciona tipagem estática. |
| **Runtime** | **Node.js** | Ambiente de execução para a lógica principal. |
| **Empacotamento** | **Electron Forge** | Ferramenta para empacotar e criar instaladores para a aplicação. |
| **Interface** | **HTML5 & CSS3** | Para a estruturação e estilização da interface gráfica. |

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

* **Node.js** (Versão LTS recomendada)
* **npm** (Gerenciador de pacotes do Node)

### 1. Clonando o Repositório

```bash
# Clone o repositório
git clone [https://github.com/NovachronoXXX/Forca-w-Electron.git](https://github.com/NovachronoXXX/Forca-w-Electron.git)

# Entre na pasta do projeto
cd Forca-w-Electron

# Instale as dependências
npm install

---

## ForcaTS — Instruções rápidas

Este README rápido explica como construir, empacotar e executar o instalador/executável gerado pelo Electron Forge para este projeto (Windows).

## Requisitos
- Node.js (versão compatível com as dependências do projeto)
- npm
- Windows (PowerShell)

## Scripts úteis (em `package.json`)
- `npm start` — roda a app em modo desenvolvimento (Electron + ts-node fallback)
- `npm run premake` — compila TypeScript para `./dist` (executa `tsc -p tsconfig.json`)
- `npm run make` — cria o instalador (usa `electron-forge make`)

Sugestão: adicionar um script combinado se preferir rodar tudo com um comando:
```powershell
npm set-script build:make "npm run premake && npm run make"
# ou manualmente
npm run premake; npm run make
```

## Onde encontrar o executável/instalador após `npm run make`
O Electron Forge grava os artefatos em `out/make` do seu projeto. No build que foi gerado neste repositório (Squirrel/Windows), o instalador está em:

```
C:\dev\ForcaTS\out\make\squirrel.windows\x64\ForcaTS-1.0.0 Setup.exe
```

Observações:
- O nome pode variar conforme `productName`/`version` definido em `package.json`.
- Após executar o instalador, a app é geralmente instalada em:

```
%LOCALAPPDATA%\forcats\app-1.0.0\ForcaTS.exe
```

Você pode abrir o instalador via PowerShell:
```powershell
Start-Process 'C:\dev\ForcaTS\out\make\squirrel.windows\x64\ForcaTS-1.0.0 Setup.exe'
```
Ou executar diretamente o executável instalado:
```powershell
Start-Process "$env:LOCALAPPDATA\forcats\app-1.0.0\ForcaTS.exe"
```

## Motivo do erro `Cannot find module 'ts-node/register'`
Durante o empacotamento/análise foi detectado este erro porque `index.js` (entrypoint) fazia `require('ts-node/register')` e carregava `./src/main` (TypeScript) diretamente. Em um build empacotado não queremos depender de `ts-node` em tempo de execução.

Solução adotada no projeto:
- `index.js` foi alterado para primeiro tentar `require('./dist/main')` (JS compilado). Se não existir, cai para `ts-node/register` + `./src/main` (somente em dev).
- Por isso é importante rodar `npm run premake` antes de `npm run make`, ou usar o script combinado sugerido.

## Resolução de problemas comuns
- EBUSY / resource busy or locked ao rodar `npm run make`:
  - Normalmente significa que alguma instância do executável gerado está rodando e bloqueando arquivos na pasta `out`.
  - Feche a aplicação se estiver aberta (Task Manager) ou mate o processo via PowerShell. Exemplo para matar processos que vêm da pasta `out`:
    ```powershell
    Get-Process | Where-Object { $_.Path -and $_.Path -like "*ForcaTS-win32-x64*" } | ForEach-Object { Stop-Process -Id $_.Id -Force }
    ```
  - Depois disso remova a pasta `out\ForcaTS-win32-x64` e rode `npm run make` novamente.

- Se o instalador abrir e a aplicação apresentar erro relacionado a `ts-node`:
  - Certifique-se de compilar (`npm run premake`) antes de empacotar.
  - Verifique se em `out/make/...` existe o instalador e que o `dist` foi incluído (o `index.js` procura `./dist/main`).

## Dicas rápidas de desenvolvimento
- Para desenvolvimento iterativo, use:
```powershell
npm start
```
- Para criar o instalador (build de release):
```powershell
npm run premake
npm run make
```

## Arquivos importantes relacionados
- `index.js` — entrypoint que agora tenta `./dist/main` antes de usar `ts-node` (evita dependência em runtime quando empacotado).
- `tsconfig.json` — configura o `outDir: ./dist` onde os arquivos JS compilados são gerados.
- `forge.config.js` — configuração do Electron Forge / makers.
