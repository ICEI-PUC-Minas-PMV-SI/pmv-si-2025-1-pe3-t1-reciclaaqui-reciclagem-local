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
| RF1 | Gerenciar o acesso dos usuários |	O sistema deve permitir cadastro, login e logout de usuários com e-mail e senha |
| RF2	| Gerenciar perfil do usuário | O sistema deve permitir edição de informações pessoais, como nome, foto e senha. |
| RF3 |	Localizar pontos de coleta	| O sistema deve exibir uma lista de pontos de coleta cadastrados e permitir a busca por localização ou tipo de material aceito |
| RF4	| Exibir detalhes de um ponto de coleta | O sistema deve exibir informações detalhadas sobre um ponto de coleta, incluindo endereço, materiais aceitos e horário de funcionamento |
| RF5 | Filtrar pontos de coleta | O sistema deve permitir filtragem por tipo de materiais recicláveis aceitos, como vidro, papel, plástico e metal |
| RF6 | Exibir guia de reciclagem | O sistema deve disponibilizar informações sobre a separação correta dos resíduos e instruções para reciclagem |
| RF7 | Gerenciar notificações | O sistema deve enviar notificações sobre campanhas ambientais e eventos de reciclagem |
| RF8 | Gerenciar ranking de sustentabilidade | O sistema deve calcular e exibir um ranking com base nas ações de reciclagem registradas pelo usuário |
| RF9 | Registrar ações de reciclagem | O sistema deve permitir registro de reciclagem, informando o tipo de material e o ponto de coleta utilizado |
| RF10 | Exibir histórico de reciclagem | O sistema deve permitir acesso ao histórico de ações de reciclagem registradas | 
| RF11 | Gerenciar avaliações de pontos de coleta | O sistema deve permitir que os usuários avaliem os pontos de coleta e deixem comentários |
| RF12 | Compartilhar informações sobre reciclagem | O sistema deve permitir compartilhamento de informações sobre reciclagem |
| RF13 | Exibir estatísticas do impacto ambiental | O sistema deve apresentar relatórios sobre o impacto ambiental das ações de reciclagem |
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
|RNF6	| Conformidade Legal | Cumprir a LGPD para tratamento de dados pessoais, solicitando consentimento explícito para geolocalização e notificações. |

### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Coordenador |	Usuário gerente do sistema responsável pelo cadastro e manutenção de cursos de aperfeiçoamento. Possui acesso geral ao sistema. |
| Secretaria |	Usuário responsável por registros de alunos, professores, turmas e gerência de matrículas. |
| ... |	... |	... |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, a secretária poderá gerenciar as matrículas e professores no sistema, enquanto o coordenador, além dessas funções, poderá gerenciar os cursos de aperfeiçoamento.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](https://i.imgur.com/QO0HGtw.png)
 
### 3.4.2 Descrições de Casos de Uso

#### Criar o acesso dos usuários (RF1)

Sumário: O Usuário realiza a gestão e consulta de pontos de coleta cadastrados no sistema, além de interagir com funcionalidades adicionais relacionadas à reciclagem.

Ator Primário: Usuário.
Ator Secundário: Administrador.

Pré-condições: O Usuário deve estar autenticado no sistema.

Fluxo Principal:

1. O Usuário requisita a visualização dos pontos de coleta e outras funcionalidades relacionadas.

2. O Sistema apresenta as operações que podem ser realizadas: listar pontos de coleta, visualizar detalhes de um ponto de coleta, buscar por localização ou tipo de material aceito, registrar ações de reciclagem, visualizar histórico de reciclagem, avaliar pontos de coleta, acessar guia de reciclagem, visualizar estatísticas ambientais e compartilhar informações.

3. O Usuário seleciona a operação desejada ou opta por finalizar o caso de uso.

4. Se o Usuário desejar continuar com a gestão e interação no sistema, o caso de uso retorna ao passo 2; caso contrário, o caso de uso termina.

Fluxo Alternativo (3): Listar pontos de coleta
a) O Usuário requisita a listagem dos pontos de coleta.
b) O Sistema exibe uma lista com os pontos de coleta cadastrados.

Fluxo Alternativo (3): Visualizar detalhes de um ponto de coleta
a) O Usuário seleciona um ponto de coleta da lista.
b) O Sistema exibe informações detalhadas sobre o ponto de coleta, incluindo endereço, materiais aceitos e horário de funcionamento.

Fluxo Alternativo (3): Buscar por localização ou tipo de material
a) O Usuário fornece um critério de busca (localização ou tipo de material aceito).
b) O Sistema filtra os pontos de coleta com base no critério informado e exibe os resultados.

Fluxo Alternativo (3): Registrar ações de reciclagem
a) O Usuário informa o tipo de material reciclado e o ponto de coleta utilizado.
b) O Sistema armazena a informação e atualiza o histórico do usuário.

Fluxo Alternativo (3): Visualizar histórico de reciclagem
a) O Usuário acessa a seção de histórico.
b) O Sistema exibe todas as ações de reciclagem registradas pelo usuário.

Fluxo Alternativo (3): Avaliar pontos de coleta
a) O Usuário seleciona um ponto de coleta e insere uma avaliação/comentário.
b) O Sistema armazena a avaliação e a exibe para outros usuários.

Fluxo Alternativo (3): Acessar guia de reciclagem
a) O Usuário acessa a seção do guia de reciclagem.
b) O Sistema apresenta informações sobre separação de resíduos e melhores práticas de reciclagem.

Fluxo Alternativo (3): Visualizar estatísticas ambientais
a) O Usuário solicita relatórios sobre o impacto ambiental de suas ações.
b) O Sistema apresenta estatísticas com base nas ações registradas.

Fluxo Alternativo (3): Compartilhar informações sobre reciclagem
a) O Usuário opta por compartilhar suas ações e dicas sobre reciclagem.
b) O Sistema permite que o usuário envie informações para redes sociais ou outros canais.

Pós-condições: O Usuário obteve informações sobre os pontos de coleta, registrou suas ações de reciclagem, acessou dados ambientais ou interagiu com outros usuários do sistema.

### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![image](https://github.com/user-attachments/assets/abc7591a-b46f-4ea2-b8f0-c116b60eb24e)


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Aluno |	Cadastro de informações relativas aos alunos. |
| 2	| Curso |	Cadastro geral de cursos de aperfeiçoamento. |
| 3 |	Matrícula |	Cadastro de Matrículas de alunos nos cursos. |
| 4 |	Turma |	Cadastro de turmas.
| 5	|	Professor |	Cadastro geral de professores que ministram as disciplinas. |
| ... |	... |	... |
