# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE


## 3.1 Objetivos deste documento
Este documento tem como objetivo definir os requisitos funcionais e não funcionais do sistema ReciclaAqui, garantindo que o desenvolvimento atenda às necessidades dos usuários e aos objetivos do projeto. Ele serve como referência para a equipe de desenvolvimento, especificando as funcionalidades essenciais, as restrições e as diretrizes técnicas que o sistema deve seguir.

Os principais objetivos deste documento são:

Fornecer uma visão clara do sistema: Descrever as funcionalidades e os componentes do sistema de maneira detalhada e organizada.

Definir os requisitos funcionais e não funcionais: Especificar os comportamentos esperados do sistema, bem como seus padrões de desempenho, segurança e usabilidade.

Estabelecer o escopo do projeto: Determinar quais funcionalidades estarão incluídas no desenvolvimento e quais estarão fora do escopo.

Servir como base para o desenvolvimento e testes: Garantir que a implementação siga os requisitos documentados e que a equipe de testes possa validar o funcionamento correto do sistema.

Facilitar a comunicação entre os envolvidos no projeto: Garantir que desenvolvedores, designers, testadores e stakeholders tenham um entendimento comum sobre o aplicativo.

Auxiliar na manutenção e futuras evoluções: Fornecer uma referência documentada que permita aprimoramentos e expansões do sistema no futuro.

Este documento será atualizado conforme necessário para refletir mudanças nos requisitos do projeto e garantir que as especificações continuem alinhadas às necessidades dos usuários e às diretrizes da equipe de desenvolvimento.


## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado ReciclaAqui. Ele contará com os seguintes componentes principais:

Cadastro e Login de Usuário: Permite que os usuários criem e acessem suas contas para personalizar a experiência e acompanhar sua atividade.

Localização de Pontos de Coleta: Exibe locais próximos para descarte correto de materiais recicláveis.

Guia de Reciclagem: Fornece informações sobre separação correta de resíduos e tipos de materiais recicláveis.

Sistema de Notificações: Envia alertas sobre dias de coleta, eventos de reciclagem e campanhas ambientais.

Ranking de Sustentabilidade: Estimula o engajamento dos usuários através de um sistema de pontuação baseado na participação ativa na reciclagem.


### 3.2.2 Missão do produto
O ReciclaAqui tem como missão auxiliar a população a adotar práticas sustentáveis de descarte de resíduos recicláveis, promovendo a educação ambiental e facilitando a localização de pontos de coleta adequados. O aplicativo busca incentivar mudanças de comportamento e reduzir o impacto ambiental causado pelo descarte inadequado de resíduos.

### 3.2.3 Limites do produto
O ReciclaAqui não fornecerá serviços de coleta direta de resíduos e não se responsabilizará pelo transporte de materiais recicláveis. Ele servirá apenas como uma ferramenta de informação e localização de pontos de descarte. Além disso, o aplicativo não oferecerá suporte para transações financeiras ou venda de materiais recicláveis.


### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Facilidade no acesso à informação |	Essencial |
|2 | Aumento da taxa de reciclagem | Essencial | 
|3 | Redução do descarte inadequado | Essencial | 
|4	| Conscientização ambiental	| Recomendável | 
|5	| Geolocalização para pontos de coleta |	Essencial |
|6 | Integração com a comunidade | Recomendável | 
|7 | Personalização e notificações | Recomendável | 
|8	| Sustentabilidade incentivada |	Opcional |
|9 | Recompensas por reciclagem | Recomendável | 
|10 | Parcerias com empresas sustentáveis | Opcional | 
|11	| Estatísticas e relatórios de impacto |	Recomendável |
|12 | Suporte para dúvidas e orientações | Essencial | 
|13 | Compatibilidade com diferentes dispositivos | Essencial | 
|14	| Suporte a múltiplos idiomas |	Opcional |


## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| RF1 | Gerenciar usuários | O sistema deve permitir que o usuário cadastre, visualize, edite e exclua seu próprio cadastro. |
| RF2 | Realizar login/logout | O sistema deve permitir que o usuário realize login e logout, desde que já esteja cadastrado. |
| RF3 | Gerenciar perfil | O sistema deve permitir que o usuário cadastre, edite, visualize e exclua informações pessoais, como nome, foto e senha. |
| RF4 | Cadastrar Pontos de Coleta | O sistema deve permitir cadastro de pontos de coleta de reciclagem, informando dados como nome, endereço, tipo de material aceito e horário de funcionamento. |
| RF5 | Localizar pontos de coleta | O sistema deve exibir uma lista de pontos de coleta e permitir busca por localização ou tipo de material aceito. |
| RF6 | Exibir detalhes de ponto de coleta | O sistema deve exibir informações detalhadas sobre um ponto de coleta, incluindo endereço, materiais aceitos e horário de funcionamento. |
| RF7 | Filtrar pontos de coleta | O sistema deve permitir que o usuário filtre pontos de coleta por tipo de material reciclável aceito, como vidro, papel, plástico e metal. |
| RF8 | Exibir guia de reciclagem | O sistema deve disponibilizar informações sobre separação correta dos resíduos e instruções para reciclagem. |
| RF9 | Emitir notificações | O sistema deve emitir notificações sobre campanhas ambientais e eventos de reciclagem. |
| RF10 | Gerar ranking de sustentabilidade | O sistema deve calcular e exibir um ranking com base nas ações de reciclagem registradas pelo usuário. |
| RF11 | Registrar ações de reciclagem | O sistema deve permitir que o usuário registre ações de reciclagem, informando o tipo de material e o ponto de coleta utilizado. |
| RF12 | Exibir histórico de reciclagem | O sistema deve permitir que o usuário visualize o histórico de ações de reciclagem registradas. |
| RF13 | Avaliar pontos de coleta | O sistema deve permitir que o usuário avalie pontos de coleta e deixe comentários. |
| RF14 | Compartilhar informações | O sistema deve permitir que o usuário compartilhe informações sobre reciclagem. |
| RF15 | Gerenciar conteúdo informativo | O sistema deve permitir que o usuário cadastre, edite, visualize e exclua conteúdos do guia de reciclagem e das campanhas ambientais. |
| RF16 | Recomendar conteúdos personalizados | O sistema deve sugerir materiais educativos e artigos sobre reciclagem com base nos interesses e interações do usuário. |

### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) |  Descrição |
|--------------------|-------------------------------|----------------------------------------|
| RNF1 |	Usabilidade	|O sistema deve ser intuitivo, com tempo de aprendizado inferior a 5 minutos para tarefas básicas (ex.: cadastro, busca de pontos de coleta). |
| RNF2 |	Compatibilidade |	Funcionar em navegadores modernos (Chrome, Firefox, Edge, Safari) e dispositivos móveis (telas a partir de 320px). |
| RNF3 |	Escalabilidade |	A arquitetura deve suportar um aumento de 10x no volume de usuários ou pontos de coleta sem perda de desempenho. |
| RNF4 |	Manutenibilidade |	O código deve ser documentado (comentários, guias de instalação) e modular para facilitar atualizações futuras. |
| RNF5	| Sustentabilidade Técnica |	Otimizar recursos (ex.: compressão de imagens, lazy loading) para reduzir consumo de energia e dados. |
| RNF6	| Conformidade Legal | Cumprir a LGPD para tratamento de dados pessoais, solicitando consentimento explícito para geolocalização e notificações. |

### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Usuário |	Ator responsável pela utilização completa do sistema, desde o seu registro, até ao compartilhamento em relação a informações sobre reciclagem. |
| Administrador |	Usuário responsável pela integridade do sistema e configuração do mesmo, bem como administrar o conteúdo informativo. |
| Tempo |	Usuário responsável por aplicar notificações com o tempo de uso do sistema. |	

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, o usuário poderá gerenciar o seu login e perfil, bem como realizar diversas outras funções intuitivas no sistema. Enquanto o administrador é responsável por gerenciar o conteúdo informativo e o tempo, sendo como responsável, recomendar conteúdos personalizados e emitir notificações ao sistema como um todo. 

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](https://i.imgur.com/u8KQ1Rl.png)
 
### 3.4.2 Descrições de Casos de Uso


#### Caso de Uso 1: Gerenciar o acesso dos usuários
Descrição: Permite que os usuários realizem cadastro, login e logout no sistema utilizando e-mail e senha.  
Ator(es): Usuário

*Pré-condições:*
1. O usuário precisa ter acesso à internet e ao site/app ReciclaAqui
2. Para realizar o login, o usuário deve estar cadastrado no sistema.

*Fluxo Principal:*
1.	O usuário acessa a tela de login.
2.	O usuário insere seu e-mail e senha.
3.	O sistema valida as credenciais.
4.   Se as credenciais forem válidas, o sistema concede acesso.
5.	O usuário pode realizar logout a qualquer momento.

*Fluxos Alternativos:*
- 1.1 - Cadastro de novo usuário:
	1. O usuário acessa a opção de registro, dentro da tela de login
	2. O usuário insere seu nome, e-mail e cria uma senha.
	3. O sistema valida os dados e cria o novo perfil.
	4. O usuário é redirecionado à tela principal.

- 1.2 - Usuário esqueceu a senha:
	1. O usuário acessa a opção "Esqueci minha senha", dentro da tela de login.
	2. O usuário insere o e-mail cadastrado.
	3. O sistema da aplicação envia um link de redefinição para o e-mail informado.

- 1.3 - Erro de autenticação:
	1. O usuário insere dados inválidos/incorretos no formulário de login.
	2. O sistema exibe uma mensagem de erro e permite uma nova tentativa.


#### Caso de Uso 2: Gerenciar perfil do usuário
Descrição: Permite que o usuário edite informações pessoais.  
Ator(es): Usuário

*Pré-condições:*
1. O usuário deve estar autenticado no sistema do site/app ReclameAqui.

*Fluxo Principal:*
1.	O usuário acessa a seção "Meu Perfil".
2.	O usuário edita informações como nome, foto e senha.
3.	O sistema salva as alterações e exibe uma mensagem de confirmação.

*Fluxos Alternativos:*
- 2.1 - Dados inválidos:
	1. O usuário insere dados mal formatados (ex: senha muito curta, foto em formato não permitido).
	2. O sistema exibe mensagem de erro, solicitando a correção dos dados.

- 2.2 - Cancelar edição:
	1. O usuário sai da seção "Meu Perfil" sem salvar suas alterações.
	2. O sistema descarta as mudanças e mantém os dados anteriores

#### Caso de Uso 3: Cadastrar pontos de coleta
**Descrição:** Permite que o usuário cadastre novos pontos de coleta no sistema.  
**Ator(es):** Usuário

**Pré-condições:**  
1. O usuário deve estar autenticado no sistema.

**Fluxo Principal:**  
1. O usuário acessa a seção "Pontos de Coleta".  
2. O usuário seleciona a opção "Cadastrar novo ponto".  
3. O usuário preenche informações como nome do local, endereço, tipo de material aceito e horário de funcionamento.  
4. O sistema salva o novo ponto de coleta e exibe uma mensagem de confirmação.

**Fluxos Alternativos:**  
- **3.1 - Dados inválidos:**  
 1. O usuário insere dados mal formatados (ex: endereço incompleto, campos obrigatórios em branco).  
 2. O sistema exibe mensagem de erro, solicitando a correção dos dados.

- **3.2 - Cancelar cadastro:**  
 1. O usuário sai da tela de cadastro antes de finalizar o preenchimento.  
 2. O sistema descarta as informações inseridas e não realiza o cadastro.


#### Caso de Uso 4: Localizar pontos de coleta
Descrição: Permite que o usuário visualize e busque pontos de coleta cadastrados.  
Ator(es): Usuário

*Pré-condições:*
1. O sistema deve estar com os dados de pontos de coleta atualizados e disponíveis.
2. O usuário deve estar com a geolocalização ativada ou inserir manualmente a localização.

*Fluxo Principal:*
1.	O usuário acessa a seção "Pontos de Coleta".
2.	O sistema exibe uma lista de pontos cadastrados.
3.	O usuário pode buscar por localização ou tipo de material aceito.

*Fluxos Alternativos:*
- 3.1 - Nenhum ponto encontrado:
	1. O sistema não encontra pontos para os critérios informados.
	2. O sistema exibe uma mensagem informando que não há nenhum ponto correspondente com a pesquisa do usuário, e recomenda a ampliação da busca.

#### Caso de Uso 5: Exibir detalhes de um ponto de coleta
Descrição: Exibe informações detalhadas de um ponto de coleta.  
Ator(es): Usuário

*Pré-condições:*
1. O usuário deve ter acessado a lista de pontos de coleta.

*Fluxo Principal:*
1.	O usuário seleciona um ponto de coleta na lista.
2.	O sistema exibe informações como endereço, materiais aceitos e horário de funcionamento.

*Fluxos Alternativos:*
- 4.1 - Falha ao carregar dados:
	1. Ocorre uma falha de conexão ou erro interno.
	2. O sistema exibe uma mensagem de erro e recomenda que o usuário tente novamente.

#### Caso de Uso 6: Filtrar pontos de coleta
Descrição: Permite ao usuário aplicar filtros na busca por pontos de coleta.  
Ator(es): Usuário

*Pré-condições:*
1. O sistema deve ter pontos de coleta cadastrados e categorizados por tipo de material.

*Fluxo Principal:*
1.	O usuário acessa a tela de pontos de coleta.
2.	O usuário seleciona filtros como "Vidro", "Papel", "Plástico", "Metal".
3.	O sistema exibe apenas os pontos compatíveis.

*Fluxos Alternativos:*
- 5.1 - Nenhum ponto encontrado:
	1. O sistema não encontra pontos para os critérios informados.
	2. O sistema exibe uma mensagem informando que não há nenhum ponto correspondente com a pesquisa do usuário, e recomenda a ampliação da busca.

#### Caso de Uso 7: Exibir guia de reciclagem
Descrição: Disponibiliza um guia com instruções sobre separação correta dos resíduos.  
Ator(es): Usuário

*Pré-condições:*
1. O conteúdo do guia deve estar cadastrado e publicado no sistema.

*Fluxo Principal:*
1.	O usuário acessa a opção "Guia de Reciclagem".
2.	O sistema exibe instruções sobre separação e descarte correto de materiais.

*Fluxos Alternativos:*
- 6.1 - Nenhum ponto encontrado:
	1. O sistema falha ao acessar os dados do guia.
	2. O sistema exibe uma mensagem de erro, e recomenda que o usuário recarregue a página.

#### Caso de Uso 8: Gerenciar notificações
Descrição: Envia notificações sobre campanhas ambientais e eventos.  
Ator(es): Sistema

*Pré-condições:*
1. O sistema deve possuir campanhas ou eventos cadastrados.

*Fluxo Principal:*
1.	O sistema verifica eventos ou campanhas disponíveis.
2.   O sistema verifica as preferências e permissões do usuário.
2.	O sistema envia notificações personalizadas ao usuário.

*Fluxos Alternativos:*
- 7.1 - Notificações desativadas:
	1. O usuário desativou o envio de notificações na seção "Meu Perfil".
	2. O sistema não realiza o envio.

#### Caso de Uso 9: Gerenciar ranking de sustentabilidade
Descrição: Exibe um ranking baseado nas ações de reciclagem do usuário.  
Ator(es): Usuário

*Pré-condições:*
1. O usuário deve ter realizado ao menos uma ação registrada.

*Fluxo Principal:*
1.	O usuário acessa a opção "Ranking de Sustentabilidade".
2.	O sistema calcula a pontuação com base nas ações registradas.
3.   O sistema exibe a posição do usuário no ranking.

*Fluxos Alternativos:*
- 8.1 - Nenhuma ação registrada:
	1. O usuário ainda não realizou nenhuma ação.
	2. O sistema exibe mensagem informativa.

#### Caso de Uso 10: Registrar ações de reciclagem
Descrição: O usuário registra materiais reciclados e locais de descarte.  
Ator(es): Usuário

*Pré-condições:*
1. O usuário deve estar autenticado no sistema do site/app ReclameAqui.

*Fluxo Principal:*
1.	O usuário acessa a opção "Registrar Reciclagem".
2.	O usuário informa o tipo de material e o ponto de coleta utilizado.
3.	O sistema salva os dados e atualiza o histórico.

*Fluxos Alternativos:*
- 9.1 - Dados incompletos:
	1. O usuário não preenche alguma informação obrigatória.
	2. O sistema impede o envio da ação e exibe alerta, permitindo que o usuário insira os dados.

#### Caso de Uso 11: Exibir histórico de reciclagem
Descrição: Permite que o usuário veja o histórico de reciclagem realizada.  
Ator(es): Usuário

*Pré-condições:*
1. O usuário deve ter ações registradas no sistema do site/app ReclameAqui.

*Fluxo Principal:*
1.	O usuário acessa a opção "Histórico de Reciclagem".
2.	O sistema exibe uma lista com as ações registradas.

*Fluxos Alternativos:*
- 10.1 - Histórico vazio:
	1. O usuário não registrou nenhuma ação.
	2. O sistema exibe mensagem informativa.
#### Caso de Uso 12: Gerenciar avaliações de pontos de coleta
Descrição: Usuários podem avaliar e comentar sobre pontos de coleta.  
Ator(es): Usuário

*Pré-condições:*
1. O usuário deve estar autenticado no sistema do site/app ReclameAqui.
2. O ponto de coleta deve estar autenticado no sistema do site/app ReclameAqui.

*Fluxo Principal:*
1.	O usuário acessa a página de um ponto de coleta.
2.	O usuário deixa uma avaliação e, se desejar, comentário.
3.	O sistema salva e exibe as avaliações.

*Fluxos Alternativos:*
- 11.1 - Avaliação não inserida:
	1. O usuário não inseriu uma avaliação no formulário.
	2. O sistema impede o envio da avaliação e exibe mensagem informativa, pedindo que o usuário preencha a avaliação.

#### Caso de Uso 13: Compartilhar informações sobre reciclagem
Descrição: Permite o compartilhamento de informações sobre reciclagem.  
Ator(es): Usuário

*Pré-condições:*
1. O conteúdo deve estar disponível e carregado para o usuário.

*Fluxo Principal:*
1.	O usuário acessa um conteúdo no site/app.
2.	O usuário seleciona a a opção "Compartilhar".
3.   O usuário escolhe o meio de compartilhamento (mensagem, redes sociais).

#### Caso de Uso 14: Exibir estatísticas do impacto ambiental
Descrição: Apresenta relatórios sobre o impacto ambiental das ações do usuário.  
Ator(es): Usuário

*Pré-condições:*
1. O usuário deve ter registros no histórico de reciclagem.

*Fluxo Principal:*
1.	O usuário acessa a opção "Impacto Ambiental".
2.	O sistema exibe gráficos e estatísticas sobre suas ações de reciclagem com base no seu histórico de ações.

*Fluxos Alternativos:*
- 13.1 - Histórico vazio:
	1. O usuário não registrou nenhuma ação.
	2. O sistema exibe mensagem informativa.

#### Caso de Uso 15: Administrar conteúdo informativo
Descrição: Administradores podem adicionar, editar ou remover conteúdos.  
Ator(es): Administrador

*Pré-condições:*
1. O administrador deve estar autenticado com permissões adequadas.

*Fluxo Principal:*
1. O administrador acessa o painel de gerenciamento.
2. O administrador seleciona conteúdo a ser alterado (guia, campanha, etc.).
3. O administrador adiciona, edita ou remove as informações.
4. O sistema salva e publica as alterações.

*Fluxos Alternativos:*
- 14.1 - Dados inválidos:
	1. O administrador insere dados inválidos/incompletos.
	2. O sistema impede o envio e exibe mensagem de erro, solicitando a revisão.

#### Caso de Uso 16: Recomendar conteúdos personalizados
Descrição: O sistema sugere materiais educativos com base no perfil do usuário.  
Ator(es): Usuário

*Pré-condições:*
1. O sistema deve possuir registros de interações do usuário e conteúdos disponíveis para recomendação.

*Fluxo Principal:*
1.	O usuário interage com conteúdos no sistema.
2. O sistema analisa preferências e comportamento do usuário.
3. O sistema sugere novos materiais relacionados ao perfil do usuário.

*Fluxos Alternativos:*
- 15.1 - Dados inválidos:
	1. O usuário não interagiu o suficiente para que o sistema analise suas preferências.
	2. O sistema exibe os conteúdos mais populares e recentes.



### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. O sistema é composto por usuários, que após fazer o cadastro ou login podem realizar reciclagens e avaliações de pontos de coleta. Esses usuários possuem atributos como id, nome, email e senha, além de métodos para cadastro, login, edição de perfil, avaliação e visualização de histórico.
A classe Administrador é uma especialização de Usuário, herdando seus atributos e métodos, com a adição da função de criar Guias de Reciclagem. As guias possuem título, conteúdo, data de publicação e referência ao administrador que as criou.
Os Pontos de Coleta armazenam informações como nome, endereço, horário de funcionamento e uma lista de materiais recicláveis aceitos, além de conter avaliações feitas por um ou mais usuários. Cada Avaliação está associada a um usuário e a um ponto de coleta, e inclui nota, comentário e data.
As Reciclagens registram ações dos usuários, contendo a data e hora da reciclagem e vinculando um ou mais materiais recicláveis e um ponto de coleta  Os Materiais Recicláveis podem estar associados a vários pontos de coleta e reciclagens.
Por fim, o sistema possui a classe Notificação, usada para enviar mensagens aos usuários, contendo título, mensagem e data de envio.

#### Figura 2: Diagrama de Classes do Sistema.
 
![image](https://github.com/user-attachments/assets/ff80927b-65fb-40fe-8fe7-51a0074f3b83)


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Usuario |	Cadastro e autenticação no sistema, personalização do perfil e visualização do histórico de reciclagem. |
| 2	| Administrador |	Cadastro de Pontos de Coleta e gerenciamento de conteúdos informativos como guias de reciclagem e campanhas ambientais. |
| 3 |	PontoColeta |	Local de descarte de materiais recicláveis com endereço, horário e materiais aceitos. |
| 4 |	MaterialReciclavel |	Materiais que poderão ser reciclados nos pontos de coleta |
| 5	|	Reciclagem |	Registro e histórico das ações de reciclagem realizadas pelos usuários no sistema. |
| 6 |	Avaliacao |	Avaliações e comentários sobre pontos de coleta. |
| 7 |	Notificacao |	Envio de alertas sobre eventos de reciclagem e campanhas ambientais. |
| 8 |	GuiaReciclagem |	Conteúdos educativos sobre práticas de reciclagem e sustentabilidade. |
