 document.getElementById('regForm').addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('formContainer').style.display = 'none';
            document.getElementById('successScreen').classList.remove('hidden');
        });