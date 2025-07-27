// Array to store invoice items
let invoiceItems = [];

/**
 * Custom message box function to replace alert().
 * Displays a simple modal-like message.
 * @param {string} message - The message to display.
 */
function showCustomMessage(message) {
    const messageBox = document.createElement('div');
    messageBox.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); z-index: 1000; text-align: center;';
    messageBox.innerHTML = `<p>${message}</p><button onclick="this.parentNode.remove()" style="margin-top: 15px; padding: 8px 15px; background-color: #4f46e5; color: white; border: none; border-radius: 5px; cursor: pointer;">OK</button>`;
    document.body.appendChild(messageBox);
}

/**
 * Adds an item to the invoice list on the main page.
 * Validates inputs, calculates item total, and updates the display.
 */
function addItemToList() {
    const itemNameInput = document.getElementById('itemName');
    const itemQtyInput = document.getElementById('itemQty');
    const itemPriceInput = document.getElementById('itemPrice');

    const name = itemNameInput.value.trim();
    const qty = parseInt(itemQtyInput.value);
    const price = parseFloat(itemPriceInput.value);

    // Basic validation
    if (!name || isNaN(qty) || qty <= 0 || isNaN(price) || price <= 0) {
        showCustomMessage('Please enter valid Product Name, Quantity (greater than 0), and Unit Price (greater than 0).');
        return;
    }

    const total = (qty * price).toFixed(2); // Calculate total for the item

    invoiceItems.push({ name, qty, price: price.toFixed(2), total });
    updateItemsTable();

    // Clear inputs after adding
    itemNameInput.value = '';
    itemQtyInput.value = '1';
    itemPriceInput.value = '';
    itemNameInput.focus(); // Focus back to item name for quick entry
}

/**
 * Removes an item from the invoice list based on its index.
 * Updates the display table afterwards.
 * @param {number} index - The index of the item to remove.
 */
function removeItem(index) {
    invoiceItems.splice(index, 1);
    updateItemsTable();
}

/**
 * Updates the table displaying added items and calculates grand totals.
 */
