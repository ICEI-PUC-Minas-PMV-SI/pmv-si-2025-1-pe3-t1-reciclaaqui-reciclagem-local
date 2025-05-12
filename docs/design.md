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

**Proximidade:** Os campos de login e senha estão próximos um do outro, formando um grupo visual coerente de entrada de dados. O botão “Entrar” também está logo abaixo, reforçando a ideia de sequência de ação.  

**Similaridade:** Os campos de texto (“Login” e “Senha”) possuem o mesmo formato e ícone à esquerda, o que facilita a associação como partes de um mesmo grupo funcional. Botões (“Entrar” e “Cadastre-se”) têm estilos distintos, o que diferencia as ações primária e secundária.  

**Figura-fundo:** O container branco central (com campos e botões) se destaca do fundo acinzentado discreto, facilitando a percepção do que é clicável e separando visualmente o conteúdo principal do plano de fundo.  

**Continuidade:** A organização vertical dos elementos (campos de entrada → botão de ação → link de recuperação → botão de cadastro) guia o olhar do usuário de forma natural e fluida, do topo para baixo.  

**Foco:** O botão verde “Entrar” se destaca como principal ação da tela, tanto pela cor vibrante quanto pela posição. O botão “Cadastre-se” em azul também chama atenção, mas com menor prioridade, cumprindo bem sua função como ação secundária.

### 3. Recomendações Ergonômicas

**Agrupamento e distinção entre itens:** Elementos dispostos em ordem lógica: logo → campos → ações.  
**Feedback imediato:** Campos mudam com o foco; botão "Entrar" se destaca.  
**Carga de trabalho:** Interface simples e intuitiva, sem exigir memorização.

### 4. Regras de Ouro (Shneiderman):

**Consistência:** Estilo visual padronizado (cores, botões e campos).  
**Atalhos:** “Manter conectado” facilita acessos frequentes.  
**Feedback Informativo:** Campos e botões respondem ao clique/foco.  
**Minimizar Carga de Memória:** Tudo essencial está visível e intuitivo.  
**Controle ao Usuário:** Opções claras: entrar, recuperar senha ou cadastrar.  
**Prevenir Erros:** Layout simples reduz chances de erro.  
**Desfazer Ações:** Tela básica, sem ações críticas para desfazer.  
**Fechar Ciclo de Diálogo:** Ação de login leva a um próximo passo claro.

<img width="900" alt="login" src="https://github.com/user-attachments/assets/443eb6aa-7055-422a-b13d-f53c88d78b8d" />



## Protótipo Cadastro

### 1. Objetivo da Tela  

A tela permite que novos usuários criem uma conta na plataforma. Nela, são solicitados três campos obrigatórios: **Email**, **Senha** e **Confirmação de Senha**. O botão “Cadastrar” finaliza o processo de criação de conta. Essa etapa é essencial para garantir o acesso  seguro ao sistema.  

### 2. Princípios Gestálticos

**Proximidade:** Os três campos estão alinhados verticalmente com espaçamento, formando um agrupamento lógico e visual coeso.  

**Similaridade:** Todos os campos seguem o mesmo padrão de design com ícones à esquerda, campos com o mesmo tamanho e estilo, facilitando a identificação de que pertencem ao mesmo conjunto funcional.  

**Figura-fundo:** O formulário está inserido em um container branco sobre um fundo acinzentado com textura, o que facilita a distinção clara entre conteúdo principal e plano de fundo.  

**Continuidade:** A estrutura vertical conduz o olhar do usuário naturalmente do título até o botão “Cadastrar”, promovendo um fluxo de navegação fluido.  

**Foco:** O botão azul escuro “Cadastrar” se destaca dos demais elementos, indicando com clareza a ação principal esperada nesta tela.

### 3. Recomendações Ergonômicas

**Agrupamento e distinção entre itens:** A separação clara entre campos e botão torna a interação intuitiva.  
**Feedback imediato:** Espera-se que os campos respondam ao foco e preenchimento com mudanças visuais (ex: borda azul, preenchimento suave).  
**Carga de trabalho:** A tela contém apenas o essencial, reduzindo a sobrecarga mental e tornando o cadastro simples e direto.  
**Segurança perceptível:** Ícones de cadeado nos campos de senha reforçam a noção de proteção de dados.

