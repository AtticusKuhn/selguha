import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { InitialState, setState } from "../redux";
import { parse } from "../time/time";

const Startup: React.FC<{}> = ({ children }) => {
    const disp = useDispatch();
    useEffect(() => {
        //@ts-ignore
        window.parse = parse;
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