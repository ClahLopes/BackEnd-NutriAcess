import { ALERGIA, AvatarsEnum, CAPACIDADE_FISICA, GENERO, OBJETIVO, RESTRICAO_ALIMENTAR, TEMPO_PREPARO, TIPO } from "../model/FormularioModel"

export type FormularioInputDTO = {
  token?:string,
  objetivo: OBJETIVO,
  genero: GENERO,
  altura: number,
  idade: number,
  peso: number,
  capacidade_fisica: CAPACIDADE_FISICA,
  restricao_alimentar: RESTRICAO_ALIMENTAR,
  tempo_preparo: TEMPO_PREPARO,
  foto: AvatarsEnum ,
  id_cliente: string,
  alergia: ALERGIA,
  plano: TIPO
}

