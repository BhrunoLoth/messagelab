# 🚀 MessageLab - Sistema de Mensageria Educacional

**Sistema educacional que demonstra estruturas de dados através de um aplicativo de mensageria visual e interativo.**

---

## 📋 Sobre o Projeto

O **MessageLab** é um sistema de mensageria desenvolvido para fins educacionais que simula a troca de mensagens entre dois dispositivos, revelando em tempo real como as estruturas de dados funcionam internamente.

### 🎯 Objetivo

Transformar conceitos abstratos de estruturas de dados em experiências visuais e práticas, facilitando o aprendizado de:
- **Filas (Queue)** - FIFO (First In, First Out)
- **Pilhas (Stack)** - LIFO (Last In, First Out)
- **Listas Encadeadas (Linked List)**
- **Árvores Binárias (Binary Tree)**

---

## ✨ Funcionalidades

### 💬 Sistema de Mensageria
- ✅ Envio e recebimento de mensagens entre dois dispositivos
- ✅ Status de entrega (enviado, entregue, lido)
- ✅ Timestamps em todas as mensagens
- ✅ Contador de mensagens enviadas e recebidas
- ✅ Histórico completo de conversas

### 🔍 Modo Debug Visual
- ✅ Visualização em tempo real de todas as estruturas de dados
- ✅ Animações de enfileiramento e desenfileiramento
- ✅ Painel de estatísticas e métricas
- ✅ Indicadores visuais de operações

### 🎮 Interatividade
- ✅ Funcionalidade UNDO (desfazer última mensagem)
- ✅ Comandos especiais (/hist, /fila, /undo, /help)
- ✅ Interface responsiva e intuitiva

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** com TypeScript
- **Tailwind CSS 4** para estilização
- **Shadcn/ui** para componentes
- **Wouter** para roteamento

### Estruturas de Dados
- Implementações do zero em TypeScript
- Classes com tipagem forte
- Métodos otimizados

### Ferramentas
- **Vite** para build
- **Node.js 22.13.0**
- **pnpm** para gerenciamento de pacotes

---

## 📦 Como Executar o Sistema

### Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** versão 18 ou superior ([Download aqui](https://nodejs.org/))
- **pnpm** (ou npm/yarn)

Para instalar o pnpm globalmente:
```bash
npm install -g pnpm
```

### Passo 1: Clonar/Baixar o Projeto

Se você recebeu o projeto em um arquivo ZIP:
```bash
# Extraia o arquivo ZIP em uma pasta de sua escolha
# Navegue até a pasta do projeto
cd messagelab-system
```

Se você tem acesso ao repositório Git:
```bash
git clone <url-do-repositorio>
cd messagelab-system
```

### Passo 2: Instalar Dependências

```bash
pnpm install
```

Ou, se preferir usar npm:
```bash
npm install
```

### Passo 3: Executar o Sistema

```bash
pnpm dev
```

Ou com npm:
```bash
npm run dev
```

### Passo 4: Acessar no Navegador

Abra seu navegador e acesse:
```
http://localhost:3000
```

O sistema será carregado e você verá a interface com os dois dispositivos!

---

## 🖥️ Como Executar em Outro Computador (Ex: Escola)

### Opção 1: Levar o Projeto em um Pendrive

1. **No seu computador:**
   - Copie toda a pasta `messagelab-system` para um pendrive
   - **IMPORTANTE:** Não copie a pasta `node_modules` (ela é muito grande)

2. **No computador da escola:**
   - Certifique-se de que o Node.js está instalado
   - Copie a pasta do pendrive para o computador
   - Abra o terminal/prompt de comando na pasta do projeto
   - Execute:
     ```bash
     pnpm install
     pnpm dev
     ```
   - Acesse `http://localhost:3000` no navegador

### Opção 2: Usar Versão Online (Recomendado)

Se você salvou o checkpoint no Manus, pode acessar a versão online diretamente:
- Não precisa instalar nada
- Funciona em qualquer computador com internet
- Acesse através do link fornecido pelo Manus

---

## 📖 Como Usar o Sistema

### Enviar Mensagens

1. Digite sua mensagem no campo de texto de qualquer dispositivo
2. Pressione **Enter** ou clique no botão de enviar (✉️)
3. A mensagem será processada pelas estruturas de dados
4. Aparecerá no dispositivo de destino após um breve delay (simulação)

### Comandos Especiais

Digite estes comandos no campo de mensagem:

- **`/hist`** - Mostra o histórico completo de mensagens (Lista Encadeada)
- **`/fila`** - Mostra o estado atual da fila de mensagens
- **`/undo`** - Desfaz a última mensagem enviada (usa a Pilha)
- **`/help`** - Mostra a lista de comandos disponíveis

### Modo Debug

O **Modo Debug** está sempre ativo na parte inferior da tela, mostrando:

- **Fila (Queue)** - Mensagens aguardando envio/processamento
- **Pilha (Stack)** - Histórico de ações para UNDO
- **Histórico (Lista Encadeada)** - Todas as mensagens trocadas
- **Árvore (Tree)** - Organização hierárquica dos conteúdos

