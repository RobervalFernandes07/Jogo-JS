  🎮 Jogo de Lógica em JavaScript
  Bem-vindo ao repositório do Jogo de Lógica em JavaScript!
  Este projeto oferece uma experiência divertida e desafiadora para treinar suas habilidades de raciocínio lógico,
com uma série de fases que devem ser completadas com base na correta soma dos valores em cada fase.

  📜 Sobre o Projeto
  Este jogo é baseado em um quebra-cabeça lógico onde o jogador precisa preencher valores para que a soma em linhas,
colunas e blocos específicos atinja um número fixo (ex: 45). Com várias fases organizadas em pastas,
o jogador pode avançar para a próxima fase ao completar os desafios corretamente.

  🚀 Funcionalidades
# Desafios Incrementais: Cada fase é mais complexa que a anterior, incentivando o raciocínio lógico progressivo.
# Validação Automática: O jogo verifica automaticamente se as somas estão corretas e fornece feedback.
# Sistema de Avanço de Fase: Ao completar uma fase corretamente, o jogador avança automaticamente para a próxima.
# Design Interativo: Interface simples e intuitiva, permitindo foco no desafio lógico.

  🗂 Estrutura do Projeto
Cada fase do jogo está organizada em pastas separadas. A estrutura é a seguinte:

JogoJS/
│
├── fase1/
│   ├── index.html   # HTML da primeira fase
│   ├── style.css    # Estilos específicos para a fase 1
│   └── script.js    # Lógica de validação e passagem para a próxima fase
│
├── fase2/
│   ├── index.html   # HTML da segunda fase
│   ├── style.css    # Estilos específicos para a fase 2
│   └── script.js    # Lógica de validação e passagem para a próxima fase
│
└── fase3/ ...       # Demais fases seguem o mesmo padrão


📖 Instruções de Jogo
Clone o repositório e abra a pasta da primeira fase (fase1/index.html) em seu navegador.
Fase 1: Verifica se a soma dos valores inseridos em linhas, colunas e diagonais é igual a 15.
Fase 2: Exige que a soma dos valores em linhas, colunas e áreas 2x2 seja igual a 10, além das diagonais.
Fase 3: Aqui, alguns valores são fixos, e o objetivo é completar com valores que façam a soma de cada linha, coluna e diagonal ser igual a 15.
Fase 4: A fase mais complexa, onde há uma grade de 9x9 células com alguns valores fixos e exige que a soma de cada linha, coluna e algumas células predefinidas seja igual a determinados valores.
Mensagens de Resultado:

Se as somas estiverem corretas, uma mensagem de sucesso será exibida, e o jogador avançará automaticamente para a próxima fase.
Se as somas não estiverem corretas, uma mensagem pedirá que o jogador tente novamente.
O jogo continuará para as próximas fases, cada uma com um desafio diferente.


🔧 Tecnologias Utilizadas
HTML: Estrutura das páginas do jogo.
CSS: Estilização visual das fases.
JavaScript: Lógica de validação e redirecionamento para a próxima fase.


🌟 Como Contribuir
Contribuições são bem-vindas! Se tiver sugestões de melhorias, novas fases ou correções, fique à vontade para abrir um pull request ou iniciar uma discussão na aba de Issues.

# Passos para Contribuir:

Faça um fork do projeto.
Crie uma nova branch com sua feature (git checkout -b minha-feature).
Commit suas mudanças (git commit -m 'Adiciona nova feature').
Envie para a branch (git push origin minha-feature).
Abra um pull request.
