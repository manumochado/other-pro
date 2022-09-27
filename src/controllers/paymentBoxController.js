import * as controller from './mainController'

export const openClosedPaymentBox = (req, res) => {
    controller.createEntity(req, res, 'payment_box')
}

export const getDataPaymentBoxEnd = (req, res, user) => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const dateToday = `${date.getFullYear()}-${(month < 10) ? '0' + month : month}-${(day < 10) ? '0' + day : day}`

    console.log(dateToday)


    const q1 = `SELECT * FROM payment_box where date = '${dateToday}' AND user = '${req.params.user}'`;
    const q2 = `select sum(payments.amount) as total_day_payments from users, payments, credits where users.id = credits.user and credits.id = payments.credit and payments.date_pay = '${dateToday}' and users.id = '${req.params.user}'`;
    const q3 = `select sum(credits.amount) from users, credits where users.id = credits.user and credits.start_date = '${dateToday}' and users.id = '${req.params.user}'`;
    const q4 = `select sum(expenses.amount) from users, expenses where users.id = expenses.user and expenses.date = '${dateToday}' and users.id = '${req.params.user}'`;
    
    controller.multiQueriesSql(req, res, `${q1} ; ${q2} ; ${q3} ; ${q4}`)

    
    //const baseDay = controller.getFilterDataEntityR(req, res, 'payment_box', 'date = 2022-09-07')
    //const paymentsClients = controller.getSumDataR(req, res, 'payments', 'amount', 'date = 2022-09-07')
    //const creditsDay = controller.getSumDataR(req, res, 'credits', 'amount', 'date = 2022-09-07')
    //const expensesDay = controller.getSumDataR(req, res, 'expenses', 'amount', 'date = 2022-09-07')
}



