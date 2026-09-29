import express from 'express';

const app = express();
app.use(express.json());

const filmes = [];
const jogos = [];

app.get('/filmes', (req, res) => {
  res.json(filmes);
});

app.post('/filmes', (req, res) => {
  const nomeFilme = req.body.filmes;

  if (!nomeFilme) {
    return res.status(400).json({ mensagem: 'Filme é obrigatório.' });
  }

  const novoFilme = {
    id: filmes.length + 1,
    filme: nomeFilme
  };

  filmes.push(novoFilme);

  return res.status(201).json({
    mensagem: 'Filme cadastrado com sucesso!',
    filme: novoFilme
  });
});

app.get('/jogos', (req, res) => {
  res.json(jogos);
});

app.post('/jogos', (req, res) => {
  const nomeJogo = req.body.jogos;

  if (!nomeJogo) {
    return res.status(400).json({ mensagem: 'Jogo é obrigatório.' });
  }

  const novoJogo = {
    id: jogos.length + 1,
    jogo: nomeJogo
  };

  jogos.push(novoJogo);

  return res.status(201).json({
    mensagem: 'Jogo cadastrado com sucesso!',
    jogo: novoJogo
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});