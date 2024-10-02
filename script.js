document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.fontWeight = 'bold';
        item.style.backgroundColor = '#007BFF'; // Cor de destaque
        item.style.color = 'white'; // Texto branco
    });

    item.addEventListener('mouseout', () => {
        item.style.fontWeight = 'normal';
        item.style.backgroundColor = ''; // Restaura a cor de fundo
        item.style.color = ''; // Restaura a cor do texto
    });
});