### Botão UNDO

Clique no botão **"↺ Undo"** abaixo do campo de mensagem para:
- Desfazer a última mensagem enviada
- Ver a Pilha (Stack) em ação
- Demonstrar o conceito LIFO (Last In, First Out)

---

## 📊 Estruturas de Dados Implementadas

### 1. Fila (Queue) - FIFO
**Função:** Gerenciar ordem de envio e recebimento de mensagens

**Operações:**
- `enqueue(item)` - Adiciona mensagem no final da fila
- `dequeue()` - Remove e retorna a primeira mensagem da fila
- `peek()` - Visualiza a primeira mensagem sem remover
- `isEmpty()` - Verifica se a fila está vazia
- `size()` - Retorna o tamanho da fila

**Onde é usada:**
- Sistemas de mensageria (WhatsApp, Telegram)
- Filas de impressão
- Processamento de tarefas em background

---

### 2. Pilha (Stack) - LIFO
**Função:** Implementar funcionalidade UNDO

**Operações:**
- `push(item)` - Empilha um item no topo
- `pop()` - Remove e retorna o item do topo
- `peek()` - Visualiza o topo sem remover
- `isEmpty()` - Verifica se a pilha está vazia
- `size()` - Retorna o tamanho da pilha

**Onde é usada:**
- Função UNDO/REDO em editores
- Navegação de histórico (botão voltar)
- Chamadas de função em programação (call stack)

---

### 3. Lista Encadeada (Linked List)
**Função:** Armazenar histórico completo de mensagens

**Operações:**
- `append(data)` - Adiciona nó no final
- `prepend(data)` - Adiciona nó no início
- `delete(data)` - Remove nó específico
- `find(data)` - Busca nó por valor
- `toArray()` - Converte para array

**Onde é usada:**
- Implementação de outras estruturas (filas, pilhas)
- Gerenciamento de memória em sistemas operacionais
- Playlists de música

---

### 4. Árvore Binária (Binary Tree)
**Função:** Organizar conteúdos hierarquicamente

**Operações:**
- `insert(value)` - Insere valor na árvore
- `search(value)` - Busca valor na árvore
- `inOrder()` - Percurso em ordem
- `preOrder()` - Percurso pré-ordem
- `levelOrder()` - Percurso em nível

**Onde é usada:**
- Sistemas de arquivos (pastas e subpastas)
- Bancos de dados (índices B-Tree)
- Algoritmos de busca e ordenação

---

## 🎓 Aprendizados do Projeto

### O que aprendemos:

1. **Aprendizado visual é mais efetivo** - Ver as estruturas funcionando em tempo real torna o conceito muito mais claro

2. **Contexto importa** - Entender ONDE e POR QUE usar cada estrutura é tão importante quanto saber COMO implementá-las

3. **Prática leva à maestria** - Construir um sistema real que integra múltiplas estruturas solidifica o conhecimento

4. **Estruturas são universais** - Os mesmos conceitos aparecem em todas as linguagens e plataformas

---

## 🐛 Solução de Problemas

### O sistema não inicia

**Erro:** `command not found: pnpm`
- **Solução:** Instale o pnpm com `npm install -g pnpm`

**Erro:** `Cannot find module`
- **Solução:** Execute `pnpm install` novamente

### Porta 3000 já está em uso

**Erro:** `Port 3000 is already in use`
- **Solução:** Feche outros programas que possam estar usando a porta 3000, ou edite o arquivo `vite.config.ts` para usar outra porta

### Node.js não está instalado

- **Solução:** Baixe e instale o Node.js em [nodejs.org](https://nodejs.org/)

---

## 📁 Estrutura do Projeto

```
messagelab-system/
├── client/                  # Frontend React
│   ├── src/
│   │   ├── pages/          # Página principal (Home.tsx)
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── lib/            # Estruturas de dados (data-structures.ts)
│   │   └── App.tsx         # Componente raiz
│   └── public/             # Arquivos estáticos
├── diagrams/               # Diagramas de arquitetura
├── package.json            # Dependências do projeto
├── README.md              # Este arquivo
└── todo.md                # Lista de tarefas do projeto
```

---

## 👥 Equipe

**Disciplina:** Estrutura de Dados  
**Curso:** Análise e Desenvolvimento de Sistemas - III Termo  
**Objetivo:** Aprendizado prático de estruturas de dados através de um projeto real

---

## 📞 Suporte

Se tiver dúvidas ou problemas:

1. Verifique a seção **Solução de Problemas** acima
2. Consulte o professor da disciplina
3. Revise a apresentação em slides que acompanha este projeto

---

## 🎉 Demonstração

Para ver o sistema em funcionamento:

1. Execute o projeto localmente (instruções acima)
2. Ou acesse a versão online (se disponível)
3. Ou assista ao vídeo de demonstração (se fornecido)

---

**Desenvolvido com 💙 para aprendizado de Estruturas de Dados**

*"Transformando estruturas de dados abstratas em experiências visuais e práticas"*
