function criptografar(texto) {
  let resultado = texto;
  resultado = resultado.replace(/e/g, 'enter');
  resultado = resultado.replace(/i/g, 'imes');
  resultado = resultado.replace(/a/g, 'ai');
  resultado = resultado.replace(/o/g, 'ober');
  resultado = resultado.replace(/u/g, 'ufat');
  return resultado;
}

function descriptografar(texto) {
  let resultado = texto;
  resultado = resultado.replace(/enter/g, 'e');
  resultado = resultado.replace(/imes/g, 'i');
  resultado = resultado.replace(/ai/g, 'a');
  resultado = resultado.replace(/ober/g, 'o');
  resultado = resultado.replace(/ufat/g, 'u');
  return resultado;
}

function criptografarTexto() {
  const texto = document.getElementById('inputTexto').value;
  const textoCriptografado = criptografar(texto);
  document.getElementById('resultado').textContent = textoCriptografado;
  document.getElementById('figura').style.visibility = 'hidden';
  document.getElementById('paragrafo').style.visibility = 'hidden';
}

function descriptografarTexto() {
  const texto = document.getElementById('inputTexto').value;
  const textoDescriptografado = descriptografar(texto);
  document.getElementById('resultado').textContent = textoDescriptografado;
  document.getElementById('figura').style.visibility = 'hidden';
  document.getElementById('paragrafo').style.visibility = 'hidden';
}

function copiar(){
  var contenido = document.getElementById("resultado");
  contenido.select()
  document.execCommand("copy")
}