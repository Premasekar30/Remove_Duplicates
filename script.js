function removeDuplicates() {
    const input = document.getElementById("arrayInput").value;
    const array = input.split(',').map(Number);
    const uniqueArray = [...new Set(array)];
    document.getElementById("result").textContent = `Unique values: [${uniqueArray.join(', ')}]`;
}
