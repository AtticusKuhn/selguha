import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { InitialState, setState } from "../redux";

const Startup: React.FC<{}> = ({ children }) => {
    const disp = useDispatch();
    useEffect(() => {

        const storage: InitialState = JSON.parse(localStorage.getItem("reduxState"))

        if (storage) {
            storage.default = false;
            disp(setState(storage))
        } else {
            disp(setState(null))
        }


    }, [])
    return <>
        {children}
    </>
}
export default Startup