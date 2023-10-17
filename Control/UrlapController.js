import UrlapModel from "../Model/UrlapModel.js"
import UrlapView from "../View/UrlapView.js"

class UrlapController{
    constructor(){
        const URLAPMODEL = new UrlapModel();
        new UrlapView($(".urlap"), URLAPMODEL.leiro);
    }

} export default UrlapController