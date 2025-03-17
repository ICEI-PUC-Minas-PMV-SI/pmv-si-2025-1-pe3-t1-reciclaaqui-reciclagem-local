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
| RF1 | Criar o acesso dos usuários |	O sistema deve permitir que os usuários se cadastrem no sistema por meio de e-mail e senha |
| RF2 |	Autenticar usuários	| O sistema deve permitir que os usuários façam login no sistema utilizando suas credenciais cadastradas |
| RF3	| Gerenciar perfil do usuário | O sistema deve permitir que os usuários editem suas informações pessoais, como nome, foto e senha |
| RF4 |	Localizar pontos de coleta	| O sistema deve exibir uma lista de pontos de coleta cadastrados e permitir a busca por localização ou tipo de material aceito |
| RF5	| Exibir detalhes de um ponto de coleta | O sistema deve permitir que os usuários visualizem informações detalhadas sobre um ponto de coleta, incluindo endereço, materiais aceitos e horário de funcionamento |
| RF6 | Filtrar pontos de coleta por tipo de material | O sistema deve permitir que os usuários filtrem os pontos de coleta com base nos materiais recicláveis aceitos, como vidro, papel, plástico e metal |
| RF7 | Exibir guia de reciclagem | O sistema deve disponibilizar uma seção com informações sobre a separação correta dos resíduos e instruções para reciclagem |
| RF8 | Gerenciar notificações | O sistema deve permitir que os usuários recebam notificações sobre campanhas ambientais e eventos de reciclagem |
| RF9 | Criar ranking de sustentabilidade | O sistema deve calcular e exibir um ranking com base nas ações de reciclagem registradas pelo usuário |
| RF10 | Registrar ações de reciclagem | O sistema deve permitir que os usuários registrem suas ações de reciclagem informando o tipo de material reciclado e o ponto de coleta utilizado |
| RF11 | Visualizar histórico de reciclagem | O sistema deve permitir que os usuários acessem um histórico com todas as ações de reciclagem registradas | 
| RF12 | Avaliar pontos de coleta | O sistema deve permitir que os usuários avaliem os pontos de coleta e deixem comentários sobre suas experiências |
| RF13 | Compartilhar informações sobre reciclagem | O sistema deve permitir que os usuários compartilhem informações sobre reciclagem e suas ações |
| RF14 | Exibir estatísticas do impacto ambiental | O sistema deve apresentar relatórios sobre o impacto ambiental das ações de reciclagem dos usuários |
| RF15 | Administrar conteúdo informativo | O sistema deve permitir que os administradores adicionem, editem e removam conteúdos do guia de reciclagem e das campanhas ambientais |
| RF16 |	Sair do sistema |	O sistema deve permitir que os usuários façam logout do sistema |

### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) |
|--------------------|------------------------------------|
| RNF1 | O ambiente operacional a ser utilizado é o Windows XP. |
| RNF2 | O sistema deverá executar em um computador configurado com uma impressora de tecnologia laser ou de jato de tinta, a ser usada para impressão dos relatórios. |
| RNF3 |	Segurança	O produto deve restringir o acesso por meio de senhas individuais para o usuário. |
| ... |	... |	... |

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

![dcu](https://github.com/user-attachments/assets/41f6b731-b44e-43aa-911f-423ad6198f47)
 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

#### Gerenciar Professor (CSU01)

Sumário: A Secretária realiza a gestão (inclusão, remoção, alteração e consulta) dos dados sobre professores.

Ator Primário: Secretária.

Ator Secundário: Coordenador.

Pré-condições: A Secretária deve ser validada pelo Sistema.

Fluxo Principal:

1) 	A Secretária requisita manutenção de professores.
2) 	O Sistema apresenta as operações que podem ser realizadas: inclusão de um novo professor, alteração de um professor, a exclusão de um professor e a consulta de dados de um professor.
3) 	A Secretária seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.
4) 	Se a Secretária desejar continuar com a gestão de professores, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (3): Inclusão

a)	A Secretária requisita a inclusão de um professor. <br>
b)	O Sistema apresenta uma janela solicitando o CPF do professor a ser cadastrado. <br>
c)	A Secretária fornece o dado solicitado. <br>
d)	O Sistema verifica se o professor já está cadastrado. Se sim, o Sistema reporta o fato e volta ao início; caso contrário, apresenta um formulário em branco para que os detalhes do professor (Código, Nome, Endereço, CEP, Estado, Cidade, Bairro, Telefone, Identidade, Sexo, Fax, CPF, Data do Cadastro e Observação) sejam incluídos. <br>
e)	A Secretária fornece os detalhes do novo professor. <br>
f)	O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui o novo professor e a grade listando os professores cadastrados é atualizada; caso contrário, o Sistema reporta o fato, solicita novos dados e repete a verificação. <br>

Fluxo Alternativo (3): Remoção

a)	A Secretária seleciona um professor e requisita ao Sistema que o remova. <br>
b)	Se o professor pode ser removido, o Sistema realiza a remoção; caso contrário, o Sistema reporta o fato. <br>

Fluxo Alternativo (3): Alteração

a)	A Secretária altera um ou mais dos detalhes do professor e requisita sua atualização. <br>
b)	O Sistema verifica a validade dos dados e, se eles forem válidos, altera os dados na lista de professores, caso contrário, o erro é reportado. <br>
 
Fluxo Alternativo (3): Consulta

a)	A Secretária opta por pesquisar pelo nome ou código e solicita a consulta sobre a lista de professores. <br>
b)	O Sistema apresenta uma lista professores. <br>
c)	A Secretária seleciona o professor. <br>
d)	O Sistema apresenta os detalhes do professor no formulário de professores. <br>

Pós-condições: Um professor foi inserido ou removido, seus dados foram alterados ou apresentados na tela.

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
