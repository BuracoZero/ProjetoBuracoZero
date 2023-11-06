import { IDenuncia } from "../../../screens/SuasDenuncias";
import { api } from "../../api";

class DenunciaData{
    index(){
        return api.get<IDenuncia[]>('/denuncia')
    }
    store(data: IDenuncia) {
        return api.post('/denuncia', data)
    }
    delete(id: number) {
        return api.delete(`/denuncia/${id}`)
    }
}
export default new DenunciaData()