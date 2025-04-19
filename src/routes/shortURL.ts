import  express  from "express";

const router  = express.Router();
import {createURL,getallURL,getURL,deleteURL} from "../controllers/shortUrl";

router.put("/shortURL",createURL);


router.get("/shortURL",getallURL);
router.get("/shortURL/:id",getURL);
router.delete("/shortURL/:id",deleteURL);




export default router;

