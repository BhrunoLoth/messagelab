import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Send, 
  Undo2, 
  History, 
  List, 
  HelpCircle,
  Smartphone,
  ArrowRight,
  CheckCheck,
  Check,
  Network,
  Database,
  Layers,
  GitBranch
} from "lucide-react";
import { toast } from "sonner";
import { Queue, Stack, LinkedList, BinaryTree, Message } from "@/lib/data-structures";
import { APP_TITLE } from "@/const";

export default function Home() {
  // Estados dos dispositivos
  const [device1Input, setDevice1Input] = useState("");
  const [device2Input, setDevice2Input] = useState("");
  
  // Estruturas de dados para Device 1
  const [device1Queue] = useState(() => new Queue<Message>());
  const [device1Stack] = useState(() => new Stack<Message>());
  const [device1History] = useState(() => new LinkedList<Message>());
  const [device1Tree] = useState(() => new BinaryTree<string>());
  
  // Estruturas de dados para Device 2
  const [device2Queue] = useState(() => new Queue<Message>());
  const [device2Stack] = useState(() => new Stack<Message>());
  const [device2History] = useState(() => new LinkedList<Message>());
  const [device2Tree] = useState(() => new BinaryTree<string>());
  
  // Estados de visualização
  const [device1Messages, setDevice1Messages] = useState<Message[]>([]);
  const [device2Messages, setDevice2Messages] = useState<Message[]>([]);
  const [device1QueueView, setDevice1QueueView] = useState<Message[]>([]);
  const [device2QueueView, setDevice2QueueView] = useState<Message[]>([]);
  const [device1StackView, setDevice1StackView] = useState<Message[]>([]);
  const [device2StackView, setDevice2StackView] = useState<Message[]>([]);
  const [device1HistoryView, setDevice1HistoryView] = useState<Message[]>([]);
  const [device2HistoryView, setDevice2HistoryView] = useState<Message[]>([]);
  
  // Estatísticas
  const [device1Stats, setDevice1Stats] = useState({ sent: 0, received: 0 });
  const [device2Stats, setDevice2Stats] = useState({ sent: 0, received: 0 });
  
  // Refs para scroll automático
  const device1ScrollRef = useRef<HTMLDivElement>(null);
  const device2ScrollRef = useRef<HTMLDivElement>(null);

  // Função para gerar ID único
  const generateId = () => `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Função para enviar mensagem do Device 1
  const sendFromDevice1 = () => {
    if (!device1Input.trim()) {
      toast.error("Digite uma mensagem!");
      return;
    }

    const message: Message = {
      id: generateId(),
      from: "Device 1",
      to: "Device 2",
      content: device1Input,
      timestamp: Date.now(),
      status: 'sent'
    };

    // Adiciona na fila de envio
    device1Queue.enqueue(message);
    setDevice1QueueView(device1Queue.getAll());

    // Adiciona na pilha de undo
    device1Stack.push(message);
    setDevice1StackView(device1Stack.getAll());

    // Adiciona no histórico
    device1History.append(message);
    setDevice1HistoryView(device1History.getAll());

    // Adiciona na árvore
    device1Tree.insert(message.content.substring(0, 20));

    // Atualiza mensagens visíveis
    setDevice1Messages(prev => [...prev, message]);

    // Simula envio e recebimento
    setTimeout(() => {
      // Remove da fila
      device1Queue.dequeue();
      setDevice1QueueView(device1Queue.getAll());

      // Atualiza status para entregue
      message.status = 'delivered';
      setDevice1Messages(prev => prev.map(m => m.id === message.id ? message : m));

      // Device 2 recebe
      device2Queue.enqueue(message);
      setDevice2QueueView(device2Queue.getAll());
      device2History.append(message);
      setDevice2HistoryView(device2History.getAll());
      device2Tree.insert(message.content.substring(0, 20));
      setDevice2Messages(prev => [...prev, message]);

      // Remove da fila do device 2
      setTimeout(() => {
        device2Queue.dequeue();
        setDevice2QueueView(device2Queue.getAll());
        message.status = 'read';
        setDevice1Messages(prev => prev.map(m => m.id === message.id ? message : m));
        setDevice2Messages(prev => prev.map(m => m.id === message.id ? message : m));
      }, 500);

      // Atualiza estatísticas
      setDevice1Stats(prev => ({ ...prev, sent: prev.sent + 1 }));
      setDevice2Stats(prev => ({ ...prev, received: prev.received + 1 }));
    }, 1000);

    setDevice1Input("");
    toast.success("Mensagem enviada do Device 1!");
  };

  // Função para enviar mensagem do Device 2
  const sendFromDevice2 = () => {
    if (!device2Input.trim()) {
      toast.error("Digite uma mensagem!");
      return;
    }

    const message: Message = {
      id: generateId(),
      from: "Device 2",
      to: "Device 1",
      content: device2Input,
      timestamp: Date.now(),
      status: 'sent'
    };

    device2Queue.enqueue(message);
    setDevice2QueueView(device2Queue.getAll());
    device2Stack.push(message);
    setDevice2StackView(device2Stack.getAll());
    device2History.append(message);
    setDevice2HistoryView(device2History.getAll());
    device2Tree.insert(message.content.substring(0, 20));
    setDevice2Messages(prev => [...prev, message]);

    setTimeout(() => {
      device2Queue.dequeue();
      setDevice2QueueView(device2Queue.getAll());
      message.status = 'delivered';
      setDevice2Messages(prev => prev.map(m => m.id === message.id ? message : m));

      device1Queue.enqueue(message);
      setDevice1QueueView(device1Queue.getAll());
      device1History.append(message);
      setDevice1HistoryView(device1History.getAll());
      device1Tree.insert(message.content.substring(0, 20));
      setDevice1Messages(prev => [...prev, message]);

      setTimeout(() => {
        device1Queue.dequeue();
        setDevice1QueueView(device1Queue.getAll());
        message.status = 'read';
        setDevice1Messages(prev => prev.map(m => m.id === message.id ? message : m));
        setDevice2Messages(prev => prev.map(m => m.id === message.id ? message : m));
      }, 500);

      setDevice2Stats(prev => ({ ...prev, sent: prev.sent + 1 }));
      setDevice1Stats(prev => ({ ...prev, received: prev.received + 1 }));
    }, 1000);

    setDevice2Input("");
    toast.success("Mensagem enviada do Device 2!");
  };

  // Função UNDO para Device 1
  const undoDevice1 = () => {
    const lastMessage = device1Stack.pop();
    if (lastMessage) {
      setDevice1StackView(device1Stack.getAll());
      setDevice1Messages(prev => prev.filter(m => m.id !== lastMessage.id));
      setDevice2Messages(prev => prev.filter(m => m.id !== lastMessage.id));
      toast.info("Última mensagem do Device 1 desfeita!");
    } else {
      toast.warning("Nenhuma mensagem para desfazer!");
    }
  };

  // Função UNDO para Device 2
  const undoDevice2 = () => {
    const lastMessage = device2Stack.pop();
    if (lastMessage) {
      setDevice2StackView(device2Stack.getAll());
      setDevice1Messages(prev => prev.filter(m => m.id !== lastMessage.id));
      setDevice2Messages(prev => prev.filter(m => m.id !== lastMessage.id));
      toast.info("Última mensagem do Device 2 desfeita!");
    } else {
      toast.warning("Nenhuma mensagem para desfazer!");
    }
  };

  // Scroll automático
  useEffect(() => {
    device1ScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [device1Messages]);

  useEffect(() => {
    device2ScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [device2Messages]);

  // Componente de mensagem
  const MessageBubble = ({ message, isOwn }: { message: Message; isOwn: boolean }) => (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-3`}>
      <div className={`max-w-[70%] ${isOwn ? 'bg-blue-600' : 'bg-gray-700'} rounded-lg px-4 py-2`}>
        <p className="text-sm text-white">{message.content}</p>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-xs text-gray-300">
            {new Date(message.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
          </span>
          {isOwn && (
            <span className="text-xs">
              {message.status === 'read' && <CheckCheck className="w-3 h-3 text-blue-300" />}
              {message.status === 'delivered' && <CheckCheck className="w-3 h-3 text-gray-300" />}
              {message.status === 'sent' && <Check className="w-3 h-3 text-gray-300" />}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Network className="w-8 h-8 text-blue-500" />
              <div>
                <h1 className="text-2xl font-bold">MessageLab - Sistema de Mensageria Educacional</h1>
                <p className="text-sm text-muted-foreground">Sistema Educacional de Estruturas de Dados</p>
              </div>
            </div>
            <Badge variant="outline" className="text-sm">
              <Database className="w-4 h-4 mr-1" />
              Modo Debug Ativo
            </Badge>
          </div>
        </div>
      </header>

      <div className="container py-6">
        {/* Dispositivos de Mensageria */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Device 1 */}
          <Card className="bg-card text-card-foreground border-border">
            <CardHeader className="border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-blue-500" />
                  Device 1
                </CardTitle>
                <div className="flex gap-2 text-xs">
                  <Badge variant="secondary">↑ {device1Stats.sent}</Badge>
                  <Badge variant="secondary">↓ {device1Stats.received}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[400px] p-4">
                {device1Messages.map((msg) => (
                  <MessageBubble key={msg.id} message={msg} isOwn={msg.from === "Device 1"} />
                ))}
                <div ref={device1ScrollRef} />
              </ScrollArea>
              <div className="p-4 border-t border-border">
                <div className="flex gap-2 mb-2">
                  <Input
                    placeholder="Digite sua mensagem..."
                    value={device1Input}
                    onChange={(e) => setDevice1Input(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendFromDevice1()}
                    className="flex-1"
                  />
                  <Button onClick={sendFromDevice1} size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button onClick={undoDevice1} variant="outline" size="sm" className="flex-1">
                    <Undo2 className="w-4 h-4 mr-1" />
                    Undo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Device 2 */}
          <Card className="bg-card text-card-foreground border-border">
            <CardHeader className="border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-green-500" />
                  Device 2
                </CardTitle>
                <div className="flex gap-2 text-xs">
                  <Badge variant="secondary">↑ {device2Stats.sent}</Badge>
                  <Badge variant="secondary">↓ {device2Stats.received}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[400px] p-4">
                {device2Messages.map((msg) => (
                  <MessageBubble key={msg.id} message={msg} isOwn={msg.from === "Device 2"} />
                ))}
                <div ref={device2ScrollRef} />
              </ScrollArea>
              <div className="p-4 border-t border-border">
                <div className="flex gap-2 mb-2">
                  <Input
                    placeholder="Digite sua mensagem..."
                    value={device2Input}
                    onChange={(e) => setDevice2Input(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendFromDevice2()}
                    className="flex-1"
                  />
                  <Button onClick={sendFromDevice2} size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button onClick={undoDevice2} variant="outline" size="sm" className="flex-1">
                    <Undo2 className="w-4 h-4 mr-1" />
                    Undo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visualização das Estruturas de Dados */}
        <Card className="bg-card text-card-foreground border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-500" />
              Visualização das Estruturas de Dados (Modo Debug)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="device1" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="device1">Device 1</TabsTrigger>
                <TabsTrigger value="device2">Device 2</TabsTrigger>
              </TabsList>

              {/* Device 1 Structures */}
              <TabsContent value="device1" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Fila */}
                  <Card className="bg-muted/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <List className="w-4 h-4 text-blue-500" />
                        Fila (Queue) - {device1QueueView.length} itens
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[150px]">
                        {device1QueueView.length === 0 ? (
                          <p className="text-sm text-muted-foreground text-center py-4">Fila vazia</p>
                        ) : (
                          <div className="space-y-2">
                            {device1QueueView.map((msg, idx) => (
                              <div key={msg.id} className="flex items-center gap-2 text-xs bg-background p-2 rounded">
                                <Badge variant="outline" className="text-xs">{idx + 1}</Badge>
                                <ArrowRight className="w-3 h-3" />
                                <span className="truncate flex-1">{msg.content}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  {/* Pilha */}
                  <Card className="bg-muted/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Layers className="w-4 h-4 text-green-500" />
                        Pilha (Stack) - {device1StackView.length} itens
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[150px]">
                        {device1StackView.length === 0 ? (
                          <p className="text-sm text-muted-foreground text-center py-4">Pilha vazia</p>
                        ) : (
                          <div className="space-y-2">
                            {[...device1StackView].reverse().map((msg, idx) => (
                              <div key={msg.id} className="flex items-center gap-2 text-xs bg-background p-2 rounded">
                                <Badge variant="outline" className="text-xs">{device1StackView.length - idx}</Badge>
                                <span className="truncate flex-1">{msg.content}</span>
                                {idx === 0 && <Badge variant="secondary" className="text-xs">TOP</Badge>}
                              </div>
                            ))}
                          </div>
                        )}
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  {/* Histórico (Lista Encadeada) */}
                  <Card className="bg-muted/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <History className="w-4 h-4 text-yellow-500" />
                        Histórico (Lista Encadeada) - {device1HistoryView.length} itens
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[150px]">
                        {device1HistoryView.length === 0 ? (
                          <p className="text-sm text-muted-foreground text-center py-4">Histórico vazio</p>
                        ) : (
                          <div className="space-y-2">
                            {device1HistoryView.map((msg, idx) => (
                              <div key={msg.id} className="flex items-center gap-2 text-xs bg-background p-2 rounded">
                                <Badge variant="outline" className="text-xs">{idx + 1}</Badge>
                                <ArrowRight className="w-3 h-3" />
                                <div className="flex-1">
                                  <p className="truncate font-medium">{msg.content}</p>
                                  <p className="text-muted-foreground">{msg.from} → {msg.to}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  {/* Árvore */}
                  <Card className="bg-muted/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <GitBranch className="w-4 h-4 text-purple-500" />
                        Árvore (Tree) - Altura: {device1Tree.getHeight()}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[150px]">
                        {device1Tree.levelOrder().length === 0 ? (
                          <p className="text-sm text-muted-foreground text-center py-4">Árvore vazia</p>
                        ) : (
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground mb-2">Percurso em nível:</p>
                            {device1Tree.levelOrder().map((content, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs bg-background p-2 rounded">
                                <Badge variant="outline" className="text-xs">Nó {idx + 1}</Badge>
                                <span className="truncate flex-1">{content}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Device 2 Structures */}
              <TabsContent value="device2" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Fila */}
                  <Card className="bg-muted/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <List className="w-4 h-4 text-blue-500" />
                        Fila (Queue) - {device2QueueView.length} itens
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[150px]">
                        {device2QueueView.length === 0 ? (
                          <p className="text-sm text-muted-foreground text-center py-4">Fila vazia</p>
                        ) : (
                          <div className="space-y-2">
                            {device2QueueView.map((msg, idx) => (
                              <div key={msg.id} className="flex items-center gap-2 text-xs bg-background p-2 rounded">
                                <Badge variant="outline" className="text-xs">{idx + 1}</Badge>
                                <ArrowRight className="w-3 h-3" />
                                <span className="truncate flex-1">{msg.content}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  {/* Pilha */}
                  <Card className="bg-muted/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Layers className="w-4 h-4 text-green-500" />
                        Pilha (Stack) - {device2StackView.length} itens
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[150px]">
                        {device2StackView.length === 0 ? (
                          <p className="text-sm text-muted-foreground text-center py-4">Pilha vazia</p>
                        ) : (
                          <div className="space-y-2">
                            {[...device2StackView].reverse().map((msg, idx) => (
                              <div key={msg.id} className="flex items-center gap-2 text-xs bg-background p-2 rounded">
                                <Badge variant="outline" className="text-xs">{device2StackView.length - idx}</Badge>
                                <span className="truncate flex-1">{msg.content}</span>
                                {idx === 0 && <Badge variant="secondary" className="text-xs">TOP</Badge>}
                              </div>
                            ))}
                          </div>
                        )}
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  {/* Histórico (Lista Encadeada) */}
                  <Card className="bg-muted/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <History className="w-4 h-4 text-yellow-500" />
                        Histórico (Lista Encadeada) - {device2HistoryView.length} itens
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[150px]">
                        {device2HistoryView.length === 0 ? (
                          <p className="text-sm text-muted-foreground text-center py-4">Histórico vazio</p>
                        ) : (
                          <div className="space-y-2">
                            {device2HistoryView.map((msg, idx) => (
                              <div key={msg.id} className="flex items-center gap-2 text-xs bg-background p-2 rounded">
                                <Badge variant="outline" className="text-xs">{idx + 1}</Badge>
                                <ArrowRight className="w-3 h-3" />
                                <div className="flex-1">
                                  <p className="truncate font-medium">{msg.content}</p>
                                  <p className="text-muted-foreground">{msg.from} → {msg.to}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </ScrollArea>
                    </CardContent>
                  </Card>

                  {/* Árvore */}
                  <Card className="bg-muted/50">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <GitBranch className="w-4 h-4 text-purple-500" />
                        Árvore (Tree) - Altura: {device2Tree.getHeight()}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[150px]">
                        {device2Tree.levelOrder().length === 0 ? (
                          <p className="text-sm text-muted-foreground text-center py-4">Árvore vazia</p>
                        ) : (
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground mb-2">Percurso em nível:</p>
                            {device2Tree.levelOrder().map((content, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs bg-background p-2 rounded">
                                <Badge variant="outline" className="text-xs">Nó {idx + 1}</Badge>
                                <span className="truncate flex-1">{content}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Legenda e Ajuda */}
        <Card className="mt-6 bg-card text-card-foreground border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <HelpCircle className="w-5 h-5 text-blue-500" />
              Como Usar o Sistema
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p><strong>📱 Enviar Mensagem:</strong> Digite no campo de texto e pressione Enter ou clique no botão de enviar.</p>
            <p><strong>↩️ Undo:</strong> Desfaz a última mensagem enviada (usa a estrutura de Pilha).</p>
            <p><strong>📊 Estruturas de Dados:</strong> Visualize em tempo real como as mensagens são processadas:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>Fila (Queue):</strong> Mensagens aguardando envio/recebimento</li>
              <li><strong>Pilha (Stack):</strong> Histórico de ações para desfazer</li>
              <li><strong>Lista Encadeada:</strong> Histórico completo de todas as mensagens</li>
              <li><strong>Árvore:</strong> Organização hierárquica dos conteúdos</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
