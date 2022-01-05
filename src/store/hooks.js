import Context from "./ConText";
import { useContext } from "react";

export const useStore = () => {
    const [state, dispatch] = useContext(Context);
    return [state, dispatch];
}