import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function AdicionarProduto() {

    document.title = "Criar Produtos";

    const navigate = useNavigate();

    const {id} = useParams(); 
    let contadorID = ListaProdutos.length
    let produtoNovo = ListaProdutos.filter( produto => produto.id == (contadorID+1) );
    
    let ultimoElemento = ListaProdutos[contadorID-1]
    let ultimoId = ultimoElemento['id']


    const handleSubmit = (event) =>{
    

    let nome = document.getElementById("idNome").value
    let desc = document.getElementById("idDesc").value
    let preco = document.getElementById("idPreco").value
    let contadorID = ListaProdutos.length
    let ultimoIdNum = parseInt(ultimoId)
    event.preventDefault();
    
        
    produtoNovo = {id: (ultimoIdNum+1), nome: nome, desc: desc, preco: preco, img:'https://picsum.photos/seed/picsum/50/50'}
    
    ListaProdutos.splice(contadorID+1, 0, produtoNovo);

    alert("Produto criado com sucesso!");

    navigate("/produtos")

}
    

    return (

    <div>
        <h1>Adicionar Produtos</h1>

        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Produto a Ser Adicionado</legend>
                    <div>
                        <input type="hidden" name = "id" />
                    </div>
                    <div>
                        <label htmlFor="idNome">Nome:</label>
                        <input type="text" name='Nome' id='idNome' />
                    </div>
                    <div>
                        <label htmlFor="idDesc">Descrição:</label>
                        <input type="text" name='desc' id='idDesc'/>
                    </div>
                    <div>
                        <label htmlFor="idPreco">Preço:</label>
                        <input type="text" name='preco' id='idPreco'/>
                    </div>
                    <div>
                        <button>CRIAR produto</button>
                    </div>
                </fieldset>
            </form>
        </div>


    
    </div>


    )
}
