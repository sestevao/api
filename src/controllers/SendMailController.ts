import { Request, Response } from "express";
import { resolve } from 'path';
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveyRepository } from "../repositories/SurveyRepository";
import { SurveyUsersRepository } from "../repositories/SurveyUsersRepository";
import { UsersRepository } from "../repositories/UserRepository";
import SendMailService from "../services/SendMailService";

class SendMailController{
    async execute(request: Request, response: Response){
        const { email, survey_id } = request.body;

        const usersRepository = getCustomRepository(UsersRepository);
        const surveysRepository = getCustomRepository(SurveyRepository);
        const surveyUsersRepository = getCustomRepository(SurveyUsersRepository);

        //check if the user's email exists
        const userExists = await usersRepository.findOne({ email });
        if(!userExists){
            throw new AppError("User does not exists!");
            //return response.status(400).json({error: "User does not exists!"});
        }

        //checks if the search exists
        const surveyExists = await surveysRepository.findOne({ id: survey_id });
        if(!surveyExists){
            throw new AppError("Survey does not exists!");
            //return response.status(400).json({error: "Survey does not exists!"});
        }
        
        //email to the user
        const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs");
        const variables = {
            name: userExists.name,
            title: surveyExists.title,
            description: surveyExists.description,
            id: "",
            link: process.env.URL_MAIL
        }

        //checks if that search already exists with that user
        const surveyUserExists = await surveyUsersRepository.findOne({
            where: {user_id: userExists.id, value: null},
            relations: ["user", "survey"],
        });        

        if(surveyUserExists){
            variables.id = surveyUserExists.id;

            await SendMailService.execute(email, surveyExists.title, variables, npsPath);
            return response.status(201).json(surveyUserExists);
        }

        //save the information in the survey_user table
        const surveyUser = surveyUsersRepository.create({
            user_id: userExists.id,
            survey_id
        });
        await surveyUsersRepository.save(surveyUser);

        //send email to the user
        variables.id = surveyUser.id;
        
        await SendMailService.execute(email, surveyExists.title, variables, npsPath);
        return response.status(201).json(surveyUser);
    }
}

export { SendMailController };