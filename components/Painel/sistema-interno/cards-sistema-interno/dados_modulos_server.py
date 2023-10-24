import pandas as pd
import requests
import json
import plotly.express as px
import plotly.graph_objects as go

# URL do Firebase Realtime Database
firebase_url = 'https://tokamban-65719-default-rtdb.firebaseio.com/sistema_interno.json'  # Substitua com o URL correto

# Fazer uma solicitação GET para obter os dados do Firebase
response = requests.get(firebase_url)

if response.status_code == 200:
    data = response.json()
    dados_pastas = pd.DataFrame.from_dict(data).T
else:
    print("Erro ao obter os dados do Firebase")
    dados_pastas = pd.read_csv('dadosPastas.csv', sep=',')

dados_pastas = dados_pastas.dropna(subset=['inicio_ano', 'fim_ano'])

dados_pastas['inicio_ano'] = dados_pastas['inicio_ano'].apply(lambda x: pd.to_datetime(str(int(x)), format='%Y'))
dados_pastas['fim_ano'] = dados_pastas['fim_ano'].apply(lambda x: pd.to_datetime(str(int(x)), format='%Y'))

dados_pastas['duracao'] = (dados_pastas['fim_ano'] - dados_pastas['inicio_ano']).dt.days / 365

dados_txt = dados_pastas[dados_pastas['tipo'].str.contains('txt')]

# Encontre a duração máxima
duracao_maxima = dados_pastas['duracao'].max()

# Defina as cores com base na duração
color_discrete_sequence = px.colors.qualitative.Plotly


fig = px.timeline(
    dados_txt,
    x_start='inicio_ano',
    x_end='fim_ano',
    y='estado',
    color='tipo',
    color_continuous_scale=color_discrete_sequence,
    labels={'inicio_ano': 'Início', 'fim_ano': 'Fim', 'duracao': 'Duração (Anos)'}
)

# Definir as dimensões da figura (2000x1000 pixels)
fig.update_layout(
    autosize=True,
    width=2000,
    height=1000
)

fig.update_layout(
    title="Linhas do Tempo das Pastas por Estado",
    xaxis_title="Ano",
    yaxis_title="Estado"
)

# fig.show()

# Salvar o gráfico como um arquivo SVG
fig.write_image("grafico_pastas.svg")
# Salvar o gráfico como um arquivo SVG
fig.write_image("grafico_pastas.png", format="png")