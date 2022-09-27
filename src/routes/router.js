import {Router} from 'express';

import * as userController from '../controllers/userController';
import * as paymentsBoxController from '../controllers/paymentBoxController';
import * as routeController from '../controllers/routeController';
import * as clientController from '../controllers/clientController';
import * as creditController from '../controllers/creditController';
import * as paymentController from '../controllers/paymentController';
import * as expenseController from '../controllers/expenseController';

const router = Router()

//routes users
router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:id', userController.getUserById);
router.post('/api/users/login', userController.login);
router.post('/api/users/create', userController.createUsers);

//routes payments_box

router.post('/api/payment_box/movement', paymentsBoxController.openClosedPaymentBox);
router.get('/api/payment_box/data/:user', paymentsBoxController.getDataPaymentBoxEnd);

//routes routes

router.post('/api/routes/create', routeController.createRoute);
router.get('/api/routes', routeController.getAllRoutes);
router.get('/api/routes/:id', routeController.getRouteById);

//routes clients

router.post('/api/clients/create', clientController.createClient);
router.get('/api/clients', clientController.getAllClients);
router.get('/api/clients/:id', clientController.getClientById);

//routes credits
router.post('/api/credits/create', creditController.createCredit);
router.get('/api/credits', creditController.getAllCredits);
router.get('/api/credits/:id', creditController.getCreditById);

//routes payments

router.post('/api/payments/create', paymentController.createPayment);
router.get('/api/payments', paymentController.getAllPayments);
router.get('/api/payments/:id', paymentController.getPaymentById);

//routes expenses
router.post('/api/expenses/create', expenseController.createExpense);
router.get('/api/expenses', expenseController.getAllExpenses);
router.get('/api/expenses/:id', expenseController.getExpenseById);

export default router;