import { TopBackground } from './styles' 
import UsersImage from "../../assets/users.png"


function BannerImage(){

    return(
        <TopBackground>
            <img src={UsersImage} alt='Imagem-usuários' />
        </TopBackground>
    )
}

export default BannerImage