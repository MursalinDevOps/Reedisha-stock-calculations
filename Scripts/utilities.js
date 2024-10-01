function getValueById(id) {
    const value = parseInt(document.getElementById(id).value);
    return isNaN(value) ? 0 : value;
}

function calcForRow(rowNum) {
    const openingStock = getValueById('opening-stock-' + rowNum);
    const newAdded = getValueById('added-stock-' + rowNum);
    const IMS = getValueById('ims-' + rowNum);

    const closingStock = (openingStock + newAdded) - IMS;

    if ((openingStock + newAdded) < IMS) {
        alert('Invalid IMS amount for row ' + rowNum);
    } else {
        document.getElementById('closing-amount-' + rowNum).innerText = closingStock;
        document.getElementById('box-' + rowNum).checked = true;
    }
}
