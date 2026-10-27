// 1) Array de objetos com o nome e a nota dos alunos
const alunos = [
    { nome: 'Ana', nota: 8.5 },
    { nome: 'Bruno', nota: 5.0 },
    { nome: 'Carla', nota: 6 },
    { nome: 'Daniel', nota: 4.5 },
    { nome: 'Eduarda', nota: 9.2 },
    { nome: 'Felipe', nota: 5.9 }
];

// 2) Função que retorna só os alunos com nota maior ou igual a 6
//    (arrow function + método filter)
const alunosAprovados = (lista) => lista.filter((aluno) => aluno.nota >= 6);

const aprovados = alunosAprovados(alunos);

console.log('Todos os alunos:');
console.table(alunos);

console.log('Alunos com nota maior ou igual a 6:');
console.table(aprovados);

// ---------- Extras de ES6 vistos no módulo ----------

// map: só os nomes dos aprovados
const nomes = aprovados.map(({ nome }) => nome); // desestruturação
console.log('Nomes dos aprovados:', nomes.join(', '));

// reduce: média da turma
const media = alunos.reduce((soma, { nota }) => soma + nota, 0) / alunos.length;
console.log(`Média da turma: ${media.toFixed(2)}`);

// spread: cria uma nova lista sem alterar a original
const novoAluno = { nome: 'Gabriela', nota: 7.5 };
const turmaAtualizada = [...alunos, novoAluno];
console.log('Alunos antes:', alunos.length, '| depois:', turmaAtualizada.length);

// rest: função com quantidade variável de notas
const mediaDe = (...notas) => notas.reduce((a, b) => a + b, 0) / notas.length;
console.log('Média de 7, 8 e 9:', mediaDe(7, 8, 9));
