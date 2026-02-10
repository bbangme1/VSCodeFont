
var clickBtn = document.getElementById('chartBt');

clickBtn.onclick = function() {
    var nameInput = document.getElementById('itemName');
    var countInput = document.getElementById('itemCount');
    var table = document.querySelector('.chartTable tbody');

    var nameValue = nameInput.value;
    var countValue = countInput.value;

    if (nameValue == "") {
        alert("내용을 입력해주세요!");
        return;
    }

    var newRow = document.createElement('tr');

    newRow.innerHTML = "<td>-</td>" + 
                       "<td>" + nameValue + "</td>" + 
                       "<td>" + countValue + "</td>" + 
                       "<td><input type='checkbox'></td>";

    table.appendChild(newRow);

    nameInput.value = "";
    countInput.value = "";
};