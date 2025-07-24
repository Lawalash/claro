// script.js

// — Sistema de gerenciamento de notas —
let notes = [];
let currentNoteId = null;
let saveTimeout;
let isModified = false;

// — Elementos principais —
const editor      = document.getElementById('noteEditor');
const titleInput  = document.getElementById('noteTitle');
const wordCountEl = document.getElementById('wordCount');
const saveStatus  = document.getElementById('saveStatus');
const alertBox    = document.getElementById('alerta');
const alertText   = document.getElementById('alertText');
const notesList   = document.getElementById('notesList');
const searchInput = document.getElementById('searchInput');

// Ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  loadNotes();
  setupEventListeners();
  if (notes.length === 0) createNewNote();
  else selectNote(notes[0].id);
});

function setupEventListeners() {
  // auto‑save no editor (conteúdo)
  editor.addEventListener('input', markModified);
  // auto‑save no título
  titleInput.addEventListener('input', markModified);

  // atalhos de teclado
  editor.addEventListener('keydown', handleKeyboardShortcuts);
  titleInput.addEventListener('keydown', handleKeyboardShortcuts);

  // busca nas notas
  searchInput.addEventListener('input', filterNotes);

  // filtros de data
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      filterNotes();
    });
  });

  // atalho global: Ctrl+Shift+N
  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'n') {
      e.preventDefault();
      createNewNote();
    }
  });

  // antes de sair, salva se modificado
  window.addEventListener('beforeunload', () => {
    if (isModified) autoSaveCurrentNote();
  });
}

function markModified() {
  isModified = true;
  updateWordCount();
  updateSave('saving');
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(autoSaveCurrentNote, 2000);
}

function handleKeyboardShortcuts(e) {
  if (!e.ctrlKey) return;
  switch (e.key.toLowerCase()) {
    case 's':
      e.preventDefault();
      saveCurrentNote();
      break;
    case 'n':
      e.preventDefault();
      createNewNote();
      break;
    case 'b':
      e.preventDefault();
      formatText('bold');
      break;
    case 'i':
      e.preventDefault();
      formatText('italic');
      break;
    case 'u':
      e.preventDefault();
      formatText('underline');
      break;
  }
}

// — CRUD de notas no localStorage —
function loadNotes() {
  const saved = localStorage.getItem('modernNotes');
  notes = saved ? JSON.parse(saved) : [];
  renderNotesList();
}

function saveNotes() {
  localStorage.setItem('modernNotes', JSON.stringify(notes));
}

function createNewNote() {
  if (isModified) autoSaveCurrentNote();
  const now = new Date().toISOString();
  const newNote = {
    id: now,
    title: 'Nova Nota',
    content: '',
    createdAt: now,
    updatedAt: now
  };
  notes.unshift(newNote);
  saveNotes();
  renderNotesList();
  selectNote(newNote.id);
  titleInput.focus();
  notify('Nova nota criada!', 'success');
}

function selectNote(id) {
  if (currentNoteId && isModified) autoSaveCurrentNote();
  const note = notes.find(n => n.id === id);
  if (!note) return;
  currentNoteId = id;
  titleInput.value         = note.title;
  editor.innerHTML          = note.content;
  isModified                = false;
  updateWordCount();
  updateSave('saved');
  renderNotesList();
}

function autoSaveCurrentNote() {
  if (!currentNoteId) return;
  const note = notes.find(n => n.id === currentNoteId);
  note.title     = titleInput.value || 'Nota sem título';
  note.content   = editor.innerHTML;
  note.updatedAt = new Date().toISOString();
  saveNotes();
  isModified     = false;
  updateSave('saved');
  renderNotesList();
}

function saveCurrentNote() {
  autoSaveCurrentNote();
  notify('Nota salva com sucesso!', 'success');
}

function deleteCurrentNote() {
  if (!currentNoteId) return;
  const note = notes.find(n => n.id === currentNoteId);
  if (!note || !confirm(`Excluir "${note.title}"?`)) return;
  notes = notes.filter(n => n.id !== currentNoteId);
  saveNotes();
  if (notes.length === 0) createNewNote();
  else selectNote(notes[0].id);
  renderNotesList();
  notify('Nota excluída!', 'success');
}

