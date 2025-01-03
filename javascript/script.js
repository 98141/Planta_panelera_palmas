document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.information__item');

  items.forEach(information__item => {
    information__item.addEventListener('click', () => {
      const information__item_paragraph = information__item.querySelector('.information__item_paragraph');
      const isVisible = information__item_paragraph.style.display === 'block';

      // Oculta el contenido de todos los items
      document.querySelectorAll('.information__item_paragraph').forEach(c => c.style.display = 'none');

      // Muestra el contenido del item actual si estaba oculto
      if (!isVisible) {
        information__item_paragraph.style.display = 'block';
      }
    });
  });
});