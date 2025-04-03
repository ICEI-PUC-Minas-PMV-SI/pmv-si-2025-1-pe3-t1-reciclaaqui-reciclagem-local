![image](https://github.com/user-attachments/assets/00afe5e7-791e-4f01-a758-b4bdae9a8977)# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE


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
| RF1 | Gerenciar usuários |	O sistema deve permitir que o usuário realize o seu cadastro no sistema. |
| RF2 | Realizar login/logout | O sistema deve permitir que o usuário possa realizar o login e logout do sistema, após o mesmo estar cadastrado. |
| RF3	| Gerenciar perfil | O sistema deve permitir edição de informações pessoais, como nome, foto e senha. |
| RF4 |	Localizar pontos de coleta	| O sistema deve exibir uma lista de pontos de coleta cadastrados e permitir a busca por localização ou tipo de material aceito |
| RF5	| Exibir detalhes de um ponto de coleta | O sistema deve exibir informações detalhadas sobre um ponto de coleta, incluindo endereço, materiais aceitos e horário de funcionamento |
| RF6 | Filtrar pontos de coleta | O sistema deve permitir filtragem por tipo de materiais recicláveis aceitos, como vidro, papel, plástico e metal |
| RF7 | Exibir guia de reciclagem | O sistema deve disponibilizar informações sobre a separação correta dos resíduos e instruções para reciclagem |
| RF8 | Gerenciar notificações | O sistema deve enviar notificações sobre campanhas ambientais e eventos de reciclagem |
| RF9 | Gerenciar ranking de sustentabilidade | O sistema deve calcular e exibir um ranking com base nas ações de reciclagem registradas pelo usuário |
| RF10 | Registrar ações de reciclagem | O sistema deve permitir registro de reciclagem, informando o tipo de material e o ponto de coleta utilizado |
| RF11 | Exibir histórico de reciclagem | O sistema deve permitir acesso ao histórico de ações de reciclagem registradas | 
| RF12 | Gerenciar avaliações de pontos de coleta | O sistema deve permitir que os usuários avaliem os pontos de coleta e deixem comentários |
| RF13 | Compartilhar informações sobre reciclagem | O sistema deve permitir compartilhamento de informações sobre reciclagem |
| RF14 | Administrar conteúdo informativo | O sistema deve permitir adição, edição e remoção de conteúdos do guia de reciclagem e das campanhas ambientais |
| RF15 |	Recomendar conteúdos personalizados |	O sistema deve sugerir materiais educativos e artigos sobre reciclagem com base nos interesses e interações do usuário no sistema |

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
Como observado no diagrama de casos de uso da Figura 1, a secretária poderá gerenciar as matrículas e professores no sistema, enquanto o coordenador, além dessas funções, poderá gerenciar os cursos de aperfeiçoamento.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](https://i.imgur.com/mkC9e86.png)
 
### 3.4.2 Descrições de Casos de Uso


#### Caso de Uso 1: Gerenciar o acesso dos usuários
Descrição: Permite que os usuários realizem cadastro, login e logout no sistema utilizando e-mail e senha.  
Ator(es): Usuário

*Fluxo Principal:*
1.	O usuário acessa a tela de login.
2.	O usuário insere seu e-mail e senha.
3.	O sistema valida as credenciais e concede acesso.
4.	O usuário pode realizar logout a qualquer momento.

*Fluxo Alternativo:*
1.	Se o usuário não possui cadastro, pode acessar a opção de registro para criar uma conta.
2.	Se o usuário esqueceu a senha, pode solicitar redefinição.

#### Caso de Uso 2: Gerenciar perfil do usuário
Descrição: Permite que o usuário edite informações pessoais.  
Ator(es): Usuário

*Fluxo Principal:*
1.	O usuário acessa a seção "Meu Perfil".
2.	O usuário edita informações como nome, foto e senha.
3.	O sistema salva as alterações e exibe uma mensagem de confirmação.

#### Caso de Uso 3: Localizar pontos de coleta
Descrição: Permite que o usuário visualize e busque pontos de coleta cadastrados.  
Ator(es): Usuário

*Fluxo Principal:*
1.	O usuário acessa a tela de pontos de coleta.
2.	O sistema exibe uma lista de pontos cadastrados.
3.	O usuário pode buscar por localização ou tipo de material aceito.

#### Caso de Uso 4: Exibir detalhes de um ponto de coleta
Descrição: Exibe informações detalhadas de um ponto de coleta.  
Ator(es): Usuário

*Fluxo Principal:*
1.	O usuário seleciona um ponto de coleta na lista.
2.	O sistema exibe informações como endereço, materiais aceitos e horário de funcionamento.

#### Caso de Uso 5: Filtrar pontos de coleta
Descrição: Permite ao usuário aplicar filtros na busca por pontos de coleta.  
Ator(es): Usuário

*Fluxo Principal:*
1.	O usuário acessa a tela de pontos de coleta.
2.	O usuário seleciona filtros como "Vidro", "Papel", "Plástico", "Metal".
3.	O sistema exibe apenas os pontos compatíveis.

#### Caso de Uso 6: Exibir guia de reciclagem
Descrição: Disponibiliza um guia com instruções sobre separação correta dos resíduos.  
Ator(es): Usuário

*Fluxo Principal:*
1.	O usuário acessa a opção "Guia de Reciclagem".
2.	O sistema exibe instruções sobre separação e descarte correto de materiais.

#### Caso de Uso 7: Gerenciar notificações
Descrição: Envia notificações sobre campanhas ambientais e eventos.  
Ator(es): Sistema

*Fluxo Principal:*
1.	O sistema verifica eventos ou campanhas disponíveis.
2.	O sistema envia notificações personalizadas ao usuário.

#### Caso de Uso 8: Gerenciar ranking de sustentabilidade
Descrição: Exibe um ranking baseado nas ações de reciclagem do usuário.  
Ator(es): Usuário

*Fluxo Principal:*
1.	O usuário acessa a opção "Ranking de Sustentabilidade".
2.	O sistema calcula e exibe a posição do usuário no ranking.

#### Caso de Uso 9: Registrar ações de reciclagem
Descrição: O usuário registra materiais reciclados e locais de descarte.  
Ator(es): Usuário

*Fluxo Principal:*
1.	O usuário acessa a opção "Registrar Reciclagem".
2.	O usuário informa o tipo de material e o ponto de coleta utilizado.
3.	O sistema salva os dados e atualiza o histórico.

#### Caso de Uso 10: Exibir histórico de reciclagem
Descrição: Permite que o usuário veja o histórico de reciclagem realizada.  
Ator(es): Usuário

*Fluxo Principal:*
1.	O usuário acessa a opção "Histórico de Reciclagem".
2.	O sistema exibe uma lista com as ações registradas.

#### Caso de Uso 11: Gerenciar avaliações de pontos de coleta
Descrição: Usuários podem avaliar e comentar sobre pontos de coleta.  
Ator(es): Usuário

*Fluxo Principal:*
1.	O usuário acessa a página de um ponto de coleta.
2.	O usuário deixa uma avaliação e comentário.
3.	O sistema salva e exibe as avaliações.

#### Caso de Uso 12: Compartilhar informações sobre reciclagem
Descrição: Permite o compartilhamento de informações sobre reciclagem.  
Ator(es): Usuário

*Fluxo Principal:*
1.	O usuário acessa um conteúdo de reciclagem.
2.	O usuário escolhe compartilhar via redes sociais ou mensagem.

#### Caso de Uso 13: Exibir estatísticas do impacto ambiental
Descrição: Apresenta relatórios sobre o impacto ambiental das ações do usuário.  
Ator(es): Usuário

*Fluxo Principal:*
1.	O usuário acessa a opção "Impacto Ambiental".
2.	O sistema exibe gráficos e estatísticas sobre suas ações de reciclagem.

#### Caso de Uso 14: Administrar conteúdo informativo
Descrição: Administradores podem adicionar, editar ou remover conteúdos.  
Ator(es): Administrador

*Fluxo Principal:*
1.	O administrador acessa o painel de gerenciamento.
2.	O administrador adiciona, edita ou remove conteúdos do guia.

#### Caso de Uso 15: Recomendar conteúdos personalizados
Descrição: O sistema sugere materiais educativos com base no perfil do usuário.  
Ator(es): Usuário

*Fluxo Principal:*
1.	O usuário interage com conteúdos no sistema.
2.	O sistema sugere novos materiais relacionados ao perfil do usuário.




### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![Diagrama de classes UML - ReciclaAqui](https://github.com/user-attachments/assets/7879c192-7ead-472b-bb8b-942762e14530)


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
