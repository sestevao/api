import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveyUsersRepository } from "../repositories/SurveyUsersRepository";

/**
 * 
 * route params => parameters that make up the route
 * e.g.: routes.get(/answers/:value)
 * query param  => search, pagination, not required
 * ?
 * key = value
*/

//http://localhost:3333/answer/6?u=ada9ed75-50c6-4a30-9211-033a4116d725

class AnswerController{
    async execute(request: Request, response: Response){
        const { value }= request.params;
        const { u } = request.query;

        const surveyUsersRepository = getCustomRepository(SurveyUsersRepository);
        const surveyUser = await surveyUsersRepository.findOne({
            id: String(u),
        });

        if(!surveyUser){
            throw new AppError("Survey User does not exists!");
            // return response.status(400).json({
            //     error: "Survey user does not exists!"
            // });
        }

        surveyUser.value = Number(value);

        await surveyUsersRepository.save(surveyUser);
        return response.status(201).json(surveyUser);
    }
}

export { AnswerController };