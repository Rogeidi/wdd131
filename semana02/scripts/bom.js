const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const lista = document.querySelector('#list');



button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const botaoExcluir = document.createElement('button');

        li.textContent = input.value;
        botaoExcluir.textContent = ' ❌';

        li.append(botaoExcluir);
        lista.append(li);

        botaoExcluir.addEventListener('click', function() {
            lista.removeChild(li);
            input.focus();
        });

        input.value = '';
        input.focus();
    }   
});




