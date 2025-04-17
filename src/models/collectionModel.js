import prisma from "../../prisma/client.js";

class CollectionModel {
  getAll = async () => {
    return await prisma.collection.findMany();
  }

  getById = async (id) => {
    return await prisma.collection.findUnique({
      where: { id },
    });
  };

  create = async (name, description, releaseYear) => {
    return await prisma.collection.create({
      data: {
        name,
        description,
        releaseYear,
      },
    });
  };

  update = async (id, concluida) => {
    try {
      const tarefa = await prisma.collection.update({
        where: { id },
        data: {
          concluida: concluida !== undefined ? concluida : true,
        }
      });
      return tarefa;
    } catch (error) {
      console.log("Error", error);
      throw error
    }
  };

  delete = async (id) => {
    try {
      const tarefaDeletada = await prisma.collection.delete({
        where: { id },
      });
      return tarefaDeletada;
    } catch (error) {
      console.error("Error ao deletar a tarefa!", error);
      throw error;
    }
  };
}
export default new CollectionModel();
