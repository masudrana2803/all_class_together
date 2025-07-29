document.addEventListener('DOMContentLoaded', () => {
    const buyerNameInput = document.getElementById('buyerName');
    const buyerAddressTextarea = document.getElementById('buyerAddress');
    const itemNameInput = document.getElementById('itemName');
    const quantityInput = document.getElementById('quantity');
    const priceInput = document.getElementById('price');
    const addItemButton = document.getElementById('addItem');
    const itemTableBody = document.getElementById('itemTableBody');
    const totalBillSpan = document.getElementById('totalBill');
    const printInvoiceButton = document.getElementById('printInvoice');

    let items = [];

    // Function to render items in the table
    function renderItems() {
        itemTableBody.innerHTML = ''; // Clear existing rows
        let totalBill = 0;

        items.forEach((item, index) => {
            const row = itemTableBody.insertRow();
            const itemTotal = item.quantity * item.price;
            totalBill += itemTotal;

            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>BDT${item.price.toFixed(2)}</td>
                <td>BDT${itemTotal.toFixed(2)}</td>
                <td>
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </td>
            `;
        });

        totalBillSpan.textContent = totalBill.toFixed(2);
    }

    // Function to add an item
    addItemButton.addEventListener('click', () => {
        const itemName = itemNameInput.value.trim();
        const quantity = parseInt(quantityInput.value);
        const price = parseFloat(priceInput.value);

        if (itemName && quantity > 0 && price >= 0) {
            items.push({ name: itemName, quantity: quantity, price: price });
            renderItems();
            // Clear item input fields
            itemNameInput.value = '';
            quantityInput.value = '1';
            priceInput.value = '0.00';
        } else {
            alert('Please enter valid item name, quantity, and price.');
        }
    });

    // Function to handle edit and delete actions
    itemTableBody.addEventListener('click', (event) => {
        const target = event.target;
        const index = target.dataset.index;

        if (target.classList.contains('edit-btn')) {
            const itemToEdit = items[index];
            itemNameInput.value = itemToEdit.name;
            quantityInput.value = itemToEdit.quantity;
            priceInput.value = itemToEdit.price.toFixed(2);
            items.splice(index, 1); // Remove the item, so it can be re-added after editing
            renderItems();
        } else if (target.classList.contains('delete-btn')) {
            if (confirm('Are you sure you want to delete this item?')) {
                items.splice(index, 1);
                renderItems();
            }
        }
    });

    // Function to convert number to words
    const numberToWords = (num) => {
        const a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
        const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        const numStr = num.toFixed(2).split('.'); // Split into integer and decimal parts
        let integerPart = Math.floor(num);
        let decimalPart = parseInt(numStr[1]);

        let words = '';

        if (integerPart > 0) {
            const n = ('000000000' + integerPart).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
            if (n) {
                words += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[Number(n[1][1])]) + 'crore ' : '';
                words += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[Number(n[2][1])]) + 'lakh ' : '';
                words += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[Number(n[3][1])]) + 'thousand ' : '';
                words += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[Number(n[4][1])]) + 'hundred ' : '';
                words += (n[5] != 0) ? ((words != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[Number(n[5][1])]) : '';
            }
        } else {
            words = 'zero ';
        }
        
        if (decimalPart > 0) {
            const nDecimal = ('00' + decimalPart).substr(-2).match(/^(\d{2})$/);
            if (nDecimal) {
                const centsWords = (a[Number(nDecimal[1])] || b[nDecimal[1][0]] + ' ' + a[Number(nDecimal[1][1])]);
                words += (words.trim() !== '' ? ' and ' : '') + centsWords + ' paisa';
            }
        }

        return words.trim() + ' Taka Only';
    };


    // Function to generate and print the invoice
    printInvoiceButton.addEventListener('click', () => {
        const buyerName = buyerNameInput.value.trim();
        const buyerAddress = buyerAddressTextarea.value.trim();
        const companyName = "SF Jacquard Solution"; // Replace with your company name
        const companyAddress = "Shop#8, Ambia Soroni Market <br> Boardbazar, Gazipur <br> Phone:01839-158932;01934-510458"; // Replace with your company address
        const companyLogo = "images/image1.jpg"; // Replace with your logo URL (300px width)

        if (!buyerName || !buyerAddress || items.length === 0) {
            alert('Please enter buyer name and address, and add at least one item before printing.');
            return;
        }

        let currentTotal = 0;
        items.forEach(item => {
            currentTotal += item.quantity * item.price;
        });

        const amountInWords = numberToWords(currentTotal);
        const printDate = new Date().toLocaleDateString('en-BD'); // Format for Bangladesh date

        let invoiceContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Invoice</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                        color: #000;
                    }
                    .invoice-header {
                        display: flex;
                        // justify-content: space-between;
                        align-items: center;
                        margin-bottom: 30px;
                    }
                    .invoice-header img {
                        max-width: 300px; /* Logo width */
                        height: auto;
                        margin-right:150px;
                        border-radius: 10px;

                        }
                    .company-info {
                        text-align: left;
                    }
                    .company-info h2 {
                        margin: 0;
                        color: #333;
                    }
                    .company-info p {
                        margin: 5px 0;
                    }
                    .buyer-info {
                        margin-top: 20px;
                        margin-bottom: 30px;
                        border: 1px solid #eee;
                        padding: 15px;
                        background-color: #f9f9f9;
                    }
                    .buyer-info h3 {
                        margin-top: 0;
                    }
                    .item-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 20px;
                    }
                    .item-table th, .item-table td {
                        border: 1px solid #ccc;
                        padding: 8px;
                        text-align: left;
                    }
                    .item-table th {
                        background-color: #f2f2f2;
                    }
                    .total-section {
                        text-align: right;
                        margin-top: 20px;
                    }
                    .total-section p {
                        margin: 5px 0;
                        font-size: 1.1em;
                    }
                    .amount-in-words {
                        margin-top: 20px;
                        font-style: italic;
                    }
                    .print-date {
                        text-align: right;
                        margin-top: 50px;
                        font-size: 0.9em;
                    }

                    .invoice-footer {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 150px;
                    }


                </style>
            </head>
            <body>
                <div class="invoice-header">
                    <img src="${companyLogo}" alt="Company Logo">
                    <div class="company-info">
                        <h2>${companyName}</h2>
                        <p>${companyAddress}</p>
                    </div>
                </div>

                <div class="buyer-info">
                    <h3>Bill To:</h3>
                    <p><strong>Name:</strong> ${buyerName}</p>
                    <p><strong>Address:</strong><br>${buyerAddress.replace(/\n/g, '<br>')}</p>
                </div>

                <table class="item-table">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price per Unit</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        items.forEach(item => {
            const itemTotal = item.quantity * item.price;
            invoiceContent += `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.quantity}</td>
                            <td>BDT ${item.price.toFixed(2)}</td>
                            <td>BDT ${itemTotal.toFixed(2)}</td>
                        </tr>
            `;
        });

        invoiceContent += `
                    </tbody>
                </table>

                <div class="total-section">
                    <p><strong>Grand Total:</strong> BDT ${currentTotal.toFixed(2)}</p>
                </div>
                <div class="amount-in-words">
                    <p>Amount in Words: ${amountInWords}</p>
                </div>

                <div class="invoice-footer">
                <div class="received">
                    <p>Received by:____________</p>
                </div>
                <div class="authorised">
                    <p>Authorised by:____________</p>
                </div>
                </div>


                <div class="print-date">
                    <p>Print Date: ${printDate}</p>
                </div>





            </body>
            </html>
        `;

        const printWindow = window.open('', '_blank');
        printWindow.document.write(invoiceContent);
        printWindow.document.close();
        printWindow.print();
    });

    renderItems(); // Initial render to show empty table
});