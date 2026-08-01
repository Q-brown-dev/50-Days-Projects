   let expenses =
            JSON.parse(localStorage.getItem("expenses")) || [];

        function saveExpenses() {
            localStorage.setItem(
                "expenses",
                JSON.stringify(expenses)
            );
        }

        function renderExpenses() {

            const list = document.getElementById("expenseList");

            list.innerHTML = "";

            let total = 0;

            expenses.forEach((expense, index) => {

                total += Number(expense.amount);

                const li =
                    document.createElement("li");

                li.innerHTML = `
<span>
${expense.name} - ₦${expense.amount}
</span>

<button
class="delete"
onclick="deleteExpense(${index})">
Delete
</button>
`;

                list.appendChild(li);

            });

            document.getElementById("total").textContent =
                total;

        }

        function addExpense() {

            const name =
                document.getElementById("expenseName").value;

            const amount =
                document.getElementById("expenseAmount").value;

            if (name === "" || amount === "") {
                alert("Please fill all fields.");
                return;
            }

            expenses.push({
                name,
                amount
            });

            saveExpenses();
            renderExpenses();

            document.getElementById("expenseName").value = "";
            document.getElementById("expenseAmount").value = "";
        }

        function deleteExpense(index) {

            expenses.splice(index, 1);

            saveExpenses();
            renderExpenses();

        }

        renderExpenses();
