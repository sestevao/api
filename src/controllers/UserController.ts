import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as yup from 'yup';
import { UsersRepository } from '../repositories/UserRepository';
import { AppError } from '../errors/AppError';

class UserController{
    async create(request: Request, response: Response){
        const { name, email } = request.body;
        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
        });

        // if(!(await schema.isValid(request.body))){
        //     return response.status(400).json({error: "validation failed!"});
        // }

        try{
            await schema.validate(request.body, {abortEarly: false});
        }catch(err){
            throw new AppError(err);
            //return response.status(400).json({error: err});
        }

        const userRepository = getCustomRepository(UsersRepository);
        
        //SELECT * FROM users WHERE email = 'email'
        const isUser = await userRepository.findOne({
            email
        });
        
        if(isUser){
            throw new AppError("User already exists!");
            //return response.status(400).json({error: "User already exists!"});
        }

        const user = userRepository.create({
            name, email
        });

        await userRepository.save(user);
        return response.status(201).json(user);
    }

    async show(request: Request, response: Response){
        const userRepository = getCustomRepository(UsersRepository);
        const all = await userRepository.find();
        return response.status(201).json(all);
    }
}

export { UserController };