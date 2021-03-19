import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/SurveyUser";

@EntityRepository(SurveyUser)
class SurveyUsersRepository extends Repository<SurveyUser>{
    static findOne(arg0: { id: string; }) {
        throw new Error("Method not implemented.");
    }
}

export { SurveyUsersRepository };