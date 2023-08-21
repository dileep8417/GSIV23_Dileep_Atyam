import { useDispatch, useSelector } from "react-redux"
import Offline from "../components/Offline";
import { useEffect } from "react";
import { setIsOffline } from "../slices/moviesListSlice";

const withOfflineEnabled = (WrapperComponent) => {
    return (props) => {
        const { isOffline } = useSelector(state => state.moviesList);

        const dispatch = useDispatch();

        useEffect(() => {
            const isOffline = navigator ? !navigator.onLine : false;
            dispatch(setIsOffline(isOffline));
        }, []);

        if (isOffline) {
            return <Offline />
        }

        return <WrapperComponent {...props} />
    }
}

export default withOfflineEnabled;