export async function buscarPontos() {
  try {
    const resposta = await fetch("https://quasar-swanky-responsibility.glitch.me/pontos");
    if (!resposta.ok) throw new Error("Erro ao buscar pontos");

    const dados = await resposta.json();
    return dados;
  } catch (erro) {
    console.error("Erro ao buscar pontos:", erro);
    return [];
  }
}
