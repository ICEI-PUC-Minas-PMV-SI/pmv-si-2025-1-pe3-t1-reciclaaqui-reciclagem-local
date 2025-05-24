# 4. PROJETO DO DESIGN DE INTERAÇÃO

## 4.1 Personas


### Persona 1: Ana Júlia Ramos  
![Personas_Ana](https://github.com/user-attachments/assets/9595cdb8-d1de-4c43-be4f-c6641e45403c)


### Persona 2: Saulo Alves da Silva
![Persona_Saulo](https://github.com/user-attachments/assets/be7338fa-3390-46e4-bbda-f5264ce19535)


### Persona 3: Celine Bianchi
![Celine](https://github.com/user-attachments/assets/b8c03bf3-6f25-4d22-a2dc-7e877091f0d4)


### Persona 4: Wallysson Rocha
![Wallyson](https://github.com/user-attachments/assets/02e3f141-dee5-4aa7-9302-493f492225fe)


### Persona 5: Alice de Araujo
![Alice](https://github.com/user-attachments/assets/83c8fca2-c873-4a51-addd-aabb74753333)


### Persona 6: Henrique da Silva
![Henrique](https://github.com/user-attachments/assets/0a957621-79f8-455d-a7e3-7e7697a0dfa5)



## 4.2 Mapa de Empatia


### Persona 1: Ana Júlia Ramos

![Mapa de empatia Ana Julia](https://github.com/user-attachments/assets/3d15127a-6061-43aa-9463-6d294c493719)  

  
### Persona 2: Saulo Alves da Silva
![Mapa de empatia Saulo](https://github.com/user-attachments/assets/33ade1f3-c34d-4595-a0b0-643eee3e4394)


### Persona 3: Celine Bianchi
![Mapa de empatia Celine](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2025-1-pe3-t1-reciclaaqui-reciclagem-local/blob/bde21baae72d3bba04e61881c952b2b19e17179f/src/img/Mapa%20de%20Empatia_Celine.png)


### Persona 4: Wallysson Rocha
![Mapa de empatia Wallysson](https://github.com/user-attachments/assets/4a02ba56-dd12-431c-89b3-9506b3b2b378)


### Persona 5: Alice de Araujo
![Mapa de empatia Alice](https://github.com/user-attachments/assets/c5225fb6-a91a-4d80-9bbe-c7587387fc0d)


### Persona 6: Henrique da Silva
![Mapa de empatia Henrique](https://github.com/user-attachments/assets/b11e7d76-51d2-4d65-afee-aec3730031ac)


  
## 4.3 Protótipos das Interfaces
Apresente nesta seção os protótipos de alta fidelidade do sistema proposto. A fidelidade do protótipo refere-se ao nível de detalhes e funcionalidades incorporadas a ele. Assim, um protótipo de alta fidelidade é uma representação interativa do produto, baseada no computador ou em dispositivos móveis. Esse protótipo já apresenta maior semelhança com o design final em termos de detalhes e funcionalidades. No desenvolvimento dos protótipos, devem ser considerados os princípios gestálticos, as recomendações ergonômicas e as regras de design (como as 8 regras de ouro). É importante descrever no texto do relatório como os princípios gestálticos e as regras de ouro foram seguidas no projeto das interfaces. Nesta etapa deve-se dar uma ênfase na implementação do software de modo que possam ser realizados os testes com usuários na etapa seguinte.


## Protótipo Login

### 1. Objetivo da Tela  

A tela exibe um formulário de autenticação, onde o usuário informa login e senha previamente cadastrados. Ao clicar no botão “Entrar”, o sistema verifica as credenciais e permite o acesso caso estejam corretas.  
A tela também oferece a opção “Cadastre-se”, que direciona o usuário para a tela de Cadastro, caso ainda não possua um cadastro.

### 2. Princípios Gestálticos

***Proximidade:*** Os campos de login e senha estão próximos um do outro, formando um grupo visual coerente de entrada de dados. O botão “Entrar” também está logo abaixo, reforçando a ideia de sequência de ação.  
***Similaridade:*** Os campos de texto (“Login” e “Senha”) possuem o mesmo formato e ícone à esquerda, o que facilita a associação como partes de um mesmo grupo funcional. Botões (“Entrar” e “Cadastre-se”) têm estilos distintos, o que diferencia as ações primária e secundária.  
***Figura-fundo:*** O container branco central (com campos e botões) se destaca do fundo acinzentado discreto, facilitando a percepção do que é clicável e separando visualmente o conteúdo principal do plano de fundo.  
***Continuidade:*** A organização vertical dos elementos (campos de entrada → botão de ação → link de recuperação → botão de cadastro) guia o olhar do usuário de forma natural e fluida, do topo para baixo.  
***Foco:*** O botão verde “Entrar” se destaca como principal ação da tela, tanto pela cor vibrante quanto pela posição. O botão “Cadastre-se” em azul também chama atenção, mas com menor prioridade, cumprindo bem sua função como ação secundária.

### 3. Recomendações Ergonômicas

***Agrupamento e distinção entre itens:*** Elementos dispostos em ordem lógica: logo → campos → ações.  
***Feedback imediato:*** Campos mudam com o foco; botão "Entrar" se destaca.  
***Carga de trabalho:*** Interface simples e intuitiva, sem exigir memorização.

### 4. Regras de Ouro (Shneiderman):

***Consistência:*** Estilo visual padronizado (cores, botões e campos).  
***Atalhos:*** “Manter conectado” facilita acessos frequentes.  
***Feedback Informativo:*** Campos e botões respondem ao clique/foco.  
***Minimizar Carga de Memória:*** Tudo essencial está visível e intuitivo.  
***Controle ao Usuário:*** Opções claras: entrar, recuperar senha ou cadastrar.  
***Prevenir Erros:*** Layout simples reduz chances de erro.  
***Desfazer Ações:*** Tela básica, sem ações críticas para desfazer.  
***Fechar Ciclo de Diálogo:*** Ação de login leva a um próximo passo claro.

<img width="900" alt="login" src="https://github.com/user-attachments/assets/443eb6aa-7055-422a-b13d-f53c88d78b8d" />



## Protótipo Cadastro

### 1. Objetivo da Tela  

A tela permite que novos usuários criem uma conta na plataforma. Nela, são solicitados três campos obrigatórios: **Email**, **Senha** e **Confirmação de Senha**. O botão “Cadastrar” finaliza o processo de criação de conta. Essa etapa é essencial para garantir o acesso  seguro ao sistema.  

### 2. Princípios Gestálticos

***Proximidade:*** Os três campos estão alinhados verticalmente com espaçamento, formando um agrupamento lógico e visual coeso.  
***Similaridade:*** Todos os campos seguem o mesmo padrão de design com ícones à esquerda, campos com o mesmo tamanho e estilo, facilitando a identificação de que pertencem ao mesmo conjunto funcional.  
***Figura-fundo:*** O formulário está inserido em um container branco sobre um fundo acinzentado com textura, o que facilita a distinção clara entre conteúdo principal e plano de fundo.  
***Continuidade:*** A estrutura vertical conduz o olhar do usuário naturalmente do título até o botão “Cadastrar”, promovendo um fluxo de navegação fluido.  
***Foco:*** O botão azul escuro “Cadastrar” se destaca dos demais elementos, indicando com clareza a ação principal esperada nesta tela.

### 3. Recomendações Ergonômicas

***Agrupamento e distinção entre itens:*** A separação clara entre campos e botão torna a interação intuitiva.  
***Feedback imediato:*** Espera-se que os campos respondam ao foco e preenchimento com mudanças visuais (ex: borda azul, preenchimento suave).  
***Carga de trabalho:*** A tela contém apenas o essencial, reduzindo a sobrecarga mental e tornando o cadastro simples e direto.  
***Segurança perceptível:*** Ícones de cadeado nos campos de senha reforçam a noção de proteção de dados.

### 4. Regras de Ouro (Shneiderman):

***Consistência:*** A tela segue o padrão visual estabelecido pelo restante da plataforma, com campos e botões no mesmo estilo.  
***Atalhos:*** O campo “Confirmar Senha” ajuda a evitar erros futuros, sem exigir memorizações complexas.  
***Feedback Informativo:*** A interação com os campos e o clique no botão devem retornar feedbacks claros (visuais e/ou mensagens).  
***Minimizar Carga de Memória:*** Todas as instruções e campos estão visíveis, não exigindo recordações do usuário.  
***Controle ao Usuário:*** O usuário pode optar por cadastrar-se ou retornar para a tela anterior sem bloqueios.  
***Prevenir Erros:*** A confirmação da senha evita falhas comuns de digitação.  
***Desfazer Ações:*** O usuário pode apagar ou editar qualquer campo antes de enviar.  
***Fechar Ciclo de Diálogo:*** Após clicar em “Cadastrar”, o sistema deve apresentar uma resposta clara: sucesso ou mensagem de erro.

<img width="900" alt="cadastro" src="https://github.com/user-attachments/assets/094421e7-8393-4f16-b173-6ca3ecb378a9" />



## Protótipo Gerenciar Perfil

### 1. Objetivo da Tela  

A tela permite ao usuário atualizar suas informações pessoais, como e-mail, senha e imagem de perfil. A interface oferece campos para redefinir a senha atual e confirmar a nova senha, bem como um botão para carregar uma nova foto de perfil. Ao final, há um botão “Salvar alterações” que confirma as modificações feitas pelo usuário.

### 2. Princípios Gestálticos

***Proximidade:*** Os campos de e-mail e redefinição de senha estão agrupados de maneira lógica, facilitando o reconhecimento de que fazem parte de uma mesma seção de edição de dados.  
***Similaridade:*** Todos os campos seguem um padrão visual uniforme, com campos cinza claro, ícones de lápis para edição, e fontes consistentes, fortalecendo a coerência entre elementos.  
***Figura-fundo:*** O uso de um fundo branco e uma faixa central com textura acinzentada destaca os elementos interativos em primeiro plano, como o botão de envio de foto e os campos de texto.  
***Continuidade:*** A organização dos elementos de cima para baixo (e-mail, imagem, redefinição de senha, botão) conduz o olhar do usuário de maneira fluida e intuitiva.  
***Foco:*** O botão azul escuro “Salvar alterações” se destaca dos demais elementos da tela, indicando claramente a ação final desejada.

### 3. Recomendações Ergonômicas

***Agrupamento e distinção entre itens:*** Campos bem organizados em blocos funcionais (e-mail, imagem, senha).  
***Feedback imediato:*** Os campos de edição têm ícones visíveis (lápis), sugerindo edição; espera-se que os campos e botões ofereçam resposta visual ao toque.  
***Carga de trabalho:*** A interface é simples, objetiva e não sobrecarrega o usuário com informações desnecessárias.  
***Consistência visual:*** Ícones, cores e tipografia reforçam a identidade da interface.

### 4. Regras de Ouro (Shneiderman):

***Consistência:*** Os elementos seguem o mesmo padrão visual das outras telas do sistema.  
***Atalhos:*** A função de carregar nova foto está em local acessível e visível, agilizando a ação.  
***Feedback Informativo:*** Espera-se feedback visual ou textual ao clicar em “Salvar alterações” ou ao interagir com os campos.  
***Minimizar Carga de Memória:*** Todas as informações e ações estão visíveis, sem necessidade de memorização de passos.  
***Controle ao Usuário:*** O usuário pode editar ou não suas informações e cancelar a ação antes de confirmar.  
***Prevenir Erros:*** A confirmação de nova senha ajuda a evitar trocas não intencionais.  
***Desfazer Ações:*** Possibilidade de apagar ou corrigir dados antes de salvar.  
***Fechar Ciclo de Diálogo:*** O botão “Salvar alterações” finaliza claramente a ação, indicando que as mudanças foram aplicadas.

<img width="900" alt="gerenciar-perfil" src="https://github.com/user-attachments/assets/0add2dd0-2438-4b68-9583-3abc42fac5fa" />




## Protótipo Guia de Reciclagem

### 1. Objetivo da Tela  

A tela tem como finalidade apresentar de forma visual e didática as instruções para a separação correta dos resíduos, conforme os princípios da coleta seletiva, facilitando a compreensão e aplicação pelo usuário.
Quando o usuário seleciona a opção "Guia de Reciclagem" no sistema:  
- O sistema carrega o conteúdo previamente cadastrado com as categorias de resíduos e instruções visuais.
- O guia é apresentado com foco educativo, usando cores e ícones padronizados e de fácil associação.
- A navegação é visual e autoexplicativa, permitindo que o usuário aprenda a separar corretamente os materiais para descarte.


### 2. Princípios Gestálticos

***Proximidade:*** Lixeiras organizadas em uma grade, agrupadas por tipo de material.  
***Semelhança:*** Lixeiras com o mesmo formato e ícone de reciclagem, diferenciadas por cor.  
***Figura/Fundo:*** Contraste entre o fundo claro e as lixeiras coloridas facilita a identificação.  
***Fechamento:*** Caixas arredondadas criam blocos visuais coesos.

### 3. Recomendações Ergonômicas

***Legibilidade:*** Texto com fontes legíveis e bom contraste.  
***Uso de Cores:*** Cores das lixeiras seguem convenções de coleta seletiva.  
***Layout Intuitivo:*** Layout em grade e ícones facilitam navegação.  
***Acessibilidade Visual:*** Ícones grandes, cores contrastantes e espaçamento adequado.

### 4. Regras de Ouro (Shneiderman):

***Consistência:*** Design uniforme nas lixeiras.  
***Atalhos:*** Design simples facilita navegação sem texto.  
***Feedback Informativo:*** Espera-se interação ao clicar nas lixeiras (com animações).  
***Minimizar Carga de Memória:*** O conteúdo visual facilita a compreensão.  
***Controle ao Usuário:*** Navegação clara e intuitiva.  
***Prevenir Erros:*** Cores e ícones ajudam a evitar confusão.  
***Ajuda e Documentação:*** Subtítulo e instruções rápidas orientam o usuário.

<img width="1298" alt="Prototipo Guia de Reciclagem" src="https://github.com/user-attachments/assets/49230f1c-5764-4ccf-96e1-e378cb6241a5" />



## Protótipo Ranking de Sustentabilidade

### 1. Objetivo da Tela  

A tela exibe uma lista dos usuários com melhor desempenho em ações sustentáveis, organizados em ordem de pontuação. Mostra o nome, avatar, pontuação e destaca os três primeiros colocados com medalhas. 
Quando o usuário acessa a opção “Ranking de Sustentabilidade” no sistema:  
- O sistema calcula a pontuação com base nas ações registradas.
- Exibe a posição do usuário no ranking.
- Se o usuário não tiver ações registradas, o usuário não aparece no ranking.

### 2. Princípios Gestálticos

***Proximidade:*** Os nomes dos usuários, seus pontos e os respectivos avatares estão agrupados visualmente, o que facilita a associação de cada elemento como parte de uma mesma unidade (linha do ranking).  
***Similaridade:*** Os elementos repetem a mesma estrutura (ícone + nome + pontuação) com o mesmo estilo gráfico, criando consistência e facilitando a identificação de padrões.  
***Figura-fundo:*** O fundo acinzentado com textura discreta destaca os blocos verdes dos rankings, criando contraste e reforçando a percepção de elementos clicáveis ou importantes.  
***Continuidade:*** O alinhamento vertical das informações (posição → avatar → nome → pontos) guia o olhar do usuário de forma fluida, contribuindo para uma boa legibilidade.  
***Foco:*** As medalhas de 1º, 2º e 3º lugares chamam mais atenção com ícones e cores distintas, destacando as três primeiras posições com clareza visual.  


### 3. Recomendações Ergonômicas

***Agrupamento e distinção entre itens:*** A hierarquia visual é bem definida: título em destaque, ranking listado com diferenciação por posição. Os elementos similares foram agrupados de forma lógica.  
***Feedback imediato:*** A tela fornece um bom feedback passivo. A pontuação aparece diretamente, sem exigir interação.  
***Carga de trabalho:*** A tela é simples, clara e não exige memorização ou esforço do usuário para compreender as informações.  

### 4. Regras de Ouro (Shneiderman):

***Consistência:*** A tela mantém um estilo visual consistente: cores, tipografia, disposição dos itens e ícones.  
***Feedback informativo:*** O usuário entende imediatamente a posição no ranking e a pontuação, o que caracteriza um feedback passivo eficaz.  
***Fechar o ciclo de diálogo:*** O conteúdo está completo e fechado, não exige ações do usuário para concluir uma tarefa.  
***Permitir desfazer ações:*** Como é uma tela de visualização, não há ações para desfazer.  
***Redução da carga da memória do usuário:*** A informação é apresentada de forma clara e acessível, sem exigir que o usuário memorize etapas anteriores.

<img width="1151" alt="Prototipo Ranking de Sustentabilidade" src="https://github.com/user-attachments/assets/97eff055-0479-42c9-8d5e-5e4621d46b28" />

## Protótipo Avaliar Pontos de Coleta

### 1. Objetivo da Tela

A tela tem como objetivo permitir que os usuários avaliem os pontos de coleta disponíveis no sistema, fornecendo feedbacks sobre aspectos como qualidade geral, facilidade de acesso e horário de funcionamento. As avaliações são atribuídas individualmente a cada quesito por meio de um sistema de estrelas, e a nota geral do ponto de coleta é calculada com base na média dessas avaliações. 

Quando o usuário seleciona um ponto de coleta para avaliar:
- O sistema exibe dados básicos do local selecionado (nome e endereço).
- A interface apresenta campos de avaliação com estrelas para Nota Geral, Facilidade de Acesso e Horário de Funcionamento.
- O usuário pode complementar a avaliação com um comentário opcional.
- Ao finalizar, o botão "Enviar Avaliação" registra o feedback.

### 2. Princípios Gestálticos

***Proximidade:*** Elementos relacionados, como os critérios de avaliação (Nota Geral, Facilidade de Acesso, Horário de Funcionamento) e suas respectivas estrelas, estão próximos entre si. Isso ajuda o usuário a perceber que essas informações fazem parte de um mesmo grupo funcional.  
***Similaridade*** As estrelas de avaliação seguem o mesmo formato visual (tamanho, cor e estilo), indicando que todas têm a mesma função: atribuir uma nota. O mesmo vale para os títulos dos critérios, que usam uma tipografia padronizada e negrito.  
***Continuidade*** A disposição vertical e alinhada dos campos de avaliação guia o olhar do usuário de forma natural do topo ao botão final "Enviar Avaliação", mantendo o fluxo visual coerente.  
***Figura-Fundo*** O uso de fundo branco com elementos em verde e amarelo cria um contraste eficaz, facilitando a identificação do conteúdo relevante (estrelas, botões, textos) em relação ao plano de fundo.

### 3. Recomendações Ergonômicas

***Uso de Cores:*** As cores utilizadas seguem um padrão para assuntos relacionados ao Meio Ambiente.  
***Carga de trabalho:*** A tela é simples, clara e não exige memorização ou esforço do usuário para compreender as informações.  
***Feedback imediato:*** Os campos de avaliação oferecem resposta imediata ao clique.  
***Legibilidade:*** Texto com fontes legíveis e bom contraste entre os textos e o fundo.  


### 4. Regras de Ouro (Shneiderman):

***Consistência:*** Todos os botões, ícones e fontes seguem um padrão visual consistente, facilitando o reconhecimento de ações.  
***Prevenir erros*** Campos obrigatórios estão bem sinalizados.  
***Reduzir a carga de memória do usuário***  As informações sobre os pontos de coleta e ícones são exibidos evitando que o usuário precise memorizar detalhes.  
***Controle ao Usuário:*** O usuário pode editar ou não sua avaliação antes de enviar.  
***Fechar Ciclo de Diálogo:*** Após clicar no botão de enviar avaliação, o sistema exibirá uma mensagem confimando o sucesso ou erro da ação.

<img width="1200" alt="Avaliar Pontos de Coleta" src="https://github.com/user-attachments/assets/019358e5-6429-435e-9fc0-549d9744a8d3" />

## Protótipo Gerenciar Conteúdo Informativo

### 1. Objetivo da Tela

A tela tem como objetivo informar os usuários sobre notícias atuais relacionadas à reciclagem e sustentabilidade. Ela apresenta uma lista de matérias publicadas com data, horário e título, permitindo ao usuário acessar conteúdos relevantes de forma organizada e atualizada. Além disso, há opções para busca, compartilhamento e salvamento de notícias.

Os principais elementos da interface incluem:

- Lista de notícias com imagens e títulos resumidos.
- Data e hora da publicação de cada notícia.
- Campo de busca no topo da tela.
- Ícones laterais para acessar notícias em alta, compartilhar e visualizar notícias salvas.

### 2. Princípios Gestálticos

***Proximidade:*** Cada bloco de notícia agrupa imagem, título e data/hora de publicação próximos entre si, reforçando que fazem parte do mesmo item informativo.  
***Similaridade:*** Todos os blocos de notícias seguem o mesmo layout (imagem à esquerda, texto à direita), facilitando a identificação e leitura. Os ícones laterais também compartilham o mesmo estilo visual.  
***Continuidade:*** A organização vertical e sequencial dos blocos de notícia guia naturalmente o olhar do usuário de cima para baixo, favorecendo a leitura contínua.  
***Figura-Fundo:*** O fundo cinza claro contrasta com os cartões brancos das notícias, destacando claramente o conteúdo principal e evitando confusão visual.

### 3. Recomendações Ergonômicas

***Uso de Cores:*** As cores predominantes (verde, branco e cinza) reforçam a temática ambiental e mantêm um visual limpo e harmonioso.  
***Carga de trabalho:*** A tela é simples e objetiva, apresentando o conteúdo de forma clara, sem sobrecarregar o usuário com informações desnecessárias.  
***Feedback imediato:*** A busca e os ícones de interação (compartilhar, salvar) sugerem ações diretas e fáceis de compreender.  
***Legibilidade:*** O uso de fonte preta sobre fundo branco e cinza claro garante boa leitura. Títulos em negrito ajudam na identificação rápida dos conteúdos.


### 4. Regras de Ouro (Shneiderman):

***Consistência:*** O layout das notícias e os ícones seguem um padrão coeso, reforçando a familiaridade com a navegação.  
***Prevenir erros:*** A estrutura da interface evita cliques confusos, com ícones bem separados e intuitivos.  
***Reduzir a carga de memória do usuário:*** As informações essenciais (título, imagem e data) estão visíveis, não exigindo memorização.  
***Controle ao Usuário:*** O usuário decide o que buscar, ler, compartilhar ou salvar.  
***Fechar Ciclo de Diálogo:*** Ao interagir com botões como "salvar" ou "compartilhar", é esperado que o sistema forneça feedback visual ou textual, indicando que a ação foi realizada com sucesso.

<img width="1200" alt="Avaliar Pontos de Coleta" src="https://i.imgur.com/OnrPhMw.png" />


## Protótipo Recomendar Conteúdos Personalizados

### 1. Objetivo da Tela

A tela tem como objetivo educar os usuários sobre práticas e conceitos de reciclagem por meio de conteúdos audiovisuais. Ela centraliza vídeos explicativos sobre o tema, incentivando o aprendizado e a conscientização ambiental. Além disso, oferece um campo de busca para facilitar o acesso ao conteúdo, um convite para responder a um formulário e links para materiais complementares, como artigos, fóruns e mais informações.

Os principais elementos da interface incluem:

- Banner de destaque com chamada educativa.
- Seção de vídeos com miniaturas, títulos e duração.
- Campo de busca para filtrar conteúdos.
- Menu lateral com links para conteúdos adicionais (Artigos, Fóruns, Mais informações).
- Aviso em destaque incentivando o preenchimento de um formulário.

### 2. Princípios Gestálticos

***Proximidade:*** As miniaturas dos vídeos estão agrupadas com seus respectivos títulos e duração, facilitando a identificação de que fazem parte de um mesmo item.  
***Similaridade:*** Os vídeos seguem o mesmo padrão de exibição (miniatura com moldura, título abaixo e tempo no canto inferior), o que contribui para uma navegação mais intuitiva.  
***Continuidade:*** A disposição horizontal dos vídeos em linha orienta naturalmente o olhar do usuário da esquerda para a direita, promovendo uma navegação fluida.  
***Figura-Fundo:*** O fundo cinza claro e os cartões brancos dos vídeos criam contraste, destacando os elementos principais e facilitando a leitura visual.

### 3. Recomendações Ergonômicas

***Uso de Cores:*** A interface usa tons de verde e cinza, alinhados com a identidade visual ecológica e com boa harmonia visual.  
***Carga de trabalho:*** A tela oferece informações de maneira simples, visual e direta, com vídeos curtos e bem sinalizados.  
***Feedback imediato:*** O botão de busca e os vídeos indicam ações claras ao passar o cursor, promovendo resposta imediata.  
***Legibilidade:*** Tipografias com bom espaçamento, cores de alto contraste e títulos curtos ajudam na leitura rápida e sem esforço.


### 4. Regras de Ouro (Shneiderman):

***Consistência:*** Os vídeos, botões e links seguem padrões visuais uniformes, facilitando o uso por parte do usuário.  
***Prevenir erros:*** A interface é limpa, com poucos elementos clicáveis agrupados de forma lógica, evitando erros de navegação.  
***Reduzir a carga de memória do usuário:*** As informações são visuais e contextualizadas, eliminando a necessidade de memorização.  
***Controle ao Usuário:*** O usuário escolhe o vídeo que deseja assistir, podendo navegar ou buscar outros conteúdos livremente.  
***Fechar Ciclo de Diálogo:*** Após assistir a um vídeo, o usuário pode continuar explorando a tela ou seguir para outras seções informativas.

<img width="1200" alt="Avaliar Pontos de Coleta" src="https://i.imgur.com/6uG2SyM.png" />


## Protótipo Compartilhar Informações 

### 1. Objetivo da Tela

A tela tem como objetivo permitir que os usuários compartilhem conteúdos e informações relevantes sobre reciclagem por meio de diferentes canais. O compartilhamento amplia o alcance do conteúdo e estimula o engajamento com práticas sustentáveis.

Quando o usuário seleciona a opção "compartilhar" na tela de gerenciar conteúdo informativo, o sistema:

- Exibe o título, imagem e data da publicação selecionada.
- Apresenta quatro opções de compartilhamento: **WhatsApp**, **Email**, **Copiar link** e **Facebook**.
- Permite o compartilhamento com apenas um clique, usando ícones visuais que facilitam o reconhecimento.

### 2. Princípios Gestálticos

***Proximidade:*** Os botões de compartilhamento estão agrupados logo abaixo do conteúdo da notícia, reforçando sua relação direta com a ação de compartilhar.  
***Similaridade:*** Todos os botões seguem o mesmo estilo visual (tamanho, borda arredondada e ícone + texto), deixando claro que representam ações semelhantes.  
***Figura-Fundo:*** O uso de uma janela modal com fundo branco sobreposto ao conteúdo cria contraste e direciona a atenção do usuário à ação de compartilhamento.  
***Foco:*** A tela reduz distrações ao destacar a informação principal e apresentar as ações disponíveis de forma clara.

### 3. Recomendações Ergonômicas

***Carga de trabalho:*** A interface é simples e direta, reduzindo o esforço cognitivo e evitando a sobrecarga de informações.  
***Legibilidade:*** Tipografia limpa e contraste adequado entre texto e fundo garantem boa leitura e compreensão rápida.  
***Acessibilidade Visual:*** Ícones grandes, bom contraste de cores e espaçamento que facilita o toque e a leitura.  
 ***Feedback imediato:***  A botão de compartilhar responde imediatamente enviando a informação para o canal selecionado pelo usuário.

### 4. Regras de Ouro (Shneiderman)

***Consistência:*** Todos os botões têm o mesmo formato, tamanho e linguagem visual.  
***Reduzir a carga de memória do usuário:*** O conteúdo da notícia é exibido no mesmo espaço da ação, evitando a necessidade de lembrar detalhes de outra tela.  
***Prevenir erros:*** A interface limita a ação do usuário a cliques em canais predefinidos, reduzindo a chance de erro.  
***Controle ao Usuário:*** O usuário escolhe livremente o canal por onde deseja compartilhar.  
***Fechar Ciclo de Diálogo:*** Após compartilhar um conteúdo, o usuário pode o ciclo de diálogo e continuar vendo ou compartilhando outros conteúdos.


<img width="1200" alt="Compartilhar Informações" src="https://github.com/user-attachments/assets/380cd383-9da1-416d-a58c-30f94e1cd9e6"/>

## Protótipo Listar Pontos de Coleta

### 1. Objetivo da Tela

A tela tem como objetivo auxiliar os usuários na localização de pontos de coleta de resíduos recicláveis próximos à sua localização. Ao acessar a seção **"Pontos de Coleta"**, o usuário pode visualizar, em um mapa interativo, os locais disponíveis para descarte, bem como os tipos de materiais aceitos em cada ponto.

O sistema permite que o usuário:

- Visualize uma lista dos pontos de coleta próximos, ordenados por distância.  
- Utilize filtros para selecionar quais tipos de resíduos deseja descartar (ícones coloridos representam plástico, vidro, metal e não-recicláveis).  
- Clique em um ponto da lista ou diretamente no mapa para ver os detalhes e a distância até o local.  
- Pesquise pontos de coleta por endereço ou nome.

### 2. Princípios Gestálticos

***Proximidade:*** As informações de cada ponto de coleta (nome, endereço e ícones de materiais) são apresentadas em blocos visuais coesos, facilitando a compreensão como uma unidade.  
***Similaridade:*** Todos os cards dos pontos de coleta compartilham o mesmo padrão de layout, cor de fundo e estilo de ícones, criando uma identidade visual clara e uniforme.  
***Figura-Fundo:*** O contraste entre o painel lateral (com fundo claro) e o mapa (com elementos visuais de localização) separa com clareza as áreas de listagem e navegação espacial.  
***Foco:*** A janela de destaque sobre o mapa exibe os detalhes do ponto selecionado, direcionando a atenção do usuário de forma eficaz.

### 3. Recomendações Ergonômicas

***Carga de trabalho:*** A interface apresenta informações essenciais de forma resumida e visual, reduzindo a sobrecarga cognitiva.  
***Legibilidade:*** Uso de fontes legíveis, layout organizado e contraste adequado entre texto e fundo favorecem a leitura.  
***Acessibilidade visual:*** Ícones coloridos e reconhecíveis para os tipos de resíduos, além de espaçamento adequado entre elementos interativos.  
***Feedback imediato:*** Ao clicar em um ponto da lista ou do mapa, uma janela informativa é exibida com detalhes, fornecendo feedback visual imediato.  

### 4. Regras de Ouro (Shneiderman)

***Consistência:*** Elementos visuais como botões, ícones e estrutura dos cards seguem o mesmo padrão em toda a interface.  
***Reduzir a carga de memória do usuário:*** A informação de materiais aceitos, endereço e distância é sempre apresentada no mesmo formato, facilitando a comparação entre pontos.  
***Prevenir erros:*** A interação com os pontos é baseada em cliques simples e informações visuais, minimizando riscos de navegação equivocada.  
***Controle ao Usuário:*** O usuário escolhe livremente quais filtros aplicar e quais pontos visualizar.  

<img width="1200" alt="Compartilhar Informações" src="https://github.com/user-attachments/assets/92362b45-ced5-4ebf-bd25-b0b351bdc7d6"/>


## Protótipo Tela de Cadastro de Ponto de Coleta

### 1. Objetivo da Tela

A tela tem como objetivo permitir que os usuários cadastrem novos pontos de coleta no sistema ReciclaAqui, facilitando a expansão da rede de coleta seletiva e promovendo o engajamento com práticas sustentáveis. O formulário foi projetado para ser simples, intuitivo e visualmente coerente com a identidade da plataforma.

Ao acessar essa tela, o usuário pode:

- Informar os dados principais do ponto de coleta, como nome, endereço e descrição.
- Selecionar os tipos de materiais recicláveis aceitos no local.
- Enviar uma imagem ilustrativa do ponto.
- Concluir o processo com um único clique no botão “Cadastrar”.

### 2. Princípios Gestálticos

- **Proximidade**: Os campos relacionados estão organizados em blocos claros (informações básicas, materiais recicláveis, imagem e ação final), facilitando a leitura e compreensão do formulário.
- **Similaridade**: Os botões de seleção de materiais recicláveis seguem o mesmo estilo visual (formato circular e alinhamento à esquerda), reforçando sua função comum.
- **Figura-Fundo**: A estrutura de cores e contrastes destaca o formulário do plano de fundo, guiando o olhar do usuário para a tarefa de preenchimento.
- **Foco**: O botão “Cadastrar” em azul escuro destaca-se no final do formulário, chamando a atenção para a principal ação esperada do usuário.

### 3. Recomendações Ergonômicas

- **Carga de trabalho**: O formulário é compacto e objetivo, pedindo apenas as informações essenciais para o cadastro.
- **Legibilidade**: Campos bem espaçados e tipografia clara facilitam a leitura e o preenchimento.
- **Acessibilidade visual**: Uso de ícones e texto nos botões auxilia o reconhecimento, com boa separação visual entre elementos.
- **Feedback esperado**: Embora ainda não representado visualmente, é recomendável implementar mensagens de sucesso e validação (ex: “Ponto cadastrado com sucesso!” ou “Campo obrigatório não preenchido”).

### 4. Regras de Ouro (Shneiderman)

- **Consistência**: Os campos seguem um padrão visual coeso, mantendo o design uniforme com o restante do site.
- **Reduzir a carga de memória do usuário**: O formulário apresenta todos os campos na mesma tela, evitando a necessidade de lembrar informações de outras etapas.
- **Prevenir erros**: O uso de botões pré-definidos para os tipos de materiais evita erros de digitação e promove uniformidade de dados.
- **Controle ao Usuário**: O usuário pode decidir livremente quais informações adicionar e quais categorias selecionar.
- **Fechar Ciclo de Diálogo**: A expectativa é que, ao submeter o formulário, o sistema forneça feedback imediato, encerrando a ação de forma clara.

<img width="1200" alt="Compartilhar Informações" src="https://github.com/user-attachments/assets/1769377a-56fa-4920-b5a1-d675cb6c1404"/>

## Protótipo Registrar Açoes de reciclagem

### 1. Objetivo da Tela

A tela tem como objetivo permitir que os usuários registrem suas ações de reciclagem, informando o tipo de material reciclado, a quantidade e o ponto de coleta utilizado. O sistema deve armazenar essas informações para histórico do usuário e cálculo de métricas ambientais.

Ao acessar essa tela, o usuário pode:

- O sistema exibe um formulário simples para registro.
- Campos incluem: seleção do material, quantidade, unidade de medida e ponto de coleta.
- Um botão "Registrar Ação" salva a informação.

### 2. Princípios Gestálticos aplicados

- **Proximidade**: Campos relacionados (como "Quantidade" e "Unidade de medida") estarão agrupados próximos
- **Similaridade**: Todos os campos de entrada compartilham o mesmo estilo visual, os botões mantêm consistência em todo o site, e os ícones de materiais recicláveis seguem o padrão internacional de cores (azul para papel, amarelo para metal, etc.
- ***Figura-Fundo:*** O design utiliza um fundo claro (#FFFFFF) com elementos interativos em cores temáticas (#388E3C para ações primárias), garantindo alto contraste e acessibilidade, enquanto o botão principal recebe destaque visual através de gradiente verde (#43A047 a #2E7D32), sombra sutil e tamanho aumentado para direcionar o foco do usuário.
  - **Foco**: O botão “Enviar” em verde destaca-se no final do formulário, chamando a atenção para a principal ação esperada do usuário.

### 3. Recomendações Ergonômicas

- **Carga de trabalho**: O formulário é compacto e objetivo, pedindo apenas as informações essenciais para o registro de reciclagem.
- **Legibilidade**: Campos bem espaçados e tipografia clara facilitam a leitura e o preenchimento.
- **Acessibilidade visual**: Uso de ícones e texto nos botões auxilia o reconhecimento, com boa separação visual entre elementos.
- **Feedback esperado**: Microinterações em todos os campos (hover, focus states) e notificação toast persistente por 5s após registro, incluindo:
- Ícone de confirmação ✅
- Resumo da ação ("2kg de plástico registrados")
- Impacto ambiental calculado ("+15 pontos | Economizou 8L água")

### 4. Regras de Ouro (Shneiderman)

- **Consistência**: Os campos seguem um padrão visual coeso, mantendo o design uniforme com o restante do site.
- **Reduzir a carga de memória do usuário**: O formulário apresenta todos os campos na mesma tela, evitando a necessidade de lembrar informações de outras etapas.
- **Prevenir erros**: O uso de botões pré-definidos para os tipos de materiais evita erros de digitação e promove uniformidade de dados.
- **Controle ao Usuário**: O usuário pode decidir livremente quais informações adicionar e quais categorias selecionar.
- **Fechar Ciclo de Diálogo**: A expectativa é que, ao submeter o formulário, o sistema forneça feedback imediato, encerrando a ação de forma clara.


![Registros a](https://github.com/user-attachments/assets/e1703ed2-c572-4ae0-8245-89a66c8f4c73)

## Protótipo Histórico de reciclagem

### 1. Objetivo da Tela

Permitir que usuários visualizem, organizem e analisem todas as ações de reciclagem registradas, com métricas de impacto ambiental e progresso.

Ao acessar essa tela, o usuário pode:

- Visualização cronológica ou categorizada dos registros
- Filtros por material, período, ponto de coleta,quantidade ou tipo de ordenação.
- Resumo de impacto acumulado (ex: "Total: 42kg reciclados | 200L água economizados")


### 2. Princípios Gestálticos aplicados

- **Proximidade**: Campos relacionados (como "Quantidade" e "Unidade de medida") estarão agrupados próximos
- **Similaridade**: Todos os campos de entrada compartilham o mesmo estilo visual, os botões mantêm consistência em todo o site, e os ícones de materiais recicláveis seguem o padrão internacional de cores (azul para papel, amarelo para metal, etc.
- ***Figura-Fundo:*** O design utiliza um fundo claro (#FFFFFF) com elementos interativos em cores temáticas (#388E3C para ações primárias), garantindo alto contraste e acessibilidade, enquanto o botão principal recebe destaque visual através de gradiente verde (#43A047 a #2E7D32), sombra sutil e tamanho aumentado para direcionar o foco do usuário.
  - **Foco**: O botão “Filtrar” em verde destaca-se no final do formulário, chamando a atenção para a principal ação esperada do usuário.

### 3. Recomendações Ergonômicas

- **Carga de trabalho**:Todos os filtros (material, quantidade, status e período) são exibidos em um único painel colapsável, com espaçamento adequado entre controles e pré-visualização em tempo real dos resultados aplicados, garantindo eficiência sem sobrecarregar a interface.
- **Legibilidade**: Campos bem espaçados e tipografia clara facilitam a leitura e o preenchimento.
- **Acessibilidade visual**: UBadges coloridos para status (🟢 Validado, 🟡 Pendente, 🔴 Rejeitado) e barra de progresso horizontal para metas de reciclagem mensal.
- **Feedback esperado**: Microinterações em todos os campos (hover, focus states) e notificação toast persistente por 5s após registro, incluindo:
- Tooltips explicativos sobre cálculos de pontos (ex: "1kg plástico = 5pts")
- Preview ao passar o mouse nos filtros


### 4. Regras de Ouro (Shneiderman)

- **Consistência**: O sistema apresenta a quantidade de pontos conquistados separadamente por categoria de material (plástico, papel, vidro etc.), conforme as ações de reciclagem registradas pelo usuário."
- **Reduzir a carga de memória do usuário**: Todos os filtros (material, quantidade, status e período) são exibidos em um único painel colapsável, com espaçamento adequado entre controles e pré-visualização em tempo real dos resultados aplicados, garantindo eficiência sem sobrecarregar a interface.
- **Prevenir erros**: O uso de botões pré-definidos para os tipos de materiais evita erros de digitação e promove uniformidade de dados.
- **Controle ao Usuário**: O usuário pode decidir livremente quais informações adicionar e quais categorias selecionar.
- **Fechar Ciclo de Diálogo**: A expectativa é que, ao submeter a busca integrada, o sistema forneça feedback imediato, encerrando a ação de forma clara.
![H de Reciclagem](https://github.com/user-attachments/assets/70434a7d-f20c-4ce9-8805-ce0068000b95)

![Com o filtro](https://github.com/user-attachments/assets/749058b3-d6a7-4ae4-95bc-81780564940c)


