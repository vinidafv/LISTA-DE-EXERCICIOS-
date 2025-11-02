// --- 1️⃣ Tabuada ---
function gerarTabuada() {
    const numero = parseInt(document.getElementById('numero').value);
    const res = document.getElementById('resultado1');
    res.innerHTML = '';
  
    if (isNaN(numero)) {
      res.innerHTML = '<p>Digite um número válido!</p>';
      return;
    }
  
    for (let i = 1; i <= 10; i++) {
      res.innerHTML += `<p>${numero} x ${i} = ${numero * i}</p>`;
    }
  }
  
  // --- 2️⃣ Positivo, Negativo ou Nulo ---
  function verificarNumero() {
    const valor = parseInt(document.getElementById('valor').value);
    const res = document.getElementById('resultado2');
  
    if (isNaN(valor)) {
      res.textContent = 'Digite um número válido!';
      res.style.color = 'gray';
    } else if (valor > 0) {
      res.textContent = 'positivo';
      res.style.color = 'green';
    } else if (valor < 0) {
      res.textContent = 'negativo';
      res.style.color = 'red';
    } else {
      res.textContent = 'nulo';
      res.style.color = 'blue';
    }
  }
  
  // --- 3️⃣ É Primo? ---
  function verificarPrimo() {
    const n = parseInt(document.getElementById('numeroPrimo').value);
    const res = document.getElementById('resultado3');
  
    if (isNaN(n) || n < 1) {
      res.textContent = 'Digite um número válido!';
      res.style.color = 'gray';
      return;
    }
  
    let primo = true;
    if (n === 1) primo = false;
    else {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          primo = false;
          break;
        }
      }
    }
  
    res.textContent = primo ? 'S (é primo)' : 'N (não é primo)';
    res.style.color = primo ? 'green' : 'red';
  }
  
  // --- 4️⃣ Medalhas ---
  function verificarMedalhas() {
    const t1 = parseFloat(document.getElementById('t1').value);
    const t2 = parseFloat(document.getElementById('t2').value);
    const t3 = parseFloat(document.getElementById('t3').value);
    const res = document.getElementById('resultado4');
  
    if (isNaN(t1) || isNaN(t2) || isNaN(t3)) {
      res.innerHTML = '<p>Preencha todos os tempos!</p>';
      return;
    }
  
    const nadadores = [
      { num: 1, tempo: t1 },
      { num: 2, tempo: t2 },
      { num: 3, tempo: t3 }
    ];
  
    nadadores.sort((a, b) => a.tempo - b.tempo);
  
    res.innerHTML = `
      <p>🥇 Ouro: Nadador ${nadadores[0].num}</p>
      <p>🥈 Prata: Nadador ${nadadores[1].num}</p>
      <p>🥉 Bronze: Nadador ${nadadores[2].num}</p>
    `;
  }
  
  // --- 5️⃣ Idade de Dona Mônica ---
  function calcularFilhoMaisVelho() {
    const m = parseInt(document.getElementById('idadeMonica').value);
    const a = parseInt(document.getElementById('idadeFilho1').value);
    const b = parseInt(document.getElementById('idadeFilho2').value);
    const res = document.getElementById('resultado5');
  
    if (isNaN(m) || isNaN(a) || isNaN(b)) {
      res.innerHTML = '<p>Preencha todas as idades corretamente!</p>';
      return;
    }
  
    const c = m - (a + b);
    const maisVelho = Math.max(a, b, c);
  
    res.innerHTML = `
      <p>O terceiro filho tem <strong>${c}</strong> anos.</p>
      <p>O filho mais velho tem <strong>${maisVelho}</strong> anos.</p>
    `;
  }