document.addEventListener('DOMContentLoaded', function () {
    var claroFixoTab = document.querySelector('.list-itens li:nth-child(4) a');
    var claroFixoTable = document.getElementById('claroFixoTab');

    claroFixoTab.addEventListener('click', function () {
        claroFixoTable.style.display = (claroFixoTable.style.display === 'none' || claroFixoTable.style.display === '') ? 'block' : 'none';
    });
});