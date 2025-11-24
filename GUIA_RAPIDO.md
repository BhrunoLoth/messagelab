# ⚡ Guia Rápido - MessageLab

## 🚀 Instalação Rápida (5 minutos)

### 1. Instalar Node.js
- Baixe em: https://nodejs.org/
- Escolha a versão LTS (recomendada)
- Instale normalmente

### 2. Instalar pnpm
Abra o terminal/prompt e digite:
```bash
npm install -g pnpm
```

### 3. Instalar Dependências do Projeto
Na pasta do projeto, execute:
```bash
pnpm install
```

### 4. Executar o Sistema
```bash
pnpm dev
```

### 5. Abrir no Navegador
Acesse: **http://localhost:3000**

---

## 🎮 Como Usar (3 passos)

### 1️⃣ Enviar Mensagem
- Digite no campo de texto
- Pressione **Enter** ou clique no botão ✉️

### 2️⃣ Ver Estruturas de Dados
- Olhe para a seção **"Visualização das Estruturas de Dados"**
- Veja as estruturas atualizando em tempo real

### 3️⃣ Testar UNDO
- Clique no botão **"↺ Undo"**
- Veja a última mensagem ser desfeita

---

## 🔧 Comandos Especiais

Digite no campo de mensagem:

| Comando | O que faz |
|---------|-----------|
| `/hist` | Mostra histórico completo |
| `/fila` | Mostra estado da fila |
| `/undo` | Desfaz última mensagem |
| `/help` | Mostra ajuda |

---

## 📱 Levar para Escola

### Opção 1: Pendrive
1. Copie a pasta `messagelab-system` (SEM a pasta `node_modules`)
2. Na escola, execute:
   ```bash
   pnpm install
   pnpm dev
   ```

### Opção 2: Online (Mais Fácil!)
- Use o link do Manus fornecido
- Não precisa instalar nada
- Funciona direto no navegador

---

## ❓ Problemas Comuns

### "command not found: pnpm"
```bash
npm install -g pnpm
```

### "Port 3000 is already in use"
- Feche outros programas
- Ou use outra porta

### "Cannot find module"
```bash
pnpm install
```

---

## 📊 O que Você Vai Ver

### Device 1 e Device 2
Dois dispositivos trocando mensagens

### Modo Debug (embaixo)
- **Fila** - Mensagens aguardando
- **Pilha** - Para UNDO
- **Histórico** - Todas as mensagens
- **Árvore** - Organização dos dados

---

## 🎯 Para o Pitch (Apresentação)

### Roteiro de 5 minutos:

1. **Abertura (30s)** - Apresente o problema
2. **Demonstração (2min)** - Mostre o sistema funcionando
3. **Estruturas (1min)** - Explique cada estrutura
4. **Aprendizados (1min)** - O que aprendeu
5. **Conclusão (30s)** - Impacto educacional

### O que demonstrar:

✅ Enviar mensagem entre Device 1 e Device 2  
✅ Mostrar fila atualizando  
✅ Usar UNDO e mostrar pilha  
✅ Executar `/hist` para ver lista encadeada  
✅ Mostrar árvore organizando dados  

---

## 💡 Dicas para Apresentação

1. **Abra o sistema ANTES** da apresentação
2. **Teste todos os comandos** previamente
3. **Tenha mensagens preparadas** para enviar
4. **Mostre o modo debug** sempre visível
5. **Explique ENQUANTO demonstra**

---

## 📞 Ajuda Rápida

**Sistema não abre?**
- Verifique se o Node.js está instalado: `node --version`
- Reinstale dependências: `pnpm install`

**Estruturas não aparecem?**
- Ative o "Modo Debug" (já está ativo por padrão)
- Envie pelo menos uma mensagem

**Precisa de mais ajuda?**
- Leia o README.md completo
- Consulte o professor
- Revise os slides da apresentação

---

**Boa sorte na apresentação! 🚀**
