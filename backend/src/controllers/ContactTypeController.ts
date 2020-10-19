import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import ContactType from '../models/ContactType';

export default {
  async index(request: Request, response: Response){ //GET que lista todos os tipos de contato
    const contactTypeRepository = getRepository(ContactType);

    const contactType = await contactTypeRepository.find();

    return response.json(contactType);
  },

  async create(request: Request, response: Response){  //POST para criar um tipo de Contato
    const { name } = request.body;

  const contactTypeRepository = getRepository(ContactType);

  const dataContactType ={ name };  

  const contactType = contactTypeRepository.create(dataContactType);//pre-criado
     

  await contactTypeRepository.save(contactType);   //metodo que salva no banco

  return response.status(201).json(contactType);
  }  
  

};