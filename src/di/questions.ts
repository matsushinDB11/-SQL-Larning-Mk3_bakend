import QuestionsController from "../controller/questions";
import { questionUsecase } from "../usecase/questions/endpoint";
import QuestionsInfra from "../infra/repository/questions";
import PrismaInfra from "../infra/repository/PrismaInfra";

const CreateQuestionsController = (): QuestionsController => {
    const i = new questionUsecase(new QuestionsInfra(), new PrismaInfra());
    return new QuestionsController(i);
};

export default CreateQuestionsController;
