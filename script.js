<script>
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const card = btn.closest('.card-body');
      const fullText = card.querySelector('.full-text');
      const shortText = card.querySelector('.short-text');
      fullText.classList.toggle('d-none');
      shortText.classList.toggle('d-none');
      btn.textContent = fullText.classList.contains('d-none') ? '展開更多' : '收合';
    });
  });
</script>
