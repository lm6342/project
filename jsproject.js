var selectedRow = null

function onFormSubmit() {
    var formData=readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
        else 
        updateRecord(formData);

    resetForm();
}
function readFormData(){
    var formData={};
    formData["fullname"] =document.getElementById("fullname").value;
    formData["pw"] =document.getElementById("pw").value;
    return formData;
}
function insertNewRecord(data){
    var table = document.getElementById("pwname").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2=newRow.insertCell(1);
    cell2.innerHTML = data.pw;
    cell3=newRow.insertCell(2);
    cell3.innerHTML = '<a onClick="onEdit(this)"><button>수정</button></a>';
    cell4=newRow.insertCell(3); 
    cell4.innerHTML = '<button>삭제</button>';
}
function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("pw").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("pw").value = selectedRow.cells[1].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.pw;
}
