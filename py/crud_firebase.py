# integrando o firebase ao python
import requests
from datetime import datetime
import json



def link():
  """
    Metodo para retornar o link do firebase.
  """
  return "https://tokamban-65719-default-rtdb.firebaseio.com/"


def post(dados):
  """
    Metodo post para criar um novo item no firebase.
    Sendo dados no formato de dicionario.
  """
  link = link()
  requisicao_mensagem = requests.post(f'{link}/lista/.json', data=json.dumps(dados))
  return requisicao_mensagem.txt

def get_all(link):
  """
    Metodo para retornar todos os itens do firebase.
  """
  
  requisicao = requests.get(f'{link}/lista/.json')
  dicio_link = requisicao.json()
  return dicio_link

def get_by_id(id_item):
  """
    Metodo para retornar um item do firebase a partir do id.
  """
  link = link()
  requisicao = requests.get(f'{link}/lista/{id_item}/.json')
  dicio_link = requisicao.json()
  return dicio_link

def update_by_id(id_item, dados):
  """
    Metodo para atualizar um item do firebase a partir do id.
  """
  link = link()
  requisicao = requests.patch(f'{link}/lista/{id_item}/.json', data=json.dumps(dados))
  return requisicao.text

def delete(id_item):
  """
    Metodo para deletar um item do firebase a partir do id.
  """
  link = link()
  requisicao = requests.delete(f'{link}/lista/{id_item}/.json')
  print(f"id apagado: {id_item}")
  return requisicao.text


if __name__ == '__main__':
  data_hoje = datetime.today()
  data_created = data_hoje.strftime("%d/%m/%Y")
  data_update = data_hoje.strftime("%d/%m/%Y")
  data_concluido = data_hoje.strftime("%d/%m/%Y")
  # metodo (post)
  dados = {
      "mensagem":"mensagem criada",
      "status":True,
      "homologacao":"desenv",
      "created":data_created,
      "update":data_update,
      "concluida":data_concluido,
      "user":'0rakul0'
  }
  link = link()
  print(get_all(link=link))

  # # metodo get por bloco produtos
  # requisicao = requests.get(f'{link}/lista/.json')
  # dic_requisicao = requisicao.json()
  # id_item = None
  # for item in dic_requisicao:
  #     id_item = item

