import { Router } from 'express';
import { SendMailController } from './controllers/SendMailController';
import { UserController } from './controllers/UserController';
import { SurveyController } from './controllers/SurveyController';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';

const router = Router();
const usersController = new UserController();
const surveysController = new SurveyController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();


router.post('/users', usersController.create);
router.get('/users', usersController.show);

router.post('/surveys', surveysController.create);
router.get('/surveys', surveysController.show);

router.post('/sendMail', sendMailController.execute);

router.get('/answers/:value', answerController.execute);

router.get('/nps/:survey_id', npsController.execute);

export { router };