function updateItemsTable() {
    const tableBody = document.getElementById('itemsTableBody');
    tableBody.innerHTML = ''; // Clear existing rows

    let totalItemsCount = 0;
    let grandTotalPrice = 0;

    if (invoiceItems.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" class="py-4 text-center text-gray-500">No items added yet.</td></tr>`;
    } else {
        invoiceItems.forEach((item, index) => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td class="py-2 px-4 border-b border-gray-200">${item.name}</td>
                <td class="py-2 px-4 border-b border-gray-200">${item.qty}</td>
                <td class="py-2 px-4 border-b border-gray-200 text-right">$${item.price}</td>
                <td class="py-2 px-4 border-b border-gray-200 text-right">$${item.total}</td>
                <td class="py-2 px-4 border-b border-gray-200">
                    <button onclick="removeItem(${index})" class="text-red-600 hover:text-red-800 font-medium text-sm">Remove</button>
                </td>
            `;
            totalItemsCount += item.qty;
            grandTotalPrice += parseFloat(item.total);
        });
    }

    document.getElementById('totalItemsCount').textContent = totalItemsCount;
    document.getElementById('grandTotalPrice').textContent = grandTotalPrice.toFixed(2);
}

/**
 * Generates the invoice in a new tab.
 * It constructs the full HTML content for the new tab, including styling,
 * the logo, company details, item table, and PDF export functionality.
 */
function generateInvoiceInNewTab() {
    if (invoiceItems.length === 0) {
        showCustomMessage('Please add at least one item to generate an invoice.');
        return;
    }

    // Store items in localStorage so the new tab can access them
    localStorage.setItem('currentInvoiceItems', JSON.stringify(invoiceItems));

    const newTab = window.open('', '_blank');

    // Calculate totals for the new tab
    let newTabTotalItemsCount = 0;
    let newTabGrandTotalPrice = 0;
    invoiceItems.forEach(item => {
        newTabTotalItemsCount += item.qty;
        newTabGrandTotalPrice += parseFloat(item.total);
    });

    // Construct the table rows for the new tab
    let tableRowsHtml = '';
    if (invoiceItems.length === 0) {
        tableRowsHtml = `<tr><td colspan="4" style="text-align: center; padding: 1rem; color: #6b7280;">No items in this invoice.</td></tr>`;
    } else {
        invoiceItems.forEach(item => {
            tableRowsHtml += `
                <tr>
                    <td>${item.name}</td>
                    <td class="text-right">${item.qty}</td>
                    <td class="text-right">$${item.price}</td>
                    <td class="text-right">$${item.total}</td>
                </tr>
            `;
        });
    }

    // Full HTML content for the new tab
    const newTabContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Your Invoice</title>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
            <style>
                body {
                    font-family: 'Inter', sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f0f4f8;
                    -webkit-print-color-adjust: exact; /* For better print output */
                    color-adjust: exact; /* For better print output */
                }
                .invoice-container {
                    padding: 2rem;
                    max-width: 800px;
                    margin: 2rem auto;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }
                .invoice-header {
                    margin-bottom: 2rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid #eee;
                }
                .invoice-header-row1 {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    margin-bottom: 1rem;
                }
                .invoice-logo {
                    width: 300px;
                    height: auto;
                    max-height: 300px;
                    flex-shrink: 0;
                    border-radius: 8px;
                    background-color: #e0e7ff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    color: #4f46e5;
                    font-size: 1.5rem;
                    overflow: hidden;
                }
                .invoice-logo img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
                .invoice-details-name {
                    flex-grow: 1;
                }
                .invoice-details-name h1 {
                    font-size: 3.5rem;
                    font-weight: 700;
                    color: #1e40af;
                    margin-bottom: 0;
                }
                .invoice-header-row2 h2 {
                    font-size: 1rem;
                    color: #4b5563;
                    line-height: 1.5;
                    margin-bottom: 0.25rem;
                }
                .invoice-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .invoice-table th, .invoice-table td {
                    border: 1px solid #e5e7eb;
                    padding: 0.75rem;
                    text-align: left;
                }
                .invoice-table th {
                    background-color: #f3f4f6;
                    font-weight: 600;
                    color: #374151;
                }
                .invoice-table tfoot td {
                    font-weight: 700;
                    background-color: #f9fafb;
                }
                .invoice-table .text-right {
                    text-align: right;
                }
                .pdf-button-container, .llm-button-container {
                    text-align: center;
                    margin-top: 2rem;
                }
                .pdf-button {
                    background-color: #22c55e;
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    cursor: pointer;
                    border: none;
                    transition: background-color 0.2s ease-in-out;
                }
                .pdf-button:hover {
                    background-color: #16a34a;
                }
                .llm-button {
                    background-color: #8b5cf6; /* Purple for LLM feature */
                    color: white;
                    padding: 0.75rem 1.5rem;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    cursor: pointer;
                    border: none;
                    transition: background-color 0.2s ease-in-out;
                }
                .llm-button:hover {
                    background-color: #7c3aed;
                }
                .llm-output {
                    margin-top: 1.5rem;
                    padding: 1rem;
                    background-color: #f9fafb;
                    border: 1px dashed #d1d5db;
                    border-radius: 0.5rem;
                    color: #374151;
                    font-size: 0.9rem;
                    line-height: 1.5;
                    min-height: 50px; /* Ensure space for content */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
                @media print {
                    .pdf-button-container, .llm-button-container {
                        display: none; /* Hide buttons when printing */
                    }
                    body {
                        background-color: #fff; /* White background for print */
                    }
                    .invoice-container {
                        box-shadow: none; /* No shadow in print */
                        margin: 0;
                        border-radius: 0;
                        max-width: none;
                    }
                }
            </style>
        </head>
        <body>
            <div class="invoice-container" id="invoiceContent">
                <div class="invoice-header">
                    <div class="invoice-header-row1">
                        <div class="invoice-logo">
                            <!-- Placeholder for your logo -->
                            <img src="https://placehold.co/300x300/4f46e5/ffffff?text=LOGO" alt="Company Logo" onerror="this.onerror=null;this.src='https://placehold.co/300x300/e0e7ff/4f46e5?text=LOGO';" />
                        </div>
                        <div class="invoice-details-name">
                            <h1>The Name</h1>
                        </div>
                    </div>
                    <div class="invoice-header-row2">
                        <h2>123 Main Street, Anytown, CA 90210</h2>
                        <h2>Phone: (123) 456-7890 | Email: info@thename.com</h2>
                    </div>
                </div>

                <h3 style="font-size: 1.5rem; font-weight: 600; color: #374151; margin-bottom: 1rem;">Invoice Details</h3>

                <table class="invoice-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th class="text-right">Qty</th>
                            <th class="text-right">Unit Price</th>
                            <th class="text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRowsHtml}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2" style="font-weight: 700;">Total Items: ${newTabTotalItemsCount}</td>
                            <td colspan="2" class="text-right" style="font-weight: 700;">Grand Total: $${newTabGrandTotalPrice.toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>

                <div class="llm-button-container">
                    <button class="llm-button" onclick="window.opener.generateInvoiceNote('${newTabGrandTotalPrice.toFixed(2)}', '${newTabTotalItemsCount}')">✨ Generate Invoice Note</button>
                </div>
                <div id="llmOutput" class="llm-output">
                    Click "✨ Generate Invoice Note" to get a custom message!
                </div>

                <div class="pdf-button-container">
                    <button class="pdf-button" onclick="saveAsPdf()">Save as PDF</button>
                </div>
            </div>

            <!-- html2pdf.js CDN -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
            <script>
                // This script runs inside the new tab

                /**
                 * Function to save the invoice content as a PDF.
                 * It uses the html2pdf.js library to convert the 'invoiceContent' div.
                 * The filename now includes the current date and time.
                 */
                function saveAsPdf() {
                    const element = document.getElementById('invoiceContent');
                    const now = new Date();
                    const year = now.getFullYear();
                    const month = String(now.getMonth() + 1).padStart(2, '0');
                    const day = String(now.getDate()).padStart(2, '0');
                    const hours = String(now.getHours()).padStart(2, '0');
                    const minutes = String(now.getMinutes()).padStart(2, '0');
                    const seconds = String(now.getSeconds()).padStart(2, '0');
                    const filename = 'invoice_' + year + '-' + month + '-' + day + '_' + hours + '-' + minutes + '-' + seconds + '.pdf';

                    html2pdf().from(element).save(filename);
                }

                /**
                 * Calls the Gemini API to generate an invoice note.
                 * This function is called from the main window's context,
                 * but it updates the content in this new tab.
                 * @param {string} totalAmount - The grand total of the invoice.
                 * @param {string} totalItems - The total number of items in the invoice.
                 */
                async function generateInvoiceNote(totalAmount, totalItems) {
                    const llmOutputDiv = document.getElementById('llmOutput');
                    llmOutputDiv.innerHTML = '<div class="flex items-center justify-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Generating note...</div>';

                    const prompt = `Generate a polite and professional thank-you note for an invoice totaling $${totalAmount} for ${totalItems} items. Include a brief mention of standard payment terms (e.g., 'Payment due within 30 days'). Keep it concise and suitable for an invoice.`;

                    let chatHistory = [];
                    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
                    const payload = { contents: chatHistory };
                    const apiKey = ""; // Leave as-is, Canvas will provide it
                    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

                    try {
                        const response = await fetch(apiUrl, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(payload)
                        });
                        const result = await response.json();

                        if (result.candidates && result.candidates.length > 0 &&
                            result.candidates[0].content && result.candidates[0].content.parts &&
                            result.candidates[0].content.parts.length > 0) {
                            const text = result.candidates[0].content.parts[0].text;
                            llmOutputDiv.textContent = text;
                        } else {
                            llmOutputDiv.textContent = 'Failed to generate note. Please try again.';
                            console.error('Gemini API response structure unexpected:', result);
                        }
                    } catch (error) {
                        llmOutputDiv.textContent = 'Error connecting to the API. Please check your network and try again.';
                        console.error('Error calling Gemini API:', error);
                    }
                }
            </script>
        </body>
        </html>
    `;

    newTab.document.write(newTabContent);
    newTab.document.close(); // Close the document to ensure content is rendered
}

// Initial call to update the table when the page loads
document.addEventListener('DOMContentLoaded', updateItemsTable);