### 4. Regras de Ouro (Shneiderman):

**Consistência:** A tela segue o padrão visual estabelecido pelo restante da plataforma, com campos e botões no mesmo estilo.  
**Atalhos:** O campo “Confirmar Senha” ajuda a evitar erros futuros, sem exigir memorizações complexas.  
**Feedback Informativo:** A interação com os campos e o clique no botão devem retornar feedbacks claros (visuais e/ou mensagens).  
**Minimizar Carga de Memória:** Todas as instruções e campos estão visíveis, não exigindo recordações do usuário.  
**Controle ao Usuário:** O usuário pode optar por cadastrar-se ou retornar para a tela anterior sem bloqueios.  
**Prevenir Erros:** A confirmação da senha evita falhas comuns de digitação.  
**Desfazer Ações:** O usuário pode apagar ou editar qualquer campo antes de enviar.  
**Fechar Ciclo de Diálogo:** Após clicar em “Cadastrar”, o sistema deve apresentar uma resposta clara: sucesso ou mensagem de erro.

<img width="900" alt="cadastro" src="https://github.com/user-attachments/assets/094421e7-8393-4f16-b173-6ca3ecb378a9" />



## Protótipo Gerenciar Perfil

### 1. Objetivo da Tela  

A tela “Gerenciar Perfil” permite ao usuário atualizar suas informações pessoais, como e-mail, senha e imagem de perfil. A interface oferece campos para redefinir a senha atual e confirmar a nova senha, bem como um botão para carregar uma nova foto de perfil. Ao final, há um botão “Salvar alterações” que confirma as modificações feitas pelo usuário.

### 2. Princípios Gestálticos

**Proximidade:** Os campos de e-mail e redefinição de senha estão agrupados de maneira lógica, facilitando o reconhecimento de que fazem parte de uma mesma seção de edição de dados.  

**Similaridade:** Todos os campos seguem um padrão visual uniforme, com campos cinza claro, ícones de lápis para edição, e fontes consistentes, fortalecendo a coerência entre elementos.  

**Figura-fundo:** O uso de um fundo branco e uma faixa central com textura acinzentada destaca os elementos interativos em primeiro plano, como o botão de envio de foto e os campos de texto.  

**Continuidade:** A organização dos elementos de cima para baixo (e-mail, imagem, redefinição de senha, botão) conduz o olhar do usuário de maneira fluida e intuitiva.  

**Foco:** O botão azul escuro “Salvar alterações” se destaca dos demais elementos da tela, indicando claramente a ação final desejada.

### 3. Recomendações Ergonômicas

**Agrupamento e distinção entre itens:** Campos bem organizados em blocos funcionais (e-mail, imagem, senha).  
**Feedback imediato:** Os campos de edição têm ícones visíveis (lápis), sugerindo edição; espera-se que os campos e botões ofereçam resposta visual ao toque.  
**Carga de trabalho:** A interface é simples, objetiva e não sobrecarrega o usuário com informações desnecessárias.  
**Consistência visual:** Ícones, cores e tipografia reforçam a identidade da interface.

### 4. Regras de Ouro (Shneiderman):

**Consistência:** Os elementos seguem o mesmo padrão visual das outras telas do sistema.  
**Atalhos:** A função de carregar nova foto está em local acessível e visível, agilizando a ação.  
**Feedback Informativo:** Espera-se feedback visual ou textual ao clicar em “Salvar alterações” ou ao interagir com os campos.  
**Minimizar Carga de Memória:** Todas as informações e ações estão visíveis, sem necessidade de memorização de passos.  
**Controle ao Usuário:** O usuário pode editar ou não suas informações e cancelar a ação antes de confirmar.  
**Prevenir Erros:** A confirmação de nova senha ajuda a evitar trocas não intencionais.  
**Desfazer Ações:** Possibilidade de apagar ou corrigir dados antes de salvar.  
**Fechar Ciclo de Diálogo:** O botão “Salvar alterações” finaliza claramente a ação, indicando que as mudanças foram aplicadas.

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

