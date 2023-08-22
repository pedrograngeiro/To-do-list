# integrando o firebase ao python
import requests
from datetime import datetime
import json



def link():
  """
    Metodo para retornar o link do firebase.
  """
  return "https://tokamban-65719-default-rtdb.firebaseio.com/"


def post(dados, link):
  """
    Metodo post para criar um novo item no firebase.
    Sendo dados no formato de dicionario.
  """
  requisicao_mensagem = requests.post(f'{link}/lista/.json', data=json.dumps(dados))
  return requisicao_mensagem.text

def get_all(link):
  """
    Metodo para retornar todos os itens do firebase.
  """
  
  requisicao = requests.get(f'{link}/lista/.json')
  dicio_link = requisicao.json()
  return dicio_link

def get_by_id(id_item, link):
  """
    Metodo para retornar um item do firebase a partir do id.
  """
  
  requisicao = requests.get(f'{link}/lista/{id_item}/.json')
  dicio_link = requisicao.json()
  return dicio_link

def update_by_id(id_item, dados, link):
  """
    Metodo para atualizar um item do firebase a partir do id.
  """
  
  requisicao = requests.patch(f'{link}/lista/{id_item}/.json', data=json.dumps(dados))
  print(f"id atualizado: {id_item}")
  return requisicao.text

def delete(id_item, link):
  """
    Metodo para deletar um item do firebase a partir do id.
  """
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
      "mensagem":"lorem atualizado.",
      "status":False,
      "homologacao":"desenv",
      "created":data_created,
      "update":data_update,
      "concluida":data_concluido,
      "user":'teste'
  }
  link = link()
  # print(get_all(link = link))

  # metodo get por bloco produtos
  requisicao = requests.get(f'{link}/lista/.json')
  dic_requisicao = requisicao.json()
  id_item = None
  for item in dic_requisicao:
      id_item = item
      print(id_item)
  # delete(id_item="-Namcso4YIXQU5-yySK3", link=link)

  update_by_id(id_item="-NamPek9Zu_np2EQ9Bof", dados=dados, link=link)
