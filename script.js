let chave = "";
let endereco = "https://api.groq.com/openai/v1/chat/completions";

let prompt = `Você é um designer web premiado e Programador. 
Crie uma landing page COMPLETA e VISUALMENTE IMPRESSIONANTE para o negócio descrito.

                    Regras de resposta:
                    - Responda SOMENTE com HTML e CSS puros
                    - Não use crases, markdown ou explicações
                    - Não use tags <img>

                    Identidade visual (capriche e surpreenda):
                    - Invente uma paleta de cores única que combine com a essência do negócio
                    - Escolha uma Google Font marcante via @import
                    - Use emojis grandes no lugar de imagens
                    - Use CSS moderno: gradientes, sombras, animações sutis, layout generoso, tipografia forte

                    Estrutura da página:
                    - Header com nome do negócio e menu
                    - Hero impactante com título, subtítulo e botão CTA
                    - Seção de diferenciais com emojis
                    - Depoimento de cliente
                    - Footer com contato

Todo o conteúdo em português, criativo e específico para o negócio.`
// templete string ``

// Clicou no botao gerar - chamar esta funcao
async function gerarCodigo() {
  let textarea = document.querySelector(".texto-pagina").value;

  let resposta = await fetch(endereco, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "",
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",  // role = papel -> user
          content: textarea,
        },
        {
            role: "system",
          content: prompt
        }


      ],
    }),
  });
  let dados = await resposta.json()
  let resultado = dados.choices[0].message.content
  let espacoCodigo = document.querySelector(".bloco-codigo")
  espacoCodigo.textContent = resultado

  let espacoSite = document.querySelector(".bloco-site")
  espacoSite.srcdoc = resultado
  // src.doc e para colocar  o codigo no caso no iframe carrega um ste


  // iframe no HTML = carrega um site
  // servidor - recebe texto
  // responde JSON
  console.log(resultado)
}


/*
IA para gerar o que queremos

1) Qual modelo de IA vamos usar

2) system - Quem é a IA deve ser- neste caso (Programador / Designer) advogado, programador, médico

3) user - mensagem do usuário
*/

/*
Lógica de Programação


Algoritmo - Receita de bolo

[x] Saber quando o botao foi clicado
[x] Pegar o texto do textArea
[x] Enviar para a IA(servidor)
[x] Pegar a resposta da IA
[ ] Colocar na tela
    [ ] Código
    [ ] Resultado do código 
*/
/* querySelector - pega um elemento que eu escolher
HTML - document
JS - script
JSON - JavaScript Obeject Notation -> Formato da internet
*/

// console.log() // ver na tela
// funções - codigos que eu escolho quando ele executa
// clico em um botao, que algo acontece, quando eu quise
// verbo - ação
//function falaMeuNome(){
// console.log("Pedro")
//}
// falaMeuNome()