function duplicateNote() {
  if (!currentNoteId) return;
  const note = notes.find(n => n.id === currentNoteId);
  const dup  = {
    ...note,
    id: new Date().toISOString(),
    title: `${note.title} (Cópia)`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  notes.unshift(dup);
  saveNotes();
  renderNotesList();
  selectNote(dup.id);
  notify('Nota duplicada!', 'success');
}

function renderNotesList() {
  notesList.innerHTML = '';
  const filtered = getFilteredNotes();
  if (filtered.length === 0) {
    notesList.innerHTML = '<div style="opacity:.6; text-align:center;">Nenhuma nota encontrada</div>';
    return;
  }
  filtered.forEach(n => {
    const el = document.createElement('div');
    el.className = 'note-item' + (n.id === currentNoteId ? ' active' : '');
    el.onclick   = () => selectNote(n.id);
    const preview = n.content.replace(/<[^>]+>/g,'').replace(/\n/g,' ').slice(0, 100);
    const date    = new Date(n.updatedAt).toLocaleString('pt-BR');
    el.innerHTML = `
      <div class="note-title">${n.title}</div>
      <div class="note-date">${date}</div>
      ${preview ? `<div class="note-preview">${preview}...</div>` : ''}
    `;
    notesList.appendChild(el);
  });
}

function getFilteredNotes() {
  let list = [...notes];
  const term = searchInput.value.toLowerCase();
  if (term) {
    list = list.filter(n =>
      n.title.toLowerCase().includes(term) ||
      n.content.toLowerCase().includes(term)
    );
  }
  const filter = document.querySelector('.filter-btn.active').dataset.filter;
  const now    = new Date();
  if (filter !== 'all') {
    list = list.filter(n => {
      const updated = new Date(n.updatedAt);
      if (filter === 'today') return updated.toDateString() === now.toDateString();
      if (filter === 'week')  return updated >= new Date(now - 7*24*60*60*1000);
      if (filter === 'month') return updated >= new Date(now - 30*24*60*60*1000);
      return true;
    });
  }
  return list.sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt));
}

function filterNotes() {
  renderNotesList();
}

// — Atualizações de UI —
function updateWordCount() {
  const text  = editor.textContent.trim();
  const words = text ? text.split(/\s+/).length : 0;
  const chars = text.length;
  wordCountEl.textContent = `${words} palavras • ${chars} caracteres`;
}

function updateSave(status) {
  const icon = saveStatus.querySelector('i');
  const lbl  = saveStatus.querySelector('span');
  saveStatus.className = `save-status ${status}`;
  if (status === 'saving') {
    icon.className   = 'fas fa-spinner fa-spin';
    lbl.textContent  = 'Salvando...';
  } else {
    icon.className   = 'fas fa-check';
    lbl.textContent  = 'Salvo';
  }
}

// — Inserção de data/hora —
function insertDateTime() {
  const now = new Date().toLocaleString('pt-BR');
  document.execCommand('insertHTML', false, `<div>--- ${now} ---</div>`);
  markModified();
}

// — Formatação inline —
function formatText(cmd) {
  editor.focus();
  document.execCommand(cmd);
  markModified();
}

// — Download nota atual —
function downloadCurrentNote() {
  if (!currentNoteId) return;
  const note = notes.find(n => n.id === currentNoteId);
  const text = `${note.title}\n${'='.repeat(note.title.length)}\n\n` +
               note.content.replace(/<[^>]+>/g,'');
  if (!text.trim()) return notify('Não há conteúdo para baixar!', 'warning');
  const blob = new Blob([text], { type: 'text/plain' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href      = url;
  a.download  = `${note.title.replace(/[^a-z0-9]/gi,'_')}.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  notify('Nota baixada com sucesso!', 'success');
}

// — Imprimir nota atual —
function printCurrentNote() {
  if (!currentNoteId) return;
  const note = notes.find(n => n.id === currentNoteId);
  const w    = window.open('', '_blank');
  w.document.write(`
    <html><head><title>${note.title}</title>
    <style>
      body{font-family:Arial;padding:20px;}
      h1{color:#DA291C;border-bottom:2px solid #DA291C;}
    </style></head><body>
      <h1>${note.title}</h1>
      <div>${note.content}</div>
    </body></html>
  `);
  w.document.close();
  w.print();
  w.close();
}

// — Exportar todas as notas —
function exportAllNotes() {
  if (notes.length === 0) return notify('Não há notas para exportar!', 'warning');
  let data = `BACKUP DE NOTAS - ${new Date().toLocaleString('pt-BR')}\n\n`;
  notes.forEach((n,i) => {
    data += `NOTA ${i+1}: ${n.title}\n`;
    data += `${'-'.repeat(30)}\n`;
    data += n.content.replace(/<[^>]+>/g,'') + '\n\n';
  });
  const blob = new Blob([data], { type: 'text/plain' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `backup_notas.txt`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  notify(`${notes.length} notas exportadas!`, 'success');
}

// — Notificações flutuantes —
function notify(msg, type = 'success') {
  alertText.textContent = msg;
  const icon = alertBox.querySelector('i');
  if (type === 'warning') {
    icon.className        = 'fas fa-exclamation-triangle';
    alertBox.style.background = 'linear-gradient(135deg,#f59e0b,#d97706)';
  } else {
    icon.className        = 'fas fa-check-circle';
    alertBox.style.background = 'var(--gradient-primary)';
  }
  alertBox.classList.remove('d-none');
  alertBox.classList.add('show');
  setTimeout(() => {
    alertBox.classList.remove('show');
    setTimeout(() => alertBox.classList.add('d-none'), 400);
  }, 3000);
}
