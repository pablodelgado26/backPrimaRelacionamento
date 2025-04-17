import collectionModel from "../models/collectionModel.js";

class CollectionController {
  getAll = async (req, res) => {
    try {
      const tarefas = await collectionModel.getAll();
      res.json(tarefas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar tarefas" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const collection = await tarefaModel.getById(Number(id));
      if (!collection) {
        return res.status(404).json({ erro: "collection não encontrada" });
      }
      res.json(collection);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar collection" });
    }
  }

  create = async (req, res) => {
    const { name, description, releaseYear } = req.body;
    try {
        // Validação
        if (!name || !description || !releaseYear) {
            return res.status(400).json({ erro: "Todos os campos (name, description, releaseYear) são obrigatórios" });
        }

        // Criação da coleção
        const novaCollection = await collectionModel.create(name, description, releaseYear);
        res.status(201).json(novaCollection);
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao criar coleção", detalhes: error.message });
    }
};

  update = async (req, res) => {
    const { id } = req.params;
    const { concluida, descricao } = req.body;
    try {
      const tarefaAtualizada = await tarefaModel.update(Number(id), concluida, descricao);
      if (!tarefaAtualizada) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
      }
      res.json(tarefaAtualizada)
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar tarefa" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;
    try {
      const sucesso = await tarefaModel.delete(Number(id));
      if (!sucesso) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
      }
      res.status(200).send({ message: "Tarefa deletada com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao deletar tarefa" });
    }
  };
}
export default new CollectionController();