let editMode = false;

function toggleEdit() {
    editMode = !editMode;
    const editables = document.querySelectorAll('.editable');
    const editBtn = document.querySelector('.edit-btn');
    
    editables.forEach(element => {
        element.contentEditable = editMode;
        if (editMode) {
            element.style.cursor = 'text';
        } else {
            element.style.cursor = 'default';
        }
    });
    
    if (editMode) {
        editBtn.textContent = '저장';
        editBtn.style.background = '#34C759';
    } else {
        editBtn.textContent = '편집 모드';
        editBtn.style.background = '#B05730';
        saveChanges();
    }
}

function saveChanges() {
    const content = document.documentElement.outerHTML;
    localStorage.setItem('portfolioContent', content);
    console.log('변경사항이 로컬 스토리지에 저장되었습니다.');
}

document.addEventListener('DOMContentLoaded', function() {
    const editables = document.querySelectorAll('.editable');
    
    editables.forEach(element => {
        element.addEventListener('paste', function(e) {
            e.preventDefault();
            const text = e.clipboardData.getData('text/plain');
            document.execCommand('insertText', false, text);
        });
    });
});