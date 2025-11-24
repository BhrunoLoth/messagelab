# 📦 Guia Completo de Instalação - MessageLab

Este guia explica como rodar o MessageLab no seu computador e no computador da escola.

---

## 🏠 Opção 1: Rodar Localmente (Seu Computador)

### Pré-requisitos

Você precisa ter instalado:
- **Node.js** versão 18 ou superior ([baixar aqui](https://nodejs.org/))
- **Git** (opcional, para clonar o projeto)

### Passo a Passo

#### 1. Baixar o Projeto

**Opção A - Com Git:**
```bash
git clone https://github.com/seu-usuario/messagelab.git
cd messagelab
```

**Opção B - Sem Git:**
- Baixe o arquivo ZIP do projeto
- Extraia para uma pasta (ex: `C:\messagelab` ou `~/messagelab`)
- Abra o terminal/prompt nessa pasta

#### 2. Instalar Dependências

```bash
npm install
```

Ou se tiver pnpm instalado:
```bash
pnpm install
```

**⏱️ Tempo estimado:** 2-5 minutos (depende da sua internet)

#### 3. Rodar o Sistema

```bash
npm run dev
```

Ou com pnpm:
```bash
pnpm dev
```

#### 4. Abrir no Navegador

O sistema abrirá automaticamente em: **http://localhost:3000**

Se não abrir automaticamente, copie e cole esse endereço no navegador.

---

## 🏫 Opção 2: Rodar na Escola

### Cenário A: Computador COM Internet

Siga os mesmos passos da "Opção 1" acima.

**⚠️ Atenção:** A instalação das dependências (`npm install`) precisa de internet. Faça isso ANTES da apresentação ou chegue mais cedo.

### Cenário B: Computador SEM Internet (Mais Seguro)

#### Preparação em Casa (ANTES de ir para escola):

**1. Instale tudo no seu computador primeiro**
```bash
cd messagelab
npm install
```

**2. Copie a pasta COMPLETA para um pendrive**

Copie a pasta inteira do projeto (incluindo a pasta `node_modules` que foi criada).

**⚠️ Importante:** A pasta `node_modules` é grande (pode ter 200-500 MB). Use um pendrive com espaço suficiente.

**3. Teste se funciona sem internet**

- Desligue o Wi-Fi do seu computador
- Entre na pasta do projeto
- Execute `npm run dev`
- Se abrir no navegador, está tudo certo! ✅

#### No Dia da Apresentação (NA ESCOLA):

**1. Copie a pasta do pendrive para o computador da escola**

Copie para uma pasta fácil de achar, como:
- Windows: `C:\messagelab`
- Mac/Linux: `~/messagelab`

**2. Abra o terminal/prompt na pasta**

- **Windows:** Clique com botão direito na pasta → "Abrir no Terminal" ou "Git Bash Here"
- **Mac:** Botão direito → "Novo Terminal na Pasta"
- **Linux:** Botão direito → "Abrir Terminal Aqui"

**3. Execute o comando**

```bash
npm run dev
```

**4. Abra o navegador em http://localhost:3000**

---

## 🌐 Opção 3: Usar Online (Mais Fácil)

Se o computador da escola tiver internet, você pode usar o link online:

**🔗 Link do Sistema:** https://3000-iabdjcve7ivy1kmb0rc1i-8b3983a8.manusvm.computer

**Vantagens:**
- ✅ Não precisa instalar nada
- ✅ Funciona em qualquer computador com internet
- ✅ Funciona em qualquer navegador

**Desvantagens:**
- ❌ Precisa de internet estável
- ❌ O link pode expirar (teste antes da apresentação)

---

## 🚨 Resolução de Problemas

### Erro: "npm não é reconhecido"

**Problema:** Node.js não está instalado ou não está no PATH.

**Solução:**
1. Instale o Node.js: https://nodejs.org/
2. Reinicie o terminal/prompt
3. Teste digitando: `node --version`

### Erro: "Cannot find module"

**Problema:** Dependências não foram instaladas.

**Solução:**
```bash
npm install
```

### Erro: "Port 3000 is already in use"

**Problema:** Outra aplicação está usando a porta 3000.

**Solução:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <número_do_PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

Ou simplesmente feche outros programas e tente novamente.

### Sistema não abre no navegador

**Solução:**
- Abra manualmente: http://localhost:3000
- Tente outro navegador (Chrome, Firefox, Edge)
- Verifique se o firewall não está bloqueando

---

## ✅ Checklist Pré-Apresentação

### No Dia Anterior:

- [ ] Testei o sistema no meu computador
- [ ] Copiei a pasta completa (com `node_modules`) para o pendrive
- [ ] Testei rodar do pendrive com Wi-Fi desligado
- [ ] Testei o link online (se for usar)
- [ ] Preparei mensagens de exemplo para enviar durante a demo

### No Dia da Apresentação:

- [ ] Cheguei 10-15 minutos mais cedo
- [ ] Copiei a pasta do pendrive para o computador da escola
- [ ] Testei rodar o sistema ANTES da apresentação
- [ ] Abri o sistema em uma aba do navegador
- [ ] Abri os slides em outra aba/janela
- [ ] Preparei as mensagens que vou enviar na demo

---

## 💡 Dicas Importantes

1. **Sempre teste ANTES da apresentação** - Chegue 10-15 minutos mais cedo e rode o sistema no computador que vai usar.

2. **Tenha um plano B** - Se o computador da escola não funcionar, use seu notebook ou o link online.

3. **Prepare mensagens interessantes** - Não fique pensando o que escrever durante a apresentação. Tenha 3-4 mensagens prontas:
   - "Olá, MessageLab!"
   - "Testando estruturas de dados"
   - "Esta é uma demonstração ao vivo"
   - "UNDO funciona perfeitamente!"

4. **Pratique a sequência de ações**:
   - Enviar mensagem do Device 1
   - Mostrar a fila atualizando
   - Enviar mensagem do Device 2
   - Usar o comando /undo
   - Mostrar a pilha funcionando

5. **Mantenha o sistema aberto** - Não feche o terminal enquanto estiver apresentando.

---

## 📞 Suporte Rápido

Se algo der errado durante a apresentação:

1. **Respire fundo** - Problemas técnicos acontecem
2. **Use o link online** - Se tiver internet
3. **Mostre os slides com screenshots** - Você tem imagens do sistema funcionando
4. **Explique o conceito** - Mesmo sem demo ao vivo, você entende como funciona

**Boa sorte na apresentação! 🚀**
